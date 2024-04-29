import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { slug, page = 1 } = req.body;
  const take = 10;
  const skip = take * (page - 1);

  try {
    const collection = await prisma.collection.findUnique({
      where: { slug },
      include: {
        parent: true, // Fetch parent information if available
        children: {
          select: { id: true }, // Fetch only the IDs of the children if it is a parent
        },
      },
    });

    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }

    // Determine if the collection is a parent based on the presence of children
    const isParent = collection.children && collection.children.length > 0;

    const where = {
      isPublished: true,
      // Use parent ID if the current collection is a child, otherwise use children IDs if it's a parent
      collection: isParent
        ? { id: { in: collection.children.map((child) => child.id) } }
        : { id: collection.id },
    };

    const [products, totalCount] = await prisma.$transaction([
      prisma.product.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          discountPercentage: true,
          deliveryFormat: true,
          imageURL: true,
          slug: true,
          collection: {
            select: {
              name: true,
              parent: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        where,
        orderBy: { id: 'asc' },
        take,
        skip,
      }),
      prisma.product.count({ where }),
    ]);

    res.status(200).json({
      currentCollection: collection,
      products: products.map((product) => ({
        ...product,
        collectionName: product.collection.name,
        parentCollectionName: product.collection.parent?.name,
      })),
      totalCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

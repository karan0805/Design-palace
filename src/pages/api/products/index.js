import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { page = 1, gte = 0, lte = 1000000 } = req.body;

  const take = 10;
  const skip = take * (page - 1);

  const where = {
    isPublished: true,
    price: { gte, lte },
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
            id: true,
            name: true,
            slug: true,
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
    products: products.map((product) => ({
      ...product,
      collectionName: product.collection.name,
      parentCollectionName: product.collection.parent
        ? product.collection.parent.name
        : null,
    })),
    totalCount,
  });
}

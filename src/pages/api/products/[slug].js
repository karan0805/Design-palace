import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }

  const productdetail = await prisma.product.findFirst({
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      discountPercentage: true,
      deliveryFormat: true,
      isPublished: true,
      imageURL: true,
      sourceURL: true,
      collection: {
        select: {
          id: true,
          name: true,
          slug: true,
          parent: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
    },
    where: {
      slug: slug,
    },
  });

  if (!productdetail) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json({
    productdetail: {
      ...productdetail,
      parentCollectionName: productdetail.collection.parent
        ? productdetail.collection.parent.name
        : null,
      parentCollectionSlug: productdetail.collection.parent
        ? productdetail.collection.parent.slug
        : null,
    },
  });
}

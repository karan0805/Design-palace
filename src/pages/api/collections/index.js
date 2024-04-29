import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const collections = await prisma.collection.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      children: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
    where: {
      parent: null,
    },
    orderBy: { id: 'asc' },
  });
  res.status(200).json(collections);
}

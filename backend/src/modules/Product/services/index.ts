import { PrismaClient, Product } from "@prisma/client";

export class ProductService {
  async create({
    name,
    price,
    quantity,
    image,
    description,
  }: Omit<Product, "id" | "createdAt">) {
    const prisma = new PrismaClient();

    const product = await prisma.product.create({
      data: {
        name,
        price,
        quantity,
        image,
        description,
      },
    });
    return product;
  }

  async update(id: string, quantity: number) {
    const prisma = new PrismaClient();

    const productExists = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!productExists) {
      throw new Error("this product wasn't found");
    }

    const product = await prisma.product.update({
      data: {
        quantity,
      },
      where: {
        id,
      },
    });
    return product;
  }

  async getAll() {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany();
    return products;
  }

  async getById(id: string) {
    const prisma = new PrismaClient();
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    return product;
  }

  async delete(id: string) {
    const prisma = new PrismaClient();
    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}

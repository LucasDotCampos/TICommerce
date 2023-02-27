import { PrismaClient, Product } from "@prisma/client";
import { IProduct } from "../models";

export class ProductService {
  async create({ name, price, quantity, image }: IProduct) {
    const prisma = new PrismaClient();

    const product = await prisma.product.create({
      data: {
        name,
        price,
        quantity,
        image,
      },
    });
    console.log("chegou");
    return product;
  }

  async update(id: string, quantity: number) {
    const prisma = new PrismaClient();

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
}

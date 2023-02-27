import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { ProductService } from "../services";

export class ProductController {
  async create(request: Request, response: Response) {
    try {
      const productService = new ProductService();
      const { name, price, quantity } = request.body;
      const product = await productService.create({
        name,
        price: Number(price),
        quantity: Number(quantity),
        image: request.file?.filename!,
      });
      return response.json(product);
    } catch (err: any) {
      return response.json(err.message);
    }
  }
}

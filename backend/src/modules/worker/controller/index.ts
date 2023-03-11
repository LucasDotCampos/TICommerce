import { Request, Response } from "express";
import { Worker } from "@prisma/client";
import { WorkerService } from "../services";
export class WorkerController {
  async create(request: Request, response: Response) {
    try {
      const { cpf, password }: Worker = request.body;
      const workerService = new WorkerService();
      const worker = await workerService.create({ cpf, password });
      return response.json(worker);
    } catch (err: any) {
      err.message.includes("Unique constraint")
        ? response.status(409).json("this cpf is already registered")
        : null;
    }
  }

  async createSession(request: Request, response: Response): Promise<Response> {
    try {
      const { cpf, password } = request.body;
      const sessionService = new WorkerService();
      const session = await sessionService.createSession({
        cpf,
        password,
      });
      return response.status(200).json(session);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }
}

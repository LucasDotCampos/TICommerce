import { PrismaClient } from "@prisma/client";
import { IWorker } from "../models";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import authConfig from "../../config/authConfig";

export class WorkerService {
  async create({ cpf, password }: IWorker) {
    const prisma = new PrismaClient();
    const passwordHashed = await bcrypt.hash(password, 10);
    const user = await prisma.worker.create({
      data: {
        cpf,
        password: passwordHashed,
      },
    });

    return user;
  }

  async createSession({ cpf, password }: IWorker) {
    const prisma = new PrismaClient();
    const user = await prisma.worker.findFirst({
      where: {
        cpf,
      },
    });

    if (!user) {
      console.log("não encontrou");
      throw new Error("email/password incorrent");
    }

    const passwordConfirmed = await bcrypt.compare(password, user.password);

    if (!passwordConfirmed) {
      console.log("user registered", user.password, "password", password);
      throw new Error("email/password incorrect");
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });
    return {
      user,
      token,
    };
  }
}

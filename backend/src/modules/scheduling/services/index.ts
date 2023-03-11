import { PrismaClient, Schedule } from "@prisma/client";

export class SchedulingService {
  async create({
    client,
    schedule,
    cellphone,
    address,
    hour,
    services,
  }: Omit<Schedule, "id" | "status" | "createdAt">) {
    const prisma = new PrismaClient();
    const thisDate = new Date();
    const inputDate = new Date(`${schedule}T${hour}`);

    if (inputDate.getTime() < thisDate.getTime()) {
      throw new Error("Cannot schedule this date");
    }

    const scheduling = await prisma.schedule.create({
      data: {
        client,
        schedule: new Date(schedule),
        hour,
        cellphone,
        address,
        services,
      },
    });
    return scheduling;
  }
}

import { Router } from "express";
import isAuthenticated from "../../../shared/middlewares/isAuthenticated";
import { SchedulingController } from "../controller";

export const schedullingRoutes = Router();

const schedulingController = new SchedulingController();

schedullingRoutes.post("/", schedulingController.create);

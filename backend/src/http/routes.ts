import { Router } from "express";
import multer from "multer";
import multerConfig from "../modules/config";
import { ProductController } from "../modules/Product/controller";
import { WorkerController } from "../modules/worker/controller";
import isAuthenticated from "../shared/middlewares/isAuthenticated";
import productRoutes from "../modules/Product/routes";
import { schedullingRoutes } from "../modules/scheduling/routes";

export const router = Router();

const upload = multer(multerConfig);

const workerController = new WorkerController();
router.post("/create", workerController.create);
router.post("/session", workerController.createSession);

router.use("/product", productRoutes);
router.use("/schedule", schedullingRoutes);

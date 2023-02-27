import { Router } from "express";
import multer from "multer";
import multerConfig from "../modules/config";
import { ProductController } from "../modules/Product/controller";
import { WorkerController } from "../modules/worker/controller";
import isAuthenticated from "../shared/middlewares/isAuthenticated";

export const router = Router();

const upload = multer(multerConfig);

const productController = new ProductController();
const workerController = new WorkerController();

router.post("/create", workerController.create);
router.post("/session", workerController.createSession);
router.post(
  "/product",
  isAuthenticated,
  upload.single("image"),
  productController.create
);

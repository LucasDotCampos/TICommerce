import { Router } from "express";
import multer from "multer";
import isAuthenticated from "../../../shared/middlewares/isAuthenticated";
import { ProductController } from "../controller";
import multerConfig from "../../config";

const productRoutes = Router();
const productController = new ProductController();
const upload = multer(multerConfig);

productRoutes.get("/", productController.getAll);
productRoutes.get("/:id", productController.getById);
productRoutes.delete("/delete/:id", isAuthenticated, productController.delete);
productRoutes.post(
  "/",
  isAuthenticated,
  upload.single("image"),
  productController.create
);
productRoutes.patch("/patch", isAuthenticated, productController.update);

export default productRoutes;

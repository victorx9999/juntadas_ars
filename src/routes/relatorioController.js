import routerx from "express-promise-router";
import CorrespondenciaController from "../controllers/CorrespondenciaController";

const router = routerx();

export default router;

router.post("/", /**auth.verifyUsuario,*/ CorrespondenciaController.add);
router.get("/", /** auth.verifyUsuario,*/ CorrespondenciaController.list);
router.get(
  "/search/:termo",
  /**auth.verifyUsuario,*/ CorrespondenciaController.search
);
router.post(
  "/upload/:id",
  /**auth.verifyUsuario,*/ CorrespondenciaController.upload
);

export default router;

import { Router } from "express";
import teamRouter from "./teamRoutes";
import matchRouter from "./matchRoutes";


const routes = Router()

routes.use("/team", teamRouter);
routes.use("/match", matchRouter)

export default routes
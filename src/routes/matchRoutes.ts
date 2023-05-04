import MatchController from "../controllers/MatchController";
import { Router } from "express";


const routes = Router();

routes.get('/', MatchController.findMatches);
routes.get('/:id', MatchController.findMatchesById);
routes.post('/', MatchController.createMatch);
routes.put('/', MatchController.updateMatch);
routes.delete('/', MatchController.deleteMatch);


export default routes;
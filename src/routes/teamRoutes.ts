import TeamController from "../controllers/TeamController";
import { Router } from "express";


const routes = Router();


routes.get('/', TeamController.findTeams);
routes.get('/:termo', TeamController.findTeamByTermo);
routes.post('/', TeamController.createTeam);
routes.put('/', TeamController.updateTeam);
routes.delete('/', TeamController.deleteTeam);


export default routes;
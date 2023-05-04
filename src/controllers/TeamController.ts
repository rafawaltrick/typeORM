import { Request, Response } from 'express';
import ServiceTeam from '../services/ServiceTeam';


class TeamController{
    public async findTeams(req:Request, res:Response): Promise<Response>{
        try{
            const teams = await ServiceTeam.find();
            return res.json(teams);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async findTeamByTermo(req:Request, res:Response){
        try{
            const termo = req.params.termo;
            const teams = await ServiceTeam.findByTermo(termo)
            return res.json(teams);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async createTeam(req:Request, res:Response){
        try{
            const { name } = req.body;
            if(!name || name.trim() === ""){
                throw "Nome necessário"
            }
            const team = await ServiceTeam.create(name);
            return res.json(team);
        }catch(error){
            res.status(500).json(error);
        }
    } 

    public async updateTeam(req:Request, res:Response){
        try{
            const { id, name } = req.body;
            const team = await ServiceTeam.update(Number(id), name);
            return res.json(team);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async deleteTeam(req:Request, res:Response){
        try{
            const { id } = req.body;
            const data = await ServiceTeam.delete(id);
            return res.json(data);
        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default new TeamController();
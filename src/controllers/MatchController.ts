import { Request, Response } from 'express';
import ServiceMatch from '../services/ServiceMatch';


class MatchController{
    public async findMatches(req:Request, res:Response): Promise<Response>{
        try{
            const matches = await ServiceMatch.find(req.body);
            return res.json(matches)
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async findMatchesById(req:Request, res:Response): Promise<Response>{
        try{
            const id = Number(req.params.id);
            const matches = await ServiceMatch.findById(id);
            return res.json(matches);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async createMatch(req:Request, res:Response): Promise<Response>{
        try{
            const { idhost, idvisitor } = req.body;
            const match = await ServiceMatch.create(idhost, idvisitor);
            return res.json(match);
        }catch(error){
            res.status(500).json(error);
        }
    } 

    public async updateMatch(req:Request, res:Response){
        try{
            const {id, idhost, idvisitor, date} = req.body;
            const match = await ServiceMatch.update(id, idhost, idvisitor, date);
            return res.json(match);
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async deleteMatch(req:Request, res:Response){
        try{
            const { id } = req.body;
            const data = await ServiceMatch.delete(id);
            return res.json(data);
        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default new MatchController();
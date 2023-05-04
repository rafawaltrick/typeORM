import Match from '../entities/Match';
import Team from '../entities/Team';
import db from '../config/db';


class ServiceMatch{
    public async find({ limit, offset }:{limit:number, offset:number}){
        try{
            const matches = await db.getRepository(Match).find({
                relations:{
                    host:true,
                    visitor:true
                },
                order:{
                    date:"DESC"
                },
                skip:offset,
                take:limit
            });
            return matches
        }catch(error){
            throw error;
        }
    }

    public async findById(id:number){
        try{
            const matches = await db.getRepository(Match).find({
                where:[
                    {
                        host:{
                            id: id
                        }
                    },
                    {
                        visitor:{
                            id: id
                        }
                    }
                ],
                relations:{
                    host:true,
                    visitor:true
                }
            })
            return matches;
        }catch(error){
            throw error;
        }
    }

    public async create(idhost:number, idvisitor:number){
        try{
            const host = await db.getRepository(Team).findOneBy({id:idhost});
            const visitor = await db.getRepository(Team).findOneBy({id:idvisitor});
            const match = new Match();
            match.host = host;
            match.visitor = visitor;
            match.date = new Date();
            await db.getRepository(Match).save(match);
            return match;
        }catch(error){
            throw error;
        }
    } 

    public async update(id:number, idhost:number, idvisitor:number, date:Date){
        try{
            const host = await db.getRepository(Team).findOne({where:{id:idhost}});
            const visitor = await db.getRepository(Team).findOne({where:{id:idvisitor}});
            if(!host){
                throw "Mandante desconhecido";
            }
            if(!visitor){
                throw "Visitante desconhecido";
            }
            const match = await db.getRepository(Match).findOneBy({id:id});
            match.date = date;
            match.visitor = visitor;
            match.host = host;
            return match;
        }catch(error){
            throw error;
        }
    }

    public async delete(id:number){
        try{
            const data = db.createQueryBuilder().delete().from(Match).where("id=:id", {id}).execute();
            return data
        }catch(error){
            throw error;
        }
    }
}

export default new ServiceMatch()
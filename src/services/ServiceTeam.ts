import Team from '../entities/Team';
import db from '../config/db';
import { Like } from 'typeorm';


class ServiceTeam{
    public async find(){
        try{
            const teams = await db.getRepository(Team).find({
                order:{
                    name: "ASC"
                }
            });
            return teams
        }catch(error){
            throw error;
        }
    }

    public async findByTermo(termo: string){
        try{
            const teams = await db.getRepository(Team).find({
                where:{
                    name: Like(`%${termo}%`)
                }
            });
            return teams;
        }catch(error){
            throw error;
        }
    }

    public async create(name: string){
        try{
            const team = new Team();
            team.name = name;
            await db.getRepository(Team).save(team);
            return team;
        }catch(error){
            throw 'O nome já existe';
        }
    } 

    public async update(id: number, name: string){
        try{
            const exist = await db.getRepository(Team).exist({
                where:{
                    name: name
                }
            })
            if(exist){
                throw 'O nome já existe';
            }
            const team = await db.getRepository(Team).findOneBy({id:id});
            team.name = name;
            await db.getRepository(Team).save(team);
            return team;
        }catch(error){
            throw error;
        }
    }

    public async delete(id: number){
        try{
            const data = await db.createQueryBuilder().delete().from(Team).where("id=:id", {id}).execute();
            return data;
        }catch(error){
            throw error;
        }
    }
}

export default new ServiceTeam();
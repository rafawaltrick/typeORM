import * as express from "express";
import {Request} from "express";
import * as cors from 'cors';
import * as dotenv from "dotenv"
import db from "./config/db";
dotenv.config();

const PORT = process.env.PORT || 3004

const app = express();

db.initialize().then(async(connection)=> {
    console.log("Banco de Dados conectado...");
}). catch ((error)=>{
    console.error('Banco de dados não conectado, erro:', error);
});

app.use(express.json());
app.use(cors<Request>());
app.listen(PORT, () =>console.log(`Rodando na porta ${PORT}`));


app.get("/caminho", (req,res) =>res.send("Método HTTP GET"));
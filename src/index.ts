import * as express from "express";
import {Request} from "express";
import * as cors from 'cors';
import * as dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3004

const app = express();
app.use(express.json());
app.use(cors<Request>());
app.listen(PORT, () =>console.log(`Rodando na porta ${PORT}`));


app.get("/caminho", (req,res) =>res.send("Método HTTP GET"));
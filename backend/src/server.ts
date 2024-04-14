import express, { Router } from 'express';
import cors from "cors";
import morgan from "morgan";
import fileUpload from "express-fileupload"

interface Options {
  port: number;
  routes: Router;
}


export class Server {

  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  
  
  async start() {
    
    this.app.use( express.json() );
    this.app.use(cors());

    this.app.use(fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
    }));
    this.app.use(express.json())
    this.app.use(morgan("dev"))
    
    this.app.use( this.routes );
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });

  }

}
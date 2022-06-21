import express, { Application} from 'express';
import morgan from 'morgan';


class App {
    public express: Application;
    public port: number;

    constructor( port: number) {
        this.express = express();
        this.port = port;
              
    }

    private initialiseMiddleware(): void {  
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
  
    }
 
    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;

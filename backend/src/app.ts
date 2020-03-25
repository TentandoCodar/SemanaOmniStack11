import express, { Application } from 'express';
import 'dotenv/config';
import router from './routes';


class App {
    server: Application;
    port: number;
    constructor() {
        this.server = express();
        this.port = parseInt(process.env.SERVER_PORT);
        this.middlewares();
        this.router();
    }

    router() {
        this.server.use(router);
    }

    middlewares() {
        this.server.use(express.json());
    }

    ignite() {
        this.server.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }
}

export default new App;
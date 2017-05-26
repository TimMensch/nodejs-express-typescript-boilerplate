"use strict";
import { IndexRoutes } from './routes';
import { UsersRoutes } from './routes/users';

import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from "http";
import * as cors from "cors";
import * as morgan from "morgan";


import { logger } from "./helpers/winston";

class HttpServer {
    public app: express.Application;

    public static bootstrap(): HttpServer {
        return new HttpServer();
    }
    constructor() {
        this.app = express();
        logger.info("building server");

        // Configure express and logging
        this.ExpressConfiguration();

        // Configure routes
        this.app.use("/api/users", UsersRoutes());
        this.app.use("/api/index", IndexRoutes())
    }
    private ExpressConfiguration() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        //cors settings
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
            next && next();
        });
        this.app.use(cors());

        // Morgan settings
        this.app.use(morgan("dev"));
    }
}

// Now initialize app based on HttpServer Class,we defined.
const port: number = process.env.PORT || 8080;
let httpserver = HttpServer.bootstrap();
let app = httpserver.app;
app.set("port", port);

// Now initialize server from App
const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);



/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    console.log("Listening on " + bind);
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

"use strict";
import * as express from "express";

class Users {
    all(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'All: Users AS JSON'});
    }

    get(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'GET: Users'});
    }

    post(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'POST: Users'});
    }

    put(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'PUT: Users'});
    }

    delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'DELETE: Users'});
    }
    patch(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'PATCH: Users'});
    }
    options(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'OPTIONS: Users'});
    }
    head(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'users', message:'HEAD: Users'});
    }
}

export function UsersRoutes() {
    const router = express.Router();
    const users = new Users();
    router.get("/all", users.all.bind(users.all));
    router.get("/", users.get.bind(users.get));
    router.post("/", users.post.bind(users.post));
    //        router.put("/", users.put.bind(users.put));
    router.delete("/", users.delete.bind(users.delete));
    return router;
}
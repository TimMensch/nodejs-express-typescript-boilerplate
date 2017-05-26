"use strict";
import * as express from "express";

class Index {
    all(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'All: Index'});
    }

    get(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'GET: Index'});
    }

    post(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'POST: Index'});
    }

    put(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'PUT: Index'});
    }

    delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'DELETE: Index'});
    }
    patch(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'PATCH: Index'});
    }
    options(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'OPTIONS: Index'});
    }
    head(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({title:'index', message:'HEAD: Index'});
    }
}

export function IndexRoutes() {
    const router = express.Router();
    var index = new Index();
    router.get("/all", index.all.bind(index.all));
    router.get("/", index.get.bind(index.get));
    router.post("/", index.post.bind(index.post));
    //        .router.put("/", index.put.bind(index.put));
    router.delete("/", index.delete.bind(index.delete));
    return router;
}


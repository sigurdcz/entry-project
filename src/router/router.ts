import defaultRouter from "./default.router";
import apiRouter from "./api/api.router";
import printRoutes from '../service/router.service'

export const router = (app) => {
    app.use(`/api/v1`, apiRouter);
    app.use(`/`, defaultRouter);

    printRoutes(app._router);
}
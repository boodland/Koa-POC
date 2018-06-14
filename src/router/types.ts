import { IMiddleware as RoutesHandler } from 'koa-router'

export interface Routable {
    getRoutes() : RoutesHandler;
}
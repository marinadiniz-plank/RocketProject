import { Request, Response } from "express";

export interface IController <Entity>{
    get(req: Request, res: Response): Promise<Entity | undefined>;
    getAll(req: Request, res: Response): Promise<Entity[] | undefined>;
    create(req: Request, res: Response): Promise<Entity | undefined>;
    update(req: Request, res: Response): Promise<void | undefined>;
    delete(req: Request, res: Response): Promise<void | undefined>;
}
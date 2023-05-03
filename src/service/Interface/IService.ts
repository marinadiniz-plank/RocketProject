export interface IService <Entity>{
    get(id: number): Promise<Entity>;
    getAll(): Promise<Entity[]>;
    create(entity: Entity): Promise<void>;
    update(id: number, entity: Entity): Promise<void>;
    delete(id: number): Promise<void>;
}
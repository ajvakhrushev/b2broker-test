export interface IAppChild {
    id: string;
    color: string;
}

export class AppChild implements IAppChild {
    constructor(
        public id: string,
        public color: string
    ) {}
}

import { BigFloat32, BigFloat53 } from "bigfloat";
import { IAppChild } from "./AppChild";

export interface IAppRow {
    id: string;
    int: bigint;
    float: BigFloat32;
    color: string;
    child: IAppChild;
}

export interface IAppServerRow {
    id: string;
    int: string;
    float: string;
    color: string;
    child: IAppChild;
}

export class AppRow implements IAppRow {
    constructor(
        public id: string,
        public int: bigint,
        public float: BigFloat32,
        public color: string,
        public child: IAppChild
    ) {}
}

import { BigFloat32 } from "bigfloat";
import { AppChild } from "./AppChild";

export interface IAppRow {
    id: string;
    int: bigint;
    float: BigFloat32;
    color: string;
    child: AppChild;
}

export interface IAppServerRow {
    id: string;
    int: string;
    float: string;
    color: string;
    child: AppChild;
}

export class AppRow implements IAppRow {
    constructor(
        public id: string,
        public int: bigint,
        public float: BigFloat32,
        public color: string,
        public child: AppChild
    ) {}
}

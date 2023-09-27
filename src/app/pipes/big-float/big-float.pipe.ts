import { Pipe, PipeTransform } from '@angular/core';
import { BigFloat32 } from 'bigfloat';

@Pipe({
    name: 'bigFloat',
})
export class BigFloatPipe implements PipeTransform {
    transform(value: BigFloat32): string {
        return value ? value.toString(10).substring(0, 20) : '';
    }
}

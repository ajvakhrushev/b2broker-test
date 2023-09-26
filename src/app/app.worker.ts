/// <reference lib="webworker" />

import { BigFloat32 } from "bigfloat";
import { IAppRow, IAppServerRow } from "./models/AppRow";
import { interval, Subscription } from "rxjs";

let pseudoSocketSubscription$: Subscription = null;
let size: number = 1000;
let timer: number = 300;

addEventListener('message', ({ data }) => {
  switch (data.type) {
    case 'size':
      size = data.value;

      launchPseudoSocket();

      break;
    case 'timer':
      timer = data.value;

      launchPseudoSocket();

      break;
    case 'start':
      launchPseudoSocket();

      break;
  }
});

function launchPseudoSocket(): void {
  if (pseudoSocketSubscription$) {
    pseudoSocketSubscription$.unsubscribe();
  }

  pseudoSocketSubscription$ = interval(timer).subscribe(() => postMessage(generateData(size)));
}

function generateRandomInt(min = 0, max = 1000000000000) {
  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}

function generateRandomColor(): string {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1,6);
}

function generateData(size: number) {
  const out: IAppServerRow[] = [];

  for (let i = 0; i < size; i++) {
    const id = (i + 1).toString();

    out.push({
      id,
      int: BigInt(generateRandomInt()).toString(10),
      float: (new BigFloat32(Math.random()).toString(10)).substring(0, 20),
      color: generateRandomColor(),
      child: {
        id,
        color: generateRandomColor(),
      },
    });
  }

  return out.slice(-10);
}

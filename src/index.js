// Collects values from the past as an array, and
// emits that array only when another Observable emits.

import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

const myButtonElement = document.getElementById('myButton');
const myButton$ = fromEvent(myButtonElement, 'click');
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(myButton$));

buffered.subscribe(x => console.log(x));

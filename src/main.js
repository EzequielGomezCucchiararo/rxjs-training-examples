import { fromEvent } from 'rxjs';

const myButtonElement = document.getElementById('myButton');
const myButton$ = fromEvent(myButtonElement, 'click');

myButton$
  .subscribe(e => {
    console.log(e.target);
  });

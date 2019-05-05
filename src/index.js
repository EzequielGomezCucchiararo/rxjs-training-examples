import { fromEvent } from 'rxjs';
import { map, scan, tap } from 'rxjs/operators';

const myButtonElement = document.getElementById('myButton');
const myButton$ = fromEvent(myButtonElement, 'click');

myButton$
  .pipe(
    map(() => 1),
    tap(() => console.log('Button clicked!')),
    scan((acc, current) => acc + current)
  )
  .subscribe(count => {
    console.log(count);
  });

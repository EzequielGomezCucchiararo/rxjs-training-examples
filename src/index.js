<<<<<<< HEAD
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
    console.log(`Total clicks: ${count}`);
  });
=======
// --- EXAMPLE 1: PURE FUNCTIONS ---

// VANILLA:
let count = 0;

document.addEventListener(
  'click',
  () => console.log(`Clicked ${++count} times`)
);

// RXJS
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`));

// --- EXAMPLE 2: FLOW ---
// VANILLA:
let count = 0;
let rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});

// RXJS
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Clicked ${count} times`));

>>>>>>> tutorial

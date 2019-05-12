// --- EXAMPLE 1: PURE FUNCTIONS ---
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

// VANILLA:
let count = 0;

document.addEventListener(
  'click',
  () => console.log(`Clicked ${++count} times`)
);

// RXJS
fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => {
    console.log(`Clicked ${count} times`)
  });

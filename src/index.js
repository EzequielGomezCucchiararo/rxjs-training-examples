import { Observable } from 'rxjs';

const countToTenObservable = new Observable(subscriber => {
  let value = 0;

  setInterval(() => {
    if (value > 10) {
      subscriber.complete();
    } else if (value > 5) {
      subscriber.error('Error!');
    } else {
      subscriber.next(value++);
    }
  }, 1000);
});

countToTenObservable.subscribe({
  next(value) { console.log(value); },
  error(err) { console.error('Something wrong occurred: ' + err); },
  complete() { console.log('Done!'); }
});

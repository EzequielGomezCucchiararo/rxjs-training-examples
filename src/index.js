import { Observable } from 'rxjs';

const countToTenObservable = new Observable(subscriber => {
  let value = 0;

  setInterval(() => {
    if (value > 10) {
      subscriber.complete();
    } else {
      subscriber.next(value++);
    }
  }, 1000);
});

countToTenObservable.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('Completed!')
);

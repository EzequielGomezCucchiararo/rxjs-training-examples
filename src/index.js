import { fromEvent, from } from 'rxjs';
import { map, tap, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

const inputElement = document.getElementById('search');

const searchGithub = (query) =>
  fetch(`https://api.github.com/search/users?q=${query}`)
    .then(data => data.json());

let input$ = fromEvent(inputElement, 'input');

input$.pipe(
  debounceTime(350),
  map(e => e.target.value),
  distinctUntilChanged(),
  filter(query => query.length >= 2 || query.length === 0),
  switchMap(value => value ?
    from(searchGithub(value)) : from(Promise.resolve({items: []}))
  ),
  map(response => response.items.slice(0, 5)),
).subscribe(items =>  {
  items.forEach(item => console.log(item.login));
});

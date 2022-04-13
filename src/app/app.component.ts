import { Component } from '@angular/core';
import { map, filter, take, reduce } from 'rxjs/operators';
import { interval, pipe } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  //check the app for notes on these rxjs operators and make sure to open the console on developer tools
  ngOnInit() {
    interval(1000)
      .pipe(
        take(5),
        filter((x) => x % 2 == 0),
        map((v) => Date.now())
      )
      .subscribe((value) => console.log('Subscriber: ' + value));
  }
}

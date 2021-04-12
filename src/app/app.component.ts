import { Component } from "@angular/core";
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        take(5),
        map(v => Date.now())
      )
      .subscribe(value => console.log("Subscriber: " + value));
  }
}

import { Component, OnInit } from '@angular/core';
import { from, Observable, range } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let ob = new Observable((observer) => {
      console.log("Test");
      observer.next(1);
      observer.next(2);

      setTimeout(() => {
        observer.next(3);
      }, 1000);

      setTimeout(() => {
        // observer.error("Failed to push new data");
        observer.next(3);
        observer.next(4);
        observer.next(3);
        observer.next(3);
      }, 2000);

      setTimeout(() => {
        observer.next(5);
        observer.complete();
      }, 4000);
    });

    let sub$ = ob
      .pipe(
        distinctUntilChanged(),
        //  map((item: number) => item * 2),
        // filter(item => item > 3),
      )
      .subscribe(
        (data) => console.log("First -- ", data), //success
        (err) => console.warn("First", err),// error
        () => console.log("First complete")  //complete
      );

    ob.subscribe(data => console.log("Second -- ", data));

    setTimeout(() => {
      console.log("Unsubscribing now...")
      sub$.unsubscribe();
    }, 3000);

from([1,2,3,4,5,6,7,89,9,232,2,23,23,23,23,32,2,32,3])
.subscribe(data=>console.log("Array ", data));

range(1,20).subscribe(data=>console.log("Range ",data));
  }




}

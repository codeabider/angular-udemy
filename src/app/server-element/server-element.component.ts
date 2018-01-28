import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // @Input() element: {'type': string, 'name': string, 'content': string};
  @Input() name: string;
  constructor() {
    console.log("Inside constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Inside ngOnChanges");
    console.log(changes);
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
  }

  ngDoCheck() {
    console.log("Inside ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("Inside ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Inside ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("Inside ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("Inside ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Inside ngOnDestroy");
  }

}

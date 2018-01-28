import { Component, ViewEncapsulation, ElementRef, ViewChild, OnInit } from '@angular/core';
// import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class AppComponent implements OnInit {
  serverElements = [];
  // @ViewChild(CockpitComponent) cockpitComp: ElementRef;

  ngOnInit() {
  }

  onServerAdded(serverObj: {newServerName: string, newServerContent: string}) {
    this.serverElements.push({
      // console.log(this.cockpitComp);
      type: 'server',
      name: serverObj.newServerName,
      content: serverObj.newServerContent
    });
  }

  onBlueprintAdded(blueprintObj: {newServerName: string, newServerContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintObj.newServerName,
      content: blueprintObj.newServerContent
    });
  }

  onFirstChange(): void {
    this.serverElements[0].name = 'Changed';
  }

  onFirstDestroy(): void {
    this.serverElements.splice(0, 1);
  }

}

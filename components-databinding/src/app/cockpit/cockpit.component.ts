import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{newServerName: string, newServerContent: string}>();
  @Output() blueprintAdded = new EventEmitter<{newServerName: string, newServerContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverInput) {
    console.log(serverInput);
    this.serverAdded.emit({
      newServerName: this.newServerName,
      newServerContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({
      newServerName: this.newServerName,
      newServerContent: this.newServerContent});
  }

}

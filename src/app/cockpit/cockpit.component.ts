import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{newServerName: string, newServerContent: string}>();
  @Output('bpAdded') blueprintAdded = new EventEmitter<{newServerName: string, newServerContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('severContentInput') severContentInput: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(severNameInput: HTMLInputElement) {
    this.serverAdded.emit({
      // newServerContent: this.newServerContent,
      newServerContent: this.severContentInput.nativeElement.value,
      newServerName: severNameInput.value
    });
  }

  onAddBlueprint(severNameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      newServerContent: this.severContentInput.nativeElement.value,
      newServerName: severNameInput.value
    });
  }

}

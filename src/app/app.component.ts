import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = "";
  isEmpty:boolean = true;
  title = 'app';
  formData: string = 'Harshita';
  isActive: boolean = false;
  fruits: any = ['apple', 'banana', 'orange'];
  getFormData(input: any): void {
    // console.log(input);
    this.formData = (<HTMLInputElement>input.target).value;
  }
  onSubmit():void {
  
    this.username = '';
  }
  constructor() {
    // this.formData = 'Harshita';
    // console.log(this.formData);
  }

  toggleList(): void {
    this.isActive = !this.isActive;
  }
}

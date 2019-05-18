import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  defaultQuestion: string = 'teacher';
  answer: string = '';

  //using local ref
  // onSubmit(form: NgForm) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }
//using @viewchild
@ViewChild('f') signupForm: NgForm;
onSubmit() {
  console.log('Submitted usng @ViewChild');
  console.log(this.signupForm);

}
}

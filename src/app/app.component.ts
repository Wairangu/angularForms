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
  genders = ['male', 'female'];

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
suggestUsername(){
  const suggestedName = 'Superuser';
  // this.signupForm.setValue({  //not best approcah:- replaces all the values woth default
  //   userData: {
  //     username: suggestedName,
  //     email: ''
  //   },
  //   secret: 'pet',
  //   questionAnswer: '',
  //   gender: 'male'
  // })
  //better approcah that patches values selected
  this.signupForm.form.patchValue({
    userData: {
      username: suggestedName
    }
  })
}

}

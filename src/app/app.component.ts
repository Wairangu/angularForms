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
  formSubmitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  }

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
  this.formSubmitted = true;
  this.user.username = this.signupForm.form.value.userData.username;
  this.user.email = this.signupForm.form.value.userData.email;
  this.user.secretQuestion = this.signupForm.form.value.secretData.secret;
  this.user.secretAnswer = this.signupForm.form.value.secretData.questionAnswer;
  this.user.gender = this.signupForm.form.value.secretData.gender;


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
onReset() {
  this.signupForm.reset();
}

}

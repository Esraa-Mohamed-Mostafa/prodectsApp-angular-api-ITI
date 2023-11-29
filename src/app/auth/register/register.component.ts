import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  cardsForm !: FormGroup;
  addresss !: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.cardsForm = this.fb.group({

      // name: ['', Validators.required],

      username: ['', [Validators.required,this.cannotContainSpace]],

      email: ['', [Validators.required, Validators.pattern]],

      password: ['', [Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]],

      alternativeAdress: this.fb.array([this.fb.control('')]),
      

      confirmPassword: ['', [Validators.required]]
    },

      { validator: [this.confirmPasswordValidator] },
    )
    
  //   this.addresss = this.fb.group({
  //     a: new FormControl('', [Validators.required]),
  //     bb: new FormControl('', [Validators.required]),
  //   });
   }

  // createEmpFormGroup(): FormGroup {
  //   return this.fb.group({
  //     a: ['', Validators.required],
  //     s: ['', Validators.required],
  //     f: ['', Validators.required],
  //   })
  // }



  confirmPasswordValidator(control: AbstractControl) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (password?.pristine || confirmPassword?.pristine) { return null; }

    return password && confirmPassword && password.value !=
      confirmPassword.value ? { 'misMatch': true } : null;
  }

  get alternativeAdress() { return this.cardsForm.get('alternativeAdress') as FormArray; }
  addanotheraddress() {
    this.alternativeAdress.push(this.fb.control('')); }



  handleFormSubmit() {
    console.log(this.cardsForm)
  }


  removeBook(i: number) {
    this.alternativeAdress.removeAt(i);
  }


     cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace: true}
            
        }
        return null;
    }

}

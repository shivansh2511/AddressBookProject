import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss'
})
export class PersonFormComponent {
  personForm: FormGroup;
  persons: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.personForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]]
    });
  }
  onSubmit() {
    if (this.personForm.valid) {
      this.persons.push(this.personForm.value);
      console.log('Person Data: ',this.personForm.value);
      const isConfirmed = confirm("Person added successfully! Do you want to go back to the Person List?");
      if (isConfirmed) {
        this.router.navigate(['/person-list']);
      }
    }
  }
  onReset() {
    if (this.personForm.valid) {
      this.personForm.reset();
    }
  }
}

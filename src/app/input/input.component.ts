import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import {DataTransferService} from "../data-transfer.service";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  firstName: string = '';
  lastName: string = '';
  employmentTerm: string = 'Full-time';

  constructor(private dataTransferService: DataTransferService, private router: Router) { }

  submit(): void {
    const teacherData = {
      firstName: this.firstName,
      lastName: this.lastName,
      employmentTerm: this.employmentTerm
    };
    this.dataTransferService.updateData(teacherData);
    this.router.navigate(['/output']);
  }
}

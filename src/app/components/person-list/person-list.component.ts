import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
  constructor(private router: Router) { }

  persons = [
    { fullName: 'Aarav Sharma', address: 'Andheri East', city: 'Mumbai', state: 'Maharashtra', zipCode: '400069', phoneNumber: '02226821345' },
    { fullName: 'Neha Verma', address: 'Sector 62', city: 'Noida', state: 'Uttar Pradesh', zipCode: '201301', phoneNumber: '01204567890' },
    { fullName: 'Rohan Kapoor', address: 'MG Road', city: 'Bengaluru', state: 'Karnataka', zipCode: '560001', phoneNumber: '08025678912' },
    { fullName: 'Ananya Iyer', address: 'Anna Nagar', city: 'Chennai', state: 'Tamil Nadu', zipCode: '600040', phoneNumber: '04426451234' },
    { fullName: 'Kabir Mehta', address: 'Park Street', city: 'Kolkata', state: 'West Bengal', zipCode: '700016', phoneNumber: '03324567890' },
    { fullName: 'Simran Kaur', address: 'Hinjewadi', city: 'Pune', state: 'Maharashtra', zipCode: '411057', phoneNumber: '02067541234' },
    { fullName: 'Rajesh Gupta', address: 'Gomti Nagar', city: 'Lucknow', state: 'Uttar Pradesh', zipCode: '226010', phoneNumber: '05222345678' },
    { fullName: 'Sanya Roy', address: 'Connaught Place', city: 'Delhi', state: 'Delhi', zipCode: '110001', phoneNumber: '01123456789' },
    { fullName: 'Vikram Malhotra', address: 'Banjara Hills', city: 'Hyderabad', state: 'Telangana', zipCode: '500034', phoneNumber: '04027890123' },
    { fullName: 'Pooja Desai', address: 'Satellite Road', city: 'Ahmedabad', state: 'Gujarat', zipCode: '380015', phoneNumber: '07926547890' },
    { fullName: 'Aditya Patil', address: 'FC Road', city: 'Pune', state: 'Maharashtra', zipCode: '411004', phoneNumber: '02025671234' },
    { fullName: 'Ritika Jain', address: 'Ballygunge', city: 'Kolkata', state: 'West Bengal', zipCode: '700019', phoneNumber: '03328765432' },
    { fullName: 'Mohit Reddy', address: 'Madhapur', city: 'Hyderabad', state: 'Telangana', zipCode: '500081', phoneNumber: '04029876543' },
    { fullName: 'Shreya Nair', address: 'Marina Beach Road', city: 'Chennai', state: 'Tamil Nadu', zipCode: '600002', phoneNumber: '04427564321' },
    { fullName: 'Amit Sinha', address: 'Rajendra Nagar', city: 'Patna', state: 'Bihar', zipCode: '800016', phoneNumber: '06122567891' },
    { fullName: 'Radhika Joshi', address: 'Koregaon Park', city: 'Pune', state: 'Maharashtra', zipCode: '411001', phoneNumber: '02025647891' },
    { fullName: 'Saurabh Choudhary', address: 'Sector 15', city: 'Gurgaon', state: 'Haryana', zipCode: '122001', phoneNumber: '01242367890' },
    { fullName: 'Meenal Bhatia', address: 'Law Garden', city: 'Ahmedabad', state: 'Gujarat', zipCode: '380006', phoneNumber: '07927890123' },
    { fullName: 'Rahul Thakur', address: 'Civil Lines', city: 'Jaipur', state: 'Rajasthan', zipCode: '302006', phoneNumber: '01412767890' },
    { fullName: 'Divya Saxena', address: 'Model Town', city: 'Delhi', state: 'Delhi', zipCode: '110009', phoneNumber: '01127654321' }
  ];
  
  confirmDelete(index: number) {
    if (confirm('Are you sure you want to delete this person?')) {
      this.deletePerson(index);
    }
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }

  navigateToForm() {
    this.router.navigate(['/person-form']);
  }
}

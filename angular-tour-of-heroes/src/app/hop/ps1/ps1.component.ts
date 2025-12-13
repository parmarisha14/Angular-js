import { Component } from '@angular/core';

@Component({
  selector: 'app-ps1',
  templateUrl: './ps1.component.html',
  styleUrls: ['./ps1.component.css'],
 
})
export class Ps1Component {

  snm = "isha";
  rno = 101;
  course = 'BCA';
  marks = 80;

  unm: string = '';
  pwd: string = '';

  showdata(username: string, password: string) {
    this.unm = username;
    this.pwd = password;
    alert(`Username: ${username}\nPassword: ${password}`);
  }
}

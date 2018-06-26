import { Component, OnInit } from '@angular/core';

import { BirthdayManagerService } from './birthday-manager.service';

@Component({
  selector: 'birthdays',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  constructor(private birthdays: BirthdayManagerService) { }

  getBirthdaysData(): object[]{
    return this.birthdays.getBirthdaysData();
  }
  ngOnInit() {
  }

}

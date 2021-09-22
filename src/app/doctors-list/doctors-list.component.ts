import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ConfigService } from '../config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    appid: 'F3561E632DF224DC2B1B9129FAD71',
    callfrmweb: '2',
  }),
  body: {
    tag: 'doctor_search',
    doctor_id: '',
    doctor_name: '',
    userid: '1',
    specialtyid: '',
    languageid: '',
    insuranceid: '',
    accepted_id: '',
    serviceid: '',
    genderid: '',
    page: '0',
    limit: '',
    sortingtype: 'asc',
    speciality: '',
    practice_id: '',
    practicename: '',
    status: '1',
    patientaccept: '',
    insurance: '',
    service: '',
    city_id: '',
    area_id: '',
    cityname: '',
    doctorslug: '',
    sortbycol: '',
    practice_branch_id: '',
    searchtext: '',
    isfront: '1',
  },
};

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  objectKeys = Object.keys;
  doctorsList: any;

  ngOnInit(): void {
    this.configService.getDetails().subscribe((data) => {
      this.doctorsList = data;
      console.log(this.doctorsList);
    });
  }
}

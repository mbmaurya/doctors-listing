import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ConfigService } from '../config.service';

const httpOptions = {
  headers: new HttpHeaders({
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

  ngOnInit(): void {
    // const headers = {
    //   'content-type': 'application/json',
    //   appid: 'F3561E632DF224DC2B1B9129FAD71',
    //   callfrmweb: '2',
    //   'User-Agent': 'PostmanRuntime/7.28.0',
    // };

    // const body = JSON.stringify({
    //   tag: 'doctor_search',
    //   doctor_id: '',
    //   doctor_name: '',
    //   userid: '1',
    //   specialtyid: '',
    //   languageid: '',
    //   insuranceid: '',
    //   accepted_id: '',
    //   serviceid: '',
    //   genderid: '',
    //   page: '0',
    //   limit: '',
    //   sortingtype: 'asc',
    //   speciality: '',
    //   practice_id: '',
    //   practicename: '',
    //   status: '1',
    //   patientaccept: '',
    //   insurance: '',
    //   service: '',
    //   city_id: '',
    //   area_id: '',
    //   cityname: '',
    //   doctorslug: '',
    //   sortbycol: '',
    //   practice_branch_id: '',
    //   searchtext: '',
    //   isfront: '1',
    // });

    // this.http
    //   .post<any>(
    //     'https://www.gpshealthonline.com/webservices/common_recv.php',
    //     body,
    //     { headers }
    //   )
    //   .subscribe((data) => {
    //     console.log('Request successfull, data below');
    //     console.log(data);
    //   });

    this.configService
      .getDetails(httpOptions)
      .subscribe((data) => console.log(data));
  }
}

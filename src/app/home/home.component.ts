import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { List } from '../list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  handleClick(event: Event) {
    console.log();
  }

  collapseClicked = false;
  list: Array<List> = [];




  new(company, name, tel, details) {

    let list = new List();
    if ((company && name && tel && details) != "") {
      list.id = "id" + this.list.length.toString();
      list.company = company;
      list.name = name;
      list.tel = tel;
      list.details = details;
      this.list.push(list);
    }
    else
      alert("נא למלא את כל השדות")
  }


  delete(line) {
    for (let i = 0; i <= this.list.length; i++) {
      if (line == this.list[i].id) {
        this.list.splice(i, 1)
      }
    }
    console.log(line);
  }


  today = new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  ngOnInit() {
  }



}

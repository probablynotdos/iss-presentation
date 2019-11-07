import { IssService } from '../iss/iss.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css']
})
export class IssComponent implements OnInit {

  location;

  constructor(private issService: IssService) { }

  ngOnInit() {
    this.issService.getIssLocation().subscribe(data => {
      this.location = data;
    })
  }
}

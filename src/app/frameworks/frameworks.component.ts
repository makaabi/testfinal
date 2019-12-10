import { Component, OnInit } from '@angular/core';
import { FrameworksService } from '../frameworks.service';
import { Framework } from '../Framework';


@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent implements OnInit {
  frameworks:Framework[];

  constructor(private service:FrameworksService) { }

  ngOnInit() {
    this.frameworks=this.service.getFrameworks();


  }

}

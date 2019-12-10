import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrameworksService } from '../frameworks.service';
import { Framework } from '../Framework';




@Component({
  selector: 'app-some-frameworks',
  templateUrl: './some-frameworks.component.html',
  styleUrls: ['./some-frameworks.component.css']
})
export class SomeFrameworksComponent implements OnInit {
 an:number;
 side:string;
 tab:Framework[];

  constructor(private activatedRoute:ActivatedRoute,private service:FrameworksService) { }

  ngOnInit() {
    this.an = this.activatedRoute.snapshot.params['an'];
    this.side = this.activatedRoute.snapshot.params['side'];
    this.tab=this.service.getFrameworksBycondition(this.an,this.side);

  }

}

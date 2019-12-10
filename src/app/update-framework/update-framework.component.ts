import { Component, OnInit } from '@angular/core';
import { FrameworksService } from '../frameworks.service';
import { Framework } from '../Framework';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-update-framework',
  templateUrl: './update-framework.component.html',
  styleUrls: ['./update-framework.component.css']
})
export class UpdateFrameworkComponent implements OnInit {

  constructor(private route:Router,private service:FrameworksService) { }

  ngOnInit() {
  }
  modif(f:NgForm)
  {
    this.service.updateFramework(f.value['id'],f.value['r1'],f.value['an'])

    this.route.navigate(['/allframeworks']);


  }

}

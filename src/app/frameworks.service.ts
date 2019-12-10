import { Injectable } from '@angular/core';
import { Framework } from './Framework';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  private lesFrameworks =[
    
    new Framework('a37','Angular JS','../assets/AngularJS.jpg', 2009, 'client'),
    new Framework('b5','Backbone JS','../assets/backbone.png', 2010, 'client'),
    new Framework('l48','Laravel','../assets/Laravel.png', 2011, 'serveur'),
    new Framework('v52','Vue','../assets/Vue.jpeg', 2014, 'client'),
    new Framework('em1','Ember','../assets/ember.png', 2011, 'client'),
    new Framework('r2','Ruby on Rails','../assets/Ruby.png', 2004, 'serveur')
    
  ]; 

  getFrameworks():Framework[]
  {
    return this.lesFrameworks;
  }

  
  updateFramework(id:string,side:string,an:number)
  {
    let obj:Framework=this.getFrameworkByid(id);
    obj.id=id;
    obj.side=side;
    obj.an=an;

  }

  getFrameworksBycondition(an:number,side:string):Framework[]
  {
    var tab:Framework[]=[];
    for (let i=0;i<this.lesFrameworks.length;i++)
      {
        if(an>this.lesFrameworks[i].an &&side==this.lesFrameworks[i].side  )
        tab.push(this.lesFrameworks[i]);
      }
      return tab;
  }


  getFrameworkByid(id:string):Framework
    {
      for (let i=0;i<this.lesFrameworks.length;i++)
      {
        if(id==this.lesFrameworks[i].id)
        return this.lesFrameworks[i];

      }
      return null;

    }

  constructor() { }
}

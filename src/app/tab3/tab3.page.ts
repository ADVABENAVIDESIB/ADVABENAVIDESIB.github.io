import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../models/subject';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  subjects:Subject[];
  constructor(private router:Router) {
    this.subjects=[];
  }
  
  ngOnInit(){
    this.subjects=[
      {
        name:'Verano Delfin en una Startup  2022 ',
        img:'assets/delfin.png',
        desc:'I participated in a summer investigation at Monterrey, in the summer I worked as a developer at MANUFAI which is dedicated to identifying the best welding sequence through AI, I worked with Pyside, a technology to develop interfaces and functionalities, using the Python language.'
      },
      {
        name:'2nd place at "Jornada Academica" ',
        img:'assets/jornada.png',
        desc:"We won the second place in a intern copetition at Instituto tecnologico de Tepic in the Computerstystems engineer's department, our team was called UNDERDOGS "
      }
    ]
  }
 



}

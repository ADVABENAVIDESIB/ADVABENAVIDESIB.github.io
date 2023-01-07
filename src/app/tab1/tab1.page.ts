import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../models/subject';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
subjects:Subject[];
  constructor(private router:Router) {
    this.subjects=[];
  }
  
  ngOnInit(){
    this.subjects=[
      {
        name:'HOTEL',
        url:'https://dah2023adrian.web.app',
        img:'assets/estudiantes.jpg',
        desc:'This is a CRUD in IONIC and FIREBASE,  where an Admin can'+ '\n'+
         'make reservation in a hotel, you'+ '\n'+
          'can login as a huesped or admin'+ '\n'+
          'for admin use the token: 1111'+ '\n'+
          'for huesped use the token: ?'+ '\n'+
          "note: As a huesped you can't see the information to"+ '\n'+
          "get into de room until the Date that the Admin make the"+ '\n'+
          'reservation'
      },
      {
        name:'SHOPPING CART',
        img:'assets/carrito.jpg',
        url:'https://productoscarrito.web.app',
        desc:'This is a CRUD in IONIC and FIREBASE, where a you'+ '\n'+
        'can add products to the cart and'+ '\n'+
         'add new products to the list, the cart can'+ '\n'+
         'show the total of the list and you'+ '\n'+
         'can delete products from cart too'+ '\n'+
         ''
      },
      {
        name:'STUDENTS',
        img:'assets/estudiantes.jpg',
        url:'https://estudiantescrud-bf92f.web.app',
        desc:'This is a CRUD in IONIC and FIREBASE, where you can'+ '\n'+
        'add new students to the list'+ '\n'+
         'you can check out,'+ '\n'+
         'you can create,'+ '\n'+
         'you can delete and'+ '\n'+
         'you can update students from your list'+ '\n'
      },
      {
        name:'EVENTS ROOM',
        img:'assets/estudiantes.jpg',
        
        desc:'This is a CRUD in IONIC and FIREBASE where the people can'+ '\n'+
        'make reservation in a events room, you'+ '\n'+
         'can login as a huesped or admin'+ '\n'+
         'for admin use the token: ?'+ '\n'+
         'for huesped use the token: ?'+ '\n'+
         "this practice was an exam, I made this"+ '\n'+
         "excercice as a team with another partner"+ '\n'+
         'the events room has a few validation '+ '\n'+
         'The price depends on the things you want'+ '\n'+
         'to hire such as the pool, a soccer table, '+ '\n'+
         'the amount of water in the pool, etc.'+ '\n'

      }
    ]
  }
  goToSubject(item:Subject){
    let url:any;
    url=''
    url=item.url;
    window.location.href = url;
  }

}

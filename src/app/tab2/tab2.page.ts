import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../models/subject';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  subjects:Subject[];
  constructor(private router:Router) {
    this.subjects=[];
  }
  
  ngOnInit(){
    this.subjects=[
      {
        name:'HOTEL',
        url:'https://dah2023adrian.web.app',
        img:'assets/hotel.jpg',
        desc:'This is a CRUD in IONIC and FIREBASE,  where an Admin can'+ '\n'+
         'make reservation in a hotel, the token is sent by whatsapp, you'+ '\n'+
          'can login as a huesped or admin'+ '\n'+
          'for admin use the token: 1111'+ '\n'+
          'for huesped use the token: 311-8675-309_3'+ '\n'+
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
         'you can update students from your list'+ '\n'+
         'also it have authentication for google, github and email.'
      },
      {
        name:'EVENTS ROOM',
        img:'assets/casino.jpg',
        url:'https://examenu4bina.web.app',
        desc:'This is a CRUD in IONIC and FIREBASE where the people can'+ '\n'+
        'make reservation in a events room, you'+ '\n'+
         'can login as a client or admin'+ '\n'+
         'for admin use the token: 9999'+ '\n'+
         'for client use the token: 3111590913'+ '\n'+
         "this practice was an exam, I made this"+ '\n'+
         "excercice as a team with another partner"+ '\n'+
         'the events room has a few validation '+ '\n'+
         'the price depends on the things you want'+ '\n'+
         'to hire such as the pool, a soccer table, '+ '\n'+
         'the amount of water in the pool, etc.'+ '\n'

      },
      {
        name:'MARIO BROS',
        img:'assets/mario.jpg',
        url:'https://mimariobrosadrian.glitch.me',
        desc:'It is little project imitating the google dinosaur, but with mario bros, jump and count score speed increases and there is movement appearance with css and javascript'

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

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {

  constructor() { }


  vardas="suniukas";
  nuotrauka="https://images.dog.ceo/breeds/leonberg/n02111129_324.jpg";
  
  ngOnInit(): void {
  }


  async gautiSuniuka(){
    //let objektas=await (await fetch("https://grazus-api.herokuapp.com/")).json();
    let suniukuArray: any[]=await (await fetch("https://grazus-api.herokuapp.com/")).json();    
    let suniukas = suniukuArray[Math.floor(Math.random() * suniukuArray.length)]
    
    this.nuotrauka=suniukas.nuotrauka;
    this.vardas=suniukas.vardas;

  }

  
}

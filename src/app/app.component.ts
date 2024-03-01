import { Component, OnInit } from '@angular/core';
import { ApiJogosService } from './api-jogos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  public gamesList : any[]= []
  
  

  constructor(private apiJogosService: ApiJogosService) {}
  ngOnInit(): void {
    this.apiJogosService.getAllGames().subscribe((data) => {
      this.gamesList = data
      
    });

    
    console.log('testando 1, 2, 3')
  }
  title = 'SelecaoVlab';


}

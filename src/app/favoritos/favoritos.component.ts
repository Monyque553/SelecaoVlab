import { Component } from '@angular/core';
import { ApiJogosService } from '../api-jogos.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  public gamesList: any[] = [];
 
  public gameId: string = '';
  constructor(private apiJogosService: ApiJogosService , private route: ActivatedRoute, private sharedService: SharedService){
    
  }
  ngOnInit(): void {
    let favoritos: string[] = this.sharedService.getGlobalData('favoritos') || [];
    

    for (let i = 0; i < favoritos.length; i++) {
      console.log(favoritos[i]); 

      this.apiJogosService.getDetailsGame(favoritos[i]).subscribe((data) => {
        
        console.log(data)
        
        this.gamesList.push(data)
      });
      
      console.log("essa á a lista de jogos"+this.gamesList)
    }

    

  }

}

import { Component, OnInit } from '@angular/core';
import { ApiJogosService } from '../api-jogos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrl: './details-game.component.css'
})
export class DetailsGameComponent implements OnInit{

  public gameDetail: any;
  public gameId: string = '';
  constructor(private apiJogosService: ApiJogosService , private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id') || '';
    this.apiJogosService.getDetailsGame(this.gameId).subscribe((data) => {
      this.gameDetail = data
      console.log(data)
      console.log("essa é o gameDetail" + this.gameDetail.title)
      
    });

  }

  
}

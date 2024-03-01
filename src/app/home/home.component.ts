import { Component } from '@angular/core';
import { ApiJogosService } from '../api-jogos.service'
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public gamesList : any[]= []
  
  

  constructor(private apiJogosService: ApiJogosService, private sharedService: SharedService) {}

  definirInformacaoGlobal(id: string): void {
    let favoritos: string[] = this.sharedService.getGlobalData('favoritos') || []; 
    favoritos.push(id); 
    this.sharedService.setGlobalData('favoritos', favoritos); 
    console.log(this.sharedService.getGlobalData('favoritos'));
    
  }


  sortGames(parametro : string){
    this.apiJogosService.getSortedGames(parametro).subscribe((data) => {
      this.gamesList = data
      console.log("esse é as coisas ordenadas" + data)
    });
  }

  filterGames(){
    this.apiJogosService.getFilterGames("pc","shooter","2018-06-05", "Spyr").subscribe((data) => {
      console.log("esse é as coisas filtradas" + data)
    });
  }

  ngOnInit(): void {
    this.apiJogosService.getAllGames().subscribe((data) => {
      this.gamesList = data
    });
    console.log('testando 1, 2, 3')
    this.filterGames
  }

  
  title = 'SelecaoVlab';
}

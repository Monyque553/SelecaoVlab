import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJogosService {

  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
  private apiKey = 'f63d784efcmsh84e6fdb8f6041e0p1b0b38jsnb82c4a166ecc';
  private apiHost ='free-to-play-games-database.p.rapidapi.com';

  constructor(private http: HttpClient) { }


  getAllGames(): Observable<any> {

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost
    });
    return this.http.get(`${this.apiUrl}/games`, { headers: headers });
  }

 

getDetailsGame(id:string): Observable<any>{
  let idGame: string = id;
  const headers = new HttpHeaders({
    'X-RapidAPI-Key': this.apiKey,
    'X-RapidAPI-Host': this.apiHost
  });
  return this.http.get<any>(`${this.apiUrl}/game`, { headers: headers, params: { id: idGame } });
}


getFilterGames(platform: string, date: string, category: string, developer: string):Observable<any>{
  const headers = new HttpHeaders({
    'X-RapidAPI-Key': this.apiKey,
    'X-RapidAPI-Host': this.apiHost
  });

  let filterParams = '';

  if (date) {
    filterParams += `${date}.`;
  }
  if (category) {
    filterParams += `${category}.`;
  }
  if (developer) {
    filterParams += `${developer}.`;
  }
  if (platform) {
    filterParams += `${platform}`;
  }
  
  const params = { tag: filterParams,
    platform: platform};
  return this.http.get<any>(`${this.apiUrl}/games`, {headers: headers, params: params})
}


getSortedGames(parametro:string): Observable<any>{
  let sortedParametro: string = parametro;
  const headers = new HttpHeaders({
    'X-RapidAPI-Key': this.apiKey,
    'X-RapidAPI-Host': this.apiHost
  });

  
  return this.http.get<any>(`${this.apiUrl}/games`, { headers: headers, params: { 'sort-by': sortedParametro } });
}

}

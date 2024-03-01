import { Injectable } from '@angular/core';

// Interface para definir a estrutura dos dados armazenados globalmente
interface GlobalData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private globalData: GlobalData = {};

  constructor() { }

  setGlobalData(key: string, value: any): void {
    this.globalData[key] = value;
  }

  getGlobalData(key: string): any {
    return this.globalData[key];
  }

  removeGlobalData(key: string): void {
    delete this.globalData[key];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    const fromLocalStorage = localStorage.getItem(key);
    if (fromLocalStorage) {
      return JSON.parse(fromLocalStorage);
    }
    return null;
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

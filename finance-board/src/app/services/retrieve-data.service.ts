import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {

  constructor(private http:HttpClient) { }

  getCompanyInformation(ticker:string){
    const theUrl =`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=0Bbzneb4lTEzWHAM_uUTbesmP6RfA2vo`
    return this.http.get(theUrl);
  }
}

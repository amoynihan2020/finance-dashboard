import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { RetrieveDataService } from 'src/app/services/retrieve-data.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {
   constructor(private dataService:RetrieveDataService){}
   companyDescription = ""
   fiveCompanies = [
    {
      ticker:'AAPL',
      companyName: "Apple",
      logoUrl: "../assets/apple.png"
    }, 

    {
      ticker: "RTX",
      companyName: "Raytheon Technologies",
      logoUrl: "../assets/raytheon.png"
    },
    {
      ticker: "ACB",
      companyName: "Aurora Cannabis",
      logoUrl: "../assets/weed.jpg"

    }
  ]
  displayedColumns : string[] = ["name", "symbol"]
  


  ngOnInit(): void {
    this.dataService.getCompanyInformation('AAPL').subscribe((resp:any) =>{
         this.companyDescription=resp.results.description
    })

  }
   getRecord(row:any){

     this.dataService.getCompanyInformation(row.ticker).subscribe((resp:any) =>{
      if(resp){      
        this.companyDescription=resp.results.description;
      } else {
        this.companyDescription = `${row.companyName} does not have a description`
      }
     
     })

   }

   
  
}

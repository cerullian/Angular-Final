import { Component, OnInit } from '@angular/core';
import { TechdataService } from '../techdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categs',
  templateUrl: './categs.component.html',
  styleUrls: ['./categs.component.css']
})
export class CategsComponent implements OnInit {

  categs: string[];

  constructor(private techData: TechdataService, private router: Router) {
    // carrego a variável com o que está no techData
    this.categs = techData.categs;
  }

  ngOnInit(): void {
  }

  techList(categ: string) {
    this.router.navigate(['/techs/'+categ]);
  }

}

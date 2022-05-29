import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TechdataService } from './../techdata.service';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {

  techs:{name: string, info:string, url: string, category: string, level:number}[];
  categs: string[] = [];

  constructor(private techData: TechdataService) {
    this.techs = this.techData.techs;
    this.categs = this.techData.categs;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.techs.push({
      name: form.form.value.name,
      info: form.form.value.info,
      url: form.form.value.url,
      category: form.form.value.category,
      level: form.form.value.level,
    });
    form.form.reset();
  }

}

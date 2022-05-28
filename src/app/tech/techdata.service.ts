import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechdataService {

  categs = ['Frontend','Backend','Mobile','DBA'];

  techs = [{
    name: 'Angular',
    info: 'Javascript framework',
    url: 'https:angular.io',
    category: 'Frontend',
    level: 90
  },{
    name: 'React',
    info: 'Javascript framework',
    url: 'https:reactjs.org/',
    category: 'Frontend',
    level: 80
  },{
    name: 'Django',
    info: 'Python framework',
    url: 'https:www.djangoproject.com/',
    category: 'Backend',
    level: 70
  },{
    name: 'Laravel',
    info: 'PHP framework',
    url: 'https:www.laravel.com',
    category: 'Backend',
    level: 80
  },{
    name: 'React Native',
    info: 'JavaScript framework',
    url: 'https:reactjs.org/',
    category: 'Mobile',
    level: 80
  }];

  constructor() { }

  // addTech() {
  //   this.techs.push('');
  // }
}

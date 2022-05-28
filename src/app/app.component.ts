import { Component } from '@angular/core';
import { TechdataService } from './tech/techdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TechdataService]
})
export class AppComponent {
  
  constructor(private techData: TechdataService) {}

  // 1. Na rota do addTech, colocar um form com os campos necessários para adicionar registo
  // 2. Destaque no form para o select (Categories): é dinâmico!
  // 3. Depois do form válido, submit - desenvolver um método no service techData para adicionar ao array

  // 4. No countries, fetch no endpoint api countries (europa) e mostrar dados
  // 5. Implementar algo igual a categs (clicar no país e mostrar noutra rota os dados desse país)

}

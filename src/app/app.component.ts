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

  // 4. No countries, fetch no endpoint api countries (europa) e mostrar dados
  // 5. Implementar algo igual a categs (clicar no país e mostrar noutra rota os dados desse país)

}

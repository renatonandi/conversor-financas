import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Moeda } from '../../models/moeda';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private http: HttpClient) { }

  public moeda!: Moeda;
  public valor!: number;
 
  getData(): Observable<any> {
    let url = `https://api.hgbrasil.com/finance?format=json-cors&key=05349450`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results.currencies;
      })
    );
  }

  public converteMoeda() {
    this.getData().subscribe((moedas) => {
      const realDolar = (this.valor / moedas.USD.buy).toFixed(2);
      const realEuro = (this.valor / moedas.EUR.buy).toFixed(2);
      const realPeso = (this.valor / moedas.ARS.buy).toFixed(2);

     
      this.moeda = {
        dolar: Number(realDolar),
        euro: Number(realEuro),
        peso: Number(realPeso)
      }
    });
  }
  public valorConversao(){
    
  }

}

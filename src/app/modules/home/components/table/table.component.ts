import { Component, Input } from '@angular/core';
import { Moeda } from '../../models/moeda';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() moeda! : Moeda
  
}

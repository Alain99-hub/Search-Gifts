import { Component, Input } from '@angular/core';
import { Gift } from '../../interfaces/gifts.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',

})
export class CardListComponent {

  @Input()
  public gift: Gift[]=[];
}

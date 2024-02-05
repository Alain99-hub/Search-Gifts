import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../interfaces/gifts.interface';

@Component({
  selector: 'gift-card',
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.css',
})
export class GiftCardComponent implements OnInit {

  ngOnInit(): void {
    if(!this.gift ) throw new Error('Gift propety requeried')
  }

  @Input()
  public gift!: Gift;



}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gifts.interface';


@Component({
  selector: 'gifts-app-home',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private giftsService:GiftsService ){

  }

  get gifts():Gift[]{
   return this.giftsService.giftList
  }
 }

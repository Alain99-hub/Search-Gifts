
import {  Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  styleUrl: './sidebar.component.css',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  constructor( private gifsService: GiftsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string){
    this.gifsService.searchTag(tag)
  }

 }

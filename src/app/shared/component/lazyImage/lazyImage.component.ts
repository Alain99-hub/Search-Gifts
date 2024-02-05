import {  Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',

  templateUrl: './lazyImage.component.html',


})
export class LazyImageComponent implements OnInit{
  ngOnInit(): void {
    if( !this.url) throw new Error(' url not recibed.');
  }
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasloaded: boolean = false;

  onLoad(){
    console.log('image Loaded')
    this.hasloaded = true;
  }
 }

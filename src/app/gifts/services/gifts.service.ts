import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gift } from '../interfaces/gifts.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {


  public giftList: Gift[] = [];

  private _taghistory: string[]=[];
  private apiKey: string = 'ojUz8Q0i6Aav6sBnXgUY0Lydis6tfGaC';
  private serviceUrl: string ='https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient){
      try{
        if (typeof localStorage !== 'undefined') {
          this.loadLocalStorage();

        }
      }catch(error){
          console.error(error)
      }
  }




  get tagsHistory(){

    return [...this._taghistory]
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._taghistory.includes(tag)){
      this._taghistory = this._taghistory.filter((oldTag)=> oldTag !== tag)
    }

    this._taghistory.unshift(tag);
    this._taghistory = this._taghistory.splice(0,10);
    this.saveLocalStorage();

  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify( this.tagsHistory))
  }

  private loadLocalStorage():void{

    if(!localStorage.getItem('history')) return;

    this._taghistory = JSON.parse(localStorage.getItem('history')!);

    if(this._taghistory.length === 0) return;

    this.searchTag(this._taghistory[0]);
  }

  async searchTag(tag:string):Promise<void>{
    if(tag.length === 0) return
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(resp =>{
      this.giftList =  resp.data;
      console.log({gifs: this.giftList})
    })

  //  fetch('https://api.giphy.com/v1/gifs/search?api_key=ojUz8Q0i6Aav6sBnXgUY0Lydis6tfGaC&q=lol&limit=10')
  //   .then(resp => resp.json)
  //   .then(data => console.log(data))
  }

}

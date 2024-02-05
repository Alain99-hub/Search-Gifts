import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'app-search-box',
  template: `<h5>Buscar:</h5>
            <input type="text"
            class="form-control" placeholder="Buscar gifts..."
            (keyup.enter)="searchTag()"
            #txtTagInput
            >


  `,
  styleUrl: './search-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;


  constructor(private giftsService:GiftsService){}

  // searchTag(newTag: string){
  //   console.log({newTag})
  // }

  searchTag(){
      const newTag = this.tagInput.nativeElement.value;
      this.giftsService.searchTag(newTag);
      this.tagInput.nativeElement.value= '';//opcional XD
  }

}

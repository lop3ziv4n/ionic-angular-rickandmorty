import {Component, OnInit, ViewChild} from '@angular/core';
import {CharacterService} from '../services/character.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  characters: any[] = [];
  page = 0;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(loadMore = false, event?) {
    if (loadMore) {
      this.page += 1;
    }

    this.characterService.getAll(this.page).subscribe(
      (value) => {
        this.characters = this.characters.concat(value);
        if (event) {
          event.target.complete();
        }
      });
  }

  onSearchCharacter(event) {
    const detail = event.detail.value;

    if (detail === '') {
      this.page = 0;
      this.characters = [];
      this.loadData();
      this.infiniteScroll.disabled = false;
      return;
    }

    this.characterService.getByName(detail).subscribe(
      (value) => {
        this.characters = value;
      }, () => {
        this.characters = [];
      });

    this.infiniteScroll.disabled = true;
  }

}

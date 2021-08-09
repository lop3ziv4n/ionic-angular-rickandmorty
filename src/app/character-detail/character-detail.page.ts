import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  selectId: string;
  character: any;

  constructor(private activatedRoute: ActivatedRoute,
              private characterService: CharacterService) {
    this.selectId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.characterService.getById(this.selectId).subscribe((value) => {
      console.log(value);
      this.character = value;
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api/character';


  constructor(private http: HttpClient) { }

  getAll(page = 1) {
    return this.http
      .get(`${this.url}?page=${page}`)
      .pipe(
        map(result => {
          return result['results'];
        })
      );
  }

  getById(id: string) {
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getByName(name: string) {
    return this.http
      .get(`${this.url}?name=${name}`)
      .pipe(
        map(result => {
          return result['results'];
        })
      );
  }
}

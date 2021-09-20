import {Injectable} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {BehaviorSubject} from "rxjs";
import {Commentary} from "../../models/commentary.model";
import {CommentaryService} from "../commentary/commentary.service";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series: BehaviorSubject<Array<Serie>>

  constructor(private commentaryService: CommentaryService) {
    const seriesToPush = [
      new Serie(
        'La casa de Papel',
        '14/01/2017',
        4,
        'Huit voleurs font une prise d\'otages dans la Maison royale de' +
        ' la Monnaie d\'Espagne, tandis qu\'un génie du crime manipule la police pour mettre son plan à exécution.',
        'super critique',
        this.commentaryService)
    ]
  }
}

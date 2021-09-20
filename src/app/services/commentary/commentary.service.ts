import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Commentary} from "../../models/commentary.model";

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  commentaries: BehaviorSubject<Array<Commentary>>;

  constructor() {
    const commentariesToPush = [
      new Commentary('14/02/2021', 'author 1', 'content 1'),
      new Commentary('14/02/2021', 'author 2', 'content 2'),
      new Commentary('14/02/2021', 'author 3', 'content 3'),
      new Commentary('14/02/2021', 'author 4', 'content 4'),
      new Commentary('14/02/2021', 'author 5', 'content 5'),
      new Commentary('14/02/2021', 'author 6', 'content 6'),
      new Commentary('14/02/2021', 'author 7', 'content 7'),
      new Commentary('14/02/2021', 'author 8', 'content 8'),
      new Commentary('14/02/2021', 'author 9', 'content 9'),
      new Commentary('14/02/2021', 'author 10', 'content 10'),
      new Commentary('14/02/2021', 'author 111', 'content 11'),
    ];

    this.commentaries = new BehaviorSubject<Array<Commentary>>(commentariesToPush);
  }

  getCommentaryById(commentaryId: number): Promise<Commentary> {
    return new Promise<Commentary>((res, rej) => {
      const commentaries = this.commentaries.getValue();
      for (let commentary of commentaries) {
        if (commentary.id === commentaryId) {
          res(commentary);
          break;
        }
      }
    });
  }

  addCommentary(commentaryToAdd: Commentary): Promise<void> {
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        const commentaries = this.commentaries.getValue();
        commentaries.push(commentaryToAdd);
        this.commentaries.next(commentaries);
        res();
      }, 500);
    });
  }





}

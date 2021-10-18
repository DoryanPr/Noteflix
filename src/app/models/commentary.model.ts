export class Commentary {
  private _id: number;
  private _releaseCommentary: Date;
  private _author: string;
  private _content: string;

  static commentaryLength = 1;

  constructor(releaseCommentary: Date, author: string, content: string) {
    this._id = Commentary.commentaryLength;
    this._releaseCommentary = releaseCommentary;
    this._author = author;
    this._content = content;

    Commentary.commentaryLength++
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get releaseCommentary(): Date {
    return this._releaseCommentary;
  }

  set releaseCommentary(value: Date) {
    this._releaseCommentary = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}

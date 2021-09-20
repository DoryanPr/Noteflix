import {Commentary} from "./commentary.model";

export class Serie {

  private _id: number;
  private _name: string;
  private _releaseDate: string;
  private _nbSeason: number;
  private _description: string;
  private _critical: string;
  private _commentaries: string;
  private _picture: string;


  static serieLength = 1;


  constructor(name: string, releaseDate: string, nbSeason: number, description: string, critical: string, commentaries: string, picture: string) {

    this._id = Serie.serieLength;
    this._name = name;
    this._releaseDate = releaseDate;
    this._nbSeason = nbSeason;
    this._description = description;
    this._critical = critical;
    this._commentaries = commentaries;
    this._picture = picture;

    Serie.serieLength++
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get releaseDate(): string {
    return this._releaseDate;
  }

  set releaseDate(value: string) {
    this._releaseDate = value;
  }

  get nbSeason(): number {
    return this._nbSeason;
  }

  set nbSeason(value: number) {
    this._nbSeason = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get critical(): string {
    return this._critical;
  }

  set critical(value: string) {
    this._critical = value;
  }

  get commentaries(): string {
    return this._commentaries;
  }

  set commentaries(value: string) {
    this._commentaries = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }
}

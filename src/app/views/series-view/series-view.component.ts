import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.css']
})
export class SeriesViewComponent implements OnInit {

  constructor() { }
  @Input() col: string;
  @Input() data: Array<any>;

  rowNumbers: any;


  ngOnInit(): void {

    const rows = Math.ceil(this.data.length / +this.col);
    this.rowNumbers = [];
    for (let i = 0; i < rows; i++) {
      this.rowNumbers.push(i);
    }
  }

  selectItems(rowIndex: number) {
    let selectedItems = [];
    const start = rowIndex * +this.col;
    const end = start + (+this.col - 1);

    for (let i = start; i <= end; i++) {
      if(this.data[i]) {
        selectedItems.push(this.data[i]);
      }
    }
    console.log(selectedItems, "selected item");
    return selectedItems;
  }

}

import { Component, Input } from '@angular/core';
import { data } from 'src/app/config';
import { TableData } from 'src/app/interfaces';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.scss']
})
export class NestedTableComponent {
  @Input() tableData?: TableData[];
  public temp: string = '';

  ngOnInit() {
    if (!this.tableData) {
      this.tableData = data;
    }
    this.temp = JSON.stringify(this.tableData);
  }
}

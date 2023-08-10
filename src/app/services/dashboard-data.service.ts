import { Injectable } from '@angular/core';
import { TableData } from '../interfaces';
import { Subject } from 'rxjs';
import { data } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { }

  tableData: TableData[] = data;
  hasSelectedRow: boolean = true;

  changeRowSelection() {
    const containsSelectedRow = (tableData: TableData[]): boolean => {
      for (const tableRow of tableData) {
        if (tableRow.isSelected) {
          return true;
        }
        if (tableRow['children']) {
          return containsSelectedRow(tableRow['children']);
        }
      }
      return false;
    }
    this.hasSelectedRow = containsSelectedRow(this.tableData);

  }
}

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
  hasSelectedRow: boolean = false;

  changeRowSelection() {
    const containsSelectedRow = (tableData: TableData[]): boolean => {

      let result = false;
      for (const tableRow of tableData) {
        if (tableRow.isSelected) {
          return true;
        }
        if (tableRow['children']) {
          result = containsSelectedRow(tableRow['children']);
          if (result === true) return true;
        }
      }
      return false;
    }
    this.hasSelectedRow = containsSelectedRow(this.tableData);

  }
}

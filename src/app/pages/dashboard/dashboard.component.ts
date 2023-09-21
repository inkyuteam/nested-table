import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/config';
import { TableData } from 'src/app/interfaces';
import { DashboardDataService } from 'src/app/services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public dashboardDataService: DashboardDataService) {

  }

  deleteBtnClicked() {
    let tableData = this.dashboardDataService.tableData;

    const deleteSelectedRows = (tableData: TableData[]): void => {
      for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].isSelected !== true) {
          if (tableData[i].children !== undefined) {
            deleteSelectedRows(tableData[i].children!);
            if (tableData[i].children?.length === 0) {
              tableData[i].children = undefined;
            }
          }
        } else {
          tableData.splice(i, 1);
          i -= 1;
        }
      }
    }

    deleteSelectedRows(tableData);

    this.dashboardDataService.tableData = tableData;
  }
}

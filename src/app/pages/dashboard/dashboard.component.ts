import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/config';
import { TableData } from 'src/app/interfaces';
import { DashboardDataService } from 'src/app/services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{

  constructor(public dashboardDataService: DashboardDataService) {
    this.dashboardDataService.tableData[0].isSelected = true;
  }
}

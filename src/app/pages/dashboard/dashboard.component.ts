import { Component } from '@angular/core';
import { data } from 'src/app/config';
import { TableData } from 'src/app/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tableData: TableData[] = data;

  ngOnInit(){
    this.tableData[0].isSelected = true;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { data } from 'src/app/config';
import { TableData } from 'src/app/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardDataService } from 'src/app/services/dashboard-data.service';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.scss']
})
export class NestedTableComponent {
  @Input() tableData!: TableData[];
  @Input() level: number = 1;
  @Output() tableDataChange = new EventEmitter<TableData[]>();

  constructor(private modalService: NgbModal, private dashboardDataService: DashboardDataService) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  handleSelectionChange(tableRow: TableData): void {
    tableRow.isSelected = !tableRow.isSelected;
    this.tableDataChange.emit(this.tableData);
    this.dashboardDataService.changeRowSelection();
  }

  handleExpandChange(tableRow: TableData): void {
    tableRow.isExpanded = !tableRow.isExpanded;
    this.dashboardDataService.changeRowSelection();
  }
}

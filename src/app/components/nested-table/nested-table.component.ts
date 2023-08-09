import { Component, EventEmitter, Input, Output } from '@angular/core';
import { data } from 'src/app/config';
import { TableData } from 'src/app/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.scss']
})
export class NestedTableComponent {
  @Input() tableData!: TableData[];
  @Input() level: number = 1;
  @Output() tableDataChange = new EventEmitter<TableData[]>();

  constructor(private modalService: NgbModal) { }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  handleSelectionChange(tableRow: TableData): void {
    tableRow.isSelected = !tableRow.isSelected;
    this.tableDataChange.emit(this.tableData);
  }

  handleExpandChange(tableRow: TableData): void {
    tableRow.isExpanded = !tableRow.isExpanded;
  }
}

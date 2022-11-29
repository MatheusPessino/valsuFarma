import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryLog } from 'src/app/models/categoryLog';
import { CategoryLogService } from 'src/app/services/category-log.service';

@Component({
  selector: 'app-category-log',
  templateUrl: './category-log.component.html',
  styleUrls: ['./category-log.component.scss']
})
export class CategoryLogComponent implements OnInit {

  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: CategoryLog[] = [];

  constructor(private service: CategoryLogService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'dt_update', 'name_old', 'name_new', 'description_old', 'description_new'];
  dataSource = new MatTableDataSource(this.tableData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(log => {
      this.tableData = log;
      this.dataSource = new MatTableDataSource<CategoryLog>(this.tableData);
      this.dataSource.paginator = this.paginator;
    });
  }

}

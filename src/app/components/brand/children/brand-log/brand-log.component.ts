import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BrandLog} from 'src/app/models/brandLog';
import { BrandLogService } from 'src/app/services/brand-log.service';

@Component({
  selector: 'app-brand-log',
  templateUrl: './brand-log.component.html',
  styleUrls: ['./brand-log.component.scss']
})
export class BrandLogComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: BrandLog[] = [];

  constructor(private service: BrandLogService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'dt_update', 'name_old', 'name_new'];
  dataSource = new MatTableDataSource(this.tableData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(log => {
      this.tableData = log;
      this.dataSource = new MatTableDataSource<BrandLog>(this.tableData);
      this.dataSource.paginator = this.paginator;
    });
  }

}

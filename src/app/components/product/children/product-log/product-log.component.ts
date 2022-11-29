import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductLog } from 'src/app/models/productLog';
import { ProductLogService } from 'src/app/services/product-log.service';

@Component({
  selector: 'app-product-log',
  templateUrl: './product-log.component.html',
  styleUrls: ['./product-log.component.scss']
})
export class ProductLogComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: ProductLog[] = [];

  constructor(private service: ProductLogService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'dt_update', 'name_old', 'name_new', 'description_old', 'description_new', 'price_old', 'price_new', 'stock_old', 'stock_new', 'category_old', 'category_new', 'brand_old', 'brand_new'];
  dataSource = new MatTableDataSource(this.tableData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(log => {
      this.tableData = log;
      this.dataSource = new MatTableDataSource<ProductLog>(this.tableData);
      this.dataSource.paginator = this.paginator;
    });
  }

}

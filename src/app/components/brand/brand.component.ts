import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: Brand[] = [];

  constructor(private service: BrandService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'name'];
  dataSource = new MatTableDataSource(this.tableData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(brand => {
      this.tableData = brand;
      this.dataSource = new MatTableDataSource<Brand>(this.tableData);
      this.dataSource.paginator = this.paginator;
    });
  }

}



import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: Category[] = [];

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource(this.tableData);

  initializeTable(): void {
    this.service.findAll().subscribe(brand => {
      this.tableData = brand;
      this.dataSource = new MatTableDataSource<Category>(this.tableData);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { HotToastService} from '@ngneat/hot-toast';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: Category[] = [];

  constructor(private service: CategoryService, private toastr: HotToastService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'name', 'description', 'edit', 'delete'];
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

  delete(id: number): void {
    this.service.delete(id).subscribe({
      next: response => {
        this.toastr.success("Cliente deletado com sucesso!");
        this.initializeTable();
      }
    });
  }
}

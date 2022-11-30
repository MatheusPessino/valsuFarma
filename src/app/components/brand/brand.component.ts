import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { HotToastService} from '@ngneat/hot-toast';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  public tableData: Brand[] = [];

  constructor(private service: BrandService, private toastr: HotToastService ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  displayedColumns: String[] = ['id', 'name', 'edit', 'delete'];
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

  delete(id: number): void {
    this.service.delete(id).subscribe({
      next: response => {
        this.toastr.success("Cliente deletado com sucesso!");
        this.initializeTable();
      }
    });
  }
}
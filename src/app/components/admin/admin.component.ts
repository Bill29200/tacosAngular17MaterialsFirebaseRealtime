
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//------------------------------------------------------------------------
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent implements OnInit {
//------------------------------------------------------------------------
  @ViewChild(MatSort) sort!: MatSort ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<Family>;
  displayedColumns: string[] = ['id', 'nom'];
  filter: string = '';
  length: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [3,5, 10, 25, 50];

  private familyRef!: AngularFireList<Family>;
//------------------------------------------------------------------------
  constructor(private db: AngularFireDatabase) {
    this.familyRef = this.db.list('family');
  }
//------------------------------------------------------------------------
  ngOnInit(): void {
    this.familyRef.snapshotChanges().subscribe((changes: any[]) => {
      this.dataSource = new MatTableDataSource(this.getFamilies(changes));
      this.length = this.dataSource.data.length;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
//------------------------------------------------------------------------
  private getFamilies(changes: any[]): Family[] {
    const families: Family[] = [];
    changes.forEach(change => {
      const key = change.key;
      const data = change.payload.val();
      families.push({ id: data.id, nom: data.nom });
    });
    return families;
  }
//------------------------------------------------------------------------
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
//------------------------------------------------------------------------
interface Family {
  id: string;
  nom: string;
}




import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GiocatoreService} from '../fanta-services/giocatore.service';
import {FantaGiocatore} from '../models/fanta-giocatore';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  giocatori: FantaGiocatore[];
  maschi = true;
  displayedColumns: string[] = ['nome', 'gruppo', 'ruolo', 'costo'];
  dataSource: MatTableDataSource<FantaGiocatore>;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private giocatoriService: GiocatoreService) {
    this.loadGiocatori();
  }

  ngOnInit() {
  }

  loadGiocatori() {
    console.log('load called with flag ' + this.maschi);
    if (this.maschi) {
      this.giocatoriService.getGiocatori()
        .subscribe((data) => {
          this.giocatori = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        });
    } else {
      this.giocatoriService.getGiocatrici()
        .subscribe((data) => {
          this.giocatori = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        });
    }
    this.maschi ? this.maschi = false : this.maschi = true;
  }

  ngAfterViewInit(): void {
    this.giocatoriService.getGiocatori().subscribe((giocatori: FantaGiocatore[]) => {
      this.giocatori = giocatori;
      this.dataSource = new MatTableDataSource(giocatori);
      this.dataSource.sort = this.sort;
    });
  }
}

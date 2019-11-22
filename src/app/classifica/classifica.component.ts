import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Squadra} from '../models/squadra';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {
  displayedColumns: string[] = ['squadra', 'pg', 'v', 'p', 's', 'gf', 'gs', 'dg', 'pt', 'ultime'];
  public gironeA: SquadreDataSource;
  public gironeC: SquadreDataSource;
  public gironeB: SquadreDataSource;
  public gironeAF: SquadreDataSource;
  public gironeBF: SquadreDataSource;



  constructor(private afs: AngularFirestore) {
    this.gironeA = new SquadreDataSource(afs, 'a');
    this.gironeB = new SquadreDataSource(afs, 'b');
    this.gironeC = new SquadreDataSource(afs, 'c');
    this.gironeAF = new SquadreDataSource(afs, 'af');
    this.gironeBF = new SquadreDataSource(afs, 'bf');
  }

  ngOnInit() {
  }

}

export class SquadreDataSource extends DataSource<any> {

  constructor(private afs: AngularFirestore, private girone: string) {
    super();
  }

  connect() {
    return this.afs.collection<Squadra>('squadre', ref =>
      ref.where('girone', '==', this.girone).orderBy('pt')).valueChanges();
  }

  disconnect() {

  }
}

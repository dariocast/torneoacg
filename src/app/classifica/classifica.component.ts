import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Squadra} from '../models/squadra.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {

  private squadraCollection: AngularFirestoreCollection<Squadra>;
  squadre: Observable<Squadra[]>;

  constructor(private afs: AngularFirestore) {
    this.squadraCollection = this.afs.collection<Squadra>('squadre');
    this.squadre = this.squadraCollection.valueChanges();
  }

  ngOnInit() {
  }

}

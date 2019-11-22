import { Component, OnInit } from '@angular/core';
import {Squadra} from '../models/squadra';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-squadre',
  templateUrl: './squadre.component.html',
  styleUrls: ['./squadre.component.css']
})
export class SquadreComponent implements OnInit {
  private squadraCollection: AngularFirestoreCollection<Squadra>;
  squadre: Observable<Squadra[]>;

  constructor(private afs: AngularFirestore) {
    this.squadraCollection = this.afs.collection<Squadra>('squadre');
    this.squadre = this.squadraCollection.valueChanges();
  }

  ngOnInit() {
  }

}

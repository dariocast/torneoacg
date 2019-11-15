import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Squadra} from '../models/squadra.model';
import {Partita} from '../models/partita.model';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  partiteRef: Observable<Partita[]>;
  partite = [];
  constructor(private afs: AngularFirestore) {
    this.partiteRef = this.afs.collection<Partita>('partite', ref =>
      ref.orderBy('data', 'asc')).valueChanges();
    this.partiteRef.subscribe(ref => {
      console.log(ref);
      ref.forEach(partita => {
        let squadraUno = {};
        this.afs.doc<Squadra>('squadre/' + partita.squadra1).get().subscribe(first => {
          squadraUno = first.data();
          let squadraDue = {};
          this.afs.doc<Squadra>('squadre/' + partita.squadra2).get().subscribe(second => {
            squadraDue = second.data();
            const quando = partita.data.toDate();
            this.partite.push({
              ammoniti: partita.ammoniti,
              data: quando.getDate() + '/' + (quando.getMonth() + 1) + '\n' + quando.getHours() + ':' + quando.getMinutes(),
              espulsi: partita.espulsi,
              golCasa: partita.golCasa,
              golTrasferta: partita.golTrasferta,
              marcatori: partita.marcatori,
              squadra1: squadraUno,
              squadra2: squadraDue
            });
          });
        });
      });
    });
  }

  addPartita() {
    const docData = {
      squadra1: 'katapulte_1_m',
      squadra2: 'vipers_se_m',
      golCasa: 0,
      golTrasferta: 0,
      data: firebase.firestore.Timestamp.fromDate(new Date('2019-11-17T16:30:00')),
      marcatori: [],
      ammoniti: [],
      espulsi: []
    };
    this.afs.collection('partite').doc(docData.squadra1 + docData.squadra2 + docData.data.toMillis()).set(
      docData
    );
  }

  ngOnInit() {
  }

}

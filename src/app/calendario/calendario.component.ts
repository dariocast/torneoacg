import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Squadra} from '../models/squadra';
import {Partita} from '../models/partita';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  partiteArray: Observable<Partita[]>;
  partite = [];

  constructor(private afs: AngularFirestore, public auth: AuthService) {
    this.partiteArray = this.afs.collection<Partita>('partite', ref =>
      ref.orderBy('data', 'asc')).valueChanges();
    this.partiteArray.subscribe(ref => {
      ref.forEach(partita => {
        this.afs.doc<Squadra>('squadre/' + partita.squadra1).valueChanges().subscribe(first => {
          this.afs.doc<Squadra>('squadre/' + partita.squadra2).valueChanges().subscribe(second => {
            const quando = partita.data.toDate();
            const singolaPartita = {
              ammoniti: partita.ammoniti,
              data: quando.getDate() + '/' + (quando.getMonth() + 1) + '\n' + quando.getHours() + ':' + quando.getMinutes(),
              timestamp: partita.data.seconds,
              espulsi: partita.espulsi,
              golCasa: partita.golCasa,
              golTrasferta: partita.golTrasferta,
              marcatori: partita.marcatori,
              squadra1: first,
              squadra2: second
            };
            this.partite.push(singolaPartita);
            this.partite.sort((a, b) => a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0);

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

export interface Partita {
  squadra1: string;
  squadra2: string;
  golCasa: number;
  golTrasferta: number;
  data: firebase.firestore.Timestamp;
  marcatori: string[];
  ammoniti: string[];
  espulsi: string[];
}

export interface FantaFormazione {
  giornata: number;
  mail: string;
  punteggio: number;
  modulo?: string;
  portiereTitolare?: string;
  difensoriTitolari?: string[];
  attaccantiTitolari?: string[];
  portiereRiserva?: string;
  difensoriRiserva?: string[];
  attaccantiRiserva?: string[];
}

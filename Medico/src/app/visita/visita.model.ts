export class Visita {
  Nome: string;
  Cognome: string;
  Indirizzo: string;
  Tel: string;
  Email: string;
  Data: Date;


  constructor(Nome: string, Cognome: string, Indirizzo: string, Tel: string, Email: string) {
    this.Nome = Nome;
    this.Cognome = Cognome;
    this.Indirizzo = Indirizzo;
    this.Tel = Tel;
    this.Email = Email;
  }
}

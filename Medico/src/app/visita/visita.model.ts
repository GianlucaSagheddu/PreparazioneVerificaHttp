export class Visita {
  Nome: string;
  Cognome: string;
  Indirizzo: string;
  Telefono: string;
  Email: string;
  Data: string;
  Ora: string;


  constructor(Nome: string, Cognome: string, Indirizzo: string, Tel: string, Email: string, Data: string, Ora: string) {
    this.Nome = Nome;
    this.Cognome = Cognome;
    this.Indirizzo = Indirizzo;
    this.Telefono = Tel;
    this.Email = Email;
    this.Data = Data;
    this.Ora = Ora;
  }
}

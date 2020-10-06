import Felszállás from './felszállás';

export default class FelszállásBérlet extends Felszállás{
 private _típus:string;
 private _érvényesség:Date;
 /**
  *
  */
 constructor(sor:string) {
    super(sor);
    const m:string[]=sor.split(" ");
    this._típus=m[3];
    const év = parseInt(m[4].substr(0, 4));
    const hónap = parseInt(m[4].substr(4, 2)) - 1;
    const nap = parseInt(m[4].substr(6, 2));
    this._érvényesség=new Date(év,hónap,nap);

 }
}
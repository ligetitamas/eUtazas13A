export default abstract class Felszállás {
    protected _megállóSorszám: number;
    protected _idő: Date;
    protected _kártyaAzon: string;
    /**
     *
     */
    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._megállóSorszám = parseInt(m[0]);
        //éééhhnn-óópp
        const év = parseInt(m[1].substr(0, 4));
        const hónap = parseInt(m[1].substr(4, 2)) - 1;
        const nap = parseInt(m[1].substr(6, 2));
        const óra = parseInt(m[1].substr(9, 2));
        const perc = parseInt(m[1].substr(11, 2));
        this._idő = new Date(év, hónap, nap, óra, perc, 0, 0);
        this._kártyaAzon = m[2];
    }
}

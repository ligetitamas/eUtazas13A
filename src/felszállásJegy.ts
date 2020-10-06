import Felszállás from "./Felszállás";

export default class FelszállásJegy extends Felszállás {
    private _jegyekSzáma: number;
    /**
     *
     */
    constructor(sor: string) {
        super(sor);
        this._jegyekSzáma = parseInt(sor.split(" ")[4]);
    }
}

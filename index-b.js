import { smurfB } from './dist/smurf.js';

class Y extends smurfB.SmurfB{
    constructor(){
        super();
    }
}

customElements.define('smurf-y', Y);
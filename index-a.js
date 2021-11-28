import { smurfA } from './dist/smurf.js';

class X extends smurfA.SmurfA{
    constructor(){
        super();
    }
}

customElements.define('smurf-x', X);
/**
 * @fileoverview This file only imports the smurfB module. When bundled by rollup, it's bundle (dist/b.js), 
 * should only contain:
 * - src/define.js (the registerCustomElement function)
 * - src/abstract.js 
 * - src/elements/smurfB.js
 */
import { smurfB } from './dist/smurf.js';

class Y extends smurfB.SmurfB{
    constructor(){
        super();
    }
}

customElements.define('smurf-y', Y);
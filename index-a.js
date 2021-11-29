/**
 * @fileoverview This file only imports the smurfA module. When bundled by rollup, it's bundle (dist/a.js), 
 * should only contain:
 * - src/define.js (the registerCustomElement function)
 * - src/abstract.js 
 * - src/elements/smurfA.js
 */
import { smurfA } from './dist/smurf.js';

class X extends smurfA.SmurfA{
    constructor(){
        super();
    }
}

customElements.define('smurf-x', X);
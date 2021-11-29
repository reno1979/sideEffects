/**
 * @fileoverview This file imports the smurfA and smurfC module. When bundled by rollup, it's bundle (dist/ac.js), 
 * should only contain:
 * - src/define.js (the registerCustomElement function)
 * - src/abstract.js 
 * - src/elements/smurfA.js
 * - src/elements/smurfB.js
 */
import { smurfA, smurfC } from './dist/smurf.js';

/**
 * @const {string}
 */
export const BASE_NAME = 'smurf-x'; 

/**
 * 
 * @const {HTMLElement}
 */
export const SmurfX = /*@__PURE__*/(() => getClass(smurfA.SmurfA));

/**
 * 
 * @param {HTMLElement} SuperClass 
 * @returns {HTMLElement}
 * 
 */
 export function getClass(SuperClass = smurfA.SmurfA){
    
    const _class = class extends SuperClass {

        #name = 'x';

        constructor(){
            super();
        }

        connectedCallback(){
            this.shadowRoot.innerHTML = `
                <div id="x"><span>test X</span><${smurfC.BASE_NAME}>C comp test<${smurfC.BASE_NAME}></div>
            `;
        }
    }

    SuperClass.register(BASE_NAME, _class);
    
    return _class;
}
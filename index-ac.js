import { smurfA, smurfC } from './dist/smurf.js';

export const BASE_NAME = 'smurf-x'; 

export const SmurfX = /*@__PURE__*/(() => getClass(smurfA.SmurfA));

/**
 * 
 * @param {HTMLElement} SuperClass 
 * @returns {HTMLElement}
 * @__PURE__
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
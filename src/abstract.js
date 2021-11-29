import { registerCustomElement } from './define.js';

/**
 * @const {HTMLElement}
 */
export const Abstract = /*@__PURE__*/(() => getClass(HTMLElement));

/**
 * 
 * @param {HTMLElement} SuperClass 
 * @returns {HTMLElement}
 */
export function getClass(SuperClass = HTMLElement){

    const _class = class extends SuperClass {

        #name = 'abstract';

        constructor(){
            super();
        }
        /**
         * 
         * @param {string} name 
         * @param {HTMLElement} cls
         */
        static register(name, cls){
            registerCustomElement( name, cls);
        }
    }

    
    return _class;
}
import { registerCustomElement } from './external.js';

export const Abstract = /*@__PURE__*/(() => getClass(HTMLElement));

/**
 * 
 * @param {HTMLElement} SuperClass 
 * @return
 * @__PURE__
 */
function getClass(SuperClass = HTMLElement){

    const _class = class extends SuperClass {

        #name = 'abstract';

        constructor(){
            super();
        }
        /**
         * 
         * @param {string} name 
         * @param {HTMLElement} cls 
         * @__PURE__
         */
        static register(name, cls){
            registerCustomElement( name, cls);
        }
    }

    
    return _class;
}
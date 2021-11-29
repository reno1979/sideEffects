import { Abstract } from '../abstract.js';

export const BASE_NAME = 'smurf-a'; 

export const SmurfA = /*@__PURE__*/(() => getClass(Abstract));
/**
 * 
 * @param {HTMLElement} SuperClass 
 * @returns {HTMLElement}
 * 
 */
export function getClass(SuperClass = Abstract){
    
    const _class = class extends SuperClass {

        #name = 'a';

        constructor(){
            super();
        }
    }

    SuperClass.register(BASE_NAME, _class);
    
    return _class;
}

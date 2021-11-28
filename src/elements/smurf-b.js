import { Abstract } from '../abstract.js';

export const BASE_NAME = 'smurf-b'; 

export const SmurfB = /*@__PURE__*/(() => getClass(Abstract));
/**
 * 
 * @param {HTMLElement} SuperClass 
 * @returns {HTMLElement}
 * @__PURE__
 * 
 */
export function getClass(SuperClass = Abstract){

    const _class = class extends SuperClass {

        #name = 'b';

        constructor(){
            super();
        }
    }

    SuperClass.register(BASE_NAME, _class);

    return _class;
}
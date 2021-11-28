/**
 * 
 * @param {string} basename 
 * @param {HTMLElement} cls
 */
 export function registerCustomElement(basename, cls){
    if(!customElements.get(basename)){
        customElements.define(basename, cls);
    }
}

/**
 * @param {string|Array<string>} names one or more `customElements` names
 * @return {Promise<HTMLElement>|Promise<Array<HTMLElement>>} one or more classes defined through
 * the `customElements` registry
 * https://github.com/WebReflection/once-defined/blob/master/esm/index.js
 */
 export function onceDefined(names){
    const aAll = [].concat(names);
    return Promise.all(
        aAll.map(name => customElements.whenDefined(name).then(
        Class => Class || customElements.get(name)
      ))
    ).then(result => aAll.length < 2 ? result[0] : result);
  }
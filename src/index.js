/**
 * @fileoverview This file imports all the element modules. When bundled by rollup, it's bundle (dist/smurf.js), 
 * should only contain:
 * - src/define.js (the registerCustomElement function)
 * - src/abstract.js 
 * - src/elements/smurfA.js
 * - src/elements/smurfB.js
 * - src/elements/smurfC.js
 */
export * as smurfA from './elements/smurf-a.js';
export * as smurfB from './elements/smurf-b.js';
export * as smurfC from './elements/smurf-c.js';
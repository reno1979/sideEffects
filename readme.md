# Side effects

Created for experimenting with the creation and usage of an ESM web components bundle. The bundle can be used to import web components by cherry pick, without ending up with the entire bundle caused by side effects. 

The web components are written in vanilla javascript, and are not much more than a constructor and a private name variable.

With only using Rolllup, a rollup config file and the @__PURE__ annotations in the source code, the end result is a bundle which can be used for cherry picking.

## Getting started

First clone this repository:

```sh
git clone https://github.com/reno1979/sideEffects.git
```

Install its dependency (Rollup):

```sh
npm ci
```

Build the bundles:

```sh
npm run build
```

## What does the build do?

The build command wil start with creating the main bundle ('dist/smurf.js'), this bundle will be the source for the others.

An overview: 

| rollup config | input | imports | output |
| -- | -- | -- | -- |
| rollup.config.smurf.js | src/index.js | src/elements/smurfA.js <br/> src/elements/smurfB.js <br/> src/elements/smurfC.js | dist/smurf.js |
| rollup.config.a.js | index-a.js | smurfA | dist/a.js |
| rollup.config.ac.js | index-ac.js | smurfA <br/> smurfC | dist/ac.js |
| rollup.config.b.js | index-b.js | smurfB | dist/b.js |


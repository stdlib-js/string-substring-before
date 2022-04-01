// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=r.isPrimitive,e=t;var i=function(r,t){var i;if(!s(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));if(!s(t))throw new TypeError(e("invalid argument. Second argument must be a string. Value: `%s`.",t));return-1===(i=r.indexOf(t))?r:r.substring(0,i)};export{i as default};
//# sourceMappingURL=index.mjs.map

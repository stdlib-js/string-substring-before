// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,e){var n;if(!r(s))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",s));if(!r(e))throw new TypeError(t("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1===(n=s.indexOf(e))?s:s.substring(0,n)}export{s as default};
//# sourceMappingURL=index.mjs.map

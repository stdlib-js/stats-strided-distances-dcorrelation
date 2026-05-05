// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-dpcorr@esm/index.mjs";function r(t,e,r,d,n,i,o){return t<=0?NaN:1-s(t,e,r,d,n,i,o)}function d(t,s,d,n,i){return r(t,s,d,e(t,d),n,i,e(t,i))}t(d,"ndarray",r);export{d as default,r as ndarray};
//# sourceMappingURL=index.mjs.map

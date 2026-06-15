"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=u(function(z,c){
var j=require('@stdlib/stats-strided-dpcorr/dist').ndarray;function m(e,r,a,t,i,n,o){return e<=0?NaN:1-j(e,r,a,t,i,n,o)}c.exports=m
});var y=u(function(A,d){
var q=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(e,r,a,t,i){var n=q(e,a),o=q(e,i);return R(e,r,a,n,t,i,o)}d.exports=_
});var p=u(function(B,l){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=y(),O=s();E(f,"ndarray",O);l.exports=f
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),v,x=g(b(__dirname,"./native.js"));h(x)?v=k:v=x;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

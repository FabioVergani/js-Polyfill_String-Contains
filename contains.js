(function(Polyfill){

 Polyfill(String.prototype,'contains',function(s,i){return this.indexOf(s,i)>=0});

})(function(o,p,x){if(!o[p]){o[p]=x}});

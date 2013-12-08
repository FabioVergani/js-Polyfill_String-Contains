//var whitespaceChars = " \t\n\r\f";

(function(o,p){var e=o[p];if(!e){o[p]=function(s,i){return this.indexOf(s,i)>=0}}})(String.prototype,'contains');


//

(function(Polyfill){//

 Polyfill(String.prototype,'contains',function(s,i){return this.indexOf(s,i)>=0});

})(function(o,p,x){if(o){var e=o[p];if(!e){o[p]=x}}})


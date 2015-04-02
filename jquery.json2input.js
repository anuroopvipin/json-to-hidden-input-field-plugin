(function ( $ ) {    
$.fn.json2input = function(o){
                var e=[];
                (function f(v, k){ 
                   if (typeof v == "object") {
                     for (var kp in v) {
                       if (Object.hasOwnProperty.call(v, kp)) { 
                         (f(v[kp], k != undefined ? k + "[" + kp + "]" : kp));
                         }
                     } 
                   } 
                   else { 
                     e.push("<input type=\"hidden\" name=\""+k+"\" value=\""+v+"\" />");
                   }
               })(o);
			   this.append("<form>"+e.join(" ")+"</form>");
               return this;
}}( jQuery ));

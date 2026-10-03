/*! @phoseinq/mazeqr 1.0.0 | https://github.com/phoseinq/mazeqr | MIT licence
 *  includes qrcode-generator 1.4.4 by Kazuhiko Arase (MIT) | https://github.com/kazuhikoarase/qrcode-generator */
/* qrcode-generator 1.4.4 by Kazuhiko Arase, MIT licence -- https://github.com/kazuhikoarase/qrcode-generator */
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1}))},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)};

// ---------------------------------------------------------------- the code as a hedge maze
// A skin over a real QR. The bits come from qrcode-generator and nothing else; the maze
// is drawn from them (dark = hedge, light = path), the artwork goes on top, and then the
// centre of every module is clamped back to its bit's tone and the code's structures are
// redrawn flat. The art may change how a module looks, never what it says.
var MAZE_SIMS = {};
var MAZE = {
  QR_VERSION: 0,              // 0 = smallest that fits (H, ~66 chars -> version 8, 49x49)
  ERROR_CORRECTION: "Q",      // Q (owner's choice): one alignment square for these links instead of six; the cores are kept, so the art does not lean on error correction
  QUIET_ZONE: 4,              // modules of plain light path round the code; nothing drawn in it
  NIGHT_QUIET_ZONE: 2,        // by night the lit margin is kept to the 2 modules readers accept (tested)
  NIGHT_LIGHT_MIN: .76,       // by night the light modules are lamp-lit stone, not cream: this is their floor
  NIGHT_COL: {path: "#f3e7cb", pathLine: "#e0d3b3", eyeLight: "#f3e7cb"},
  FADE: .9,                   // seconds a change of theme takes
  SAFE_CORE_RATIO: .50,       // side of the protected centre, as a share of the module (.42-.65)
  SPRITE_CORE_RATIO: .34,     // the same for what moves over the code: smaller, so people lose less (tested)
  CORE_FEATHER: .05,          // a softer clamp this much further out, so cores do not show as squares
  DARK_LUMINANCE_MAX: .16,    // relative luminance a dark core may reach (spec: .18, kept a margin)
  LIGHT_LUMINANCE_MIN: .91,   // and a light core must reach (spec: .90)
  CHARACTER_COUNT: 16,
  OUTSIDE_SHARE: .3,          // the balance the crowd learns to keep: this share of people in the garden
  INSIDE_MIN: 10,              // a floor under the learning: below this, those in the garden head back in
  MONSTER_COUNT: 1,
  SPEED: {walk: 1.45, flee: 3.3, monster: 2.0, sprint: 2.9}, // modules per second, each person varies round these
  FLEE_DISTANCE: 12,          // a person runs once the monster is this many steps away (along the maze)
  FPS: 30,
  FRAME: .075,                // the garden round the maze, as a share of the canvas side
  DETAIL: {full: 12, medium: 8, simple: 5}, // pixels per module each level needs
  ART_DETAIL_LEVEL: null,     // force "full" | "medium" | "simple" | "plain"; null = from size
  WALL_SHADE: .12,            // how far a hedge's shadow falls onto the path, in modules
  HEDGE_ROUND: .38,           // corner radius of a hedge's open corners, in modules (hardly matters to readers: ~1 point for quirc)
  CUT_WIDTH: .2,              // the thin walls between paths, in modules
  TOWER_ROUND: .5,            // rounding of the finder and alignment squares (1 = the old towers: quirc, used by Throne, fell to ~86%; .5 → ~96%)
  COL: {
    wall: "#0c2b38", wallTop: "#15455a", wallLeaf: "#1d5a6b", wallEdge: "#06161e",
    path: "#fbf6ea", path2: "#f3fafd", pathLine: "#e6dccb",
    eye: "#0a1f29", eyeLight: "#fdf9ef",
    tree: "#123f2c", tree2: "#1b5a3d", flower: ["#ff6b6b", "#ffd166", "#f78fb3", "#ffffff"],
    lamp: "#ffc94a", exit: "#ffcf4d",
    skin: ["#f1c27d", "#e0ac69", "#c68642", "#8d5524"],
    shirt: ["#e63946", "#f4a261", "#2a9d8f", "#8338ec", "#ff006e", "#3a86ff", "#06d6a0", "#ffbe0b"]
  },
  DEBUG: {showModuleGrid: false, showSafeCores: false, showReservedModules: false,
          hideArtwork: false, showConnectivity: false, showExclusion: false}
};

// 1. the bits ---------------------------------------------------------------------------
var MAZE_MATRIX = {};
function generateQrMatrix(url, cfg) {
  var mk = url + "|" + cfg.QR_VERSION + cfg.ERROR_CORRECTION;
  if (MAZE_MATRIX[mk]) return MAZE_MATRIX[mk];
  var qr;
  try { qr = qrcode(cfg.QR_VERSION, cfg.ERROR_CORRECTION); qr.addData(url); qr.make(); }
  catch (e) { return null; }
  var n = qr.getModuleCount(), m = [];
  for (var r = 0; r < n; r++) { m.push([]); for (var c = 0; c < n; c++) m[r].push(qr.isDark(r, c)); }
  return (MAZE_MATRIX[mk] = {n: n, version: (n - 17) / 4, dark: m});
}

// 2. what the reader needs to find the code, by role -----------------------------------
var QR_ALIGN = [[], [], [6,18], [6,22], [6,26], [6,30], [6,34], [6,22,38], [6,24,42], [6,26,46], [6,28,50],
  [6,30,54], [6,32,58], [6,34,62], [6,26,46,66], [6,26,48,70], [6,26,50,74], [6,30,54,78], [6,30,56,82],
  [6,30,58,86], [6,34,62,90], [6,28,50,72,94], [6,26,50,74,98], [6,30,54,78,102], [6,28,54,80,106],
  [6,32,58,84,110], [6,30,58,86,114], [6,34,62,90,118], [6,26,50,74,98,122], [6,30,54,78,102,126],
  [6,26,52,78,104,130], [6,30,56,82,108,134], [6,34,60,86,112,138], [6,30,58,86,114,142],
  [6,34,62,90,118,146], [6,30,54,78,102,126,150], [6,24,50,76,102,128,154], [6,28,54,80,106,132,158],
  [6,32,58,84,110,136,162], [6,26,54,82,110,138,166], [6,30,58,86,114,142,170]];
function buildReservedMap(M) {
  var n = M.n, v = M.version, role = [];
  for (var r = 0; r < n; r++) { role.push([]); for (var c = 0; c < n; c++) role[r].push(""); }
  function set(r, c, k) { if (r >= 0 && c >= 0 && r < n && c < n && !role[r][c]) role[r][c] = k; }
  [[0, 0], [0, n - 7], [n - 7, 0]].forEach(function (o) {
    for (var r = -1; r <= 7; r++) for (var c = -1; c <= 7; c++)
      set(o[0] + r, o[1] + c, r >= 0 && r < 7 && c >= 0 && c < 7 ? "finder" : "separator");
  });
  var al = QR_ALIGN[v] || [];
  al.forEach(function (a) { al.forEach(function (b) {
    if (role[a][b]) return;                       // the three that would sit on a finder are not there
    for (var r = -2; r <= 2; r++) for (var c = -2; c <= 2; c++) set(a + r, b + c, "align");
  }); });
  for (var i = 8; i < n - 8; i++) { set(6, i, "timing"); set(i, 6, "timing"); }
  set(4 * v + 9, 8, "darkmod");
  for (i = 0; i <= 8; i++) { set(8, i, "format"); set(i, 8, "format"); }
  for (i = 0; i < 8; i++) { set(8, n - 1 - i, "format"); set(n - 1 - i, 8, "format"); }
  if (v >= 7) for (var a2 = 0; a2 < 6; a2++) for (var b2 = 0; b2 < 3; b2++) {
    set(a2, n - 11 + b2, "version"); set(n - 11 + b2, a2, "version");
  }
  return role;
}

// 3. which neighbours a module joins: bit 1 up, 2 right, 4 down, 8 left (same colour) ---
function analyzeConnectivity(M) {
  var n = M.n, d = M.dark, k = [];
  function same(r, c, r2, c2) { return r2 >= 0 && c2 >= 0 && r2 < n && c2 < n && d[r2][c2] === d[r][c]; }
  for (var r = 0; r < n; r++) { k.push([]); for (var c = 0; c < n; c++)
    k[r].push((same(r, c, r - 1, c) ? 1 : 0) | (same(r, c, r, c + 1) ? 2 : 0) | (same(r, c, r + 1, c) ? 4 : 0) | (same(r, c, r, c - 1) ? 8 : 0)); }
  return k;
}

// a seeded random, so a link always looks the same
function mazeRand(seed) { var s = seed >>> 0 || 1;
  return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; }; }
function hashStr(t) { var h = 2166136261; for (var i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

// 3b. a real maze inside the code's paths. The open (light) modules form a grid graph; a
// randomised depth-first search (recursive backtracker) keeps a spanning tree of it, which is
// a perfect maze: one route between any two cells, long winding corridors, dead ends. Every
// open-open edge the tree leaves out becomes a thin wall on the line between the two modules,
// which is the gutter between their cores, so the bits are untouched.
function buildMazeGraph(L) {
  var n = L.n, D = L.M.dark, R = L.role, rnd = mazeRand(L.seed + 11), adj = {}, comp = {}, cells = [], cut = [], sizes = [];
  function free(r, c) { for (var a = -1; a <= 1; a++) for (var b = -1; b <= 1; b++) { var y = r + a, x = c + b;
      if (y >= 0 && x >= 0 && y < n && x < n && R[y][x]) return false; } return true; }
  function open(r, c) { return r >= 0 && c >= 0 && r < n && c < n && !D[r][c] && !R[r][c] && free(r, c); }
  function link(a, b) { (adj[a[0] * n + a[1]] = adj[a[0] * n + a[1]] || []).push(b); (adj[b[0] * n + b[1]] = adj[b[0] * n + b[1]] || []).push(a); }
  var DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) {
    if (!open(r, c) || comp[r * n + c] != null) continue;
    var id = sizes.length, stack = [[r, c]], size = 1; comp[r * n + c] = id;
    while (stack.length) {
      var cur = stack[stack.length - 1], nx = [];
      DIRS.forEach(function (d) { var a = cur[0] + d[0], b = cur[1] + d[1]; if (open(a, b) && comp[a * n + b] == null) nx.push([a, b]); });
      if (!nx.length) { stack.pop(); continue; }
      var nxt = nx[Math.floor(rnd() * nx.length)]; comp[nxt[0] * n + nxt[1]] = id; link(cur, nxt); stack.push(nxt); size++;
    }
    sizes.push(size);
  }
  function linked(a, b) { return (adj[a[0] * n + a[1]] || []).some(function (m) { return m[0] === b[0] && m[1] === b[1]; }); }
  for (r = 0; r < n; r++) for (c = 0; c < n; c++) if (open(r, c)) {
    cells.push([r, c]);
    // half the thin walls are left out (they are decoration, not bits): fewer dead ends, ways round
    if (open(r, c + 1) && !linked([r, c], [r, c + 1])) { if (rnd() < .5) cut.push([r, c, 1]); else link([r, c], [r, c + 1]); }   // right of (r,c)
    if (open(r + 1, c) && !linked([r, c], [r + 1, c])) { if (rnd() < .5) cut.push([r, c, 0]); else link([r, c], [r + 1, c]); }   // below (r,c)
  }
  L.adj = adj; L.comp = comp; L.compSize = sizes; L.cells = cells; L.cut = cut;
}
function drawMazeCuts(g, L) {
  var C = L.cfg.COL, px = L.px;
  function lines(w, col, dy) { g.strokeStyle = col; g.lineWidth = w; g.lineCap = "round"; g.beginPath();
    L.cut.forEach(function (e) { var x = L.ox + e[1] * px, y = L.oy + e[0] * px + dy;
      if (e[2]) { g.moveTo(x + px, y); g.lineTo(x + px, y + px); } else { g.moveTo(x, y + px); g.lineTo(x + px, y + px); } });
    g.stroke(); }
  lines(px * L.cfg.CUT_WIDTH, "rgba(12,43,56,.25)", px * .08);   // shadow
  lines(px * L.cfg.CUT_WIDTH, C.wall, 0);
  if (L.level === "full") lines(px * .08, C.wallLeaf, -px * .03);
}

function mazeStiles(L) {
  if (L.stiles) return L.stiles;
  var n = L.n, D = L.M.dark, R = L.role, rnd = mazeRand(L.seed + 59), on = {}, comp = {}, ids = 0, size = {};
  function key(r, c) { return r * n + c; }
  (L.cells || []).forEach(function (c) { on[key(c[0], c[1])] = 1; });
  (L.cells || []).forEach(function (c) { var k0 = key(c[0], c[1]); if (comp[k0] != null) return;
    var q = [c]; comp[k0] = ids;
    for (var i = 0; i < q.length; i++) (L.adj[key(q[i][0], q[i][1])] || []).forEach(function (m) { var km = key(m[0], m[1]); if (on[km] && comp[km] == null) { comp[km] = ids; q.push(m); } });
    size[ids] = q.length; ids++; });
  var cand = [];
  for (var r = 1; r < n - 1; r++) for (var c = 1; c < n - 1; c++) {
    if (!D[r][c] || R[r][c]) continue;
    [[[0, -1], [0, 1]], [[-1, 0], [1, 0]]].forEach(function (pr) {
      var a = [r + pr[0][0], c + pr[0][1]], b = [r + pr[1][0], c + pr[1][1]], ka = key(a[0], a[1]), kb = key(b[0], b[1]);
      if (on[ka] && on[kb] && comp[ka] !== comp[kb] && size[comp[ka]] >= 6 && size[comp[kb]] >= 6) cand.push({h: [r, c], a: a, b: b, ca: comp[ka], cb: comp[kb], horiz: pr[0][0] === 0}); }); }
  for (var i = cand.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = cand[i]; cand[i] = cand[j]; cand[j] = t; }
  var up = []; for (i = 0; i < ids; i++) up.push(i);
  function find(x) { while (up[x] !== x) { up[x] = up[up[x]]; x = up[x]; } return x; }
  var out = [];
  cand.forEach(function (s2) { var x = find(s2.ca), y = find(s2.cb); if (x !== y) { up[x] = y; out.push(s2); } });
  return (L.stiles = out);
}
function drawStiles(g, L) {
  var px = L.px;
  mazeStiles(L).forEach(function (s2) { var x = L.ox + (s2.h[1] + .5) * px, y = L.oy + (s2.h[0] + .5) * px, w = s2.horiz ? px * 1.5 : px * .62, h = s2.horiz ? px * .62 : px * 1.5;
    g.fillStyle = "rgba(0,0,0,.28)"; g.fillRect(x - w / 2 + 1.5, y - h / 2 + 2, w, h);
    g.fillStyle = "#9c6b3f"; g.fillRect(x - w / 2, y - h / 2, w, h);
    g.strokeStyle = "#6b4226"; g.lineWidth = Math.max(1, px * .06);
    for (var k = 1; k < 4; k++) { g.beginPath(); if (s2.horiz) { g.moveTo(x - w / 2 + k * w / 4, y - h / 2); g.lineTo(x - w / 2 + k * w / 4, y + h / 2); }
      else { g.moveTo(x - w / 2, y - h / 2 + k * h / 4); g.lineTo(x + w / 2, y - h / 2 + k * h / 4); } g.stroke(); }
  });
}

// 4-5. the floor and the hedges ----------------------------------------------------------
function mazePaver(L) {
  // flagstone joints on the module grid: a line along a module's bottom or right edge, by a hash
  // of the module, so the same joint is drawn whoever draws it. Edges are gutters: no core is touched.
  var px = L.px, C = L.cfg.COL;
  return function (g, x0, y0, w, h, skip) {
    if (L.level !== "full") return;
    g.strokeStyle = C.pathLine; g.lineWidth = Math.max(1, px * .05); g.beginPath();
    var c0 = Math.floor((x0 - L.ox) / px) - 1, c1 = Math.ceil((x0 + w - L.ox) / px), r0 = Math.floor((y0 - L.oy) / px) - 1, r1 = Math.ceil((y0 + h - L.oy) / px);
    for (var r = r0; r <= r1; r++) for (var c = c0; c <= c1; c++) {
      if (skip && skip(r, c)) continue;
      var x = L.ox + c * px, y = L.oy + r * px, hsh = Math.abs(Math.sin(r * 12.9898 + c * 78.233) * 43758.5453) % 1;
      if (hsh < .5) { g.moveTo(x, y + px); g.lineTo(x + px, y + px); }
      if ((hsh * 7) % 1 < .5) { g.moveTo(x + px, y); g.lineTo(x + px, y + px); }
    }
    g.stroke();
  };
}
function drawMazeBase(g, L) {
  var C = L.cfg.COL, px = L.px;
  g.fillStyle = C.path; g.fillRect(L.qx, L.qy, L.qw, L.qw);           // the quiet zone and paths
  // flagstone joints over the quiet zone and the open paths, the same pattern as the plaza's
  L.paveJoints(g, L.qx, L.qy, L.qw, L.qw, function (r, c) { var out = r < 0 || c < 0 || r >= L.n || c >= L.n;
    return out ? L.night : L.M.dark[r][c] || L.role[r][c]; });
}
function hedgeShape(g, L, inset) {
  // one path for all ordinary hedge: a square per module, rounded only on corners
  // where both sides are open, so neighbours merge into walls
  var px = L.px, k = L.conn, e = inset * px;
  g.beginPath();
  for (var r = 0; r < L.n; r++) for (var c = 0; c < L.n; c++) {
    if (!L.M.dark[r][c] || L.role[r][c]) continue;
    var b = k[r][c], x = L.ox + c * px, y = L.oy + r * px, rad = px * L.cfg.HEDGE_ROUND;
    var t = b & 1 ? 0 : e, rt = b & 2 ? 0 : e, bt = b & 4 ? 0 : e, lt = b & 8 ? 0 : e;
    var x0 = x + lt, y0 = y + t, x1 = x + px - rt, y1 = y + px - bt;
    var tl = (b & 9) ? 0 : rad, tr = (b & 3) ? 0 : rad, br = (b & 6) ? 0 : rad, bl = (b & 12) ? 0 : rad;
    g.moveTo(x0 + tl, y0); g.lineTo(x1 - tr, y0); g.arcTo(x1, y0, x1, y0 + tr, tr);
    g.lineTo(x1, y1 - br); g.arcTo(x1, y1, x1 - br, y1, br);
    g.lineTo(x0 + bl, y1); g.arcTo(x0, y1, x0, y1 - bl, bl);
    g.lineTo(x0, y0 + tl); g.arcTo(x0, y0, x0 + tl, y0, tl); g.closePath();
  }
}
function drawMazeWalls(g, L) {
  var C = L.cfg.COL, px = L.px, full = L.level === "full", med = full || L.level === "medium";
  if (med) {                                                          // the hedge's shadow on the path
    g.save(); g.translate(px * L.cfg.WALL_SHADE * .6, px * L.cfg.WALL_SHADE);
    hedgeShape(g, L, 0); g.fillStyle = "rgba(12,43,56,.22)"; g.fill(); g.restore();
  }
  hedgeShape(g, L, 0); g.fillStyle = C.wall; g.fill();               // the side of the hedge
  if (med) {                                                          // its top, a little up and lit
    g.save(); g.translate(0, -px * .06); hedgeShape(g, L, .07);
    var tg = g.createLinearGradient(L.ox, L.oy, L.ox + L.n * px, L.oy + L.n * px);
    tg.addColorStop(0, C.wallLeaf); tg.addColorStop(1, C.wallTop); g.fillStyle = tg; g.fill(); g.restore();
  }
  if (med && L.cut) drawMazeCuts(g, L);
  if (full) {                                                         // leaves: small darker and lighter clumps
    var lf = [new Path2D(), new Path2D()];
    for (var r = 0; r < L.n; r++) for (var c = 0; c < L.n; c++) {
      if (!L.M.dark[r][c] || L.role[r][c]) continue;
      var x = L.ox + c * px, y = L.oy + r * px;
      for (var q = 0; q < 3; q++) { var lx = x + px * (.15 + .7 * L.rnd()), ly = y + px * (.15 + .7 * L.rnd()), lr = px * (.08 + .07 * L.rnd());
        var pp = lf[q ? 1 : 0]; pp.moveTo(lx + lr, ly); pp.arc(lx, ly, lr, 0, 7); }
    }
    g.fillStyle = "rgba(4,20,28,.45)"; g.fill(lf[0]); g.fillStyle = "rgba(70,140,150,.35)"; g.fill(lf[1]);
  }
}

// 6. things in the maze ------------------------------------------------------------------
// Props stand where they agree with the bits: trees and flowers on hedge (dark), lamps,
// arrows and signs on open path (light, drawn pale or thin). Whatever still lands on a
// core is clamped back afterwards.
function mazeCells(L, want, test) {
  var out = [];
  for (var r = 1; r < L.n - 1; r++) for (var c = 1; c < L.n - 1; c++)
    if (!L.role[r][c] && L.M.dark[r][c] === want && test(r, c)) out.push([r, c]);
  return out;
}
function mazePick(L, list, k) { var out = [];
  while (list.length && out.length < k) out.push(list.splice(Math.floor(L.rnd() * list.length), 1)[0]);
  return out; }
function mazeFree(L, r, c, rad) { for (var i = 0; i < L.used.length; i++)
  if (Math.abs(L.used[i][0] - r) <= rad && Math.abs(L.used[i][1] - c) <= rad) return false; return true; }
function drawProps(g, L) {
  var C = L.cfg.COL, px = L.px, D = L.M.dark;
  // trees: on a 2x2 block of hedge, a round crown with a lit side
  var blocks = mazeCells(L, true, function (r, c) { return D[r + 1][c] && D[r][c + 1] && D[r + 1][c + 1] &&
    !L.role[r + 1][c] && !L.role[r][c + 1] && !L.role[r + 1][c + 1]; });
  mazePick(L, blocks, L.level === "full" ? 10 : 5).forEach(function (b) {
    if (!mazeFree(L, b[0], b[1], 2)) return; L.used.push(b);
    var x = L.ox + (b[1] + 1) * px, y = L.oy + (b[0] + 1) * px, R = px * .95;
    g.fillStyle = "rgba(0,0,0,.25)"; g.beginPath(); g.arc(x + R * .18, y + R * .22, R, 0, 7); g.fill();
    g.fillStyle = C.tree; g.beginPath(); g.arc(x, y, R, 0, 7); g.fill();
    for (var q = 0; q < 5; q++) { var a = q * 1.26 + L.rnd();
      g.fillStyle = C.tree2; g.beginPath(); g.arc(x + Math.cos(a) * R * .55 - R * .12, y + Math.sin(a) * R * .55 - R * .12, R * .42, 0, 7); g.fill(); }
    g.fillStyle = "rgba(160,220,170,.25)"; g.beginPath(); g.arc(x - R * .35, y - R * .35, R * .3, 0, 7); g.fill();
  });
  if (L.level !== "full") return;
  // flowers on the hedge's open edges
  mazeCells(L, true, function () { return L.rnd() < .09; }).forEach(function (b) {
    var x = L.ox + b[1] * px, y = L.oy + b[0] * px;
    g.fillStyle = C.flower[Math.floor(L.rnd() * C.flower.length)];
    for (var q = 0; q < 3; q++) { g.beginPath(); g.arc(x + px * (.12 + .76 * L.rnd()), y + px * (.12 + .2 * L.rnd()), px * .07, 0, 7); g.fill(); }
  });
}

// someone sitting, from above
function mazeSitter(g, x, y, u, shirt, skin, hair) {
  g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(x + u * .08, y + u * .32, u * .3, u * .12, 0, 0, 7); g.fill();
  g.fillStyle = shirt; g.beginPath(); g.ellipse(x, y + u * .1, u * .26, u * .22, 0, 0, 7); g.fill();
  g.fillStyle = skin; g.beginPath(); g.arc(x, y - u * .18, u * .17, 0, 7); g.fill();
  g.fillStyle = hair; g.beginPath(); g.arc(x, y - u * .23, u * .17, Math.PI * 1.05, Math.PI * 1.95); g.fill();
}
// a little person seen from a bit above: shadow, legs, body, arms, head, hair. o.lean tips the
// figure over its feet, o.look turns the head
function mazePerson(g, x, y, u, o) {
  var st = o.step || 0, fy = y + u * .58;
  g.fillStyle = "rgba(0,0,0,.22)"; g.beginPath(); g.ellipse(x + u * .1, fy + u * .04, u * .38, u * .13, 0, 0, 7); g.fill();
  g.save(); g.translate(x, fy); g.rotate(o.lean || 0); g.translate(-x, -fy);
  g.strokeStyle = "#2b2d42"; g.lineWidth = u * .16; g.lineCap = "round";
  g.beginPath(); g.moveTo(x - u * .1, y + u * .2); g.lineTo(x - u * .1 - st * u * .22, y + u * .58);
  g.moveTo(x + u * .1, y + u * .2); g.lineTo(x + u * .1 + st * u * .22, y + u * .58); g.stroke();
  g.fillStyle = o.shirt; g.strokeStyle = "rgba(20,30,40,.55)"; g.lineWidth = u * .05;
  g.beginPath(); g.ellipse(x, y + u * .08, u * .26, u * .3, 0, 0, 7); g.fill(); g.stroke();
  g.strokeStyle = o.skin; g.lineWidth = u * .11;
  var ar = o.arms || "swing";
  g.beginPath();
  if (ar === "up") { g.moveTo(x - u * .2, y - u * .02); g.lineTo(x - u * .3, y - u * .42); g.moveTo(x + u * .2, y - u * .02); g.lineTo(x + u * .3, y - u * .42); }
  else if (ar === "head") { g.moveTo(x - u * .22, y); g.lineTo(x - u * .2, y - u * .38); g.moveTo(x + u * .22, y); g.lineTo(x + u * .3, y + u * .3); }
  else { g.moveTo(x - u * .22, y); g.lineTo(x - u * .3 + st * u * .2, y + u * .3); g.moveTo(x + u * .22, y); g.lineTo(x + u * .3 - st * u * .2, y + u * .3); }
  g.stroke();
  var hx = x + (o.look || 0) * u * .07;
  g.fillStyle = o.skin; g.strokeStyle = "rgba(20,30,40,.5)"; g.lineWidth = u * .045;
  g.beginPath(); g.arc(hx, y - u * .32, u * .22, 0, 7); g.fill(); g.stroke();
  g.fillStyle = o.hair; g.beginPath(); g.arc(hx, y - u * .38, u * .22, Math.PI * 1.05, Math.PI * 1.95); g.fill();
  g.restore();
}

// 6b. the chase. Inside the code people walk the maze's corridors (its tree edges); the monster
// hunts the nearest person in the maze by breadth-first search; a person who finds it closer
// than FLEE_DISTANCE steps runs for the neighbour farthest from it, and out of the maze if they
// are at a gate. The gates are the open modules on the code's edge: people leave through them,
// walk round the garden beyond the quiet zone, and come back in through another.
// Nothing moves on a fixed loop: every person has their own pace, which drifts; they slow into
// corners, pause at junctions to choose, look about, and the drawn figure follows its goal
// with a little lag, so turns are curves, not right angles.
function mazeSim(L) {
  var n = L.n, cfg = L.cfg, Q = MAZE.QUIET_ZONE, rnd = mazeRand(L.seed + 23), C = cfg.COL;
  if (!L.cells || L.cells.length < 30) return null;
  function key(c) { return c[0] * n + c[1]; }
  var ok = {}, A = {}, comp = {}, sizes = [];
  L.cells.forEach(function (c) {
    for (var dr = -1; dr <= 1; dr++) for (var dc = -1; dc <= 1; dc++) { var r = c[0] + dr, q = c[1] + dc;
      if (r >= 0 && q >= 0 && r < n && q < n && L.role[r][q]) return; }
    ok[key(c)] = 1; });
  L.cells.forEach(function (c) { if (ok[key(c)]) A[key(c)] = (L.adj[key(c)] || []).filter(function (m) { return ok[key(m)]; }); });
  mazeStiles(L).forEach(function (s2) { if (A[key(s2.a)] && A[key(s2.b)]) { A[key(s2.a)].push(s2.b); A[key(s2.b)].push(s2.a); } });
  function nb(c) { return A[key(c)] || []; }
  function safeBfs(from, nbf) {                                      // reachable cells the monster cannot reach first
    var d = {}, par = {}, q = [from]; d[key(from)] = 0;
    for (var i = 0; i < q.length; i++) { var cc = q[i], dd = d[key(cc)] + 1;
      nbf(cc).forEach(function (m) { var k = key(m); if (d[k] != null) return; var dm = mdist(m);
        if (dm != null && dm <= dd * 1.15 + 1) return; d[k] = dd; par[k] = cc; q.push(m); }); }
    return {d: d, par: par}; }
  function hopNb(c) { var out = []; [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(function (d) { var q = [c[0] + d[0], c[1] + d[1]], q2 = [c[0] + 2 * d[0], c[1] + 2 * d[1]];
      if (q[0] < 0 || q[1] < 0 || q[0] >= n || q[1] >= n) return;
      if (ok[key(q)] && comp[key(q)] === comp[key(c)]) out.push(q);                                   // over a low wall
      else if (L.M.dark[q[0]][q[1]] && !L.role[q[0]][q[1]] && q2[0] >= 0 && q2[1] >= 0 && q2[0] < n && q2[1] < n && ok[key(q2)] && gated[comp[key(q2)]] && nb(q2).length) out.push(q2); });   // over a hedge, into a part with a gate
    return out; }
  function bfsHop(from) { var d = {}, par = {}, q = [from]; d[key(from)] = 0;
    for (var i = 0; i < q.length; i++) { var cc = q[i], dd = d[key(cc)];
      hopNb(cc).forEach(function (m) { var k = key(m); if (d[k] == null) { d[k] = dd + 1; par[k] = cc; q.push(m); } }); }
    return {d: d, par: par}; }
  function linked(a, b) { return nb(a).some(function (m) { return key(m) === key(b); }); }
  L.cells.forEach(function (c) { if (!ok[key(c)] || comp[key(c)] != null) return;
    var id = sizes.length, q = [c]; comp[key(c)] = id;
    for (var i = 0; i < q.length; i++) nb(q[i]).forEach(function (m) { if (comp[key(m)] == null) { comp[key(m)] = id; q.push(m); } });
    sizes.push(q.length); });
  var gates = [], gateAt = {}, gated = {};
  L.cells.forEach(function (c) { if (!ok[key(c)] || sizes[comp[key(c)]] < 12 || !nb(c).length) return;
    var o = c[0] === 0 ? [-1, 0] : c[0] === n - 1 ? [1, 0] : c[1] === 0 ? [0, -1] : c[1] === n - 1 ? [0, 1] : null;
    if (o) { var gt = {c: c, o: o}; gates.push(gt); gateAt[key(c)] = gt; gated[comp[key(c)]] = 1; } });
  var big = -1; sizes.forEach(function (z, i) { if (gated[i] && (big < 0 || z > sizes[big])) big = i; });
  var homeCells = L.cells.filter(function (c) { return ok[key(c)] && gated[comp[key(c)]] && nb(c).length; });
  var gatedSize = 0; sizes.forEach(function (z, i) { if (gated[i]) gatedSize += z; });
  var bigCells = homeCells.filter(function (c) { return comp[key(c)] === big; });
  if (bigCells.length < 20 || !gates.length) return null;
  function bfs(from) { var d = {}, par = {}, q = [from]; d[key(from)] = 0;
    for (var i = 0; i < q.length; i++) { var cc = q[i], dd = d[key(cc)];
      nb(cc).forEach(function (m) { var k = key(m); if (d[k] == null) { d[k] = dd + 1; par[k] = cc; q.push(m); } }); }
    return {d: d, par: par}; }
  // the garden walk: beyond the quiet zone, a band DIN..DOUT modules out from the code's edge
  var DIN = Q + 1.0, DOUT = Q + 2.5, DM = (DIN + DOUT) / 2, DBOT = Q + 1.9;
  function sideOf(x, y) { var v = [-y, x - n, y - n, -x], b = 0; for (var i = 1; i < 4; i++) if (v[i] > v[b]) b = i; return b; } // 0 top 1 right 2 bottom 3 left
  var CORNER = [[n + DM, -DM], [n + DM, n + DM], [-DM, n + DM], [-DM, -DM]];   // after side i, going clockwise
  function ringPoint(side, near) { var u = -DM + .6 + rnd() * (n + 2 * DM - 1.2), d = DIN + rnd() * ((side === 2 ? DBOT : DOUT) - DIN);
    if (near) { var cu = side % 2 ? near[1] : near[0], cd = side === 0 ? -near[1] : side === 1 ? near[0] - n : side === 2 ? near[1] - n : -near[0];
      u = Math.max(-DM + .6, Math.min(n + DM - .6, cu + (rnd() < .5 ? -1 : 1) * (3 + rnd() * 5)));
      d = Math.abs(d - cd) < .6 ? (cd < DM ? Math.min(side === 2 ? DBOT : DOUT, cd + .9) : Math.max(DIN, cd - .9)) : d; }
    return side === 0 ? [u, -d] : side === 1 ? [n + d, u] : side === 2 ? [u, n + d] : [-d, u]; }
  function gateOut(gt) { return [gt.c[1] + .5 + gt.o[1] * (DM + .5), gt.c[0] + .5 + gt.o[0] * (DM + .5)]; }
  function inBand(q) {                                               // a point pulled back into the walk
    var sd = sideOf(q[0], q[1]), hi = sd === 2 ? DBOT : DOUT, d = sd === 0 ? -q[1] : sd === 1 ? q[0] - n : sd === 2 ? q[1] - n : -q[0];
    var dd = Math.max(DIN, Math.min(hi, d)), k = dd - d;
    return sd === 0 ? [q[0], q[1] - k] : sd === 1 ? [q[0] + k, q[1]] : sd === 2 ? [q[0], q[1] + k] : [q[0] - k, q[1]]; }
  function zig(from, path) {
    var out = [], a = from;
    path.forEach(function (b) { var dx = b[0] - a[0], dy = b[1] - a[1], ln = Math.hypot(dx, dy) || 1, m = Math.floor(ln / 3.2);
      for (var j = 1; j <= m; j++) { var f = j / (m + 1), o = (j % 2 ? 1 : -1) * (.45 + rnd() * .5);
        out.push(inBand([a[0] + dx * f - dy / ln * o, a[1] + dy * f + dx / ln * o])); }
      out.push(b); a = b; });
    return out; }
  function route(from, to) { return zig(from, route0(from, to)); }
  function route0(from, to) {                                        // round the garden, by the shorter way
    var a = sideOf(from[0], from[1]), b = sideOf(to[0], to[1]), cw = (b - a + 4) % 4, path = [];
    if (cw === 2 && rnd() < .5) cw = -2; else if (cw === 3) cw = -1;
    for (var k = 0; k !== cw; k += cw > 0 ? 1 : -1) path.push(CORNER[cw > 0 ? (a + k) % 4 : (a + k + 7) % 4].slice());   // k counts down going anticlockwise
    path.push(to); return path; }
  function drift(seed, t) { return Math.sin(t * .37 + seed) * .5 + Math.sin(t * .83 + seed * 2.3) * .3 + Math.sin(t * 1.9 + seed * .7) * .2; }

  var monsters = [], people = [], puffs = [], stains = [], clock = 0, seats = [];
  [[0, .17], [0, .8], [3, .4]].forEach(function (b) { var dd = Q + 2.05, cx = b[0] === 0 ? b[1] * n : -dd, cy = b[0] === 0 ? -dd : b[1] * n;
    seats.push({x: cx - .6, y: cy, who: null}, {x: cx + .6, y: cy, who: null}); });
  MAZE_BENCHES.forEach(function (b) { var dd = Q + 2.05, cx = b[0] === 1 ? n + dd : b[1] * n, cy = b[0] === 1 ? b[1] * n : n + dd;   // right side and bottom
    seats.push(b[0] === 1 ? {x: cx, y: cy - .5, who: null} : {x: cx - .5, y: cy, who: null}, b[0] === 1 ? {x: cx, y: cy + .5, who: null} : {x: cx + .5, y: cy, who: null}); });
  var trod = {}, toGoal = {};
  function wake(c, me) { var w = trod[key(c)]; return !!w && w.who !== me && clock - w.t < 3.5; }
  function goalMap(g) { var k = key(g); return toGoal[k] || (toGoal[k] = bfs(g)); }
  function taken(c, me) { var k = key(c), mine = key(me.a); return people.some(function (q) { return q !== me && q.mode === "maze" && !q.gone && (key(q.a) === k || key(q.b) === k) &&
      key(q.b) !== mine && !(q.want && key(q.want) === mine); }); }       // one coming the other way is passed, not waited for (else both wait)
  function through(p, from) {                                        // a gate on the far side of their island, or its far end
    var mp = bfs(p.a), own = from ? key(from) : -1, far = gates.filter(function (g4) { return key(g4.c) !== own && mp.d[key(g4.c)] != null && mp.d[key(g4.c)] >= 10; });
    if (far.length) { far.sort(function (a, b) { return mp.d[key(b.c)] - mp.d[key(a.c)]; }); p.goal = far[Math.floor(rnd() * Math.min(2, far.length))].c; p.explore = null; return; }
    var bd = -1, kk; for (kk in mp.d) bd = Math.max(bd, mp.d[kk]);
    var deep = []; for (kk in mp.d) if (mp.d[kk] > 3 && mp.d[kk] >= bd * .6) deep.push(+kk);           // somewhere deep in, not all to the one far end
    if (deep.length) { var best = deep[Math.floor(rnd() * deep.length)]; p.explore = [Math.floor(best / n), best % n]; p.goal = null; } }
  function count(m) { var c = 0; people.forEach(function (q) { if (q.mode === m || q[m]) c++; }); return c; }
  function doorPt(dr) { var dd = DOUT - .05; return dr[0] === 0 ? [dr[1] * n, -dd] : dr[0] === 1 ? [n + dd, dr[1] * n] : [-dd, dr[1] * n]; }
  function isDay() { return typeof document === "undefined" || document.documentElement.getAttribute("data-theme") !== "dark"; }
  function spawnCell(far, list) { list = list || homeCells; var best = list[0], bs = -1;
    for (var k = 0; k < 60; k++) { var c = list[Math.floor(rnd() * list.length)], sc = 99;
      people.forEach(function (q) { if (!q.gone && q.x != null) sc = Math.min(sc, Math.max(Math.abs(q.x - c[1] - .5), Math.abs(q.y - c[0] - .5))); });
      if (far && far.d[key(c)] != null && far.d[key(c)] <= 14) sc -= 50;
      if (sc > bs) { bs = sc; best = c; } if (bs >= 8) break; }
    return best; }
  for (var m = 0; m < cfg.MONSTER_COUNT; m++) { var c0 = spawnCell(null, bigCells);
    monsters.push({a: c0, b: c0, f: 1, map: bfs(c0), ph: rnd() * 7, seed: rnd() * 50, wait: 0, x: c0[1] + .5, y: c0[0] + .5}); }
  function person(i, inside, byCar) {
    var p = {seed: rnd() * 50, pace: .8 + rnd() * .45, ph: rnd() * 7, look: 0, wait: rnd() * 1.5, flee: false, lost: i % 3 === 1, gone: 0, like: .3 + rnd() * .4, goal: null, pet: i === 2 || i === 6, kid: i === 0,
      o: {shirt: C.shirt[i % C.shirt.length], skin: C.skin[i % C.skin.length], hair: ["#2b1b10", "#111", "#7a4a1f", "#e9c46a", "#5a3825"][i % 5]}};
    if (inside || !gates.length) { var M0 = monsters[0], mc = M0 && M0.mode !== "trip" ? comp[key(M0.a)] : null;   // half are born where the monster hunts
      var mine = mc != null && rnd() < .5 ? homeCells.filter(function (q) { return comp[key(q)] === mc; }) : null;
      var c = spawnCell(M0 ? M0.map : null, mine && mine.length > 15 ? mine : null); p.mode = "maze"; p.a = p.b = c; p.f = 1; p.tx = p.x = c[1] + .5; p.ty = p.y = c[0] + .5; }
    else { var q = byCar ? [CORNER[2][0] + rnd() * 1.5, CORNER[2][1] - rnd() * .3] : ringPoint(Math.floor(rnd() * 4));
      p.mode = "out"; p.tx = p.x = q[0]; p.ty = p.y = q[1]; p.path = []; p.outT = byCar ? 1 + rnd() * 2 : 3 + rnd() * 6; }
    return p; }
  for (var i = 0; i < cfg.CHARACTER_COUNT; i++) people.push(person(i, i < Math.round(cfg.CHARACTER_COUNT * (1 - cfg.OUTSIDE_SHARE))));
  var learn = {rate: 1};                                            // leavings per cell walked, scaled by liking
  function outShare() { var k = 0; people.forEach(function (p) { if (p.mode !== "maze" && !p.gone) k++; }); return k / people.length; }
  function nearestGate(c) { var q = [c], seen = {}; seen[key(c)] = 1;
    for (var i = 0; i < q.length && i < 4000; i++) { if (gateAt[key(q[i])]) return q[i];
      nb(q[i]).forEach(function (m) { if (!seen[key(m)]) { seen[key(m)] = 1; q.push(m); } }); } return null; }
  function inside() { var k = 0; people.forEach(function (p) { if (p.mode === "maze" || p.gone) k++; }); return k; }
  // how far the nearest monster is; one that is eating is no threat, the others run past it
  function mdist(c) { var best = null; monsters.forEach(function (M) { var v = M.eat > 0 ? null : M.map.d[key(c)]; if (v != null && (best == null || v < best)) best = v; }); return best; }
  function toward(p, pt, sp, dt) {                                    // move the goal point along, true when there
    var dx = pt[0] - p.tx, dy = pt[1] - p.ty, d = Math.hypot(dx, dy), st = sp * dt;
    if (d <= st) { p.tx = pt[0]; p.ty = pt[1]; return true; }
    p.tx += dx / d * st; p.ty += dy / d * st; return false; }

  function stepMonster(M, dt) {
    M.ph += dt;
    if (M.eat > 0) { M.eat -= dt; return; }
    if (M.scared > 0) { M.scared -= dt; return; }
    if (M.wait > 0) { M.wait -= dt; return; }
    if (M.mode === "trip") {
      if (M.beaten > 0) { M.beaten -= dt; if (M.beaten <= 0) M.ran = 3; return; }
      if (M.ran > 0) M.ran -= dt;
      if (toward(M, M.path[0], cfg.SPEED.monster * (M.ran > 0 ? 2.4 : 1.9), dt)) { M.path.shift();
        if (!M.path.length) { M.mode = "maze"; M.a = M.b = M.dest; M.f = 1; M.map = bfs(M.a); M.bored = 0; M.goal = null; } }
      return;
    }
    var prey = null, pd = 1e9;
    people.forEach(function (p) { if (p.mode !== "maze" || p.gone) return; var v = M.map.d[key(p.b)]; if (v != null && v < pd) { pd = v; prey = p; } });
    var sp = (rage ? cfg.SPEED.sprint * 1.15 : pd < 26 ? cfg.SPEED.sprint : cfg.SPEED.monster) * (.85 + .3 * drift(M.seed, clock));
    M.f += sp * dt;
    if (M.f < 1) return;
    M.a = M.b; M.f = 0; M.map = bfs(M.a);
    prey = null; pd = 1e9;
    people.forEach(function (p) { if (p.mode !== "maze" || p.gone) return; var v = M.map.d[key(p.b)]; if (v != null && v < pd) { pd = v; prey = p; } });
    M.bored = prey && pd < 26 ? 0 : (M.bored || 0) + 1;                 // steps with nobody in reach
    var gt = gateAt[key(M.a)];
    if (gt && M.goal) {                                                   // out, and over to the busiest island
      var count = {}; people.forEach(function (q) { if (q.mode === "maze" && !q.gone) { var c = comp[key(q.b)]; count[c] = (count[c] || 0) + 1; } });
      var here = comp[key(M.a)], best = null, bn = 0;
      var go0 = gateOut(gt);                                               // the nearest island worth the walk: people over distance
      gates.forEach(function (g3) { var c = comp[key(g3.c)], k3 = count[c] || 0; if (c === here || k3 < 1) return;
        var o3 = gateOut(g3), sc = k3 / (1 + Math.hypot(o3[0] - go0[0], o3[1] - go0[1]) / 8); if (sc > bn) { bn = sc; best = g3; } });
      if (M.stroll || !best) { var others = gates.filter(function (g5) { var o5 = gateOut(g5); return Math.hypot(o5[0] - go0[0], o5[1] - go0[1]) > n * .6; });
        if (M.stroll && others.length) best = others[Math.floor(rnd() * others.length)]; }
      M.stroll = false; M.lastOut = clock;
      if (best) { M.mode = "trip"; M.dest = best.c; M.map = {d: {}, par: {}}; M.tx = M.a[1] + .5; M.ty = M.a[0] + .5;
        M.path = [gateOut(gt)].concat(route(gateOut(gt), gateOut(best))); M.path.push([best.c[1] + .5, best.c[0] + .5]); return; }
      M.goal = null; M.bored = 0;
    }
    if (!M.goal && M.bored > 14) M.goal = nearestGate(M.a);
    if (!M.goal && clock - (M.lastOut || 0) > 60 + (M.seed % 30) && rnd() < .3) { M.goal = nearestGate(M.a); M.stroll = true; }
    if (M.goal) { var tg = M.goal; if (M.map.d[key(tg)] == null) M.goal = null;
      else { while (M.map.par[key(tg)] && key(M.map.par[key(tg)]) !== key(M.a)) tg = M.map.par[key(tg)]; M.b = tg; M.prev = M.a; return; } }
    if (rage) { var hs = people.filter(function (q) { return q.hunt && !q.gone; }), o3 = nb(M.a), bst = -1;
      o3.forEach(function (c) { var dmin = 1e9; hs.forEach(function (q) { dmin = Math.min(dmin, Math.abs(q.b[0] - c[0]) + Math.abs(q.b[1] - c[1])); });
        dmin += rnd() * .5; if (dmin > bst) { bst = dmin; M.b = c; } }); if (!o3.length) M.b = M.a; M.prev = M.a; return; }
    if (prey && pd > 0 && pd < 26) { var t = prey.b; while (M.map.par[key(t)] && key(M.map.par[key(t)]) !== key(M.a)) t = M.map.par[key(t)]; M.b = t; }
    else { var o = nb(M.a), fwd = o.filter(function (c) { return !M.prev || key(c) !== key(M.prev); }), from = fwd.length ? fwd : o;
      M.b = from.length ? from[Math.floor(rnd() * from.length)] : M.a;
      if (o.length > 2 && rnd() < .3) M.wait = .3 + rnd() * .7; }                 // sniffs the air at a junction
    M.prev = M.a;
  }
  function stepPerson(p, dt) {
    p.ph += dt;
    if (p.cheer > 0) { p.cheer -= dt; return; }
    if (p.gone > 0) { p.gone -= dt; if (p.gone <= 0) { var lk = p.like, np = person(people.indexOf(p), false, true); for (var k in np) if (k !== "o") p[k] = np[k]; p.like = Math.min(1, lk + .3); } return; }
    p.wind = Math.max(0, Math.min(1, (p.wind == null ? 1 : p.wind) + (p.flee ? -dt / 4.5 : dt / 10)));
    var sp = p.flee ? cfg.SPEED.flee * p.pace * (.5 + .5 * p.wind) : (p.hunt ? cfg.SPEED.flee : cfg.SPEED.walk * (p.lost ? .75 : 1)) * p.pace * (.8 + .35 * drift(p.seed, clock));
    if (p.mode === "maze" && !rage && !p.gone) {
      var da = mdist(p.a), db = mdist(p.b), near = Math.min(da == null ? 99 : da, db == null ? 99 : db);
      if (near < cfg.FLEE_DISTANCE) {
        if (!p.flee) p.flee = true;
        if (p.wait > 0) p.wait = 0;
        if (!p.planned && key(p.a) !== key(p.b) && db != null && da != null && db < da && p.f < .8) { var sw2 = p.a; p.a = p.b; p.b = sw2; p.f = 1 - p.f; }
      }
    }
    if (p.wait > 0) { p.wait -= dt; p.look = Math.sin(p.ph * 2.1 + p.seed) * (p.lost ? 1 : .6); return; }
    p.look *= .9;
    if (p.mode === "maze") {
      var turning = key(p.a) !== key(p.b) && p.prevDir && (p.b[0] - p.a[0] !== p.prevDir[0] || p.b[1] - p.a[1] !== p.prevDir[1]);
      p.f += sp * (turning && p.f > .6 && !p.flee ? .75 : 1) * dt;                 // eases into a turn
      p.tx = p.a[1] + .5 + (p.b[1] - p.a[1]) * Math.min(1, p.f); p.ty = p.a[0] + .5 + (p.b[0] - p.a[0]) * Math.min(1, p.f);
      if (p.f < 1) return;
      p.prevDir = [p.b[0] - p.a[0], p.b[1] - p.a[1]]; p.prev = p.a; p.a = p.b; p.f = 0; p.planned = false; trod[key(p.a)] = {t: clock, who: p};
      p.hop = false; p.want = null;
      var o = nb(p.a), d = mdist(p.a), gt = gateAt[key(p.a)], was = p.flee; p.flee = !rage && d != null && d < cfg.FLEE_DISTANCE;
      if (was && !p.flee && !rage && rnd() < .75) { var mq = bfs(p.a), sg = null, ss = -1e9;
        gates.forEach(function (g6) { var kg = key(g6.c), dg = mq.d[kg]; if (dg == null) return; var dm6 = mdist(g6.c), s6 = (dm6 == null ? 40 : dm6) - dg;
          if (s6 > ss) { ss = s6; sg = g6.c; } });
        if (sg && ss > 1) { p.goal = sg; p.shaken = true; p.explore = null; } }
      p.hunt = !!rage && d != null && d < 18;
      if (!gated[comp[key(p.a)]]) {                                      // shut in a part with no gate: a breath, then over the hedge again
        if (p.pocket == null) p.pocket = clock;
        if (clock - p.pocket > 1.5) { var mh = bfsHop(p.a), tg2 = null, td = 1e9;
          for (var kh in mh.d) if (gated[comp[kh]] && mh.d[kh] < td) { td = mh.d[kh]; tg2 = kh; }
          if (tg2 != null) { var ch = [Math.floor(+tg2 / n), +tg2 % n]; while (mh.par[key(ch)] && key(mh.par[key(ch)]) !== key(p.a)) ch = mh.par[key(ch)];
            p.b = ch; p.hop = !linked(p.a, ch); p.planned = true; p.goal = p.explore = null; return; } }
        if (o.length) { p.b = o[Math.floor(rnd() * o.length)]; p.wait = .3 + rnd() * .5; } else { p.b = p.a; p.wait = .5; } return; }
      p.pocket = null;
      if (!p.flee) { p.panic = false; p.brave = null; }
      if (p.hunt && o.length) { var bh = 1e9; o.forEach(function (c) { var v = mdist(c); v = v == null ? 1e9 : v + rnd() * .3; if (v < bh) { bh = v; p.b = c; } }); return; }
      if (p.flee) p.like = Math.min(1, p.like + .08);                   // chased: the garden gains
      if (gt && !p.flee && !p.shaken && p.goal && key(gt.c) === key(p.goal) && inside() <= cfg.INSIDE_MIN) { p.goal = null; through(p, gt.c); }
      if (gt && (p.flee || (p.goal && key(gt.c) === key(p.goal)))) {   // out through the gate (their gate, or any when chased)
        p.mode = "exit"; p.path = [gateOut(gt)]; p.flee = false; p.goal = null; p.shaken = false; return; }
      if (!p.goal && !p.flee && inside() > cfg.INSIDE_MIN && rnd() < learn.rate * (.4 + p.like) * .05) p.goal = nearestGate(p.a);
      if (!p.goal && !p.explore && !p.flee && rnd() < .2) through(p);
      if (p.explore && !p.flee) {                                        // the far end of a one-gate island, then back out
        if (key(p.a) === key(p.explore)) { p.explore = null; p.goal = nearestGate(p.a); p.wait = .4 + rnd() * .8; return; }
        var mx = bfs(p.a), tx3 = p.explore;
        if (mx.d[key(tx3)] == null) p.explore = null;
        else { while (mx.par[key(tx3)] && key(mx.par[key(tx3)]) !== key(p.a)) tx3 = mx.par[key(tx3)];
          if (taken(tx3, p) && (p.yield || 0) < 3) { p.yield = (p.yield || 0) + 1; p.want = tx3; p.b = p.a; p.f = 1; p.wait = .3 + rnd() * .3; return; } p.yield = 0; p.b = tx3; return; } }
      if (!o.length) { p.b = p.a; p.wait = 1; return; }
      if (!p.flee && p.goal) {                                          // heading out: the shortest way
        var mp = bfs(p.a), t = p.goal;
        if (mp.d[key(t)] == null) p.goal = null;
        else { while (mp.par[key(t)] && key(mp.par[key(t)]) !== key(p.a)) t = mp.par[key(t)];
          if (wake(t, p)) { var gm = goalMap(p.goal), base = gm.d[key(t)], alt = o.filter(function (c) { var v = gm.d[key(c)]; return v != null && base != null && v <= base && !wake(c, p) && (!p.prev || key(c) !== key(p.prev)); });
            if (alt.length) t = alt[Math.floor(rnd() * alt.length)]; }
          if (taken(t, p) && (p.yield || 0) < 3) { p.yield = (p.yield || 0) + 1; p.want = t; p.b = p.a; p.f = 1; p.wait = .3 + rnd() * .3; return; } p.yield = 0; p.b = t; return; } }
      if (p.flee) {
        var me = safeBfs(p.a, nb), goal2 = null, gsc = -1e9, raw = -1e9;
        for (var kc in me.d) { var dm2 = null; monsters.forEach(function (M) { var v = M.eat > 0 ? null : M.map.d[kc]; if (v != null && (dm2 == null || v < dm2)) dm2 = v; });
          var lead = (dm2 == null ? 40 : dm2) - me.d[kc] * 1.1, sc2 = lead + (gateAt[kc] && lead > 1 ? 30 : 0) + (dm2 == null ? 0 : Math.min(dm2, 30) * .15); raw = Math.max(raw, sc2); sc2 += ((+kc * 7919 + Math.floor(p.seed * 1000)) % 101) / 101 * 4;
          if (sc2 > gsc) { gsc = sc2; goal2 = kc; } }
        p.panic = raw < 1.5; gsc = raw;
        if (p.panic && !(clock - (p.leapt || -99) < 30) && (p.brave == null ? (p.brave = rnd() < .55) : p.brave)) {   // cornered: some find the nerve to go over the walls
          var me2 = safeBfs(p.a, hopNb), g3 = null, s3 = -1e9;
          for (var kd in me2.d) { var dm3 = null; monsters.forEach(function (M) { var v = M.eat > 0 ? null : M.map.d[kd]; if (v != null && (dm3 == null || v < dm3)) dm3 = v; });
            var ld = (dm3 == null ? 40 : dm3) - me2.d[kd] * 1.3; if (gateAt[kd] && ld > 1) ld += 30; if (ld > s3) { s3 = ld; g3 = kd; } }
          if (g3 != null && +g3 !== key(p.a) && s3 > gsc) { var t3 = +g3, c3 = [Math.floor(t3 / n), t3 % n];
            while (me2.par[key(c3)] && key(me2.par[key(c3)]) !== key(p.a)) c3 = me2.par[key(c3)];
            p.b = c3; p.planned = true; p.hop = !linked(p.a, c3); if (p.hop) p.leapt = clock; p.panic = s3 < 1.5; return; } }
        if (goal2 != null && +goal2 !== key(p.a)) { var t2 = +goal2, cell = [Math.floor(t2 / n), t2 % n];
          while (me.par[key(cell)] && key(me.par[key(cell)]) !== key(p.a)) cell = me.par[key(cell)];
          if (wake(cell, p)) { var side = o.filter(function (c) { return me.d[key(c)] != null && !wake(c, p) && (!p.prev || key(c) !== key(p.prev)); }); if (side.length && rnd() < .6) cell = side[Math.floor(rnd() * side.length)]; }
          p.b = cell; p.planned = true; }
        else { var best = -1; o.forEach(function (c) { var v = mdist(c); v = v == null ? 1e9 : v + rnd() * .5; if (v > best) { best = v; p.b = c; } }); }
      }
      else {
        var fwd = o.filter(function (c) { return !p.prev || key(c) !== key(p.prev); });
        var fresh = fwd.filter(function (c) { return !wake(c, p); }); if (fresh.length && rnd() < .85) fwd = fresh;
        var roomy = fwd.filter(function (c) { return !taken(c, p); }); if (roomy.length) { fwd = roomy; p.yield = 0; }
        else if (fwd.length && (p.yield || 0) < 2) { p.yield = (p.yield || 0) + 1; p.b = p.a; p.wait = .25 + rnd() * .35; return; }
        else p.yield = 0;
        if (p.lost && rnd() < .25) fwd = o;                               // doubles back
        var from = fwd.length ? fwd : o; p.b = from[Math.floor(rnd() * from.length)];
        if (o.length > 2 && rnd() < .15) p.wait = .3 + rnd() * (p.lost ? 1.4 : .7);   // stops to choose
        else if (rnd() < .05) p.wait = .5 + rnd();
      }
      return;
    }
    if (p.mode === "sit") { p.sitT -= dt; p.look = Math.sin(p.ph * .7 + p.seed) * .8;           // sitting: up when done, or when night falls
      if (p.sitT <= 0) { p.seat.who = null; p.seat = null; p.mode = "out"; p.wait = .4; p.path = []; }
      return; }
    if (p.mode === "forest") { p.forestT -= dt; if (p.forestT <= 0 || !isDay()) { p.mode = "out"; p.path = [p.forestFrom]; } return; }
    if (p.mode === "home") { p.homeT -= dt; if (p.homeT <= 0 || isDay()) { p.mode = "out"; p.wait = .5; p.path = []; } return; }
    if (p.mode === "swim") { p.swimT -= dt; p.tx += p.swimDir * .6 * dt;                  // a few lengths of the river
      if (p.tx < -Q - 3 || p.tx > n + Q + 3) p.swimDir *= -1;
      if (p.swimT <= 0 || !isDay()) { p.mode = "out"; p.path = [[p.tx, n + DBOT - .3]]; }
      return; }
    if (p.mode === "fight") { p.fightT -= dt; if (p.fightT <= 0) { p.mode = "out"; p.wait = .6; p.path = []; p.foe = null; } return; }
    if (p.mode === "fightwait") { p.fightW -= dt; if (p.foe && p.foe.mode === "fightwait") { p.mode = p.foe.mode = "fight"; p.fightT = p.foe.fightT = 4.5; }
      else if (p.fightW <= 0) { p.mode = "out"; p.path = []; p.foe = null; } return; }
    if (p.mode === "out") { if (!p.seat && !p.goSwim && !p.goHome) p.outT -= dt * (1 + 4 * Math.max(0, outShare() - cfg.OUTSIDE_SHARE)); p.like = Math.max(0, p.like - dt * .03);
      if (inside() < cfg.INSIDE_MIN) p.outT = 0;
      if (p.outT <= 0 && p.seat) { p.seat.who = null; p.seat = null; }
      if (p.outT <= 0 && p.path.length) p.path = []; }
    if (p.mode === "out" && !p.path.length) {
      if (p.outT <= 0 && gates.length) { var near = gates.slice().sort(function (a, b) { var A = gateOut(a), B = gateOut(b);
          return Math.hypot(A[0] - p.tx, A[1] - p.ty) - Math.hypot(B[0] - p.tx, B[1] - p.ty); }),
          calm = near.filter(function (g7) { var v7 = mdist(g7.c); return v7 == null || v7 > cfg.FLEE_DISTANCE + 4; }); if (calm.length) near = calm;
        var busy = {}, inn = 1; people.forEach(function (q) { if (q.mode === "maze" && !q.gone) { busy[comp[key(q.a)]] = (busy[comp[key(q.a)]] || 0) + 1; inn++; } });
        var room = near.filter(function (g6) { var c6 = comp[key(g6.c)]; return (busy[c6] || 0) < inn * sizes[c6] / gatedSize * 1.3 + .5; });   // islands by their share
        if (room.length) near = room; var g2 = near[Math.floor(rnd() * Math.min(3, near.length))];
        p.mode = "enter"; p.gate = g2; p.path = route([p.tx, p.ty], gateOut(g2)); p.path.push([g2.c[1] + .5, g2.c[0] + .5]); }
      else { var free = rnd() < .65 ? seats.filter(function (st) { return !st.who; }) : [], er = rnd();
        if (!isDay() && er < .3 && count("home") + count("goHome") < 4) { var dr = MAZE_DOORS[Math.floor(rnd() * MAZE_DOORS.length)], dp = doorPt(dr);   // home for a bit
          p.path = route([p.tx, p.ty], dp); p.goHome = true; p.outT += 15; }
        else if (isDay() && er < .24 && er >= .14 && count("forest") + count("goForest") < 2) { var fu = Math.max(0, Math.min(n, p.tx)), sd5 = sideOf(p.tx, p.ty);   // into the wood
          var fin = sd5 === 0 ? [fu, -(DOUT - .1)] : sd5 === 1 ? [n + DOUT - .1, Math.max(0, Math.min(n, p.ty))] : sd5 === 3 ? [-(DOUT - .1), Math.max(0, Math.min(n, p.ty))] : null;
          if (fin) { p.path = route([p.tx, p.ty], fin); p.path.push(sd5 === 0 ? [fin[0], fin[1] - 2.2] : sd5 === 1 ? [fin[0] + 2.2, fin[1]] : [fin[0] - 2.2, fin[1]]); p.goForest = true; p.outT += 15; p.forestFrom = fin; }
          else p.path = route([p.tx, p.ty], ringPoint(sd5, [p.tx, p.ty])); }
        else if (isDay() && er < .14 && count("swim") + count("goSwim") < 2) { var su = Math.max(-Q, Math.min(n + Q, p.tx + (rnd() - .5) * 8));            // a swim
          p.path = route([p.tx, p.ty], [su, n + DBOT]); p.path.push([su, n + Q + 3.9]); p.goSwim = true; p.outT += 15; }
        else if (free.length) { free.sort(function (a, b) { return Math.hypot(a.x - p.tx, a.y - p.ty) - Math.hypot(b.x - p.tx, b.y - p.ty); });
          var st = free[Math.floor(rnd() * Math.min(2, free.length))]; st.who = p; p.seat = st; p.path = route([p.tx, p.ty], [st.x, st.y]); p.outT += 20; }
        else { var sd = sideOf(p.tx, p.ty); p.path = route([p.tx, p.ty], rnd() < .75 ? ringPoint(sd, [p.tx, p.ty]) : ringPoint(Math.floor(rnd() * 4))); } }
      return;
    }
    if (!p.path || !p.path.length) { p.mode = "out"; return; }
    if (toward(p, p.path[0], sp * (p.mode === "out" ? .85 : 1), dt)) {
      p.path.shift();
      if (p.path.length) return;
      if (p.mode === "exit") { p.mode = "out"; p.outT = 4 + p.like * 9 + rnd() * 3; p.wait = rnd() * .8; }
      else if (p.mode === "enter") { p.mode = "maze"; p.a = p.b = p.gate.c; p.f = 1; p.prev = null; through(p, p.gate.c); }
      else if (p.seat) { p.mode = "sit"; p.sitT = 10 + rnd() * 15; p.tx = p.seat.x; p.ty = p.seat.y; }
      else if (p.goHome) { p.goHome = false; p.mode = "home"; p.homeT = 8 + rnd() * 12; }
      else if (p.goForest) { p.goForest = false; p.mode = "forest"; p.forestT = 10 + rnd() * 12; }
      else if (p.goSwim) { p.goSwim = false; p.mode = "swim"; p.swimT = 8 + rnd() * 6; p.swimDir = rnd() < .5 ? -1 : 1; }
      else if (p.mode === "fightgo") { p.mode = "fightwait"; p.fightW = 6; }
      else if (rnd() < .4) p.wait = .5 + rnd() * 2;
    }
  }
  var rage = null;
  function step(dt) {
    clock += dt;
    if (!rage && isDay() && clock > 30 && rnd() < dt / 75) rage = {left: 9, beat: 0};      // the crowd has had enough
    if (rage) { rage.left -= dt; if (rage.beat > 0) rage.beat -= dt; if (rage.left <= 0 || !isDay()) rage = null; }
    if (!isDay() && rnd() < dt / 30 && !count("fight") && !count("fightgo") && !count("fightwait")) {   // two walkers fall out
      var idle = people.filter(function (q) { return q.mode === "out" && !q.seat && !q.goHome && !q.gone; });
      if (idle.length > 1) { var a1 = idle[0], b1 = idle[1], m1 = inBand([(a1.tx + b1.tx) / 2, (a1.ty + b1.ty) / 2]);
        [[a1, b1, -.45], [b1, a1, .45]].forEach(function (z) { var q = z[0]; q.mode = "fightgo"; q.foe = z[1]; q.path = route([q.tx, q.ty], [m1[0] + z[2], m1[1]]); }); }
    }
    learn.rate = Math.max(.05, Math.min(8, learn.rate + (cfg.OUTSIDE_SHARE - outShare()) * dt * .2));
    monsters.forEach(function (M) { if (rage && rage.beat > 0) { M.ph += dt; return; } stepMonster(M, dt); if (M.mode === "trip") return; M.tx = M.a[1] + .5 + (M.b[1] - M.a[1]) * Math.min(1, M.f); M.ty = M.a[0] + .5 + (M.b[0] - M.a[0]) * Math.min(1, M.f); });
    people.forEach(function (p) { stepPerson(p, dt); });
    var k = 1 - Math.exp(-dt * 11);                                     // the figure follows its goal: curves, easing
    people.concat(monsters).forEach(function (a) {
      if (a.tx == null) return; var ox = a.x, oy = a.y;
      a.x += (a.tx - a.x) * k; a.y += (a.ty - a.y) * k;
      var mv = Math.hypot(a.x - ox, a.y - oy); a.vx = dt ? (a.x - ox) / dt : 0; a.vy = dt ? (a.y - oy) / dt : 0; a.dist = (a.dist || 0) + mv; });
    people.forEach(function (p) {
      var vl = Math.hypot(p.vx || 0, p.vy || 0), bx = vl > .05 ? p.vx / vl : 1, by = vl > .05 ? p.vy / vl : 0, kk = 1 - Math.exp(-dt * 5);
      if (p.pet) { var px2 = p.x - bx * .95, py2 = p.y - by * .95 + .25; if (p.petX == null || Math.hypot(p.petX - p.x, p.petY - p.y) > 2.5) { p.petX = px2; p.petY = py2; }
        p.petX += (px2 - p.petX) * kk; p.petY += (py2 - p.petY) * kk; }
      if (p.kid) { p.kidA = (p.kidA || 0) + dt * (p.mode === "sit" ? 2.2 : 0);
        var kx = p.mode === "sit" ? p.x + Math.cos(p.kidA) * 1.3 : p.x - by * .75, ky = p.mode === "sit" ? p.y + Math.sin(p.kidA) * .8 : p.y + bx * .75;
        if (p.kidX == null || Math.hypot(p.kidX - p.x, p.kidY - p.y) > 3) { p.kidX = kx; p.kidY = ky; } p.kidX += (kx - p.kidX) * kk * 1.4; p.kidY += (ky - p.kidY) * kk * 1.4; }
    });
    people.forEach(function (p) { if (p.gone || p.mode !== "maze") return;             // caught
      monsters.forEach(function (M) { if (rage && Math.hypot(p.x - M.x, p.y - M.y) < .8) { if (rage.beat <= 0) { rage.beat = 1.8; puffs.push({x: M.x, y: M.y, t: 0}); } return; }
        if (M.mode !== "trip" && !(M.eat > 0) && Math.hypot(p.x - M.x, p.y - M.y) < .6) { puffs.push({x: p.x, y: p.y, t: 0}); stains.push({x: p.x, y: p.y, t: 0, s: rnd() * 50}); p.gone = 1.4; p.flee = false; M.eat = 3; } }); });
    monsters.forEach(function (M) { if (M.mode !== "trip" || M.beaten > 0 || M.ran > 0) return;
      var near = people.filter(function (q) { return !q.gone && q.mode !== "maze" && q.mode !== "home" && q.mode !== "forest" && q.mode !== "swim" && Math.hypot(q.x - M.x, q.y - M.y) < 1.4; });
      if (near.length) { M.beaten = 2.6; puffs.push({x: M.x, y: M.y, t: 0}); near.forEach(function (q) { q.punch = 2.6; }); } });
    people.forEach(function (q) { if (q.punch > 0) q.punch -= dt; });
    puffs.forEach(function (f) { f.t += dt; }); puffs = puffs.filter(function (f) { return f.t < .7; });
    stains.forEach(function (f) { f.t += dt; }); stains = stains.filter(function (f) { return f.t < 7; });
  }

  function draw(g, LL) {
    var L = LL, px = L.px, boxes = [], kq = ((L.cfg.LAYOUT_QUIET || L.cfg.QUIET_ZONE) + 1.75) / (Q + 1.75);
    function fold(v) { return v < 0 ? v * kq : v > n ? n + (v - n) * kq : v; }
    function X(x) { return L.ox + fold(x) * px; }
    function Y(y) { return L.oy + fold(y) * px; }
    stains.forEach(function (f) { var x = X(f.x), y = Y(f.y), a = f.t < 5 ? .85 : .85 * (7 - f.t) / 2, grow = Math.min(1, f.t / .35);   // on the ground, under everyone
      g.fillStyle = "rgba(150,10,20," + a + ")"; g.beginPath(); g.ellipse(x, y + px * .1, px * .55 * grow, px * .32 * grow, 0, 0, 7); g.fill();
      for (var q = 0; q < 7; q++) { var an = f.s + q * .9, rr = px * (.5 + (q % 3) * .25) * grow;
        g.beginPath(); g.arc(x + Math.cos(an) * rr, y + Math.sin(an) * rr * .6, px * (.06 + (q % 2) * .05), 0, 7); g.fill(); }
      if (f.t < .6) { var e = f.t / .6;                                         // the splash, flying out and falling
        for (var q2 = 0; q2 < 12; q2++) { var an2 = f.s * 2 + q2 * .52, d2 = px * (.3 + e * (1.4 + (q2 % 3) * .5)), h2 = Math.sin(e * Math.PI) * px * (.6 + (q2 % 4) * .2);
          g.fillStyle = "rgba(190,15,25," + (1 - e * .5) + ")"; g.beginPath(); g.arc(x + Math.cos(an2) * d2, y + Math.sin(an2) * d2 * .6 - h2, px * (.12 - e * .05), 0, 7); g.fill(); } }
      boxes.push([fold(f.y) - .5, fold(f.x) - .5, 3]); });
    puffs.forEach(function (f) { var x = X(f.x), y = Y(f.y), k = f.t / .7;
      g.fillStyle = "rgba(255,255,255," + (1 - k) * .9 + ")";
      for (var q = 0; q < 6; q++) { var a = q * 1.05; g.beginPath(); g.arc(x + Math.cos(a) * px * (.3 + k * .8), y + Math.sin(a) * px * (.3 + k * .8), px * .22 * (1 - k * .5), 0, 7); g.fill(); }
      boxes.push([fold(f.y) - .5, fold(f.x) - .5, 2]); });
    var all = people.filter(function (p) { return !p.gone; }).map(function (p) { return {p: p}; })
      .concat(monsters.map(function (M) { return {m: M}; }));
    all.sort(function (a, b) { return (a.p || a.m).y - (b.p || b.m).y; });           // nearer the bottom, drawn later
    all.forEach(function (e) {
      if (e.p && (e.p.mode === "home" || e.p.mode === "forest")) return;          // indoors, or in among the trees
      if (e.p && e.p.mode === "swim") { var sx = X(e.p.x), sy = Y(e.p.y), sk = Math.sin(e.p.ph * 5);
        g.strokeStyle = "rgba(255,255,255,.6)"; g.lineWidth = 1; g.beginPath(); g.ellipse(sx, sy, px * (.6 + Math.abs(sk) * .2), px * .25, 0, 0, 7); g.stroke();
        g.strokeStyle = e.p.o.skin; g.lineWidth = px * .1; g.lineCap = "round"; g.beginPath(); g.moveTo(sx - px * .15, sy); g.lineTo(sx - px * .45, sy - sk * px * .3);
        g.moveTo(sx + px * .15, sy); g.lineTo(sx + px * .45, sy + sk * px * .3); g.stroke();
        g.fillStyle = e.p.o.skin; g.beginPath(); g.arc(sx, sy - px * .05, px * .17, 0, 7); g.fill();
        g.fillStyle = e.p.o.shirt; g.beginPath(); g.arc(sx, sy - px * .1, px * .17, Math.PI, 0); g.fill(); return; }
      if (e.p && e.p.mode === "sit") { mazeSitter(g, X(e.p.x), Y(e.p.y), px * 1.1, e.p.o.shirt, e.p.o.skin, e.p.o.hair); boxes.push([fold(e.p.y) - .5, fold(e.p.x) - .5, 1]); return; }
      if (e.p) { var p = e.p, x = X(p.x), y = Y(p.y), u = px * 1.22, moving = p.wait <= 0 && !(p.cheer > 0);
        if (p.cheer > 0) y -= Math.abs(Math.sin(p.cheer * 9 + p.seed)) * px * .35;          // jumping
        var st = moving ? Math.sin(p.dist * 4.4 + p.seed) : 0;                      // the stride follows the ground covered
        if (p.mode !== "maze" && moving) { var sw = Math.sin(p.dist * 1.1 + p.seed) * px * .22, vx = p.vx || 0, vy = p.vy || 0, vl = Math.hypot(vx, vy) || 1;
          x += -vy / vl * sw; y += vx / vl * sw; }
        if (p.mode === "fight") { x += Math.sin(p.ph * 40) * px * .1; y += Math.cos(p.ph * 33) * px * .06; }
        if (p.pet && p.petX != null) { var dx3 = X(p.petX), dy3 = Y(p.petY);                       // the dog on its lead
          g.strokeStyle = "rgba(60,40,20,.8)"; g.lineWidth = 1; g.beginPath(); g.moveTo(x + u * .25, y - u * .05); g.lineTo(dx3, dy3 - px * .05); g.stroke();
          mazeDog(g, dx3, dy3, px, (p.vx || 0) >= 0 ? 1 : -1, Math.sin(p.ph * 16) * px * .12, p.seed % 2 > 1 ? "#5c4033" : "#d4a373");
          boxes.push([fold(p.petY) - .5, fold(p.petX) - .5, 1]); }
        if (p.punch > 0) { x += Math.sin(p.ph * 30) * px * .08; }
        if (!p.hop && p.mode === "maze" && Math.abs(p.b[0] - p.a[0]) + Math.abs(p.b[1] - p.a[1]) > 1) y -= Math.sin(Math.min(1, p.f) * Math.PI) * px * .3;
        if (p.hop && p.mode === "maze") y -= Math.sin(Math.min(1, p.f) * Math.PI) * px * (Math.abs(p.b[0] - p.a[0]) + Math.abs(p.b[1] - p.a[1]) > 1 ? 1.1 : .7);
        else if (p.panic && p.flee && p.mode === "maze") { y -= Math.abs(Math.sin(p.ph * 9)) * px * .15; }
        mazePerson(g, x, y - u * .32, u, {shirt: p.o.shirt, skin: p.o.skin, hair: p.o.hair, step: p.mode === "fight" || p.punch > 0 ? Math.sin(p.ph * 20) : st, look: p.look,
          lean: Math.max(-.25, Math.min(.25, (p.vx || 0) * .07)), arms: p.mode === "fight" || p.punch > 0 ? (Math.sin(p.ph * 14) > 0 ? "up" : "swing") : p.cheer > 0 || p.flee || p.hunt ? "up" : p.lost && !moving ? "head" : "swing"});
        if (p.mode === "fight" && p.foe && p.x < p.foe.x) {                                      // one cloud per quarrel
          var fx4 = (x + X(p.foe.x)) / 2, fy4 = (y + Y(p.foe.y)) / 2 - u * .3;
          for (var q4 = 0; q4 < 6; q4++) { var a4 = q4 * 1.05 + p.ph * 3; g.fillStyle = "rgba(200,190,170,.55)"; g.beginPath(); g.arc(fx4 + Math.cos(a4) * px * .7, fy4 + Math.sin(a4) * px * .4, px * .32, 0, 7); g.fill(); }
          if (Math.floor(p.ph * 2.5) % 2 === 0) { g.fillStyle = "#fff"; mazeRect(g, fx4 - px * 1, fy4 - u * 1.2, px * 2, px * .8, px * .3); g.fill();
            g.fillStyle = "#e63946"; g.font = "900 " + (px * .6) + "px Inter,Tahoma"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("#@!", fx4, fy4 - u * .8); } }
        if (p.kid && p.kidX != null && p.mode !== "fight") { var kx2 = X(p.kidX), ky2 = Y(p.kidY), kh = Math.abs(Math.sin(p.ph * 7)) * px * .25;   // the child
          mazePerson(g, kx2, ky2 - u * .25 - kh, u * .72, {shirt: "#ffbe0b", skin: p.o.skin, hair: p.o.hair, step: Math.sin(p.ph * 12), arms: p.mode === "sit" ? "up" : "swing"});
          boxes.push([fold(p.kidY) - .5, fold(p.kidX) - .5, 1]); }
        if (p.cheer > 0) { g.fillStyle = "#ff3d7f"; g.font = "900 " + (px * .7) + "px Inter,Vazirmatn,Tahoma"; g.textAlign = "center";
          g.textBaseline = "alphabetic"; g.fillText("\u2665", x, y - u * .85); }
        else if (p.hunt) { var ax = x + u * .32, ay = y - u * .95, ar = px * .2; g.strokeStyle = "#e63946"; g.lineWidth = Math.max(1.2, px * .09); g.lineCap = "round";   // the anger mark
          g.beginPath(); [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(function (q6) { g.moveTo(ax + q6[0] * ar * .35, ay + q6[1] * ar); g.quadraticCurveTo(ax + q6[0] * ar * .35, ay + q6[1] * ar * .35, ax + q6[0] * ar, ay + q6[1] * ar * .35); }); g.stroke(); }
        else if (p.panic && p.flee && p.mode === "maze") { g.fillStyle = "#e63946"; g.font = "900 " + (px * .8) + "px Inter,Vazirmatn,Tahoma"; g.textAlign = "center"; g.textBaseline = "alphabetic"; g.fillText("!!", x, y - u * .95); }
        else if (p.flee || (p.lost && !moving)) { g.fillStyle = p.flee ? "#e63946" : "#3a86ff"; g.font = "900 " + (px * .7) + "px Inter,Vazirmatn,Tahoma";
          g.textAlign = "center"; g.textBaseline = "alphabetic"; g.fillText(p.flee ? "!" : "?", x, y - u * .9); }
        boxes.push([fold(p.y) - .5, fold(p.x) - .5, 2]); return; }
      var M = e.m, x2 = X(M.x), y2 = Y(M.y), R = px * .78, wob = Math.sin(M.ph * 9) * R * .06;
      if (M.scared > 0) { x2 += Math.sin(M.ph * 25) * px * .04; wob = 0; }
      var dx = M.b[1] - M.a[1], dy = M.b[0] - M.a[0];
      g.fillStyle = "rgba(0,0,0,.25)"; g.beginPath(); g.ellipse(x2 + R * .15, y2 + R * .85, R * .9, R * .3, 0, 0, 7); g.fill();
      g.fillStyle = "#6a1b9a"; g.beginPath(); g.moveTo(x2 - R * .55, y2 - R * .6); g.lineTo(x2 - R * .85, y2 - R * 1.15); g.lineTo(x2 - R * .2, y2 - R * .85);
      g.moveTo(x2 + R * .55, y2 - R * .6); g.lineTo(x2 + R * .85, y2 - R * 1.15); g.lineTo(x2 + R * .2, y2 - R * .85); g.fill();
      var bg = g.createRadialGradient(x2 - R * .3, y2 - R * .4, R * .1, x2, y2, R * 1.1); bg.addColorStop(0, "#b15cff"); bg.addColorStop(1, "#4a0f73");
      g.fillStyle = bg; g.strokeStyle = "#1e0533"; g.lineWidth = px * .12; g.beginPath();
      for (var a = 0; a <= 24; a++) { var an = a / 24 * Math.PI * 2, rr = R * (1 + (an > .3 && an < Math.PI - .3 ? .1 * Math.sin(an * 7 + M.ph * 12) : 0));
        var xx = x2 + Math.cos(an) * rr, yy = y2 + Math.sin(an) * rr * .95 + wob; if (a) g.lineTo(xx, yy); else g.moveTo(xx, yy); }
      g.stroke(); g.fill();
      var eye = M.scared > 0 ? 1.35 : 1;
      [-1, 1].forEach(function (s2) { g.fillStyle = "#fff"; g.beginPath(); g.arc(x2 + s2 * R * .34, y2 - R * .2 + wob, R * .26 * eye, 0, 7); g.fill();
        g.fillStyle = "#111"; g.beginPath(); g.arc(x2 + s2 * R * .34 + dx * R * .1, y2 - R * .2 + dy * R * .1 + wob, R * .12, 0, 7); g.fill(); });
      g.fillStyle = "#2b0040"; g.beginPath(); g.ellipse(x2, y2 + R * .35 + wob, R * .38, R * .16 + R * .08 * Math.abs(Math.sin(M.ph * 6)), 0, 0, 7); g.fill();
      g.fillStyle = "#fff"; for (var tt = -1; tt <= 1; tt += 2) { g.beginPath(); g.moveTo(x2 + tt * R * .18, y2 + R * .22 + wob); g.lineTo(x2 + tt * R * .1, y2 + R * .38 + wob); g.lineTo(x2 + tt * R * .26, y2 + R * .38 + wob); g.fill(); }
      if (rage || M.beaten > 0 || M.ran > 0) { var by5 = y2 - R * 2.1;
        if ((rage && rage.beat > 0) || M.beaten > 0) { for (var q5 = 0; q5 < 4; q5++) { var a5 = M.ph * 6 + q5 * 1.57; g.fillStyle = "#ffd60a";
            g.font = "900 " + (px * .5) + "px Inter,Tahoma"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("\u2605", x2 + Math.cos(a5) * R, y2 - R * 1.1 + Math.sin(a5) * R * .35); } }
        else if (Math.floor(M.ph * 3) % 2 === 0) { g.fillStyle = "#fff"; mazeRect(g, x2 - px * 1.2, by5 - px * .45, px * 2.4, px * .9, px * .35); g.fill();
          g.fillStyle = "#6a1b9a"; g.font = "900 " + (px * .6) + "px Inter,Tahoma"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("AAA!", x2, by5); } }
      boxes.push([fold(M.y) - .5, fold(M.x) - .5, 2]);
    });
    return boxes;
  }
  var lastT = null;
  function advance(t) { if (lastT == null) lastT = t; var dt = t - lastT; if (dt <= 0) return; lastT = t; step(Math.min(.1, dt)); }
  function cheer() { people.forEach(function (p) { p.cheer = 2.2 + rnd() * .4; p.flee = false; }); monsters.forEach(function (M) { M.scared = 2.2; }); }
  function focus() { var M = monsters[0]; return M ? [M.x, M.y] : [n / 2, n / 2]; }
  return {step: step, draw: draw, advance: advance, focus: focus, cheer: cheer};
}

// 7. the bits get the final word ---------------------------------------------------------
function mazeLin(v) { v /= 255; return v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }
function mazeUnlin(v) { v = v <= .0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - .055; return Math.max(0, Math.min(255, Math.round(v * 255))); }
var MAZE_LIN = []; for (var li = 0; li < 256; li++) MAZE_LIN.push(mazeLin(li));
function clampTone(d, i, dark, lim, FL) {
  // dark: scale the light down (hue kept) until luminance <= lim; light: mix toward the floor
  // colour (or white, if the floor is not light enough) until luminance >= lim
  var r = MAZE_LIN[d[i]], gg = MAZE_LIN[d[i + 1]], b = MAZE_LIN[d[i + 2]], Y = .2126 * r + .7152 * gg + .0722 * b;
  if (dark) { if (Y <= lim) return; var k = lim / Y; r *= k; gg *= k; b *= k; }
  else { if (Y >= lim) return; var F = FL && FL[3] > lim + .005 ? FL : [1, 1, 1, 1];
    var t = (lim - Y) / (F[3] - Y); r += (F[0] - r) * t; gg += (F[1] - gg) * t; b += (F[2] - b) * t; }
  d[i] = mazeUnlin(r); d[i + 1] = mazeUnlin(gg); d[i + 2] = mazeUnlin(b); d[i + 3] = 255;
}
function restoreSafeCores(g, L, r0, c0, r1, c1, ratio) {
  var cfg = L.cfg, Q = cfg.QUIET_ZONE, px = L.px;
  if (!cfg.__floor) { var h = cfg.COL.path, v = [1, 3, 5].map(function (k) { return MAZE_LIN[parseInt(h.substr(k, 2), 16)]; });
    cfg.__floor = [v[0], v[1], v[2], .2126 * v[0] + .7152 * v[1] + .0722 * v[2]]; }
  if (r0 == null) { r0 = 0; c0 = 0; r1 = L.n - 1; c1 = L.n - 1; }
  r0 = Math.max(-Q, r0); c0 = Math.max(-Q, c0); r1 = Math.min(L.n - 1 + Q, r1); c1 = Math.min(L.n - 1 + Q, c1);
  if (r1 < r0 || c1 < c0) return;
  var x0 = L.ox + c0 * px, y0 = L.oy + r0 * px, w = (c1 - c0 + 1) * px, h2 = (r1 - r0 + 1) * px;
  var img = g.getImageData(x0, y0, w, h2), d = img.data;
  var core = px * (ratio || cfg.SAFE_CORE_RATIO), soft = ratio ? core : px * Math.min(.9, cfg.SAFE_CORE_RATIO + 2 * cfg.CORE_FEATHER);
  var a0 = (px - core) / 2, a1 = (px + core) / 2, s0 = (px - soft) / 2, s1 = (px + soft) / 2;
  // the feather ring is clamped to a gentler target, so the step from art to core is in two halves
  var dSoft = (cfg.DARK_LUMINANCE_MAX + .45) / 2, lSoft = (cfg.LIGHT_LUMINANCE_MIN + Math.min(.45, cfg.LIGHT_LUMINANCE_MIN - .05)) / 2;
  for (var r = r0; r <= r1; r++) for (var c = c0; c <= c1; c++) {
    var dark = r >= 0 && c >= 0 && r < L.n && c < L.n && L.M.dark[r][c];
    for (var yy = Math.floor(s0); yy < Math.ceil(s1); yy++) for (var xx = Math.floor(s0); xx < Math.ceil(s1); xx++) {
      var inCore = yy + .5 >= a0 && yy + .5 <= a1 && xx + .5 >= a0 && xx + .5 <= a1;
      var i = (((r - r0) * px + yy) * w + (c - c0) * px + xx) * 4;
      clampTone(d, i, dark, inCore ? (dark ? cfg.DARK_LUMINANCE_MAX : cfg.LIGHT_LUMINANCE_MIN) : (dark ? dSoft : lSoft), cfg.__floor);
    }
  }
  g.putImageData(img, x0, y0);
}
// what moved over a finder, timing or format module is undone outright: those are copied
// back whole from the still layer
function restoreReserved(g, still, L, r0, c0, r1, c1) {
  var px = L.px;
  for (var r = Math.max(0, r0); r <= Math.min(L.n - 1, r1); r++) for (var c = Math.max(0, c0); c <= Math.min(L.n - 1, c1); c++)
    if (L.role[r][c]) { var x = L.ox + c * px, y = L.oy + r * px; g.drawImage(still, x, y, px, px, x, y, px, px); }
}
function drawProtectedPatterns(g, L) {
  // finders, timing, alignment, format and version: whole modules, full contrast; the dark
  // ones are hedge blocks (rounded a little, top lit) so they belong to the maze
  var C = L.cfg.COL, px = L.px, deco = L.level === "full" || L.level === "medium";
  for (var r = 0; r < L.n; r++) for (var c = 0; c < L.n; c++) {
    var k = L.role[r][c]; if (!k || k === "finder" || k === "align") continue;
    var x = L.ox + c * px, y = L.oy + r * px;
    g.fillStyle = C.path; g.fillRect(x, y, px, px);
    if (!L.M.dark[r][c]) continue;
    g.fillStyle = C.wall; mazeRect(g, x, y, px, px, deco ? px * .18 : 0); g.fill();
    if (deco) { g.fillStyle = C.wallTop; mazeRect(g, x + px * .1, y + px * .06, px * .8, px * .74, px * .14); g.fill(); }
  }
  function tower(r0, c0, k) {                                   // a k-module ring, its light gap, its centre
    var x = L.ox + c0 * px, y = L.oy + r0 * px, w = k * px;
    g.fillStyle = C.path; g.fillRect(x, y, w, w);
    var TR = L.cfg.TOWER_ROUND;
    g.fillStyle = C.eye; mazeRect(g, x, y, w, w, TR * px * (k > 5 ? .9 : .6)); g.fill();
    if (deco) { var tg = g.createLinearGradient(x, y, x + w, y + w); tg.addColorStop(0, C.wallTop); tg.addColorStop(1, C.eye);
      g.fillStyle = tg; mazeRect(g, x + px * .12, y + px * .1, w - px * .24, w - px * .26, TR * px * (k > 5 ? .8 : .5)); g.fill(); }
    g.fillStyle = C.eyeLight; mazeRect(g, x + px, y + px, w - 2 * px, w - 2 * px, TR * px * (k > 5 ? .5 : .3)); g.fill();
    var ck = k - 4; g.fillStyle = C.eye; mazeRect(g, x + 2 * px, y + 2 * px, ck * px, ck * px, TR * px * (k > 5 ? .45 : .3)); g.fill();
    if (deco && ck > 1) { g.fillStyle = C.wallTop; mazeRect(g, x + 2.18 * px, y + 2.12 * px, (ck - .36) * px, (ck - .42) * px, px * .35); g.fill(); }
  }
  [[0, 0], [0, L.n - 7], [L.n - 7, 0]].forEach(function (o) { tower(o[0], o[1], 7); });
  var seen = {};
  for (r = 0; r < L.n; r++) for (c = 0; c < L.n; c++)
    if (L.role[r][c] === "align" && !seen[r + "," + c]) { tower(r, c, 5);
      for (var a = 0; a < 5; a++) for (var b = 0; b < 5; b++) seen[(r + a) + "," + (c + b)] = 1; }
}
function mazeRect(g, x, y, w, h, r) { g.beginPath();
  if (!(w > 0 && h > 0)) return;
  r = Math.max(0, Math.min(r || 0, w / 2, h / 2)); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
function drawQuietZone(g, L) {
  var C = L.cfg.COL; g.fillStyle = C.path;
  var q = L.cfg.QUIET_ZONE * L.px, x = L.ox - q, w = L.n * L.px + 2 * q;
  g.save(); g.beginPath(); g.rect(x, x, w, w); g.rect(L.ox + L.n * L.px, L.oy, -L.n * L.px, L.n * L.px); g.clip("evenodd");
  g.fillRect(x, x, w, w);
  if (!L.night) L.paveJoints(g, x, x, w, w);                          // joints sit on module edges, never on a core
  g.restore();
}

// a car from above, nose toward dir (1 right, -1 left, 2 down); lights by night
function mazeCar(g, x, y, len, col, dir, lights) {
  g.save(); g.translate(x, y); if (dir === -1) g.rotate(Math.PI); else if (dir === 2) g.rotate(Math.PI / 2);
  var w = len * .48;
  if (lights) { var hl = g.createLinearGradient(len / 2, 0, len * 1.9, 0); hl.addColorStop(0, "rgba(255,240,190,.55)"); hl.addColorStop(1, "rgba(255,240,190,0)");
    g.fillStyle = hl; g.beginPath(); g.moveTo(len / 2, -w * .3); g.lineTo(len * 1.9, -w * .9); g.lineTo(len * 1.9, w * .9); g.lineTo(len / 2, w * .3); g.fill(); }
  g.fillStyle = "rgba(0,0,0,.3)"; mazeRect(g, -len / 2 + 1.5, -w / 2 + 2, len, w, w * .3); g.fill();
  g.fillStyle = col; mazeRect(g, -len / 2, -w / 2, len, w, w * .3); g.fill();
  g.fillStyle = "rgba(20,30,40,.75)"; mazeRect(g, len * .08, -w * .36, len * .2, w * .72, w * .12); g.fill();
  g.fillStyle = "rgba(20,30,40,.55)"; mazeRect(g, -len * .36, -w * .34, len * .14, w * .68, w * .1); g.fill();
  g.fillStyle = "rgba(255,255,255,.22)"; mazeRect(g, -len * .2, -w * .3, len * .28, w * .6, w * .1); g.fill();
  if (lights) { g.fillStyle = "#ffe9a8"; g.fillRect(len / 2 - 2, -w * .4, 2, w * .2); g.fillRect(len / 2 - 2, w * .2, 2, w * .2);
    g.fillStyle = "#ff4d4d"; g.fillRect(-len / 2, -w * .4, 2, w * .2); g.fillRect(-len / 2, w * .2, 2, w * .2); }
  g.restore();
}
// copy, by night: two cars come at each other down the middle of the street, crunch, and the
// drivers get out to argue. ce: seconds since the copy
function mazeCrash(g, ce, cx, cy, px, hit, len) {
  if (ce > 7) return;
  g.save();
  if (ce > hit && ce < hit + 1) { var k = (ce - hit), r = px * (.6 + k * 1.4);                         // the crunch
    g.fillStyle = "rgba(255,210,80," + (1 - k) + ")"; g.beginPath();
    for (var i = 0; i < 16; i++) { var an = i / 16 * Math.PI * 2, rr = i % 2 ? r * .45 : r; g.lineTo(cx + Math.cos(an) * rr, cy + Math.sin(an) * rr); } g.fill(); }
  if (ce > hit + .7 && ce < 6.8) {                                                                      // out they get
    var arg = ce - hit - .7, u = px * 1.3;
    [[-1, "#ffbe0b"], [1, "#2a9d8f"]].forEach(function (d) {
      var x = cx + d[0] * (len * .55 + Math.min(1, arg * 2) * px * .4), y = cy - px * 1.3, sh = Math.sin(arg * 9 + d[0]) * px * .08;
      mazePerson(g, x + sh, y, u, {shirt: d[1], skin: d[0] < 0 ? "#e0ac69" : "#c68642", hair: "#111", arms: Math.sin(arg * 7 + d[0] * 1.5) > 0 ? "up" : "swing", lean: d[0] * -.15});
      if (Math.floor(arg * 2.5 + (d[0] > 0 ? .5 : 0)) % 2 === 0) {                                       // words were said
        g.fillStyle = "#fff"; mazeRect(g, x - px * .9, y - u * 1.45, px * 1.8, px * .8, px * .3); g.fill();
        g.fillStyle = "#e63946"; g.font = "900 " + (px * .62) + "px Inter,Tahoma"; g.textAlign = "center"; g.textBaseline = "middle";
        g.fillText(d[0] < 0 ? "#@!" : "?!%", x, y - u * 1.05); } });
  }
  g.restore();
}
// copy, by day: two boats bump in the middle of the river, a splash, the rowers shout
function mazeBump(g, ce, cx, cy, px, t) {
  var hit = 1.2, len = px * 2.4, a = Math.max(0, hit - ce) / hit, gap = len * .48 + a * cx * .8;
  var bob = ce > hit ? Math.sin((ce - hit) * 14) * Math.exp(-(ce - hit) * 2) * px * .3 : 0;
  g.save(); g.globalAlpha *= ce > 5 ? Math.max(0, 6 - ce) : 1;
  mazeBoat(g, cx - gap - bob, cy + bob * .5, len, 1, "row", t, "#c97b4a");
  mazeBoat(g, cx + gap + bob, cy - bob * .5, len, -1, "row", t + 1, "#e76f51");
  if (ce > hit && ce < hit + 1.4) { var k = (ce - hit) / 1.4;
    for (var i = 0; i < 10; i++) { var an = i / 10 * Math.PI * 2, rr = px * (.4 + k * 1.6);
      g.fillStyle = "rgba(255,255,255," + (1 - k) * .9 + ")"; g.beginPath(); g.arc(cx + Math.cos(an) * rr, cy + Math.sin(an) * rr * .6 - k * px * .6, px * .16, 0, 7); g.fill(); } }
  if (ce > hit + .4 && ce < 5.5 && Math.floor((ce - hit) * 2) % 2 === 0) {
    g.fillStyle = "#fff"; mazeRect(g, cx - px * 1.1, cy - px * 2.1, px * 2.2, px * .85, px * .3); g.fill();
    g.fillStyle = "#e63946"; g.font = "900 " + (px * .6) + "px Inter,Tahoma"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("!!", cx, cy - px * 1.68); }
  g.restore();
}
// copy, by day: the two boats stop and square up, one turns pirate, they trade cannon fire,
// the pirate runs. be: seconds since it began
function mazeBattle(g, B, be, t, px, rv, S, span, boatX) {
  var len = px * 2.4, ya = rv + (S - rv) * B.a.lane, yb = rv + (S - rv) * B.b.lane, stop = .9;
  function at(b, x0) { var v = b.v * span * b.dir, e = Math.min(be, stop); return x0 + v * (e - e * e / (2 * stop)); }
  var xa = at(B.a, B.xa), xb = at(B.b, B.xb), P = B.pirate, flee = Math.max(0, be - 6.4);
  if (flee) { if (P === B.a) xa += B.a.dir * flee * flee * px * 2.2; else xb += B.b.dir * flee * flee * px * 2.2;
    if (!B.sink) { var O = P === B.a ? B.b : B.a, ov = O.v * span * O.dir * Math.max(0, flee - .4); if (O === B.a) xa += ov; else xb += ov; } }
  var face = xb > xa ? 1 : -1, turned = be > 1 && !flee, pir = be > 1.2;
  var bobA = Math.sin(t * 2.2) * 1.2, bobB = Math.sin(t * 2.2 + 1.5) * 1.2;
  var sunk = B.sink ? Math.max(0, be - 6.7) : 0, Vgone = sunk > .9;
  g.save(); if (V === B.a && sunk) { g.globalAlpha *= Math.max(0, 1 - sunk / .9); } if (!(V === B.a && Vgone))
  mazeBoat(g, xa, ya + bobA, len, turned ? face : B.a.dir, P === B.a && pir ? "sail" : B.a.kind, t, P === B.a && pir ? "#3b2a1a" : B.a.c, P === B.a && pir);
  g.restore(); g.save(); if (V === B.b && sunk) { g.globalAlpha *= Math.max(0, 1 - sunk / .9); } if (!(V === B.b && Vgone))
  mazeBoat(g, xb, yb + bobB, len, turned ? -face : B.b.dir, P === B.b && pir ? "sail" : B.b.kind, t + 1, P === B.b && pir ? "#3b2a1a" : B.b.c, P === B.b && pir);
  g.restore();
  var V = P === B.a ? B.b : B.a, vx = V === B.a ? xa : xb, vy = V === B.a ? ya : yb, boom = B.sink ? be - 6.2 : -1;
  if (be > 1.6 && be < 6.4) {                                                   // shots, back and forth; the last one tells
    var k = Math.floor((be - 1.6) / .8), st = (be - 1.6) - k * .8, fromP = (k + B.first) % 2 === 0;
    if (k === 5 && B.sink) { fromP = true; }
    var sa = (P === B.a) === fromP, sx = sa ? xa : xb, sy = sa ? ya : yb, tx = sa ? xb : xa, ty = sa ? yb : ya, dir = tx > sx ? 1 : -1;
    var mx = sx + dir * len * .45, miss = k === 5 && B.sink ? dir * len * .2 : ((k * 37) % 5 - 2) * px * .5 + (((k * 37) % 5 - 2) === 0 ? px : 0);
    if (st < .5) { var r = px * (.25 + st * 1.3); g.fillStyle = "rgba(210,210,210," + (1 - st * 2) + ")"; g.beginPath(); g.arc(mx, sy - px * .2, r, 0, 7); g.fill(); }
    if (st < .6) { var f2 = st / .6, cx = mx + (tx - dir * len * .2 + miss - mx) * f2, cy = sy + (ty - sy) * f2 - Math.sin(f2 * Math.PI) * px * 2.6;
      g.fillStyle = "#1a1a1a"; g.beginPath(); g.arc(cx, cy, px * .18, 0, 7); g.fill(); }
    else { var f3 = (st - .6) / .2, wx = tx - dir * len * .2 + miss;                 // the splash where it lands
      for (var i = 0; i < 7; i++) { var an = -Math.PI * (i + .5) / 7; g.fillStyle = "rgba(255,255,255," + (1 - f3) + ")";
        g.beginPath(); g.arc(wx + Math.cos(an) * px * (.3 + f3), ty + Math.sin(an) * px * (.3 + f3 * 1.4), px * .14, 0, 7); g.fill(); } }
  }
  if (boom > 0 && boom < 2.4) {                                                 // the hit: fire, smoke, pieces, and it goes down
    var fb = Math.min(1, boom / .5), fr = px * (.6 + boom * 2.2);
    if (boom < 1.2) { g.fillStyle = "rgba(255,170,40," + (1 - boom / 1.2) + ")"; g.beginPath(); g.arc(vx, vy, fr * .8, 0, 7); g.fill();
      g.fillStyle = "rgba(255,240,150," + (1 - boom / 1) * .9 + ")"; g.beginPath(); g.arc(vx, vy, fr * .45 * fb, 0, 7); g.fill(); }
    g.fillStyle = "rgba(70,70,70," + Math.max(0, .6 - boom * .25) + ")"; g.beginPath(); g.arc(vx - px * .3, vy - px * (1 + boom), px * (.6 + boom * .8), 0, 7); g.fill();
    for (var q = 0; q < 8; q++) { var an = q * .8 + .3, dd = px * (.5 + boom * 2.6), h = Math.sin(Math.min(1, boom / 1.6) * Math.PI) * px * 1.6;
      g.fillStyle = q % 2 ? "#8d5a34" : "#5b3a1e"; g.save(); g.translate(vx + Math.cos(an) * dd, vy + Math.sin(an) * dd * .5 - h); g.rotate(boom * 6 + q);
      g.fillRect(-px * .25, -px * .07, px * .5, px * .14); g.restore(); }
  }
  if (be >= 8.2) {                                                              // both back on their way, from where they are
    [[B.a, xa], [B.b, xb]].forEach(function (z) { var b = z[0], u = b === V && B.sink ? -px * 3.9 : (b.dir > 0 ? z[1] : S - z[1]);   // the sunk one: a new boat at the edge
      b.o = (((u + px * 4) / span - t * b.v) % 1 + 1) % 1; });
    return true;
  }
  return false;
}
// a boat from above: a rowing boat with someone at the oars, or a small sailing boat; a wake behind
function mazeBoat(g, x, y, len, dir, kind, t, col, pirate) {
  g.save(); g.translate(x, y); if (dir < 0) g.scale(-1, 1);
  var w = len * .38;
  g.strokeStyle = "rgba(255,255,255,.55)"; g.lineWidth = 1.2;
  for (var k = 1; k <= 3; k++) { var a = (t * 1.5 + k * .33) % 1; g.globalAlpha = .6 * (1 - a);
    g.beginPath(); g.moveTo(-len * .45 - a * len * 1.2, -w * (.3 + a)); g.lineTo(-len * .5, 0); g.lineTo(-len * .45 - a * len * 1.2, w * (.3 + a)); g.stroke(); }
  g.globalAlpha = 1;
  g.fillStyle = "rgba(0,30,60,.25)"; g.beginPath(); g.ellipse(2, 3, len / 2, w / 2, 0, 0, 7); g.fill();
  g.fillStyle = col; g.beginPath(); g.moveTo(len / 2, 0); g.quadraticCurveTo(len * .1, -w * .75, -len / 2, -w * .4); g.lineTo(-len / 2, w * .4); g.quadraticCurveTo(len * .1, w * .75, len / 2, 0); g.fill();
  g.fillStyle = "rgba(255,255,255,.35)"; g.beginPath(); g.ellipse(-len * .05, 0, len * .3, w * .22, 0, 0, 7); g.fill();
  if (kind === "sail") { g.fillStyle = pirate ? "#1d1d1f" : "#fdfcf7"; g.beginPath(); g.moveTo(len * .05, 0); g.lineTo(-len * .3, -w * 1.6 - Math.sin(t * 2) * w * .1); g.lineTo(-len * .35, 0); g.fill();
    g.strokeStyle = "#6d4c41"; g.lineWidth = 1.2; g.beginPath(); g.moveTo(len * .05, 0); g.lineTo(-len * .35, 0); g.stroke();
    if (pirate) { var fy = -w * 1.6, wv = Math.sin(t * 9) * w * .1;                     // the jolly roger
      g.fillStyle = "#111"; g.beginPath(); g.moveTo(-len * .3, fy); g.lineTo(-len * .3 - w * 1.1, fy + wv); g.lineTo(-len * .3 - w * 1.1, fy + w * .7 + wv); g.lineTo(-len * .3, fy + w * .7); g.fill();
      g.fillStyle = "#fff"; g.beginPath(); g.arc(-len * .3 - w * .55, fy + w * .33 + wv, w * .17, 0, 7); g.fill(); } }
  else { var oar = Math.sin(t * 5) * .5; g.strokeStyle = "#8d6e63"; g.lineWidth = 1.4;
    g.beginPath(); g.moveTo(0, -w * .3); g.lineTo(-len * .1 + oar * len * .2, -w * 1.4); g.moveTo(0, w * .3); g.lineTo(-len * .1 + oar * len * .2, w * 1.4); g.stroke();
    g.fillStyle = "#e9c46a"; g.beginPath(); g.arc(0, 0, w * .32, 0, 7); g.fill(); }
  g.restore();
}
// the world round the code. By day a forest: a paved square round the maze that fades into the
// grass, woods on three sides, a river along the bottom with boats. By night a city: the lit
// square, a pavement where people walk, street lamps, roof-tops with lit windows,
// a street with traffic and cars parked along it. The quiet zone itself is never drawn on here.
function drawFrame(g, L, night) {
  var S = L.S, px = L.px, n = L.n, C = L.cfg.COL, Q = L.cfg.QUIET_ZONE, rnd = mazeRand(L.seed + 7), k;
  function at(d) { return [L.ox - d * px, L.oy - d * px, (n + 2 * d) * px]; }   // the square d modules out from the code
  function soft(rect, col, blur, rad, times) {                                    // a shape drawn only as its blur: no edge
    var off = S * 4; g.save(); g.shadowColor = col; g.shadowBlur = blur; g.shadowOffsetX = off; g.fillStyle = "#000";
    for (var i = 0; i < (times || 1); i++) { mazeRect(g, rect[0] - off, rect[1], rect[2], rect[2], rad); g.fill(); } g.restore(); }
  var bottom = L.oy + n * px;                                                    // the code's lower edge
  if (!night) {
    g.fillStyle = "#8fbe7c"; g.fillRect(0, 0, S, S);
    for (k = 0; k < 900; k++) { g.fillStyle = rnd() < .5 ? "rgba(50,110,50,.25)" : "rgba(230,250,210,.3)"; g.fillRect(rnd() * S, rnd() * S, 1, 2 + rnd() * 2); }
    var rv = bottom + (Q + 3.1) * px;                                            // the river's near bank
    g.fillStyle = "#e6d6ab"; g.fillRect(0, rv - px * .6, S, px * .8);
    var wg = g.createLinearGradient(0, rv, 0, S); wg.addColorStop(0, "#6cbde0"); wg.addColorStop(1, "#3b8fc2"); g.fillStyle = wg; g.fillRect(0, rv, S, S - rv);
    var pr = at(Q + 2.5);                                                        // the paved square, fading into grass
    soft(pr, C.path, px * 1.2, px * 2.2, 2);
    g.save(); mazeRect(g, pr[0] + px * .5, pr[1] + px * .5, pr[2] - px, pr[2] - px, px * 2); g.clip(); L.paveJoints(g, pr[0], pr[1], pr[2], pr[2]); g.restore();
    var trees = [], edge = Q + 3.4, cols = ["#2f6b3a", "#3a7d45", "#24563a", "#4c8c4f", "#2b5f34"];
    for (var row = 0; row < 3; row++) {
      var d = edge + row * 1.7;
      for (var u = -d; u < n + d; u += 1.6 + rnd() * .5) {
        var j = (rnd() - .5) * .6, r = px * (1 + rnd() * .55);
        trees.push([L.ox + u * px, L.oy - (d + j) * px, r]);                       // top
        var yy = L.oy + u * px; if (yy < rv - px * 1.2) { trees.push([L.ox - (d + j) * px, yy, r]); trees.push([L.ox + (n + d + j) * px, yy, r * (.9 + rnd() * .2)]); }
      } }
    trees.sort(function (a, b) { return a[1] - b[1]; });
    trees.forEach(function (t) { var c = cols[Math.floor(rnd() * cols.length)];
      g.fillStyle = "rgba(0,0,0,.2)"; g.beginPath(); g.arc(t[0] + t[2] * .2, t[1] + t[2] * .28, t[2], 0, 7); g.fill();
      g.fillStyle = c; g.beginPath(); g.arc(t[0], t[1], t[2], 0, 7); g.fill();
      g.fillStyle = "rgba(255,255,255,.12)"; g.beginPath(); g.arc(t[0] - t[2] * .3, t[1] - t[2] * .3, t[2] * .5, 0, 7); g.fill(); });
    function sitter(x, y, u, shirt, skin) { mazeSitter(g, x, y, u, shirt, skin, "#2b1b10"); }
    MAZE_BENCHES.forEach(function (b) {                                          // benches, along the square's edge
      var dd = Q + 2.05, cx = b[0] === 1 ? L.ox + (n + dd) * px : L.ox + b[1] * n * px, cy = b[0] === 1 ? L.oy + b[1] * n * px : L.oy + (n + dd) * px;
      var w = b[0] === 1 ? px * .7 : px * 1.9, h = b[0] === 1 ? px * 1.9 : px * .7;
      g.fillStyle = "rgba(0,0,0,.16)"; g.fillRect(cx - w / 2 + 2, cy - h / 2 + 3, w, h);
      g.fillStyle = "#8d5a34"; g.fillRect(cx - w / 2, cy - h / 2, w, h);
      g.fillStyle = "#b77945"; for (var q3 = 0; q3 < 3; q3++) { if (b[0] === 1) g.fillRect(cx - w / 2 + 1, cy - h / 2 + q3 * h / 3 + 1, w - 2, h / 3 - 2); else g.fillRect(cx - w / 2 + q3 * w / 3 + 1, cy - h / 2 + 1, w / 3 - 2, h - 2); } });
    [[0, .17], [0, .8], [3, .4]].forEach(function (b, i) {                        // picnics on the square's edge
      var dd = Q + 2.05, cx = b[0] === 0 ? L.ox + b[1] * n * px : L.ox - dd * px, cy = b[0] === 0 ? L.oy - dd * px : L.oy + b[1] * n * px;
      var bw = px * 1.9, bh = px * 1.2;
      g.fillStyle = "rgba(0,0,0,.12)"; g.fillRect(cx - bw / 2 + 2, cy - bh / 2 + 2, bw, bh);
      for (var a = 0; a < 4; a++) for (var b2 = 0; b2 < 3; b2++) { g.fillStyle = (a + b2) % 2 ? "#fdfcf7" : ["#e63946", "#3a86ff", "#2a9d8f"][i];
        g.fillRect(cx - bw / 2 + a * bw / 4, cy - bh / 2 + b2 * bh / 3, bw / 4 + .5, bh / 3 + .5); }
      g.fillStyle = "#b5835a"; g.fillRect(cx - px * .18, cy - px * .15, px * .36, px * .3);
    });
    var ang = [S * .1, rv - px * .25];                                           // where anglers sit
    var boats = [{v: .045, o: .1, lane: .35, dir: 1, kind: "row", c: "#c97b4a"}, {v: .03, o: .6, lane: .7, dir: -1, kind: "sail", c: "#f1faee"}, {v: .038, o: .35, lane: .55, dir: -1, kind: "row", c: "#e76f51"}];
    var flyers = [{s: rnd() * 40, c: "#ffb703"}, {s: rnd() * 40, c: "#f78fb3"}], battle = null, lastB = -99;
    function pick(seed, k) { var v = Math.sin(seed * 91.7 + k * 47.3) * 43758.5; return v - Math.floor(v); }
    var dogWalk = [0];                                                    // the dog's way round the square, step by step, never reset
    return function (g, t) {
      for (var q = 0; q < 26; q++) { var x = ((q * 97.3 + t * px * (q % 2 ? 1.2 : -.9)) % (S + 40) + S + 40) % (S + 40) - 20, y = rv + px * .6 + (q * 37) % Math.max(1, S - rv - px);
        g.strokeStyle = "rgba(255,255,255,.35)"; g.lineWidth = 1; g.beginPath(); g.moveTo(x, y); g.lineTo(x + px * .9, y); g.stroke(); }
      var ce = t - MAZE_COPY, bspan = S + px * 8;
      function boatX(b, tt) { var u2 = ((tt * b.v + b.o) % 1 + 1) % 1 * bspan - px * 4; return b.dir > 0 ? u2 : S - u2; }
      if (MAZE_COPY !== lastB && ce >= 0 && ce < 12) {                   // the first moment two boats are both in view, apart
        lastB = MAZE_COPY; battle = null;
        for (var ts = MAZE_COPY; ts < MAZE_COPY + 12 && !battle; ts += .1)
          boats.forEach(function (a, i) { boats.forEach(function (b, j) { if (battle || j <= i) return;
            var xa = boatX(a, ts), xb = boatX(b, ts), dd = Math.abs(xa - xb);
            if (xa > px * 5 && xa < S - px * 5 && xb > px * 5 && xb < S - px * 5 && dd > px * 9 && dd < S * .65)
              battle = {t0: ts, a: a, b: b, xa: xa, xb: xb, pirate: b.kind === "sail" ? b : a.kind === "sail" ? a : b,
                first: Math.sin(MAZE_COPY * 12.9898) * 43758.5 % 1 < 0 ? 1 : 0, sink: Math.abs(Math.sin(MAZE_COPY * 78.233) * 43758.5) % 1 < .45}; }); });
      }
      var be = battle ? t - battle.t0 : -1, war = battle && be >= 0;
      boats.forEach(function (b) { if (war && be < 8.2 && (b === battle.a || b === battle.b)) return;
        mazeBoat(g, boatX(b, t), rv + (S - rv) * b.lane, px * 2.4, b.dir, b.kind, t + b.o * 9, b.c); });
      if (war && mazeBattle(g, battle, be, t, px, rv, S, bspan, boatX)) battle = null;
      // ducks: a mother and two, paddling along; scattered by a commotion
      var scat = 1, du = ((t * .012 * scat + .7) % 1) * (S + px * 6) - px * 3;
      [0, 1, 2].forEach(function (i) { var x = S - du + i * px * (1.1 + .2 * i), y = rv + (S - rv) * .22 + Math.sin(t * 2 + i) * 1.2, z = px * (i ? .32 : .45);
        g.fillStyle = "rgba(255,255,255,.45)"; g.beginPath(); g.ellipse(x + z * 1.3, y, z * 1.1, z * .35, 0, 0, 7); g.fill();
        g.fillStyle = i ? "#f2d16b" : "#8a6d3b"; g.beginPath(); g.ellipse(x, y, z, z * .62, 0, 0, 7); g.fill();
        g.fillStyle = i ? "#f2d16b" : "#2d6a4f"; g.beginPath(); g.arc(x - z * .75, y - z * .1, z * .45, 0, 7); g.fill();
        g.fillStyle = "#f4a261"; g.beginPath(); g.moveTo(x - z * 1.15, y - z * .15); g.lineTo(x - z * 1.5, y - z * .05); g.lineTo(x - z * 1.15, y + z * .05); g.fill(); });
      // the angler: a visit of about a minute and a half every couple of minutes, a different person each time
      var AP = 150, ak = Math.floor((t + 40) / AP), af = (t + 40) - ak * AP, stay = 60 + pick(5, ak) * 40, ac = C.shirt[Math.floor(pick(6, ak) * C.shirt.length)];
      if (af < stay + 12) {
        var walkIn = Math.min(1, af / 6), walkOut = Math.max(0, (af - stay - 6) / 6), sitting = af >= 6 && af < stay + 6;
        var axp = -px * 2 + (ang[0] + px * 2) * walkIn - (ang[0] + px * 3) * walkOut;
        if (sitting) {
          mazeSitter(g, axp, ang[1] - px * .35, px * 1.15, ac, C.skin[ak % 4], "#2b1b10");
          g.fillStyle = "#4d6a8a"; g.fillRect(axp - px * .9, ang[1] - px * .45, px * .45, px * .45);       // the bucket
          var ft2 = (af - 6) % 23, bite = ft2 > 19, land = ft2 > 21.5, fx = ang[0] + px * 2.8 + (land ? -(ft2 - 21.5) * px * 1.8 : 0);
          var fy = rv + (S - rv) * .35 + Math.sin(t * (bite ? 14 : 3)) * (bite ? 3 : 1.2) - (land ? (ft2 - 21.5) * px * 2 : 0);
          g.strokeStyle = "rgba(60,40,20,.8)"; g.lineWidth = 1; g.beginPath(); g.moveTo(axp + px * .2, ang[1] - px * .5);
          g.quadraticCurveTo(axp + px * 1.8, ang[1] - px * (bite ? 2.1 : 1.6), fx, fy); g.stroke();
          if (land) { g.fillStyle = "#adb5bd"; g.beginPath(); g.ellipse(fx, fy + px * .2, px * .4, px * .16, Math.sin(t * 20) * .5, 0, 7); g.fill(); }
          else { g.fillStyle = "#e63946"; g.beginPath(); g.arc(fx, fy, px * .16, 0, 7); g.fill(); }
        } else {
          mazePerson(g, axp, ang[1] - px * .9, px * 1.2, {shirt: ac, skin: C.skin[ak % 4], hair: "#2b1b10", step: Math.sin(t * 9), arms: "swing"});
          g.strokeStyle = "#6d4c41"; g.lineWidth = 1.2; g.beginPath(); g.moveTo(axp + px * .3, ang[1] - px * 1.2); g.lineTo(axp + px * 1.2, ang[1] - px * 2.2); g.stroke();   // the rod, carried
        }
      }
      var jt = t % 17; if (jt < .9) { var jx = S * .55 + pick(8, Math.floor(t / 17)) * S * .3, jy = rv + (S - rv) * .5, h = Math.sin(jt / .9 * Math.PI) * px * 1.2;   // a fish jumps
        g.fillStyle = "#adb5bd"; g.beginPath(); g.ellipse(jx, jy - h, px * .4, px * .16, -.6 + jt, 0, 7); g.fill(); }
      // a flock over the trees, now and then
      var ft = (t % 24) / 8;
      if (ft < 1) for (var bi = 0; bi < 5; bi++) { var bx = -px * 4 + ft * (S + px * 8) - Math.abs(bi - 2) * px * 1.1, by = L.oy - (Q + 4.6) * px + (bi - 2) * px * .7;
        var wf = Math.sin(t * 12 + bi) * px * .3; g.strokeStyle = "#2b2d42"; g.lineWidth = 1.4;
        g.beginPath(); g.moveTo(bx - px * .5, by - wf); g.lineTo(bx, by); g.lineTo(bx + px * .5, by - wf); g.stroke(); }
      var SL = 24, sk = Math.floor(t / SL), sf = t / SL - sk, POOL = [["bikes", 3], ["ball", 3], ["jog", 2], ["fire", 2], ["gym", 1]];
      function choose(k2) { var tot = 0, i; for (i = 0; i < POOL.length; i++) tot += POOL[i][1];
        var r1 = pick(31, k2) * tot, a = null; for (i = 0; i < POOL.length; i++) { r1 -= POOL[i][1]; if (r1 < 0) { a = POOL[i][0]; break; } }
        var b = null; if (pick(37, k2) < .45) { var r2 = pick(41, k2) * tot; for (i = 0; i < POOL.length; i++) { r2 -= POOL[i][1]; if (r2 < 0) { b = POOL[i][0]; break; } } }
        return b && b !== a ? [a, b] : [a]; }
      var scenes = choose(sk), fade = Math.min(1, sf * SL / 1.5, (1 - sf) * SL / 1.5);
      function on(nm) { return scenes.indexOf(nm) >= 0; }
      function M2(x, y) { return [L.ox + x * px, L.oy + y * px]; }
      g.save(); g.globalAlpha = fade;
      if (on("ball")) {                                                           // two people kicking a ball about
        var bc = M2(n * .3, n + Q + 1.55), sep = px * 4.2, bt = (t % 1.6) / 1.6, side2 = Math.floor(t / 1.6) % 2;
        var p1 = [bc[0] - sep / 2, bc[1]], p2 = [bc[0] + sep / 2, bc[1]], from = side2 ? p2 : p1, to = side2 ? p1 : p2;
        mazePerson(g, p1[0], p1[1] - px * .5, px * 1.2, {shirt: "#e63946", skin: C.skin[0], hair: "#111", step: side2 ? 0 : Math.sin(t * 10), arms: "swing"});
        mazePerson(g, p2[0], p2[1] - px * .5, px * 1.2, {shirt: "#3a86ff", skin: C.skin[2], hair: "#2b1b10", step: side2 ? Math.sin(t * 10) : 0, arms: "swing"});
        var bxp = from[0] + (to[0] - from[0]) * bt, byp = from[1] + px * .3 - Math.sin(bt * Math.PI) * px * 1.4;
        g.fillStyle = "rgba(0,0,0,.2)"; g.beginPath(); g.ellipse(bxp, from[1] + px * .45, px * .22, px * .08, 0, 0, 7); g.fill();
        g.fillStyle = "#fff"; g.beginPath(); g.arc(bxp, byp, px * .22, 0, 7); g.fill(); g.strokeStyle = "#222"; g.lineWidth = 1; g.stroke(); }
      if (on("jog")) {                                                            // someone out for a run round the square
        var jd = Q + 2.3, per = (n + 2 * jd) * 4, jp = ((t * 3.2) % per + per) % per, sd2 = Math.floor(jp / (n + 2 * jd)), fp = jp - sd2 * (n + 2 * jd) - jd;
        var jx2 = sd2 === 0 ? fp : sd2 === 1 ? n + jd : sd2 === 2 ? n - fp : -jd, jy2 = sd2 === 0 ? -jd : sd2 === 1 ? fp : sd2 === 2 ? n + jd : n - fp;
        var jj = M2(jx2, jy2); mazePerson(g, jj[0], jj[1] - px * .5, px * 1.2, {shirt: "#06d6a0", skin: C.skin[1], hair: "#111", step: Math.sin(t * 16), arms: "swing", lean: .12}); }
      if (on("gym")) {                                                            // star jumps by the benches
        var gy = M2(n + Q + 2.0, n * .5), up = Math.sin(t * 6) > 0;
        mazePerson(g, gy[0], gy[1] - px * .5, px * 1.2, {shirt: "#ff006e", skin: C.skin[3], hair: "#111", step: up ? 1 : -1, arms: up ? "up" : "swing"}); }
      if (on("fire")) {                                                           // a campfire at the wood's edge, people round it
        var fc = M2(-(Q + 2.6), n * .78);
        [[-1, 0], [1, 0], [0, -1]].forEach(function (o2, i) { mazeSitter(g, fc[0] + o2[0] * px * 1.1, fc[1] + o2[1] * px * .9, px * 1.05, C.shirt[(i * 3 + 1) % C.shirt.length], C.skin[i], "#2b1b10"); });
        g.strokeStyle = "#5b3a1e"; g.lineWidth = px * .18; g.beginPath(); g.moveTo(fc[0] - px * .4, fc[1] + px * .2); g.lineTo(fc[0] + px * .4, fc[1] - px * .1);
        g.moveTo(fc[0] - px * .4, fc[1] - px * .1); g.lineTo(fc[0] + px * .4, fc[1] + px * .2); g.stroke();
        for (var fl2 = 0; fl2 < 3; fl2++) { var hgt = px * (.55 + .25 * Math.sin(t * 9 + fl2 * 2)); g.fillStyle = ["#f77f00", "#fcbf49", "#e63946"][fl2];
          g.beginPath(); g.moveTo(fc[0] - px * .25 + fl2 * px * .2, fc[1]); g.quadraticCurveTo(fc[0] - px * .15 + fl2 * px * .2, fc[1] - hgt, fc[0] - px * .05 + fl2 * px * .2, fc[1] - hgt * 1.1);
          g.quadraticCurveTo(fc[0] + px * .05 + fl2 * px * .2, fc[1] - hgt * .5, fc[0] + px * .1 + fl2 * px * .2, fc[1]); g.fill(); }
        for (var sm = 0; sm < 3; sm++) { var sa2 = ((t * .5 + sm / 3) % 1); g.fillStyle = "rgba(160,160,160," + (.45 * (1 - sa2)) + ")";
          g.beginPath(); g.arc(fc[0] + Math.sin(t + sm) * px * .3, fc[1] - px * (1 + sa2 * 2.5), px * (.25 + sa2 * .4), 0, 7); g.fill(); } }
      g.restore();
      if (on("bikes")) [[.03, .2, 1, Q + 2.7 + n], [.025, .65, -1, -(Q + 2.55)]].forEach(function (bk, i) {   // cyclists
        var u = ((t * bk[0] + bk[1]) % 1) * (S + px * 6) - px * 3, x = bk[2] > 0 ? u : S - u, y = L.oy + bk[3] * px + Math.sin(t * .8 + i) * px * .15;
        g.save(); g.globalAlpha = fade; mazeBike(g, x, y, px * 1.1, bk[2], t, i ? "#2a9d8f" : "#e76f51", false, false); g.restore(); });
      // rabbits on the grass at the wood's edge: sit, nibble, hop on
      [[3, .2, 1.3], [0, .45, 2.1], [1, .58, 3.7]].forEach(function (rb) {
        var per = 2.6, k = Math.floor((t + rb[2]) / per), f = (t + rb[2]) / per - k, d0 = Q + 2.7;
        function spot(kk) { var u = rb[1] * n; for (var i = Math.max(0, kk - 6); i <= kk; i++) u += (pick(rb[2], i) - .5) * 1.4; return [u, d0 + pick(rb[2] + 3, kk) * .5]; }
        var a = spot(k), b = spot(k + 1), hop = f > .82 ? (f - .82) / .18 : 0, u = a[0] + (b[0] - a[0]) * hop, dd = a[1] + (b[1] - a[1]) * hop, lift = Math.sin(hop * Math.PI) * px * .5;
        var x = rb[0] === 0 ? L.ox + u * px : rb[0] === 1 ? L.ox + (n + dd) * px : L.ox - dd * px, y = rb[0] === 0 ? L.oy - dd * px : L.oy + u * px;
        var fx = b[0] >= a[0] ? 1 : -1;
        g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(x, y + px * .25, px * .35, px * .12, 0, 0, 7); g.fill();
        g.fillStyle = "#c8b8a6"; g.beginPath(); g.ellipse(x, y - lift, px * .32, px * .24, 0, 0, 7); g.fill();
        g.beginPath(); g.arc(x + fx * px * .28, y - px * .12 - lift, px * .15, 0, 7); g.fill();
        g.fillStyle = "#b5a493"; g.beginPath(); g.ellipse(x + fx * px * .3, y - px * .38 - lift, px * .05, px * .16, fx * .3, 0, 7); g.fill();
        g.fillStyle = "#fff"; g.beginPath(); g.arc(x - fx * px * .3, y - lift, px * .08, 0, 7); g.fill(); });
      // a dog that runs about the square, stops to sniff, runs on, tail going
      var dk = Math.floor(t / 3.4), df = t / 3.4 - dk, ds = function (kk) { while (dogWalk.length <= kk) dogWalk.push(dogWalk[dogWalk.length - 1] + (pick(7.7, dogWalk.length) - .45) * .12); return ((dogWalk[kk] % 4) + 4) % 4; };
      var s0 = ds(dk), s1 = ds(dk + 1), run = df < .6 ? df / .6 : 1, e2 = run * run * (3 - 2 * run), dd5 = s1 - s0;
      if (dd5 > 2) dd5 -= 4; else if (dd5 < -2) dd5 += 4;                       // round the corner the short way, never the whole square
      var ps = ((s0 + dd5 * e2) % 4 + 4) % 4, side = Math.floor(ps) % 4, fpos = ps - Math.floor(ps);
      var dd2 = Q + 1.6 + Math.sin(t * .7) * .4, du2 = -dd2 + fpos * (n + 2 * dd2);
      var dgx = side === 0 ? L.ox + du2 * px : side === 1 ? L.ox + (n + dd2) * px : side === 2 ? L.ox + (n - du2) * px : L.ox - dd2 * px;
      var dgy = side === 0 ? L.oy - dd2 * px : side === 1 ? L.oy + du2 * px : side === 2 ? L.oy + (n + dd2) * px : L.oy + (n - du2) * px;
      var dir2 = (dd5 >= 0 ? 1 : -1) * (side === 2 || side === 3 ? -1 : 1), wag = Math.sin(t * 18) * px * .15;
      g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(dgx, dgy + px * .3, px * .5, px * .14, 0, 0, 7); g.fill();
      g.fillStyle = "#c97b4a"; g.beginPath(); g.ellipse(dgx, dgy, px * .48, px * .22, 0, 0, 7); g.fill();
      g.beginPath(); g.arc(dgx + dir2 * px * .45, dgy - px * .1, px * .19, 0, 7); g.fill();
      g.fillStyle = "#7f4f24"; g.beginPath(); g.ellipse(dgx + dir2 * px * .42, dgy - px * .24, px * .07, px * .12, 0, 0, 7); g.fill();
      g.strokeStyle = "#c97b4a"; g.lineWidth = px * .1; g.beginPath(); g.moveTo(dgx - dir2 * px * .45, dgy); g.lineTo(dgx - dir2 * px * .7, dgy - px * .2 + wag); g.stroke();
      // squirrels scampering over the treetops along the top of the wood
      [0, 1].forEach(function (sq) { var per = 5.5, k = Math.floor((t + sq * 2.3) / per), f = (t + sq * 2.3) / per - k;
        var walkU = function (kk) { var u5 = n * (.3 + .4 * sq); for (var i5 = Math.max(0, kk - 8); i5 <= kk; i5++) u5 += (pick(11 + sq, i5) - .5) * 5; return Math.max(0, Math.min(n, u5)); };
        var u0 = walkU(k), u1 = walkU(k + 1), mv = f < .4 ? f / .4 : 1, u = u0 + (u1 - u0) * mv * mv * (3 - 2 * mv);
        var x = L.ox + u * px, y = L.oy - (Q + 4.2 + sq * 1.5) * px + Math.sin(mv * Math.PI * 4) * px * .2 * (mv < 1 ? 1 : 0), fx = u1 >= u0 ? 1 : -1;
        g.fillStyle = "#9c5a2e"; g.beginPath(); g.ellipse(x, y, px * .24, px * .15, 0, 0, 7); g.fill();
        g.beginPath(); g.arc(x + fx * px * .22, y - px * .05, px * .1, 0, 7); g.fill();
        g.strokeStyle = "#b7703f"; g.lineWidth = px * .16; g.lineCap = "round"; g.beginPath(); g.moveTo(x - fx * px * .2, y);
        g.quadraticCurveTo(x - fx * px * .55, y - px * .1, x - fx * px * .4, y - px * .35); g.stroke(); });
      // a second deer, on the left
      var lx = L.ox - (Q + 3.0) * px, ly = L.oy + n * px * .3 + Math.sin(t * .04 + 2) * px * 3, lhb = Math.max(0, Math.sin(t * .7 + 1)) * px * .35;
      g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(lx + px * .2, ly + px * .3, px * .7, px * .3, 0, 0, 7); g.fill();
      g.fillStyle = "#b07440"; g.beginPath(); g.ellipse(lx, ly, px * .7, px * .32, 0, 0, 7); g.fill();
      g.fillStyle = "#8b5a2b"; g.beginPath(); g.ellipse(lx + px * .8, ly + lhb * .3, px * .25, px * .19, 0, 0, 7); g.fill();
      // a deer grazing at the right-hand edge of the wood
      var dx = L.ox + (n + Q + 2.9) * px, dy = L.oy + n * px * .55 + Math.sin(t * .05) * px * 3, hb = Math.max(0, Math.sin(t * .8)) * px * .35;
      g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(dx + px * .2, dy + px * .3, px * .75, px * .32, 0, 0, 7); g.fill();
      g.fillStyle = "#a0673a"; g.beginPath(); g.ellipse(dx, dy, px * .75, px * .34, 0, 0, 7); g.fill();
      g.fillStyle = "#f1e3d0"; g.beginPath(); g.arc(dx + px * .55, dy - px * .05, px * .12, 0, 7); g.fill();
      g.fillStyle = "#8b5a2b"; g.beginPath(); g.ellipse(dx - px * .85, dy + hb * .3, px * .26, px * .2, 0, 0, 7); g.fill();
      flyers.forEach(function (b) {
        var a = t * .23 + b.s, x = L.ox + n * px / 2 + Math.cos(a) * (n / 2 + Q + 1.6) * px, y = L.oy + n * px / 2 + Math.sin(a * .9) * (n / 2 + Q + 1.6) * px;
        x += Math.sin(t * 2.3 + b.s) * px * .8; y += Math.cos(t * 1.7 + b.s) * px * .6; var fl = Math.abs(Math.sin(t * 14 + b.s));
        g.fillStyle = b.c; [-1, 1].forEach(function (sd) { g.beginPath(); g.ellipse(x + sd * px * .22 * fl, y, px * .24 * fl + .5, px * .3, 0, 0, 7); g.fill(); });
        g.fillStyle = "#3b2a1a"; g.fillRect(x - .7, y - px * .25, 1.4, px * .5); });
    };
  }
  // ---- night: the city
  g.fillStyle = "#2a3642"; g.fillRect(0, 0, S, S);                             // the pavement, all the way to the buildings
  for (k = 0; k < 700; k++) { g.fillStyle = rnd() < .5 ? "rgba(255,255,255,.035)" : "rgba(0,0,0,.18)"; g.fillRect(rnd() * S, rnd() * S, 1.5, 1.5); }
  soft(at(Q + 1.1), C.path, px * 1.5, px * 2.2, 3);                            // the margin's light: full at its edge, run out over a few modules
  var d = Q + 1.2, posts = [[-d, -d], [n + d, -d], [n + d, n + d], [-d, n + d]];
  [.21, .5, .79].forEach(function (a) { posts.push([a * n, -d], [n + d, a * n], [a * n, n + d], [-d, a * n]); });
  function P(pt) { return [L.ox + pt[0] * px, L.oy + pt[1] * px]; }
  var pc = [1, 3, 5].map(function (i) { return parseInt(C.path.substr(i, 2), 16); }).join(",");
  posts.forEach(function (a) { var A2 = P(a), R = px * 8.4, gl = g.createRadialGradient(A2[0], A2[1], 0, A2[0], A2[1], R);
    gl.addColorStop(0, "rgba(" + pc + ",.95)"); gl.addColorStop(.35, "rgba(" + pc + ",.8)"); gl.addColorStop(.62, "rgba(" + pc + ",.45)"); gl.addColorStop(.85, "rgba(" + pc + ",.15)"); gl.addColorStop(1, "rgba(" + pc + ",0)");
    g.fillStyle = gl; g.fillRect(A2[0] - R, A2[1] - R, 2 * R, 2 * R); });
  // roof-tops beyond the pavement, their windows on the side that faces the street
  var roofs = [], wins = [], R0 = 6.6;
  function block(x, y, w, h, faceX, faceY) { roofs.push([x, y, w, h]);
    var m = Math.floor((faceX ? h : w) / (px * .7));
    for (var i = 0; i < m; i++) if (rnd() < .65) wins.push(faceX ? [x + (faceX > 0 ? w - px * .35 : 0), y + px * .35 + i * px * .7, px * .3, px * .4, rnd()]
      : [x + px * .35 + i * px * .7, y + (faceY > 0 ? h - px * .35 : 0), px * .4, px * .3, rnd()]); }
  for (var u3 = -R0; u3 < n + R0; ) { var w3 = px * (3 + rnd() * 3), gap = px * (.4 + rnd() * .4), x3 = L.ox + u3 * px;
    block(x3, 0, w3, L.oy - R0 * px - 0, 0, 1); u3 += (w3 + gap) / px; }
  var roadTop = bottom + 6.3 * px;
  for (var v3 = -R0 + 1; v3 < (roadTop - L.oy) / px - 1; ) { var h3 = px * (3 + rnd() * 3), gap2 = px * (.4 + rnd() * .4), y3 = L.oy + v3 * px;
    if (y3 + h3 > roadTop - px) h3 = roadTop - px - y3; if (h3 < px * 1.5) break;
    block(0, y3, L.ox - R0 * px, h3, 1, 0); block(L.ox + (n + R0) * px, y3, S - (L.ox + (n + R0) * px), h3, -1, 0); v3 += (h3 + gap2) / px; }
  var DF = 6.6;                                                                     // the buildings' street face, in modules
  var nightRnd = mazeRand(L.seed + 101 + Math.floor((Date.now() / 3600000 + 12) / 24));   // a new night (from noon to noon), new parking
  function at2(side, frac, dd) { return side === 0 ? P([frac * n, -dd]) : side === 1 ? P([n + dd, frac * n]) : side === 2 ? P([frac * n, n + dd]) : P([-dd, frac * n]); }
  var afterRoofs = function () {
    [[0, .05, .27], [0, .42, .55], [0, .7, .95], [1, .25, .75], [3, .05, .2], [3, .32, .62], [3, .8, .95]].forEach(function (k2) {   // kerbs, in places
      var a = at2(k2[0], k2[1], DF - .1), b = at2(k2[0], k2[2], DF - .1);
      g.strokeStyle = "#5d6a77"; g.lineWidth = px * .22; g.lineCap = "butt"; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke();
      g.strokeStyle = "rgba(0,0,0,.35)"; g.lineWidth = 1; var ln = Math.hypot(b[0] - a[0], b[1] - a[1]), st2 = px * 1.1;
      for (var j = st2; j < ln; j += st2) { var f = j / ln, jx = a[0] + (b[0] - a[0]) * f, jy = a[1] + (b[1] - a[1]) * f;
        g.beginPath(); if (k2[0] % 2) { g.moveTo(jx - px * .11, jy); g.lineTo(jx + px * .11, jy); } else { g.moveTo(jx, jy - px * .11); g.lineTo(jx, jy + px * .11); } g.stroke(); } });
    MAZE_DOORS.forEach(function (dr, i) { var c = at2(dr[0], dr[1], DF + .05), vert = dr[0] % 2 === 1, w = vert ? px * .35 : px * 1, h = vert ? px * 1 : px * .35;
      var lg = g.createRadialGradient(c[0], c[1], 0, c[0], c[1], px * 1.6); lg.addColorStop(0, "rgba(255,200,110,.55)"); lg.addColorStop(1, "rgba(255,200,110,0)");
      g.fillStyle = lg; g.fillRect(c[0] - px * 1.6, c[1] - px * 1.6, px * 3.2, px * 3.2);
      g.fillStyle = "#ffcf7a"; g.fillRect(c[0] - w / 2, c[1] - h / 2, w, h);
      g.fillStyle = "#6b4226"; if (vert) g.fillRect(c[0] - w / 2, c[1] - h / 2, w * .35, h); else g.fillRect(c[0] - w / 2, c[1] - h / 2, w, h * .35);
      if (nightRnd() < .4) { var cp = at2(dr[0], dr[1] + (nightRnd() < .5 ? 1.7 : -1.7) / n, DF - .65); mazeCar(g, cp[0], cp[1], px * 2, ["#adb5bd", "#e63946", "#2a9d8f", "#ffbe0b"][Math.floor(nightRnd() * 4)], vert ? 2 : 1, false); } });
    MAZE_PICNICS.forEach(function (b) { var c = at2(b[0], b[1], Q + 2.05 + (4 - Q)); mazeBench(g, c[0], c[1], false, px); });
    MAZE_BENCHES.forEach(function (b) { var c = at2(b[0], b[1], Q + 2.05 + (4 - Q)); mazeBench(g, c[0], c[1], b[0] === 1, px); });
  };
  roofs.forEach(function (b) { var c = ["#17212b", "#1c2834", "#141d26", "#202d3a"][Math.floor(rnd() * 4)];
    g.fillStyle = c; g.fillRect(b[0], b[1], b[2], b[3]);
    g.strokeStyle = "rgba(255,255,255,.06)"; g.lineWidth = 1; g.strokeRect(b[0] + 1.5, b[1] + 1.5, b[2] - 3, b[3] - 3);
    if (rnd() < .6) { g.fillStyle = "#26333f"; g.fillRect(b[0] + b[2] * .3, b[1] + b[3] * .3, px * .9, px * .7); } });
  afterRoofs();
  // the street, and cars parked along its far side
  var rh = px * 1.8, bayH = px * 1.25, room = S - (bottom + 6.1 * px);         // below the walkers
  var bays = room >= rh + bayH + px * 1.3, ry = bays ? Math.max(roadTop, S - (rh + bayH + px * 1.1)) : Math.max(bottom + 6.1 * px, S - rh - px * .3), lay = ry + rh;
  g.fillStyle = "#2a3138"; g.fillRect(0, ry - px * .25, S, px * .25);
  g.fillStyle = "#1a2027"; g.fillRect(0, ry, S, S - ry);
  g.strokeStyle = "rgba(230,220,170,.5)"; g.lineWidth = Math.max(1, px * .1); g.setLineDash([px * .9, px * .7]);
  g.beginPath(); g.moveTo(0, ry + rh / 2); g.lineTo(S, ry + rh / 2); g.stroke(); g.setLineDash([]);
  var bay = lay + px * .45;                                                   // the bays start past a solid line
  if (bays) { g.strokeStyle = "rgba(240,240,240,.75)"; g.lineWidth = Math.max(1, px * .12); g.beginPath(); g.moveTo(0, bay - px * .2); g.lineTo(S, bay - px * .2); g.stroke(); }
  g.strokeStyle = "rgba(230,230,230,.35)"; g.lineWidth = 1;
  var bw = px * 2.5, bh = Math.min(bayH, S - bay - px * .6), b0 = px * 2.4, nb = bays && bh > px * .7 ? Math.floor((S - 2 * b0) / bw) : -1;   // bays, not in the corners
  for (k = 0; k <= nb; k++) { g.beginPath(); g.moveTo(b0 + k * bw, bay); g.lineTo(b0 + k * bw, bay + bh); g.stroke(); }
  for (k = 0; k < nb; k++) if (nightRnd() < .6) mazeCar(g, b0 + k * bw + bw / 2, bay + bh / 2, Math.min(px * 1.8, bh * 1.6), ["#e63946", "#3a86ff", "#adb5bd", "#ffbe0b", "#2a9d8f", "#8338ec"][Math.floor(nightRnd() * 6)], 1, false);
  // street lamps on posts, a wire slung from post to post
  var H = px * 1.5;
  function head(a) { var ox2 = a[0] < 0 ? -1 : a[0] > n ? 1 : 0, oy2 = a[1] < 0 ? -1 : a[1] > n ? 1 : 0, l = Math.hypot(ox2, oy2) || 1, A2 = P(a);
    return [A2[0] + ox2 / l * H, A2[1] + oy2 / l * H]; }
  posts.forEach(function (a) { var A2 = P(a), hd = head(a);
    g.fillStyle = "rgba(0,0,0,.35)"; g.beginPath(); g.ellipse(A2[0] + px * .25, A2[1] + px * .1, px * .45, px * .18, 0, 0, 7); g.fill();
    g.strokeStyle = "#2a3138"; g.lineWidth = px * .2; g.lineCap = "round"; g.beginPath(); g.moveTo(A2[0], A2[1]); g.lineTo(hd[0], hd[1]); g.stroke(); });
  var cars = [{c: "#ffbe0b", v: 1.0, o: .1, lane: 1}, {c: "#8338ec", v: .75, o: .55, lane: -1}, {c: "#06d6a0", v: .9, o: .8, lane: 1}, {c: "#f1faee", v: .65, o: .3, lane: -1}];
  var crash = null, lastCopy = -99;
  var mover = function (g, t) {
    wins.forEach(function (w) { var on = Math.sin(t * .05 + w[4] * 40) > -.6;                // a window goes dark now and then
      g.fillStyle = on ? "rgba(255,210,122,.9)" : "rgba(60,70,80,.8)"; g.fillRect(w[0], w[1], w[2], w[3]); });
    var span = S + px * 8;
    function carX(c, tt) { var u = ((tt * c.v * px * 3.2 / span + c.o) % 1 + 1) % 1 * span - px * 4; return c.lane > 0 ? u : S - u; }
    function laneY(c) { return ry + rh * (c.lane > 0 ? .74 : .26); }
    var len = px * 2.2, mid = ry + rh * .5;
    function spd(c) { return c.v * px * 3.2; }
    if (MAZE_COPY !== lastCopy && t - MAZE_COPY < 12) {
      lastCopy = MAZE_COPY; crash = null;
      for (var ts = MAZE_COPY; ts < MAZE_COPY + 10 && !crash; ts += .1)
        cars.forEach(function (a) { if (crash || a.lane < 0) return; cars.forEach(function (b) { if (crash || b.lane > 0) return;
          var ax = carX(a, ts), bx = carX(b, ts), T = (bx - ax - len) / (spd(a) + spd(b)), xm = ax + spd(a) * T + len / 2;
          if (T > 1.4 && T < 3.2 && xm > px * 6 && xm < S - px * 6) crash = {t0: ts, a: a, b: b, ax: ax, bx: bx, T: T, xm: xm}; }); });
    }
    var ce = crash ? t - crash.t0 : -1, busy = crash && ce >= 0;
    cars.forEach(function (c) { if (busy && (c === crash.a || c === crash.b)) return; mazeCar(g, carX(c, t), laneY(c), len, c.c, c.lane, true); });
    var mb = {v: 1.35, o: .42, lane: -1}; mazeBike(g, carX(mb, t), laneY(mb), px * 1.1, -1, t, "#e63946", true, true);
    if (busy) {
      var A = crash.a, B = crash.b, T = crash.T, axp, bxp, ay = laneY(A), by = laneY(B);
      if (ce < T) { axp = crash.ax + spd(A) * ce; bxp = crash.bx - spd(B) * ce;
        var f = Math.max(0, Math.min(1, (ce - T + 1) / 1)); f = f * f * (3 - 2 * f);           // the drift over the line, in the last second
        ay += (mid - ay) * f; by += (mid - by) * f * .35; }
      else if (ce < T + 5.5) { var jolt = Math.sin((ce - T) * 30) * Math.exp(-(ce - T) * 6) * px * .25;
        axp = crash.xm - len * .52 - jolt; bxp = crash.xm + len * .52 + jolt; ay = mid; by = laneY(B) + (mid - laneY(B)) * .35; }
      else { var gone = ce - T - 5.5, back = Math.min(1, gone / .8);
        axp = crash.xm - len * .52 + spd(A) * gone; bxp = crash.xm + len * .52 - spd(B) * gone;
        ay = mid + (laneY(A) - mid) * back; by = laneY(B) + (mid - laneY(B)) * .35 * (1 - back); }
      mazeCar(g, axp, ay, len, A.c, 1, true); mazeCar(g, bxp, by, len, B.c, -1, true);
      if (ce >= T) mazeCrash(g, ce - T + 1.3, crash.xm, mid, px, 1.3, len);
      if (ce >= T + 7.5) {                                                       // back into the traffic from where they are
        [[A, axp], [B, bxp]].forEach(function (z) { var c = z[0], u = c.lane > 0 ? z[1] : S - z[1];
          c.o = (((u + px * 4) / span - t * c.v * px * 3.2 / span) % 1 + 1) % 1; });
        crash = null; }
    }
    posts.forEach(function (a, i) { var hd = head(a), x = hd[0], y = hd[1], fl = flick(t, i);
      g.fillStyle = "#3a3f45"; g.beginPath(); g.ellipse(x, y, px * .42, px * .22, 0, 0, 7); g.fill();
      g.fillStyle = "rgba(255,226,160," + fl + ")"; g.beginPath(); g.arc(x, y + px * .08, px * .2, 0, 7); g.fill(); });
  };
  function flick(t, i) { return .88 + .12 * Math.sin(t * 7 + i * 1.7) * Math.sin(t * 2.3 + i); }
  mover.glow = function (g, t) {
    posts.forEach(function (a, i) { var hd = head(a), x = hd[0], y = hd[1], fl = flick(t, i), R = px * 4.4;
      var gl = g.createRadialGradient(x, y, 0, x, y, R);                      // the wide warm halo
      gl.addColorStop(0, "rgba(255,176,80," + (.75 * fl) + ")"); gl.addColorStop(.35, "rgba(255,176,80," + (.36 * fl) + ")"); gl.addColorStop(1, "rgba(255,176,80,0)");
      g.fillStyle = gl; g.fillRect(x - R, y - R, 2 * R, 2 * R);
      var r2 = px * 1.1, bl = g.createRadialGradient(x, y, 0, x, y, r2);       // and the bloom round the bulb
      bl.addColorStop(0, "rgba(255,240,200," + (.95 * fl) + ")"); bl.addColorStop(.4, "rgba(255,214,140," + (.6 * fl) + ")"); bl.addColorStop(1, "rgba(255,200,120,0)");
      g.fillStyle = bl; g.fillRect(x - r2, y - r2, 2 * r2, 2 * r2); });
  };
  return mover;
}

// 8. all together ------------------------------------------------------------------------
function mazeLayout(M, S, cfg, thumb) {
  var Q = cfg.LAYOUT_QUIET || cfg.QUIET_ZONE, Qr = cfg.QUIET_ZONE, frame = Math.round(S * cfg.FRAME), avail = S - 2 * frame;
  var px = Math.max(1, Math.floor(avail / (M.n + 2 * Q)));
  if (px < cfg.DETAIL.full && !thumb) { px = Math.max(1, Math.floor(S / (M.n + 2 * Q))); frame = 0; }  // smaller: the code gets the frame's room
  var qw = (M.n + 2 * Q) * px, qx = Math.round((S - qw) / 2);
  var level = thumb ? "full" : cfg.ART_DETAIL_LEVEL || (px >= cfg.DETAIL.full ? "full" : px >= cfg.DETAIL.medium ? "medium" : px >= cfg.DETAIL.simple ? "simple" : "plain");
  var ox = qx + Q * px;                                                // the code; the theme's own margin round it
  return {px: px, qx: ox - Qr * px, qy: ox - Qr * px, qw: (M.n + 2 * Qr) * px, ox: ox, oy: ox, level: level, frame: frame > 0 && level !== "plain"};
}
function mazeBuild(url, S, opts, night) {
  // the icon is only the code: no garden, a one-module margin (it is a picture of the code,
  // not the one people scan; the sheet is)
  var base = opts.thumb ? Object.assign({}, MAZE, {QUIET_ZONE: 1, FRAME: 0}) : MAZE;
  var cfg = night ? Object.assign({}, base, {QUIET_ZONE: opts.thumb ? 1 : MAZE.NIGHT_QUIET_ZONE, LAYOUT_QUIET: base.QUIET_ZONE,
    LIGHT_LUMINANCE_MIN: MAZE.NIGHT_LIGHT_MIN, COL: Object.assign({}, MAZE.COL, MAZE.NIGHT_COL)}) : base;
  var dbg = Object.assign({}, cfg.DEBUG, opts.debug || {});
  var M = generateQrMatrix(url, cfg); if (!M) return null;
  var L = mazeLayout(M, S, cfg, opts.thumb);
  L.M = M; L.n = M.n; L.S = S; L.cfg = cfg; L.role = buildReservedMap(M); L.conn = analyzeConnectivity(M);
  L.seed = hashStr(url); L.rnd = mazeRand(L.seed); L.used = []; L.night = night;
  if (L.level === "full" || L.level === "medium") buildMazeGraph(L);
  L.paveJoints = mazePaver(L);
  var still = document.createElement("canvas"); still.width = still.height = S; var g = still.getContext("2d", {willReadFrequently: true});
  var moving = L.frame ? drawFrame(g, L, night) : null;
  if (!L.frame) { g.fillStyle = cfg.COL.path; g.fillRect(0, 0, S, S); }
  if (L.level === "plain" || dbg.hideArtwork) {
    g.fillStyle = cfg.COL.path; g.fillRect(L.qx, L.qy, L.qw, L.qw); g.fillStyle = cfg.COL.eye;
    for (var r = 0; r < L.n; r++) for (var c = 0; c < L.n; c++) if (M.dark[r][c]) g.fillRect(L.ox + c * L.px, L.oy + r * L.px, L.px, L.px);
  } else {
    drawMazeBase(g, L);
    drawMazeWalls(g, L);
    if (opts.props !== false) drawProps(g, L);
    if (L.adj) drawStiles(g, L);
    g.imageSmoothingEnabled = false;
    drawProtectedPatterns(g, L);
    restoreSafeCores(g, L);
    drawQuietZone(g, L);
  }
  if (dbg.showReservedModules || dbg.showModuleGrid || dbg.showSafeCores || dbg.showConnectivity) mazeDebug(g, L, dbg);
  return {L: L, cfg: cfg, M: M, dbg: dbg, still: still, moving: moving, night: night};
}
function renderArtisticQr(url, S, opts) {
  opts = opts || {};
  function nightNow() { return opts.night != null ? opts.night : document.documentElement.getAttribute("data-theme") === "dark"; }
  var cur = mazeBuild(url, S, opts, nightNow()); if (!cur) return null;
  var nxt = null, fade0 = 0, L = cur.L, cfg = cur.cfg, M = cur.M, dbg = cur.dbg;
  var cv = document.createElement("canvas"); cv.width = cv.height = S; var o = cv.getContext("2d", {willReadFrequently: true});
  o.drawImage(cur.still, 0, 0);
  cv.__layout = {Q: cfg.QUIET_ZONE, n: L.n, px: L.px, ox: L.ox, oy: L.oy, level: L.level, version: M.version, dark: M.dark, role: L.role,
    lightMin: cfg.LIGHT_LUMINANCE_MIN, darkMax: cfg.DARK_LUMINANCE_MAX};
  var sim = null;
  if (opts.characters !== false && !dbg.hideArtwork && L.adj)
    sim = opts.time ? mazeSim(L) : (MAZE_SIMS[url] = MAZE_SIMS[url] || mazeSim(L));
  var reduce = !opts.motion && window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches, raf = 0, last = 0, fps = opts.fps || cfg.FPS;
  if (sim && opts.time) for (var tt = 0; tt < opts.time; tt += 1 / 30) sim.step(1 / 30);   // tests: a given moment
  function paint(t) {
    var k = 0;
    if (nxt) { k = Math.min(1, (performance.now() / 1000 - fade0) / MAZE.FADE); k = k * k * (3 - 2 * k); }
    o.globalAlpha = 1; o.drawImage(cur.still, 0, 0);
    if (nxt) { o.globalAlpha = k; o.drawImage(nxt.still, 0, 0); o.globalAlpha = 1; }
    [[cur, 1 - k], [nxt, k]].forEach(function (e) { var B = e[0]; if (!B || !B.moving || e[1] < .02) return;
      o.save(); o.globalAlpha = e[1]; o.beginPath(); o.rect(0, 0, S, S); o.rect(B.L.qx + B.L.qw, B.L.qy, -B.L.qw, B.L.qw); o.clip("evenodd"); B.moving(o, t); o.restore();
      if (B.moving.glow) { var cw = B.L.n * B.L.px;                    // light: over the quiet zone too, never on the code
        o.save(); o.globalAlpha = e[1]; o.globalCompositeOperation = "screen"; o.beginPath(); o.rect(0, 0, S, S); o.rect(B.L.ox + cw, B.L.oy, -cw, cw); o.clip("evenodd");
        B.moving.glow(o, t); o.restore(); } });
    var A = nxt && k > .5 ? nxt : cur;
    if (sim) {
      // the chase is drawn wherever it is; then every module it touched is clamped back
      var boxes = sim.draw(o, A.L);
      boxes.forEach(function (b) { var r0 = Math.floor(b[0] - b[2]), c0 = Math.floor(b[1] - b[2]), r1 = Math.ceil(b[0] + b[2]), c1 = Math.ceil(b[1] + b[2]);
        restoreReserved(o, A.still, A.L, r0, c0, r1, c1); restoreSafeCores(o, A.L, r0, c0, r1, c1, A.cfg.SPRITE_CORE_RATIO); });
    }
    if (nxt && k >= 1) { cur = nxt; nxt = null; L = cur.L; }
  }
  // the page's theme changes: cross-fade into the other world, built beforehand while the page idled
  var other = null;
  if (opts.night == null && !opts.still) (window.requestIdleCallback || function (f) { setTimeout(f, 2500); })(function () {
    try { if (!other) other = mazeBuild(url, S, opts, !cur.night); } catch (e) {} });
  if (opts.night == null && window.MutationObserver) new MutationObserver(function () {
    var nn = nightNow(); if ((nxt || cur).night === nn) return;
    if (nxt) { cur = nxt; L = cur.L; }
    var ready = other && other.night === nn ? other : null;
    other = cur;                                                     // and the one we leave is the next one back
    try { nxt = ready || mazeBuild(url, S, opts, nn); } catch (e) { nxt = null; return; }
    fade0 = performance.now() / 1000;
    if (!raf) paint(fade0);
  }).observe(document.documentElement, {attributes: true, attributeFilter: ["data-theme"]});
  paint(opts.time || performance.now() / 1000);
  if ((cur.moving || sim || opts.night == null) && !reduce && !opts.still) {
    var tick = function (now) {
      var t = now / 1000;
      if (t - last >= 1 / fps && !document.hidden && cv.isConnected) { try { if (sim) sim.advance(t); last = t; paint(t); } catch (e) { o.globalAlpha = 1; o.drawImage(cur.still, 0, 0); return; } }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }
  cv.__stop = function () { cancelAnimationFrame(raf); raf = 0; };
  cv.__start = function () { if (tick && !raf) raf = requestAnimationFrame(tick); };
  cv.__paintNow = function () { try { var t = performance.now() / 1000; if (sim) sim.advance(t); paint(t); } catch (e) {} };   // bring a kept picture up to the moment
  if (opts.lens && sim) {
    // the icon: a live window of opts.lens.mods modules round the monster, the camera easing after it
    var lens = document.createElement("canvas"), ls = opts.lens.size, lm = opts.lens.mods, lg = lens.getContext("2d");
    lens.width = lens.height = ls; var cam = null;
    var look = function () {
      var f = sim.focus(), half = lm / 2;
      var fx = Math.max(half - 1, Math.min(L.n + 1 - half, f[0])), fy = Math.max(half - 1, Math.min(L.n + 1 - half, f[1]));
      cam = cam ? [cam[0] + (fx - cam[0]) * .08, cam[1] + (fy - cam[1]) * .08] : [fx, fy];
      var sw = lm * L.px; lg.imageSmoothingQuality = "high";
      lg.drawImage(cv, L.ox + (cam[0] - half) * L.px, L.oy + (cam[1] - half) * L.px, sw, sw, 0, 0, ls, ls);
    };
    look();
    cancelAnimationFrame(raf);
    if (!reduce) { var tick2 = function (now) {
        var t = now / 1000;
        if (t - last >= 1 / fps && !document.hidden && lens.isConnected) { try { sim.advance(t); last = t; paint(t); look(); } catch (e) { return; } }
        raf = requestAnimationFrame(tick2); };
      raf = requestAnimationFrame(tick2); }
    lens.__stop = cv.__stop; lens.__full = cv;
    lens.__view = function () { return {cam: cam, mods: lm}; };          // where the icon is looking, in modules
    return lens;
  }
  return cv;
}
function mazeDebug(g, L, dbg) {
  var px = L.px, col = {finder: "255,0,0", separator: "255,140,0", timing: "0,160,255", align: "180,0,255",
    format: "0,200,80", version: "255,0,200", darkmod: "0,0,0"};
  for (var r = 0; r < L.n; r++) for (var c = 0; c < L.n; c++) {
    var x = L.ox + c * px, y = L.oy + r * px;
    if (dbg.showReservedModules && L.role[r][c]) { g.fillStyle = "rgba(" + col[L.role[r][c]] + ",.45)"; g.fillRect(x, y, px, px); }
    if (dbg.showSafeCores) { var a = px * (1 - L.cfg.SAFE_CORE_RATIO) / 2; g.strokeStyle = L.M.dark[r][c] ? "#0f0" : "#f0f"; g.lineWidth = 1;
      g.strokeRect(x + a, y + a, px - 2 * a, px - 2 * a); }
    if (dbg.showModuleGrid) { g.strokeStyle = "rgba(255,0,0,.35)"; g.lineWidth = 1; g.strokeRect(x, y, px, px); }
    if (dbg.showConnectivity && L.M.dark[r][c] && !L.role[r][c]) { var k = L.conn[r][c], m = x + px / 2, n2 = y + px / 2;
      g.strokeStyle = "#ffd60a"; g.lineWidth = Math.max(1, px * .12); g.beginPath();
      if (k & 1) { g.moveTo(m, n2); g.lineTo(m, y); } if (k & 2) { g.moveTo(m, n2); g.lineTo(x + px, n2); }
      if (k & 4) { g.moveTo(m, n2); g.lineTo(m, y + px); } if (k & 8) { g.moveTo(m, n2); g.lineTo(x, n2); } g.stroke(); }
  }
}
// what the debug view and the tests use: are all cores within their tone?
function verifyCores(cv, ratio) {
  var L = cv.__layout, g = cv.getContext("2d"), px = L.px, bad = 0, worst = 0;
  var img = g.getImageData(L.ox, L.oy, L.n * px, L.n * px).data, w = L.n * px, core = px * (ratio || MAZE.SAFE_CORE_RATIO), a0 = Math.ceil((px - core) / 2), a1 = Math.floor((px + core) / 2);
  for (var r = 0; r < L.n; r++) for (var c = 0; c < L.n; c++) for (var yy = a0; yy < a1; yy++) for (var xx = a0; xx < a1; xx++) {
    var i = ((r * px + yy) * w + c * px + xx) * 4, Y = .2126 * MAZE_LIN[img[i]] + .7152 * MAZE_LIN[img[i + 1]] + .0722 * MAZE_LIN[img[i + 2]];
    var off = L.dark[r][c] ? Y - L.darkMax - .01 : L.lightMin - .01 - Y;
    if (off > 0) { bad++; worst = Math.max(worst, off); }
  }
  return {bad: bad, worst: worst};
}

// the sheet calls this when the link is copied: the maze reacts
var MAZE_COPY = -99;
var MAZE_BENCHES = [[1, .3], [1, .7], [2, .25], [2, .75]];      // side (1 right, 2 bottom), place along it
var MAZE_PICNICS = [[0, .17], [0, .8], [3, .4]];                 // side (0 top, 3 left): blankets by day, benches by night
var MAZE_DOORS = [[0, .33], [0, .62], [1, .15], [1, .85], [3, .25], [3, .7]];   // front doors in the night's buildings
var MAZE_DOOR_CARS = [1, 4];                                     // doors with a car parked outside
// a bench from above; vertical when it stands along a side
function mazeBench(g, cx, cy, vertical, px) {
  var w = vertical ? px * .7 : px * 1.9, h = vertical ? px * 1.9 : px * .7;
  g.fillStyle = "rgba(0,0,0,.16)"; g.fillRect(cx - w / 2 + 2, cy - h / 2 + 3, w, h);
  g.fillStyle = "#8d5a34"; g.fillRect(cx - w / 2, cy - h / 2, w, h);
  g.fillStyle = "#b77945"; for (var q = 0; q < 3; q++) { if (vertical) g.fillRect(cx - w / 2 + 1, cy - h / 2 + q * h / 3 + 1, w - 2, h / 3 - 2); else g.fillRect(cx - w / 2 + q * w / 3 + 1, cy - h / 2 + 1, w / 3 - 2, h - 2); }
}
// a small dog from above, facing fx (1 right, -1 left)
function mazeDog(g, x, y, px, fx, wag, col) {
  g.fillStyle = "rgba(0,0,0,.18)"; g.beginPath(); g.ellipse(x, y + px * .22, px * .36, px * .1, 0, 0, 7); g.fill();
  g.fillStyle = col; g.beginPath(); g.ellipse(x, y, px * .34, px * .16, 0, 0, 7); g.fill();
  g.beginPath(); g.arc(x + fx * px * .32, y - px * .08, px * .14, 0, 7); g.fill();
  g.strokeStyle = col; g.lineWidth = px * .08; g.lineCap = "round"; g.beginPath(); g.moveTo(x - fx * px * .32, y); g.lineTo(x - fx * px * .5, y - px * .15 + wag); g.stroke();
}
// a bicycle (or, with motor, a motorbike) from above, nose toward fx
function mazeBike(g, x, y, px, fx, t, col, motor, lights) {
  g.save(); g.translate(x, y); if (fx < 0) g.scale(-1, 1);
  if (lights) { var hl = g.createLinearGradient(px * .6, 0, px * 3, 0); hl.addColorStop(0, "rgba(255,240,190,.5)"); hl.addColorStop(1, "rgba(255,240,190,0)");
    g.fillStyle = hl; g.beginPath(); g.moveTo(px * .6, 0); g.lineTo(px * 3, -px * .7); g.lineTo(px * 3, px * .7); g.fill(); }
  g.fillStyle = "rgba(0,0,0,.2)"; g.beginPath(); g.ellipse(px * .1, px * .25, px * .8, px * .14, 0, 0, 7); g.fill();
  g.strokeStyle = "#222"; g.lineWidth = px * (motor ? .2 : .12); g.lineCap = "round";
  g.beginPath(); g.moveTo(-px * .7, 0); g.lineTo(px * .7, 0); g.stroke();                       // wheels, seen edge-on from above
  g.strokeStyle = col; g.lineWidth = px * (motor ? .26 : .1); g.beginPath(); g.moveTo(-px * .4, 0); g.lineTo(px * .35, 0); g.stroke();
  var pd = Math.sin(t * (motor ? 0 : 9)) * px * .15;
  g.fillStyle = "#2b2d42"; g.fillRect(-px * .05, -px * .12 + pd, px * .1, px * .24);
  g.fillStyle = motor ? "#111" : "#3a86ff"; g.beginPath(); g.ellipse(-px * .05, 0, px * .22, px * .2, 0, 0, 7); g.fill();   // rider
  g.fillStyle = motor ? "#e63946" : "#f1c27d"; g.beginPath(); g.arc(px * .12, 0, px * .14, 0, 7); g.fill();
  g.restore();
}
function mazeCheer(url) { var sim = MAZE_SIMS[url]; if (sim && sim.cheer) sim.cheer(); MAZE_COPY = performance.now() / 1000; }

if (typeof module === "object" && module && module.exports) {
  module.exports = {renderArtisticQr: renderArtisticQr, mazeCheer: mazeCheer, verifyCores: verifyCores, MAZE: MAZE, qrcode: qrcode};
}

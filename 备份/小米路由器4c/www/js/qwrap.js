/*!
	Copyright (c) Baidu Youa Wed QWrap
	version: 1.1.5 2013-02-28 released
	author: QWrap 月影、JK、屈屈
*/
(function(){var QW={VERSION:"1.1.5",RELEASE:"2013-02-28",PATH:(function(){var sTags=document.getElementsByTagName("script");return sTags[sTags.length-1].src.replace(/(^|\/)[^\/]+\/[^\/]+$/,"$1")}()),namespace:function(sSpace,root){var arr=sSpace.split("."),i=0,nameI;if(sSpace.indexOf(".")==0){i=1;root=root||QW}root=root||window;for(;nameI=arr[i++];){if(!root[nameI]){root[nameI]={}}root=root[nameI]}return root},noConflict:(function(){var _previousQW=window.QW;return function(){window.QW=_previousQW;return QW}}()),loadJs:function(url,callback,options){options=options||{};var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script"),done=false;script.src=url;if(options.charset){script.charset=options.charset}if("async" in options){script.async=options.async||""}script.onerror=script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;if(callback){callback()}script.onerror=script.onload=script.onreadystatechange=null;head.removeChild(script)}};head.insertBefore(script,head.firstChild)},loadJsonp:(function(){var seq=new Date()*1;return function(url,callback,options){options=options||{};var funName="QWJsonp"+seq++,callbackReplacer=options.callbackReplacer||/%callbackfun%/ig;window[funName]=function(data){if(callback){callback(data)}window[funName]=null};if(callbackReplacer.test(url)){url=url.replace(callbackReplacer,funName)}else{url+=(/\?/.test(url)?"&":"?")+"callback="+funName}QW.loadJs(url,options.oncomplete,options)}}()),loadCss:function(url){var head=document.getElementsByTagName("head")[0]||document.documentElement,css=document.createElement("link");css.rel="stylesheet";css.type="text/css";css.href=url;head.insertBefore(css,head.firstChild)},error:function(obj,type){type=type||Error;throw new type(obj)}};window.QW=QW}());(function(){var StringH={trim:function(s){return s.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g,"")},mulReplace:function(s,arr){for(var i=0;i<arr.length;i++){s=s.replace(arr[i][0],arr[i][1])}return s},format:function(s,arg0){var args=arguments;return s.replace(/\{(\d+)\}/ig,function(a,b){var ret=args[(b|0)+1];return ret==null?"":ret})},tmpl:(function(){var sArrName="sArrCMX",sLeft=sArrName+'.push("';var tags={js:{tagG:"js",isBgn:1,isEnd:1,sBgn:'");',sEnd:";"+sLeft},"if":{tagG:"if",isBgn:1,rlt:1,sBgn:'");if',sEnd:"{"+sLeft},elseif:{tagG:"if",cond:1,rlt:1,sBgn:'");} else if',sEnd:"{"+sLeft},"else":{tagG:"if",cond:1,rlt:2,sEnd:'");}else{'+sLeft},"/if":{tagG:"if",isEnd:1,sEnd:'");}'+sLeft},"for":{tagG:"for",isBgn:1,rlt:1,sBgn:'");for',sEnd:"{"+sLeft},"/for":{tagG:"for",isEnd:1,sEnd:'");}'+sLeft},"while":{tagG:"while",isBgn:1,rlt:1,sBgn:'");while',sEnd:"{"+sLeft},"/while":{tagG:"while",isEnd:1,sEnd:'");}'+sLeft}};return function(sTmpl,opts){var N=-1,NStat=[];var ss=[[/\{strip\}([\s\S]*?)\{\/strip\}/g,function(a,b){return b.replace(/[\r\n]\s*\}/g," }").replace(/[\r\n]\s*/g,"")}],[/\\/g,"\\\\"],[/"/g,'\\"'],[/\r/g,"\\r"],[/\n/g,"\\n"],[/\{[\s\S]*?\S\}/g,function(a){a=a.substr(1,a.length-2);for(var i=0;i<ss2.length;i++){a=a.replace(ss2[i][0],ss2[i][1])}var tagName=a;if(/^(.\w+)\W/.test(tagName)){tagName=RegExp.$1}var tag=tags[tagName];if(tag){if(tag.isBgn){var stat=NStat[++N]={tagG:tag.tagG,rlt:tag.rlt}}if(tag.isEnd){if(N<0){throw new Error("Unexpected Tag: "+a)}stat=NStat[N--];if(stat.tagG!=tag.tagG){throw new Error("Unmatch Tags: "+stat.tagG+"--"+tagName)}}else{if(!tag.isBgn){if(N<0){throw new Error("Unexpected Tag:"+a)}stat=NStat[N];if(stat.tagG!=tag.tagG){throw new Error("Unmatch Tags: "+stat.tagG+"--"+tagName)}if(tag.cond&&!(tag.cond&stat.rlt)){throw new Error("Unexpected Tag: "+tagName)}stat.rlt=tag.rlt}}return(tag.sBgn||"")+a.substr(tagName.length)+(tag.sEnd||"")}else{return'",('+a+'),"'}}]];var ss2=[[/\\n/g,"\n"],[/\\r/g,"\r"],[/\\"/g,'"'],[/\\\\/g,"\\"],[/\$(\w+)/g,'opts["$1"]'],[/print\(/g,sArrName+".push("]];for(var i=0;i<ss.length;i++){sTmpl=sTmpl.replace(ss[i][0],ss[i][1])}if(N>=0){throw new Error("Lose end Tag: "+NStat[N].tagG)}sTmpl=sTmpl.replace(/##7b/g,"{").replace(/##7d/g,"}").replace(/##23/g,"#");sTmpl="var "+sArrName+"=[];"+sLeft+sTmpl+'");return '+sArrName+'.join("");';var fun=new Function("opts",sTmpl);if(arguments.length>1){return fun(opts)}return fun}}()),contains:function(s,subStr){return s.indexOf(subStr)>-1},dbc2sbc:function(s){return StringH.mulReplace(s,[[/[\uff01-\uff5e]/g,function(a){return String.fromCharCode(a.charCodeAt(0)-65248)}],[/\u3000/g," "],[/\u3002/g,"."]])},byteLen:function(s){return s.replace(/[^\x00-\xff]/g,"--").length},subByte:function(s,len,tail){if(StringH.byteLen(s)<=len){return s}tail=tail||"";len-=StringH.byteLen(tail);return s.substr(0,len).replace(/([^\x00-\xff])/g,"$1 ").substr(0,len).replace(/[^\x00-\xff]$/,"").replace(/([^\x00-\xff]) /g,"$1")+tail},capitalize:function(s){return s.slice(0,1).toUpperCase()+s.slice(1)},camelize:function(s){return s.replace(/\-(\w)/ig,function(a,b){return b.toUpperCase()})},decamelize:function(s){return s.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})},encode4Js:function(s){return StringH.mulReplace(s,[[/\\/g,"\\u005C"],[/"/g,"\\u0022"],[/'/g,"\\u0027"],[/\//g,"\\u002F"],[/\r/g,"\\u000A"],[/\n/g,"\\u000D"],[/\t/g,"\\u0009"]])},escapeChars:function(s){return StringH.mulReplace(s,[[/\\/g,"\\\\"],[/"/g,'\\"'],[/\r/g,"\\r"],[/\n/g,"\\n"],[/\t/g,"\\t"]])},encode4Http:function(s){return s.replace(/[\u0000-\u0020\u0080-\u00ff\s"'#\/\|\\%<>\[\]\{\}\^~;\?\:@=&]/g,function(a){return encodeURIComponent(a)})},encode4Html:function(s){var el=document.createElement("pre");var text=document.createTextNode(s);el.appendChild(text);return el.innerHTML},encode4HtmlValue:function(s){return StringH.encode4Html(s).replace(/"/g,"&quot;").replace(/'/g,"&#039;")},decode4Html:function(s){var div=document.createElement("div");div.innerHTML=StringH.stripTags(s);return div.childNodes[0]?div.childNodes[0].nodeValue||"":""},stripTags:function(s){return s.replace(/<[^>]*>/gi,"")},evalJs:function(s,opts){return new Function("opts",s)(opts)},evalExp:function(s,opts){return new Function("opts","return ("+s+");")(opts)},queryUrl:function(url,key){url=url.replace(/^[^?=]*\?/ig,"").split("#")[0];var json={};url.replace(/(^|&)([^&=]+)=([^&]*)/g,function(a,b,key,value){try{key=decodeURIComponent(key)}catch(e){}try{value=decodeURIComponent(value)}catch(e){}if(!(key in json)){json[key]=/\[\]$/.test(key)?[value]:value}else{if(json[key] instanceof Array){json[key].push(value)}else{json[key]=[json[key],value]}}});return key?json[key]:json},decodeURIJson:function(url){return StringH.queryUrl(url)}};QW.StringH=Strin
{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.dF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bZ(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={bO:function bO(){},ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a7:function(a){var u,t
u=H.m(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
du:function(a){return v.types[H.D(a)]},
e_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.v(a).$ibP},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.e(H.ct(a))
return u},
X:function(a){return H.cY(a)+H.bW(H.O(a),0,null)},
cY:function(a){var u,t,s,r,q,p,o,n,m
u=J.v(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.q||!!u.$iai){p=C.e(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.a7(r.length>1&&C.c.W(r,0)===36?C.c.S(r,1):r)},
dv:function(a){throw H.e(H.ct(a))},
a2:function(a,b){if(a==null)J.bI(a)
throw H.e(H.cv(a,b))},
cv:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.E(!0,b,"index",null)
u=J.bI(a)
if(!(b<0)){if(typeof u!=="number")return H.dv(u)
t=b>=u}else t=!0
if(t)return P.cf(b,a,"index",null,u)
return P.bR(b,"index")},
ct:function(a){return new P.E(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.W()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cF})
u.name=""}else u.toString=H.cF
return u},
cF:function(){return J.au(this.dartException)},
cE:function(a){throw H.e(a)},
dE:function(a){throw H.e(P.cc(a))},
z:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c4([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
b_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ck:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ci:function(a,b){return new H.aR(a,b==null?null:b.method)},
bQ:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.aO(a,t,u?null:b.receiver)},
a8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.bH(a)
if(a==null)return
if(a instanceof H.T)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.Y(s,16)&8191)===10)switch(r){case 438:return u.$1(H.bQ(H.c(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ci(H.c(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.cH()
p=$.cI()
o=$.cJ()
n=$.cK()
m=$.cN()
l=$.cO()
k=$.cM()
$.cL()
j=$.cQ()
i=$.cP()
h=q.j(t)
if(h!=null)return u.$1(H.bQ(H.m(t),h))
else{h=p.j(t)
if(h!=null){h.method="call"
return u.$1(H.bQ(H.m(t),h))}else{h=o.j(t)
if(h==null){h=n.j(t)
if(h==null){h=m.j(t)
if(h==null){h=l.j(t)
if(h==null){h=k.j(t)
if(h==null){h=n.j(t)
if(h==null){h=j.j(t)
if(h==null){h=i.j(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ci(H.m(t),h))}}return u.$1(new H.b1(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.af()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.E(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.af()
return a},
a1:function(a){var u
if(a instanceof H.T)return a.b
if(a==null)return new H.aq(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.aq(a)},
dz:function(a,b,c,d,e,f){H.h(a,"$ibM")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.ba("Unsupported number of arguments for wrapped closure"))},
bz:function(a,b){var u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dz)
a.$identity=u
return u},
cV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.aX().constructor.prototype):Object.create(new H.a9(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.y
if(typeof q!=="number")return q.k()
$.y=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.cb(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.du,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.ca:H.bJ
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.e("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.cb(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
cS:function(a,b,c,d){var u=H.bJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cb:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cU(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cS(t,!r,u,b)
if(t===0){r=$.y
if(typeof r!=="number")return r.k()
$.y=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.P
if(q==null){q=H.ay("self")
$.P=q}return new Function(r+H.c(q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.y
if(typeof r!=="number")return r.k()
$.y=r+1
o+=r
r="return function("+o+"){return this."
q=$.P
if(q==null){q=H.ay("self")
$.P=q}return new Function(r+H.c(q)+"."+H.c(u)+"("+o+");}")()},
cT:function(a,b,c,d){var u,t
u=H.bJ
t=H.ca
switch(b?-1:a){case 0:throw H.e(new H.aU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cU:function(a,b){var u,t,s,r,q,p,o,n
u=$.P
if(u==null){u=H.ay("self")
$.P=u}t=$.c9
if(t==null){t=H.ay("receiver")
$.c9=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.cT(r,!p,s,b)
if(r===1){u="return function(){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+");"
t=$.y
if(typeof t!=="number")return t.k()
$.y=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+", "+n+");"
t=$.y
if(typeof t!=="number")return t.k()
$.y=t+1
return new Function(u+t+"}")()},
bZ:function(a,b,c,d,e,f,g){return H.cV(a,b,H.D(c),d,!!e,!!f,g)},
bJ:function(a){return a.a},
ca:function(a){return a.c},
ay:function(a){var u,t,s,r,q
u=new H.a9("self","target","receiver","name")
t=J.ch(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
m:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.A(a,"String"))},
e0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.A(a,"num"))},
dX:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.A(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.A(a,"int"))},
dD:function(a,b){throw H.e(H.A(a,H.a7(H.m(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.dD(a,b)},
c1:function(a){if(a==null)return a
if(!!J.v(a).$ip)return a
throw H.e(H.A(a,"List<dynamic>"))},
cw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.D(u)]
else return a.$S()}return},
as:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.cw(J.v(a))
if(u==null)return!1
return H.co(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.bU)return a
$.bU=!0
try{if(H.as(a,b))return a
u=H.a5(b)
t=H.A(a,u)
throw H.e(t)}finally{$.bU=!1}},
at:function(a,b){if(a!=null&&!H.bY(a,b))H.cE(H.A(a,H.a5(b)))
return a},
A:function(a,b){return new H.ah("TypeError: "+P.bL(a)+": type '"+H.dl(a)+"' is not a subtype of type '"+b+"'")},
dl:function(a){var u,t
u=J.v(a)
if(!!u.$iQ){t=H.cw(u)
if(t!=null)return H.a5(t)
return"Closure"}return H.X(a)},
dF:function(a){throw H.e(new P.aB(H.m(a)))},
cy:function(a){return v.getIsolateTag(a)},
c4:function(a,b){a.$ti=b
return a},
O:function(a){if(a==null)return
return a.$ti},
dZ:function(a,b,c){return H.a6(a["$a"+H.c(c)],H.O(b))},
cz:function(a,b,c,d){var u
H.m(c)
H.D(d)
u=H.a6(a["$a"+H.c(c)],H.O(b))
return u==null?null:u[d]},
u:function(a,b){var u
H.D(b)
u=H.O(a)
return u==null?null:u[b]},
a5:function(a){return H.H(a,null)},
H:function(a,b){var u,t
H.bx(b,"$ip",[P.q],"$ap")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.a7(a[0].name)+H.bW(a,1,b)
if(typeof a=="function")return H.a7(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a2(b,t)
return H.c(b[t])}if('func' in a)return H.dc(a,b)
if('futureOr' in a)return"FutureOr<"+H.H("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
dc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.q]
H.bx(b,"$ip",u,"$ap")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c4([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.h.N(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.a2(b,m)
o=C.c.k(o,b[m])
l=t[p]
if(l!=null&&l!==P.f)o+=" extends "+H.H(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.H(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.H(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.H(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.ds(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.m(u[g])
i=i+h+H.H(d[c],b)+(" "+H.c(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
bW:function(a,b,c){var u,t,s,r,q,p
H.bx(c,"$ip",[P.q],"$ap")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.H(p,c)}return"<"+u.h(0)+">"},
a6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
by:function(a,b,c,d){var u,t
H.m(b)
H.c1(c)
H.m(d)
if(a==null)return!1
u=H.O(a)
t=J.v(a)
if(t[b]==null)return!1
return H.cs(H.a6(t[d],u),null,c,null)},
bx:function(a,b,c,d){H.m(b)
H.c1(c)
H.m(d)
if(a==null)return a
if(H.by(a,b,c,d))return a
throw H.e(H.A(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.a7(b.substring(2))+H.bW(c,0,null),v.mangledGlobalNames)))},
dn:function(a,b,c,d,e){H.m(c)
H.m(d)
H.m(e)
if(!H.w(a,null,b,null))H.dG("TypeError: "+H.c(c)+H.a5(a)+H.c(d)+H.a5(b)+H.c(e))},
dG:function(a){throw H.e(new H.ah(H.m(a)))},
cs:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.w(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.w(a[t],b,c[t],d))return!1
return!0},
dY:function(a,b,c){return a.apply(b,H.a6(J.v(b)["$a"+H.c(c)],H.O(b)))},
cB:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="f"||a.name==="j"||a===-1||a===-2||H.cB(u)}return!1},
bY:function(a,b){var u,t
if(a==null)return b==null||b.name==="f"||b.name==="j"||b===-1||b===-2||H.cB(b)
if(b==null||b===-1||b.name==="f"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.as(a,b)}u=J.v(a).constructor
t=H.O(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.w(u,null,b,null)},
t:function(a,b){if(a!=null&&!H.bY(a,b))throw H.e(H.A(a,H.a5(b)))
return a},
w:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="f"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="f"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.w(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="j")return!0
if('func' in c)return H.co(a,b,c,d)
if('func' in a)return c.name==="bM"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.w("type" in a?a.type:null,b,s,d)
else if(H.w(a,b,s,d))return!0
else{if(!('$i'+"C" in t.prototype))return!1
r=t.prototype["$a"+"C"]
q=H.a6(r,u?a.slice(1):null)
return H.w(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.cs(H.a6(m,u),b,p,d)},
co:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.w(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.w(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.w(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.w(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.dC(h,b,g,d)},
dC:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.w(c[r],d,a[r],b))return!1}return!0},
dA:function(a){var u,t,s,r,q,p
u=H.m($.cA.$1(a))
t=$.bA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.bF[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.m($.cr.$2(a,u))
if(u!=null){t=$.bA[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.bF[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.bG(s)
$.bA[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.bF[u]=s
return s}if(q==="-"){p=H.bG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.cC(a,s)
if(q==="*")throw H.e(P.cl(u))
if(v.leafTags[u]===true){p=H.bG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.cC(a,s)},
cC:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.c2(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bG:function(a){return J.c2(a,!1,null,!!a.$ibP)},
dB:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bG(u)
else return J.c2(u,c,null,null)},
dx:function(){if(!0===$.c0)return
$.c0=!0
H.dy()},
dy:function(){var u,t,s,r,q,p,o,n
$.bA=Object.create(null)
$.bF=Object.create(null)
H.dw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cD.$1(q)
if(p!=null){o=H.dB(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
dw:function(){var u,t,s,r,q,p,o
u=C.j()
u=H.M(C.k,H.M(C.l,H.M(C.f,H.M(C.f,H.M(C.m,H.M(C.n,H.M(C.o(C.e),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.cA=new H.bC(q)
$.cr=new H.bD(p)
$.cD=new H.bE(o)},
M:function(a,b){return a(b)||b},
aZ:function aZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aR:function aR(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a},
T:function T(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a},
aq:function aq(a){this.a=a
this.b=null},
Q:function Q(){},
aY:function aY(){},
aX:function aX(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a){this.a=a},
aU:function aU(a){this.a=a},
bC:function bC(a){this.a=a},
bD:function bD(a){this.a=a},
bE:function bE(a){this.a=a},
ds:function(a){return J.cX(a?Object.keys(a):[],null)}},J={
c2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c_:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.c0==null){H.dx()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.cl("Return interceptor for "+H.c(t(a,u))))}r=a.constructor
q=r==null?null:r[$.c5()]
if(q!=null)return q
q=H.dA(a)
if(q!=null)return q
if(typeof a=="function")return C.r
t=Object.getPrototypeOf(a)
if(t==null)return C.i
if(t===Object.prototype)return C.i
if(typeof r=="function"){Object.defineProperty(r,$.c5(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
cX:function(a,b){return J.ch(H.c4(a,[b]))},
ch:function(a){H.c1(a)
a.fixed$length=Array
return a},
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ab.prototype
return J.aL.prototype}if(typeof a=="string")return J.V.prototype
if(a==null)return J.aM.prototype
if(typeof a=="boolean")return J.aK.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.f)return a
return J.c_(a)},
cx:function(a){if(typeof a=="string")return J.V.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.f)return a
return J.c_(a)},
dt:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.f)return a
return J.c_(a)},
cR:function(a){return J.dt(a).gF(a)},
bI:function(a){return J.cx(a).gi(a)},
au:function(a){return J.v(a).h(a)},
k:function k(){},
aK:function aK(){},
aM:function aM(){},
ac:function ac(){},
aS:function aS(){},
ai:function ai(){},
J:function J(){},
G:function G(a){this.$ti=a},
bN:function bN(a){this.$ti=a},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(){},
ab:function ab(){},
aL:function aL(){},
V:function V(){}},P={
d1:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.dp()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bz(new P.b6(u),1)).observe(t,{childList:true})
return new P.b5(u,t,s)}else if(self.setImmediate!=null)return P.dq()
return P.dr()},
d2:function(a){self.scheduleImmediate(H.bz(new P.b7(H.d(a,{func:1,ret:-1})),0))},
d3:function(a){self.setImmediate(H.bz(new P.b8(H.d(a,{func:1,ret:-1})),0))},
d4:function(a){P.bS(C.p,H.d(a,{func:1,ret:-1}))},
bS:function(a,b){var u
H.d(b,{func:1,ret:-1})
u=C.b.t(a.a,1000)
return P.d7(u<0?0:u,b)},
d7:function(a,b){var u=new P.bp()
u.V(a,b)
return u},
de:function(a){return new P.aj(new P.ar(new P.r(0,$.i,[a]),[a]),!1,[a])},
da:function(a,b){H.d(a,{func:1,ret:-1,args:[P.x,,]})
H.h(b,"$iaj")
a.$2(0,null)
b.b=!0
return b.a.a},
cn:function(a,b){P.db(a,H.d(b,{func:1,ret:-1,args:[P.x,,]}))},
d9:function(a,b){H.h(b,"$ibK").l(0,a)},
d8:function(a,b){H.h(b,"$ibK").m(H.a8(a),H.a1(a))},
db:function(a,b){var u,t,s,r
H.d(b,{func:1,ret:-1,args:[P.x,,]})
u=new P.bs(b)
t=new P.bt(b)
s=J.v(a)
if(!!s.$ir)a.D(u,t,null)
else if(!!s.$iC)a.u(u,t,null)
else{r=new P.r(0,$.i,[null])
H.t(a,null)
r.a=4
r.c=a
r.D(u,null,null)}},
dm:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.i.P(new P.bw(u),P.j,P.x,null)},
ce:function(a,b){var u=new P.r(0,$.i,[b])
P.d0(a,new P.aH(null,u))
return u},
d6:function(a,b){var u,t,s
b.a=1
try{a.u(new P.bd(b),new P.be(b),null)}catch(s){u=H.a8(s)
t=H.a1(s)
P.c3(new P.bf(b,u,t))}},
cm:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$ir")
if(u>=4){t=b.C()
b.a=a.a
b.c=a.c
P.Z(b,t)}else{t=H.h(b.c,"$iB")
b.a=2
b.c=a
a.M(t)}},
Z:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$io")
t=t.b
p=q.a
o=q.b
t.toString
P.bX(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.Z(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.h(m,"$io")
t=t.b
p=m.a
o=m.b
t.toString
P.bX(null,null,t,p,o)
return}j=$.i
if(j!=l)$.i=l
else j=null
t=b.c
if(t===8)new P.bj(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.bi(s,b,m).$0()}else if((t&2)!==0)new P.bh(u,s,b).$0()
if(j!=null)$.i=j
t=s.b
if(!!J.v(t).$iC){if(t.a>=4){i=H.h(o.c,"$iB")
o.c=null
b=o.q(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.cm(t,o)
return}}h=b.b
i=H.h(h.c,"$iB")
h.c=null
b=h.q(i)
t=s.a
p=s.b
if(!t){H.t(p,H.u(h,0))
h.a=4
h.c=p}else{H.h(p,"$io")
h.a=8
h.c=p}u.a=h
t=h}},
dg:function(a,b){if(H.as(a,{func:1,args:[P.f,P.l]}))return b.P(a,null,P.f,P.l)
if(H.as(a,{func:1,args:[P.f]}))return H.d(a,{func:1,ret:null,args:[P.f]})
throw H.e(P.c8(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
df:function(){var u,t
for(;u=$.L,u!=null;){$.a0=null
t=u.b
$.L=t
if(t==null)$.a_=null
u.a.$0()}},
dk:function(){$.bV=!0
try{P.df()}finally{$.a0=null
$.bV=!1
if($.L!=null)$.c6().$1(P.cu())}},
cq:function(a){var u=new P.ak(H.d(a,{func:1,ret:-1}))
if($.L==null){$.a_=u
$.L=u
if(!$.bV)$.c6().$1(P.cu())}else{$.a_.b=u
$.a_=u}},
dj:function(a){var u,t,s
H.d(a,{func:1,ret:-1})
u=$.L
if(u==null){P.cq(a)
$.a0=$.a_
return}t=new P.ak(a)
s=$.a0
if(s==null){t.b=u
$.a0=t
$.L=t}else{t.b=s.b
s.b=t
$.a0=t
if(t.b==null)$.a_=t}},
c3:function(a){var u,t
u={func:1,ret:-1}
H.d(a,u)
t=$.i
if(C.a===t){P.bv(null,null,C.a,a)
return}t.toString
P.bv(null,null,t,H.d(t.E(a),u))},
dJ:function(a,b){return new P.bo(H.bx(a,"$icZ",[b],"$acZ"),[b])},
d0:function(a,b){var u,t
u={func:1,ret:-1}
H.d(b,u)
t=$.i
if(t===C.a){t.toString
return P.bS(a,b)}return P.bS(a,H.d(t.E(b),u))},
bX:function(a,b,c,d,e){var u={}
u.a=d
P.dj(new P.bu(u,e))},
cp:function(a,b,c,d,e){var u,t
H.d(d,{func:1,ret:e})
t=$.i
if(t===c)return d.$0()
$.i=c
u=t
try{t=d.$0()
return t}finally{$.i=u}},
di:function(a,b,c,d,e,f,g){var u,t
H.d(d,{func:1,ret:f,args:[g]})
H.t(e,g)
t=$.i
if(t===c)return d.$1(e)
$.i=c
u=t
try{t=d.$1(e)
return t}finally{$.i=u}},
dh:function(a,b,c,d,e,f,g,h,i){var u,t
H.d(d,{func:1,ret:g,args:[h,i]})
H.t(e,h)
H.t(f,i)
t=$.i
if(t===c)return d.$2(e,f)
$.i=c
u=t
try{t=d.$2(e,f)
return t}finally{$.i=u}},
bv:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.a!==c
if(u)d=!(!u||!1)?c.E(d):c.a_(d,-1)
P.cq(d)},
b6:function b6(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a},
b8:function b8(a){this.a=a},
bp:function bp(){},
bq:function bq(a,b){this.a=a
this.b=b},
aj:function aj(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a){this.a=a},
bt:function bt(a){this.a=a},
bw:function bw(a){this.a=a},
aH:function aH(a,b){this.a=a
this.b=b},
al:function al(){},
ar:function ar(a,b){this.a=a
this.$ti=b},
B:function B(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
r:function r(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
bc:function bc(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=a},
be:function be(a){this.a=a},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a){this.a=a
this.b=null},
bo:function bo(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
o:function o(a,b){this.a=a
this.b=b},
br:function br(){},
bu:function bu(a,b){this.a=a
this.b=b},
bl:function bl(){},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b){this.a=a
this.b=b},
cg:function(a,b,c){var u,t,s
if(P.dd(a))return b+"..."+c
u=new P.ag(b)
t=$.c7()
C.h.N(t,a)
try{s=u
s.a=P.d_(s.a,a,", ")}finally{if(0>=t.length)return H.a2(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dd:function(a){var u,t
for(u=0;t=$.c7(),u<t.length;++u)if(a===t[u])return!0
return!1},
aP:function aP(){},
K:function K(){},
an:function an(){},
cW:function(a){if(a instanceof H.Q)return a.h(0)
return"Instance of '"+H.X(a)+"'"},
d_:function(a,b,c){var u=J.cR(b)
if(!u.n())return a
if(c.length===0){do a+=H.c(u.gp())
while(u.n())}else{a+=H.c(u.gp())
for(;u.n();)a=a+c+H.c(u.gp())}return a},
cd:function(a,b){return new P.S(1e6*b+1000*a)},
bL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cW(a)},
c8:function(a,b,c){return new P.E(!0,a,b,c)},
bR:function(a,b){return new P.aT(null,null,!0,a,b,"Value not in range")},
cf:function(a,b,c,d,e){var u=e==null?J.bI(b):e
return new P.aI(u,!0,a,c,"Index out of range")},
bT:function(a){return new P.b2(a)},
cl:function(a){return new P.b0(a)},
cj:function(a){return new P.aW(a)},
cc:function(a){return new P.az(a)},
N:function N(){},
bB:function bB(){},
S:function S(a){this.a=a},
aD:function aD(){},
aE:function aE(){},
I:function I(){},
W:function W(){},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aT:function aT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aI:function aI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b2:function b2(a){this.a=a},
b0:function b0(a){this.a=a},
aW:function aW(a){this.a=a},
az:function az(a){this.a=a},
af:function af(){},
aB:function aB(a){this.a=a},
ba:function ba(a){this.a=a},
x:function x(){},
p:function p(){},
j:function j(){},
a4:function a4(){},
f:function f(){},
l:function l(){},
q:function q(){},
ag:function ag(a){this.a=a}},W={
d5:function(a){if(a===window)return a
else return new W.b9()},
b:function b(){},
av:function av(){},
aw:function aw(){},
F:function F(){},
R:function R(){},
aA:function aA(){},
aC:function aC(){},
bb:function bb(a,b){this.a=a
this.$ti=b},
a:function a(){},
aa:function aa(){},
aG:function aG(){},
aQ:function aQ(){},
n:function n(){},
ae:function ae(){},
aV:function aV(){},
Y:function Y(){},
U:function U(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b9:function b9(){},
am:function am(){},
ao:function ao(){},
ap:function ap(){}},F={
a3:function(){var u=0,t=P.de(null),s,r,q,p
var $async$a3=P.dm(function(a,b){if(a===1)return P.d8(b,t)
while(true)switch(u){case 0:if(window.location.hostname==="reactxx.github.io"){C.t.a6(window,"https://translate.google.cz/translate?hl=ar&sl=ar&tl=en&u=https%3A%2F%2Freactxx.github.io","trans")
u=1
break}u=3
return P.cn(P.ce(P.cd(200,0),null),$async$a3)
case 3:r=W.a,q=document,H.dn(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'."),q=new W.bb(q.querySelectorAll("p"),[r]),r=new H.ad(q,q.gi(q),0,[r])
case 4:if(!r.n()){u=5
break}q=r.d
u=q.style.textAlign!=="left"?6:7
break
case 6:p=!!q.scrollIntoViewIfNeeded
q.scrollIntoView(!0)
u=8
return P.cn(P.ce(P.cd(200,0),null),$async$a3)
case 8:case 7:u=4
break
case 5:case 1:return P.d9(s,t)}})
return P.da($async$a3,t)}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bO.prototype={}
J.k.prototype={
h:function(a){return"Instance of '"+H.X(a)+"'"}}
J.aK.prototype={
h:function(a){return String(a)},
$iN:1}
J.aM.prototype={
h:function(a){return"null"},
$ij:1}
J.ac.prototype={
h:function(a){return String(a)}}
J.aS.prototype={}
J.ai.prototype={}
J.J.prototype={
h:function(a){var u=a[$.cG()]
if(u==null)return this.U(a)
return"JavaScript function for "+H.c(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibM:1}
J.G.prototype={
N:function(a,b){H.t(b,H.u(a,0))
if(!!a.fixed$length)H.cE(P.bT("add"))
a.push(b)},
h:function(a){return P.cg(a,"[","]")},
gF:function(a){return new J.ax(a,a.length,0,[H.u(a,0)])},
gi:function(a){return a.length},
$iaJ:1,
$ip:1}
J.bN.prototype={}
J.ax.prototype={
gp:function(){return this.d},
n:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.dE(u))
s=this.c
if(s>=t){this.sK(null)
return!1}this.sK(u[s]);++this.c
return!0},
sK:function(a){this.d=H.t(a,H.u(this,0))}}
J.aN.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
t:function(a,b){return(a|0)===a?a/b|0:this.Z(a,b)},
Z:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.bT("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
Y:function(a,b){var u
if(a>0)u=this.X(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
X:function(a,b){return b>31?0:a>>>b},
$ia4:1}
J.ab.prototype={$ix:1}
J.aL.prototype={}
J.V.prototype={
W:function(a,b){if(b>=a.length)throw H.e(H.cv(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.e(P.c8(b,null,null))
return a+b},
S:function(a,b){var u=a.length
if(b>u)throw H.e(P.bR(b,null))
if(u>u)throw H.e(P.bR(u,null))
return a.substring(b,u)},
h:function(a){return a},
gi:function(a){return a.length},
$iq:1}
H.ad.prototype={
gp:function(){return this.d},
n:function(){var u,t,s,r
u=this.a
t=J.cx(u)
s=t.gi(u)
if(this.b!==s)throw H.e(P.cc(u))
r=this.c
if(r>=s){this.sI(null)
return!1}this.sI(t.O(u,r));++this.c
return!0},
sI:function(a){this.d=H.t(a,H.u(this,0))}}
H.aZ.prototype={
j:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.aR.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aO.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.c(this.a)+")"}}
H.b1.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.T.prototype={}
H.bH.prototype={
$1:function(a){if(!!J.v(a).$iI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.aq.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$il:1}
H.Q.prototype={
h:function(a){return"Closure '"+H.X(this).trim()+"'"},
$ibM:1,
gaa:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aY.prototype={}
H.aX.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.a7(u)+"'"}}
H.a9.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.X(u)+"'")}}
H.ah.prototype={
h:function(a){return this.a}}
H.aU.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.bC.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.bD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.bE.prototype={
$1:function(a){return this.a(H.m(a))},
$S:7}
P.b6.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:4}
P.b5.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.b7.prototype={
$0:function(){this.a.$0()},
$S:0}
P.b8.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bp.prototype={
V:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bz(new P.bq(this,b),0),a)
else throw H.e(P.bT("`setTimeout()` not found."))}}
P.bq.prototype={
$0:function(){this.b.$0()},
$S:1}
P.aj.prototype={
l:function(a,b){var u
H.at(b,{futureOr:1,type:H.u(this,0)})
if(this.b)this.a.l(0,b)
else if(H.by(b,"$iC",this.$ti,"$aC")){u=this.a
b.u(u.ga0(u),u.ga2(),-1)}else P.c3(new P.b4(this,b))},
m:function(a,b){if(this.b)this.a.m(a,b)
else P.c3(new P.b3(this,a,b))},
$ibK:1}
P.b4.prototype={
$0:function(){this.a.a.l(0,this.b)},
$S:0}
P.b3.prototype={
$0:function(){this.a.a.m(this.b,this.c)},
$S:0}
P.bs.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:9}
P.bt.prototype={
$2:function(a,b){this.a.$2(1,new H.T(a,H.h(b,"$il")))},
$S:10}
P.bw.prototype={
$2:function(a,b){this.a(H.D(a),b)},
$S:11}
P.aH.prototype={
$0:function(){this.b.v(null)},
$S:0}
P.al.prototype={
m:function(a,b){var u
H.h(b,"$il")
if(a==null)a=new P.W()
u=this.a
if(u.a!==0)throw H.e(P.cj("Future already completed"))
$.i.toString
u.w(a,b)},
a3:function(a){return this.m(a,null)},
$ibK:1}
P.ar.prototype={
l:function(a,b){var u
H.at(b,{futureOr:1,type:H.u(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.cj("Future already completed"))
u.v(b)},
a1:function(a){return this.l(a,null)}}
P.B.prototype={
a5:function(a){if(this.c!==6)return!0
return this.b.b.G(H.d(this.d,{func:1,ret:P.N,args:[P.f]}),a.a,P.N,P.f)},
a4:function(a){var u,t,s,r
u=this.e
t=P.f
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.as(u,{func:1,args:[P.f,P.l]}))return H.at(r.a7(u,a.a,a.b,null,t,P.l),s)
else return H.at(r.G(H.d(u,{func:1,args:[P.f]}),a.a,null,t),s)}}
P.r.prototype={
u:function(a,b,c){var u,t
u=H.u(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.i
if(t!==C.a){t.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.dg(b,t)}return this.D(a,b,c)},
a9:function(a,b){return this.u(a,null,b)},
D:function(a,b,c){var u,t,s
u=H.u(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.r(0,$.i,[c])
s=b==null?1:3
this.J(new P.B(t,s,a,b,[u,c]))
return t},
J:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$iB")
this.c=a}else{if(u===2){t=H.h(this.c,"$ir")
u=t.a
if(u<4){t.J(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.bv(null,null,u,H.d(new P.bc(this,a),{func:1,ret:-1}))}},
M:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$iB")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$ir")
t=p.a
if(t<4){p.M(a)
return}this.a=t
this.c=p.c}u.a=this.q(a)
t=this.b
t.toString
P.bv(null,null,t,H.d(new P.bg(u,this),{func:1,ret:-1}))}},
C:function(){var u=H.h(this.c,"$iB")
this.c=null
return this.q(u)},
q:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
v:function(a){var u,t,s
u=H.u(this,0)
H.at(a,{futureOr:1,type:u})
t=this.$ti
if(H.by(a,"$iC",t,"$aC"))if(H.by(a,"$ir",t,null))P.cm(a,this)
else P.d6(a,this)
else{s=this.C()
H.t(a,u)
this.a=4
this.c=a
P.Z(this,s)}},
w:function(a,b){var u
H.h(b,"$il")
u=this.C()
this.a=8
this.c=new P.o(a,b)
P.Z(this,u)},
$iC:1}
P.bc.prototype={
$0:function(){P.Z(this.a,this.b)},
$S:0}
P.bg.prototype={
$0:function(){P.Z(this.b,this.a.a)},
$S:0}
P.bd.prototype={
$1:function(a){var u=this.a
u.a=0
u.v(a)},
$S:4}
P.be.prototype={
$2:function(a,b){H.h(b,"$il")
this.a.w(a,b)},
$1:function(a){return this.$2(a,null)},
$S:14}
P.bf.prototype={
$0:function(){this.a.w(this.b,this.c)},
$S:0}
P.bj.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.R(H.d(r.d,{func:1}),null)}catch(q){t=H.a8(q)
s=H.a1(q)
if(this.d){r=H.h(this.a.a.c,"$io").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$io")
else p.b=new P.o(t,s)
p.a=!0
return}if(!!J.v(u).$iC){if(u instanceof P.r&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$io")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.a9(new P.bk(o),null)
r.a=!1}},
$S:1}
P.bk.prototype={
$1:function(a){return this.a},
$S:15}
P.bi.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.t(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.G(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a8(o)
t=H.a1(o)
s=this.a
s.b=new P.o(u,t)
s.a=!0}},
$S:1}
P.bh.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$io")
r=this.c
if(r.a5(u)&&r.e!=null){q=this.b
q.b=r.a4(u)
q.a=!1}}catch(p){t=H.a8(p)
s=H.a1(p)
r=H.h(this.a.a.c,"$io")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.o(t,s)
n.a=!0}},
$S:1}
P.ak.prototype={}
P.bo.prototype={}
P.o.prototype={
h:function(a){return H.c(this.a)},
$iI:1}
P.br.prototype={$idU:1}
P.bu.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.W()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.h(0)
throw s},
$S:0}
P.bl.prototype={
a8:function(a){var u,t,s
H.d(a,{func:1,ret:-1})
try{if(C.a===$.i){a.$0()
return}P.cp(null,null,this,a,-1)}catch(s){u=H.a8(s)
t=H.a1(s)
P.bX(null,null,this,u,H.h(t,"$il"))}},
a_:function(a,b){return new P.bn(this,H.d(a,{func:1,ret:b}),b)},
E:function(a){return new P.bm(this,H.d(a,{func:1,ret:-1}))},
R:function(a,b){H.d(a,{func:1,ret:b})
if($.i===C.a)return a.$0()
return P.cp(null,null,this,a,b)},
G:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.t(b,d)
if($.i===C.a)return a.$1(b)
return P.di(null,null,this,a,b,c,d)},
a7:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.t(b,e)
H.t(c,f)
if($.i===C.a)return a.$2(b,c)
return P.dh(null,null,this,a,b,c,d,e,f)},
P:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}}
P.bn.prototype={
$0:function(){return this.a.R(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.bm.prototype={
$0:function(){return this.a.a8(this.b)},
$S:1}
P.aP.prototype={$iaJ:1,$ip:1}
P.K.prototype={
gF:function(a){return new H.ad(a,this.gi(a),0,[H.cz(this,a,"K",0)])},
O:function(a,b){return this.H(a,b)},
h:function(a){return P.cg(a,"[","]")}}
P.an.prototype={}
P.N.prototype={}
P.bB.prototype={}
P.S.prototype={
h:function(a){var u,t,s,r,q
u=new P.aE()
t=this.a
if(t<0)return"-"+new P.S(0-t).h(0)
s=u.$1(C.b.t(t,6e7)%60)
r=u.$1(C.b.t(t,1e6)%60)
q=new P.aD().$1(t%1e6)
return""+C.b.t(t,36e8)+":"+H.c(s)+":"+H.c(r)+"."+H.c(q)}}
P.aD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:5}
P.aE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:5}
P.I.prototype={}
P.W.prototype={
h:function(a){return"Throw of null."}}
P.E.prototype={
gB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gA:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gB()+t+s
if(!this.a)return r
q=this.gA()
p=P.bL(this.b)
return r+q+": "+p}}
P.aT.prototype={
gB:function(){return"RangeError"},
gA:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.c(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.c(u)
else if(s>u)t=": Not in range "+H.c(u)+".."+H.c(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.c(u)}return t}}
P.aI.prototype={
gB:function(){return"RangeError"},
gA:function(){var u,t
u=H.D(this.b)
if(typeof u!=="number")return u.ab()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.c(t)},
gi:function(a){return this.f}}
P.b2.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b0.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aW.prototype={
h:function(a){return"Bad state: "+this.a}}
P.az.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bL(u)+"."}}
P.af.prototype={
h:function(a){return"Stack Overflow"},
$iI:1}
P.aB.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ba.prototype={
h:function(a){return"Exception: "+this.a}}
P.x.prototype={}
P.p.prototype={$iaJ:1}
P.j.prototype={
h:function(a){return"null"}}
P.a4.prototype={}
P.f.prototype={constructor:P.f,$if:1,
h:function(a){return"Instance of '"+H.X(this)+"'"},
toString:function(){return this.h(this)}}
P.l.prototype={}
P.q.prototype={}
P.ag.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.b.prototype={}
W.av.prototype={
h:function(a){return String(a)}}
W.aw.prototype={
h:function(a){return String(a)}}
W.F.prototype={
gi:function(a){return a.length}}
W.R.prototype={
gi:function(a){return a.length}}
W.aA.prototype={}
W.aC.prototype={
h:function(a){return String(a)}}
W.bb.prototype={
gi:function(a){return this.a.length},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.a2(u,b)
return H.t(u[b],H.u(this,0))}}
W.a.prototype={
h:function(a){return a.localName},
$ia:1}
W.aa.prototype={}
W.aG.prototype={
gi:function(a){return a.length}}
W.aQ.prototype={
h:function(a){return String(a)}}
W.n.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.T(a):u},
$in:1}
W.ae.prototype={
gi:function(a){return a.length},
H:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.cf(b,a,null,null,null))
return a[b]},
O:function(a,b){if(b<0||b>=a.length)return H.a2(a,b)
return a[b]},
$ibP:1,
$abP:function(){return[W.n]},
$aK:function(){return[W.n]},
$iaJ:1,
$aaJ:function(){return[W.n]},
$ip:1,
$ap:function(){return[W.n]},
$aU:function(){return[W.n]}}
W.aV.prototype={
gi:function(a){return a.length}}
W.Y.prototype={
a6:function(a,b,c){var u=W.d5(a.open(b,c))
return u}}
W.U.prototype={
gF:function(a){return new W.aF(a,a.length,-1,[H.cz(this,a,"U",0)])}}
W.aF.prototype={
n:function(){var u,t
u=this.c+1
t=this.b
if(u<t){t=this.a
if(u<0||u>=t.length)return H.a2(t,u)
this.sL(t[u])
this.c=u
return!0}this.sL(null)
this.c=t
return!1},
gp:function(){return this.d},
sL:function(a){this.d=H.t(a,H.u(this,0))}}
W.b9.prototype={}
W.am.prototype={}
W.ao.prototype={}
W.ap.prototype={};(function aliases(){var u=J.k.prototype
u.T=u.h
u=J.ac.prototype
u.U=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff
u(P,"dp","d2",2)
u(P,"dq","d3",2)
u(P,"dr","d4",2)
t(P,"cu","dk",1)
s(P.al.prototype,"ga2",0,1,null,["$2","$1"],["m","a3"],12,0)
s(P.ar.prototype,"ga0",1,0,null,["$1","$0"],["l","a1"],13,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.f,null)
s(P.f,[H.bO,J.k,J.ax,H.ad,H.aZ,P.I,H.T,H.Q,H.aq,P.bp,P.aj,P.al,P.B,P.r,P.ak,P.bo,P.o,P.br,P.an,P.K,P.N,P.a4,P.S,P.af,P.ba,P.p,P.j,P.l,P.q,P.ag,W.aA,W.U,W.aF,W.b9])
s(J.k,[J.aK,J.aM,J.ac,J.G,J.aN,J.V,W.aa,W.am,W.aC,W.aQ,W.ao])
s(J.ac,[J.aS,J.ai,J.J])
t(J.bN,J.G)
s(J.aN,[J.ab,J.aL])
s(P.I,[H.aR,H.aO,H.b1,H.ah,H.aU,P.W,P.E,P.b2,P.b0,P.aW,P.az,P.aB])
s(H.Q,[H.bH,H.aY,H.bC,H.bD,H.bE,P.b6,P.b5,P.b7,P.b8,P.bq,P.b4,P.b3,P.bs,P.bt,P.bw,P.aH,P.bc,P.bg,P.bd,P.be,P.bf,P.bj,P.bk,P.bi,P.bh,P.bu,P.bn,P.bm,P.aD,P.aE])
s(H.aY,[H.aX,H.a9])
t(P.ar,P.al)
t(P.bl,P.br)
t(P.aP,P.an)
s(P.a4,[P.bB,P.x])
s(P.E,[P.aT,P.aI])
s(W.aa,[W.n,W.Y])
s(W.n,[W.a,W.F])
t(W.b,W.a)
s(W.b,[W.av,W.aw,W.aG,W.aV])
t(W.R,W.am)
t(W.bb,P.aP)
t(W.ap,W.ao)
t(W.ae,W.ap)
u(P.an,P.K)
u(W.am,W.aA)
u(W.ao,P.K)
u(W.ap,W.U)})();(function constants(){C.q=J.k.prototype
C.h=J.G.prototype
C.b=J.ab.prototype
C.c=J.V.prototype
C.r=J.J.prototype
C.i=J.aS.prototype
C.d=J.ai.prototype
C.t=W.Y.prototype
C.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.o=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.l=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.f=function(hooks) { return hooks; }

C.a=new P.bl()
C.p=new P.S(0)})();(function staticFields(){$.y=0
$.P=null
$.c9=null
$.bU=!1
$.cA=null
$.cr=null
$.cD=null
$.bA=null
$.bF=null
$.c0=null
$.L=null
$.a_=null
$.a0=null
$.bV=!1
$.i=C.a})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dH","cG",function(){return H.cy("_$dart_dartClosure")})
u($,"dI","c5",function(){return H.cy("_$dart_js")})
u($,"dK","cH",function(){return H.z(H.b_({
toString:function(){return"$receiver$"}}))})
u($,"dL","cI",function(){return H.z(H.b_({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"dM","cJ",function(){return H.z(H.b_(null))})
u($,"dN","cK",function(){return H.z(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dQ","cN",function(){return H.z(H.b_(void 0))})
u($,"dR","cO",function(){return H.z(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dP","cM",function(){return H.z(H.ck(null))})
u($,"dO","cL",function(){return H.z(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dT","cQ",function(){return H.z(H.ck(void 0))})
u($,"dS","cP",function(){return H.z(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dV","c6",function(){return P.d1()})
u($,"dW","c7",function(){return[]})})()
var v={mangledGlobalNames:{x:"int",bB:"double",a4:"num",q:"String",N:"bool",j:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.j},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.j,args:[,]},{func:1,ret:P.q,args:[P.x]},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,ret:P.j,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[,]},{func:1,ret:P.j,args:[,P.l]},{func:1,ret:P.j,args:[P.x,,]},{func:1,ret:-1,args:[P.f],opt:[P.l]},{func:1,ret:-1,opt:[P.f]},{func:1,ret:P.j,args:[,],opt:[P.l]},{func:1,ret:[P.r,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.k,DOMError:J.k,ErrorEvent:J.k,Event:J.k,InputEvent:J.k,MediaError:J.k,Navigator:J.k,NavigatorConcurrentHardware:J.k,NavigatorUserMediaError:J.k,OverconstrainedError:J.k,PositionError:J.k,SensorErrorEvent:J.k,SpeechRecognitionError:J.k,SQLError:J.k,HTMLAudioElement:W.b,HTMLBRElement:W.b,HTMLBaseElement:W.b,HTMLBodyElement:W.b,HTMLButtonElement:W.b,HTMLCanvasElement:W.b,HTMLContentElement:W.b,HTMLDListElement:W.b,HTMLDataElement:W.b,HTMLDataListElement:W.b,HTMLDetailsElement:W.b,HTMLDialogElement:W.b,HTMLDivElement:W.b,HTMLEmbedElement:W.b,HTMLFieldSetElement:W.b,HTMLHRElement:W.b,HTMLHeadElement:W.b,HTMLHeadingElement:W.b,HTMLHtmlElement:W.b,HTMLIFrameElement:W.b,HTMLImageElement:W.b,HTMLInputElement:W.b,HTMLLIElement:W.b,HTMLLabelElement:W.b,HTMLLegendElement:W.b,HTMLLinkElement:W.b,HTMLMapElement:W.b,HTMLMediaElement:W.b,HTMLMenuElement:W.b,HTMLMetaElement:W.b,HTMLMeterElement:W.b,HTMLModElement:W.b,HTMLOListElement:W.b,HTMLObjectElement:W.b,HTMLOptGroupElement:W.b,HTMLOptionElement:W.b,HTMLOutputElement:W.b,HTMLParagraphElement:W.b,HTMLParamElement:W.b,HTMLPictureElement:W.b,HTMLPreElement:W.b,HTMLProgressElement:W.b,HTMLQuoteElement:W.b,HTMLScriptElement:W.b,HTMLShadowElement:W.b,HTMLSlotElement:W.b,HTMLSourceElement:W.b,HTMLSpanElement:W.b,HTMLStyleElement:W.b,HTMLTableCaptionElement:W.b,HTMLTableCellElement:W.b,HTMLTableDataCellElement:W.b,HTMLTableHeaderCellElement:W.b,HTMLTableColElement:W.b,HTMLTableElement:W.b,HTMLTableRowElement:W.b,HTMLTableSectionElement:W.b,HTMLTemplateElement:W.b,HTMLTextAreaElement:W.b,HTMLTimeElement:W.b,HTMLTitleElement:W.b,HTMLTrackElement:W.b,HTMLUListElement:W.b,HTMLUnknownElement:W.b,HTMLVideoElement:W.b,HTMLDirectoryElement:W.b,HTMLFontElement:W.b,HTMLFrameElement:W.b,HTMLFrameSetElement:W.b,HTMLMarqueeElement:W.b,HTMLElement:W.b,HTMLAnchorElement:W.av,HTMLAreaElement:W.aw,CDATASection:W.F,CharacterData:W.F,Comment:W.F,ProcessingInstruction:W.F,Text:W.F,CSSStyleDeclaration:W.R,MSStyleCSSProperties:W.R,CSS2Properties:W.R,DOMException:W.aC,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,EventTarget:W.aa,HTMLFormElement:W.aG,Location:W.aQ,Document:W.n,DocumentFragment:W.n,HTMLDocument:W.n,ShadowRoot:W.n,XMLDocument:W.n,Attr:W.n,DocumentType:W.n,Node:W.n,NodeList:W.ae,RadioNodeList:W.ae,HTMLSelectElement:W.aV,Window:W.Y,DOMWindow:W.Y})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,HTMLFormElement:true,Location:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.a3,[])
else F.a3([])})})()
//# sourceMappingURL=main.dart.js.map

var x={};x.bitwise=F;x.binaryTransfer=V;x.unique=de;x.random=ge;function F(e){var t=0;if(e.length==0)return t;for(var r=0;r<e.length;r++){var i=e.charCodeAt(r);t=(t<<5)-t+i,t=t&t}return t}function V(e,t){t=t||62;var r=[],i,n="",s=e<0?"-":"";function o(l){var c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return c[l]}for(e=Math.abs(e);e>=t;)i=e%t,e=Math.floor(e/t),r.push(o(i));e>0&&r.push(o(e));for(var a=r.length-1;a>=0;a--)n+=r[a];return s+n}function de(e){var t=V(F(e),61);return t.replace("-","Z")}function ge(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",r="",i=e||8,n=0;n<i;n++){var s=Math.floor(Math.random()*t.length);r+=t.substring(s,s+1)}return r}var be=x,N={},Ee=e=>{if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype};Object.defineProperty(N,"__esModule",{value:!0});var z=N.valueToEstree=void 0;const xe=Ee;function d(e,t={}){if(e===void 0)return{type:"Identifier",name:"undefined"};if(e==null)return{type:"Literal",value:null,raw:"null"};if(e===Number.POSITIVE_INFINITY)return{type:"Identifier",name:"Infinity"};if(Number.isNaN(e))return{type:"Identifier",name:"NaN"};if(typeof e=="boolean")return{type:"Literal",value:e,raw:String(e)};if(typeof e=="bigint")return e>=0?{type:"Literal",value:e,raw:`${e}n`,bigint:String(e)}:{type:"UnaryExpression",operator:"-",prefix:!0,argument:d(-e,t)};if(typeof e=="number")return e>=0?{type:"Literal",value:e,raw:String(e)}:{type:"UnaryExpression",operator:"-",prefix:!0,argument:d(-e,t)};if(typeof e=="string")return{type:"Literal",value:e,raw:JSON.stringify(e)};if(typeof e=="symbol"){if(e.description&&e===Symbol.for(e.description))return{type:"CallExpression",optional:!1,callee:{type:"MemberExpression",computed:!1,optional:!1,object:{type:"Identifier",name:"Symbol"},property:{type:"Identifier",name:"for"}},arguments:[d(e.description,t)]};throw new TypeError(`Only global symbols are supported, got: ${String(e)}`)}if(Array.isArray(e)){const r=[];for(let i=0;i<e.length;i+=1)r.push(i in e?d(e[i],t):null);return{type:"ArrayExpression",elements:r}}if(e instanceof RegExp)return{type:"Literal",value:e,raw:String(e),regex:{pattern:e.source,flags:e.flags}};if(e instanceof Date)return{type:"NewExpression",callee:{type:"Identifier",name:"Date"},arguments:[d(e.getTime(),t)]};if(e instanceof Map)return{type:"NewExpression",callee:{type:"Identifier",name:"Map"},arguments:[d([...e.entries()],t)]};if(typeof Buffer!="undefined"&&Buffer.isBuffer(e))return{type:"CallExpression",optional:!1,callee:{type:"MemberExpression",computed:!1,optional:!1,object:{type:"Identifier",name:"Buffer"},property:{type:"Identifier",name:"from"}},arguments:[d([...e.values()])]};if(e instanceof BigInt64Array||e instanceof BigUint64Array||e instanceof Float32Array||e instanceof Float64Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Set||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)return{type:"NewExpression",callee:{type:"Identifier",name:e.constructor.name},arguments:[d([...e],t)]};if(e instanceof URL||e instanceof URLSearchParams)return{type:"NewExpression",callee:{type:"Identifier",name:e.constructor.name},arguments:[d(String(e),t)]};if(t.instanceAsObject||xe(e))return{type:"ObjectExpression",properties:Object.entries(e).map(([r,i])=>({type:"Property",method:!1,shorthand:!1,computed:!1,kind:"init",key:d(r,t),value:d(i,t)}))};throw new TypeError(`Unsupported value: ${String(e)}`)}z=N.valueToEstree=d;const{stringify:_e}=JSON;if(!String.prototype.repeat)throw new Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");if(!String.prototype.endsWith)throw new Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");const $={"||":3,"&&":4,"|":5,"??":5,"^":6,"&":7,"==":8,"!=":8,"===":8,"!==":8,"<":9,">":9,"<=":9,">=":9,in:9,instanceof:9,"<<":10,">>":10,">>>":10,"+":11,"-":11,"*":12,"%":12,"/":12,"**":13},g=17,W={ArrayExpression:20,TaggedTemplateExpression:20,ThisExpression:20,Identifier:20,PrivateIdentifier:20,Literal:18,TemplateLiteral:20,Super:20,SequenceExpression:20,MemberExpression:19,ChainExpression:19,CallExpression:19,NewExpression:19,ArrowFunctionExpression:g,ClassExpression:g,FunctionExpression:g,ObjectExpression:g,UpdateExpression:16,UnaryExpression:15,AwaitExpression:15,BinaryExpression:14,LogicalExpression:13,ConditionalExpression:4,AssignmentExpression:3,YieldExpression:2,RestElement:1};function E(e,t){const{generator:r}=e;if(e.write("("),t!=null&&t.length>0){r[t[0].type](t[0],e);const{length:i}=t;for(let n=1;n<i;n++){const s=t[n];e.write(", "),r[s.type](s,e)}}e.write(")")}function G(e,t,r,i){const n=e.expressionsPrecedence[t.type];if(n===g)return!0;const s=e.expressionsPrecedence[r.type];return n!==s?!i&&n===15&&s===14&&r.operator==="**"||n<s:n!==13&&n!==14?!1:t.operator==="**"&&r.operator==="**"?!i:i?$[t.operator]<=$[r.operator]:$[t.operator]<$[r.operator]}function P(e,t,r,i){const{generator:n}=e;G(e,t,r,i)?(e.write("("),n[t.type](t,e),e.write(")")):n[t.type](t,e)}function Se(e,t,r,i){const n=t.split(`
`),s=n.length-1;if(e.write(n[0].trim()),s>0){e.write(i);for(let o=1;o<s;o++)e.write(r+n[o].trim()+i);e.write(r+n[s].trim())}}function y(e,t,r,i){const{length:n}=t;for(let s=0;s<n;s++){const o=t[s];e.write(r),o.type[0]==="L"?e.write("// "+o.value.trim()+`
`,o):(e.write("/*"),Se(e,o.value,r,i),e.write("*/"+i))}}function $e(e){let t=e;for(;t!=null;){const{type:r}=t;if(r[0]==="C"&&r[1]==="a")return!0;if(r[0]==="M"&&r[1]==="e"&&r[2]==="m")t=t.object;else return!1}}function I(e,t){const{generator:r}=e,{declarations:i}=t;e.write(t.kind+" ");const{length:n}=i;if(n>0){r.VariableDeclarator(i[0],e);for(let s=1;s<n;s++)e.write(", "),r.VariableDeclarator(i[s],e)}}let H,J,Y,X,Z,K;const L={Program(e,t){const r=t.indent.repeat(t.indentLevel),{lineEnd:i,writeComments:n}=t;n&&e.comments!=null&&y(t,e.comments,r,i);const s=e.body,{length:o}=s;for(let a=0;a<o;a++){const l=s[a];n&&l.comments!=null&&y(t,l.comments,r,i),t.write(r),this[l.type](l,t),t.write(i)}n&&e.trailingComments!=null&&y(t,e.trailingComments,r,i)},BlockStatement:K=function(e,t){const r=t.indent.repeat(t.indentLevel++),{lineEnd:i,writeComments:n}=t,s=r+t.indent;t.write("{");const o=e.body;if(o!=null&&o.length>0){t.write(i),n&&e.comments!=null&&y(t,e.comments,s,i);const{length:a}=o;for(let l=0;l<a;l++){const c=o[l];n&&c.comments!=null&&y(t,c.comments,s,i),t.write(s),this[c.type](c,t),t.write(i)}t.write(r)}else n&&e.comments!=null&&(t.write(i),y(t,e.comments,s,i),t.write(r));n&&e.trailingComments!=null&&y(t,e.trailingComments,s,i),t.write("}"),t.indentLevel--},ClassBody:K,StaticBlock(e,t){t.write("static "),this.BlockStatement(e,t)},EmptyStatement(e,t){t.write(";")},ExpressionStatement(e,t){const r=t.expressionsPrecedence[e.expression.type];r===g||r===3&&e.expression.left.type[0]==="O"?(t.write("("),this[e.expression.type](e.expression,t),t.write(")")):this[e.expression.type](e.expression,t),t.write(";")},IfStatement(e,t){t.write("if ("),this[e.test.type](e.test,t),t.write(") "),this[e.consequent.type](e.consequent,t),e.alternate!=null&&(t.write(" else "),this[e.alternate.type](e.alternate,t))},LabeledStatement(e,t){this[e.label.type](e.label,t),t.write(": "),this[e.body.type](e.body,t)},BreakStatement(e,t){t.write("break"),e.label!=null&&(t.write(" "),this[e.label.type](e.label,t)),t.write(";")},ContinueStatement(e,t){t.write("continue"),e.label!=null&&(t.write(" "),this[e.label.type](e.label,t)),t.write(";")},WithStatement(e,t){t.write("with ("),this[e.object.type](e.object,t),t.write(") "),this[e.body.type](e.body,t)},SwitchStatement(e,t){const r=t.indent.repeat(t.indentLevel++),{lineEnd:i,writeComments:n}=t;t.indentLevel++;const s=r+t.indent,o=s+t.indent;t.write("switch ("),this[e.discriminant.type](e.discriminant,t),t.write(") {"+i);const{cases:a}=e,{length:l}=a;for(let c=0;c<l;c++){const p=a[c];n&&p.comments!=null&&y(t,p.comments,s,i),p.test?(t.write(s+"case "),this[p.test.type](p.test,t),t.write(":"+i)):t.write(s+"default:"+i);const{consequent:u}=p,{length:h}=u;for(let w=0;w<h;w++){const f=u[w];n&&f.comments!=null&&y(t,f.comments,o,i),t.write(o),this[f.type](f,t),t.write(i)}}t.indentLevel-=2,t.write(r+"}")},ReturnStatement(e,t){t.write("return"),e.argument&&(t.write(" "),this[e.argument.type](e.argument,t)),t.write(";")},ThrowStatement(e,t){t.write("throw "),this[e.argument.type](e.argument,t),t.write(";")},TryStatement(e,t){if(t.write("try "),this[e.block.type](e.block,t),e.handler){const{handler:r}=e;r.param==null?t.write(" catch "):(t.write(" catch ("),this[r.param.type](r.param,t),t.write(") ")),this[r.body.type](r.body,t)}e.finalizer&&(t.write(" finally "),this[e.finalizer.type](e.finalizer,t))},WhileStatement(e,t){t.write("while ("),this[e.test.type](e.test,t),t.write(") "),this[e.body.type](e.body,t)},DoWhileStatement(e,t){t.write("do "),this[e.body.type](e.body,t),t.write(" while ("),this[e.test.type](e.test,t),t.write(");")},ForStatement(e,t){if(t.write("for ("),e.init!=null){const{init:r}=e;r.type[0]==="V"?I(t,r):this[r.type](r,t)}t.write("; "),e.test&&this[e.test.type](e.test,t),t.write("; "),e.update&&this[e.update.type](e.update,t),t.write(") "),this[e.body.type](e.body,t)},ForInStatement:H=function(e,t){t.write(`for ${e.await?"await ":""}(`);const{left:r}=e;r.type[0]==="V"?I(t,r):this[r.type](r,t),t.write(e.type[3]==="I"?" in ":" of "),this[e.right.type](e.right,t),t.write(") "),this[e.body.type](e.body,t)},ForOfStatement:H,DebuggerStatement(e,t){t.write("debugger;",e)},FunctionDeclaration:J=function(e,t){t.write((e.async?"async ":"")+(e.generator?"function* ":"function ")+(e.id?e.id.name:""),e),E(t,e.params),t.write(" "),this[e.body.type](e.body,t)},FunctionExpression:J,VariableDeclaration(e,t){I(t,e),t.write(";")},VariableDeclarator(e,t){this[e.id.type](e.id,t),e.init!=null&&(t.write(" = "),this[e.init.type](e.init,t))},ClassDeclaration(e,t){if(t.write("class "+(e.id?`${e.id.name} `:""),e),e.superClass){t.write("extends ");const{superClass:r}=e,{type:i}=r,n=t.expressionsPrecedence[i];(i[0]!=="C"||i[1]!=="l"||i[5]!=="E")&&(n===g||n<t.expressionsPrecedence.ClassExpression)?(t.write("("),this[e.superClass.type](r,t),t.write(")")):this[r.type](r,t),t.write(" ")}this.ClassBody(e.body,t)},ImportDeclaration(e,t){t.write("import ");const{specifiers:r}=e,{length:i}=r;let n=0;if(i>0){for(;n<i;){n>0&&t.write(", ");const s=r[n],o=s.type[6];if(o==="D")t.write(s.local.name,s),n++;else if(o==="N")t.write("* as "+s.local.name,s),n++;else break}if(n<i){for(t.write("{");;){const s=r[n],{name:o}=s.imported;if(t.write(o,s),o!==s.local.name&&t.write(" as "+s.local.name),++n<i)t.write(", ");else break}t.write("}")}t.write(" from ")}this.Literal(e.source,t),t.write(";")},ImportExpression(e,t){t.write("import("),this[e.source.type](e.source,t),t.write(")")},ExportDefaultDeclaration(e,t){t.write("export default "),this[e.declaration.type](e.declaration,t),t.expressionsPrecedence[e.declaration.type]!=null&&e.declaration.type[0]!=="F"&&t.write(";")},ExportNamedDeclaration(e,t){if(t.write("export "),e.declaration)this[e.declaration.type](e.declaration,t);else{t.write("{");const{specifiers:r}=e,{length:i}=r;if(i>0)for(let n=0;;){const s=r[n],{name:o}=s.local;if(t.write(o,s),o!==s.exported.name&&t.write(" as "+s.exported.name),++n<i)t.write(", ");else break}t.write("}"),e.source&&(t.write(" from "),this.Literal(e.source,t)),t.write(";")}},ExportAllDeclaration(e,t){e.exported!=null?t.write("export * as "+e.exported.name+" from "):t.write("export * from "),this.Literal(e.source,t),t.write(";")},MethodDefinition(e,t){e.static&&t.write("static ");const r=e.kind[0];(r==="g"||r==="s")&&t.write(e.kind+" "),e.value.async&&t.write("async "),e.value.generator&&t.write("*"),e.computed?(t.write("["),this[e.key.type](e.key,t),t.write("]")):this[e.key.type](e.key,t),E(t,e.value.params),t.write(" "),this[e.value.body.type](e.value.body,t)},ClassExpression(e,t){this.ClassDeclaration(e,t)},ArrowFunctionExpression(e,t){t.write(e.async?"async ":"",e);const{params:r}=e;r!=null&&(r.length===1&&r[0].type[0]==="I"?t.write(r[0].name,r[0]):E(t,e.params)),t.write(" => "),e.body.type[0]==="O"?(t.write("("),this.ObjectExpression(e.body,t),t.write(")")):this[e.body.type](e.body,t)},ThisExpression(e,t){t.write("this",e)},Super(e,t){t.write("super",e)},RestElement:Y=function(e,t){t.write("..."),this[e.argument.type](e.argument,t)},SpreadElement:Y,YieldExpression(e,t){t.write(e.delegate?"yield*":"yield"),e.argument&&(t.write(" "),this[e.argument.type](e.argument,t))},AwaitExpression(e,t){t.write("await ",e),P(t,e.argument,e)},TemplateLiteral(e,t){const{quasis:r,expressions:i}=e;t.write("`");const{length:n}=i;for(let o=0;o<n;o++){const a=i[o],l=r[o];t.write(l.value.raw,l),t.write("${"),this[a.type](a,t),t.write("}")}const s=r[r.length-1];t.write(s.value.raw,s),t.write("`")},TemplateElement(e,t){t.write(e.value.raw,e)},TaggedTemplateExpression(e,t){P(t,e.tag,e),this[e.quasi.type](e.quasi,t)},ArrayExpression:Z=function(e,t){if(t.write("["),e.elements.length>0){const{elements:r}=e,{length:i}=r;for(let n=0;;){const s=r[n];if(s!=null&&this[s.type](s,t),++n<i)t.write(", ");else{s==null&&t.write(", ");break}}}t.write("]")},ArrayPattern:Z,ObjectExpression(e,t){const r=t.indent.repeat(t.indentLevel++),{lineEnd:i,writeComments:n}=t,s=r+t.indent;if(t.write("{"),e.properties.length>0){t.write(i),n&&e.comments!=null&&y(t,e.comments,s,i);const o=","+i,{properties:a}=e,{length:l}=a;for(let c=0;;){const p=a[c];if(n&&p.comments!=null&&y(t,p.comments,s,i),t.write(s),this[p.type](p,t),++c<l)t.write(o);else break}t.write(i),n&&e.trailingComments!=null&&y(t,e.trailingComments,s,i),t.write(r+"}")}else n?e.comments!=null?(t.write(i),y(t,e.comments,s,i),e.trailingComments!=null&&y(t,e.trailingComments,s,i),t.write(r+"}")):e.trailingComments!=null?(t.write(i),y(t,e.trailingComments,s,i),t.write(r+"}")):t.write("}"):t.write("}");t.indentLevel--},Property(e,t){e.method||e.kind[0]!=="i"?this.MethodDefinition(e,t):(e.shorthand||(e.computed?(t.write("["),this[e.key.type](e.key,t),t.write("]")):this[e.key.type](e.key,t),t.write(": ")),this[e.value.type](e.value,t))},PropertyDefinition(e,t){e.static&&t.write("static "),this[e.key.type](e.key,t),t.write(" = "),this[e.value.type](e.value,t)},ObjectPattern(e,t){if(t.write("{"),e.properties.length>0){const{properties:r}=e,{length:i}=r;for(let n=0;this[r[n].type](r[n],t),++n<i;)t.write(", ")}t.write("}")},SequenceExpression(e,t){E(t,e.expressions)},UnaryExpression(e,t){if(e.prefix){const{operator:r,argument:i,argument:{type:n}}=e;t.write(r);const s=G(t,i,e);!s&&(r.length>1||n[0]==="U"&&(n[1]==="n"||n[1]==="p")&&i.prefix&&i.operator[0]===r&&(r==="+"||r==="-"))&&t.write(" "),s?(t.write(r.length>1?" (":"("),this[n](i,t),t.write(")")):this[n](i,t)}else this[e.argument.type](e.argument,t),t.write(e.operator)},UpdateExpression(e,t){e.prefix?(t.write(e.operator),this[e.argument.type](e.argument,t)):(this[e.argument.type](e.argument,t),t.write(e.operator))},AssignmentExpression(e,t){this[e.left.type](e.left,t),t.write(" "+e.operator+" "),this[e.right.type](e.right,t)},AssignmentPattern(e,t){this[e.left.type](e.left,t),t.write(" = "),this[e.right.type](e.right,t)},BinaryExpression:X=function(e,t){const r=e.operator==="in";r&&t.write("("),P(t,e.left,e,!1),t.write(" "+e.operator+" "),P(t,e.right,e,!0),r&&t.write(")")},LogicalExpression:X,ConditionalExpression(e,t){const{test:r}=e,i=t.expressionsPrecedence[r.type];i===g||i<=t.expressionsPrecedence.ConditionalExpression?(t.write("("),this[r.type](r,t),t.write(")")):this[r.type](r,t),t.write(" ? "),this[e.consequent.type](e.consequent,t),t.write(" : "),this[e.alternate.type](e.alternate,t)},NewExpression(e,t){t.write("new ");const r=t.expressionsPrecedence[e.callee.type];r===g||r<t.expressionsPrecedence.CallExpression||$e(e.callee)?(t.write("("),this[e.callee.type](e.callee,t),t.write(")")):this[e.callee.type](e.callee,t),E(t,e.arguments)},CallExpression(e,t){const r=t.expressionsPrecedence[e.callee.type];r===g||r<t.expressionsPrecedence.CallExpression?(t.write("("),this[e.callee.type](e.callee,t),t.write(")")):this[e.callee.type](e.callee,t),e.optional&&t.write("?."),E(t,e.arguments)},ChainExpression(e,t){this[e.expression.type](e.expression,t)},MemberExpression(e,t){const r=t.expressionsPrecedence[e.object.type];r===g||r<t.expressionsPrecedence.MemberExpression?(t.write("("),this[e.object.type](e.object,t),t.write(")")):this[e.object.type](e.object,t),e.computed?(e.optional&&t.write("?."),t.write("["),this[e.property.type](e.property,t),t.write("]")):(e.optional?t.write("?."):t.write("."),this[e.property.type](e.property,t))},MetaProperty(e,t){t.write(e.meta.name+"."+e.property.name,e)},Identifier(e,t){t.write(e.name,e)},PrivateIdentifier(e,t){t.write(`#${e.name}`,e)},Literal(e,t){e.raw!=null?t.write(e.raw,e):e.regex!=null?this.RegExpLiteral(e,t):e.bigint!=null?t.write(e.bigint+"n",e):t.write(_e(e.value),e)},RegExpLiteral(e,t){const{regex:r}=e;t.write(`/${r.pattern}/${r.flags}`,e)}},Pe={},Ae=L;class Ce{constructor(t){const r=t??Pe;this.output="",r.output!=null?(this.output=r.output,this.write=this.writeToStream):this.output="",this.generator=r.generator!=null?r.generator:L,this.expressionsPrecedence=r.expressionsPrecedence!=null?r.expressionsPrecedence:W,this.indent=r.indent!=null?r.indent:"  ",this.lineEnd=r.lineEnd!=null?r.lineEnd:`
`,this.indentLevel=r.startingIndentLevel!=null?r.startingIndentLevel:0,this.writeComments=r.comments?r.comments:!1,r.sourceMap!=null&&(this.write=r.output==null?this.writeAndMap:this.writeToStreamAndMap,this.sourceMap=r.sourceMap,this.line=1,this.column=0,this.lineEndSize=this.lineEnd.split(`
`).length-1,this.mapping={original:null,generated:this,name:void 0,source:r.sourceMap.file||r.sourceMap._file})}write(t){this.output+=t}writeToStream(t){this.output.write(t)}writeAndMap(t,r){this.output+=t,this.map(t,r)}writeToStreamAndMap(t,r){this.output.write(t),this.map(t,r)}map(t,r){if(r!=null){const{type:s}=r;if(s[0]==="L"&&s[2]==="n"){this.column=0,this.line++;return}if(r.loc!=null){const{mapping:o}=this;o.original=r.loc.start,o.name=r.name,this.sourceMap.addMapping(o)}if(s[0]==="T"&&s[8]==="E"||s[0]==="L"&&s[1]==="i"&&typeof r.value=="string"){const{length:o}=t;let{column:a,line:l}=this;for(let c=0;c<o;c++)t[c]===`
`?(a=0,l++):a++;this.column=a,this.line=l;return}}const{length:i}=t,{lineEnd:n}=this;i>0&&(this.lineEndSize>0&&(n.length===1?t[i-1]===n:t.endsWith(n))?(this.line+=this.lineEndSize,this.column=0):this.column+=i)}toString(){return this.output}}function je(e,t){const r=new Ce(t);return r.generator[e.type](e,r),r.output}var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",NEEDS_PARENTHESES:g,EXPRESSIONS_PRECEDENCE:W,GENERATOR:L,baseGenerator:Ae,generate:je});function Q(e){const t={};return r(e),Object.keys(t).join(" ");function r(i){i&&typeof i.forEach=="function"?i.forEach(r):i===Object(i)?Object.keys(i).forEach(n=>{i[n]&&r(n)}):(i=i==null?"":String(i).trim(),i&&i.split(/\s+/).forEach(n=>{t[n]=!0}))}}var Oe=Object.defineProperty,ke=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Te=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))Le.call(t,r)&&te(e,r,t[r]);return e},Me=(e,t)=>ke(e,Ne(t));const{generate:Ue,GENERATOR:re}=ve,De=Me(Te({},re),{Literal(e,t){e.raw!=null?t.write(e.raw.replace("<\/script>","<\\/script>")):re.Literal(e,t)}});function Re(e){return Ue(z(e),{generator:De})}function qe(e){let t={hydration:null,props:{}};for(const[r,i]of Object.entries(e))if(r.startsWith("client:"))switch(t.hydration||(t.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),r){case"client:component-path":{t.hydration.componentUrl=i;break}case"client:component-export":{t.hydration.componentExport.value=i;break}default:{t.hydration.directive=r.split(":")[1],t.hydration.value=i;break}}else r==="class:list"?t.props[r.slice(0,-5)]=Q(i):t.props[r]=i;return t}async function Be(e,t){const{renderer:r,astroId:i,props:n}=e,{hydrate:s,componentUrl:o,componentExport:a}=t;if(!a)throw new Error(`Unable to resolve a componentExport for "${t.displayName}"! Please open an issue.`);let l="";return r.hydrationPolyfills&&(l+=`await Promise.all([${r.hydrationPolyfills.map(p=>`
  import("${p}")`).join(", ")}]);
`),l+=r.source?`const [{ ${a.value}: Component }, { default: hydrate }] = await Promise.all([import("${o}"), import("${r.source}")]);
  return (el, children) => hydrate(el)(Component, ${Re(n)}, children);
`:`await import("${o}");
  return () => {};
`,{props:{type:"module","data-astro-component-hydration":!0},children:`import setup from 'astro/client/${s}.js';
setup("${i}", {${t.hydrateArgs?`value: ${JSON.stringify(t.hydrateArgs)}`:""}}, async () => {
  ${l}
});
`}}class Fe{constructor(t,r,i,n){this.modules=r,this.hydratedComponents=i,this.hoisted=n,this.fileURL=new URL(t),this.metadataCache=new Map}resolvePath(t){return t.startsWith(".")?new URL(t,this.fileURL).pathname:t}getPath(t){const r=this.getComponentMetadata(t);return(r==null?void 0:r.componentUrl)||null}getExport(t){const r=this.getComponentMetadata(t);return(r==null?void 0:r.componentExport)||null}getAllHydratedComponentPaths(){const t=new Set;for(const r of this.hydratedComponents){const i=this.getPath(r);i&&t.add(i)}for(const{module:r}of this.modules)if(typeof r.$$metadata!="undefined")for(const i of r.$$metadata.getAllHydratedComponentPaths())t.add(i);return t}getComponentMetadata(t){if(this.metadataCache.has(t))return this.metadataCache.get(t);const r=this.findComponentMetadata(t);return this.metadataCache.set(t,r),r}findComponentMetadata(t){const r=typeof t=="string";for(const{module:i,specifier:n}of this.modules){const s=this.resolvePath(n);for(const[o,a]of Object.entries(i))if(r){if(o==="tagName"&&t===a)return{componentExport:o,componentUrl:s}}else if(t===a)return{componentExport:o,componentUrl:s}}return null}}function $t(e,t){return new Fe(e,t.modules,t.hydratedComponents,t.hoisted)}var Ve=Object.defineProperty,ze=Object.defineProperties,We=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Je=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&ne(e,r,t[r]);if(ie)for(var r of ie(t))He.call(t,r)&&ne(e,r,t[r]);return e},Ye=(e,t)=>ze(e,We(t));async function _(e){if(e=await e,Array.isArray(e))return(await Promise.all(e.map(t=>_(t)))).join("");if(typeof e=="function")return _(e());if(typeof e=="string")return e;if(!(!e&&e!==0))return e instanceof se||Object.prototype.toString.call(e)==="[object AstroComponent]"?await M(e):e}class se{constructor(t,r){this.htmlParts=t,this.expressions=r}get[Symbol.toStringTag](){return"AstroComponent"}*[Symbol.iterator](){const{htmlParts:t,expressions:r}=this;for(let i=0;i<t.length;i++){const n=t[i],s=r[i];yield _(n),yield _(s)}}}async function Xe(e,...t){return new se(e,t)}function Pt(e){return e.isAstroComponentFactory=!0,e}async function oe(e,t,r){return t?_(t):r}const Ze=Symbol("Astro.Fragment");function Ke(e){switch(e==null?void 0:e.split(".").pop()){case"svelte":return["@astrojs/renderer-svelte"];case"vue":return["@astrojs/renderer-vue"];case"jsx":case"tsx":return["@astrojs/renderer-react","@astrojs/renderer-preact"];default:return["@astrojs/renderer-react","@astrojs/renderer-preact","@astrojs/renderer-vue","@astrojs/renderer-svelte"]}}function T(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}async function At(e,t,r,i,n={}){var s,o;r=await r;const a=await oe(e,n==null?void 0:n.default);if(r===Ze)return a;if(r&&r.isAstroComponentFactory)return await rt(e,r,i,n);if(r===null&&!i["client:only"])throw new Error(`Unable to render ${t} because it is ${r}!
Did you forget to import the component or is it possible there is a typo?`);const{renderers:l}=e._metadata,c={displayName:t},{hydration:p,props:u}=qe(i);let h="";p&&(c.hydrate=p.directive,c.hydrateArgs=p.value,c.componentExport=p.componentExport,c.componentUrl=p.componentUrl);const w=Ke(c.componentUrl);if(Array.isArray(l)&&l.length===0&&typeof r!="string"){const m=`Unable to render ${c.displayName}! 

There are no \`renderers\` set in your \`astro.config.mjs\` file.
Did you mean to enable ${T(w.map(b=>"`"+b+"`"))}?`;throw new Error(m)}let f;if(c.hydrate!=="only"){for(const m of l)if(await m.ssr.check(r,u,a)){f=m;break}}else{if(c.hydrateArgs){const m=c.hydrateArgs;f=l.filter(({name:b})=>b===`@astrojs/renderer-${m}`||b===m)[0]}if(!f&&l.length===1&&(f=l[0]),!f){const m=(s=c.componentUrl)==null?void 0:s.split(".").pop();f=l.filter(({name:b})=>b===`@astrojs/renderer-${m}`||b===m)[0]}}if(f)c.hydrate==="only"?h=await oe(e,n==null?void 0:n.fallback):{html:h}=await f.ssr.renderToStaticMarkup(r,u,a);else{if(c.hydrate==="only")throw new Error(`Unable to render ${c.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${c.displayName} client:only="${w.map(m=>m.replace("@astrojs/renderer-","")).join("|")}" />
`);if(typeof r!="string"){const m=l.filter(k=>w.includes(k.name)),b=l.length>1;throw m.length===0?new Error(`Unable to render ${c.displayName}!

There ${b?"are":"is"} ${l.length} renderer${b?"s":""} configured in your \`astro.config.mjs\` file,
but ${b?"none were":"it was not"} able to server-side render ${c.displayName}.

Did you mean to enable ${T(w.map(k=>"`"+k+"`"))}?`):new Error(`Unable to render ${c.displayName}!

This component likely uses ${T(w)},
but Astro encountered an error during server-side rendering.

Please ensure that ${c.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(!h&&typeof r=="string"&&(h=await M(await Xe`<${r}${tt(u)}>${a}</${r}>`)),(o=f==null?void 0:f.polyfills)==null?void 0:o.length)for(const m of f.polyfills)e.scripts.add({props:{type:"module"},children:`import "${m}";`});if(!p)return h.replace(/\<\/?astro-fragment\>/g,"");const B=be.unique(`<!--${c.componentExport.value}:${c.componentUrl}-->
${h}`);return e.scripts.add(await Be({renderer:f,astroId:B,props:u},c)),`<astro-root uid="${B}">${h??""}</astro-root>`}function Qe(e){return r=>{let i=[...Object.entries(r)];if(i.length===0)throw new Error(`[${e.pathname}] Astro.fetchContent() no matches found.`);return i.map(([n,s])=>{if(!s.frontmatter)return;const o=new URL(n,e).pathname;return Ye(Je({},s.frontmatter),{Content:s.default,content:s.metadata,file:new URL(n,e),url:o.includes("/pages/")?o.replace(/^.*\/pages\//,"/").replace(/(\/index)?\.md$/,""):void 0})}).filter(Boolean)}}function Ct(e,t){const r=new URL(e),i=Qe(r);return{site:new URL(t),fetchContent:i,resolve(...n){return n.reduce((s,o)=>new URL(o,s),r).pathname}}}const le=e=>String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;");function et(e,t){return e==null||e===!1?"":t==="class:list"?` ${t.slice(0,-5)}="${le(Q(e))}"`:e===!0&&t.startsWith("data-")?` ${t}`:` ${t}="${le(e)}"`}function tt(e){let t="";for(const[r,i]of Object.entries(e))t+=et(i,r);return t}async function rt(e,t,r,i){const n=await t(e,r,i);return await M(n)}async function M(e){let t="";for await(const r of e)(r||r===0)&&(t+=r);return t}function ce(){}function ae(e){return e()}function pe(){return Object.create(null)}function A(e){e.forEach(ae)}function it(e){return typeof e=="function"}function jt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function vt(e,t){return C||(C=document.createElement("a")),C.href=t,e===C.href}function nt(e){return Object.keys(e).length===0}let j=!1;function st(){j=!0}function ot(){j=!1}function lt(e,t,r,i){for(;e<t;){const n=e+(t-e>>1);r(n)<=i?e=n+1:t=n}return e}function ct(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let c=0;c<t.length;c++){const p=t[c];p.claim_order!==void 0&&l.push(p)}t=l}const r=new Int32Array(t.length+1),i=new Int32Array(t.length);r[0]=-1;let n=0;for(let l=0;l<t.length;l++){const c=t[l].claim_order,p=(n>0&&t[r[n]].claim_order<=c?n+1:lt(1,n,h=>t[r[h]].claim_order,c))-1;i[l]=r[p]+1;const u=p+1;r[u]=l,n=Math.max(u,n)}const s=[],o=[];let a=t.length-1;for(let l=r[n]+1;l!=0;l=i[l-1]){for(s.push(t[l-1]);a>=l;a--)o.push(t[a]);a--}for(;a>=0;a--)o.push(t[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const p=c<s.length?s[c]:null;e.insertBefore(o[l],p)}}function at(e,t){if(j){for(ct(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Ot(e,t,r){j&&!r?at(e,t):(t.parentNode!==e||t.nextSibling!=r)&&e.insertBefore(t,r||null)}function pt(e){e.parentNode.removeChild(e)}function ft(e){return document.createElement(e)}function fe(e){return document.createTextNode(e)}function kt(){return fe(" ")}function Nt(e,t,r,i){return e.addEventListener(t,r,i),()=>e.removeEventListener(t,r,i)}function It(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function ut(e){return Array.from(e.childNodes)}function mt(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function ue(e,t,r,i,n=!1){mt(e);const s=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const a=e[o];if(t(a)){const l=r(a);return l===void 0?e.splice(o,1):e[o]=l,n||(e.claim_info.last_index=o),a}}for(let o=e.claim_info.last_index-1;o>=0;o--){const a=e[o];if(t(a)){const l=r(a);return l===void 0?e.splice(o,1):e[o]=l,n?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,a}}return i()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function ht(e,t,r,i){return ue(e,n=>n.nodeName===t,n=>{const s=[];for(let o=0;o<n.attributes.length;o++){const a=n.attributes[o];r[a.name]||s.push(a.name)}s.forEach(o=>n.removeAttribute(o))},()=>i(t))}function Lt(e,t,r){return ht(e,t,r,ft)}function yt(e,t){return ue(e,r=>r.nodeType===3,r=>{const i=""+t;if(r.data.startsWith(i)){if(r.data.length!==i.length)return r.splitText(i.length)}else r.data=i},()=>fe(t),!0)}function Tt(e){return yt(e," ")}function Mt(e,t,r,i){e.style.setProperty(t,r,i?"important":"")}let me;function v(e){me=e}const S=[],he=[],O=[],ye=[],wt=Promise.resolve();let U=!1;function dt(){U||(U=!0,wt.then(we))}function D(e){O.push(e)}let R=!1;const q=new Set;function we(){if(!R){R=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];v(t),gt(t.$$)}for(v(null),S.length=0;he.length;)he.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];q.has(t)||(q.add(t),t())}O.length=0}while(S.length);for(;ye.length;)ye.pop()();U=!1,R=!1,q.clear()}}function gt(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const bt=new Set;function Et(e,t){e&&e.i&&(bt.delete(e),e.i(t))}function xt(e,t,r,i){const{fragment:n,on_mount:s,on_destroy:o,after_update:a}=e.$$;n&&n.m(t,r),i||D(()=>{const l=s.map(ae).filter(it);o?o.push(...l):A(l),e.$$.on_mount=[]}),a.forEach(D)}function _t(e,t){const r=e.$$;r.fragment!==null&&(A(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function St(e,t){e.$$.dirty[0]===-1&&(S.push(e),dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ut(e,t,r,i,n,s,o,a=[-1]){const l=me;v(e);const c=e.$$={fragment:null,ctx:null,props:s,update:ce,not_equal:n,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:pe(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let p=!1;if(c.ctx=r?r(e,t.props||{},(u,h,...w)=>{const f=w.length?w[0]:h;return c.ctx&&n(c.ctx[u],c.ctx[u]=f)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](f),p&&St(e,u)),h}):[],c.update(),p=!0,A(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){st();const u=ut(t.target);c.fragment&&c.fragment.l(u),u.forEach(pt)}else c.fragment&&c.fragment.c();t.intro&&Et(e.$$.fragment),xt(e,t.target,t.anchor,t.customElement),ot(),we()}v(l)}class Dt{$destroy(){_t(this,1),this.$destroy=ce}$on(t,r){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Rt(e,{target:t=document.body}={}){const r=document.createElement("textarea"),i=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const n=document.getSelection();let s=!1;n.rangeCount>0&&(s=n.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}return r.remove(),s&&(n.removeAllRanges(),n.addRange(s)),i&&i.focus(),o}export{Dt as S,Ct as a,Pt as b,$t as c,oe as d,At as e,et as f,ft as g,kt as h,Ut as i,Lt as j,ut as k,Tt as l,pt as m,It as n,Mt as o,vt as p,Ot as q,Xe as r,jt as s,at as t,Nt as u,ce as v,Rt as w};
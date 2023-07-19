// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__5201_SHARP_){
return p1__5201_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_5202 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_5202.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_5203 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_5203.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_5204 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_5204.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_5205 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_5205.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_5206 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_5206.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_5207 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_5207.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_5208 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_5208.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__5209 = cljs.core.seq.call(null,reporters);
var chunk__5210 = null;
var count__5211 = (0);
var i__5212 = (0);
while(true){
if((i__5212 < count__5211)){
var reporter = cljs.core._nth.call(null,chunk__5210,i__5212);
speclj.reporting.report_pass.call(null,reporter,result);


var G__5213 = seq__5209;
var G__5214 = chunk__5210;
var G__5215 = count__5211;
var G__5216 = (i__5212 + (1));
seq__5209 = G__5213;
chunk__5210 = G__5214;
count__5211 = G__5215;
i__5212 = G__5216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5209);
if(temp__5804__auto__){
var seq__5209__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5209__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5209__$1);
var G__5217 = cljs.core.chunk_rest.call(null,seq__5209__$1);
var G__5218 = c__4556__auto__;
var G__5219 = cljs.core.count.call(null,c__4556__auto__);
var G__5220 = (0);
seq__5209 = G__5217;
chunk__5210 = G__5218;
count__5211 = G__5219;
i__5212 = G__5220;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5209__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__5221 = cljs.core.next.call(null,seq__5209__$1);
var G__5222 = null;
var G__5223 = (0);
var G__5224 = (0);
seq__5209 = G__5221;
chunk__5210 = G__5222;
count__5211 = G__5223;
i__5212 = G__5224;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__5225 = cljs.core.seq.call(null,reporters);
var chunk__5226 = null;
var count__5227 = (0);
var i__5228 = (0);
while(true){
if((i__5228 < count__5227)){
var reporter = cljs.core._nth.call(null,chunk__5226,i__5228);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5229 = seq__5225;
var G__5230 = chunk__5226;
var G__5231 = count__5227;
var G__5232 = (i__5228 + (1));
seq__5225 = G__5229;
chunk__5226 = G__5230;
count__5227 = G__5231;
i__5228 = G__5232;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5225);
if(temp__5804__auto__){
var seq__5225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5225__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5225__$1);
var G__5233 = cljs.core.chunk_rest.call(null,seq__5225__$1);
var G__5234 = c__4556__auto__;
var G__5235 = cljs.core.count.call(null,c__4556__auto__);
var G__5236 = (0);
seq__5225 = G__5233;
chunk__5226 = G__5234;
count__5227 = G__5235;
i__5228 = G__5236;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5225__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5237 = cljs.core.next.call(null,seq__5225__$1);
var G__5238 = null;
var G__5239 = (0);
var G__5240 = (0);
seq__5225 = G__5237;
chunk__5226 = G__5238;
count__5227 = G__5239;
i__5228 = G__5240;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__5241 = cljs.core.seq.call(null,reporters);
var chunk__5242 = null;
var count__5243 = (0);
var i__5244 = (0);
while(true){
if((i__5244 < count__5243)){
var reporter = cljs.core._nth.call(null,chunk__5242,i__5244);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5245 = seq__5241;
var G__5246 = chunk__5242;
var G__5247 = count__5243;
var G__5248 = (i__5244 + (1));
seq__5241 = G__5245;
chunk__5242 = G__5246;
count__5243 = G__5247;
i__5244 = G__5248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5241);
if(temp__5804__auto__){
var seq__5241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5241__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5241__$1);
var G__5249 = cljs.core.chunk_rest.call(null,seq__5241__$1);
var G__5250 = c__4556__auto__;
var G__5251 = cljs.core.count.call(null,c__4556__auto__);
var G__5252 = (0);
seq__5241 = G__5249;
chunk__5242 = G__5250;
count__5243 = G__5251;
i__5244 = G__5252;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5241__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5253 = cljs.core.next.call(null,seq__5241__$1);
var G__5254 = null;
var G__5255 = (0);
var G__5256 = (0);
seq__5241 = G__5253;
chunk__5242 = G__5254;
count__5243 = G__5255;
i__5244 = G__5256;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__5257 = cljs.core.seq.call(null,reporters);
var chunk__5258 = null;
var count__5259 = (0);
var i__5260 = (0);
while(true){
if((i__5260 < count__5259)){
var reporter = cljs.core._nth.call(null,chunk__5258,i__5260);
speclj.reporting.report_error.call(null,reporter,result);


var G__5261 = seq__5257;
var G__5262 = chunk__5258;
var G__5263 = count__5259;
var G__5264 = (i__5260 + (1));
seq__5257 = G__5261;
chunk__5258 = G__5262;
count__5259 = G__5263;
i__5260 = G__5264;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5257);
if(temp__5804__auto__){
var seq__5257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5257__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5257__$1);
var G__5265 = cljs.core.chunk_rest.call(null,seq__5257__$1);
var G__5266 = c__4556__auto__;
var G__5267 = cljs.core.count.call(null,c__4556__auto__);
var G__5268 = (0);
seq__5257 = G__5265;
chunk__5258 = G__5266;
count__5259 = G__5267;
i__5260 = G__5268;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5257__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__5269 = cljs.core.next.call(null,seq__5257__$1);
var G__5270 = null;
var G__5271 = (0);
var G__5272 = (0);
seq__5257 = G__5269;
chunk__5258 = G__5270;
count__5259 = G__5271;
i__5260 = G__5272;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_5273 = speclj.platform.stack_trace.call(null,exception);
var elides_5274 = (0);
while(true){
if(cljs.core.seq.call(null,levels_5273)){
var level_5275 = cljs.core.first.call(null,levels_5273);
if(speclj.platform.elide_level_QMARK_.call(null,level_5275)){
var G__5276 = cljs.core.rest.call(null,levels_5273);
var G__5277 = (elides_5274 + (1));
levels_5273 = G__5276;
elides_5274 = G__5277;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_5274);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_5275));

var G__5278 = cljs.core.rest.call(null,levels_5273);
var G__5279 = (0);
levels_5273 = G__5278;
elides_5274 = G__5279;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_5274);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5280_5284 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5281_5285 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5282_5286 = true;
var _STAR_print_fn_STAR__temp_val__5283_5287 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5282_5286);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5283_5287);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5281_5285);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5280_5284);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5291 = arguments.length;
var i__4737__auto___5292 = (0);
while(true){
if((i__4737__auto___5292 < len__4736__auto___5291)){
args__4742__auto__.push((arguments[i__4737__auto___5292]));

var G__5293 = (i__4737__auto___5292 + (1));
i__4737__auto___5292 = G__5293;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__5288_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5288_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq5289){
var G__5290 = cljs.core.first.call(null,seq5289);
var seq5289__$1 = cljs.core.next.call(null,seq5289);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5290,seq5289__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5296 = arguments.length;
var i__4737__auto___5297 = (0);
while(true){
if((i__4737__auto___5297 < len__4736__auto___5296)){
args__4742__auto__.push((arguments[i__4737__auto___5297]));

var G__5298 = (i__4737__auto___5297 + (1));
i__4737__auto___5297 = G__5298;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq5294){
var G__5295 = cljs.core.first.call(null,seq5294);
var seq5294__$1 = cljs.core.next.call(null,seq5294);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5295,seq5294__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__5299 = cljs.core.seq.call(null,reporters);
var chunk__5300 = null;
var count__5301 = (0);
var i__5302 = (0);
while(true){
if((i__5302 < count__5301)){
var reporter = cljs.core._nth.call(null,chunk__5300,i__5302);
speclj.reporting.report_description.call(null,reporter,description);


var G__5303 = seq__5299;
var G__5304 = chunk__5300;
var G__5305 = count__5301;
var G__5306 = (i__5302 + (1));
seq__5299 = G__5303;
chunk__5300 = G__5304;
count__5301 = G__5305;
i__5302 = G__5306;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5299);
if(temp__5804__auto__){
var seq__5299__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5299__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5299__$1);
var G__5307 = cljs.core.chunk_rest.call(null,seq__5299__$1);
var G__5308 = c__4556__auto__;
var G__5309 = cljs.core.count.call(null,c__4556__auto__);
var G__5310 = (0);
seq__5299 = G__5307;
chunk__5300 = G__5308;
count__5301 = G__5309;
i__5302 = G__5310;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5299__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__5311 = cljs.core.next.call(null,seq__5299__$1);
var G__5312 = null;
var G__5313 = (0);
var G__5314 = (0);
seq__5299 = G__5311;
chunk__5300 = G__5312;
count__5301 = G__5313;
i__5302 = G__5314;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__5315 = cljs.core.seq.call(null,reporters);
var chunk__5316 = null;
var count__5317 = (0);
var i__5318 = (0);
while(true){
if((i__5318 < count__5317)){
var reporter = cljs.core._nth.call(null,chunk__5316,i__5318);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5319 = seq__5315;
var G__5320 = chunk__5316;
var G__5321 = count__5317;
var G__5322 = (i__5318 + (1));
seq__5315 = G__5319;
chunk__5316 = G__5320;
count__5317 = G__5321;
i__5318 = G__5322;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5315);
if(temp__5804__auto__){
var seq__5315__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5315__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5315__$1);
var G__5323 = cljs.core.chunk_rest.call(null,seq__5315__$1);
var G__5324 = c__4556__auto__;
var G__5325 = cljs.core.count.call(null,c__4556__auto__);
var G__5326 = (0);
seq__5315 = G__5323;
chunk__5316 = G__5324;
count__5317 = G__5325;
i__5318 = G__5326;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5315__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5327 = cljs.core.next.call(null,seq__5315__$1);
var G__5328 = null;
var G__5329 = (0);
var G__5330 = (0);
seq__5315 = G__5327;
chunk__5316 = G__5328;
count__5317 = G__5329;
i__5318 = G__5330;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__5331 = cljs.core.seq.call(null,reporters);
var chunk__5332 = null;
var count__5333 = (0);
var i__5334 = (0);
while(true){
if((i__5334 < count__5333)){
var reporter = cljs.core._nth.call(null,chunk__5332,i__5334);
speclj.reporting.report_message.call(null,reporter,message);


var G__5335 = seq__5331;
var G__5336 = chunk__5332;
var G__5337 = count__5333;
var G__5338 = (i__5334 + (1));
seq__5331 = G__5335;
chunk__5332 = G__5336;
count__5333 = G__5337;
i__5334 = G__5338;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5331);
if(temp__5804__auto__){
var seq__5331__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5331__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5331__$1);
var G__5339 = cljs.core.chunk_rest.call(null,seq__5331__$1);
var G__5340 = c__4556__auto__;
var G__5341 = cljs.core.count.call(null,c__4556__auto__);
var G__5342 = (0);
seq__5331 = G__5339;
chunk__5332 = G__5340;
count__5333 = G__5341;
i__5334 = G__5342;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5331__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__5343 = cljs.core.next.call(null,seq__5331__$1);
var G__5344 = null;
var G__5345 = (0);
var G__5346 = (0);
seq__5331 = G__5343;
chunk__5332 = G__5344;
count__5333 = G__5345;
i__5334 = G__5346;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__5347 = cljs.core.seq.call(null,reporters);
var chunk__5348 = null;
var count__5349 = (0);
var i__5350 = (0);
while(true){
if((i__5350 < count__5349)){
var reporter = cljs.core._nth.call(null,chunk__5348,i__5350);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5351 = seq__5347;
var G__5352 = chunk__5348;
var G__5353 = count__5349;
var G__5354 = (i__5350 + (1));
seq__5347 = G__5351;
chunk__5348 = G__5352;
count__5349 = G__5353;
i__5350 = G__5354;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5347);
if(temp__5804__auto__){
var seq__5347__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5347__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5347__$1);
var G__5355 = cljs.core.chunk_rest.call(null,seq__5347__$1);
var G__5356 = c__4556__auto__;
var G__5357 = cljs.core.count.call(null,c__4556__auto__);
var G__5358 = (0);
seq__5347 = G__5355;
chunk__5348 = G__5356;
count__5349 = G__5357;
i__5350 = G__5358;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5347__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5359 = cljs.core.next.call(null,seq__5347__$1);
var G__5360 = null;
var G__5361 = (0);
var G__5362 = (0);
seq__5347 = G__5359;
chunk__5348 = G__5360;
count__5349 = G__5361;
i__5350 = G__5362;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map

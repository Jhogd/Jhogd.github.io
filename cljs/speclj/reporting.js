// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__5378_SHARP_){
return p1__5378_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_5379 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_5379.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_5380 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_5380.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_5381 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_5381.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_5382 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_5382.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_5383 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_5383.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_5384 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_5384.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_5385 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_5385.call(null,this$,exception);
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
var seq__5386 = cljs.core.seq.call(null,reporters);
var chunk__5387 = null;
var count__5388 = (0);
var i__5389 = (0);
while(true){
if((i__5389 < count__5388)){
var reporter = cljs.core._nth.call(null,chunk__5387,i__5389);
speclj.reporting.report_pass.call(null,reporter,result);


var G__5390 = seq__5386;
var G__5391 = chunk__5387;
var G__5392 = count__5388;
var G__5393 = (i__5389 + (1));
seq__5386 = G__5390;
chunk__5387 = G__5391;
count__5388 = G__5392;
i__5389 = G__5393;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5386);
if(temp__5818__auto__){
var seq__5386__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5386__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5386__$1);
var G__5394 = cljs.core.chunk_rest.call(null,seq__5386__$1);
var G__5395 = c__4556__auto__;
var G__5396 = cljs.core.count.call(null,c__4556__auto__);
var G__5397 = (0);
seq__5386 = G__5394;
chunk__5387 = G__5395;
count__5388 = G__5396;
i__5389 = G__5397;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5386__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__5398 = cljs.core.next.call(null,seq__5386__$1);
var G__5399 = null;
var G__5400 = (0);
var G__5401 = (0);
seq__5386 = G__5398;
chunk__5387 = G__5399;
count__5388 = G__5400;
i__5389 = G__5401;
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
var seq__5402 = cljs.core.seq.call(null,reporters);
var chunk__5403 = null;
var count__5404 = (0);
var i__5405 = (0);
while(true){
if((i__5405 < count__5404)){
var reporter = cljs.core._nth.call(null,chunk__5403,i__5405);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5406 = seq__5402;
var G__5407 = chunk__5403;
var G__5408 = count__5404;
var G__5409 = (i__5405 + (1));
seq__5402 = G__5406;
chunk__5403 = G__5407;
count__5404 = G__5408;
i__5405 = G__5409;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5402);
if(temp__5818__auto__){
var seq__5402__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5402__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5402__$1);
var G__5410 = cljs.core.chunk_rest.call(null,seq__5402__$1);
var G__5411 = c__4556__auto__;
var G__5412 = cljs.core.count.call(null,c__4556__auto__);
var G__5413 = (0);
seq__5402 = G__5410;
chunk__5403 = G__5411;
count__5404 = G__5412;
i__5405 = G__5413;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5402__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5414 = cljs.core.next.call(null,seq__5402__$1);
var G__5415 = null;
var G__5416 = (0);
var G__5417 = (0);
seq__5402 = G__5414;
chunk__5403 = G__5415;
count__5404 = G__5416;
i__5405 = G__5417;
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
var seq__5418 = cljs.core.seq.call(null,reporters);
var chunk__5419 = null;
var count__5420 = (0);
var i__5421 = (0);
while(true){
if((i__5421 < count__5420)){
var reporter = cljs.core._nth.call(null,chunk__5419,i__5421);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5422 = seq__5418;
var G__5423 = chunk__5419;
var G__5424 = count__5420;
var G__5425 = (i__5421 + (1));
seq__5418 = G__5422;
chunk__5419 = G__5423;
count__5420 = G__5424;
i__5421 = G__5425;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5418);
if(temp__5818__auto__){
var seq__5418__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5418__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5418__$1);
var G__5426 = cljs.core.chunk_rest.call(null,seq__5418__$1);
var G__5427 = c__4556__auto__;
var G__5428 = cljs.core.count.call(null,c__4556__auto__);
var G__5429 = (0);
seq__5418 = G__5426;
chunk__5419 = G__5427;
count__5420 = G__5428;
i__5421 = G__5429;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5418__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5430 = cljs.core.next.call(null,seq__5418__$1);
var G__5431 = null;
var G__5432 = (0);
var G__5433 = (0);
seq__5418 = G__5430;
chunk__5419 = G__5431;
count__5420 = G__5432;
i__5421 = G__5433;
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
var seq__5434 = cljs.core.seq.call(null,reporters);
var chunk__5435 = null;
var count__5436 = (0);
var i__5437 = (0);
while(true){
if((i__5437 < count__5436)){
var reporter = cljs.core._nth.call(null,chunk__5435,i__5437);
speclj.reporting.report_error.call(null,reporter,result);


var G__5438 = seq__5434;
var G__5439 = chunk__5435;
var G__5440 = count__5436;
var G__5441 = (i__5437 + (1));
seq__5434 = G__5438;
chunk__5435 = G__5439;
count__5436 = G__5440;
i__5437 = G__5441;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5434);
if(temp__5818__auto__){
var seq__5434__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5434__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5434__$1);
var G__5442 = cljs.core.chunk_rest.call(null,seq__5434__$1);
var G__5443 = c__4556__auto__;
var G__5444 = cljs.core.count.call(null,c__4556__auto__);
var G__5445 = (0);
seq__5434 = G__5442;
chunk__5435 = G__5443;
count__5436 = G__5444;
i__5437 = G__5445;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5434__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__5446 = cljs.core.next.call(null,seq__5434__$1);
var G__5447 = null;
var G__5448 = (0);
var G__5449 = (0);
seq__5434 = G__5446;
chunk__5435 = G__5447;
count__5436 = G__5448;
i__5437 = G__5449;
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
var levels_5450 = speclj.platform.stack_trace.call(null,exception);
var elides_5451 = (0);
while(true){
if(cljs.core.seq.call(null,levels_5450)){
var level_5452 = cljs.core.first.call(null,levels_5450);
if(speclj.platform.elide_level_QMARK_.call(null,level_5452)){
var G__5453 = cljs.core.rest.call(null,levels_5450);
var G__5454 = (elides_5451 + (1));
levels_5450 = G__5453;
elides_5451 = G__5454;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_5451);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_5452));

var G__5455 = cljs.core.rest.call(null,levels_5450);
var G__5456 = (0);
levels_5450 = G__5455;
elides_5451 = G__5456;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_5451);
}
break;
}

var temp__5816__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5816__auto__)){
var cause = temp__5816__auto__;
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
var _STAR_print_newline_STAR__orig_val__5457_5461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5458_5462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5459_5463 = true;
var _STAR_print_fn_STAR__temp_val__5460_5464 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5459_5463);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5460_5464);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5458_5462);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5457_5461);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5468 = arguments.length;
var i__4737__auto___5469 = (0);
while(true){
if((i__4737__auto___5469 < len__4736__auto___5468)){
args__4742__auto__.push((arguments[i__4737__auto___5469]));

var G__5470 = (i__4737__auto___5469 + (1));
i__4737__auto___5469 = G__5470;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__5465_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5465_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq5466){
var G__5467 = cljs.core.first.call(null,seq5466);
var seq5466__$1 = cljs.core.next.call(null,seq5466);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5467,seq5466__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5473 = arguments.length;
var i__4737__auto___5474 = (0);
while(true){
if((i__4737__auto___5474 < len__4736__auto___5473)){
args__4742__auto__.push((arguments[i__4737__auto___5474]));

var G__5475 = (i__4737__auto___5474 + (1));
i__4737__auto___5474 = G__5475;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq5471){
var G__5472 = cljs.core.first.call(null,seq5471);
var seq5471__$1 = cljs.core.next.call(null,seq5471);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5472,seq5471__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__5476 = cljs.core.seq.call(null,reporters);
var chunk__5477 = null;
var count__5478 = (0);
var i__5479 = (0);
while(true){
if((i__5479 < count__5478)){
var reporter = cljs.core._nth.call(null,chunk__5477,i__5479);
speclj.reporting.report_description.call(null,reporter,description);


var G__5480 = seq__5476;
var G__5481 = chunk__5477;
var G__5482 = count__5478;
var G__5483 = (i__5479 + (1));
seq__5476 = G__5480;
chunk__5477 = G__5481;
count__5478 = G__5482;
i__5479 = G__5483;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5476);
if(temp__5818__auto__){
var seq__5476__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5476__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5476__$1);
var G__5484 = cljs.core.chunk_rest.call(null,seq__5476__$1);
var G__5485 = c__4556__auto__;
var G__5486 = cljs.core.count.call(null,c__4556__auto__);
var G__5487 = (0);
seq__5476 = G__5484;
chunk__5477 = G__5485;
count__5478 = G__5486;
i__5479 = G__5487;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5476__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__5488 = cljs.core.next.call(null,seq__5476__$1);
var G__5489 = null;
var G__5490 = (0);
var G__5491 = (0);
seq__5476 = G__5488;
chunk__5477 = G__5489;
count__5478 = G__5490;
i__5479 = G__5491;
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
var seq__5492 = cljs.core.seq.call(null,reporters);
var chunk__5493 = null;
var count__5494 = (0);
var i__5495 = (0);
while(true){
if((i__5495 < count__5494)){
var reporter = cljs.core._nth.call(null,chunk__5493,i__5495);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5496 = seq__5492;
var G__5497 = chunk__5493;
var G__5498 = count__5494;
var G__5499 = (i__5495 + (1));
seq__5492 = G__5496;
chunk__5493 = G__5497;
count__5494 = G__5498;
i__5495 = G__5499;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5492);
if(temp__5818__auto__){
var seq__5492__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5492__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5492__$1);
var G__5500 = cljs.core.chunk_rest.call(null,seq__5492__$1);
var G__5501 = c__4556__auto__;
var G__5502 = cljs.core.count.call(null,c__4556__auto__);
var G__5503 = (0);
seq__5492 = G__5500;
chunk__5493 = G__5501;
count__5494 = G__5502;
i__5495 = G__5503;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5492__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5504 = cljs.core.next.call(null,seq__5492__$1);
var G__5505 = null;
var G__5506 = (0);
var G__5507 = (0);
seq__5492 = G__5504;
chunk__5493 = G__5505;
count__5494 = G__5506;
i__5495 = G__5507;
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
var seq__5508 = cljs.core.seq.call(null,reporters);
var chunk__5509 = null;
var count__5510 = (0);
var i__5511 = (0);
while(true){
if((i__5511 < count__5510)){
var reporter = cljs.core._nth.call(null,chunk__5509,i__5511);
speclj.reporting.report_message.call(null,reporter,message);


var G__5512 = seq__5508;
var G__5513 = chunk__5509;
var G__5514 = count__5510;
var G__5515 = (i__5511 + (1));
seq__5508 = G__5512;
chunk__5509 = G__5513;
count__5510 = G__5514;
i__5511 = G__5515;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5508);
if(temp__5818__auto__){
var seq__5508__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5508__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5508__$1);
var G__5516 = cljs.core.chunk_rest.call(null,seq__5508__$1);
var G__5517 = c__4556__auto__;
var G__5518 = cljs.core.count.call(null,c__4556__auto__);
var G__5519 = (0);
seq__5508 = G__5516;
chunk__5509 = G__5517;
count__5510 = G__5518;
i__5511 = G__5519;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5508__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__5520 = cljs.core.next.call(null,seq__5508__$1);
var G__5521 = null;
var G__5522 = (0);
var G__5523 = (0);
seq__5508 = G__5520;
chunk__5509 = G__5521;
count__5510 = G__5522;
i__5511 = G__5523;
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
var seq__5524 = cljs.core.seq.call(null,reporters);
var chunk__5525 = null;
var count__5526 = (0);
var i__5527 = (0);
while(true){
if((i__5527 < count__5526)){
var reporter = cljs.core._nth.call(null,chunk__5525,i__5527);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5528 = seq__5524;
var G__5529 = chunk__5525;
var G__5530 = count__5526;
var G__5531 = (i__5527 + (1));
seq__5524 = G__5528;
chunk__5525 = G__5529;
count__5526 = G__5530;
i__5527 = G__5531;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5524);
if(temp__5818__auto__){
var seq__5524__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5524__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5524__$1);
var G__5532 = cljs.core.chunk_rest.call(null,seq__5524__$1);
var G__5533 = c__4556__auto__;
var G__5534 = cljs.core.count.call(null,c__4556__auto__);
var G__5535 = (0);
seq__5524 = G__5532;
chunk__5525 = G__5533;
count__5526 = G__5534;
i__5527 = G__5535;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5524__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5536 = cljs.core.next.call(null,seq__5524__$1);
var G__5537 = null;
var G__5538 = (0);
var G__5539 = (0);
seq__5524 = G__5536;
chunk__5525 = G__5537;
count__5526 = G__5538;
i__5527 = G__5539;
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

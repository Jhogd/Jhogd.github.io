// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__29025_SHARP_){
return p1__29025_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_29026 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_29026.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_29027 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_29027.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_29028 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_29028.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_29029 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_29029.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_29030 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_29030.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_29031 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_29031.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_29032 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_29032.call(null,this$,exception);
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
var seq__29033 = cljs.core.seq.call(null,reporters);
var chunk__29034 = null;
var count__29035 = (0);
var i__29036 = (0);
while(true){
if((i__29036 < count__29035)){
var reporter = cljs.core._nth.call(null,chunk__29034,i__29036);
speclj.reporting.report_pass.call(null,reporter,result);


var G__29037 = seq__29033;
var G__29038 = chunk__29034;
var G__29039 = count__29035;
var G__29040 = (i__29036 + (1));
seq__29033 = G__29037;
chunk__29034 = G__29038;
count__29035 = G__29039;
i__29036 = G__29040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29033);
if(temp__5804__auto__){
var seq__29033__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29033__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29033__$1);
var G__29041 = cljs.core.chunk_rest.call(null,seq__29033__$1);
var G__29042 = c__4556__auto__;
var G__29043 = cljs.core.count.call(null,c__4556__auto__);
var G__29044 = (0);
seq__29033 = G__29041;
chunk__29034 = G__29042;
count__29035 = G__29043;
i__29036 = G__29044;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29033__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__29045 = cljs.core.next.call(null,seq__29033__$1);
var G__29046 = null;
var G__29047 = (0);
var G__29048 = (0);
seq__29033 = G__29045;
chunk__29034 = G__29046;
count__29035 = G__29047;
i__29036 = G__29048;
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
var seq__29049 = cljs.core.seq.call(null,reporters);
var chunk__29050 = null;
var count__29051 = (0);
var i__29052 = (0);
while(true){
if((i__29052 < count__29051)){
var reporter = cljs.core._nth.call(null,chunk__29050,i__29052);
speclj.reporting.report_fail.call(null,reporter,result);


var G__29053 = seq__29049;
var G__29054 = chunk__29050;
var G__29055 = count__29051;
var G__29056 = (i__29052 + (1));
seq__29049 = G__29053;
chunk__29050 = G__29054;
count__29051 = G__29055;
i__29052 = G__29056;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29049);
if(temp__5804__auto__){
var seq__29049__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29049__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29049__$1);
var G__29057 = cljs.core.chunk_rest.call(null,seq__29049__$1);
var G__29058 = c__4556__auto__;
var G__29059 = cljs.core.count.call(null,c__4556__auto__);
var G__29060 = (0);
seq__29049 = G__29057;
chunk__29050 = G__29058;
count__29051 = G__29059;
i__29052 = G__29060;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29049__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__29061 = cljs.core.next.call(null,seq__29049__$1);
var G__29062 = null;
var G__29063 = (0);
var G__29064 = (0);
seq__29049 = G__29061;
chunk__29050 = G__29062;
count__29051 = G__29063;
i__29052 = G__29064;
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
var seq__29065 = cljs.core.seq.call(null,reporters);
var chunk__29066 = null;
var count__29067 = (0);
var i__29068 = (0);
while(true){
if((i__29068 < count__29067)){
var reporter = cljs.core._nth.call(null,chunk__29066,i__29068);
speclj.reporting.report_pending.call(null,reporter,result);


var G__29069 = seq__29065;
var G__29070 = chunk__29066;
var G__29071 = count__29067;
var G__29072 = (i__29068 + (1));
seq__29065 = G__29069;
chunk__29066 = G__29070;
count__29067 = G__29071;
i__29068 = G__29072;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29065);
if(temp__5804__auto__){
var seq__29065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29065__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29065__$1);
var G__29073 = cljs.core.chunk_rest.call(null,seq__29065__$1);
var G__29074 = c__4556__auto__;
var G__29075 = cljs.core.count.call(null,c__4556__auto__);
var G__29076 = (0);
seq__29065 = G__29073;
chunk__29066 = G__29074;
count__29067 = G__29075;
i__29068 = G__29076;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29065__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__29077 = cljs.core.next.call(null,seq__29065__$1);
var G__29078 = null;
var G__29079 = (0);
var G__29080 = (0);
seq__29065 = G__29077;
chunk__29066 = G__29078;
count__29067 = G__29079;
i__29068 = G__29080;
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
var seq__29081 = cljs.core.seq.call(null,reporters);
var chunk__29082 = null;
var count__29083 = (0);
var i__29084 = (0);
while(true){
if((i__29084 < count__29083)){
var reporter = cljs.core._nth.call(null,chunk__29082,i__29084);
speclj.reporting.report_error.call(null,reporter,result);


var G__29085 = seq__29081;
var G__29086 = chunk__29082;
var G__29087 = count__29083;
var G__29088 = (i__29084 + (1));
seq__29081 = G__29085;
chunk__29082 = G__29086;
count__29083 = G__29087;
i__29084 = G__29088;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29081);
if(temp__5804__auto__){
var seq__29081__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29081__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29081__$1);
var G__29089 = cljs.core.chunk_rest.call(null,seq__29081__$1);
var G__29090 = c__4556__auto__;
var G__29091 = cljs.core.count.call(null,c__4556__auto__);
var G__29092 = (0);
seq__29081 = G__29089;
chunk__29082 = G__29090;
count__29083 = G__29091;
i__29084 = G__29092;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29081__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__29093 = cljs.core.next.call(null,seq__29081__$1);
var G__29094 = null;
var G__29095 = (0);
var G__29096 = (0);
seq__29081 = G__29093;
chunk__29082 = G__29094;
count__29083 = G__29095;
i__29084 = G__29096;
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
var levels_29097 = speclj.platform.stack_trace.call(null,exception);
var elides_29098 = (0);
while(true){
if(cljs.core.seq.call(null,levels_29097)){
var level_29099 = cljs.core.first.call(null,levels_29097);
if(speclj.platform.elide_level_QMARK_.call(null,level_29099)){
var G__29100 = cljs.core.rest.call(null,levels_29097);
var G__29101 = (elides_29098 + (1));
levels_29097 = G__29100;
elides_29098 = G__29101;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_29098);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_29099));

var G__29102 = cljs.core.rest.call(null,levels_29097);
var G__29103 = (0);
levels_29097 = G__29102;
elides_29098 = G__29103;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_29098);
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
var _STAR_print_newline_STAR__orig_val__29104_29108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29105_29109 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29106_29110 = true;
var _STAR_print_fn_STAR__temp_val__29107_29111 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29106_29110);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29107_29111);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29105_29109);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29104_29108);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29115 = arguments.length;
var i__4737__auto___29116 = (0);
while(true){
if((i__4737__auto___29116 < len__4736__auto___29115)){
args__4742__auto__.push((arguments[i__4737__auto___29116]));

var G__29117 = (i__4737__auto___29116 + (1));
i__4737__auto___29116 = G__29117;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__29112_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29112_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq29113){
var G__29114 = cljs.core.first.call(null,seq29113);
var seq29113__$1 = cljs.core.next.call(null,seq29113);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29114,seq29113__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29120 = arguments.length;
var i__4737__auto___29121 = (0);
while(true){
if((i__4737__auto___29121 < len__4736__auto___29120)){
args__4742__auto__.push((arguments[i__4737__auto___29121]));

var G__29122 = (i__4737__auto___29121 + (1));
i__4737__auto___29121 = G__29122;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq29118){
var G__29119 = cljs.core.first.call(null,seq29118);
var seq29118__$1 = cljs.core.next.call(null,seq29118);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29119,seq29118__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__29123 = cljs.core.seq.call(null,reporters);
var chunk__29124 = null;
var count__29125 = (0);
var i__29126 = (0);
while(true){
if((i__29126 < count__29125)){
var reporter = cljs.core._nth.call(null,chunk__29124,i__29126);
speclj.reporting.report_description.call(null,reporter,description);


var G__29127 = seq__29123;
var G__29128 = chunk__29124;
var G__29129 = count__29125;
var G__29130 = (i__29126 + (1));
seq__29123 = G__29127;
chunk__29124 = G__29128;
count__29125 = G__29129;
i__29126 = G__29130;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29123);
if(temp__5804__auto__){
var seq__29123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29123__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29123__$1);
var G__29131 = cljs.core.chunk_rest.call(null,seq__29123__$1);
var G__29132 = c__4556__auto__;
var G__29133 = cljs.core.count.call(null,c__4556__auto__);
var G__29134 = (0);
seq__29123 = G__29131;
chunk__29124 = G__29132;
count__29125 = G__29133;
i__29126 = G__29134;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29123__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__29135 = cljs.core.next.call(null,seq__29123__$1);
var G__29136 = null;
var G__29137 = (0);
var G__29138 = (0);
seq__29123 = G__29135;
chunk__29124 = G__29136;
count__29125 = G__29137;
i__29126 = G__29138;
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
var seq__29139 = cljs.core.seq.call(null,reporters);
var chunk__29140 = null;
var count__29141 = (0);
var i__29142 = (0);
while(true){
if((i__29142 < count__29141)){
var reporter = cljs.core._nth.call(null,chunk__29140,i__29142);
speclj.reporting.report_runs.call(null,reporter,results);


var G__29143 = seq__29139;
var G__29144 = chunk__29140;
var G__29145 = count__29141;
var G__29146 = (i__29142 + (1));
seq__29139 = G__29143;
chunk__29140 = G__29144;
count__29141 = G__29145;
i__29142 = G__29146;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29139);
if(temp__5804__auto__){
var seq__29139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29139__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29139__$1);
var G__29147 = cljs.core.chunk_rest.call(null,seq__29139__$1);
var G__29148 = c__4556__auto__;
var G__29149 = cljs.core.count.call(null,c__4556__auto__);
var G__29150 = (0);
seq__29139 = G__29147;
chunk__29140 = G__29148;
count__29141 = G__29149;
i__29142 = G__29150;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29139__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__29151 = cljs.core.next.call(null,seq__29139__$1);
var G__29152 = null;
var G__29153 = (0);
var G__29154 = (0);
seq__29139 = G__29151;
chunk__29140 = G__29152;
count__29141 = G__29153;
i__29142 = G__29154;
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
var seq__29155 = cljs.core.seq.call(null,reporters);
var chunk__29156 = null;
var count__29157 = (0);
var i__29158 = (0);
while(true){
if((i__29158 < count__29157)){
var reporter = cljs.core._nth.call(null,chunk__29156,i__29158);
speclj.reporting.report_message.call(null,reporter,message);


var G__29159 = seq__29155;
var G__29160 = chunk__29156;
var G__29161 = count__29157;
var G__29162 = (i__29158 + (1));
seq__29155 = G__29159;
chunk__29156 = G__29160;
count__29157 = G__29161;
i__29158 = G__29162;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29155);
if(temp__5804__auto__){
var seq__29155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29155__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29155__$1);
var G__29163 = cljs.core.chunk_rest.call(null,seq__29155__$1);
var G__29164 = c__4556__auto__;
var G__29165 = cljs.core.count.call(null,c__4556__auto__);
var G__29166 = (0);
seq__29155 = G__29163;
chunk__29156 = G__29164;
count__29157 = G__29165;
i__29158 = G__29166;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29155__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__29167 = cljs.core.next.call(null,seq__29155__$1);
var G__29168 = null;
var G__29169 = (0);
var G__29170 = (0);
seq__29155 = G__29167;
chunk__29156 = G__29168;
count__29157 = G__29169;
i__29158 = G__29170;
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
var seq__29171 = cljs.core.seq.call(null,reporters);
var chunk__29172 = null;
var count__29173 = (0);
var i__29174 = (0);
while(true){
if((i__29174 < count__29173)){
var reporter = cljs.core._nth.call(null,chunk__29172,i__29174);
speclj.reporting.report_error.call(null,reporter,exception);


var G__29175 = seq__29171;
var G__29176 = chunk__29172;
var G__29177 = count__29173;
var G__29178 = (i__29174 + (1));
seq__29171 = G__29175;
chunk__29172 = G__29176;
count__29173 = G__29177;
i__29174 = G__29178;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29171);
if(temp__5804__auto__){
var seq__29171__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29171__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29171__$1);
var G__29179 = cljs.core.chunk_rest.call(null,seq__29171__$1);
var G__29180 = c__4556__auto__;
var G__29181 = cljs.core.count.call(null,c__4556__auto__);
var G__29182 = (0);
seq__29171 = G__29179;
chunk__29172 = G__29180;
count__29173 = G__29181;
i__29174 = G__29182;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__29171__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__29183 = cljs.core.next.call(null,seq__29171__$1);
var G__29184 = null;
var G__29185 = (0);
var G__29186 = (0);
seq__29171 = G__29183;
chunk__29172 = G__29184;
count__29173 = G__29185;
i__29174 = G__29186;
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

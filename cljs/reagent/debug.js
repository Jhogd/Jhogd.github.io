// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5083__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5084__i = 0, G__5084__a = new Array(arguments.length -  0);
while (G__5084__i < G__5084__a.length) {G__5084__a[G__5084__i] = arguments[G__5084__i + 0]; ++G__5084__i;}
  args = new cljs.core.IndexedSeq(G__5084__a,0,null);
} 
return G__5083__delegate.call(this,args);};
G__5083.cljs$lang$maxFixedArity = 0;
G__5083.cljs$lang$applyTo = (function (arglist__5085){
var args = cljs.core.seq(arglist__5085);
return G__5083__delegate(args);
});
G__5083.cljs$core$IFn$_invoke$arity$variadic = G__5083__delegate;
return G__5083;
})()
);

(o.error = (function() { 
var G__5086__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5087__i = 0, G__5087__a = new Array(arguments.length -  0);
while (G__5087__i < G__5087__a.length) {G__5087__a[G__5087__i] = arguments[G__5087__i + 0]; ++G__5087__i;}
  args = new cljs.core.IndexedSeq(G__5087__a,0,null);
} 
return G__5086__delegate.call(this,args);};
G__5086.cljs$lang$maxFixedArity = 0;
G__5086.cljs$lang$applyTo = (function (arglist__5088){
var args = cljs.core.seq(arglist__5088);
return G__5086__delegate(args);
});
G__5086.cljs$core$IFn$_invoke$arity$variadic = G__5086__delegate;
return G__5086;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

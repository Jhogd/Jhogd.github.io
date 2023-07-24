// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__4581__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4582__i = 0, G__4582__a = new Array(arguments.length -  0);
while (G__4582__i < G__4582__a.length) {G__4582__a[G__4582__i] = arguments[G__4582__i + 0]; ++G__4582__i;}
  args = new cljs.core.IndexedSeq(G__4582__a,0,null);
} 
return G__4581__delegate.call(this,args);};
G__4581.cljs$lang$maxFixedArity = 0;
G__4581.cljs$lang$applyTo = (function (arglist__4583){
var args = cljs.core.seq(arglist__4583);
return G__4581__delegate(args);
});
G__4581.cljs$core$IFn$_invoke$arity$variadic = G__4581__delegate;
return G__4581;
})()
);

(o.error = (function() { 
var G__4584__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4585__i = 0, G__4585__a = new Array(arguments.length -  0);
while (G__4585__i < G__4585__a.length) {G__4585__a[G__4585__i] = arguments[G__4585__i + 0]; ++G__4585__i;}
  args = new cljs.core.IndexedSeq(G__4585__a,0,null);
} 
return G__4584__delegate.call(this,args);};
G__4584.cljs$lang$maxFixedArity = 0;
G__4584.cljs$lang$applyTo = (function (arglist__4586){
var args = cljs.core.seq(arglist__4586);
return G__4584__delegate(args);
});
G__4584.cljs$core$IFn$_invoke$arity$variadic = G__4584__delegate;
return G__4584;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map

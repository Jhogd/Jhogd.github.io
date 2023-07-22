// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sample_project.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('sample_project.components');
if((typeof sample_project !== 'undefined') && (typeof sample_project.core !== 'undefined') && (typeof sample_project.core.state !== 'undefined')){
} else {
sample_project.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sample_project.core.main = (function sample_project$core$main(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello, from main!"], 0));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sample_project.components.hello_world], null),document.getElementById("app"));
});
goog.exportSymbol('sample_project.core.main', sample_project.core.main);
sample_project.core.main();

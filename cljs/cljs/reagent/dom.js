// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__6387 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__6388 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__6388);

try{var G__6389 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__6390 = container;
var G__6391 = (function (){
var _STAR_always_update_STAR__orig_val__6392 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__6393 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__6393);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__6392);
}});
return reagent.dom.global$module$react_dom.render(G__6389,G__6390,G__6391);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__6387);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__6395 = arguments.length;
switch (G__6395) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__6396 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6396,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6396,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__6400_6416 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__6401_6417 = null;
var count__6402_6418 = (0);
var i__6403_6419 = (0);
while(true){
if((i__6403_6419 < count__6402_6418)){
var vec__6410_6420 = chunk__6401_6417.cljs$core$IIndexed$_nth$arity$2(null,i__6403_6419);
var container_6421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6410_6420,(0),null);
var comp_6422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6410_6420,(1),null);
reagent.dom.re_render_component(comp_6422,container_6421);


var G__6423 = seq__6400_6416;
var G__6424 = chunk__6401_6417;
var G__6425 = count__6402_6418;
var G__6426 = (i__6403_6419 + (1));
seq__6400_6416 = G__6423;
chunk__6401_6417 = G__6424;
count__6402_6418 = G__6425;
i__6403_6419 = G__6426;
continue;
} else {
var temp__5804__auto___6427 = cljs.core.seq(seq__6400_6416);
if(temp__5804__auto___6427){
var seq__6400_6428__$1 = temp__5804__auto___6427;
if(cljs.core.chunked_seq_QMARK_(seq__6400_6428__$1)){
var c__4556__auto___6429 = cljs.core.chunk_first(seq__6400_6428__$1);
var G__6430 = cljs.core.chunk_rest(seq__6400_6428__$1);
var G__6431 = c__4556__auto___6429;
var G__6432 = cljs.core.count(c__4556__auto___6429);
var G__6433 = (0);
seq__6400_6416 = G__6430;
chunk__6401_6417 = G__6431;
count__6402_6418 = G__6432;
i__6403_6419 = G__6433;
continue;
} else {
var vec__6413_6434 = cljs.core.first(seq__6400_6428__$1);
var container_6435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6413_6434,(0),null);
var comp_6436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6413_6434,(1),null);
reagent.dom.re_render_component(comp_6436,container_6435);


var G__6437 = cljs.core.next(seq__6400_6428__$1);
var G__6438 = null;
var G__6439 = (0);
var G__6440 = (0);
seq__6400_6416 = G__6437;
chunk__6401_6417 = G__6438;
count__6402_6418 = G__6439;
i__6403_6419 = G__6440;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

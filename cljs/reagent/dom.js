// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__5363 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5364 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5364);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__5365 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5366 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5366);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5365);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5363);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var G__5368 = arguments.length;
switch (G__5368) {
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
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__5369 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__5369,(0),null);
var callback = cljs.core.nth.call(null,vec__5369,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
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
reagent.ratom.flush_BANG_.call(null);

var seq__5373_5389 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__5374_5390 = null;
var count__5375_5391 = (0);
var i__5376_5392 = (0);
while(true){
if((i__5376_5392 < count__5375_5391)){
var vec__5383_5393 = cljs.core._nth.call(null,chunk__5374_5390,i__5376_5392);
var container_5394 = cljs.core.nth.call(null,vec__5383_5393,(0),null);
var comp_5395 = cljs.core.nth.call(null,vec__5383_5393,(1),null);
reagent.dom.re_render_component.call(null,comp_5395,container_5394);


var G__5396 = seq__5373_5389;
var G__5397 = chunk__5374_5390;
var G__5398 = count__5375_5391;
var G__5399 = (i__5376_5392 + (1));
seq__5373_5389 = G__5396;
chunk__5374_5390 = G__5397;
count__5375_5391 = G__5398;
i__5376_5392 = G__5399;
continue;
} else {
var temp__5818__auto___5400 = cljs.core.seq.call(null,seq__5373_5389);
if(temp__5818__auto___5400){
var seq__5373_5401__$1 = temp__5818__auto___5400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5373_5401__$1)){
var c__4556__auto___5402 = cljs.core.chunk_first.call(null,seq__5373_5401__$1);
var G__5403 = cljs.core.chunk_rest.call(null,seq__5373_5401__$1);
var G__5404 = c__4556__auto___5402;
var G__5405 = cljs.core.count.call(null,c__4556__auto___5402);
var G__5406 = (0);
seq__5373_5389 = G__5403;
chunk__5374_5390 = G__5404;
count__5375_5391 = G__5405;
i__5376_5392 = G__5406;
continue;
} else {
var vec__5386_5407 = cljs.core.first.call(null,seq__5373_5401__$1);
var container_5408 = cljs.core.nth.call(null,vec__5386_5407,(0),null);
var comp_5409 = cljs.core.nth.call(null,vec__5386_5407,(1),null);
reagent.dom.re_render_component.call(null,comp_5409,container_5408);


var G__5410 = cljs.core.next.call(null,seq__5373_5401__$1);
var G__5411 = null;
var G__5412 = (0);
var G__5413 = (0);
seq__5373_5389 = G__5410;
chunk__5374_5390 = G__5411;
count__5375_5391 = G__5412;
i__5376_5392 = G__5413;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map

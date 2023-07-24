// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return false;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5818__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5818__auto__)){
var parent = temp__5818__auto__;
var G__5879 = parent;
component = G__5879;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5818__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5818__auto__)){
var parent = temp__5818__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__5880 = parent;
component = G__5880;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__5881 = cljs.core.seq.call(null,descriptions);
var chunk__5882 = null;
var count__5883 = (0);
var i__5884 = (0);
while(true){
if((i__5884 < count__5883)){
var component = cljs.core._nth.call(null,chunk__5882,i__5884);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__5885 = seq__5881;
var G__5886 = chunk__5882;
var G__5887 = count__5883;
var G__5888 = (i__5884 + (1));
seq__5881 = G__5885;
chunk__5882 = G__5886;
count__5883 = G__5887;
i__5884 = G__5888;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5881);
if(temp__5818__auto__){
var seq__5881__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5881__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5881__$1);
var G__5889 = cljs.core.chunk_rest.call(null,seq__5881__$1);
var G__5890 = c__4556__auto__;
var G__5891 = cljs.core.count.call(null,c__4556__auto__);
var G__5892 = (0);
seq__5881 = G__5889;
chunk__5882 = G__5890;
count__5883 = G__5891;
i__5884 = G__5892;
continue;
} else {
var component = cljs.core.first.call(null,seq__5881__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__5893 = cljs.core.next.call(null,seq__5881__$1);
var G__5894 = null;
var G__5895 = (0);
var G__5896 = (0);
seq__5881 = G__5893;
chunk__5882 = G__5894;
count__5883 = G__5895;
i__5884 = G__5896;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__5897 = cljs.core.seq.call(null,characteristics);
var chunk__5899 = null;
var count__5900 = (0);
var i__5901 = (0);
while(true){
if((i__5901 < count__5900)){
var characteristic = cljs.core._nth.call(null,chunk__5899,i__5901);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__5903 = seq__5897;
var G__5904 = chunk__5899;
var G__5905 = count__5900;
var G__5906 = (i__5901 + (1));
seq__5897 = G__5903;
chunk__5899 = G__5904;
count__5900 = G__5905;
i__5901 = G__5906;
continue;
} else {
var G__5907 = seq__5897;
var G__5908 = chunk__5899;
var G__5909 = count__5900;
var G__5910 = (i__5901 + (1));
seq__5897 = G__5907;
chunk__5899 = G__5908;
count__5900 = G__5909;
i__5901 = G__5910;
continue;
}
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5897);
if(temp__5818__auto__){
var seq__5897__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5897__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5897__$1);
var G__5911 = cljs.core.chunk_rest.call(null,seq__5897__$1);
var G__5912 = c__4556__auto__;
var G__5913 = cljs.core.count.call(null,c__4556__auto__);
var G__5914 = (0);
seq__5897 = G__5911;
chunk__5899 = G__5912;
count__5900 = G__5913;
i__5901 = G__5914;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__5897__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__5915 = cljs.core.next.call(null,seq__5897__$1);
var G__5916 = null;
var G__5917 = (0);
var G__5918 = (0);
seq__5897 = G__5915;
chunk__5899 = G__5916;
count__5900 = G__5917;
i__5901 = G__5918;
continue;
} else {
var G__5919 = cljs.core.next.call(null,seq__5897__$1);
var G__5920 = null;
var G__5921 = (0);
var G__5922 = (0);
seq__5897 = G__5919;
chunk__5899 = G__5920;
count__5900 = G__5921;
i__5901 = G__5922;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__5923_5927 = cljs.core.seq.call(null,descriptions);
var chunk__5924_5928 = null;
var count__5925_5929 = (0);
var i__5926_5930 = (0);
while(true){
if((i__5926_5930 < count__5925_5929)){
var description_5931 = cljs.core._nth.call(null,chunk__5924_5928,i__5926_5930);
speclj.running.scan_for_focus_BANG_.call(null,description_5931);


var G__5932 = seq__5923_5927;
var G__5933 = chunk__5924_5928;
var G__5934 = count__5925_5929;
var G__5935 = (i__5926_5930 + (1));
seq__5923_5927 = G__5932;
chunk__5924_5928 = G__5933;
count__5925_5929 = G__5934;
i__5926_5930 = G__5935;
continue;
} else {
var temp__5818__auto___5936 = cljs.core.seq.call(null,seq__5923_5927);
if(temp__5818__auto___5936){
var seq__5923_5937__$1 = temp__5818__auto___5936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5923_5937__$1)){
var c__4556__auto___5938 = cljs.core.chunk_first.call(null,seq__5923_5937__$1);
var G__5939 = cljs.core.chunk_rest.call(null,seq__5923_5937__$1);
var G__5940 = c__4556__auto___5938;
var G__5941 = cljs.core.count.call(null,c__4556__auto___5938);
var G__5942 = (0);
seq__5923_5927 = G__5939;
chunk__5924_5928 = G__5940;
count__5925_5929 = G__5941;
i__5926_5930 = G__5942;
continue;
} else {
var description_5943 = cljs.core.first.call(null,seq__5923_5937__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_5943);


var G__5944 = cljs.core.next.call(null,seq__5923_5937__$1);
var G__5945 = null;
var G__5946 = (0);
var G__5947 = (0);
seq__5923_5927 = G__5944;
chunk__5924_5928 = G__5945;
count__5925_5929 = G__5946;
i__5926_5930 = G__5947;
continue;
}
} else {
}
}
break;
}

var or__4126__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__5948 = cljs.core.seq.call(null,components);
var chunk__5949 = null;
var count__5950 = (0);
var i__5951 = (0);
while(true){
if((i__5951 < count__5950)){
var component = cljs.core._nth.call(null,chunk__5949,i__5951);
component.body.call(null);


var G__5952 = seq__5948;
var G__5953 = chunk__5949;
var G__5954 = count__5950;
var G__5955 = (i__5951 + (1));
seq__5948 = G__5952;
chunk__5949 = G__5953;
count__5950 = G__5954;
i__5951 = G__5955;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5948);
if(temp__5818__auto__){
var seq__5948__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5948__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5948__$1);
var G__5956 = cljs.core.chunk_rest.call(null,seq__5948__$1);
var G__5957 = c__4556__auto__;
var G__5958 = cljs.core.count.call(null,c__4556__auto__);
var G__5959 = (0);
seq__5948 = G__5956;
chunk__5949 = G__5957;
count__5950 = G__5958;
i__5951 = G__5959;
continue;
} else {
var component = cljs.core.first.call(null,seq__5948__$1);
component.body.call(null);


var G__5960 = cljs.core.next.call(null,seq__5948__$1);
var G__5961 = null;
var G__5962 = (0);
var G__5963 = (0);
seq__5948 = G__5960;
chunk__5949 = G__5961;
count__5950 = G__5962;
i__5951 = G__5963;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__5964 = cljs.core.seq.call(null,withs);
var chunk__5965 = null;
var count__5966 = (0);
var i__5967 = (0);
while(true){
if((i__5967 < count__5966)){
var with$ = cljs.core._nth.call(null,chunk__5965,i__5967);
speclj.components.reset_with.call(null,with$);


var G__5968 = seq__5964;
var G__5969 = chunk__5965;
var G__5970 = count__5966;
var G__5971 = (i__5967 + (1));
seq__5964 = G__5968;
chunk__5965 = G__5969;
count__5966 = G__5970;
i__5967 = G__5971;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5964);
if(temp__5818__auto__){
var seq__5964__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5964__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5964__$1);
var G__5972 = cljs.core.chunk_rest.call(null,seq__5964__$1);
var G__5973 = c__4556__auto__;
var G__5974 = cljs.core.count.call(null,c__4556__auto__);
var G__5975 = (0);
seq__5964 = G__5972;
chunk__5965 = G__5973;
count__5966 = G__5974;
i__5967 = G__5975;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__5964__$1);
speclj.components.reset_with.call(null,with$);


var G__5976 = cljs.core.next.call(null,seq__5964__$1);
var G__5977 = null;
var G__5978 = (0);
var G__5979 = (0);
seq__5964 = G__5976;
chunk__5965 = G__5977;
count__5966 = G__5978;
i__5967 = G__5979;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__5980 = cljs.core.deref.call(null,description__$1.parent);
var G__5981 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__5980;
components = G__5981;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__5982_SHARP_){
return cljs.core.deref.call(null,p1__5982_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__5983_SHARP_){
return cljs.core.deref.call(null,p1__5983_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__5984_SHARP_){
return cljs.core.deref.call(null,p1__5984_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__5985_SHARP_){
return p1__5985_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__5986_SHARP_){
return cljs.core.deref.call(null,p1__5986_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e5987){var e = e5987;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__5988(s__5989){
return (new cljs.core.LazySeq(null,(function (){
var s__5989__$1 = s__5989;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5989__$1);
if(temp__5818__auto__){
var s__5989__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5989__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5989__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5991 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5990 = (0);
while(true){
if((i__5990 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__5990);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__5991,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__5992 = (i__5990 + (1));
i__5990 = G__5992;
continue;
} else {
var G__5993 = (i__5990 + (1));
i__5990 = G__5993;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5991),speclj$running$do_characteristics_$_iter__5988.call(null,cljs.core.chunk_rest.call(null,s__5989__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5991),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__5989__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__5988.call(null,cljs.core.rest.call(null,s__5989__$2)));
} else {
var G__5994 = cljs.core.rest.call(null,s__5989__$2);
s__5989__$1 = G__5994;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__5995 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__5996 = cljs.core.rest.call(null,children);
results__$1 = G__5995;
children = G__5996;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__5999_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5999_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__6000_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6000_SHARP_.unique_name)].join('');
}),withs);
var seq__6001_6033 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__6002_6034 = null;
var count__6003_6035 = (0);
var i__6004_6036 = (0);
while(true){
if((i__6004_6036 < count__6003_6035)){
var vec__6011_6037 = cljs.core._nth.call(null,chunk__6002_6034,i__6004_6036);
var n_6038 = cljs.core.nth.call(null,vec__6011_6037,(0),null);
var un_6039 = cljs.core.nth.call(null,vec__6011_6037,(1),null);
var code_6040 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6038)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6039),";"].join('');
eval(code_6040);


var G__6041 = seq__6001_6033;
var G__6042 = chunk__6002_6034;
var G__6043 = count__6003_6035;
var G__6044 = (i__6004_6036 + (1));
seq__6001_6033 = G__6041;
chunk__6002_6034 = G__6042;
count__6003_6035 = G__6043;
i__6004_6036 = G__6044;
continue;
} else {
var temp__5818__auto___6045 = cljs.core.seq.call(null,seq__6001_6033);
if(temp__5818__auto___6045){
var seq__6001_6046__$1 = temp__5818__auto___6045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6001_6046__$1)){
var c__4556__auto___6047 = cljs.core.chunk_first.call(null,seq__6001_6046__$1);
var G__6048 = cljs.core.chunk_rest.call(null,seq__6001_6046__$1);
var G__6049 = c__4556__auto___6047;
var G__6050 = cljs.core.count.call(null,c__4556__auto___6047);
var G__6051 = (0);
seq__6001_6033 = G__6048;
chunk__6002_6034 = G__6049;
count__6003_6035 = G__6050;
i__6004_6036 = G__6051;
continue;
} else {
var vec__6014_6052 = cljs.core.first.call(null,seq__6001_6046__$1);
var n_6053 = cljs.core.nth.call(null,vec__6014_6052,(0),null);
var un_6054 = cljs.core.nth.call(null,vec__6014_6052,(1),null);
var code_6055 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6053)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6054),";"].join('');
eval(code_6055);


var G__6056 = cljs.core.next.call(null,seq__6001_6046__$1);
var G__6057 = null;
var G__6058 = (0);
var G__6059 = (0);
seq__6001_6033 = G__6056;
chunk__6002_6034 = G__6057;
count__6003_6035 = G__6058;
i__6004_6036 = G__6059;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__6017_6060 = cljs.core.seq.call(null,var_names);
var chunk__6018_6061 = null;
var count__6019_6062 = (0);
var i__6020_6063 = (0);
while(true){
if((i__6020_6063 < count__6019_6062)){
var vec__6027_6064 = cljs.core._nth.call(null,chunk__6018_6061,i__6020_6063);
var n_6065 = cljs.core.nth.call(null,vec__6027_6064,(0),null);
var code_6066 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6065)," = null;"].join('');
eval(code_6066);


var G__6067 = seq__6017_6060;
var G__6068 = chunk__6018_6061;
var G__6069 = count__6019_6062;
var G__6070 = (i__6020_6063 + (1));
seq__6017_6060 = G__6067;
chunk__6018_6061 = G__6068;
count__6019_6062 = G__6069;
i__6020_6063 = G__6070;
continue;
} else {
var temp__5818__auto___6071 = cljs.core.seq.call(null,seq__6017_6060);
if(temp__5818__auto___6071){
var seq__6017_6072__$1 = temp__5818__auto___6071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6017_6072__$1)){
var c__4556__auto___6073 = cljs.core.chunk_first.call(null,seq__6017_6072__$1);
var G__6074 = cljs.core.chunk_rest.call(null,seq__6017_6072__$1);
var G__6075 = c__4556__auto___6073;
var G__6076 = cljs.core.count.call(null,c__4556__auto___6073);
var G__6077 = (0);
seq__6017_6060 = G__6074;
chunk__6018_6061 = G__6075;
count__6019_6062 = G__6076;
i__6020_6063 = G__6077;
continue;
} else {
var vec__6030_6078 = cljs.core.first.call(null,seq__6017_6072__$1);
var n_6079 = cljs.core.nth.call(null,vec__6030_6078,(0),null);
var code_6080 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6079)," = null;"].join('');
eval(code_6080);


var G__6081 = cljs.core.next.call(null,seq__6017_6072__$1);
var G__6082 = null;
var G__6083 = (0);
var G__6084 = (0);
seq__6017_6060 = G__6081;
chunk__6018_6061 = G__6082;
count__6019_6062 = G__6083;
i__6020_6063 = G__6084;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__6085_SHARP_){
return p1__6085_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_6086 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_6086.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_6087 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_6087.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_6088 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_6088.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_6089 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_6089.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map

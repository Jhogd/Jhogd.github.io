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
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__20950 = parent;
component = G__20950;
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
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__20951 = parent;
component = G__20951;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__20952 = cljs.core.seq.call(null,descriptions);
var chunk__20953 = null;
var count__20954 = (0);
var i__20955 = (0);
while(true){
if((i__20955 < count__20954)){
var component = cljs.core._nth.call(null,chunk__20953,i__20955);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__20956 = seq__20952;
var G__20957 = chunk__20953;
var G__20958 = count__20954;
var G__20959 = (i__20955 + (1));
seq__20952 = G__20956;
chunk__20953 = G__20957;
count__20954 = G__20958;
i__20955 = G__20959;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20952);
if(temp__5804__auto__){
var seq__20952__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20952__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20952__$1);
var G__20960 = cljs.core.chunk_rest.call(null,seq__20952__$1);
var G__20961 = c__4556__auto__;
var G__20962 = cljs.core.count.call(null,c__4556__auto__);
var G__20963 = (0);
seq__20952 = G__20960;
chunk__20953 = G__20961;
count__20954 = G__20962;
i__20955 = G__20963;
continue;
} else {
var component = cljs.core.first.call(null,seq__20952__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__20964 = cljs.core.next.call(null,seq__20952__$1);
var G__20965 = null;
var G__20966 = (0);
var G__20967 = (0);
seq__20952 = G__20964;
chunk__20953 = G__20965;
count__20954 = G__20966;
i__20955 = G__20967;
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
var seq__20968 = cljs.core.seq.call(null,characteristics);
var chunk__20970 = null;
var count__20971 = (0);
var i__20972 = (0);
while(true){
if((i__20972 < count__20971)){
var characteristic = cljs.core._nth.call(null,chunk__20970,i__20972);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__20974 = seq__20968;
var G__20975 = chunk__20970;
var G__20976 = count__20971;
var G__20977 = (i__20972 + (1));
seq__20968 = G__20974;
chunk__20970 = G__20975;
count__20971 = G__20976;
i__20972 = G__20977;
continue;
} else {
var G__20978 = seq__20968;
var G__20979 = chunk__20970;
var G__20980 = count__20971;
var G__20981 = (i__20972 + (1));
seq__20968 = G__20978;
chunk__20970 = G__20979;
count__20971 = G__20980;
i__20972 = G__20981;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__20968);
if(temp__5804__auto__){
var seq__20968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20968__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20968__$1);
var G__20982 = cljs.core.chunk_rest.call(null,seq__20968__$1);
var G__20983 = c__4556__auto__;
var G__20984 = cljs.core.count.call(null,c__4556__auto__);
var G__20985 = (0);
seq__20968 = G__20982;
chunk__20970 = G__20983;
count__20971 = G__20984;
i__20972 = G__20985;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__20968__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__20986 = cljs.core.next.call(null,seq__20968__$1);
var G__20987 = null;
var G__20988 = (0);
var G__20989 = (0);
seq__20968 = G__20986;
chunk__20970 = G__20987;
count__20971 = G__20988;
i__20972 = G__20989;
continue;
} else {
var G__20990 = cljs.core.next.call(null,seq__20968__$1);
var G__20991 = null;
var G__20992 = (0);
var G__20993 = (0);
seq__20968 = G__20990;
chunk__20970 = G__20991;
count__20971 = G__20992;
i__20972 = G__20993;
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
var seq__20994_20998 = cljs.core.seq.call(null,descriptions);
var chunk__20995_20999 = null;
var count__20996_21000 = (0);
var i__20997_21001 = (0);
while(true){
if((i__20997_21001 < count__20996_21000)){
var description_21002 = cljs.core._nth.call(null,chunk__20995_20999,i__20997_21001);
speclj.running.scan_for_focus_BANG_.call(null,description_21002);


var G__21003 = seq__20994_20998;
var G__21004 = chunk__20995_20999;
var G__21005 = count__20996_21000;
var G__21006 = (i__20997_21001 + (1));
seq__20994_20998 = G__21003;
chunk__20995_20999 = G__21004;
count__20996_21000 = G__21005;
i__20997_21001 = G__21006;
continue;
} else {
var temp__5804__auto___21007 = cljs.core.seq.call(null,seq__20994_20998);
if(temp__5804__auto___21007){
var seq__20994_21008__$1 = temp__5804__auto___21007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20994_21008__$1)){
var c__4556__auto___21009 = cljs.core.chunk_first.call(null,seq__20994_21008__$1);
var G__21010 = cljs.core.chunk_rest.call(null,seq__20994_21008__$1);
var G__21011 = c__4556__auto___21009;
var G__21012 = cljs.core.count.call(null,c__4556__auto___21009);
var G__21013 = (0);
seq__20994_20998 = G__21010;
chunk__20995_20999 = G__21011;
count__20996_21000 = G__21012;
i__20997_21001 = G__21013;
continue;
} else {
var description_21014 = cljs.core.first.call(null,seq__20994_21008__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_21014);


var G__21015 = cljs.core.next.call(null,seq__20994_21008__$1);
var G__21016 = null;
var G__21017 = (0);
var G__21018 = (0);
seq__20994_20998 = G__21015;
chunk__20995_20999 = G__21016;
count__20996_21000 = G__21017;
i__20997_21001 = G__21018;
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
var seq__21019 = cljs.core.seq.call(null,components);
var chunk__21020 = null;
var count__21021 = (0);
var i__21022 = (0);
while(true){
if((i__21022 < count__21021)){
var component = cljs.core._nth.call(null,chunk__21020,i__21022);
component.body.call(null);


var G__21023 = seq__21019;
var G__21024 = chunk__21020;
var G__21025 = count__21021;
var G__21026 = (i__21022 + (1));
seq__21019 = G__21023;
chunk__21020 = G__21024;
count__21021 = G__21025;
i__21022 = G__21026;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21019);
if(temp__5804__auto__){
var seq__21019__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21019__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21019__$1);
var G__21027 = cljs.core.chunk_rest.call(null,seq__21019__$1);
var G__21028 = c__4556__auto__;
var G__21029 = cljs.core.count.call(null,c__4556__auto__);
var G__21030 = (0);
seq__21019 = G__21027;
chunk__21020 = G__21028;
count__21021 = G__21029;
i__21022 = G__21030;
continue;
} else {
var component = cljs.core.first.call(null,seq__21019__$1);
component.body.call(null);


var G__21031 = cljs.core.next.call(null,seq__21019__$1);
var G__21032 = null;
var G__21033 = (0);
var G__21034 = (0);
seq__21019 = G__21031;
chunk__21020 = G__21032;
count__21021 = G__21033;
i__21022 = G__21034;
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
var seq__21035 = cljs.core.seq.call(null,withs);
var chunk__21036 = null;
var count__21037 = (0);
var i__21038 = (0);
while(true){
if((i__21038 < count__21037)){
var with$ = cljs.core._nth.call(null,chunk__21036,i__21038);
speclj.components.reset_with.call(null,with$);


var G__21039 = seq__21035;
var G__21040 = chunk__21036;
var G__21041 = count__21037;
var G__21042 = (i__21038 + (1));
seq__21035 = G__21039;
chunk__21036 = G__21040;
count__21037 = G__21041;
i__21038 = G__21042;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21035);
if(temp__5804__auto__){
var seq__21035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21035__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21035__$1);
var G__21043 = cljs.core.chunk_rest.call(null,seq__21035__$1);
var G__21044 = c__4556__auto__;
var G__21045 = cljs.core.count.call(null,c__4556__auto__);
var G__21046 = (0);
seq__21035 = G__21043;
chunk__21036 = G__21044;
count__21037 = G__21045;
i__21038 = G__21046;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__21035__$1);
speclj.components.reset_with.call(null,with$);


var G__21047 = cljs.core.next.call(null,seq__21035__$1);
var G__21048 = null;
var G__21049 = (0);
var G__21050 = (0);
seq__21035 = G__21047;
chunk__21036 = G__21048;
count__21037 = G__21049;
i__21038 = G__21050;
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
var G__21051 = cljs.core.deref.call(null,description__$1.parent);
var G__21052 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__21051;
components = G__21052;
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
var befores = speclj.running.collect_components.call(null,(function (p1__21053_SHARP_){
return cljs.core.deref.call(null,p1__21053_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__21054_SHARP_){
return cljs.core.deref.call(null,p1__21054_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__21055_SHARP_){
return cljs.core.deref.call(null,p1__21055_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__21056_SHARP_){
return p1__21056_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__21057_SHARP_){
return cljs.core.deref.call(null,p1__21057_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e21058){var e = e21058;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__21059(s__21060){
return (new cljs.core.LazySeq(null,(function (){
var s__21060__$1 = s__21060;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__21060__$1);
if(temp__5804__auto__){
var s__21060__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21060__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21060__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21062 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21061 = (0);
while(true){
if((i__21061 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__21061);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__21062,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__21063 = (i__21061 + (1));
i__21061 = G__21063;
continue;
} else {
var G__21064 = (i__21061 + (1));
i__21061 = G__21064;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21062),speclj$running$do_characteristics_$_iter__21059.call(null,cljs.core.chunk_rest.call(null,s__21060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21062),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__21060__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__21059.call(null,cljs.core.rest.call(null,s__21060__$2)));
} else {
var G__21065 = cljs.core.rest.call(null,s__21060__$2);
s__21060__$1 = G__21065;
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
var G__21066 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__21067 = cljs.core.rest.call(null,children);
results__$1 = G__21066;
children = G__21067;
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
var var_names = cljs.core.map.call(null,(function (p1__21070_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__21070_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__21071_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__21071_SHARP_.unique_name)].join('');
}),withs);
var seq__21072_21104 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__21073_21105 = null;
var count__21074_21106 = (0);
var i__21075_21107 = (0);
while(true){
if((i__21075_21107 < count__21074_21106)){
var vec__21082_21108 = cljs.core._nth.call(null,chunk__21073_21105,i__21075_21107);
var n_21109 = cljs.core.nth.call(null,vec__21082_21108,(0),null);
var un_21110 = cljs.core.nth.call(null,vec__21082_21108,(1),null);
var code_21111 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21109)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_21110),";"].join('');
eval(code_21111);


var G__21112 = seq__21072_21104;
var G__21113 = chunk__21073_21105;
var G__21114 = count__21074_21106;
var G__21115 = (i__21075_21107 + (1));
seq__21072_21104 = G__21112;
chunk__21073_21105 = G__21113;
count__21074_21106 = G__21114;
i__21075_21107 = G__21115;
continue;
} else {
var temp__5804__auto___21116 = cljs.core.seq.call(null,seq__21072_21104);
if(temp__5804__auto___21116){
var seq__21072_21117__$1 = temp__5804__auto___21116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21072_21117__$1)){
var c__4556__auto___21118 = cljs.core.chunk_first.call(null,seq__21072_21117__$1);
var G__21119 = cljs.core.chunk_rest.call(null,seq__21072_21117__$1);
var G__21120 = c__4556__auto___21118;
var G__21121 = cljs.core.count.call(null,c__4556__auto___21118);
var G__21122 = (0);
seq__21072_21104 = G__21119;
chunk__21073_21105 = G__21120;
count__21074_21106 = G__21121;
i__21075_21107 = G__21122;
continue;
} else {
var vec__21085_21123 = cljs.core.first.call(null,seq__21072_21117__$1);
var n_21124 = cljs.core.nth.call(null,vec__21085_21123,(0),null);
var un_21125 = cljs.core.nth.call(null,vec__21085_21123,(1),null);
var code_21126 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21124)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_21125),";"].join('');
eval(code_21126);


var G__21127 = cljs.core.next.call(null,seq__21072_21117__$1);
var G__21128 = null;
var G__21129 = (0);
var G__21130 = (0);
seq__21072_21104 = G__21127;
chunk__21073_21105 = G__21128;
count__21074_21106 = G__21129;
i__21075_21107 = G__21130;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__21088_21131 = cljs.core.seq.call(null,var_names);
var chunk__21089_21132 = null;
var count__21090_21133 = (0);
var i__21091_21134 = (0);
while(true){
if((i__21091_21134 < count__21090_21133)){
var vec__21098_21135 = cljs.core._nth.call(null,chunk__21089_21132,i__21091_21134);
var n_21136 = cljs.core.nth.call(null,vec__21098_21135,(0),null);
var code_21137 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21136)," = null;"].join('');
eval(code_21137);


var G__21138 = seq__21088_21131;
var G__21139 = chunk__21089_21132;
var G__21140 = count__21090_21133;
var G__21141 = (i__21091_21134 + (1));
seq__21088_21131 = G__21138;
chunk__21089_21132 = G__21139;
count__21090_21133 = G__21140;
i__21091_21134 = G__21141;
continue;
} else {
var temp__5804__auto___21142 = cljs.core.seq.call(null,seq__21088_21131);
if(temp__5804__auto___21142){
var seq__21088_21143__$1 = temp__5804__auto___21142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21088_21143__$1)){
var c__4556__auto___21144 = cljs.core.chunk_first.call(null,seq__21088_21143__$1);
var G__21145 = cljs.core.chunk_rest.call(null,seq__21088_21143__$1);
var G__21146 = c__4556__auto___21144;
var G__21147 = cljs.core.count.call(null,c__4556__auto___21144);
var G__21148 = (0);
seq__21088_21131 = G__21145;
chunk__21089_21132 = G__21146;
count__21090_21133 = G__21147;
i__21091_21134 = G__21148;
continue;
} else {
var vec__21101_21149 = cljs.core.first.call(null,seq__21088_21143__$1);
var n_21150 = cljs.core.nth.call(null,vec__21101_21149,(0),null);
var code_21151 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21150)," = null;"].join('');
eval(code_21151);


var G__21152 = cljs.core.next.call(null,seq__21088_21143__$1);
var G__21153 = null;
var G__21154 = (0);
var G__21155 = (0);
seq__21088_21131 = G__21152;
chunk__21089_21132 = G__21153;
count__21090_21133 = G__21154;
i__21091_21134 = G__21155;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__21156_SHARP_){
return p1__21156_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_21157 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_21157.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_21158 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_21158.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_21159 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_21159.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_21160 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_21160.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map

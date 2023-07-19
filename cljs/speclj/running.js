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
var G__5772 = parent;
component = G__5772;
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

var G__5773 = parent;
component = G__5773;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__5774 = cljs.core.seq.call(null,descriptions);
var chunk__5775 = null;
var count__5776 = (0);
var i__5777 = (0);
while(true){
if((i__5777 < count__5776)){
var component = cljs.core._nth.call(null,chunk__5775,i__5777);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__5778 = seq__5774;
var G__5779 = chunk__5775;
var G__5780 = count__5776;
var G__5781 = (i__5777 + (1));
seq__5774 = G__5778;
chunk__5775 = G__5779;
count__5776 = G__5780;
i__5777 = G__5781;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5774);
if(temp__5804__auto__){
var seq__5774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5774__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5774__$1);
var G__5782 = cljs.core.chunk_rest.call(null,seq__5774__$1);
var G__5783 = c__4556__auto__;
var G__5784 = cljs.core.count.call(null,c__4556__auto__);
var G__5785 = (0);
seq__5774 = G__5782;
chunk__5775 = G__5783;
count__5776 = G__5784;
i__5777 = G__5785;
continue;
} else {
var component = cljs.core.first.call(null,seq__5774__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__5786 = cljs.core.next.call(null,seq__5774__$1);
var G__5787 = null;
var G__5788 = (0);
var G__5789 = (0);
seq__5774 = G__5786;
chunk__5775 = G__5787;
count__5776 = G__5788;
i__5777 = G__5789;
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
var seq__5790 = cljs.core.seq.call(null,characteristics);
var chunk__5792 = null;
var count__5793 = (0);
var i__5794 = (0);
while(true){
if((i__5794 < count__5793)){
var characteristic = cljs.core._nth.call(null,chunk__5792,i__5794);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__5796 = seq__5790;
var G__5797 = chunk__5792;
var G__5798 = count__5793;
var G__5799 = (i__5794 + (1));
seq__5790 = G__5796;
chunk__5792 = G__5797;
count__5793 = G__5798;
i__5794 = G__5799;
continue;
} else {
var G__5800 = seq__5790;
var G__5801 = chunk__5792;
var G__5802 = count__5793;
var G__5803 = (i__5794 + (1));
seq__5790 = G__5800;
chunk__5792 = G__5801;
count__5793 = G__5802;
i__5794 = G__5803;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5790);
if(temp__5804__auto__){
var seq__5790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5790__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5790__$1);
var G__5804 = cljs.core.chunk_rest.call(null,seq__5790__$1);
var G__5805 = c__4556__auto__;
var G__5806 = cljs.core.count.call(null,c__4556__auto__);
var G__5807 = (0);
seq__5790 = G__5804;
chunk__5792 = G__5805;
count__5793 = G__5806;
i__5794 = G__5807;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__5790__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__5808 = cljs.core.next.call(null,seq__5790__$1);
var G__5809 = null;
var G__5810 = (0);
var G__5811 = (0);
seq__5790 = G__5808;
chunk__5792 = G__5809;
count__5793 = G__5810;
i__5794 = G__5811;
continue;
} else {
var G__5812 = cljs.core.next.call(null,seq__5790__$1);
var G__5813 = null;
var G__5814 = (0);
var G__5815 = (0);
seq__5790 = G__5812;
chunk__5792 = G__5813;
count__5793 = G__5814;
i__5794 = G__5815;
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
var seq__5816_5820 = cljs.core.seq.call(null,descriptions);
var chunk__5817_5821 = null;
var count__5818_5822 = (0);
var i__5819_5823 = (0);
while(true){
if((i__5819_5823 < count__5818_5822)){
var description_5824 = cljs.core._nth.call(null,chunk__5817_5821,i__5819_5823);
speclj.running.scan_for_focus_BANG_.call(null,description_5824);


var G__5825 = seq__5816_5820;
var G__5826 = chunk__5817_5821;
var G__5827 = count__5818_5822;
var G__5828 = (i__5819_5823 + (1));
seq__5816_5820 = G__5825;
chunk__5817_5821 = G__5826;
count__5818_5822 = G__5827;
i__5819_5823 = G__5828;
continue;
} else {
var temp__5804__auto___5829 = cljs.core.seq.call(null,seq__5816_5820);
if(temp__5804__auto___5829){
var seq__5816_5830__$1 = temp__5804__auto___5829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5816_5830__$1)){
var c__4556__auto___5831 = cljs.core.chunk_first.call(null,seq__5816_5830__$1);
var G__5832 = cljs.core.chunk_rest.call(null,seq__5816_5830__$1);
var G__5833 = c__4556__auto___5831;
var G__5834 = cljs.core.count.call(null,c__4556__auto___5831);
var G__5835 = (0);
seq__5816_5820 = G__5832;
chunk__5817_5821 = G__5833;
count__5818_5822 = G__5834;
i__5819_5823 = G__5835;
continue;
} else {
var description_5836 = cljs.core.first.call(null,seq__5816_5830__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_5836);


var G__5837 = cljs.core.next.call(null,seq__5816_5830__$1);
var G__5838 = null;
var G__5839 = (0);
var G__5840 = (0);
seq__5816_5820 = G__5837;
chunk__5817_5821 = G__5838;
count__5818_5822 = G__5839;
i__5819_5823 = G__5840;
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
var seq__5841 = cljs.core.seq.call(null,components);
var chunk__5842 = null;
var count__5843 = (0);
var i__5844 = (0);
while(true){
if((i__5844 < count__5843)){
var component = cljs.core._nth.call(null,chunk__5842,i__5844);
component.body.call(null);


var G__5845 = seq__5841;
var G__5846 = chunk__5842;
var G__5847 = count__5843;
var G__5848 = (i__5844 + (1));
seq__5841 = G__5845;
chunk__5842 = G__5846;
count__5843 = G__5847;
i__5844 = G__5848;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5841);
if(temp__5804__auto__){
var seq__5841__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5841__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5841__$1);
var G__5849 = cljs.core.chunk_rest.call(null,seq__5841__$1);
var G__5850 = c__4556__auto__;
var G__5851 = cljs.core.count.call(null,c__4556__auto__);
var G__5852 = (0);
seq__5841 = G__5849;
chunk__5842 = G__5850;
count__5843 = G__5851;
i__5844 = G__5852;
continue;
} else {
var component = cljs.core.first.call(null,seq__5841__$1);
component.body.call(null);


var G__5853 = cljs.core.next.call(null,seq__5841__$1);
var G__5854 = null;
var G__5855 = (0);
var G__5856 = (0);
seq__5841 = G__5853;
chunk__5842 = G__5854;
count__5843 = G__5855;
i__5844 = G__5856;
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
var seq__5857 = cljs.core.seq.call(null,withs);
var chunk__5858 = null;
var count__5859 = (0);
var i__5860 = (0);
while(true){
if((i__5860 < count__5859)){
var with$ = cljs.core._nth.call(null,chunk__5858,i__5860);
speclj.components.reset_with.call(null,with$);


var G__5861 = seq__5857;
var G__5862 = chunk__5858;
var G__5863 = count__5859;
var G__5864 = (i__5860 + (1));
seq__5857 = G__5861;
chunk__5858 = G__5862;
count__5859 = G__5863;
i__5860 = G__5864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5857);
if(temp__5804__auto__){
var seq__5857__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5857__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5857__$1);
var G__5865 = cljs.core.chunk_rest.call(null,seq__5857__$1);
var G__5866 = c__4556__auto__;
var G__5867 = cljs.core.count.call(null,c__4556__auto__);
var G__5868 = (0);
seq__5857 = G__5865;
chunk__5858 = G__5866;
count__5859 = G__5867;
i__5860 = G__5868;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__5857__$1);
speclj.components.reset_with.call(null,with$);


var G__5869 = cljs.core.next.call(null,seq__5857__$1);
var G__5870 = null;
var G__5871 = (0);
var G__5872 = (0);
seq__5857 = G__5869;
chunk__5858 = G__5870;
count__5859 = G__5871;
i__5860 = G__5872;
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
var G__5873 = cljs.core.deref.call(null,description__$1.parent);
var G__5874 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__5873;
components = G__5874;
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
var befores = speclj.running.collect_components.call(null,(function (p1__5875_SHARP_){
return cljs.core.deref.call(null,p1__5875_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__5876_SHARP_){
return cljs.core.deref.call(null,p1__5876_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__5877_SHARP_){
return cljs.core.deref.call(null,p1__5877_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__5878_SHARP_){
return p1__5878_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__5879_SHARP_){
return cljs.core.deref.call(null,p1__5879_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e5880){var e = e5880;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__5881(s__5882){
return (new cljs.core.LazySeq(null,(function (){
var s__5882__$1 = s__5882;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__5882__$1);
if(temp__5804__auto__){
var s__5882__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5882__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5882__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5884 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5883 = (0);
while(true){
if((i__5883 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__5883);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__5884,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__5885 = (i__5883 + (1));
i__5883 = G__5885;
continue;
} else {
var G__5886 = (i__5883 + (1));
i__5883 = G__5886;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5884),speclj$running$do_characteristics_$_iter__5881.call(null,cljs.core.chunk_rest.call(null,s__5882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5884),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__5882__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__5881.call(null,cljs.core.rest.call(null,s__5882__$2)));
} else {
var G__5887 = cljs.core.rest.call(null,s__5882__$2);
s__5882__$1 = G__5887;
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
var G__5888 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__5889 = cljs.core.rest.call(null,children);
results__$1 = G__5888;
children = G__5889;
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
var var_names = cljs.core.map.call(null,(function (p1__5892_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5892_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__5893_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5893_SHARP_.unique_name)].join('');
}),withs);
var seq__5894_5926 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__5895_5927 = null;
var count__5896_5928 = (0);
var i__5897_5929 = (0);
while(true){
if((i__5897_5929 < count__5896_5928)){
var vec__5904_5930 = cljs.core._nth.call(null,chunk__5895_5927,i__5897_5929);
var n_5931 = cljs.core.nth.call(null,vec__5904_5930,(0),null);
var un_5932 = cljs.core.nth.call(null,vec__5904_5930,(1),null);
var code_5933 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5931)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_5932),";"].join('');
eval(code_5933);


var G__5934 = seq__5894_5926;
var G__5935 = chunk__5895_5927;
var G__5936 = count__5896_5928;
var G__5937 = (i__5897_5929 + (1));
seq__5894_5926 = G__5934;
chunk__5895_5927 = G__5935;
count__5896_5928 = G__5936;
i__5897_5929 = G__5937;
continue;
} else {
var temp__5804__auto___5938 = cljs.core.seq.call(null,seq__5894_5926);
if(temp__5804__auto___5938){
var seq__5894_5939__$1 = temp__5804__auto___5938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5894_5939__$1)){
var c__4556__auto___5940 = cljs.core.chunk_first.call(null,seq__5894_5939__$1);
var G__5941 = cljs.core.chunk_rest.call(null,seq__5894_5939__$1);
var G__5942 = c__4556__auto___5940;
var G__5943 = cljs.core.count.call(null,c__4556__auto___5940);
var G__5944 = (0);
seq__5894_5926 = G__5941;
chunk__5895_5927 = G__5942;
count__5896_5928 = G__5943;
i__5897_5929 = G__5944;
continue;
} else {
var vec__5907_5945 = cljs.core.first.call(null,seq__5894_5939__$1);
var n_5946 = cljs.core.nth.call(null,vec__5907_5945,(0),null);
var un_5947 = cljs.core.nth.call(null,vec__5907_5945,(1),null);
var code_5948 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5946)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_5947),";"].join('');
eval(code_5948);


var G__5949 = cljs.core.next.call(null,seq__5894_5939__$1);
var G__5950 = null;
var G__5951 = (0);
var G__5952 = (0);
seq__5894_5926 = G__5949;
chunk__5895_5927 = G__5950;
count__5896_5928 = G__5951;
i__5897_5929 = G__5952;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__5910_5953 = cljs.core.seq.call(null,var_names);
var chunk__5911_5954 = null;
var count__5912_5955 = (0);
var i__5913_5956 = (0);
while(true){
if((i__5913_5956 < count__5912_5955)){
var vec__5920_5957 = cljs.core._nth.call(null,chunk__5911_5954,i__5913_5956);
var n_5958 = cljs.core.nth.call(null,vec__5920_5957,(0),null);
var code_5959 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5958)," = null;"].join('');
eval(code_5959);


var G__5960 = seq__5910_5953;
var G__5961 = chunk__5911_5954;
var G__5962 = count__5912_5955;
var G__5963 = (i__5913_5956 + (1));
seq__5910_5953 = G__5960;
chunk__5911_5954 = G__5961;
count__5912_5955 = G__5962;
i__5913_5956 = G__5963;
continue;
} else {
var temp__5804__auto___5964 = cljs.core.seq.call(null,seq__5910_5953);
if(temp__5804__auto___5964){
var seq__5910_5965__$1 = temp__5804__auto___5964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5910_5965__$1)){
var c__4556__auto___5966 = cljs.core.chunk_first.call(null,seq__5910_5965__$1);
var G__5967 = cljs.core.chunk_rest.call(null,seq__5910_5965__$1);
var G__5968 = c__4556__auto___5966;
var G__5969 = cljs.core.count.call(null,c__4556__auto___5966);
var G__5970 = (0);
seq__5910_5953 = G__5967;
chunk__5911_5954 = G__5968;
count__5912_5955 = G__5969;
i__5913_5956 = G__5970;
continue;
} else {
var vec__5923_5971 = cljs.core.first.call(null,seq__5910_5965__$1);
var n_5972 = cljs.core.nth.call(null,vec__5923_5971,(0),null);
var code_5973 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5972)," = null;"].join('');
eval(code_5973);


var G__5974 = cljs.core.next.call(null,seq__5910_5965__$1);
var G__5975 = null;
var G__5976 = (0);
var G__5977 = (0);
seq__5910_5953 = G__5974;
chunk__5911_5954 = G__5975;
count__5912_5955 = G__5976;
i__5913_5956 = G__5977;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__5978_SHARP_){
return p1__5978_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_5979 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_5979.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_5980 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_5980.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_5981 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_5981.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_5982 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_5982.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map

// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('reagent.core');
goog.require('ttt.components');
goog.require('ttt.util');
ttt.core_spec.contains_like_QMARK_ = (function ttt$core_spec$contains_like_QMARK_(coll,target){
return clojure.set.subset_QMARK_.call(null,clojure.set(target),clojure.set(coll));
});
ttt.core_spec.get_by_type = (function ttt$core_spec$get_by_type(coll,target){
var tags = cljs.core.filter.call(null,cljs.core.sequential_QMARK_,coll);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__8398_SHARP_){
return cljs.core._EQ_.call(null,target,cljs.core.first.call(null,p1__8398_SHARP_));
}),tags),(function (){var iter__4529__auto__ = (function ttt$core_spec$get_by_type_$_iter__8399(s__8400){
return (new cljs.core.LazySeq(null,(function (){
var s__8400__$1 = s__8400;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__8400__$1);
if(temp__5804__auto__){
var s__8400__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8400__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__8400__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__8402 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__8401 = (0);
while(true){
if((i__8401 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__8401);
cljs.core.chunk_append.call(null,b__8402,ttt.core_spec.get_by_type.call(null,tag,target));

var G__8403 = (i__8401 + (1));
i__8401 = G__8403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),ttt$core_spec$get_by_type_$_iter__8399.call(null,cljs.core.chunk_rest.call(null,s__8400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),null);
}
} else {
var tag = cljs.core.first.call(null,s__8400__$2);
return cljs.core.cons.call(null,ttt.core_spec.get_by_type.call(null,tag,target),ttt$core_spec$get_by_type_$_iter__8399.call(null,cljs.core.rest.call(null,s__8400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tags);
})());
});
var description__7935__auto___8410 = speclj.components.new_description.call(null,"state changer",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__8404_8411 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8405_8412 = description__7935__auto___8410;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8405_8412);

try{var seq__8406_8413 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updates game state",((function (_STAR_parent_description_STAR__orig_val__8404_8411,_STAR_parent_description_STAR__temp_val__8405_8412,description__7935__auto___8410){
return (function (){
ttt.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"some-val","some-val",-997293714));

var expected__8068__auto__ = new cljs.core.Keyword(null,"some-val","some-val",-997293714);
var actual__8069__auto__ = new cljs.core.Keyword(null,"some-key","some-key",-1462369503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__8068__auto__,actual__8069__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8068__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8068__auto__)),speclj.platform.endl,"     got: ",(((actual__8069__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8069__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8404_8411,_STAR_parent_description_STAR__temp_val__8405_8412,description__7935__auto___8410))
,false)],null)));
var chunk__8407_8414 = null;
var count__8408_8415 = (0);
var i__8409_8416 = (0);
while(true){
if((i__8409_8416 < count__8408_8415)){
var component__7936__auto___8417 = cljs.core._nth.call(null,chunk__8407_8414,i__8409_8416);
speclj.components.install.call(null,component__7936__auto___8417,description__7935__auto___8410);


var G__8418 = seq__8406_8413;
var G__8419 = chunk__8407_8414;
var G__8420 = count__8408_8415;
var G__8421 = (i__8409_8416 + (1));
seq__8406_8413 = G__8418;
chunk__8407_8414 = G__8419;
count__8408_8415 = G__8420;
i__8409_8416 = G__8421;
continue;
} else {
var temp__5804__auto___8422 = cljs.core.seq.call(null,seq__8406_8413);
if(temp__5804__auto___8422){
var seq__8406_8423__$1 = temp__5804__auto___8422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8406_8423__$1)){
var c__4556__auto___8424 = cljs.core.chunk_first.call(null,seq__8406_8423__$1);
var G__8425 = cljs.core.chunk_rest.call(null,seq__8406_8423__$1);
var G__8426 = c__4556__auto___8424;
var G__8427 = cljs.core.count.call(null,c__4556__auto___8424);
var G__8428 = (0);
seq__8406_8413 = G__8425;
chunk__8407_8414 = G__8426;
count__8408_8415 = G__8427;
i__8409_8416 = G__8428;
continue;
} else {
var component__7936__auto___8429 = cljs.core.first.call(null,seq__8406_8423__$1);
speclj.components.install.call(null,component__7936__auto___8429,description__7935__auto___8410);


var G__8430 = cljs.core.next.call(null,seq__8406_8423__$1);
var G__8431 = null;
var G__8432 = (0);
var G__8433 = (0);
seq__8406_8413 = G__8430;
chunk__8407_8414 = G__8431;
count__8408_8415 = G__8432;
i__8409_8416 = G__8433;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8404_8411);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7935__auto___8410);
}

var description__7935__auto___8440 = speclj.components.new_description.call(null,"radio menu component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__8434_8441 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8435_8442 = description__7935__auto___8440;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8435_8442);

try{var seq__8436_8443 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"labels section",((function (_STAR_parent_description_STAR__orig_val__8434_8441,_STAR_parent_description_STAR__temp_val__8435_8442,description__7935__auto___8440){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),cljs.core.PersistentVector.EMPTY);
var expected__8119__auto___8447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__8120__auto___8448 = menu;
if((actual__8120__auto___8448 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8447 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8447)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto___8447 === 'string') && (typeof actual__8120__auto___8448 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto___8448.indexOf(expected__8119__auto___8447))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8447 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8447)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8448 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8448))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto___8447)) && (typeof actual__8120__auto___8448 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto___8447,actual__8120__auto___8448))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto___8448 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8448)),speclj.platform.endl,"to match: ",(((expected__8119__auto___8447 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8447))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto___8448)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto___8448,expected__8119__auto___8447)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8447 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8447)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto___8448 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8448))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto___8448)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto___8447,p1__8118__8121__auto__);
}),actual__8120__auto___8448))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8447 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8447)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8448 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8448))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto___8447 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto___8447)));
var type_b__8050__auto__ = (((actual__8120__auto___8448 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto___8448)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8119__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
var actual__8120__auto__ = menu;
if((actual__8120__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto__ === 'string') && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto__.indexOf(expected__8119__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto__)) && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto__,actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__)),speclj.platform.endl,"to match: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto__,expected__8119__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto__,p1__8118__8121__auto__);
}),actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto__)));
var type_b__8050__auto__ = (((actual__8120__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8434_8441,_STAR_parent_description_STAR__temp_val__8435_8442,description__7935__auto___8440))
,false),speclj.components.new_characteristic.call(null,"sets value and name for option",((function (_STAR_parent_description_STAR__orig_val__8434_8441,_STAR_parent_description_STAR__temp_val__8435_8442,description__7935__auto___8440){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt1","opt1",-577916500)], null));
var expected__8119__auto___8449 = new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816);
var actual__8120__auto___8450 = menu;
if((actual__8120__auto___8450 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8449 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8449)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto___8449 === 'string') && (typeof actual__8120__auto___8450 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto___8450.indexOf(expected__8119__auto___8449))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8449 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8449)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8450 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8450))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto___8449)) && (typeof actual__8120__auto___8450 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto___8449,actual__8120__auto___8450))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto___8450 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8450)),speclj.platform.endl,"to match: ",(((expected__8119__auto___8449 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8449))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto___8450)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto___8450,expected__8119__auto___8449)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8449 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8449)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto___8450 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8450))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto___8450)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto___8449,p1__8118__8121__auto__);
}),actual__8120__auto___8450))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8449 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8449)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8450 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8450))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto___8449 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto___8449)));
var type_b__8050__auto__ = (((actual__8120__auto___8450 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto___8450)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8119__auto___8451 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__8120__auto___8452 = menu;
if((actual__8120__auto___8452 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8451 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8451)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto___8451 === 'string') && (typeof actual__8120__auto___8452 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto___8452.indexOf(expected__8119__auto___8451))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8451 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8451)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8452 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8452))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto___8451)) && (typeof actual__8120__auto___8452 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto___8451,actual__8120__auto___8452))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto___8452 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8452)),speclj.platform.endl,"to match: ",(((expected__8119__auto___8451 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8451))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto___8452)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto___8452,expected__8119__auto___8451)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8451 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8451)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto___8452 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8452))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto___8452)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto___8451,p1__8118__8121__auto__);
}),actual__8120__auto___8452))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8451 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8451)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8452 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8452))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto___8451 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto___8451)));
var type_b__8050__auto__ = (((actual__8120__auto___8452 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto___8452)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8119__auto___8453 = "opt1";
var actual__8120__auto___8454 = cljs.core.last.call(null,menu);
if((actual__8120__auto___8454 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8453 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8453)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto___8453 === 'string') && (typeof actual__8120__auto___8454 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto___8454.indexOf(expected__8119__auto___8453))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8453 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8453)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8454 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8454))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto___8453)) && (typeof actual__8120__auto___8454 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto___8453,actual__8120__auto___8454))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto___8454 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8454)),speclj.platform.endl,"to match: ",(((expected__8119__auto___8453 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8453))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto___8454)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto___8454,expected__8119__auto___8453)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8453 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8453)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto___8454 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8454))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto___8454)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto___8453,p1__8118__8121__auto__);
}),actual__8120__auto___8454))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto___8453 == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto___8453)),speclj.platform.endl,"to be in: ",(((actual__8120__auto___8454 == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto___8454))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto___8453 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto___8453)));
var type_b__8050__auto__ = (((actual__8120__auto___8454 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto___8454)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8119__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
var actual__8120__auto__ = cljs.core.first.call(null,cljs.core.last.call(null,menu));
if((actual__8120__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto__ === 'string') && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto__.indexOf(expected__8119__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto__)) && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto__,actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__)),speclj.platform.endl,"to match: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto__,expected__8119__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto__,p1__8118__8121__auto__);
}),actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto__)));
var type_b__8050__auto__ = (((actual__8120__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8434_8441,_STAR_parent_description_STAR__temp_val__8435_8442,description__7935__auto___8440))
,false)],null)));
var chunk__8437_8444 = null;
var count__8438_8445 = (0);
var i__8439_8446 = (0);
while(true){
if((i__8439_8446 < count__8438_8445)){
var component__7936__auto___8455 = cljs.core._nth.call(null,chunk__8437_8444,i__8439_8446);
speclj.components.install.call(null,component__7936__auto___8455,description__7935__auto___8440);


var G__8456 = seq__8436_8443;
var G__8457 = chunk__8437_8444;
var G__8458 = count__8438_8445;
var G__8459 = (i__8439_8446 + (1));
seq__8436_8443 = G__8456;
chunk__8437_8444 = G__8457;
count__8438_8445 = G__8458;
i__8439_8446 = G__8459;
continue;
} else {
var temp__5804__auto___8460 = cljs.core.seq.call(null,seq__8436_8443);
if(temp__5804__auto___8460){
var seq__8436_8461__$1 = temp__5804__auto___8460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8436_8461__$1)){
var c__4556__auto___8462 = cljs.core.chunk_first.call(null,seq__8436_8461__$1);
var G__8463 = cljs.core.chunk_rest.call(null,seq__8436_8461__$1);
var G__8464 = c__4556__auto___8462;
var G__8465 = cljs.core.count.call(null,c__4556__auto___8462);
var G__8466 = (0);
seq__8436_8443 = G__8463;
chunk__8437_8444 = G__8464;
count__8438_8445 = G__8465;
i__8439_8446 = G__8466;
continue;
} else {
var component__7936__auto___8467 = cljs.core.first.call(null,seq__8436_8461__$1);
speclj.components.install.call(null,component__7936__auto___8467,description__7935__auto___8440);


var G__8468 = cljs.core.next.call(null,seq__8436_8461__$1);
var G__8469 = null;
var G__8470 = (0);
var G__8471 = (0);
seq__8436_8443 = G__8468;
chunk__8437_8444 = G__8469;
count__8438_8445 = G__8470;
i__8439_8446 = G__8471;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8434_8441);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7935__auto___8440);
}

var description__7935__auto___8522 = speclj.components.new_description.call(null,"options-bar component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__8472_8523 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8473_8524 = description__7935__auto___8522;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8473_8524);

try{var seq__8474_8525 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7935__auto____$1 = speclj.components.new_description.call(null,"difficulty section",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__8500_8529 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8501_8530 = description__7935__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8501_8530);

try{var seq__8502_8531 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522){
return (function (it__8296__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__8514 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__8515 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__8515);

try{return it__8296__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__8514);
}});})(_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522))
),speclj.components.new_characteristic.call(null,"creates radio menu for game modes",((function (_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522){
return (function (){
var radio_menu_orig_val__8516 = ttt.components.radio_menu;
var radio_menu_temp_val__8517 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"game mode menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__8517);

try{var expected__8119__auto__ = "game mode menu";
var actual__8120__auto__ = ttt.components.options_bar.call(null);
if((actual__8120__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto__ === 'string') && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto__.indexOf(expected__8119__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto__)) && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto__,actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__)),speclj.platform.endl,"to match: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto__,expected__8119__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto__,p1__8118__8121__auto__);
}),actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto__)));
var type_b__8050__auto__ = (((actual__8120__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__8516);
}});})(_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for difficulty",((function (_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522){
return (function (){
var radio_menu_orig_val__8518 = ttt.components.radio_menu;
var radio_menu_temp_val__8519 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"difficulty menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__8519);

try{var expected__8119__auto__ = "difficulty menu";
var actual__8120__auto__ = ttt.components.options_bar.call(null);
if((actual__8120__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto__ === 'string') && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto__.indexOf(expected__8119__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto__)) && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto__,actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__)),speclj.platform.endl,"to match: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto__,expected__8119__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto__,p1__8118__8121__auto__);
}),actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto__)));
var type_b__8050__auto__ = (((actual__8120__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__8518);
}});})(_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for game size",((function (_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522){
return (function (){
var radio_menu_orig_val__8520 = ttt.components.radio_menu;
var radio_menu_temp_val__8521 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"size menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__8521);

try{var expected__8119__auto__ = "size menu";
var actual__8120__auto__ = ttt.components.options_bar.call(null);
if((actual__8120__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8119__auto__ === 'string') && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8120__auto__.indexOf(expected__8119__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8119__auto__)) && (typeof actual__8120__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8119__auto__,actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__)),speclj.platform.endl,"to match: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8120__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8120__auto__,expected__8119__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8120__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8118__8121__auto__){
return cljs.core._EQ_.call(null,expected__8119__auto__,p1__8118__8121__auto__);
}),actual__8120__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8119__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8119__auto__)),speclj.platform.endl,"to be in: ",(((actual__8120__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8120__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8119__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8119__auto__)));
var type_b__8050__auto__ = (((actual__8120__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8120__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__8520);
}});})(_STAR_parent_description_STAR__orig_val__8500_8529,_STAR_parent_description_STAR__temp_val__8501_8530,description__7935__auto____$1,_STAR_parent_description_STAR__orig_val__8472_8523,_STAR_parent_description_STAR__temp_val__8473_8524,description__7935__auto___8522))
,false)],null)));
var chunk__8503_8532 = null;
var count__8504_8533 = (0);
var i__8505_8534 = (0);
while(true){
if((i__8505_8534 < count__8504_8533)){
var component__7936__auto___8535 = cljs.core._nth.call(null,chunk__8503_8532,i__8505_8534);
speclj.components.install.call(null,component__7936__auto___8535,description__7935__auto____$1);


var G__8536 = seq__8502_8531;
var G__8537 = chunk__8503_8532;
var G__8538 = count__8504_8533;
var G__8539 = (i__8505_8534 + (1));
seq__8502_8531 = G__8536;
chunk__8503_8532 = G__8537;
count__8504_8533 = G__8538;
i__8505_8534 = G__8539;
continue;
} else {
var temp__5804__auto___8540 = cljs.core.seq.call(null,seq__8502_8531);
if(temp__5804__auto___8540){
var seq__8502_8541__$1 = temp__5804__auto___8540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8502_8541__$1)){
var c__4556__auto___8542 = cljs.core.chunk_first.call(null,seq__8502_8541__$1);
var G__8543 = cljs.core.chunk_rest.call(null,seq__8502_8541__$1);
var G__8544 = c__4556__auto___8542;
var G__8545 = cljs.core.count.call(null,c__4556__auto___8542);
var G__8546 = (0);
seq__8502_8531 = G__8543;
chunk__8503_8532 = G__8544;
count__8504_8533 = G__8545;
i__8505_8534 = G__8546;
continue;
} else {
var component__7936__auto___8547 = cljs.core.first.call(null,seq__8502_8541__$1);
speclj.components.install.call(null,component__7936__auto___8547,description__7935__auto____$1);


var G__8548 = cljs.core.next.call(null,seq__8502_8541__$1);
var G__8549 = null;
var G__8550 = (0);
var G__8551 = (0);
seq__8502_8531 = G__8548;
chunk__8503_8532 = G__8549;
count__8504_8533 = G__8550;
i__8505_8534 = G__8551;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8500_8529);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7935__auto____$1);
}

return description__7935__auto____$1;
})()],null)));
var chunk__8475_8526 = null;
var count__8476_8527 = (0);
var i__8477_8528 = (0);
while(true){
if((i__8477_8528 < count__8476_8527)){
var component__7936__auto___8552 = cljs.core._nth.call(null,chunk__8475_8526,i__8477_8528);
speclj.components.install.call(null,component__7936__auto___8552,description__7935__auto___8522);


var G__8553 = seq__8474_8525;
var G__8554 = chunk__8475_8526;
var G__8555 = count__8476_8527;
var G__8556 = (i__8477_8528 + (1));
seq__8474_8525 = G__8553;
chunk__8475_8526 = G__8554;
count__8476_8527 = G__8555;
i__8477_8528 = G__8556;
continue;
} else {
var temp__5804__auto___8557 = cljs.core.seq.call(null,seq__8474_8525);
if(temp__5804__auto___8557){
var seq__8474_8558__$1 = temp__5804__auto___8557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8474_8558__$1)){
var c__4556__auto___8559 = cljs.core.chunk_first.call(null,seq__8474_8558__$1);
var G__8560 = cljs.core.chunk_rest.call(null,seq__8474_8558__$1);
var G__8561 = c__4556__auto___8559;
var G__8562 = cljs.core.count.call(null,c__4556__auto___8559);
var G__8563 = (0);
seq__8474_8525 = G__8560;
chunk__8475_8526 = G__8561;
count__8476_8527 = G__8562;
i__8477_8528 = G__8563;
continue;
} else {
var component__7936__auto___8564 = cljs.core.first.call(null,seq__8474_8558__$1);
speclj.components.install.call(null,component__7936__auto___8564,description__7935__auto___8522);


var G__8565 = cljs.core.next.call(null,seq__8474_8558__$1);
var G__8566 = null;
var G__8567 = (0);
var G__8568 = (0);
seq__8474_8525 = G__8565;
chunk__8475_8526 = G__8566;
count__8476_8527 = G__8567;
i__8477_8528 = G__8568;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8472_8523);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7935__auto___8522);
}

var description__7935__auto___8577 = speclj.components.new_description.call(null,"game board component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__8571_8578 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8572_8579 = description__7935__auto___8577;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8572_8579);

try{var seq__8573_8580 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"indexes each position on board",((function (_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577){
return (function (){
var expected__8068__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null);
var actual__8069__auto__ = ttt.components.idx_board.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null));
if(cljs.core._EQ_.call(null,expected__8068__auto__,actual__8069__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8068__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8068__auto__)),speclj.platform.endl,"     got: ",(((actual__8069__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8069__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577))
,false),speclj.components.new_characteristic.call(null,"creates buttons with appropriate id for index",((function (_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__8068__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__8069__auto__ = cljs.core.map.call(null,(function (p1__8569_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8569_SHARP_));
}),buttons);
if(cljs.core._EQ_.call(null,expected__8068__auto__,actual__8069__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8068__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8068__auto__)),speclj.platform.endl,"     got: ",(((actual__8069__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8069__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577))
,false),speclj.components.new_characteristic.call(null,"progresses game state",((function (_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

ttt.components.progress_game.call(null,(0));

var expected__8068__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",null,null,null,null,null,null,null,null], null);
var actual__8069__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__8068__auto__,actual__8069__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8068__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8068__auto__)),speclj.platform.endl,"     got: ",(((actual__8069__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8069__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577))
,false),speclj.components.new_characteristic.call(null,"sets on-click event for button click",((function (_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577){
return (function (){
var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__8128__auto__ = null;
var actual__8129__auto__ = cljs.core.map.call(null,(function (p1__8570_SHARP_){
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8570_SHARP_));
}),buttons);
if((actual__8129__auto__ == null)){
return null;
} else {
if(((typeof expected__8128__auto__ === 'string') && (typeof actual__8129__auto__ === 'string'))){
if((!(cljs.core._EQ_.call(null,(-1),actual__8129__auto__.indexOf(expected__8128__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8128__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8128__auto__)),speclj.platform.endl,"not to be in: ",(((actual__8129__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8129__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8128__auto__)) && (typeof actual__8129__auto__ === 'string'))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8128__auto__,actual__8129__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8129__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8129__auto__)),speclj.platform.endl,"not to match: ",(((expected__8128__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8128__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8129__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8129__auto__,expected__8128__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8128__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8128__auto__)),speclj.platform.endl,"not to be a key in: ",(((actual__8129__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8129__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8129__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8127__8130__auto__){
return cljs.core._EQ_.call(null,expected__8128__auto__,p1__8127__8130__auto__);
}),actual__8129__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8128__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8128__auto__)),speclj.platform.endl,"not to be in: ",(((actual__8129__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8129__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8049__auto__ = (((expected__8128__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8128__auto__)));
var type_b__8050__auto__ = (((actual__8129__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8129__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8049__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8050__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577))
,false),speclj.components.new_characteristic.call(null,"displays game over message when appropriate",((function (_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577){
return (function (){
var headers_8584 = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__8068__auto___8585 = cljs.core.PersistentVector.EMPTY;
var actual__8069__auto___8586 = headers_8584;
if(cljs.core._EQ_.call(null,expected__8068__auto___8585,actual__8069__auto___8586)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8068__auto___8585 == null))?"nil":cljs.core.pr_str.call(null,expected__8068__auto___8585)),speclj.platform.endl,"     got: ",(((actual__8069__auto___8586 == null))?"nil":cljs.core.pr_str.call(null,actual__8069__auto___8586))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",null,"X","O",null,"X",null,null], null));

var headers = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__8068__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null)], null);
var actual__8069__auto__ = headers;
if(cljs.core._EQ_.call(null,expected__8068__auto__,actual__8069__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8068__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8068__auto__)),speclj.platform.endl,"     got: ",(((actual__8069__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8069__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8571_8578,_STAR_parent_description_STAR__temp_val__8572_8579,description__7935__auto___8577))
,false)],null)));
var chunk__8574_8581 = null;
var count__8575_8582 = (0);
var i__8576_8583 = (0);
while(true){
if((i__8576_8583 < count__8575_8582)){
var component__7936__auto___8587 = cljs.core._nth.call(null,chunk__8574_8581,i__8576_8583);
speclj.components.install.call(null,component__7936__auto___8587,description__7935__auto___8577);


var G__8588 = seq__8573_8580;
var G__8589 = chunk__8574_8581;
var G__8590 = count__8575_8582;
var G__8591 = (i__8576_8583 + (1));
seq__8573_8580 = G__8588;
chunk__8574_8581 = G__8589;
count__8575_8582 = G__8590;
i__8576_8583 = G__8591;
continue;
} else {
var temp__5804__auto___8592 = cljs.core.seq.call(null,seq__8573_8580);
if(temp__5804__auto___8592){
var seq__8573_8593__$1 = temp__5804__auto___8592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8573_8593__$1)){
var c__4556__auto___8594 = cljs.core.chunk_first.call(null,seq__8573_8593__$1);
var G__8595 = cljs.core.chunk_rest.call(null,seq__8573_8593__$1);
var G__8596 = c__4556__auto___8594;
var G__8597 = cljs.core.count.call(null,c__4556__auto___8594);
var G__8598 = (0);
seq__8573_8580 = G__8595;
chunk__8574_8581 = G__8596;
count__8575_8582 = G__8597;
i__8576_8583 = G__8598;
continue;
} else {
var component__7936__auto___8599 = cljs.core.first.call(null,seq__8573_8593__$1);
speclj.components.install.call(null,component__7936__auto___8599,description__7935__auto___8577);


var G__8600 = cljs.core.next.call(null,seq__8573_8593__$1);
var G__8601 = null;
var G__8602 = (0);
var G__8603 = (0);
seq__8573_8580 = G__8600;
chunk__8574_8581 = G__8601;
count__8575_8582 = G__8602;
i__8576_8583 = G__8603;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8571_8578);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7935__auto___8577);
}


//# sourceMappingURL=core_spec.js.map

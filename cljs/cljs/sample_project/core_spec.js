// Compiled by ClojureScript 1.10.764 {}
goog.provide('sample_project.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('sample_project.components');
var description__6263__auto___6606 = speclj.components.new_description.call(null,"hello-world component","sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__6600_6607 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__6601_6608 = description__6263__auto___6606;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__6601_6608);

try{var seq__6602_6609 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"says hello to the entire world",((function (_STAR_parent_description_STAR__orig_val__6600_6607,_STAR_parent_description_STAR__temp_val__6601_6608,description__6263__auto___6606){
return (function (){
var expected__6348__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, world!"], null);
var actual__6349__auto__ = sample_project.components.hello_world.call(null);
if(cljs.core._EQ_.call(null,expected__6348__auto__,actual__6349__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6348__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6348__auto__)),speclj.platform.endl,"     got: ",(((actual__6349__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6349__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__6600_6607,_STAR_parent_description_STAR__temp_val__6601_6608,description__6263__auto___6606))
)],null)));
var chunk__6603_6610 = null;
var count__6604_6611 = (0);
var i__6605_6612 = (0);
while(true){
if((i__6605_6612 < count__6604_6611)){
var component__6264__auto___6613 = cljs.core._nth.call(null,chunk__6603_6610,i__6605_6612);
speclj.components.install.call(null,component__6264__auto___6613,description__6263__auto___6606);


var G__6614 = seq__6602_6609;
var G__6615 = chunk__6603_6610;
var G__6616 = count__6604_6611;
var G__6617 = (i__6605_6612 + (1));
seq__6602_6609 = G__6614;
chunk__6603_6610 = G__6615;
count__6604_6611 = G__6616;
i__6605_6612 = G__6617;
continue;
} else {
var temp__5753__auto___6618 = cljs.core.seq.call(null,seq__6602_6609);
if(temp__5753__auto___6618){
var seq__6602_6619__$1 = temp__5753__auto___6618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6602_6619__$1)){
var c__4556__auto___6620 = cljs.core.chunk_first.call(null,seq__6602_6619__$1);
var G__6621 = cljs.core.chunk_rest.call(null,seq__6602_6619__$1);
var G__6622 = c__4556__auto___6620;
var G__6623 = cljs.core.count.call(null,c__4556__auto___6620);
var G__6624 = (0);
seq__6602_6609 = G__6621;
chunk__6603_6610 = G__6622;
count__6604_6611 = G__6623;
i__6605_6612 = G__6624;
continue;
} else {
var component__6264__auto___6625 = cljs.core.first.call(null,seq__6602_6619__$1);
speclj.components.install.call(null,component__6264__auto___6625,description__6263__auto___6606);


var G__6626 = cljs.core.next.call(null,seq__6602_6619__$1);
var G__6627 = null;
var G__6628 = (0);
var G__6629 = (0);
seq__6602_6609 = G__6626;
chunk__6603_6610 = G__6627;
count__6604_6611 = G__6628;
i__6605_6612 = G__6629;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__6600_6607);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6263__auto___6606);
}


//# sourceMappingURL=core_spec.js.map

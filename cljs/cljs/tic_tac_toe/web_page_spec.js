// Compiled by ClojureScript 1.10.764 {}
goog.provide('tic_tac_toe.web_page_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.play_game_web');
goog.require('tic_tac_toe.utility');
goog.require('reagent.core');
var description__7919__auto___22063 = speclj.components.new_description.call(null,"generates tic-tac-toe webpage",false,"tic-tac-toe.web-page-spec");
var _STAR_parent_description_STAR__orig_val__22013_22064 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__22014_22065 = description__7919__auto___22063;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__22014_22065);

try{var seq__22015_22066 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,11,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (it__8280__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__22041 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__22042 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__22042);

try{return it__8280__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__22041);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
),speclj.components.new_characteristic.call(null,"updates a piece of the game-map",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

var expected__8052__auto__ = tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null));
var actual__8053__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map));
if(cljs.core._EQ_.call(null,expected__8052__auto__,actual__8053__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8052__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8052__auto__)),speclj.platform.endl,"     got: ",(((actual__8053__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8053__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"updates board by conjoining key and value",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
tic_tac_toe.play_game_web.update_board.call(null,new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813));

var expected__8052__auto__ = cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null));
var actual__8053__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map));
if(cljs.core._EQ_.call(null,expected__8052__auto__,actual__8053__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8052__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8052__auto__)),speclj.platform.endl,"     got: ",(((actual__8053__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8053__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"converts keyword :x and :o to X and O and :e to ",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){

var expected__8052__auto___22070 = "X";
var actual__8053__auto___22071 = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__8052__auto___22070,actual__8053__auto___22071)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8052__auto___22070 == null))?"nil":cljs.core.pr_str.call(null,expected__8052__auto___22070)),speclj.platform.endl,"     got: ",(((actual__8053__auto___22071 == null))?"nil":cljs.core.pr_str.call(null,actual__8053__auto___22071))," (using =)"].join('')));
}

var expected__8052__auto___22072 = "O";
var actual__8053__auto___22073 = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__8052__auto___22072,actual__8053__auto___22073)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8052__auto___22072 == null))?"nil":cljs.core.pr_str.call(null,expected__8052__auto___22072)),speclj.platform.endl,"     got: ",(((actual__8053__auto___22073 == null))?"nil":cljs.core.pr_str.call(null,actual__8053__auto___22073))," (using =)"].join('')));
}

var expected__8052__auto__ = "";
var actual__8053__auto__ = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"e","e",1381269198));
if(cljs.core._EQ_.call(null,expected__8052__auto__,actual__8053__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8052__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8052__auto__)),speclj.platform.endl,"     got: ",(((actual__8053__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8053__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting a board",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var board_menu = tic_tac_toe.play_game_web.select_board_menu.call(null);
var input_field_orig_val__22043 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__22044 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__22044);

try{var expected__8103__auto___22074 = "Select a Board: ";
var actual__8104__auto___22075 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_menu);
if((actual__8104__auto___22075 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22074 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22074)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22074 === 'string') && (typeof actual__8104__auto___22075 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22075.indexOf(expected__8103__auto___22074))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22074 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22074)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22075 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22075))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22074)) && (typeof actual__8104__auto___22075 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22074,actual__8104__auto___22075))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22075 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22075)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22074 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22074))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22075)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22075,expected__8103__auto___22074)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22074 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22074)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22075 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22075))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22075)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22074,p1__8102__8105__auto__);
}),actual__8104__auto___22075))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22074 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22074)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22075 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22075))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22074 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22074)));
var type_b__8034__auto__ = (((actual__8104__auto___22075 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22075)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22076 = "3 by 3";
var actual__8104__auto___22077 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_menu);
if((actual__8104__auto___22077 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22076 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22076)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22076 === 'string') && (typeof actual__8104__auto___22077 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22077.indexOf(expected__8103__auto___22076))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22076 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22076)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22077 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22077))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22076)) && (typeof actual__8104__auto___22077 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22076,actual__8104__auto___22077))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22077 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22077)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22076 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22076))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22077)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22077,expected__8103__auto___22076)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22076 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22076)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22077 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22077))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22077)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22076,p1__8102__8105__auto__);
}),actual__8104__auto___22077))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22076 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22076)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22077 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22077))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22076 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22076)));
var type_b__8034__auto__ = (((actual__8104__auto___22077 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22077)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_board_menu.call(null);

var name__8294__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8295__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__8296__auto__ = speclj.stub.invocations_of.call(null,name__8294__auto__);
var times__8297__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var times_QMARK___8298__auto__ = typeof times__8297__auto__ === 'number';
var check_params_QMARK___8299__auto__ = cljs.core.contains_QMARK_.call(null,options__8295__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var with__8300__auto____$1 = (((with__8300__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto__);
var invocations_str__8301__auto__ = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto__) && (check_params_QMARK___8299__auto__))){
var matching_invocations__8303__auto__ = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8292__8304__auto__);
}),invocations__8296__auto__);
var matching_count__8305__auto__ = cljs.core.count.call(null,matching_invocations__8303__auto__);
if(cljs.core._EQ_.call(null,times__8297__auto__,matching_count__8305__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto__)," ",invocations_str__8301__auto__.call(null,matching_count__8305__auto__)].join('')));
}
} else {
if(check_params_QMARK___8299__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8293__8306__auto__);
}),invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto__)].join('')));
}
} else {
if(times_QMARK___8298__auto__){
if(cljs.core._EQ_.call(null,times__8297__auto__,cljs.core.count.call(null,invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__22043);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting a game-mode",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var game_menu = tic_tac_toe.play_game_web.select_game_mode.call(null);
var input_field_orig_val__22045 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__22046 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__22046);

try{var expected__8103__auto___22078 = "Select a Game type: ";
var actual__8104__auto___22079 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8104__auto___22079 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22078 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22078)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22078 === 'string') && (typeof actual__8104__auto___22079 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22079.indexOf(expected__8103__auto___22078))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22078 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22078)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22079 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22079))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22078)) && (typeof actual__8104__auto___22079 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22078,actual__8104__auto___22079))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22079 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22079)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22078 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22078))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22079)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22079,expected__8103__auto___22078)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22078 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22078)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22079 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22079))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22079)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22078,p1__8102__8105__auto__);
}),actual__8104__auto___22079))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22078 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22078)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22079 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22079))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22078 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22078)));
var type_b__8034__auto__ = (((actual__8104__auto___22079 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22079)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22080 = "Player vs Computer";
var actual__8104__auto___22081 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8104__auto___22081 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22080 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22080)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22080 === 'string') && (typeof actual__8104__auto___22081 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22081.indexOf(expected__8103__auto___22080))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22080 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22080)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22081 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22081))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22080)) && (typeof actual__8104__auto___22081 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22080,actual__8104__auto___22081))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22081 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22081)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22080 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22080))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22081)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22081,expected__8103__auto___22080)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22080 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22080)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22081 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22081))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22081)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22080,p1__8102__8105__auto__);
}),actual__8104__auto___22081))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22080 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22080)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22081 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22081))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22080 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22080)));
var type_b__8034__auto__ = (((actual__8104__auto___22081 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22081)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22082 = "Player vs Player";
var actual__8104__auto___22083 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8104__auto___22083 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22082 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22082)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22082 === 'string') && (typeof actual__8104__auto___22083 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22083.indexOf(expected__8103__auto___22082))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22082 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22082)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22083 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22083))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22082)) && (typeof actual__8104__auto___22083 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22082,actual__8104__auto___22083))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22083 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22083)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22082 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22082))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22083)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22083,expected__8103__auto___22082)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22082 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22082)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22083 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22083))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22083)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22082,p1__8102__8105__auto__);
}),actual__8104__auto___22083))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22082 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22082)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22083 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22083))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22082 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22082)));
var type_b__8034__auto__ = (((actual__8104__auto___22083 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22083)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22084 = "Computer vs Computer";
var actual__8104__auto___22085 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8104__auto___22085 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22084 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22084)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22084 === 'string') && (typeof actual__8104__auto___22085 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22085.indexOf(expected__8103__auto___22084))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22084 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22084)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22085 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22085))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22084)) && (typeof actual__8104__auto___22085 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22084,actual__8104__auto___22085))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22085 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22085)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22084 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22084))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22085)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22085,expected__8103__auto___22084)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22084 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22084)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22085 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22085))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22085)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22084,p1__8102__8105__auto__);
}),actual__8104__auto___22085))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22084 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22084)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22085 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22085))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22084 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22084)));
var type_b__8034__auto__ = (((actual__8104__auto___22085 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22085)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_game_mode.call(null);

var name__8294__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8295__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(3)], null);
var invocations__8296__auto__ = speclj.stub.invocations_of.call(null,name__8294__auto__);
var times__8297__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var times_QMARK___8298__auto__ = typeof times__8297__auto__ === 'number';
var check_params_QMARK___8299__auto__ = cljs.core.contains_QMARK_.call(null,options__8295__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var with__8300__auto____$1 = (((with__8300__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto__);
var invocations_str__8301__auto__ = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto__) && (check_params_QMARK___8299__auto__))){
var matching_invocations__8303__auto__ = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8292__8304__auto__);
}),invocations__8296__auto__);
var matching_count__8305__auto__ = cljs.core.count.call(null,matching_invocations__8303__auto__);
if(cljs.core._EQ_.call(null,times__8297__auto__,matching_count__8305__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto__)," ",invocations_str__8301__auto__.call(null,matching_count__8305__auto__)].join('')));
}
} else {
if(check_params_QMARK___8299__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8293__8306__auto__);
}),invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto__)].join('')));
}
} else {
if(times_QMARK___8298__auto__){
if(cljs.core._EQ_.call(null,times__8297__auto__,cljs.core.count.call(null,invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__22045);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting difficulty",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var diff = tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));
var input_field_orig_val__22047 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__22048 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__22048);

try{var expected__8103__auto___22086 = "Select a difficulty for: Ai 1";
var actual__8104__auto___22087 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8104__auto___22087 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22086 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22086)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22086 === 'string') && (typeof actual__8104__auto___22087 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22087.indexOf(expected__8103__auto___22086))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22086 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22086)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22087 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22087))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22086)) && (typeof actual__8104__auto___22087 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22086,actual__8104__auto___22087))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22087 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22087)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22086 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22086))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22087)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22087,expected__8103__auto___22086)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22086 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22086)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22087 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22087))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22087)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22086,p1__8102__8105__auto__);
}),actual__8104__auto___22087))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22086 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22086)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22087 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22087))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22086 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22086)));
var type_b__8034__auto__ = (((actual__8104__auto___22087 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22087)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22088 = "easy";
var actual__8104__auto___22089 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8104__auto___22089 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22088 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22088)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22088 === 'string') && (typeof actual__8104__auto___22089 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22089.indexOf(expected__8103__auto___22088))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22088 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22088)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22089 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22089))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22088)) && (typeof actual__8104__auto___22089 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22088,actual__8104__auto___22089))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22089 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22089)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22088 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22088))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22089)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22089,expected__8103__auto___22088)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22088 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22088)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22089 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22089))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22089)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22088,p1__8102__8105__auto__);
}),actual__8104__auto___22089))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22088 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22088)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22089 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22089))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22088 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22088)));
var type_b__8034__auto__ = (((actual__8104__auto___22089 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22089)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22090 = "medium";
var actual__8104__auto___22091 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8104__auto___22091 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22090 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22090)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22090 === 'string') && (typeof actual__8104__auto___22091 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22091.indexOf(expected__8103__auto___22090))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22090 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22090)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22091 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22091))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22090)) && (typeof actual__8104__auto___22091 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22090,actual__8104__auto___22091))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22091 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22091)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22090 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22090))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22091)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22091,expected__8103__auto___22090)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22090 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22090)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22091 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22091))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22091)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22090,p1__8102__8105__auto__);
}),actual__8104__auto___22091))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22090 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22090)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22091 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22091))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22090 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22090)));
var type_b__8034__auto__ = (((actual__8104__auto___22091 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22091)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22092 = "unbeatable";
var actual__8104__auto___22093 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8104__auto___22093 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22092)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22092 === 'string') && (typeof actual__8104__auto___22093 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22093.indexOf(expected__8103__auto___22092))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22092)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22093))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22092)) && (typeof actual__8104__auto___22093 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22092,actual__8104__auto___22093))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22093)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22092))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22093)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22093,expected__8103__auto___22092)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22092)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22093))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22093)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22092,p1__8102__8105__auto__);
}),actual__8104__auto___22093))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22092 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22092)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22093 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22093))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22092 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22092)));
var type_b__8034__auto__ = (((actual__8104__auto___22093 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22093)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807));

var name__8294__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8295__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(4)], null);
var invocations__8296__auto__ = speclj.stub.invocations_of.call(null,name__8294__auto__);
var times__8297__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var times_QMARK___8298__auto__ = typeof times__8297__auto__ === 'number';
var check_params_QMARK___8299__auto__ = cljs.core.contains_QMARK_.call(null,options__8295__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var with__8300__auto____$1 = (((with__8300__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto__);
var invocations_str__8301__auto__ = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto__) && (check_params_QMARK___8299__auto__))){
var matching_invocations__8303__auto__ = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8292__8304__auto__);
}),invocations__8296__auto__);
var matching_count__8305__auto__ = cljs.core.count.call(null,matching_invocations__8303__auto__);
if(cljs.core._EQ_.call(null,times__8297__auto__,matching_count__8305__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto__)," ",invocations_str__8301__auto__.call(null,matching_count__8305__auto__)].join('')));
}
} else {
if(check_params_QMARK___8299__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8293__8306__auto__);
}),invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto__)].join('')));
}
} else {
if(times_QMARK___8298__auto__){
if(cljs.core._EQ_.call(null,times__8297__auto__,cljs.core.count.call(null,invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__22047);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting player",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var player = tic_tac_toe.play_game_web.select_player_menu.call(null);
var input_field_orig_val__22049 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__22050 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__22050);

try{var expected__8103__auto___22094 = "Select a player";
var actual__8104__auto___22095 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8104__auto___22095 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22094)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22094 === 'string') && (typeof actual__8104__auto___22095 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22095.indexOf(expected__8103__auto___22094))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22094)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22095))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22094)) && (typeof actual__8104__auto___22095 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22094,actual__8104__auto___22095))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22095)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22094))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22095)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22095,expected__8103__auto___22094)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22094)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22095))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22095)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22094,p1__8102__8105__auto__);
}),actual__8104__auto___22095))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22094 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22094)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22095 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22095))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22094 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22094)));
var type_b__8034__auto__ = (((actual__8104__auto___22095 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22095)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22096 = "X";
var actual__8104__auto___22097 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8104__auto___22097 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22096)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22096 === 'string') && (typeof actual__8104__auto___22097 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22097.indexOf(expected__8103__auto___22096))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22096)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22097))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22096)) && (typeof actual__8104__auto___22097 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22096,actual__8104__auto___22097))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22097)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22096))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22097)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22097,expected__8103__auto___22096)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22096)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22097))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22097)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22096,p1__8102__8105__auto__);
}),actual__8104__auto___22097))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22096 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22096)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22097 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22097))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22096 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22096)));
var type_b__8034__auto__ = (((actual__8104__auto___22097 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22097)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22098 = "O";
var actual__8104__auto___22099 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8104__auto___22099 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22098)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22098 === 'string') && (typeof actual__8104__auto___22099 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22099.indexOf(expected__8103__auto___22098))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22098)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22099))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22098)) && (typeof actual__8104__auto___22099 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22098,actual__8104__auto___22099))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22099)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22098))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22099)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22099,expected__8103__auto___22098)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22098)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22099))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22099)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22098,p1__8102__8105__auto__);
}),actual__8104__auto___22099))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22098 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22098)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22099 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22099))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22098 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22098)));
var type_b__8034__auto__ = (((actual__8104__auto___22099 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22099)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8103__auto___22100 = "NA";
var actual__8104__auto___22101 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8104__auto___22101 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22100 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22100)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22100 === 'string') && (typeof actual__8104__auto___22101 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22101.indexOf(expected__8103__auto___22100))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22100 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22100)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22101 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22101))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22100)) && (typeof actual__8104__auto___22101 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22100,actual__8104__auto___22101))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22101 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22101)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22100 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22100))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22101)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22101,expected__8103__auto___22100)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22100 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22100)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22101 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22101))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22101)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22100,p1__8102__8105__auto__);
}),actual__8104__auto___22101))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22100 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22100)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22101 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22101))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22100 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22100)));
var type_b__8034__auto__ = (((actual__8104__auto___22101 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22101)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_player_menu.call(null);

var name__8294__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8295__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(3)], null);
var invocations__8296__auto__ = speclj.stub.invocations_of.call(null,name__8294__auto__);
var times__8297__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var times_QMARK___8298__auto__ = typeof times__8297__auto__ === 'number';
var check_params_QMARK___8299__auto__ = cljs.core.contains_QMARK_.call(null,options__8295__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var with__8300__auto____$1 = (((with__8300__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto__);
var invocations_str__8301__auto__ = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto__) && (check_params_QMARK___8299__auto__))){
var matching_invocations__8303__auto__ = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8292__8304__auto__);
}),invocations__8296__auto__);
var matching_count__8305__auto__ = cljs.core.count.call(null,matching_invocations__8303__auto__);
if(cljs.core._EQ_.call(null,times__8297__auto__,matching_count__8305__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto__)," ",invocations_str__8301__auto__.call(null,matching_count__8305__auto__)].join('')));
}
} else {
if(check_params_QMARK___8299__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8293__8306__auto__);
}),invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto__)].join('')));
}
} else {
if(times_QMARK___8298__auto__){
if(cljs.core._EQ_.call(null,times__8297__auto__,cljs.core.count.call(null,invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__22049);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"creates a square",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var key_to_string_orig_val__22051 = tic_tac_toe.play_game_web.key_to_string;
var update_game_state_orig_val__22052 = tic_tac_toe.play_game_web.update_game_state;
var key_to_string_temp_val__22053 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"key2string","key2string",-1232844584),cljs.core.PersistentArrayMap.EMPTY);
var update_game_state_temp_val__22054 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"game-state","game-state",935682735),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.key_to_string = key_to_string_temp_val__22053);

(tic_tac_toe.play_game_web.update_game_state = update_game_state_temp_val__22054);

try{var expected__8103__auto___22102 = "[:button {:id 3";
var actual__8104__auto___22103 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_square.call(null,(3)));
if((actual__8104__auto___22103 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22102 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22102)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto___22102 === 'string') && (typeof actual__8104__auto___22103 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto___22103.indexOf(expected__8103__auto___22102))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22102 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22102)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22103 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22103))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto___22102)) && (typeof actual__8104__auto___22103 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto___22102,actual__8104__auto___22103))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto___22103 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22103)),speclj.platform.endl,"to match: ",(((expected__8103__auto___22102 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22102))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto___22103)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto___22103,expected__8103__auto___22102)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22102 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22102)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto___22103 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22103))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto___22103)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto___22102,p1__8102__8105__auto__);
}),actual__8104__auto___22103))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto___22102 == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto___22102)),speclj.platform.endl,"to be in: ",(((actual__8104__auto___22103 == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto___22103))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto___22102 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto___22102)));
var type_b__8034__auto__ = (((actual__8104__auto___22103 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto___22103)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.create_square.call(null,(3));

var name__8294__auto___22104 = new cljs.core.Keyword(null,"game-state","game-state",935682735);
var options__8295__auto___22105 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__8296__auto___22106 = speclj.stub.invocations_of.call(null,name__8294__auto___22104);
var times__8297__auto___22107 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto___22105);
var times_QMARK___8298__auto___22108 = typeof times__8297__auto___22107 === 'number';
var check_params_QMARK___8299__auto___22109 = cljs.core.contains_QMARK_.call(null,options__8295__auto___22105,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto___22110 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto___22105);
var with__8300__auto___22111__$1 = (((with__8300__auto___22110 == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto___22110);
var invocations_str__8301__auto___22112 = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto___22108) && (check_params_QMARK___8299__auto___22109))){
var matching_invocations__8303__auto___22113 = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto___22111__$1,p1__8292__8304__auto__);
}),invocations__8296__auto___22106);
var matching_count__8305__auto___22114 = cljs.core.count.call(null,matching_invocations__8303__auto___22113);
if(cljs.core._EQ_.call(null,times__8297__auto___22107,matching_count__8305__auto___22114)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto___22107)," ",invocations_str__8301__auto___22112.call(null,times__8297__auto___22107)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22104)," with ",cljs.core.pr_str.call(null,with__8300__auto___22111__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto___22114)," ",invocations_str__8301__auto___22112.call(null,matching_count__8305__auto___22114)].join('')));
}
} else {
if(check_params_QMARK___8299__auto___22109){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto___22111__$1,p1__8293__8306__auto__);
}),invocations__8296__auto___22106))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22104)," with ",cljs.core.pr_str.call(null,with__8300__auto___22111__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto___22106)].join('')));
}
} else {
if(times_QMARK___8298__auto___22108){
if(cljs.core._EQ_.call(null,times__8297__auto___22107,cljs.core.count.call(null,invocations__8296__auto___22106))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto___22107)," ",invocations_str__8301__auto___22112.call(null,times__8297__auto___22107)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22104),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto___22106))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto___22106)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22104),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto___22106))].join('')));
}

}
}
}

var name__8294__auto__ = new cljs.core.Keyword(null,"key2string","key2string",-1232844584);
var options__8295__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__8296__auto__ = speclj.stub.invocations_of.call(null,name__8294__auto__);
var times__8297__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var times_QMARK___8298__auto__ = typeof times__8297__auto__ === 'number';
var check_params_QMARK___8299__auto__ = cljs.core.contains_QMARK_.call(null,options__8295__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto__);
var with__8300__auto____$1 = (((with__8300__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto__);
var invocations_str__8301__auto__ = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto__) && (check_params_QMARK___8299__auto__))){
var matching_invocations__8303__auto__ = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8292__8304__auto__);
}),invocations__8296__auto__);
var matching_count__8305__auto__ = cljs.core.count.call(null,matching_invocations__8303__auto__);
if(cljs.core._EQ_.call(null,times__8297__auto__,matching_count__8305__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto__)," ",invocations_str__8301__auto__.call(null,matching_count__8305__auto__)].join('')));
}
} else {
if(check_params_QMARK___8299__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto____$1,p1__8293__8306__auto__);
}),invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__)," with ",cljs.core.pr_str.call(null,with__8300__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto__)].join('')));
}
} else {
if(times_QMARK___8298__auto__){
if(cljs.core._EQ_.call(null,times__8297__auto__,cljs.core.count.call(null,invocations__8296__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto__)," ",invocations_str__8301__auto__.call(null,times__8297__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.update_game_state = update_game_state_orig_val__22052);

(tic_tac_toe.play_game_web.key_to_string = key_to_string_orig_val__22051);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"creates a row of squares",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var create_square_orig_val__22055 = tic_tac_toe.play_game_web.create_square;
var create_square_temp_val__22056 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"square","square",812434677),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.create_square = create_square_temp_val__22056);

try{var expected__8052__auto__ = "[:tr (nil nil nil)]";
var actual__8053__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_row.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null))));
if(cljs.core._EQ_.call(null,expected__8052__auto__,actual__8053__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8052__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8052__auto__)),speclj.platform.endl,"     got: ",(((actual__8053__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8053__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.play_game_web.create_square = create_square_orig_val__22055);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false),speclj.components.new_characteristic.call(null,"starts game",((function (_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063){
return (function (){
var terminal_QMARK__orig_val__22057 = tic_tac_toe.utility.terminal_QMARK_;
var update_game_state_orig_val__22058 = tic_tac_toe.play_game_web.update_game_state;
var terminal_state_orig_val__22059 = tic_tac_toe.utility.terminal_state;
var terminal_QMARK__temp_val__22060 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"terminal","terminal",-927870592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),true], null));
var update_game_state_temp_val__22061 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"game-state","game-state",935682735),cljs.core.PersistentArrayMap.EMPTY);
var terminal_state_temp_val__22062 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"terminal-state","terminal-state",1700318473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),(10)], null));
(tic_tac_toe.utility.terminal_QMARK_ = terminal_QMARK__temp_val__22060);

(tic_tac_toe.play_game_web.update_game_state = update_game_state_temp_val__22061);

(tic_tac_toe.utility.terminal_state = terminal_state_temp_val__22062);

try{tic_tac_toe.play_game_web.start_game.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

var name__8294__auto___22115 = new cljs.core.Keyword(null,"terminal-state","terminal-state",1700318473);
var options__8295__auto___22116 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8296__auto___22117 = speclj.stub.invocations_of.call(null,name__8294__auto___22115);
var times__8297__auto___22118 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto___22116);
var times_QMARK___8298__auto___22119 = typeof times__8297__auto___22118 === 'number';
var check_params_QMARK___8299__auto___22120 = cljs.core.contains_QMARK_.call(null,options__8295__auto___22116,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto___22121 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto___22116);
var with__8300__auto___22122__$1 = (((with__8300__auto___22121 == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto___22121);
var invocations_str__8301__auto___22123 = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto___22119) && (check_params_QMARK___8299__auto___22120))){
var matching_invocations__8303__auto___22124 = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto___22122__$1,p1__8292__8304__auto__);
}),invocations__8296__auto___22117);
var matching_count__8305__auto___22125 = cljs.core.count.call(null,matching_invocations__8303__auto___22124);
if(cljs.core._EQ_.call(null,times__8297__auto___22118,matching_count__8305__auto___22125)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto___22118)," ",invocations_str__8301__auto___22123.call(null,times__8297__auto___22118)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22115)," with ",cljs.core.pr_str.call(null,with__8300__auto___22122__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto___22125)," ",invocations_str__8301__auto___22123.call(null,matching_count__8305__auto___22125)].join('')));
}
} else {
if(check_params_QMARK___8299__auto___22120){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto___22122__$1,p1__8293__8306__auto__);
}),invocations__8296__auto___22117))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22115)," with ",cljs.core.pr_str.call(null,with__8300__auto___22122__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto___22117)].join('')));
}
} else {
if(times_QMARK___8298__auto___22119){
if(cljs.core._EQ_.call(null,times__8297__auto___22118,cljs.core.count.call(null,invocations__8296__auto___22117))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto___22118)," ",invocations_str__8301__auto___22123.call(null,times__8297__auto___22118)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22115),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto___22117))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto___22117)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22115),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto___22117))].join('')));
}

}
}
}

var name__8294__auto___22126 = new cljs.core.Keyword(null,"terminal","terminal",-927870592);
var options__8295__auto___22127 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8296__auto___22128 = speclj.stub.invocations_of.call(null,name__8294__auto___22126);
var times__8297__auto___22129 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8295__auto___22127);
var times_QMARK___8298__auto___22130 = typeof times__8297__auto___22129 === 'number';
var check_params_QMARK___8299__auto___22131 = cljs.core.contains_QMARK_.call(null,options__8295__auto___22127,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8300__auto___22132 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8295__auto___22127);
var with__8300__auto___22133__$1 = (((with__8300__auto___22132 == null))?cljs.core.PersistentVector.EMPTY:with__8300__auto___22132);
var invocations_str__8301__auto___22134 = (function (p1__8291__8302__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8291__8302__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8298__auto___22130) && (check_params_QMARK___8299__auto___22131))){
var matching_invocations__8303__auto___22135 = cljs.core.filter.call(null,(function (p1__8292__8304__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto___22133__$1,p1__8292__8304__auto__);
}),invocations__8296__auto___22128);
var matching_count__8305__auto___22136 = cljs.core.count.call(null,matching_invocations__8303__auto___22135);
if(cljs.core._EQ_.call(null,times__8297__auto___22129,matching_count__8305__auto___22136)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto___22129)," ",invocations_str__8301__auto___22134.call(null,times__8297__auto___22129)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22126)," with ",cljs.core.pr_str.call(null,with__8300__auto___22133__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8305__auto___22136)," ",invocations_str__8301__auto___22134.call(null,matching_count__8305__auto___22136)].join('')));
}
} else {
if(check_params_QMARK___8299__auto___22131){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8293__8306__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8300__auto___22133__$1,p1__8293__8306__auto__);
}),invocations__8296__auto___22128))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22126)," with ",cljs.core.pr_str.call(null,with__8300__auto___22133__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8296__auto___22128)].join('')));
}
} else {
if(times_QMARK___8298__auto___22130){
if(cljs.core._EQ_.call(null,times__8297__auto___22129,cljs.core.count.call(null,invocations__8296__auto___22128))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8297__auto___22129)," ",invocations_str__8301__auto___22134.call(null,times__8297__auto___22129)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22126),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto___22128))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8296__auto___22128)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8294__auto___22126),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8296__auto___22128))].join('')));
}

}
}
}

var expected__8103__auto__ = "Player X has won!";
var actual__8104__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.start_game.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null))));
if((actual__8104__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8103__auto__ === 'string') && (typeof actual__8104__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8104__auto__.indexOf(expected__8103__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto__)),speclj.platform.endl,"to be in: ",(((actual__8104__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8103__auto__)) && (typeof actual__8104__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8103__auto__,actual__8104__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8104__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto__)),speclj.platform.endl,"to match: ",(((expected__8103__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8104__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8104__auto__,expected__8103__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8104__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8104__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8102__8105__auto__){
return cljs.core._EQ_.call(null,expected__8103__auto__,p1__8102__8105__auto__);
}),actual__8104__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8103__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8103__auto__)),speclj.platform.endl,"to be in: ",(((actual__8104__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8104__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8033__auto__ = (((expected__8103__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8103__auto__)));
var type_b__8034__auto__ = (((actual__8104__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8104__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8033__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8034__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(tic_tac_toe.utility.terminal_state = terminal_state_orig_val__22059);

(tic_tac_toe.play_game_web.update_game_state = update_game_state_orig_val__22058);

(tic_tac_toe.utility.terminal_QMARK_ = terminal_QMARK__orig_val__22057);
}});})(_STAR_parent_description_STAR__orig_val__22013_22064,_STAR_parent_description_STAR__temp_val__22014_22065,description__7919__auto___22063))
,false)],null)));
var chunk__22016_22067 = null;
var count__22017_22068 = (0);
var i__22018_22069 = (0);
while(true){
if((i__22018_22069 < count__22017_22068)){
var component__7920__auto___22137 = cljs.core._nth.call(null,chunk__22016_22067,i__22018_22069);
speclj.components.install.call(null,component__7920__auto___22137,description__7919__auto___22063);


var G__22138 = seq__22015_22066;
var G__22139 = chunk__22016_22067;
var G__22140 = count__22017_22068;
var G__22141 = (i__22018_22069 + (1));
seq__22015_22066 = G__22138;
chunk__22016_22067 = G__22139;
count__22017_22068 = G__22140;
i__22018_22069 = G__22141;
continue;
} else {
var temp__5804__auto___22142 = cljs.core.seq.call(null,seq__22015_22066);
if(temp__5804__auto___22142){
var seq__22015_22143__$1 = temp__5804__auto___22142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22015_22143__$1)){
var c__4556__auto___22144 = cljs.core.chunk_first.call(null,seq__22015_22143__$1);
var G__22145 = cljs.core.chunk_rest.call(null,seq__22015_22143__$1);
var G__22146 = c__4556__auto___22144;
var G__22147 = cljs.core.count.call(null,c__4556__auto___22144);
var G__22148 = (0);
seq__22015_22066 = G__22145;
chunk__22016_22067 = G__22146;
count__22017_22068 = G__22147;
i__22018_22069 = G__22148;
continue;
} else {
var component__7920__auto___22149 = cljs.core.first.call(null,seq__22015_22143__$1);
speclj.components.install.call(null,component__7920__auto___22149,description__7919__auto___22063);


var G__22150 = cljs.core.next.call(null,seq__22015_22143__$1);
var G__22151 = null;
var G__22152 = (0);
var G__22153 = (0);
seq__22015_22066 = G__22150;
chunk__22016_22067 = G__22151;
count__22017_22068 = G__22152;
i__22018_22069 = G__22153;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__22013_22064);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7919__auto___22063);
}


//# sourceMappingURL=web_page_spec.js.map

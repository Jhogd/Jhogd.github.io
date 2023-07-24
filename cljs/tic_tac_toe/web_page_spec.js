// Compiled by ClojureScript 1.10.764 {}
goog.provide('tic_tac_toe.web_page_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.play_game_web');
goog.require('tic_tac_toe.utility');
goog.require('tic_tac_toe.algorithm');
goog.require('reagent.core');
tic_tac_toe.web_page_spec.test_atom = reagent.core.atom.call(null,cljs.core.conj.call(null,tic_tac_toe.utility.__GT_game_state.call(null,null,null,(0),null,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], null)));
var description__8029__auto___8570 = speclj.components.new_description.call(null,"generates tic-tac-toe webpage",false,"tic-tac-toe.web-page-spec");
var _STAR_parent_description_STAR__orig_val__8492_8571 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8493_8572 = description__8029__auto___8570;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8493_8572);

try{var seq__8494_8573 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,19,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (it__8390__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__8534 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__8535 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__8535);

try{return it__8390__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__8534);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
),speclj.components.new_characteristic.call(null,"updates a piece of the game-map",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

var expected__8162__auto__ = tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null));
var actual__8163__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"updates board by conjoining key and value",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813));

var expected__8162__auto__ = cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null));
var actual__8163__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"adds to map",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

var expected__8162__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869)], null),new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"game-number","game-number",-1266186747),(0),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286),null,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"bob","bob",-1352926751)], null);
var actual__8163__auto__ = tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"bob","bob",-1352926751));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"converts keyword :x and :o to X and O and :e to ",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){

var expected__8162__auto___8577 = "X";
var actual__8163__auto___8578 = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__8162__auto___8577,actual__8163__auto___8578)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto___8577 == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto___8577)),speclj.platform.endl,"     got: ",(((actual__8163__auto___8578 == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto___8578))," (using =)"].join('')));
}

var expected__8162__auto___8579 = "O";
var actual__8163__auto___8580 = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__8162__auto___8579,actual__8163__auto___8580)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto___8579 == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto___8579)),speclj.platform.endl,"     got: ",(((actual__8163__auto___8580 == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto___8580))," (using =)"].join('')));
}

var expected__8162__auto__ = "~";
var actual__8163__auto__ = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"e","e",1381269198));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"plays human turn general",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var update_map_orig_val__8536_8581 = tic_tac_toe.play_game_web.update_map;
var player_move_orig_val__8537_8582 = tic_tac_toe.utility.player_move;
var update_map_temp_val__8538_8583 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.PersistentArrayMap.EMPTY);
var player_move_temp_val__8539_8584 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"player-move","player-move",1791931908),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_map = update_map_temp_val__8538_8583);

(tic_tac_toe.utility.player_move = player_move_temp_val__8539_8584);

try{tic_tac_toe.play_game_web.play_human_turn.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(3));
}finally {(tic_tac_toe.utility.player_move = player_move_orig_val__8537_8582);

(tic_tac_toe.play_game_web.update_map = update_map_orig_val__8536_8581);
}
var name__8404__auto___8585 = new cljs.core.Keyword(null,"update","update",1045576396);
var options__8405__auto___8586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto___8587 = speclj.stub.invocations_of.call(null,name__8404__auto___8585);
var times__8407__auto___8588 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8586);
var times_QMARK___8408__auto___8589 = typeof times__8407__auto___8588 === 'number';
var check_params_QMARK___8409__auto___8590 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8586,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8591 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8586);
var with__8410__auto___8592__$1 = (((with__8410__auto___8591 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8591);
var invocations_str__8411__auto___8593 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8589) && (check_params_QMARK___8409__auto___8590))){
var matching_invocations__8413__auto___8594 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8592__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8587);
var matching_count__8415__auto___8595 = cljs.core.count.call(null,matching_invocations__8413__auto___8594);
if(cljs.core._EQ_.call(null,times__8407__auto___8588,matching_count__8415__auto___8595)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8588)," ",invocations_str__8411__auto___8593.call(null,times__8407__auto___8588)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8585)," with ",cljs.core.pr_str.call(null,with__8410__auto___8592__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8595)," ",invocations_str__8411__auto___8593.call(null,matching_count__8415__auto___8595)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8590){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8592__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8587))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8585)," with ",cljs.core.pr_str.call(null,with__8410__auto___8592__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8587)].join('')));
}
} else {
if(times_QMARK___8408__auto___8589){
if(cljs.core._EQ_.call(null,times__8407__auto___8588,cljs.core.count.call(null,invocations__8406__auto___8587))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8588)," ",invocations_str__8411__auto___8593.call(null,times__8407__auto___8588)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8585),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8587))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8587)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8585),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8587))].join('')));
}

}
}
}

var expected__8162__auto___8596 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869)], null);
var actual__8163__auto___8597 = tic_tac_toe.play_game_web.play_human_turn.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(3));
if(cljs.core._EQ_.call(null,expected__8162__auto___8596,actual__8163__auto___8597)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto___8596 == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto___8596)),speclj.platform.endl,"     got: ",(((actual__8163__auto___8597 == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto___8597))," (using =)"].join('')));
}

var name__8404__auto__ = new cljs.core.Keyword(null,"player-move","player-move",1791931908);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"returns board when it is not an empty space",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var expected__8162__auto__ = tic_tac_toe.utility.player_move.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(0));
var actual__8163__auto__ = tic_tac_toe.play_game_web.play_human_turn.call(null,tic_tac_toe.utility.player_move.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(0)),new cljs.core.Keyword(null,"x","x",2099068185),(0));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"plays AI turn general",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var update_map_orig_val__8540 = tic_tac_toe.play_game_web.update_map;
var best_move_orig_val__8541 = tic_tac_toe.algorithm.best_move;
var update_map_temp_val__8542 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.PersistentArrayMap.EMPTY);
var best_move_temp_val__8543 = cljs.core.constantly.call(null,(0));
(tic_tac_toe.play_game_web.update_map = update_map_temp_val__8542);

(tic_tac_toe.algorithm.best_move = best_move_temp_val__8543);

try{var expected__8162__auto___8598 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869),new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null);
var actual__8163__auto___8599 = tic_tac_toe.play_game_web.play_ai_turn.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null)),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),(3),(3));
if(cljs.core._EQ_.call(null,expected__8162__auto___8598,actual__8163__auto___8599)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto___8598 == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto___8598)),speclj.platform.endl,"     got: ",(((actual__8163__auto___8599 == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto___8599))," (using =)"].join('')));
}

var name__8404__auto__ = new cljs.core.Keyword(null,"update","update",1045576396);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.algorithm.best_move = best_move_orig_val__8541);

(tic_tac_toe.play_game_web.update_map = update_map_orig_val__8540);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting a board",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var board_menu = tic_tac_toe.play_game_web.select_board_menu.call(null);
var input_field_orig_val__8544 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__8545 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__8545);

try{var expected__8213__auto___8600 = "Select a Board: ";
var actual__8214__auto___8601 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_menu);
if((actual__8214__auto___8601 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8600 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8600)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8600 === 'string') && (typeof actual__8214__auto___8601 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8601.indexOf(expected__8213__auto___8600))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8600 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8600)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8601 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8601))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8600)) && (typeof actual__8214__auto___8601 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8600,actual__8214__auto___8601))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8601 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8601)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8600 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8600))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8601)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8601,expected__8213__auto___8600)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8600 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8600)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8601 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8601))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8601)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8600,p1__8212__8215__auto__);
}),actual__8214__auto___8601))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8600 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8600)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8601 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8601))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8600 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8600)));
var type_b__8144__auto__ = (((actual__8214__auto___8601 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8601)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8602 = "3 by 3";
var actual__8214__auto___8603 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_menu);
if((actual__8214__auto___8603 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8602 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8602)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8602 === 'string') && (typeof actual__8214__auto___8603 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8603.indexOf(expected__8213__auto___8602))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8602 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8602)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8603 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8603))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8602)) && (typeof actual__8214__auto___8603 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8602,actual__8214__auto___8603))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8603 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8603)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8602 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8602))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8603)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8603,expected__8213__auto___8602)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8602 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8602)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8603 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8603))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8603)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8602,p1__8212__8215__auto__);
}),actual__8214__auto___8603))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8602 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8602)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8603 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8603))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8602 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8602)));
var type_b__8144__auto__ = (((actual__8214__auto___8603 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8603)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_board_menu.call(null);

var name__8404__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__8544);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting a game-mode",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var game_menu = tic_tac_toe.play_game_web.select_game_mode.call(null);
var input_field_orig_val__8546 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__8547 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__8547);

try{var expected__8213__auto___8604 = "Select a Game type: ";
var actual__8214__auto___8605 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8214__auto___8605 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8604 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8604)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8604 === 'string') && (typeof actual__8214__auto___8605 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8605.indexOf(expected__8213__auto___8604))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8604 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8604)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8605 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8605))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8604)) && (typeof actual__8214__auto___8605 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8604,actual__8214__auto___8605))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8605 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8605)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8604 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8604))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8605)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8605,expected__8213__auto___8604)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8604 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8604)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8605 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8605))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8605)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8604,p1__8212__8215__auto__);
}),actual__8214__auto___8605))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8604 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8604)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8605 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8605))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8604 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8604)));
var type_b__8144__auto__ = (((actual__8214__auto___8605 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8605)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8606 = "Player vs Computer";
var actual__8214__auto___8607 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8214__auto___8607 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8606 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8606)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8606 === 'string') && (typeof actual__8214__auto___8607 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8607.indexOf(expected__8213__auto___8606))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8606 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8606)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8607 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8607))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8606)) && (typeof actual__8214__auto___8607 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8606,actual__8214__auto___8607))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8607 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8607)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8606 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8606))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8607)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8607,expected__8213__auto___8606)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8606 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8606)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8607 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8607))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8607)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8606,p1__8212__8215__auto__);
}),actual__8214__auto___8607))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8606 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8606)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8607 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8607))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8606 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8606)));
var type_b__8144__auto__ = (((actual__8214__auto___8607 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8607)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8608 = "Player vs Player";
var actual__8214__auto___8609 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8214__auto___8609 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8608 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8608)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8608 === 'string') && (typeof actual__8214__auto___8609 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8609.indexOf(expected__8213__auto___8608))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8608 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8608)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8609 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8609))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8608)) && (typeof actual__8214__auto___8609 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8608,actual__8214__auto___8609))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8609 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8609)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8608 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8608))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8609)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8609,expected__8213__auto___8608)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8608 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8608)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8609 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8609))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8609)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8608,p1__8212__8215__auto__);
}),actual__8214__auto___8609))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8608 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8608)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8609 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8609))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8608 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8608)));
var type_b__8144__auto__ = (((actual__8214__auto___8609 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8609)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8610 = "Computer vs Computer";
var actual__8214__auto___8611 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__8214__auto___8611 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8610 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8610)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8610 === 'string') && (typeof actual__8214__auto___8611 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8611.indexOf(expected__8213__auto___8610))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8610 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8610)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8611 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8611))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8610)) && (typeof actual__8214__auto___8611 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8610,actual__8214__auto___8611))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8611 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8611)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8610 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8610))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8611)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8611,expected__8213__auto___8610)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8610 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8610)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8611 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8611))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8611)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8610,p1__8212__8215__auto__);
}),actual__8214__auto___8611))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8610 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8610)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8611 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8611))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8610 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8610)));
var type_b__8144__auto__ = (((actual__8214__auto___8611 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8611)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_game_mode.call(null);

var name__8404__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(3)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__8546);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting difficulty",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var diff = tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807),"diff1");
var input_field_orig_val__8548 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__8549 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__8549);

try{var expected__8213__auto___8612 = "Select a difficulty for: Ai 1";
var actual__8214__auto___8613 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8214__auto___8613 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8612 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8612)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8612 === 'string') && (typeof actual__8214__auto___8613 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8613.indexOf(expected__8213__auto___8612))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8612 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8612)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8613 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8613))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8612)) && (typeof actual__8214__auto___8613 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8612,actual__8214__auto___8613))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8613 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8613)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8612 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8612))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8613)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8613,expected__8213__auto___8612)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8612 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8612)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8613 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8613))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8613)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8612,p1__8212__8215__auto__);
}),actual__8214__auto___8613))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8612 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8612)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8613 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8613))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8612 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8612)));
var type_b__8144__auto__ = (((actual__8214__auto___8613 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8613)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8614 = "easy";
var actual__8214__auto___8615 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8214__auto___8615 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8614 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8614)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8614 === 'string') && (typeof actual__8214__auto___8615 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8615.indexOf(expected__8213__auto___8614))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8614 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8614)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8615 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8615))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8614)) && (typeof actual__8214__auto___8615 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8614,actual__8214__auto___8615))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8615 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8615)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8614 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8614))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8615)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8615,expected__8213__auto___8614)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8614 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8614)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8615 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8615))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8615)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8614,p1__8212__8215__auto__);
}),actual__8214__auto___8615))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8614 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8614)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8615 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8615))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8614 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8614)));
var type_b__8144__auto__ = (((actual__8214__auto___8615 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8615)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8616 = "medium";
var actual__8214__auto___8617 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8214__auto___8617 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8616 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8616)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8616 === 'string') && (typeof actual__8214__auto___8617 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8617.indexOf(expected__8213__auto___8616))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8616 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8616)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8617 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8617))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8616)) && (typeof actual__8214__auto___8617 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8616,actual__8214__auto___8617))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8617 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8617)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8616 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8616))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8617)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8617,expected__8213__auto___8616)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8616 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8616)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8617 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8617))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8617)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8616,p1__8212__8215__auto__);
}),actual__8214__auto___8617))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8616 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8616)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8617 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8617))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8616 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8616)));
var type_b__8144__auto__ = (((actual__8214__auto___8617 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8617)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8618 = "unbeatable";
var actual__8214__auto___8619 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__8214__auto___8619 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8618 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8618)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8618 === 'string') && (typeof actual__8214__auto___8619 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8619.indexOf(expected__8213__auto___8618))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8618 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8618)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8619 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8619))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8618)) && (typeof actual__8214__auto___8619 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8618,actual__8214__auto___8619))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8619 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8619)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8618 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8618))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8619)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8619,expected__8213__auto___8618)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8618 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8618)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8619 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8619))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8619)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8618,p1__8212__8215__auto__);
}),actual__8214__auto___8619))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8618 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8618)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8619 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8619))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8618 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8618)));
var type_b__8144__auto__ = (((actual__8214__auto___8619 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8619)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 2",new cljs.core.Keyword(null,"difficulty","difficulty",755680807),"diff2");

var name__8404__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(4)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__8548);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting player",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var player = tic_tac_toe.play_game_web.select_player_menu.call(null);
var input_field_orig_val__8550 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__8551 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__8551);

try{var expected__8213__auto___8620 = "Select a player";
var actual__8214__auto___8621 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8214__auto___8621 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8620 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8620)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8620 === 'string') && (typeof actual__8214__auto___8621 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8621.indexOf(expected__8213__auto___8620))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8620 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8620)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8621 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8621))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8620)) && (typeof actual__8214__auto___8621 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8620,actual__8214__auto___8621))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8621 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8621)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8620 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8620))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8621)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8621,expected__8213__auto___8620)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8620 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8620)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8621 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8621))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8621)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8620,p1__8212__8215__auto__);
}),actual__8214__auto___8621))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8620 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8620)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8621 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8621))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8620 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8620)));
var type_b__8144__auto__ = (((actual__8214__auto___8621 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8621)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8622 = "X";
var actual__8214__auto___8623 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8214__auto___8623 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8622 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8622)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8622 === 'string') && (typeof actual__8214__auto___8623 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8623.indexOf(expected__8213__auto___8622))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8622 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8622)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8623 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8623))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8622)) && (typeof actual__8214__auto___8623 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8622,actual__8214__auto___8623))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8623 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8623)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8622 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8622))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8623)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8623,expected__8213__auto___8622)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8622 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8622)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8623 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8623))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8623)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8622,p1__8212__8215__auto__);
}),actual__8214__auto___8623))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8622 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8622)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8623 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8623))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8622 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8622)));
var type_b__8144__auto__ = (((actual__8214__auto___8623 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8623)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8624 = "O";
var actual__8214__auto___8625 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8214__auto___8625 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8624 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8624)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8624 === 'string') && (typeof actual__8214__auto___8625 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8625.indexOf(expected__8213__auto___8624))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8624 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8624)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8625 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8625))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8624)) && (typeof actual__8214__auto___8625 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8624,actual__8214__auto___8625))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8625 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8625)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8624 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8624))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8625)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8625,expected__8213__auto___8624)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8624 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8624)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8625 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8625))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8625)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8624,p1__8212__8215__auto__);
}),actual__8214__auto___8625))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8624 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8624)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8625 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8625))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8624 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8624)));
var type_b__8144__auto__ = (((actual__8214__auto___8625 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8625)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto___8626 = "NA";
var actual__8214__auto___8627 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__8214__auto___8627 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8626 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8626)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8626 === 'string') && (typeof actual__8214__auto___8627 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8627.indexOf(expected__8213__auto___8626))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8626 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8626)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8627 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8627))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8626)) && (typeof actual__8214__auto___8627 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8626,actual__8214__auto___8627))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8627 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8627)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8626 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8626))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8627)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8627,expected__8213__auto___8626)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8626 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8626)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8627 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8627))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8627)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8626,p1__8212__8215__auto__);
}),actual__8214__auto___8627))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8626 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8626)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8627 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8627))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8626 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8626)));
var type_b__8144__auto__ = (((actual__8214__auto___8627 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8627)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_player_menu.call(null);

var name__8404__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(3)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__8550);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"creates a square",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),true);

var expected__8213__auto___8628 = "[:td [:button {:id 3, :style {:color \"blue\", :font-size \"30px\", :display \"inline-block\", :background-color \"black\", :padding \"50px 50px\"}";
var actual__8214__auto___8629 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_square.call(null,cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom),(3)));
if((actual__8214__auto___8629 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8628 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8628)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto___8628 === 'string') && (typeof actual__8214__auto___8629 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto___8629.indexOf(expected__8213__auto___8628))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8628 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8628)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8629 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8629))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto___8628)) && (typeof actual__8214__auto___8629 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto___8628,actual__8214__auto___8629))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto___8629 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8629)),speclj.platform.endl,"to match: ",(((expected__8213__auto___8628 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8628))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto___8629)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto___8629,expected__8213__auto___8628)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8628 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8628)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto___8629 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8629))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto___8629)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto___8628,p1__8212__8215__auto__);
}),actual__8214__auto___8629))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto___8628 == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto___8628)),speclj.platform.endl,"to be in: ",(((actual__8214__auto___8629 == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto___8629))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto___8628 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto___8628)));
var type_b__8144__auto__ = (((actual__8214__auto___8629 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto___8629)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8213__auto__ = ":on-click #object[Function]} nil]]";
var actual__8214__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_square.call(null,cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom),(3)));
if((actual__8214__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto__ === 'string') && (typeof actual__8214__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto__.indexOf(expected__8213__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be in: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto__)) && (typeof actual__8214__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto__,actual__8214__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__)),speclj.platform.endl,"to match: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto__,expected__8213__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto__,p1__8212__8215__auto__);
}),actual__8214__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be in: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto__)));
var type_b__8144__auto__ = (((actual__8214__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"creates a row of squares",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var create_square_orig_val__8552 = tic_tac_toe.play_game_web.create_square;
var create_square_temp_val__8553 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"square","square",812434677),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.create_square = create_square_temp_val__8553);

try{tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),true);

tic_tac_toe.play_game_web.create_row.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom)),(1));

var expected__8162__auto__ = "[:tr (nil nil nil)]";
var actual__8163__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_row.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom)),(1)));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.play_game_web.create_square = create_square_orig_val__8552);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"starts game",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var update_map_orig_val__8554 = tic_tac_toe.play_game_web.update_map;
var add_to_map_orig_val__8555 = tic_tac_toe.play_game_web.add_to_map;
var update_map_temp_val__8556 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update-map","update-map",1098138072),cljs.core.PersistentArrayMap.EMPTY);
var add_to_map_temp_val__8557 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"add","add",235287739),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_map = update_map_temp_val__8556);

(tic_tac_toe.play_game_web.add_to_map = add_to_map_temp_val__8557);

try{tic_tac_toe.play_game_web.start_game.call(null);

var name__8404__auto___8630 = new cljs.core.Keyword(null,"update-map","update-map",1098138072);
var options__8405__auto___8631 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__8406__auto___8632 = speclj.stub.invocations_of.call(null,name__8404__auto___8630);
var times__8407__auto___8633 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8631);
var times_QMARK___8408__auto___8634 = typeof times__8407__auto___8633 === 'number';
var check_params_QMARK___8409__auto___8635 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8631,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8636 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8631);
var with__8410__auto___8637__$1 = (((with__8410__auto___8636 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8636);
var invocations_str__8411__auto___8638 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8634) && (check_params_QMARK___8409__auto___8635))){
var matching_invocations__8413__auto___8639 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8637__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8632);
var matching_count__8415__auto___8640 = cljs.core.count.call(null,matching_invocations__8413__auto___8639);
if(cljs.core._EQ_.call(null,times__8407__auto___8633,matching_count__8415__auto___8640)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8633)," ",invocations_str__8411__auto___8638.call(null,times__8407__auto___8633)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8630)," with ",cljs.core.pr_str.call(null,with__8410__auto___8637__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8640)," ",invocations_str__8411__auto___8638.call(null,matching_count__8415__auto___8640)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8635){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8637__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8632))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8630)," with ",cljs.core.pr_str.call(null,with__8410__auto___8637__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8632)].join('')));
}
} else {
if(times_QMARK___8408__auto___8634){
if(cljs.core._EQ_.call(null,times__8407__auto___8633,cljs.core.count.call(null,invocations__8406__auto___8632))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8633)," ",invocations_str__8411__auto___8638.call(null,times__8407__auto___8633)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8630),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8632))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8632)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8630),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8632))].join('')));
}

}
}
}

var name__8404__auto__ = new cljs.core.Keyword(null,"add","add",235287739);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.add_to_map = add_to_map_orig_val__8555);

(tic_tac_toe.play_game_web.update_map = update_map_orig_val__8554);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"resets all pieces to empty",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var expected__8162__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null);
var actual__8163__auto__ = tic_tac_toe.play_game_web.return_beginning_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null," generates html for reset button",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var expected__8162__auto__ = "[:button {:style {:color \"blue\"}, :on-click #object[Function]} \"restart\"]";
var actual__8163__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.restart_button.call(null));
if(cljs.core._EQ_.call(null,expected__8162__auto__,actual__8163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8162__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8162__auto__)),speclj.platform.endl,"     got: ",(((actual__8163__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8163__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"restarts game",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var update_state_only_orig_val__8558 = tic_tac_toe.play_game_web.update_state_only;
var update_map_orig_val__8559 = tic_tac_toe.play_game_web.update_map;
var update_state_only_temp_val__8560 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"beg","beg",-1687504749),cljs.core.PersistentArrayMap.EMPTY);
var update_map_temp_val__8561 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_state_only = update_state_only_temp_val__8560);

(tic_tac_toe.play_game_web.update_map = update_map_temp_val__8561);

try{tic_tac_toe.play_game_web.restart_game.call(null);

var name__8404__auto___8641 = new cljs.core.Keyword(null,"beg","beg",-1687504749);
var options__8405__auto___8642 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto___8643 = speclj.stub.invocations_of.call(null,name__8404__auto___8641);
var times__8407__auto___8644 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8642);
var times_QMARK___8408__auto___8645 = typeof times__8407__auto___8644 === 'number';
var check_params_QMARK___8409__auto___8646 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8642,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8647 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8642);
var with__8410__auto___8648__$1 = (((with__8410__auto___8647 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8647);
var invocations_str__8411__auto___8649 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8645) && (check_params_QMARK___8409__auto___8646))){
var matching_invocations__8413__auto___8650 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8648__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8643);
var matching_count__8415__auto___8651 = cljs.core.count.call(null,matching_invocations__8413__auto___8650);
if(cljs.core._EQ_.call(null,times__8407__auto___8644,matching_count__8415__auto___8651)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8644)," ",invocations_str__8411__auto___8649.call(null,times__8407__auto___8644)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8641)," with ",cljs.core.pr_str.call(null,with__8410__auto___8648__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8651)," ",invocations_str__8411__auto___8649.call(null,matching_count__8415__auto___8651)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8646){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8648__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8643))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8641)," with ",cljs.core.pr_str.call(null,with__8410__auto___8648__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8643)].join('')));
}
} else {
if(times_QMARK___8408__auto___8645){
if(cljs.core._EQ_.call(null,times__8407__auto___8644,cljs.core.count.call(null,invocations__8406__auto___8643))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8644)," ",invocations_str__8411__auto___8649.call(null,times__8407__auto___8644)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8641),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8643))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8643)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8641),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8643))].join('')));
}

}
}
}

var name__8404__auto__ = new cljs.core.Keyword(null,"map","map",1371690461);
var options__8405__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto__ = speclj.stub.invocations_of.call(null,name__8404__auto__);
var times__8407__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var times_QMARK___8408__auto__ = typeof times__8407__auto__ === 'number';
var check_params_QMARK___8409__auto__ = cljs.core.contains_QMARK_.call(null,options__8405__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto__);
var with__8410__auto____$1 = (((with__8410__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto__);
var invocations_str__8411__auto__ = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto__) && (check_params_QMARK___8409__auto__))){
var matching_invocations__8413__auto__ = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8402__8414__auto__);
}),invocations__8406__auto__);
var matching_count__8415__auto__ = cljs.core.count.call(null,matching_invocations__8413__auto__);
if(cljs.core._EQ_.call(null,times__8407__auto__,matching_count__8415__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto__)," ",invocations_str__8411__auto__.call(null,matching_count__8415__auto__)].join('')));
}
} else {
if(check_params_QMARK___8409__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto____$1,p1__8403__8416__auto__);
}),invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__)," with ",cljs.core.pr_str.call(null,with__8410__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto__)].join('')));
}
} else {
if(times_QMARK___8408__auto__){
if(cljs.core._EQ_.call(null,times__8407__auto__,cljs.core.count.call(null,invocations__8406__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto__)," ",invocations_str__8411__auto__.call(null,times__8407__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.update_map = update_map_orig_val__8559);

(tic_tac_toe.play_game_web.update_state_only = update_state_only_orig_val__8558);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false),speclj.components.new_characteristic.call(null,"renders entire menu",((function (_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570){
return (function (){
var select_board_menu_orig_val__8562 = tic_tac_toe.play_game_web.select_board_menu;
var select_game_mode_orig_val__8563 = tic_tac_toe.play_game_web.select_game_mode;
var select_difficulty_orig_val__8564 = tic_tac_toe.play_game_web.select_difficulty;
var select_player_menu_orig_val__8565 = tic_tac_toe.play_game_web.select_player_menu;
var select_board_menu_temp_val__8566 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentArrayMap.EMPTY);
var select_game_mode_temp_val__8567 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"game-mode","game-mode",-1684440487),cljs.core.PersistentArrayMap.EMPTY);
var select_difficulty_temp_val__8568 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"diff","diff",2135942783),cljs.core.PersistentArrayMap.EMPTY);
var select_player_menu_temp_val__8569 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.select_board_menu = select_board_menu_temp_val__8566);

(tic_tac_toe.play_game_web.select_game_mode = select_game_mode_temp_val__8567);

(tic_tac_toe.play_game_web.select_difficulty = select_difficulty_temp_val__8568);

(tic_tac_toe.play_game_web.select_player_menu = select_player_menu_temp_val__8569);

try{tic_tac_toe.play_game_web.render_menu.call(null);

var name__8404__auto___8652 = new cljs.core.Keyword(null,"board","board",-1907017633);
var options__8405__auto___8653 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto___8654 = speclj.stub.invocations_of.call(null,name__8404__auto___8652);
var times__8407__auto___8655 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8653);
var times_QMARK___8408__auto___8656 = typeof times__8407__auto___8655 === 'number';
var check_params_QMARK___8409__auto___8657 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8653,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8658 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8653);
var with__8410__auto___8659__$1 = (((with__8410__auto___8658 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8658);
var invocations_str__8411__auto___8660 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8656) && (check_params_QMARK___8409__auto___8657))){
var matching_invocations__8413__auto___8661 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8659__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8654);
var matching_count__8415__auto___8662 = cljs.core.count.call(null,matching_invocations__8413__auto___8661);
if(cljs.core._EQ_.call(null,times__8407__auto___8655,matching_count__8415__auto___8662)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8655)," ",invocations_str__8411__auto___8660.call(null,times__8407__auto___8655)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8652)," with ",cljs.core.pr_str.call(null,with__8410__auto___8659__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8662)," ",invocations_str__8411__auto___8660.call(null,matching_count__8415__auto___8662)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8657){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8659__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8654))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8652)," with ",cljs.core.pr_str.call(null,with__8410__auto___8659__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8654)].join('')));
}
} else {
if(times_QMARK___8408__auto___8656){
if(cljs.core._EQ_.call(null,times__8407__auto___8655,cljs.core.count.call(null,invocations__8406__auto___8654))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8655)," ",invocations_str__8411__auto___8660.call(null,times__8407__auto___8655)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8652),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8654))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8654)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8652),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8654))].join('')));
}

}
}
}

var name__8404__auto___8663 = new cljs.core.Keyword(null,"game-mode","game-mode",-1684440487);
var options__8405__auto___8664 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto___8665 = speclj.stub.invocations_of.call(null,name__8404__auto___8663);
var times__8407__auto___8666 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8664);
var times_QMARK___8408__auto___8667 = typeof times__8407__auto___8666 === 'number';
var check_params_QMARK___8409__auto___8668 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8664,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8669 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8664);
var with__8410__auto___8670__$1 = (((with__8410__auto___8669 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8669);
var invocations_str__8411__auto___8671 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8667) && (check_params_QMARK___8409__auto___8668))){
var matching_invocations__8413__auto___8672 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8670__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8665);
var matching_count__8415__auto___8673 = cljs.core.count.call(null,matching_invocations__8413__auto___8672);
if(cljs.core._EQ_.call(null,times__8407__auto___8666,matching_count__8415__auto___8673)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8666)," ",invocations_str__8411__auto___8671.call(null,times__8407__auto___8666)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8663)," with ",cljs.core.pr_str.call(null,with__8410__auto___8670__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8673)," ",invocations_str__8411__auto___8671.call(null,matching_count__8415__auto___8673)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8668){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8670__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8665))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8663)," with ",cljs.core.pr_str.call(null,with__8410__auto___8670__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8665)].join('')));
}
} else {
if(times_QMARK___8408__auto___8667){
if(cljs.core._EQ_.call(null,times__8407__auto___8666,cljs.core.count.call(null,invocations__8406__auto___8665))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8666)," ",invocations_str__8411__auto___8671.call(null,times__8407__auto___8666)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8663),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8665))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8665)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8663),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8665))].join('')));
}

}
}
}

var name__8404__auto___8674 = new cljs.core.Keyword(null,"diff","diff",2135942783);
var options__8405__auto___8675 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__8406__auto___8676 = speclj.stub.invocations_of.call(null,name__8404__auto___8674);
var times__8407__auto___8677 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8675);
var times_QMARK___8408__auto___8678 = typeof times__8407__auto___8677 === 'number';
var check_params_QMARK___8409__auto___8679 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8675,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8680 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8675);
var with__8410__auto___8681__$1 = (((with__8410__auto___8680 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8680);
var invocations_str__8411__auto___8682 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8678) && (check_params_QMARK___8409__auto___8679))){
var matching_invocations__8413__auto___8683 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8681__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8676);
var matching_count__8415__auto___8684 = cljs.core.count.call(null,matching_invocations__8413__auto___8683);
if(cljs.core._EQ_.call(null,times__8407__auto___8677,matching_count__8415__auto___8684)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8677)," ",invocations_str__8411__auto___8682.call(null,times__8407__auto___8677)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8674)," with ",cljs.core.pr_str.call(null,with__8410__auto___8681__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8684)," ",invocations_str__8411__auto___8682.call(null,matching_count__8415__auto___8684)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8679){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8681__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8676))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8674)," with ",cljs.core.pr_str.call(null,with__8410__auto___8681__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8676)].join('')));
}
} else {
if(times_QMARK___8408__auto___8678){
if(cljs.core._EQ_.call(null,times__8407__auto___8677,cljs.core.count.call(null,invocations__8406__auto___8676))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8677)," ",invocations_str__8411__auto___8682.call(null,times__8407__auto___8677)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8674),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8676))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8676)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8674),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8676))].join('')));
}

}
}
}

var name__8404__auto___8685 = new cljs.core.Keyword(null,"player","player",-97687400);
var options__8405__auto___8686 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__8406__auto___8687 = speclj.stub.invocations_of.call(null,name__8404__auto___8685);
var times__8407__auto___8688 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8686);
var times_QMARK___8408__auto___8689 = typeof times__8407__auto___8688 === 'number';
var check_params_QMARK___8409__auto___8690 = cljs.core.contains_QMARK_.call(null,options__8405__auto___8686,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8410__auto___8691 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8405__auto___8686);
var with__8410__auto___8692__$1 = (((with__8410__auto___8691 == null))?cljs.core.PersistentVector.EMPTY:with__8410__auto___8691);
var invocations_str__8411__auto___8693 = (function (p1__8401__8412__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8401__8412__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8408__auto___8689) && (check_params_QMARK___8409__auto___8690))){
var matching_invocations__8413__auto___8694 = cljs.core.filter.call(null,(function (p1__8402__8414__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8692__$1,p1__8402__8414__auto__);
}),invocations__8406__auto___8687);
var matching_count__8415__auto___8695 = cljs.core.count.call(null,matching_invocations__8413__auto___8694);
if(cljs.core._EQ_.call(null,times__8407__auto___8688,matching_count__8415__auto___8695)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8688)," ",invocations_str__8411__auto___8693.call(null,times__8407__auto___8688)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8685)," with ",cljs.core.pr_str.call(null,with__8410__auto___8692__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8415__auto___8695)," ",invocations_str__8411__auto___8693.call(null,matching_count__8415__auto___8695)].join('')));
}
} else {
if(check_params_QMARK___8409__auto___8690){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8403__8416__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8410__auto___8692__$1,p1__8403__8416__auto__);
}),invocations__8406__auto___8687))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8685)," with ",cljs.core.pr_str.call(null,with__8410__auto___8692__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8406__auto___8687)].join('')));
}
} else {
if(times_QMARK___8408__auto___8689){
if(cljs.core._EQ_.call(null,times__8407__auto___8688,cljs.core.count.call(null,invocations__8406__auto___8687))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8407__auto___8688)," ",invocations_str__8411__auto___8693.call(null,times__8407__auto___8688)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8685),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8687))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8406__auto___8687)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8404__auto___8685),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8406__auto___8687))].join('')));
}

}
}
}

var expected__8213__auto__ = "[:div nil nil nil nil nil [:button {:on-click #object[Function]} \"Start Game\"]]";
var actual__8214__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.render_menu.call(null));
if((actual__8214__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8213__auto__ === 'string') && (typeof actual__8214__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8214__auto__.indexOf(expected__8213__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be in: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8213__auto__)) && (typeof actual__8214__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8213__auto__,actual__8214__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__)),speclj.platform.endl,"to match: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8214__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8214__auto__,expected__8213__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8214__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8212__8215__auto__){
return cljs.core._EQ_.call(null,expected__8213__auto__,p1__8212__8215__auto__);
}),actual__8214__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8213__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8213__auto__)),speclj.platform.endl,"to be in: ",(((actual__8214__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8214__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8143__auto__ = (((expected__8213__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8213__auto__)));
var type_b__8144__auto__ = (((actual__8214__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8214__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8143__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8144__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(tic_tac_toe.play_game_web.select_player_menu = select_player_menu_orig_val__8565);

(tic_tac_toe.play_game_web.select_difficulty = select_difficulty_orig_val__8564);

(tic_tac_toe.play_game_web.select_game_mode = select_game_mode_orig_val__8563);

(tic_tac_toe.play_game_web.select_board_menu = select_board_menu_orig_val__8562);
}});})(_STAR_parent_description_STAR__orig_val__8492_8571,_STAR_parent_description_STAR__temp_val__8493_8572,description__8029__auto___8570))
,false)],null)));
var chunk__8495_8574 = null;
var count__8496_8575 = (0);
var i__8497_8576 = (0);
while(true){
if((i__8497_8576 < count__8496_8575)){
var component__8030__auto___8696 = cljs.core._nth.call(null,chunk__8495_8574,i__8497_8576);
speclj.components.install.call(null,component__8030__auto___8696,description__8029__auto___8570);


var G__8697 = seq__8494_8573;
var G__8698 = chunk__8495_8574;
var G__8699 = count__8496_8575;
var G__8700 = (i__8497_8576 + (1));
seq__8494_8573 = G__8697;
chunk__8495_8574 = G__8698;
count__8496_8575 = G__8699;
i__8497_8576 = G__8700;
continue;
} else {
var temp__5818__auto___8701 = cljs.core.seq.call(null,seq__8494_8573);
if(temp__5818__auto___8701){
var seq__8494_8702__$1 = temp__5818__auto___8701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8494_8702__$1)){
var c__4556__auto___8703 = cljs.core.chunk_first.call(null,seq__8494_8702__$1);
var G__8704 = cljs.core.chunk_rest.call(null,seq__8494_8702__$1);
var G__8705 = c__4556__auto___8703;
var G__8706 = cljs.core.count.call(null,c__4556__auto___8703);
var G__8707 = (0);
seq__8494_8573 = G__8704;
chunk__8495_8574 = G__8705;
count__8496_8575 = G__8706;
i__8497_8576 = G__8707;
continue;
} else {
var component__8030__auto___8708 = cljs.core.first.call(null,seq__8494_8702__$1);
speclj.components.install.call(null,component__8030__auto___8708,description__8029__auto___8570);


var G__8709 = cljs.core.next.call(null,seq__8494_8702__$1);
var G__8710 = null;
var G__8711 = (0);
var G__8712 = (0);
seq__8494_8573 = G__8709;
chunk__8495_8574 = G__8710;
count__8496_8575 = G__8711;
i__8497_8576 = G__8712;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8492_8571);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8029__auto___8570);
}


//# sourceMappingURL=web_page_spec.js.map

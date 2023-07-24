// Compiled by ClojureScript 1.10.764 {}
goog.provide('tic_tac_toe.web_page_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.play_game_web');
goog.require('tic_tac_toe.utility');
goog.require('tic_tac_toe.algorithm');
goog.require('reagent.core');
tic_tac_toe.web_page_spec.test_atom = reagent.core.atom.call(null,cljs.core.conj.call(null,tic_tac_toe.utility.__GT_game_state.call(null,null,null,(0),null,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], null)));
var description__4989__auto___5692 = speclj.components.new_description.call(null,"generates tic-tac-toe webpage",false,"tic-tac-toe.web-page-spec");
var _STAR_parent_description_STAR__orig_val__5630_5693 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5631_5694 = description__4989__auto___5692;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5631_5694);

try{var seq__5632_5695 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,18,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (it__5350__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__5664 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__5665 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__5665);

try{return it__5350__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__5664);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
),speclj.components.new_characteristic.call(null,"updates a piece of the game-map",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

var expected__5122__auto__ = tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null));
var actual__5123__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"updates board by conjoining key and value",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813));

var expected__5122__auto__ = cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null));
var actual__5123__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"adds to map",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

var expected__5122__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869)], null),new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"game-number","game-number",-1266186747),(0),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286),null,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"bob","bob",-1352926751)], null);
var actual__5123__auto__ = tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"bob","bob",-1352926751));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"converts keyword :x and :o to X and O and :e to ",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){

var expected__5122__auto___5699 = "X";
var actual__5123__auto___5700 = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core._EQ_.call(null,expected__5122__auto___5699,actual__5123__auto___5700)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto___5699 == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto___5699)),speclj.platform.endl,"     got: ",(((actual__5123__auto___5700 == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto___5700))," (using =)"].join('')));
}

var expected__5122__auto___5701 = "O";
var actual__5123__auto___5702 = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"o","o",-1350007228));
if(cljs.core._EQ_.call(null,expected__5122__auto___5701,actual__5123__auto___5702)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto___5701 == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto___5701)),speclj.platform.endl,"     got: ",(((actual__5123__auto___5702 == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto___5702))," (using =)"].join('')));
}

var expected__5122__auto__ = "~";
var actual__5123__auto__ = tic_tac_toe.play_game_web.key_to_string.call(null,new cljs.core.Keyword(null,"e","e",1381269198));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"plays human turn general",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var update_map_orig_val__5666_5703 = tic_tac_toe.play_game_web.update_map;
var player_move_orig_val__5667_5704 = tic_tac_toe.utility.player_move;
var update_map_temp_val__5668_5705 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.PersistentArrayMap.EMPTY);
var player_move_temp_val__5669_5706 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"player-move","player-move",1791931908),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_map = update_map_temp_val__5668_5705);

(tic_tac_toe.utility.player_move = player_move_temp_val__5669_5706);

try{tic_tac_toe.play_game_web.play_human_turn.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(3));
}finally {(tic_tac_toe.utility.player_move = player_move_orig_val__5667_5704);

(tic_tac_toe.play_game_web.update_map = update_map_orig_val__5666_5703);
}
var name__5364__auto___5707 = new cljs.core.Keyword(null,"update","update",1045576396);
var options__5365__auto___5708 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto___5709 = speclj.stub.invocations_of.call(null,name__5364__auto___5707);
var times__5367__auto___5710 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5708);
var times_QMARK___5368__auto___5711 = typeof times__5367__auto___5710 === 'number';
var check_params_QMARK___5369__auto___5712 = cljs.core.contains_QMARK_.call(null,options__5365__auto___5708,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto___5713 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5708);
var with__5370__auto___5714__$1 = (((with__5370__auto___5713 == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto___5713);
var invocations_str__5371__auto___5715 = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto___5711) && (check_params_QMARK___5369__auto___5712))){
var matching_invocations__5373__auto___5716 = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5714__$1,p1__5362__5374__auto__);
}),invocations__5366__auto___5709);
var matching_count__5375__auto___5717 = cljs.core.count.call(null,matching_invocations__5373__auto___5716);
if(cljs.core._EQ_.call(null,times__5367__auto___5710,matching_count__5375__auto___5717)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5710)," ",invocations_str__5371__auto___5715.call(null,times__5367__auto___5710)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5707)," with ",cljs.core.pr_str.call(null,with__5370__auto___5714__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto___5717)," ",invocations_str__5371__auto___5715.call(null,matching_count__5375__auto___5717)].join('')));
}
} else {
if(check_params_QMARK___5369__auto___5712){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5714__$1,p1__5363__5376__auto__);
}),invocations__5366__auto___5709))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5707)," with ",cljs.core.pr_str.call(null,with__5370__auto___5714__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto___5709)].join('')));
}
} else {
if(times_QMARK___5368__auto___5711){
if(cljs.core._EQ_.call(null,times__5367__auto___5710,cljs.core.count.call(null,invocations__5366__auto___5709))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5710)," ",invocations_str__5371__auto___5715.call(null,times__5367__auto___5710)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5707),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5709))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto___5709)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5707),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5709))].join('')));
}

}
}
}

var expected__5122__auto___5718 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869)], null);
var actual__5123__auto___5719 = tic_tac_toe.play_game_web.play_human_turn.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(3));
if(cljs.core._EQ_.call(null,expected__5122__auto___5718,actual__5123__auto___5719)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto___5718 == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto___5718)),speclj.platform.endl,"     got: ",(((actual__5123__auto___5719 == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto___5719))," (using =)"].join('')));
}

var name__5364__auto__ = new cljs.core.Keyword(null,"player-move","player-move",1791931908);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"returns board when it is not an empty space",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var expected__5122__auto__ = tic_tac_toe.utility.player_move.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(0));
var actual__5123__auto__ = tic_tac_toe.play_game_web.play_human_turn.call(null,tic_tac_toe.utility.player_move.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.Keyword(null,"x","x",2099068185),(0)),new cljs.core.Keyword(null,"x","x",2099068185),(0));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"plays AI turn general",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var update_map_orig_val__5670_5720 = tic_tac_toe.play_game_web.update_map;
var process_game_board_orig_val__5671_5721 = tic_tac_toe.algorithm.process_game_board;
var update_map_temp_val__5672_5722 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.PersistentArrayMap.EMPTY);
var process_game_board_temp_val__5673_5723 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"player-move","player-move",1791931908),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_map = update_map_temp_val__5672_5722);

(tic_tac_toe.algorithm.process_game_board = process_game_board_temp_val__5673_5723);

try{tic_tac_toe.play_game_web.play_ai_turn.call(null,cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-ai","ai-vs-ai",-1248051511)], null)),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),(3));
}finally {(tic_tac_toe.algorithm.process_game_board = process_game_board_orig_val__5671_5721);

(tic_tac_toe.play_game_web.update_map = update_map_orig_val__5670_5720);
}
var name__5364__auto___5724 = new cljs.core.Keyword(null,"update","update",1045576396);
var options__5365__auto___5725 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto___5726 = speclj.stub.invocations_of.call(null,name__5364__auto___5724);
var times__5367__auto___5727 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5725);
var times_QMARK___5368__auto___5728 = typeof times__5367__auto___5727 === 'number';
var check_params_QMARK___5369__auto___5729 = cljs.core.contains_QMARK_.call(null,options__5365__auto___5725,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto___5730 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5725);
var with__5370__auto___5731__$1 = (((with__5370__auto___5730 == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto___5730);
var invocations_str__5371__auto___5732 = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto___5728) && (check_params_QMARK___5369__auto___5729))){
var matching_invocations__5373__auto___5733 = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5731__$1,p1__5362__5374__auto__);
}),invocations__5366__auto___5726);
var matching_count__5375__auto___5734 = cljs.core.count.call(null,matching_invocations__5373__auto___5733);
if(cljs.core._EQ_.call(null,times__5367__auto___5727,matching_count__5375__auto___5734)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5727)," ",invocations_str__5371__auto___5732.call(null,times__5367__auto___5727)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5724)," with ",cljs.core.pr_str.call(null,with__5370__auto___5731__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto___5734)," ",invocations_str__5371__auto___5732.call(null,matching_count__5375__auto___5734)].join('')));
}
} else {
if(check_params_QMARK___5369__auto___5729){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5731__$1,p1__5363__5376__auto__);
}),invocations__5366__auto___5726))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5724)," with ",cljs.core.pr_str.call(null,with__5370__auto___5731__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto___5726)].join('')));
}
} else {
if(times_QMARK___5368__auto___5728){
if(cljs.core._EQ_.call(null,times__5367__auto___5727,cljs.core.count.call(null,invocations__5366__auto___5726))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5727)," ",invocations_str__5371__auto___5732.call(null,times__5367__auto___5727)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5724),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5726))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto___5726)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5724),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5726))].join('')));
}

}
}
}

var expected__5122__auto___5735 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869),new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-ai","ai-vs-ai",-1248051511),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null);
var actual__5123__auto___5736 = tic_tac_toe.play_game_web.play_ai_turn.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-ai","ai-vs-ai",-1248051511)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null)),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),(3),(3));
if(cljs.core._EQ_.call(null,expected__5122__auto___5735,actual__5123__auto___5736)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto___5735 == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto___5735)),speclj.platform.endl,"     got: ",(((actual__5123__auto___5736 == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto___5736))," (using =)"].join('')));
}

var name__5364__auto__ = new cljs.core.Keyword(null,"player-move","player-move",1791931908);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting a board",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var board_menu = tic_tac_toe.play_game_web.select_board_menu.call(null);
var input_field_orig_val__5674 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__5675 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__5675);

try{var expected__5173__auto___5737 = "Select a Board: ";
var actual__5174__auto___5738 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_menu);
if((actual__5174__auto___5738 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5737 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5737)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5737 === 'string') && (typeof actual__5174__auto___5738 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5738.indexOf(expected__5173__auto___5737))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5737 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5737)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5738 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5738))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5737)) && (typeof actual__5174__auto___5738 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5737,actual__5174__auto___5738))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5738 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5738)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5737 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5737))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5738)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5738,expected__5173__auto___5737)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5737 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5737)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5738 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5738))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5738)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5737,p1__5172__5175__auto__);
}),actual__5174__auto___5738))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5737 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5737)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5738 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5738))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5737 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5737)));
var type_b__5104__auto__ = (((actual__5174__auto___5738 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5738)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5739 = "3 by 3";
var actual__5174__auto___5740 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_menu);
if((actual__5174__auto___5740 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5739 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5739)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5739 === 'string') && (typeof actual__5174__auto___5740 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5740.indexOf(expected__5173__auto___5739))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5739 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5739)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5740 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5740))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5739)) && (typeof actual__5174__auto___5740 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5739,actual__5174__auto___5740))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5740 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5740)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5739 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5739))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5740)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5740,expected__5173__auto___5739)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5739 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5739)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5740 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5740))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5740)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5739,p1__5172__5175__auto__);
}),actual__5174__auto___5740))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5739 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5739)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5740 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5740))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5739 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5739)));
var type_b__5104__auto__ = (((actual__5174__auto___5740 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5740)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_board_menu.call(null);

var name__5364__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__5674);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting a game-mode",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var game_menu = tic_tac_toe.play_game_web.select_game_mode.call(null);
var input_field_orig_val__5676 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__5677 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__5677);

try{var expected__5173__auto___5741 = "Select a Game type: ";
var actual__5174__auto___5742 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__5174__auto___5742 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5741 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5741)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5741 === 'string') && (typeof actual__5174__auto___5742 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5742.indexOf(expected__5173__auto___5741))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5741 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5741)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5742 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5742))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5741)) && (typeof actual__5174__auto___5742 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5741,actual__5174__auto___5742))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5742 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5742)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5741 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5741))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5742)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5742,expected__5173__auto___5741)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5741 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5741)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5742 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5742))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5742)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5741,p1__5172__5175__auto__);
}),actual__5174__auto___5742))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5741 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5741)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5742 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5742))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5741 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5741)));
var type_b__5104__auto__ = (((actual__5174__auto___5742 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5742)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5743 = "Player vs Computer";
var actual__5174__auto___5744 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__5174__auto___5744 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5743 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5743)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5743 === 'string') && (typeof actual__5174__auto___5744 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5744.indexOf(expected__5173__auto___5743))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5743 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5743)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5744 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5744))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5743)) && (typeof actual__5174__auto___5744 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5743,actual__5174__auto___5744))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5744 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5744)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5743 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5743))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5744)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5744,expected__5173__auto___5743)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5743 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5743)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5744 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5744))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5744)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5743,p1__5172__5175__auto__);
}),actual__5174__auto___5744))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5743 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5743)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5744 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5744))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5743 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5743)));
var type_b__5104__auto__ = (((actual__5174__auto___5744 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5744)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5745 = "Player vs Player";
var actual__5174__auto___5746 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__5174__auto___5746 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5745 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5745)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5745 === 'string') && (typeof actual__5174__auto___5746 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5746.indexOf(expected__5173__auto___5745))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5745 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5745)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5746 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5746))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5745)) && (typeof actual__5174__auto___5746 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5745,actual__5174__auto___5746))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5746 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5746)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5745 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5745))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5746)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5746,expected__5173__auto___5745)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5745 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5745)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5746 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5746))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5746)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5745,p1__5172__5175__auto__);
}),actual__5174__auto___5746))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5745 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5745)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5746 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5746))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5745 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5745)));
var type_b__5104__auto__ = (((actual__5174__auto___5746 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5746)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5747 = "Computer vs Computer";
var actual__5174__auto___5748 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_menu);
if((actual__5174__auto___5748 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5747 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5747)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5747 === 'string') && (typeof actual__5174__auto___5748 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5748.indexOf(expected__5173__auto___5747))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5747 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5747)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5748 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5748))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5747)) && (typeof actual__5174__auto___5748 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5747,actual__5174__auto___5748))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5748 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5748)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5747 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5747))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5748)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5748,expected__5173__auto___5747)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5747 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5747)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5748 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5748))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5748)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5747,p1__5172__5175__auto__);
}),actual__5174__auto___5748))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5747 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5747)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5748 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5748))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5747 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5747)));
var type_b__5104__auto__ = (((actual__5174__auto___5748 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5748)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_game_mode.call(null);

var name__5364__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(3)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__5676);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting difficulty",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var diff = tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807),"diff1");
var input_field_orig_val__5678 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__5679 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__5679);

try{var expected__5173__auto___5749 = "Select a difficulty for: Ai 1";
var actual__5174__auto___5750 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__5174__auto___5750 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5749 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5749)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5749 === 'string') && (typeof actual__5174__auto___5750 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5750.indexOf(expected__5173__auto___5749))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5749 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5749)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5750 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5750))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5749)) && (typeof actual__5174__auto___5750 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5749,actual__5174__auto___5750))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5750 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5750)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5749 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5749))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5750)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5750,expected__5173__auto___5749)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5749 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5749)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5750 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5750))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5750)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5749,p1__5172__5175__auto__);
}),actual__5174__auto___5750))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5749 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5749)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5750 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5750))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5749 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5749)));
var type_b__5104__auto__ = (((actual__5174__auto___5750 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5750)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5751 = "easy";
var actual__5174__auto___5752 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__5174__auto___5752 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5751 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5751)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5751 === 'string') && (typeof actual__5174__auto___5752 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5752.indexOf(expected__5173__auto___5751))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5751 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5751)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5752 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5752))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5751)) && (typeof actual__5174__auto___5752 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5751,actual__5174__auto___5752))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5752 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5752)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5751 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5751))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5752)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5752,expected__5173__auto___5751)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5751 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5751)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5752 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5752))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5752)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5751,p1__5172__5175__auto__);
}),actual__5174__auto___5752))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5751 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5751)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5752 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5752))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5751 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5751)));
var type_b__5104__auto__ = (((actual__5174__auto___5752 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5752)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5753 = "medium";
var actual__5174__auto___5754 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__5174__auto___5754 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5753 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5753)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5753 === 'string') && (typeof actual__5174__auto___5754 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5754.indexOf(expected__5173__auto___5753))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5753 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5753)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5754 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5754))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5753)) && (typeof actual__5174__auto___5754 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5753,actual__5174__auto___5754))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5754 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5754)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5753 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5753))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5754)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5754,expected__5173__auto___5753)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5753 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5753)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5754 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5754))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5754)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5753,p1__5172__5175__auto__);
}),actual__5174__auto___5754))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5753 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5753)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5754 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5754))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5753 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5753)));
var type_b__5104__auto__ = (((actual__5174__auto___5754 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5754)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5755 = "unbeatable";
var actual__5174__auto___5756 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(diff);
if((actual__5174__auto___5756 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5755 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5755)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5755 === 'string') && (typeof actual__5174__auto___5756 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5756.indexOf(expected__5173__auto___5755))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5755 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5755)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5756 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5756))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5755)) && (typeof actual__5174__auto___5756 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5755,actual__5174__auto___5756))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5756 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5756)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5755 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5755))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5756)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5756,expected__5173__auto___5755)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5755 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5755)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5756 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5756))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5756)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5755,p1__5172__5175__auto__);
}),actual__5174__auto___5756))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5755 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5755)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5756 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5756))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5755 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5755)));
var type_b__5104__auto__ = (((actual__5174__auto___5756 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5756)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 2",new cljs.core.Keyword(null,"difficulty","difficulty",755680807),"diff2");

var name__5364__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(4)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__5678);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"generates html for selecting player",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var player = tic_tac_toe.play_game_web.select_player_menu.call(null);
var input_field_orig_val__5680 = tic_tac_toe.play_game_web.input_field;
var input_field_temp_val__5681 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"input-field","input-field",289353943),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.input_field = input_field_temp_val__5681);

try{var expected__5173__auto___5757 = "Select a player";
var actual__5174__auto___5758 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__5174__auto___5758 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5757 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5757)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5757 === 'string') && (typeof actual__5174__auto___5758 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5758.indexOf(expected__5173__auto___5757))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5757 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5757)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5758 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5758))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5757)) && (typeof actual__5174__auto___5758 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5757,actual__5174__auto___5758))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5758 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5758)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5757 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5757))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5758)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5758,expected__5173__auto___5757)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5757 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5757)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5758 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5758))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5758)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5757,p1__5172__5175__auto__);
}),actual__5174__auto___5758))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5757 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5757)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5758 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5758))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5757 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5757)));
var type_b__5104__auto__ = (((actual__5174__auto___5758 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5758)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5759 = "X";
var actual__5174__auto___5760 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__5174__auto___5760 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5759 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5759)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5759 === 'string') && (typeof actual__5174__auto___5760 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5760.indexOf(expected__5173__auto___5759))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5759 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5759)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5760 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5760))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5759)) && (typeof actual__5174__auto___5760 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5759,actual__5174__auto___5760))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5760 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5760)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5759 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5759))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5760)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5760,expected__5173__auto___5759)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5759 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5759)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5760 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5760))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5760)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5759,p1__5172__5175__auto__);
}),actual__5174__auto___5760))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5759 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5759)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5760 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5760))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5759 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5759)));
var type_b__5104__auto__ = (((actual__5174__auto___5760 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5760)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5761 = "O";
var actual__5174__auto___5762 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__5174__auto___5762 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5761 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5761)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5761 === 'string') && (typeof actual__5174__auto___5762 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5762.indexOf(expected__5173__auto___5761))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5761 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5761)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5762 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5762))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5761)) && (typeof actual__5174__auto___5762 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5761,actual__5174__auto___5762))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5762 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5762)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5761 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5761))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5762)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5762,expected__5173__auto___5761)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5761 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5761)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5762 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5762))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5762)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5761,p1__5172__5175__auto__);
}),actual__5174__auto___5762))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5761 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5761)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5762 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5762))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5761 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5761)));
var type_b__5104__auto__ = (((actual__5174__auto___5762 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5762)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5763 = "NA";
var actual__5174__auto___5764 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(player);
if((actual__5174__auto___5764 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5763 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5763)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5763 === 'string') && (typeof actual__5174__auto___5764 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5764.indexOf(expected__5173__auto___5763))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5763 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5763)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5764 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5764))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5763)) && (typeof actual__5174__auto___5764 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5763,actual__5174__auto___5764))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5764 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5764)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5763 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5763))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5764)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5764,expected__5173__auto___5763)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5763 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5763)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5764 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5764))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5764)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5763,p1__5172__5175__auto__);
}),actual__5174__auto___5764))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5763 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5763)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5764 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5764))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5763 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5763)));
var type_b__5104__auto__ = (((actual__5174__auto___5764 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5764)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

tic_tac_toe.play_game_web.select_player_menu.call(null);

var name__5364__auto__ = new cljs.core.Keyword(null,"input-field","input-field",289353943);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(3)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.input_field = input_field_orig_val__5680);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"creates a square",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),true);

var expected__5173__auto___5765 = "[:td [:button {:id 3, :style {:color \"blue\", :font-size \"30px\", :display \"inline-block\", :background-color \"black\", :padding \"50px 50px\"}";
var actual__5174__auto___5766 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_square.call(null,cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom),(3)));
if((actual__5174__auto___5766 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5765 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5765)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5765 === 'string') && (typeof actual__5174__auto___5766 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5766.indexOf(expected__5173__auto___5765))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5765 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5765)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5766 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5766))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5765)) && (typeof actual__5174__auto___5766 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5765,actual__5174__auto___5766))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5766 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5766)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5765 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5765))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5766)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5766,expected__5173__auto___5765)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5765 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5765)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5766 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5766))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5766)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5765,p1__5172__5175__auto__);
}),actual__5174__auto___5766))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5765 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5765)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5766 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5766))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5765 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5765)));
var type_b__5104__auto__ = (((actual__5174__auto___5766 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5766)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto__ = ":on-click #object[Function]} nil]]";
var actual__5174__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_square.call(null,cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom),(3)));
if((actual__5174__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto__ === 'string') && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto__.indexOf(expected__5173__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto__)) && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto__,actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__)),speclj.platform.endl,"to match: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto__,expected__5173__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto__,p1__5172__5175__auto__);
}),actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto__)));
var type_b__5104__auto__ = (((actual__5174__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"creates a row of squares",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var create_square_orig_val__5682 = tic_tac_toe.play_game_web.create_square;
var create_square_temp_val__5683 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"square","square",812434677),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.create_square = create_square_temp_val__5683);

try{tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)));

tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.web_page_spec.test_atom,new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),true);

tic_tac_toe.play_game_web.create_row.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom)),(1));

var expected__5122__auto__ = "[:tr (nil nil nil)]";
var actual__5123__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.create_row.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.web_page_spec.test_atom)),(1)));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
}finally {(tic_tac_toe.play_game_web.create_square = create_square_orig_val__5682);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"starts game",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var update_map_orig_val__5684 = tic_tac_toe.play_game_web.update_map;
var add_to_map_orig_val__5685 = tic_tac_toe.play_game_web.add_to_map;
var update_map_temp_val__5686 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update-map","update-map",1098138072),cljs.core.PersistentArrayMap.EMPTY);
var add_to_map_temp_val__5687 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"add","add",235287739),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_map = update_map_temp_val__5686);

(tic_tac_toe.play_game_web.add_to_map = add_to_map_temp_val__5687);

try{tic_tac_toe.play_game_web.start_game.call(null);

var name__5364__auto___5767 = new cljs.core.Keyword(null,"update-map","update-map",1098138072);
var options__5365__auto___5768 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(2)], null);
var invocations__5366__auto___5769 = speclj.stub.invocations_of.call(null,name__5364__auto___5767);
var times__5367__auto___5770 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5768);
var times_QMARK___5368__auto___5771 = typeof times__5367__auto___5770 === 'number';
var check_params_QMARK___5369__auto___5772 = cljs.core.contains_QMARK_.call(null,options__5365__auto___5768,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto___5773 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5768);
var with__5370__auto___5774__$1 = (((with__5370__auto___5773 == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto___5773);
var invocations_str__5371__auto___5775 = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto___5771) && (check_params_QMARK___5369__auto___5772))){
var matching_invocations__5373__auto___5776 = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5774__$1,p1__5362__5374__auto__);
}),invocations__5366__auto___5769);
var matching_count__5375__auto___5777 = cljs.core.count.call(null,matching_invocations__5373__auto___5776);
if(cljs.core._EQ_.call(null,times__5367__auto___5770,matching_count__5375__auto___5777)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5770)," ",invocations_str__5371__auto___5775.call(null,times__5367__auto___5770)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5767)," with ",cljs.core.pr_str.call(null,with__5370__auto___5774__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto___5777)," ",invocations_str__5371__auto___5775.call(null,matching_count__5375__auto___5777)].join('')));
}
} else {
if(check_params_QMARK___5369__auto___5772){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5774__$1,p1__5363__5376__auto__);
}),invocations__5366__auto___5769))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5767)," with ",cljs.core.pr_str.call(null,with__5370__auto___5774__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto___5769)].join('')));
}
} else {
if(times_QMARK___5368__auto___5771){
if(cljs.core._EQ_.call(null,times__5367__auto___5770,cljs.core.count.call(null,invocations__5366__auto___5769))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5770)," ",invocations_str__5371__auto___5775.call(null,times__5367__auto___5770)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5767),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5769))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto___5769)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5767),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5769))].join('')));
}

}
}
}

var name__5364__auto__ = new cljs.core.Keyword(null,"add","add",235287739);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.add_to_map = add_to_map_orig_val__5685);

(tic_tac_toe.play_game_web.update_map = update_map_orig_val__5684);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"resets all pieces to empty",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var expected__5122__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null);
var actual__5123__auto__ = tic_tac_toe.play_game_web.return_beginning_board.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198)], null));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null," generates html for reset button",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var expected__5122__auto__ = "[:button {:style {:color \"blue\"}, :on-click #object[Function]} \"restart\"]";
var actual__5123__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.play_game_web.restart_button.call(null));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false),speclj.components.new_characteristic.call(null,"restarts game",((function (_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692){
return (function (){
var update_state_only_orig_val__5688 = tic_tac_toe.play_game_web.update_state_only;
var update_map_orig_val__5689 = tic_tac_toe.play_game_web.update_map;
var update_state_only_temp_val__5690 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"beg","beg",-1687504749),cljs.core.PersistentArrayMap.EMPTY);
var update_map_temp_val__5691 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_game_web.update_state_only = update_state_only_temp_val__5690);

(tic_tac_toe.play_game_web.update_map = update_map_temp_val__5691);

try{tic_tac_toe.play_game_web.restart_game.call(null);

var name__5364__auto___5778 = new cljs.core.Keyword(null,"beg","beg",-1687504749);
var options__5365__auto___5779 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto___5780 = speclj.stub.invocations_of.call(null,name__5364__auto___5778);
var times__5367__auto___5781 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5779);
var times_QMARK___5368__auto___5782 = typeof times__5367__auto___5781 === 'number';
var check_params_QMARK___5369__auto___5783 = cljs.core.contains_QMARK_.call(null,options__5365__auto___5779,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto___5784 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto___5779);
var with__5370__auto___5785__$1 = (((with__5370__auto___5784 == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto___5784);
var invocations_str__5371__auto___5786 = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto___5782) && (check_params_QMARK___5369__auto___5783))){
var matching_invocations__5373__auto___5787 = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5785__$1,p1__5362__5374__auto__);
}),invocations__5366__auto___5780);
var matching_count__5375__auto___5788 = cljs.core.count.call(null,matching_invocations__5373__auto___5787);
if(cljs.core._EQ_.call(null,times__5367__auto___5781,matching_count__5375__auto___5788)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5781)," ",invocations_str__5371__auto___5786.call(null,times__5367__auto___5781)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5778)," with ",cljs.core.pr_str.call(null,with__5370__auto___5785__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto___5788)," ",invocations_str__5371__auto___5786.call(null,matching_count__5375__auto___5788)].join('')));
}
} else {
if(check_params_QMARK___5369__auto___5783){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto___5785__$1,p1__5363__5376__auto__);
}),invocations__5366__auto___5780))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5778)," with ",cljs.core.pr_str.call(null,with__5370__auto___5785__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto___5780)].join('')));
}
} else {
if(times_QMARK___5368__auto___5782){
if(cljs.core._EQ_.call(null,times__5367__auto___5781,cljs.core.count.call(null,invocations__5366__auto___5780))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto___5781)," ",invocations_str__5371__auto___5786.call(null,times__5367__auto___5781)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5778),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5780))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto___5780)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto___5778),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto___5780))].join('')));
}

}
}
}

var name__5364__auto__ = new cljs.core.Keyword(null,"map","map",1371690461);
var options__5365__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"times","times",1671571467),(1)], null);
var invocations__5366__auto__ = speclj.stub.invocations_of.call(null,name__5364__auto__);
var times__5367__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var times_QMARK___5368__auto__ = typeof times__5367__auto__ === 'number';
var check_params_QMARK___5369__auto__ = cljs.core.contains_QMARK_.call(null,options__5365__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__5370__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__5365__auto__);
var with__5370__auto____$1 = (((with__5370__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__5370__auto__);
var invocations_str__5371__auto__ = (function (p1__5361__5372__auto__){
if(cljs.core._EQ_.call(null,(1),p1__5361__5372__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___5368__auto__) && (check_params_QMARK___5369__auto__))){
var matching_invocations__5373__auto__ = cljs.core.filter.call(null,(function (p1__5362__5374__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5362__5374__auto__);
}),invocations__5366__auto__);
var matching_count__5375__auto__ = cljs.core.count.call(null,matching_invocations__5373__auto__);
if(cljs.core._EQ_.call(null,times__5367__auto__,matching_count__5375__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__5375__auto__)," ",invocations_str__5371__auto__.call(null,matching_count__5375__auto__)].join('')));
}
} else {
if(check_params_QMARK___5369__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5363__5376__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__5370__auto____$1,p1__5363__5376__auto__);
}),invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__)," with ",cljs.core.pr_str.call(null,with__5370__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__5366__auto__)].join('')));
}
} else {
if(times_QMARK___5368__auto__){
if(cljs.core._EQ_.call(null,times__5367__auto__,cljs.core.count.call(null,invocations__5366__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__5367__auto__)," ",invocations_str__5371__auto__.call(null,times__5367__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__5366__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__5364__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__5366__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_game_web.update_map = update_map_orig_val__5689);

(tic_tac_toe.play_game_web.update_state_only = update_state_only_orig_val__5688);
}});})(_STAR_parent_description_STAR__orig_val__5630_5693,_STAR_parent_description_STAR__temp_val__5631_5694,description__4989__auto___5692))
,false)],null)));
var chunk__5633_5696 = null;
var count__5634_5697 = (0);
var i__5635_5698 = (0);
while(true){
if((i__5635_5698 < count__5634_5697)){
var component__4990__auto___5789 = cljs.core._nth.call(null,chunk__5633_5696,i__5635_5698);
speclj.components.install.call(null,component__4990__auto___5789,description__4989__auto___5692);


var G__5790 = seq__5632_5695;
var G__5791 = chunk__5633_5696;
var G__5792 = count__5634_5697;
var G__5793 = (i__5635_5698 + (1));
seq__5632_5695 = G__5790;
chunk__5633_5696 = G__5791;
count__5634_5697 = G__5792;
i__5635_5698 = G__5793;
continue;
} else {
var temp__5818__auto___5794 = cljs.core.seq.call(null,seq__5632_5695);
if(temp__5818__auto___5794){
var seq__5632_5795__$1 = temp__5818__auto___5794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5632_5795__$1)){
var c__4556__auto___5796 = cljs.core.chunk_first.call(null,seq__5632_5795__$1);
var G__5797 = cljs.core.chunk_rest.call(null,seq__5632_5795__$1);
var G__5798 = c__4556__auto___5796;
var G__5799 = cljs.core.count.call(null,c__4556__auto___5796);
var G__5800 = (0);
seq__5632_5695 = G__5797;
chunk__5633_5696 = G__5798;
count__5634_5697 = G__5799;
i__5635_5698 = G__5800;
continue;
} else {
var component__4990__auto___5801 = cljs.core.first.call(null,seq__5632_5795__$1);
speclj.components.install.call(null,component__4990__auto___5801,description__4989__auto___5692);


var G__5802 = cljs.core.next.call(null,seq__5632_5795__$1);
var G__5803 = null;
var G__5804 = (0);
var G__5805 = (0);
seq__5632_5695 = G__5802;
chunk__5633_5696 = G__5803;
count__5634_5697 = G__5804;
i__5635_5698 = G__5805;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5630_5693);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4989__auto___5692);
}


//# sourceMappingURL=web_page_spec.js.map

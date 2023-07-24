// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('tic_tac_toe.play_game_web');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('tic_tac_toe.utility');
goog.require('tic_tac_toe.algorithm');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.play_game_web !== 'undefined') && (typeof tic_tac_toe.play_game_web.game_map !== 'undefined')){
} else {
tic_tac_toe.play_game_web.game_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.__GT_game_state(null,null,(0),null,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$playing_QMARK_,false], null)));
}
tic_tac_toe.play_game_web.update_map = (function tic_tac_toe$play_game_web$update_map(game_map,key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game_map,cljs.core.assoc,key,value);
});
tic_tac_toe.play_game_web.add_to_map = (function tic_tac_toe$play_game_web$add_to_map(game_map,key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game_map,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]));
});
tic_tac_toe.play_game_web.update_board = (function tic_tac_toe$play_game_web$update_board(game_map,key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(game_map,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value])], 0));
});
tic_tac_toe.play_game_web.play_human_turn = (function tic_tac_toe$play_game_web$play_human_turn(board,current_player,move){
if(tic_tac_toe.utility.is_empty_QMARK_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),move)){
tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$player,tic_tac_toe.utility.switch_player(current_player));

return tic_tac_toe.utility.player_move(board,current_player,move);
} else {
return board;
}
});
tic_tac_toe.play_game_web.play_ai_turn = (function tic_tac_toe$play_game_web$play_ai_turn(board,current_player,player,diff,diff2){
tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$player,tic_tac_toe.utility.switch_player(current_player));

return (tic_tac_toe.algorithm.process_game_board.cljs$core$IFn$_invoke$arity$5 ? tic_tac_toe.algorithm.process_game_board.cljs$core$IFn$_invoke$arity$5(board,current_player,player,diff,diff2) : tic_tac_toe.algorithm.process_game_board.call(null,board,current_player,player,diff,diff2));
});
tic_tac_toe.play_game_web.update_game_state = (function tic_tac_toe$play_game_web$update_game_state(board){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tic_tac_toe.play_game_web.game_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board], null),board);
});
tic_tac_toe.play_game_web.update_state_only = (function tic_tac_toe$play_game_web$update_state_only(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tic_tac_toe.play_game_web.game_map,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,cljs.core.cst$kw$state], null),cljs.core.constantly(state));
});
tic_tac_toe.play_game_web.key_string = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,"X",cljs.core.cst$kw$o,"O",cljs.core.cst$kw$e,"~"], null);
tic_tac_toe.play_game_web.key_to_string = (function tic_tac_toe$play_game_web$key_to_string(marker){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.play_game_web.key_string,marker);
});
tic_tac_toe.play_game_web.terminal_to_winner = new cljs.core.PersistentArrayMap(null, 3, [(10),"Player X has won!",(-10),"Player O has won!",(0),"The game is a draw"], null);
tic_tac_toe.play_game_web.input_field = (function tic_tac_toe$play_game_web$input_field(name,value,update){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$name,name,cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,update], null)], null);
});
tic_tac_toe.play_game_web.select_board_menu = (function tic_tac_toe$play_game_web$select_board_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Select a Board: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"3 by 3"], null),tic_tac_toe.play_game_web.input_field("board",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.__GT_Three_by_three().tic_tac_toe$utility$Board$init_board$arity$1(null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$gui], null)),(function (){
return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$board,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.__GT_Three_by_three().tic_tac_toe$utility$Board$init_board$arity$1(null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$gui], null)));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"4 by 4"], null),tic_tac_toe.play_game_web.input_field("board",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.__GT_Four_by_four().tic_tac_toe$utility$Board$init_board$arity$1(null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$gui], null)),(function (){
return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$board,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.__GT_Four_by_four().tic_tac_toe$utility$Board$init_board$arity$1(null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$gui], null)));
}))], null)], null);
});
tic_tac_toe.play_game_web.select_game_mode = (function tic_tac_toe$play_game_web$select_game_mode(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Select a Game type: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Player vs Computer"], null),tic_tac_toe.play_game_web.input_field("mode",cljs.core.cst$kw$ai_DASH_vs_DASH_human,(function (){
return tic_tac_toe.play_game_web.update_board(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$game_DASH_type,cljs.core.cst$kw$ai_DASH_vs_DASH_human);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Player vs Player"], null),tic_tac_toe.play_game_web.input_field("mode",cljs.core.cst$kw$human_DASH_vs_DASH_human,(function (){
return tic_tac_toe.play_game_web.update_board(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$game_DASH_type,cljs.core.cst$kw$human_DASH_vs_DASH_human);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Computer vs Computer"], null),tic_tac_toe.play_game_web.input_field("mode",cljs.core.cst$kw$ai_DASH_vs_DASH_ai,(function (){
return tic_tac_toe.play_game_web.update_board(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$game_DASH_type,cljs.core.cst$kw$ai_DASH_vs_DASH_ai);
}))], null)], null);
});
tic_tac_toe.play_game_web.select_difficulty = (function tic_tac_toe$play_game_web$select_difficulty(ai_number,ai_keyword,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,["Select a difficulty for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ai_number)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"easy"], null),tic_tac_toe.play_game_web.input_field(name,(1),(function (){
return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,ai_keyword,(1));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"medium"], null),tic_tac_toe.play_game_web.input_field(name,(2),(function (){
return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,ai_keyword,(2));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"unbeatable"], null),tic_tac_toe.play_game_web.input_field(name,(3),(function (){
return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,ai_keyword,(3));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"NA"], null),tic_tac_toe.play_game_web.input_field(name,(0),(function (){
return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,ai_keyword,(0));
}))], null)], null);
});
tic_tac_toe.play_game_web.select_player_menu = (function tic_tac_toe$play_game_web$select_player_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Select a player: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"X"], null),tic_tac_toe.play_game_web.input_field("player",cljs.core.cst$kw$x,(function (){
return tic_tac_toe.play_game_web.update_board(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$user_DASH_player,cljs.core.cst$kw$x);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"O"], null),tic_tac_toe.play_game_web.input_field("player",cljs.core.cst$kw$o,(function (){
return tic_tac_toe.play_game_web.update_board(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$user_DASH_player,cljs.core.cst$kw$o);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"NA"], null),tic_tac_toe.play_game_web.input_field("player",cljs.core.cst$kw$x,(function (){
return tic_tac_toe.play_game_web.update_board(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$user_DASH_player,cljs.core.cst$kw$x);
}))], null)], null);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.play_game_web !== 'undefined') && (typeof tic_tac_toe.play_game_web.create_square !== 'undefined')){
} else {
tic_tac_toe.play_game_web.create_square = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6318 = cljs.core.get_global_hierarchy;
return (fexpr__6318.cljs$core$IFn$_invoke$arity$0 ? fexpr__6318.cljs$core$IFn$_invoke$arity$0() : fexpr__6318.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.play-game-web","create-square"),cljs.core.cst$kw$human_DASH_turn_QMARK_,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.play_game_web.create_square.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function (current_game_map,position){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,position,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$color,"blue",cljs.core.cst$kw$font_DASH_size,"30px",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$background_DASH_color,"black",cljs.core.cst$kw$padding,"50px 50px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return tic_tac_toe.play_game_web.update_game_state(tic_tac_toe.play_game_web.play_human_turn(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(current_game_map),cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(current_game_map),position));
})], null),tic_tac_toe.play_game_web.key_to_string(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map))),position))], null)], null));
}));
tic_tac_toe.play_game_web.create_square.cljs$core$IMultiFn$_add_method$arity$3(null,false,(function (current_game_map,position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,position,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$color,"blue",cljs.core.cst$kw$font_DASH_size,"30px",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$background_DASH_color,"black",cljs.core.cst$kw$padding,"50px 50px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return tic_tac_toe.play_game_web.update_game_state(tic_tac_toe.play_game_web.play_ai_turn(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(current_game_map),cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(current_game_map),cljs.core.cst$kw$user_DASH_player.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(current_game_map)),cljs.core.cst$kw$difficulty.cljs$core$IFn$_invoke$arity$1(current_game_map),cljs.core.cst$kw$difficulty2.cljs$core$IFn$_invoke$arity$1(current_game_map)));
})], null),tic_tac_toe.play_game_web.key_to_string(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map))),position))], null)], null);
}));
tic_tac_toe.play_game_web.create_row = (function tic_tac_toe$play_game_web$create_row(board,row_number){
var size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__4529__auto__ = (function tic_tac_toe$play_game_web$create_row_$_iter__6319(s__6320){
return (new cljs.core.LazySeq(null,(function (){
var s__6320__$1 = s__6320;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__6320__$1);
if(temp__5818__auto__){
var s__6320__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6320__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6320__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6322 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6321 = (0);
while(true){
if((i__6321 < size__4528__auto__)){
var pos = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6321);
cljs.core.chunk_append(b__6322,(function (){var G__6323 = cljs.core.deref(tic_tac_toe.play_game_web.game_map);
var G__6324 = ((row_number * size) + pos);
return (tic_tac_toe.play_game_web.create_square.cljs$core$IFn$_invoke$arity$2 ? tic_tac_toe.play_game_web.create_square.cljs$core$IFn$_invoke$arity$2(G__6323,G__6324) : tic_tac_toe.play_game_web.create_square.call(null,G__6323,G__6324));
})());

var G__6327 = (i__6321 + (1));
i__6321 = G__6327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6322),tic_tac_toe$play_game_web$create_row_$_iter__6319(cljs.core.chunk_rest(s__6320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6322),null);
}
} else {
var pos = cljs.core.first(s__6320__$2);
return cljs.core.cons((function (){var G__6325 = cljs.core.deref(tic_tac_toe.play_game_web.game_map);
var G__6326 = ((row_number * size) + pos);
return (tic_tac_toe.play_game_web.create_square.cljs$core$IFn$_invoke$arity$2 ? tic_tac_toe.play_game_web.create_square.cljs$core$IFn$_invoke$arity$2(G__6325,G__6326) : tic_tac_toe.play_game_web.create_square.call(null,G__6325,G__6326));
})(),tic_tac_toe$play_game_web$create_row_$_iter__6319(cljs.core.rest(s__6320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})()], null);
});
tic_tac_toe.play_game_web.return_beginning_board = (function tic_tac_toe$play_game_web$return_beginning_board(board){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return cljs.core.cst$kw$e;
}),board));
});
tic_tac_toe.play_game_web.restart_game = (function tic_tac_toe$play_game_web$restart_game(){
tic_tac_toe.play_game_web.update_state_only(tic_tac_toe.play_game_web.return_beginning_board(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)))));

return tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$player,cljs.core.cst$kw$x);
});
tic_tac_toe.play_game_web.restart_button = (function tic_tac_toe$play_game_web$restart_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return tic_tac_toe.play_game_web.restart_game();
})], null),"restart"], null);
});
tic_tac_toe.play_game_web.create_game_board = (function tic_tac_toe$play_game_web$create_game_board(){
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map));
var size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board);
tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$human_DASH_turn_QMARK_,tic_tac_toe.algorithm.human_turn_QMARK_(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)),cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)),cljs.core.cst$kw$user_DASH_player.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)))));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$height,"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,(function (){var iter__4529__auto__ = (function tic_tac_toe$play_game_web$create_game_board_$_iter__6328(s__6329){
return (new cljs.core.LazySeq(null,(function (){
var s__6329__$1 = s__6329;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__6329__$1);
if(temp__5818__auto__){
var s__6329__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6329__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6329__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6331 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6330 = (0);
while(true){
if((i__6330 < size__4528__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6330);
cljs.core.chunk_append(b__6331,tic_tac_toe.play_game_web.create_row(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)),row));

var G__6332 = (i__6330 + (1));
i__6330 = G__6332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6331),tic_tac_toe$play_game_web$create_game_board_$_iter__6328(cljs.core.chunk_rest(s__6329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6331),null);
}
} else {
var row = cljs.core.first(s__6329__$2);
return cljs.core.cons(tic_tac_toe.play_game_web.create_row(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)),row),tic_tac_toe$play_game_web$create_game_board_$_iter__6328(cljs.core.rest(s__6329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})()], null),tic_tac_toe.play_game_web.restart_button(),(cljs.core.truth_(tic_tac_toe.utility.terminal_QMARK_(board))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.play_game_web.terminal_to_winner,tic_tac_toe.utility.terminal_state(board))], null):null)], null);
});
tic_tac_toe.play_game_web.start_game = (function tic_tac_toe$play_game_web$start_game(){
tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$playing_QMARK_,true);

tic_tac_toe.play_game_web.update_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$player,cljs.core.cst$kw$x);

return tic_tac_toe.play_game_web.add_to_map(tic_tac_toe.play_game_web.game_map,cljs.core.cst$kw$human_DASH_turn_QMARK_,tic_tac_toe.algorithm.human_turn_QMARK_(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)),cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)),cljs.core.cst$kw$user_DASH_player.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)))));
});
tic_tac_toe.play_game_web.render_menu = (function tic_tac_toe$play_game_web$render_menu(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,tic_tac_toe.play_game_web.select_board_menu(),tic_tac_toe.play_game_web.select_game_mode(),tic_tac_toe.play_game_web.select_difficulty("Ai 1",cljs.core.cst$kw$difficulty,"diff1"),tic_tac_toe.play_game_web.select_difficulty("Ai 2",cljs.core.cst$kw$difficulty2,"diff2"),tic_tac_toe.play_game_web.select_player_menu(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return tic_tac_toe.play_game_web.start_game();
})], null),"Start Game"], null)], null);
});
tic_tac_toe.play_game_web.create_game = (function tic_tac_toe$play_game_web$create_game(){
if(cljs.core.truth_(cljs.core.cst$kw$playing_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.play_game_web.game_map)))){
return tic_tac_toe.play_game_web.create_game_board();
} else {
return tic_tac_toe.play_game_web.render_menu();
}
});
tic_tac_toe.play_game_web.run_ttt = (function tic_tac_toe$play_game_web$run_ttt(){
return tic_tac_toe.play_game_web.create_game();
});

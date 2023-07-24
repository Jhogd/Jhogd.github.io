// Compiled by ClojureScript 1.10.764 {}
goog.provide('tic_tac_toe.play_game_web');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tic_tac_toe.utility');
goog.require('tic_tac_toe.algorithm');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.play_game_web !== 'undefined') && (typeof tic_tac_toe.play_game_web.game_map !== 'undefined')){
} else {
tic_tac_toe.play_game_web.game_map = reagent.core.atom.call(null,cljs.core.conj.call(null,tic_tac_toe.utility.__GT_game_state.call(null,null,null,(0),null,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], null)));
}
tic_tac_toe.play_game_web.update_map = (function tic_tac_toe$play_game_web$update_map(game_map,key,value){
return cljs.core.swap_BANG_.call(null,game_map,cljs.core.assoc,key,value);
});
tic_tac_toe.play_game_web.add_to_map = (function tic_tac_toe$play_game_web$add_to_map(game_map,key,value){
return cljs.core.swap_BANG_.call(null,game_map,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]));
});
tic_tac_toe.play_game_web.update_board = (function tic_tac_toe$play_game_web$update_board(game_map,key,value){
return cljs.core.swap_BANG_.call(null,game_map,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]));
});
tic_tac_toe.play_game_web.play_human_turn = (function tic_tac_toe$play_game_web$play_human_turn(board,current_player,move){
if(tic_tac_toe.utility.is_empty_QMARK_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),move)){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"player","player",-97687400),tic_tac_toe.utility.switch_player.call(null,current_player));

return tic_tac_toe.utility.player_move.call(null,board,current_player,move);
} else {
return board;
}
});
tic_tac_toe.play_game_web.play_ai_turn = (function tic_tac_toe$play_game_web$play_ai_turn(board,current_player,player,diff,diff2){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"player","player",-97687400),tic_tac_toe.utility.switch_player.call(null,current_player));

return tic_tac_toe.algorithm.process_game_board.call(null,board,current_player,player,diff,diff2);
});
tic_tac_toe.play_game_web.update_game_state = (function tic_tac_toe$play_game_web$update_game_state(board){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.play_game_web.game_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),board);
});
tic_tac_toe.play_game_web.update_state_only = (function tic_tac_toe$play_game_web$update_state_only(state){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.play_game_web.game_map,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.constantly.call(null,state));
});
tic_tac_toe.play_game_web.key_string = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),"X",new cljs.core.Keyword(null,"o","o",-1350007228),"O",new cljs.core.Keyword(null,"e","e",1381269198),"~"], null);
tic_tac_toe.play_game_web.key_to_string = (function tic_tac_toe$play_game_web$key_to_string(marker){
return cljs.core.get.call(null,tic_tac_toe.play_game_web.key_string,marker);
});
tic_tac_toe.play_game_web.terminal_to_winner = new cljs.core.PersistentArrayMap(null, 3, [(10),"Player X has won!",(-10),"Player O has won!",(0),"The game is a draw"], null);
tic_tac_toe.play_game_web.input_field = (function tic_tac_toe$play_game_web$input_field(name,value,update){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),update], null)], null);
});
tic_tac_toe.play_game_web.select_board_menu = (function tic_tac_toe$play_game_web$select_board_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Select a Board: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"3 by 3"], null),tic_tac_toe.play_game_web.input_field.call(null,"board",cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null)),(function (){
return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Three_by_three.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null)));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"4 by 4"], null),tic_tac_toe.play_game_web.input_field.call(null,"board",cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Four_by_four.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null)),(function (){
return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.conj.call(null,tic_tac_toe.utility.init_board.call(null,tic_tac_toe.utility.__GT_Four_by_four.call(null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"gui","gui",604532813)], null)));
}))], null)], null);
});
tic_tac_toe.play_game_web.select_game_mode = (function tic_tac_toe$play_game_web$select_game_mode(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Select a Game type: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Player vs Computer"], null),tic_tac_toe.play_game_web.input_field.call(null,"mode",new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622),(function (){
return tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Player vs Player"], null),tic_tac_toe.play_game_web.input_field.call(null,"mode",new cljs.core.Keyword(null,"human-vs-human","human-vs-human",-981001222),(function (){
return tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"human-vs-human","human-vs-human",-981001222));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Computer vs Computer"], null),tic_tac_toe.play_game_web.input_field.call(null,"mode",new cljs.core.Keyword(null,"ai-vs-ai","ai-vs-ai",-1248051511),(function (){
return tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"game-type","game-type",-1745309040),new cljs.core.Keyword(null,"ai-vs-ai","ai-vs-ai",-1248051511));
}))], null)], null);
});
tic_tac_toe.play_game_web.select_difficulty = (function tic_tac_toe$play_game_web$select_difficulty(ai_number,ai_keyword,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),["Select a difficulty for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ai_number)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"easy"], null),tic_tac_toe.play_game_web.input_field.call(null,name,(1),(function (){
return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,ai_keyword,(1));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"medium"], null),tic_tac_toe.play_game_web.input_field.call(null,name,(2),(function (){
return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,ai_keyword,(2));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"unbeatable"], null),tic_tac_toe.play_game_web.input_field.call(null,name,(3),(function (){
return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,ai_keyword,(3));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"NA"], null),tic_tac_toe.play_game_web.input_field.call(null,name,(0),(function (){
return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,ai_keyword,(0));
}))], null)], null);
});
tic_tac_toe.play_game_web.select_player_menu = (function tic_tac_toe$play_game_web$select_player_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Select a player: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"X"], null),tic_tac_toe.play_game_web.input_field.call(null,"player",new cljs.core.Keyword(null,"x","x",2099068185),(function (){
return tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"user-player","user-player",-501223698),new cljs.core.Keyword(null,"x","x",2099068185));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"O"], null),tic_tac_toe.play_game_web.input_field.call(null,"player",new cljs.core.Keyword(null,"o","o",-1350007228),(function (){
return tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"user-player","user-player",-501223698),new cljs.core.Keyword(null,"o","o",-1350007228));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"NA"], null),tic_tac_toe.play_game_web.input_field.call(null,"player",new cljs.core.Keyword(null,"x","x",2099068185),(function (){
return tic_tac_toe.play_game_web.update_board.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"user-player","user-player",-501223698),new cljs.core.Keyword(null,"x","x",2099068185));
}))], null)], null);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.play_game_web !== 'undefined') && (typeof tic_tac_toe.play_game_web.create_square !== 'undefined')){
} else {
tic_tac_toe.play_game_web.create_square = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.play-game-web","create-square"),new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.play_game_web.create_square,true,(function (current_game_map,position){
return cljs.core.doall.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),position,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"padding","padding",1660304693),"50px 50px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.play_game_web.update_game_state.call(null,tic_tac_toe.play_game_web.play_human_turn.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(current_game_map),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(current_game_map),position));
})], null),tic_tac_toe.play_game_web.key_to_string.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map))),position))], null)], null));
}));
cljs.core._add_method.call(null,tic_tac_toe.play_game_web.create_square,false,(function (current_game_map,position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),position,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"padding","padding",1660304693),"50px 50px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.play_game_web.update_game_state.call(null,tic_tac_toe.play_game_web.play_ai_turn.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(current_game_map),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(current_game_map),new cljs.core.Keyword(null,"user-player","user-player",-501223698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(current_game_map)),new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(current_game_map),new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286).cljs$core$IFn$_invoke$arity$1(current_game_map)));
})], null),tic_tac_toe.play_game_web.key_to_string.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map))),position))], null)], null);
}));
tic_tac_toe.play_game_web.create_row = (function tic_tac_toe$play_game_web$create_row(board,row_number){
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function tic_tac_toe$play_game_web$create_row_$_iter__5867(s__5868){
return (new cljs.core.LazySeq(null,(function (){
var s__5868__$1 = s__5868;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5868__$1);
if(temp__5818__auto__){
var s__5868__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5868__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5868__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5870 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5869 = (0);
while(true){
if((i__5869 < size__4528__auto__)){
var pos = cljs.core._nth.call(null,c__4527__auto__,i__5869);
cljs.core.chunk_append.call(null,b__5870,tic_tac_toe.play_game_web.create_square.call(null,cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map),((row_number * size) + pos)));

var G__5871 = (i__5869 + (1));
i__5869 = G__5871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5870),tic_tac_toe$play_game_web$create_row_$_iter__5867.call(null,cljs.core.chunk_rest.call(null,s__5868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5870),null);
}
} else {
var pos = cljs.core.first.call(null,s__5868__$2);
return cljs.core.cons.call(null,tic_tac_toe.play_game_web.create_square.call(null,cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map),((row_number * size) + pos)),tic_tac_toe$play_game_web$create_row_$_iter__5867.call(null,cljs.core.rest.call(null,s__5868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,size));
})()], null);
});
tic_tac_toe.play_game_web.return_beginning_board = (function tic_tac_toe$play_game_web$return_beginning_board(board){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (_){
return new cljs.core.Keyword(null,"e","e",1381269198);
}),board));
});
tic_tac_toe.play_game_web.restart_game = (function tic_tac_toe$play_game_web$restart_game(){
tic_tac_toe.play_game_web.update_state_only.call(null,tic_tac_toe.play_game_web.return_beginning_board.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)))));

return tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"user-player","user-player",-501223698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map))));
});
tic_tac_toe.play_game_web.restart_button = (function tic_tac_toe$play_game_web$restart_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.play_game_web.restart_game.call(null);
})], null),"restart"], null);
});
tic_tac_toe.play_game_web.create_game_board = (function tic_tac_toe$play_game_web$create_game_board(){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map));
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board);
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),tic_tac_toe.algorithm.human_turn_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)),new cljs.core.Keyword(null,"user-player","user-player",-501223698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)))));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4529__auto__ = (function tic_tac_toe$play_game_web$create_game_board_$_iter__5872(s__5873){
return (new cljs.core.LazySeq(null,(function (){
var s__5873__$1 = s__5873;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5873__$1);
if(temp__5818__auto__){
var s__5873__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5873__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5873__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5875 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5874 = (0);
while(true){
if((i__5874 < size__4528__auto__)){
var row = cljs.core._nth.call(null,c__4527__auto__,i__5874);
cljs.core.chunk_append.call(null,b__5875,tic_tac_toe.play_game_web.create_row.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)),row));

var G__5876 = (i__5874 + (1));
i__5874 = G__5876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5875),tic_tac_toe$play_game_web$create_game_board_$_iter__5872.call(null,cljs.core.chunk_rest.call(null,s__5873__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5875),null);
}
} else {
var row = cljs.core.first.call(null,s__5873__$2);
return cljs.core.cons.call(null,tic_tac_toe.play_game_web.create_row.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)),row),tic_tac_toe$play_game_web$create_game_board_$_iter__5872.call(null,cljs.core.rest.call(null,s__5873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,size));
})()], null),tic_tac_toe.play_game_web.restart_button.call(null),(cljs.core.truth_(tic_tac_toe.utility.terminal_QMARK_.call(null,board))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.get.call(null,tic_tac_toe.play_game_web.terminal_to_winner,tic_tac_toe.utility.terminal_state.call(null,board))], null):null)], null);
});
tic_tac_toe.play_game_web.start_game = (function tic_tac_toe$play_game_web$start_game(){
tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);

tic_tac_toe.play_game_web.update_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185));

return tic_tac_toe.play_game_web.add_to_map.call(null,tic_tac_toe.play_game_web.game_map,new cljs.core.Keyword(null,"human-turn?","human-turn?",2126543223),tic_tac_toe.algorithm.human_turn_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)),new cljs.core.Keyword(null,"user-player","user-player",-501223698).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)))));
});
tic_tac_toe.play_game_web.render_menu = (function tic_tac_toe$play_game_web$render_menu(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tic_tac_toe.play_game_web.select_board_menu.call(null),tic_tac_toe.play_game_web.select_game_mode.call(null),tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 1",new cljs.core.Keyword(null,"difficulty","difficulty",755680807),"diff1"),tic_tac_toe.play_game_web.select_difficulty.call(null,"Ai 2",new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286),"diff2"),tic_tac_toe.play_game_web.select_player_menu.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.play_game_web.start_game.call(null);
})], null),"Start Game"], null)], null);
});
tic_tac_toe.play_game_web.create_game = (function tic_tac_toe$play_game_web$create_game(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.play_game_web.game_map)))){
return tic_tac_toe.play_game_web.create_game_board.call(null);
} else {
return tic_tac_toe.play_game_web.render_menu.call(null);
}
});
tic_tac_toe.play_game_web.run_ttt = (function tic_tac_toe$play_game_web$run_ttt(){
return tic_tac_toe.play_game_web.create_game.call(null);
});

//# sourceMappingURL=play_game_web.js.map

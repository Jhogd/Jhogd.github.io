// Compiled by ClojureScript 1.10.764 {}
goog.provide('tic_tac_toe.algorithm');
goog.require('cljs.core');
goog.require('tic_tac_toe.utility');
tic_tac_toe.algorithm.determine_depth = (function tic_tac_toe$algorithm$determine_depth(board){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board),(4))){
return (4);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"three","three",-1651831795))){
return (4);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"two","two",627606869))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board))))){
return (362880);
} else {
return null;
}
}
}
});
tic_tac_toe.algorithm.max_value = (function tic_tac_toe$algorithm$max_value(board,player,depth){
var depth_limit = tic_tac_toe.algorithm.determine_depth.call(null,board);
if(cljs.core.truth_((function (){var or__4126__auto__ = tic_tac_toe.utility.terminal_QMARK_.call(null,board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,depth,depth_limit);
}
})())){
return (tic_tac_toe.utility.terminal_state.call(null,board) * ((1) / depth));
} else {
var moves = tic_tac_toe.utility.list_empties.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board));
var eval1 = (-1000);
while(true){
if(cljs.core.empty_QMARK_.call(null,moves)){
return eval1;
} else {
var move = cljs.core.first.call(null,moves);
var new_board = tic_tac_toe.utility.player_move.call(null,board,player,move);
var new_eval = tic_tac_toe.algorithm.min_value.call(null,new_board,tic_tac_toe.utility.switch_player.call(null,player),(depth + (1)));
var G__5596 = cljs.core.rest.call(null,moves);
var G__5597 = (function (){var x__4214__auto__ = eval1;
var y__4215__auto__ = new_eval;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
moves = G__5596;
eval1 = G__5597;
continue;
}
break;
}
}
});
tic_tac_toe.algorithm.new_board_minimax = (function tic_tac_toe$algorithm$new_board_minimax(board,player,move){
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185))){
return tic_tac_toe.utility.player_move.call(null,board,player,move);
} else {
return tic_tac_toe.utility.player_move.call(null,board,tic_tac_toe.utility.switch_player.call(null,player),move);
}
});
tic_tac_toe.algorithm.max_value = cljs.core.memoize.call(null,tic_tac_toe.algorithm.max_value);
tic_tac_toe.algorithm.min_value = (function tic_tac_toe$algorithm$min_value(board,player,depth){
var depth_limit = tic_tac_toe.algorithm.determine_depth.call(null,board);
if(cljs.core.truth_((function (){var or__4126__auto__ = tic_tac_toe.utility.terminal_QMARK_.call(null,board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,depth,depth_limit);
}
})())){
return (tic_tac_toe.utility.terminal_state.call(null,board) * ((1) / depth));
} else {
var moves = tic_tac_toe.utility.list_empties.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board));
var eval3 = (1000);
while(true){
if(cljs.core.empty_QMARK_.call(null,moves)){
return eval3;
} else {
var move = cljs.core.first.call(null,moves);
var new_board = tic_tac_toe.utility.player_move.call(null,board,player,move);
var new_eval = tic_tac_toe.algorithm.max_value.call(null,new_board,tic_tac_toe.utility.switch_player.call(null,player),(depth + (1)));
var G__5598 = cljs.core.rest.call(null,moves);
var G__5599 = (function (){var x__4217__auto__ = eval3;
var y__4218__auto__ = new_eval;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
moves = G__5598;
eval3 = G__5599;
continue;
}
break;
}
}
});
tic_tac_toe.algorithm.min_value = cljs.core.memoize.call(null,tic_tac_toe.algorithm.min_value);
tic_tac_toe.algorithm.minimax = (function tic_tac_toe$algorithm$minimax(board,player){
var G__5603 = tic_tac_toe.utility.list_empties.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board));
var vec__5604 = G__5603;
var seq__5605 = cljs.core.seq.call(null,vec__5604);
var first__5606 = cljs.core.first.call(null,seq__5605);
var seq__5605__$1 = cljs.core.next.call(null,seq__5605);
var move = first__5606;
var moves = seq__5605__$1;
var best_move = (-1);
var best_val = ((cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185)))?(-1000):(1000));
var best_coll = cljs.core.PersistentArrayMap.createAsIfByAssoc([best_move,best_val]);
var G__5603__$1 = G__5603;
var best_move__$1 = best_move;
var best_val__$1 = best_val;
var best_coll__$1 = best_coll;
while(true){
var vec__5610 = G__5603__$1;
var seq__5611 = cljs.core.seq.call(null,vec__5610);
var first__5612 = cljs.core.first.call(null,seq__5611);
var seq__5611__$1 = cljs.core.next.call(null,seq__5611);
var move__$1 = first__5612;
var moves__$1 = seq__5611__$1;
var best_move__$2 = best_move__$1;
var best_val__$2 = best_val__$1;
var best_coll__$2 = best_coll__$1;
if(cljs.core.truth_(move__$1)){
var new_board = tic_tac_toe.utility.player_move.call(null,board,player,move__$1);
var eval2 = tic_tac_toe.algorithm.min_value.call(null,new_board,tic_tac_toe.utility.switch_player.call(null,player),(1));
var G__5613 = moves__$1;
var G__5614 = move__$1;
var G__5615 = eval2;
var G__5616 = cljs.core.conj.call(null,best_coll__$2,cljs.core.PersistentArrayMap.createAsIfByAssoc([move__$1,eval2]));
G__5603__$1 = G__5613;
best_move__$1 = G__5614;
best_val__$1 = G__5615;
best_coll__$1 = G__5616;
continue;
} else {
return best_coll__$2;
}
break;
}
});
tic_tac_toe.algorithm.filter_greatest_vals = (function tic_tac_toe$algorithm$filter_greatest_vals(move_eval_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__5617_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__5617_SHARP_),cljs.core.apply.call(null,cljs.core.max,cljs.core.vals.call(null,move_eval_map)));
}),move_eval_map));
});
tic_tac_toe.algorithm.filter_smallest_vals = (function tic_tac_toe$algorithm$filter_smallest_vals(move_eval_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__5618_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__5618_SHARP_),cljs.core.apply.call(null,cljs.core.min,cljs.core.vals.call(null,move_eval_map)));
}),move_eval_map));
});
tic_tac_toe.algorithm.contains_neg_QMARK_ = (function tic_tac_toe$algorithm$contains_neg_QMARK_(best_map){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__5619_SHARP_){
return (cljs.core.val.call(null,p1__5619_SHARP_) < (0));
}),best_map));
});
tic_tac_toe.algorithm.get_neg_key = (function tic_tac_toe$algorithm$get_neg_key(best_map){
return cljs.core.some.call(null,(function (p__5620){
var vec__5621 = p__5620;
var k = cljs.core.nth.call(null,vec__5621,(0),null);
var v = cljs.core.nth.call(null,vec__5621,(1),null);
if((v < (0))){
return k;
} else {
return null;
}
}),best_map);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.best_first !== 'undefined')){
} else {
tic_tac_toe.algorithm.best_first = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.algorithm","best-first"),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.algorithm.best_first,new cljs.core.Keyword(null,"two","two",627606869),(function (board){
return (0);
}));
cljs.core._add_method.call(null,tic_tac_toe.algorithm.best_first,new cljs.core.Keyword(null,"three","three",-1651831795),(function (board){
return (13);
}));
tic_tac_toe.algorithm.best_move_win = (function tic_tac_toe$algorithm$best_move_win(board,player,best_moves_map){
var moves = cljs.core.keys.call(null,best_moves_map);
var check_move_win_QMARK_ = (function (player__$1,move){
return tic_tac_toe.utility.terminal_QMARK_.call(null,tic_tac_toe.utility.player_move.call(null,board,player__$1,move));
});
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__5624_SHARP_){
var or__4126__auto__ = check_move_win_QMARK_.call(null,player,p1__5624_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return check_move_win_QMARK_.call(null,tic_tac_toe.utility.switch_player.call(null,player),p1__5624_SHARP_);
}
}),moves));
});
tic_tac_toe.algorithm.best_move = (function tic_tac_toe$algorithm$best_move(board,player){
var best_moves_map = cljs.core.dissoc.call(null,tic_tac_toe.algorithm.minimax.call(null,board,player),(-1));
var check_best_moves = tic_tac_toe.algorithm.best_move_win.call(null,board,player,best_moves_map);
if(tic_tac_toe.utility.all_empty_space_QMARK_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board))){
return tic_tac_toe.algorithm.best_first.call(null,board);
} else {
if((!((check_best_moves == null)))){
return check_best_moves;
} else {
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185))){
return cljs.core.first.call(null,cljs.core.keys.call(null,tic_tac_toe.algorithm.filter_greatest_vals.call(null,best_moves_map)));
} else {
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"o","o",-1350007228))){
return cljs.core.first.call(null,cljs.core.keys.call(null,tic_tac_toe.algorithm.filter_smallest_vals.call(null,best_moves_map)));
} else {
return null;
}
}
}
}
});
tic_tac_toe.algorithm.level_decision_QMARK_ = (function tic_tac_toe$algorithm$level_decision_QMARK_(standard){
var random = cljs.core.rand.call(null);
return (random < standard);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.Ai_level_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.algorithm.Ai_level_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.algorithm","Ai-level?"),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.algorithm.Ai_level_QMARK_,new cljs.core.Keyword(null,"easy","easy",315769928),(function (_){
return tic_tac_toe.algorithm.level_decision_QMARK_.call(null,0.8);
}));
cljs.core._add_method.call(null,tic_tac_toe.algorithm.Ai_level_QMARK_,new cljs.core.Keyword(null,"medium","medium",-1864319384),(function (_){
return tic_tac_toe.algorithm.level_decision_QMARK_.call(null,0.3);
}));
cljs.core._add_method.call(null,tic_tac_toe.algorithm.Ai_level_QMARK_,new cljs.core.Keyword(null,"unbeatable","unbeatable",-1950521897),(function (_){
return tic_tac_toe.algorithm.level_decision_QMARK_.call(null,-1.0);
}));
tic_tac_toe.algorithm.ai_standard = (function tic_tac_toe$algorithm$ai_standard(level,board,player){
if(cljs.core.truth_(tic_tac_toe.algorithm.Ai_level_QMARK_.call(null,level))){
return cljs.core.rand_nth.call(null,tic_tac_toe.utility.list_empties.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board)));
} else {
return tic_tac_toe.algorithm.best_move.call(null,board,player);
}
});
tic_tac_toe.algorithm.difficulty = (function tic_tac_toe$algorithm$difficulty(level){
if(cljs.core._EQ_.call(null,level,(1))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"easy","easy",315769928)], null);
} else {
if(cljs.core._EQ_.call(null,level,(2))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null);
} else {
if(cljs.core._EQ_.call(null,level,(3))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"unbeatable","unbeatable",-1950521897)], null);
} else {
return null;
}
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.ai_turn !== 'undefined')){
} else {
tic_tac_toe.algorithm.ai_turn = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.algorithm","ai-turn"),(function() { 
var G__5625__delegate = function (x,args){
return new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(x);
};
var G__5625 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__5626__i = 0, G__5626__a = new Array(arguments.length -  1);
while (G__5626__i < G__5626__a.length) {G__5626__a[G__5626__i] = arguments[G__5626__i + 1]; ++G__5626__i;}
  args = new cljs.core.IndexedSeq(G__5626__a,0,null);
} 
return G__5625__delegate.call(this,x,args);};
G__5625.cljs$lang$maxFixedArity = 1;
G__5625.cljs$lang$applyTo = (function (arglist__5627){
var x = cljs.core.first(arglist__5627);
var args = cljs.core.rest(arglist__5627);
return G__5625__delegate(x,args);
});
G__5625.cljs$core$IFn$_invoke$arity$variadic = G__5625__delegate;
return G__5625;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.algorithm.ai_turn,new cljs.core.Keyword(null,"print","print",1299562414),(function (board,level,player){
var move = tic_tac_toe.algorithm.ai_standard.call(null,tic_tac_toe.algorithm.difficulty.call(null,level),board,player);
cljs.core.prn.call(null,"move",move);

cljs.core.println.call(null,["AI ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," has chose move:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join(''));

return tic_tac_toe.utility.player_move.call(null,board,player,move);
}));
cljs.core._add_method.call(null,tic_tac_toe.algorithm.ai_turn,new cljs.core.Keyword(null,"gui","gui",604532813),(function (board,level,player){
var move = tic_tac_toe.algorithm.ai_standard.call(null,tic_tac_toe.algorithm.difficulty.call(null,level),board,player);
return tic_tac_toe.utility.player_move.call(null,board,player,move);
}));
tic_tac_toe.algorithm.human_turn_QMARK_ = (function tic_tac_toe$algorithm$human_turn_QMARK_(board,current_player,player){
return ((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-type","game-type",-1745309040).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622))) && (cljs.core._EQ_.call(null,current_player,player)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-type","game-type",-1745309040).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"human-vs-human","human-vs-human",-981001222))));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.process_game_board !== 'undefined')){
} else {
tic_tac_toe.algorithm.process_game_board = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.algorithm","process-game-board"),(function() { 
var G__5628__delegate = function (x,args){
return new cljs.core.Keyword(null,"game-type","game-type",-1745309040).cljs$core$IFn$_invoke$arity$1(x);
};
var G__5628 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__5629__i = 0, G__5629__a = new Array(arguments.length -  1);
while (G__5629__i < G__5629__a.length) {G__5629__a[G__5629__i] = arguments[G__5629__i + 1]; ++G__5629__i;}
  args = new cljs.core.IndexedSeq(G__5629__a,0,null);
} 
return G__5628__delegate.call(this,x,args);};
G__5628.cljs$lang$maxFixedArity = 1;
G__5628.cljs$lang$applyTo = (function (arglist__5630){
var x = cljs.core.first(arglist__5630);
var args = cljs.core.rest(arglist__5630);
return G__5628__delegate(x,args);
});
G__5628.cljs$core$IFn$_invoke$arity$variadic = G__5628__delegate;
return G__5628;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.algorithm.process_game_board,new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622),(function (game_board,current_player,player,difficulty,difficulty2){
if(cljs.core._EQ_.call(null,current_player,player)){
return tic_tac_toe.utility.human_turn.call(null,game_board,current_player);
} else {
return tic_tac_toe.algorithm.ai_turn.call(null,game_board,difficulty,current_player);
}
}));
cljs.core._add_method.call(null,tic_tac_toe.algorithm.process_game_board,new cljs.core.Keyword(null,"ai-vs-ai","ai-vs-ai",-1248051511),(function (game_board,current_player,player,difficulty,difficulty2){
if(cljs.core._EQ_.call(null,current_player,player)){
return tic_tac_toe.algorithm.ai_turn.call(null,game_board,difficulty,current_player);
} else {
return tic_tac_toe.algorithm.ai_turn.call(null,game_board,difficulty2,current_player);
}
}));
cljs.core._add_method.call(null,tic_tac_toe.algorithm.process_game_board,new cljs.core.Keyword(null,"human-vs-human","human-vs-human",-981001222),(function (game_board,current_player,player,difficulty,difficulty1){
return tic_tac_toe.utility.human_turn.call(null,game_board,current_player);
}));

//# sourceMappingURL=algorithm.js.map

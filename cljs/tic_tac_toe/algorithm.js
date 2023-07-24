// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('tic_tac_toe.algorithm');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tic_tac_toe.utility');
tic_tac_toe.algorithm.determine_depth = (function tic_tac_toe$algorithm$determine_depth(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board),(4))){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dimension.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$three)){
return (4);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dimension.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$two)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board))))){
return (362880);
} else {
return null;
}
}
}
});
tic_tac_toe.algorithm.max_value = (function tic_tac_toe$algorithm$max_value(board,player,depth){
var depth_limit = tic_tac_toe.algorithm.determine_depth(board);
if(cljs.core.truth_((function (){var or__4126__auto__ = tic_tac_toe.utility.terminal_QMARK_(board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,depth_limit);
}
})())){
return (tic_tac_toe.utility.terminal_state(board) * ((1) / depth));
} else {
var moves = tic_tac_toe.utility.list_empties(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board));
var eval1 = (-1000);
while(true){
if(cljs.core.empty_QMARK_(moves)){
return eval1;
} else {
var move = cljs.core.first(moves);
var new_board = tic_tac_toe.utility.player_move(board,player,move);
var new_eval = (function (){var G__5980 = new_board;
var G__5981 = tic_tac_toe.utility.switch_player(player);
var G__5982 = (depth + (1));
return (tic_tac_toe.algorithm.min_value.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.algorithm.min_value.cljs$core$IFn$_invoke$arity$3(G__5980,G__5981,G__5982) : tic_tac_toe.algorithm.min_value.call(null,G__5980,G__5981,G__5982));
})();
var G__5983 = cljs.core.rest(moves);
var G__5984 = (function (){var x__4214__auto__ = eval1;
var y__4215__auto__ = new_eval;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
moves = G__5983;
eval1 = G__5984;
continue;
}
break;
}
}
});
tic_tac_toe.algorithm.new_board_minimax = (function tic_tac_toe$algorithm$new_board_minimax(board,player,move){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$x)){
return tic_tac_toe.utility.player_move(board,player,move);
} else {
return tic_tac_toe.utility.player_move(board,tic_tac_toe.utility.switch_player(player),move);
}
});
tic_tac_toe.algorithm.max_value = cljs.core.memoize(tic_tac_toe.algorithm.max_value);
tic_tac_toe.algorithm.min_value = (function tic_tac_toe$algorithm$min_value(board,player,depth){
var depth_limit = tic_tac_toe.algorithm.determine_depth(board);
if(cljs.core.truth_((function (){var or__4126__auto__ = tic_tac_toe.utility.terminal_QMARK_(board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,depth_limit);
}
})())){
return (tic_tac_toe.utility.terminal_state(board) * ((1) / depth));
} else {
var moves = tic_tac_toe.utility.list_empties(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board));
var eval3 = (1000);
while(true){
if(cljs.core.empty_QMARK_(moves)){
return eval3;
} else {
var move = cljs.core.first(moves);
var new_board = tic_tac_toe.utility.player_move(board,player,move);
var new_eval = (function (){var G__5988 = new_board;
var G__5989 = tic_tac_toe.utility.switch_player(player);
var G__5990 = (depth + (1));
return (tic_tac_toe.algorithm.max_value.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.algorithm.max_value.cljs$core$IFn$_invoke$arity$3(G__5988,G__5989,G__5990) : tic_tac_toe.algorithm.max_value.call(null,G__5988,G__5989,G__5990));
})();
var G__5991 = cljs.core.rest(moves);
var G__5992 = (function (){var x__4217__auto__ = eval3;
var y__4218__auto__ = new_eval;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
moves = G__5991;
eval3 = G__5992;
continue;
}
break;
}
}
});
tic_tac_toe.algorithm.min_value = cljs.core.memoize(tic_tac_toe.algorithm.min_value);
tic_tac_toe.algorithm.minimax = (function tic_tac_toe$algorithm$minimax(board,player){
var G__5996 = tic_tac_toe.utility.list_empties(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board));
var vec__5997 = G__5996;
var seq__5998 = cljs.core.seq(vec__5997);
var first__5999 = cljs.core.first(seq__5998);
var seq__5998__$1 = cljs.core.next(seq__5998);
var move = first__5999;
var moves = seq__5998__$1;
var best_move = (-1);
var best_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$x))?(-1000):(1000));
var best_coll = cljs.core.PersistentArrayMap.createAsIfByAssoc([best_move,best_val]);
var G__5996__$1 = G__5996;
var best_move__$1 = best_move;
var best_val__$1 = best_val;
var best_coll__$1 = best_coll;
while(true){
var vec__6006 = G__5996__$1;
var seq__6007 = cljs.core.seq(vec__6006);
var first__6008 = cljs.core.first(seq__6007);
var seq__6007__$1 = cljs.core.next(seq__6007);
var move__$1 = first__6008;
var moves__$1 = seq__6007__$1;
var best_move__$2 = best_move__$1;
var best_val__$2 = best_val__$1;
var best_coll__$2 = best_coll__$1;
if(cljs.core.truth_(move__$1)){
var new_board = tic_tac_toe.utility.player_move(board,player,move__$1);
var eval2 = (function (){var G__6009 = new_board;
var G__6010 = tic_tac_toe.utility.switch_player(player);
var G__6011 = (1);
return (tic_tac_toe.algorithm.min_value.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.algorithm.min_value.cljs$core$IFn$_invoke$arity$3(G__6009,G__6010,G__6011) : tic_tac_toe.algorithm.min_value.call(null,G__6009,G__6010,G__6011));
})();
var G__6012 = moves__$1;
var G__6013 = move__$1;
var G__6014 = eval2;
var G__6015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(best_coll__$2,cljs.core.PersistentArrayMap.createAsIfByAssoc([move__$1,eval2]));
G__5996__$1 = G__6012;
best_move__$1 = G__6013;
best_val__$1 = G__6014;
best_coll__$1 = G__6015;
continue;
} else {
return best_coll__$2;
}
break;
}
});
tic_tac_toe.algorithm.filter_greatest_vals = (function tic_tac_toe$algorithm$filter_greatest_vals(move_eval_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6016_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__6016_SHARP_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(move_eval_map)));
}),move_eval_map));
});
tic_tac_toe.algorithm.filter_smallest_vals = (function tic_tac_toe$algorithm$filter_smallest_vals(move_eval_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6017_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__6017_SHARP_),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.vals(move_eval_map)));
}),move_eval_map));
});
tic_tac_toe.algorithm.contains_neg_QMARK_ = (function tic_tac_toe$algorithm$contains_neg_QMARK_(best_map){
return cljs.core.boolean$(cljs.core.some((function (p1__6018_SHARP_){
return (cljs.core.val(p1__6018_SHARP_) < (0));
}),best_map));
});
tic_tac_toe.algorithm.get_neg_key = (function tic_tac_toe$algorithm$get_neg_key(best_map){
return cljs.core.some((function (p__6019){
var vec__6020 = p__6019;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6020,(1),null);
if((v < (0))){
return k;
} else {
return null;
}
}),best_map);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.best_first !== 'undefined')){
} else {
tic_tac_toe.algorithm.best_first = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6023 = cljs.core.get_global_hierarchy;
return (fexpr__6023.cljs$core$IFn$_invoke$arity$0 ? fexpr__6023.cljs$core$IFn$_invoke$arity$0() : fexpr__6023.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.algorithm","best-first"),cljs.core.cst$kw$dimension,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.algorithm.best_first.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$two,(function (board){
return (0);
}));
tic_tac_toe.algorithm.best_first.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$three,(function (board){
return (13);
}));
tic_tac_toe.algorithm.best_move_win = (function tic_tac_toe$algorithm$best_move_win(board,player,best_moves_map){
var moves = cljs.core.keys(best_moves_map);
var check_move_win_QMARK_ = (function (player__$1,move){
return tic_tac_toe.utility.terminal_QMARK_(tic_tac_toe.utility.player_move(board,player__$1,move));
});
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6024_SHARP_){
var or__4126__auto__ = check_move_win_QMARK_(player,p1__6024_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return check_move_win_QMARK_(tic_tac_toe.utility.switch_player(player),p1__6024_SHARP_);
}
}),moves));
});
tic_tac_toe.algorithm.best_move = (function tic_tac_toe$algorithm$best_move(board,player){
var best_moves_map = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.algorithm.minimax(board,player),(-1));
var check_best_moves = tic_tac_toe.algorithm.best_move_win(board,player,best_moves_map);
if(tic_tac_toe.utility.all_empty_space_QMARK_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board))){
return (tic_tac_toe.algorithm.best_first.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.algorithm.best_first.cljs$core$IFn$_invoke$arity$1(board) : tic_tac_toe.algorithm.best_first.call(null,board));
} else {
if((!((check_best_moves == null)))){
return check_best_moves;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$x)){
return cljs.core.first(cljs.core.keys(tic_tac_toe.algorithm.filter_greatest_vals(best_moves_map)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$o)){
return cljs.core.first(cljs.core.keys(tic_tac_toe.algorithm.filter_smallest_vals(best_moves_map)));
} else {
return null;
}
}
}
}
});
tic_tac_toe.algorithm.level_decision_QMARK_ = (function tic_tac_toe$algorithm$level_decision_QMARK_(standard){
var random = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return (random < standard);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.Ai_level_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.algorithm.Ai_level_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6025 = cljs.core.get_global_hierarchy;
return (fexpr__6025.cljs$core$IFn$_invoke$arity$0 ? fexpr__6025.cljs$core$IFn$_invoke$arity$0() : fexpr__6025.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.algorithm","Ai-level?"),cljs.core.cst$kw$level,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.algorithm.Ai_level_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$easy,(function (_){
return tic_tac_toe.algorithm.level_decision_QMARK_(0.8);
}));
tic_tac_toe.algorithm.Ai_level_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$medium,(function (_){
return tic_tac_toe.algorithm.level_decision_QMARK_(0.3);
}));
tic_tac_toe.algorithm.Ai_level_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unbeatable,(function (_){
return tic_tac_toe.algorithm.level_decision_QMARK_(-1.0);
}));
tic_tac_toe.algorithm.ai_standard = (function tic_tac_toe$algorithm$ai_standard(level,board,player){
if(cljs.core.truth_((tic_tac_toe.algorithm.Ai_level_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tic_tac_toe.algorithm.Ai_level_QMARK_.cljs$core$IFn$_invoke$arity$1(level) : tic_tac_toe.algorithm.Ai_level_QMARK_.call(null,level)))){
return cljs.core.rand_nth(tic_tac_toe.utility.list_empties(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board)));
} else {
return tic_tac_toe.algorithm.best_move(board,player);
}
});
tic_tac_toe.algorithm.difficulty = (function tic_tac_toe$algorithm$difficulty(level){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,(1))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$level,cljs.core.cst$kw$easy], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,(2))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$level,cljs.core.cst$kw$medium], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,(3))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$level,cljs.core.cst$kw$unbeatable], null);
} else {
return null;
}
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.ai_turn !== 'undefined')){
} else {
tic_tac_toe.algorithm.ai_turn = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6026 = cljs.core.get_global_hierarchy;
return (fexpr__6026.cljs$core$IFn$_invoke$arity$0 ? fexpr__6026.cljs$core$IFn$_invoke$arity$0() : fexpr__6026.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.algorithm","ai-turn"),(function() { 
var G__6027__delegate = function (x,args){
return cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(x);
};
var G__6027 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__6028__i = 0, G__6028__a = new Array(arguments.length -  1);
while (G__6028__i < G__6028__a.length) {G__6028__a[G__6028__i] = arguments[G__6028__i + 1]; ++G__6028__i;}
  args = new cljs.core.IndexedSeq(G__6028__a,0,null);
} 
return G__6027__delegate.call(this,x,args);};
G__6027.cljs$lang$maxFixedArity = 1;
G__6027.cljs$lang$applyTo = (function (arglist__6029){
var x = cljs.core.first(arglist__6029);
var args = cljs.core.rest(arglist__6029);
return G__6027__delegate(x,args);
});
G__6027.cljs$core$IFn$_invoke$arity$variadic = G__6027__delegate;
return G__6027;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.algorithm.ai_turn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$print,(function (board,level,player){
var move = tic_tac_toe.algorithm.ai_standard(tic_tac_toe.algorithm.difficulty(level),board,player);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["move",move], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["AI ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," has chose move:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(move)].join('')], 0));

return tic_tac_toe.utility.player_move(board,player,move);
}));
tic_tac_toe.algorithm.ai_turn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$gui,(function (board,level,player){
var move = tic_tac_toe.algorithm.ai_standard(tic_tac_toe.algorithm.difficulty(level),board,player);
return tic_tac_toe.utility.player_move(board,player,move);
}));
tic_tac_toe.algorithm.human_turn_QMARK_ = (function tic_tac_toe$algorithm$human_turn_QMARK_(board,current_player,player){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_type.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$ai_DASH_vs_DASH_human)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_player,player)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_type.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$human_DASH_vs_DASH_human)));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.algorithm !== 'undefined') && (typeof tic_tac_toe.algorithm.process_game_board !== 'undefined')){
} else {
tic_tac_toe.algorithm.process_game_board = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6030 = cljs.core.get_global_hierarchy;
return (fexpr__6030.cljs$core$IFn$_invoke$arity$0 ? fexpr__6030.cljs$core$IFn$_invoke$arity$0() : fexpr__6030.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.algorithm","process-game-board"),(function() { 
var G__6031__delegate = function (x,args){
return cljs.core.cst$kw$game_DASH_type.cljs$core$IFn$_invoke$arity$1(x);
};
var G__6031 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__6032__i = 0, G__6032__a = new Array(arguments.length -  1);
while (G__6032__i < G__6032__a.length) {G__6032__a[G__6032__i] = arguments[G__6032__i + 1]; ++G__6032__i;}
  args = new cljs.core.IndexedSeq(G__6032__a,0,null);
} 
return G__6031__delegate.call(this,x,args);};
G__6031.cljs$lang$maxFixedArity = 1;
G__6031.cljs$lang$applyTo = (function (arglist__6033){
var x = cljs.core.first(arglist__6033);
var args = cljs.core.rest(arglist__6033);
return G__6031__delegate(x,args);
});
G__6031.cljs$core$IFn$_invoke$arity$variadic = G__6031__delegate;
return G__6031;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.algorithm.process_game_board.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ai_DASH_vs_DASH_human,(function (game_board,current_player,player,difficulty,difficulty2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_player,player)){
return tic_tac_toe.utility.human_turn(game_board,current_player);
} else {
return (tic_tac_toe.algorithm.ai_turn.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.algorithm.ai_turn.cljs$core$IFn$_invoke$arity$3(game_board,difficulty,current_player) : tic_tac_toe.algorithm.ai_turn.call(null,game_board,difficulty,current_player));
}
}));
tic_tac_toe.algorithm.process_game_board.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ai_DASH_vs_DASH_ai,(function (game_board,current_player,player,difficulty,difficulty2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_player,player)){
return (tic_tac_toe.algorithm.ai_turn.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.algorithm.ai_turn.cljs$core$IFn$_invoke$arity$3(game_board,difficulty,current_player) : tic_tac_toe.algorithm.ai_turn.call(null,game_board,difficulty,current_player));
} else {
return (tic_tac_toe.algorithm.ai_turn.cljs$core$IFn$_invoke$arity$3 ? tic_tac_toe.algorithm.ai_turn.cljs$core$IFn$_invoke$arity$3(game_board,difficulty2,current_player) : tic_tac_toe.algorithm.ai_turn.call(null,game_board,difficulty2,current_player));
}
}));
tic_tac_toe.algorithm.process_game_board.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$human_DASH_vs_DASH_human,(function (game_board,current_player,player,difficulty,difficulty1){
return tic_tac_toe.utility.human_turn(game_board,current_player);
}));

// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('tic_tac_toe.utility');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
tic_tac_toe.utility.X = cljs.core.cst$kw$x;
tic_tac_toe.utility.O = cljs.core.cst$kw$o;
tic_tac_toe.utility.EMPTY = cljs.core.cst$kw$e;
tic_tac_toe.utility.color = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cyan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(204),(204)], null),cljs.core.cst$kw$pink,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(127)], null),cljs.core.cst$kw$black,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null);
tic_tac_toe.utility.game_state = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$board,null,cljs.core.cst$kw$player,null,cljs.core.cst$kw$game_DASH_number,(0),cljs.core.cst$kw$difficulty,null,cljs.core.cst$kw$difficulty2,null], null);
tic_tac_toe.utility.__GT_game_state = (function tic_tac_toe$utility$__GT_game_state(board,current_player,game_number,level,level_two){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(tic_tac_toe.utility.game_state,cljs.core.cst$kw$board,board,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$player,current_player,cljs.core.cst$kw$game_DASH_number,game_number,cljs.core.cst$kw$difficulty,level,cljs.core.cst$kw$difficulty2,level_two], 0));
});

/**
 * @interface
 */
tic_tac_toe.utility.Board = function(){};

var tic_tac_toe$utility$Board$init_board$dyn_5791 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (tic_tac_toe.utility.init_board[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (tic_tac_toe.utility.init_board["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Board.init-board",this$);
}
}
});
tic_tac_toe.utility.init_board = (function tic_tac_toe$utility$init_board(this$){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$utility$Board$init_board$arity$1 == null)))))){
return this$.tic_tac_toe$utility$Board$init_board$arity$1(this$);
} else {
return tic_tac_toe$utility$Board$init_board$dyn_5791(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {tic_tac_toe.utility.Board}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tic_tac_toe.utility.Four_by_four = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k5793,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__5797 = k5793;
switch (G__5797) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5793,else__4383__auto__);

}
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__5798){
var vec__5799 = p__5798;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#tic-tac-toe.utility.Four-by-four{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5792){
var self__ = this;
var G__5792__$1 = this;
return (new cljs.core.RecordIter((0),G__5792__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new tic_tac_toe.utility.Four_by_four(self__.__meta,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__5802 = (function (coll__4377__auto__){
return (1447925224 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__5802(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5794,other5795){
var self__ = this;
var this5794__$1 = this;
return (((!((other5795 == null)))) && ((this5794__$1.constructor === other5795.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5794__$1.__extmap,other5795.__extmap)));
}));

(tic_tac_toe.utility.Four_by_four.prototype.tic_tac_toe$utility$Board$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.utility.Four_by_four.prototype.tic_tac_toe$utility$Board$init_board$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((4) * (4)),tic_tac_toe.utility.EMPTY)),cljs.core.cst$kw$size,(4),cljs.core.cst$kw$dimension,cljs.core.cst$kw$two], null);
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tic_tac_toe.utility.Four_by_four(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__5792){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__5803 = cljs.core.keyword_identical_QMARK_;
var expr__5804 = k__4388__auto__;
return (new tic_tac_toe.utility.Four_by_four(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__5792),null));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__5792){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tic_tac_toe.utility.Four_by_four(G__5792,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(tic_tac_toe.utility.Four_by_four.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(tic_tac_toe.utility.Four_by_four.cljs$lang$type = true);

(tic_tac_toe.utility.Four_by_four.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"tic-tac-toe.utility/Four-by-four",null,(1),null));
}));

(tic_tac_toe.utility.Four_by_four.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"tic-tac-toe.utility/Four-by-four");
}));

/**
 * Positional factory function for tic-tac-toe.utility/Four-by-four.
 */
tic_tac_toe.utility.__GT_Four_by_four = (function tic_tac_toe$utility$__GT_Four_by_four(){
return (new tic_tac_toe.utility.Four_by_four(null,null,null));
});

/**
 * Factory function for tic-tac-toe.utility/Four-by-four, taking a map of keywords to field values.
 */
tic_tac_toe.utility.map__GT_Four_by_four = (function tic_tac_toe$utility$map__GT_Four_by_four(G__5796){
var extmap__4419__auto__ = (function (){var G__5806 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__5796);
if(cljs.core.record_QMARK_(G__5796)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5806);
} else {
return G__5806;
}
})();
return (new tic_tac_toe.utility.Four_by_four(null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {tic_tac_toe.utility.Board}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tic_tac_toe.utility.Three_by_three = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k5809,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__5813 = k5809;
switch (G__5813) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5809,else__4383__auto__);

}
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__5814){
var vec__5815 = p__5814;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5815,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5815,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#tic-tac-toe.utility.Three-by-three{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5808){
var self__ = this;
var G__5808__$1 = this;
return (new cljs.core.RecordIter((0),G__5808__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new tic_tac_toe.utility.Three_by_three(self__.__meta,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__5818 = (function (coll__4377__auto__){
return (-1816677812 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__5818(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5810,other5811){
var self__ = this;
var this5810__$1 = this;
return (((!((other5811 == null)))) && ((this5810__$1.constructor === other5811.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5810__$1.__extmap,other5811.__extmap)));
}));

(tic_tac_toe.utility.Three_by_three.prototype.tic_tac_toe$utility$Board$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.utility.Three_by_three.prototype.tic_tac_toe$utility$Board$init_board$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((3) * (3)),tic_tac_toe.utility.EMPTY)),cljs.core.cst$kw$size,(3),cljs.core.cst$kw$dimension,cljs.core.cst$kw$two], null);
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tic_tac_toe.utility.Three_by_three(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__5808){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__5819 = cljs.core.keyword_identical_QMARK_;
var expr__5820 = k__4388__auto__;
return (new tic_tac_toe.utility.Three_by_three(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__5808),null));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__5808){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tic_tac_toe.utility.Three_by_three(G__5808,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(tic_tac_toe.utility.Three_by_three.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(tic_tac_toe.utility.Three_by_three.cljs$lang$type = true);

(tic_tac_toe.utility.Three_by_three.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"tic-tac-toe.utility/Three-by-three",null,(1),null));
}));

(tic_tac_toe.utility.Three_by_three.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"tic-tac-toe.utility/Three-by-three");
}));

/**
 * Positional factory function for tic-tac-toe.utility/Three-by-three.
 */
tic_tac_toe.utility.__GT_Three_by_three = (function tic_tac_toe$utility$__GT_Three_by_three(){
return (new tic_tac_toe.utility.Three_by_three(null,null,null));
});

/**
 * Factory function for tic-tac-toe.utility/Three-by-three, taking a map of keywords to field values.
 */
tic_tac_toe.utility.map__GT_Three_by_three = (function tic_tac_toe$utility$map__GT_Three_by_three(G__5812){
var extmap__4419__auto__ = (function (){var G__5822 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__5812);
if(cljs.core.record_QMARK_(G__5812)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5822);
} else {
return G__5822;
}
})();
return (new tic_tac_toe.utility.Three_by_three(null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {tic_tac_toe.utility.Board}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tic_tac_toe.utility.Three_dimension = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k5825,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__5829 = k5825;
switch (G__5829) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5825,else__4383__auto__);

}
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__5830){
var vec__5831 = p__5830;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5831,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5831,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#tic-tac-toe.utility.Three-dimension{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5824){
var self__ = this;
var G__5824__$1 = this;
return (new cljs.core.RecordIter((0),G__5824__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new tic_tac_toe.utility.Three_dimension(self__.__meta,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__5834 = (function (coll__4377__auto__){
return (-1085919775 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__5834(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5826,other5827){
var self__ = this;
var this5826__$1 = this;
return (((!((other5827 == null)))) && ((this5826__$1.constructor === other5827.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5826__$1.__extmap,other5827.__extmap)));
}));

(tic_tac_toe.utility.Three_dimension.prototype.tic_tac_toe$utility$Board$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.utility.Three_dimension.prototype.tic_tac_toe$utility$Board$init_board$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$state,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((((3) * (3)) * (3)),tic_tac_toe.utility.EMPTY)),cljs.core.cst$kw$size,(3),cljs.core.cst$kw$dimension,cljs.core.cst$kw$three], null);
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tic_tac_toe.utility.Three_dimension(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__5824){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__5835 = cljs.core.keyword_identical_QMARK_;
var expr__5836 = k__4388__auto__;
return (new tic_tac_toe.utility.Three_dimension(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__5824),null));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__5824){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tic_tac_toe.utility.Three_dimension(G__5824,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(tic_tac_toe.utility.Three_dimension.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(tic_tac_toe.utility.Three_dimension.cljs$lang$type = true);

(tic_tac_toe.utility.Three_dimension.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"tic-tac-toe.utility/Three-dimension",null,(1),null));
}));

(tic_tac_toe.utility.Three_dimension.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"tic-tac-toe.utility/Three-dimension");
}));

/**
 * Positional factory function for tic-tac-toe.utility/Three-dimension.
 */
tic_tac_toe.utility.__GT_Three_dimension = (function tic_tac_toe$utility$__GT_Three_dimension(){
return (new tic_tac_toe.utility.Three_dimension(null,null,null));
});

/**
 * Factory function for tic-tac-toe.utility/Three-dimension, taking a map of keywords to field values.
 */
tic_tac_toe.utility.map__GT_Three_dimension = (function tic_tac_toe$utility$map__GT_Three_dimension(G__5828){
var extmap__4419__auto__ = (function (){var G__5838 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__5828);
if(cljs.core.record_QMARK_(G__5828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5838);
} else {
return G__5838;
}
})();
return (new tic_tac_toe.utility.Three_dimension(null,cljs.core.not_empty(extmap__4419__auto__),null));
});

tic_tac_toe.utility.has_empty_space_QMARK_ = (function tic_tac_toe$utility$has_empty_space_QMARK_(board){
return cljs.core.boolean$(cljs.core.some((function (p1__5840_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.EMPTY,p1__5840_SHARP_);
}),board));
});
tic_tac_toe.utility.all_empty_space_QMARK_ = (function tic_tac_toe$utility$all_empty_space_QMARK_(board){
return cljs.core.boolean$(cljs.core.not(cljs.core.some((function (p1__5841_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.X,p1__5841_SHARP_);
}),board)));
});
tic_tac_toe.utility.is_empty_QMARK_ = (function tic_tac_toe$utility$is_empty_QMARK_(board,position){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,position),tic_tac_toe.utility.EMPTY);
});
tic_tac_toe.utility.player_move = (function tic_tac_toe$utility$player_move(board,player,position){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$state,(function (p1__5842_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__5842_SHARP_,position,player);
}));
});
tic_tac_toe.utility.switch_player = (function tic_tac_toe$utility$switch_player(current_player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_player,tic_tac_toe.utility.X)){
return tic_tac_toe.utility.O;
} else {
return tic_tac_toe.utility.X;
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.utility !== 'undefined') && (typeof tic_tac_toe.utility.win_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.utility.win_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5843 = cljs.core.get_global_hierarchy;
return (fexpr__5843.cljs$core$IFn$_invoke$arity$0 ? fexpr__5843.cljs$core$IFn$_invoke$arity$0() : fexpr__5843.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.utility","win?"),cljs.core.cst$kw$dimension,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.utility.win_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$two,(function (board,player){
var size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board);
var rows = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(size,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board));
var cols = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,rows);
var diag1 = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5845(s__5846){
return (new cljs.core.LazySeq(null,(function (){
var s__5846__$1 = s__5846;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__5846__$1);
if(temp__5818__auto__){
var s__5846__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5846__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__5846__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__5848 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__5847 = (0);
while(true){
if((i__5847 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__5847);
cljs.core.chunk_append(b__5848,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,i),i));

var G__5853 = (i__5847 + (1));
i__5847 = G__5853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5848),tic_tac_toe$utility$iter__5845(cljs.core.chunk_rest(s__5846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5848),null);
}
} else {
var i = cljs.core.first(s__5846__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,i),i),tic_tac_toe$utility$iter__5845(cljs.core.rest(s__5846__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})();
var diag2 = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5849(s__5850){
return (new cljs.core.LazySeq(null,(function (){
var s__5850__$1 = s__5850;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__5850__$1);
if(temp__5818__auto__){
var s__5850__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5850__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__5850__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__5852 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__5851 = (0);
while(true){
if((i__5851 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__5851);
cljs.core.chunk_append(b__5852,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,i),(size - (i + (1)))));

var G__5854 = (i__5851 + (1));
i__5851 = G__5854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5852),tic_tac_toe$utility$iter__5849(cljs.core.chunk_rest(s__5850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5852),null);
}
} else {
var i = cljs.core.first(s__5850__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,i),(size - (i + (1)))),tic_tac_toe$utility$iter__5849(cljs.core.rest(s__5850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
})();
var all_spaces = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rows,cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diag1,diag2], null)], 0));
var win_cond = (function (space){
return cljs.core.every_QMARK_((function (p1__5844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,p1__5844_SHARP_);
}),space);
});
return cljs.core.boolean$(cljs.core.some(win_cond,all_spaces));
}));
tic_tac_toe.utility.win_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$three,(function (board,player){
var size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board);
var rows = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(size,cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board));
var cols = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5860(s__5861){
return (new cljs.core.LazySeq(null,(function (){
var s__5861__$1 = s__5861;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__5861__$1);
if(temp__5818__auto__){
var s__5861__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5861__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__5861__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__5863 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__5862 = (0);
while(true){
if((i__5862 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__5862);
cljs.core.chunk_append(b__5863,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__5862,i,c__4527__auto__,size__4528__auto__,b__5863,s__5861__$2,temp__5818__auto__,size,rows){
return (function (p1__5855_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5855_SHARP_);
});})(i__5862,i,c__4527__auto__,size__4528__auto__,b__5863,s__5861__$2,temp__5818__auto__,size,rows))
,i));

var G__5876 = (i__5862 + (1));
i__5862 = G__5876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5863),tic_tac_toe$utility$iter__5860(cljs.core.chunk_rest(s__5861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5863),null);
}
} else {
var i = cljs.core.first(s__5861__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i,s__5861__$2,temp__5818__auto__,size,rows){
return (function (p1__5855_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5855_SHARP_);
});})(i,s__5861__$2,temp__5818__auto__,size,rows))
,i),tic_tac_toe$utility$iter__5860(cljs.core.rest(s__5861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(12),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(13),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(14),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(21),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(22),(25)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(23),(26)], null)], null));
})();
var diags = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5864(s__5865){
return (new cljs.core.LazySeq(null,(function (){
var s__5865__$1 = s__5865;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__5865__$1);
if(temp__5818__auto__){
var s__5865__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5865__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__5865__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__5867 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__5866 = (0);
while(true){
if((i__5866 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__5866);
cljs.core.chunk_append(b__5867,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__5866,i,c__4527__auto__,size__4528__auto__,b__5867,s__5865__$2,temp__5818__auto__,size,rows,cols){
return (function (p1__5856_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5856_SHARP_);
});})(i__5866,i,c__4527__auto__,size__4528__auto__,b__5867,s__5865__$2,temp__5818__auto__,size,rows,cols))
,i));

var G__5877 = (i__5866 + (1));
i__5866 = G__5877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5867),tic_tac_toe$utility$iter__5864(cljs.core.chunk_rest(s__5865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5867),null);
}
} else {
var i = cljs.core.first(s__5865__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i,s__5865__$2,temp__5818__auto__,size,rows,cols){
return (function (p1__5856_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5856_SHARP_);
});})(i,s__5865__$2,temp__5818__auto__,size,rows,cols))
,i),tic_tac_toe$utility$iter__5864(cljs.core.rest(s__5865__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(13),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(22),(24)], null)], null));
})();
var depth_cols = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((9),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board)));
var depth_rows = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5868(s__5869){
return (new cljs.core.LazySeq(null,(function (){
var s__5869__$1 = s__5869;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__5869__$1);
if(temp__5818__auto__){
var s__5869__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5869__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__5869__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__5871 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__5870 = (0);
while(true){
if((i__5870 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__5870);
cljs.core.chunk_append(b__5871,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__5870,i,c__4527__auto__,size__4528__auto__,b__5871,s__5869__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols){
return (function (p1__5857_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5857_SHARP_);
});})(i__5870,i,c__4527__auto__,size__4528__auto__,b__5871,s__5869__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols))
,i));

var G__5878 = (i__5870 + (1));
i__5870 = G__5878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5871),tic_tac_toe$utility$iter__5868(cljs.core.chunk_rest(s__5869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5871),null);
}
} else {
var i = cljs.core.first(s__5869__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i,s__5869__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols){
return (function (p1__5857_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5857_SHARP_);
});})(i,s__5869__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols))
,i),tic_tac_toe$utility$iter__5868(cljs.core.rest(s__5869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(13),(23)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(16),(26)], null)], null));
})();
var depth_diags = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5872(s__5873){
return (new cljs.core.LazySeq(null,(function (){
var s__5873__$1 = s__5873;
while(true){
var temp__5818__auto__ = cljs.core.seq(s__5873__$1);
if(temp__5818__auto__){
var s__5873__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5873__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__5873__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__5875 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__5874 = (0);
while(true){
if((i__5874 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__5874);
cljs.core.chunk_append(b__5875,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__5874,i,c__4527__auto__,size__4528__auto__,b__5875,s__5873__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows){
return (function (p1__5858_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5858_SHARP_);
});})(i__5874,i,c__4527__auto__,size__4528__auto__,b__5875,s__5873__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows))
,i));

var G__5879 = (i__5874 + (1));
i__5874 = G__5879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5875),tic_tac_toe$utility$iter__5872(cljs.core.chunk_rest(s__5873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5875),null);
}
} else {
var i = cljs.core.first(s__5873__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i,s__5873__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows){
return (function (p1__5858_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),p1__5858_SHARP_);
});})(i,s__5873__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows))
,i),tic_tac_toe$utility$iter__5872(cljs.core.rest(s__5873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(13),(24)], null)], null));
})();
var all_spaces = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rows,cols,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([diags,depth_cols,depth_rows,depth_diags], 0));
var win_cond = (function (space){
return cljs.core.every_QMARK_((function (p1__5859_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,p1__5859_SHARP_);
}),space);
});
return cljs.core.boolean$(cljs.core.some(win_cond,all_spaces));
}));
tic_tac_toe.utility.list_empties = (function tic_tac_toe$utility$list_empties(board){
return cljs.core.vec(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (index,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,tic_tac_toe.utility.EMPTY)){
return index;
} else {
return null;
}
}),board));
});
tic_tac_toe.utility.terminal_state = (function tic_tac_toe$utility$terminal_state(board){
if(cljs.core.truth_((tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2(board,tic_tac_toe.utility.X) : tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.X)))){
return (10);
} else {
if(cljs.core.truth_((tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2(board,tic_tac_toe.utility.O) : tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.O)))){
return (-10);
} else {
return (0);

}
}
});
tic_tac_toe.utility.terminal_QMARK_ = (function tic_tac_toe$utility$terminal_QMARK_(board){
var or__4126__auto__ = (tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2(board,tic_tac_toe.utility.X) : tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.X));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tic_tac_toe.utility.win_QMARK_.cljs$core$IFn$_invoke$arity$2(board,tic_tac_toe.utility.O) : tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.O));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(tic_tac_toe.utility.has_empty_space_QMARK_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board))));
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.utility !== 'undefined') && (typeof tic_tac_toe.utility.game_over !== 'undefined')){
} else {
tic_tac_toe.utility.game_over = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5880 = cljs.core.get_global_hierarchy;
return (fexpr__5880.cljs$core$IFn$_invoke$arity$0 ? fexpr__5880.cljs$core$IFn$_invoke$arity$0() : fexpr__5880.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.utility","game-over"),(function() { 
var G__5881__delegate = function (x,args){
return cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(x);
};
var G__5881 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__5882__i = 0, G__5882__a = new Array(arguments.length -  1);
while (G__5882__i < G__5882__a.length) {G__5882__a[G__5882__i] = arguments[G__5882__i + 1]; ++G__5882__i;}
  args = new cljs.core.IndexedSeq(G__5882__a,0,null);
} 
return G__5881__delegate.call(this,x,args);};
G__5881.cljs$lang$maxFixedArity = 1;
G__5881.cljs$lang$applyTo = (function (arglist__5883){
var x = cljs.core.first(arglist__5883);
var args = cljs.core.rest(arglist__5883);
return G__5881__delegate(x,args);
});
G__5881.cljs$core$IFn$_invoke$arity$variadic = G__5881__delegate;
return G__5881;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.utility.game_over.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$print,(function (board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.terminal_state(board),(10))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Player X has won the game"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.terminal_state(board),(-10))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Player O has won the game"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.utility.terminal_state(board),(0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The game has ended in draw"], 0));
} else {
return null;
}
}
}
}));
tic_tac_toe.utility.game_over.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$gui,(function (board,current_player,player,game_number,difficulty,difficulty2){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$screen,cljs.core.cst$kw$game_DASH_over,cljs.core.cst$kw$board,board,cljs.core.cst$kw$current_DASH_player,current_player,cljs.core.cst$kw$player,player,cljs.core.cst$kw$game_DASH_number,game_number,cljs.core.cst$kw$difficulty,difficulty,cljs.core.cst$kw$difficulty2,difficulty2], null);
}));
tic_tac_toe.utility.choose_player = (function tic_tac_toe$utility$choose_player(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Choose your character \n 1) X\n 2) O"], 0));

var choice = (tic_tac_toe.utility.read.cljs$core$IFn$_invoke$arity$0 ? tic_tac_toe.utility.read.cljs$core$IFn$_invoke$arity$0() : tic_tac_toe.utility.read.call(null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(1))){
return cljs.core.cst$kw$x;
} else {
return cljs.core.cst$kw$o;
}
});
tic_tac_toe.utility.game_player_rel = (function tic_tac_toe$utility$game_player_rel(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_type.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$ai_DASH_vs_DASH_human)){
return tic_tac_toe.utility.choose_player();
} else {
return tic_tac_toe.utility.X;
}
});
tic_tac_toe.utility.select_player = (function tic_tac_toe$utility$select_player(board,last_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$age.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$new)){
return tic_tac_toe.utility.game_player_rel(board);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$age.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$old)){
return cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(last_state);
} else {
return null;
}
}
});
tic_tac_toe.utility.select_current_player = (function tic_tac_toe$utility$select_current_player(board,last_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$age.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$new)){
return tic_tac_toe.utility.X;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$age.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$old)){
return cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(last_state);
} else {
return null;
}
}
});
tic_tac_toe.utility.human_turn = (function tic_tac_toe$utility$human_turn(board,player){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Its player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player),"'s turn please enter a valid move:"].join('')], 0));

var move = (tic_tac_toe.utility.read.cljs$core$IFn$_invoke$arity$0 ? tic_tac_toe.utility.read.cljs$core$IFn$_invoke$arity$0() : tic_tac_toe.utility.read.call(null));
if(tic_tac_toe.utility.is_empty_QMARK_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),move)){
return tic_tac_toe.utility.player_move(board,player,move);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid move please try again:"], 0));

return tic_tac_toe.utility.player_move(board,player,(tic_tac_toe.utility.read.cljs$core$IFn$_invoke$arity$0 ? tic_tac_toe.utility.read.cljs$core$IFn$_invoke$arity$0() : tic_tac_toe.utility.read.call(null)));
}
});
tic_tac_toe.utility.get_player = (function tic_tac_toe$utility$get_player(board,pos){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board),pos);
});
tic_tac_toe.utility.player_to_color = (function tic_tac_toe$utility$player_to_color(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$x)){
return cljs.core.cst$kw$black.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.utility.color);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.cst$kw$o)){
return cljs.core.cst$kw$pink.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.utility.color);
} else {
return null;

}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.utility !== 'undefined') && (typeof tic_tac_toe.utility.print_board !== 'undefined')){
} else {
tic_tac_toe.utility.print_board = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5884 = cljs.core.get_global_hierarchy;
return (fexpr__5884.cljs$core$IFn$_invoke$arity$0 ? fexpr__5884.cljs$core$IFn$_invoke$arity$0() : fexpr__5884.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tic-tac-toe.utility","print-board"),cljs.core.cst$kw$dimension,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tic_tac_toe.utility.print_board.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$two,(function (board){
var seq__5885 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board)));
var chunk__5886 = null;
var count__5887 = (0);
var i__5888 = (0);
while(true){
if((i__5888 < count__5887)){
var row = chunk__5886.cljs$core$IIndexed$_nth$arity$2(null,i__5888);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",row)], 0));


var G__5889 = seq__5885;
var G__5890 = chunk__5886;
var G__5891 = count__5887;
var G__5892 = (i__5888 + (1));
seq__5885 = G__5889;
chunk__5886 = G__5890;
count__5887 = G__5891;
i__5888 = G__5892;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq(seq__5885);
if(temp__5818__auto__){
var seq__5885__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5885__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5885__$1);
var G__5893 = cljs.core.chunk_rest(seq__5885__$1);
var G__5894 = c__4556__auto__;
var G__5895 = cljs.core.count(c__4556__auto__);
var G__5896 = (0);
seq__5885 = G__5893;
chunk__5886 = G__5894;
count__5887 = G__5895;
i__5888 = G__5896;
continue;
} else {
var row = cljs.core.first(seq__5885__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",row)], 0));


var G__5897 = cljs.core.next(seq__5885__$1);
var G__5898 = null;
var G__5899 = (0);
var G__5900 = (0);
seq__5885 = G__5897;
chunk__5886 = G__5898;
count__5887 = G__5899;
i__5888 = G__5900;
continue;
}
} else {
return null;
}
}
break;
}
}));
tic_tac_toe.utility.print_board.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$three,(function (board){
var seq__5901 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((9),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(board)));
var chunk__5902 = null;
var count__5903 = (0);
var i__5904 = (0);
while(true){
if((i__5904 < count__5903)){
var layer = chunk__5902.cljs$core$IIndexed$_nth$arity$2(null,i__5904);
var seq__5913_5921 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board),layer));
var chunk__5914_5922 = null;
var count__5915_5923 = (0);
var i__5916_5924 = (0);
while(true){
if((i__5916_5924 < count__5915_5923)){
var row_5925 = chunk__5914_5922.cljs$core$IIndexed$_nth$arity$2(null,i__5916_5924);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",row_5925)], 0));


var G__5926 = seq__5913_5921;
var G__5927 = chunk__5914_5922;
var G__5928 = count__5915_5923;
var G__5929 = (i__5916_5924 + (1));
seq__5913_5921 = G__5926;
chunk__5914_5922 = G__5927;
count__5915_5923 = G__5928;
i__5916_5924 = G__5929;
continue;
} else {
var temp__5818__auto___5930 = cljs.core.seq(seq__5913_5921);
if(temp__5818__auto___5930){
var seq__5913_5931__$1 = temp__5818__auto___5930;
if(cljs.core.chunked_seq_QMARK_(seq__5913_5931__$1)){
var c__4556__auto___5932 = cljs.core.chunk_first(seq__5913_5931__$1);
var G__5933 = cljs.core.chunk_rest(seq__5913_5931__$1);
var G__5934 = c__4556__auto___5932;
var G__5935 = cljs.core.count(c__4556__auto___5932);
var G__5936 = (0);
seq__5913_5921 = G__5933;
chunk__5914_5922 = G__5934;
count__5915_5923 = G__5935;
i__5916_5924 = G__5936;
continue;
} else {
var row_5937 = cljs.core.first(seq__5913_5931__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",row_5937)], 0));


var G__5938 = cljs.core.next(seq__5913_5931__$1);
var G__5939 = null;
var G__5940 = (0);
var G__5941 = (0);
seq__5913_5921 = G__5938;
chunk__5914_5922 = G__5939;
count__5915_5923 = G__5940;
i__5916_5924 = G__5941;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("---",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board),"+"))], 0));

cljs.core.println();


var G__5942 = seq__5901;
var G__5943 = chunk__5902;
var G__5944 = count__5903;
var G__5945 = (i__5904 + (1));
seq__5901 = G__5942;
chunk__5902 = G__5943;
count__5903 = G__5944;
i__5904 = G__5945;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq(seq__5901);
if(temp__5818__auto__){
var seq__5901__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5901__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__5901__$1);
var G__5946 = cljs.core.chunk_rest(seq__5901__$1);
var G__5947 = c__4556__auto__;
var G__5948 = cljs.core.count(c__4556__auto__);
var G__5949 = (0);
seq__5901 = G__5946;
chunk__5902 = G__5947;
count__5903 = G__5948;
i__5904 = G__5949;
continue;
} else {
var layer = cljs.core.first(seq__5901__$1);
var seq__5917_5950 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board),layer));
var chunk__5918_5951 = null;
var count__5919_5952 = (0);
var i__5920_5953 = (0);
while(true){
if((i__5920_5953 < count__5919_5952)){
var row_5954 = chunk__5918_5951.cljs$core$IIndexed$_nth$arity$2(null,i__5920_5953);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",row_5954)], 0));


var G__5955 = seq__5917_5950;
var G__5956 = chunk__5918_5951;
var G__5957 = count__5919_5952;
var G__5958 = (i__5920_5953 + (1));
seq__5917_5950 = G__5955;
chunk__5918_5951 = G__5956;
count__5919_5952 = G__5957;
i__5920_5953 = G__5958;
continue;
} else {
var temp__5818__auto___5959__$1 = cljs.core.seq(seq__5917_5950);
if(temp__5818__auto___5959__$1){
var seq__5917_5960__$1 = temp__5818__auto___5959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__5917_5960__$1)){
var c__4556__auto___5961 = cljs.core.chunk_first(seq__5917_5960__$1);
var G__5962 = cljs.core.chunk_rest(seq__5917_5960__$1);
var G__5963 = c__4556__auto___5961;
var G__5964 = cljs.core.count(c__4556__auto___5961);
var G__5965 = (0);
seq__5917_5950 = G__5962;
chunk__5918_5951 = G__5963;
count__5919_5952 = G__5964;
i__5920_5953 = G__5965;
continue;
} else {
var row_5966 = cljs.core.first(seq__5917_5960__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",row_5966)], 0));


var G__5967 = cljs.core.next(seq__5917_5960__$1);
var G__5968 = null;
var G__5969 = (0);
var G__5970 = (0);
seq__5917_5950 = G__5967;
chunk__5918_5951 = G__5968;
count__5919_5952 = G__5969;
i__5920_5953 = G__5970;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("---",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(board),"+"))], 0));

cljs.core.println();


var G__5971 = cljs.core.next(seq__5901__$1);
var G__5972 = null;
var G__5973 = (0);
var G__5974 = (0);
seq__5901 = G__5971;
chunk__5902 = G__5972;
count__5903 = G__5973;
i__5904 = G__5974;
continue;
}
} else {
return null;
}
}
break;
}
}));

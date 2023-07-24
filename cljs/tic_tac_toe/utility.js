// Compiled by ClojureScript 1.10.764 {}
goog.provide('tic_tac_toe.utility');
goog.require('cljs.core');
goog.require('clojure.string');
tic_tac_toe.utility.X = new cljs.core.Keyword(null,"x","x",2099068185);
tic_tac_toe.utility.O = new cljs.core.Keyword(null,"o","o",-1350007228);
tic_tac_toe.utility.EMPTY = new cljs.core.Keyword(null,"e","e",1381269198);
tic_tac_toe.utility.color = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(204),(204)], null),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(127)], null),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null);
tic_tac_toe.utility.game_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"board","board",-1907017633),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"game-number","game-number",-1266186747),(0),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null,new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286),null], null);
tic_tac_toe.utility.__GT_game_state = (function tic_tac_toe$utility$__GT_game_state(board,current_player,game_number,level,level_two){
return cljs.core.assoc.call(null,tic_tac_toe.utility.game_state,new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"player","player",-97687400),current_player,new cljs.core.Keyword(null,"game-number","game-number",-1266186747),game_number,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),level,new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286),level_two);
});

/**
 * @interface
 */
tic_tac_toe.utility.Board = function(){};

var tic_tac_toe$utility$Board$init_board$dyn_5416 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (tic_tac_toe.utility.init_board[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (tic_tac_toe.utility.init_board["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Board.init-board",this$);
}
}
});
tic_tac_toe.utility.init_board = (function tic_tac_toe$utility$init_board(this$){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$utility$Board$init_board$arity$1 == null)))))){
return this$.tic_tac_toe$utility$Board$init_board$arity$1(this$);
} else {
return tic_tac_toe$utility$Board$init_board$dyn_5416.call(null,this$);
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

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k5418,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__5422 = k5418;
switch (G__5422) {
default:
return cljs.core.get.call(null,self__.__extmap,k5418,else__4383__auto__);

}
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__5423){
var vec__5424 = p__5423;
var k__4403__auto__ = cljs.core.nth.call(null,vec__5424,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__5424,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#tic-tac-toe.utility.Four-by-four{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5417){
var self__ = this;
var G__5417__$1 = this;
return (new cljs.core.RecordIter((0),G__5417__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1447925224 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5419,other5420){
var self__ = this;
var this5419__$1 = this;
return (((!((other5420 == null)))) && ((this5419__$1.constructor === other5420.constructor)) && (cljs.core._EQ_.call(null,this5419__$1.__extmap,other5420.__extmap)));
}));

(tic_tac_toe.utility.Four_by_four.prototype.tic_tac_toe$utility$Board$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.utility.Four_by_four.prototype.tic_tac_toe$utility$Board$init_board$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.vec.call(null,cljs.core.repeat.call(null,((4) * (4)),tic_tac_toe.utility.EMPTY)),new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869)], null);
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tic_tac_toe.utility.Four_by_four(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__5417){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__5427 = cljs.core.keyword_identical_QMARK_;
var expr__5428 = k__4388__auto__;
return (new tic_tac_toe.utility.Four_by_four(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__5417),null));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__5417){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tic_tac_toe.utility.Four_by_four(G__5417,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Four_by_four.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
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
return cljs.core._write.call(null,writer__4424__auto__,"tic-tac-toe.utility/Four-by-four");
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
tic_tac_toe.utility.map__GT_Four_by_four = (function tic_tac_toe$utility$map__GT_Four_by_four(G__5421){
var extmap__4419__auto__ = (function (){var G__5430 = cljs.core.dissoc.call(null,G__5421);
if(cljs.core.record_QMARK_.call(null,G__5421)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__5430);
} else {
return G__5430;
}
})();
return (new tic_tac_toe.utility.Four_by_four(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k5433,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__5437 = k5433;
switch (G__5437) {
default:
return cljs.core.get.call(null,self__.__extmap,k5433,else__4383__auto__);

}
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__5438){
var vec__5439 = p__5438;
var k__4403__auto__ = cljs.core.nth.call(null,vec__5439,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__5439,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#tic-tac-toe.utility.Three-by-three{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5432){
var self__ = this;
var G__5432__$1 = this;
return (new cljs.core.RecordIter((0),G__5432__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1816677812 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5434,other5435){
var self__ = this;
var this5434__$1 = this;
return (((!((other5435 == null)))) && ((this5434__$1.constructor === other5435.constructor)) && (cljs.core._EQ_.call(null,this5434__$1.__extmap,other5435.__extmap)));
}));

(tic_tac_toe.utility.Three_by_three.prototype.tic_tac_toe$utility$Board$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.utility.Three_by_three.prototype.tic_tac_toe$utility$Board$init_board$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.vec.call(null,cljs.core.repeat.call(null,((3) * (3)),tic_tac_toe.utility.EMPTY)),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"two","two",627606869)], null);
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tic_tac_toe.utility.Three_by_three(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__5432){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__5442 = cljs.core.keyword_identical_QMARK_;
var expr__5443 = k__4388__auto__;
return (new tic_tac_toe.utility.Three_by_three(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__5432),null));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__5432){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tic_tac_toe.utility.Three_by_three(G__5432,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Three_by_three.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
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
return cljs.core._write.call(null,writer__4424__auto__,"tic-tac-toe.utility/Three-by-three");
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
tic_tac_toe.utility.map__GT_Three_by_three = (function tic_tac_toe$utility$map__GT_Three_by_three(G__5436){
var extmap__4419__auto__ = (function (){var G__5445 = cljs.core.dissoc.call(null,G__5436);
if(cljs.core.record_QMARK_.call(null,G__5436)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__5445);
} else {
return G__5445;
}
})();
return (new tic_tac_toe.utility.Three_by_three(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k5448,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__5452 = k5448;
switch (G__5452) {
default:
return cljs.core.get.call(null,self__.__extmap,k5448,else__4383__auto__);

}
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__5453){
var vec__5454 = p__5453;
var k__4403__auto__ = cljs.core.nth.call(null,vec__5454,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__5454,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#tic-tac-toe.utility.Three-dimension{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5447){
var self__ = this;
var G__5447__$1 = this;
return (new cljs.core.RecordIter((0),G__5447__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1085919775 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5449,other5450){
var self__ = this;
var this5449__$1 = this;
return (((!((other5450 == null)))) && ((this5449__$1.constructor === other5450.constructor)) && (cljs.core._EQ_.call(null,this5449__$1.__extmap,other5450.__extmap)));
}));

(tic_tac_toe.utility.Three_dimension.prototype.tic_tac_toe$utility$Board$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.utility.Three_dimension.prototype.tic_tac_toe$utility$Board$init_board$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.vec.call(null,cljs.core.repeat.call(null,(((3) * (3)) * (3)),tic_tac_toe.utility.EMPTY)),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"three","three",-1651831795)], null);
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new tic_tac_toe.utility.Three_dimension(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__5447){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__5457 = cljs.core.keyword_identical_QMARK_;
var expr__5458 = k__4388__auto__;
return (new tic_tac_toe.utility.Three_dimension(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__5447),null));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__5447){
var self__ = this;
var this__4379__auto____$1 = this;
return (new tic_tac_toe.utility.Three_dimension(G__5447,self__.__extmap,self__.__hash));
}));

(tic_tac_toe.utility.Three_dimension.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
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
return cljs.core._write.call(null,writer__4424__auto__,"tic-tac-toe.utility/Three-dimension");
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
tic_tac_toe.utility.map__GT_Three_dimension = (function tic_tac_toe$utility$map__GT_Three_dimension(G__5451){
var extmap__4419__auto__ = (function (){var G__5460 = cljs.core.dissoc.call(null,G__5451);
if(cljs.core.record_QMARK_.call(null,G__5451)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__5460);
} else {
return G__5460;
}
})();
return (new tic_tac_toe.utility.Three_dimension(null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

tic_tac_toe.utility.has_empty_space_QMARK_ = (function tic_tac_toe$utility$has_empty_space_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__5462_SHARP_){
return cljs.core._EQ_.call(null,tic_tac_toe.utility.EMPTY,p1__5462_SHARP_);
}),board));
});
tic_tac_toe.utility.all_empty_space_QMARK_ = (function tic_tac_toe$utility$all_empty_space_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5463_SHARP_){
return cljs.core._EQ_.call(null,tic_tac_toe.utility.X,p1__5463_SHARP_);
}),board)));
});
tic_tac_toe.utility.is_empty_QMARK_ = (function tic_tac_toe$utility$is_empty_QMARK_(board,position){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,board,position),tic_tac_toe.utility.EMPTY);
});
tic_tac_toe.utility.player_move = (function tic_tac_toe$utility$player_move(board,player,position){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"state","state",-1988618099),(function (p1__5464_SHARP_){
return cljs.core.assoc.call(null,p1__5464_SHARP_,position,player);
}));
});
tic_tac_toe.utility.switch_player = (function tic_tac_toe$utility$switch_player(current_player){
if(cljs.core._EQ_.call(null,current_player,tic_tac_toe.utility.X)){
return tic_tac_toe.utility.O;
} else {
return tic_tac_toe.utility.X;
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.utility !== 'undefined') && (typeof tic_tac_toe.utility.win_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.utility.win_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.utility","win?"),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.utility.win_QMARK_,new cljs.core.Keyword(null,"two","two",627606869),(function (board,player){
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board);
var rows = cljs.core.partition.call(null,size,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board));
var cols = cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,rows);
var diag1 = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5466(s__5467){
return (new cljs.core.LazySeq(null,(function (){
var s__5467__$1 = s__5467;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5467__$1);
if(temp__5818__auto__){
var s__5467__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5467__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5467__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5469 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5468 = (0);
while(true){
if((i__5468 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5468);
cljs.core.chunk_append.call(null,b__5469,cljs.core.nth.call(null,cljs.core.nth.call(null,rows,i),i));

var G__5474 = (i__5468 + (1));
i__5468 = G__5474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5469),tic_tac_toe$utility$iter__5466.call(null,cljs.core.chunk_rest.call(null,s__5467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5469),null);
}
} else {
var i = cljs.core.first.call(null,s__5467__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,rows,i),i),tic_tac_toe$utility$iter__5466.call(null,cljs.core.rest.call(null,s__5467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,size));
})();
var diag2 = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5470(s__5471){
return (new cljs.core.LazySeq(null,(function (){
var s__5471__$1 = s__5471;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5471__$1);
if(temp__5818__auto__){
var s__5471__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5471__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5471__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5473 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5472 = (0);
while(true){
if((i__5472 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5472);
cljs.core.chunk_append.call(null,b__5473,cljs.core.nth.call(null,cljs.core.nth.call(null,rows,i),(size - (i + (1)))));

var G__5475 = (i__5472 + (1));
i__5472 = G__5475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5473),tic_tac_toe$utility$iter__5470.call(null,cljs.core.chunk_rest.call(null,s__5471__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5473),null);
}
} else {
var i = cljs.core.first.call(null,s__5471__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,rows,i),(size - (i + (1)))),tic_tac_toe$utility$iter__5470.call(null,cljs.core.rest.call(null,s__5471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,size));
})();
var all_spaces = cljs.core.concat.call(null,rows,cols,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diag1,diag2], null));
var win_cond = (function (space){
return cljs.core.every_QMARK_.call(null,(function (p1__5465_SHARP_){
return cljs.core._EQ_.call(null,player,p1__5465_SHARP_);
}),space);
});
return cljs.core.boolean$.call(null,cljs.core.some.call(null,win_cond,all_spaces));
}));
cljs.core._add_method.call(null,tic_tac_toe.utility.win_QMARK_,new cljs.core.Keyword(null,"three","three",-1651831795),(function (board,player){
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board);
var rows = cljs.core.partition.call(null,size,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board));
var cols = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5481(s__5482){
return (new cljs.core.LazySeq(null,(function (){
var s__5482__$1 = s__5482;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5482__$1);
if(temp__5818__auto__){
var s__5482__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5482__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5482__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5484 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5483 = (0);
while(true){
if((i__5483 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5483);
cljs.core.chunk_append.call(null,b__5484,cljs.core.mapv.call(null,((function (i__5483,i,c__4527__auto__,size__4528__auto__,b__5484,s__5482__$2,temp__5818__auto__,size,rows){
return (function (p1__5476_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5476_SHARP_);
});})(i__5483,i,c__4527__auto__,size__4528__auto__,b__5484,s__5482__$2,temp__5818__auto__,size,rows))
,i));

var G__5497 = (i__5483 + (1));
i__5483 = G__5497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5484),tic_tac_toe$utility$iter__5481.call(null,cljs.core.chunk_rest.call(null,s__5482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5484),null);
}
} else {
var i = cljs.core.first.call(null,s__5482__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (i,s__5482__$2,temp__5818__auto__,size,rows){
return (function (p1__5476_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5476_SHARP_);
});})(i,s__5482__$2,temp__5818__auto__,size,rows))
,i),tic_tac_toe$utility$iter__5481.call(null,cljs.core.rest.call(null,s__5482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(12),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(13),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(14),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(21),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(22),(25)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(23),(26)], null)], null));
})();
var diags = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5485(s__5486){
return (new cljs.core.LazySeq(null,(function (){
var s__5486__$1 = s__5486;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5486__$1);
if(temp__5818__auto__){
var s__5486__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5486__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5486__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5488 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5487 = (0);
while(true){
if((i__5487 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5487);
cljs.core.chunk_append.call(null,b__5488,cljs.core.mapv.call(null,((function (i__5487,i,c__4527__auto__,size__4528__auto__,b__5488,s__5486__$2,temp__5818__auto__,size,rows,cols){
return (function (p1__5477_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5477_SHARP_);
});})(i__5487,i,c__4527__auto__,size__4528__auto__,b__5488,s__5486__$2,temp__5818__auto__,size,rows,cols))
,i));

var G__5498 = (i__5487 + (1));
i__5487 = G__5498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5488),tic_tac_toe$utility$iter__5485.call(null,cljs.core.chunk_rest.call(null,s__5486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5488),null);
}
} else {
var i = cljs.core.first.call(null,s__5486__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (i,s__5486__$2,temp__5818__auto__,size,rows,cols){
return (function (p1__5477_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5477_SHARP_);
});})(i,s__5486__$2,temp__5818__auto__,size,rows,cols))
,i),tic_tac_toe$utility$iter__5485.call(null,cljs.core.rest.call(null,s__5486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(13),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(22),(24)], null)], null));
})();
var depth_cols = cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.partition.call(null,(9),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board)));
var depth_rows = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5489(s__5490){
return (new cljs.core.LazySeq(null,(function (){
var s__5490__$1 = s__5490;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5490__$1);
if(temp__5818__auto__){
var s__5490__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5490__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5490__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5492 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5491 = (0);
while(true){
if((i__5491 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5491);
cljs.core.chunk_append.call(null,b__5492,cljs.core.mapv.call(null,((function (i__5491,i,c__4527__auto__,size__4528__auto__,b__5492,s__5490__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols){
return (function (p1__5478_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5478_SHARP_);
});})(i__5491,i,c__4527__auto__,size__4528__auto__,b__5492,s__5490__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols))
,i));

var G__5499 = (i__5491 + (1));
i__5491 = G__5499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5492),tic_tac_toe$utility$iter__5489.call(null,cljs.core.chunk_rest.call(null,s__5490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5492),null);
}
} else {
var i = cljs.core.first.call(null,s__5490__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (i,s__5490__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols){
return (function (p1__5478_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5478_SHARP_);
});})(i,s__5490__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols))
,i),tic_tac_toe$utility$iter__5489.call(null,cljs.core.rest.call(null,s__5490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(13),(23)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(16),(26)], null)], null));
})();
var depth_diags = (function (){var iter__4529__auto__ = (function tic_tac_toe$utility$iter__5493(s__5494){
return (new cljs.core.LazySeq(null,(function (){
var s__5494__$1 = s__5494;
while(true){
var temp__5818__auto__ = cljs.core.seq.call(null,s__5494__$1);
if(temp__5818__auto__){
var s__5494__$2 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5494__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5494__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5496 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5495 = (0);
while(true){
if((i__5495 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5495);
cljs.core.chunk_append.call(null,b__5496,cljs.core.mapv.call(null,((function (i__5495,i,c__4527__auto__,size__4528__auto__,b__5496,s__5494__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows){
return (function (p1__5479_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5479_SHARP_);
});})(i__5495,i,c__4527__auto__,size__4528__auto__,b__5496,s__5494__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows))
,i));

var G__5500 = (i__5495 + (1));
i__5495 = G__5500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5496),tic_tac_toe$utility$iter__5493.call(null,cljs.core.chunk_rest.call(null,s__5494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5496),null);
}
} else {
var i = cljs.core.first.call(null,s__5494__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (i,s__5494__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows){
return (function (p1__5479_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),p1__5479_SHARP_);
});})(i,s__5494__$2,temp__5818__auto__,size,rows,cols,diags,depth_cols,depth_rows))
,i),tic_tac_toe$utility$iter__5493.call(null,cljs.core.rest.call(null,s__5494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(13),(24)], null)], null));
})();
var all_spaces = cljs.core.concat.call(null,rows,cols,diags,depth_cols,depth_rows,depth_diags);
var win_cond = (function (space){
return cljs.core.every_QMARK_.call(null,(function (p1__5480_SHARP_){
return cljs.core._EQ_.call(null,player,p1__5480_SHARP_);
}),space);
});
return cljs.core.boolean$.call(null,cljs.core.some.call(null,win_cond,all_spaces));
}));
tic_tac_toe.utility.list_empties = (function tic_tac_toe$utility$list_empties(board){
return cljs.core.vec.call(null,cljs.core.keep_indexed.call(null,(function (index,value){
if(cljs.core._EQ_.call(null,value,tic_tac_toe.utility.EMPTY)){
return index;
} else {
return null;
}
}),board));
});
tic_tac_toe.utility.terminal_state = (function tic_tac_toe$utility$terminal_state(board){
if(cljs.core.truth_(tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.X))){
return (10);
} else {
if(cljs.core.truth_(tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.O))){
return (-10);
} else {
return (0);

}
}
});
tic_tac_toe.utility.terminal_QMARK_ = (function tic_tac_toe$utility$terminal_QMARK_(board){
var or__4126__auto__ = tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.X);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tic_tac_toe.utility.win_QMARK_.call(null,board,tic_tac_toe.utility.O);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(tic_tac_toe.utility.has_empty_space_QMARK_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board))));
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.utility !== 'undefined') && (typeof tic_tac_toe.utility.game_over !== 'undefined')){
} else {
tic_tac_toe.utility.game_over = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.utility","game-over"),(function() { 
var G__5501__delegate = function (x,args){
return new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(x);
};
var G__5501 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__5502__i = 0, G__5502__a = new Array(arguments.length -  1);
while (G__5502__i < G__5502__a.length) {G__5502__a[G__5502__i] = arguments[G__5502__i + 1]; ++G__5502__i;}
  args = new cljs.core.IndexedSeq(G__5502__a,0,null);
} 
return G__5501__delegate.call(this,x,args);};
G__5501.cljs$lang$maxFixedArity = 1;
G__5501.cljs$lang$applyTo = (function (arglist__5503){
var x = cljs.core.first(arglist__5503);
var args = cljs.core.rest(arglist__5503);
return G__5501__delegate(x,args);
});
G__5501.cljs$core$IFn$_invoke$arity$variadic = G__5501__delegate;
return G__5501;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.utility.game_over,new cljs.core.Keyword(null,"print","print",1299562414),(function (board){
if(cljs.core._EQ_.call(null,tic_tac_toe.utility.terminal_state.call(null,board),(10))){
return cljs.core.println.call(null,"Player X has won the game");
} else {
if(cljs.core._EQ_.call(null,tic_tac_toe.utility.terminal_state.call(null,board),(-10))){
return cljs.core.println.call(null,"Player O has won the game");
} else {
if(cljs.core._EQ_.call(null,tic_tac_toe.utility.terminal_state.call(null,board),(0))){
return cljs.core.println.call(null,"The game has ended in draw");
} else {
return null;
}
}
}
}));
cljs.core._add_method.call(null,tic_tac_toe.utility.game_over,new cljs.core.Keyword(null,"gui","gui",604532813),(function (board,current_player,player,game_number,difficulty,difficulty2){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-player","current-player",-970625153),current_player,new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"game-number","game-number",-1266186747),game_number,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),difficulty,new cljs.core.Keyword(null,"difficulty2","difficulty2",-2048120286),difficulty2], null);
}));
tic_tac_toe.utility.choose_player = (function tic_tac_toe$utility$choose_player(){
cljs.core.println.call(null,"Choose your character \n 1) X\n 2) O");

var choice = tic_tac_toe.utility.read.call(null);
if(cljs.core._EQ_.call(null,choice,(1))){
return new cljs.core.Keyword(null,"x","x",2099068185);
} else {
return new cljs.core.Keyword(null,"o","o",-1350007228);
}
});
tic_tac_toe.utility.game_player_rel = (function tic_tac_toe$utility$game_player_rel(board){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-type","game-type",-1745309040).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"ai-vs-human","ai-vs-human",161290622))){
return tic_tac_toe.utility.choose_player.call(null);
} else {
return tic_tac_toe.utility.X;
}
});
tic_tac_toe.utility.select_player = (function tic_tac_toe$utility$select_player(board,last_state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"new","new",-2085437848))){
return tic_tac_toe.utility.game_player_rel.call(null,board);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"old","old",-1825222690))){
return new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(last_state);
} else {
return null;
}
}
});
tic_tac_toe.utility.select_current_player = (function tic_tac_toe$utility$select_current_player(board,last_state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"new","new",-2085437848))){
return tic_tac_toe.utility.X;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"old","old",-1825222690))){
return new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(last_state);
} else {
return null;
}
}
});
tic_tac_toe.utility.human_turn = (function tic_tac_toe$utility$human_turn(board,player){
cljs.core.println.call(null,["Its player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player),"'s turn please enter a valid move:"].join(''));

var move = tic_tac_toe.utility.read.call(null);
if(tic_tac_toe.utility.is_empty_QMARK_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),move)){
return tic_tac_toe.utility.player_move.call(null,board,player,move);
} else {
cljs.core.println.call(null,"Invalid move please try again:");

return tic_tac_toe.utility.player_move.call(null,board,player,tic_tac_toe.utility.read.call(null));
}
});
tic_tac_toe.utility.get_player = (function tic_tac_toe$utility$get_player(board,pos){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board),pos);
});
tic_tac_toe.utility.player_to_color = (function tic_tac_toe$utility$player_to_color(player){
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.utility.color);
} else {
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"o","o",-1350007228))){
return new cljs.core.Keyword(null,"pink","pink",393815864).cljs$core$IFn$_invoke$arity$1(tic_tac_toe.utility.color);
} else {
return null;

}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.utility !== 'undefined') && (typeof tic_tac_toe.utility.print_board !== 'undefined')){
} else {
tic_tac_toe.utility.print_board = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.utility","print-board"),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.utility.print_board,new cljs.core.Keyword(null,"two","two",627606869),(function (board){
var seq__5504 = cljs.core.seq.call(null,cljs.core.partition.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board)));
var chunk__5505 = null;
var count__5506 = (0);
var i__5507 = (0);
while(true){
if((i__5507 < count__5506)){
var row = cljs.core._nth.call(null,chunk__5505,i__5507);
cljs.core.println.call(null,clojure.string.join.call(null," | ",row));


var G__5508 = seq__5504;
var G__5509 = chunk__5505;
var G__5510 = count__5506;
var G__5511 = (i__5507 + (1));
seq__5504 = G__5508;
chunk__5505 = G__5509;
count__5506 = G__5510;
i__5507 = G__5511;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5504);
if(temp__5818__auto__){
var seq__5504__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5504__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5504__$1);
var G__5512 = cljs.core.chunk_rest.call(null,seq__5504__$1);
var G__5513 = c__4556__auto__;
var G__5514 = cljs.core.count.call(null,c__4556__auto__);
var G__5515 = (0);
seq__5504 = G__5512;
chunk__5505 = G__5513;
count__5506 = G__5514;
i__5507 = G__5515;
continue;
} else {
var row = cljs.core.first.call(null,seq__5504__$1);
cljs.core.println.call(null,clojure.string.join.call(null," | ",row));


var G__5516 = cljs.core.next.call(null,seq__5504__$1);
var G__5517 = null;
var G__5518 = (0);
var G__5519 = (0);
seq__5504 = G__5516;
chunk__5505 = G__5517;
count__5506 = G__5518;
i__5507 = G__5519;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tic_tac_toe.utility.print_board,new cljs.core.Keyword(null,"three","three",-1651831795),(function (board){
var seq__5520 = cljs.core.seq.call(null,cljs.core.partition.call(null,(9),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(board)));
var chunk__5521 = null;
var count__5522 = (0);
var i__5523 = (0);
while(true){
if((i__5523 < count__5522)){
var layer = cljs.core._nth.call(null,chunk__5521,i__5523);
var seq__5532_5540 = cljs.core.seq.call(null,cljs.core.partition.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board),layer));
var chunk__5533_5541 = null;
var count__5534_5542 = (0);
var i__5535_5543 = (0);
while(true){
if((i__5535_5543 < count__5534_5542)){
var row_5544 = cljs.core._nth.call(null,chunk__5533_5541,i__5535_5543);
cljs.core.println.call(null,clojure.string.join.call(null," | ",row_5544));


var G__5545 = seq__5532_5540;
var G__5546 = chunk__5533_5541;
var G__5547 = count__5534_5542;
var G__5548 = (i__5535_5543 + (1));
seq__5532_5540 = G__5545;
chunk__5533_5541 = G__5546;
count__5534_5542 = G__5547;
i__5535_5543 = G__5548;
continue;
} else {
var temp__5818__auto___5549 = cljs.core.seq.call(null,seq__5532_5540);
if(temp__5818__auto___5549){
var seq__5532_5550__$1 = temp__5818__auto___5549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5532_5550__$1)){
var c__4556__auto___5551 = cljs.core.chunk_first.call(null,seq__5532_5550__$1);
var G__5552 = cljs.core.chunk_rest.call(null,seq__5532_5550__$1);
var G__5553 = c__4556__auto___5551;
var G__5554 = cljs.core.count.call(null,c__4556__auto___5551);
var G__5555 = (0);
seq__5532_5540 = G__5552;
chunk__5533_5541 = G__5553;
count__5534_5542 = G__5554;
i__5535_5543 = G__5555;
continue;
} else {
var row_5556 = cljs.core.first.call(null,seq__5532_5550__$1);
cljs.core.println.call(null,clojure.string.join.call(null," | ",row_5556));


var G__5557 = cljs.core.next.call(null,seq__5532_5550__$1);
var G__5558 = null;
var G__5559 = (0);
var G__5560 = (0);
seq__5532_5540 = G__5557;
chunk__5533_5541 = G__5558;
count__5534_5542 = G__5559;
i__5535_5543 = G__5560;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null,clojure.string.join.call(null,"---",cljs.core.repeat.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board),"+")));

cljs.core.println.call(null);


var G__5561 = seq__5520;
var G__5562 = chunk__5521;
var G__5563 = count__5522;
var G__5564 = (i__5523 + (1));
seq__5520 = G__5561;
chunk__5521 = G__5562;
count__5522 = G__5563;
i__5523 = G__5564;
continue;
} else {
var temp__5818__auto__ = cljs.core.seq.call(null,seq__5520);
if(temp__5818__auto__){
var seq__5520__$1 = temp__5818__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5520__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5520__$1);
var G__5565 = cljs.core.chunk_rest.call(null,seq__5520__$1);
var G__5566 = c__4556__auto__;
var G__5567 = cljs.core.count.call(null,c__4556__auto__);
var G__5568 = (0);
seq__5520 = G__5565;
chunk__5521 = G__5566;
count__5522 = G__5567;
i__5523 = G__5568;
continue;
} else {
var layer = cljs.core.first.call(null,seq__5520__$1);
var seq__5536_5569 = cljs.core.seq.call(null,cljs.core.partition.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board),layer));
var chunk__5537_5570 = null;
var count__5538_5571 = (0);
var i__5539_5572 = (0);
while(true){
if((i__5539_5572 < count__5538_5571)){
var row_5573 = cljs.core._nth.call(null,chunk__5537_5570,i__5539_5572);
cljs.core.println.call(null,clojure.string.join.call(null," | ",row_5573));


var G__5574 = seq__5536_5569;
var G__5575 = chunk__5537_5570;
var G__5576 = count__5538_5571;
var G__5577 = (i__5539_5572 + (1));
seq__5536_5569 = G__5574;
chunk__5537_5570 = G__5575;
count__5538_5571 = G__5576;
i__5539_5572 = G__5577;
continue;
} else {
var temp__5818__auto___5578__$1 = cljs.core.seq.call(null,seq__5536_5569);
if(temp__5818__auto___5578__$1){
var seq__5536_5579__$1 = temp__5818__auto___5578__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5536_5579__$1)){
var c__4556__auto___5580 = cljs.core.chunk_first.call(null,seq__5536_5579__$1);
var G__5581 = cljs.core.chunk_rest.call(null,seq__5536_5579__$1);
var G__5582 = c__4556__auto___5580;
var G__5583 = cljs.core.count.call(null,c__4556__auto___5580);
var G__5584 = (0);
seq__5536_5569 = G__5581;
chunk__5537_5570 = G__5582;
count__5538_5571 = G__5583;
i__5539_5572 = G__5584;
continue;
} else {
var row_5585 = cljs.core.first.call(null,seq__5536_5579__$1);
cljs.core.println.call(null,clojure.string.join.call(null," | ",row_5585));


var G__5586 = cljs.core.next.call(null,seq__5536_5579__$1);
var G__5587 = null;
var G__5588 = (0);
var G__5589 = (0);
seq__5536_5569 = G__5586;
chunk__5537_5570 = G__5587;
count__5538_5571 = G__5588;
i__5539_5572 = G__5589;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null,clojure.string.join.call(null,"---",cljs.core.repeat.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(board),"+")));

cljs.core.println.call(null);


var G__5590 = cljs.core.next.call(null,seq__5520__$1);
var G__5591 = null;
var G__5592 = (0);
var G__5593 = (0);
seq__5520 = G__5590;
chunk__5521 = G__5591;
count__5522 = G__5592;
i__5523 = G__5593;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=utility.js.map

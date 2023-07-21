// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('tic_tac_toe.web_page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('tic_tac_toe.play_game_web');
tic_tac_toe.web_page.main = (function tic_tac_toe$web_page$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.play_game_web.run_ttt], null),document.getElementById("app"));
});
goog.exportSymbol('tic_tac_toe.web_page.main', tic_tac_toe.web_page.main);
tic_tac_toe.web_page.main();

/** PARALLAX CODE **/

$(document).ready(function(){
  parallax.add($("#title"))
    .add($("#gridSize"))
    .add($("#options"))
    .add($("#importantLettersAutoGen"))
    .add($("#importantLettersManual"))
    .add($("#overview"))
    .add($("#individualLetter"))
    .add($("#download"));
    
//parallax.title.onload=function(){
//	setBottom("gridSize","Grid Size");
//};
//parallax.gridSize.onload=function(){
//	setBottom("options","Options");
//};
//parallax.options.onload=function(){
//	setLeft("importantLettersAutoGen","Let the computer do the work");
//	setRight("importantLettersManual","Do the work yourself");
//};

parallax.title.show();

});



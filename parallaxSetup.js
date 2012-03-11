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
    
  parallax.background = $("body");
    
  //Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') { 
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') { 
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') { 
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') { 
			bottomKey();
		}
	});
  
  //Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};
    
  parallax.title.onload=function(){
      setRight("gridSize");
    };
  parallax.gridSize.onload=function(){
    setLeft("title");
    setRight("importantLettersManual");
    //setRight("options");
  };
  parallax.options.onload=function(){
    //setLeft("gridSize");
    //setLeft("importantLettersAutoGen");
    //setRight("importantLettersManual");
  };
  parallax.importantLettersManual.online=function(){
    setLeft("gridSize");
  };
  
  //Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page){
		$("#nextControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){ 
			parallax[page].right(); 
		};
	}
	
	function setLeft(page){
		$("#prevControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){ 
			parallax[page].left(); 
		};
	}
	
  $(".control").hide();
    parallax.importantLettersManual.show();
});



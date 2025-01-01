
function changeAll(x){

	// move gal
	move(x);
	
	// change tab
	
	changeTab(x);
}

function move(num){
	pos = -100*num;
	gal.style.left = pos + "%";
}

function changeTab(num){

	for(i = 0 ; i < buts.length;i++){
		buts[i].className = "";
	}
	
	buts[num].className = "sel";	
}


 function go_right(){

	if(pos > -500){
		pos = pos - 100;
		gal.style.left = pos + "%";
	}
	else if(pos == -500){
		pos = 0;
		gal.style.left = pos + "%";	
	}
	
	let  currentTabIndex = pos/-100;
	changeTab(currentTabIndex);
}


function go_left(){

	if(pos < 0){
		pos = pos + 100;
		gal.style.left = pos + "%";
	}
	
		
	currentTabIndex = pos/-100;
	changeTab(currentTabIndex);
}
function play(){
	s = setInterval("go_right()",6000);
}
function pause(){
	clearInterval(s);
}



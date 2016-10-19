var carousel = document.querySelector('.carousel');
	var points = document.querySelectorAll('.points li a');
	var position = +document.querySelector('.points li a.active').getAttribute('data-shift');
	var interval = setInterval(nextStep, 5000);
	function nextStep(){
	if(position <= -200){
		position = 0;
		carousel.style.left = 0;					
	} else{			
		carousel.style.left = position - 100 + '%';		
		position -= 100;			
	}
	for(var i = 0; i<points.length; i++){
		var point = points[i];
		point.classList.remove('active');
		if(+point.dataset.shift === position){
			point.classList.add('active');
		}
	}				
}
function addActiveClass(e){
	e.preventDefault();
	for(var i =0; i< points.length; i++){
		var point = points[i];
		point.classList.remove('active');
	}
	e.target.classList.add('active');	
	carousel.style.left = e.target.dataset.shift + '%';	
	position = +e.target.dataset.shift;
	clearInterval(interval);
	return false;
}

for(var i =0; i<points.length; i++){
	var point = points[i];
	point.addEventListener('click', addActiveClass);
}
var nextArrow = document.querySelector('.right-arrow');
var prevArrow = document.querySelector('.left-arrow');
for(var j =0; j<carousel.length; j++){	
	var carouselLeft = parseInt(getComputedStyle(carousel[j]).left);
}
nextArrow.onclick = function(e){
	e.preventDefault();
	clearInterval(interval);
	if(position <= -200){
		position = 0;
		carousel.style.left = 0;				
	} else{			
		carousel.style.left = position - 100 + '%';	
		position -= 100;			
	}
	for(var i = 0; i<points.length; i++){
		var point = points[i];
		point.classList.remove('active');
		if(+point.dataset.shift === position){
			point.classList.add('active');
		}
	}
	return false;
}
prevArrow.onclick = function(e){
	e.preventDefault();
	clearInterval(interval);
	if(position === 0){
		position = -200;
		carousel.style.left = '-200%';	
	} else{			
		carousel.style.left = position + 100 + '%';
		position += 100;				
	}
	for(var i = 0; i<points.length; i++){
		var point = points[i];
		point.classList.remove('active');
		if(+point.dataset.shift === position){
			point.classList.add('active');
		}
	}
	return false;
}
let portfoiliitem=document.querySelectorAll('.portfolio-menu-item')
let portfoliosection=document.querySelectorAll('.portfolio-section-item')
let number=0;
let changetext=true;


	$('.portfolio-menu-item').click(function(e){
		e.preventDefault()
		HiddenPorfolio()
		RemoveClassActive()
		this.classList.add('active')
		let type=this.getAttribute('data-type')
		 ShowWebPortfolio(type)
			if(type==='all'){
				ShowAll()
			}
	})
	$('#green-btn').click(function(){
		if(changetext){
			$('.hidden').fadeIn('slow')
		$('#green-btn').text('HideMore...')
		
			changetext=false;
		}

		else{
		$('.hidden').fadeOut('slow')
		$('#green-btn').text('ShowMore...')

		}
		
	})
	$('.header_list a').click(function(){
	let target=$(this).attr('href')
		 $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
	})
	$(window).scroll(function(){
		if($(this).scrollTop() >=80){
			$('header').addClass('active')
			$('.responsiv-navigation').toggleClass('fix')
			}
	
		
	})
	
	$('#my-form').submit(function(e){
		e.preventDefault()
					$.ajax({
						    url: "https://reqres.in/api/register",
						    type: "POST",
						    data: {
						        "email": "eve.holt@reqres.in",
   								 "password": "pistol"
						    },
						    success: function(response){
						        console.log(response);
						    }
			});
	
		
	})
	$('#mobile-menu').click(function(){
		$(this).toggleClass('change')
		$('.responsiv-navigation').toggleClass('active-menu')
	    	$('.responsiv-menu li').toggleClass('active-list')

	})
	function HiddenPorfolio(){
		for(var i=0; i<portfoliosection.length;i++){
			portfoliosection[i].style.display="none"
		}
	}
	function RemoveClassActive(){

		for(var i=0;i<portfoiliitem.length;i++ ){
			portfoiliitem[i].classList.contains('active')
			portfoiliitem[i].classList.remove('active')
		}
	}
	function ShowWebPortfolio(f){
		let portfolioweb=document.querySelectorAll('.portfolio-'+ f)
		for(var i=0; i<portfolioweb.length;i++){
			portfolioweb[i].style.display="block"

		}
	}

	function ShowAll(){
		for(var i=0; i<portfoliosection.length;i++){
			portfoliosection[i].style.display="block"
		}
	}
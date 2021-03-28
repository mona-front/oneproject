let portfoliomenuitem=document.querySelectorAll('.portfolio-menu-item')
let portfoliosectionitem=document.querySelectorAll('.portfolio-section-item')


// menu web

for(var i=0;i<portfoliomenuitem.length;i++){
	portfoliomenuitem[i].addEventListener('click',function(e){
		e.preventDefault()
		
		HidePortfilioItem()	
		AddClassActive()
		let type=this.getAttribute('data-type')
		ShowPorfoiloWeb(type)	
		this.classList.add('active')

			if(type == 'all'){
				ShowAll()
			}
			else{
				HidePortfilioItem()	
				ShowPorfoiloWeb(type)
			}
	})
}

		
function HidePortfilioItem(){
	for(var i=0; i<portfoliosectionitem.length;i++){
		 	portfoliosectionitem[i].style.display="none";
		 }

}
function ShowAll(){
	for(var i=0; i<portfoliosectionitem.length;i++){
		 	portfoliosectionitem[i].style.display="block";
		 }

}
function AddClassActive(){
	for(var i=0; i<portfoliomenuitem.length;i++){
		if(portfoliomenuitem[i].classList.contains('active')){
			portfoliomenuitem[i].classList.remove('active')
		}
	}
}
function ShowPorfoiloWeb(filter){
	
	let portfolioweb=document.querySelectorAll('.portfolio-' + filter )
	for(var i=0; i<portfolioweb.length;i++){
		 	portfolioweb[i].style.display="block";
		 }
}








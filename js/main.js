// variables
var  choix1=[];
var choix2=[];
var compare=0;
var images= ["img/ronaldo.jpeg","img/ronaldo.jpeg","img/bale.jpeg","img/bale.jpeg","img/benzema.jpeg","img/benzema.jpeg","img/isco.jpeg","img/isco.jpeg","img/marcelo.jpeg","img/marcelo.jpeg","img/modric.jpeg","img/modric.jpeg","img/morata.jpeg","img/morata.jpeg"];
var imageDom = document.getElementsByClassName('card');






for(var position=images.length-1; position>=1; position--){
	var hasard=Math.floor(Math.random()*(position+1));
	var sauve=images[position];
	images[position]=images[hasard];
	images[hasard]=sauve;

}

//for images melanger
for (var i = 0; i < imageDom.length; i++) {

	imageDom[i].className+=" " + images[i];
}
for (var i = 0; i < images.length; i++) {
 imageDom[i].firstChild.src=images[i];
 console.log(images);
}
function stock(obj) {
	//obj.
	choix1.push(obj.classList[1]);
	choix2.push(obj.id);
	console.log('choix2');
console.log(choix1);
}



// function
 function play(obj) {
	 if (compare == 0) {
		 //mettre ce qui se passe au premier click
	 	stock(obj);
console.log(choix1);
		//style
		obj.firstChild.style.opacity="1";



		console.log(compare);


		compare++;

	} else {
		//ce qui se passe au deuxieme click
		stock(obj);
		//styles
		obj.firstChild.style.opacity="1";
		console.log(compare);
		//compare
if (choix1[0]==choix1[1]) {
	console.log(choix1);

alert("oui");
choix1=[];
}
else {
	console.log(choix1);
	choix1=[];
	alert("no");
	console.log("choix2: " +choix2);

	for (var i = 0; i < choix2.length; i++) {
		// obj.firstChild.style.opacity="0";
		console.log(document.getElementById(choix2[i]));

	document.getElementById(choix2[i]).firstChild.style.opacity="0";
}
}
		compare = 0;
	}

	console.log(choix1);


};


// function



// script

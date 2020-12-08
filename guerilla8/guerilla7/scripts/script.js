$(document).ready(function() {

	//AFFICHAGE MENU
	$('#toggle').click(function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});

	// COULEURS ALÉATOIRES
	let rouge = 55+Math.floor(Math.random()*200);
	let vert = 55+Math.floor(Math.random()*200);
	let bleu = 55+Math.floor(Math.random()*200);
	$("#container_droite").css("background-color", "rgb("+rouge+","+vert+","+bleu+")");
	$(".overlay ul li a").css("color", "rgb("+rouge+","+vert+","+bleu+")");

	// CORPS ALÉATOIRE
	let corps = 18+Math.random()*100;
	$("#texte_droite").css("font-size", corps+"px");

	// TYPO VARIABLE ALÉATOIRE
	let opsz = 9+Math.floor(Math.random()*135); //entre 9 et 144
	let wght = 100+Math.floor(Math.random()*800); //entre 100 et 900
	let SOFT = Math.floor(Math.random()*100); //entre 0 et 100
	let WONK = Math.floor(Math.random()); //entre 0 et 1
	$("#texte_droite").css("font-variation-settings", "'SOFT' "+SOFT+", 'WONK' "+WONK+", 'opsz' "+opsz+", 'wght' "+wght);
	// $("#texte_droite").css("font-variation-settings", "'wght' "+wght);

// SOFT,WONK,opsz,wgh

//   font-variation-settings: "SOFT" var(--SOFT),"WONK" var(--WONK);

	// var colors = ['#a5ec74', '#cb4c55', '#92e0ca', '#e48ba1', '#9f6be7', '#e37ee8', '#feda00', '#4aabe0', '#f08bb3', '#01ff01'];
	// $('#container_droite', ).each(function() {
	// 	var new_color = colors[Math.floor(Math.random() * colors.length)];
	// 	$(this).css('background-color', new_color);
	// 	$('.overlay ul li a', ).each(function() {
	// 		$(this).css('color', new_color);
	// 	});
	// });




	// GÉNÉRER SCREENSHOT
	function makeScreenshot() {
		html2canvas(document.getElementById("container_droite"), { scale: 2 }).then(canvas => {
			canvas.id = "canvasID";
			var main = document.getElementById("container_droite");
			while (main.firstChild) { main.removeChild(main.firstChild); }
			main.appendChild(canvas);
		});
	}
	document.getElementById("a-make").addEventListener('click', function() {
		document.getElementById("a-make").style.display = "none";
		makeScreenshot();
		document.getElementById("a-download").style.display = "inline";
	}, false);

	document.getElementById("a-download").addEventListener('click', function() {
		this.href = document.getElementById("canvasID").toDataURL();
		this.download = "canvas-image.png";
	}, false);



	// AJOUTER MOT À DROITE AU CLICK
	$("span").click(function() {
		let mot = $(this).text();
		$("#texte_droite > ul").append("<li>" + mot + "</li>");
	});

	$("#texte_droite > ul").sortable();

	// $("span").draggable();

	// $("#container_droite").droppable({
	//      drop: function(event, ui) {
	//      	let mot = ui.draggable.html();
	//      	$("#texte_droite").append("<span>"+mot+"</span>");
	//      	ui.draggable.remove();
	//      	// console.log(objet);
	//      	// alert("droppablpé");
	//        // $(this)
	//        //   .addClass( "ui-state-highlight" )
	//        //   .find( "p" )
	//        //     .html( "Dropped!" );
	//      }
	//    });
});
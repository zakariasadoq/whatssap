$(document).ready(function() {
	// Llamada final
	var llamadafinal = true; // En false para desactivarlo
	var count = 0;
	// Tiempo respuesta
	var tmres = 2500;
	//var tmres = 0;
	$('#enviar').bind('click', function() {
		var mensaje = $('#msjaqui').val();
		if(mensaje!=''){
			$('#chat').append('<p class="yo">'+mensaje+horaspan+'</p>');
			$('#msjaqui').val('');
			setTimeout(function(){
				$('.nombre h1').removeClass('mt10');
				$('.nombre h2').html('typing...');
				$('#chat p.yo span.hora').addClass('visto');
			},1500);
			setTimeout(function() {
				$('.nombre h2').html('online');
				$('#chat p.yo span.hora').addClass('vistoc');
				respuesta(count);
			}, tmres);
		}
	});
	$('#msjaqui').keyup(function(event) {
		if (event.keyCode == 13) {
			$('#enviar').click();
		}
	});
	// Avatar
	var avtimgs = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
	var avtimg = avtimgs[Math.floor(Math.random()*avtimgs.length)];
	// Nombre
	var nomswsp = ['Ally Gardner','Siiu  Teleen','Rebbeca Hix','Jolie Pande','Hallie Spar'];
	var nomwsp = nomswsp[Math.floor(Math.random()*nomswsp.length)];
	// Primer mensaje
	var msjs1 = [
		'¡Oye! ¿Quieres mi video caliente? <img class="emj" src="img/emoji/beso.png"/>',
		'¡Bebé! ¿Quieres ver mi video caliente? <img class="emj" src="img/emoji/besos.png"/>',
		'¡¡¡Oye!!! ¿Quieres verme desnudo? <img class="emj" src="img/emoji/diablo.png"/>'
	];
	var msj1 = msjs1[Math.floor(Math.random()*msjs1.length)];
	// Segundo mensaje
	var msjs2 = [
		'¡Lo siento! ¡Me voy! Dame tu teléfono <img class="emj" src="img/emoji/triste.png"/>',
		'¡Debo ir! Lo siento <img class="emj" src="img/emoji/angel.png"/>',
		'Tengo que dormir <img class="emj" src="img/emoji/vuelta.png"/>'
	];
	var msj2 = msjs2[Math.floor(Math.random()*msjs2.length)];
	// Tercer mensaje
	var msjs3 = [
		'¡Véalo antes de que me vaya! <img class="emj" src="img/emoji/fantasma.png" style="margin-left:0"/> <img class="emj" src="img/emoji/fantasma.png"/>',
		'Míralo ahora, me voy !!! <img class="emj" src="img/emoji/plis.png" style="margin-left:0"/><img class="emj" src="img/emoji/plis.png" style="margin-left:0"/><img class="emj" src="img/emoji/plis.png"/>',
		'¿¿Lo has visto?? <img class="emj" src="img/emoji/rush.png"/>'
	];
	var msj3 = msjs3[Math.floor(Math.random()*msjs3.length)];
	// Mensaje final
	var msjsf = [
		'¡Chau! <img class="emj" src="img/emoji/beso.png"/>',
		'<img class="emj emjf" src="img/emoji/beso.png"/><img class="emj emjf" src="img/emoji/beso.png"/>',
		'Hey nena, tengo que irme <img class="emj" src="img/emoji/enamo.png"/>',
	];
	var msjf = msjsf[Math.floor(Math.random()*msjsf.length)];
	var mensajes = [
		'<a href="https://58r77.bemobtrk.com/click" class="video"><span class="duracion">2:56</span></a>',
		msj2
	];
	var final = false;
	function respuesta(mensaje) {
		// Mensaje pegado
		if (count == 0) {
			setTimeout(function() {
				$('#chat').append('<p class="ella">'+msj3+horaspan+'</p>');
			}, tmres);
		}
		count = count + 1;
		// Mensaje final
		if(!final){
			if (count > mensajes.length) {
				//count = 0;
				setTimeout(function() {
					$('#chat').append('<p class="final">'+msjf+horaspan+'</p>');
					$('.nombre h1').addClass('mt10');
					$('.nombre h2').html('');
				}, tmres);
				if(llamadafinal){setTimeout(function() {$('.llamada').addClass('llama');}, 10000);}
				final = true;
			} else {
				$('#chat').append('<p class="ella">'+mensajes[mensaje]+horaspan+'</p>');
			}
		}
	}
	// Hora
	var dt = new Date();
	var min = dt.getMinutes();
	if(min<10){min='0'+min;}else{min=min+'';}
	var hora = dt.getHours()+':'+min;
	var horaspan = '<span class="hora">'+hora+'</span>';
	$('.nombre h1,.wsptit h2').html(nomwsp);
	$('#avatarimg').attr('title',nomwsp);
	$('#avatarimg').attr('src','img/avatar/'+avtimg);
	$('.llamada').css('background-image','url(img/avatar/'+avtimg+')');
	$('#chat p').html(msj1+horaspan);
});

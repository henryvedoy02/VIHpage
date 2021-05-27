function verificarrespuestas2(){

		var total=17;
		var puntos=0;
		var porcentaje=0;
		var myForm=document.forms["vihvf"];
		var respuestas=["b","a","b","a","a","b","b","b","a","a","b","b","a","b","b","b","b"];
		
		for(var i=1;i<=total;i++){
			if(myForm["p"+i].value === null||myForm["p"+i].value === ""){
				alert("Por favor responde la pregunta "+i);
				return false;
			}
			else{
				if(myForm["p"+i].value === respuestas[i-1]){
					puntos++;
					
				}
			}
		}
		porcentaje=(puntos*100)/17
		var resultado=document.getElementById("resultado");
		resultado.innerHTML='<h3>Obtuviste <span> '+ puntos +'</span> de <span>' + total +' puntos</span></h3>';
		alert("el porcentaje de respuestas obtenidas es de: %"+porcentaje);
		return false;
	}

	
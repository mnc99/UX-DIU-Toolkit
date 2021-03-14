/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Juan",
				Photo: "man.png",
				Quote: "El esfuerzo siempre tiene su recompensa",
				Age: 62,
				Occupation: "Agricultor",
				Family: "Viudo, 2 hijos",
				Location: "Cáceres (Guadalupe)",
				Character: "Le gusta disfrutar del tiempo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Visitar más a sus hijos y sus familias, prejubilarse", "Aprender a pintar"],
				Frustrations: ["Nunca ha entendido las nuevas tecnologías", "Le gustaría visitar más a menudo a sus hijos"],
				Bio: "Es de Guadalupe en Cáceres, no terminó los estudios y se dedicó a la agricultura como su padre. Conoció a su difunta esposa en un baile de las fiestas de su pueblo, se casaron 2 años después y ambos trabajaron juntos en el campo. Tuvieron dos hijos. Su mujer falleció de cáncer cuando él tenía 60 años.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "LLeva mucho tiempo sin visitar a sus hijos que viven en Granada y ha decidido darles una sopresa haciéndoles una visita y así aprovechar para hacer turismo por Granada",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Carmen Rodríguez",
				Photo: "woman.png",
				Quote: "Carpe Diem",
				Age: 25,
				Occupation: "Enfermera",
				Family: "Novio desde hace 2 años",
				Location: "Fuengirola, Málaga",
				Character: "Alegre, atrevida and trabajadora.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Tener un trabajo fijo", "Formar una familia", "Aprender inglés.", "Viajar a China."],
				Frustrations: ["No haber alcanzado la nota para estudiar medicina", "No tener dinero suficiente para comprar su propio piso.", "Pasa poco tiempo con sus padres, que viven en otra ciudad."],
				Bio: "Nació en Fuengirola, Málaga. Desde los 12 años ya sabía que quería estudiar medicina aunque sus padres querían que fuese abogada para trabajar en el bufete de su padre. Como en Málaga no hay facultad de enfermería vino a Granada a estudiar. Conoció a su novio en la carrera y cuando terminó volvió a vivir a Málaga donde trabaja de enfermera a tiempo parcial.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "Le han dado unos días libres en el trabajo y quiere visitar de nuevo Granada y dar un paseo turístico junto con sus viejas amigas de la facultad." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
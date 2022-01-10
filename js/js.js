function start() { // Inicio da fun��o start()

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");


    let velocidade = 5;
    let posicaoY = parseInt(Math.random() * 334);
    //Principais variáveis do jogo
    var jogo = {};
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }

    jogo.pressionou = [];


    //Verifica se o usuário pressionou alguma tecla

    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });


    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });


    //Game Loop

    jogo.timer = setInterval(loop, 30);

    function loop() {

        movefundo();
        movejogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();

    }
    //fim da função



    //Função que movimenta o fundo do jogo

    function movefundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 4);

    } // fim da função movefundo()



    //Funçao que movimenta jogador
     
    function movejogador() {
	
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);
                        
            if (topo<=0) {
                    
                $("#jogador").css("top",topo+10);
            }
        }
        
        if (jogo.pressionou[TECLA.S]) {
            
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);	
                        
            if (topo>=434) {	
                $("#jogador").css("top",topo-10);
                    
            }
        }
        
        if (jogo.pressionou[TECLA.D]) {
            
            //Chama o Disparo	
        }
    
        } // fim do moverjogador()

}



function moveinimigo1() {
    posicaoY=0;
    posicaoX = 350;
	posicaoX = parseInt($("#inimigo1").css("left"));
	$("#inimigo1").css("left",posicaoX-5);
	$("#inimigo1").css("top",posicaoY);
		
		if (posicaoX<=0) {
		posicaoY = parseInt(Math.random() * 334);
		$("#inimigo1").css("left",694);
		$("#inimigo1").css("top",posicaoY);
			
		}
} //Fim da fun��o moveinimigo1()



function moveinimigo2() {
    posicaoX = parseInt($("#inimigo2").css("left"));
$("#inimigo2").css("left",posicaoX-3);
            
    if (posicaoX<=0) {
        
    $("#inimigo2").css("left",775);
                
    }
} // Fim da fun��o moveinimigo2()



function moveamigo() {
	
	posicaoX = parseInt($("#amigo").css("left"));
	$("#amigo").css("left",posicaoX+1);
				
		if (posicaoX>906) {
			
		$("#amigo").css("left",0);
					
		}

} // fim da fun��o moveamigo()





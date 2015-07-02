//
//            Pacman         
//   UC: PWBD                
//   Docente: Jorge Machado  
//   Discente: João Pereira  
//   a16921   -   2014/2015  
//


var estado = 0;
var creditos = 0;
var distancia = 12;
var X_origem = -19;
var Y_origem = 45;
var comidaX_origem = -13;
var comidaY_origem = 3;
var velocidade = 50;
var pontuacao = 0;
var maxpontuacao = 0;
var jog_activo = 0;
var flag_vida = 0;
var fase_ponto_pw = 3;
var fase_inicializa = 5;
var ie = (navigator.appName.indexOf("Microsoft") != -1) ? 1 : 0;
var som_inicio = new Audio('sons/inicio.wav');
var som_come = new Audio('sons/come.wav');
var som_morre = new Audio('sons/morre.wav');
var som_come_monstro = new Audio('sons/come_monstro.wav');
var som_vitoria = new Audio('sons/vitoria.wav');
var som_power = new Audio('sons/power.wav');
var som_credito = new Audio('sons/insert_coin.wav');


mapa_pac = new Array();
// 0 - proibido
// 1 - permitido
mapa_pac[0] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_pac[1] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_pac[2] =  "0000001111111111111111111111100000111111111111111111111110000000";
mapa_pac[3] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[4] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[5] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[6] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[7] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[8] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[9] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[10] = "0000001111111111111111111111111111111111111111111111111110000000";
mapa_pac[11] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_pac[12] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_pac[13] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_pac[14] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_pac[15] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_pac[16] = "0000001111111111100000111111100000111111100000111111111110000000";
mapa_pac[17] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_pac[18] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_pac[19] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_pac[20] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_pac[21] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_pac[22] = "0000000000000000100000111111111111111111100000100000000000000000";
mapa_pac[23] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[24] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[25] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[26] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[27] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[28] = "1111111111111111111111100000000000000000111111111111111111111111";
mapa_pac[29] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[30] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[31] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[32] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[33] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[34] = "0000000000000000100000111111111111111111100000100000000000000000";
mapa_pac[35] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[36] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[37] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[38] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[39] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_pac[40] = "0000001111111111111111111111100000111111111111111111111110000000";
mapa_pac[41] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[42] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[43] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[44] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[45] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_pac[46] = "0000001111100000111111111111111111111111111111100000111110000000";
mapa_pac[47] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_pac[48] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_pac[49] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_pac[50] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_pac[51] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_pac[52] = "0000001111111111100000111111100000111111100000111111111110000000";
mapa_pac[53] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_pac[54] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_pac[55] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_pac[56] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_pac[57] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_pac[58] = "0000001111111111111111111111111111111111111111111111111110000000";
mapa_pac[59] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_pac[60] = "0000000000000000000000000000000000000000000000000000000000000000";


mapa_comida = new Array();
// 0 - sem comida
// 1 - com comida
// 2 - comida poder
mapa_comida[0] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[1] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[2] =  "0000001010101010101010101010100000101010101010101010101010000000";
mapa_comida[3] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[4] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_comida[5] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[6] =  "0000002000000000100000000000100000100000000000100000000020000000";
mapa_comida[7] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[8] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_comida[9] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[10] = "0000001010101010101010101010101010101010101010101010101010000000";
mapa_comida[11] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[12] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_comida[13] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[14] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_comida[15] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[16] = "0000001010101010100000101010100000101010100000101010101010000000";
mapa_comida[17] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[18] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[19] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[20] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[21] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[22] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[23] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[24] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[25] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[26] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[27] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[28] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[29] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[30] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[31] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[32] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[33] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[34] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[35] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[36] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[37] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[38] = "0000000000000000100000000000000000000000000000100000000000000000";
mapa_comida[39] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[40] = "0000001010101010101010101010100000101010101010101010101010000000";
mapa_comida[41] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[42] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_comida[43] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[44] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_comida[45] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[46] = "0000002010100000101010101010100000101010101010100000101020000000";
mapa_comida[47] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[48] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_comida[49] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[50] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_comida[51] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[52] = "0000001010101010100000101010100000101010100000101010101010000000";
mapa_comida[53] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[54] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_comida[55] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[56] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_comida[57] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[58] = "0000001010101010101010101010101010101010101010101010101010000000";
mapa_comida[59] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_comida[60] = "0000000000000000000000000000000000000000000000000000000000000000";



mapa_monstro = new Array();
// 0 - proibido
// 1 - continua
// 2 - canto forcado
// 3 - canto decisao
// 4 - canto forcado saida do buraco
mapa_monstro[0] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_monstro[1] =  "0000000000000000000000000000000000000000000000000000000000000000";
mapa_monstro[2] =  "0000003111111111211111111111300000311111111111211111111130000000";
mapa_monstro[3] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[4] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[5] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[6] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[7] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[8] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[9] =  "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[10] = "0000002111111111211111211111211111211111211111211111111120000000";
mapa_monstro[11] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_monstro[12] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_monstro[13] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_monstro[14] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_monstro[15] = "0000001000000000100000100000000000000000100000100000000010000000";
mapa_monstro[16] = "0000003111111111200000311111300000311111300000211111111130000000";
mapa_monstro[17] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_monstro[18] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_monstro[19] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_monstro[20] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_monstro[21] = "0000000000000000100000000000100000100000000000100000000000000000";
mapa_monstro[22] = "0000000000000000100000311111211211211111300000100000000000000000";
mapa_monstro[23] = "0000000000000000100000100000000600000000100000100000000000000000";
mapa_monstro[24] = "0000000000000000100000100000000600000000100000100000000000000000";
mapa_monstro[25] = "0000000000000000100000100000000600000000100000100000000000000000";
mapa_monstro[26] = "0000000000000000100000100000000600000000100000100000000000000000";
mapa_monstro[27] = "0000000000000000100000100007000600070000100000100000000000000000";
mapa_monstro[28] = "1111111111111110211111200005555644440000211111201111111111111111";
mapa_monstro[29] = "0000000000000000100000100006000000060000100000100000000000000000";
mapa_monstro[30] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[31] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[32] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[33] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[34] = "0000000000000000100000211111111111111111200000100000000000000000";
mapa_monstro[35] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[36] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[37] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[38] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[39] = "0000000000000000100000100000000000000000100000100000000000000000";
mapa_monstro[40] = "0000003111111111211111211111300000311111211111211111111130000000";
mapa_monstro[41] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[42] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[43] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[44] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[45] = "0000001000000000100000000000100000100000000000100000000010000000";
mapa_monstro[46] = "0000003111300000211111211111211111211111211111200000311130000000";
mapa_monstro[47] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_monstro[48] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_monstro[49] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_monstro[50] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_monstro[51] = "0000000000100000100000100000000000000000100000100000100000000000";
mapa_monstro[52] = "0000003111211111300000311111300000311111300000311111211130000000";
mapa_monstro[53] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_monstro[54] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_monstro[55] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_monstro[56] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_monstro[57] = "0000001000000000000000000000100000100000000000000000000010000000";
mapa_monstro[58] = "0000003111111111111111111111211111211111111111111111111130000000";
mapa_monstro[59] = "0000000000000000000000000000000000000000000000000000000000000000";
mapa_monstro[60] = "0000000000000000000000000000000000000000000000000000000000000000";



mapa_olhos = new Array();
// 0 - esquerda
// 1 - direita
// 2 - cima
// 3 - baixo
mapa_olhos[0] =  "----------------------------------------------------------------";
mapa_olhos[1] =  "----------------------------------------------------------------";
mapa_olhos[2] =  "------31111111113000000011113-----11111111111131111111113-------";
mapa_olhos[3] =  "------3---------3-----------3-----2-----------3---------3-------";
mapa_olhos[4] =  "------3---------3-----------3-----2-----------3---------3-------";
mapa_olhos[5] =  "------3---------3-----------3-----2-----------3---------3-------";
mapa_olhos[6] =  "------3---------3-----------3-----2-----------3---------3-------";
mapa_olhos[7] =  "------3---------3-----------3-----3-----------3---------3-------";
mapa_olhos[8] =  "------3---------3-----------3-----3-----------3---------3-------";
mapa_olhos[9] =  "------3---------3-----------3-----3-----------3---------3-------";
mapa_olhos[10] = "------311111111131111111111111111111111130000000000000003-------";
mapa_olhos[11] = "------3---------3-----3-----------------3-----3---------3-------";
mapa_olhos[12] = "------3---------3-----3-----------------3-----3---------3-------";
mapa_olhos[13] = "------3---------3-----3-----------------3-----3---------3-------";
mapa_olhos[14] = "------3---------3-----3-----------------3-----3---------3-------";
mapa_olhos[15] = "------3---------3-----3-----------------3-----3---------3-------";
mapa_olhos[16] = "------11111111113-----1111113-----3000000-----30000000000-------";
mapa_olhos[17] = "----------------3-----------3-----3-----------3-----------------";
mapa_olhos[18] = "----------------3-----------3-----3-----------3-----------------";
mapa_olhos[19] = "----------------3-----------3-----3-----------3-----------------";
mapa_olhos[20] = "----------------3-----------3-----3-----------3-----------------";
mapa_olhos[21] = "----------------3-----------3-----3-----------3-----------------";
mapa_olhos[22] = "----------------3-----1111111113000000000-----3-----------------";
mapa_olhos[23] = "----------------3-----2--------3--------2-----3-----------------";
mapa_olhos[24] = "----------------3-----2--------3--------2-----3-----------------";
mapa_olhos[25] = "----------------3-----2--------3--------2-----3-----------------";
mapa_olhos[26] = "----------------3-----2--------3--------2-----3-----------------";
mapa_olhos[27] = "----------------3-----2--------3--------2-----3-----------------";
mapa_olhos[28] = "11111111111111111111112----700051116----200000000000000000000000";
mapa_olhos[29] = "----------------1-----3-----------------2-----2-----------------";
mapa_olhos[30] = "----------------1-----3-----------------2-----2-----------------";
mapa_olhos[31] = "----------------1-----3-----------------2-----2-----------------";
mapa_olhos[32] = "----------------1-----3-----------------2-----2-----------------";
mapa_olhos[33] = "----------------1-----3-----------------2-----2-----------------";
mapa_olhos[34] = "----------------3-----1111111111111111112-----2-----------------";
mapa_olhos[35] = "----------------3-----2-----------------2-----3-----------------";
mapa_olhos[36] = "----------------3-----2-----------------2-----3-----------------";
mapa_olhos[37] = "----------------3-----2-----------------2-----3-----------------";
mapa_olhos[38] = "----------------3-----2-----------------2-----3-----------------";
mapa_olhos[39] = "----------------3-----2-----------------2-----3-----------------";
mapa_olhos[40] = "------11111111111111112000000-----11111120000000000000000-------";
mapa_olhos[41] = "------2---------2-----------2-----2-----------2---------2-------";
mapa_olhos[42] = "------2---------2-----------2-----2-----------2---------2-------";
mapa_olhos[43] = "------2---------2-----------2-----2-----------2---------2-------";
mapa_olhos[44] = "------2---------2-----------2-----2-----------2---------2-------";
mapa_olhos[45] = "------2---------2-----------2-----2-----------2---------2-------";
mapa_olhos[46] = "------21113-----2111111111112111112000001111112-----11112-------";
mapa_olhos[47] = "----------3-----2-----2-----------------2-----2-----2-----------";
mapa_olhos[48] = "----------3-----2-----2-----------------2-----2-----2-----------";
mapa_olhos[49] = "----------3-----2-----2-----------------2-----2-----2-----------";
mapa_olhos[50] = "----------3-----2-----2-----------------2-----2-----2-----------";
mapa_olhos[51] = "----------3-----2-----2-----------------2-----2-----2-----------";
mapa_olhos[52] = "------11111111112-----2000000-----1111112-----21111120000-------";
mapa_olhos[53] = "------2---------------------2-----2---------------------2-------";
mapa_olhos[54] = "------2---------------------2-----2---------------------2-------";
mapa_olhos[55] = "------2---------------------2-----2---------------------2-------";
mapa_olhos[56] = "------2---------------------2-----2---------------------2-------";
mapa_olhos[57] = "------2---------------------2-----2---------------------2-------";
mapa_olhos[58] = "------200000000000111111111120000020000000000011111111112-------";
mapa_olhos[59] = "----------------------------------------------------------------";
mapa_olhos[60] = "----------------------------------------------------------------";

function $(id)
{
    return document.getElementById(id);
}

function move_obj(obj, left, top)
{
    obj.style.left = left + 'px';
    obj.style.top = top + 'px';
}

function inicializa_texto(nome_objecto, texto_str, valor_hexa)
{
    var array_texto = texto_str.split("");
    var html = '';
    html += '<table style="height:7px;" cellspacing="0" cellpadding="0" border="0"><tr>';

    for (i = 0; i <= array_texto.length - 1; i++)
    {
        switch (array_texto[i])
        {
        case " " :
            caracter = "espaco";
            break;
        case "." :
            caracter = "ponto";
            break;
        case "'" :
            caracter = "plica";
            break;
        case "-" :
            caracter = "hiphen";
            break;
        case "/" :
            caracter = "barra";
            break;
        case "!" :
            caracter = "esclamacao";
            break;
        default :
            caracter = array_texto[i]
        }

        html += '<td style="height:14px; background-color:' + valor_hexa + '">';
        html += '<img alt="" src="imagens\/letras\/' + caracter + '.gif" width="14" height="14" \/>';
        html += '<\/td>';
    }
    html += '<\/tr><\/table>';
    $(nome_objecto).innerHTML = html;
}

// ==== estado 0: ecra inicial ========
function ecra_inicial()
{

    estado = 0;

    // OPENING creditos ANIMATION
    move_obj($('mapa_jogo_img'),-1000,0);
    move_obj($('mapa_jogo_flash'),-1000,0);
    move_obj($('comida_img'),-1000,0);
    move_obj($('comida_pw_img'),-1000,0);
    move_obj($("jog_1"),40,-1);
    move_obj($("pontuacao_jog1"),9,22);
    move_obj($("jog_2"),610,0);
    move_obj($("pontuacao_jog2"),580,22);
    move_obj($("maxpontuacao"),300,-1);
    move_obj($("pontuacao_maxim"),290,22);

    limpa_pontuacaos();

    move_obj($('ecra_inicial_obj'),0,50);

    setTimeout("move_obj($('ecra_inicial_obj_0'),265,150);",      0);
    setTimeout("move_obj($('ecra_inicial_obj_1'),260,185);",      500);
    setTimeout("move_obj($('ecra_inicial_obj_2'),293,190);",      1000);
    setTimeout("move_obj($('ecra_inicial_obj_3'),433,190);",      1500);

    setTimeout("move_obj($('ecra_inicial_obj_4'),260,215);",      2000);
    setTimeout("move_obj($('ecra_inicial_obj_5'),293,220);",      2500);
    setTimeout("move_obj($('ecra_inicial_obj_6'),433,220);",      3000);

    setTimeout("move_obj($('ecra_inicial_obj_7'),260,245);",      3500);
    setTimeout("move_obj($('ecra_inicial_obj_8'),293,250);",      4000);
    setTimeout("move_obj($('ecra_inicial_obj_9'),433,250);",      4500);

    setTimeout("move_obj($('ecra_inicial_obj_10'),260,275);",      5000);
    setTimeout("move_obj($('ecra_inicial_obj_11'),293,280);",      5500);
    setTimeout("move_obj($('ecra_inicial_obj_12'),433,280);",      6000);
}


// ==== estado 1: inicializa mapa ========
function inicializa_mapa()
{

    estado = 1;

    // START PROMPT ANIMATION
    move_obj($('mapa_jogo_img'),-1000,0);
    move_obj($('mapa_jogo_flash'),-1000,0);
    move_obj($('comida_img'),-1000,0);
    limpa_pontuacaos();
    move_obj($('comida_pw_img'),-1000,0);
    for(var i=0; i<=12; i++)
        move_obj($('ecra_inicial_obj_'+i),-1000,0);
    move_obj($('ecra_inicial_obj'),-1000,0);
    move_obj($('inicializa_mapa_obj'),0,0);

    if (creditos > 1)
    {
        move_obj($('inicializa_mapa_obj_1'),-1000,0);
        move_obj($('inicializa_mapa_obj_2'),224,335);
    }
    else
    {
        move_obj($('inicializa_mapa_obj_1'),264,335);
    }
}


// ==== estado 2: inicializa objectos do jogo (jogadores, comida, etc ========
function objectos_jogo()
{

    estado = 2;
    objectos_jogadores();
    objectos_comida();
    jog_activo = 0;

    // animaçao inicial do tabuleiro de jogo
    move_obj($('mapa_jogo_img'),23,48);
    move_obj($('jogador_1'),290,320);
    move_obj($('preparado'),320,450);
    move_obj($('comida_img'),0,50);
    move_obj($('comida_pw_img'),1,49);


    setTimeout("move_obj($('jogador_1'),-1000,0); move_obj($('jogador_2'),-1000,0); nascer(); ", 2143);
}


// ==== estado 3: Nascimento do PacMan ========
function nascer()
{

    estado = 3;
    flag_vida = 1;
    vidas_jogador[jog_activo]--;
	som_inicio.play();
    if(jog_activo == 0)
        move_obj($('jogador_1'),290,320);
    else
        move_obj($('jogador_2'),290,320);

    // coloca objectos iniciais
    inicializa_objectos();
    objectos_comida();
    for(i = 0; i < 5; i++)
    {
        chama_objecto(i);
    }

    move_obj($('preparado'),320,450);
    setTimeout("move_obj($('jogador_1'),-1000,0); move_obj($('jogador_2'),-1000,0); move_obj($('preparado'),-1000,0); actividade(); ", 2143);
}


// ==== estado 4: Fase activa_pacman ========
function actividade()
{

    estado = 4;

    // animacao pacman e monstros

    if (flag_vida != 0)
    {
        for(i = 0; i < 5; i++)
        {
            descarta_objecto(i);
        }
        move_pacman();
        move_monstros();
        for(i = 0; i < 5; i++)
        {
            chama_objecto(i);
        }
        animacao_pisca();
        accao();

        condicao_vit_derr = setTimeout("actividade(); ", velocidade);
    }
    else
    {
        if (jogador_total_comida[jog_activo] > 0)
        {
            clearTimeout(condicao_vit_derr);
            setTimeout("morre(); ", 500);
        }
        else
        {
            vidas_jogador[jog_activo]++;
            clearTimeout(condicao_vit_derr);
            setTimeout("vitoria(); ", 500);
        }
    }
}


// ==== estado 5: Morre Pacman ========
function morre()
{

    estado = 5;

    $('jog_1').style.visibility = "visible";
    $('jog_2').style.visibility = "visible";

    for (i = 0; i < 5; i++)
    {
        descarta_objecto(i);
    }
	som_morre.play();
    move_obj($('morre0'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);
    setTimeout("move_obj($('morre0'),-1000,0); move_obj($('morre1'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137);
    setTimeout("move_obj($('morre1'),-1000,0); move_obj($('morre2'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*2);
    setTimeout("move_obj($('morre2'),-1000,0); move_obj($('morre3'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*3);
    setTimeout("move_obj($('morre3'),-1000,0); move_obj($('morre4'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*4);
    setTimeout("move_obj($('morre4'),-1000,0); move_obj($('morre5'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*5);
    setTimeout("move_obj($('morre5'),-1000,0); move_obj($('morre6'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*6);
    setTimeout("move_obj($('morre6'),-1000,0); move_obj($('morre7'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*7);
    setTimeout("move_obj($('morre7'),-1000,0); move_obj($('morre8'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*8);
    setTimeout("move_obj($('morre8'),-1000,0); move_obj($('morre9'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*9);
    setTimeout("move_obj($('morre9'),-1000,0); move_obj($('morre10'),objectos_X[0] * distancia + X_origem,objectos_Y[0] * distancia + Y_origem);", 137*10);
    setTimeout("move_obj($('morre10'),-1000,0);", 137*11);

    jog_activo++;
    if (jog_activo > jogadores - 1)
    {
        jog_activo = 0;
    }

    if (vidas_jogador[jog_activo] > 0)
    {
        setTimeout("nascer();", 2150);
    }
    else
    {
        setTimeout("gameOver();", 2150);
    }
}


// ==== estado 6: Vitoria ========
function vitoria()
{

    estado = 6;
    som_vitoria.play();
    for (i = 0; i < 5; i++)
    {
        descarta_objecto(i);
    }

    move_obj($('comida_img'),-1000,0);
    move_obj($('comida_pw_img'),-1000,0);
    setTimeout("move_obj($('mapa_jogo_img'),-1000,0); move_obj($('mapa_jogo_flash'),23,48); ",   1000);
    setTimeout("move_obj($('mapa_jogo_flash'),-1000,0); move_obj($('mapa_jogo_img'),23,48); ",   1500);
    setTimeout("move_obj($('mapa_jogo_img'),-1000,0); move_obj($('mapa_jogo_flash'),23,48); ",   2000);
    setTimeout("move_obj($('mapa_jogo_flash'),-1000,0); move_obj($('mapa_jogo_img'),23,48); ",   2500);
    setTimeout("move_obj($('mapa_jogo_img'),-1000,0); move_obj($('mapa_jogo_flash'),23,48); ",   3000);
    setTimeout("move_obj($('mapa_jogo_flash'),-1000,0); move_obj($('mapa_jogo_img'),23,48); ",   3500);
    setTimeout("move_obj($('mapa_jogo_img'),-1000,0); move_obj($('mapa_jogo_flash'),23,48); ",   4000);
    setTimeout("move_obj($('mapa_jogo_flash'),-1000,0); move_obj($('mapa_jogo_img'),23,48); ",   4500);

    Nivel_jogador[jog_activo]++;
    for (j = 0; j < mapa_comida.length; j++)
    {
        jogador_mapa_comida[jog_activo][j] = mapa_comida[j].split("");
    }
    jogador_total_comida[jog_activo] = 244;
    objectos_comida();

    setTimeout("move_obj($('comida_img'),0,50); move_obj($('comida_pw_img'),0,50); nascer(); ", 5000);
}


// ==== estado 7: GAME OVER ========
function gameOver()
{

    estado = 7;
    move_obj($('game_over'),290,320);

    if (creditos > 0)
    {
        setTimeout("move_obj($('game_over'),-1000,0); inicializa_mapa(); ", 2000);
    }
    else
    {
        setTimeout("move_obj($('game_over'),-1000,0); ecra_inicial(); ", 2000);
    }
}

// ==== funcoes extra ====


if(!ie) // o Internet explorer tem a mania que e esperto e precisa de um interpretador so para ele
{
    document.addEventListener("keydown", tecla_press, true);
}
else
{
    document.attachEvent("onkeydown", tecla_press);
}


function tecla_press(evnt)
{

    var k = (!ie) ? evnt.which : window.event.keyCode;
    if (estado == 0)
    {
        if (k == 113 || k == 81)
        {
            adiciona_credito();
            inicializa_mapa();
        }
    }
    else
    {
        if (estado == 1)
        {
            if (k == 113 || k == 81)
            {
                adiciona_credito();
                inicializa_mapa();
            }
            else
            {
                if (k == 49)
                {
                    creditos--;
                    jogadores = 1;
                    move_obj($('inicializa_mapa_obj'),-1000,0);
                    objectos_jogo();
                }
                else
                {
                    if (k == 50 && creditos >= 2)
                    {
                        creditos-=2;
                        jogadores = 2;
                        move_obj($('inicializa_mapa_obj'),-1000,0);
                        objectos_jogo();
                    }
                }
            }
        }
        else
        {
            if (estado == 2 || estado == 5 || estado == 6 || estado == 7)
            {
                if (k == 113 || k == 81)
                {
                    adiciona_credito();
                }
            }
            else
            {
                if (estado == 3 || estado == 4)
                {
                    if (k == 113 || k == 81)
                    {
                        adiciona_credito();
                    }
                    else if (k == 28 || k == 74 || k == 106 || k == 65 || k == 97 || k == 37)
                    {
                        nova_direccao[0] = 0;
                    }
                    else if (k == 29 || k == 76 || k == 108 || k == 68 || k == 100 || k == 39)
                    {
                        nova_direccao[0] = 1;
                    }
                    else if (k == 30 || k == 73 || k == 105 || k == 87 || k == 119 || k == 38)
                    {
                        nova_direccao[0] = 2;
                    }
                    else if (k == 31 || k == 75 || k == 107 || k == 83 || k == 115 || k == 40)
                    {
                        nova_direccao[0] = 3;
                    }
                    else if (k == 27)
                    {
                        flag_vida = 0;
                        for (i = 0; i < jogadores; i++)
                        {
                            vidas_jogador[i] = 0;
                        }
                    }
                }
            }
        }
    }
}

function limpa_pontuacaos()
{
    for (colunas = 0; colunas < 6; colunas++)
    {
        for (digitos = 0; digitos < 10; digitos++)
        {
            $("pontuacao_jog1_"+colunas+"_"+digitos).style.visibility = "hidden";
            $("pontuacao_jog2_"+colunas+"_"+digitos).style.visibility = "hidden";
            $("pontuacao_maxim_"+colunas+"_"+digitos).style.visibility = "hidden";
        }
    }
    $("pontuacao_jog1_"+0+"_"+0).style.visibility = "visible";
    $("pontuacao_jog1_"+1+"_"+0).style.visibility = "visible";
    $("pontuacao_jog2_"+0+"_"+0).style.visibility = "visible";
    $("pontuacao_jog2_"+1+"_"+0).style.visibility = "visible";
    $("pontuacao_maxim_"+0+"_"+0).style.visibility = "visible";
    $("pontuacao_maxim_"+1+"_"+0).style.visibility = "visible";
}

function adiciona_credito()
{

    creditos++;
	som_credito.play();
}

function chama_objecto(i)
{

    var desenha_X = objectos_X[i] * distancia + X_origem;
    var desenha_Y = objectos_Y[i] * distancia + Y_origem;
    var desenha_Z = 0;
    if (i == 0)
    {
        desenha_Z = direccao_actual[i] * 4 + objectoZ[i];
    }
    else
    {
        desenha_Z = direccao_actual[i] * 8 + estado_monstro[i] * 2 + objectoZ[i];
    }
    move_obj($(objecto_img[i][desenha_Z]),desenha_X,desenha_Y);
    Z_anterior[i] = desenha_Z;
}

function descarta_objecto(i)
{

    move_obj($(objecto_img[i][Z_anterior[i]]),-1000,0);
}

function animacao_pisca()
{

    fase_ponto_pw++;
    if (fase_ponto_pw == 4)
    {
        fase_ponto_pw = 0;
    }

    if(fase_ponto_pw == 0 || fase_ponto_pw == 2)
    {
        var comida_pw = $('comida_pw_img').getElementsByTagName('div');
        if (fase_ponto_pw == 0)
        {
            for (i = 0; i < comida_pw.length; i++)
            {
                comida_pw[i].style.visibility = "visible";
            }
        }
        else
        {
            if (fase_ponto_pw == 2)
            {
                for (i = 0; i < comida_pw.length; i++)
                {
                    comida_pw[i].style.visibility = "hidden";
                }
            }
        }
    }
    fase_inicializa++;
    if (fase_inicializa == 6)
    {
        fase_inicializa = 0;
    }

    if(fase_inicializa == 0 || fase_ponto_pw == 3)
    {
        var bP = jog_activo == 0 ? 'jog_1' : 'jog_2';

        if (fase_inicializa == 0)
        {
            $(bP).style.visibility = "visible";
        }
        else
        {
            if (fase_ponto_pw == 3)
            {
                $(bP).style.visibility = "hidden";
            }
        }
    }
}

function accao()
{

    if (jogador_mapa_comida[jog_activo][objectos_Y[0]][objectos_X[0]] == 1)
    {
        jogador_mapa_comida[jog_activo][objectos_Y[0]][objectos_X[0]] = 9;
        move_obj($("comida_" + objectos_Y[0] + "_" + objectos_X[0]),-1000,0);
        jogador_total_comida[jog_activo]--;
        if (jogador_total_comida[jog_activo] == 0)
        {
            flag_vida = 0;
        }
        aumenta_pontuacao(10);
		som_come.play();
    }
    else
    {
        if (jogador_mapa_comida[jog_activo][objectos_Y[0]][objectos_X[0]] == 2)
        {
            jogador_mapa_comida[jog_activo][objectos_Y[0]][objectos_X[0]] = 8;
            move_obj($("comida_pw_" + objectos_Y[0] + "_" + objectos_X[0]),-1000,0);
            jogador_total_comida[jog_activo]--;
            if (jogador_total_comida[jog_activo] == 0)
            {
                flag_vida = 0;
            }
            aumenta_pontuacao(50);
            for (i = 1; i < 5; i++)
            {
                if (estado_monstro[i]==0)
                {
                    estado_monstro[i] = 1;
                }
            }
            // tempo de duraçao monstros comestiveis
            duracao_monstro_azul=duracao_monstro_azul_activo;
            pontuacao_come_monstro=200;
			som_power.play();
        }
    }


    for (i = 1; i < 5; i++)
    {
        if (Math.abs(objectos_X[i] - objectos_X[0]) < 2 && Math.abs(objectos_Y[i] - objectos_Y[0]) < 2)
        {
            if (estado_monstro[i] == 0)
            {
                flag_vida = 0;
            }
            else
            {
                if (estado_monstro[i] == 1 || estado_monstro[i] == 2)
                {
                    estado_monstro[i] = 3;
                    monstro_Ini[i]==0;
                    aumenta_pontuacao(pontuacao_come_monstro);
					som_come_monstro.play();
                    pontuacao_come_monstro*=2;
                }
            }
        }
    }
}

function aumenta_pontuacao(incr)
{

    pontuacao_jogador[jog_activo] += incr;
    pontuacao_jogador_Array = pontuacao_jogador[jog_activo].toString().split("").reverse();

    var pS = jog_activo == 0 ? 'pontuacao_jog1_' : 'pontuacao_jog2_';

    for (s = 0; s < pontuacao_jogador_Array.length; s++)
    {
        if (pontuacao_jogador_Array[s] != pontuacao_anterior_jogador[jog_activo][s])
        {
            $(pS+s+'_'+pontuacao_anterior_jogador[jog_activo][s]).style.visibility="hidden";
            $(pS+s+'_'+pontuacao_jogador_Array[s]).style.visibility="visible";
            pontuacao_anterior_jogador[jog_activo][s] = pontuacao_jogador_Array[s];
        }
    }

}



function objectos_jogadores()
{

    pontuacao_jogador = new Array();
    vidas_jogador = new Array();
    Nivel_jogador = new Array();
    jogador_mapa_comida = new Array();
    jogador_total_comida = new Array();
    pontuacao_anterior_jogador = new Array();

    for (i = 0; i < jogadores; i++)
    {
        pontuacao_jogador[i] = 0;
        vidas_jogador[i] = 3;
        Nivel_jogador[i] = 1;
        jogador_mapa_comida[i] = new Array();
        for (j = 0; j < mapa_comida.length; j++)
        {
            jogador_mapa_comida[i][j] = mapa_comida[j].split("");
        }
        jogador_total_comida[i] = 244;
        pontuacao_anterior_jogador[i] = new Array();
        for (j = 0; j < 6; j++)
        {
            pontuacao_anterior_jogador[i][j] = 0;
        }
    }
}



function objectos_comida()
{

    for (comY = 0; comY <= jogador_mapa_comida[jog_activo].length - 1; comY++)
    {
        for (comX = 0; comX <= jogador_mapa_comida[jog_activo][comY].length - 1; comX++)
        {
            if (jogador_mapa_comida[jog_activo][comY][comX] == 1)
            {
                move_obj($("comida_" + comY + "_" + comX),(comX * distancia + comidaX_origem),(comY * distancia + comidaY_origem));
            }
            else if (jogador_mapa_comida[jog_activo][comY][comX] == 2)
            {
                move_obj($("comida_pw_" + comY + "_" + comX),(comX * distancia + comidaX_origem - 3),(comY * distancia + comidaY_origem - 3));
            }
            else if (jogador_mapa_comida[jog_activo][comY][comX] == 8)
            {
                move_obj($("comida_pw_" + comY + "_" + comX),-1000,0);
            }
            else if (jogador_mapa_comida[jog_activo][comY][comX] == 9)
            {
                move_obj($("comida_" + comY + "_" + comX),-1000,0);
            }
        }
    }
}



function inicializa_objectos()
{

    // inicializa array dos monstros
    nome_obj = new Array();
    objectos_X = new Array();
    objectos_Y = new Array();
    objectoZ = new Array();				    // fase da animacao
    Z_anterior = new Array();				// 0 - esquerda; 1 - direita; 2 - cima; 3 - baixo
    direccao_actual = new Array();
    nova_direccao = new Array();
    objecto_img = new Array();
    estado_monstro = new Array(); 		    // 0 - normal; 1 - azul; 2 - branco; 3 - olhos
    energia_monstro = new Array(); 		    // monstro segue em frente
    monstro_preve_linha = new Array();   	// pacman em linha recta
    monstro_preve_escolha = new Array(); 	// pacman outra direccao
    monstro_Ini = new Array;
    caminho_monstro_index = new Array;
    caminho_monstro = new Array;
    duracao_monstro_azul=0;
    duracao_monstro_azul_activo=100;
    duracao_monstro_branco_activo=44;

    // inicializa valores dos objectos
    // 0 - pacman
    nome_obj[0] = "pacman"
                  objectos_X[0] = 31;
    objectos_Y[0] = 46;
    objectoZ[0] = 0;
    Z_anterior[0] = 3;
    direccao_actual[0] = 0;
    nova_direccao[0] = 0;
    objecto_img[0] = new Array();
    for(j = 0; j < 16; j++)
    {
        objecto_img[0][j] = nome_obj[0] + j;
    }
    estado_monstro[0] = 0;
    energia_monstro[0] = 0;
    monstro_preve_linha[0] = .95;
    monstro_preve_escolha[0] = .95;

    // 1 - blinky
    nome_obj[1] = "blinky"
                  objectos_X[1] = 31;
    objectos_Y[1] = 22;
    objectoZ[1] = 0;
    Z_anterior[1] = 1;
    direccao_actual[1] = 1;
    nova_direccao[1] = 1;
    objecto_img[1] = new Array();
    for(j = 0; j < 32; j++)
    {
        objecto_img[1][j] = nome_obj[1] + j;
    }
    estado_monstro[1] = 0;
    energia_monstro[1] = 0;
    monstro_preve_linha[1] = .95;
    monstro_preve_escolha[1] = .95;
    monstro_Ini[1] = 1;
    caminho_monstro_index[1] = 0;
    caminho_monstro[1]="00000000033333300000022222222222222222211111111111111111111111111111122222222111111111133333333000004";


    // 2 - pinky
    nome_obj[2] = "pinky"
                  objectos_X[2] = 31;
    objectos_Y[2] = 28;
    objectoZ[2] = 0;
    Z_anterior[2] = 1;
    direccao_actual[2] = 2;
    nova_direccao[2] = 2;
    objecto_img[2] = new Array();
    for(j = 0; j < 32; j++)
    {
        objecto_img[2][j] = nome_obj[2] + j;
    }
    estado_monstro[2] = 0;
    energia_monstro[2] = .1;
    monstro_preve_linha[2] = .9;
    monstro_preve_escolha[2] = .9;
    monstro_Ini[2] = 1;
    caminho_monstro_index[2] = 0;
    if (Math.random>.5)
    {
        caminho_monstro[2]="233222222200000000033333300000022222222222222222222222222000000000033337";
    }
    else
    {
        caminho_monstro[2]="233223322332233223322332233223322332222222000000000333333000000222222226";
    }


    // 3 - inky
    nome_obj[3] = "inky"
    objectos_X[3] = 27;
    objectos_Y[3] = 28;
    objectoZ[3] = 0;
    Z_anterior[3] = 1;
    direccao_actual[3] = 3;
    nova_direccao[3] = 3;
    objecto_img[3] = new Array();
    for(j = 0; j < 32; j++)
    {
        objecto_img[3][j] = nome_obj[3] + j;
    }
    estado_monstro[3] = 0;
    energia_monstro[3] = .2;
    monstro_preve_linha[3] = .8;
    monstro_preve_escolha[3] = .99;
    monstro_Ini[3] = 1;
    caminho_monstro_index[3] = 0;
    caminho_monstro[3]="32233223322332233223322332233223322332233223322321111222221111111117";


    // 4 - clyde
    nome_obj[4] = "clyde"
                  objectos_X[4] = 35;
    objectos_Y[4] = 28;
    objectoZ[4] = 0;
    Z_anterior[4] = 1;
    direccao_actual[4] = 2;
    nova_direccao[4] = 2;
    objecto_img[4] = new Array();
    for(j = 0; j < 32; j++)
    {
        objecto_img[4][j] = nome_obj[4] + j;
    }
    estado_monstro[4] = 0;
    energia_monstro[4] = .05;
    monstro_preve_linha[4] = .8;
    monstro_preve_escolha[4] = .8;
    monstro_Ini[4] = 1;
    caminho_monstro_index[4] = 0;
    caminho_monstro[4]="322332233223322332233223322332233223322332233223322332233223322332233223322320000222221111111116";
}

function move_pacman()
{

    if (nova_direccao[0] == 0 && mapa_pac[objectos_Y[0]][objectos_X[0]-1] == 1)
    {
        direccao_actual[0] = nova_direccao[0];
    }
    else
    {
        if (nova_direccao[0] == 1 && mapa_pac[objectos_Y[0]][objectos_X[0]+1] == 1)
        {
            direccao_actual[0] = nova_direccao[0];
        }
        else
        {
            if (nova_direccao[0] == 2 && mapa_pac[objectos_Y[0]-1][objectos_X[0]] == 1)
            {
                direccao_actual[0] = nova_direccao[0];
            }
            else
            {
                if (nova_direccao[0] == 3 && mapa_pac[objectos_Y[0]+1][objectos_X[0]] == 1)
                {
                    direccao_actual[0] = nova_direccao[0];
                }
            }
        }
    }

    if (objectos_X[0] < 1)
    {
        objectos_X[0] = 60;
    }
    else
    {
        if (objectos_X[0] > 60)
        {
            objectos_X[0] = 1;
        }
    }

    if (direccao_actual[0] == 0 && mapa_pac[objectos_Y[0]][objectos_X[0]-1] == 1)
    {
        objectos_X[0]--;
    }
    else
    {
        if (direccao_actual[0] == 1 && mapa_pac[objectos_Y[0]][objectos_X[0]+1] == 1)
        {
            objectos_X[0]++;
        }
        else
        {
            if (direccao_actual[0] == 2 && mapa_pac[objectos_Y[0]-1][objectos_X[0]] == 1)
            {
                objectos_Y[0]--;
            }
            else
            {
                if (direccao_actual[0] == 3 && mapa_pac[objectos_Y[0]+1][objectos_X[0]] == 1)
                {
                    objectos_Y[0]++;
                }
            }
        }
    }

    objectoZ[0]++;
    if (objectoZ[0] == 4)
    {
        objectoZ[0] = 0;
    }
}


function move_monstros()
{
// estado 0 - padrao de movimento normal
// estado 1 - azul
// estado 2 - branco
// estado 3 - olhos

    // gerir estado do monstro
    if (duracao_monstro_azul>0)
    {
        if (duracao_monstro_azul==1)
        {
            for(i=1; i<5; i++)
            {
                if (estado_monstro[i]==1 || estado_monstro[i]==2)
                {
                    estado_monstro[i]=0;
                }
            }
        }
        else
        {
            if (duracao_monstro_azul < duracao_monstro_branco_activo )
            {
                if (duracao_monstro_azul % 12 == 8)
                {
                    for(i=1; i<5; i++)
                    {
                        if (estado_monstro[i]==1)
                        {
                            estado_monstro[i]=2;
                        }
                    }
                }
                else
                {
                    if (duracao_monstro_azul % 12 == 0)
                    {
                        for(i=1; i<5; i++)
                        {
                            if (estado_monstro[i]==2)
                            {
                                estado_monstro[i]=1;
                            }
                        }
                    }
                }
            }
        }
        duracao_monstro_azul--;
    }
    for(i = 1; i < 5; i++)
    {
        if (estado_monstro[i] == 0)
        {
            if (monstro_Ini[i]==1)
            {
                direccao_actual[i]=caminho_monstro[i][caminho_monstro_index[i]];
                caminho_monstro_index[i]++;
                if (direccao_actual[i]>3)
                {
                    monstro_Ini[i]=0;
                    direccao_actual[i]-=4;
                }
                if (direccao_actual[i] == 0)
                {
                    objectos_X[i]--;
                }
                else
                {
                    if (direccao_actual[i] == 1)
                    {
                        objectos_X[i]++;
                    }
                    else
                    {
                        if (direccao_actual[i] == 2)
                        {
                            objectos_Y[i]--;
                        }
                        else
                        {
                            objectos_Y[i]++;
                        }
                    }
                }
            }
            else
            {
                tipo_casa_actual = mapa_monstro[objectos_Y[i]][objectos_X[i]];
                if (tipo_casa_actual == 1)
                {
                    comportamento_monstro(i,1);
                }
                else
                {
                    if (tipo_casa_actual == 2 || tipo_casa_actual == 9)
                    {
                        comportamento_monstro(i,2);
                    }
                    else
                    {
                        if (tipo_casa_actual == 3)
                        {
                            if (direccao_actual[i] != 1 && mapa_monstro[objectos_Y[i]][objectos_X[i]-1] != 0)
                            {
                                direccao_actual[i] = 0;
                            }
                            else
                            {
                                if (direccao_actual[i] != 0 && mapa_monstro[objectos_Y[i]][objectos_X[i]+1] != 0)
                                {
                                    direccao_actual[i] = 1;
                                }
                                else
                                {
                                    if (direccao_actual[i] != 3 && mapa_monstro[objectos_Y[i]-1][objectos_X[i]] != 0)
                                    {
                                        direccao_actual[i] = 2;
                                    }
                                    else
                                    {
                                        if (direccao_actual[i] != 2 && mapa_monstro[objectos_Y[i]+1][objectos_X[i]] != 0)
                                        {
                                            direccao_actual[i] = 3;
                                        }
                                        else
                                        {
                                        }
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (tipo_casa_actual==4 || tipo_casa_actual==5 || tipo_casa_actual==6 || tipo_casa_actual==7)
                            {
                                direccao_actual[i]=(Number(tipo_casa_actual)-4);
                            }
                        }
                    }
                }
                if (direccao_actual[i] == 0)
                {
                    objectos_X[i]--;
                }
                else
                {
                    if (direccao_actual[i] == 1)
                    {
                        objectos_X[i]++;
                    }
                    else
                    {
                        if (direccao_actual[i] == 2)
                        {
                            objectos_Y[i]--;
                        }
                        else
                        {
                            objectos_Y[i]++;
                        }
                    }
                }
            }
        }
        if (estado_monstro[i] == 1 || estado_monstro[i] == 2)
        {
            // abranda os monstros quando estao comestiveis (azuis)
            if (objectoZ[i]==0)
            {
                if (monstro_Ini[i]==1)
                {
                    direccao_actual[i]=caminho_monstro[i][caminho_monstro_index[i]];
                    caminho_monstro_index[i]++;
                    if (direccao_actual[i]>3)
                    {
                        monstro_Ini[i]=0;
                        direccao_actual[i]-=4;
                    }
                    if (direccao_actual[i] == 0)
                    {
                        objectos_X[i]--;
                    }
                    else
                    {
                        if (direccao_actual[i] == 1)
                        {
                            objectos_X[i]++;
                        }
                        else
                        {
                            if (direccao_actual[i] == 2)
                            {
                                objectos_Y[i]--;
                            }
                            else
                            {
                                objectos_Y[i]++;
                            }
                        }
                    }
                }
                else
                {
                    tipo_casa_actual = mapa_monstro[objectos_Y[i]][objectos_X[i]];
                    if (tipo_casa_actual == 1)
                    {
                    }
                    if (tipo_casa_actual == 2 || tipo_casa_actual == 9)
                    {
                        comportamento_monstro_azul(i,2);
                    }
                    if (tipo_casa_actual == 3)
                    {
                        if (direccao_actual[i] != 1 && mapa_monstro[objectos_Y[i]][objectos_X[i]-1] == 1)
                        {
                            direccao_actual[i] = 0;
                        }
                        else
                        {
                            if (direccao_actual[i] != 0 && mapa_monstro[objectos_Y[i]][objectos_X[i]+1] == 1)
                            {
                                direccao_actual[i] = 1;
                            }
                            else
                            {
                                if (direccao_actual[i] != 3 && mapa_monstro[objectos_Y[i]-1][objectos_X[i]] == 1)
                                {
                                    direccao_actual[i] = 2;
                                }
                                else
                                {
                                    if (direccao_actual[i] != 2 && mapa_monstro[objectos_Y[i]+1][objectos_X[i]] == 1)
                                    {
                                        direccao_actual[i] = 3;
                                    }
                                    else
                                    {
                                    }
                                }
                            }
                        }
                    }
                    if (direccao_actual[i] == 0)
                    {
                        objectos_X[i]--;
                    }
                    else
                    {
                        if (direccao_actual[i] == 1)
                        {
                            objectos_X[i]++;
                        }
                        else
                        {
                            if (direccao_actual[i] == 2)
                            {
                                objectos_Y[i]--;
                            }
                            else
                            {
                                objectos_Y[i]++;
                            }
                        }
                    }
                }
            }
        }
        if (estado_monstro[i] == 3)
        {
            cod_direccao = mapa_olhos[objectos_Y[i]][objectos_X[i]];
            direccao_actual[i] = cod_direccao;
            if (cod_direccao == 0)
            {
                objectos_X[i]--;
            }
            else
            {
                if (cod_direccao == 1)
                {
                    objectos_X[i]++;
                }
                else
                {
                    if (cod_direccao == 2)
                    {
                        objectos_Y[i]--;
                    }
                    else
                    {
                        if (cod_direccao == 3)
                        {
                            objectos_Y[i]++;
                        }
                        else
                        {
                            monstro_Ini[i]=0;
                            if (cod_direccao == 5)
                            {
                                if (i==1 || i==2)
                                {
                                    // transforma olhos -> monstros
                                    estado_monstro[i]=0;
                                    cod_direccao=2;
                                    objectos_X[i]--;
                                }
                                else
                                {
                                    if (i==3)
                                    {
                                        objectos_X[i]--;
                                        cod_direccao=0;
                                    }
                                    else
                                    {
                                        if (i==4)
                                        {
                                            objectos_X[i]++;
                                            cod_direccao=1;
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (cod_direccao==6 || cod_direccao==7)
                                {
                                    estado_monstro[i]=0;
                                    cod_direccao-=6;
                                }
                            }
                        }
                    }
                }
            }
            direccao_actual[i] = cod_direccao;
        }
        objectoZ[i]++;
        if (objectoZ[i] == 2)
            objectoZ[i] = 0;
    }
}

function comportamento_monstro_azul(mNum,tipo_movimento)
{
    var ran1 = Math.random();
    var onde_pacman_X = 0;
    var onde_pacman_Y = 2;
    if (objectos_X[0]>objectos_X[mNum])
        onde_pacman_X = 1;
    if (objectos_Y[0]>objectos_Y[mNum])
        onde_pacman_Y = 3;
    if (ran1>.5)
    {
        if (onde_pacman_X == 1 && direccao_actual[mNum] != 1 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
        {
            direccao_actual[mNum] = 0;
        }
        else
        {
            if (onde_pacman_X == 0 && direccao_actual[mNum] != 0 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
            {
                direccao_actual[mNum] = 1;
            }
            else
            {
                if (onde_pacman_Y == 3 && direccao_actual[mNum] != 3 && mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
                {
                    direccao_actual[mNum] = 2;
                }
                else
                {
                    if (onde_pacman_Y == 2 && direccao_actual[mNum] != 2 && mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
                    {
                        direccao_actual[mNum] = 3;
                    }
                    else
                    {
                        if (direccao_actual[mNum]==0 || direccao_actual[mNum]==1)
                        {
                            if (mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
                            {
                                direccao_actual[mNum] = 2;
                            }
                            else
                            {
                                if (mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
                                {
                                    direccao_actual[mNum] = 3;
                                }
                            }
                        }
                        else
                        {
                            if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
                            {
                                direccao_actual[mNum] = 0;
                            }
                            else
                            {
                                if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                                {
                                    direccao_actual[mNum] = 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else
    {
        if (onde_pacman_Y == 3 && direccao_actual[mNum] != 3 && mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
        {
            direccao_actual[mNum] = 2;
        }
        else
        {
            if (onde_pacman_Y == 2 && direccao_actual[mNum] != 2 && mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
            {
                direccao_actual[mNum] = 3;
            }
            else
            {
                if (onde_pacman_X == 1 && direccao_actual[mNum] != 1 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
                {
                    direccao_actual[mNum] = 0;
                }
                else
                {
                    if (onde_pacman_X == 0 && direccao_actual[mNum] != 0 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                    {
                        direccao_actual[mNum] = 1;
                    }
                    else
                    {
                        if (direccao_actual[mNum]==0 || direccao_actual[mNum]==1)
                        {
                            if (mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
                            {
                                direccao_actual[mNum] = 3;
                            }
                            else
                            {
                                if (mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
                                {
                                    direccao_actual[mNum] = 2;
                                }
                            }
                        }
                        else
                        {
                            if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                            {
                                direccao_actual[mNum] = 1;
                            }
                            else
                            {
                                if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
                                {
                                    direccao_actual[mNum] = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function comportamento_monstro(mNum,tipo_movimento)
{
    var ran1 = Math.random();
    var ran2 = Math.random();
    if (tipo_movimento == 1)
    {
        if (ran1<energia_monstro[mNum])
        {
            if (direccao_actual[mNum] == 0 || direccao_actual[mNum] == 1)
            {
                if (objectos_X[0]<objectos_X[mNum])
                {
                    direccao_actual[mNum] = 0;
                }
                else
                {
                    direccao_actual[mNum] = 1;
                }
                if (ran2>monstro_preve_linha[mNum])
                {
                    // flip
                    if (direccao_actual[mNum] == 0)
                    {
                        direccao_actual[mNum] = 1;
                    }
                    else
                    {
                        direccao_actual[mNum] = 0;
                    }
                }
            }
            if (direccao_actual[mNum] == 2 || direccao_actual[mNum] == 3)
            {
                if (objectos_Y[0]<objectos_Y[mNum])
                {
                    direccao_actual[mNum] = 2;
                }
                else
                {
                    direccao_actual[mNum] = 3;
                }
                if (ran2>monstro_preve_linha[mNum])
                {
                    // flip
                    if (direccao_actual[mNum] == 2)
                    {
                        direccao_actual[mNum] = 3;
                    }
                    else
                    {
                        direccao_actual[mNum] = 2;
                    }
                }
            }
        }
    }
    if (tipo_movimento == 2)
    {
        var onde_pacman_X = 0;
        var onde_pacman_Y = 2;
        if (objectos_X[0]>objectos_X[mNum])
            onde_pacman_X = 1;
        if (ran1>monstro_preve_escolha[mNum])
        {
            // flip
            if (onde_pacman_X == 1)
            {
                onde_pacman_X = 0;
            }
            else
            {
                onde_pacman_X = 1;
            }
        }
        if (objectos_Y[0]>objectos_Y[mNum])
            onde_pacman_Y = 3;
        if (ran1>monstro_preve_escolha[mNum])
        {
            // flip
            if (onde_pacman_Y == 2)
            {
                onde_pacman_Y = 3;
            }
            else
            {
                onde_pacman_Y = 2;
            }
        }

        // verifica se o pacman esta na mesma linha e escolhe essa direçao
        if (objectos_X[0] == objectos_X[mNum])
        {
            ran2 = .1;
        }
        else
        {
            if (objectos_Y[0] == objectos_Y[mNum])
            {
                ran2 = .9;
            }
        }
        if (ran2>.5)
        {
            if (onde_pacman_X == 0 && direccao_actual[mNum] != 1 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
            {
                direccao_actual[mNum] = 0;
            }
            else
            {
                if (onde_pacman_X == 1 && direccao_actual[mNum] != 0 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                {
                    direccao_actual[mNum] = 1;
                }
                else
                {
                    if (onde_pacman_Y == 2 && direccao_actual[mNum] != 3 && mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
                    {
                        direccao_actual[mNum] = 2;
                    }
                    else
                    {
                        if (onde_pacman_Y == 3 && direccao_actual[mNum] != 2 && mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
                        {
                            direccao_actual[mNum] = 3;
                        }
                        else
                        {
                            if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
                            {
                                direccao_actual[mNum] = 0;
                            }
                            else
                            {
                                if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                                {
                                    direccao_actual[mNum] = 1;
                                }
                                else
                                {
                                    if (mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
                                    {
                                        direccao_actual[mNum] = 2;
                                    }
                                    else
                                    {
                                        if (mapa_monstro[objectos_Y[mNum][objectos_X[mNum]]+1] == 1)
                                        {
                                            direccao_actual[mNum] = 3;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else
        {
            if (onde_pacman_Y == 2 && direccao_actual[mNum] != 3 && mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
            {
                direccao_actual[mNum] = 2;
            }
            else
            {
                if (onde_pacman_Y == 3 && direccao_actual[mNum] != 2 && mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
                {
                    direccao_actual[mNum] = 3;
                }
                else
                {
                    if (onde_pacman_X == 0 && direccao_actual[mNum] != 1 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
                    {
                        direccao_actual[mNum] = 0;
                    }
                    else
                    {
                        if (onde_pacman_X == 1 && direccao_actual[mNum] != 0 && mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                        {
                            direccao_actual[mNum] = 1;
                        }
                        else
                        {
                            if (mapa_monstro[objectos_Y[mNum]-1][objectos_X[mNum]] == 1)
                            {
                                direccao_actual[mNum] = 2;
                            }
                            else
                            {
                                if (mapa_monstro[objectos_Y[mNum]+1][objectos_X[mNum]] == 1)
                                {
                                    direccao_actual[mNum] = 3;
                                }
                                else
                                {
                                    if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]-1] == 1)
                                    {
                                        direccao_actual[mNum] = 0;
                                    }
                                    else
                                    {
                                        if (mapa_monstro[objectos_Y[mNum]][objectos_X[mNum]+1] == 1)
                                        {
                                            direccao_actual[mNum] = 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


//
//            Pacman         
//   UC: PWBD                
//   Docente: Jorge Machado  
//   Discente: João Pereira  
//   a16921   -   2014/2015  
//

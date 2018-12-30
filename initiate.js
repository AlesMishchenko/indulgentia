// (С) Алесь Мищенко 
// ======================================== START INIT VARS ========================================
var adformShyrynja=537; //597
var adformEffect="staronkaUperad";
var adformVyshinja=537; //597
var adformChas=5000;
var adformPerahod=2000;
sjarNazvy=["ЭРА МИЛОСЕРДИЯ","ХИРУРГ И ПСИХ","ПРИСНИЛАСЬ ЛЮБОВЬ",
"КОД САМОУНИЧТОЖЕНИЯ","КВАНТОВЫЕ ЛЮДИ","ДЕТИ И ПАУКИ","УЧЁНЫЙ И ПРИРОДА","СУДЫ И СУДЬБЫ","ЭРОТИЧЕСКИЙ ОСКАР","АВТОРЫ СВОИХ СУДЕБ",
"ЯНЫЧАРЫ НЕВЕДОМОЙ РОДИНЫ","ДОГОВОР С ДЬЯВОЛОМ","ПЛАТА ЗА ВСЁ","ИСПОВЕДЬ ДИКАРЯ","МАТРИЦА МНОГОЭТАЖЕК","ДЕТСТВО НАРОДА","ДНО МОРЯ ЛЮБВИ",
"НЕСБЫВШЕЕСЯ","НЕОТПРАВЛЕННОЕ ПИСЬМО","НЕУЧ ПРИРОДЫ","ЛЮДИ ЕХАЛИ В ПОЕЗДЕ","ЦЕЛЬ ВСЕХ РАЗГОВОРОВ","РЕКЛАМА РАЯ","УТРО МАРИОНЕТКИ",
"ЗАМЕНИТЕЛЬ БУДУЩЕГО","ГДЕ У ЛЮДЕЙ КНОПКА","СОН БУДУЩЕГО"];
var raspoCveta = [];
function rgb2hex(red, green, blue) {
var rgb = blue | (green << 8) | (red << 16);
return '#' + (0x1000000 + rgb).toString(16).slice(1)
}
raspoCveta[0]=rgb2hex(255,255,0); //yellow2 Kor
raspoCveta[1]=rgb2hex(204,153,0); //yellow3 Bir
raspoCveta[2]=rgb2hex(255,255,153); //yellow chel
raspoCveta[3]=rgb2hex(0,153,153);//3Cyan4 Kogo
raspoCveta[4]=rgb2hex(153,153,153);//4Gray5 Vrach
raspoCveta[5]=rgb2hex(153,0,255);//5Purple Mne
raspoCveta[6]=rgb2hex(255,102,0);//6Orange dogov
raspoCveta[7]=rgb2hex(255,0,0); //7 red3 chast
raspoCveta[8]=rgb2hex(221,221,221);//8 gray2 skazk
raspoCveta[9]=rgb2hex(204,0,102);//9 rose4 moi nauch
raspoCveta[10]=rgb2hex(255,0,102);//10 pink3 zensc
raspoCveta[11]=rgb2hex(255,153,153);//11 red1 RolGeroa
raspoCveta[12]=rgb2hex(255,153,255);//12 magenta1 my-avtr
raspoCveta[13]=rgb2hex(204,0,204);//13 magenta4 bashibuzuk
raspoCveta[14]=rgb2hex(255,153,0);//14 orange2 Dogov
raspoCveta[15]=rgb2hex(153,153,255); //15 blue1 ProSob   WAS17
raspoCveta[16]=rgb2hex(102,255,255);//16w20Cyan Dik   WAS20
raspoCveta[17]=rgb2hex(255,0,204);//17w21Pink Matr   WAS21
raspoCveta[18]=rgb2hex(0,255,102);//18w22Turquoise2 detNar   WAS22
raspoCveta[19]=rgb2hex(0,0,255);//19w18Blue3 Dno   WAS18
raspoCveta[20]=rgb2hex(0,204,255);//20 skyblue  nesb   WAS19
raspoCveta[21]=rgb2hex(0,204,51);//21 tourquose3 nit   WAS23
raspoCveta[22]=rgb2hex(153,255,153);//22w24Green1 neuc   WAS24
raspoCveta[23]=rgb2hex(0,153,0);//23w25Green4 Lud   WAS25
raspoCveta[24]=rgb2hex(204,255,0);//24w26YellowGreen smys   WAS26
raspoCveta[25]=rgb2hex(204,102,255);//25w15Purple1 moi-rek   WAS15
raspoCveta[26]=rgb2hex(102,102,255);//26w16Blue UtVkuk   WAS16
raspoCveta[27]=rgb2hex(204,255,102);//27 yellowGreen1 Zamen
raspoCveta[28]=rgb2hex(102,255,0);//28YellowGreen3 poisk-vin
raspoCveta[29]=rgb2hex(255,102,102); //red2 buben  29buben
raspoCveta[30]=rgb2hex(153,255,51); //yellowGreen2 toze na sait
raspoCveta[31]=rgb2hex(204,51,0); //Orange4 drugKn
raspoCveta[32]=rgb2hex(51,255,153); //Turquoise Drug
raspoCveta[33]=rgb2hex(102,0,255); //33Purple3
raspoCveta[34]=rgb2hex(204,0,0); //34Red4
raspoCveta[35]=rgb2hex(153,255,102); //35Green
raspoCveta[36]=rgb2hex(153,102,0); //36Yellow4
raspoCveta[37]=rgb2hex(0,153,51); //37Turquoise4

	const vseIndsRaspov=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
	const bujneishINvseIndsRaspov = vseIndsRaspov[vseIndsRaspov.length-1];
const allIndsByTemy=[0,       1,       2,     3,      4,   5,         6,            7,         8,     9,       10,        11]
const ValuesByTemy=["ЛЮБОВЬ","СМЕРТЬ","ЭРОС","НАУКА","ТВ","ФАНТАЗИИ","НЕПОНИМАНИЕ","ОБЩЕСТВО","МИРЫ","ИСТОРИЯ","ПРИРОДА","ДУША"];
const pach3=["КОРОЛИ ВОДОВОРОТОВ","БИРЖА СМЫСЛОВ ЖИЗНИ","ВЗГЛЯД С ФОТОГРАФИИ"];
const idGuzikiPaTemam=['idGuzikUbracLU','idGuzikUbracSM','idGuzikUbracER','idGuzikUbracNA','idGuzikUbracTV','idGuzikUbractFA','idGuzikUbracNE','idGuzikUbracOB','idGuzikUbracMI','idGuzikUbracIS','idGuzikUbracPR','idGuzikUbracDU'];
const kan3=["Издания (нелинейные книги)","Издания(линейные книги)","Издания(нелитературные)"];
const maxIndINtemy = allIndsByTemy[allIndsByTemy.length-1];
	const temyBezEtogoTexta  = [[2,3,4,5],[1,2,3,4,5],[0,3,4,5],[1,2,3,4,5],[0,2,3,4,5],[0,1,4,5]];	 //ne karystaetsa t.k. delete
	//for(var i of allIndsByTemy) for(var j of textyKazhdoiTemy[i]) {essBezEtojTemy[i].splice(textyKazhdoiTemy[i].indexOf(j), 1);};
	//	vseIndsRaspov.filter(function(x) { return textyKazhdoiTemy.indexOf(x) < 0 })}	
	
const textyKazhdoiTemy =[[0,1,3,5],[0,2,4],[2,5],[5]]; //ne karystaetsa t.k. delete
//const kavalackisedevrikiSetojTemoi = [[5,10,17,18,21,23,24],[1,3,6,13,17,18,23,27],[9,11,12,15,16,21],
//[1,4,6,7,9,10,26],[10,11,15,21,28,29],[4,5,8,12,15,19,21,22],
//[2,4,5,8,13,16,20,22,24,25],[0,3,6,8,10,14,19,20,21,24,25,26,27,28,29],[2,4,12,13,16,17,18,19,23,25,27,28,29],
//[1,2,7,12,13,14,20,22,29],[0,6,9,11,15,16,17,18,20,23,24,26],[0,3,5,7,8,10,12,14,17,18,19,23,27,28]];	 //ne karystaetsa
const kavalackisedevrikiSetojTemoi = [[5,10,15,19,17,21,22],[1,3,6,13,15,19,21,27],[9,11,12,25,26,17],
[1,4,6,7,9,10,24],[10,11,25,17,28,29],[4,5,8,12,25,20,17,18],
[2,4,5,8,13,26,16,18,22,23],[0,3,6,8,10,14,20,16,17,22,23,24,27,28,29],[2,4,12,13,26,15,19,20,21,23,27,28,29],
[1,2,7,12,13,14,16,18,29],[0,6,9,11,25,26,15,19,16,21,22,24],[0,3,5,7,8,10,12,14,15,19,20,21,27,28]];	 //ne isp1lzuetsa
const temyKazhdogoEss = [[7,10,11],[1,3,9],[6,8,9],[1,7,11],[6,3,8,5],[0,5,11,6],
[1,10,3,7],[9,11,3],[7,11,6,5],[10,2,3],[0,3,4,7,11],
[2,10,4],[2,9,8,5,11],[6,8,9,1],[7,11,9],[0,1,8,11,10],
[10,7,9,6],[0,2,4,7,5],[9,5,6],[0,10,8,11,1],[8,5,11,7],
[0,10,8,11,1],[10,7,0,6],[8,6,7],[7,10,3],[4,10,2,5],
[10,2,6,8],[7,8,1,11],[8,4,7,11],[7,9,8,4],[],
[],[],[]];	 //ispolzuetsa daze posle delete   poiskVin[8,4,7,11]nadoLiTV?(nado,TVmalo)   smysl[7,10,3]dobavNeponimanie? buben[7,9,8,4]dobavSme?

// 15,16=[4,10,2,5],[10,2,6,8], posle 26=[7,10,3],
// 18,19=[0,10,8,11,1],[8,5,11,7], posle 22=[9,5,6],




//const essBezEtojTemy =[//ne pomenjano 15,16 i 18,19
//[0,1,2,3,4,  6,7,8,9,   11,12,13,14,15,16,      19,20,   22,      25,26,27,28,29,30],//1
//[0,  2,  4,5,  7,8,9,10,11,12,   14,15,16,      19,20,21,22,   24,25,26,   28,29,30],//2
//[0,1,2,3,4,5,6,7,8,  10,      13,14,      17,18,19,20,   22,23,24,25,26,27,28,29,30],//3
//[0,  2,3,  5,    8,     11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,   27,28,29,30],//4
//[0,1,2,3,4,5,6,7,8,9,      12,13,14,   16,17,18,19,20,   22,23,24,25,26,27,     ,30],//5
//[0,1,2,3,    6,7,  9,10,11,   13,14,   16,17,18,   20,      23,24,25,26,27,28,29,30],//6
//[0,1,  3,    6,7,  9,10,11,12,   14,15,   17,18,19,   21,   23,      26,27,28,29,30],//7
//[  1,2,  4,5,  7,  9,   11,12,13,   15,16,17,18,         22,23,                  30],//8
//[0,1,  3,  5,6,7,8,9,10,11,      14,15,            20,21,22,   24,   26,         30],//9
//[0,    3,4,5,6,  8,9,10,11,         15,16,17,18,19,   21,   23,24,25,26,27,28,   30],//10
//[  1,2,3,4,5,  7,8,  10,   12,13,14,            19,   21,22,      25,   27,28,29,30],//11
//[  1,2,  4,  6,    9,   11,   13,   15,16,         20,21,22,   24,25,26,      29,30]//12
//];
var essBezEtojTemy=[//.slice() clones
vseIndsRaspov.slice(),vseIndsRaspov.slice(),vseIndsRaspov.slice(),vseIndsRaspov.slice(),
vseIndsRaspov.slice(),vseIndsRaspov.slice(),vseIndsRaspov.slice(),vseIndsRaspov.slice(),
vseIndsRaspov.slice(),vseIndsRaspov.slice(),vseIndsRaspov.slice(),vseIndsRaspov.slice()
];
for (var item = maxIndINtemy; item>=0; item--){
for (var iEss = bujneishINvseIndsRaspov; iEss>=0; iEss--){
if(kavalackisedevrikiSetojTemoi[item].includes(iEss)) 
{essBezEtojTemy[item].splice(iEss,1);};
}
};
	
const nacalnyRaspovVarianty=[0,11,19,     4,8,15,17,20,21,23,4,8,15,17,20,21,23,];
var raspovLicnik = nacalnyRaspovVarianty[Math.floor(Math.random()*nacalnyRaspovVarianty.length) + 0];
var args
var varZmest
var vseIndsTXTofRadkiZmest=[]
var vseIndsNUMofRadkiZmest=[]
var vseIndsIDofRadkiZmest=[]
//document.onload = function () {
//essBezEtojTemy =[vseIndsRaspov,vseIndsRaspov,vseIndsRaspov,vseIndsRaspov,vseIndsRaspov,vseIndsRaspov];
//	for(var i of allIndsByTemy) for(var j of textyKazhdoiTemy[i]) {
//	essBezEtojTemy[i].splice(textyKazhdoiTemy[i].indexOf(j), 1);
//	};
//	zrabicAllRadkiForTZmestIDfrom0();zrabicTZmest();
//}
var allRadkiForTZmestIDfrom0
var imLicnikiStaryeUse=[] 

//maps dlja napaunenna knopak funkciej titleAndValueByElementAdseu
var mapIDtoValues = new Map(); 
for (i=0;i<ValuesByTemy.length;i++) {
var insideMap = new Map();
insideMap.set(false,ValuesByTemy[i]);//
insideMap.set(true,'Без темы "'+ValuesByTemy[i]+'"');//
mapIDtoValues.set(idGuzikiPaTemam[i],insideMap);
}
var insideMap = new Map();
insideMap.set(true,'Прочитанное');
insideMap.set(false,'Непрочитанное');
mapIDtoValues.set('idGuzikUbracseentexts',insideMap);

var MapSuvaz = new Map(); MapSuvaz.set(true,'Сначала НЕСВЯЗАННЫЕ'); MapSuvaz.set(false,'Сначала СВЯЗАННЫЕ'); mapIDtoValues.set('idGuzikSortZmestSvjaz',MapSuvaz);
var MapAlfav = new Map(); MapAlfav.set(true,'от Я до А'); MapAlfav.set(false,'от А до Я'); mapIDtoValues.set('idGuzikSortZmestAlfavit',MapAlfav);
var MapPamer = new Map(); MapPamer.set(true,'Сначала маленькие'); MapPamer.set(false,'Сначала большие'); mapIDtoValues.set('idGuzikSortZmestRazmer',MapPamer);
var MapAdznak = new Map(); MapAdznak.set(true,'Сначала непопулярные'); MapAdznak.set(false,'Сначала популярные'); mapIDtoValues.set('idGuzikSortZmestOcenka',MapAdznak);
var MapSpor = new Map(); MapSpor.set(true,'Сначала по которым все согласны'); MapSpor.set(false,'Сначала спорные'); mapIDtoValues.set('idGuzikSortZmestSpor',MapSpor);
var MapPoezia = new Map(); MapPoezia.set(true,'Публицистика перед Поэзией'); MapPoezia.set(false,'Поэзия перед Публицистикой'); mapIDtoValues.set('idGuzikSortZmestPoezia',MapPoezia);
var allNazvyRus = sjarNazvy.concat(kan3);
allNazvyRus = pach3.concat(allNazvyRus);
var mapIDtoTitles = new Map();
for (i=0;i<ValuesByTemy.length;i++) {
var insideMap = new Map();
insideMap.set(false,'Оставить в оглавлении только тексты с темой "'+ValuesByTemy[i]+'"');//
insideMap.set(true,'Убрать из оглавления тексты с темой "'+ValuesByTemy[i]+'"');//
mapIDtoTitles.set(idGuzikiPaTemam[i],insideMap);
}
var insideMap = new Map();
insideMap.set(false,'Убрать из оглавления ПРОЧИТАННЫЕ тексты');
insideMap.set(true,'Убрать из оглавления НЕПРОЧИТАННЫЕ тексты');
mapIDtoTitles.set('idGuzikUbracseentexts',insideMap);

var MapSuvaz = new Map(); MapSuvaz.set(true,'Сортировать оглавление так чтобы вверху были "белые" тексты, НЕСВЯЗАННЫЕ с читаемым текстом'); 
MapSuvaz.set(false,'Сортировать оглавление так чтобы вверху были "цветные" тексты, СВЯЗАННЫЕ с читаемым текстом'); mapIDtoTitles.set('idGuzikSortZmestSvjaz',MapSuvaz);
var MapAlfav = new Map(); MapAlfav.set(true,'Сортировать оглавление по алфавиту в обратном порядке'); 
MapAlfav.set(false,'Сортировать оглавление по алфавиту'); mapIDtoTitles.set('idGuzikSortZmestAlfavit',MapAlfav);
var MapPamer = new Map(); MapPamer.set(true,'Сортировать оглавление по размеру текстов, от маленьких к большим'); 
MapPamer.set(false,'Сортировать оглавление по размеру текстов, от больших к маленьким'); mapIDtoTitles.set('idGuzikSortZmestRazmer',MapPamer);
var MapAdznak = new Map(); MapAdznak.set(true,'Сортировать оглавление по оценкам читателей, от низкооцениваемых к высокооцениваемым'); 
MapAdznak.set(false,'Сортировать оглавление по оценкам читателей, от высокооцениваемых к низкооцениваемым'); mapIDtoTitles.set('idGuzikSortZmestOcenka',MapAdznak);
var MapSpor = new Map(); MapSpor.set(true,'Сортировать оглавление по разнице оценок читателей, сначала те тексты которым все дают одинаковые оценки'); 
MapSpor.set(false,'Сортировать оглавление по разнице оценок читателей, сначала спорные тексты которым все дают разные оценки'); mapIDtoTitles.set('idGuzikSortZmestSpor',MapSpor);
var MapPoezia = new Map(); MapPoezia.set(true,'Сортировать оглавление по стилю, сначала более сложные, научные и публицистические'); 
MapPoezia.set(false,'Сортировать оглавление по стилю, сначала более поэтичные и образные'); mapIDtoTitles.set('idGuzikSortZmestPoezia',MapPoezia);


// ======================================== END INIT VARS ========================================
// ======================================== START FUNCTIONS ========================================




function dopolnitCol(hex) {
var a = hex.split("(")[1].split(")")[0];
a = a.split(",");
return "rgb("+(255-Number(a[0])).toString()+", "+(255-Number(a[1])).toString()+", "+(255-Number(a[2])).toString()+")"
}
function maljavac1temaHusikBYnumber(tema) { //redrawTemyButtons(imgCounterInRedraw) {
var btnn = document.createElement("input");
btnn.type='button';
btnn.value=ValuesByTemy[tema];
btnn.title='Оставить в оглавлении только тексты с темой : '+ValuesByTemy[tema];
btnn.id=idGuzikiPaTemam[tema];
//placeHolder = document.getElementById(idGuzikiPaTemam[idGuzikiPaTemam[tema]]);
//placeHolder.appendChild(btnn);
//btnn.addEventListener("click", fabravacCIubracRadkiPaID(temyBezEtogoTexta[raspovLicnik],[],'znishchyc',''));
//btnn.onclick = function() {fabravacCIubracRadkiPaID(temyBezEtogoTexta[raspovLicnikNastupny],[],'znishchyc','');};//why NOT ADDED?
document.getElementById('idTemyKontur').appendChild(btnn);   
}
function ustanLitarNaMiasce(str,i,c) {
	if(i > str.length-1) return str;
	return str.substr(0,i) + c + str.substr(i);
}
function copyRowAttributes(rowTO,rowFROM) { //ne karyst
rowTO.id=rowFROM.id;
rowTO.td[0].id=rowFROM.td[0].id;
rowTO.td[1].id=rowFROM.td[1].id;
rowTO.td[0].innerHTML=rowFROM.td[0].innerHTML;
rowTO.td[0].style.backgroundColor=rowFROM.td[0].style.backgroundColor;
rowTO.td[1].button[0].id=rowFROM.td[1].button[0].id;
rowTO.td[1].button[0].innerHTML=rowFROM.td[1].button[0].innerHTML;
rowTO.td[1].button[0].id=rowFROM.td[1].button[0].id;
rowTO.td[1].button[0].id=rowFROM.td[1].button[0].id;
}
function zrabicAllRadkiForTZmestIDfrom0() {
allRadkiForTZmestIDfrom0 = {};
for (var itr = 0; itr <= bujneishINvseIndsRaspov; itr++){
	allRadkiForTZmestIDfrom0[itr] = document.createElement('tr'); allRadkiForTZmestIDfrom0[itr].setAttribute('id', itr.toString());
    var td1 = document.createElement('td'); td1.setAttribute('id', 'id'+itr.toString()); td1.innerHTML = 'perehod v '+itr.toString();
    var td2 = document.createElement('td'); //td2.setAttribute('size', '25'); 
	var buttonATtd2 = document.createElement('button'); buttonATtd2.setAttribute('id', 'button'+itr.toString()); buttonATtd2.innerHTML = allNazvyRus[itr]; 
    //var text1 = document.createTextNode('Text1');
	td2.appendChild(buttonATtd2);
    //td1.appendChild(text1);
    allRadkiForTZmestIDfrom0[itr].appendChild(td1);
    allRadkiForTZmestIDfrom0[itr].appendChild(td2); 
    //allRadkiForTZmestIDfrom0.push(tr);
	}
//document.appendChild(allRadkiForTZmestIDfrom0);
for (var itr = 0; itr <= bujneishINvseIndsRaspov; itr++){	
	console.log(allRadkiForTZmestIDfrom0[itr].id+' =allRadkiID LOOP JUST TO PRINT');
}	
}
function zrabicTZmest() {
//document.getElementById("idLegendZmest").innerHTML="Оглавление(тексты,связанные с этим,выделены их цветом):   ";
var varTZmestOLD = document.getElementById("tableZmest")
if (!varTZmestOLD) {
varZmest = document.createElement('table');
varZmest.setAttribute('id', 'tableZmest');
}
for (var itr = 0; itr <= bujneishINvseIndsRaspov; itr++){
    varZmest.appendChild(allRadkiForTZmestIDfrom0[itr]);
}
if (!varTZmestOLD) {
document.getElementById("idDivTZmest").appendChild(varZmest);//document.body.appendChild(varZmest);
}
varZmest.setAttribute("border", "2");
}
function KaliarovyaRadkiPeradBelymi() {
naadvar=document.getElementById("idGalkaParadak").checked;
for (var i = document.getElementById('tableZmest').rows.length - 1; i >= 0; i--) { 
var dalekiCvetny = document.getElementById('tableZmest').rows[i];
if (dalekiCvetny.style.backgroundColor.toLowerCase() != "white" ? !naadvar : naadvar) { //XOR
for (var j = 0; j < i; j++) { 
var blizkiBely = document.getElementById('tableZmest').rows[j];
if (blizkiBely.style.backgroundColor.toLowerCase() === "white" ? !naadvar : naadvar) {
document.getElementById('tableZmest').rows[i].parentNode.insertBefore(document.getElementById('tableZmest').rows[i], document.getElementById('tableZmest').rows[j]);
break;}}}}
}
function bujnyaIndsPeradTZmest(indexPlace) {
naadvar=document.getElementById("idGalkaParadak").checked;
var minTableImgs = Math.min(document.getElementById('tableZmest').rows.length-1,bujneishINvseIndsRaspov);
var nearRi
var farRj 
console.log(minTableImgs+' =minTableImgs');
rows = document.getElementById('tableZmest').getElementsByTagName("TR");
for(var Nadsartavannyh=0;Nadsartavannyh<minTableImgs-1;Nadsartavannyh++){
for (var i = Nadsartavannyh; i < minTableImgs; i++) { 
nearRi = document.getElementById('tableZmest').rows[i].cloneNode(true);
for (var j = i+1; j <= minTableImgs; j++) { 
farRj = document.getElementById('tableZmest').rows[j].cloneNode(true);
console.log(nearRi.id+' =nearid'+'__'+farRj.id+' =farid');
console.log(args.malunki[nearRi.id]+' =args.malunki[nearRi.id]'+'__'+args.malunki[farRj.id]+' =args.malunki[farRj.id]');
if (args.malunki[farRj.id][indexPlace] != args.malunki[nearRi.id][indexPlace])
{if (args.malunki[farRj.id][indexPlace] > args.malunki[nearRi.id][indexPlace] ? !naadvar : naadvar) {rows[i].parentNode.insertBefore(rows[j], rows[i]);}}
}}
}
}







//------------------------------------- GALOUNAJA FUNCTIA -----------------------------------------
function illustrate(div) {
	document.getElementById("divStarajaGall").innerHTML = "";
	args = {"width":adformShyrynja,"Height":adformVyshinja,"duration":adformChas,"transition":adformPerahod,"effect":adformEffect,"id":"divStarajaGall",
"malunki":[ 	//ot 0 do 32 - stolko dolzno byt strok !!!!!!!!!!!!!!!!!!!!!!!!
["./zagluskaa0.log","kor-raj",17,4.0,3.4 ,4.7], //POTYM PERERABIC
["./zagluskab0.log","bir-smy",25,3.5,4.7 ,4.0], //
["./zagluskab0.log","sta-fot",42,3.5,4.2 ,3.0],
["./zagluskac0.log","sme-kaz",34,3.0,4.5 ,2.0],
["./zagluskad0.log","vra-pac",10,5.0,3.7 ,4.8],
["./zagluskae0.log","pri-lub",19,4.0,4.0 ,4.5],			
["./zagluskaf0.log","dog-sme",27,4.6,3.8 ,3.0],
["./zagluskag0.log","kva-cas",35,4.0,4.5 ,4.0],
["./zagluskag0.log","det-pau",29,5.0,3.2 ,4.7],
["./zagluskag0.log","moi-rec",26,4.0,4.1 ,4.6],			
["./zagluskag0.log","zen-rol",25,3.0,3.9 ,3.0],
["./zagluskag0.log","ger-lub",20,4.8,3.7 ,4.5],			
["./zagluskag0.log","avt-sud",16,3.0,3.3 ,2.9],
["./zagluskag0.log","bas-rod",25,4.5,4.9 ,3.8],
["./zagluskag0.log","dog-dja",18,3.5,3.7 ,2.9],
["./zagluskag0.log","sob-aki",19,5.0,2.5 ,5.0],
["./zagluskag0.log","isp-dik",13,4.0,3.5 ,3.8],
["./zagluskag0.log","mat-raj",17,5.0,3.6 ,4.7],
["./zagluskag0.log","det-nar",22,3.0,4.5 ,2.8],
["./zagluskag0.log","dno-mor",21,5.0,3.2 ,4.8],
["./zagluskag0.log","nes-byv",26,5.0,3.1 ,5.0],
["./zagluskag0.log","nit-kov",16,5.0,2.1 ,5.0],
["./zagluskag0.log","neu-pri",30,4.0,4.3 ,3.9],
["./zagluskag0.log","lud-poe",16,4.7,2.7 ,5.0],
["./zagluskag0.log","smy-raz",25,3.0,3.9 ,3.3],
["./zagluskag0.log","moi-rek",40,4.0,3.6 ,2.6],
["./zagluskag0.log","utr-kuk",36,4.5,4.2 ,4.5],
["./zagluskag0.log","zam-bud",21,4.5,3.7 ,3.1],
["./zagluskag0.log","kol-kno",28,4.0,3.9 ,3.6],
["./zagluskag0.log","bub-niz",55,4.0,4.5 ,2.8],
["./zagluskag0.log","ese-sai",10,3.5,3.5 ,3.0],
["./zagluskag0.log","dru-kni",10,3.5,3.5 ,3.0],
["./zagluskag0.log","vid-put",10,3.5,3.5 ,3.0]]}

	args.duration = "neAutoGartanne";
	for(var i=0; i<allNazvyRus.length ; i++) {
	args.malunki[i][1]=allNazvyRus[i];
	args.malunki[i][0]="./allims/"+(i+ValuesByTemy.length)+".jpg"; //JPG
	}
	slideGallery.illustrate(args);	
}









function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById('tableZmest').deleteRow(i);
}
function fabravacCIubracRadkiPaID(indTObyEss,textTObyEss,krasitCIubrac,colorName) {
var naadvar=document.getElementById("idGalkaAdsejac").checked;
if(naadvar) {usePatrebnyaRadkiUZmest = vseIndsIDofRadkiZmest.filter(function(x) { return indTObyEss.indexOf(x) < 0 })}
else {usePatrebnyaRadkiUZmest = indTObyEss};
for (i = 0; i < usePatrebnyaRadkiUZmest.length; i++) { 
//deleteRow(document.getElementById(indices[i].toString()));
console.log(usePatrebnyaRadkiUZmest[i].toString()+'=usePatrebnyaRadkiUZmest[i] to get rowID');
var curRow = document.getElementById(usePatrebnyaRadkiUZmest[i].toString())
if(curRow) {
console.log(document.getElementById(usePatrebnyaRadkiUZmest[i].toString()).id+'=rowID'+'__'+usePatrebnyaRadkiUZmest[i].toString()+'=usePatrebnyaRadkiUZmest[i].toString()');
var curRowIndex = curRow.rowIndex;
console.log(curRowIndex+' =curRowIndex'+'__'+curRow+' =curRow');
if (krasitCIubrac.valueOf() == "znishchyc") {
document.getElementById('tableZmest').deleteRow(curRowIndex);
};
if (krasitCIubrac.valueOf() == "krasit" && !naadvar) {
  //var x = document.getElementById("idDivTZmest").getElementsByTagName("td");
  //x[curRowIndex].style.backgroundColor = colorName; x[curRowIndex].innerHTML = colorName;
  console.log(document.getElementById("id"+usePatrebnyaRadkiUZmest[i].toString())+' =...ElementById("id"+usePatrebnyaRadkiUZmest[i].toString())');
  document.getElementById('tableZmest').rows[curRowIndex].style.backgroundColor = colorName; 
  var curind = usePatrebnyaRadkiUZmest[i];
  if(curind instanceof Array) {curind=curind[0];};
  // document.getElementById('tableZmest').rows[curRowIndex].cells[0].innerHTML = vseIndsTXTofRadkiZmest[vseIndsIDofRadkiZmest.indexOf(curind)]+textTObyEss[i];   
  document.getElementById('tableZmest').rows[curRowIndex].cells[0].innerHTML = vseIndsTXTofRadkiZmest[curind]+textTObyEss[i];   
};}}
}
function titleAndValueByElementAdseu(elemByID) {
//console.log(elemByID+'=elemByID'+'__'+document.getElementById(elemByID)+'=document.getElementById(elemByID)');
//document.getElementById(elemByID).title=mapIDtoTitles.get(elemByID.id).get(document.getElementById("idGalkaAdsejac").checked);
//document.getElementById(elemByID).value=mapIDtoValues.get(elemByID.id).get(document.getElementById("idGalkaAdsejac").checked);
console.log(elemByID+'=elemByID'+'__'+document.getElementById(elemByID.id)+'=document.getElementById(elemByID.id)');
elemByID.title=mapIDtoTitles.get(elemByID.id).get(document.getElementById("idGalkaAdsejac").checked);
elemByID.value=mapIDtoValues.get(elemByID.id).get(document.getElementById("idGalkaAdsejac").checked);
}
function titleAndValueByElementParadak(elemByID) {
elemByID.title=mapIDtoTitles.get(elemByID.id).get(document.getElementById("idGalkaParadak").checked);
elemByID.value=mapIDtoValues.get(elemByID.id).get(document.getElementById("idGalkaParadak").checked);
}

// (С) Алесь Мищенко 
var poluWidth;
var poluMinRazmer;
var poluHeight;
var imgNaRaspovMinRazmer;



var tilicCanv=38;
var adformShyrynjaHolst=337; //537
var adformEffect="staronkaUperad";
var adformVyshinjaHolst=337; //537
var adformChas=5000;
var adformPerahod=2000;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var maxAposhStaronkPeradPershZadnik=45; //const
	var allbackImgs = []; var toReader = [];
var sizeKVARDstr = 5;

	
//netZ vNazvahFailov=12,15,19,29
//de-pa
allbackImgs[8]=["00aDianne Lacourciere.jpg","00bPhilip_Howard.jpg","00dTony_Iwane.jpg","00fPaul_Hughes.jpg","00hIan_Glover.jpg","00jDaisy_Harper.jpg","00lMed_PhotoBlog.jpg","00nRob_Chandanais.jpg","00pKate.jpg","00rOzgur_Mulazımoglu.jpg", "00spostbear eater of worlds.jpg","00tMevout.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",			"00xSofi_Suivre,_Illustration_by_Vladislav_Erko.jpg","00yAuthor_from_movie_Finist_Yasnyy_Sokol,1975.jpg","00zJim_crossley.jpg"];

//vra-pac
allbackImgs[4]=["01bKUUNSTKUULTUR.jpg","01dMariano_Mantel.jpg","01fSIMTHIX.jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																											"01xNima_Fatemi,_Madness_part2.jpg","01yJeremy_Brooks.jpg","01zJoy.jpg"];
//sta-f
allbackImgs[2]=["02aaleks-dralo.jpg","02bAino.jpg","02cAuthor_from_film_Kubanskie_kazaki,_director_Ivan_Pyryev,1950.jpg","02dJames Vaughan.jpg","02eOkinawa_Soba_-_Rob.jpg","02fAshley_Van_Haeften.jpg","02gMarc DUFOURNET,Le Theatre Transformation,representation de Romeo et Juliette.jpg","02hA_Currell.jpg","02iOkinawa_Soba_-_Rob.jpg","02jDan Diffendale.jpg","02kAltamar Trip.jpg","02lAndrey Korchagin, Proryv blokady Leningrada, 18Jan1943,center.jpg","02mAndrey Korchagin, Proryv blokady Leningrada, 18Jan1943,pravy flang.jpg","02nAndrey Korchagin, Proryv blokady Leningrada, 18Jan1943l,levy flang.jpg","02oAuthor,Pervyj kanal,Novosti,Programma Leontjeva Odnako,2014.jpg","02pKaty Warner.jpg","02rMichael Dawes.jpg","02sAuthor, film Matrix by Andy & Larry Wachowski, 1999.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","",					"02xAuthor,movie Podstrochnik,director Oleg Dorman,1997.jpg","02yMichelle_Dockrey.jpg","02zaleks-dralo.jpg"];

//b-sm
allbackImgs[1]=["04bstrange_whispers.jpg","04dakhenatenator.jpg","04eakhenatenator.jpg","04flkajsdfl.jpg","04gakhenatenator.jpg",	"04jMichael Kotter,Pripyat - Rooftop Sign.jpg","04njosemite23.jpg","04pzaleks-dralo.jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																		"04xzenra.jpg","04yJames Vaughan.jpg","04zJames Vaughan.jpg"];
//d-sme
allbackImgs[6]=["05bRichard.jpg","05dTerry_M.jpg","05fMia_Feigelson,Andrew_Wyeth_-_Christmas_morning,1944.jpg","05hdie_minimalistin.jpg","05jjksimpson.jpg","05kLars Stormbom.jpg",	"05lPascal.jpg","05nmoonjazz,Death_and_the_Beautiful_Woman,_fontain_in_Nuremberg.jpg","05pmlhradio.jpg","05rDavid_G_Hawkins,_Angel_of_Death,_Painted_by_Bertram_M_Towle.jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",		"05xClaraDon.jpg","05yCatarina_Carneiro_de_Sousa.jpg","05zen-_ri,_mutant_and_proud.jpg"];

//d-dja
allbackImgs[14]=["06bHoward_Stanbury.jpg","06dMidnight_Believer.jpg","06gstrange_whispers.jpg","06hAdam_Ross.jpg","06iJB,Toronto1.jpg","06jLen_Doc_Radin.jpg","06kCrossett Library,Devil Pumpkin tug-o-war,Halloween postcard,Flagrant,by Marilynn Gelfman Karp,NYAbrams2006.jpg","06lphotographymontreal.jpg","06nRob_Jewitt.jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",								"06xdek_dav.jpg","06yJames_Vaughan.jpg","06zbenjamin_sTone.jpg"]; // DELETED 06f-oriana.italy=C.jpg

//ger-lub
allbackImgs[11]=["07bprince_of_centraxis.jpg","07dPhilippe_Tolet_paintings.jpg","07fAlf_Igel.jpg","07hSari_Choche-Be.jpg","07jNancy_White.jpg","07lraphael_perez.jpg","07nSari_Choche-Be.jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",						"07xPhilippe_Tolet_paintings.jpg","07ySari_Choche-Be_.jpg","07zLoKan_Sardari.jpg"];

//kv-cas
allbackImgs[7]=["08bLucas.jpg","08dDaniel_Arrhakis,The_Empire_Of_Shadows_by_Daniel_Arrhakis.jpg","08fJason_Devitt.jpg","08gDennis Amith.jpg","08hNASA's_Solar_Dynamics_Observatory.jpg","08jNathan_Witch_Doctor.jpg","08lXoan_Baltar.jpg","08nU.S._Geological_Survey,_Kilauea_Lava_Lake.jpg","08pJason_Major,_credit_SDO-NASA,AIA.jpg","08rEdmund_Gall.jpg",".jpg","08sMario,created with Terragen.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",				"08xKazuhiro_Shiozawa.jpg","08yFrancisco_Guevara.jpg","08zBrandon.jpg"];

//sp-raj	17"mat-raj"vNazvahFailov=9
allbackImgs[17]=["09bJustin_Berger.jpg","09dDad_of_T&S.jpg","09fEugenia_Loli.jpg","09hDellboyy_Art.jpg","09hEric_Jusino.jpg","09hstraightfromthecask.jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",														"09xKonstantin_Likhachev.jpg","09yEugenia_Loli.jpg","09zBob_May.jpg"];

//zen-rol
allbackImgs[10]=["10bESPRIT_U2.COM.jpg","10dErin_Nealey.jpg","10fIan_Fuller.jpg","10gDrewXXX.jpg","10hSewPixie.jpg","10jCarlos_Garcia_Campillo.jpg","10lClassic_Film,_Poor_Little_Rich_Girl_movie_1936.jpg","10nDavid_Robert_Bliwas.jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																												"10xAuthor_photo_from_Shallow_Hal_movie.jpg","10yAuthor_photo_from_Irony_of_Destiny_2_movie.jpg","10zGeorge_Weir.jpg"];

//moi-nauc
allbackImgs[9]=["11bfox_fotos.jpg","11dLaurence_Barnes.jpg","11fCarlo_Raso,_Detail_of_the_Tomb_of_the_diver_.jpg","11gpaintings_photos.jpg","11hPetr_Kosina.jpg","11jMarco_Mazzei.jpg","11lraphael_perez.jpg","11nraphael_perez.jpg","11odasnake.jpg","11pDan_Lacey.jpg","11rKain_Drall.jpg","11tjean_louis_maziere,_Antonello_da_Messina,_Saint_Sébastien.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",									"11xEurecat.jpg","11yMargot Trudell.jpg","11zAnne.jpg"];

//basi
allbackImgs[13]=["13bTatters.jpg","13dcambiodia.jpg","13fPatrick_Down.jpg","13gMary_Harrsch.jpg","13hKevin_Nguyen-Tu.jpg","13jcarolyn.jpg","13lJens-Olaf_Walter.jpg","13nUS_Department_of_Agriculture,_Ela_Stein-Weissberger.jpg","13rtheodora.lumi.jpg","13tJames_Vaughan.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",							"13xAndris_Malygin.jpg","13yUS_Loxinha,_Repin,_Ivan_the_Terrible_and_his_Son_Ivan,_1885.jpg","13zNeil_Howard,_Arch_Bay,_Alderney.jpg"];

//gusev
allbackImgs[5]=["14bashtreehouse.jpg","14cDerek Kinzett,Fairy- Mother Sprite commission 2012.jpg","14djaci_XIII.jpg","14eBrotherMagneto.jpg","14fRafael_dP,_Iberia-Hispania,_Parque_Arqueologico_de_Carranque.jpg","14gpatrick verstappen.jpg","14hJohn_Keogh.jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", 										"14xPaul_Lofeodo.jpg","14yMatthew_Kirkland.jpg","14zMatt_Shalvatis.jpg"];

//sob	15"sob-aki"vNazvahFailov=17
allbackImgs[15]=["17bwytze.jpg","17cThruhike98.jpg","17dInternational_Fund_for_Animals.jpg","17fAnimals_Asia.jpg","17hRoan_Retera.jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",			"17xJana.jpg","17yLeJyBy.jpg","17zeugeny-p.jpg"];

//dn	19"dno-mor"vNazvahFailov=18
allbackImgs[19]=["18bjivika.jpg","18dLaurent_Fintoni.jpg","18fJim_Howard.jpg","18gBen_Raynal.jpg","18hTrey_Ratcliff.jpg","18iJason Bowler.jpg","18jBruno_Casonato.jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																			"18xPaladin27.jpg","18yjaci_XIII_Suivre,_A_cry_in_the_night.jpg","18zOle_Petter_Rust.jpg"];

//isD	16"isp-dik"vNazvahFailov=20
allbackImgs[16]=["20bKatie_Harbath.jpg","20dEric_Mesa.jpg","20famaz.jpg","20hMo_Riza.jpg","20jClint_Gardner.jpg","20lEvan_Long.jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																			"20xJolien_Van_Houtven.jpg","20yEd_Yourdon.jpg","20z1000_anuncios_de_publicidad_y_mas.jpg"];

//sme-kaz
allbackImgs[3]=["21bBest Picko,bestpicko.com.jpg","21cDerek K. Miller.jpg","21dAuthor,_Karnavalnaja_noch_movie,director_Rjazanov.jpg","21eWellcome_Images.jpg","21fBen_Raynal.jpg","21gMiyaoka_Hitchcock.jpg","21hMiyaoka_Hitchcock.jpg","21iLiz Wade.jpg","21jBeverly_Vealach.jpg","21kChris Phutully.jpg","21lGideon_Wright.jpg","21mGreg Mills.jpg","21nA K M Adam.jpg","21oBart.jpg","21pjean louis mazieres, William Blake,God Judging Adam,1795.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",											"21xSIMTHIX.jpg","21yRoger Mommaerts.jpg","21zbbyrnes59.jpg"];

//denar	18"det-nar"vNazvahFailov=22
allbackImgs[18]=["22bMichael_Kappel.jpg","22dChristiaan_Triebert.jpg","22fLynda_Giddens.jpg","22hAnke_L.jpg","22jAmy_Goodman.jpg","22lNaomiPeacockPhotography.jpg","22nFoto_Moskvy,Moscow-Live.ru.jpg","22pDigital_Archaeology.jpg","22rVlad_Tuchkov.jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																							"22xFoto_Moskvy,Moscow-Live.ru.jpg","22yKarilyn_Kempton.jpg","22zDan_Zelazo.jpg"];

//nit-kov	21"nit-kov"=23
allbackImgs[21]=["23bAndrea_Mucelli.jpg","23dAitivamon_NATURE.jpg","23fWolfgang_Sterneck,A_Reality_called_Boom,Visions-Boom-2014,Android_Jones.jpg","23hEdmund_Gall.jpg","23jMaX_Fulcher,Paul_Gauguin,_Two_Tahitian_Women.jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																							"23xg0d4ather.jpg","23yAmy_Wharton.jpg","23zShyralei_Resident,Dancing_with_the_Heavens,REALM_of_MYSTARA_NORTH.jpg"];

//obe	22"neu-pri"vNazvahFailov=24
allbackImgs[22]=["24bErin_Nekervis.jpg","24drui_barros.jpg","24fAuthor,_Patsany_movie,director_Priemykhov.jpg","24hJohn_Hartnup.jpg","24jMiyaoka_Hitchcock.jpg","24ldomat33f.jpg","24nMayu_Shimizu.jpg","24pAuthor,_V_ne_vole_movie.jpg","24rIkhlasul_Amal.jpg","24tMiyaoka_Hitchcock.jpg","24uWalters_Art_Museum,LabBodies.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																"24xCorwin_I.jpg","24yAuthor,_Delai_raz_movie,director_Maljukov.jpg","24zBob Jagendorf.jpg"];


//star
allbackImgs[23]=["25bEyal_Teutsch.jpg","25dSeb_Fowler.jpg","25estefanochu.jpg","25fDavid_Gubler.jpg","25hTimon91.jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",				"25xKonstantin.jpg","25yTomky.jpg","25zSerenity_Ibsen.jpg"];

//smy-raz
allbackImgs[24]=["26bmsu.ru.jpg","26ddubrovinlab.msu.ru.jpg","26finternat.msu.ru.jpg","26gRalph_Sanderson,Bob_hawke_-_museum_of_australian_democracy.jpg","26hMd_Saidul_Islam,_Sheikh_Mujibur_Rahman.jpg","26lCN_NG._Edmund_Burke.jpg","26nSoutheast Asian Fisheries Development Center Aquaculture Department, Sen Edgardo Angara.jpg","26pAuthor,Pervyj kanal,Novosti,Programma Leontjeva Odnako,2014.jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																						"26xphys.msu.ru.jpg","26ypshab,_Detail_in_apes_running_parliament,_by_Bansky.jpg","26zMatthew_Stinson.jpg"];
//za-bud
allbackImgs[27]=["27bAaron_Cheng.jpg","27dIan_T_Edwards.jpg","27fPaul_Townsend.jpg","27hJonathan_Melhuish.jpg","27jErin_Nekervis.jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																	"27xPhotos_of_the_Past.jpg","27yYangTS.jpg","27zPeter_Kirkeskov_Rasmussen.jpg"];





//++++++++++++  SVERHU ETOGO ZAMENA BEZ STAROI KOPII      ++++++++++++++++

//kol-kn
//STARYbylo allbackImgs[28]=[  "28bM_Cheng.jpg","28dWayan_Vota.jpg","28fWaleed_Alzuhair.jpg","28hacb,_Fragment_of_advertisement.jpg","28jJames_Vaughan.jpg","28lbright_strangely.jpg","28nElisa_Speranza.jpg","28pClint_Chilcott.jpg","28rjim_crossley.jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																										"28xAuthor_from_movie_Perestupit_chertu,_Director_Koltun,1985.jpg","28yobject,_Promised,_Destroyed.jpg","28zTimothy_Takemoto.jpg"];
allbackImgs[28]=["28bM_Cheng.jpg","28cBmazing.jpg","28dtommy.jpg","28eWayan_Vota.jpg","28fWaleed_Alzuhair.jpg","28hacb,_Fragment_of_advertisement.jpg","28jJames_Vaughan.jpg","28lbright_strangely.jpg","28nElisa_Speranza.jpg","28pClint_Chilcott.jpg","28rjim_crossley.jpg",".jpg","28sYangTS,galaxy-wallpaper-6.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",																										"28xAuthor_from_movie_Perestupit_chertu,_Director_Koltun,1985.jpg","28yobject,_Promised,_Destroyed.jpg","28zTimothy_Takemoto.jpg"];

//ko-raj
//STARYbylo allbackImgs[0]=[  "03bMichael_Kreibohm.jpg","03dDoug_DuCap.jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","03xTed_McGrath.jpg","03yJonathan_Taglione.jpg","03zMichael_Cramer.jpg"];
allbackImgs[0]=["03aAuthor, The Lion King by Allers & Minkoff, Disney, 1994.jpg","03bAuthor, The Lion King by Allers & Minkoff, Disney, 1994.jpg","03dSean.jpg","03eDoug_DuCap.jpg","03fTed_McGrath.jpg","03hjobrowski35.jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",			"03xAuthor,The_Lion_King_by_Allers&Minkoff,Disney,1994.jpg","03yJonathan_Taglione.jpg","03zMichael_Cramer.jpg"];

//ut-kuk
allbackImgs[26]=[  "16byour_neighborhood_librarian,_Black_Cherry_Puppet_Theater.jpg","16dOltre_l_Occidente,_Marionette_in_liberta.jpg","16fThomas_Hawk.jpg","16hMatt_Werner,_Mandalay_Marionettes.jpg","16jDuncan_Rawlinson,_Burning_Man_2017.jpg","16lGiorgia_Pallaro,_intersections.jpg","16nFranck_Minez.jpg","16phipponotized.jpg","16rcachecache,_chisinau_puppet_theatre.jpg","16tAndrea_Maria_Cannata.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",				"16xAli_Eminov,_Czech_and_Slovak_Museum.jpg","16ybyronv2,_Fringe_2010.jpg","16zskinnybrager.jpg"];
//allbackImgs[26]=["16byour_neighborhood_librarian,_Black_Cherry_Puppet_Theater.jpg","16dOltre_l_Occidente,_Marionette_in_liberta.jpg","16fThomas_Hawk.jpg","16hMatt_Werner,_Mandalay_Marionettes.jpg","16jDuncan_Rawlinson,_Burning_Man_2017.jpg","16lGiorgia_Pallaro,_intersections.jpg","16nFranck_Minez.jpg","16phipponotized.jpg","16rcachecache,_chisinau_puppet_theatre.jpg","16tAndrea_Maria_Cannata.jpg","","","","","","","","","","","","16xAli_Eminov,_Czech_and_Slovak_Museum.jpg","16ybyronv2,_Fringe_2010.jpg","16zskinnybrager.jpg"];

//ne-by	20"ne-by"vNazvahFailov=19 ????????????????????????????????????????   "40xTee Vincent.jpg",
allbackImgs[20]=["40bJenny Mealing.jpg","40cMike Mozart.jpg","40dAlvin Smith.jpg","40eAlvin Smith.jpg","40fCLAUDIA DEA.jpg","40hAbu Hasan Mehedi.jpg","40gMarco Verch.jpg","40jMike Mozart.jpg","40kMike Lewinski.jpg","40lMike Lewinski.jpg","40mCLAUDIA DEA.jpg","40oEdward Zulawski.jpg","40purbanartcore.eu.jpg","40yBen Robinson.jpg","40qNASA Goddard Space Flight Center.jpg","40rHenry Hemming.jpg","40sMike Willard.jpg","40tGiles Turnbull.jpg","40ufdecomite.jpg","40vHenry Hemming.jpg","40wSeb.jpg","40xTee Vincent.jpg","","","","","","","","","","","","",			"40iPrayitno.jpg","40nRenaud Camus,Le Jour ni l’Heure, by Hubert Robert, Vue de Montagne avec glacie.jpg","40zLauri Sten.jpg"];
//allbackImgs[20]=["40aPrayitno.jpg","40bJenny Mealing.jpg","40cMike Mozart.jpg",".jpg","40dAlvin Smith.jpg","40eAlvin Smith.jpg","40fCLAUDIA DEA.jpg","40gMarco Verch.jpg","40hAbu Hasan Mehedi.jpg","40iPrayitno.jpg","40jMike Mozart.jpg","40kMike Lewinski.jpg","40lMike Lewinski.jpg","40mCLAUDIA DEA.jpg","40nRenaud Camus,Le Jour ni l’Heure, by Hubert Robert, Vue de Montagne avec glacie.jpg","40oEdward Zulawski.jpg","40purbanartcore.eu.jpg","40qNASA Goddard Space Flight Center.jpg","40rHenry Hemming.jpg","40sMike Willard.jpg","40tGiles Turnbull.jpg","40ufdecomite.jpg","40vHenry Hemming.jpg","40wSeb.jpg","40xTee Vincent.jpg","40yBen Robinson.jpg","40zLauri Sten.jpg"];
//UBRANO  1e 

//bub-niz
allbackImgs[29]=["42aAuthor, film Matrix by Andy & Larry Wachowski, 1999.jpg","42bSergio Ceron.jpg","42cSteve Rhodes.jpg","42dJedimentat44.jpg","42eChris Phutully .jpg","42eEwan Munro.jpg","42eJean-Pierre Dalbera.jpg","42eKeijo Knutas,1941 Ne boltai by Vatolina N.N., Denisov N.V.jpg","42fDefence Images.jpg","42gAndrew FastLizard4 Adams.jpg","42gGordon Dymowski.jpg","42hChris Phutully.jpg","42iAuthor,Pervyj kanal,Novosti,Programma Leontjeva Odnako,2014.jpg","42jKonstantin_Likhachev.jpg","42kAuthor, film Matrix by Andy & Larry Wachowski, 1999 - Copie.jpg","42lXeni Jardin,Hotshot the Robot, at Coachella, 2007.jpg","42mWeb Summit.jpg","42nThomas Hawk.jpg","42oFort Belvoir Community Hospital.jpg","42pTimo.jpg","42sR.Crap Mariner.jpg","","","","","","","","","","","","","","","","","","","","","","","","","",									"42xAuthor, film Matrix by Andy & Larry Wachowski, 1999.jpg","42yJenni Konrad.jpg","42zEric Richards.jpg"];
//avSud
allbackImgs[12]=[														   "12bAuthor, film Black Book by Paul Verhoeven,2006.jpg","12cAuthor, film Black Book by Paul Verhoeven,2006.jpg","12dDavid Rothwell.jpg","12eChris Chabot.jpg","12fDavid Campbell.jpg","12gTribes of the World.jpg",							"12jAuthor, film Black Book by Paul Verhoeven,2006.jpg","12kAuthor, film Dorogaja Elena Sergeevna by Eldar Rjazanov,1988.jpg","12lAuthor, film Dorogaja Elena Sergeevna by Eldar Rjazanov,1988.jpg","12mEx-InTransit.jpg","12nCassowary Colorizations.jpg","12oMike Ensor.jpg","12pNicolas Mirguet.jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",					"12aAuthor, film Black Book by Paul Verhoeven,2006.jpg","12iAndry Fridman.jpg","12qPaulo Alegria.jpg"];
//allbackImgs[12]=["12aAuthor, film Black Book by Paul Verhoeven,2006.jpg","12bAuthor, film Black Book by Paul Verhoeven,2006.jpg","12cAuthor, film Black Book by Paul Verhoeven,2006.jpg","12dDavid Rothwell.jpg","12eChris Chabot.jpg","12fDavid Campbell.jpg","12gTribes of the World.jpg","12iAndry Fridman.jpg",	"12jAuthor, film Black Book by Paul Verhoeven,2006.jpg","12kAuthor, film Dorogaja Elena Sergeevna by Eldar Rjazanov,1988.jpg","12lAuthor, film Dorogaja Elena Sergeevna by Eldar Rjazanov,1988.jpg","12mEx-InTransit.jpg","12nCassowary Colorizations.jpg","12oMike Ensor.jpg","12oMike Ensor.jpg","12qPaulo Alegria.jpg","","","","","",".jpg",".jpg",".jpg"];



//netZadnikov v=25,	30,31,32
//moi-rek
allbackImgs[25]=["41bClassic Film, 1958 Beauty Ad, Dorothy Gray Satura Moisture Cream, with Elegant 1950's Super-Model Anne St. Marie.jpg","41bClassic Film, 1966 Cosmetics Ad, Helena Rubinstein Tulips Colors for Lips & Nails.jpg","41cIan D. Keating.jpg","41dBob Peters.jpg","41dStephen Downes.jpg","41eJohnLocke.jpg","41eR. Crap Mariner.jpg","41fliborius.jpg","41gJames Vaughan.jpg","41gKumar's Edit.jpg","41gRonan Shenhav.jpg","41gWonder Woman,Angelicka.jpg","41gWonder Woman,Olesya.jpg","41hoBev Sykes.jpg","41hThomas Euler.jpg","41iHernan Pinera, Anna Bolena.jpg","41jEddie Lawrance.jpg","41kAndor Kish, Warwick Castle.jpg","41kjoan vila.jpg","41lBart.jpg","41lWonder Woman, Irina.jpg","41mEwen Roberts.jpg","41nEl Sabroso.jpg","41oDavid de Lara, model Samantha Valeria, hair & make up Tami Milicia.jpg","41pJose Gallego.jpg","41rYangTS,galaxy-wallpaper-6.jpg","41smriggen.jpg","41tGreg Walters.jpg","41uPhilip McMaster.jpg","41uTorsten Mangner.jpg","41wSuneel Madhekar.jpg","41xmoonjazz.jpg","41yXudong Zhai, Church next to Lake Tekapo.jpg","",		"41xAuthor,Futurama by Matt Groening,Fox BC,1999-2003.jpg","41yconorwithonen, Buckman Flair Promo.jpg","41zGiuseppe Milo.jpg"];



//ese-sai
allbackImgs[30]=[".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",".jpg",".jpg",".jpg"];
//dru-kn
allbackImgs[31]=[".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",".jpg",".jpg",".jpg"];
//vid-put
allbackImgs[32]=[".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg",".jpg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",".jpg",".jpg",".jpg"];

var indZadnika=maxAposhStaronkPeradPershZadnik+1;	
	var strBack;
	var strOrig ;	
var parms;
//neIspolzOldVerOfCol var YellowLine
//neIspolzOldVerOfCol var AquaLine
//neIspolzOldVerOfCol var BurlyWoodLine
//neIspolzOldVerOfCol var ChartreuseLine
//neIspolzOldVerOfCol var CornflowerBlueLine
//neIspolzOldVerOfCol var DarkGreyLine
//neIspolzOldVerOfCol var DarkOrangeLine
//neIspolzOldVerOfCol var FuchsiaLine
//neIspolzOldVerOfCol var DarkSeaGreenLine
//neIspolzOldVerOfCol var DarkSalmonLine
//neIspolzOldVerOfCol var BlueVioletLine
//neIspolzOldVerOfCol var PaleGoldenRodLine
//neIspolzOldVerOfCol var AquamarineLine
//neIspolzOldVerOfCol var GoldenRodLine
//if (typeof(window.$) != "function") var $ = function (id) {return document.getElementById(id);}  // wrap getElementById
slideGallery = function () {
//					[00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
//neIspolzOldVerOfCol YellowLine=			[[0,1,2,3,4,5],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol AquaLine=			[[],[1,2,3,4,5],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol BurlyWoodLine=		[[],[],[2,3,4,5],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol ChartreuseLine=		[[],[],[],[3,4,5],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol CornflowerBlueLine=	[[],[],[],[],[4,5],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkGreyLine=		[[],[],[],[],[],[5],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkOrangeLine=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol FuchsiaLine=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkSeaGreenLine=	[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkSalmonLine=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol BlueVioletLine=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol PaleGoldenRodLine=	[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol AquamarineLine=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol GoldenRodLine=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];


//1,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
LepshPerehodyPaRaspovIstaronke=[
[08,08,26,26,12,12,29,07,07,07,12,25,13,12,02,26,08,			18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,		   45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[14,14,24,02,13,13,02,18,13,02,14,14,07,07,25,06,25,25,02,02,02,25,02,25,20,		    26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,		   50,51,52,53,54,55,56,57,58,59,60],
[01,01,01,20,20,14,25,25,25,13,13,03,01,01,03,13,11,13,14,13,13,13,20,20,20,13,13,12,12,07,07,18,18,18,07,07,20,29,20,24,24,24,			   43,44,45,46,47,		   48,49,50,51,52,53,54,55,56,57,58,59,60],
[06,06,08,08,30,30,30,30,07,07,08,26,07,07,26,07,07,31,00,00,07,22,22,22,22,01,01,01,00,00,28,28,13,13,			   35,36,37,38,39,40,41,42,43,44,		   45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[02,20,20,28,28,17,28,23,11,20,			   11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,		   43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[19,25,25,21,02,20,20,21,22,20,20,10,00,20,26,10,10,26,04,			  20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,		   48,49,50,51,52,53,54,55,56,57,58,59,60],
[17,17,02,02,04,17,09,15,27,27,12,12,27,27,04,00,00,00,00,04,04,27,27,27,27,27,23,23,			 29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,		   44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[17,28,20,28,28,28,28,04,04,12,12,12,02,03,03,28,09,09,17,28,03,03,28,06,17,03,03,28,28,06,06,06,06,06,			   35,36,37,38,39,40,41,		   42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[16,04,06,04,19,16,16,17,17,18,04,20,04,18,17,28,28,20,20,20,10,10,10,30,30,00,00,00,00,			30,31,32,33,34,35,36,37,38,		   39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[08,31,31,13,26,22,14,14,14,14,22,22,22,22,22,22,26,26,26,22,22,11,26,26,25,25,25,			  28,29,30,31,32,33,34,35,36,37,38,39,40,		   41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[27,21,17,12,09,03,03,03,03,03,28,28,14,28,08,17,23,23,20,20,12,28,07,07,07,			26,27,28,29,30,31,32,33,34,35,36,		   37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[25,25,19,19,17,17,09,19,09,25,25,21,21,25,25,26,26,09,22,22,			 21,22,23,24,25,26,27,28,29,30,31,32,33,34,		   35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[10,10,10,24,24,19,19,17,05,05,18,19,19,17,07,07,			 17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,		   33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[20,20,02,22,22,12,08,01,01,22,22,01,01,08,29,29,08,08,15,07,07,05,05,08,21,			26,27,28,29,30,31,32,33,34,35,36,		   37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[16,06,06,02,01,13,01,01,02,02,31,25,25,06,06,20,20,20,			   19,20,21,22,23,24,25,26,27,28,29,30,		   31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[06,06,20,08,00,28,00,28,28,00,00,07,07,00,00,28,19,21,21,			  20,21,22,23,24,25,26,27,28,29,30,31,32,		   33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[14,14,05,18,18,14,08,24,08,04,17,17,17,		    14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,		   30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[24,24,08,08,25,19,19,20,24,11,24,11,07,07,19,08,19,			18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,		   33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[13,13,29,16,23,16,08,08,02,01,17,17,27,27,27,13,16,16,15,15,19,19,			   23,24,25,26,27,28,29,30,		   31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[17,17,20,20,22,22,26,24,22,08,26,11,11,26,21,21,21,22,22,21,21,				  22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,		   37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[25,00,17,00,00,23,10,25,25,17,25,12,12,12,25,25,28,28,19,19,19,25,25,25,25,25,				   	 27,28,29,30,31,32,33,34,35,36,37,38,39,40,		   41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[19,19,19,15,15,15,04,05,05,11,11,11,23,05,11,11,				   17,18,19,20,21,22,23,24,25,26,27,28,29,30,		   31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[24,09,00,00,24,24,24,16,09,04,03,04,04,10,01,24,04,01,08,09,00,03,16,29,10,24,29,03,03,03,					 31,32,33,34,35,36,37,38,39,40,		   41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[20,20,21,25,04,20,25,20,04,15,15,					12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,		   32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[02,02,02,22,19,19,09,04,29,29,16,16,16,22,22,09,09,09,09,09,09,09,09,15,15,				  26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,		   42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[20,20,20,20,24,17,11,11,29,29,29,29,20,12,12,08,08,08,29,02,02,02,02,02,26,26,26,09,09,28,28,28,28,15,15,15,15,15,15,15,				   41,42,43,44,		   45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[08,00,00,08,08,09,09,17,24,21,11,24,09,09,28,28,28,09,24,09,24,09,09,09,00,08,09,24,24,24,24,20,09,08,20,20,				   37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,		   54,55,56,57,58,59,60],
[14,24,21,12,12,12,28,28,20,06,04,04,10,12,10,10,04,12,12,12,12,				  22,23,24,25,26,27,28,29,30,31,32,33,		   34,35,36,37,38,39,40,41,42,		   43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[16,02,00,22,00,22,22,09,11,03,04,26,02,07,17,17,02,02,17,17,07,23,23,23,27,27,27,27,			29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,		   45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[17,17,17,17,25,24,26,26,01,26,26,06,06,06,06,26,26,06,06,06,06,06,06,06,01,14,14,01,13,13,13,13,23,23,23,00,00,17,17,26,26,06,06,			44,45,46,47,48,49,50,51,52,53,		   54,55,56,57,58,59,60],
[25,00,17,00,00,23,10,25,25,17,		   25,12,12,12,25,25,28,28,19,19,19,25,25,25,25,25,				27,28,29,30,31,32,33,34,35,36,37,38,39,		   40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[19,19,19,15,15,15,		   04,05,05,11,11,11,23,05,11,11,				17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,		   40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[24,09,00,00,		   24,24,24,16,09,04,03,04,04,10,01,24,04,01,08,09,24,03,16,29,10,24,29,03,03,03,							31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,		   47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[20,20,21,		   25,04,20,25,20,04,15,15,				12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,		   44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
[02,02,02,22,19,19,09,04,29,		   29,16,16,16,22,22,09,09,09,09,09,09,09,09,15,15,				26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,		   50,51,52,53,54,55,56,57,58,59,60],
[20,20,20,20,24,		   17,11,11,29,29,29,29,20,12,12,08,08,08,29,02,02,02,02,02,26,26,26,09,09,28,28,28,28,15,15,15,15,15,15,15,				41,42,43,44,45,		   46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
];


CvetaPerehoda=
[[[8],[26],[12],[29],[7],[25],[13],[10],[2],[32]                      ,[13]],//0
[[14],[24],[6],[2],[13],[18],[7],[25],[20]					,[25],[20]],
[[1],[20],[14],[25],[13],[3],[23],[11],[12],[7],[28],[29],[16],[24]				,[29],[18]],
[[6],[8],[30],[7],[31],[26],[0],[22],[1],[28],[15],[32]					,[32],[13]],//3
[[2],[20],[18],[17],[28],[23],[11]					],
[[4],[19],[21],[2],[20],[22],[25],[10],[0],[26]					],//5
[[17],[2],[4],[9],[15],[27],[12],[0],[21]					,[23]],
[[17],[28],[20],[12],[4],[2],[3],[9],[13],[22],[29],[31]					,[9],[3],[6]],
[[16],[4],[6],[19],[17],[18],[28],[20],[10],[0],[30]					],
[[8],[13],[26],[22],[1],[14],[18],[28],[11],[19],[15],[31]					,[25],[21]],
[[27],[21],[17],[12],[9],[3],[8],[28],[14],[23],[20],[7]					],//10
[[25],[26],[17],[9],[19],[21],[22]					],
[[10],[24],[19],[17],[5],[18],[6],[7]					],//12
[[20],[2],[8],[22],[12],[1],[29],[15],[7],[5],[21]					],
[[16],[6],[2],[1],[13],[31],[25],[7],[29],[8],[20]					],
[[6],[20],[8],[0],[28],[7],[19],[21]					],//15 corrected 14->6
[[14],[5],[18],[8],[4],[24],[0],[17]					],
[[24],[8],[25],[19],[20],[11],[7],[26]					],
[[13],[29],[23],[16],[8],[2],[1],[17],[27],[30],[15],[22],[19]					],
[[17],[20],[22],[24],[26],[8],[11],[21]					],//19 pervyje tri plus
[[25],[0],[12],[23],[10],[17],[5],[27],[19],[15]					,[28]],
[[19],[15],[4],[5],[11],[23]					],//21 nit dobavlena
[[24],[9],[16],[4],[3],[10],[8],[1],[0],[14],[31]					,[29]],
[[20],[21],[25],[15],[4],[2],[30]					],
[[2],[22],[19],[7],[4],[29],[16],[9],[15]					],
[[20],[24],[17],[11],[12],[29],[8],[2],[26],[9],[28],[15]					],//25
[[8],[0],[9],[17],[24],[21],[11],[28],[31],[20]					],
[[14],[24],[21],[17],[6],[12],[28],[20],[4],[22],[10]					],
[[16],[2],[0],[22],[9],[11],[26],[4],[3],[7],[17],[23],[27]					],
[[17],[25],[24],[26],[6],[1],[14],[13],[23],[0],[32],[9],[15]					],
[[31],[32]],//30
[[30],[32]],
[[30],[31]]
];
SlovaPerehoda=[//---------------------------------   0
["Мы все были изгнаны из рая. И это было детство:",
"Мы — не плохие и не хорошие, мы — куклы, чьи оскалы и улыбки нарисованы кукольником-судьбой:",
"Самый свободный выбор — это жанр своей судьбы(комедия, трагедия, фарс,...), ведь всё остальное зависит не только от нас:",
"Людям всё скучнее распутывать сеть причин, и им предлагают готовую матрицу мнений: что ни произойдёт - ясно кто виноват:",
"Если бы люди, как актёры своих судеб, как взаимозаменяемые микрочастицы истории, поменялись бы на миг местами — всем открылся бы замысел пьесы:",
"Вся жизнь — театр, всё счастье — реклама:",
"Победители строят на руинах. Внизу остаётся не только культурный слой из разбитых черепков, но и ад из погребённых душ и забытых культур:",
"За каждой ролью, которую мы играем в жизни, стоит, как сценарист, та любовь или нелюбовь которую мы получили в детстве:",
"Культуры уходят, оставляя лишь сухие факты, по которым не понять тех людей, не проследить ту логику в которой они мыслили, не ощутить тех чувств:",
"Путешествуя по южной Африке рано или поздно понимаешь что этот благоприятный климат и этот лес по которому можно ходить босиком — и есть твоя биологическая родина:",

"Споры 'кто добро, а кто зло' всегда в истории разрешались убийством. Поэтому она - нескончаемые переодевания зла в добро:"
],//-----------   1
["Продажа души дьяволу - не миф, это происходит вокруг, просто незаметно:",
"Инопланетяне, наблюдая за нами, видят то же что мы видим в зоопарке:",
"Ожидание смерти делает из человека камикадзе, отрешённо идущего по корридору смерти — неважно по тюремному или в доме престарелых:",
"Во взгляде людей на старых фотографиях видна душа эпохи. Их зрачки — микроскопические чёрные дыры, ведущие в тот мир:",
"Музеи - могилы миров, погребенных нами:",
"Ценности всех цивилизаций одинаковы, просто названы разными словами. Цивилизации разделяются только потому что не понимают друг друга:",
"Как микрочастице подходит любой атом, так и человеку — любой смысл жизни, чтобы ни предложило ему общество:",
"Пропаганда - это реклама, только не товаров, а смыслов. Но тоже для выгоды:",
"Образы счастья на телеэкране уже настолько профессиональны и привлекательны, что заменили собственые мечты:",

"Пропаганды рекламируют смыслы жизни - так же как фирмы рекламируют свои марки:",
"Счастье - это мираж, и поэтому оно всегда не в руках, а на горизонте:"
],//-----------   2
["Египетские фрески — это древние фотографии. Там, в глазах, так же как и на современных фотошедеврах, виден странный внутренний мир строителей пирамид:",
"Внутренний мир людей прошлого похож на твою несбывшуюся судьбу: кажется такие миры всё ещё где-то существуют, и можно оказаться там, одним усилием воображения:",
"Души (как и целые культуры) исчезают, крадутся и продаются — но такие новости доходят к нам из того мира только в виде мифов:",
"В старых советских фильмах всё так здорово что даже неправдоподобно - так сейчас бывает только в рекламе. Это и была реклама: реклама той страны:",
"Цивилизации забываются бесследно, подменяются нашими стереотипными представлениями. История - это и есть смерть и подмена цивилизаций:",
"Человек - тонкая кожа над  хаосом своего подсознания. И все звериные инстинкты прорываются наружу преступлениями:",
"Культуры мимолётны как пейзаж за окном поезда. И не понять, не дотянуться до  людей прошлого — как до тех провожающих что остались навсегда на перроне:",
"Сердцу не прикажешь — потому что у него свой командир. Ему приказывает равнодушная природа:",
"Человек, как и страна, сам выбирает своё прошлое — на мемуарах, как и на учебниках истории, можно написать лишь «основано на реальных событиях»:",
"Душа человека подходит любой судьбе в любой истории — как микрочастица подходит любому атому в любом веществе. Нас всех, как квантовые частицы, можно поменять местами:",
"Человек создан природой чтобы приспосабливаться. Он приспосабливает душу к судьбе и видит себя совсем не так как окружающие:",
"Мы уже создали «Матрицу» для управления нами, приготовив всё для грядущего искусственного интеллекта, порабощающего человечество:",
"Футурология может показать будущее, но мы поймём в показанном нам мире не больше попавших в цивилизацию дикарей:",
"Все видят разный смысл — в фильмах, книгах,... И даже в простом разговоре собеседники говорят о разном:",

"Пока непонятно кто в будущем будет иметь душу - наши разленившиеся потомки или потомки наших смартфонов и пылесосов:",
"Формирующийся сегодня народ будет чувствовать себя завтра одиноким и непонятым:"
],//-----------   3
["В ожидании смерти — и перед казнью, и просто в старости — появляется безучастность, заканчивающаяся добровольным принятием судьбы:",
"Взрослые — это дети, вооружившиеся против неприветливого мира:",
"Народы, как и люди, могут страдать от амнезии, забывая своё имя, свой язык и историю (двулинейная книга «Бомба Федоровича»):",
"Под воздействием животных импульсов, человек меняет состояния — как меняет под воздействием физических импульсов своё состояние квантовая микрочастица:",
"В обществе будущего будут другие ценности и богатства, а значит и  другая преступность (футурологическая книга):",
"Мы — марионетки в руках природы:",
"Каждый попадает в свой водоворот судьбы — и преступники и жертвы. И началась эта распутица ещё во времёна райского первобытного детства:",
"Понятно почему справедливости нет в обществе — ей просто неоткуда было взяться, её никогда небыло в природе. Наоборот, непонятно откуда она появилась как идея в некоторых головах:",
"Если государство не обеспечивает сохранность жизни, то оно начинает придумывать смыслы, за которые можно умереть:",
"Боязнь причинить вред ближнему заменит боязнь перед УК. Это  кнопка, изменящая в будущем и внутренний мир человека, и строение общества:",
"Будущую эру милосердия можно почувствовать уже сейчас — в глазах людей или животных к которым проявляешь сострадание:",
"Нейро-эксперименты углубляются всё дальше в тайны ума. А с другой стороны, в глубинах души копается культура. Эти два туннеля могут встретиться (организация экспериментов):",

"Нейроэксперименты показывают иллюзорность и необъективность всего что мы чувствуем и понимаем как 'Я':",
"Желание построить окончательное и справедливое и счастливое общество - одна из причин нескончаемой смены эпох в истории:"
],//-----------   4
["Не понять внутренний мир людей прошлого. События остаются в истории, а души — нет:",
"Неудовлетворённость и несбывшееся пробуждает душу и зовёт её в иные миры — и только так, в стремлении к чему-то «не от мира сего» она рождается и растёт вместе с человеком:",
"На чужбине внезапно ощущается что у тебя внутри есть что-то чего нет у окружающих. И внезапно оказывается что это тяжело — не находить своё отражение в людях, как не находят его мающиеся вечностью вампиры:",
"Интеграция в ячейки общества постепенно заменяет человеку его собственные, менее конкректные, мечты:",
"Никто не знает что внутри другого и как он видит себя самого. Всякое сумасшествие смотрится изнутри как гениальность, всякое преступление — как выживание и самооборона:",
"Смотришь вслед поезду - и чувствуешь внутри это древнее счастье первопроходцев: уехать отсюда туда — куда бы это ни было:",
"Воображение нам дано для того чтобы раскрашивать простые программы природы, превращая их яркие эмоции и глубокие чувства:"
],//-----------   5
["Сны похожи на фантазии гения, ведь также непонятно: то ли это шестое чувство то ли просто бред и сумасшествие:",
"Вся культура — это попытки вспомнить и рассказать сон о любви, спустившийся из другого мира:",
"После расставания, как после сна, тает совместный мир, сквозь который, постепенно, проступает неприветливая и несказочная реальность:",
"Во взгляде человека, как на старых фотографиях, проглядывает чужой, неизвестный, но затягивающий своей тайной, мир:",
"Зрачок женщины — чёрная дыра в пространстве, ведущая в другой мир, в несбывшееся счастье, которое будет безвозвратно упущено уже в следующий миг:",
"То ожидание отношений, которое существует где-то в глубине души, никогда не осуществляется - ни в конкурентном и иерархичном обществе ни в жестокой природе:",
"Женский взгляд так привлекателен потому что это реклама. Обманчивая реклама будущего счастья:",
"Всех актрис и актёров распределяет на роли их детство, определяющее их характер и типаж:",
"Водовороты жизни несут нас в разные стороны. И всё началось ещё в нашем далёком африканском детстве:",
"Весь мир — кукольный театр, и мы в нём марионетки:"
],//-----------   6
["Фильмы и телевидение заменяют зрителю и подвиги и любвь. Вместо того чтобы искать их в своей жизни, человек ищет себя в готовых телесюжетах и киногероях:",
"Не понять внутренний мир людей прошлого, оставшихся теперь только на экране. События остаются в истории, внешность запечатляется на плёнке, а души исчезают бесследно:",
"Чувство смерти, как любое шестое чувство или сумасшествие, замыкает человека в себе и делает его чужим для окружающих:",
"В программах природы есть свои ошибки, которые становятся нашим характером, нашими желаниями и страхами:",
"В приюте для старых собак можно увидеть то же ожидание смерти и примерение с судьбой что и доме престарелых:",
"Добившиеся успеха утверждают что их судьба — результат веры в себя. Но скорее наоборот: успешная судьба питает веру... Судьба и характер; отсутствие перспектив и пьянство — что чья причина?:",
"В голове всё согласуется со всем. Так воспоминания и ощущение успеха или несчастья взаимно подстраиваются, изменяя друг друга, выстраивая, из хаоса жизни, логичную биографию:",
"Мы все упали в водоворот жизни с райского, поросшего пальмами, берега детства:",
"Не только в конце, но и в течении жизни, внешнее умирает, а внутренее остаётся — как остаётся внутри общий мир после расставания:",

"Вырваться из своего мира - как выпрыгнуть с поезда: можно погибнуть или выжить, но в любом случае это навсегда:"
],//-----------   7
["Телезритель, как квантовая частица, находится в смешанном состоянии -  одновременно и перед и за экраном:",
"Мы не знаем кто мы - пока судьба не включит нас, как робота, нажав на кнопку того или иного поведения:",
"Мечты — это ощущение альтернативного мира, существующего, согласно квантовой теории Эверетта, в другой, несбывшейся с нами, вселенной:",
"Человеку трудно сказать счастлив ли он. Была ли жизнь счастливой или нет выясняется только в самом конце, перед смертью, когда всё остаётся в прошлом:",
"Чутьё на «своих» и «чужих» - это первобытная, инстинктивная психиатрия: все кто мыслят непохоже, кажутся ненормальными:",
"Уже не понять ни красных ни белых, исчез их образ мыслей, желания и вера, ведущая в бои гражданской войны:",
"Закон наказывает не ради справедливости, а для того чтобы сдержать природу, которая прорывается преступлениями сквозь тонкую занавеску культуры:",
"Учёные объясняют природу, а она, включая и выключая их цели и стремления, смеётся над этими объяснениями:",
"В меняющимся мире каждый — тайный агент: или нового или разрушенного старого:",
"Природа человека — война и насилие, и только хрупкая культура удерживает этот хаос от революционных взрывов:",
"Человеку сложно лавировать, сохранять себя в системе. Его затягивает в матрицу и он становится её частью:",
"За 2000 лет могущественные церковные организации, в своём сотрудничестве с приходящими и уходящими державами, ушли далеко от учения о том «не от мира сего» Царстве божьем каким было христианство. (книга о христианстве):",

"Учёные находят причины - и революций и поступков - но всегда после, когда уже поздно проверить их правильность:",
"В каждом чиновнике живёт и оппозиционер и корруционер, и даже осуждённый за оба проступка:",
"Подвижная плазма истории ионизирует людей, и они идут на смерть в общем раскалённом потоке:"
],//-----------   8
["Дети - дикари древнего племени, попавшие в цивилизацию:",
"Способность играть излечивается как детская болезнь — взрослением:",
"Дети идут спать как на смерть, они не знают что проснутся:",
"Культура - попытка описать мир эмоций, дикий мир в котором живут дети:",
"Выйдя из пещер, люди  прячутся от мира в норах квартир и в телеэкранах:",
"Детство - это отсутствие ответственности. Отсюда и тоска по ушедшему: и у человека и у народа:",
"Никто не знает каков внутри человек: в каждом монстре живёт обиженный ребёнок:",
"Страна детства граничит со страной несбывшегося:",
"Ещё в детстве нам одевают маску, которую, как роль, мы играем всю жизнь:",
"Добро или зло - лишь водовороты огромной реки жизни. Но именно они могут утянуть на дно или вынести на берег:", //"Добро и зло - берега жизни на которые нас выносит её водоворотистое течение:",
"Этот текст также входит в нелинейный интерактивный сборник «Мешок сказок»:"
],//-----------   9
["Мир в детстве кажется больше и удивительней. Все интересы и увлечения взрослых — это попытка вернуть тот изначальный интерес к миру, который даётся природой только раз:",
"История пишется по заказу победителей. Она похожа на новостную пропагандную телепередачу: так же ясно кто хороший, кто плохой. Только вместо новостей — старости:",
"Природа управляет человеком как марионеткой, которой кажется что она всё решает сама:",
"Социальная иерархия, ещё с обезьянних времён, строится на унижении и насилии. Меняются только методы:",
"Со времён пирамид, государство придумывает для народа смыслы и причины служить. Эти смыслы заменяют истину, которую можно найти только самому:",
"Каждый миф имеет своё отражение в реальности, он хранится в тёмных глубинах подсознательного, и неосознанно реализуется нами в жизни, формируя нашу судьбу:",
"Все общества постороены похоже, по первобытным животным схемам. И только культуры, созданные много позднее, делают народы непохожими:",
"Природа не исправляет своих ошибок. И, если случайно нажмёт не на ту кнопку, просто выбрасывает свою испорченную игрушку:",
"В сексуальных фантазиях и снах нет места стыду. Потому что, в момент представления, они ярче и важнее далёкой реальности:",
"Культура придумывает смыслы всем животным переживаниям и проявлениям инстинктов:",
"Сострадание и любовь — душа природы, которую можно разглядеть в глазах всех живых существ:",
"В каждом математическом узоре мороза, в каждом рисунке волн от брошенного в воду камня, природа посылает нам свои письма и учебники(текст«Самая длинная песня»,книга о реальности):",

"Желания, которые нам даёт природа - это реклама и пропаганда её нехитрых проектов:",
"Природа не даёт ни сил ни ответов при расставании - с её прагматичной точки зрения это лишь ненужная, отработанная попытка размножения:"
],//-----------   10
["Счастливы писатели у которых нет глубоких мыслей: они могут писать о том за что платят деньги и не спиваться из-за  отсутствия творческой реализации:",
"Внутренние миры тоже рождаются и умирают – как умирает общий мир после расставания:",
"Счастье самореализации тоже может быть суррогатным. Так, потенциальные хорошие жены и страстные любовницы смотрят сериалы, реализуясь не в жизни, а в фантазиях:",
"С кем ассоциирует себя человек, такая у него выстраивается и судьба, даже если ассоциировать постфактум, в самом конце жизни:",
"Природа раздаёт желания слепо, чтобы сработало в среднем. А мы потом ищем в своих чувствах и стремлениях отсутствующий смысл:",
"Человек неузнаваемо меняется не только взрослея(готовясь к жизни), но и старея(готовясь к смерти):",
"Детство определяет нашу судьбу, ведь именно тогда мы примеряем маски, которые будем носить всю последующую жизнь:",
"Человек с детства играет роль, а что у него внутри — никто не знает: также как мы не знаем ничего о личной жизни и проблемах любимых актёров:",
"То что выглядит снаружи как успешная карьера, внутри часто оказывается неудачей построить счастье для себя. За каждой удачей скрывается что-то напоминающее договор о продаже души:",
"Если пытаться сравнивать судьбы, то окажется что никто по-настоящему не счастлив, все мечтали о другом и будет видно лишь как жизнь поездом проходит мимо:",
"Все считают кого-то другого счастливее себя — словно вселенский аист случайно перетасовал все души:",
"Внутри мы неразличимы как квантовые частицы, и наше состояние также полностью зависит от нашей истории и окружения:"
],//-----------   11
["Фантазии также отличаются от реальности как реклама от реального товара: они идеальны:",
"Режиссёры и кукольники лишь обозначают красоту — кто театральным взглядом, кто размером кукольных глаз. Всё остальное дорисовывается и доигрывается в голове зрителя:",
"Создавая прекрасные образы, искусство стремиться украсить жизнь. Но жизнь тусклей и будничней — и исккусственные образы заменяют её в головах зрителей:",
"Природа грубо устроила желания и стремления — лишь бы сработало. Человек сам придаёт им глубокие смыслы и тонкие чувства:",
"Культура рисует свои картины из тех причудливых электрических узоров мозга, которые нам видятся как эмоциональный мир:",
"Расставание — это когда рушится целый совместный мир. И тот, у кого этот мир остаётся внутри, страдает:",
"Большинство смотрят на жизнь просто и природно. Иногда кажется мы — стая обезьян, выживающая в построенном кем-то для нас технологичном мире:"
],//-----------   12
["Жизнь - попытка выполнить забытое задание родителей. Или наоборот, попытка восстать и выкинуть из головы то, преследующее нас всю жизнь, «домашнее задание»:",
"У каждых слов, есть как осознанные так и скрытые подсознательные цели и смыслы. Инопланетный переводчик будет слышать именно вторые, как более важные для нас, смыслы. Например не «Добро пожаловать на Землю!» а «Как бы выведать у них побольше?»:",
"Истории отношений неисчерпаемы как море. И вся культура — лишь попытка осознать и запечатлеть это многообразие:",
"Все женщины ищут счастье в любви и семье. И, если не находят в жизни, находят его в женских романах и сериалах:",
"Образ любви летуч, он складывается не в реальности, а в голове, из фантазийного тумана, и не угадать чей облик явится в этом сне:",
"Позднесоветские годы — детство современной России и, как любые детские образы, часто вспоминаются с ностальгией:",
"У каждого из ведомых на казнь - свой договор со смертью. Именно он и отделяет героев от предателей:",
"Люди, как квантовые частицы, сществуют одновременно во всех возможных состояниях своей души:"
],//-----------   13
["Наша небесная Родина зовёт нас — и это голос несбывшегося:",
"Всё труднее вспомнить настроение и дух  советской цивилизации: она постепенно превращается в сказку, в былинный образ, не имеющий почти ничего общего с ушедшей реальностью:",
"Детская вера принимает любую идеологию. И потом, взрослея, человек вынужден одеваться в броню для защиты того что стало его душой, но оказалось уязвимым перед новыми, враждебными и бездушными фактами:",
"Несправедливость — не досадная случайность и издёвка судьбы, а закон природы и  символ её безразличия к своим детям:",
"Личная история(точно также как и история страны) пишется не ради истины, а чтобы угодить себе настоящему:",
"Все империи скрепляются смыслами. Это им заменяет историческую правду.",
"Государственная система завинчивает нас, как винтики, всё глубже в себя — подобно тому как матросы Корабля-призрака, умирая, встраиваются в его борта. Но матросы засыпают, а мы, становясь системой, работаем и ввинчиваем в неё новые души:",
"Ту высоту на которую мы все поднимемся после завершения жизненного пути, можно разглядеть везде — и в сверкающих горных вершинах, и в грустных глазах старой собаки:",
"Как плазма солнца, складывается из миллиардов частиц с неопределённым состоянием, так и поток истории складывается из миллионов замагниченных но по сути неопределившихся людей:",
"Важен ли кастинг людей — как на исторические роли, так и на роли в твоей судьбе? Или всё записано в сценарии?:",
"Всё утерянное найдётся и все разделённые когда-то внутренние миры соединяться снова. По закону сохранения ничто не должно потеряться бесследно:"
],//-----------   14
["Есть навязчивые, повторяющиеся сюжеты — именно так рождались мифы в подсознании наших предков. Один из таких пред-мифических сюжетов — дикарь, попавший в цивилизацию:",
"Разговоры о страшном, таком как смерть — табу в современном обществе притворного успеха:",
"Умирают последние свидетели и уже не почувствовать образ мыслей людей в то чёрно-белое, сталинское время. Останутся лишь весёлые образы старых фильмов и спорная статистика ГУЛАГа:",
"При тоталитаризме люди счастливее и свободнее чем при демократии. «Меньше знаешь, лучше спишь» и, пока лично тебя не разбудил ночной воронок НКВД, ты живёшь в свободной и счастливой стране:",
"Цивилизации всегда строились на обломках друг друга. Недавно люди перестали надругиваться над памятниками побеждённых предшественников, но продолжают — над их побеждёнными мировоззрениями:",
"21ый - век нейронауки, а значит, и внутреннего мира (футурологическая книга):",
"Реклама, как и пропаганда, заменяет своими яркими образами что-то внутри. А значит, крадёт частичку души:",
"Человек, как микрочастица, меняет состояние, и с каждой сменой тоже теряет изначальную информацию о себе:",
"Усложнение организации общества ведёт людей в театральную «Матрицу», в которой, как в пчелиных сотах, каждый член общества даже не представляет как оно на самом деле устроено:",
"Взрослея, человек теряет детские мечты, взамен приобретая маски для успешной игры в окружающем обществе:",
"Наши неосуществлённые судьбы остаются с нами и, словно в параллельном мире, сопровождают нас всю оставшуюся жизнь:"
],//-----------   15
["Жизненный путь - путь на казнь, в юности мятежный, в старости — добровольный. Мы все получаем положенную для приговорённых рюмку коньяка, минуту внимания для последнего слова и надежду что свет в конце тюремного корридора — это ещё не конец:",
"Где-то в глубине души мы уверены, что ушедшее и несбывшееся где-то живёт и сейчас. Поэтому и трудно смириться что мы здесь а не там. Всю жизнь оно видится нам во снах, в случайных фильмах и кадрах далёких стран:",
"Животные и дети живут в одном и том же первобытном мире и поэтому лучше понимают друг друга:",
"Мы все попали в свои судьбы, как в водовороты. Нас несёт и мы приспосабливаемся к течению - ещё с простых первобытных времён:",
"Общество измеряет вину и заслуги по роли которую назначила человеку судьба. Мы, как древнегреческие зрители, славим хороших и бьём плохих персонажей. Сложно понять что у человека внутри - как древним грекам заглянуть под маску актёра:",
"Всех людей, как квантовые микрочастицы, как актёров, можно поменять местами — и все также искренне будут играть противоположные роли:",
"Культура — это попытка понять что-то настоящее и вечное в неуловимом и изменчивом мире эмоций. И возможно, именно это общее и вечное — это то что было до нас и останется после:",
"Ушедшая любовь  оставляет каждому целый мир, который постепенно умирает и именно поэтому страдает человек. Но этот мир умирает не весь — и то, что остаётся и есть вечность:"
],//-----------   16
["За каждым мифом, за каждым архетипическим сюжетом, прячется свой, вытесненный из коллективного сознания, кошмар:",
"Любовь - коллективный сон человечества. С таким же нелогичным как во сне распределением ролей:",
"Попав в чужую страну, все чувствуют себя нецивилизованными дикарями. Потому что цивилизация — другая:",
"Мы попадаем из детства во взрослый мир - как невинный дикарь попадает в цивилизацию:",
"Сюжеты и образы подсознания извергаются на поверхность в снах и фантазиях. Автору это кажется вдохновением, а окружающим — сумасшествием:",
"Сюжеты, разговоры, и вообще слова — это всегда лишь приличная одежда для того что мы хотим сказать подсознательно:",
"И львы, и их жертвы, и охотники — все попадают в свои шкуры не по своей воле и не по своей воле расстаются с ними:",
"Души теряются в каменных джунглях, в бесконечных, как амазонская сельва, спальных районах — и нет такого компаса который бы вывел душу из этой чащи к свету:"
],//-----------   17
["Мы не знаем смысл сигналов которые подаём. И скрытые смыслы в наших словах часто видны ярче чем их формальные значения:",
"Взрослый — это ребёнок, научившийся носить правильные маски. Заглянешь под маску — а там эгоистичный капризный монстр — именно так выглядит ребёнок размером со взрослого, порвавший со своими родителями:",
"В искусстве всё ярче — работа, любовь, путешествия. Всё лучше чем на самом деле, как бывает только в рекламе. Искусство — это реклама жизни:",
"Культура — воссоздание эфемерного эмоционального мира, вызывающая (магическими словами, музыкой или изображениями) те мимолётные импульсы в голове, которые мы называем чувствами:",
"Мир грёз переселился из снов в телевизор, именно оттуда современный человек берёт образы счастья:",
"В любви фантазии занимают место реальности: каждый крутит в голове свою собственную мелодраму и свой собственный эротический сериал:",
"Люди, как микрочастицы, амбивалентны, они одновременно и добро и зло, и находятся, как микрочастицы, в смешанных состояниях:",
"В детстве было ясно по лицу: добрый или злой персонаж. Характер, красота, ум — всё было нарисовано на кукольных лицах. А теперь неясно — что прячется за приветливой улыбкой человека:"
],//-----------   18
["На чужбине, мы чувствуем себя непонятыми переселёнными душами, живущими несвою жизнь — как шпионы:",
"17 лет спустя выхода фильма «Матрица», я вижу как не роботы, а сами люди строят порабощающую их систему, добровольно стремясь погрузиться в как можно более глубокий сон:",
"Освещённые уютными  лампами рестораны и светомузыкальные бары — кажутся поездом чужой, проходящей мимо жизни:",
"На чужбине, мы чувствуем себя ребёнком или искренним дикарём — который один видит неествественость местных правил и условностей:",
"Дети хотят повзрослеть, потому что считают что взрослым никто ничего не запрещает. И только потом понимают грустную истину, что запрещать приходится им самим:",
"Советский мир на старых фотографиях уходит всё дальше от нашего понимания, превращаясь в сказку — для кого-то о богатырях, для кого-то о глупых королях:",
"Авторитарные правительства заменяют народу родителей: дают ему правила, цели и смыслы:",
"Женщины ищут женское счастье и, не найдя его в реальности, погружаются в сериалы и женские романы, заменяющие бедную чувствами жизнь:",
"Воспоминания - последнее богатство пьяниц:",
"И над империей Чингизхана по-прежнему не заходит солнце(двулинейная книга):",
"И зло человека, и агрессия собак — это лишь защитные реакции, способы приспособления к несовершенному миру:",
"Общество учит человека — как стая обезьянку. Учит одному и тому же уже миллионы лет: как приспособиться и защитить себя от окружающих:",
"Характеры и истории народов начинаются с историй обезьянних стай: большинство культур исчезли до появления письменности:"
],//-----------   19 pervye 3 dobavleno    OTSUDA NE DELAL
["Киносюжеты красивой любви доносят до нас то что мы не можем выделить, раскопать в собственной жизни. Наш замыленный, отягощённый корыстью и мелочностью взгляд уже неспособен на это:",
"Далёкие горизонты зовут нас нашими несбывшимися судьбами путешественников и первооткрывателей:",
"Учёные понимают схемы поведения животных, но не чувствовуют тех переживаний которые заставляют их так поступать. Да и друг друга люди так чувствуют редко:",
"С точки зрения природы, не только наше поведение, но и все произносимые нами слова, имеют другой, простой и инстинктивный смысл:",
"Чтобы достичь своих прагматичных целей, природа дёргает нас, как марионетку за нити, за наши острейшие желания и невыносимые страдания:",
"Дети — наше окно в мир природы - немой и инстинктивный мир, в котором всё необьяснимо и удивительно:",
"В любви, как в сексе — снаружи всё просто, рутинно и до непристойности функционально, а внутри — восхитительно, чувственно и неповторимо:",
"Внутренний эмоциональный мир бывает и общим — это то что остаётся после любви:"
],//-----------   20
["В ярких фильмах, в морском закате, да и просто во взгляде женщины есть нечто зовущее, пльлму что это - реклама альтернативной судьбы:",
"Подмена детей — популярный сюжет, потому что, ещё с детских мультфильмов, все чувствуют себя немного не на своём месте:",
"Сложно изменить свою судьбу, но очень просто — её жанр. Так тренируются актёры: играют трагедию или комедию по одному и тому же сценарию:",
"Люди похожи на уезжающих и провожающих поезд: они всматриваются в чужую судьбу и представляют себя на месте друг друга:",
"Актрисы и в жизни продолжают играть роль - самих себя, потому что им уже сложно откопать в себе ту, забытую ещё в начале карьеры, личность:",
"Несбывшееся в реальности женское счастье реализуется в просмотре сериалов и фильмов о красивой любви:",
"Тщательно забытое несбывшееся проглядывает в ярких снах и тревожит бессонными ночами — как неосуществившаяся любовь:",
"Человек сразу чувствует какая судьба может его ждать в лучшем случае. И, только повзослев - какое будущее его ждёт реально:",
"99% снов, разговоров, долгих зим тянулись тысячелетиями в пещерах, окружённых первобытным непонятным миром. А  значит 99% философских идей, гениальных стихов и религиозных озарений пропали до письменности:",
"Несбывшееся всегда реализуется, хотя и не в материальном мире. Но его зов не обманывает — ни человека, ни собаку, ни играющие тысячи ролей облака:",

"Счастье есть. Ведь многомирная вселенная содержит все варианты всех наших судеб, выборов и поступков:"
],//-----------   21 dobavleno
["Миллиарды внутренних миров и есть душа человечества. Эта душа забывается, исчезает с каждым поколением. Вся культура — это попытка её запечатлеть:",
"Внутренний мир собак беднее нашего, но зато он состоит из самого важного. Собака сразу знает то что останется от нашего с ней общего внутреннего мира:",
"Внутренний мир человека никому не нужен кроме него самого. Для других его уникальность и непохожесть на них — это скорее ненормальность:",
"Я узнаю любовь - как актёра во всех его ролях, как ангела сна, взмахи крыльев которого нам видятся разными удивительными снами:",
"Знала бы природа во что превращаются её простые программы, какими драмами и комедиями оборачиваются её инструкции размножения:",
"Мы выезжаем из прошлой жизни как утренний поезд — просто однажды просыпаемся в другом мире:"
],//-----------   22
["Крики и «разговоры» всех обезьян похожи. И, если присмотреться к человеческой молодёжи, похожи и на них. Так я научился языку животных:",
"Учёные обьясняют природу, находя смысл во всех её проявлениях, а она, ветренная и непостоянная, лишь смеётся над их обьяснениями:",
"Сюжеты о дикарях, оказавшихся в цивилизации и постоянно попадающих в конфузные ситуации - это отзвуки реальных историй, происходящих с нами:",
"Есть ли смысл у сострадания(особенно к дальним, неважным для тебя существам)? Или это ошибка природы, знак психического нездоровья?:",
"Общество, с животных времён, построено на страхе, унижении и насилии. И природные импульсы всегда предлагают нам преступные решения проблем:",
"Артистические тусовки неприветливы не по своей воле. Там каждый играет свою роль, часто определённую ещё в детстве:",
"Детство - наше краткое превращение в животных предков. Дети на 90% они состоят из жестоких обезьян. Воспитание может только сохранить те 10% что даны им свыше:",
"Политика - это экономика, в которой, вместо вместо материальных ценностей, скупаются и продаются оптом идеи. И, поскольку идеи выращиваются в людях... Политика - это оптовая торговля людьми:",
"В сюжетах о природе (от мультфильмов до романов) наверх пробивается достойнейший. Но природа не знает других достоинств кроме приспособления к среде. Наверх, как в природе, так и в обществе, пробиваются приспособленцы. Приспосабливаться - это всё чему нас с детства учит общество:",
"Деньги правят всем. И, поэтому, у них есть мистическая сторона. Но они гораздо мрачнее тех популярных и безобидных  «правил привлечения денег в свою жизнь»:",
"Информационное общество будущего и эволюция мыслящей материи (книги «Цивилизация после людей» и «Апгрейд в сверхлюди»):",

"Общество 21века станет гораздо болле человечным. Если останется состояшим из людей:"
],//-----------   23
["В фрагментах чужой жизни, мелькнувших из окна поезда или на экране телевизора — можно разглядеть собственную несбывшуюся судьбу:",
"Из незаметных сперва моментов общей жизни — как пережидали грохочущий мимо поезд, как ехали смеясь на одном велосипеде — незаметно сложилось воспоминание ушедшего счастья. Это общее и остаётся в вечности:",
"Счастье — всегда далеко, потому что оно — не реальность, а реклама, призыв попробовать:",
"Притягательность пути в том, что, несмотря на билет, где-то в глубине души не знаешь куда едешь. И только в конце открывается куда ехали - и поезд, и... жизнь:",
"Других нельзя понять до конца, они — как эльфы в сказках: общаешься, живёшь рядом, но в глубне души считаешь их не совсем нормальными:",
"То о чём думали, что чувствовали люди прошлого — это душа эпохи. Душа, безвозвратно потерянная. И поэтому, особенно хочется проникнуть туда, в мысли людей на старых фотографиях:",
"Этот текст также входит в нелинейный интерактивный сборник рассказов «Там»"
],//-----------   24
["На фотографиях сталинского времени незримо позирует страх. И какая-то деревянная целеустремлённость, и ещё много малознакомых нам эмоций, делающих непонятным внутренний мир тех людей:",
"Учёные объясняют поведение обезьян из целесообразности природы. Можно также объяснять и людей, со всей их социологией и особенно политикой:",
"Понимать зверей - не значит чувствовать их. А между тем, всё их поведение можно обьяснить также как мы объясняем себя — чувствами:",
"Ничто так не способствует полёту фантазии как лекция на которой ты потерял нить рассуждений:",
"Ничем не опровергнуть мысль что все вокруг — сумасшедшие, искуссно, как в фильмах, притворяющиеся нормальными людьми:",
"Игры спецслужб на всемирной шахматной доске — предвестник Матрицы, в которую могут попасть наши внуки:",
"Попав в цивилизацию, дикарь может не уловить смыслов науки и чувств искусства, но суть политики он уловит очень точно:", //"Тарзан, попавший к людям, мог бы вести себя глупо с нашей техникой, но он не увидел бы ничего нового в человеческом обществе:",
"Возможно, только издалека, только инопланетные зоологи увидят в нашем галдеже и смене вожаков - смысл заложенный в них насмешливой природой:", //"В природе (а значит и в поведении человека) нет логики. Всё состоит из странных но работающих, проверенных миллионами лет схем:",
"Красота может и спасти и погубить мир. И спасти - это если сможет вызвать любовь:" //"Мы все — и люди и животные, чувствуем — и что спасёт мир, и что останется после нас. Но это — не совсем «красота», как  пообещал Достоевский:"
],//-----------   25
["Люди перестали мечтать собственными образами. Начали брать приготовленные для них шаблоны - из фильмов, из рекламы. Воображение заменилось на «хочу как там»... там, в чужом варианте счастья:",
"Вечерний гогот гопников во дворе так похож на гиканье обезьяньих компаний что возвращает в те времена когда они оба, вместе с щебетанием птиц и далёкими трубами слонов, составляли природные звуки вечерней саванны:",
"Женщины хотят пробиться в свою молодость, в невстреченную настоящую любовь, и, в конце концов, заменяют это фантазиями и сериалами:",
"Отборный мир сексуальных фантазий никогда не воплощается в реальности - только в рекламе и порнофильмах. Реальность может только использовать его, вспоминая в нужный момент:",
"В финале старого фильма о Буратино, за куском холста оказывалась... страна СССР. Мне в детстве нравилась такая фантастика — что Буратино может появиться прямо здесь... Только повзрослев я понял что снимали не фантастику а пропаганду. Так зритель сам создаёт жанр:",
"Человек разучивается жить своей внутренней жизнью - её заменяют на нужные образы, нужные мечты, симпатии и антипатии. Человек встраивается в операционную систему будущего:",
"Детские сказки и стремление к счастью так и остаются, нереализованными, внутри. Всё взросление — это попытка забыть и заменить их:",
"Счастье советских людей светится в глазах на плакатах, но не на старых фотографиях. Все истинные мечты и чувства ушедших цивилизаций оказываются утеряны. Остаются лишь пропаганда и непонятный взгляд на старых фотографиях:", //"Мечты, чувства, мысли — все внутренние миры ушедших цивилизаций — оказываются безвозвратно утеряны. И только странным нездешним взглядом смотрят люди со старых фотографий:",
"Природа — режиссёр нашего счастья, управляющая нами, как марионетками, за созданные ею нити желаний:",
"Природа заботится не о человеке а о человечестве в среднем, оставив учёным и поэтам находить 'смысл' индивидуальных отклонений:",
"Мы ничего не знаем о небесном мире, неумело пытаясь какими-то традициями и церемониями вращать вселенские и быть может равнодушные к нам колёса высших сфер — те что качают маятник небытия и вечности:",
"Нигде не найти информацию о том кто ты. Но можно найти понимание: то что останется, то что не умрёт — это и есть ты:"
],//-----------   26
["Ребёнок, как волшебник, способен оживлять кукол и игрушки. Все предметы в его руках приобретают характеры и чувства:",
"Только ребёнку сразу ясно — кто хороший, кто плохой. Такая ясность бывает только в детстве и в первобытном африканском рае:",
"Природа одурманивает нас для достижения своих целей, играючи назначает и счастье и страдания. А потом учёные придумывают глубокий смысл для всех её легкомысленных издевательств:",
"Счастье спокойной одинокой жизни и счастье страстной любви — неизвестно что чего  подменяет, что живёт в глубине души а что навязано обществом или судьбой:",
"Инопланетные зоологи нашли бы совсем другие, скрытые для нас, смыслы в наших разговорах, новостных передачах и речах политиков. И, возможно, они были бы правы:",
"При расставании погибает общий мир — все те  субьективные состояния и эмоционально окрашенные воспоминания, которые, как понимаешь потом, и были счастьем:",
"На основе сомнительных прелестей и неуклюжих сопящих движений в голове рождаются все головокружительные страсти и эротические фантазии:",
"Не только природа дёргает нас, как марионетку, за чувствительные нити. История тоже нажимает на кнопки, включая ту или иную судьбу:",
"Будущее открывает многие варианты взаимодействия человека и его природы, вместо существующего сейчас единственного кабального пожизненного контракта (футурологическая книга):",
"Теория множественных вселенных обещает что, где-то существует мир в котором у нас другая судьба, где-то сбылись все мечты и живёт наше счастье. И возможно именно оттуда мы слышим его зов:" //""По теории множественных вселенных, где-то есть миры, в которых у нас другая, более счастливая но несбывшаяся здесь судьба:"
],//-----------   27
["Что-то портиться при конвертации таланта в профессию. Душа  уходит оттуда куда приходят деньги:",
"Теперь и не вспомнить что же было веселого в юности, что было смешного в разговорах на вечеринках... и вообще какой в них был смысл:",
"Из совместных прогулок и рассветов складывается общий мир, который погибает при расставании:",
"Тысячи окон спальных районов на фоне ночной черноты - это самый футуристичный пейзаж нашего времени, матрица заключённых душ и вселенная квадратных звёзд:",
"Предчувствие смерти меняет человека — и в ожидании казни, и в старости — как меняет человека война. Проигранная война с самым страшным врагом:",
"У каждой жизни, как у фильма, есть свой жанр — от него зависит её трагический конец или хэппиэнд:",
"Все пьяницы или ищут в собутыльнике понимания или жалуются что никто их не понимает. Значит, как утверждает пословица, и у всех трезвых на уме мысль  что никто не знает что у них внутри:",
"Предчувствия, как и мечты о несбывшемся, зовут нас образами альтернативных судеб. Но не вскочить в лучшую судьбу, как в соседний поезд на полном ходу, наши рельсы вскоре расходятся навсегда:", //"Предчувствия, как и ощущения несбывшегося, приходят из того закулисного мира где складываются мозайки судеб:",
"Всё необъяснимое логикой — и сильные чувства, и фатальные предчувствия — для окружающих лишь проблемы психики, которые они берутся вылечить:",
"Попасть в туссовку было сложно ещё в обезьяньи времена. В иерархии надо  уметь унижать и унижаться:",
"Голливуд, как и всякая фабрика, прячет свою рутинную машинерию за яркой, привлекающей потребителей витриной:" //"Все сыгранные актрисами роли — это одна роль, которую они начали играть ещё в детстве:",
],//-----------   28
["Никто нас не воспринимает такими как мы есть глубоко внутри — одинокими, непонятыми обществом, первобытными детьми:",
"Внешность эпохи остаётся в истории, но её душа теряется, оставаясь лишь в детских воспоминаниях брежневского времени и во взгляде на старых фотографиях сталинской эпохи:",
"Каждый попадает в свою судьбу - как в водоворот. Криминальный талант может попасть в судьбу Шерлока Холмса, и наоборот:",
"Пока есть сострадание - принять мир невозможно: слишком много несправедливости и страданий в равнодушной логике природы и общества:",
"Наука никогда не найдёт смысл в том каким тебя сделала природа. Для того чтобы придумать смысл нужна лженаука:",
"Весь мир - театр и люди в нём актёры. Весь секс - театр и люди в нём — фантазии:",
"Весь мир - автоматический театр марионеток, где нас тянут за нити вселенские шестерёнки причин и следствий:",  //"Мы - театр марионеток, запущенный ещё в детстве и ведомый по сцене жестоким колесом причин и следствий:",
"То что инзутри, для нас, чувство неудовлетворённости жизнью или вины - снаружи, для медицины, просто нарушение обмена веществ. Врач может залезть в мозг но не во внутренний мир пациента:",
"В ожидании смерти человек меняется - неузнаваемо для себя самого, но незаметно для других. Это верно и для больницы, и для тюрьмы:", //"Многое может неузнаваемо изменить человека — взросление, страдания, религия, или даже просто ожидание смерти:",
"Внутренних состояний у человека не меньше чем у квантовой частицы, мы же признаём лишь два(вменяем или нет):", //"Состояния людей, как частиц в физике, не известны заранее — они смешанные:",
"Женщины хотят пробиться в своё женское счастье - закрывая глаза и на то что принц оказывается преступником, и на то что он существует только на киноэкране:", //"Женщинам проще увидеть принца в негодяе, чем ждать того кто грезился в юности. А если не получится его полюбить — на помощь приходят мечты, женские романы и сериалы:",
"Мы смотрим на окружающих как на пассажиров поезда, удаляющихся куда-то по непересекающимся с нашими рельсам своих жизней:", //"Мы смотрим друг на друга с непониманием и интересом - как пассажиры поезда и провожающие его взглядом жители деревень:",
"Не понять окружающих, и только когда копнёшь, заглянешь вглубь души человека - качнёшься в бездну, где вращаются галактические шестерёнки сансары:" //"Некоторые чувствуют  закулисный мир сансары, а значит и своё будущее, свою неумолимо ведомую этим миром судьбу:"
],//-----------   29
["Люди в ячейках многоэтажек, просматривающие красочные сны сериалов, - это и есть прототип будущей «Матрицы»:",
"Пока реклама  и пропаганда транслируется посредством телепередач, а не напрямую с помощью воздействующих на мозг волн. И только природа, уже миллионы лет, транслирует нам свою рекламу напрямую в мозг. Мы называем это счастьем:",
"Мы не можем представить скрытых смыслов своих слов. Их знала природа, придумавшая слова для своих целей и их будет знать искусственный интеллект, уже стоящий себя из всей информации интернета:",
"Государственная система усложняется до уровня  природы, двигающей фигурки марионеток по сцене реальности:",
"Смерть, как и сон, может быть добровольной — и у человека, и у цивилизации, и у человечества:",
"Государственные системы стремятся контролировать симпатии, антипатии и смыслы в головах граждан. Это началось со строительства пирамид и закончится построением «Матрицы»:",
"«Знание - сила» - это ошибочно переводённое на русский высказывание Френсиса Бэкона «Знание — это власть». В новом информационном обществе власть переходит от денег к информации, и именно туда  переселяется дьявол:",
"Империи понимают, что народы, вырвавшиеся из-под их влияния, уже никогда не захотят обратно. Они оказываются перед выбором: либо распад, либо уничтожение многообразия своих культур:",
"Все культуры одинаковы: все они построены на разделении мира на ОНИ и МЫ, и поэтому все считают себя очень непохожими. Все видят события по разному, обшаясь через звуконепроницаемое стекло - как провожающие и пассажиры поезда:",
"Нас увлекает генеральное течение жизни, навязывая разделение мира на 'наше'добро и 'их'зло - так же как в древние времена нас унесло от рая:", //"Люди увлекаются пропагандой как водоворотистой рекой, и течение несёт нас так, что уже не выплыть на тот райский берег где ещё не было, как в Библии, ни добра ни зла:",
"Системы искусственного интеллекта уже сейчас умеют развиваться. Но, как и человек, они развиваются по определённым законам — которые можно в них вложить на этапе создания:",
"Природа запрограммировала наши желания ещё в первобытные времена, и совсем для других целей. И мы до сих пор функционируем по её устаревшим программам:",
"Собаки живут в нашем мире как сталкеры в зоне описанной в «Пикнике на обочине»: не понимают его устройства, но чувствуют что надо делать. Так будем жить и мы в мире будущего искусственного интеллекта:"
],//-----------   30
["Другие публикации: Издание научно-популярных книг:",
"Не-книжные публикации: Иллюстрации и видео-арт, наука и путешествия:"
],//-----------   31
["Другие публикации: Издание нелинейных и двулинейных книг:",
"Не-книжные публикации: Иллюстрации и видео-арт, наука и путешествия:"
],//-----------   32
["Другие публикации: Издание нелинейных и двулинейных книг:",
"Другие публикации: Издание научно-популярных книг:"
]
];
//neIspolzOldVerOfCol YellowPerehod =			[[["YellowPerehod v0  "],["YellowPerehod v1  "],["YellowPerehod v2  "],["YellowPerehod v3  "],["YellowPerehod v4  "],["YellowPerehod v5  "]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol AquaPerehod =			[[],[["AquaPerehod v1  "],["AquaPerehod v2  "],["AquaPerehod v3  "],["AquaPerehod v4  "],["AquaPerehod v5  "]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol BurlyWoodPerehod =		[[],[],[["BurlyWoodPerehod v2  "],["BurlyWoodPerehod v3  "],["BurlyWoodPerehod v4  "],["BurlyWoodPerehod v5  "]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol ChartreusePerehod =		[[],[],[],[["ChartreusePerehod v3  "],["ChartreusePerehod v4  "],["ChartreusePerehod v5  "]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol CornflowerBluePerehod =	[[],[],[],[],[["CornflowerBluePerehod v4  "],["CornflowerBluePerehod v5  "]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkGreyPerehod=		[[],[],[],[],[],[["DarkGreyPerehod v5  "]],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkOrangePerehod=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol FuchsiaPerehod=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkSeaGreenPerehod=	[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol DarkSalmonPerehod=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol BlueVioletPerehod=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol PaleGoldenRodPerehod=	[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol AquamarinePerehod=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
//neIspolzOldVerOfCol GoldenRodPerehod=		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

var parms = {"width":adformShyrynjaHolst-10,"height":adformVyshinjaHolst-10,"duration":5000,"transition":2000,"effect":"staronkaUperad","id":""};	// defaults
var pershyPakaz = true;
//var raspovLicnik;         //WAS var raspovLicnik = -1; 
var imLicnikiStarye = [];//ME
var indStaronk = 0;         
var chasDlaGartannja = 0;
var hutkascGartannja = 25;
var kadrGartannja = 0;		
var dimdraw = [0,0];
var img = document.createElement('img');
var imgOld = document.createElement('img');
//var imgBack = document.createElement('img'); imgBack.onload=function(){w=this.width; h=this.height;};
var ctx = 0;	// context
var canv = 0;	// canvas
var chasLichnik = 0;
var chasLichnikGart = 0;
var wipeDirections = {"l-wipe":"L","r-wipe":"R"};
var neAutoGartanne = false;
var yoscNazva = false;
var kolkascZadnikau=4;





var gartacPachatak = function(raspovLicnikNastupny,ugoryCIdolu) {//NOvar function=>function declaration=>defined as soon as its surrounding function or script is executed
indZadnika=maxAposhStaronkPeradPershZadnik+1;	
kolkascZadnikau=0; do{kolkascZadnikau++;}while (allbackImgs[raspovLicnikNastupny][kolkascZadnikau].length>4);//kolkascZadnikau++;
kolkascZadnikau=kolkascZadnikau+3;//nacalo,seredina,konec
var gartanneVyklikFailaZnomarom = [];for (var i = 0; i <= maxAposhStaronkPeradPershZadnik+9; i++) {if(i<=9){gartanneVyklikFailaZnomarom.push(parms.malunki[i][2] % 11);}else{gartanneVyklikFailaZnomarom.push(i+1);};};	
document.body.style.backgroundColor = raspoCveta[raspovLicnikNastupny];

document.getElementById(parms.id+"_title").style.color = document.body.style.backgroundColor;
document.getElementById(parms.id+"_title").style.backgroundColor = 'white';
document.getElementById(parms.id+"_title").style.opacity = 0.6980;

document.getElementById('id2zagolov').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idh2zagolov1').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idh2zagolov1bis').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idh2zagolov2').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idh2zagolov3').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idDivUSEkartynkaStaronkaTableJacejkiGart').style.color = document.body.style.backgroundColor;
document.getElementById('idForm').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idFormh3').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idLegendForm').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idEmailh3').style.color = dopolnitCol(document.body.style.backgroundColor);
document.getElementById('idMsgh3').style.color = dopolnitCol(document.body.style.backgroundColor);

//curW=screen.availWidth; while(curW<1000){curW+=300;document.body.style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('id2zagolov').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idh2zagolov1').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idh2zagolov2').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idh2zagolov3').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
//curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idDivUSEkartynkaStaronkaTableJacejkiGart').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idDivOglavANDsortOglav').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikCreateTable').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikUbracseentexts').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idLegendTemy').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idTemyKontur').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGalkaAdsejac').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idLegendZmest').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idDivTZmest').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idDivFilterZmest').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idDivSortZmest').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikSortZmestSvjaz').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikSortZmestAlfavit').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikSortZmestRazmer').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikSortZmestOcenka').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikSortZmestSpor').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGuzikSortZmestPoezia').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idGalkaParadak').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idLegendShareKontur').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idLegendShare').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idDivKeywords').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles0').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles1').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles2').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles3').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles4').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles5').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles6').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles7').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles8').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles9').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles10').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles11').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles12').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles13').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles14').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles15').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles16').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles17').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles18').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles19').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles20').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles21').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles22').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles23').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles24').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles25').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles26').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles27').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles28').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles29').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles30').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles31').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById('idMotsCles32').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idLegendForm').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idFormh3').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idfieldsetForm').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idPismoIliOcenka').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idEmailh3').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idEmail').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idMsgh3').style.fontSize = "larger";};
curW=screen.availWidth; while(curW<1000){curW+=100;document.getElementById('idFormTextArea').style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
for(iBut=0;iBut<=32;iBut++){
curW=screen.availWidth; while(curW<1000 && document.getElementById(('button'+iBut).toString())!=null){curW+=300;document.getElementById(('button'+iBut).toString()).style.fontSize = "larger";};
}
//ANOTHER POSSIBILITY 1vw = 1% of viewport width
//ANOTHER POSSIBILITY rem values were invented in order to sidestep the compounding problem. rem values are relative to the root html element, not the parent AS em

strBack = './backW800/'+allbackImgs[raspovLicnikNastupny][maxAposhStaronkPeradPershZadnik+1];//+'.jpg';
strOrig = './backOrig/'+allbackImgs[raspovLicnikNastupny][maxAposhStaronkPeradPershZadnik+1];//+'.jpg';   backOrig
var strurlW_="url('"+strBack+"')";//var strurlWprobel="url('"+strBack+"')";
//var strurlW_ = strurlWprobel.replace(" ", "_");
document.body.style.backgroundImage = strurlW_;   document.body.style.backgroundAttachment = "fixed";
document.body.style.mixBlendMode = "exclusion";
//CONSOLE console.log(document.body.style.backgroundImage+'=backgroundImage');
//CONSOLE console.log(document.body.style.backgroundColor+'=backgroundColor');
////document.body.style.backgroundImage = "url('./backimage/20amslerPIX.jpg')";

/* imgBack.src=strBack;
var winByImgHeight=window.innerHeight/imgBack.height;
var winByImgWidth=window.innerWidth/imgBack.width;
var backHeight=window.innerHeight; var backWidth=window.innerWidth;
if(winByImgHeight>winByImgWidth)
{backWidth=Math.floor(winByImgHeight*imBack.width);}
else
{backHeight=Math.floor(winByImgWidth*imBack.height);};
if(backHeight>20 && backWidth>20){backHeight-=10;backWidth-=10;};
document.body.style.backgroundSize = backWidth.toString()+"px "+backHeight.toString()+"px"; */
document.body.style.backgroundSize = "cover";
/* var imBack=new Image;imBack.src=strurlW_;
var dimBack = zmenaPamerau(imBack.width,imBack.height,window.innerWidth,window.innerHeight);
document.body.style.backgroundSize = dimBack[0].toString()+"px "+dimBack[1].toString()+"px"; */

document.getElementById("idLegendZmest").innerHTML="Оглавление(тексты,связанные с этим,выделены их цветом):   ";
document.getElementById("idGalkaAdsejac").checked=false;
var content = document.getElementById("idTemyKontur");
var allinputs = content.getElementsByTagName("input");
// no stranno cto raspovLicnikNastupny=6 vsegda 
for(var i=0; i<allinputs.length; i++) {nenuznaja=allinputs[i];  //IEnotSupported:  for (nenuznaja of allinputs) {
if((nenuznaja.id != "idGuzikUbracseentexts") && (nenuznaja.id != "idGuzikCreateTable") && (nenuznaja.id != "idGalkaAdsejac"))
nenuznaja.parentNode.removeChild(nenuznaja);
}
for(var j=0; j<useIndakPaTem.length; j++) {i=useIndakPaTem[j];  //IEnotSupported:  for(var i of useIndakPaTem) {
var husik = document.getElementById(idGuzikiPaTemam[i]);
if(husik != null) husik.parentNode.removeChild(husik); 
}
for(var i=0; i<temyKazhdogoEss[raspovLicnikNastupny].length; i++) {itemy=temyKazhdogoEss[raspovLicnikNastupny][i];  //IEnotSupported:  for(var itemy of temyKazhdogoEss[raspovLicnikNastupny]) {
var husik = document.getElementById(idGuzikiPaTemam[itemy]);
if(husik===null) {maljavac1temaHusikBYnumber(itemy); husik = document.getElementById(idGuzikiPaTemam[itemy]);};
titleAndValueByElementAdseu(husik);//idGuzikiPaTemam[temyByTexts[raspovLicnik][itemy]]
titleAndValueByElementAdseu(document.getElementById("idGuzikUbracseentexts"));
}; 	
document.getElementById("idGalkaAdsejac").checked=false;
document.getElementById("idGalkaParadak").checked=false;
zrabicTZmest(); KaliarovyaRadkiPeradBelymi(false);
if(ugoryCIdolu.toLowerCase()==="up") {parms.effect="staronkaUgoru";}
else {parms.effect="staronkaUniz"; imLicnikiStarye.push(raspovLicnik); imLicnikiStaryeUse.push(raspovLicnik);};
//zrabicTZmest()
clearInterval(chasLichnik);
//CONSOLE console.log(this);


if (parms.malunki.length>=raspovLicnikNastupny) {
indStaronk=0;
raspovLicnik = (raspovLicnikNastupny) //WAS 	raspovLicnik = (raspovLicnikNastupny-1)		
//var x = document.getElementById("idDivTZmest").getElementsByTagName("td");
vseIndsNUMofRadkiZmest = []; vseIndsTXTofRadkiZmest = []; vseIndsIDofRadkiZmest=[];
for (i = 0; i < document.getElementById('tableZmest').rows.length; i++) { 
curRid=document.getElementById('tableZmest').rows[i].id; 
//CONSOLE console.log(curRid);
//var strInfo=' '+i.toString()+')'+parms.malunki[curRid][1].toString()+' '+parms.malunki[curRid][2].toString()+' '+parms.malunki[curRid][3].toString()+' '+parms.malunki[curRid][4].toString()+' ';
var strInfo=' ';
vseIndsNUMofRadkiZmest.push(i); vseIndsTXTofRadkiZmest.push(strInfo); vseIndsIDofRadkiZmest.push(Number(curRid)); 
}
fabravacCIubracRadkiPaID(vseIndsNUMofRadkiZmest,vseIndsTXTofRadkiZmest,"krasit","White"); 
for(var icvet=0;icvet<=15;icvet++) if(icvet<CvetaPerehoda[raspovLicnik].length) {
var cvetaArr1elem=CvetaPerehoda[raspovLicnik][icvet];
var perehodyArr1elem=SlovaPerehoda[raspovLicnik][icvet];	
fabravacCIubracRadkiPaID([cvetaArr1elem],[perehodyArr1elem],"krasit",raspoCveta[cvetaArr1elem]); 	
}
KaliarovyaRadkiPeradBelymi(false);		
//CONSOLE console.log(raspovLicnik.toString()+'=raspovLicnik');
imgOld = img.cloneNode(true); //ME
img.src = parms.malunki[raspovLicnik][0]	//globalCOPYimages  
var uzacStaronk=gartanneVyklikFailaZnomarom[indStaronk].toString();
if(uzacStaronk.length<=1){uzacStaronk="0_"+uzacStaronk;}else{uzacStaronk=uzacStaronk.substring(0, 1)+"_"+uzacStaronk.substring(1);};
img.src =ustanLitarNaMiasce(img.src,img.src.length-4,uzacStaronk); //gartanneVyklikFailaZnomarom[indStaronk].toString()
}
	
//if (yoscNazva)
document.getElementById('idLegendTemy').innerHTML='ТЕМЫ текста "'+parms.malunki[raspovLicnik][1]+'"';		
document.getElementById(parms.id+"_title").innerHTML = parms.malunki[raspovLicnik][1]+"  (оценка:"+parms.malunki[raspovLicnik][3]+", спорность:"+parms.malunki[raspovLicnik][4]+", поэтичность:"+parms.malunki[raspovLicnik][5]+")";

document.getElementById('idDivSortZmest').title=' Здесь можно сортировать оглавление по алфавиту, размеру, оценке, сложности и связанности с текстом "'+parms.malunki[raspovLicnik][1]+'"';
var foavtar=allbackImgs[raspovLicnik][indZadnika];
foavtar = foavtar.substr(2);foavtar=foavtar.replace("_", " ");
document.getElementById('jaceikaHolstID').title='Текст: '+parms.malunki[raspovLicnik][1]+', страница '+(indStaronk+1)+'. Фото:'+foavtar.substr(0,foavtar.indexOf('.'));	
//document.getElementById('jaceikaHolstID').style.opacity = 1;

tabRs = document.getElementById('tableZmest').getElementsByTagName("TR");
tabRs[0].parentNode.insertBefore(document.getElementById('id'+LepshPerehodyPaRaspovIstaronke[raspovLicnik][indStaronk]).parentNode, tabRs[0]);
}



var gartacPracjag = function(incr) {//var function => function expression=>only defined when that line is reached	
var gartanneVyklikFailaZnomarom = [];for (var i = 0; i <= maxAposhStaronkPeradPershZadnik+9; i++) {if(i<=9){gartanneVyklikFailaZnomarom.push(parms.malunki[i][2] % 11);}else{gartanneVyklikFailaZnomarom.push(i+1);};};	
	clearInterval(chasLichnik);
	//CONSOLE console.log(raspovLicnik.toString()+'=raspovLicnik'+'___'+indStaronk.toString()+'=indStaronk');
	//CONSOLE console.log(parms.malunki[raspovLicnik].toString()+'=parms.malunki[raspovLicnik]');
	if(indStaronk+incr<=parms.malunki[raspovLicnik][2] && indStaronk+incr>=0) {
		indStaronk = (indStaronk + incr);
		parms.effect="no";
		if(incr<0) parms.effect="staronkaUzad";
		if(incr>0) parms.effect="staronkaUperad";
		}//NEW ME
	else parms.effect="no";
var KolkascSaronakVgrupe=parms.malunki[raspovLicnik][2]/kolkascZadnikau;
indGrupyStaronakDzeljaZadnika=Math.floor(indStaronk/KolkascSaronakVgrupe);
indVgrupeStaronakDzeljaZadnika=Math.floor(indStaronk % KolkascSaronakVgrupe);
saredina=Math.floor(parms.malunki[raspovLicnik][2]/2/KolkascSaronakVgrupe);
kanec=Math.floor(parms.malunki[raspovLicnik][2]/KolkascSaronakVgrupe);
if(indGrupyStaronakDzeljaZadnika===0) {indZadnika=maxAposhStaronkPeradPershZadnik+1;}
else if(indGrupyStaronakDzeljaZadnika>=kanec-1) {indZadnika=maxAposhStaronkPeradPershZadnik+3;}
else if(indGrupyStaronakDzeljaZadnika===saredina) {indZadnika=maxAposhStaronkPeradPershZadnik+2;}
else if(indGrupyStaronakDzeljaZadnika<saredina) {indZadnika = (indGrupyStaronakDzeljaZadnika-1);}// % kolkascZadnikau;}
else {indZadnika = (indGrupyStaronakDzeljaZadnika-2);};// % kolkascZadnikau;};
if(indVgrupeStaronakDzeljaZadnika % 2 === 1){strBack = './backWF800/'+allbackImgs[raspovLicnik][indZadnika];}//+'.jpg';} //-> backWhiteFLIP
else {strBack = './backW800/'+allbackImgs[raspovLicnik][indZadnika];}//+'.jpg';};
strOrig = './backOrig/'+allbackImgs[raspovLicnik][indZadnika];//+'.jpg';   backOrig
var strurlW_="url('"+strBack+"')";//var strurlWprobel="url('"+strBack+"')";
//var strurlW_ = strurlWprobel.replace(" ", "_");
document.body.style.backgroundImage = strurlW_;
document.body.style.mixBlendMode = "exclusion";
//CONSOLE console.log(indStaronk+'=indStaronk'+'____'+indGrupyStaronakDzeljaZadnika+'=indGrupyStaronakDzeljaZadnika'+'____'+indZadnika+'=indZadnika');
//CONSOLE console.log(document.body.style.backgroundImage+'=backgroundImage');
//CONSOLE console.log(document.body.style.backgroundColor+'=backgroundColor');	

document.body.style.backgroundSize = "cover";
if(indVgrupeStaronakDzeljaZadnika >= 2 && indVgrupeStaronakDzeljaZadnika <= 3){document.body.style.backgroundSize = "contain";}; //if(indStaronk>kolkascZadnikau+1 && indStaronk<2*kolkascZadnikau+1){document.body.style.backgroundSize = "contain";};
/* var imBack=new Image;imBack.src=strurlW_;
var dimBack = zmenaPamerau(imBack.width,imBack.height,window.innerWidth,window.innerHeight);
document.body.style.backgroundSize = dimBack[0].toString()+"px "+dimBack[1].toString()+"px"; */
	
	imgOld = img.cloneNode(true); //ME
	img.src = parms.malunki[raspovLicnik][0]	//	
	var uzacStaronk=gartanneVyklikFailaZnomarom[indStaronk].toString();
	if(uzacStaronk.length<=1){uzacStaronk="0_"+uzacStaronk;}else{uzacStaronk=uzacStaronk.substring(0, 1)+"_"+uzacStaronk.substring(1);};
	img.src =ustanLitarNaMiasce(img.src,img.src.length-4,uzacStaronk); //gartanneVyklikFailaZnomarom[indStaronk].toString()
	
	var foavtar=allbackImgs[raspovLicnik][indZadnika];
	foavtar = foavtar.substr(3);foavtar=foavtar.replace("_", " ");
	document.getElementById('jaceikaHolstID').title='Текст: '+parms.malunki[raspovLicnik][1]+', страница '+(indStaronk+1)+'. Фото:'+foavtar.substr(0,foavtar.indexOf('.'));				
	//document.getElementById('jaceikaHolstID').style.opacity = 1;

tabRs = document.getElementById('tableZmest').getElementsByTagName("TR");
tabRs[0].parentNode.insertBefore(document.getElementById('id'+LepshPerehodyPaRaspovIstaronke[raspovLicnik][indStaronk]).parentNode, tabRs[0]);
//tabRs[0].parentNode.insertBefore(tabRs[LepshPerehodyPaRaspovIstaronke[raspovLicnik][indStaronk]], tabRs[0]);
}	

var zmenaPamerau = function (shyrSpacatku,vysotSpacatku,shyrMiesca,vysotMiesca) {//var function => function expression=>only defined when that line is reached
	if ((shyrSpacatku == shyrMiesca) && (vysotSpacatku >= vysotMiesca) || (vysotSpacatku == vysotMiesca) && (shyrSpacatku >= shyrMiesca)) {
		return [shyrMiesca,vysotMiesca];	// adrez
	} else { 					// pamensh i adrez
		if (shyrMiesca/shyrSpacatku > vysotMiesca/vysotSpacatku) {return [shyrSpacatku, vysotMiesca * shyrSpacatku/shyrMiesca];} 
		else {return [shyrMiesca * vysotSpacatku/vysotMiesca, vysotSpacatku];}
	}
}






var staronkuUperad = function() {//var function => function expression=>only defined when that line is reached
	var wPrec = Math.floor(parms.width * kadrGartannja / chasDlaGartannja);
	kadrGartannja--; 
	var w = Math.floor(parms.width * kadrGartannja / chasDlaGartannja);
	ctx.drawImage(canv,0,0,wPrec,    parms.height,        0,0,w,parms.height);
	ctx.drawImage(img, 0,tilicCanv,dimdraw[0],dimdraw[1],w,0,parms.width-w,parms.height) 
	//ctx.drawImage(img, 0,0,dimdraw[0],dimdraw[1],w,0,parms.width,parms.height) //ME novaja naletaet sminaet staruju
	//drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
	if (kadrGartannja == 0) clearInterval(chasLichnik);
}	
var staronkuUniz = function() {//staronkuUniz
	var wPrec = Math.floor(parms.width * kadrGartannja / chasDlaGartannja);
	kadrGartannja--;
	var w = Math.floor(parms.width * kadrGartannja / chasDlaGartannja);
	ctx.drawImage(canv,0,0,parms.width,    wPrec,        0,0,parms.width,w);
	ctx.drawImage(img, 0,tilicCanv,dimdraw[0],dimdraw[1],0,w,parms.width,parms.height-w) 
	if (kadrGartannja == 0) clearInterval(chasLichnik);
}		
var staronkuUzad = function() {
	var wPrec = Math.floor(parms.width * kadrGartannja / chasDlaGartannja);
	kadrGartannja--;
	var w = Math.floor(parms.width * kadrGartannja / chasDlaGartannja);
	ctx.drawImage(imgOld,0,tilicCanv,dimdraw[0],dimdraw[1],parms.width-w,0,w,parms.height);
	ctx.drawImage(img, 0,tilicCanv,dimdraw[0],dimdraw[1],		0,0,			parms.width-w,parms.height)
	if (kadrGartannja == 0) clearInterval(chasLichnik);
}
var staronkuUgoru = function() {//staronkuUgoru
	//var wPrec = Math.floor(parms.height * kadrGartannja / chasDlaGartannja);
	kadrGartannja--;
	var w = Math.floor(parms.height * kadrGartannja / chasDlaGartannja);
	ctx.drawImage(imgOld,0,tilicCanv,dimdraw[0],dimdraw[1],0,parms.height-w,parms.width,w);
	ctx.drawImage(img, 0,tilicCanv,dimdraw[0],dimdraw[1],		0,0,			parms.width,parms.height-w)
	if (kadrGartannja == 0) clearInterval(chasLichnik);
}
	
var illustrate = function(param) {	
	for (var attr in param) { parms[attr.toLowerCase()] = param[attr];}	// inserts arguments
	parms.effect = parms.effect.toLowerCase();
	yoscNazva = false;
	for (var i = 0;i < parms.malunki.length;i++) {
		if (Array.isArray(parms.malunki[i])) {
			yoscNazva = true;
		} else	parms.malunki[i] = [parms.malunki[i],"&nbsp;"];
	}
	//raspovLicnik = 0;         //WAS raspovLicnik = -1; 
	imLicnikiStarye = []; imLicnikiStaryeUse = []; //ME
	pershyPakaz = true;
	chasDlaGartannja = parms.transition*hutkascGartannja/1000;	// effect timing
	canv = document.createElement('canvas'); 	// creates new canvas element
	canv.id = parms.id+"_canvas"; 				// canvas id
	canv.height = parms.height;
	canv.width = parms.width;
	
	//canv.onmouseover = function(){chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja);};
	//canv.onmouseout = function(){chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja);};
	
	if (parms.id == "" || document.getElementById(parms.id) == null) {document.body.appendChild(canv);}		// adds the canvas to the body element
	else document.getElementById(parms.id).appendChild(canv);
	neAutoGartanne = parms.duration == "neAutoGartanne" || parms.duration == 0;
	if (! neAutoGartanne) {chasLichnikGart = setInterval(function() {gartacPracjag(1);},parms.duration);}
	zrabicGalounyVid();
	ctx = canv.getContext('2d');	
	ctx.id = "ctxID";		
	img.addEventListener("load",jakGartac);
	
	//img.addEventListener(onmouseover,{chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja);});
	//img.addEventListener(onmouseout,{chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja);});
	
	//img.addEventListener("load",imgOld = img;jakGartac;);//ME
	//gartacPracjag(1)	//BEFORE_ME first image
	//raspovLicnik=Math.floor(Math.random() * Math.max(vseIndsRaspov[vseIndsRaspov.length-1])) + 0;
	gartacPachatak(raspovLicnik,"down") //ME 
}
	
	
	
	
	
	
	
	
	
var jakGartac = function() {	
	kadrGartannja = chasDlaGartannja;
	//ctx.globalAlpha = 0.1  
	//document.getElementById("ctxID").id=0.1;
	dimdraw = zmenaPamerau(img.width,img.height,parms.width,parms.height)		
	if (pershyPakaz) {
		pershyPakaz = false;
		ctx.drawImage(img,0,tilicCanv,dimdraw[0],dimdraw[1],0,0,parms.width,parms.height);
	} else {
		//imgOld = img.cloneNode(true); //ctx.getImageData(0,0,parms.width,parms.height);//ME
		if (typeof gartFunkcia[parms.effect] != "undefined") {chasLichnik = setInterval(gartFunkcia[parms.effect],1000/hutkascGartannja);}
		else if (typeof wipeDirections[parms.effect] != "undefined") {chasLichnik = setInterval(function() {staronkuUgoru()},1000/hutkascGartannja);}
		else {
			ctx.drawImage(img,0,tilicCanv,dimdraw[0],dimdraw[1],0,0,parms.width,parms.height);	// no effect
		}
	} 
	if (yoscNazva) {
		document.getElementById(parms.id+"_title").style.color = document.body.style.backgroundColor;
		document.getElementById(parms.id+"_title").style.backgroundColor = 'white';
		document.getElementById(parms.id+"_title").style.opacity = 0.6980;
		document.getElementById(parms.id+"_title").innerHTML = parms.malunki[raspovLicnik][1]+"  (оценка:"+parms.malunki[raspovLicnik][3]+", спорность:"+parms.malunki[raspovLicnik][4]+", поэтичность:"+parms.malunki[raspovLicnik][5]+")";
		document.getElementById(parms.id+"_title").style.fontSize = "large";
		curW=screen.availWidth; while(curW<1000){curW+=300;document.getElementById(parms.id+"_title").style.fontSize = "larger";};//STAY SAME:window.innerWidth>=document.documentElement.clientWidth>document.body.clientWidth
		document.getElementById(parms.id+"_title").style.fontWeight  = "bolder";
	}
}
	
	
	
	
	
	
	
	


var zrabicGalounyVid = function() {	
	var galounyVid = document.createElement('table');		
	galounyVid.id = parms.id+"_table";//BEFORE
	galounyVid.id = "tablePageID";//AFTER
	canv.parentNode.appendChild(galounyVid) 
	document.getElementById("idDivUSEkartynkaStaronkaTableJacejkiGart").appendChild(galounyVid)   //ME
	galounyVid.setAttribute('style','width:'+Math.floor(adformShyrynjaHolst*1.00000000)+'px');//hope that 'px' is default, so  +'px'); is not necessary. without it '100'+1='101'// NOT WORKING?
	galounyVid.width=adformShyrynjaHolst+00000000000000;
	
	var RowUverhu = galounyVid.insertRow();
	var jaceika1uverhu  = RowUverhu.insertCell();
	jaceika1uverhu.style.cursor = 'pointer';
	jaceika1uverhu.setAttribute('style','font-size: 325%; cursor: pointer; text-align:center;width:'+adformShyrynjaHolst+'px');//hope that 'px' is default, so  +'px'); is not necessary. without it '100'+1='101'// NOT WORKING?
	jaceika1uverhu.width=adformShyrynjaHolst;
	jaceika1uverhu.innerHTML = "&#9167"; //fast upward(bad in Chrome): "&#x24eb";	// up: with pause &#9167
	jaceika1uverhu.style.border = "2px solid #000";
	jaceika1uverhu.addEventListener("click",function() {if(imLicnikiStarye.length>0) {
		raspovLicnik=imLicnikiStarye.pop();
		gartacPachatak(raspovLicnik,"up");};}); //WAS gartacPracjag(parms.malunki.length-1)
	jaceika1uverhu.id="jaceika1uverhuID";	
	jaceika1uverhu.title="Предыдущий прочитанный текст";	
		
	//jaceika1uverhu.addEventListener(onmouseover,{chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja)});
	//jaceika1uverhu.addEventListener(onmouseout,{chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja)});	
	//jaceika1uverhu.onmouseover = function(){chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja);};
	//jaceika1uverhu.onmouseout = function(){chasLichnik = setInterval(function() {fader(wipeDirections[parms.effect])},1000/hutkascGartannja);};		
	
	var tryJaceiki = galounyVid.insertRow();
	if (neAutoGartanne) {
		var jaceikaZleva  = tryJaceiki.insertCell();
		jaceikaZleva.style.cursor = 'pointer';
		jaceikaZleva.setAttribute('style','font-size:325%; cursor: pointer; text-align:center;height:'+adformVyshinjaHolst+'px');//hope that 'px' is default, so  +'px'); is not necessary. without it '100'+1='101'// NOT WORKING? width:36px
		jaceikaZleva.height=adformVyshinjaHolst;
		jaceikaZleva.innerHTML = "&#x23ea";	// left triangle  &#9668;   "&#9616"
		jaceikaZleva.style.border = "2px solid #000";
		jaceikaZleva.addEventListener("click",function() {gartacPracjag(-1);}); //WAS gartacPracjag(parms.malunki.length-1)
		jaceikaZleva.id="jaceikaZlevaID";
		jaceikaZleva.title="Предыдущая страница";	
	}		
	var jaceikaHolst  = tryJaceiki.insertCell();
	jaceikaHolst.appendChild(canv);		// the canvas
	jaceikaHolst.title='Алесь Мищенко. Нелинейная интерактивная книга "Индульгенция людей"';
	jaceikaHolst.id="jaceikaHolstID";
	//jaceikaHolst.setAttribute('style','height:adformVyshinjaHolst;width:adformShyrynjaHolst;'); NOT WORKING
	jaceikaHolst.width=adformShyrynjaHolst;  jaceikaHolst.style.width=adformShyrynjaHolst;
	jaceikaHolst.height=adformVyshinjaHolst; jaceikaHolst.style.height=adformVyshinjaHolst;
	if (neAutoGartanne) {
		var jaceikaZprava  = tryJaceiki.insertCell();
		jaceikaZprava.style.cursor = 'pointer';
		jaceikaZprava.setAttribute('style','font-size: 325%; cursor: pointer; text-align:center;height:'+adformVyshinjaHolst+'px');//hope that 'px' is default, so  +'px'); is not necessary. without it '100'+1='101'// NOT WORKING? width:36px  adformVyshinjaHolst adformShyrynjaHolst
		jaceikaZprava.height=adformVyshinjaHolst;
		jaceikaZprava.innerHTML = "&#x23e9";	// right triangle  &#9658; << &#x23e9
		jaceikaZprava.style.border = "2px solid #000";
		jaceikaZprava.addEventListener("click",function() {gartacPracjag(1);});
		jaceikaZprava.id="jaceikaZpravaID";
		jaceikaZprava.title="Следующая страница";	
	}
jaceika1uverhu.onmouseover= function() {this.style.backgroundColor = 'white'; this.style.opacity = 1.0;}; //mousedown mouseup click dblclick //oncontextmenu
jaceika1uverhu.onclick = 	function() {this.style.backgroundColor = 'white';};
jaceika1uverhu.onmouseout = function() {this.style.backgroundColor = 'white'; this.style.opacity = 0.7;};	
jaceikaZleva.onmouseover = 	function() {this.style.backgroundColor = 'white'; this.style.opacity = 1.0;};
jaceikaZleva.onclick = 		function() {this.style.backgroundColor = 'white';};
jaceikaZleva.onmouseout = function() {this.style.backgroundColor = 'white'; this.style.opacity = 0.7;};	
//jaceikaHolst.onmouseover = function() {tfOld=gartFunkcia;gartFunkcia=fader;img.src = "./allims/murzilka.jpg";ctx.globalAlpha=0.3;gartFunkcia=tfOld;globalAlpha=1;};//{ctx.globalAlpha=0.3;}; //{ctx.globalCompositeOperation = "lighter";}; //

function PisovkaZadnikaNaRaspovSprozrac(prozrac) {
var imgNaRaspov = document.createElement('img');
imgNaRaspov.src= strOrig;	
imgNaRaspovMinRazmer = Math.min(imgNaRaspov.width, imgNaRaspov.height);
poluWidth=Math.floor(imgNaRaspov.width/2); poluHeight=Math.floor(imgNaRaspov.height/2); poluMinRazmer=Math.floor(imgNaRaspovMinRazmer/2);
	ctx1 = canv.getContext('2d'); ctx1.globalAlpha=prozrac; //raspovLicnik = Math.floor(Math.random()*3) + 0;
	//ctx1.drawImage(imgNaRaspov, 0, 0, imgNaRaspov.width,    imgNaRaspov.height, 0, 0, canv.width, canv.height);
	//ctx1.drawImage(imgNaRaspov, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, canv.width, canv.height); end2018
	ctx1.drawImage(imgNaRaspov, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, parms.width, parms.height);
}


// onclick onmousedown onmouseover
jaceikaHolst.onmouseover = function() {PisovkaZadnikaNaRaspovSprozrac(0.42+Math.random()*0.3);
	//ctx1 = canv.getContext('2d'); ctx1.globalAlpha=0.5; 
	//ctx1.drawImage(imgNaRaspov, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, canv.width, canv.height);
	};
jaceikaHolst.onclick = function() {PisovkaZadnikaNaRaspovSprozrac(0.42+Math.random()*0.3);
	//ctx1 = canv.getContext('2d'); ctx1.globalAlpha=0.5; 
	//ctx1.drawImage(imgNaRaspov, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, canv.width, canv.height);
	};	
jaceikaHolst.ontouchdown = function() {PisovkaZadnikaNaRaspovSprozrac(0.42+Math.random()*0.3);		
	//ctx1 = canv.getContext('2d'); ctx1.globalAlpha=Math.random() * 0.44;
	//ctx1.drawImage(imgNaRaspov, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, canv.width, canv.height);
	};		
jaceikaHolst.ontouchup = function() {PisovkaZadnikaNaRaspovSprozrac(0.42+Math.random()*0.3);			
	//ctx1 = canv.getContext('2d'); ctx1.globalAlpha=Math.random() * 0.44;
	//ctx1.drawImage(imgNaRaspov,img, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, canv.width, canv.height);
	};		
jaceikaHolst.oncontextmenu = function() {PisovkaZadnikaNaRaspovSprozrac(0.42+Math.random()*0.3);			
	//ctx1 = canv.getContext('2d'); ctx1.globalAlpha=Math.random() * 0.44;
	//ctx1.drawImage(imgNaRaspov, poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, canv.width, canv.height);
	};		//{ctx.globalAlpha=0.3;}; //{ctx.globalCompositeOperation = "lighter";}; //					
jaceikaHolst.onmouseout = function() {//PisovkaZadnikaNaRaspovSprozrac(0);	
	ctx1.globalAlpha=1;
	ctx1.drawImage(img,0,tilicCanv,dimdraw[0],dimdraw[1],0,0,parms.width,parms.height);	
	//ctx1.clearRect(0, 0, ctx1.width, ctx1.height);	
	//ctx1.globalAlpha=1;
	};//{ctx.globalAlpha=0.3;}; //{ctx.globalCompositeOperation = "lighter";}; //		
//jaceikaHolst.onmouseout = function() {};//{document.getElementById("ctxID").globalAlpha=0.3;}; //	{document.getElementById("ctxID")globalCompositeOperation = "lighter";}; 
jaceikaZprava.onmouseover = function() {this.style.backgroundColor = 'white'; this.style.opacity = 1.0;};
jaceikaZprava.onmouseout = function() {this.style.backgroundColor = 'white'; this.style.opacity = 0.7;};			
	
	
if (neAutoGartanne) {		
//document.getElementById("buttonidNext").addEventListener("click", function(){gartacPracjag(1);});
//document.getElementById("buttonidPrev").addEventListener("click", function(){gartacPracjag(-1);}); //WAS gartacPracjag(parms.malunki.length-1)
/* document.getElementById("buttonidSelected").addEventListener("click", function(){gartacPracjag(2);}); */

var zTable = document.getElementById('tableZmest');
var lenTable = zTable.rows.length;
var toReaderSize = document.getElementById('idh2zagolov1').innerHTML.charCodeAt(sizeKVARDstr);
var toReaderLen = document.getElementById('idh2zagolov1').innerHTML.charCodeAt(useIndakPaTem.length+1);
var toReaderStart = document.getElementById('idh2zagolov1').innerHTML.length;
for(var i=toReaderLen-toReaderStart-toReaderSize;i<=toReaderSize;i++) {toReader.push(i);}
document.getElementById(('button'+0).toString()).addEventListener("click", function(){gartacPachatak(toReader[0],"down");});
document.getElementById(('button'+1).toString()).addEventListener("click", function(){gartacPachatak(toReader[1],"down");});
document.getElementById(('button'+2).toString()).addEventListener("click", function(){gartacPachatak(toReader[2],"down");});
document.getElementById(('button'+3).toString()).addEventListener("click", function(){gartacPachatak(toReader[3],"down");});
document.getElementById(('button'+4).toString()).addEventListener("click", function(){gartacPachatak(toReader[4],"down");});
document.getElementById(('button'+5).toString()).addEventListener("click", function(){gartacPachatak(toReader[5],"down");});
document.getElementById(('button'+6).toString()).addEventListener("click", function(){gartacPachatak(toReader[6],"down");});
document.getElementById(('button'+7).toString()).addEventListener("click", function(){gartacPachatak(toReader[7],"down");});
document.getElementById(('button'+8).toString()).addEventListener("click", function(){gartacPachatak(toReader[8],"down");});
document.getElementById(('button'+9).toString()).addEventListener("click", function(){gartacPachatak(toReader[9],"down");});
document.getElementById(('button'+10).toString()).addEventListener("click", function(){gartacPachatak(toReader[10],"down");});
document.getElementById(('button'+11).toString()).addEventListener("click", function(){gartacPachatak(toReader[11],"down");});
document.getElementById(('button'+12).toString()).addEventListener("click", function(){gartacPachatak(toReader[12],"down");});
document.getElementById(('button'+13).toString()).addEventListener("click", function(){gartacPachatak(toReader[13],"down");});
document.getElementById(('button'+14).toString()).addEventListener("click", function(){gartacPachatak(toReader[14],"down");});
document.getElementById(('button'+15).toString()).addEventListener("click", function(){gartacPachatak(toReader[15],"down");});
document.getElementById(('button'+16).toString()).addEventListener("click", function(){gartacPachatak(toReader[16],"down");});
document.getElementById(('button'+17).toString()).addEventListener("click", function(){gartacPachatak(toReader[17],"down");});
document.getElementById(('button'+18).toString()).addEventListener("click", function(){gartacPachatak(toReader[18],"down");});
document.getElementById(('button'+19).toString()).addEventListener("click", function(){gartacPachatak(toReader[19],"down");});
document.getElementById(('button'+20).toString()).addEventListener("click", function(){gartacPachatak(toReader[20],"down");});
document.getElementById(('button'+21).toString()).addEventListener("click", function(){gartacPachatak(toReader[21],"down");});
document.getElementById(('button'+22).toString()).addEventListener("click", function(){gartacPachatak(toReader[22],"down");});
document.getElementById(('button'+23).toString()).addEventListener("click", function(){gartacPachatak(toReader[23],"down");});
document.getElementById(('button'+24).toString()).addEventListener("click", function(){gartacPachatak(toReader[24],"down");});
document.getElementById(('button'+25).toString()).addEventListener("click", function(){gartacPachatak(toReader[25],"down");});
document.getElementById(('button'+26).toString()).addEventListener("click", function(){gartacPachatak(toReader[26],"down");});
document.getElementById(('button'+27).toString()).addEventListener("click", function(){gartacPachatak(toReader[27],"down");});
document.getElementById(('button'+28).toString()).addEventListener("click", function(){gartacPachatak(toReader[28],"down");});
document.getElementById(('button'+29).toString()).addEventListener("click", function(){gartacPachatak(toReader[29],"down");});
document.getElementById(('button'+30).toString()).addEventListener("click", function(){gartacPachatak(toReader[30],"down");});
document.getElementById(('button'+31).toString()).addEventListener("click", function(){gartacPachatak(toReader[31],"down");});
document.getElementById(('button'+32).toString()).addEventListener("click", function(){gartacPachatak(toReader[32],"down");});

document.getElementById('idMotsCles0').addEventListener("click", function(){gartacPachatak(toReader[0],"down");});
document.getElementById('idMotsCles1').addEventListener("click", function(){gartacPachatak(toReader[1],"down");});
document.getElementById('idMotsCles2').addEventListener("click", function(){gartacPachatak(toReader[2],"down");});
document.getElementById('idMotsCles3').addEventListener("click", function(){gartacPachatak(toReader[3],"down");});
document.getElementById('idMotsCles4').addEventListener("click", function(){gartacPachatak(toReader[4],"down");});
document.getElementById('idMotsCles5').addEventListener("click", function(){gartacPachatak(toReader[5],"down");});
document.getElementById('idMotsCles6').addEventListener("click", function(){gartacPachatak(toReader[6],"down");});
document.getElementById('idMotsCles7').addEventListener("click", function(){gartacPachatak(toReader[7],"down");});
document.getElementById('idMotsCles8').addEventListener("click", function(){gartacPachatak(toReader[8],"down");});
document.getElementById('idMotsCles9').addEventListener("click", function(){gartacPachatak(toReader[9],"down");});
document.getElementById('idMotsCles10').addEventListener("click", function(){gartacPachatak(toReader[10],"down");});
document.getElementById('idMotsCles11').addEventListener("click", function(){gartacPachatak(toReader[11],"down");});
document.getElementById('idMotsCles12').addEventListener("click", function(){gartacPachatak(toReader[12],"down");});
document.getElementById('idMotsCles13').addEventListener("click", function(){gartacPachatak(toReader[13],"down");});
document.getElementById('idMotsCles14').addEventListener("click", function(){gartacPachatak(toReader[14],"down");});
document.getElementById('idMotsCles15').addEventListener("click", function(){gartacPachatak(toReader[15],"down");});
document.getElementById('idMotsCles16').addEventListener("click", function(){gartacPachatak(toReader[16],"down");});
document.getElementById('idMotsCles17').addEventListener("click", function(){gartacPachatak(toReader[17],"down");});
document.getElementById('idMotsCles18').addEventListener("click", function(){gartacPachatak(toReader[18],"down");});
document.getElementById('idMotsCles19').addEventListener("click", function(){gartacPachatak(toReader[19],"down");});
document.getElementById('idMotsCles20').addEventListener("click", function(){gartacPachatak(toReader[20],"down");});
document.getElementById('idMotsCles21').addEventListener("click", function(){gartacPachatak(toReader[21],"down");});
document.getElementById('idMotsCles22').addEventListener("click", function(){gartacPachatak(toReader[22],"down");});
document.getElementById('idMotsCles23').addEventListener("click", function(){gartacPachatak(toReader[23],"down");});
document.getElementById('idMotsCles24').addEventListener("click", function(){gartacPachatak(toReader[24],"down");});
document.getElementById('idMotsCles25').addEventListener("click", function(){gartacPachatak(toReader[25],"down");});
document.getElementById('idMotsCles26').addEventListener("click", function(){gartacPachatak(toReader[26],"down");});
document.getElementById('idMotsCles27').addEventListener("click", function(){gartacPachatak(toReader[27],"down");});
document.getElementById('idMotsCles28').addEventListener("click", function(){gartacPachatak(toReader[28],"down");});
document.getElementById('idMotsCles29').addEventListener("click", function(){gartacPachatak(toReader[29],"down");});
document.getElementById('idMotsCles30').addEventListener("click", function(){gartacPachatak(toReader[30],"down");});
document.getElementById('idMotsCles31').addEventListener("click", function(){gartacPachatak(toReader[31],"down");});
document.getElementById('idMotsCles32').addEventListener("click", function(){gartacPachatak(toReader[32],"down");});
}		
	jaceikaHolst  = tryJaceiki.insertCell();
	 
	if (yoscNazva) {
		tryJaceiki = galounyVid.insertRow(0);
		newCell1 = tryJaceiki.insertCell();
		newCell2 = tryJaceiki.insertCell();
		newCell2.id =  parms.id+"_title";
		galounyVid.rows[1].cells[0].colSpan = 3;
		jaceikaHolst.style.textAlign = "center";
	}
}


var gartFunkcia = {"staronkaUperad":staronkuUperad,"staronkaUzad":staronkuUzad,"staronkaUgoru":staronkuUgoru,"staronkaUniz":staronkuUniz};	


//document.getElementById("buttonid").addEventListener("click", function(){gartacPracjag(1);});
//document.frm.getElementById("buttonid2").addEventListener("click", function(){document.getElementById("newRowID").click();});



return {
	//document.onload = function () { zrabicTZmest() }
	illustrate:illustrate,
	stop:function() {
		clearInterval(chasLichnik);
		clearInterval(chasLichnikGart)
		var imageData = ctx.getImageData(0,0,canv.width, canv.height);
		var data = imageData.data;
		for (var i = 3; i < data.length; i += 4) data[i]  = 127;
		ctx.putImageData(imageData, 0, 0);
	},
	restart:function() {
		if (parms.duration.toLowerCase() != "neAutoGartanne" && parms.duration > 0) {
			//chasLichnikGart = setInterval(function() {gartacPracjag(1);},parms.duration);	//BEFORE
			chasLichnikGart = setInterval(function() {
				//raspovLicnik=Math.floor(Math.random() * Math.max(vseIndsRaspov[vseIndsRaspov.length-1])) + 0;
				gartacPachatak(raspovLicnik,"down");},parms.duration);//ME				
		}
	}
}
}();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function changeText(delta) {//posle nazatia etoi knopki omouseover->miganie
adformShyrynjaHolst=Math.floor(adformShyrynjaHolst*delta);adformVyshinjaHolst=Math.floor(adformVyshinjaHolst*delta);
var shyrynjaKVARD=adformShyrynjaHolst;
var vyshinjaKVARD=adformVyshinjaHolst;
if(!shyrynjaKVARD>0){shyrynjaKVARD=vyshinjaKVARD};if(!vyshinjaKVARD>0){vyshinjaKVARD=shyrynjaKVARD};
//document.getElementById("divStarajaGall_canvas").setAttribute('style',	'width:'+shyrynjaKVARD+'px');//setAttribute ERASES all other attributes
//document.getElementById("divStarajaGall_canvas").setAttribute('style',	'height:'+vyshinjaKVARD+'px');
document.getElementById("divStarajaGall_canvas").style.width=			shyrynjaKVARD.toString()+'px';
document.getElementById("divStarajaGall_canvas").style.height=			vyshinjaKVARD.toString()+'px';

//document.getElementById("jaceikaHolstID").setAttribute('style',	'width:'+shyrynjaKVARD+'px');
//document.getElementById("jaceikaHolstID").setAttribute('style',	'height:'+vyshinjaKVARD+'px');
document.getElementById("jaceikaHolstID").style.width=			shyrynjaKVARD.toString()+'px';
document.getElementById("jaceikaHolstID").style.height=			vyshinjaKVARD.toString()+'px';

malrazmerSTRELOK=Math.floor(shyrynjaKVARD/sizeKVARDstr);
bolrazmerSTRELOK=Math.floor(7*vyshinjaKVARD/sizeKVARDstr);

//document.getElementById("jaceikaZpravaID").setAttribute('style',	'width:'+malrazmerSTRELOK+'px');
//document.getElementById("jaceikaZpravaID").setAttribute('style',	'height:'+vyshinjaKVARD+'px');
document.getElementById("jaceikaZpravaID").style.width=			malrazmerSTRELOK.toString()+'px';
document.getElementById("jaceikaZpravaID").style.height=			vyshinjaKVARD.toString()+'px';
document.getElementById('jaceikaZpravaID').style.backgroundColor = 'white';
document.getElementById('jaceikaZpravaID').style.opacity = 0.5981;

//document.getElementById("jaceikaZlevaID").setAttribute('style',	'width:'+malrazmerSTRELOK+'px');
//document.getElementById("jaceikaZlevaID").setAttribute('style',	'height:'+vyshinjaKVARD+'px');
document.getElementById("jaceikaZlevaID").style.width=			malrazmerSTRELOK.toString()+'px';
document.getElementById("jaceikaZlevaID").style.height=			vyshinjaKVARD.toString()+'px';
document.getElementById('jaceikaZlevaID').style.backgroundColor = 'white';
document.getElementById('jaceikaZlevaID').style.opacity = 0.5981;

//document.getElementById("jaceika1uverhuID").setAttribute('style',	'width:'+bolrazmerSTRELOK+'px');
//document.getElementById("jaceika1uverhuID").setAttribute('style',	'height:'+malrazmerSTRELOK+'px');
document.getElementById("jaceika1uverhuID").style.width=			bolrazmerSTRELOK.toString()+'px';
document.getElementById("jaceika1uverhuID").style.height=			malrazmerSTRELOK.toString()+'px';
document.getElementById('jaceika1uverhuID').style.backgroundColor = 'white';
document.getElementById('jaceika1uverhuID').style.opacity = 0.5981;

//document.getElementById("tablePageID").setAttribute('style',	'width:'+bolrazmerSTRELOK+'px');//setAttribute ERASES all other attributes
//document.getElementById("tablePageID").setAttribute('style',	'height:'+bolrazmerSTRELOK+'px');
document.getElementById("tablePageID").style.width=			bolrazmerSTRELOK.toString()+'px';
document.getElementById("tablePageID").style.height=			bolrazmerSTRELOK.toString()+'px';

/*
var tds = document.getElementById("idDivTZmest").getElementsByTagName("td");
////ctx1 = document.getElementById("divStarajaGall_canvas").getContext('2d');
////ctx1.drawImage(document.getElementsByTagName('img')[1], poluWidth-poluMinRazmer, poluHeight-poluMinRazmer, imgNaRaspovMinRazmer, imgNaRaspovMinRazmer, 0, 0, adformShyrynjaHolst, adformVyshinjaHolst);
for (var i = 0; i < tds.length; i++) {
if(document.getElementById(tds[i].id)!=null)
{
s=document.getElementById(tds[i].id).style.width;
//if(s[s.length-1]=='x'){s = s.substring(0, s.length - 1);};
//if(s[s.length-1]=='p'){s = s.substring(0, s.length - 1);};
//shyrynjaKVARD=Math.floor(Number(s)*delta);
//neww=Math.floor(document.getElementById(tds[i].id).style.width*delta);
//document.getElementById(tds[i].id).style.width=neww;
//document.getElementById(tds[i].id).setAttribute('style','width:'+neww+'px');

document.getElementById(tds[i].id).setAttribute('style',	'width:'+bolrazmerSTRELOK+'px');
document.getElementById(tds[i].id).style.width=			bolrazmerSTRELOK.toString()+'px';
}
else {neww=Math.floor(tds[i].width*delta);
tds[i].width=neww;
};
};
*/
document.getElementById("idDivUSEkartynkaStaronkaTableJacejkiGart").style.height=			bolrazmerSTRELOK.toString()+'px';
allign2ids(bolrazmerSTRELOK,"idDivUSEkartynkaStaronkaTableJacejkiGart","idDivOglavANDsortOglav");
}

function allign2ids(razmLeft,idLeft,idRight) {
document.getElementById(idLeft).style.width=			razmLeft.toString()+'px';
document.getElementById(idLeft).style.height=			razmLeft.toString()+'px';
//document.getElementById(idLeft).setAttribute('style',	'float:left');
document.getElementById(idLeft).style.cssFloat =			'left';
if(razmLeft<window.innerWidth/2){
document.getElementById(idRight).style.width=Math.floor((window.innerWidth-razmLeft)*0.9-10).toString()+"px";
document.getElementById(idRight).style.cssFloat =			'right';
}else{
document.getElementById(idRight).style.width=Math.floor(window.innerWidth*0.9-10).toString()+"px";
document.getElementById(idRight).style.cssFloat =			'right';
}
}


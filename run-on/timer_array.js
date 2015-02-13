var subject = ["idiota", "la mujer", "hombre", "cerdo", "lobo", "el pelado", "la pelada"];
var verb = ["caminando", "comiendo", "durmiendo", "pichando", "alborotado", "jodiendo", "riendose", "nervioso", "timbrado"];
var object = ["computador", "en la calle", "asiento", "pupitre", "mesa", "mostrador", "pasillo"];

var timesRandomlyCreatSen = 0;

var makeSentence = function again(subject, verb, object){
var x = Math.random()*subject.length;
var y = Math.random()*verb.length;
var z = Math.random()*object.length;

console.log("%c Reapeat after me:" + x + y + z, "font-size:30px; color:red; background:yellow; -webkit-transform: rotate(30 deg);");

timesRandomlyCreatSen += 1;

if(timesRandomlyCreatSen < 10){
setTimeout(function(){
	again(subject, verb, object);
	}, 1000);
}else{
	timesRandomlyCreatSen = 0;
	console.log("%c YOU know it:" + x + y + z, "font-size:30px; color:white; background:blue;");
}
}

makeSentence ("subject", "verb", "object");



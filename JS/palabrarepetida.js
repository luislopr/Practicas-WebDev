let texto = 'Otros, a pesar del sufrimiento por haber perdido y humillados por las historias que los vencedores cuentan de ellos,';

texto += 'se permiten derramar algunas lágrimas, pero nunca sienten pena de sí mismos. Saben que el combate sólo se ha interrumpido y que, por el momento, están en desventaja. Escuchan los latidos de su propio corazón. Notan que están tensos. Que tienen miedo. Hacen balance de su vida y descubren que, pese al terror que sienten, la fe sigue iluminando su alma y empujándolos hacia adelante.' ;

const myReg = /[.,!]/g;

function normalize(string){
    return string.toLowerCase().replace(myReg, '');
}
texto = normalize(texto);

console.log(hash(texto));

function palabraRepetidas(string){

}


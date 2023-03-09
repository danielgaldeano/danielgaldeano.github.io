document.getElementById("dato").onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById("cuerpo").innerHTML = ""
}
document.getElementById("for1").onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById("cuerpo").innerHTML = "Formación académica: últimos estudios terminados o por terminar, se da por hecho que los anteriores están realizados así que no los cites, incluye también el nombre del centro y la fecha de finalización. Formación complementaria: cursos, seminarios, congresos, jornadas,... señalando el número de horas, nombre del centro y fecha de realización"
}
document.getElementById("labo").onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById("cuerpo").innerHTML = "Experiencia profesional y laboral: relación de los trabajos realizados en función del puesto que optas, especificando puesto desempeñado, nombre de la empresa,fecha de inicio y finalización de la actividad y funciones desempeñadas. Si notienes experiencia laboral, no te olvides de incluir las prácticas profesionales o actividades no remuneradas."
}
document.getElementById("otro").onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById("cuerpo").innerHTML = "Otros datos de interés: incluye actividades que puedan ser interesantes (disponibilidad para viajar o cambiar de residencia,….) pero no cites aquellas que no tengan nada que ver con el trabajo al que optas. "
}
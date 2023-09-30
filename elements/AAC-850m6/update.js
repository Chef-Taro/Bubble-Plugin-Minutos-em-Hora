function(instance, properties, context) {

var horas, minutos, display

 if (properties.minutos > 0){
    horas = Math.floor(properties.minutos / 60);
    
    minutos = properties.minutos % 60;
    
    display = (horas ? (horas > 9 ? horas : "0" + horas) : "00") + ":" + (minutos ? (minutos > 9 ? minutos : "0" + minutos) : "00");
    
    instance.publishState('display',display);
 }
}
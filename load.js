console.log(window.location.href);

if (window.location.href.startsWith("http://gscbrasilpr01.bs.br.bsch:8082/arsys/forms/spuap460.bs.br.bsch/PTS:Seleccionar_Peticion_Servicio/PTS:Seleccionar_Servicio/")) {
    addScript({
        src: 'https://code.jquery.com/jquery-3.3.1.min.js',
        type: 'text/javascript',
        async: null
    }, null, function() {
        remedyPluginStart();
    });

}

function addScript(attribute, text, callback) {
    var s = document.createElement('script');
    for (var attr in attribute) {
        s.setAttribute(attr, attribute[attr] ? attribute[attr] : null)
    }
    s.innerHTML = text;
    s.onload = callback;
    document.body.appendChild(s);
}



function remedyPluginStart() {
    var divOver = document.createElement('div');
    divOver.setAttribute('style', 'position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: rgba(252,156,156,0.5); z-index: 30000;')
    divOver.innerHTML = "<iframe src='http://localhost:3000/' style='width: 100%; height: 100%'></iframe>";
    document.body.appendChild(divOver);
    //alert('remedyPluginStart');


}
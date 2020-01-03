// Inline popups open from top
$('.open-popup-link').magnificPopup({
  type:'inline',
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
$(function(){
  //Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+7(999)999-99-99");
});
function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
function sendForm (){
    var xmlhttp = getXmlHttp();
    var data = '?';
    for (let i=0; i<send_form.elements.length-1; i++){
        data+=send_form.elements[i].name+'='+send_form.elements[i].value+'&';
    }
    xmlhttp.open('GET','sendmail.php'+data,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4){
            if (xmlhttp.status==200){
                send_form.innerHTML='<h5>'+xmlhttp.responseText+'</h5>';
            }
        }
    }
}
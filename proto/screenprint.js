function screenprint()
{
  var links = document.head.getElementsByTagName('LINK');
  for (var i=0; i<links.length; i++) {
    if ( links[i].rel.toLowerCase() == "stylesheet" ) {
      links[i].media += ",print"
    }
  }
  window.print();
}

if (window.top === window) { // The parent frame is the top-level frame, not an iframe.
  screenprint();
}

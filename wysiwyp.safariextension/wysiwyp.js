function wysiwyp()
{
  var links = document.head.getElementsByTagName('LINK'); // link tags

  for (var i=0; i<links.length; i++) 
  {
    if ( links[i].rel.toLowerCase() == "stylesheet" ) { // just stylesheets
      if ( links[i].media != '' ) {
        links[i].media += ",print";
      }
    }
  }
}

wysiwyp();

var lastOpen = null;

function initContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      setContent(this);
    }
  };
  xhttp.open("GET", "content.xml", true);
  xhttp.send();
}

function setContent(xml) {
  var xmlDoc = xml.responseXML;
  var section = xmlDoc.getElementsByTagName("section");
  var content = '';

  for(var i = 0; i < section.length; i++) {
    var contentElement = section[i]
      .getElementsByTagName("content");
    var paragraphs = contentElement[0]
      .getElementsByTagName("paragraph");
    for(var j = 0; j < paragraphs.length; j++) {
      content += "<p>" + paragraphs[j]
        .childNodes[0]
        .nodeValue + "</p>";
    }

    var divName = "hiddenModalContent" + i.toString();
    document.getElementById(divName).innerHTML = content;

    //Reset content to empty
    content = '';
  }
}

function toggleHideDiv(indexNumber) {
  var divName = "hiddenModal" + indexNumber.toString();
  var div = document.getElementById(divName);

  if(div.style.display === 'none'){
    if(lastOpen !== null){
      $(lastOpen).fadeOut(250);
    }
    $(div).fadeIn(500);
    lastOpen = div;
  } else {
    lastOpen = null;
    $(div).fadeOut(250);
  }
}
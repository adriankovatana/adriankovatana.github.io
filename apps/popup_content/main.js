function getContent(indexNumber) {
  showPopup();

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      setContent(this, indexNumber);
    }
  };
  xhttp.open("GET", "content.xml", true);
  xhttp.send();
}

function setContent(xml, indexNumber) {
  var xmlDoc = xml.responseXML;
  var section = xmlDoc.getElementsByTagName("section");
  var heading = '';
  var content = '';

  if(Number.isInteger(indexNumber)){
    heading = "<h3>" + section[indexNumber]
      .getElementsByTagName("heading")[0]
      .childNodes[0].nodeValue + "</h3>";
    var contentElement = section[indexNumber]
      .getElementsByTagName("content");
    var paragraphs = contentElement[0]
      .getElementsByTagName("paragraph");
    for(var i = 0; i < paragraphs.length; i++) {
      content += "<p>" + paragraphs[i]
        .childNodes[0]
        .nodeValue + "</p>";
    }
  } else {
    content = '<h3>Section Header</h3>' +
              '<p>Section paragraph.</p>';
  }

  document.getElementById("openModalContent").innerHTML = 
    heading + content;
}

function showPopup() {
  $('body').addClass('stop-scrolling');
  document.getElementById("openModal").style.display = "block";
}

function hidePopup() {
  $('body').removeClass('stop-scrolling');
  document.getElementById("openModal").style.display = "none";
}
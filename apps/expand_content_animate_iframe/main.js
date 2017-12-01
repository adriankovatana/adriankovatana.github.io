var lastOpen = null;
var lastTextOpen = null;

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
    document.getElementById(divName).setAttribute("style", "opacity: 0.0;")

    //Reset content to empty
    content = '';
  }
}

function toggleHideDiv(indexNumber) {
  var divName = "hiddenModal" + indexNumber.toString();
  var div = document.getElementById(divName);

  var textDivName = "hiddenModalContent" + indexNumber.toString();
  var textDiv = document.getElementById(textDivName);

  if(div.style.display === 'none'){
    if(lastOpen !== null){
      $(lastOpen).slideUp(300, function() {
        $(lastTextOpen).css('opacity', '0');
        lastOpen = div;
        lastTextOpen = textDiv;
      });

      $(div).slideDown(300, function() {
        $(textDiv).fadeTo(500, 1);
      });
    } else {
      $(div).slideDown(300, function() {
        $(textDiv).fadeTo(500, 1, function() {
          lastOpen = div;
          lastTextOpen = textDiv;
        });
      });
    }
  } else {
    $(textDiv).fadeTo(500, 0, 
      function() {
        $(div).slideUp(300, function() {
          lastOpen = null;
          lastTextOpen = null;
        });
      }
    );
  }

  // if(div.style.display === 'none'){
  //   $(div).slideDown(500, function() {
  //     if(lastOpen !== null){
  //       $(lastTextOpen).fadeTo(500, 0, 
  //         function() {
  //           $(lastOpen).slideUp(500, function() {
  //             $(textDiv).fadeTo(500, 1);
  //             lastOpen = div;
  //             lastTextOpen = textDiv;
  //           });
  //         }
  //       );
  //     } else {
  //       $(textDiv).fadeTo(500, 1);
  //       lastOpen = div;
  //       lastTextOpen = textDiv;
  //     }
  //   });
  // } else {
  //   $(textDiv).fadeTo(500, 0, 
  //     function() {
  //       $(div).slideUp(500);
  //       lastOpen = null;
  //       lastTextOpen = null;
  //     }
  //   );
  // }
}
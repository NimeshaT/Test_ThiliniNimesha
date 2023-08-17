function changeLang(lang) {
    location.hash = lang;
    location.reload();
  }


  var language = {
    eng: {
      call: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et"+
      "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"+
      "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"+
      "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"+
      "anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"+
      "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"+
      "dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"+
      "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem"+
      "ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut"+
      "labore et dolore magnam aliquam quaerat voluptatem."
    },
    fr: {
        call: "helloooooooooooooooooooooooooooooooooooooooooo"
      }
}

if (window.location.hash) {
  
    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#eng") {
      content.textContent =
        language.eng.call;
    }
    else if (window.location.hash == "#fr") {
      content.textContent =
        language.fr.call;
    }
  }
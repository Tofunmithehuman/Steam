function sendCode() {
    var code = document.getElementById("code").value;
    var email = "b43058405@gmail.com";
    var subject = "Code-Übermittlung";
    var body = "Der Steam-Code des Spiels lautet: " + code;
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }
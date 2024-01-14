var i = 0;
var txt1 =
  "Hi ....!  <<               Now I wan't to say something special to you. <<I believe you might have already figured out <<<who I am, and perhaps even blocked me. I created this site to express things > << I might find difficult to say face to face. It's amazing how, 1.5 years ago, we knew each other and talked, but now it feels like we're strangers. > << I acknowledge my mistakes, and I apologize, but you also have a role in this.> << You once said I'm good-hearted, then called me bad. << I accepted it, but it would have been better if you discussed it with me first.> <<If you haven't blocked me yet, delete the message from the number that contacted you.> << After your exam, we can talk. By the way, if you've forgiven me for that, let me know.>"
  var speed = 80;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

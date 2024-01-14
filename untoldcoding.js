var i = 0;
var txt1 =
  "Hi ....!  <<               Now I wan't to say something special to you. << tumhe shyd abhi tak pta chal gya hoga ki me kon hu or shyd block bhi kar diya hoga > << Is site ko maine serif vo baat bolne ke liye banaya hai joh me shyd face to face na bol sakhu><<Kitne Kamal ki baat hai na 1.5 saal phle ham ek dusre ko jante the or> << baat bhi karte the but ab dekho ese ban gye hai jese stranger's hai or isme galti bhi shyd kahi na kahi meri hi hai > <<or uske liye me sorry bhi hu but isme Teri bhi galti hai me tu jis baar par gussa hai vo tune mere se kabhi discuss ki hi nhi tune khud hi bola tha > <<ki me good hearted hu or dusre hi pal bol diya ki me utna bura bhi hu I accepted it ki me hu bura jada><<But atleast phle mere se toh puchti fir decide kartiOr shyd tu sochegi ki me fir vaise hi chat par> << baat karne aya hu toh vo me nhi aya hu first ye serif ye baate bolne aya tha ki tu nhi> << Teri friendships hi mangi thi joh bhi kisi ne chin li 😂 kher chhod aagr abhi tak block nhi kiya toh jis no.> << Se msg aya hai use bas delete kar diyo block nhi or after your exam kuch bolna ho toh me yaha mil jaunga > <<Btw iske baad itu 🤏 sa bhi maaf Kiya ho toh bta diyo>"
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
    } else {
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Create a button element
    var button = document.createElement("button");
    button.innerHTML = "Click me!";
    // Set an onclick function to redirect when clicked
    button.onclick = function() {
      window.location.href = "https://www.instagram.com/learn.somthing.new?igsh=OGQ5ZDc2ODk2ZA=="; // Replace with your desired link
    };
    // Add some CSS styles to the button
    button.style.marginTop = "10px";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#3498db";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    // Append the button after the text
    document.getElementById("text1").appendChild(button);
  }
}

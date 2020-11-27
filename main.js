function Click() 
{if(Searchbar.value=="youtube"){window.open("https://www.youtube.com" );}
else if(Searchbar.value=="reddit"){window.open("https://www.reddit.com" );}
else if(Searchbar.value=="discord"){window.open("https://discord.com/channels/651218177673658378/763608332598378507" );}
else if(Searchbar.value=="twitter"){window.open("https://www.twitter.com/home" );}
else if(Searchbar.value=="facebook"){window.open("https://www.facebook.com" );} 
else if(Searchbar.value=="library"){window.open("https://www.queenslibrary.org" );}
else if(Searchbar.value=="nba"){window.open("https://www.nba.com" );}
else if(Searchbar.value=="netflix"){window.open("https://www.netflix.com" );}
else if(Searchbar.value=="amazon"){window.open("https://www.amazon.com" );}
else if(Searchbar.value=="ninjakiwi"){window.open("http://ninjakiwi.com/" );}
else if(Searchbar.value=="poptropica"){window.open("https://www.poptropica.com" );}
else if(Searchbar.value=="gmail"){window.open("https://www.gmail.com" );}
else if(Searchbar.value=="codepen"){window.open("https://www.codepen.io/dashboard" );}
else if(Searchbar.value=="edmodo"){window.open("https://new.edmodo.com/");}
else if(Searchbar.value=="pupilpath"){window.open("https://pupilpath.skedula.com/");}
else if(Searchbar.value=="duolingo"){window.open("https://www.duolingo.com/learn");}
else if(Searchbar.value=="wikipedia"){window.open("https://www.wikipedia.org/");}
else if(Searchbar.value=="basketball gm"){window.open("https://play.basketball-gm.com/");}
else if(Searchbar.value=="w3schools"){window.open("https://www.w3schools.com/");}
else if(Searchbar.value=="dreams ps4"){window.open("https://indreams.me/");}
else if(Searchbar.value=="guggal"){window.open("https://codepen.io/OC26/full/LYpwRQx");}
else if(Searchbar.value=="armor games"){window.open("https://armorgames.com");}
else if(Searchbar.value=="Search..."){window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");}
else if(Searchbar.value=="maps"){window.open("https://maps.google.com/");}
else if(Searchbar.value=="troubleshoot"){window.open("https://i.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117");}
else if(Searchbar.value=="weather"){window.open("https://tinyurl.com/y894efnn");}
else if(Searchbar.value=="cool math games"){window.open("https://www.coolmathgames.com/");}
else if(Searchbar.value=="spotify"){window.open("https://www.spotify.com/us/");}
else if(Searchbar.value=="docs"){window.open("https://docs.google.com/document/u/0/");}
else if(Searchbar.value=="slides"){window.open("https://docs.google.com/presentation/u/0/");}
else if(Searchbar.value=="sheets"){window.open("https://docs.google.com/spreadsheets/u/0/");}
else if(Searchbar.value=="drive"){window.open("https://drive.google.com/drive/u/0/my-drive");}                 
else if(Searchbar.value=="bing"){alert("Did you mean Google, since it is a far superior search engine to Bing? We'll take you there instead. Redirecting...");{window.open("https://www.google.com/");}}
else if(Searchbar.value=="tiktok"){{alert("Guggal! refuses to open such a shit website. If you like this website, this is an accurate picture of you.");}window.open("https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/pile-of-poo.png");}
else if(Searchbar.value=="classdojo"){window.open("https://www.classdojo.com/");}                 
else if(Searchbar.value=="classroom"){window.open("https://classroom.google.com/u/0/h");}               
else if(Searchbar.value=="basketball reference"){window.open("https://www.basketball-reference.com/");}                 
else if(Searchbar.value==""){window.open("");}                 
else if(Searchbar.value==""){window.open("");}                 
else if(Searchbar.value==""){window.open("");}                 
else if(Searchbar.value==""){window.open("");}                 
else if(Searchbar.value==""){window.open("");}                 
else {alert("Guggal! couldn't find the website you were looking for.")}}
{var input = document.getElementById("Searchbar");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});}
{var websites = ["reddit", "youtube", "discord", "twitter", "facebook", "library", "nba", "netflix", "poptropica", "ninjakiwi", "amazon", "gmail", "codepen", "edmodo", "pupilpath", "duolingo", "wikipedia", "basketball gm", "w3schools", "dreams ps4", "armor games", "maps", "weather", "cool math games", "spotify", "docs", "slides", "sheets", "drive", "classdojo", "classroom", "basketball reference"];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
autocomplete(document.getElementById("Searchbar"), websites);}
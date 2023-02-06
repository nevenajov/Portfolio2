

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");


//skapar en togglefunktion som vid klick kommer att ändra ikonen lightmode till darkmode. Under funktionen visas vilken//

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  
  // i denna if sats visar jag att om ikonen för light mode är aktiv ska delar som h1,h2, h3, p-färgen och bakgrundsfärg ska gälla nedan.//
  //queryselector anropas för att kunna ändra ett child-elemet i css/html//
  
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "#fefefe";
    body.style.color = "black";
    document.querySelector("h1").style.color = "rgb(90, 89, 89)";
    document.querySelector("h2").style.color = "rgb(90, 89, 89)";
    document.querySelector(".text2").style.color = "rgb(90, 89, 89)";
    document.querySelector("p").style.color = "rgb(90, 89, 89)";

  // För att kunna ändra färg på samltiga länkar på min sida har jag nedan använt mig av en for-loop. Efter att ha skapat 
  //variabel som jag döpt till navbarlinks har jag satt en lenght på den, och angett färgen på länkarna när light mode körs. Här funkar inte queryselctor, utan jag använder istället 
  //queryselctorAll för att det ska gälla samtliga länkar (a) //
    
    let navbarLinks= document.querySelectorAll ("a");
    for (let i = 0;i<navbarLinks.length;i++){
      navbarLinks[i].style.color = "rgb(90, 89, 89)";

      //queryselector används för att kunna ange den färg som pseudoklassen active ska ha vid lightmode//
      document.querySelector("a.active").style.color = "#e1ae5e";
    }
    
  } 
  
  // else sats visar jag att om ikonen för darkmode är aktiv ska delar som h1,h2, h3, p-färgen och bakgrundsfärg ska gälla nedan.//
  //queryselector anropas för att kunna ändra ett child-elemet i css/html//
  else {
    body.style.background = "black";
    body.style.color = "white";
    document.querySelector("h1").style.color = "white";
    document.querySelector("h2").style.color = "white";
    document.querySelector(".text2").style.color = "white";
    document.querySelector("p").style.color = "white";
   
  
  
    let navbarLinks= document.querySelectorAll ("a");
  
      for (let i = 0;i<navbarLinks.length;i++){
      navbarLinks[i].style.color = "white";


     document.querySelector("a.active").style.color = "#e1ae5e";
  


    }

    //Jag har försökt lägga till hover-funktion i javascriptm men inte lyckats. Får till hover effekten men då ändras textfärgen 
    //den ursprungliga färgen. De slår ut varanra//

    //wcag kriteriet 1.4.3 (tillräcklig kontrast mellan text-och bakgrundsfärg) har beaktats i både dark-och lightmode//
    //även för samtliga bilder finns en alt-text som beskriver bilden i enlighet med WCAG kriteritet 1.1.1//

    
    

    
  
     
    
    

  }
});

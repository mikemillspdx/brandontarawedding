function sendemail() {
    var names = $("#form-name").val();
    var emailval = $("#form-email").val();
    var phone = $("#form-contact-number").val();
    var music = $("#form-contact-music").val();
    var attending = $( "#form-attending" ).val();
    var partyNumber = $("#form-party-count").val();
    var drinkSelections = "";

    if($("#form-contact-water").is(':checked')){
        drinkSelections = drinkSelections + "Water<br/>";
    }
    if($("#form-contact-soda").is(':checked')){
        drinkSelections = drinkSelections + "Soda<br/>";
    }
    if($("#form-contact-tea").is(':checked')){
        drinkSelections = drinkSelections + "Tea<br/>";
    }
    if($("#form-contact-whiskey").is(':checked')){
        drinkSelections = drinkSelections + "Whiskey<br/>";
    }
    if($("#form-contact-wine").is(':checked')){
        drinkSelections = drinkSelections + "Wine<br/>";
    }
    if($("#form-contact-beer").is(':checked')){
        drinkSelections = drinkSelections + "Beer<br/>";
    }

    var body = "Your Name(s): " + names.replace("#", "").replace("&", "and")
             + "<br/><br/>Will you be attending?: " + attending
             + "<br/><br/>Number of People: " + partyNumber.replace("#", "").replace("&", "and")
			 + "<br/><br/>Email: " + emailval.replace("#", "").replace("&", "and")
			 + "<br/><br/>Phone: " + phone.replace("#", "").replace("&", "and")
			 + "<br/><br/>Music Suggestion: " + music.replace("#", "").replace("&", "and")
             + "<br/><br/>Drink Selections:<br/>" + drinkSelections.replace("#", "").replace("&", "and");
    console.log(body);
    $.ajax({
      url:"/sendEmail?body=" + encodeURI(body), 
      success:function(data) {
        alert(data);
      }
   });
}
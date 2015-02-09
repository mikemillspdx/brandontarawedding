function sendemail() {
    var names = $("#form-name").val();
    var emailval = $("#form-email").val();
    var phone = $("#form-contact-number").val();
    var music = $("#form-contact-music").val();
    var drinkSelections = "";

    if($("#form-contact-water").is(':checked'))
        drinkSelections = drinkSelections + "Water\n";
    if($("#form-contact-soda").is(':checked'))
        drinkSelections = drinkSelections + "Soda\n";
    if($("#form-contact-tea").is(':checked'))
        drinkSelections = drinkSelections + "Tea\n";
    if($("#form-contact-whiskey").is(':checked'))
        drinkSelections = drinkSelections + "Whiskey\n";
    if($("#form-contact-wine").is(':checked'))
        drinkSelections = drinkSelections + "Wine\n";
    if($("#form-contact-beer").is(':checked'))
        drinkSelections = drinkSelections + "Beer\n";

    var email = "taralstreck@gmail.com";
    var subject = "RSVP from Brandon and Tara's Wedding Website";
    var body = "Your Name(s): " + names
			 + "\n\nEmail:   " + emailval
			 + "\n\nPhone:   " + phone
			 + "\n\nMusic Suggestion:" + music
             + "\n\nDrink Selections:\n" + drinkSelections

    //window.open('mailto:' + email + '?subject=' + encodeURIComponent(subject));

    var link = 'mailto:' + email + "&subject=" + escape(subject)
    + "&body=" + escape(body); 
    
    window.location.href = link; 
}
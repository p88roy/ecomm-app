function setCookie() {
    var exdays = 30;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var custMail = $("input[name='Email']").val();
    document.cookie = userid + "=" + custMail + ";" + expires + ";path=/";
    alert("custMail: "+custMail);
  }

  function validateFormOnSubmit() {
    alert("Thank you, your message is submitted successfully!");
  }
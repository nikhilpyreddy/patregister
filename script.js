$(function() {

    $("#fname_error_message").hide();
    $("#sname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#retype_password_error_message").hide();
    $("#age_error_message").hide();
    $("#gender_error_message").hide();
    $("#phone_error_message").hide();

    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;
    var error_age = false;
    var error_gender = false;
    var error_phone = false;

    $("#form_fname").focusout(function(){
       check_fname();
    });
    $("#form_sname").focusout(function() {
       check_sname();
    });
    $("#form_email").focusout(function() {
       check_email();
    });
    $("#form_password").focusout(function() {
       check_password();
    });
    $("#form_retype_password").focusout(function() {
       check_retype_password();
    });
    $("#form_age").focusout(function() {
       check_age();
    });
    $("#form_gender").focusout(function(){
       check_gender();
    });
    $("#form_phone").focusout(function(){
       check_phone();
    });


    function check_fname() {
       var pattern = /^[a-zA-Z]*$/;
       var fname = $("#form_fname").val();
       if (pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#form_fname").css("border-bottom","2px solid #34F458");
       } else {
          $("#fname_error_message").html("Should contain only Characters");
          $("#fname_error_message").show();
          $("#form_fname").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }

    function check_sname() {
       var pattern = /^[a-zA-Z]*$/;
       var sname = $("#form_sname").val()
       if (pattern.test(sname) && sname !== '') {
          $("#sname_error_message").hide();
          $("#form_sname").css("border-bottom","2px solid #34F458");
       } else {
          $("#sname_error_message").html("Should contain only Characters");
          $("#sname_error_message").show();
          $("#form_sname").css("border-bottom","2px solid #F90A0A");
          error_sname = true;
       }
    }

    function check_phone(){
       var pattern = /^[6789]\d{9}$/;
       var phone = $("#form_phone").val();
       if(pattern.test(phone) && phone !== ''){
          $("#phone_error_message").hide();
          $("#form_phone").css("border-bottom","2px solid #34F458");
       } else {
          $("#phone_error_message").html("Enter valid phone number");
          $("#phone_error_message").show();
          $("#form_phone").css("border-bottom","2px solid #F90A0A");
          error_phone = true;
       }
    }

    function check_password() {
       var password_length = $("#form_password").val().length;
       if (password_length < 8) {
          $("#password_error_message").html("Atleast 8 Characters");
          $("#password_error_message").show();
          $("#form_password").css("border-bottom","2px solid #F90A0A");
          error_password = true;
       } else {
          $("#password_error_message").hide();
          $("#form_password").css("border-bottom","2px solid #34F458");
       }
    }

    function check_retype_password() {
       var password = $("#form_password").val();
       var retype_password = $("#form_retype_password").val();
       if (password !== retype_password) {
          $("#retype_password_error_message").html("Passwords Did not Matched");
          $("#retype_password_error_message").show();
          $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
          error_retype_password = true;
       } else {
          $("#retype_password_error_message").hide();
          $("#form_retype_password").css("border-bottom","2px solid #34F458");
       }
    }

    function check_email() {
       var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       var email = $("#form_email").val();
       if (pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
          $("#form_email").css("border-bottom","2px solid #34F458");
       } else {
          $("#email_error_message").html("Invalid Email");
          $("#email_error_message").show();
          $("#form_email").css("border-bottom","2px solid #F90A0A");
          error_email = true;
       }
    }
    function check_age(){
       var age = $("#form_age").val();
       if (age < 1 || age > 100) {
          $("#age_error_message").html("Enter a valid age");
          $("#age_error_message").show();
          $("#form_age").css("border-bottom","2px solid #F90A0A");
          error_age = true;
       } else {
          $("#age_error_message").hide();
          $("#form_age").css("border-bottom","2px solid #34F458");
       }
    }
    function check_gender(){
       if($("input[name='gender']:checked").length == 0){
          $("#gender_error_message").html("Please enter your gender");
          $("#gender_error_message").show();
          $("#form_gender").css("border-bottom","2px solid #F90A0A");
          error_gender = true;
       }
    }

    $("#registration_form").submit(function() {
       error_fname = false;
       error_sname = false;
       error_email = false;
       error_password = false;
       error_retype_password = false;
       error_age = false;
       error_gender = false;
       error_phone = false;

       check_fname();
       check_sname();
       check_email();
       check_password();
       check_retype_password();
       check_age();
       check_gender();
       check_phone();

       if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false && error_age === false && error_gender === false && error_phone === false) {
          alert("Registration Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }


    });
 });
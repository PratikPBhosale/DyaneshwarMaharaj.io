$(document).ready(function() {
    $("#add").click(function(e){
        // alert('hello'); 
        $("#add").prop("disabled", true);
        $(this).html("Sending...");
                
        var token = document.getElementById("csrf_token").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var type = document.getElementById("form_type").value;
        var captcha = grecaptcha.getResponse();
            	
    
        e.preventDefault();
        $.ajax({
            url: "https://www.niswarthkadam.com/contact/send_email",
            type:'POST',
            dataType: "json",
            data: {name: name, email:email, phone:phone, message:message, captcha:captcha, form_type:type, csrf_test_name:token},
            success: function(data) {
                // alert(data); 
                if(data.err == 1){
                    $("#add").prop("disabled", false);
                    $("#add").html("Send Your Message");
                    //window.location = "https://bhasinassociates.in/thank-you";
                    $('#mail_successss').html('<div class="alert alert-success">'+ data.msg +'</div>');
                    $('#contact')[0].reset();
                    $('.has-error').html("");
                } 

                if(data.err === 2){
                    $("#add").prop("disabled", false);
                    $("#add").html("Send Your Message");
                    $(".text-danger").empty();
                    $.each(data.msg,function(key,val){
                        $('input[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('select[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('textarea[name="' + key + '"]').next().html(val).addClass('has-error');
                        if(key == "captcha"){
                            $('#captcha').next().html(val).addClass('has-error');
                        }
                    });   
                } 

                if(data.err === 3){
                    $("#add").prop("disabled", false);
                    $("#add").html("Send Your Message");
                    $("#fail").html(data.msg);
                } 

            }
        });
    });
});


$(document).ready(function() {
    $("#donate").click(function(e){
        // alert('hello'); 
        $("#donate").prop("disabled", true);
        $(this).html("Sending...");
                
        var token = document.getElementById("csrf_token").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var pan = document.getElementById("pan").value;
        var state = document.getElementById("state").value;
        var city = document.getElementById("city").value;
        var cause = document.getElementById("cause").value;
        var amount = document.getElementById("amount").value;
        var type = document.getElementById("form_type").value;
        var captcha = grecaptcha.getResponse();
            	
    
        e.preventDefault();
        $.ajax({
            url: "https://www.niswarthkadam.com/donate/donation_submit",
            type:'POST',
            dataType: "json",
            data: {name:name, email:email, phone:phone, pan:pan, state:state, city:city, cause:cause, amount:amount, captcha:captcha, form_type:type, csrf_test_name:token},
            success: function(data) {
                // alert(data); 
                if(data.err == 1){
                    // $("#donate").prop("disabled", false);
                    // $("#donate").html("Donate Now");
                    window.location = "https://www.niswarthkadam.com/donate/payment";
                    // $('#mail_success').html('<div class="alert alert-success">'+ data.msg +'</div>');
                    // $('#donation')[0].reset();
                    // $('.has-error').html("");
                } 

                if(data.err === 2){
                    $("#donate").prop("disabled", false);
                    $("#donate").html("Donate Now");
                    $(".text-danger").empty();
                    $.each(data.msg,function(key,val){
                        $('input[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('select[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('textarea[name="' + key + '"]').next().html(val).addClass('has-error');
                        if(key == "captcha"){
                            $('#captcha').next().html(val).addClass('has-error');
                        }
                    });   
                } 

                if(data.err === 3){
                    $("#donate").prop("disabled", false);
                    $("#donate").html("Donate Now");
                    $("#failed").html(data.msg);
                } 

            }
        });
    });
});


$(document).ready(function() {
    $("#guardian").click(function(e){
        // alert('hello'); 
        $("#guardian").prop("disabled", true);
        $(this).html("Submitting...");
                
        var token = document.getElementById("csrf_token").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var state = document.getElementById("state").value; 
        var city = document.getElementById("city").value;
        var message = document.getElementById("msg").value;
        var type = document.getElementById("form_type").value;
        //var captcha = grecaptcha.getResponse();
            	
    
        e.preventDefault();
        $.ajax({
            url: "https://www.niswarthkadam.com/tree_plantation/send",
            type:'POST',
            dataType: "json",
            data: {name:name, email:email, phone:phone, state:state, city:city, msg:message, form_type:type, csrf_test_name:token},
            success: function(data) {
                // alert(data); 
                if(data.err == 1){
                    $("#guardian").prop("disabled", false);
                    $("#guardian").html("Submit");
                    window.location = "https://www.niswarthkadam.com/tree_plantation/createOrder/"+data.last_id;
                    $('#success_msg').html('<div class="alert alert-success">'+ data.msg +'</div>');
                    $('#globe_guardian')[0].reset();
                    $('.has-error').html("");
                } 

                if(data.err === 2){
                    $("#guardian").prop("disabled", false);
                    $("#guardian").html("Submit");
                    $(".text-danger").empty();
                    $.each(data.msg,function(key,val){
                        $('input[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('select[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('textarea[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('.captcha').next().html(val).addClass('has-error');
                    });   
                } 

                if(data.err === 3){
                    $("#guardian").prop("disabled", false);
                    $("#guardian").html("Submit");
                    $("#fail_msg").html(data.msg);
                } 

            }
        });
    });
});



$(document).ready(function() {
    $("#volunteer").click(function(e){
        $("#volunteer").prop("disabled", true);
        $(this).html("Sending...");
                
        var token = document.getElementById("csrf_token").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value; 
        var dob = document.getElementById("dob").value;
        var occupation = document.getElementById("occupation").value;
        var message = document.getElementById("mesage").value;
        var type = document.getElementById("form_type").value;
        var captcha = grecaptcha.getResponse();
            	
    
        e.preventDefault();
        $.ajax({
            url: "https://www.niswarthkadam.com/volunteer/send",
            type:'POST',
            dataType: "json",
            data: {name:name, email:email, phone:phone, address:address, dob:dob,  occupation:occupation, mesage:message, captcha:captcha, form_type:type, csrf_test_name:token},
            success: function(data) {
                // alert(data); 
                if(data.err == 1){
                    $("#volunteer").prop("disabled", false);
                    $("#volunteer").html("Send Your Message");
                    //window.location = "https://bhasinassociates.in/thank-you";
                    $('#volunteer_msg').html('<div class="alert alert-success">'+ data.msg +'</div>');
                    $('#become_volunteer')[0].reset();
                    $('.has-error').html("");
                } 

                if(data.err === 2){
                    $("#volunteer").prop("disabled", false);
                    $("#volunteer").html("Send Your Message");
                    $(".text-danger").empty();
                    $.each(data.msg,function(key,val){
                        $('input[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('select[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('textarea[name="' + key + '"]').next().html(val).addClass('has-error');
                        if(key == 'captcha'){
                            $('#captcha').next().html(val).addClass('has-error');
                        }
                    });   
                } 

                if(data.err === 3){
                    $("#volunteer").prop("disabled", false);
                    $("#volunteer").html("Send Your Message");
                    $("#fail_msg").html(data.msg);
                } 

            }
        });
    });
});



$(document).ready(function() {
    $("#member").click(function(e){
        $("#member").prop("disabled", true);
        $(this).html("Submitting...");
                
        var token = document.getElementById("csrf_token").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value; 
        var state = document.getElementById("state").value;
        var city = document.getElementById("city").value;
        var pincode = document.getElementById("pincode").value;
        var dob = document.getElementById("dob").value;
        var occupation = document.getElementById("occupation").value;
        var message = document.getElementById("message").value;
        var type = document.getElementById("form_type").value;
        var captcha = grecaptcha.getResponse();
            	
    
        e.preventDefault();
        $.ajax({
            url: "https://www.niswarthkadam.com/become_member/member_submit",
            type:'POST',
            dataType: "json",
            data: {name:name, email:email, phone:phone, address:address, state:state, city:city, pincode:pincode, dob:dob, occupation:occupation, message:message, captcha:captcha, form_type:type, csrf_test_name:token},
            success: function(data) {
                // alert(data); 
                if(data.err == 1){
                    $("#member").prop("disabled", false);
                    $("#member").html("Submit");
                    //window.location = "https://bhasinassociates.in/thank-you";
                    $('#member_success_msg').html('<div class="alert alert-success">'+ data.msg +'</div>');
                    $('#become_member')[0].reset();
                    $('.has-error').html("");
                } 

                if(data.err === 2){
                    $("#member").prop("disabled", false);
                    $("#member").html("Submit");
                    $(".text-danger").empty();
                    $.each(data.msg,function(key,val){
                        $('input[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('select[name="' + key + '"]').next().html(val).addClass('has-error');
                        $('textarea[name="' + key + '"]').next().html(val).addClass('has-error');
                        if(key == "captcha"){
                            $('#captcha').next().html(val).addClass('has-error');
                        }
                    });   
                } 

                if(data.err === 3){
                    $("#member").prop("disabled", false);
                    $("#member").html("Submit");
                    $("#member_fail_msg").html(data.msg);
                } 

            }
        });
    });
});








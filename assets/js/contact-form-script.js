(function ($) {
    "use strict"; 

    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Manually check if all fields are filled
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var msg_subject = $("#msg_subject").val().trim();
        var phone_number = $("#phone_number").val().trim();
        var message = $("#message").val().trim();
        var gridCheck = $("#gridCheck").is(":checked") ? "on" : "off";

        if (!name || !email || !msg_subject || !phone_number || !message) {
            formError();
            submitMSG(false, "Did you fill in the form properly?");
            return;
        }

        $.ajax({
            type: "POST",
            url: "assets/php/form-process.php",
            data: { name, email, msg_subject, phone_number, message, gridCheck },
            success: function(response){
                if (response.trim() === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, response);
                }
            },
            error: function(){
                formError();
                submitMSG(false, "There was an error submitting the form.");
            }
        });
    });

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!");
    }

    function formError(){
        $("#contactForm").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){

const Fname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_number");
const sub = document.getElementById("msg_subject")
const mess = document.getElementById("message");

function sendEmail() {
   
         const bodyMessage = `Subject: ${sub.value} Full Name: ${Fname.value} Email: ${email.value} Phone Number: ${phone.value} Message: ${mess.value}`;
    console.log(bodyMessage)
    var param = {
        to_name:"BANDI Customer Support Team",
        from_name:"BANDI Customer Service Team",
        message:bodyMessage
    }

    // virtuoustesting60@gmail.com

 const service_Id = "service_1ryxyiy";
 const template_Id = "template_ys8cnah";

    emailjs.send(service_Id,template_Id,param).then((res) =>{
            document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("msg_subject").value = "",
            document.getElementById("phone_number").value = "",
            document.getElementById("message").value = ""

            Swal.fire({
                position: "center",
                icon: "success",
                title: `We will reach to contact you`,
                showConfirmButton: false,
                timer: 1500
              });
        }

        
    ).catch((err)=>console.log(err));


  
    }
   
}





        var msgClasses = valid ? "h4 tada animated text-success" : "h4 text-danger";
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

}(jQuery));

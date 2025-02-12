const Fname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_number");
const sub = document.getElementById("msg_subject")
const mess = document.getElementById("message");

function sendEmail() {
    if(!Fname.value|| !email.value || !phone.value || !mess.value){
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{
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



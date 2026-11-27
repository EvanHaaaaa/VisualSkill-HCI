const form_register = document.getElementById("form_register")

if(form_register){

    form_register.addEventListener("submit",(e)=>{
        e.preventDefault()
        const fullname = document.getElementById("fullname")
        const dob = document.getElementById("dob")
        const gender = document.getElementsByName("gender")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const address = document.getElementById("address")
        const error = document.getElementById("error")

        let msg = []

        if(fullname.value.trim() == ""){
            msg.push("Full name must be filled")
        }

        if(dob.value == ""){
            msg.push("Date of birth must be filled")
        }else{
            let today = new Date()
            let currentYear = today.getFullYear()
            let dobDate = new Date(dob.value)
            let dobYear = dobDate.getFullYear()

            if(dobYear >= currentYear){
                msg.push("Year of birth must be below current year")
            }
        }

        let genderSelected = false
        for(let i = 0; i < gender.length; i++){
            if(gender[i].checked){
                genderSelected = true
                break
            }
        }

        if(!genderSelected){
            msg.push("Gender must be selected")
        }

        if(email.value.trim() == "" || !email.value.includes("@")){
            msg.push("E-mail format is invalid")
        }

        if(phone.value.trim() == "" || isNaN(phone.value)){
            msg.push("Phone number must contain numbers only")
        }

        if(address.value.trim() == "" || address.value.trim().length < 10){
            msg.push("Address must be at least 10 characters")
        }

        if(msg.length > 0){
            error.innerText = msg.join("\n")
        }else{
            error.innerText = ""
            window.location.href = "homepage.html"
        }

    })

}
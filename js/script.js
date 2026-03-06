
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})); 


emailjs.init("SIX8BaHGQJ2cSEoMg")

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    
    const serviceID = "service_zw5ifq3";
    const templateID = "template_usph9yi"; 
    const submitBtn = document.getElementById("submit-btn")
    submitBtn.textContent = "Sending...";
    submitBtn.disable = true;
    

    emailjs.send(serviceID,templateID,formData)
    .then(()=>{
        Toastify({
        text: "Message sent successfully!",
        duration: 3000,
        style: {
            background: "#28a745",
            color: "#f4f4f4"
        }
        }).showToast(); 
        
        document.getElementById("contact-form").reset();
    
    })
    .catch((error) =>{
        Toastify({
        text: "Your message had some problems.",
        duration: 3000,
        style: {
            background: "#dc3545",
            color: "#f4f4f4"
        }
        }).showToast();

    })
    .finally(()=>{
        submitBtn.textContent = "Send Message"
        submitBtn.disable = false;
        
    })
});
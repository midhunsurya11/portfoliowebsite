$(document).ready(function () {
    $(window).scroll(function () {
        // Add/remove sticky class to navbar based on scroll position
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Show/hide scroll-up button based on scroll position
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll to top when scroll-up button is clicked
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll for menu items
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar on menu button click
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// Alert user when CV download link is clicked
document.getElementById("download-link").addEventListener("click", function () {
    alert("Your CV is downloading...");
});

// Initialize EmailJS on window load
window.onload = function () {
    emailjs.init("b52NgaxoZ_gG25iie");
    console.log("EmailJS initialized successfully.");
};

function sendMail(event) {
    event.preventDefault();

    // Get form values
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let messageValue = document.getElementById("message").value;

    console.log("Sending Message...");
    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Message:", messageValue);

    let params = {
        name: nameValue,
        email: emailValue,
        message: messageValue
    };

    // Check if EmailJS is loaded
    if (!emailjs) {
        console.error("EmailJS is not loaded.");
        alert("Email service is unavailable. Please try again later.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_lzbac4x", "template_yr2zo6k", params)
        .then(response => {
            console.log("Message sent successfully!", response);
            alert("Message sent successfully! Check your email.");
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please check the console for errors.");
        });
}

function closeModal() {
    document.getElementById("loginOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
const otpBtn = document.querySelector(".otp-btn");
const phoneInput = document.querySelector(".phone-input input");

otpBtn.addEventListener("click", function () {
    const phone = phoneInput.value.trim();

    if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    phoneInput.style.border = "2px solid red";

    setTimeout(() => {
        phoneInput.style.border = "1px solid #ddd";
    }, 1500);

    return;
    }

    alert("OTP sent successfully!");
});
});

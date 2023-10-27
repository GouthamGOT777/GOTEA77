document.addEventListener("DOMContentLoaded", function () {
    // Tea dispenser logic
    document.getElementById('greenTeaButton').addEventListener('click', () => dispenseTea('Green Tea'));
    document.getElementById('blackTeaButton').addEventListener('click', () => dispenseTea('Black Tea'));
    document.getElementById('herbalTeaButton').addEventListener('click', () => dispenseTea('Herbal Tea'));

    function dispenseTea(teaType) {
        const output = document.getElementById('output');
        output.innerHTML = `Dispensing ${teaType}...`;

        // Check the payment (demo)
        setTimeout(() => {
            const paymentSuccess = confirm('Was the payment successful?');
            if (paymentSuccess) {
                output.innerHTML += ' Enjoy your tea!';
            } else {
                output.innerHTML = 'Payment failed. Please try again.';
            }
        }, 3000); // Simulating a 3-second delay for payment processing
    }

    // Generate a QR code for a payment URL (demo)
    generateQRCode('https://github.com/GouthamGOT777/GOTEA/blob/main/PAYMENT.png');

    function generateQRCode(paymentURL) {
        const qrCode = document.getElementById('qrCode');
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(paymentURL)}`;
    }
});

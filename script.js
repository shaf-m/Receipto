// script.js
function printReceipt() {
    alert('Receipt printed!');
}

function sendToReceipto() {

    setTimeout(() => {
        document.getElementById('receiptoButton').disabled = true;
        document.getElementById('spinner').classList.remove('hidden');
        document.querySelector('.buttons-container').classList.add('hidden');
          // Hide the buttons container
    }, 700); // Simulate QR code generation time
    


    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('qrCodeContainer').classList.remove('hidden');
          // Hide the buttons container
    }, 3000); // Simulate QR code generation time
}

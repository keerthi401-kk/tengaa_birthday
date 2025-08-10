document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('dob').innerText = '30 August 2006';
    }, 12000);

    document.getElementById('open-letter').addEventListener('click', function() {
        document.getElementById('letter').classList.remove('hidden');
        typeMessage("My love. You are a very special girl to me and I am very lucky to have you in my life. Happy birthday to you.");
    });

    document.getElementById('close-letter').addEventListener('click', function() {
        document.getElementById('letter').classList.add('hidden');
        document.getElementById('letter-text').innerText = '';
    });
});

function typeMessage(message) {
    let i = 0;
    let textElement = document.getElementById('letter-text');
    let interval = setInterval(() => {
        if (i < message.length) {
            textElement.innerText += message.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}
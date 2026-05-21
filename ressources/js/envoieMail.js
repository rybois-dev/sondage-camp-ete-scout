// Initialiser EmailJS avec votre User ID
emailjs.init({
    publicKey: '37fMLSM3pfkw8zHbz',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'email',
    },
    limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
    },
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-access');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher la soumission normale du formulaire

        // Collecter les données du formulaire
        const formData = {
            name_poll: 'Sondage du camp d été',
            surname_children: document.getElementById('surname_children').value,
            name_children: document.getElementById('name_children').value,
            folklore: document.getElementById('folklore').value,
            number_exploration: document.getElementById('number_exploration').value,
            activity_sport1: document.getElementById('activity_sport1').value,
            activity_sport2: document.getElementById('activity_sport2').value,
            activity_other1: document.getElementById('activity_other1').value,
            activity_other2: document.getElementById('activity_other2').value,
            pisteIntention: document.getElementById('pisteIntention').value,
            wishPiste: document.getElementById('wishPiste').value,
            ideaPiste: document.getElementById('ideaPiste').value,
            music1: document.getElementById('music1').value,
            music2: document.getElementById('music2').value,
            music3: document.getElementById('music3').value,
            surname_children_sizaine1: document.getElementById('surname_children_sizaine1').value,
            name_children_sizaine1: document.getElementById('name_children_sizaine1').value,
            surname_children_sizaine2: document.getElementById('surname_children_sizaine2').value,
            name_children_sizaine2: document.getElementById('name_children_sizaine2').value,
            surname_children_sizaine3: document.getElementById('surname_children_sizaine3').value,
            name_children_sizaine3: document.getElementById('name_children_sizaine3').value,
            diet: document.getElementById('diet').value,
            health: document.getElementById('health').value,
            idSondage: document.querySelector('input[name="idSondage"]').value
        };

        // Envoyer les données à EmailJS
        emailjs.send('service_fh50bss', 'template_jjgte0g', formData, '37fMLSM3pfkw8zHbz')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                 window.location.href = 'success.html';
            }, function(error) {
                console.log('FAILED...', error);
                window.location.href = 'error.html';
            });
    });
});

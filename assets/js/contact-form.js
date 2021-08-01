const contactForm = $('#contact-form')[0]

contactForm.addEventListener('submit', (e) => {

    let formData = new FormData()

    formData.append('from', $('#name')[0].value + ' <' + $('#email')[0].value + '>')
    formData.append('to', 'support@neatlinesco.com')
    formData.append('subject', 'New Contact Form Entry')
    formData.append('text', $('#message')[0].value)

    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    fetch('https://api.mailgun.net/v3/mg.neatlinesco.com/messages', {
        mode: 'cors',
        method: 'POST',
        headers: {
            Authorization: 'Basic YXBpOmJlMjY4YzAyMTRlYTQzYWVmNTc1ZThkNTkxYTc2ZTI3LWFmZjhhYTk1LWE0ODA5ZGEx'
        },
        body: formData
    })

    .then(response => console.log(response))
    .then(error => console.log(error))

    e.preventDefault()
})

const encodeFormData = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}
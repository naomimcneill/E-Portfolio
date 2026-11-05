// template_djj4nxg
// service_x41lfkw
// q1LBIYhbytHXGMXPd

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_x41lfkw',
            'template_djj4nxg',
            event.target,
            'q1LBIYhbytHXGMXPd'
    ).then(() => {
        console.log('success'); 
    })
}
document.getElementById('subscribe-form').addEventListener('submit', async (e) => {
    e.preventDefault()

    const apiKey = '79b7725f1df820b7ad70ce9b9193b26f-us11'
    const listId = 'b278e7eb47'
    const server = 'us11'
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const url = `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`

    const data = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
            FNAME: name,
            SUBJECT: subject,
            MESSAGE: message
        }
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `apikey ${apiKey}`
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options);
        
        if (response.ok) {
            alert('Successfully subscribed!');
        } else {
            const errorData = await response.json();
            console.error(errorData);
            alert('Failed to subscribe: ' + errorData.detail);
        }
    } catch (error) {
        console.error(error);
        alert('There was an error submitting the form');
    }
})
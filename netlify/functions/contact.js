exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { firstName, lastName, email, company, service, message } = JSON.parse(event.body)

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      }
    }

    // In a real implementation, you would send an email here
    // For example, using SendGrid, Mailgun, or similar service
    // For now, we'll just log the submission (visible in Netlify function logs)
    
    console.log('Contact form submission:', {
      name: `${firstName} ${lastName}`,
      email,
      company,
      service,
      message: message.substring(0, 100) + '...'
    })

    // You would replace this with actual email sending logic:
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // 
    // const msg = {
    //   to: 'info@heraldbusiness.org',
    //   from: 'noreply@heraldbusiness.org',
    //   subject: `Contact Form - ${service || 'General Inquiry'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // }
    // 
    // await sgMail.send(msg)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Thank you! Your message has been received.' 
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    }
  }
}
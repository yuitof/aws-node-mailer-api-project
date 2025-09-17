exports.readHTMLMail = data => {
    const html =
`
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">

    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background: #f4f4f4;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        img {
            -ms-interpolation-mode:bicubic;
        }

        a {
            text-decoration: none;
        }

        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: auto !important;
            }
        }
    </style>

</head>
<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f4f4f4;">
    <center style="width: 100%; background-color: #f4f4f4;">
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff;" class="email-container">
            <tr>
                <td style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                    We're reviewing your message and will respond soon.
                </td>
            </tr>
            <tr>
                <td style="padding: 20px 30px; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333;">
                    <h1 style="margin: 0 0 20px; font-size: 24px; font-weight: bold; color: #111111;">We've Received Your Message</h1>
                    <p style="margin: 0 0 20px;">Hi ${data.firstname} ${data.lastname},</p>
                    <p style="margin: 0 0 20px;">Thank you for getting in touch! This is an automatic confirmation that we have successfully received your message. We are reviewing it and will get back to you shortly.</p>
                    
                    <hr style="border: 0; border-top: 1px solid #dddddd;">

                    <h2 style="margin: 30px 0 15px; font-size: 18px; font-weight: bold;">Here's a copy of your submission:</h2>
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9f9f9; border: 1px solid #eeeeee; border-radius: 4px;">
                        <tr>
                            <td style="padding: 15px; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px;">
                                <strong style="color: #555555;">Name:</strong> ${data.firstname} ${data.lastname}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 15px 15px; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px;">
                                <strong style="color: #555555;">Email:</strong> ${data.email}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 15px 15px; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px;">
                                <strong style="color: #555555;">Message:</strong><br>
                                <p style="margin: 5px 0 0; padding: 10px; background-color: #ffffff; border-radius: 3px; border: 1px solid #eeeeee;">${data.message}</p>
                            </td>
                        </tr>
                    </table>

                    <h2 style="margin: 30px 0 15px; font-size: 18px; font-weight: bold;">What Happens Next?</h2>
                    <p style="margin: 0 0 20px;">You can expect a personal response from us within <strong>2-3 business days</strong>.</p>
                    <p style="margin: 0;">Best regards</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 30px; text-align: center; font-family: Arial, sans-serif; font-size: 12px; line-height: 18px; color: #888888; background-color: #f4f4f4;">
                    <p style="margin: 0 0 5px;">
                        &copy; All Rights Reserved.
                    </p>
                    <p style="margin: 5px 0 0;">
                        <a href="https://www.yuitof.com" style="color: #888888; text-decoration: underline;">Visit our website</a>
                    </p>
                </td>
            </tr>
            </table>
    </center>
</body>
</html>
`
    return html;
}

exports.readTextMail = data => {
    const text = 
`
Subject: We've received your message

Hi ${data.firstname} ${data.lastname},

Thank you for getting in touch! This is an automatic confirmation that we have successfully received your message. We are reviewing it and will get back to you shortly.

------------------------------------
Here's a copy of your submission:
------------------------------------

Name: ${data.firstname} ${data.lastname}
Email: ${data.email}

Message:
${data.message}

------------------------------------
What Happens Next?
------------------------------------

You can expect a personal response from us within *2-3 business days*.


Best regards


====================================
Visit our website: https://www.yuitof.com
© 2025 All Rights Reserved.
`
    return text;
}
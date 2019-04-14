var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'univelcityfreelanceportal@gmail.com',
        pass: '123@freelance'
    }
});

exports.sendMail = function sendMail(email, subject, userName, messageBody, button){
  var mailTemplate  = `<html>
  <body class="no-padding" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;">
    <table class="wrapper" style="border-collapse: collapse;table-layout: fixed;min-width: 320px;width: 100%;background-color: #efefef;"
      cellpadding="0" cellspacing="0" role="presentation">
      <tbody>
        <tr>
          <td>
            <div role="banner">
              <div class="preheader" style="Margin: 0 auto;max-width: 560px;min-width: 280px; width: 280px;width: calc(28000% - 167440px);">
                <div style="border-collapse: collapse;display: table;width: 100%;">
                  <div class="snippet" style="display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 140px; width: 140px;width: calc(14000% - 78120px);padding: 10px 0 5px 0;color: #adb3b9;font-family: sans-serif;">
                  </div>
                  <div class="webversion" style="display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 139px; width: 139px;width: calc(14100% - 78680px);padding: 10px 0 5px 0;text-align: right;color: #adb3b9;font-family: sans-serif;">
                  </div>
                </div>
              </div>
              <div class="header" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);"
                id="emb-email-header-container"></div>
                <div class="logo emb-logo-margin-box" style="font-size: 26px;line-height: 32px;Margin-top: 6px;Margin-bottom: 20px;color: #c3ced9;font-family: Roboto,Tahoma,sans-serif;Margin-left: 20px;Margin-right: 20px;"
                  align="center">
                  <div class="logo-center" align="center" id="emb-email-header">
                    <img style="display: block;height: auto;width: 100%;margin-top:-60px;border: 0;max-width: 319px;" src="https://res.cloudinary.com/debugger/image/upload/v1534426559/ggmsv9uisxkjnpymw8rk.png"
                      alt="AffiaMmuta" width="319" />
                  </div>
                </div>
              </div>
            </div>
            <div role="section">
              <div class="layout one-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #ffffff;">
                  <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);padding-top: 10px;padding-bottom: 10px;border:1px solid #8e959c4a;">
                    <div style="Margin-left: 20px;Margin-right: 20px;">
                      <div style="mso-line-height-rule: exactly;mso-text-raise: 4px;">
                        <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #281557;font-size: 18px;line-height: 26px;font-family: Avenir,sans-serif;">
                          <span style="color:#8e959c">Hello ${userName},</span>
                        </h3>
                        <p style="Margin-top: 12px;Margin-bottom: 20px;font-family: open sans,sans-serif;">
                          <span class="font-open-sans">
                            <span style="color:#8e959c">${messageBody}</span>
                          </span>
                        </p>
                      </div>
                    </div>
  
                    <div style="Margin-left: 20px;Margin-right: 20px;">
                      <div class="btn btn--shadow btn--medium" style="text-align:center;">
                        <![if !mso]>
                        <a style="border-radius: 4px;
                        display: inline-block;
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 25px;
                        padding: 11px 20px 11px 20px;
                        text-align: center;
                        text-decoration: none !important;
                        transition: opacity 0.1s ease-in;
                        color: #ffffff !important;
                        box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
                        background-color: #85a64b;
                        font-family: Lato,sans-serif;"
                          href="https://univelcityfreelance.herokuapp.com/">${button}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="mso-line-height-rule: exactly;" role="contentinfo">
                <div class="layout email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                  <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
                    <div class="column wide" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;max-width: 400px;min-width: 320px; width: 320px;width: calc(8000% - 47600px);">
                      <h style="border: 1px solid #f2f4f0;">
                      <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                        <table class="email-footer__links emb-web-links" style="border-collapse: collapse;table-layout: fixed;" role="presentation">
                          <tbody>
                            <tr role="navigation">
                              <td class="emb-web-links" style="padding: 0;width: 26px;">
                                <a style="text-decoration: underline;transition: opacity 0.1s ease-in;color: #adb3b9;" href="http://facebook.com/univelcityfreelanceportal">
                                  <img style="border: 0;" src="https://i2.createsend1.com/static/eb/master/13-the-blueprint-3/images/facebook.png"
                                    width="26" height="26" alt="Facebook" />
                                </a>
                              </td>
                              <td class="emb-web-links" style="padding: 0 0 0 3px;width: 26px;">
                                <a style="text-decoration: underline;transition: opacity 0.1s ease-in;color: #adb3b9;" href="http://twitter.com/univelcityfreelanceportal">
                                  <img style="border: 0;" src="https://i3.createsend1.com/static/eb/master/13-the-blueprint-3/images/twitter.png"
                                    width="26" height="26" alt="Twitter" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style="font-size: 12px;
                        line-height: 19px;
                        Margin-top: 18px;">
                          <div>BROUGHT TO YOU BY UNIVELCITY FREELANCE PORTAL
                            <br /> Talk to us on phone +2348111686348
                            <br /> Email to mail@univelcityfreelanceportal.com
                            <br />  42, Montgomery Road Yaba
                            <br /> Lagos, Nigeria
                            <br /> Want to Unsubscribe? We are sorry to see you go, but happy to make it easy for you.
                            <unsubscribe
                              style="text-decoration: underline;"><a href="#" style="color: inherit">Unsubscribe</a></unsubscribe>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column narrow" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;">
                      <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                      </div>
                    </div>
                  </div>
                </div>
                <div style="mso-line-height-rule: exactly;line-height: 40px;font-size: 40px;">&nbsp;</div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  
  </body>
  
  </html>`

    var mailOptions = {
        from: '"univelcityfreelanceportal.com"',
        to: email,
        subject: subject,
        html: `${mailTemplate}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return false;
        } else {
          console.log('email sent: ' + info.response);
          return true;
        }
      });
}
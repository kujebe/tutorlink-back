const passwordResetEmailTemplate = (URL, userId, email, token) => {
  return `
  <!DOCTYPE html><html style="background: transparent; box-sizing: border-box; margin: 0; padding: 0;"><head style="background: transparent; box-sizing: border-box; margin: 0; padding: 0;"><title style="background: transparent; box-sizing: border-box; margin: 0; padding: 0;">TutorLink</title></head>
 <body style="background: transparent; background-color: #edeef6; box-sizing: border-box; font-family: 'Roboto', sans-serif; margin: 0; padding: 0;"><table class="main-table" cellpadding="0" cellspacing="0" style="background: transparent; background-color: #fff; border-collapse: separate; border-radius: 8px; border-spacing: 0; box-sizing: border-box; empty-cells: hide; margin: 0 auto; margin-top: 30px; padding: 0; width: 600px;"><tr class="header-row" style="background: transparent; background-color: #cfd8de; box-sizing: border-box; margin: 0; padding: 10px;"><td colspan="2" style="background: transparent; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; margin: 0 auto; padding: 0;"> <table cellpadding="0" cellspacing="0" style="background: transparent; border-collapse: separate; box-sizing: border-box; empty-cells: hide; margin: 0; padding: 0; width: 100%;"><tr style="background: transparent; box-sizing: border-box; margin: 0; padding: 0;"><td class="logo-cell" style="background: transparent; box-sizing: border-box; margin: 0 auto; padding: 5px 0; text-align: right; width: 43%;"> <a href="http://tutorlink-back.herokuapp.com/" style="background: transparent; box-sizing: border-box; color: #331c9b; font-family: 'Source Sans Pro', sans-serif; line-height: 1.4; margin: 0; padding: 0; text-decoration: none;"><img class="logo" src="http://ssngtechlabs.com/tutorlink-logo.png" style="background: transparent; border: none; box-sizing: border-box; margin: 0; padding: 0; vertical-align: sub; width: 50px;"></a></td><td class="app-name" style="background: transparent; box-sizing: border-box; margin: 0 auto; padding: 0; width: 57%;"> <h3 style="background: transparent; box-sizing: border-box; color: #006ab6; font-family: 'Lemonada', Helvetica, sans-serif; font-size: 30px; line-height: 1.4; margin: 0; padding: 0;">TutorLink</h3></td></tr></table></td></tr><tr class="top-content-greeting" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; box-sizing: border-box; font-size: 38px; font-weight: bold; margin: 0 auto; padding: 0; padding-bottom: 4px; padding-top: 60px;">Hello!</td></tr><tr class="top-content-email-address" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; box-sizing: border-box; color: #006ab6; font-size: 23px; margin: 0 auto; padding: 0;">${email}</td></tr><tr class="main-content" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; box-sizing: border-box; font-size: 22px; line-height: 30px; margin: 0 auto; padding: 0; padding-bottom: 4px; padding-left: 60px; padding-right: 60px; padding-top: 40px;">Someone has requested a link to change your password. You can do this through the button below.</td></tr><tr class="action-button" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; box-sizing: border-box; margin: 0 auto; padding: 0; padding-bottom: 35px; padding-top: 40px;"> <a class="btn" href="${URL}account/reset-password/?id=${userId}&token=${token}" style="background: #006ab6; border-radius: 100px; box-sizing: border-box; color: #fff; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; font-weight: bold; line-height: 1.4; margin: 0; padding: 18px 50px; text-decoration: none;">Reset Password</a></td></tr><tr class="after-button" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; box-sizing: border-box; color: #aaaaaa; font-size: 16px; line-height: 18px; margin: 0 auto; padding: 10px 60px 30px 60px;">If you didn't request this, please ignore this email. Your password will stay safe and won't be changed.</td></tr>
 <tr class="after-button" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; box-sizing: border-box; color: #aaaaaa; font-size: 15px; line-height: 18px; margin: 0 auto; padding: 10px 60px 50px 60px; font-style: italic">Note: This link is only valid for one hour</td></tr><tr class="footer" style="background: transparent; box-sizing: border-box; margin: 0; padding: 0; text-align: center;"><td colspan="2" style="background: transparent; border-top: 1px solid #aaaaaa; box-sizing: border-box; margin: 0 auto; padding: 0; padding-bottom: 35px; padding-top: 30px;"> <span class="regards" style="background: transparent; box-sizing: border-box; clear: both; display: block; font-size: 15px; font-weight: bold; line-height: 1.4; margin: 0; padding: 0;">Yours, TutorLink Team.</span><span class="support-mail" style="background: transparent; box-sizing: border-box; clear: both; color: #006ab6; display: block; font-size: 14px; font-style: italic; line-height: 1.4; margin: 0; padding: 0;">support@tutorlink.com.</span></td></tr></table><table class="bottom-table" cellpadding="0" cellspacing="0" style="background: transparent; border-collapse: separate; border-spacing: 0; box-sizing: border-box; color: #aaaaaa; empty-cells: hide; font-size: 15px; margin: 0 auto; margin-bottom: 20px; margin-top: 20px; padding: 0; text-align: center; width: 600px;"> <tr style="background: transparent; box-sizing: border-box; margin: 0; padding: 0;"><td style="background: transparent; box-sizing: border-box; margin: 0 auto; padding: 0;">TutorLink. 5, Force Road, Onikan, Lagos, Nigeria - 09062738903 </td></tr></table></body></html>
`;
};

module.exports = passwordResetEmailTemplate;

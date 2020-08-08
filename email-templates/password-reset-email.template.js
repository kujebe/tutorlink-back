const passwordResetEmailTemplate = (email, token) => {
  return `
<p> Dear ${email},<p>
<p>We received your order for TShirt(s). We will start processing your order when your payment of ${token} is confirmed.</p>
<p>Thank you for choosing us!</p>
`;
};

module.exports = passwordResetEmailTemplate;

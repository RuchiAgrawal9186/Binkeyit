const forgotPasswordTemplate = ({ name, otp }) => {
  return `<div>
    <p>Dear, ${name}</p>
    <p>You're requested a paasword reset.Please use following OTP code to reset your password.</p>
    <div style="backgound-color:yellow;font-size:20px;padding:20px;font-weight:800;">
       ${otp}
    </div>
    <p>
    This otp is valid for 1 hour only.Enter this otp in the binkeyit website to process with resetting your password.
    </p>
    <br/>
    <br/>
    <p>Thanks</p>
    <p>Binkeyit</p>
    </div>`;
};

export default forgotPasswordTemplate;

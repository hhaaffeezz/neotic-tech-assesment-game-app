import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { encryptToken, setSessionCookie } from "../../utils/auth";
import Button from "../../components/Button";
import { IoGameControllerSharp } from "react-icons/io5";
import { useForm, Controller } from "react-hook-form";
import MockAuthAPI from "../../api/loginMockApi";

const LoginAuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(""); // for alert
  const [loading, setLoading] = useState(false); // loader state

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    resetField,
  } = useForm();

  // using mock Api here
  const onPhoneSubmit = async (data) => {
    clearErrors();
    const phone = data.phone;
    setPhoneNumber(phone);
    setLoading(true);

    try {
      const response = await MockAuthAPI.sendOtp(phone);
      setOtpSent(response.otp); // store OTP for alert
      setShowOtp(true);
      alert(`OTP (Test Only): ${response.otp}`);
    } catch (err) {
      setError("phone", { type: "manual", message: err.message || "Failed to send OTP" });
    } finally {
      setLoading(false);
    }
  };

  // Verify step
  const onVerifyOtp = async () => {
    const enteredOtp = otpValues.join("");
    setLoading(true);

    try {
      const response = await MockAuthAPI.verifyOtp(phoneNumber, enteredOtp);

      const token = encryptToken({ phone: response.phone, expiresAt: response.expiresAt });
      setSessionCookie(token, response.expiresAt);
      dispatch(setUser({ phone: response.phone, expiresAt: response.expiresAt }));

      navigate("/home");
    } catch (err) {
      setError("otp", { type: "manual", message: err.message || "Wrong OTP" });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (value, idx) => {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otpValues];
    updated[idx] = value;
    setOtpValues(updated);
    if (value && idx < 3) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  return (
    <div className="w-full text-center rounded-t-[40px] px-6 py-8 -mt-8 bg-gray-900">
      <IoGameControllerSharp className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-400 mb-2" />
      <h2 className="text-2xl font-bold mb-6 text-white">GAMEZONE</h2>

      {!showOtp && (
        <form onSubmit={handleSubmit(onPhoneSubmit)}>
          <label className="text-xs text-white mb-2 block">ENTER YOUR NUMBER</label>
    <input
  {...register("phone", {
    required: "Phone number is required", // validations
    pattern: {
      value: /^\d{11}$/, 
      message: "Enter a valid 11-digit number",
    },
    validate: (value) => Number(value) > 0 || "Number must be positive",
  })}
  id="phone-input"
  type="text"
  placeholder="03001234567"
  className="w-56 h-9 mx-auto text-center rounded-lg mb-2 text-black bg-white border border-gray-300"
  maxLength={11} 
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); 
  }}
/>



          {errors.phone && <p className="text-red-500 text-xs mb-2">{errors.phone.message}</p>}

          <Button variant="blue" size="md" className="text-xs font-light mx-auto" type="submit" disabled={loading}>
            {loading ? "Sending..." : "CONTINUE"}
          </Button>
        </form>
      )}

      {showOtp && (
        <>
          <label className="text-xs text-white mb-3 mt-3 block">ENTER OTP</label>
          <div className="flex justify-center gap-3 mb-5">
            {otpValues.map((digit, i) => (
              <Controller
                key={i}
                name={`otp-${i}`}
                control={control}
                render={() => (
                  <input
                    id={`otp-${i}`}
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 text-center rounded-md text-black bg-white border border-gray-300"
                    value={otpValues[i]}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                  />
                )}
              />
            ))}
          </div>
          {errors.otp && <p className="text-red-500 text-xs mb-2">{errors.otp.message}</p>}

          <Button
            variant="blue"
            size="md"
            className="text-xs font-light mx-auto mb-2"
            onClick={onVerifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "VERIFY OTP"}
          </Button>

          <Button
            variant="gray"
            size="md"
            className="text-xs font-light mx-auto"
            onClick={() => {
              setShowOtp(false);
              setOtpValues(["", "", "", ""]);
              resetField("phone");
            }}
            disabled={loading}
          >
            BACK TO LOGIN
          </Button>
        </>
      )}

      <p className="text-[14px] text-white px-2 mt-4 font-medium leading-tight">
        YOUR CONTACT DETAILS ARE USED FOR VERIFICATION AND UPDATES AS PER OUR
      </p>

      <div className="flex items-center justify-center gap-2 mt-3">
        <input type="checkbox" className="accent-sky-500 w-4 h-4" defaultChecked />
        <label className="text-[12px] font-medium text-white">I AGREE TO THE TERMS AND CONDITIONS</label>
      </div>

      <p className="mt-5 text-sky-500 text-[12px] font-normal cursor-pointer">PRIVACY POLICY</p>
    </div>
  );
};

export default LoginAuthForm;

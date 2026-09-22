import React, { useState } from "react";

// Only letters and digits allowed, length between 8 and 16.
const PASSWORD_REGEX = /^[A-Za-z0-9]{8,16}$/;
const HAS_SPECIAL_CHAR_REGEX = /[^A-Za-z0-9]/;

function PasswordValidator() {
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = PASSWORD_REGEX.test(password);
  const hasSpecialChar = HAS_SPECIAL_CHAR_REGEX.test(password);
  const isTooShort = password.length > 0 && password.length < 8;
  const isTooLong = password.length > 16;

  const handleChange = (e) => {
    setPassword(e.target.value);
    if (!touched) setTouched(true);
  };

  const getMessage = () => {
    if (!touched || password === "") return null;
    if (hasSpecialChar) return "Special characters are not allowed.";
    if (isTooShort) return "Password must be at least 8 characters.";
    if (isTooLong) return "Password must be at most 16 characters.";
    if (isValid) return "Password is valid!";
    return "Password is invalid.";
  };

  const message = getMessage();

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Password Validator</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
            touched && password
              ? isValid
                ? "border-green-400 focus:ring-green-400"
                : "border-red-400 focus:ring-red-400"
              : "border-slate-300 focus:ring-blue-500"
          }`}
        />
      </div>

      <p className="text-xs text-slate-500">
        Rules: 8–16 characters, letters and numbers only (no special
        characters).
      </p>

      {message && (
        <p
          className={`text-sm font-medium ${
            isValid ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <div className="text-xs text-slate-400">
        Length: {password.length}/16
      </div>
    </div>
  );
}

export default PasswordValidator;

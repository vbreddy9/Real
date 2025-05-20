import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PopupForm = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agreeTerms: false,
    ip: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get("https://api64.ipify.org?format=json")
      .then((res) => setFormData((prev) => ({ ...prev, ip: res.data.ip })))
      .catch(() => setFormData((prev) => ({ ...prev, ip: "unknown" })));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    const onlyDigits = formData.mobile.replace(/\D/g, "");
    if (onlyDigits.length < 10)
      newErrors.mobile = "Mobile must be at least 10 digits";

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const res = await axios.post("https://backend.property-details.in/home/send-email", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile.replace(/\D/g, ""),
        ip: formData.ip,
      });

      alert(res.data.message || "Submitted successfully!");
      setFormData((prev) => ({
        name: "",
        email: "",
        mobile: "",
        agreeTerms: false,
        ip: prev.ip,
      }));
      onClose();
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Get a Call Back
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name*"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address*"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <PhoneInput
              country="in"
              value={formData.mobile}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, mobile: value }))
              }
              inputProps={{
                name: "mobile",
                required: true,
              }}
              containerClass="phone-container"
              inputClass="phone-input"
            />


          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

          <div className="flex items-start text-sm">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mr-2 mt-1"
              required
            />
            <span>
              I authorize Urbanrise to contact me via Call, SMS, WhatsApp. I agree to the{" "}
              <a href="/terms-conditions" className="text-blue-500 underline">T&C</a> and{" "}
              <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a>.
            </span>
          </div>
          {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded text-lg hover:bg-green-700 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

import React, { useState } from "react";
import { Mail, Check, Loader2, AlertCircle } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/send-welcome-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name: "" }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        console.log("Welcome email sent successfully to:", email);
      } else {
        setError(
          data.error || "Failed to send welcome email. Please try again."
        );
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-3 text-amber-900 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
        <Check className="w-5 h-5" />
        <span className="font-medium">
          Thank you! We'll notify you when we launch.
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3 text-red-800 bg-red-100/60 backdrop-blur-sm rounded-full px-6 py-3 border border-red-200/60 mb-4">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium text-sm">{error}</span>
        </div>
        <button
          onClick={() => setError("")}
          className="w-full px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-900 w-5 h-5 z-10" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-amber-300/60 text-amber-900 placeholder-amber-700/70 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent focus:bg-white/70"
          required
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-amber-800 hover:bg-amber-900 disabled:bg-amber-600 disabled:cursor-not-allowed text-white rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          "Notify Me"
        )}
      </button>
    </form>
  );
};

export default EmailSignup;

// app/banner.js
'use client';
import { useEffect, useState } from "react";
import posthog from "posthog-js";

export function Banner() {
  const [consentGiven, setConsentGiven] = useState('');

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(posthog.get_explicit_consent_status());
  }, []);

  const handleAcceptCookies = () => {
    posthog.opt_in_capturing();
    setConsentGiven('granted');
  };

  const handleDeclineCookies = () => {
    posthog.opt_out_capturing();
    setConsentGiven('denied');
  };

  return (
    <div>
      {consentGiven === 'pending' && (
        <div>
          <p>
            We use tracking cookies to understand how you use 
            the product and help us improve it.
            Please accept cookies to help us improve.
          </p>
          <button type="button" onClick={handleAcceptCookies}>Accept cookies</button>
          <span> </span>
          <button type="button" onClick={handleDeclineCookies}>Decline cookies</button>
        </div>
      )}
    </div>
  );
}
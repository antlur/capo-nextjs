import Script from "next/script";

export default function GoogleRecaptchaScript() {
  return <Script src="https://www.google.com/recaptcha/api.js" async defer />;
}

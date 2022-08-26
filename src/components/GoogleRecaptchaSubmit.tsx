interface Props {
  formRef: any;
  className?: string;
}

export default function GoogleRecaptchaSubmit({ formRef, className = "" }: Props) {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.recaptchaSubmit = (token: string) => {
      formRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    };
  }
  return (
    <button
      className={`${className} g-recaptcha`}
      data-sitekey="6Lc0lyYhAAAAAE3xHoYx1RVpGjBg0cLbsVPYwdtQ"
      data-callback="recaptchaSubmit"
      type="button"
    >
      Submit
    </button>
  );
}

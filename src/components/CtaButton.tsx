const AFFILIATE_LINK = "http://app.ac/hqp46L253";

interface CtaButtonProps {
  text?: string;
  className?: string;
}

export default function CtaButton({ text = "할인 적용하고 예약하기 →", className = "" }: CtaButtonProps) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`cta-button ${className}`}
    >
      {text}
    </a>
  );
}

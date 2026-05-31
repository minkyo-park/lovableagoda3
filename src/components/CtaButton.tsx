const AFFILIATE_LINK = "http://app.ac/hqp46L253";

interface CtaButtonProps {
  text?: string;
  className?: string;
  href?: string;
}

export default function CtaButton({ text = "할인 적용하고 예약하기 →", className = "", href }: CtaButtonProps) {
  return (
    <a
      href={href || AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`cta-button ${className}`}
    >
      {text}
    </a>
  );
}

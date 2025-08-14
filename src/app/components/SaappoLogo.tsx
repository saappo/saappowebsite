import Image from "next/image";

export function SaappoLogo({ className = "", size = "medium" }: { className?: string; size?: "small" | "medium" | "large" | "xlarge" }) {
  const sizeClasses = {
    small: { width: 80, height: 32 },
    medium: { width: 120, height: 48 },
    large: { width: 160, height: 64 },
    xlarge: { width: 400, height: 160 }
  };

  const dimensions = sizeClasses[size];

  return (
    <Image
      src="/LogoMakr-2JJ5RM-300dpi copy.jpeg"
      alt="Saappo - AI Automation Engineering"
      width={dimensions.width}
      height={dimensions.height}
      className={`h-auto ${className}`}
    />
  );
}

export function PoweredBySaappo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/powered_by_saappo.png"
      alt="Powered by Saappo"
      width={120}
      height={60}
      className={`h-auto ${className}`}
    />
  );
} 
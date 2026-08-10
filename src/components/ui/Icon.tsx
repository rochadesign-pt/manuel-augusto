import type { IconName } from "@/lib/types";

const PATHS: Record<IconName, React.ReactNode> = {
  advice: (
    <>
      <path d="M12 3 4 6v5c0 4.5 3.2 7.4 8 9 4.8-1.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 11.5 2 2 4-4.5" />
    </>
  ),
  appliance: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M6 10h12" />
      <path d="M9 6.2v1.6M9 13v3" />
    </>
  ),
  parts: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M4 7.5 12 12m0 0 8-4.5M12 12v9" />
    </>
  ),
  wrench: (
    <>
      <path d="M15.5 4.5a4 4 0 0 0-5.2 5.2L4 16v4h4l6.3-6.3a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.2-.4-.4-2.2 2.6-2.6Z" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h10v9H2zM12 9h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v5c0 4.5 3.2 7.4 8 9 4.8-1.6 8-4.5 8-9V6l-8-3Z" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v4M15 3v4" />
      <path d="M7 7h10v3a5 5 0 0 1-10 0V7Z" />
      <path d="M12 15v6" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "size-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

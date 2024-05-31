import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5 18.8349C16.7519 20.2676 14.4814 21.133 12 21.133C11.3507 21.1338 10.7032 21.0737 10.0654 20.9539C9.60633 20.8676 9.37678 20.8245 9.21653 20.849C9.05627 20.8735 8.82918 20.9943 8.37499 21.236C7.09014 21.9196 5.59195 22.1611 4.15111 21.8929C4.69874 21.219 5.07275 20.4103 5.23778 19.5434C5.33778 19.0132 5.09 18.498 4.71889 18.1209C3.03333 16.4084 2 14.1007 2 11.5609C2 9.0218 3.03313 6.71344 4.71889 5',
  d2: 'M7.5 3.02125C8.85265 2.36798 10.3815 2 12 2C17.5222 2 22 6.28357 22 11.5667C22 13.1665 21.5894 14.6747 20.8635 16',
  d3: 'M2 2L22 22',
  d4: 'M10.0654 20.9539C10.7032 21.0737 11.3507 21.1338 12 21.1329C14.4814 21.1329 16.7519 20.2676 18.5 18.8349L4.71889 5C3.03313 6.71344 2 9.0218 2 11.5609C2 14.1007 3.03333 16.4084 4.71889 18.1209C5.09 18.498 5.33778 19.0132 5.23778 19.5434C5.07275 20.4103 4.69874 21.219 4.15111 21.8929C5.59195 22.1611 7.09014 21.9196 8.37499 21.236C8.82918 20.9943 9.05627 20.8735 9.21653 20.849C9.37678 20.8245 9.60633 20.8676 10.0654 20.9539Z',
  d5: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d6: 'M1.25 11.5676C1.25 14.3153 2.36972 16.8074 4.18451 18.6503C4.45227 18.9222 4.53937 19.2009 4.50088 19.4061C4.35863 20.1522 4.03697 20.8454 3.56917 21.4207C3.40224 21.6261 3.35586 21.9042 3.44713 22.1525C3.5384 22.4009 3.75381 22.5828 4.01396 22.6312C5.62504 22.9309 7.29542 22.6609 8.72714 21.8995C8.96068 21.7753 9.11322 21.6944 9.22775 21.64C9.25931 21.6228 9.34334 21.5916 9.42696 21.6045C9.53909 21.6198 9.68979 21.6479 9.92698 21.6925C10.6103 21.8208 11.3041 21.8852 12 21.8843C14.5334 21.8843 16.8718 21.0397 18.7162 19.6228C18.9487 19.4441 19.065 19.3548 19.0738 19.2192C19.0826 19.0836 18.9749 18.9759 18.7594 18.7604L4.75306 4.75405C4.55322 4.55422 4.45331 4.4543 4.32523 4.45709C4.19715 4.45988 4.10533 4.56006 3.92169 4.76043C2.2608 6.57262 1.25 8.95121 1.25 11.5676Z',
  d7: 'M22.7493 11.5667C22.7493 5.83838 17.904 1.25 11.9993 1.25C10.2021 1.25 8.50307 1.67505 7.00893 2.42791C6.70084 2.58315 6.5468 2.66077 6.52248 2.81211C6.49816 2.96345 6.62493 3.09022 6.87848 3.34377L20.3932 16.8585C20.6291 17.0944 20.7471 17.2123 20.8918 17.195C21.0364 17.1778 21.1198 17.041 21.2865 16.7675C22.2156 15.2435 22.7493 13.4679 22.7493 11.5667Z',
  d8: 'M6.65323 3.47497C8.18696 2.56481 10.061 2 12.0022 2C17.5238 2 22 6.25513 22 11.5041C22 13.5333 21.3084 15.4396 20.1687 16.9833M4.85943 4.83997C3.12399 6.54944 2.00439 8.94078 2.00439 11.5041C2.00439 14.1818 3.16575 16.5119 5.00844 18.2923L4.00745 21.9874C4.00524 21.9955 4.0135 22.0026 4.0212 21.9991L7.99707 20.2149C9.22331 20.7251 10.578 21.0082 12.0022 21.0082C14.5356 21.0082 16.8829 20.0836 18.6448 18.607',
  d9: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d10: 'M11.9998 1.25C17.8995 1.25 22.7498 5.80369 22.7498 11.5C22.7498 13.6672 22.0477 15.669 20.8529 17.3176L6.32782 2.79253C7.9782 1.8137 9.92402 1.25 11.9998 1.25Z',
  d11: 'M11.9998 21.75C10.5946 21.75 9.25021 21.4925 8.01711 21.0233L3.24977 22.75L4.1611 18.5143C2.36047 16.6855 1.24976 14.2189 1.24976 11.5C1.24976 8.69525 2.42565 6.16751 4.32373 4.32398L19.1518 19.152C17.2462 20.7706 14.7358 21.75 11.9998 21.75Z',
} as const;

export const IconBubbleChatBlockedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-stroke-rounded IconBubbleChatBlockedStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatBlockedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-duotone-rounded IconBubbleChatBlockedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatBlockedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-twotone-rounded IconBubbleChatBlockedTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatBlockedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-solid-rounded IconBubbleChatBlockedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatBlockedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-bulk-rounded IconBubbleChatBlockedBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatBlockedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-stroke-sharp IconBubbleChatBlockedStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatBlockedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-blocked-solid-sharp IconBubbleChatBlockedSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleChatBlocked: TheIconSelfPack = {
  name: 'BubbleChatBlocked',
  StrokeRounded: IconBubbleChatBlockedStrokeRounded,
  DuotoneRounded: IconBubbleChatBlockedDuotoneRounded,
  TwotoneRounded: IconBubbleChatBlockedTwotoneRounded,
  SolidRounded: IconBubbleChatBlockedSolidRounded,
  BulkRounded: IconBubbleChatBlockedBulkRounded,
  StrokeSharp: IconBubbleChatBlockedStrokeSharp,
  SolidSharp: IconBubbleChatBlockedSolidSharp,
};
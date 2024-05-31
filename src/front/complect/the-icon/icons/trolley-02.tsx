import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 2H4.30116C5.48672 2 6.0795 2 6.4814 2.37142C6.88331 2.74285 6.96165 3.36307 7.11834 4.60351L8.24573 13.5287C8.45464 15.1826 8.5591 16.0095 9.09497 16.5048C9.63085 17 10.4212 17 12.002 17H22',
  d2: 'M18 14H16C14.1144 14 13.1716 14 12.5858 13.4142C12 12.8284 12 11.8856 12 10V8C12 6.11438 12 5.17157 12.5858 4.58579C13.1716 4 14.1144 4 16 4H18C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14Z',
  d3: 'M16.5 7L17.5 7',
  d4: 'M5.05239 3.53759C4.78746 3.5021 4.42157 3.50001 3.80116 3.50001H2.5C1.94772 3.50001 1.5 3.05229 1.5 2.50001C1.5 1.94772 1.94772 1.50001 2.5 1.50001H3.80116C3.82042 1.50001 3.83962 1.50001 3.85877 1.5C4.40185 1.49994 4.90417 1.49987 5.31791 1.55529C5.77898 1.61705 6.25289 1.76069 6.66011 2.13703C7.0612 2.50769 7.24858 2.96691 7.36179 3.41835C7.46602 3.83398 7.5312 4.35037 7.60363 4.92415C7.6059 4.94211 7.60817 4.96013 7.61045 4.9782L8.73784 13.9033C8.84543 14.7551 8.91657 15.3047 9.01771 15.708C9.11312 16.0885 9.20588 16.2077 9.27368 16.2704C9.33536 16.3274 9.44168 16.4004 9.7894 16.447C10.1699 16.4979 10.684 16.5 11.502 16.5H21.5C22.0523 16.5 22.5 16.9477 22.5 17.5C22.5 18.0523 22.0523 18.5 21.5 18.5L11.4399 18.5C10.7027 18.5001 10.0529 18.5001 9.52388 18.4293C8.94727 18.352 8.39047 18.1774 7.91627 17.7392C7.44819 17.3066 7.22079 16.7648 7.07777 16.1945C6.94379 15.6602 6.85908 14.9893 6.7609 14.2118L5.62622 5.22884C5.54474 4.5838 5.49319 4.18928 5.42186 3.90484C5.35773 3.64912 5.3059 3.60837 5.30283 3.60595C5.30276 3.60589 5.30285 3.60597 5.30283 3.60595C5.2975 3.60102 5.29078 3.59489 5.2666 3.58522C5.23568 3.57285 5.17288 3.55372 5.05239 3.53759Z',
  d5: 'M10 20.5C10 19.3954 10.8954 18.5 12 18.5C13.1046 18.5 14 19.3954 14 20.5C14 21.6046 13.1046 22.5 12 22.5C10.8954 22.5 10 21.6046 10 20.5Z',
  d6: 'M17 20.5C17 19.3954 17.8954 18.5 19 18.5C20.1046 18.5 21 19.3954 21 20.5C21 21.6046 20.1046 22.5 19 22.5C17.8954 22.5 17 21.6046 17 20.5Z',
  d7: 'M20.0445 4.07991C19.4497 3.99994 18.7005 3.99997 17.802 4H17.802H15.698H15.698C14.7995 3.99997 14.0503 3.99994 13.4555 4.07991C12.8277 4.16431 12.2609 4.34998 11.8055 4.80545C11.35 5.26092 11.1643 5.82772 11.0799 6.45552C11 7.05029 11 7.79948 11 8.69794V8.69797V8.698V10.802V10.802V10.8021C11 11.7005 11 12.4497 11.0799 13.0445C11.1643 13.6723 11.35 14.2391 11.8055 14.6945C12.2609 15.15 12.8277 15.3357 13.4555 15.4201C14.0503 15.5001 14.7995 15.5 15.698 15.5H15.698H15.698H17.802H17.802H17.8021C18.7005 15.5 19.4497 15.5001 20.0445 15.4201C20.6723 15.3357 21.2391 15.15 21.6945 14.6945C22.15 14.2391 22.3357 13.6723 22.4201 13.0445C22.5001 12.4497 22.5 11.7005 22.5 10.802V10.802V8.698V8.69797C22.5 7.7995 22.5001 7.05029 22.4201 6.45552C22.3357 5.82772 22.15 5.26092 21.6945 4.80545C21.2391 4.34998 20.6723 4.16431 20.0445 4.07991ZM15.75 6C15.3358 6 15 6.33578 15 6.75C15 7.16421 15.3358 7.5 15.75 7.5H17.75C18.1642 7.5 18.5 7.16421 18.5 6.75C18.5 6.33578 18.1642 6 17.75 6H15.75Z',
  d8: 'M17.802 4C18.7005 3.99997 19.4497 3.99995 20.0445 4.07991C20.6723 4.16432 21.2391 4.34999 21.6945 4.80546C22.15 5.26093 22.3357 5.82773 22.4201 6.45552C22.5001 7.0503 22.5 7.79951 22.5 8.69798V8.69801V10.802V10.802C22.5 11.7005 22.5001 12.4497 22.4201 13.0445C22.3357 13.6723 22.15 14.2391 21.6945 14.6945C21.2391 15.15 20.6723 15.3357 20.0445 15.4201C19.4497 15.5001 18.7005 15.5 17.802 15.5H17.802H15.698H15.698C14.7995 15.5 14.0503 15.5001 13.4555 15.4201C12.8277 15.3357 12.2609 15.15 11.8055 14.6945C11.35 14.2391 11.1643 13.6723 11.0799 13.0445C10.9999 12.4497 11 11.7005 11 10.802V10.802V8.698V8.69797C11 7.79951 10.9999 7.0503 11.0799 6.45552C11.1643 5.82773 11.35 5.26093 11.8055 4.80546C12.2609 4.34999 12.8277 4.16432 13.4555 4.07991C14.0503 3.99995 14.7995 3.99997 15.698 4H15.698H17.802H17.802Z',
  d9: 'M15 6.75C15 6.33579 15.3358 6 15.75 6L17.75 6C18.1642 6 18.5 6.33579 18.5 6.75C18.5 7.16421 18.1642 7.5 17.75 7.5L15.75 7.5C15.3358 7.5 15 7.16421 15 6.75Z',
  d10: 'M2 2.5H6L8 17.5H22',
  d11: 'M21 14.5H11V4.5H21V14.5Z',
  d12: 'M14.5 7.5L17.5 7.5',
  d13: 'M5.12448 3.75H2V1.75H6C6.5012 1.75 6.92499 2.12103 6.99123 2.61784L8.87552 16.75H22V18.75H8C7.4988 18.75 7.07501 18.379 7.00877 17.8822L5.12448 3.75Z',
  d14: 'M9.5 20.25C9.5 19.1454 10.3954 18.25 11.5 18.25C12.6046 18.25 13.5 19.1454 13.5 20.25C13.5 21.3546 12.6046 22.25 11.5 22.25C10.3954 22.25 9.5 21.3546 9.5 20.25Z',
  d15: 'M16.5 20.25C16.5 19.1454 17.3954 18.25 18.5 18.25C19.6046 18.25 20.5 19.1454 20.5 20.25C20.5 21.3546 19.6046 22.25 18.5 22.25C17.3954 22.25 16.5 21.3546 16.5 20.25Z',
  d16: 'M11 3.75C10.5858 3.75 10.25 4.08579 10.25 4.5V14.5C10.25 14.9142 10.5858 15.25 11 15.25H21C21.4142 15.25 21.75 14.9142 21.75 14.5V4.5C21.75 4.08579 21.4142 3.75 21 3.75H11ZM14.5 8.25H17.5V6.75H14.5V8.25Z',
} as const;

export const IconTrolley02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-stroke-rounded IconTrolley02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="11.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-duotone-rounded IconTrolley02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="11.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-twotone-rounded IconTrolley02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="11.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-solid-rounded IconTrolley02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-bulk-rounded IconTrolley02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-stroke-sharp IconTrolley02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="11.5" 
        cy="20" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="18.5" 
        cy="20" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrolley02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trolley-02-solid-sharp IconTrolley02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrolley02: TheIconSelfPack = {
  name: 'Trolley02',
  StrokeRounded: IconTrolley02StrokeRounded,
  DuotoneRounded: IconTrolley02DuotoneRounded,
  TwotoneRounded: IconTrolley02TwotoneRounded,
  SolidRounded: IconTrolley02SolidRounded,
  BulkRounded: IconTrolley02BulkRounded,
  StrokeSharp: IconTrolley02StrokeSharp,
  SolidSharp: IconTrolley02SolidSharp,
};
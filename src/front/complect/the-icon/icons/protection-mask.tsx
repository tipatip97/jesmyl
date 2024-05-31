import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.27574 22V18.4493C4.27574 17.172 3.93486 16.5167 3.26456 15.4113C2.46115 14.0864 2 12.5402 2 10.8889C2 5.97969 6.07554 2 11.103 2C15.4666 2 19.1132 4.99817 20 9',
  d2: 'M15.0752 14.8454L18.991 12.4141C19.0832 12.3568 19.1294 12.3282 19.1753 12.3058C19.2213 12.2834 19.2749 12.2638 19.382 12.2245C19.933 12.0226 20.5435 11.8047 21.0395 12.2243C21.3015 12.4459 21.4245 12.8352 21.6707 13.6138C21.8649 14.2282 22.0806 14.8351 21.9699 15.487C21.9119 15.8283 21.7602 16.1483 21.4567 16.7883L20.0275 19.8024C19.4737 20.9703 19.1968 21.5542 18.2759 21.8609C17.3551 22.1675 16.9484 21.9358 16.135 21.4725C12.4487 19.3724 5.30998 13.2604 7.36438 10.4879C8.14017 9.44098 10.1234 9.73499 15.0752 14.8454ZM15.0752 14.8454L14.0098 20.0793',
  d3: 'M18.991 12.4139L15.0752 14.8452L14.0098 20.0791L16.135 21.4723C16.9484 21.9357 17.3551 22.1673 18.2759 21.8607C19.1968 21.554 19.4737 20.9701 20.0275 19.8022L21.4567 16.7881L21.4567 16.7881C21.7602 16.1481 21.9119 15.8281 21.9699 15.4868C22.0806 14.8349 21.8649 14.228 21.6707 13.6136L21.6707 13.6136C21.4245 12.835 21.3015 12.4457 21.0395 12.2241C20.5435 11.8045 19.933 12.0225 19.382 12.2243C19.2749 12.2636 19.2213 12.2832 19.1753 12.3056C19.1294 12.328 19.0832 12.3567 18.991 12.4139Z',
  d4: 'M11.1003 3.20455C14.9033 3.20455 18.0584 5.82169 18.8229 9.27963C18.9394 9.80657 19.46 10.1391 19.9858 10.0223C20.5115 9.90553 20.8432 9.38369 20.7267 8.85674C19.7619 4.49292 15.8063 1.25 11.1003 1.25C5.68213 1.25 1.25 5.55499 1.25 10.9141C1.25 12.7127 1.75166 14.3982 2.62423 15.8405C2.95246 16.3831 3.152 16.7397 3.28038 17.0912C3.40031 17.4196 3.46883 17.7759 3.46883 18.3028V21.7727C3.46883 22.3125 3.90534 22.75 4.44382 22.75C4.98229 22.75 5.41881 22.3125 5.41881 21.7727V18.3028C5.41881 17.5814 5.32115 16.9933 5.11151 16.4193C4.91033 15.8685 4.61692 15.3648 4.29161 14.8271C3.59755 13.6798 3.19998 12.3432 3.19998 10.9141C3.19998 6.67804 6.71507 3.20455 11.1003 3.20455Z',
  d5: 'M13.5967 20.7088C11.7868 19.3665 9.47847 17.3037 8.09197 15.5559C7.36085 14.6344 6.749 13.6571 6.44822 12.701C6.14326 11.7317 6.12546 10.653 6.8034 9.73683C7.14556 9.27441 7.65382 8.93709 8.32155 8.8656C8.94387 8.79897 9.60731 8.97351 10.2949 9.30391C11.5375 9.90096 13.1538 11.1526 15.2929 13.2933C15.4556 13.456 15.5369 13.5374 15.6399 13.5498C15.743 13.5621 15.8403 13.5029 16.0349 13.3845L18.9786 11.5931C19.655 11.1502 20.692 10.9519 21.522 11.6539C21.7811 11.8731 21.9343 12.1478 22.0496 12.4196C22.1579 12.6752 22.3138 13.1666 22.4284 13.5291C22.6047 14.0768 22.8429 14.8166 22.7074 15.6148C22.6317 16.0602 22.4375 16.4693 22.1719 17.0289L20.6777 20.1799C20.4228 20.7177 20.1851 21.2191 19.8824 21.6136C19.5357 22.0651 19.1105 22.3751 18.511 22.5747C17.9557 22.7596 17.4763 22.8058 16.9859 22.6864C16.5632 22.5835 16.1759 22.3626 15.8114 22.1547L13.5967 20.7088ZM8.53271 10.8379C8.46281 10.8454 8.43743 10.861 8.39544 10.9178C8.22672 11.1458 8.14581 11.4941 8.33802 12.1051C8.53442 12.7293 8.98004 13.4859 9.64346 14.3222C10.5107 15.4153 11.6688 16.5443 12.8738 17.5604C13.2053 17.84 13.3711 17.9797 13.5324 17.9236C13.6938 17.8675 13.7376 17.6521 13.8253 17.2213L14.1997 15.3823C14.2309 15.2291 14.2465 15.1526 14.225 15.0805C14.2035 15.0085 14.1488 14.9534 14.0395 14.8431C11.8718 12.6572 10.4024 11.5554 9.43866 11.0923C8.92618 10.846 8.64802 10.8256 8.53271 10.8379Z',
  d6: 'M15.0686 14.8454L20.0256 11.5L22 15L19.7002 20.3611C19.2737 21.3554 18.2951 22 17.2123 22C16.7425 22 16.2812 21.8828 15.8838 21.6324C12.0423 19.2126 5.40202 13.1147 7.3503 10.4879C8.12684 9.44098 10.112 9.73499 15.0686 14.8454ZM15.0686 14.8454L14.0021 20.0793',
  d7: 'M15.1184 13.6388C12.999 11.5144 11.4023 10.2766 10.1781 9.68965C9.50813 9.36846 8.86199 9.19891 8.25607 9.26364C7.606 9.33309 7.11097 9.66076 6.77755 10.1104C6.00609 11.1507 6.19026 12.4115 6.63444 13.4758C7.0871 14.5605 7.90521 15.6978 8.84853 16.7699C10.7433 18.9233 13.3421 21.0355 15.2653 22.2472C15.8206 22.597 16.448 22.75 17.06 22.75C18.4891 22.75 19.7813 21.899 20.3447 20.5855L22.75 14.9775L20.0988 10.277L15.1184 13.6388ZM8.32569 11.2594C8.3666 11.2042 8.39157 11.1887 8.46027 11.1814C8.5731 11.1693 8.8445 11.1893 9.34397 11.4288C10.3007 11.8875 11.7686 12.9905 13.9458 15.1955L13.2945 18.3923C12.2357 17.5015 11.1788 16.4998 10.2955 15.4959C9.41014 14.4897 8.74847 13.5362 8.4133 12.7331C8.06966 11.9096 8.15797 11.4855 8.32569 11.2594Z',
  d8: 'M11.3532 3.25C15.2538 3.25 18.4898 5.928 19.2739 9.46636L21.2266 9.03364C20.237 4.56834 16.18 1.25 11.3532 1.25C5.79608 1.25 1.25025 5.6551 1.25025 11.1389C1.25025 12.9793 1.76478 14.704 2.65973 16.1798C2.99638 16.735 3.20104 17.1 3.33271 17.4596C3.45572 17.7956 3.52599 18.1602 3.52599 18.6993V22.25H5.52599V18.6993C5.52599 17.9612 5.42583 17.3594 5.21082 16.7721C5.00447 16.2084 4.70354 15.693 4.36988 15.1428C3.65802 13.9689 3.25025 12.6012 3.25025 11.1389C3.25025 6.80428 6.85551 3.25 11.3532 3.25Z',
} as const;

export const IconProtectionMaskStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-stroke-rounded IconProtectionMaskStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconProtectionMaskDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-duotone-rounded IconProtectionMaskDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconProtectionMaskTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-twotone-rounded IconProtectionMaskTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconProtectionMaskSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-solid-rounded IconProtectionMaskSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProtectionMaskBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-bulk-rounded IconProtectionMaskBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProtectionMaskStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-stroke-sharp IconProtectionMaskStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconProtectionMaskSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="protection-mask-solid-sharp IconProtectionMaskSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfProtectionMask: TheIconSelfPack = {
  name: 'ProtectionMask',
  StrokeRounded: IconProtectionMaskStrokeRounded,
  DuotoneRounded: IconProtectionMaskDuotoneRounded,
  TwotoneRounded: IconProtectionMaskTwotoneRounded,
  SolidRounded: IconProtectionMaskSolidRounded,
  BulkRounded: IconProtectionMaskBulkRounded,
  StrokeSharp: IconProtectionMaskStrokeSharp,
  SolidSharp: IconProtectionMaskSolidSharp,
};
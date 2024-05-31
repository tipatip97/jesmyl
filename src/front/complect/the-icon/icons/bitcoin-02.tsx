import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8Z',
  d2: 'M12 2.75V5.5M11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75Z',
  d3: 'M5.75 2.75V5.5L7 6.5M5 2.75C5 3.16421 5.33579 3.5 5.75 3.5C6.16421 3.5 6.5 3.16421 6.5 2.75C6.5 2.33579 6.16421 2 5.75 2C5.33579 2 5 2.33579 5 2.75Z',
  d4: 'M18.25 2.75V5.5L17 6.5M19 2.75C19 3.16421 18.6642 3.5 18.25 3.5C17.8358 3.5 17.5 3.16421 17.5 2.75C17.5 2.33579 17.8358 2 18.25 2C18.6642 2 19 2.33579 19 2.75Z',
  d5: 'M10.4375 17.6667L10.4375 12.3333M12 12.3333V11M12 19V17.6667M10.4375 15H13.5625M13.5625 15C14.0803 15 14.5 15.4477 14.5 16V16.6667C14.5 17.219 14.0803 17.6667 13.5625 17.6667H9.5M13.5625 15C14.0803 15 14.5 14.5523 14.5 14V13.3333C14.5 12.781 14.0803 12.3333 13.5625 12.3333H9.5',
  d6: 'M10.5 2.75C10.5 1.92157 11.1716 1.25 12 1.25C12.8284 1.25 13.5 1.92157 13.5 2.75C13.5 3.30521 13.1984 3.78997 12.75 4.04933V5.5C12.75 5.91421 12.4142 6.25 12 6.25C11.5858 6.25 11.25 5.91421 11.25 5.5V4.04933C10.8016 3.78997 10.5 3.30521 10.5 2.75Z',
  d7: 'M4.25 2.75C4.25 1.92157 4.92157 1.25 5.75 1.25C6.57843 1.25 7.25 1.92157 7.25 2.75C7.25 3.30521 6.94835 3.78997 6.5 4.04933V5.13953L7.46852 5.91435C7.79197 6.17311 7.84441 6.64507 7.58565 6.96852C7.32689 7.29197 6.85493 7.34441 6.53148 7.08565L5.28148 6.08565C5.10357 5.94332 5 5.72784 5 5.5V4.04933C4.55165 3.78997 4.25 3.30521 4.25 2.75Z',
  d8: 'M19.75 2.75C19.75 1.92157 19.0784 1.25 18.25 1.25C17.4216 1.25 16.75 1.92157 16.75 2.75C16.75 3.30521 17.0516 3.78997 17.5 4.04933V5.13953L16.5315 5.91435C16.208 6.17311 16.1556 6.64507 16.4143 6.96852C16.6731 7.29197 17.1451 7.34441 17.4685 7.08565L18.7185 6.08565C18.8964 5.94332 19 5.72784 19 5.5V4.04933C19.4484 3.78997 19.75 3.30521 19.75 2.75Z',
  d9: 'M12 22.75C16.2802 22.75 19.75 19.2802 19.75 15C19.75 10.7198 16.2802 7.25 12 7.25C7.71979 7.25 4.25 10.7198 4.25 15C4.25 19.2802 7.71979 22.75 12 22.75ZM12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V11.5833H9.5C9.08579 11.5833 8.75 11.9191 8.75 12.3333C8.75 12.7475 9.08579 13.0833 9.5 13.0833H9.6875V16.9167H9.5C9.08579 16.9167 8.75 17.2525 8.75 17.6667C8.75 18.0809 9.08579 18.4167 9.5 18.4167H11.25V19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19V18.4167H13.5625C14.5393 18.4167 15.25 17.5868 15.25 16.6667V16C15.25 15.6376 15.1398 15.2892 14.9465 15C15.1398 14.7108 15.25 14.3624 15.25 14V13.3333C15.25 12.4132 14.5393 11.5833 13.5625 11.5833H12.75V11ZM11.1875 14.25V13.0833H13.5625C13.6212 13.0833 13.75 13.1489 13.75 13.3333V14C13.75 14.1844 13.6212 14.25 13.5625 14.25H11.1875ZM11.1875 15.75H13.5625C13.6212 15.75 13.75 15.8156 13.75 16V16.6667C13.75 16.8511 13.6212 16.9167 13.5625 16.9167H11.1875V15.75Z',
  d10: 'M19.75 15C19.75 19.2802 16.2802 22.75 12 22.75C7.71979 22.75 4.25 19.2802 4.25 15C4.25 10.7198 7.71979 7.25 12 7.25C16.2802 7.25 19.75 10.7198 19.75 15Z',
  d11: 'M12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V11.5833H13.5625C14.5393 11.5833 15.25 12.4132 15.25 13.3333V14C15.25 14.3624 15.1398 14.7108 14.9465 15C15.1398 15.2892 15.25 15.6376 15.25 16V16.6667C15.25 17.5868 14.5393 18.4167 13.5625 18.4167H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V18.4167H9.5C9.08579 18.4167 8.75 18.0809 8.75 17.6667C8.75 17.2525 9.08579 16.9167 9.5 16.9167H9.6875L9.6875 13.0833H9.5C9.08579 13.0833 8.75 12.7475 8.75 12.3333C8.75 11.9191 9.08579 11.5833 9.5 11.5833H11.25V11C11.25 10.5858 11.5858 10.25 12 10.25ZM11.1875 13.0833V14.25H13.5625C13.6212 14.25 13.75 14.1844 13.75 14V13.3333C13.75 13.1489 13.6212 13.0833 13.5625 13.0833H11.1875ZM13.5625 15.75H11.1875L11.1875 16.9167H13.5625C13.6212 16.9167 13.75 16.8511 13.75 16.6667V16C13.75 15.8156 13.6212 15.75 13.5625 15.75Z',
  d12: 'M10.5 2.75C10.5 1.92157 11.1716 1.25 12 1.25C12.8284 1.25 13.5 1.92157 13.5 2.75C13.5 3.30521 13.1984 3.78997 12.75 4.04933V6.25H11.25V4.04933C10.8016 3.78997 10.5 3.30521 10.5 2.75Z',
  d13: 'M4.25 2.75C4.25 1.92157 4.92157 1.25 5.75 1.25C6.57843 1.25 7.25 1.92157 7.25 2.75C7.25 3.30521 6.94835 3.78997 6.5 4.04933V5.13953L8.05417 6.38287L7.11713 7.55417L5 5.86047V4.04933C4.55165 3.78997 4.25 3.30521 4.25 2.75Z',
  d14: 'M19.75 2.75C19.75 1.92157 19.0784 1.25 18.25 1.25C17.4216 1.25 16.75 1.92157 16.75 2.75C16.75 3.30521 17.0516 3.78997 17.5 4.04933V5.13953L15.9458 6.38287L16.8829 7.55417L19 5.86047V4.04933C19.4484 3.78997 19.75 3.30521 19.75 2.75Z',
  d15: 'M12 22.75C16.2802 22.75 19.75 19.2802 19.75 15C19.75 10.7198 16.2802 7.25 12 7.25C7.71979 7.25 4.25 10.7198 4.25 15C4.25 19.2802 7.71979 22.75 12 22.75ZM12.75 11.5833V10.25H11.25V11.5833H8.75V13.0833H9.6875V16.9167H8.75V18.4167H11.25V19.75H12.75V18.4167H13.5625C14.5393 18.4167 15.25 17.5868 15.25 16.6667V16C15.25 15.6376 15.1398 15.2892 14.9465 15C15.1398 14.7108 15.25 14.3624 15.25 14V13.3333C15.25 12.4132 14.5393 11.5833 13.5625 11.5833H12.75ZM11.1875 14.25V13.0833H13.5625C13.6212 13.0833 13.75 13.1489 13.75 13.3333V14C13.75 14.1844 13.6212 14.25 13.5625 14.25H11.1875ZM11.1875 15.75H13.5625C13.6212 15.75 13.75 15.8156 13.75 16V16.6667C13.75 16.8511 13.6212 16.9167 13.5625 16.9167H11.1875V15.75Z',
} as const;

export const IconBitcoin02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-stroke-rounded IconBitcoin02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-duotone-rounded IconBitcoin02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-twotone-rounded IconBitcoin02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-solid-rounded IconBitcoin02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-bulk-rounded IconBitcoin02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-stroke-sharp IconBitcoin02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoin02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-02-solid-sharp IconBitcoin02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoin02: TheIconSelfPack = {
  name: 'Bitcoin02',
  StrokeRounded: IconBitcoin02StrokeRounded,
  DuotoneRounded: IconBitcoin02DuotoneRounded,
  TwotoneRounded: IconBitcoin02TwotoneRounded,
  SolidRounded: IconBitcoin02SolidRounded,
  BulkRounded: IconBitcoin02BulkRounded,
  StrokeSharp: IconBitcoin02StrokeSharp,
  SolidSharp: IconBitcoin02SolidSharp,
};
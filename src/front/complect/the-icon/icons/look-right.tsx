import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.009 9H16',
  d2: 'M15 14C15.9122 14.6072 17.3645 15 19.0004 15C20.1261 15 20.6645 14.8139 21.5 14.5',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.4007 22.7281 12.7962 22.6854 13.1855C22.6665 13.3573 22.6571 13.4432 22.601 13.512C22.545 13.5807 22.4625 13.6073 22.2976 13.6604C21.0896 14.0495 19.8074 14.25 19.0004 14.25C17.4637 14.25 16.1696 13.8776 15.4157 13.3757C15.0709 13.1462 14.6053 13.2396 14.3758 13.5844C14.1462 13.9292 14.2397 14.3948 14.5845 14.6243C15.655 15.3369 17.2655 15.75 19.0004 15.75C19.5925 15.75 20.3587 15.6656 21.174 15.5004C21.669 15.4001 21.9165 15.35 22.0309 15.4914C22.1454 15.6328 22.0517 15.8484 21.8644 16.2797C20.2102 20.0872 16.4161 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM14.75 9C14.75 8.30964 15.3076 7.75 15.9955 7.75H16.0045C16.6924 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6924 10.25 16.0045 10.25H15.9955C15.3076 10.25 14.75 9.69036 14.75 9Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M14.75 9C14.75 8.30964 15.3076 7.75 15.9955 7.75H16.0045C16.6924 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6924 10.25 16.0045 10.25H15.9955C15.3076 10.25 14.75 9.69036 14.75 9Z',
  d6: 'M22.2532 15.2401C21.0566 15.5765 19.8494 15.7501 19.0004 15.7501C17.2655 15.7501 15.655 15.337 14.5845 14.6244C14.2397 14.3949 14.1462 13.9293 14.3758 13.5845C14.6053 13.2397 15.0709 13.1462 15.4157 13.3758C16.1696 13.8776 17.4637 14.2501 19.0004 14.2501C19.8842 14.2501 21.3379 14.0096 22.6399 13.5443C22.5563 14.1259 22.426 14.6924 22.2532 15.2401Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.3632 22.732 12.7221 22.6968 13.0761C22.087 13.4384 21.5412 13.6856 21.2403 13.7964L21.2358 13.7981C20.4396 14.0973 19.9975 14.2502 18.9999 14.2502C17.4632 14.2502 16.1691 13.8778 15.4152 13.3759L14.584 14.6245C15.6545 15.3371 17.265 15.7502 18.9999 15.7502C20.2528 15.7502 20.8875 15.5313 21.7612 15.2031C21.913 15.1471 22.1094 15.0659 22.3372 14.9605C21.0516 19.4579 16.9102 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM16 7.75C15.3096 7.75 14.75 8.30964 14.75 9C14.75 9.69036 15.3096 10.25 16 10.25H16.009C16.6993 10.25 17.259 9.69036 17.259 9C17.259 8.30964 16.6993 7.75 16.009 7.75H16Z',
} as const;

export const IconLookRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-stroke-rounded IconLookRightStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconLookRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-duotone-rounded IconLookRightDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconLookRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-twotone-rounded IconLookRightTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLookRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-solid-rounded IconLookRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLookRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-bulk-rounded IconLookRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconLookRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-stroke-sharp IconLookRightStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLookRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="look-right-solid-sharp IconLookRightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLookRight: TheIconSelfPack = {
  name: 'LookRight',
  StrokeRounded: IconLookRightStrokeRounded,
  DuotoneRounded: IconLookRightDuotoneRounded,
  TwotoneRounded: IconLookRightTwotoneRounded,
  SolidRounded: IconLookRightSolidRounded,
  BulkRounded: IconLookRightBulkRounded,
  StrokeSharp: IconLookRightStrokeSharp,
  SolidSharp: IconLookRightSolidSharp,
};
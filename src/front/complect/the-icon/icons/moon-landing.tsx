import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 12C7.46544 12 3.62948 14.9642 2.35747 19.044C1.99646 20.2019 1.81595 20.7809 2.26968 21.3904C2.7234 22 3.46112 22 4.93655 22H19.0634C20.5389 22 21.2766 22 21.7303 21.3904C22.184 20.7809 22.0035 20.2019 21.6425 19.044C20.3705 14.9642 16.5346 12 12 12Z',
  d2: 'M14.9998 17H15.0088',
  d3: 'M12 22C12 20.3431 10.6569 19 9 19C7.34315 19 6 20.3431 6 22',
  d4: 'M12 12V7.5M12 7.5V5C12 3.58579 12 2.87868 12.4393 2.43934C12.8787 2 13.5858 2 15 2H17.25C18.4228 2 19.0092 2 19.4131 2.30997C19.5171 2.38977 19.6102 2.48286 19.69 2.58686C20 2.99082 20 3.57721 20 4.75C20 5.92279 20 6.50918 19.69 6.91314C19.6102 7.01714 19.5171 7.11023 19.4131 7.19003C19.0092 7.5 18.4228 7.5 17.25 7.5H12Z',
  d5: 'M2.35747 19.044C3.62948 14.9642 7.46544 12 12 12C16.5346 12 20.3705 14.9642 21.6425 19.044C22.0035 20.2019 22.184 20.7809 21.7303 21.3904C21.2766 22 20.5389 22 19.0634 22H12C12 20.3431 10.6569 19 9 19C7.34315 19 6 20.3431 6 22H4.93655C3.46112 22 2.7234 22 2.26968 21.3904C1.81595 20.7809 1.99646 20.2019 2.35747 19.044Z',
  d6: 'M17.25 2H15C13.5858 2 12.8787 2 12.4393 2.43934C12 2.87868 12 3.58579 12 5V7.5H17.25C18.4228 7.5 19.0092 7.5 19.4131 7.19003C19.5171 7.11023 19.6102 7.01714 19.69 6.91314C20 6.50918 20 5.92279 20 4.75C20 3.57721 20 2.99082 19.69 2.58686C19.6102 2.48286 19.5171 2.38977 19.4131 2.30997C19.0092 2 18.4228 2 17.25 2Z',
  d7: 'M1.64137 18.8208C3.00944 14.4329 7.13165 11.25 11.9999 11.25C16.8682 11.25 20.9904 14.4329 22.3584 18.8208C22.5227 19.3473 22.6978 19.9084 22.7387 20.3544C22.7872 20.8834 22.681 21.3692 22.3319 21.8383C21.9601 22.3377 21.4672 22.5627 20.9121 22.6621C20.4201 22.7502 19.8097 22.7501 19.125 22.75H12.75V22C12.75 19.9289 11.0711 18.25 9 18.25C6.92893 18.25 5.25 19.9289 5.25 22V22.75H4.87482C4.19012 22.7501 3.5797 22.7502 3.0877 22.6621C2.53263 22.5627 2.03968 22.3377 1.66796 21.8383C1.31884 21.3692 1.21257 20.8834 1.26109 20.3544C1.30199 19.9084 1.47707 19.3473 1.64137 18.8208ZM6.75 22.75H11.25V22C11.25 20.7574 10.2426 19.75 9 19.75C7.75736 19.75 6.75 20.7574 6.75 22V22.75ZM14 17C14 16.4477 14.4477 16 15 16H15.009C15.5613 16 16.009 16.4477 16.009 17C16.009 17.5523 15.5613 18 15.009 18H15C14.4477 18 14 17.5523 14 17Z',
  d8: 'M14.9915 1.25L17.2357 1.25C17.7514 1.24996 18.215 1.24993 18.5953 1.29317C19.0065 1.33994 19.436 1.44722 19.8208 1.7451C19.9855 1.87256 20.1329 2.02124 20.2592 2.18735C20.5545 2.57555 20.6608 3.00876 20.7072 3.4236C20.7501 3.8072 20.75 4.3722 20.75 4.89238C20.75 5.41257 20.7501 5.88031 20.7072 6.26392C20.6608 6.67875 20.5545 7.11196 20.2592 7.50016C20.1329 7.66627 19.9855 7.81495 19.8208 7.94241C19.436 8.24029 19.0065 8.34757 18.5953 8.39434C18.215 8.43758 17.7514 8.43755 17.2357 8.43751L13.15 8.4375V11.7917C13.15 12.3209 12.7247 12.75 12.2 12.75C11.6753 12.75 11.25 12.3209 11.25 11.7917L11.25 5.0243C11.2499 4.39743 11.2499 3.8342 11.3107 3.37832C11.377 2.8806 11.531 2.36998 11.9456 1.95173C12.3602 1.53348 12.8664 1.3781 13.3598 1.31118C13.8117 1.24989 14.3701 1.24994 14.9915 1.25Z',
  d9: 'M1.64137 18.8208C3.00944 14.4329 7.13165 11.25 11.9999 11.25C16.8682 11.25 20.9904 14.4329 22.3584 18.8208C22.5227 19.3473 22.6978 19.9084 22.7387 20.3544C22.7872 20.8834 22.681 21.3692 22.3319 21.8383C21.9601 22.3377 21.4672 22.5627 20.9121 22.6621C20.4201 22.7502 19.8097 22.7501 19.125 22.75H4.87482C4.19012 22.7501 3.5797 22.7502 3.0877 22.6621C2.53263 22.5627 2.03968 22.3377 1.66796 21.8383C1.31884 21.3692 1.21257 20.8834 1.26109 20.3544C1.30199 19.9084 1.47707 19.3473 1.64137 18.8208Z',
  d10: 'M14 17C14 16.4477 14.4477 16 15 16H15.009C15.5613 16 16.009 16.4477 16.009 17C16.009 17.5523 15.5613 18 15.009 18H15C14.4477 18 14 17.5523 14 17Z',
  d11: 'M5.25 22V22.75H6.75V22C6.75 20.7574 7.75736 19.75 9 19.75C10.2426 19.75 11.25 20.7574 11.25 22V22.75H12.75V22C12.75 19.9289 11.0711 18.25 9 18.25C6.92893 18.25 5.25 19.9289 5.25 22Z',
  d12: 'M17.2357 1.25L14.9915 1.25C14.3701 1.24994 13.8117 1.24989 13.3598 1.31118C12.8664 1.3781 12.3602 1.53348 11.9456 1.95173C11.531 2.36998 11.377 2.8806 11.3107 3.37832C11.2499 3.8342 11.2499 4.39743 11.25 5.0243L11.25 11.2753C11.4978 11.2585 11.7478 11.25 11.9999 11.25C12.3884 11.25 12.7721 11.2703 13.15 11.3098V8.4375L17.2357 8.43751C17.7514 8.43755 18.215 8.43758 18.5953 8.39434C19.0065 8.34757 19.436 8.24029 19.8208 7.94241C19.9855 7.81495 20.1329 7.66627 20.2592 7.50016C20.5545 7.11196 20.6608 6.67875 20.7072 6.26392C20.7501 5.88031 20.75 5.41257 20.75 4.89238C20.75 4.3722 20.7501 3.8072 20.7072 3.4236C20.6608 3.00876 20.5545 2.57555 20.2592 2.18735C20.1329 2.02124 19.9855 1.87256 19.8208 1.7451C19.436 1.44722 19.0065 1.33994 18.5953 1.29317C18.215 1.24993 17.7514 1.24996 17.2357 1.25Z',
  d13: 'M12 12C6.47715 12 2 16.4772 2 22H22C22 16.4772 17.5228 12 12 12Z',
  d14: 'M12 12V7.5M12 7.5V2H20V7.5H12Z',
  d15: 'M1.25 22C1.25 16.0629 6.06294 11.25 12 11.25C17.9371 11.25 22.75 16.0629 22.75 22V22.75H12.75V22C12.75 19.9289 11.0711 18.25 9 18.25C6.92893 18.25 5.25 19.9289 5.25 22V22.75H1.25V22ZM6.75 22.75H11.25V22C11.25 20.7574 10.2426 19.75 9 19.75C7.75736 19.75 6.75 20.7574 6.75 22V22.75ZM14 16H16.009V18H14V16Z',
  d16: 'M13.15 8.4375V11.7917C13.15 12.3209 12.7247 12.75 12.2 12.75C11.6753 12.75 11.25 12.3209 11.25 11.7917V1.25H20.75V8.4375H13.15Z',
} as const;

export const IconMoonLandingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-stroke-rounded IconMoonLandingStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonLandingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-duotone-rounded IconMoonLandingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonLandingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-twotone-rounded IconMoonLandingTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonLandingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-solid-rounded IconMoonLandingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonLandingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-bulk-rounded IconMoonLandingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonLandingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-stroke-sharp IconMoonLandingStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonLandingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-landing-solid-sharp IconMoonLandingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoonLanding: TheIconSelfPack = {
  name: 'MoonLanding',
  StrokeRounded: IconMoonLandingStrokeRounded,
  DuotoneRounded: IconMoonLandingDuotoneRounded,
  TwotoneRounded: IconMoonLandingTwotoneRounded,
  SolidRounded: IconMoonLandingSolidRounded,
  BulkRounded: IconMoonLandingBulkRounded,
  StrokeSharp: IconMoonLandingStrokeSharp,
  SolidSharp: IconMoonLandingSolidSharp,
};
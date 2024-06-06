import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.3865 8.11621L18.3955 8.11621',
  d2: 'M15.1024 16.7446C17.8895 13.7178 19.8287 11.3284 21.04 9.70091C21.703 8.81007 22.0345 8.36466 21.9972 7.75756C21.9193 6.48963 18.7253 3 17.3204 3C16.6774 3 16.16 3.53734 15.1252 4.61201L2.54984 17.6718C1.81672 18.4331 1.81672 19.6675 2.54984 20.4289C3.381 21.2921 4.76287 21.1587 5.42662 20.1512L7.71648 16.6756C8.63465 15.282 9.29389 15.2741 10.3945 16.4171C11.0597 17.108 11.9005 18.395 12.9477 18.3828C13.6008 18.3753 14.1013 17.8317 15.1024 16.7446Z',
  d3: 'M18.3865 8.11719L18.3955 8.11719',
  d4: 'M21.9972 7.75756C21.9193 6.48963 18.7253 3 17.3204 3C16.6774 3 16.16 3.53734 15.1252 4.61201L2.54984 17.6718C1.81672 18.4331 1.81672 19.6675 2.54984 20.4289C3.381 21.2921 4.76287 21.1587 5.42662 20.1512L7.71648 16.6756C8.18031 15.9716 8.57805 15.6212 9 15.5942',
  d5: 'M17.3204 2.25012C16.7601 2.25012 16.3081 2.49512 15.904 2.81529C15.525 3.11559 15.1074 3.5493 14.6199 4.05561L2.00959 17.1517C0.996804 18.2035 0.996803 19.8974 2.00959 20.9492C3.17892 22.1636 5.12842 21.9672 6.05291 20.564L8.34277 17.0883C8.80125 16.3925 9.01913 16.3451 9.04674 16.3429C9.08217 16.34 9.29927 16.3611 9.85424 16.9375C9.97403 17.0619 10.2113 17.3364 10.3602 17.5089C10.5508 17.7287 10.7701 17.9763 11.0089 18.2052C11.4623 18.6397 12.1219 19.1426 12.9564 19.1329C13.5209 19.1264 13.9705 18.877 14.3707 18.5481C14.7433 18.242 15.1485 17.8018 15.6192 17.2907L15.6192 17.2906C18.4214 14.2475 20.4405 11.7627 21.6695 10.1114L21.6695 10.1114C21.9771 9.69809 22.254 9.32622 22.4412 8.97905C22.6507 8.59077 22.775 8.18853 22.7458 7.7117C22.7281 7.42344 22.6295 7.13509 22.5154 6.88148C22.397 6.61819 22.2386 6.34229 22.0578 6.06736C21.6961 5.51726 21.2158 4.92711 20.699 4.38563C20.183 3.84496 19.6118 3.33294 19.0615 2.94973C18.55 2.59348 17.9206 2.25012 17.3204 2.25012ZM17.9955 7.00012C17.4457 7.00012 17 7.44784 17 8.00012C17 8.55241 17.4457 9.00012 17.9955 9.00012H18.0045C18.5543 9.00012 19 8.55241 19 8.00012C19 7.44784 18.5543 7.00012 18.0045 7.00012H17.9955Z',
  d6: 'M15.904 2.81529C16.3081 2.49512 16.7601 2.25012 17.3204 2.25012C17.9206 2.25012 18.55 2.59348 19.0615 2.94973C19.6118 3.33294 20.183 3.84496 20.699 4.38563C21.2158 4.92711 21.6961 5.51726 22.0578 6.06736C22.2386 6.34229 22.397 6.61819 22.5154 6.88148C22.6295 7.13509 22.7281 7.42344 22.7458 7.7117C22.775 8.18853 22.6507 8.59077 22.4412 8.97905C22.254 9.32622 21.9771 9.69809 21.6695 10.1114L21.6695 10.1114C20.4405 11.7627 18.4214 14.2475 15.6192 17.2906L15.6192 17.2907C15.1485 17.8018 14.7433 18.242 14.3707 18.5481C13.9705 18.877 13.5209 19.1264 12.9564 19.1329C12.1219 19.1426 11.4623 18.6397 11.0089 18.2052C10.7701 17.9763 10.5508 17.7287 10.3602 17.5089C10.2113 17.3364 9.97403 17.0619 9.85424 16.9375C9.29927 16.3611 9.08217 16.34 9.04674 16.3429C9.01913 16.3451 8.80125 16.3925 8.34277 17.0883L6.05291 20.564C5.12842 21.9672 3.17892 22.1636 2.00959 20.9492C0.996803 19.8974 0.996804 18.2035 2.00959 17.1517L14.6199 4.05561L14.6199 4.0556C15.1074 3.5493 15.525 3.11559 15.904 2.81529Z',
  d7: 'M17 8.00012C17 7.44784 17.4457 7.00012 17.9955 7.00012H18.0045C18.5543 7.00012 19 7.44784 19 8.00012C19 8.55241 18.5543 9.00012 18.0045 9.00012H17.9955C17.4457 9.00012 17 8.55241 17 8.00012Z',
  d8: 'M18.0596 8.02637H18.0686',
  d9: 'M8.60335 11.6014L2.50686 17.7829C1.79586 18.5038 1.77077 19.6573 2.44572 20.4121C3.21669 21.2743 4.57278 21.2657 5.32749 20.3892L8.26295 16.9801L9.53581 15.5626L12.2584 17.956C12.2788 17.9739 12.2975 17.9938 12.3158 18.0139C12.5352 18.2564 12.8043 18.2558 12.9599 18.0047L12.9607 18.0035C12.986 17.9627 13.0114 17.9217 13.0433 17.886L21.7297 8.169C21.752 8.14405 21.7773 8.12188 21.8025 8.09982L21.805 8.09765C22.0245 7.90534 22.0008 7.63173 21.7697 7.45457C21.7473 7.43741 21.7249 7.42011 21.7044 7.40072L17.4806 3.40125C17.4465 3.36902 17.4177 3.33151 17.3914 3.29271C17.1787 2.97925 16.9217 2.98094 16.7718 3.26426C16.7384 3.3274 16.7021 3.38976 16.6519 3.44062L8.60335 11.6014Z',
  d10: 'M5.95819 20.6271L9.45934 16.6369L12.5281 19.3136L22.75 7.93004L16.7727 2.25012L2.00522 17.2156L1.99943 17.2216C1.00019 18.2574 1.00019 19.9255 1.99943 20.9613C3.14042 22.144 5.03428 21.9678 5.95819 20.6271ZM17.9877 7.00012C17.4379 7.00012 16.9922 7.44784 16.9922 8.00012C16.9922 8.55241 17.4379 9.00012 17.9877 9.00012H17.9967C18.5465 9.00012 18.9922 8.55241 18.9922 8.00012C18.9922 7.44784 18.5465 7.00012 17.9967 7.00012H17.9877Z',
} as const;

export const IconKnife01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-stroke-rounded IconKnife01StrokeRounded"
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

export const IconKnife01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-duotone-rounded IconKnife01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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

export const IconKnife01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-twotone-rounded IconKnife01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-solid-rounded IconKnife01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-bulk-rounded IconKnife01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconKnife01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-stroke-sharp IconKnife01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-01-solid-sharp IconKnife01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKnife01: TheIconSelfPack = {
  name: 'Knife01',
  StrokeRounded: IconKnife01StrokeRounded,
  DuotoneRounded: IconKnife01DuotoneRounded,
  TwotoneRounded: IconKnife01TwotoneRounded,
  SolidRounded: IconKnife01SolidRounded,
  BulkRounded: IconKnife01BulkRounded,
  StrokeSharp: IconKnife01StrokeSharp,
  SolidSharp: IconKnife01SolidSharp,
};
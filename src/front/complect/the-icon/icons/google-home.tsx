import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 11.2703C22 16.6439 17.5228 21 12 21C6.47715 21 2 16.6439 2 11.2703C2 8.76656 2.97195 6.48373 4.56875 4.75948C5.01425 4.27842 5.237 4.03789 5.88434 3.71276C6.53168 3.38764 6.98784 3.33859 7.90016 3.24048C9.0225 3.11979 10.5114 3 12 3C13.4886 3 14.9775 3.11979 16.0998 3.24048C17.0122 3.33859 17.4683 3.38764 18.1157 3.71276C18.763 4.03789 18.9857 4.27842 19.4313 4.75948C21.0281 6.48373 22 8.76656 22 11.2703Z',
  d2: 'M18 4C18 5.10457 15.3137 6 12 6C8.68629 6 6 5.10457 6 4',
  d3: 'M12 21C17.5228 21 22 16.6439 22 11.2703C22 8.76656 21.0281 6.48373 19.4313 4.75948C18.9857 4.27842 18.763 4.03789 18.1157 3.71276C17.4683 3.38764 17.0122 3.33859 16.0998 3.24048C15.4867 3.17454 14.7642 3.10888 13.9921 3.06287C15.3448 3.1722 16.7164 3.43351 18 3.91915C18 5.06837 15.3137 6 12 6C8.68629 6 6 5.06837 6 3.91915C7.25409 3.51768 9.60258 3.02326 12.2116 3.00079C12.1411 3.00027 12.0706 3 12 3C10.5114 3 9.0225 3.11979 7.90016 3.24048C6.98784 3.33859 6.53168 3.38764 5.88434 3.71276C5.237 4.03789 5.01425 4.27842 4.56875 4.75948C2.97195 6.48373 2 8.76656 2 11.2703C2 16.6439 6.47715 21 12 21Z',
  d4: 'M7.81997 2.49478C8.95709 2.3725 10.4748 2.25 12 2.25C13.5252 2.25 15.0429 2.3725 16.18 2.49478L16.2289 2.50003C17.1065 2.59431 17.6831 2.65625 18.4523 3.04255C19.2204 3.42834 19.5162 3.74739 19.9815 4.24987C21.6999 6.10538 22.75 8.56777 22.75 11.2703C22.75 17.0773 17.9176 21.75 12 21.75C6.08244 21.75 1.25 17.0773 1.25 11.2703C1.25 8.56777 2.30011 6.10538 4.01847 4.24987C4.48381 3.74739 4.77959 3.42834 5.54773 3.04255C6.31688 2.65625 6.89346 2.59431 7.77109 2.50003L7.81997 2.49478ZM11.9805 3.75C10.5098 3.75 9.03113 3.9061 7.90939 4.06491C7.73956 4.08895 7.58964 4.11043 7.45486 4.13156C7.17437 4.17554 7.03412 4.19753 7.00457 4.3309C6.97502 4.46427 7.08977 4.53984 7.31928 4.69099C8.63751 5.55911 10.6009 5.75 11.9805 5.75C13.3677 5.75 15.5442 5.55702 16.7359 4.67674C16.9291 4.53397 17.0258 4.46258 16.9941 4.33422C16.9624 4.20586 16.8365 4.18529 16.5849 4.14415C16.4303 4.11887 16.2553 4.09373 16.0517 4.06491C14.93 3.9061 13.4513 3.75 11.9805 3.75Z',
  d5: 'M12 2.25C10.4748 2.25 8.95709 2.3725 7.81997 2.49478L7.77109 2.50003C6.89346 2.59431 6.31688 2.65625 5.54773 3.04255C4.77959 3.42834 4.48381 3.74739 4.01847 4.24987C2.30011 6.10538 1.25 8.56777 1.25 11.2703C1.25 17.0773 6.08244 21.75 12 21.75C17.9176 21.75 22.75 17.0773 22.75 11.2703C22.75 8.56777 21.6999 6.10538 19.9815 4.24987C19.5162 3.74739 19.2204 3.42834 18.4523 3.04255C17.6831 2.65625 17.1065 2.59431 16.2289 2.50003L16.18 2.49478C15.0429 2.3725 13.5252 2.25 12 2.25Z',
  d6: 'M7.90939 4.06491C9.03113 3.9061 10.5098 3.75 11.9805 3.75C13.4513 3.75 14.93 3.9061 16.0517 4.06491C16.2553 4.09373 16.4303 4.11887 16.5849 4.14415C16.8365 4.18529 16.9624 4.20586 16.9941 4.33422C17.0258 4.46258 16.9291 4.53397 16.7359 4.67674C15.5442 5.55702 13.3677 5.75 11.9805 5.75C10.6009 5.75 8.63751 5.55911 7.31928 4.69099C7.08977 4.53984 6.97502 4.46427 7.00457 4.3309C7.03412 4.19753 7.17437 4.17554 7.45486 4.13156C7.58964 4.11043 7.73956 4.08895 7.90939 4.06491Z',
  d7: 'M17.9876 3.01807C17.9876 4.67437 15.2999 6.01707 11.9845 6.01707C8.66912 6.01707 5.98145 4.67437 5.98145 3.01807',
  d8: 'M11.9911 21.0024C17.4505 21.0024 21.8627 16.6807 22.0005 11.211C22.0005 7.96741 21.0895 5.67962 17.9654 2.99756L5.97854 3.06126C3.46062 4.84609 1.99902 7.82358 1.99902 11.1365C1.9991 16.6062 6.5317 21.0024 11.9911 21.0024Z',
  d9: 'M18.4516 2.44549L18.1908 2.25H5.8092L5.54839 2.44549C2.94013 4.40057 1.25 7.51601 1.25 11.025C1.25 16.9483 6.06294 21.75 12 21.75C17.9371 21.75 22.75 16.9483 22.75 11.025C22.75 7.51601 21.0599 4.40057 18.4516 2.44549ZM12.0006 6.00008C9.54035 6.00008 7.42592 5.25967 6.5 4.2002H17.5013C16.5754 5.25967 14.4609 6.00008 12.0006 6.00008Z',
} as const;

export const IconGoogleHomeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-stroke-rounded IconGoogleHomeStrokeRounded"
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

export const IconGoogleHomeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-duotone-rounded IconGoogleHomeDuotoneRounded"
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

export const IconGoogleHomeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-twotone-rounded IconGoogleHomeTwotoneRounded"
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

export const IconGoogleHomeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-solid-rounded IconGoogleHomeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleHomeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-bulk-rounded IconGoogleHomeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleHomeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-stroke-sharp IconGoogleHomeStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleHomeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-home-solid-sharp IconGoogleHomeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGoogleHome: TheIconSelfPack = {
  name: 'GoogleHome',
  StrokeRounded: IconGoogleHomeStrokeRounded,
  DuotoneRounded: IconGoogleHomeDuotoneRounded,
  TwotoneRounded: IconGoogleHomeTwotoneRounded,
  SolidRounded: IconGoogleHomeSolidRounded,
  BulkRounded: IconGoogleHomeBulkRounded,
  StrokeSharp: IconGoogleHomeStrokeSharp,
  SolidSharp: IconGoogleHomeSolidSharp,
};
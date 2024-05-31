import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 3C7.78555 3.91217 7 5.36445 7 7.0002C7 9.76151 9.23858 12 12 12C14.7614 12 17 9.76151 17 7.0002C17 5.36445 16.2144 3.91217 15 3',
  d2: 'M21 13C20.0878 11.7856 18.6355 11 16.9998 11C14.2385 11 12 13.2386 12 16C12 18.7614 14.2385 21 16.9998 21C18.6355 21 20.0878 20.2144 21 19',
  d3: 'M3 13C3.91221 11.7857 5.36426 11 7 11C9.76142 11 12 13.2386 12 16C12 18.7614 9.76142 21 7 21C5.3644 21 3.91223 20.2147 3 19.0005',
  d4: 'M2 16C2 18.7614 4.25296 21 7.03214 21C8.67847 21 10.1401 20.2144 11.0582 19C12.6793 16.8556 11.8876 14.0971 11.0582 13C10.1401 11.7856 8.67847 11 7.03214 11C4.25296 11 2 13.2386 2 16Z',
  d5: 'M12 16C12 18.7614 14.253 21 17.0321 21C18.6785 21 20.1401 20.2144 21.0582 19C22.6793 16.8556 21.8876 14.0971 21.0582 13C20.1401 11.7856 18.6785 11 17.0321 11C14.253 11 12 13.2386 12 16Z',
  d6: 'M9.79964 2.3995C10.1313 2.84109 10.0422 3.46796 9.60062 3.79964C8.62681 4.53107 8.00006 5.69234 8.00006 7.00026C8.00006 9.20925 9.79088 11.0001 12.0001 11.0001C14.2092 11.0001 16.0001 9.20925 16.0001 7.00026C16.0001 5.69234 15.3733 4.53107 14.3995 3.79964C13.9579 3.46796 13.8688 2.84109 14.2005 2.3995C14.5322 1.9579 15.159 1.8688 15.6006 2.20048C17.0557 3.29339 18.0001 5.03668 18.0001 7.00026C18.0001 8.09434 17.7072 9.12002 17.1956 10.0032C19.079 10.0636 20.7432 10.993 21.7996 12.3995C22.1313 12.8411 22.0422 13.468 21.6006 13.7996C21.159 14.1313 20.5322 14.0422 20.2005 13.6006C19.4691 12.6268 18.3078 12.0001 16.9999 12.0001C14.7909 12.0001 13.0001 13.7909 13.0001 16.0001C13.0001 18.2092 14.7909 20.0001 16.9999 20.0001C18.3078 20.0001 19.4691 19.3733 20.2005 18.3995C20.5322 17.9579 21.159 17.8688 21.6006 18.2005C22.0422 18.5322 22.1313 19.159 21.7996 19.6006C20.7067 21.0557 18.9634 22.0001 16.9999 22.0001C14.9129 22.0001 13.0749 20.9346 12 19.3179C10.9251 20.9346 9.08702 22.0001 7.00006 22.0001C5.03669 22.0001 3.29355 21.056 2.20056 19.6012C1.86882 19.1597 1.95784 18.5328 2.39938 18.2011C2.84093 17.8693 3.46781 17.9583 3.79955 18.3999C4.53103 19.3735 5.69222 20.0001 7.00006 20.0001C9.2092 20.0001 11.0001 18.2092 11.0001 16.0001C11.0001 13.7909 9.2092 12.0001 7.00006 12.0001C5.69224 12.0001 4.53114 12.6268 3.7996 13.6007C3.46789 14.0422 2.84102 14.1313 2.39945 13.7996C1.95787 13.4679 1.86881 12.841 2.20052 12.3994C3.25698 10.9931 4.92096 10.0636 6.8045 10.0032C6.29291 9.12002 6.00006 8.09434 6.00006 7.00026C6.00006 5.03668 6.94442 3.29339 8.3995 2.20048C8.84109 1.8688 9.46796 1.9579 9.79964 2.3995Z',
  d7: 'M9.79958 2.3995C10.1313 2.84109 10.0422 3.46796 9.60056 3.79964C8.62675 4.53107 8 5.69234 8 7.00026C8 9.20925 9.79082 11.0001 12 11.0001C14.2092 11.0001 16 9.20925 16 7.00026C16 5.69234 15.3733 4.53107 14.3994 3.79964C13.9578 3.46796 13.8687 2.84109 14.2004 2.3995C14.5321 1.9579 15.159 1.8688 15.6006 2.20048C17.0556 3.29339 18 5.03668 18 7.00026C18 10.3139 15.3137 13.0001 12 13.0001C8.68633 13.0001 6 10.3139 6 7.00026C6 5.03668 6.94436 3.29339 8.39944 2.20048C8.84103 1.8688 9.4679 1.9579 9.79958 2.3995Z',
  d8: 'M16.9998 12C14.7908 12 13 13.7908 13 16C13 18.2092 14.7908 20 16.9998 20C18.3077 20 19.469 19.3733 20.2004 18.3994C20.5321 17.9578 21.159 17.8687 21.6006 18.2004C22.0422 18.5321 22.1313 19.159 21.7996 19.6006C20.7067 21.0556 18.9634 22 16.9998 22C13.6862 22 11 19.3137 11 16C11 12.6863 13.6862 10 16.9998 10C18.9634 10 20.7067 10.9444 21.7996 12.3994C22.1313 12.841 22.0422 13.4679 21.6006 13.7996C21.159 14.1313 20.5321 14.0422 20.2004 13.6006C19.469 12.6267 18.3077 12 16.9998 12Z',
  d9: 'M7.00006 12C5.69224 12 4.53114 12.6268 3.7996 13.6006C3.46789 14.0422 2.84102 14.1312 2.39945 13.7995C1.95787 13.4678 1.86881 12.841 2.20052 12.3994C3.2934 10.9445 5.0364 10 7.00006 10C10.3138 10 13.0001 12.6863 13.0001 16C13.0001 19.3137 10.3138 22 7.00006 22C5.03669 22 3.29355 21.0559 2.20056 19.6012C1.86882 19.1596 1.95784 18.5327 2.39938 18.201C2.84093 17.8693 3.46781 17.9583 3.79955 18.3998C4.53103 19.3734 5.69222 20 7.00006 20C9.2092 20 11.0001 18.2091 11.0001 16C11.0001 13.7909 9.2092 12 7.00006 12Z',
  d10: 'M15.9798 6.97716C15.9798 5.68902 15.3562 4.54532 14.3873 3.82496L15.5823 2.25C17.0301 3.32637 17.9696 5.04329 17.9696 6.97716C17.9696 8.05469 17.6783 9.06485 17.1693 9.93466C19.0431 9.99418 20.6989 10.9094 21.75 12.2947L20.1589 13.4777C19.4312 12.5186 18.2758 11.9013 16.9745 11.9013C14.7767 11.9013 12.9949 13.665 12.9949 15.8408C12.9949 18.0165 14.7767 19.7803 16.9745 19.7803C18.2758 19.7803 19.4312 19.163 20.1589 18.2039L21.75 19.3869C20.6626 20.8199 18.9281 21.75 16.9745 21.75C14.8981 21.75 13.0694 20.7006 12 19.1084C10.9305 20.7006 9.10167 21.75 7.02527 21.75C5.07183 21.75 3.3375 20.8202 2.25005 19.3875L3.84095 18.2043C4.56872 19.1631 5.72405 19.7803 7.02527 19.7803C9.22324 19.7803 11.005 18.0165 11.005 15.8408C11.005 13.6651 9.22324 11.9013 7.02527 11.9013C5.72406 11.9013 4.56884 12.5186 3.84099 13.4777L2.25 12.2947C3.30112 10.9096 4.95668 9.99412 6.8307 9.93465C6.3217 9.06484 6.03032 8.05469 6.03032 6.97716C6.03032 5.04329 6.96991 3.32637 8.41763 2.25L9.61268 3.82496C8.64379 4.54532 8.02021 5.68902 8.02021 6.97716C8.02021 9.15272 9.80198 10.9164 12 10.9164C14.198 10.9164 15.9798 9.15272 15.9798 6.97716Z',
} as const;

export const IconRadioactiveAlertStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-stroke-rounded IconRadioactiveAlertStrokeRounded"
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

export const IconRadioactiveAlertDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-duotone-rounded IconRadioactiveAlertDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconRadioactiveAlertTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-twotone-rounded IconRadioactiveAlertTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRadioactiveAlertSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-solid-rounded IconRadioactiveAlertSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioactiveAlertBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-bulk-rounded IconRadioactiveAlertBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRadioactiveAlertStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-stroke-sharp IconRadioactiveAlertStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioactiveAlertSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radioactive-alert-solid-sharp IconRadioactiveAlertSolidSharp"
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

export const iconPackOfRadioactiveAlert: TheIconSelfPack = {
  name: 'RadioactiveAlert',
  StrokeRounded: IconRadioactiveAlertStrokeRounded,
  DuotoneRounded: IconRadioactiveAlertDuotoneRounded,
  TwotoneRounded: IconRadioactiveAlertTwotoneRounded,
  SolidRounded: IconRadioactiveAlertSolidRounded,
  BulkRounded: IconRadioactiveAlertBulkRounded,
  StrokeSharp: IconRadioactiveAlertStrokeSharp,
  SolidSharp: IconRadioactiveAlertSolidSharp,
};
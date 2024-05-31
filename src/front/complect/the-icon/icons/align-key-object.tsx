import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 5.98946V11.9769M18 3.99365H6M10 19.9601H6M4 17.9643V5.98946',
  d2: 'M22 3.99386C22 5.09611 21.1046 5.98967 20 5.98967C18.8954 5.98967 18 5.09611 18 3.99386C18 2.8916 18.8954 1.99805 20 1.99805C21.1046 1.99805 22 2.8916 22 3.99386Z',
  d3: 'M6 3.99386C6 5.09611 5.10457 5.98967 4 5.98967C2.89543 5.98967 2 5.09611 2 3.99386C2 2.8916 2.89543 1.99805 4 1.99805C5.10457 1.99805 6 2.8916 6 3.99386Z',
  d4: 'M6 19.9602C6 21.0625 5.10457 21.956 4 21.956C2.89543 21.956 2 21.0625 2 19.9602C2 18.8579 2.89543 17.9644 4 17.9644C5.10457 17.9644 6 18.8579 6 19.9602Z',
  d5: 'M15.5368 19.4119L17.9989 16.7963M17.9989 16.7963L19.4847 15.2075C19.667 15.0626 20.0608 14.8178 20.5925 15.3049C21.0731 15.7452 21.7038 16.4303 21.9873 16.7504M17.9989 16.7963L19.503 18.4327M15.9971 20.4863C15.9971 21.3231 15.3234 22.0014 14.4922 22.0014C13.6611 22.0014 12.9873 21.3231 12.9873 20.4863C12.9873 19.6495 13.6611 18.9712 14.4922 18.9712C15.3234 18.9712 15.9971 19.6495 15.9971 20.4863Z',
  d6: 'M4.19043 6C5.295 6 6.19043 5.10457 6.19043 4H18.1904C18.1904 5.10457 19.0858 6 20.1904 6V18C20.1904 19.1046 19.295 20 18.1904 20H16.105C15.8991 19.4174 15.3435 19 14.6904 19C14.0373 19 13.4817 19.4174 13.2758 20H6.19043C6.19043 18.8954 5.295 18 4.19043 18V6Z',
  d7: 'M20.1904 6V12M18.1904 4H6.19043M10.1904 20H6.19043M4.19043 18V6',
  d8: 'M22.1904 4C22.1904 5.10457 21.295 6 20.1904 6C19.0858 6 18.1904 5.10457 18.1904 4C18.1904 2.89543 19.0858 2 20.1904 2C21.295 2 22.1904 2.89543 22.1904 4Z',
  d9: 'M6.19043 4C6.19043 5.10457 5.295 6 4.19043 6C3.08586 6 2.19043 5.10457 2.19043 4C2.19043 2.89543 3.08586 2 4.19043 2C5.295 2 6.19043 2.89543 6.19043 4Z',
  d10: 'M6.19043 20C6.19043 21.1046 5.295 22 4.19043 22C3.08586 22 2.19043 21.1046 2.19043 20C2.19043 18.8954 3.08586 18 4.19043 18C5.295 18 6.19043 18.8954 6.19043 20Z',
  d11: 'M15.7399 19.4036L18.202 16.788M18.202 16.788L19.6878 15.1992C19.8701 15.0543 20.2639 14.8095 20.7956 15.2966C21.2762 15.7369 21.9069 16.422 22.1904 16.7421M18.202 16.788L19.7061 18.4244M16.2002 20.478C16.2002 21.3148 15.5265 21.9931 14.6953 21.9931C13.8642 21.9931 13.1904 21.3148 13.1904 20.478C13.1904 19.6412 13.8642 18.9629 14.6953 18.9629C15.5265 18.9629 16.2002 19.6412 16.2002 20.478Z',
  d12: 'M20 6V12M18 4H6M10 20H6M4 18V6',
  d13: 'M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z',
  d14: 'M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z',
  d15: 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z',
  d16: 'M15.5495 19.4105L18.0116 16.7948M18.0116 16.7948L19.4974 15.206C19.6797 15.0612 20.0735 14.8163 20.6052 15.3034C21.0858 15.7437 21.7165 16.4288 22 16.749M18.0116 16.7948L19.5157 18.4312M16.0098 20.4849C16.0098 21.3217 15.3361 22 14.5049 22C13.6738 22 13 21.3217 13 20.4849C13 19.6481 13.6738 18.9698 14.5049 18.9698C15.3361 18.9698 16.0098 19.6481 16.0098 20.4849Z',
  d17: 'M15.875 20.5C15.875 21.3284 15.2034 22 14.375 22C13.5466 22 12.875 21.3284 12.875 20.5C12.875 19.6716 13.5466 19 14.375 19C15.2034 19 15.875 19.6716 15.875 20.5Z',
  d18: 'M4.875 4C4.875 3.44772 5.32272 3 5.875 3H17.875C18.4273 3 18.875 3.44772 18.875 4C18.875 4.55228 18.4273 5 17.875 5H5.875C5.32272 5 4.875 4.55228 4.875 4ZM3.875 5C4.42728 5 4.875 5.44772 4.875 6V18C4.875 18.5523 4.42728 19 3.875 19C3.32272 19 2.875 18.5523 2.875 18V6C2.875 5.44772 3.32272 5 3.875 5ZM19.875 5C20.4273 5 20.875 5.44772 20.875 6V12C20.875 12.5523 20.4273 13 19.875 13C19.3227 13 18.875 12.5523 18.875 12V6C18.875 5.44772 19.3227 5 19.875 5ZM4.875 20C4.875 19.4477 5.32272 19 5.875 19H9.875C10.4273 19 10.875 19.4477 10.875 20C10.875 20.5523 10.4273 21 9.875 21H5.875C5.32272 21 4.875 20.5523 4.875 20Z',
  d19: 'M17.125 4C17.125 2.48122 18.3562 1.25 19.875 1.25C21.3938 1.25 22.625 2.48122 22.625 4C22.625 5.51878 21.3938 6.75 19.875 6.75C18.3562 6.75 17.125 5.51878 17.125 4Z',
  d20: 'M1.125 4C1.125 2.48122 2.35622 1.25 3.875 1.25C5.39378 1.25 6.625 2.48122 6.625 4C6.625 5.51878 5.39378 6.75 3.875 6.75C2.35622 6.75 1.125 5.51878 1.125 4Z',
  d21: 'M1.125 20C1.125 18.4812 2.35622 17.25 3.875 17.25C5.39378 17.25 6.625 18.4812 6.625 20C6.625 21.5188 5.39378 22.75 3.875 22.75C2.35622 22.75 1.125 21.5188 1.125 20Z',
  d22: 'M16.499 19.7557L17.868 18.2588L18.6308 19.1097C18.9995 19.521 19.6317 19.5555 20.0429 19.1869C20.4541 18.8182 20.4887 18.186 20.12 17.7747L19.2184 16.769C19.5371 16.4136 19.7277 16.204 19.8754 16.0716C20.025 16.2058 20.2188 16.4191 20.545 16.783L21.1308 17.4365C21.4995 17.8477 22.1317 17.8822 22.5429 17.5136C22.9541 17.1449 22.9887 16.5127 22.62 16.1015L21.9963 15.4057C21.696 15.0706 21.4068 14.7479 21.136 14.5174C20.8363 14.2623 20.4244 14 19.8754 14C19.3265 14 18.9145 14.2623 18.6148 14.5174C18.344 14.7479 18.0548 15.0706 17.7545 15.4057L17.1341 16.0978L15.0667 18.3583C14.8488 18.288 14.6163 18.25 14.375 18.25C13.1324 18.25 12.125 19.2574 12.125 20.5C12.125 21.7426 13.1324 22.75 14.375 22.75C15.6176 22.75 16.625 21.7426 16.625 20.5C16.625 20.2392 16.5806 19.9887 16.499 19.7557Z',
  d23: 'M19.9874 6V12M17.9888 4H5.99756M9.99465 20H5.99756M3.99902 18V6',
  d24: 'M21.9854 4C21.9854 5.10457 21.0906 6 19.9868 6C18.883 6 17.9883 5.10457 17.9883 4C17.9883 2.89543 18.883 2 19.9868 2C21.0906 2 21.9854 2.89543 21.9854 4Z',
  d25: 'M5.99708 4C5.99708 5.10457 5.10231 6 3.99854 6C2.89478 6 2 5.10457 2 4C2 2.89543 2.89478 2 3.99854 2C5.10231 2 5.99708 2.89543 5.99708 4Z',
  d26: 'M5.99708 20C5.99708 21.1046 5.10231 22 3.99854 22C2.89478 22 2 21.1046 2 20C2 18.8954 2.89478 18 3.99854 18C5.10231 18 5.99708 18.8954 5.99708 20Z',
  d27: 'M15.5498 19.4433C15.2762 19.1549 14.9207 18.9939 14.4908 18.9939C13.6621 18.9939 12.9902 19.6628 12.9902 20.488C12.9902 21.3132 13.6621 21.9822 14.4908 21.9822C15.3196 21.9822 15.9915 21.3132 15.9915 20.488C15.9915 20.0908 15.8037 19.7109 15.5498 19.4433ZM15.5498 19.4433L17.9961 16.9914M22.0002 16.9914L19.9941 15.0029C19.9902 14.999 19.9839 14.999 19.98 15.0029L17.9961 16.9914M17.9961 16.9914L19.4864 18.4346',
  d28: 'M6 3H18V5H6V3ZM3 18V6H5V18H3ZM21 6V12H19V6H21ZM10 21H6V19H10V21Z',
  d29: 'M17.25 4C17.25 2.48122 18.4812 1.25 20 1.25C21.5188 1.25 22.75 2.48122 22.75 4C22.75 5.51878 21.5188 6.75 20 6.75C18.4812 6.75 17.25 5.51878 17.25 4Z',
  d30: 'M1.25 4C1.25 2.48122 2.48122 1.25 4 1.25C5.51878 1.25 6.75 2.48122 6.75 4C6.75 5.51878 5.51878 6.75 4 6.75C2.48122 6.75 1.25 5.51878 1.25 4Z',
  d31: 'M1.25 20C1.25 18.4812 2.48122 17.25 4 17.25C5.51878 17.25 6.75 18.4812 6.75 20C6.75 21.5188 5.51878 22.75 4 22.75C2.48122 22.75 1.25 21.5188 1.25 20Z',
  d32: 'M20.7493 14.2929C20.3589 13.9025 19.7259 13.9024 19.3354 14.2927L15.259 18.3663C15.0341 18.2909 14.7933 18.25 14.543 18.25C13.3003 18.25 12.293 19.2574 12.293 20.5C12.293 21.7426 13.3003 22.75 14.543 22.75C15.7856 22.75 16.793 21.7426 16.793 20.5C16.793 20.2478 16.7515 20.0052 16.6749 19.7788L18.0547 18.3999L18.8495 19.1634L20.235 17.7211L19.4697 16.9859L20.042 16.414L21.3351 17.7071L22.7493 16.2929L20.7493 14.2929Z',
} as const;

export const IconAlignKeyObjectStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-stroke-rounded IconAlignKeyObjectStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignKeyObjectDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-duotone-rounded IconAlignKeyObjectDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignKeyObjectTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-twotone-rounded IconAlignKeyObjectTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignKeyObjectSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-solid-rounded IconAlignKeyObjectSolidRounded"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignKeyObjectBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-bulk-rounded IconAlignKeyObjectBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignKeyObjectStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-stroke-sharp IconAlignKeyObjectStrokeSharp"
    >
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignKeyObjectSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="align-key-object-solid-sharp IconAlignKeyObjectSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlignKeyObject: TheIconSelfPack = {
  name: 'AlignKeyObject',
  StrokeRounded: IconAlignKeyObjectStrokeRounded,
  DuotoneRounded: IconAlignKeyObjectDuotoneRounded,
  TwotoneRounded: IconAlignKeyObjectTwotoneRounded,
  SolidRounded: IconAlignKeyObjectSolidRounded,
  BulkRounded: IconAlignKeyObjectBulkRounded,
  StrokeSharp: IconAlignKeyObjectStrokeSharp,
  SolidSharp: IconAlignKeyObjectSolidSharp,
};
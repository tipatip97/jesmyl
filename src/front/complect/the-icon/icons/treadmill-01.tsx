import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.1913 21H2.93168C2.35308 21 2.03614 20.5214 2.00291 20.0153C1.97055 19.5222 2.20738 19.0031 2.7338 18.8747L17.9482 15.106C22.205 14.0681 23.3638 21 20.1913 21Z',
  d2: 'M19 18H19.009',
  d3: 'M22 2C21.6994 2.90192 21.5175 4.14866 20.8331 4.83307C20.4992 5.16693 20.0337 5.3221 19.1026 5.63246L15 7',
  d4: 'M15 16L20 5.5',
  d5: 'M6 21L5 22',
  d6: 'M18 21V22',
  d7: 'M20.1913 20.9999H2.93168C2.35308 20.9999 2.03614 20.5213 2.00291 20.0151C1.97055 19.5221 2.20738 19.003 2.7338 18.8746L17.9482 15.1059C22.205 14.068 23.3638 20.9999 20.1913 20.9999Z',
  d8: 'M22.1916 1.05147C22.7155 1.22611 22.9987 1.79243 22.824 2.31638C22.7589 2.51164 22.6985 2.73118 22.6266 2.99244C22.5574 3.24361 22.4787 3.52935 22.3852 3.81215C22.2041 4.36017 21.9281 5.0277 21.4155 5.54033C20.91 6.04582 20.2244 6.27297 19.4533 6.52848C19.4006 6.54592 19.3476 6.56349 19.2942 6.58129L15.1916 7.94883C14.6676 8.12348 14.1013 7.84032 13.9266 7.31638C13.752 6.79243 14.0352 6.22611 14.5591 6.05147L18.6617 4.68392C19.688 4.34182 19.8736 4.25383 20.0013 4.12612C20.1731 3.95433 20.3303 3.65629 20.4863 3.18436C20.5614 2.95718 20.6274 2.71935 20.6983 2.4617L20.7052 2.43633C20.7715 2.19548 20.8443 1.93092 20.9266 1.68392C21.1013 1.15998 21.6676 0.876818 22.1916 1.05147Z',
  d9: 'M20.3052 4.59725C20.8039 4.8347 21.0156 5.43141 20.7782 5.93004L15.7782 16.43C15.5407 16.9287 14.944 17.1404 14.4454 16.903C13.9467 16.6655 13.735 16.0688 13.9724 15.5702L18.9724 5.07018C19.2099 4.57154 19.8066 4.3598 20.3052 4.59725Z',
  d10: 'M6.58217 20.2928C6.97269 20.6833 6.97269 21.3165 6.58217 21.707L5.58217 22.707C5.19164 23.0975 4.55848 23.0975 4.16795 22.707C3.77743 22.3165 3.77743 21.6833 4.16795 21.2928L5.16795 20.2928C5.55848 19.9022 6.19164 19.9022 6.58217 20.2928ZM16.8751 21.9999V20.9999C16.8751 20.4476 17.3228 19.9999 17.8751 19.9999C18.4273 19.9999 18.8751 20.4476 18.8751 20.9999V21.9999C18.8751 22.5522 18.4273 22.9999 17.8751 22.9999C17.3228 22.9999 16.8751 22.5522 16.8751 21.9999Z',
  d11: 'M20.0659 21.7498C21.2001 21.7498 21.9699 21.098 22.3421 20.2278C22.6949 19.4027 22.6991 18.3902 22.4554 17.4713C22.2099 16.5457 21.688 15.6191 20.8715 14.9935C20.032 14.3503 18.928 14.0643 17.6453 14.3771L17.6426 14.3778L2.4308 18.1458L2.42928 18.1462C1.42535 18.3918 1.08254 19.3533 1.1292 20.0641C1.15441 20.4482 1.28821 20.8566 1.56635 21.1833C1.85808 21.526 2.28741 21.7498 2.80635 21.7498H20.0659ZM18.8706 16.9999C18.3208 16.9999 17.8751 17.4476 17.8751 17.9999C17.8751 18.5522 18.3208 18.9999 18.8706 18.9999H18.8795C19.4293 18.9999 19.8751 18.5522 19.8751 17.9999C19.8751 17.4476 19.4293 16.9999 18.8795 16.9999H18.8706Z',
  d12: 'M22.3421 20.2278C21.9699 21.098 21.2001 21.7498 20.0659 21.7498H2.80635C2.28741 21.7498 1.85808 21.526 1.56635 21.1833C1.28821 20.8566 1.15441 20.4482 1.1292 20.0641C1.08254 19.3533 1.42535 18.3918 2.42928 18.1462L2.4308 18.1458L17.6426 14.3778L17.6453 14.3771C18.928 14.0643 20.032 14.3503 20.8715 14.9935C21.688 15.6191 22.2099 16.5457 22.4554 17.4713C22.6991 18.3902 22.6949 19.4027 22.3421 20.2278Z',
  d13: 'M22.824 2.31638C22.9987 1.79243 22.7155 1.22611 22.1916 1.05147C21.6676 0.876818 21.1013 1.15998 20.9266 1.68392C20.8443 1.93092 20.7715 2.19548 20.7052 2.43633L20.6983 2.4617C20.6274 2.71935 20.5614 2.95718 20.4863 3.18436C20.3303 3.65629 20.1731 3.95433 20.0013 4.12612C19.8736 4.25383 19.688 4.34182 18.6617 4.68392L14.5591 6.05147C14.0352 6.22611 13.752 6.79243 13.9266 7.31638C14.1013 7.84032 14.6676 8.12348 15.1916 7.94883L18.0564 6.99389L14.1254 15.249L16.6368 14.6269L20.7294 6.03251C20.9828 5.89984 21.2135 5.74231 21.4155 5.54033C21.9281 5.0277 22.2041 4.36017 22.3852 3.81215C22.4787 3.52935 22.5574 3.24361 22.6266 2.99244C22.6985 2.73118 22.7589 2.51164 22.824 2.31638ZM16.8751 21.7498H18.8751V21.9999C18.8751 22.5522 18.4273 22.9999 17.8751 22.9999C17.3228 22.9999 16.8751 22.5522 16.8751 21.9999V21.7498ZM3.90668 21.7498H6.53939L5.58217 22.707C5.19164 23.0975 4.55848 23.0975 4.16795 22.707C3.90853 22.4476 3.82144 22.0811 3.90668 21.7498Z',
  d14: 'M17.8751 17.9999C17.8751 17.4476 18.3208 16.9999 18.8706 16.9999H18.8795C19.4293 16.9999 19.8751 17.4476 19.8751 17.9999C19.8751 18.5522 19.4293 18.9999 18.8795 18.9999H18.8706C18.3208 18.9999 17.8751 18.5522 17.8751 17.9999Z',
  d15: 'M20.1913 19.9999H2.93168C2.35308 19.9999 2.03614 19.5213 2.00291 19.0151C1.97055 18.5221 2.20738 18.003 2.7338 17.8746L17.9482 14.1059C22.205 13.068 23.3638 19.9999 20.1913 19.9999Z',
  d16: 'M19 17H19.009',
  d17: 'M22 2L20.5 5L15 7',
  d18: 'M15 15L19 5.5',
  d19: 'M7 20L5 22',
  d20: 'M18 20V22',
  d21: 'M21.3301 1.75L19.9637 4.11682L14.7446 6.01469L15.2572 7.42438L17.62 6.56518L14.532 13.8992L2.55617 16.8656L2.55465 16.866C1.55071 17.1117 1.20791 18.0732 1.25456 18.784C1.27978 19.1681 1.41357 19.5764 1.69171 19.9032C1.98345 20.2459 2.41278 20.4696 2.93171 20.4696H5.18902L4.46918 21.1895L5.52984 22.2501L7.31034 20.4696H17.2504V22.25H18.7504V20.4696H20.1913C21.3254 20.4696 22.0953 19.8178 22.4675 18.9476C22.8203 18.1226 22.8245 17.1101 22.5807 16.1911C22.3353 15.2655 21.8134 14.3389 20.9969 13.7133C20.1574 13.0701 19.0534 12.7842 17.7706 13.097L17.768 13.0976L16.349 13.4491L19.5418 5.86634L20.7572 5.42438C20.9375 5.3588 21.0859 5.22658 21.1717 5.05494L22.6717 2.42082L21.3301 1.75ZM18.993 15.4697C18.3067 15.4697 17.7504 16.0294 17.7504 16.7197C17.7504 17.4101 18.3067 17.9697 18.993 17.9697H19.0078C19.6941 17.9697 20.2504 17.4101 20.2504 16.7197C20.2504 16.0294 19.6941 15.4697 19.0078 15.4697H18.993Z',
} as const;

export const IconTreadmill01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-stroke-rounded IconTreadmill01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-duotone-rounded IconTreadmill01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-twotone-rounded IconTreadmill01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-solid-rounded IconTreadmill01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTreadmill01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-bulk-rounded IconTreadmill01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTreadmill01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-stroke-sharp IconTreadmill01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTreadmill01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="treadmill-01-solid-sharp IconTreadmill01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTreadmill01: TheIconSelfPack = {
  name: 'Treadmill01',
  StrokeRounded: IconTreadmill01StrokeRounded,
  DuotoneRounded: IconTreadmill01DuotoneRounded,
  TwotoneRounded: IconTreadmill01TwotoneRounded,
  SolidRounded: IconTreadmill01SolidRounded,
  BulkRounded: IconTreadmill01BulkRounded,
  StrokeSharp: IconTreadmill01StrokeSharp,
  SolidSharp: IconTreadmill01SolidSharp,
};
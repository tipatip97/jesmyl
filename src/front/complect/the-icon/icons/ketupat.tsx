import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.7748 9.6488L15.8492 7.72321C14.0338 5.90774 13.126 5 11.998 5C10.8701 5 9.96232 5.90774 8.14685 7.72321L6.22125 9.6488C4.40578 11.4643 3.49805 12.372 3.49805 13.5C3.49805 14.628 4.40578 15.5357 6.22125 17.3512L8.14685 19.2768C9.96232 21.0923 10.8701 22 11.998 22C13.126 22 14.0338 21.0923 15.8492 19.2768L17.7748 17.3512C19.5903 15.5357 20.498 14.628 20.498 13.5C20.498 12.372 19.5903 11.4643 17.7748 9.6488Z',
  d2: 'M16.748 8.75L11.998 13.5M11.998 13.5L7.24805 18.25M11.998 13.5L7.24805 8.75M11.998 13.5L16.748 18.25',
  d3: 'M15 2C12.6 2.24 12 4.3 12 5C11.8333 4.4 11 3.2 9 3.2',
  d4: 'M11.9986 22C10.8706 22 9.96284 21.0923 8.14737 19.2768L7.18457 18.3135L11.9986 13.4995L7.1848 8.68578L8.14737 7.72321L8.14737 7.7232C9.96284 5.90773 10.8706 5 11.9986 5C13.1266 5 14.0343 5.90774 15.8498 7.72321L16.8123 8.68578L11.9986 13.4995L16.8126 18.3135L15.8498 19.2768C14.0343 21.0923 13.1266 22 11.9986 22Z',
  d5: 'M12 4.25C11.2061 4.25 10.5389 4.57977 9.87727 5.08454C9.24226 5.56903 8.53195 6.27937 7.65686 7.15449L7.61084 7.20051C7.41084 7.40051 7.31084 7.50051 7.31084 7.62478C7.31084 7.74904 7.41084 7.84904 7.61084 8.04904L11.5767 12.0149C11.7767 12.2149 11.8767 12.3149 12.001 12.3149C12.1252 12.3149 12.2252 12.2149 12.4252 12.0149L16.3901 8.04995C16.5901 7.84995 16.6901 7.74995 16.6901 7.62568C16.6901 7.50142 16.5901 7.40142 16.3901 7.20142L16.3432 7.15451C15.4681 6.27938 14.7577 5.56904 14.1227 5.08454C13.4611 4.57977 12.7939 4.25 12 4.25Z',
  d6: 'M17.4507 9.11062C17.6507 8.91061 17.7507 8.81061 17.875 8.81061C17.9993 8.81061 18.0993 8.91061 18.2993 9.11061L18.3455 9.15686C19.2206 10.0319 19.931 10.7423 20.4155 11.3773C20.9202 12.0389 21.25 12.7061 21.25 13.5C21.25 14.2939 20.9202 14.9611 20.4155 15.6227C19.931 16.2577 19.2206 16.968 18.3455 17.8431L18.2995 17.8892C18.0995 18.0892 17.9995 18.1892 17.8752 18.1892C17.751 18.1892 17.651 18.0892 17.451 17.8892L13.4859 13.9241C13.2859 13.7241 13.1859 13.6241 13.1859 13.4998C13.1859 13.3756 13.2859 13.2756 13.4859 13.0756L17.4507 9.11062Z',
  d7: 'M16.3903 19.7984C16.5903 19.5984 16.6903 19.4984 16.6903 19.3741C16.6903 19.2498 16.5903 19.1498 16.3903 18.9498L12.4253 14.9848C12.2252 14.7848 12.1252 14.6848 12.001 14.6848C11.8767 14.6848 11.7767 14.7848 11.5767 14.9848L7.61075 18.9509C7.41076 19.1509 7.31076 19.2509 7.31076 19.3752C7.31076 19.4994 7.41076 19.5994 7.61076 19.7994L7.65686 19.8455C8.53195 20.7206 9.24226 21.431 9.87727 21.9155C10.5389 22.4202 11.2061 22.75 12 22.75C12.7939 22.75 13.4611 22.4202 14.1227 21.9155C14.7577 21.431 15.468 20.7206 16.3431 19.8455L16.3903 19.7984Z',
  d8: 'M5.70157 17.8902C5.90157 18.0902 6.00158 18.1902 6.12584 18.1902C6.25011 18.1902 6.35011 18.0902 6.55011 17.8902L10.5161 13.9241C10.7161 13.7241 10.8161 13.6241 10.8161 13.4998C10.8161 13.3756 10.7161 13.2756 10.5161 13.0756L6.55018 9.1097C6.35018 8.9097 6.25018 8.8097 6.12591 8.8097C6.00165 8.8097 5.90165 8.9097 5.70165 9.1097L5.65449 9.15685C4.77938 10.0319 4.06903 10.7423 3.58453 11.3773C3.07977 12.0389 2.75 12.7061 2.75 13.5C2.75 14.2939 3.07977 14.9611 3.58453 15.6227C4.06904 16.2577 4.77938 16.9681 5.6545 17.8432L5.70157 17.8902Z',
  d9: 'M15.7482 1.92543C15.7894 2.33759 15.4887 2.70512 15.0766 2.74633C14.1105 2.84294 13.5488 3.29047 13.2131 3.76234C12.8545 4.26633 12.752 4.80401 12.752 5.00006C12.752 5.37512 12.4749 5.69253 12.1032 5.74318C11.7316 5.79384 11.3797 5.56217 11.2793 5.20079C11.198 4.90816 10.6475 3.95006 9.00195 3.95006C8.58774 3.95006 8.25195 3.61427 8.25195 3.20006C8.25195 2.78584 8.58774 2.45006 9.00195 2.45006C10.2218 2.45006 11.1093 2.83712 11.7164 3.33637C11.7959 3.18748 11.8871 3.03863 11.9908 2.89277C12.5551 2.09965 13.4934 1.39717 14.9273 1.25378C15.3395 1.21256 15.707 1.51327 15.7482 1.92543Z',
  d10: 'M11.9998 4.25C11.2059 4.25 10.5386 4.57977 9.87706 5.08454C9.24204 5.56903 8.53173 6.27937 7.65664 7.15449L7.61062 7.20051C7.41062 7.40051 7.31062 7.50051 7.31062 7.62478C7.31062 7.74904 7.41062 7.84904 7.61062 8.04904L11.5765 12.0149C11.7765 12.2149 11.8765 12.3149 12.0007 12.3149C12.125 12.3149 12.225 12.2149 12.425 12.0149L16.3899 8.04995C16.5899 7.84995 16.6899 7.74995 16.6899 7.62568C16.6899 7.50142 16.5899 7.40142 16.3899 7.20142L16.3429 7.15451C15.4678 6.27938 14.7575 5.56904 14.1225 5.08454C13.4609 4.57977 12.7937 4.25 11.9998 4.25Z',
  d11: 'M16.3901 19.7984C16.5901 19.5984 16.6901 19.4984 16.6901 19.3741C16.6901 19.2498 16.5901 19.1498 16.3901 18.9498L12.425 14.9848C12.225 14.7848 12.125 14.6848 12.0008 14.6848C11.8765 14.6848 11.7765 14.7848 11.5765 14.9848L7.61054 18.9509C7.41054 19.1509 7.31055 19.2509 7.31055 19.3752C7.31055 19.4994 7.41055 19.5994 7.61054 19.7994L7.65665 19.8455C8.53173 20.7206 9.24204 21.431 9.87706 21.9155C10.5386 22.4202 11.2059 22.75 11.9998 22.75C12.7937 22.75 13.4609 22.4202 14.1225 21.9155C14.7575 21.431 15.4678 20.7206 16.3429 19.8455L16.3901 19.7984Z',
  d12: 'M17.4507 9.10951C17.6507 8.90951 17.7507 8.8095 17.875 8.8095C17.9993 8.8095 18.0993 8.9095 18.2993 9.10951L18.3455 9.15575C19.2206 10.0308 19.931 10.7412 20.4155 11.3762C20.9202 12.0377 21.25 12.705 21.25 13.4989C21.25 14.2928 20.9202 14.96 20.4155 15.6216C19.931 16.2566 19.2206 16.9669 18.3455 17.842L18.2995 17.8881C18.0995 18.0881 17.9995 18.1881 17.8752 18.1881C17.751 18.1881 17.651 18.0881 17.451 17.8881L13.4859 13.923C13.2859 13.723 13.1859 13.623 13.1859 13.4987C13.1859 13.3745 13.2859 13.2745 13.4859 13.0745L17.4507 9.10951Z',
  d13: 'M5.70157 17.8891C5.90157 18.0891 6.00158 18.1891 6.12584 18.1891C6.25011 18.1891 6.35011 18.0891 6.55011 17.8891L10.5161 13.923C10.7161 13.723 10.8161 13.623 10.8161 13.4987C10.8161 13.3745 10.7161 13.2745 10.5161 13.0745L6.55018 9.10859C6.35018 8.90859 6.25018 8.80859 6.12591 8.80859C6.00165 8.80859 5.90165 8.90859 5.70165 9.10859L5.65449 9.15575C4.77938 10.0308 4.06903 10.7412 3.58453 11.3762C3.07977 12.0377 2.75 12.705 2.75 13.4989C2.75 14.2928 3.07977 14.96 3.58453 15.6216C4.06904 16.2566 4.77938 16.967 5.6545 17.842L5.70157 17.8891Z',
  d14: 'M20.498 13.5L11.998 5L3.49805 13.5L11.998 22L20.498 13.5Z',
  d15: 'M15.998 9L11.998 13M11.998 13L7.99805 17M11.998 13L7.99805 9M11.998 13L15.998 17',
  d16: 'M16.5002 18.5586L12.0005 14.0589L7.5003 18.5591L11.4697 22.5285C11.7626 22.8214 12.2374 22.8214 12.5303 22.5285L16.5002 18.5586Z',
  d17: 'M21.0303 12.9678L17.061 8.99847L13.0612 12.9982L17.5609 17.4979L21.0303 14.0285C21.3232 13.7356 21.3232 13.2607 21.0303 12.9678Z',
  d18: 'M11.0957 4.8418L8.00024 7.93726L12.0005 11.9376L16.0003 7.93781L12.7886 4.7261C12.8429 4.46972 12.9684 4.10721 13.215 3.76064C13.5507 3.28876 14.1125 2.84124 15.0785 2.74463L14.9293 1.25208C13.4953 1.39547 12.5571 2.09794 11.9928 2.89107C11.889 3.03693 11.7979 3.18578 11.7183 3.33466C11.1113 2.83542 10.2238 2.44835 9.00391 2.44835V3.94835C10.1983 3.94835 10.8158 4.45312 11.0957 4.8418Z',
  d19: 'M2.96967 14.0285L6.43964 17.4985L10.9399 12.9982L6.93958 8.99792L2.96967 12.9678C2.67678 13.2607 2.67678 13.7356 2.96967 14.0285Z',
};

export const IconKetupatStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-stroke-rounded IconKetupatStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconKetupatDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-duotone-rounded IconKetupatDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconKetupatTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-twotone-rounded IconKetupatTwotoneRounded"
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

export const IconKetupatSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-solid-rounded IconKetupatSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconKetupatBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-bulk-rounded IconKetupatBulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKetupatStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-stroke-sharp IconKetupatStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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

export const IconKetupatSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ketupat-solid-sharp IconKetupatSolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKetupat: TheIconSelfPack = {
  name: 'Ketupat',
  StrokeRounded: IconKetupatStrokeRounded,
  DuotoneRounded: IconKetupatDuotoneRounded,
  TwotoneRounded: IconKetupatTwotoneRounded,
  SolidRounded: IconKetupatSolidRounded,
  BulkRounded: IconKetupatBulkRounded,
  StrokeSharp: IconKetupatStrokeSharp,
  SolidSharp: IconKetupatSolidSharp,
};
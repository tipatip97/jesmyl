import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.75338 17.6664C2.94666 18.7148 3.28853 19.4863 3.8932 20.0963C4.49787 20.7063 5.26271 21.0511 6.30195 21.2461M2.50691 9.99976C2.50195 10.5893 2.50195 11.2265 2.50195 11.9164C2.50195 12.6063 2.50195 13.2436 2.50691 13.8331M10.102 21.4948C10.6864 21.4998 11.3181 21.4998 12.002 21.4998C12.6859 21.4998 13.3176 21.4998 13.902 21.4948M17.702 21.2461C18.7412 21.0511 19.506 20.7063 20.1107 20.0963C20.7154 19.4863 21.0572 18.7148 21.2505 17.6664M21.497 9.99976C21.502 10.5891 21.502 11.2268 21.502 11.9164C21.502 12.6063 21.502 13.2434 21.497 13.8329',
  d2: 'M2.5 6.49988C2.69854 5.40594 3.04969 4.60084 3.6708 3.96434C5.09987 2.49988 7.39991 2.49988 12 2.49988C16.6001 2.49988 18.9001 2.49988 20.3292 3.96435C20.9503 4.60084 21.3015 5.40594 21.5 6.49988',
  d3: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d4: 'M21.4886 8.99991C22.0409 8.99527 22.4923 9.43921 22.497 9.99147C22.502 10.5849 22.502 11.226 22.502 11.9134V11.9197C22.502 12.6073 22.502 13.2479 22.497 13.8415C22.4923 14.3937 22.0409 14.8377 21.4886 14.833C20.9363 14.8284 20.4924 14.3769 20.497 13.8247C20.5019 13.2402 20.502 12.6074 20.502 11.9165C20.502 11.2259 20.5019 10.5926 20.497 10.0083C20.4924 9.45602 20.9363 9.00456 21.4886 8.99991ZM2.51531 8.99991C3.06758 9.00456 3.51151 9.45602 3.50687 10.0083C3.50196 10.5928 3.50195 11.2256 3.50195 11.9165C3.50195 12.6075 3.50196 13.2403 3.50687 13.8248C3.51151 14.3771 3.06758 14.8286 2.51531 14.8332C1.96305 14.8378 1.51159 14.3939 1.50694 13.8416C1.50195 13.2479 1.50195 12.6072 1.50195 11.9193V11.9137C1.50195 11.2259 1.50195 10.5852 1.50694 9.99147C1.51159 9.43921 1.96305 8.99527 2.51531 8.99991ZM2.57207 16.6831C3.1152 16.583 3.63667 16.9421 3.7368 17.4852C3.90678 18.4072 4.18392 18.9693 4.60338 19.3924C5.02206 19.8148 5.57654 20.0927 6.48635 20.2634C7.02917 20.3652 7.38664 20.8878 7.2848 21.4306C7.18296 21.9735 6.66037 22.3309 6.11756 22.2291C4.94889 22.0098 3.97367 21.598 3.18301 20.8004C2.39313 20.0036 1.98655 19.0226 1.76995 17.8479C1.66982 17.3047 2.02894 16.7833 2.57207 16.6831ZM21.4318 16.6831C21.975 16.7833 22.3341 17.3047 22.234 17.8479C22.0174 19.0227 21.6108 20.0036 20.8209 20.8004C20.0302 21.598 19.055 22.0098 17.8864 22.2291C17.3435 22.3309 16.8209 21.9735 16.7191 21.4306C16.6173 20.8878 16.9747 20.3652 17.5176 20.2634C18.4274 20.0927 18.9818 19.8148 19.4005 19.3924C19.82 18.9693 20.0971 18.4072 20.2671 17.4852C20.3672 16.9421 20.8887 16.583 21.4318 16.6831ZM9.10199 21.4863C9.10671 20.9341 9.55824 20.4902 10.1105 20.4949C10.6898 20.4999 11.317 20.4999 12.002 20.4999C12.6869 20.4999 13.3141 20.4999 13.8935 20.4949C14.4457 20.4902 14.8973 20.9341 14.902 21.4863C14.9067 22.0386 14.4628 22.4901 13.9106 22.4948C13.3218 22.4999 12.6865 22.4999 12.0047 22.4999H11.9992C11.3174 22.4999 10.6821 22.4999 10.0934 22.4948C9.54114 22.4901 9.09727 22.0386 9.10199 21.4863Z',
  d5: 'M11.9239 1.5H12.0764C14.3117 1.49998 16.0935 1.49996 17.4904 1.69242C18.9345 1.89138 20.1148 2.31278 21.0451 3.26607C21.8492 4.09007 22.2631 5.1037 22.4841 6.32143C22.5827 6.86484 22.2222 7.38531 21.6787 7.48393C21.1353 7.58255 20.6149 7.22198 20.5162 6.67857C20.3402 5.70842 20.0518 5.11186 19.6137 4.66287C19.1148 4.15169 18.4306 3.84086 17.2174 3.6737C15.9729 3.50223 14.3292 3.5 12.0002 3.5C9.67118 3.5 8.02749 3.50223 6.78293 3.6737C5.5697 3.84086 4.88551 4.15169 4.38668 4.66287C3.94855 5.11186 3.66017 5.70842 3.4841 6.67857C3.38548 7.22198 2.86501 7.58255 2.3216 7.48393C1.77819 7.38531 1.41762 6.86484 1.51625 6.32143C1.73725 5.1037 2.15119 4.09007 2.95527 3.26606C3.88551 2.31278 5.06588 1.89138 6.50995 1.69242C7.90686 1.49996 9.6886 1.49998 11.9239 1.5Z',
  d6: 'M21 6.99976V2.99976L3 2.99976L3 6.99976M3 16.9998L3 20.9998H7M21 16.9998V20.9998H17M21 8.99976V14.9998M3 14.9998L3 8.99976M15 20.9998H9',
  d7: 'M2 2.99976C2 2.44747 2.44772 1.99976 3 1.99976L21 1.99976C21.5523 1.99976 22 2.44747 22 2.99976V6.99976H20V3.99976L4 3.99976L4 6.99976H2L2 2.99976ZM4 8.99976L4 14.9998H2L2 8.99976H4ZM20 14.9998V8.99976H22V14.9998H20ZM4 19.9998V16.9998H2L2 20.9998C2 21.265 2.10536 21.5193 2.29289 21.7069C2.48043 21.8944 2.73478 21.9998 3 21.9998H7V19.9998H4ZM20 19.9998V16.9998H22V20.9998C22 21.552 21.5523 21.9998 21 21.9998H17V19.9998H20ZM9 19.9998H15V21.9998H9V19.9998Z',
};

export const IconBorderTop02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-stroke-rounded IconBorderTop02StrokeRounded"
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

export const IconBorderTop02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-duotone-rounded IconBorderTop02DuotoneRounded"
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

export const IconBorderTop02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-twotone-rounded IconBorderTop02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBorderTop02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-solid-rounded IconBorderTop02SolidRounded"
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

export const IconBorderTop02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-bulk-rounded IconBorderTop02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBorderTop02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-stroke-sharp IconBorderTop02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderTop02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-top-02-solid-sharp IconBorderTop02SolidSharp"
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

export const iconPackOfBorderTop02: TheIconSelfPack = {
  name: 'BorderTop02',
  StrokeRounded: IconBorderTop02StrokeRounded,
  DuotoneRounded: IconBorderTop02DuotoneRounded,
  TwotoneRounded: IconBorderTop02TwotoneRounded,
  SolidRounded: IconBorderTop02SolidRounded,
  BulkRounded: IconBorderTop02BulkRounded,
  StrokeSharp: IconBorderTop02StrokeSharp,
  SolidSharp: IconBorderTop02SolidSharp,
};
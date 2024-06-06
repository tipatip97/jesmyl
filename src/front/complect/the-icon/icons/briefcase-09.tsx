import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 12V21M17 12V21',
  d2: 'M3 12H21',
  d3: 'M2.5 13.75C2.5 10.0966 2.5 8.26992 3.61299 7.13496C4.72599 6 6.51733 6 10.1 6H13.9C17.4827 6 19.274 6 20.387 7.13496C21.5 8.26992 21.5 10.0966 21.5 13.75C21.5 17.4034 21.5 19.2301 20.387 20.365C19.274 21.5 17.4827 21.5 13.9 21.5H10.1C6.51733 21.5 4.72599 21.5 3.61299 20.365C2.5 19.2301 2.5 17.4034 2.5 13.75Z',
  d4: 'M16.5 6L16.4007 5.69094C15.9056 4.15089 15.6581 3.38087 15.0689 2.94043C14.4796 2.5 13.697 2.5 12.1316 2.5H11.8684C10.303 2.5 9.52036 2.5 8.93111 2.94043C8.34186 3.38087 8.09436 4.15089 7.59934 5.69094L7.5 6',
  d5: 'M10.1 21.5H13.9C17.4827 21.5 19.274 21.5 20.387 20.365C21.5 19.2301 21.5 17.4034 21.5 13.75C21.5 13.1132 21.5 12.5318 21.4941 12H2.5059C2.5 12.5318 2.5 13.1132 2.5 13.75C2.5 17.4034 2.5 19.2301 3.61299 20.365C4.72599 21.5 6.51733 21.5 10.1 21.5Z',
  d6: 'M13.9572 5.25H10.0429C8.30003 5.24998 6.91422 5.24997 5.8285 5.39882C4.70783 5.55247 3.79596 5.87721 3.07751 6.60984C2.36106 7.34043 2.0453 8.26429 1.89556 9.40004C1.8461 9.77522 1.81344 10.1858 1.79188 10.6342C1.7781 10.9207 1.77121 11.064 1.85987 11.157C1.94853 11.25 2.09421 11.25 2.38557 11.25H21.6144C21.9058 11.25 22.0515 11.25 22.1401 11.157C22.2288 11.064 22.2219 10.9207 22.2081 10.6342C22.1866 10.1858 22.1539 9.77522 22.1044 9.40004C21.9547 8.26429 21.6389 7.34043 20.9225 6.60984C20.204 5.87721 19.2922 5.55247 18.1715 5.39882C17.0858 5.24997 15.7 5.24998 13.9572 5.25Z',
  d7: 'M22.25 13.3482C22.2499 13.0665 22.2498 12.9257 22.1619 12.8378C22.0741 12.75 21.933 12.75 21.6509 12.75H18.35C18.0672 12.75 17.9257 12.75 17.8379 12.8379C17.75 12.9257 17.75 13.0672 17.75 13.35V21.7259C17.75 21.8096 17.75 21.8514 17.7587 21.8867C17.7882 22.0065 17.8958 22.1004 18.0186 22.1134C18.0547 22.1172 18.0936 22.1119 18.1715 22.1012C19.2922 21.9475 20.204 21.6228 20.9225 20.8902C21.6389 20.1596 21.9547 19.2357 22.1044 18.1C22.25 16.9957 22.25 15.5851 22.25 13.8053V13.6947C22.25 13.5777 22.25 13.4621 22.25 13.3482Z',
  d8: 'M15.6649 22.2436C15.9395 22.2402 16.0769 22.2385 16.1634 22.1509C16.25 22.0632 16.25 21.9247 16.25 21.6477V13.35C16.25 13.0672 16.25 12.9257 16.1621 12.8379C16.0743 12.75 15.9328 12.75 15.65 12.75H8.35C8.06716 12.75 7.92574 12.75 7.83787 12.8379C7.75 12.9257 7.75 13.0672 7.75 13.35V21.6477C7.75 21.9247 7.75 22.0632 7.83657 22.1509C7.92315 22.2385 8.06047 22.2402 8.33512 22.2436C8.86189 22.25 9.43029 22.25 10.0428 22.25H13.9572C14.5697 22.25 15.1381 22.25 15.6649 22.2436Z',
  d9: 'M5.8285 22.1012C5.90635 22.1119 5.94528 22.1172 5.98144 22.1134C6.10417 22.1004 6.21183 22.0065 6.24131 21.8867C6.25 21.8514 6.25 21.8096 6.25 21.7259V13.35C6.25 13.0672 6.25 12.9257 6.16213 12.8379C6.07427 12.75 5.93284 12.75 5.65 12.75H2.34911C2.06698 12.75 1.92591 12.75 1.83805 12.8378C1.75019 12.9257 1.75014 13.0665 1.75004 13.3482C1.75 13.4621 1.75 13.5776 1.75 13.6947V13.8053C1.74999 15.5851 1.74997 16.9957 1.89556 18.1C2.0453 19.2357 2.36106 20.1596 3.07751 20.8902C3.79596 21.6228 4.70783 21.9475 5.8285 22.1012Z',
  d10: 'M11.814 1.5C11.9386 1.50001 12.0639 1.50001 12.1877 1.5C12.9232 1.49996 13.5605 1.49993 14.0847 1.56199C14.6498 1.6289 15.1833 1.77685 15.6684 2.13946C16.1505 2.4998 16.4484 2.97026 16.6834 3.49404C16.9037 3.98515 17.1037 4.6075 17.3373 5.33434L17.4529 5.69399L15.5488 6.30601L15.4495 5.99695C15.1951 5.20549 15.028 4.6903 14.8586 4.31263C14.6987 3.95628 14.5782 3.82151 14.4711 3.74142C14.3669 3.6636 14.2144 3.59132 13.8496 3.54812C13.4569 3.50163 12.939 3.5 12.1324 3.5H11.8693C11.0627 3.5 10.5449 3.50163 10.1521 3.54812C9.78728 3.59132 9.63477 3.6636 9.53066 3.74142C9.4235 3.82151 9.303 3.95628 9.14315 4.31263C8.97373 4.6903 8.80663 5.20549 8.55223 5.99695L8.45289 6.30601L6.54883 5.69399C6.58736 5.57411 6.6259 5.45422 6.66443 5.33434C6.89803 4.6075 7.09804 3.98515 7.31834 3.49404C7.55331 2.97026 7.85118 2.4998 8.33327 2.13946C8.81841 1.77685 9.35187 1.6289 9.917 1.56199C10.4412 1.49993 11.0786 1.49996 11.814 1.5Z',
  d11: 'M22.25 13.3482C22.2499 13.0665 22.2498 12.9257 22.1619 12.8378C22.0741 12.75 21.933 12.75 21.6509 12.75H18.35C18.0672 12.75 17.9257 12.75 17.8379 12.8379C17.75 12.9257 17.75 13.0672 17.75 13.35V21.7259C17.75 21.8096 17.75 21.8514 17.7587 21.8867C17.7882 22.0065 17.8958 22.1004 18.0186 22.1134C18.0547 22.1172 18.0936 22.1119 18.1715 22.1012C19.2922 21.9475 20.204 21.6228 20.9225 20.8902C21.6389 20.1596 21.9547 19.2357 22.1044 18.1C22.25 16.9957 22.25 15.5851 22.25 13.8053C22.25 13.6529 22.25 13.5006 22.25 13.3482Z',
  d12: 'M5.8285 22.1012C5.90635 22.1119 5.94528 22.1172 5.98144 22.1134C6.10416 22.1004 6.21183 22.0065 6.24131 21.8867C6.25 21.8514 6.25 21.8096 6.25 21.7259V13.35C6.25 13.0672 6.25 12.9257 6.16213 12.8379C6.07427 12.75 5.93284 12.75 5.65 12.75H2.34911C2.06698 12.75 1.92591 12.75 1.83805 12.8378C1.75019 12.9257 1.75014 13.0665 1.75004 13.3482C1.74998 13.5006 1.75 13.6529 1.75 13.8053C1.74999 15.5851 1.74997 16.9957 1.89556 18.1C2.0453 19.2357 2.36106 20.1596 3.07751 20.8902C3.79596 21.6228 4.70783 21.9475 5.8285 22.1012Z',
  d13: 'M13.9567 5.25H10.0424C8.29956 5.24998 6.91375 5.24997 5.82803 5.39882C4.70736 5.55247 3.79549 5.87721 3.07704 6.60984C2.36059 7.34043 2.04483 8.26429 1.89509 9.40004C1.84563 9.77522 1.81297 10.1858 1.79141 10.6342C1.77763 10.9207 1.77074 11.064 1.8594 11.157C1.94806 11.25 2.09374 11.25 2.3851 11.25H21.614C21.9053 11.25 22.051 11.25 22.1397 11.157C22.2283 11.064 22.2214 10.9207 22.2077 10.6342C22.1861 10.1858 22.1534 9.77522 22.104 9.40004C21.9542 8.26429 21.6385 7.34043 20.922 6.60984C20.2036 5.87721 19.2917 5.55247 18.171 5.39882C17.0853 5.24997 15.6995 5.24998 13.9567 5.25Z',
  d14: 'M21.5 6H2.5V21.5H21.5V6Z',
  d15: 'M15.5 6V2.5H8.5V6',
  d16: 'M2.5 5.25C2.08579 5.25 1.75 5.58579 1.75 6V11.25H22.25V6C22.25 5.58579 21.9142 5.25 21.5 5.25H2.5Z',
  d17: 'M22.25 12.75H17.75V22.25H21.5C21.9142 22.25 22.25 21.9142 22.25 21.5V12.75Z',
  d18: 'M16.25 22.25V12.75H7.75V22.25H16.25Z',
  d19: 'M6.25 22.25V12.75H1.75V21.5C1.75 21.9142 2.08579 22.25 2.5 22.25H6.25Z',
  d20: 'M7.5 2.75C7.5 2.19772 7.94772 1.75 8.5 1.75H15.5C16.0523 1.75 16.5 2.19772 16.5 2.75V6.25H14.5V3.75H9.5V6.25H7.5V2.75Z',
};

export const IconBriefcase09StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-stroke-rounded IconBriefcase09StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase09DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-duotone-rounded IconBriefcase09DuotoneRounded"
    >
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase09TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-twotone-rounded IconBriefcase09TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase09SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-solid-rounded IconBriefcase09SolidRounded"
    >
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase09BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-bulk-rounded IconBriefcase09BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase09StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-stroke-sharp IconBriefcase09StrokeSharp"
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase09SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-09-solid-sharp IconBriefcase09SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBriefcase09: TheIconSelfPack = {
  name: 'Briefcase09',
  StrokeRounded: IconBriefcase09StrokeRounded,
  DuotoneRounded: IconBriefcase09DuotoneRounded,
  TwotoneRounded: IconBriefcase09TwotoneRounded,
  SolidRounded: IconBriefcase09SolidRounded,
  BulkRounded: IconBriefcase09BulkRounded,
  StrokeSharp: IconBriefcase09StrokeSharp,
  SolidSharp: IconBriefcase09SolidSharp,
};
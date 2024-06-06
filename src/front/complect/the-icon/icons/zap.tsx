import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z',
  d2: 'M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65082L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10187C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83774 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9821 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4781 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z',
  d3: 'M10 20.9998C9.95336 20.9984 9.90956 20.987 9.86807 20.9654C9.50303 20.7751 9.67833 19.9821 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4781 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65082L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H13',
  d4: 'M16.0173 2.32514C16.5421 2.40348 17.1135 2.59299 17.4411 3.16038C17.7678 3.72637 17.6484 4.31617 17.4563 4.81136C17.2715 5.2879 16.9438 5.86433 16.5621 6.53565L15.4611 8.47252C15.2529 8.8388 15.1188 9.07576 15.0334 9.25737C14.9693 9.39366 14.9576 9.4495 14.9557 9.45874C14.9589 9.56981 15.0176 9.67007 15.1089 9.7266C15.1188 9.72978 15.1729 9.74649 15.318 9.75782C15.5167 9.77336 15.8182 9.7739 16.238 9.7739C16.7268 9.77389 17.1369 9.77388 17.4567 9.79838C17.766 9.82206 18.1302 9.87463 18.4355 10.0776C19.0284 10.4716 19.3367 11.1749 19.2285 11.8773C19.1729 12.2386 18.9678 12.5434 18.7773 12.7893C18.5803 13.0435 18.3046 13.3484 17.9756 13.7121L12.384 19.8952C11.8711 20.4625 11.4393 20.94 11.088 21.2463C10.9093 21.402 10.6983 21.5621 10.4628 21.6576C10.2035 21.7629 9.86127 21.8076 9.52137 21.6305C9.18223 21.4538 9.02287 21.1486 8.95948 20.8774C8.90175 20.6304 8.91012 20.3659 8.93375 20.1296C8.98022 19.6648 9.11946 19.035 9.28499 18.2864L9.98325 15.1277C10.1218 14.5012 10.2063 14.1103 10.2279 13.8242C10.2576 13.5884 10.0519 13.4872 9.94529 13.4662C9.66378 13.4254 9.26688 13.4236 8.62804 13.4236L8.11198 13.4236C7.41908 13.4236 6.81593 13.4237 6.34985 13.3543C5.85677 13.2808 5.32891 13.1044 4.99741 12.5916C4.66669 12.0801 4.72072 11.5262 4.85366 11.0454C4.97963 10.5899 5.22437 10.0364 5.50605 9.39944L7.35631 5.21448L7.35631 5.21448C7.61688 4.62508 7.83598 4.12946 8.05945 3.74142C8.29628 3.33017 8.56991 2.98046 8.96967 2.71931C9.3697 2.45798 9.79951 2.34835 10.2706 2.2977C10.7146 2.24997 11.2546 2.24998 11.8958 2.25L14.0836 2.25C14.8522 2.24995 15.5133 2.24991 16.0173 2.32514Z',
  d5: 'M18 2.59766L14.0085 9.5827C14.0047 9.58936 14.0096 9.59766 14.0172 9.59766H18.9759C18.9848 9.59766 18.9892 9.60843 18.9829 9.61473L8 20.5977L9.99689 12.6101C9.99847 12.6038 9.9937 12.5977 9.98719 12.5977H5.01547C5.00821 12.5977 5.00337 12.5902 5.00635 12.5836L9.5 2.59766H18Z',
  d6: 'M15.3128 8.5H19C19.3033 8.5 19.5768 8.68273 19.6929 8.96299C19.809 9.24324 19.7448 9.56583 19.5303 9.78033L6.61567 22.5L9.03942 13H5C4.74551 13 4.50838 12.8709 4.37019 12.6572C4.23201 12.4435 4.21162 12.1743 4.31606 11.9422L9.01491 1.5H19.2883L15.3128 8.5Z',
};

export const IconZapStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-stroke-rounded IconZapStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZapDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-duotone-rounded IconZapDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZapTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-twotone-rounded IconZapTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconZapSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-solid-rounded IconZapSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZapBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-bulk-rounded IconZapBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZapStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-stroke-sharp IconZapStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconZapSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zap-solid-sharp IconZapSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfZap: TheIconSelfPack = {
  name: 'Zap',
  StrokeRounded: IconZapStrokeRounded,
  DuotoneRounded: IconZapDuotoneRounded,
  TwotoneRounded: IconZapTwotoneRounded,
  SolidRounded: IconZapSolidRounded,
  BulkRounded: IconZapBulkRounded,
  StrokeSharp: IconZapStrokeSharp,
  SolidSharp: IconZapSolidSharp,
};
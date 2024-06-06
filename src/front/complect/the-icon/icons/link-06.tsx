import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 13V11.5C13.5 10.0955 13.5 9.39331 13.1629 8.88886C13.017 8.67048 12.8295 8.48298 12.6111 8.33706C12.1705 8.04261 11.5789 8.00539 10.5 8.00068C10.3439 8 10.1775 8 10 8C8.59554 8 7.89331 8 7.38886 8.33706C7.17048 8.48298 6.98298 8.67048 6.83706 8.88886C6.5 9.39331 6.5 10.0955 6.5 11.5V17.5C6.5 18.9045 6.5 19.6067 6.83706 20.1111C6.98298 20.3295 7.17048 20.517 7.38886 20.6629C7.89331 21 8.59554 21 10 21C11.4045 21 12.1067 21 12.6111 20.6629C12.8295 20.517 13.017 20.3295 13.1629 20.1111C13.3503 19.8307 13.4335 19.4892 13.4705 19',
  d2: 'M10.5 11V12.5C10.5 13.9045 10.5 14.6067 10.8371 15.1111C10.983 15.3295 11.1705 15.517 11.3889 15.6629C11.8295 15.9574 12.4211 15.9946 13.5 15.9993C13.6561 16 13.8225 16 14 16C15.4045 16 16.1067 16 16.6111 15.6629C16.8295 15.517 17.017 15.3295 17.1629 15.1111C17.5 14.6067 17.5 13.9045 17.5 12.5V6.5C17.5 5.09554 17.5 4.39331 17.1629 3.88886C17.017 3.67048 16.8295 3.48298 16.6111 3.33706C16.1067 3 15.4045 3 14 3C12.5955 3 11.8933 3 11.3889 3.33706C11.1705 3.48298 10.983 3.67048 10.8371 3.88886C10.6497 4.16925 10.5665 4.51076 10.5295 5',
  d3: 'M10.5148 8.00075L10.5 11V12.5C10.5 13.9045 10.5 14.6067 10.8371 15.1111C10.983 15.3295 11.1705 15.517 11.3889 15.6629C11.8275 15.956 12.4157 15.9943 13.4852 15.9993L13.4705 19C13.4335 19.4892 13.3503 19.8307 13.1629 20.1111C13.017 20.3295 12.8295 20.517 12.6111 20.6629C12.1067 21 11.4045 21 10 21C8.59554 21 7.89331 21 7.38886 20.6629C7.17048 20.517 6.98298 20.3295 6.83706 20.1111C6.5 19.6067 6.5 18.9045 6.5 17.5V11.5C6.5 10.0955 6.5 9.39331 6.83706 8.88886C6.98298 8.67048 7.17048 8.48298 7.38886 8.33706C7.89331 8 8.59554 8 10 8C10.1775 8 10.3439 8 10.5 8.00068C10.5049 8.0007 10.5099 8.00072 10.5148 8.00075Z',
  d4: 'M10.5044 7.00702C11.039 7.00935 11.5193 7.01893 11.9318 7.07593C12.3604 7.13516 12.7791 7.25279 13.1667 7.51171C13.4943 7.73049 13.7755 8.01163 13.9944 8.33906C14.291 8.7828 14.4026 9.26787 14.4527 9.76091C14.5001 10.2259 14.5 10.7954 14.5 11.4559L14.5 12.5041C14.5 13.0561 14.0523 13.5036 13.5 13.5036C12.9477 13.5036 12.5 13.0561 12.5 12.5041V11.5045C12.5 10.7817 12.4988 10.3149 12.463 9.96323C12.4117 9.45862 12.1581 9.12538 11.658 9.05628C11.3948 9.01991 11.0398 9.00854 10.4956 9.00617C10.3421 9.0055 10.1781 9.0055 10 9.0055C9.27696 9.0055 8.80995 9.00671 8.45813 9.04248C7.8793 9.10134 7.59336 9.40945 7.537 9.96323C7.50121 10.3149 7.5 10.7817 7.5 11.5045V17.502C7.5 18.2247 7.50121 18.6915 7.537 19.0432C7.57104 19.3777 7.65624 19.64 7.94443 19.8325C8.00496 19.8729 8.12303 19.9299 8.45813 19.964C8.80995 19.9997 9.27696 20.0009 10 20.0009C10.723 20.0009 11.1901 19.9997 11.5419 19.964C11.877 19.9299 11.995 19.8729 12.0556 19.8325C12.2509 19.7021 12.3782 19.5269 12.4256 19.2983C12.5377 18.7577 13.0669 18.4103 13.6077 18.5224C14.1485 18.6344 14.4961 19.1634 14.384 19.704C14.3144 20.0399 14.1973 20.3638 13.9944 20.6674C13.7755 20.9948 13.4943 21.276 13.1667 21.4947C12.7228 21.7912 12.2375 21.9027 11.7443 21.9529C11.2791 22.0002 10.7093 22.0001 10.0486 22.0001H9.95143C9.29069 22.0001 8.72089 22.0002 8.25572 21.9529C7.76248 21.9027 7.27721 21.7912 6.83329 21.4947C6.50572 21.276 6.22447 20.9948 6.00559 20.6674C5.70898 20.2236 5.59745 19.7386 5.54727 19.2455C5.49995 18.7806 5.49997 18.211 5.5 17.5505L5.5 11.5045C5.5 10.8233 5.49879 10.2372 5.54727 9.76091C5.59745 9.26787 5.70898 8.7828 6.00559 8.33906C6.22447 8.01163 6.50572 7.73049 6.83329 7.51171C7.27721 7.21521 7.76248 7.10373 8.25572 7.05357C9.0006 6.97783 9.75631 7.00376 10.5044 7.00702Z',
  d5: 'M13.4956 16.9932C12.961 16.9909 12.4807 16.9813 12.0682 16.9243C11.6396 16.8651 11.2209 16.7475 10.8333 16.4886C10.5057 16.2698 10.2245 15.9887 10.0056 15.6613C9.70897 15.2176 9.59744 14.7326 9.54726 14.2396C9.49994 13.7746 9.49997 13.2051 9.5 12.5447L9.5 11.4966C9.5 10.9446 9.94771 10.4971 10.5 10.4971C11.0523 10.4971 11.5 10.9446 11.5 11.4966V12.4961C11.5 13.2188 11.5012 13.6856 11.537 14.0373C11.5883 14.5418 11.8419 14.875 12.342 14.9441C12.6052 14.9805 12.9602 14.9919 13.5044 14.9942C13.6579 14.9949 13.8219 14.9949 14 14.9949C14.723 14.9949 15.1901 14.9937 15.5419 14.9579C15.877 14.9239 15.995 14.8669 16.0556 14.8265C16.3438 14.634 16.429 14.3717 16.463 14.0373C16.4988 13.6856 16.5 13.2188 16.5 12.4961V6.49912C16.5 5.77643 16.4988 5.30965 16.463 4.95801C16.4041 4.37946 16.0959 4.09367 15.5419 4.03734C15.1901 4.00156 14.723 4.00036 14 4.00036C13.277 4.00036 12.8099 4.00156 12.4581 4.03734C12.0386 4.07999 11.6691 4.246 11.5744 4.70293C11.4623 5.24345 10.9331 5.59083 10.3923 5.47882C9.85148 5.36681 9.50393 4.83782 9.616 4.29729C9.68564 3.96139 9.80265 3.63754 10.0056 3.33398C10.2245 3.00657 10.5057 2.72545 10.8333 2.50669C11.2772 2.21022 11.7625 2.09874 12.2557 2.04859C12.7209 2.00129 13.2907 2.00132 13.9514 2.00134C14.5483 2.00134 15.1497 1.98813 15.7443 2.04859C16.2375 2.09874 16.7228 2.21022 17.1667 2.50669C17.4943 2.72545 17.7755 3.00657 17.9944 3.33398C18.291 3.77768 18.4026 4.2627 18.4527 4.7557C18.5001 5.22064 18.5 5.79016 18.5 6.45058L18.5 12.4961C18.5 12.5124 18.5 12.5286 18.5 12.5447C18.5 13.2051 18.5001 13.7746 18.4527 14.2396C18.4026 14.7326 18.291 15.2176 17.9944 15.6613C17.7755 15.9887 17.4943 16.2698 17.1667 16.4886C16.7228 16.785 16.2375 16.8965 15.7443 16.9467C14.9994 17.0224 14.2437 16.9965 13.4956 16.9932Z',
  d6: 'M14 13.5V8H6V21H14V18.5',
  d7: 'M10 10.5V16H18V3H10V5.5',
  d8: 'M5 8C5 7.44772 5.44772 7 6 7H14C14.5523 7 15 7.44772 15 8V13.5H13V9H7V20H13V18.5H15V21C15 21.5523 14.5523 22 14 22H6C5.44772 22 5 21.5523 5 21V8Z',
  d9: 'M9 3C9 2.44772 9.44772 2 10 2H18C18.5523 2 19 2.44772 19 3V16C19 16.5523 18.5523 17 18 17H10C9.44772 17 9 16.5523 9 16V10.5H11V15H17V4H11V5.5H9V3Z',
};

export const IconLink06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-stroke-rounded IconLink06StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLink06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-duotone-rounded IconLink06DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLink06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-twotone-rounded IconLink06TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLink06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-solid-rounded IconLink06SolidRounded"
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

export const IconLink06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-bulk-rounded IconLink06BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLink06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-stroke-sharp IconLink06StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLink06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-06-solid-sharp IconLink06SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLink06: TheIconSelfPack = {
  name: 'Link06',
  StrokeRounded: IconLink06StrokeRounded,
  DuotoneRounded: IconLink06DuotoneRounded,
  TwotoneRounded: IconLink06TwotoneRounded,
  SolidRounded: IconLink06SolidRounded,
  BulkRounded: IconLink06BulkRounded,
  StrokeSharp: IconLink06StrokeSharp,
  SolidSharp: IconLink06SolidSharp,
};
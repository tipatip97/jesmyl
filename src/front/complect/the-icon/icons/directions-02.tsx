import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.1961 3.19938C17.7215 2.6096 17.4842 2.3147 17.1597 2.15735C16.8353 2 16.4646 2 15.7232 2H13.6095C12.8508 2 12.4714 2 12.2357 2.24408C12 2.48816 12 2.88099 12 3.66667V7H15.7232C16.4646 7 16.8353 7 17.1597 6.84265C17.4842 6.6853 17.7215 6.3904 18.1961 5.80061L18.3841 5.56697C18.7947 5.0568 19 4.80171 19 4.5C19 4.19829 18.7947 3.9432 18.3841 3.43303L18.1961 3.19938Z',
  d2: 'M18.1961 12.1994C17.7215 11.6096 17.4842 11.3147 17.1597 11.1574C16.8353 11 16.4646 11 15.7232 11H12V16H15.7232C16.4646 16 16.8353 16 17.1597 15.8426C17.4842 15.6853 17.7215 15.3904 18.1961 14.8006L18.3841 14.567C18.7947 14.0568 19 13.8017 19 13.5C19 13.1983 18.7947 12.9432 18.3841 12.433L18.1961 12.1994Z',
  d3: 'M5.80388 8.19938C6.27851 7.6096 6.51583 7.3147 6.84026 7.15735C7.16469 7 7.53539 7 8.2768 7H12V12H8.2768C7.53539 12 7.16469 12 6.84026 11.8426C6.51583 11.6853 6.27851 11.3904 5.80388 10.8006L5.61585 10.567C5.20528 10.0568 5 9.80171 5 9.5C5 9.19829 5.20528 8.9432 5.61585 8.43303L5.80388 8.19938Z',
  d4: 'M12 22L12 3',
  d5: 'M9 22H15',
  d6: 'M18.1961 3.19938C17.7215 2.6096 17.4842 2.3147 17.1597 2.15735C16.8353 2 16.4646 2 15.7232 2L13.6095 2C12.8508 2 12.4714 2 12.2357 2.24408C12 2.48816 12 2.88099 12 3.66667V7H15.7232C16.4646 7 16.8353 7 17.1597 6.84265C17.4842 6.6853 17.7215 6.3904 18.1961 5.80061L18.3841 5.56697C18.7947 5.0568 19 4.80171 19 4.5C19 4.19829 18.7947 3.9432 18.3841 3.43303L18.1961 3.19938Z',
  d7: 'M18.1961 12.1994C17.7215 11.6096 17.4842 11.3147 17.1597 11.1574C16.8353 11 16.4646 11 15.7232 11L12 11V16H15.7232C16.4646 16 16.8353 16 17.1597 15.8426C17.4842 15.6853 17.7215 15.3904 18.1961 14.8006L18.3841 14.567C18.7947 14.0568 19 13.8017 19 13.5C19 13.1983 18.7947 12.9432 18.3841 12.433L18.1961 12.1994Z',
  d8: 'M8.15334 6.75013C7.53569 6.74912 6.99659 6.74824 6.51297 6.9828C6.03297 7.2156 5.69315 7.63921 5.29852 8.13114C5.11307 8.36151 4.64407 8.94441 4.51685 9.14924C4.37322 9.38049 4.25 9.65826 4.25 10.0003C4.25 10.3423 4.37322 10.62 4.51685 10.8513C4.64407 11.0561 5.11307 11.639 5.29852 11.8694C5.69315 12.3613 6.03297 12.7849 6.51297 13.0177C6.99658 13.2523 7.53569 13.2514 8.15334 13.2504L9.40004 13.2503C9.68287 13.2503 9.82428 13.2503 9.91214 13.1624C10 13.0745 10 12.9331 10 12.6503V7.35013C10 7.06729 10 6.92587 9.91213 6.838C9.82427 6.75013 9.68284 6.75013 9.4 6.75013H8.15334Z',
  d9: 'M15.8467 10.7501C16.4643 10.7491 17.0034 10.7482 17.487 10.9828C17.967 11.2156 18.3069 11.6392 18.7015 12.1311C18.8869 12.3615 19.3559 12.9444 19.4831 13.1492C19.6268 13.3805 19.75 13.6583 19.75 14.0003C19.75 14.3423 19.6268 14.62 19.4831 14.8513C19.3559 15.0561 18.8869 15.639 18.7015 15.8694C18.3069 16.3613 17.967 16.7849 17.487 17.0177C17.0034 17.2523 16.4643 17.2514 15.8467 17.2504L14.6 17.2503C14.3171 17.2503 14.1757 17.2503 14.0879 17.1624C14 17.0745 14 16.9331 14 16.6503V11.3501C14 11.0673 14 10.9259 14.0879 10.838C14.1757 10.7501 14.3172 10.7501 14.6 10.7501H15.8467Z',
  d10: 'M15.8467 1.50013C16.4643 1.49912 17.0034 1.49824 17.487 1.7328C17.967 1.9656 18.3069 2.38921 18.7015 2.88114C18.8869 3.11151 19.3559 3.69441 19.4831 3.89924C19.6268 4.13049 19.75 4.40826 19.75 4.75026C19.75 5.09227 19.6268 5.37004 19.4831 5.60129C19.3559 5.80611 18.8869 6.38902 18.7015 6.61939C18.3069 7.11132 17.967 7.53493 17.487 7.76773C17.0034 8.00229 16.4643 8.00141 15.8467 8.0004H15.8467L12 8.00026V1.50013H15.8467Z',
  d11: 'M12 1.5C12.5523 1.5 13 1.94772 13 2.5L13 20.5H15C15.5523 20.5 16 20.9477 16 21.5C16 22.0523 15.5523 22.5 15 22.5H9C8.44772 22.5 8 22.0523 8 21.5C8 20.9477 8.44772 20.5 9 20.5H11L11 2.5C11 1.94772 11.4477 1.5 12 1.5Z',
  d12: 'M12.0068 22V3',
  d13: 'M9.00977 22H15.0039',
  d14: 'M17.0023 2.00417L12.0168 2.00391C12.0113 2.00391 12.0068 2.00838 12.0068 2.01391V6.99195C12.0068 6.99748 12.0113 7.00195 12.0168 7.00195H17.0023L19.0088 4.49936L17.0023 2.00417Z',
  d15: 'M17.0023 12.0003L12.0168 12C12.0113 12 12.0068 12.0045 12.0068 12.01V16.988C12.0068 16.9936 12.0113 16.998 12.0168 16.998H17.0023L19.0088 14.4955L17.0023 12.0003Z',
  d16: 'M7.01136 7.00124L11.9968 7.00098C12.0024 7.00098 12.0068 7.00545 12.0068 7.01098V11.989C12.0068 11.9945 12.0024 11.999 11.9968 11.999H7.01136L5.00488 9.49643L7.01136 7.00124Z',
  d17: 'M17.3595 7.75H12.999L12.999 20.75H14.999V22.75H8.99902V20.75H10.999L10.999 1.25H17.3595L19.9595 4.5L17.3595 7.75Z',
  d18: 'M9.5 6.25H6.6L4 9.5L6.6 12.75H9.5V6.25Z',
  d19: 'M14.5 17.75H17.3995L19.9995 14.5L17.3995 11.25H14.5V17.75Z',
};

export const IconDirections02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-stroke-rounded IconDirections02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDirections02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-duotone-rounded IconDirections02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDirections02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-twotone-rounded IconDirections02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDirections02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-solid-rounded IconDirections02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDirections02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-bulk-rounded IconDirections02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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

export const IconDirections02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-stroke-sharp IconDirections02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconDirections02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="directions-02-solid-sharp IconDirections02SolidSharp"
    >
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

export const iconPackOfDirections02: TheIconSelfPack = {
  name: 'Directions02',
  StrokeRounded: IconDirections02StrokeRounded,
  DuotoneRounded: IconDirections02DuotoneRounded,
  TwotoneRounded: IconDirections02TwotoneRounded,
  SolidRounded: IconDirections02SolidRounded,
  BulkRounded: IconDirections02BulkRounded,
  StrokeSharp: IconDirections02StrokeSharp,
  SolidSharp: IconDirections02SolidSharp,
};
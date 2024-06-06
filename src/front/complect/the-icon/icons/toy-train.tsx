import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 4H13',
  d2: 'M6 8H8',
  d3: 'M15 12.5H15.5',
  d4: 'M3 4V16C3 16.465 3 16.6975 3.05111 16.8882C3.18981 17.4059 3.59413 17.8102 4.11177 17.9489C4.30252 18 4.53501 18 5 18M12 18V4',
  d5: 'M9 18H15',
  d6: 'M12 10H16.8604C18.2244 10 18.5541 10.2703 18.8216 11.6078C18.9188 12.0942 18.8372 12.466 19.3412 12.5064C20.1829 12.574 20.7739 13.1392 21.0909 13.8787C21.5458 14.9402 22 15.8324 22 17C22 17.4714 22 17.7071 21.8536 17.8536C21.7071 18 21.4714 18 21 18H19',
  d7: 'M16 10V7M16 7H15M16 7H17',
  d8: 'M3 4V16C3 16.465 3 16.6975 3.05111 16.8882C3.18981 17.4059 3.59413 17.8102 4.11177 17.9489C4.30252 18 4.53501 18 5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18H15C15 16.8954 15.8954 16 17 16C18.1046 16 19 16.8954 19 18H21C21.4714 18 21.7071 18 21.8536 17.8536C22 17.7071 22 17.4714 22 17C22 15.9643 21.6426 15.1453 21.2444 14.2326C21.1938 14.1166 21.1422 13.9984 21.0909 13.8787C20.7739 13.1392 20.1829 12.574 19.3412 12.5064C18.9414 12.4743 18.9101 12.2338 18.8657 11.893C18.8541 11.8041 18.8417 11.7084 18.8216 11.6078C18.5541 10.2703 18.2244 10 16.8604 10H12V4H3Z',
  d9: 'M1 4C1 3.44772 1.44772 3 2 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H2C1.44772 5 1 4.55228 1 4Z',
  d10: 'M5.5 8C5.5 7.44772 5.94772 7 6.5 7H8.5C9.05228 7 9.5 7.44772 9.5 8C9.5 8.55228 9.05228 9 8.5 9H6.5C5.94772 9 5.5 8.55228 5.5 8Z',
  d11: 'M3.00021 3C3.55249 3 4.00021 3.44772 4.00021 4V16C4.00021 16.2416 4.00045 16.3894 4.00556 16.5014C4.01809 16.7762 4.2112 16.9815 4.49881 16.9946C4.61084 16.9998 4.75865 17 5.00021 17V19C4.5996 19 4.20313 19.0086 3.85316 18.9148C2.99043 18.6836 2.31656 18.0098 2.08539 17.147C1.99162 16.7971 2.00021 16.4006 2.00021 16V4C2.00021 3.44772 2.44792 3 3.00021 3Z',
  d12: 'M11.0002 17V4C11.0002 3.44772 11.4479 3 12.0002 3C12.5525 3 13.0002 3.44772 13.0002 4V19H9V17H11.0002Z',
  d13: 'M12.0002 9.25C11.586 9.25 11.2502 9.58579 11.2502 10L11.25 18.2539C11.25 18.6681 11.5858 19.0039 12 19.0039L13.3577 19.0039H13.3577C13.6001 19.0039 13.7212 19.0039 13.7811 18.9348C13.8409 18.8658 13.8218 18.7334 13.7835 18.4686C13.7614 18.3156 13.75 18.1591 13.75 18C13.75 16.2051 15.2051 14.75 17 14.75C18.7949 14.75 20.25 16.2051 20.25 18C20.25 18.1591 20.2386 18.3156 20.2165 18.4686L20.2165 18.4686C20.1782 18.7334 20.1591 18.8658 20.2189 18.9348C20.2787 19.0039 20.3999 19.0039 20.6423 19.0039H21.0344C21.2395 19.004 21.4614 19.0041 21.6486 18.9789C21.8679 18.9494 22.1481 18.8736 22.3839 18.6378C22.6197 18.402 22.6955 18.1218 22.725 17.9025C22.7502 17.7153 22.7501 17.4935 22.75 17.2884C22.7496 15.9775 22.2886 14.7689 21.7804 13.5833C21.4102 12.7194 20.6874 11.9504 19.608 11.783C19.5967 11.6963 19.581 11.5796 19.5572 11.4607C19.4249 10.7991 19.2415 10.1435 18.7278 9.72232C18.2141 9.30118 17.5353 9.25 16.8606 9.25L12.0002 9.25ZM15 11.75C14.5858 11.75 14.25 12.0858 14.25 12.5C14.25 12.9142 14.5858 13.25 15 13.25H15.5C15.9142 13.25 16.25 12.9142 16.25 12.5C16.25 12.0858 15.9142 11.75 15.5 11.75H15Z',
  d14: 'M14 7C14 6.44772 14.4477 6 15 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8V9.25083C16.9535 9.25024 16.9071 9.25 16.8606 9.25H15V8C14.4477 8 14 7.55228 14 7Z',
  d15: 'M7 16.75C6.30964 16.75 5.75 17.3096 5.75 18C5.75 18.6904 6.30964 19.25 7 19.25C7.69036 19.25 8.25 18.6904 8.25 18C8.25 17.3096 7.69036 16.75 7 16.75ZM4.25 18C4.25 16.4812 5.48122 15.25 7 15.25C8.51878 15.25 9.75 16.4812 9.75 18C9.75 19.5188 8.51878 20.75 7 20.75C5.48122 20.75 4.25 19.5188 4.25 18Z',
  d16: 'M11.2502 10C11.2502 9.58579 11.586 9.25 12.0002 9.25H16.8606C17.5353 9.25 18.2141 9.30118 18.7278 9.72232C19.2415 10.1435 19.4249 10.7991 19.5572 11.4607C19.581 11.5796 19.5967 11.6963 19.608 11.783C20.6874 11.9504 21.4102 12.7194 21.7804 13.5833C22.2886 14.7689 22.7496 15.9775 22.75 17.2884C22.7501 17.4935 22.7502 17.7153 22.725 17.9025C22.6955 18.1218 22.6197 18.402 22.3839 18.6378C22.1481 18.8736 21.8679 18.9494 21.6486 18.9789C21.4614 19.0041 21.2395 19.004 21.0344 19.0039H20.6423C20.3999 19.0039 20.2787 19.0039 20.2189 18.9348C20.1591 18.8658 20.1782 18.7334 20.2165 18.4686C20.2386 18.3156 20.25 18.1591 20.25 18C20.25 16.2051 18.7949 14.75 17 14.75C15.2051 14.75 13.75 16.2051 13.75 18C13.75 18.1591 13.7614 18.3156 13.7835 18.4686C13.8218 18.7334 13.8409 18.8658 13.7811 18.9348C13.7212 19.0039 13.6001 19.0039 13.3577 19.0039L12 19.0039C11.5858 19.0039 11.25 18.6681 11.25 18.2539L11.2502 10Z',
  d17: 'M14.25 12.5C14.25 12.0858 14.5858 11.75 15 11.75H15.5C15.9142 11.75 16.25 12.0858 16.25 12.5C16.25 12.9142 15.9142 13.25 15.5 13.25H15C14.5858 13.25 14.25 12.9142 14.25 12.5Z',
  d18: 'M10.499 18C10.499 19.1046 9.60359 20 8.49902 20C7.39445 20 6.49902 19.1046 6.49902 18C6.49902 16.8954 7.39445 16 8.49902 16C9.60359 16 10.499 16.8954 10.499 18Z',
  d19: 'M19.499 18C19.499 19.1046 18.6036 20 17.499 20C16.3945 20 15.499 19.1046 15.499 18C15.499 16.8954 16.3945 16 17.499 16C18.6036 16 19.499 16.8954 19.499 18Z',
  d20: 'M2 4H15',
  d21: 'M7 8H10',
  d22: 'M15.5 12.5H17',
  d23: 'M4 4V18H6.5M13 18V4',
  d24: 'M10.5 18H15.5',
  d25: 'M18.5 10L19.1966 9.72207C19.0829 9.437 18.8069 9.25 18.5 9.25V10ZM22 18V18.75C22.4142 18.75 22.75 18.4142 22.75 18H22ZM22 12.5064H22.75C22.75 12.0922 22.4142 11.7564 22 11.7564V12.5064ZM19.5 12.5064L18.8034 12.7843L18.9917 13.2564H19.5V12.5064ZM13 10.75H18.5V9.25H13V10.75ZM22 17.25H19.5V18.75H22V17.25ZM22.75 18V12.5064H21.25V18H22.75ZM22 11.7564H19.5V13.2564H22V11.7564ZM20.1966 12.2285L19.1966 9.72207L17.8034 10.2779L18.8034 12.7843L20.1966 12.2285Z',
  d26: 'M17 10V7M17 7H15M17 7H19',
  d27: 'M8.25 17.0833C7.74374 17.0833 7.33333 17.4937 7.33333 18C7.33333 18.5063 7.74374 18.9167 8.25 18.9167C8.75626 18.9167 9.16667 18.5063 9.16667 18C9.16667 17.4937 8.75626 17.0833 8.25 17.0833ZM5.5 18C5.5 16.4812 6.73122 15.25 8.25 15.25C9.76878 15.25 11 16.4812 11 18C11 19.5188 9.76878 20.75 8.25 20.75C6.73122 20.75 5.5 19.5188 5.5 18Z',
  d28: 'M17.249 16.75C16.5587 16.75 15.999 17.3096 15.999 18C15.999 18.6904 16.5587 19.25 17.249 19.25C17.9394 19.25 18.499 18.6904 18.499 18C18.499 17.3096 17.9394 16.75 17.249 16.75ZM14.499 18C14.499 16.4812 15.7302 15.25 17.249 15.25C18.7678 15.25 19.999 16.4812 19.999 18C19.999 19.5188 18.7678 20.75 17.249 20.75C15.7302 20.75 14.499 19.5188 14.499 18Z',
  d29: 'M15 5.25H1.5V3.25H15V5.25Z',
  d30: 'M9.75 9H6.75V7H9.75V9Z',
  d31: 'M12.75 9.25C12.3358 9.25 12 9.58579 12 10V18C12 18.4142 12.3358 18.75 12.75 18.75H21.75C22.1642 18.75 22.5 18.4142 22.5 18V12.5064C22.5 12.0922 22.1642 11.7564 21.75 11.7564H19.7583L18.9466 9.72207C18.8329 9.437 18.5569 9.25 18.25 9.25H12.75ZM15 13H17V11.5H15V13Z',
  d32: 'M3 4.25V17.7833C3 18.3172 3.42736 18.75 3.95455 18.75H6.34091V16.8167H4.90909V4.25H3Z',
  d33: 'M13.5 4.25H11.5909V16.75H10.25V18.75H13.5V4.25Z',
  d34: 'M14.75 6H18.75V8H17.75V10H15.75V8H14.75V6Z',
};

export const IconToyTrainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-stroke-rounded IconToyTrainStrokeRounded"
    >
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconToyTrainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-duotone-rounded IconToyTrainDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconToyTrainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-twotone-rounded IconToyTrainTwotoneRounded"
    >
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconToyTrainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-solid-rounded IconToyTrainSolidRounded"
    >
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17" 
        cy="18" 
        r="2.25" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconToyTrainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-bulk-rounded IconToyTrainBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17" 
        cy="18" 
        r="2.25" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconToyTrainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-stroke-sharp IconToyTrainStrokeSharp"
    >
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
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconToyTrainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="toy-train-solid-sharp IconToyTrainSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfToyTrain: TheIconSelfPack = {
  name: 'ToyTrain',
  StrokeRounded: IconToyTrainStrokeRounded,
  DuotoneRounded: IconToyTrainDuotoneRounded,
  TwotoneRounded: IconToyTrainTwotoneRounded,
  SolidRounded: IconToyTrainSolidRounded,
  BulkRounded: IconToyTrainBulkRounded,
  StrokeSharp: IconToyTrainStrokeSharp,
  SolidSharp: IconToyTrainSolidSharp,
};
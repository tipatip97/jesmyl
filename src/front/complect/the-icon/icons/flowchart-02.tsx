import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z',
  d2: 'M14 6V10M10 12H8C6.11438 12 5.17157 12 4.58579 12.5858C4 13.1716 4 14.1144 4 16V18M6 20H10',
  d3: 'M10 4C10 2.34533 10.3453 2 12 2H16C17.6547 2 18 2.34533 18 4C18 5.65467 17.6547 6 16 6H12C10.3453 6 10 5.65467 10 4Z',
  d4: 'M10 12C10 10.3453 10.3453 10 12 10H16C17.6547 10 18 10.3453 18 12C18 13.6547 17.6547 14 16 14H12C10.3453 14 10 13.6547 10 12Z',
  d5: 'M10 20C10 18.3453 10.3453 18 12 18H16C17.6547 18 18 18.3453 18 20C18 21.6547 17.6547 22 16 22H12C10.3453 22 10 21.6547 10 20Z',
  d6: 'M18 12C19.8856 12 20.8284 12 21.4142 11.4142C22 10.8284 22 9.88562 22 8C22 6.11438 22 5.17157 21.4142 4.58579C20.8284 4 19.8856 4 18 4',
  d7: 'M1.125 20C1.125 18.4812 2.35622 17.25 3.875 17.25C5.39378 17.25 6.625 18.4812 6.625 20C6.625 21.5188 5.39378 22.75 3.875 22.75C2.35622 22.75 1.125 21.5188 1.125 20Z',
  d8: 'M13.875 5C14.4273 5 14.875 5.44772 14.875 6V10C14.875 10.5523 14.4273 11 13.875 11C13.3227 11 12.875 10.5523 12.875 10V6C12.875 5.44772 13.3227 5 13.875 5ZM7.80917 11C7.83104 11 7.85299 11 7.875 11H9.875C10.4273 11 10.875 11.4477 10.875 12C10.875 12.5523 10.4273 13 9.875 13H7.875C6.90393 13 6.27622 13.0021 5.81371 13.0643C5.37997 13.1226 5.24402 13.2168 5.1679 13.2929C5.09177 13.369 4.99763 13.505 4.93931 13.9387C4.87713 14.4012 4.875 15.0289 4.875 16V18C4.875 18.5523 4.42729 19 3.875 19C3.32272 19 2.875 18.5523 2.875 18L2.875 15.9342C2.87495 15.0477 2.87491 14.2839 2.95715 13.6722C3.04528 13.0167 3.24402 12.3883 3.75368 11.8787C4.26335 11.369 4.8917 11.1703 5.54721 11.0821C6.15887 10.9999 6.92269 10.9999 7.80917 11ZM4.875 20C4.875 19.4477 5.32272 19 5.875 19H9.875C10.4273 19 10.875 19.4477 10.875 20C10.875 20.5523 10.4273 21 9.875 21H5.875C5.32272 21 4.875 20.5523 4.875 20Z',
  d9: 'M10.7035 1.34728C11.0487 1.27144 11.4451 1.25 11.875 1.25H15.875C16.3049 1.25 16.7013 1.27144 17.0465 1.34728C17.4002 1.42498 17.7463 1.56966 18.0258 1.84917C18.3053 2.12868 18.45 2.4748 18.5277 2.82851C18.6036 3.17373 18.625 3.5701 18.625 4C18.625 4.4299 18.6036 4.82627 18.5277 5.17149C18.45 5.5252 18.3053 5.87132 18.0258 6.15083C17.7463 6.43034 17.4002 6.57502 17.0465 6.65272C16.7013 6.72856 16.3049 6.75 15.875 6.75H11.875C11.4451 6.75 11.0487 6.72856 10.7035 6.65272C10.3498 6.57502 10.0037 6.43034 9.72417 6.15083C9.44466 5.87132 9.29998 5.5252 9.22228 5.17149C9.14644 4.82627 9.125 4.4299 9.125 4C9.125 3.5701 9.14644 3.17373 9.22228 2.82851C9.29998 2.4748 9.44466 2.12868 9.72417 1.84917C10.0037 1.56966 10.3498 1.42498 10.7035 1.34728Z',
  d10: 'M10.7035 9.34728C11.0487 9.27144 11.4451 9.25 11.875 9.25H15.875C16.3049 9.25 16.7013 9.27144 17.0465 9.34728C17.4002 9.42498 17.7463 9.56966 18.0258 9.84917C18.3053 10.1287 18.45 10.4748 18.5277 10.8285C18.6036 11.1737 18.625 11.5701 18.625 12C18.625 12.4299 18.6036 12.8263 18.5277 13.1715C18.45 13.5252 18.3053 13.8713 18.0258 14.1508C17.7463 14.4303 17.4002 14.575 17.0465 14.6527C16.7013 14.7286 16.3049 14.75 15.875 14.75H11.875C11.4451 14.75 11.0487 14.7286 10.7035 14.6527C10.3498 14.575 10.0037 14.4303 9.72417 14.1508C9.44466 13.8713 9.29998 13.5252 9.22228 13.1715C9.14644 12.8263 9.125 12.4299 9.125 12C9.125 11.5701 9.14644 11.1737 9.22228 10.8285C9.29998 10.4748 9.44466 10.1287 9.72417 9.84917C10.0037 9.56966 10.3498 9.42498 10.7035 9.34728Z',
  d11: 'M10.7035 17.3473C11.0487 17.2714 11.4451 17.25 11.875 17.25H15.875C16.3049 17.25 16.7013 17.2714 17.0465 17.3473C17.4002 17.425 17.7463 17.5697 18.0258 17.8492C18.3053 18.1287 18.45 18.4748 18.5277 18.8285C18.6036 19.1737 18.625 19.5701 18.625 20C18.625 20.4299 18.6036 20.8263 18.5277 21.1715C18.45 21.5252 18.3053 21.8713 18.0258 22.1508C17.7463 22.4303 17.4002 22.575 17.0465 22.6527C16.7013 22.7286 16.3049 22.75 15.875 22.75H11.875C11.4451 22.75 11.0487 22.7286 10.7035 22.6527C10.3498 22.575 10.0037 22.4303 9.72417 22.1508C9.44466 21.8713 9.29998 21.5252 9.22228 21.1715C9.14644 20.8263 9.125 20.4299 9.125 20C9.125 19.5701 9.14644 19.1737 9.22228 18.8285C9.29998 18.4748 9.44466 18.1287 9.72417 17.8492C10.0037 17.5697 10.3498 17.425 10.7035 17.3473Z',
  d12: 'M19.9363 5.06431C19.4738 5.00213 18.8461 5 17.875 5C17.3227 5 16.875 4.55229 16.875 4C16.875 3.44772 17.3227 3 17.875 3C17.897 3 17.919 3 17.9408 3C18.8273 2.99995 19.5911 2.99991 20.2028 3.08215C20.8583 3.17028 21.4867 3.36902 21.9963 3.87868C22.506 4.38835 22.7047 5.0167 22.7929 5.67221C22.8751 6.28387 22.8751 7.04769 22.875 7.93417C22.875 7.95604 22.875 7.97799 22.875 8C22.875 8.02202 22.875 8.04397 22.875 8.06584C22.8751 8.95232 22.8751 9.71614 22.7929 10.3278C22.7047 10.9833 22.506 11.6117 21.9963 12.1213C21.4867 12.631 20.8583 12.8297 20.2028 12.9179C19.5911 13.0001 18.8273 13.0001 17.9408 13L17.875 13C17.3227 13 16.875 12.5523 16.875 12C16.875 11.4477 17.3227 11 17.875 11C18.8461 11 19.4738 10.9979 19.9363 10.9357C20.37 10.8774 20.506 10.7832 20.5821 10.7071C20.6582 10.631 20.7524 10.495 20.8107 10.0613C20.8729 9.59879 20.875 8.97108 20.875 8C20.875 7.02893 20.8729 6.40122 20.8107 5.93871C20.7524 5.50497 20.6582 5.36902 20.5821 5.2929C20.506 5.21677 20.37 5.12263 19.9363 5.06431Z',
  d13: 'M12.875 6.74888V9.24888H14.875V6.74888H12.875Z',
  d14: 'M18.5602 5.0003C19.1585 5.00396 19.5929 5.01702 19.9363 5.06319C20.37 5.1215 20.506 5.21565 20.5821 5.29178C20.6582 5.3679 20.7524 5.50385 20.8107 5.93759C20.8729 6.40009 20.875 7.0278 20.875 7.99888C20.875 8.96996 20.8729 9.59767 20.8107 10.0602C20.7524 10.4939 20.6582 10.6299 20.5821 10.706C20.506 10.7821 20.37 10.8763 19.9363 10.9346C19.5929 10.9807 19.1585 10.9938 18.5602 10.9975C18.6099 11.3007 18.625 11.638 18.625 11.9989C18.625 12.3588 18.61 12.6952 18.5606 12.9978C19.187 12.9942 19.7387 12.9791 20.2028 12.9167C20.8583 12.8286 21.4867 12.6299 21.9963 12.1202C22.506 11.6105 22.7047 10.9822 22.7929 10.3267C22.8751 9.71501 22.8751 8.9512 22.875 8.06472V7.93305C22.8751 7.04656 22.8751 6.28275 22.7929 5.67109C22.7047 5.01557 22.506 4.38722 21.9963 3.87756C21.4867 3.3679 20.8583 3.16915 20.2028 3.08102C19.7387 3.01863 19.187 3.0036 18.5606 3C18.61 3.30257 18.625 3.63897 18.625 3.99888C18.625 4.35979 18.6099 4.69707 18.5602 5.0003Z',
  d15: 'M9.1896 10.9989C9.14007 11.3017 9.125 11.6385 9.125 11.9989C9.125 12.3592 9.14007 12.696 9.18961 12.9989H7.875C6.90393 12.9989 6.27622 13.001 5.81371 13.0632C5.37997 13.1215 5.24402 13.2157 5.1679 13.2918C5.09177 13.3679 4.99763 13.5038 4.93931 13.9376C4.87713 14.4001 4.875 15.0278 4.875 15.9989V17.4363C4.56507 17.3153 4.22779 17.2489 3.875 17.2489C3.52221 17.2489 3.18494 17.3153 2.875 17.4363L2.875 15.9331C2.87495 15.0466 2.87491 14.2828 2.95715 13.6711C3.04528 13.0156 3.24402 12.3872 3.75368 11.8776C4.26335 11.3679 4.8917 11.1692 5.54721 11.081C6.15887 10.9988 6.92268 10.9988 7.80916 10.9989L9.1896 10.9989Z',
  d16: 'M6.43753 20.9989H9.18961C9.14007 20.696 9.125 20.3592 9.125 19.9989C9.125 19.6385 9.14007 19.3017 9.1896 18.9989H6.43753C6.55857 19.3088 6.625 19.6461 6.625 19.9989C6.625 20.3517 6.55857 20.6889 6.43753 20.9989Z',
  d17: 'M18 6V2H10V6H18Z',
  d18: 'M18 14V10H10V14H18Z',
  d19: 'M18 22V18H10V22H18Z',
  d20: 'M14 6V10M10 12H4V18M6 20H10',
  d21: 'M18 4H22V12H18',
  d22: 'M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H18C18.4142 1.25 18.75 1.58579 18.75 2V6C18.75 6.41421 18.4142 6.75 18 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6V2Z',
  d23: 'M9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10V14C18.75 14.4142 18.4142 14.75 18 14.75H10C9.58579 14.75 9.25 14.4142 9.25 14V10Z',
  d24: 'M9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H18C18.4142 17.25 18.75 17.5858 18.75 18V22C18.75 22.4142 18.4142 22.75 18 22.75H10C9.58579 22.75 9.25 22.4142 9.25 22V18Z',
  d25: 'M1.25 20C1.25 18.4812 2.48122 17.25 4 17.25C5.51878 17.25 6.75 18.4812 6.75 20C6.75 21.5188 5.51878 22.75 4 22.75C2.48122 22.75 1.25 21.5188 1.25 20Z',
  d26: 'M13 10V6H15V10H13ZM3 12C3 11.4477 3.44772 11 4 11H10V13H5V18H3V12ZM10 21H6V19H10V21Z',
  d27: 'M21 5H18V3H22C22.5523 3 23 3.44772 23 4V12C23 12.5523 22.5523 13 22 13H18V11H21V5Z',
};

export const IconFlowchart02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-stroke-rounded IconFlowchart02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFlowchart02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-duotone-rounded IconFlowchart02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconFlowchart02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-twotone-rounded IconFlowchart02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFlowchart02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-solid-rounded IconFlowchart02SolidRounded"
    >
      <path 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowchart02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-bulk-rounded IconFlowchart02BulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconFlowchart02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-stroke-sharp IconFlowchart02StrokeSharp"
    >
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
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconFlowchart02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flowchart-02-solid-sharp IconFlowchart02SolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlowchart02: TheIconSelfPack = {
  name: 'Flowchart02',
  StrokeRounded: IconFlowchart02StrokeRounded,
  DuotoneRounded: IconFlowchart02DuotoneRounded,
  TwotoneRounded: IconFlowchart02TwotoneRounded,
  SolidRounded: IconFlowchart02SolidRounded,
  BulkRounded: IconFlowchart02BulkRounded,
  StrokeSharp: IconFlowchart02StrokeSharp,
  SolidSharp: IconFlowchart02SolidSharp,
};
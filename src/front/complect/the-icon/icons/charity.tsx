import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 19H17',
  d2: 'M19 16C19.7767 16.0234 20.24 16.1102 20.5607 16.4313C21 16.8713 21 17.5794 21 18.9957C21 20.4119 21 21.12 20.5607 21.56C20.1213 22 19.4142 22 18 22H6C4.58579 22 3.87868 22 3.43934 21.56C3 21.12 3 20.4119 3 18.9957C3 17.5794 3 16.8713 3.43934 16.4313C3.75999 16.1102 4.22328 16.0234 5 16',
  d3: 'M14.3151 19C15.0417 18.3718 15.5 17.4526 15.5 16.4286C15.5 14.535 13.933 13 12 13C10.067 13 8.5 14.535 8.5 16.4286C8.5 17.4526 8.95829 18.3718 9.6849 19',
  d4: 'M20 10L17.6052 10C17.311 10 17.0209 9.93373 16.7578 9.80643L14.7159 8.81844C14.4528 8.69114 14.1627 8.62487 13.8685 8.62487L12.8259 8.62487C11.8175 8.62487 11 7.83382 11 6.858C11 6.81856 11.027 6.7839 11.0662 6.77306L13.6071 6.07055C14.0629 5.94453 14.551 5.98842 14.975 6.19357L17.1579 7.24974M11 7.5L6.40723 8.91108C5.59303 9.16476 4.71292 8.86396 4.2029 8.1577C3.83414 7.64706 3.98428 6.91581 4.52154 6.60583L12.0371 2.26947C12.5151 1.99367 13.0791 1.92638 13.6048 2.08239L20 3.98005',
  d5: 'M13.5704 19H10.4296C9.94926 19 9.46593 18.8409 9.17768 18.4566C8.75166 17.8887 8.5 17.1874 8.5 16.4286C8.5 14.535 10.067 13 12 13C13.933 13 15.5 14.535 15.5 16.4286C15.5 17.1874 15.2483 17.8887 14.8223 18.4566C14.5341 18.8409 14.0507 19 13.5704 19Z',
  d6: 'M17.6052 10L20 10L20 3.98005L13.6048 2.08239C13.0791 1.92638 12.5151 1.99367 12.0371 2.26947L4.52154 6.60583C3.98428 6.91581 3.83414 7.64706 4.2029 8.1577C4.71292 8.86396 5.59303 9.16476 6.40723 8.91108L11 7.5L11.1101 7.46366C11.3656 8.14117 12.0373 8.62487 12.8259 8.62487L13.8685 8.62487C14.1627 8.62487 14.4528 8.69114 14.7159 8.81844L16.7578 9.80643C17.0209 9.93373 17.311 10 17.6052 10Z',
  d7: 'M5.99955 15.3449C6.01621 15.8969 5.5822 16.3579 5.03017 16.3746C4.58925 16.3879 4.11598 16.3344 4.04603 16.8554C4.00213 17.1825 4.00001 17.6343 4.00001 18.3707C4.00001 19.107 4.00213 19.5588 4.04603 19.8859C4.08932 20.2083 4.15767 20.2845 4.48754 20.329C4.81377 20.3729 5.26459 20.375 6.00001 20.375H18C18.7354 20.375 19.1862 20.3729 19.5125 20.329C19.8349 20.2855 19.9097 20.2157 19.954 19.8859C19.9979 19.5588 20 19.107 20 18.3707C20 17.6343 19.9979 17.1825 19.954 16.8554C19.8799 16.3039 19.4502 16.389 18.9698 16.3746C18.4178 16.3579 17.9838 15.8969 18.0005 15.3449C18.0171 14.7928 18.4781 14.3588 19.0302 14.3755C19.7921 14.3985 20.64 14.4705 21.2683 15.0997C21.7045 15.5365 21.8664 16.0696 21.9362 16.5893C22.0001 17.0655 22.0001 17.6539 22 18.3091V18.4322C22.0001 19.0874 22.0001 19.6758 21.9362 20.152C21.8664 20.6717 21.7045 21.2048 21.2683 21.6416C20.8319 22.0786 20.299 22.2411 19.7794 22.3111C19.3036 22.3751 18.7157 22.3751 18.0617 22.375C14.0206 22.375 9.97945 22.3746 5.93834 22.375C5.28427 22.3751 4.69647 22.3751 4.22066 22.3111C3.70104 22.2411 3.16811 22.0786 2.73173 21.6416C2.29555 21.2048 2.13359 20.6717 2.06382 20.152C1.99789 19.661 2.00001 19.0506 2.00001 18.3707C2.00001 17.6908 1.99789 17.0804 2.06382 16.5893C2.13359 16.0696 2.29555 15.5365 2.73173 15.0997C3.36002 14.4705 4.20795 14.3985 4.96985 14.3755C5.52188 14.3588 5.9829 14.7928 5.99955 15.3449Z',
  d8: 'M7 19.375H9.67876H9.69017H14.3098H14.3212H17C17.5523 19.375 18 18.9273 18 18.375C18 17.8227 17.5523 17.375 17 17.375H16.2083C16.3965 16.8872 16.5 16.3576 16.5 15.8036C16.5 13.3384 14.4657 11.375 12 11.375C9.53426 11.375 7.5 13.3384 7.5 15.8036C7.5 16.3576 7.6035 16.8872 7.79173 17.375H7C6.44772 17.375 6 17.8227 6 18.375C6 18.9273 6.44772 19.375 7 19.375Z',
  d9: 'M18.0442 11.1234C18.7865 11.1235 19.6674 11.1803 20.2369 10.6108C20.5459 10.3018 20.6584 9.92607 20.7062 9.57059C20.7496 9.24778 20.7495 8.85095 20.7495 8.41813L20.7495 5.80988C20.7496 5.21302 20.7778 4.55672 20.4019 4.05307C20.026 3.54942 19.3888 3.38982 18.8166 3.2201L13.8177 1.73677C13.0932 1.5218 12.3168 1.61532 11.6618 1.99324L4.14621 6.32959C3.21303 6.86802 2.97285 8.10955 3.59435 8.97018C4.28724 9.92966 5.4978 10.3525 6.6283 10.001L6.62982 10.0005L8.75526 9.3475C9.24611 9.19669 9.20372 9.08069 9.06672 8.59907C8.99583 8.34984 8.98743 8.11074 8.99953 7.97609C8.99953 6.99477 9.66852 6.20242 10.5328 5.96347L13.0737 5.26095C13.9954 5.00612 14.9826 5.09376 15.8456 5.51131L17.4659 6.29528C17.7766 6.44561 17.9066 6.81937 17.7563 7.13009C17.606 7.44081 17.2322 7.57083 16.9215 7.42049L15.3012 6.63653C14.7126 6.35173 14.0373 6.29143 13.4068 6.46575L10.8659 7.16826C10.5158 7.26506 10.2495 7.58495 10.2495 7.97609C10.2495 9.38915 11.4262 9.74815 12.8254 9.74815L13.868 9.74826C14.0498 9.74826 14.2281 9.78926 14.3887 9.86695L16.4307 10.8549C16.9481 11.1053 17.4841 11.1234 18.0442 11.1234Z',
  d10: 'M6 19H18',
  d11: 'M18 16L21 16V22H3V16H6',
  d12: 'M19.9993 10H16.9993L14.4993 8.62487H13.4993C11.9993 8.62487 10.9993 7.47599 10.9993 6.50017L13.9993 5.50017L16.9993 6.50017M11 7L6.78904 8.40365C5.78443 8.73852 4.69291 8.23228 4.29963 7.24907L4 6.5L13 2L19.9993 3.98005',
  d13: 'M2.25 15.6875C2.25 15.1697 2.68652 14.75 3.225 14.75H6.15V16.625H4.2V20.375H19.8V16.625L17.85 16.625L17.85 14.75L20.775 14.75C21.3135 14.75 21.75 15.1698 21.75 15.6875V21.3125C21.75 21.8303 21.3135 22.25 20.775 22.25H3.225C2.68652 22.25 2.25 21.8303 2.25 21.3125V15.6875Z',
  d14: 'M20.7495 11.25V3.9161L13.2043 1.77832C13.0244 1.72743 12.832 1.74557 12.6647 1.82918L3.66473 6.32918C3.31584 6.50362 3.15891 6.91638 3.30378 7.27854L3.60341 8.02761C4.14418 9.37953 5.64501 10.0756 7.02635 9.61517L9.46878 8.80102C9.16886 8.25132 8.99981 7.63809 8.99981 7.0003C8.99981 6.13944 9.55067 5.37516 10.3674 5.10294L13.3674 4.10294C13.7779 3.96609 14.2217 3.96609 14.6323 4.10294L16.1323 4.60294L15.7366 5.78866L14.2366 5.28866C14.0827 5.23735 13.9162 5.23735 13.7623 5.28866L10.7623 6.28866C10.456 6.39075 10.2495 6.67735 10.2495 7.00018C10.2495 7.48341 10.4061 7.96683 10.6849 8.39564C11.2351 9.24153 12.2611 9.87487 13.4995 9.87487H14.3068L16.638 11.1571C16.7487 11.2181 16.8731 11.25 16.9995 11.25H20.7495Z',
  d15: 'M18 19.5H6V17.5H18V19.5Z',
  d16: 'M7.75 15.9286C7.75 13.6063 9.66744 11.75 12 11.75C14.3326 11.75 16.25 13.6063 16.25 15.9286C16.25 17.1824 15.6877 18.3047 14.8056 19.0673C14.6694 19.1852 14.4952 19.25 14.3151 19.25H9.6849C9.50476 19.25 9.33064 19.1852 9.19437 19.0673C8.31227 18.3047 7.75 17.1824 7.75 15.9286Z',
} as const;

export const IconCharityStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-stroke-rounded IconCharityStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCharityDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-duotone-rounded IconCharityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCharityTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-twotone-rounded IconCharityTwotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCharitySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-solid-rounded IconCharitySolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconCharityBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-bulk-rounded IconCharityBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCharityStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-stroke-sharp IconCharityStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCharitySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="charity-solid-sharp IconCharitySolidSharp"
    >
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCharity: TheIconSelfPack = {
  name: 'Charity',
  StrokeRounded: IconCharityStrokeRounded,
  DuotoneRounded: IconCharityDuotoneRounded,
  TwotoneRounded: IconCharityTwotoneRounded,
  SolidRounded: IconCharitySolidRounded,
  BulkRounded: IconCharityBulkRounded,
  StrokeSharp: IconCharityStrokeSharp,
  SolidSharp: IconCharitySolidSharp,
};
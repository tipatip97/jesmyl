import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22C15.1944 22 19 18.1944 19 13.5C19 13.0306 18.6156 12.6411 18.1554 12.7339C16.2128 13.1256 14.75 14.842 14.75 16.9M10.5 5H17.3C18.2389 5 19.0218 5.77293 18.7902 6.6828C18.0413 9.62441 15.3747 11.8 12.2 11.8H10.5C9.09167 11.8 7.95 12.9417 7.95 14.35C7.95 15.7583 9.09167 16.9 10.5 16.9H14.75M10.5 5V8.4M14.75 16.9V17.75M5.4 20.3L8.8 16.9M3.275 9.25L7.95 13.075',
  d2: 'M13.5 8L13.491 8',
  d3: 'M9 2.00012H20.1608C21.321 2.00012 22.1912 3.0512 21.9637 4.17777C21.6689 5.63739 20.3433 6.67844 18.9189 7.00012',
  d4: 'M10.5 22C15.1944 22 19 18.1944 19 13.5C19 13.0306 18.6156 12.6411 18.1554 12.7339C16.2128 13.1256 14.75 14.842 14.75 16.9H10.5C9.09167 16.9 7.95 15.7583 7.95 14.35C7.95 12.9417 9.09167 11.8 10.5 11.8H12.2C15.3747 11.8 18.0413 9.62441 18.7902 6.6828C19.0218 5.77293 18.2389 5 17.3 5H10.5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22Z',
  d5: 'M10.5 5.00012C5.80558 5.00012 2 8.8057 2 13.5001C2 18.1945 5.80558 22.0001 10.5 22.0001C15.1944 22.0001 19 18.1945 19 13.5001C19 13.0307 18.6156 12.6413 18.1554 12.734C16.2128 13.1257 14.75 14.8421 14.75 16.9001M10.5 5.00012H17.3C18.2389 5.00012 19.0218 5.77306 18.7902 6.68292C18.0413 9.62453 15.3747 11.8001 12.2 11.8001H10.5C9.09167 11.8001 7.95 12.9418 7.95 14.3501C7.95 15.7584 9.09167 16.9001 10.5 16.9001H14.75M10.5 5.00012V8.40012M14.75 16.9001V17.7501M5.4 20.3001L8.8 16.9001M3.275 9.25012L7.95 13.0751',
  d6: 'M10.5 5.00012V8.50012',
  d7: 'M14.75 16.9001V17.7501M14.75 16.9001C14.75 14.8421 16.2128 13.1257 18.1554 12.734C18.6156 12.6413 19 13.0307 19 13.5001C19 18.1945 15.1944 22.0001 10.5 22.0001C5.80558 22.0001 2 18.1945 2 13.5001C2 8.8057 5.80558 5.00012 10.5 5.00012H17.3C18.2389 5.00012 19.0218 5.77306 18.7902 6.68292C18.0413 9.62453 15.3747 11.8001 12.2 11.8001H10.5C9.09167 11.8001 7.95 12.9418 7.95 14.3501C7.95 15.7584 9.09167 16.9001 10.5 16.9001H14.75ZM5.40039 20.3002L8.80039 16.9002M3.27539 9.25022L7.95039 13.0752',
  d8: 'M3.25926 8.66389C3.03979 8.49642 2.93005 8.41269 2.91466 8.28737C2.89926 8.16205 2.98175 8.05889 3.14673 7.85257C4.56672 6.07677 6.62749 4.83569 8.97869 4.4797C9.27007 4.43558 9.41576 4.41352 9.52015 4.5033C9.62454 4.59307 9.62454 4.74708 9.62454 5.05511V7.525C9.62454 7.93921 9.96032 8.275 10.3745 8.275C10.7888 8.275 11.1245 7.93921 11.1245 7.525V4.975C11.1245 4.69216 11.1245 4.55074 11.2124 4.46287C11.3003 4.375 11.4417 4.375 11.7245 4.375H17.175C18.4584 4.375 19.7777 5.47768 19.392 6.99283C18.5606 10.2587 15.6009 12.675 12.075 12.675H10.375C10.0825 12.675 9.80628 12.7448 9.5621 12.8686C9.30536 12.9988 9.17699 13.0638 9.09099 13.056C9.005 13.0481 8.91867 12.9822 8.746 12.8505L3.25926 8.66389ZM13.375 9.125C13.9273 9.125 14.375 8.67728 14.375 8.125C14.375 7.57272 13.9273 7.125 13.375 7.125H13.366C12.8137 7.125 12.366 7.57271 12.366 8.125C12.366 8.67728 12.8137 9.125 13.366 9.125H13.375Z',
  d9: 'M1.74346 10.2926C1.86218 9.98528 1.92153 9.83164 2.06583 9.7909C2.21013 9.75016 2.34714 9.85471 2.62117 10.0638L8.36569 14.4471C8.46218 14.5207 8.51042 14.5575 8.5389 14.6018C8.56737 14.6461 8.58494 14.723 8.62006 14.877C8.64579 14.9898 8.68211 15.0985 8.72791 15.2021C8.85986 15.5006 8.92584 15.6498 8.90801 15.7421C8.89019 15.8343 8.8028 15.9196 8.62802 16.09L4.54976 20.0672C4.3556 20.2565 4.25852 20.3512 4.13408 20.3495C4.00965 20.3478 3.91924 20.2547 3.73843 20.0685C2.12092 18.4028 1.125 16.1302 1.125 13.625C1.125 12.4502 1.34402 11.3265 1.74346 10.2926Z',
  d10: 'M10.2585 16.5951C10.4385 16.4196 10.5285 16.3318 10.5642 16.3122C10.5981 16.2935 10.5916 16.2962 10.6289 16.2858C10.6682 16.275 10.7226 16.275 10.8316 16.275H13.4143C13.6537 16.275 13.7734 16.275 13.8545 16.2122C13.9356 16.1494 13.9684 16.0226 14.034 15.769C14.5098 13.9298 16.0059 12.502 17.8822 12.1237C18.91 11.9165 19.625 12.7932 19.625 13.625C19.625 18.7336 15.4836 22.875 10.375 22.875C8.78787 22.875 7.29409 22.4753 5.98886 21.771C5.69384 21.6118 5.54633 21.5322 5.52529 21.3819C5.50425 21.2315 5.62979 21.1091 5.88088 20.8642L10.2585 16.5951Z',
  d11: 'M7.875 2.125C7.875 1.57272 8.32272 1.125 8.875 1.125H20.0358C21.8157 1.125 23.1739 2.74285 22.8189 4.50062C22.4244 6.45349 20.7038 7.71886 19.0142 8.10043C18.4755 8.2221 17.9402 7.88401 17.8185 7.3453C17.6968 6.80658 18.0349 6.27123 18.5737 6.14957C19.7329 5.88776 20.6633 5.07104 20.8585 4.10467C20.9585 3.6093 20.5764 3.125 20.0358 3.125H8.875C8.32272 3.125 7.875 2.67728 7.875 2.125Z',
  d12: 'M10.2589 16.596C10.4389 16.4204 10.5289 16.3326 10.5646 16.313C10.5986 16.2943 10.592 16.297 10.6294 16.2867C10.6686 16.2758 10.7231 16.2758 10.832 16.2758H13.4148C13.6542 16.2758 13.7739 16.2758 13.8549 16.213C13.936 16.1502 13.9689 16.0234 14.0345 15.7698C14.5102 13.9307 16.0063 12.5029 17.8826 12.1245C18.9104 11.9173 19.6254 12.794 19.6254 13.6258C19.6254 18.7345 15.4841 22.8758 10.3754 22.8758C8.78829 22.8758 7.29452 22.4761 5.98928 21.7718C5.69426 21.6126 5.54675 21.533 5.52571 21.3827C5.50467 21.2323 5.63021 21.1099 5.8813 20.865L10.2589 16.596Z',
  d13: 'M10.5 5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22C15.1944 22 19 17.6944 19 13C17 13 14.75 14.842 14.75 16.9M10.5 5H19C19 10.5 15.3747 11.8 12.2 11.8H10.5C9.09167 11.8 7.95 12.9417 7.95 14.35C7.95 15.7583 9.09167 16.9 10.5 16.9H14.75M10.5 5V8.4M14.75 16.9V18.5M5.4 20.3L8.8 16.9M3.275 9.25L7.95 13.075',
  d14: 'M9 1.25012H20.1608C21.7857 1.25012 23.022 2.72628 22.6988 4.32625C22.3558 6.02483 20.9332 7.18877 19.4323 7.64009C19.0281 9.15508 18.2595 10.2711 17.2507 11.0549C15.7622 12.2113 13.8701 12.5501 12.2 12.5501H10.5C10.0068 12.5501 9.55991 12.7485 9.23479 13.0698L3.052 8.01368C4.59722 5.9195 7.00456 4.50034 9.75013 4.28008V8.40012H11.2501V4.25012H19.75V5.00012C19.75 5.31391 19.7388 5.61637 19.7169 5.90777C20.4888 5.48983 21.0696 4.81609 21.2285 4.02928C21.3604 3.37612 20.8563 2.75012 20.1608 2.75012H9V1.25012ZM15.5 9.00012C16.0523 9.00012 16.5 8.55241 16.5 8.00012C16.5 7.44784 16.0523 7.00012 15.5 7.00012H15.491C14.9387 7.00012 14.491 7.44784 14.491 8.00012C14.491 8.55241 14.9387 9.00012 15.491 9.00012H15.5Z',
  d15: 'M2.25608 9.30051C1.61279 10.5608 1.25 11.9881 1.25 13.5001C1.25 16.2637 2.46193 18.7442 4.38331 20.4392L9.07373 15.4483C8.88398 15.2023 8.75648 14.9057 8.71483 14.5823L2.25608 9.30051Z',
  d16: 'M5.59277 21.3426L10.4728 16.1499L10.5 16.1501H14.0779C14.2855 15.152 14.8874 14.2709 15.6285 13.6163C16.5508 12.8015 17.7838 12.2501 19 12.2501H19.75V13.0001C19.75 18.0525 15.6627 22.7501 10.5 22.7501C8.69733 22.7501 7.0151 22.2345 5.59277 21.3426Z',
};

export const IconPrawnStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-stroke-rounded IconPrawnStrokeRounded"
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

export const IconPrawnDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-duotone-rounded IconPrawnDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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

export const IconPrawnTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-twotone-rounded IconPrawnTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconPrawnSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-solid-rounded IconPrawnSolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrawnBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-bulk-rounded IconPrawnBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrawnStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-stroke-sharp IconPrawnStrokeSharp"
    >
      <path 
        d={d.d13} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrawnSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prawn-solid-sharp IconPrawnSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfPrawn: TheIconSelfPack = {
  name: 'Prawn',
  StrokeRounded: IconPrawnStrokeRounded,
  DuotoneRounded: IconPrawnDuotoneRounded,
  TwotoneRounded: IconPrawnTwotoneRounded,
  SolidRounded: IconPrawnSolidRounded,
  BulkRounded: IconPrawnBulkRounded,
  StrokeSharp: IconPrawnStrokeSharp,
  SolidSharp: IconPrawnSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z',
  d2: 'M11.9953 12H12.0042M15.9908 12H15.9998M7.99976 12H8.00873',
  d3: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248L3.93544 22.2469C3.66155 22.2403 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.45874 19.9852 2.61542 19.6885L2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955ZM15.991 11C15.4387 11 14.991 11.4477 14.991 12C14.991 12.5523 15.4387 13 15.991 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H15.991Z',
  d4: 'M14.2204 1.82273C12.7601 1.72566 11.2369 1.72586 9.77965 1.82273C5.213 2.12629 1.58972 5.81258 1.2918 10.4224C1.23607 11.2848 1.23607 12.1768 1.2918 13.0392C1.40272 14.7556 2.15148 16.304 2.98381 17.5604C3.23314 18.0419 3.10323 18.7641 2.6369 19.6478L2.61542 19.6885C2.45874 19.9852 2.30536 20.2757 2.21688 20.5234C2.12313 20.7858 2.02623 21.2025 2.26791 21.6145C2.48996 21.9931 2.84475 22.1318 3.13152 22.1873C3.36961 22.2334 3.66155 22.2403 3.93544 22.2469L3.98117 22.248C5.40092 22.2825 6.40136 21.8726 7.1938 21.2883C7.35108 21.1723 7.45909 21.0929 7.54041 21.037C7.65868 21.0804 7.8203 21.1467 8.05839 21.2448C8.59978 21.4677 9.21472 21.6013 9.77965 21.6389C11.2369 21.7357 12.7601 21.7359 14.2204 21.6389C18.787 21.3353 22.4103 17.649 22.7082 13.0392C22.7639 12.1768 22.7639 11.2848 22.7082 10.4224C22.4103 5.81258 18.787 2.12629 14.2204 1.82273Z',
  d5: 'M6.99976 12C6.99976 11.4477 7.44747 11 7.99976 11H8.00873C8.56101 11 9.00873 11.4477 9.00873 12C9.00873 12.5523 8.56101 13 8.00873 13H7.99976C7.44747 13 6.99976 12.5523 6.99976 12ZM10.9953 12C10.9953 11.4477 11.443 11 11.9953 11H12.0042C12.5565 11 13.0042 11.4477 13.0042 12C13.0042 12.5523 12.5565 13 12.0042 13H11.9953C11.443 13 10.9953 12.5523 10.9953 12ZM14.9908 12C14.9908 11.4477 15.4385 11 15.9908 11H15.9998C16.552 11 16.9998 11.4477 16.9998 12C16.9998 12.5523 16.552 13 15.9998 13H15.9908C15.4385 13 14.9908 12.5523 14.9908 12Z',
  d6: 'M11.9953 11.75H12.0042M15.9908 11.75H15.9998M7.99976 11.75H8.00873',
  d7: 'M2.00745 21.2485L6.58308 19.7805C8.08444 20.6107 9.78655 20.7935 11.6722 20.7935C18.1727 21.2485 21.9953 17.0441 21.9953 12.06C22.1023 7.10399 19.9124 1.88051 11.575 2.2695C4.30259 2.39874 2.00146 6.83762 2.00146 11.8217C2.00146 13.526 2.34879 15.6125 3.60292 17.2518L2.00745 21.2485ZM2.00745 21.2485C2.00006 21.2503 2.00546 21.2552 2.00745 21.2485Z',
  d8: 'M14.1408 1.7722C13.8207 1.74999 13.4488 1.74999 12.7898 1.75H12.7897H11.2107H11.2107C10.5516 1.74999 10.1798 1.74999 9.85973 1.7722C5.25596 2.09176 1.592 5.75571 1.27245 10.3595C1.25023 10.6796 1.25024 11.0514 1.25024 11.7105V11.7105V11.7895V11.7895C1.25024 12.4486 1.25023 12.8204 1.27245 13.1405C1.38628 14.7804 1.92495 16.3022 2.77945 17.5954L1.47507 22.25L6.43733 20.8113C7.48244 21.3226 8.63855 21.643 9.85973 21.7278C10.1798 21.75 10.5516 21.75 11.2107 21.75H12.7898C13.4488 21.75 13.8207 21.75 14.1408 21.7278C18.7445 21.4082 22.4085 17.7443 22.728 13.1405C22.7503 12.8204 22.7503 12.4486 22.7502 11.7895V11.7105C22.7503 11.0514 22.7503 10.6796 22.728 10.3595C22.4085 5.75571 18.7445 2.09176 14.1408 1.7722ZM9.00922 11H7.00024V13H9.00922V11ZM13.0047 11H10.9958V13H13.0047V11ZM17.0002 11H14.9913V13H17.0002V11Z',
};

export const IconMessage02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-stroke-rounded IconMessage02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMessage02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-duotone-rounded IconMessage02DuotoneRounded"
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

export const IconMessage02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-twotone-rounded IconMessage02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMessage02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-solid-rounded IconMessage02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-bulk-rounded IconMessage02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessage02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-stroke-sharp IconMessage02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessage02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-02-solid-sharp IconMessage02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessage02: TheIconSelfPack = {
  name: 'Message02',
  StrokeRounded: IconMessage02StrokeRounded,
  DuotoneRounded: IconMessage02DuotoneRounded,
  TwotoneRounded: IconMessage02TwotoneRounded,
  SolidRounded: IconMessage02SolidRounded,
  BulkRounded: IconMessage02BulkRounded,
  StrokeSharp: IconMessage02StrokeSharp,
  SolidSharp: IconMessage02SolidSharp,
};
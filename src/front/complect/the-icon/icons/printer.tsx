import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.35396 18C5.23084 18 4.16928 18 3.41349 17.5468C2.91953 17.2506 2.52158 16.8271 2.26475 16.3242C1.87179 15.5547 1.97742 14.5373 2.18868 12.5025C2.36503 10.8039 2.45321 9.95455 2.88684 9.33081C3.17153 8.92129 3.55659 8.58564 4.00797 8.35353C4.69548 8 5.58164 8 7.35396 8H16.646C18.4184 8 19.3045 8 19.992 8.35353C20.4434 8.58564 20.8285 8.92129 21.1132 9.33081C21.5468 9.95455 21.635 10.8039 21.8113 12.5025C22.0226 14.5373 22.1282 15.5547 21.7352 16.3242C21.4784 16.8271 21.0805 17.2506 20.5865 17.5468C19.8307 18 18.7692 18 16.646 18',
  d2: 'M17 8V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V8',
  d3: 'M13.9887 16L10.0113 16C9.32602 16 8.98337 16 8.69183 16.1089C8.30311 16.254 7.97026 16.536 7.7462 16.9099C7.57815 17.1904 7.49505 17.5511 7.32884 18.2724C7.06913 19.3995 6.93928 19.963 7.02759 20.4149C7.14535 21.0174 7.51237 21.5274 8.02252 21.7974C8.40513 22 8.94052 22 10.0113 22L13.9887 22C15.0595 22 15.5949 22 15.9775 21.7974C16.4876 21.5274 16.8547 21.0174 16.9724 20.4149C17.0607 19.963 16.9309 19.3995 16.6712 18.2724C16.505 17.5511 16.4218 17.1904 16.2538 16.9099C16.0297 16.536 15.6969 16.254 15.3082 16.1089C15.0166 16 14.674 16 13.9887 16Z',
  d4: 'M18 12H18.009',
  d5: 'M7.35396 8H16.646C18.4184 8 19.3045 8 19.992 8.35353C20.4434 8.58564 20.8285 8.92129 21.1132 9.33081C21.5468 9.95455 21.635 10.8039 21.8113 12.5025C22.0226 14.5373 22.1282 15.5547 21.7352 16.3242C21.4784 16.8271 21.0805 17.2506 20.5865 17.5468C19.8307 18 18.7692 18 16.646 18H16.6081C16.481 17.4554 16.3992 17.1526 16.2538 16.9099C16.0297 16.536 15.6969 16.254 15.3082 16.1089C15.0166 16 14.674 16 13.9887 16H10.0113C9.32602 16 8.98337 16 8.69183 16.1089C8.30311 16.254 7.97026 16.536 7.7462 16.9099C7.60077 17.1526 7.51896 17.4554 7.39185 18H7.35396C5.23084 18 4.16928 18 3.41349 17.5468C2.91953 17.2506 2.52158 16.8271 2.26475 16.3242C1.87179 15.5547 1.97742 14.5373 2.18868 12.5025C2.36503 10.8039 2.45321 9.95455 2.88684 9.33081C3.17153 8.92129 3.55659 8.58564 4.00797 8.35353C4.69548 8 5.58164 8 7.35396 8Z',
  d6: 'M7.32116 7.25H16.6789H16.6789H16.6789C17.5372 7.24999 18.2279 7.24999 18.7883 7.2968C19.3656 7.34502 19.8685 7.44666 20.335 7.68655C20.8935 7.97374 21.373 8.3906 21.729 8.90269C22.0284 9.33345 22.1862 9.81457 22.2948 10.3696C22.3996 10.9054 22.4686 11.5704 22.5537 12.3902L22.5537 12.3903L22.5614 12.4642C22.6636 13.4485 22.7459 14.2417 22.7499 14.8833C22.7539 15.5438 22.6776 16.128 22.4032 16.6653C22.0811 17.296 21.5841 17.8231 20.9722 18.19C20.4552 18.5001 19.872 18.6291 19.1967 18.6903C18.7965 18.7266 18.3354 18.7408 17.8042 18.7464L17.8042 18.7464C17.8602 19.0024 17.9069 19.2332 17.9398 19.4398C18.0011 19.8245 18.0309 20.2128 17.9538 20.607C17.7824 21.4842 17.2413 22.2602 16.4453 22.6815C16.0793 22.8753 15.6932 22.9419 15.3211 22.9718C14.9652 23.0003 14.5296 23.0003 14.0269 23.0003L9.9731 23.0003H9.97308C9.47033 23.0003 9.03472 23.0003 8.67884 22.9718C8.30673 22.9419 7.92064 22.8753 7.55462 22.6815C6.7587 22.2602 6.21759 21.4842 6.04614 20.607C5.96909 20.2128 5.99885 19.8245 6.06013 19.4398C6.09306 19.2332 6.1397 19.0024 6.19578 18.7464L6.19573 18.7464C5.6646 18.7408 5.20351 18.7266 4.8033 18.6903C4.12804 18.6291 3.54485 18.5001 3.0278 18.19C2.41585 17.8231 1.9189 17.296 1.59682 16.6653C1.32242 16.128 1.24612 15.5438 1.25015 14.8833C1.25407 14.2417 1.33644 13.4483 1.43866 12.4639L1.44628 12.3904C1.5314 11.5705 1.60044 10.9055 1.70522 10.3696C1.81377 9.81457 1.97157 9.33345 2.27103 8.90269C2.62704 8.3906 3.10651 7.97374 3.66499 7.68655C4.13151 7.44666 4.6344 7.34502 5.21173 7.2968C5.77206 7.24999 6.46282 7.24999 7.32113 7.25H7.32114H7.32115H7.32116ZM10.0113 17.0003C9.24419 17.0003 9.12282 17.0157 9.04161 17.046C8.87656 17.1076 8.71789 17.2341 8.60398 17.4242C8.53717 17.5357 8.48606 17.704 8.30328 18.4972C8.17027 19.0745 8.08246 19.458 8.03523 19.7545C7.98874 20.0463 7.99773 20.1657 8.009 20.2234C8.07305 20.5511 8.26599 20.7952 8.49036 20.914C8.50695 20.9227 8.57986 20.9574 8.83881 20.9782C9.10499 20.9995 9.45941 21.0003 10.0113 21.0003H13.9887C14.5405 21.0003 14.895 20.9995 15.1611 20.9782C15.4201 20.9574 15.493 20.9227 15.5096 20.914C15.734 20.7952 15.9269 20.5511 15.991 20.2234C16.0022 20.1657 16.0112 20.0463 15.9647 19.7545C15.9175 19.458 15.8297 19.0745 15.6967 18.4972C15.5139 17.704 15.4628 17.5357 15.396 17.4242C15.2821 17.2341 15.1234 17.1076 14.9583 17.046C14.8771 17.0157 14.7558 17.0003 13.9887 17.0003H10.0113ZM17 12C17 11.4477 17.4457 11 17.9955 11H18.0045C18.5543 11 19 11.4477 19 12C19 12.5523 18.5543 13 18.0045 13H17.9955C17.4457 13 17 12.5523 17 12Z',
  d7: 'M13.0519 1.25C13.9503 1.24997 14.6995 1.24995 15.2943 1.32992C15.9221 1.41432 16.4889 1.59999 16.9444 2.05546C17.3998 2.51093 17.5855 3.07773 17.6699 3.70552C17.7137 4.03139 17.7335 4.70379 17.7425 5.39295C17.7462 5.67931 17.748 5.82248 17.6597 5.91177C17.5714 6.00105 17.4265 6.00078 17.1366 6.00024C17.0018 5.99999 16.8643 6 16.7243 6H7.27535C7.13534 6 6.99782 5.99999 6.86299 6.00024C6.57312 6.00078 6.42819 6.00105 6.33989 5.91177C6.2516 5.82248 6.25346 5.67931 6.25717 5.39295C6.26612 4.70379 6.28592 4.03139 6.32973 3.70552C6.41413 3.07773 6.5998 2.51093 7.05527 2.05546C7.51074 1.59999 8.07754 1.41432 8.70534 1.32992C9.30011 1.24995 10.0494 1.24997 10.9478 1.25H13.0519Z',
  d8: 'M17 18H22V8H2V18H7',
  d9: 'M17 8V2H7V8',
  d10: 'M17 16V22H7V16H17Z',
  d11: 'M17.75 6H6.25V1.25H17.75V6Z',
  d12: 'M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H22C22.4142 7.25 22.75 7.58579 22.75 8V18C22.75 18.4142 22.4142 18.75 22 18.75H17.75V22C17.75 22.4142 17.4142 22.75 17 22.75H7C6.58579 22.75 6.25 22.4142 6.25 22V18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V8ZM7.75 16.75V21.25H16.25V16.75H7.75ZM19 11H17V13H19V11Z',
};

export const IconPrinterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-stroke-rounded IconPrinterStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconPrinterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-duotone-rounded IconPrinterDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-twotone-rounded IconPrinterTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-solid-rounded IconPrinterSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-bulk-rounded IconPrinterBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-stroke-sharp IconPrinterStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-solid-sharp IconPrinterSolidSharp"
    >
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

export const iconPackOfPrinter: TheIconSelfPack = {
  name: 'Printer',
  StrokeRounded: IconPrinterStrokeRounded,
  DuotoneRounded: IconPrinterDuotoneRounded,
  TwotoneRounded: IconPrinterTwotoneRounded,
  SolidRounded: IconPrinterSolidRounded,
  BulkRounded: IconPrinterBulkRounded,
  StrokeSharp: IconPrinterStrokeSharp,
  SolidSharp: IconPrinterSolidSharp,
};
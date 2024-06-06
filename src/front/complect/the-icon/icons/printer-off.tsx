import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 2L22 22',
  d2: 'M7.35396 18C5.23084 18 4.16928 18 3.41349 17.5468C2.91953 17.2506 2.52158 16.8271 2.26475 16.3242C1.87179 15.5547 1.97742 14.5373 2.18868 12.5025C2.36503 10.8039 2.45321 9.95455 2.88684 9.33081C3.17153 8.92129 3.55659 8.58564 4.00797 8.35353C4.69548 8 5.58164 8 7.35396 8H8',
  d3: 'M21.2522 17C21.4443 16.7952 21.607 16.5648 21.7348 16.3149C22.1278 15.5463 22.0221 14.53 21.8109 12.4974C21.6345 10.8007 21.5463 9.95233 21.1127 9.32928C20.828 8.92022 20.443 8.58494 19.9916 8.35309C19.3041 7.99995 18.4179 7.99995 16.6456 7.99995H12.5M17.0009 8V6.00914C17.0009 4.13213 17.0009 3.19363 16.4151 2.61052C15.8293 2.02741 14.8865 2.02741 13.0009 2.02741H11.0009C9.95416 2.02741 8.27325 1.7914 7.5 2.70441',
  d4: 'M13.9887 16L10.0113 16C9.32602 16 8.98337 16 8.69183 16.1089C8.30311 16.254 7.97026 16.536 7.7462 16.9099C7.57815 17.1904 7.49505 17.5511 7.32884 18.2724C7.06913 19.3995 6.93928 19.963 7.02759 20.4149C7.14535 21.0174 7.51237 21.5274 8.02252 21.7974C8.40513 22 8.94052 22 10.0113 22L13.9887 22C15.0595 22 15.5949 22 15.9775 21.7974C16.4876 21.5274 16.8547 21.0174 16.9724 20.4149C17.0607 19.963 16.9309 19.3995 16.6712 18.2724C16.505 17.5511 16.4218 17.1904 16.2538 16.9099C16.0297 16.536 15.6969 16.254 15.3082 16.1089C15.0166 16 14.674 16 13.9887 16Z',
  d5: 'M18 12H18.009',
  d6: 'M3.41349 17.5468C4.16928 18 5.23084 18 7.35396 18L8.5 16H16L8 8H7.35396C5.58164 8 4.69548 8 4.00797 8.35353C3.55659 8.58564 3.17153 8.92129 2.88684 9.33081C2.45321 9.95455 2.36503 10.8039 2.18868 12.5025C1.97742 14.5373 1.87179 15.5547 2.26475 16.3242C2.52158 16.8271 2.91953 17.2506 3.41349 17.5468Z',
  d7: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d8: 'M13.0536 1.125C13.952 1.12497 14.7012 1.12495 15.2959 1.20492C15.9237 1.28932 16.4905 1.47499 16.946 1.93046C17.4015 2.38593 17.5871 2.95273 17.6716 3.58052C17.7154 3.90639 17.7352 4.57879 17.7441 5.26795C17.7478 5.55431 17.7497 5.69748 17.6614 5.78677C17.5731 5.87605 17.4282 5.87578 17.1383 5.87524C17.0035 5.87499 16.8659 5.875 16.7259 5.875H9.53616C9.45659 5.875 9.38029 5.84339 9.32403 5.78713L6.59665 3.05976C6.51798 2.98109 6.488 2.86482 6.52741 2.76078C6.64259 2.45666 6.81016 2.17722 7.05692 1.93046C7.51239 1.47499 8.07919 1.28932 8.70698 1.20492C9.30175 1.12495 10.051 1.12497 10.9494 1.125H10.9495H13.0535H13.0536Z',
  d9: 'M16.6789 7.125H16.6789H12.109C11.4925 7.125 11.1843 7.125 11.1076 7.3102C11.0309 7.49539 11.2488 7.71335 11.6848 8.14926L20.9727 17.4372C21.1548 17.6193 21.2458 17.7103 21.3709 17.7097C21.496 17.7091 21.5773 17.6262 21.74 17.4603C22.0056 17.1896 22.2297 16.8799 22.4032 16.5403C22.6776 16.003 22.7539 15.4188 22.7499 14.7583C22.7459 14.1167 22.6636 13.3235 22.5614 12.3392L22.5537 12.2653C22.4686 11.4455 22.3996 10.7804 22.2948 10.2446C22.1862 9.68957 22.0284 9.20845 21.729 8.7777C21.373 8.2656 20.8935 7.84874 20.335 7.56155C19.8685 7.32166 19.3656 7.22002 18.7883 7.1718C18.2279 7.12499 17.5372 7.12499 16.6789 7.125ZM4.8033 18.5653C5.20351 18.6016 5.6646 18.6158 6.19573 18.6214C6.13967 18.8773 6.09305 19.108 6.06013 19.3146C5.99885 19.6993 5.96909 20.0876 6.04614 20.4818C6.21759 21.359 6.7587 22.135 7.55462 22.5563C7.92064 22.7501 8.30673 22.8167 8.67884 22.8465C9.03472 22.8751 9.47033 22.8751 9.97308 22.8751L14.0269 22.8751C14.5296 22.8751 14.9652 22.8751 15.3211 22.8465C15.6932 22.8167 16.0793 22.7501 16.4453 22.5563C17.2413 22.135 17.7824 21.359 17.9538 20.4818C18.0309 20.0876 18.0011 19.6993 17.9398 19.3146C17.9127 19.1446 17.7129 18.2418 17.6116 17.7844L17.5626 17.5627L7.30079 7.30084C7.21397 7.21401 7.17056 7.1706 7.11527 7.14776C7.05998 7.12492 6.99873 7.12504 6.87623 7.12527C6.21978 7.12649 5.67178 7.13337 5.21173 7.1718C4.6344 7.22002 4.13151 7.32166 3.66499 7.56155C3.10651 7.84874 2.62704 8.2656 2.27103 8.7777C1.97157 9.20845 1.81377 9.68957 1.70522 10.2446C1.60044 10.7805 1.5314 11.4455 1.44628 12.2654L1.43866 12.3389C1.33644 13.3233 1.25407 14.1167 1.25015 14.7583C1.24612 15.4188 1.32242 16.003 1.59682 16.5403C1.9189 17.171 2.41585 17.6981 3.0278 18.065C3.54485 18.3751 4.12804 18.5041 4.8033 18.5653ZM15.6002 17.9604C15.4925 17.5125 15.4492 17.3877 15.396 17.2989C15.2964 17.1326 15.1624 17.0149 15.0199 16.9468C14.9996 16.9371 14.979 16.9284 14.9584 16.9207C14.8772 16.8904 14.7558 16.875 13.9887 16.875H10.0113C9.24425 16.875 9.12287 16.8904 9.04166 16.9207C8.87661 16.9823 8.71794 17.1088 8.60403 17.2989C8.55082 17.3877 8.50757 17.5125 8.39982 17.9604C8.37228 18.0749 8.34053 18.2105 8.30333 18.3719C8.17032 18.9492 8.08251 19.3327 8.03528 19.6292C7.98879 19.921 7.99778 20.0404 8.00905 20.0981C8.07311 20.4258 8.26604 20.6699 8.49042 20.7887C8.507 20.7974 8.57991 20.8321 8.83886 20.8529C9.10504 20.8742 9.45946 20.875 10.0113 20.875H13.9887C14.5406 20.875 14.895 20.8742 15.1612 20.8529C15.4201 20.8321 15.4931 20.7974 15.5096 20.7887C15.734 20.6699 15.9269 20.4258 15.991 20.0981C16.0023 20.0404 16.0113 19.921 15.9648 19.6292C15.9175 19.3327 15.8297 18.9492 15.6967 18.3719C15.6601 18.2131 15.6288 18.0794 15.6016 17.9661L15.6002 17.9604ZM18 10.9999C18 10.4476 18.4457 9.99988 18.9955 9.99988H19.0045C19.5543 9.99988 20 10.4476 20 10.9999C20 11.5522 19.5543 11.9999 19.0045 11.9999H18.9955C18.4457 11.9999 18 11.5522 18 10.9999Z',
  d10: 'M6.19573 18.6212C5.6646 18.6156 5.20351 18.6013 4.8033 18.5651C4.12804 18.5039 3.54485 18.3749 3.0278 18.0648C2.41585 17.6979 1.9189 17.1707 1.59682 16.5401C1.32242 16.0028 1.24612 15.4186 1.25015 14.7581C1.25407 14.1164 1.33644 13.3231 1.43866 12.3386L1.44628 12.2652C1.5314 11.4453 1.60044 10.7802 1.70522 10.2444C1.81377 9.68935 1.97157 9.20823 2.27103 8.77747C2.62704 8.26538 3.10651 7.84852 3.66499 7.56133C4.13151 7.32144 4.6344 7.2198 5.21173 7.17157C5.67178 7.13314 6.21978 7.12627 6.87623 7.12504C6.99873 7.12481 7.05998 7.1247 7.11527 7.14754C7.17056 7.17038 7.21397 7.21379 7.30079 7.30062L17.5626 17.5624L17.6116 17.7842C17.7129 18.2415 17.9127 19.1444 17.9398 19.3144C18.0011 19.6991 18.0309 20.0874 17.9538 20.4816C17.7824 21.3588 17.2413 22.1347 16.4453 22.5561C16.0793 22.7499 15.6932 22.8165 15.3211 22.8463C14.9652 22.8749 14.5296 22.8749 14.0269 22.8748L9.97308 22.8748C9.47033 22.8749 9.03472 22.8749 8.67884 22.8463C8.30673 22.8165 7.92064 22.7499 7.55462 22.5561C6.7587 22.1347 6.21759 21.3588 6.04614 20.4816C5.96909 20.0874 5.99885 19.6991 6.06013 19.3144C6.09305 19.1078 6.13967 18.8771 6.19573 18.6212ZM15.396 17.2987C15.58 17.6057 15.6167 18.0244 15.6967 18.3717C15.8297 18.9489 15.9175 19.3325 15.9648 19.629C16.0571 20.2086 15.838 20.7984 15.1612 20.8527C14.895 20.874 14.5406 20.8748 13.9887 20.8748H10.0113C9.45946 20.8748 9.10504 20.874 8.83886 20.8527C8.20072 20.8015 7.93718 20.2448 8.03528 19.629C8.08251 19.3325 8.17032 18.9489 8.30333 18.3717C8.48611 17.5784 8.53722 17.4102 8.60403 17.2987C8.91471 16.7802 9.48227 16.8748 10.0113 16.8748H13.9887C14.5178 16.8748 15.0853 16.7802 15.396 17.2987Z',
  d11: 'M16.6802 7.125C17.5385 7.12499 18.2293 7.12499 18.7896 7.1718C19.3669 7.22002 19.8698 7.32166 20.3363 7.56155C20.8948 7.84874 21.3743 8.2656 21.7303 8.7777C22.0297 9.20845 22.1875 9.68957 22.2961 10.2446C22.4009 10.7804 22.4699 11.4455 22.555 12.2653L22.5627 12.3392C22.6649 13.3235 22.7472 14.1167 22.7512 14.7583C22.7552 15.4188 22.6789 16.003 22.4045 16.5403C22.231 16.8799 22.0069 17.1896 21.7413 17.4603C21.5787 17.6262 21.4973 17.7091 21.3722 17.7097C21.2471 17.7103 21.1561 17.6193 20.974 17.4372L11.6861 8.14926C11.2501 7.71335 11.0322 7.49539 11.1089 7.3102C11.1856 7.125 11.4938 7.125 12.1103 7.125H16.6802Z',
  d12: 'M18.9955 10C18.4457 10 18 10.4477 18 11C18 11.5523 18.4457 12 18.9955 12H19.0045C19.5543 12 20 11.5523 20 11C20 10.4477 19.5543 10 19.0045 10H18.9955Z',
  d13: 'M16.9917 17V22H6.99707V16H15.9922',
  d14: 'M18.0059 12H18.0149',
  d15: 'M2 2L21.9893 22',
  d16: 'M16.9839 8.02786V2H6.98926V3.48233',
  d17: 'M21.9805 18V8H12.0862M6.98852 18H1.99121V8H7.99835',
  d18: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d19: 'M17.75 6V1.25H6.25V2.71548L9.53452 6H17.75Z',
  d20: 'M2 7.25C1.58579 7.25 1.25 7.58579 1.25 8V18C1.25 18.4142 1.58579 18.75 2 18.75H6.25V22C6.25 22.4142 6.58579 22.75 7 22.75H17C17.4142 22.75 17.75 22.4142 17.75 22V18.75H18.749L7.24898 7.25H2ZM7.75 16.75V21.25H16.25V16.75H7.75Z',
  d21: 'M22.75 8V18C22.75 18.3288 22.5384 18.6082 22.2439 18.7094L10.7845 7.25H22C22.4142 7.25 22.75 7.58579 22.75 8ZM20 10H18V12H20V10Z',
};

export const IconPrinterOffStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-stroke-rounded IconPrinterOffStrokeRounded"
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

export const IconPrinterOffDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-duotone-rounded IconPrinterOffDuotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPrinterOffTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-twotone-rounded IconPrinterOffTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterOffSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-solid-rounded IconPrinterOffSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPrinterOffBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-bulk-rounded IconPrinterOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPrinterOffStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-stroke-sharp IconPrinterOffStrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrinterOffSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="printer-off-solid-sharp IconPrinterOffSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrinterOff: TheIconSelfPack = {
  name: 'PrinterOff',
  StrokeRounded: IconPrinterOffStrokeRounded,
  DuotoneRounded: IconPrinterOffDuotoneRounded,
  TwotoneRounded: IconPrinterOffTwotoneRounded,
  SolidRounded: IconPrinterOffSolidRounded,
  BulkRounded: IconPrinterOffBulkRounded,
  StrokeSharp: IconPrinterOffStrokeSharp,
  SolidSharp: IconPrinterOffSolidSharp,
};
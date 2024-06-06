import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11.9702 17.0386L11.9702 9.98823M11.9702 9.98823C11.6441 9.98389 11.3224 10.208 11.085 10.4816L9.49553 12.2643M11.9702 9.98823C12.2847 9.99242 12.6034 10.2154 12.8553 10.4816L14.454 12.2643M15.9863 7.03857L7.98633 7.03857',
  d3: 'M2.20117 12.4453C2.20117 7.96697 2.20117 5.7278 3.59241 4.33655C4.98366 2.94531 7.22283 2.94531 11.7012 2.94531C16.1795 2.94531 18.4187 2.94531 19.81 4.33655C21.2012 5.7278 21.2012 7.96697 21.2012 12.4453C21.2012 16.9236 21.2012 19.1628 19.81 20.5541C18.4187 21.9453 16.1795 21.9453 11.7012 21.9453C7.22283 21.9453 4.98366 21.9453 3.59241 20.5541C2.20117 19.1628 2.20117 16.9236 2.20117 12.4453Z',
  d4: 'M11.6937 17.4078V10.3903M11.6937 10.3903C11.4323 10.3868 11.1743 10.5698 10.984 10.7931L9.19341 12.6253M11.6937 10.3903C11.9459 10.3938 12.2014 10.5758 12.4033 10.7931L14.2085 12.6253M15.7448 7.43652H7.70996',
  d5: 'M11.9838 17L11.9838 9.94966M11.9838 9.94966C11.6578 9.94532 11.3361 10.1694 11.0987 10.443L9.5092 12.2257M11.9838 9.94966C12.2984 9.95384 12.6171 10.1768 12.869 10.443L14.4677 12.2257M16 7L8 7',
  d6: 'M12.0552 22.25H12.0553C14.2459 22.25 15.9666 22.25 17.31 22.0694C18.6867 21.8843 19.7789 21.4973 20.6371 20.6391C21.4953 19.7809 21.8824 18.6886 22.0675 17.312C22.2481 15.9686 22.2481 14.2479 22.248 12.0572V11.9428C22.2481 9.7521 22.2481 8.03144 22.0675 6.68802C21.8824 5.31137 21.4953 4.21911 20.6371 3.36091C19.7789 2.50271 18.6867 2.11568 17.31 1.93059C15.9666 1.74998 14.2459 1.74999 12.0552 1.75H11.9408C9.75015 1.74999 8.02948 1.74998 6.68607 1.93059C5.30941 2.11568 4.21716 2.50271 3.35896 3.36091C2.50076 4.21911 2.11373 5.31137 1.92864 6.68802C1.74802 8.03144 1.74803 9.75211 1.74805 11.9428V11.9428V12.0572V12.0572C1.74803 14.2479 1.74802 15.9686 1.92864 17.312C2.11373 18.6886 2.50076 19.7809 3.35896 20.6391C4.21716 21.4973 5.30941 21.8843 6.68607 22.0694C8.02948 22.25 9.75015 22.25 11.9408 22.25H11.9409H12.0552ZM11.998 18C12.5503 18 12.998 17.5523 12.998 17V13.8716H13.5481L13.5673 13.8717C13.6395 13.8719 13.7837 13.8723 13.9112 13.854C14.0257 13.8376 14.5405 13.7532 14.7782 13.2184C15.016 12.6836 14.7336 12.2449 14.6691 12.1489C14.5973 12.042 14.5003 11.9352 14.4518 11.8818L14.4389 11.8676L13.7671 11.1233C13.5471 10.8794 13.3195 10.6271 13.1029 10.444C12.8573 10.2364 12.4929 10 11.998 10C11.5032 10 11.1388 10.2364 10.8932 10.444C10.6765 10.6271 10.449 10.8794 10.229 11.1233L9.5572 11.8676L9.54431 11.8818C9.49574 11.9352 9.39881 12.042 9.32698 12.1489C9.2625 12.2449 8.98012 12.6836 9.21785 13.2184C9.45557 13.7532 9.97044 13.8376 10.0849 13.854C10.2124 13.8723 10.3566 13.8719 10.4288 13.8717L10.448 13.8716H10.998V17C10.998 17.5523 11.4458 18 11.998 18ZM7.99805 7C7.99805 7.55229 8.44576 8 8.99805 8H14.998C15.5503 8 15.998 7.55229 15.998 7C15.998 6.44771 15.5503 6 14.998 6H8.99805C8.44576 6 7.99805 6.44771 7.99805 7Z',
  d7: 'M12.0553 22.25H12.0552H11.9409H11.9408C9.75015 22.25 8.02948 22.25 6.68607 22.0694C5.30941 21.8843 4.21716 21.4973 3.35896 20.6391C2.50076 19.7809 2.11373 18.6886 1.92864 17.312C1.74802 15.9686 1.74803 14.2479 1.74805 12.0572V12.0572V11.9428V11.9428C1.74803 9.75211 1.74802 8.03144 1.92864 6.68802C2.11373 5.31137 2.50076 4.21911 3.35896 3.36091C4.21716 2.50271 5.30941 2.11568 6.68607 1.93059C8.02948 1.74998 9.75015 1.74999 11.9408 1.75H12.0552C14.2459 1.74999 15.9666 1.74998 17.31 1.93059C18.6867 2.11568 19.7789 2.50271 20.6371 3.36091C21.4953 4.21911 21.8824 5.31137 22.0675 6.68802C22.2481 8.03144 22.2481 9.7521 22.248 11.9428V12.0572C22.2481 14.2479 22.2481 15.9686 22.0675 17.312C21.8824 18.6886 21.4953 19.7809 20.6371 20.6391C19.7789 21.4973 18.6867 21.8843 17.31 22.0694C15.9666 22.25 14.2459 22.25 12.0553 22.25Z',
  d8: 'M12.998 17C12.998 17.5523 12.5503 18 11.998 18C11.4458 18 10.998 17.5523 10.998 17V13.8716H10.448L10.4288 13.8717C10.3566 13.8719 10.2124 13.8723 10.0849 13.854C9.97044 13.8376 9.45557 13.7532 9.21785 13.2184C8.98012 12.6836 9.2625 12.2449 9.32698 12.1489C9.39881 12.042 9.49574 11.9352 9.54431 11.8818L9.5572 11.8676L10.229 11.1233C10.449 10.8794 10.6765 10.6271 10.8932 10.444C11.1388 10.2364 11.5032 10 11.998 10C12.4929 10 12.8573 10.2364 13.1029 10.444C13.3195 10.6271 13.5471 10.8794 13.7671 11.1233L14.4389 11.8676L14.4518 11.8818C14.5003 11.9352 14.5973 12.042 14.6691 12.1489C14.7336 12.2449 15.016 12.6836 14.7782 13.2184C14.5405 13.7532 14.0257 13.8376 13.9112 13.854C13.7837 13.8723 13.6395 13.8719 13.5673 13.8717L13.5481 13.8716H12.998V17ZM8.99805 8C8.44576 8 7.99805 7.55229 7.99805 7C7.99805 6.44771 8.44576 6 8.99805 6H14.998C15.5503 6 15.998 6.44771 15.998 7C15.998 7.55229 15.5503 8 14.998 8H8.99805Z',
  d9: 'M21 21H3V3H21V21Z',
  d10: 'M8.00391 7.00391H16M9.50391 12.1876L12.0015 10.0023L14.5 12.1916M12.0015 17.0039V10.695',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.75 12.4355V16.875H11.25V12.4355L9.96852 13.4607L9.03148 12.2893L12 9.91453L14.9685 12.2893L14.0315 13.4607L12.75 12.4355ZM15 7.125V8.625H9V7.125H15Z',
};

export const IconUploadSquare02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-stroke-rounded IconUploadSquare02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-duotone-rounded IconUploadSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-twotone-rounded IconUploadSquare02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-solid-rounded IconUploadSquare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-bulk-rounded IconUploadSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-stroke-sharp IconUploadSquare02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-02-solid-sharp IconUploadSquare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUploadSquare02: TheIconSelfPack = {
  name: 'UploadSquare02',
  StrokeRounded: IconUploadSquare02StrokeRounded,
  DuotoneRounded: IconUploadSquare02DuotoneRounded,
  TwotoneRounded: IconUploadSquare02TwotoneRounded,
  SolidRounded: IconUploadSquare02SolidRounded,
  BulkRounded: IconUploadSquare02BulkRounded,
  StrokeSharp: IconUploadSquare02StrokeSharp,
  SolidSharp: IconUploadSquare02SolidSharp,
};
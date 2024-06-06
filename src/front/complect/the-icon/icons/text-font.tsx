import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 19L11.1069 10.7479C9.76348 6.91597 9.09177 5 8 5C6.90823 5 6.23652 6.91597 4.89309 10.7479L2 19M4.5 12H11.5',
  d2: 'M21.9692 13.9392V18.4392M21.9692 13.9392C22.0164 13.1161 22.0182 12.4891 21.9194 11.9773C21.6864 10.7709 20.4258 10.0439 19.206 9.89599C18.0385 9.75447 17.1015 10.055 16.1535 11.4363M21.9692 13.9392L19.1256 13.9392C18.6887 13.9392 18.2481 13.9603 17.8272 14.0773C15.2545 14.7925 15.4431 18.4003 18.0233 18.845C18.3099 18.8944 18.6025 18.9156 18.8927 18.9026C19.5703 18.8724 20.1955 18.545 20.7321 18.1301C21.3605 17.644 21.9692 16.9655 21.9692 15.9392V13.9392Z',
  d3: 'M16.3516 16.5C16.3516 15.1193 17.4709 14 18.8516 14H22.3516V15.5714C22.3516 17.465 20.8166 19 18.923 19C17.5347 19 16.3516 17.9186 16.3516 16.5Z',
  d4: 'M8.35252 5C9.44429 5 10.116 6.91597 11.4595 10.7479L11.8984 12H4.80664L5.24561 10.7479C6.58904 6.91597 7.26076 5 8.35252 5Z',
  d5: 'M14.3516 19L11.4585 10.7479C10.115 6.91597 9.44333 5 8.35156 5C7.25979 5 6.58808 6.91597 5.24465 10.7479L2.35156 19',
  d6: 'M4.85156 12H11.8516',
  d7: 'M22.3188 14.0329V18.5329M22.3188 14.0329C22.366 13.2098 22.3678 12.5828 22.269 12.071C22.036 10.8646 20.7754 10.1376 19.5556 9.98974C18.3881 9.84822 17.4511 10.1487 16.5031 11.53M22.3188 14.0329H19.4752C19.0383 14.0329 18.5977 14.054 18.1768 14.171C15.6041 14.8862 15.7927 18.494 18.3729 18.9387C18.6595 18.9881 18.9521 19.0093 19.2423 18.9963C19.9199 18.9661 20.5451 18.6387 21.0817 18.2238C21.7101 17.7377 22.3188 17.0592 22.3188 16.0329V14.0329Z',
  d8: 'M13.9821 19L11.0933 10.7479C9.75191 6.91597 9.0812 5 7.99106 5C6.90092 5 6.23021 6.91597 4.88878 10.7479L2 19',
  d9: 'M4.49609 12H11.4857',
  d10: 'M21.9455 14.0331V18.5331M21.9455 14.0331C21.9927 13.21 22.0442 12.5882 21.9455 12.0763C21.7129 10.8699 20.857 10.0372 19.191 9.97963C17.9261 9.93596 16.9753 10.0583 16.1728 11.4997M21.9455 14.0331L19.1213 13.9721C18.6851 13.9721 18.1806 13.9861 17.7603 14.1031C15.3319 14.7792 15.4291 18.4942 18.0055 18.9389C18.2917 18.9882 18.5838 19.0094 18.8736 18.9965C19.5502 18.9662 20.1745 18.6389 20.7102 18.2239C21.2323 17.7636 21.9455 17.0593 21.9455 16.0331V14.0331Z',
  d11: 'M5.16348 13L2.94396 19.3308C2.76124 19.852 2.19061 20.1264 1.66943 19.9437C1.14824 19.761 0.873867 19.1903 1.05659 18.6692L3.97554 10.3433C4.62537 8.48967 5.14504 7.00734 5.64428 5.99476C5.89751 5.48115 6.18262 5.00853 6.53308 4.65511C6.90398 4.28108 7.39226 4 8.00027 4C8.60828 4 9.09656 4.28108 9.46746 4.65511C9.81792 5.00853 10.103 5.48115 10.3563 5.99476C10.8555 7.00733 11.3752 8.48964 12.025 10.3432L14.944 18.6692C15.1267 19.1903 14.8523 19.761 14.3311 19.9437C13.8099 20.1264 13.2393 19.852 13.0566 19.3308L10.8371 13H5.16348ZM5.86466 11C6.53157 9.09794 7.00524 7.75712 7.4381 6.87919C7.6572 6.43482 7.82869 6.18895 7.95322 6.06338C7.9721 6.04434 7.98772 6.03012 8.00027 6.01961C8.01283 6.03012 8.02845 6.04434 8.04733 6.06338C8.17186 6.18895 8.34335 6.43482 8.56245 6.87919C8.9953 7.75712 9.46898 9.09794 10.1359 11H5.86466ZM8.04062 5.99194C8.04057 5.99226 8.03812 5.99369 8.03344 5.99525C8.03834 5.9924 8.04068 5.99162 8.04062 5.99194ZM7.96711 5.99525C7.96243 5.99369 7.95998 5.99226 7.95992 5.99194C7.95987 5.99162 7.96221 5.9924 7.96711 5.99525Z',
  d12: 'M18.9243 9.00002C18.9492 9.00003 18.9744 9.00004 19 9.00004C19.0256 9.00004 19.0508 9.00003 19.0757 9.00002C19.4657 8.99985 19.7734 8.99971 20.0475 9.04313C21.5451 9.28033 22.7197 10.4549 22.9569 11.9525C23.0003 12.2267 23.0002 12.5343 23 12.9243C23 12.9492 23 12.9745 23 13V13.9991L23 15.5715L23 15.5735V18.5C23 19.0523 22.5523 19.5 22 19.5C21.6832 19.5 21.4008 19.3527 21.2176 19.1229C20.4793 19.6739 19.5635 20 18.5714 20C16.6759 20 15 18.5149 15 16.5C15 14.567 16.567 13 18.5 13H21C21 12.4973 20.9969 12.3624 20.9815 12.2654C20.8799 11.6236 20.3765 11.1202 19.7347 11.0185C19.6376 11.0031 19.5027 11 19 11C18.4973 11 18.3624 11.0031 18.2653 11.0185C17.7519 11.0998 17.3265 11.4384 17.1251 11.9C16.9042 12.4062 16.3148 12.6375 15.8086 12.4166C15.3024 12.1957 15.0711 11.6063 15.292 11.1001C15.7615 10.0241 16.753 9.23311 17.9525 9.04313C18.2266 8.99971 18.5343 8.99985 18.9243 9.00002ZM21 15H18.5C17.6716 15 17 15.6716 17 16.5C17 17.3224 17.6904 18 18.5714 18C19.9122 18 20.9992 16.9136 21 15.573L21 15.5715L21 15Z',
  d13: 'M14.0051 19.2301L8.50275 5H7.50233L2 19.2301',
  d14: 'M4 14.1475H12.0034',
  d15: 'M16.513 12.614C16.5129 11.7596 17.0215 10.0624 19.2661 10.0982C21.5107 10.134 22.085 12.1693 21.9938 13.0507V14.1418M21.9938 14.1418H18.3237C17.6903 14.1969 15.8051 14.7627 16.0443 17.2203C16.2015 17.8341 16.8343 19.0576 18.2701 19.2411C19.5896 19.4096 20.2457 18.7781 20.583 18.5684C21.0512 18.2775 21.9486 17.3657 21.9938 16.1595M21.9938 14.1418V16.1595M21.9938 16.1595V19.998',
  d16: 'M9.13421 4H6.86713L1 19.2687L2.78588 20L4.78276 15H11.2186L13.2141 20L15 19.2687L9.13421 4ZM10.4648 13L8.00067 6.46211L5.53655 13H10.4648Z',
  d17: 'M15.5 12.5C15.5 10.567 17.067 9 19 9H19.25C21.3211 9 23 10.6789 23 12.75L23 20H21V19.2753C20.3027 19.7335 19.4682 20 18.5714 20C16.6759 20 15 18.5149 15 16.5C15 14.567 16.567 13 18.5 13H21V12.75C21 11.7835 20.2165 11 19.25 11H19C18.1716 11 17.5 11.6716 17.5 12.5H15.5ZM21 15H18.5C17.6716 15 17 15.6716 17 16.5C17 17.3223 17.6904 18 18.5714 18C19.9127 18 21 16.9127 21 15.5714V15Z',
};

export const IconTextFontStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-stroke-rounded IconTextFontStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTextFontDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-duotone-rounded IconTextFontDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTextFontTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-twotone-rounded IconTextFontTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFontSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-solid-rounded IconTextFontSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextFontBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-bulk-rounded IconTextFontBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFontStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-stroke-sharp IconTextFontStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
    </TheIconWrapper>
  );
};

export const IconTextFontSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-font-solid-sharp IconTextFontSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextFont: TheIconSelfPack = {
  name: 'TextFont',
  StrokeRounded: IconTextFontStrokeRounded,
  DuotoneRounded: IconTextFontDuotoneRounded,
  TwotoneRounded: IconTextFontTwotoneRounded,
  SolidRounded: IconTextFontSolidRounded,
  BulkRounded: IconTextFontBulkRounded,
  StrokeSharp: IconTextFontStrokeSharp,
  SolidSharp: IconTextFontSolidSharp,
};
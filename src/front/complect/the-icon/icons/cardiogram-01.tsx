import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 21.5C7.25027 21.5 5.3754 21.5 4.06107 20.492C3.6366 20.1665 3.26331 19.7725 2.95492 19.3244C2 17.9371 2 15.9581 2 12C2 8.04195 2 6.06292 2.95491 4.67558C3.26331 4.22752 3.6366 3.8335 4.06107 3.50797C5.3754 2.5 7.25027 2.5 11 2.5L13 2.5C16.7497 2.5 18.6246 2.5 19.9389 3.50797C20.3634 3.8335 20.7367 4.22752 21.0451 4.67558C22 6.06292 22 8.04195 22 12C22 15.9581 22 17.9371 21.0451 19.3244C20.7367 19.7725 20.3634 20.1665 19.9389 20.492C18.6246 21.5 16.7497 21.5 13 21.5H11Z',
  d2: 'M2.5 15H21.5',
  d3: 'M7.00896 18H7H7.00896Z',
  d4: 'M11 18H10.991H11Z',
  d5: 'M7.00896 18H7M11 18H10.991',
  d6: 'M17 10.2C16.5447 10.2 16.0655 10.2282 15.6569 9.97709C15.5011 9.88138 15.3977 9.74907 15.191 9.48446L13.25 7L10.75 11L8.94338 9.26564C8.68722 9.01973 8.43747 8.77042 8.09845 8.67176C7.85189 8.6 7.56792 8.6 7 8.6',
  d7: 'M2.0293 15H21.9711C22 14.1557 22 13.1689 22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95492C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107C2 6.3754 2 8.25027 2 12L2.0293 15Z',
  d8: 'M22.6023 15.8467C22.5132 15.75 22.3639 15.75 22.0655 15.75L1.93332 15.75C1.63485 15.75 1.48561 15.75 1.3965 15.8467C1.30739 15.9434 1.31928 16.0889 1.34306 16.3801C1.35204 16.4901 1.36189 16.5977 1.37268 16.7028C1.4981 17.9247 1.7577 18.9087 2.33651 19.7497C2.68871 20.2613 3.11616 20.713 3.60406 21.0872C4.41179 21.7066 5.36066 21.9853 6.53144 22.1191C7.67578 22.25 9.11726 22.25 10.9518 22.25H13.047C14.8815 22.25 16.323 22.25 17.4674 22.1191C18.6381 21.9853 19.587 21.7066 20.3947 21.0872C20.8826 20.713 21.3101 20.2613 21.6623 19.7497C22.2411 18.9087 22.5007 17.9247 22.6261 16.7028C22.6369 16.5977 22.6467 16.4901 22.6557 16.3801L22.6557 16.3801C22.6795 16.0889 22.6914 15.9434 22.6023 15.8467ZM6.99976 18C6.44748 18 5.99976 18.4477 5.99976 19C5.99976 19.5523 6.44748 20 6.99976 20H7.00873C7.56101 20 8.00873 19.5523 8.00873 19C8.00873 18.4477 7.56101 18 7.00873 18H6.99976ZM10.9908 18C10.4385 18 9.9908 18.4477 9.9908 19C9.9908 19.5523 10.4385 20 10.9908 20H10.9998C11.552 20 11.9998 19.5523 11.9998 19C11.9998 18.4477 11.552 18 10.9998 18H10.9908Z',
  d9: 'M17.468 1.88085C18.6387 2.01475 19.5876 2.29337 20.3953 2.91283C20.8832 3.287 21.3107 3.73866 21.6629 4.25034C22.2417 5.09127 22.5013 6.07528 22.6267 7.2972C22.75 8.49844 22.75 10.0143 22.75 11.9568V12.0432V12.0433C22.75 12.6179 22.75 13.1551 22.7468 13.6579C22.745 13.9364 22.7442 14.0756 22.6564 14.1628C22.5687 14.25 22.4288 14.25 22.1491 14.25L1.85094 14.25C1.57121 14.25 1.43134 14.25 1.34359 14.1628C1.25584 14.0756 1.25495 13.9364 1.25319 13.6579C1.25 13.1554 1.25 12.6184 1.25 12.0443V12.0432V11.9568C1.24999 10.0143 1.24999 8.49844 1.37328 7.2972C1.4987 6.07528 1.7583 5.09127 2.33711 4.25035C2.68931 3.73866 3.11677 3.287 3.60466 2.91283C4.41239 2.29338 5.36127 2.01475 6.53204 1.88085C7.67639 1.74998 9.11788 1.74999 10.9525 1.75H10.9525L13.0475 1.75C14.8821 1.74999 16.3236 1.74998 17.468 1.88085ZM14.038 5.38436C13.8372 5.12726 13.5235 4.98431 13.1977 5.00137C12.8719 5.01843 12.5749 5.19334 12.402 5.47L10.5545 8.42607L9.58543 7.49532C9.36327 7.27904 8.95208 6.87871 8.37789 6.7116C7.99004 6.59872 7.567 6.59929 7.10413 6.59991L7 6.6C6.44772 6.6 6 7.04772 6 7.6C6 8.15229 6.44772 8.6 7 8.6C7.63208 8.6 7.74263 8.6097 7.81902 8.63193C7.83178 8.63564 7.86781 8.64875 7.94176 8.70571C8.02308 8.76835 8.10285 8.84494 8.23736 8.97408L8.23738 8.97411L10.0575 10.7214C10.2747 10.93 10.5744 11.0295 10.8733 10.9924C11.1722 10.9552 11.4384 10.7854 11.598 10.53L13.3411 7.74098L14.4438 9.15261C14.608 9.36442 14.8181 9.63544 15.1333 9.82912C15.7684 10.2193 16.5 10.2075 16.8855 10.2013H16.8855L16.8856 10.2013C16.9281 10.2006 16.9665 10.2 17 10.2C17.5523 10.2 18 9.75229 18 9.2C18 8.64772 17.5523 8.2 17 8.2C16.9438 8.2 16.8926 8.20023 16.8453 8.20045H16.8453C16.6654 8.20125 16.5429 8.20181 16.4172 8.18837C16.2667 8.17937 16.1481 8.08042 16.1077 8.03207L14.038 5.38436Z',
  d10: 'M20.3953 2.91283C19.5876 2.29337 18.6387 2.01475 17.468 1.88085C16.3236 1.74998 14.8821 1.74999 13.0475 1.75H10.9525C9.11788 1.74999 7.67639 1.74998 6.53204 1.88085C5.36127 2.01475 4.41239 2.29338 3.60466 2.91283C3.11677 3.287 2.68931 3.73866 2.33711 4.25035C1.7583 5.09127 1.4987 6.07528 1.37328 7.2972C1.24999 8.49844 1.24999 10.0143 1.25 11.9568V12.0432C1.25 12.6178 1.25 13.1551 1.25319 13.6579C1.25495 13.9364 1.25584 14.0756 1.34359 14.1628C1.43134 14.25 1.57121 14.25 1.85094 14.25H22.1491C22.4288 14.25 22.5687 14.25 22.6564 14.1628C22.7442 14.0756 22.745 13.9364 22.7468 13.6579C22.75 13.1551 22.75 12.6178 22.75 12.0432V11.9568C22.75 10.0143 22.75 8.49844 22.6267 7.2972C22.5013 6.07528 22.2417 5.09127 21.6629 4.25034C21.3107 3.73866 20.8832 3.287 20.3953 2.91283Z',
  d11: 'M13.1977 5.00137C13.5235 4.98431 13.8372 5.12726 14.038 5.38436L16.1077 8.03207C16.1481 8.08042 16.2667 8.17937 16.4172 8.18837C16.5429 8.20181 16.6654 8.20126 16.8453 8.20045C16.8926 8.20023 16.9438 8.2 17 8.2C17.5523 8.2 18 8.64772 18 9.2C18 9.75229 17.5523 10.2 17 10.2C16.9664 10.2 16.9281 10.2006 16.8855 10.2013C16.5 10.2075 15.7684 10.2193 15.1333 9.82912C14.8181 9.63544 14.608 9.36442 14.4438 9.15261L13.3411 7.74098L11.598 10.53C11.4384 10.7854 11.1722 10.9552 10.8733 10.9924C10.5744 11.0295 10.2747 10.93 10.0575 10.7214L8.23738 8.97411C8.10286 8.84495 8.02308 8.76835 7.94176 8.70571C7.86781 8.64875 7.83178 8.63564 7.81902 8.63193C7.74263 8.6097 7.63208 8.6 7 8.6C6.44772 8.6 6 8.15229 6 7.6C6 7.04772 6.44772 6.6 7 6.6L7.10413 6.59991C7.567 6.59929 7.99004 6.59872 8.37789 6.7116C8.95208 6.87871 9.36327 7.27904 9.58543 7.49532L10.5545 8.42607L12.402 5.47C12.5749 5.19334 12.8719 5.01843 13.1977 5.00137Z',
  d12: 'M6.02165 18.0146H6.0127M10.0096 18.0146H10.0006',
  d13: 'M7.01172 9.00588H9.01016L11.0086 11.0078L13.007 7.00391L15.0055 10.0069L17.0039 9.98393',
  d14: 'M21.9986 15.0088L21.9916 21.0046C21.9916 21.0102 21.9871 21.0146 21.9816 21.0146H2.02269C2.01717 21.0146 2.0127 21.0102 2.0127 21.0046V15.0088M21.9986 15.0088L22.0127 3.02565C22.0127 3.02011 22.0082 3.01562 22.0027 3.01562H2.02269C2.01717 3.01562 2.0127 3.02011 2.0127 3.02563V15.0088M21.9986 15.0088H2.0127',
  d15: 'M22.75 15.75H1.25V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V15.75ZM5 17.75H7.00896V19.75H5V17.75ZM8.99104 17.75H11V19.75H8.99104V17.75Z',
  d16: 'M2.00002 2.25C1.8011 2.25 1.61033 2.32901 1.46968 2.46966C1.32902 2.61032 1.25 2.80108 1.25 3V14.25H22.75V3.00046C22.75 2.58626 22.4142 2.25047 22 2.25046L2.00002 2.25ZM13.8262 5.6953C13.6285 5.3987 13.2878 5.22979 12.932 5.25194C12.5762 5.27409 12.2591 5.48396 12.0997 5.80279L10.7202 8.56184L9.70125 7.5429C9.51371 7.35536 9.25936 7.25001 8.99414 7.25001H6.99414V9.25001H8.57993L10.287 10.9571C10.5143 11.1844 10.837 11.2886 11.1543 11.2371C11.4716 11.1856 11.7448 10.9847 11.8886 10.6972L13.1179 8.23848L14.1621 9.80471C14.3498 10.0863 14.6672 10.2538 15.0056 10.2499L17.0056 10.227L16.9827 8.22717L15.5252 8.24386L13.8262 5.6953Z',
};

export const IconCardiogram01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-stroke-rounded IconCardiogram01StrokeRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiogram01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-duotone-rounded IconCardiogram01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiogram01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-twotone-rounded IconCardiogram01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCardiogram01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-solid-rounded IconCardiogram01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCardiogram01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-bulk-rounded IconCardiogram01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCardiogram01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-stroke-sharp IconCardiogram01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
    </TheIconWrapper>
  );
};

export const IconCardiogram01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cardiogram-01-solid-sharp IconCardiogram01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCardiogram01: TheIconSelfPack = {
  name: 'Cardiogram01',
  StrokeRounded: IconCardiogram01StrokeRounded,
  DuotoneRounded: IconCardiogram01DuotoneRounded,
  TwotoneRounded: IconCardiogram01TwotoneRounded,
  SolidRounded: IconCardiogram01SolidRounded,
  BulkRounded: IconCardiogram01BulkRounded,
  StrokeSharp: IconCardiogram01StrokeSharp,
  SolidSharp: IconCardiogram01SolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 19C10.6675 19.6224 8.91707 20 7 20C5.93408 20 4.91969 19.8833 4 19.6726C3.4088 19.5372 3.11319 19.4695 2.75898 19.1892C2.55696 19.0294 2.30483 18.7129 2.19412 18.4803C2 18.0725 2 17.677 2 16.886V6.11397C2 5.12914 3.04003 4.45273 4 4.6726C4.91969 4.88325 5.93408 5 7 5C8.91707 5 10.6675 4.62236 12 4C13.3325 3.37764 15.0829 3 17 3C18.0659 3 19.0803 3.11675 20 3.3274C20.5912 3.46281 20.8868 3.53051 21.241 3.81079C21.443 3.97064 21.6952 4.28705 21.8059 4.51966C22 4.92751 22 5.32299 22 6.11397V12',
  d2: 'M15 18H22',
  d3: 'M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z',
  d4: 'M5.5 13L5.5 13.009',
  d5: 'M18.5 10.9922L18.5 11.0012',
  d6: 'M7 20C8.91707 20 10.6675 19.6224 12 19C13.3325 18.3776 15.0829 18 17 18C18.0659 18 19.0803 18.1167 20 18.3274C20.96 18.5473 22 17.8709 22 16.886V6.11397C22 4.62036 21.5817 3.68968 20 3.3274C19.0803 3.11675 18.0659 3 17 3C15.0829 3 13.3325 3.37764 12 4C10.6675 4.62236 8.91707 5 7 5C5.93408 5 4.91969 4.88325 4 4.6726C3.04003 4.45273 2 5.12914 2 6.11397V16.886C2 18.4264 2.49957 19.3289 4 19.6726C4.91969 19.8833 5.93408 20 7 20ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z',
  d7: 'M16.8748 2.75C14.8663 2.75 13.0046 3.14454 11.5574 3.82046C10.3395 4.38927 8.7004 4.75 6.87476 4.75C5.86275 4.75 4.90464 4.63907 4.0422 4.44153C2.71576 4.13772 1.12476 5.04678 1.12476 6.61397V17.386C1.12476 18.2216 1.25718 19.0082 1.69119 19.6488C2.14 20.3111 2.83164 20.7031 3.70731 20.9037C4.68424 21.1274 5.75492 21.25 6.87476 21.25C8.88325 21.25 10.7449 20.8555 12.1921 20.1795C12.4344 20.0664 12.5556 20.0098 12.6022 19.9392C12.6275 19.901 12.6351 19.883 12.645 19.8382C12.6631 19.7556 12.6127 19.6098 12.5117 19.3182C12.423 19.0618 12.3748 18.7866 12.3748 18.5C12.3748 17.1193 13.494 16 14.8748 16H21.8748C22.2453 16 22.4306 16 22.513 15.9336C22.5329 15.9175 22.5423 15.9082 22.5583 15.8882C22.6248 15.8058 22.6248 15.6548 22.6248 15.3528V6.61397C22.6248 5.81712 22.5175 5.03453 22.0966 4.38745C21.6573 3.71217 20.9593 3.30637 20.0422 3.09633C19.0653 2.87257 17.9946 2.75 16.8748 2.75ZM11.8748 8.75C10.0798 8.75 8.62476 10.2051 8.62476 12C8.62476 13.7949 10.0798 15.25 11.8748 15.25C13.6697 15.25 15.1248 13.7949 15.1248 12C15.1248 10.2051 13.6697 8.75 11.8748 8.75ZM6.37476 13C6.37476 12.4477 5.92704 12 5.37476 12C4.82247 12 4.37476 12.4477 4.37476 13V13.009C4.37476 13.5613 4.82247 14.009 5.37476 14.009C5.92704 14.009 6.37476 13.5613 6.37476 13.009V13Z',
  d8: 'M13.8748 18.5C13.8748 17.9477 14.3225 17.5 14.8748 17.5H21.8748C22.427 17.5 22.8748 17.9477 22.8748 18.5C22.8748 19.0523 22.427 19.5 21.8748 19.5H14.8748C14.3225 19.5 13.8748 19.0523 13.8748 18.5Z',
  d9: 'M11.5574 3.82046C13.0046 3.14454 14.8663 2.75 16.8748 2.75C17.9946 2.75 19.0653 2.87257 20.0422 3.09633C20.9593 3.30637 21.6573 3.71217 22.0966 4.38745C22.5175 5.03453 22.6248 5.81712 22.6248 6.61397V15.3528C22.6248 15.6548 22.6248 15.8058 22.5583 15.8882C22.5423 15.9082 22.5329 15.9175 22.513 15.9336C22.4306 16 22.2453 16 21.8748 16H14.8748C13.494 16 12.3748 17.1193 12.3748 18.5C12.3748 18.7866 12.423 19.0618 12.5117 19.3182C12.6127 19.6098 12.6631 19.7556 12.645 19.8382C12.6351 19.883 12.6275 19.901 12.6022 19.9392C12.5556 20.0098 12.4344 20.0664 12.1921 20.1795C10.7449 20.8555 8.88325 21.25 6.87476 21.25C5.75492 21.25 4.68424 21.1274 3.70731 20.9037C2.83164 20.7031 2.14 20.3111 1.69119 19.6488C1.25718 19.0082 1.12476 18.2216 1.12476 17.386V6.61397C1.12476 5.04678 2.71576 4.13772 4.0422 4.44153C4.90464 4.63907 5.86275 4.75 6.87476 4.75C8.7004 4.75 10.3395 4.38927 11.5574 3.82046Z',
  d10: 'M8.62476 12C8.62476 10.2051 10.0798 8.75 11.8748 8.75C13.6697 8.75 15.1248 10.2051 15.1248 12C15.1248 13.7949 13.6697 15.25 11.8748 15.25C10.0798 15.25 8.62476 13.7949 8.62476 12Z',
  d11: 'M5.37476 12C5.92704 12 6.37476 12.4477 6.37476 13V13.009C6.37476 13.5613 5.92704 14.009 5.37476 14.009C4.82247 14.009 4.37476 13.5613 4.37476 13.009L4.37476 13C4.37476 12.4477 4.82247 12 5.37476 12Z',
  d12: 'M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.5 20.5 2 19.5V4.5C4.5 5.5 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C20 3.5 22 4.5 22 4.5V12.5',
  d13: 'M15 18.5H22',
  d14: 'M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z',
  d15: 'M5.5 13.5L5.5 13.509',
  d16: 'M18.5 11.4922L18.5 11.5012',
  d17: 'M22.75 4.03647L22.2169 3.7735C22.1469 3.7419 22.047 3.69853 21.9192 3.64739C21.6636 3.54516 21.2956 3.41159 20.831 3.27886C19.9028 3.01364 18.5827 2.75 17 2.75C14.9915 2.75 13.1298 3.14454 11.6826 3.82046C10.4648 4.38927 8.82565 4.75 7 4.75L6.98161 4.75C5.97319 4.75004 4.64464 4.75008 2.27854 3.80364L1.25 3.39223V20.0078L1.72146 20.1964C4.34095 21.2442 5.87882 21.25 7 21.25C9.00849 21.25 10.8702 20.8555 12.3174 20.1795C12.8795 19.917 13.5314 19.6988 14.25 19.5399V17.25H22.75V4.03647ZM8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12ZM6.5 14.009V12H4.5V14.009H6.5Z',
  d18: 'M15.75 20.75V18.75H22.75V20.75H15.75Z',
};

export const IconMoneyRemove02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-stroke-rounded IconMoneyRemove02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMoneyRemove02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-duotone-rounded IconMoneyRemove02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMoneyRemove02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-twotone-rounded IconMoneyRemove02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMoneyRemove02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-solid-rounded IconMoneyRemove02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMoneyRemove02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-bulk-rounded IconMoneyRemove02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyRemove02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-stroke-sharp IconMoneyRemove02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyRemove02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-remove-02-solid-sharp IconMoneyRemove02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyRemove02: TheIconSelfPack = {
  name: 'MoneyRemove02',
  StrokeRounded: IconMoneyRemove02StrokeRounded,
  DuotoneRounded: IconMoneyRemove02DuotoneRounded,
  TwotoneRounded: IconMoneyRemove02TwotoneRounded,
  SolidRounded: IconMoneyRemove02SolidRounded,
  BulkRounded: IconMoneyRemove02BulkRounded,
  StrokeSharp: IconMoneyRemove02StrokeSharp,
  SolidSharp: IconMoneyRemove02SolidSharp,
};
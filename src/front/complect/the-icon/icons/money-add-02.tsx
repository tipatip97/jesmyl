import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 19C10.6675 19.6224 8.91707 20 7 20C5.93408 20 4.91969 19.8833 4 19.6726C3.4088 19.5372 3.11319 19.4695 2.75898 19.1892C2.55696 19.0294 2.30483 18.7129 2.19412 18.4803C2 18.0725 2 17.677 2 16.886V6.11397C2 5.12914 3.04003 4.45273 4 4.6726C4.91969 4.88325 5.93408 5 7 5C8.91707 5 10.6675 4.62236 12 4C13.3325 3.37764 15.0829 3 17 3C18.0659 3 19.0803 3.11675 20 3.3274C20.5912 3.46281 20.8868 3.53051 21.241 3.81079C21.443 3.97064 21.6952 4.28705 21.8059 4.51966C22 4.92751 22 5.32299 22 6.11397V11.5',
  d2: 'M18.5 21L18.5 14M15 17.5H22',
  d3: 'M14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5Z',
  d4: 'M5.5 12.5L5.5 12.509',
  d5: 'M7 20C8.91707 20 10.6675 19.6224 12 19C13.3325 18.3776 15.0829 18 17 18C18.0659 18 19.0803 18.1167 20 18.3274C20.96 18.5473 22 17.8709 22 16.886V6.11397C22 4.62036 21.5817 3.68968 20 3.3274C19.0803 3.11675 18.0659 3 17 3C15.0829 3 13.3325 3.37764 12 4C10.6675 4.62236 8.91707 5 7 5C5.93408 5 4.91969 4.88325 4 4.6726C3.04003 4.45273 2 5.12914 2 6.11397V16.886C2 18.4264 2.49957 19.3289 4 19.6726C4.91969 19.8833 5.93408 20 7 20ZM12 14C13.3807 14 14.5 12.8807 14.5 11.5C14.5 10.1193 13.3807 9 12 9C10.6193 9 9.5 10.1193 9.5 11.5C9.5 12.8807 10.6193 14 12 14Z',
  d6: 'M18.3748 12.875C18.927 12.875 19.3748 13.3227 19.3748 13.875V16.375H21.8748C22.427 16.375 22.8748 16.8227 22.8748 17.375C22.8748 17.9273 22.427 18.375 21.8748 18.375H19.3748V20.875C19.3748 21.4273 18.927 21.875 18.3748 21.875C17.8225 21.875 17.3748 21.4273 17.3748 20.875L17.3748 18.375H14.8748C14.3225 18.375 13.8748 17.9273 13.8748 17.375C13.8748 16.8227 14.3225 16.375 14.8748 16.375H17.3748L17.3748 13.875C17.3748 13.3227 17.8225 12.875 18.3748 12.875Z',
  d7: 'M16.8748 2.125C14.8663 2.125 13.0046 2.51954 11.5574 3.19546C10.3395 3.76427 8.7004 4.125 6.87476 4.125C5.86275 4.125 4.90464 4.01407 4.0422 3.81653C2.71576 3.51272 1.12476 4.42178 1.12476 5.98897V16.761C1.12476 17.5966 1.25718 18.3832 1.69119 19.0238C2.14 19.6861 2.83164 20.0781 3.70731 20.2787C4.68424 20.5024 5.75492 20.625 6.87476 20.625C8.88325 20.625 10.7449 20.2305 12.1921 19.5545L12.213 19.5448C12.5957 19.3675 12.7871 19.2789 12.8306 19.165C12.8741 19.0511 12.7753 18.8219 12.5778 18.3635C12.4471 18.0603 12.3748 17.7261 12.3748 17.375C12.3748 15.9943 13.494 14.875 14.8748 14.875H15.2748C15.5576 14.875 15.699 14.875 15.7869 14.7871C15.8748 14.6993 15.8748 14.5578 15.8748 14.275V13.875C15.8748 12.4943 16.994 11.375 18.3748 11.375C19.7555 11.375 20.8748 12.4943 20.8748 13.875V14.275C20.8748 14.5578 20.8748 14.6993 20.9626 14.7871C21.0505 14.875 21.1919 14.875 21.4748 14.875H21.8748C22.2453 14.875 22.4306 14.875 22.513 14.8086C22.5329 14.7925 22.5423 14.7832 22.5583 14.7632C22.6248 14.6808 22.6248 14.5298 22.6248 14.2278V5.98897C22.6248 5.19212 22.5175 4.40953 22.0966 3.76245C21.6573 3.08717 20.9593 2.68137 20.0422 2.47133C19.0653 2.24757 17.9946 2.125 16.8748 2.125ZM11.8748 8.125C10.0798 8.125 8.62476 9.58007 8.62476 11.375C8.62476 13.1699 10.0798 14.625 11.8748 14.625C13.6697 14.625 15.1248 13.1699 15.1248 11.375C15.1248 9.58007 13.6697 8.125 11.8748 8.125ZM6.37476 12.375C6.37476 11.8227 5.92704 11.375 5.37476 11.375C4.82247 11.375 4.37476 11.8227 4.37476 12.375V12.384C4.37476 12.9363 4.82247 13.384 5.37476 13.384C5.92704 13.384 6.37476 12.9363 6.37476 12.384V12.375Z',
  d8: 'M11.5574 3.19546C13.0046 2.51954 14.8663 2.125 16.8748 2.125C17.9946 2.125 19.0653 2.24757 20.0422 2.47133C20.9593 2.68137 21.6573 3.08717 22.0966 3.76245C22.5175 4.40953 22.6248 5.19212 22.6248 5.98897V14.2278C22.6248 14.5298 22.6248 14.6808 22.5583 14.7632C22.5423 14.7832 22.5329 14.7925 22.513 14.8086C22.4306 14.875 22.2453 14.875 21.8748 14.875H21.4748C21.1919 14.875 21.0505 14.875 20.9626 14.7871C20.8748 14.6993 20.8748 14.5578 20.8748 14.275V13.875C20.8748 12.4943 19.7555 11.375 18.3748 11.375C16.994 11.375 15.8748 12.4943 15.8748 13.875V14.275C15.8748 14.5578 15.8748 14.6993 15.7869 14.7871C15.699 14.875 15.5576 14.875 15.2748 14.875H14.8748C13.494 14.875 12.3748 15.9943 12.3748 17.375C12.3748 17.7261 12.4471 18.0603 12.5778 18.3635C12.7753 18.8219 12.8741 19.0511 12.8306 19.165C12.7871 19.2789 12.5957 19.3675 12.213 19.5448C12.206 19.5481 12.1991 19.5513 12.1921 19.5545C10.7449 20.2305 8.88325 20.625 6.87476 20.625C5.75492 20.625 4.68424 20.5024 3.70731 20.2787C2.83164 20.0781 2.14 19.6861 1.69119 19.0238C1.25718 18.3832 1.12476 17.5966 1.12476 16.761V5.98897C1.12476 4.42178 2.71576 3.51272 4.0422 3.81653C4.90464 4.01407 5.86275 4.125 6.87476 4.125C8.7004 4.125 10.3395 3.76427 11.5574 3.19546Z',
  d9: 'M8.62476 11.375C8.62476 9.58007 10.0798 8.125 11.8748 8.125C13.6697 8.125 15.1248 9.58007 15.1248 11.375C15.1248 13.1699 13.6697 14.625 11.8748 14.625C10.0798 14.625 8.62476 13.1699 8.62476 11.375Z',
  d10: 'M5.37476 11.375C5.92704 11.375 6.37476 11.8227 6.37476 12.375V12.384C6.37476 12.9363 5.92704 13.384 5.37476 13.384C4.82247 13.384 4.37476 12.9363 4.37476 12.384L4.37476 12.375C4.37476 11.8227 4.82247 11.375 5.37476 11.375Z',
  d11: 'M12 19C10.6675 19.6224 8.91707 20 7 20C5.93408 20 4.5 20 2 19V4C4.5 5 5.93408 5 7 5C8.91707 5 10.6675 4.62236 12 4C13.3325 3.37764 15.0829 3 17 3C20 3 22 4 22 4V11.5',
  d12: 'M22.75 3.03647L22.2169 2.7735C22.1469 2.7419 22.047 2.69853 21.9192 2.64739C21.6636 2.54516 21.2956 2.41159 20.831 2.27886C19.9028 2.01364 18.5827 1.75 17 1.75C14.9915 1.75 13.1298 2.14454 11.6826 2.82046C10.4648 3.38927 8.82565 3.75 7 3.75L6.98161 3.75C5.97319 3.75004 4.64464 3.75008 2.27854 2.80364L1.25 2.39223V19.0078L1.72146 19.1964C4.34095 20.2442 5.87882 20.25 7 20.25C9.00849 20.25 10.8702 19.8555 12.3174 19.1795C12.8795 18.917 13.5314 18.6988 14.25 18.5399V16.25H16.75V13.75H21.75V16.25H22.75V3.03647ZM8.75 11C8.75 9.20507 10.2051 7.75 12 7.75C13.7949 7.75 15.25 9.20507 15.25 11C15.25 12.7949 13.7949 14.25 12 14.25C10.2051 14.25 8.75 12.7949 8.75 11ZM6.5 13.009V11H4.5V13.009H6.5Z',
  d13: 'M20.25 19.75V22.25L18.25 22.25L18.25 19.75H15.75V17.75H18.25L18.25 15.25H20.25V17.75H22.75V19.75H20.25Z',
};

export const IconMoneyAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-stroke-rounded IconMoneyAdd02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoneyAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-duotone-rounded IconMoneyAdd02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconMoneyAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-twotone-rounded IconMoneyAdd02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoneyAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-solid-rounded IconMoneyAdd02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-bulk-rounded IconMoneyAdd02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-stroke-sharp IconMoneyAdd02StrokeSharp"
    >
      <path 
        d={d.d11} 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-02-solid-sharp IconMoneyAdd02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyAdd02: TheIconSelfPack = {
  name: 'MoneyAdd02',
  StrokeRounded: IconMoneyAdd02StrokeRounded,
  DuotoneRounded: IconMoneyAdd02DuotoneRounded,
  TwotoneRounded: IconMoneyAdd02TwotoneRounded,
  SolidRounded: IconMoneyAdd02SolidRounded,
  BulkRounded: IconMoneyAdd02BulkRounded,
  StrokeSharp: IconMoneyAdd02StrokeSharp,
  SolidSharp: IconMoneyAdd02SolidSharp,
};
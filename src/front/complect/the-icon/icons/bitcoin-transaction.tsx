import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12C21 7.02944 16.9706 3 12 3C11.3126 3 10.6432 3.07706 10 3.22302M16.9767 19.5V16M16.9767 19.5H20.5M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C12.6874 21 13.3568 20.9229 14 20.777M7 4.51555V8M7 4.51555H3.5',
  d2: 'M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5',
  d3: 'M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z',
  d4: 'M12 4C11.3876 4 10.7924 4.06863 10.2213 4.19823C9.68269 4.32044 9.147 3.9829 9.02479 3.4443C8.90258 2.90571 9.24012 2.37002 9.77871 2.24781C10.4941 2.08549 11.2377 2 12 2C17.5228 2 22 6.47715 22 12C22 14.482 21.0953 16.7526 19.5994 18.5H20.5C21.0523 18.5 21.5 18.9477 21.5 19.5C21.5 20.0523 21.0523 20.5 20.5 20.5H16.9767C16.4244 20.5 15.9767 20.0523 15.9767 19.5V16C15.9767 15.4477 16.4244 15 16.9767 15C17.529 15 17.9767 15.4477 17.9767 16V17.3181C19.2361 15.904 20 14.0411 20 12C20 7.58172 16.4183 4 12 4ZM2.5 4.51555C2.5 3.96326 2.94772 3.51555 3.5 3.51555H7C7.55228 3.51555 8 3.96326 8 4.51555V8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V6.70816C4.75451 8.11907 4 9.97153 4 12C4 16.4183 7.58172 20 12 20C12.6124 20 13.2076 19.9314 13.7787 19.8018C14.3173 19.6796 14.853 20.0171 14.9752 20.5557C15.0974 21.0943 14.7599 21.63 14.2213 21.7522C13.5059 21.9145 12.7623 22 12 22C6.47715 22 2 17.5228 2 12C2 9.52533 2.89933 7.26091 4.3873 5.51555H3.5C2.94772 5.51555 2.5 5.06783 2.5 4.51555Z',
  d5: 'M12 7C12.5523 7 13 7.44772 13 8V8.33333H13.5625C14.6924 8.33333 15.5 9.29054 15.5 10.3333V11C15.5 11.3547 15.4066 11.6994 15.2388 12C15.4066 12.3006 15.5 12.6453 15.5 13V13.6667C15.5 14.7095 14.6924 15.6667 13.5625 15.6667H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V15.6667H9.5C8.94772 15.6667 8.5 15.219 8.5 14.6667C8.5 14.1354 8.91433 13.7009 9.4375 13.6686L9.4375 12.0002L9.4375 10.3314C8.91433 10.2991 8.5 9.86463 8.5 9.33333C8.5 8.78105 8.94772 8.33333 9.5 8.33333H11V8C11 7.44772 11.4477 7 12 7ZM11.4375 10.3333V11H13.5V10.3333L11.4375 10.3333ZM11.4375 13L11.4375 13.6667H13.5V13H11.4375Z',
  d6: 'M10.6987 3.10599C20.8498 2.19061 23.8294 13.7662 18.1773 18.5793M17.0069 16.0258L16.9334 19.5816L20.5066 19.5185M13.3003 21.0155C3.19806 21.8187 0.169588 10.3553 5.82166 5.54221M6.99207 8.09576L7.06564 4.53989H3.45235',
  d7: 'M10.4431 14.6873V9.34448M12.0068 9.34448V8.00879M12.0068 16.023V14.6873M10.4431 12.0159H13.5704M13.5704 12.0159C14.0886 12.0159 14.5086 12.4644 14.5086 13.0176V13.6855C14.5086 14.2388 14.0886 14.6873 13.5704 14.6873H9.50488M13.5704 12.0159C14.0886 12.0159 14.5086 11.5674 14.5086 11.0141V10.3462C14.5086 9.79299 14.0886 9.34448 13.5704 9.34448H9.50488',
  d8: 'M12 4C11.3876 4 10.7924 4.06863 10.2213 4.19823L9.77871 2.24781C10.4941 2.08549 11.2377 2 12 2C17.5228 2 22 6.47715 22 12C22 14.482 21.0953 16.7526 19.5994 18.5H21.5V20.5H15.9767V15H17.9767V17.3181C19.2361 15.904 20 14.0411 20 12C20 7.58172 16.4183 4 12 4ZM2.5 3.51555H8V9H6V6.70816C4.75451 8.11907 4 9.97153 4 12C4 16.4183 7.58172 20 12 20C12.6124 20 13.2076 19.9314 13.7787 19.8018L14.2213 21.7522C13.5059 21.9145 12.7623 22 12 22C6.47715 22 2 17.5228 2 12C2 9.52533 2.89933 7.26091 4.3873 5.51555H2.5V3.51555Z',
  d9: 'M13 7V8.33333H13.5625C14.6924 8.33333 15.5 9.29054 15.5 10.3333V11C15.5 11.3547 15.4066 11.6994 15.2388 12C15.4066 12.3006 15.5 12.6453 15.5 13V13.6667C15.5 14.7095 14.6924 15.6667 13.5625 15.6667H13V17H11V15.6667H8.5V13.6667H9.4375L9.4375 10.3333H8.5V8.33333H11V7H13ZM11.4375 10.3333V11H13.5V10.3333L11.4375 10.3333ZM11.4375 13L11.4375 13.6667H13.5V13H11.4375Z',
};

export const IconBitcoinTransactionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-stroke-rounded IconBitcoinTransactionStrokeRounded"
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

export const IconBitcoinTransactionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-duotone-rounded IconBitcoinTransactionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinTransactionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-twotone-rounded IconBitcoinTransactionTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinTransactionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-solid-rounded IconBitcoinTransactionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinTransactionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-bulk-rounded IconBitcoinTransactionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinTransactionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-stroke-sharp IconBitcoinTransactionStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinTransactionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-transaction-solid-sharp IconBitcoinTransactionSolidSharp"
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

export const iconPackOfBitcoinTransaction: TheIconSelfPack = {
  name: 'BitcoinTransaction',
  StrokeRounded: IconBitcoinTransactionStrokeRounded,
  DuotoneRounded: IconBitcoinTransactionDuotoneRounded,
  TwotoneRounded: IconBitcoinTransactionTwotoneRounded,
  SolidRounded: IconBitcoinTransactionSolidRounded,
  BulkRounded: IconBitcoinTransactionBulkRounded,
  StrokeSharp: IconBitcoinTransactionStrokeSharp,
  SolidSharp: IconBitcoinTransactionSolidSharp,
};
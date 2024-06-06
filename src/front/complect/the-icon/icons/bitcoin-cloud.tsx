import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 17.5C19.9853 17.5 22 15.4853 22 13C22 10.5147 19.9853 8.5 17.5 8.5C17.4925 8.5 17.485 8.50002 17.4776 8.50005M17.4776 8.50005C17.4924 8.33536 17.5 8.16856 17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.70862 6.52042 7.5227M17.4776 8.50005C17.3753 9.6345 16.9286 10.6696 16.2428 11.5M6.52042 7.5227C3.98398 7.76407 2 9.90034 2 12.5C2 15.0997 3.98398 17.2359 6.52042 17.4773M6.52042 7.5227C6.67826 7.50768 6.83823 7.5 7 7.5C8.12582 7.5 9.16474 7.87209 10.0005 8.5',
  d2: 'M10.125 20L10.125 14M12 14V12.5M12 21.5V20M10.125 17H13.875M13.875 17C14.4963 17 15 17.5037 15 18.125V18.875C15 19.4963 14.4963 20 13.875 20H9M13.875 17C14.4963 17 15 16.4963 15 15.875V15.125C15 14.5037 14.4963 14 13.875 14H9',
  d3: 'M12 2.5C15.0376 2.5 17.5 4.96243 17.5 8C17.5 8.16856 17.4924 8.33536 17.4776 8.50005L17.5 8.5C19.9853 8.5 22 10.5147 22 13C22 15.4853 19.9853 17.5 17.5 17.5L14.8068 17.4944C14.6045 17.1961 14.2626 17 13.875 17C14.4963 17 15 16.4963 15 15.875V15.125C15 14.5037 14.4963 14 13.875 14H10.125V17.4848L6.52042 17.4773C3.98398 17.2359 2 15.0997 2 12.5C2 9.90034 3.98398 7.76407 6.52042 7.5227C6.76233 4.70862 9.12324 2.5 12 2.5Z',
  d4: 'M12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5V13.25H13.875C14.9105 13.25 15.75 14.0895 15.75 15.125V15.875C15.75 16.2971 15.6105 16.6866 15.3751 17C15.6105 17.3134 15.75 17.7029 15.75 18.125V18.875C15.75 19.9105 14.9105 20.75 13.875 20.75H12.75V21.5C12.75 21.9142 12.4142 22.25 12 22.25C11.5858 22.25 11.25 21.9142 11.25 21.5V20.75H9C8.58579 20.75 8.25 20.4142 8.25 20C8.25 19.5858 8.58579 19.25 9 19.25H9.375L9.375 14.75H9C8.58579 14.75 8.25 14.4142 8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H11.25V12.5C11.25 12.0858 11.5858 11.75 12 11.75ZM10.875 14.75V16.25H13.875C14.0821 16.25 14.25 16.0821 14.25 15.875V15.125C14.25 14.9179 14.0821 14.75 13.875 14.75H10.875ZM13.875 17.75H10.875L10.875 19.25H13.875C14.0821 19.25 14.25 19.0821 14.25 18.875V18.125C14.25 17.9179 14.0821 17.75 13.875 17.75Z',
  d5: 'M5.853 6.86454C3.22664 7.39643 1.25 9.71699 1.25 12.5C1.25 15.49 3.53166 17.9463 6.44937 18.2239C6.47248 18.2261 6.49567 18.2272 6.51887 18.2273L7.61131 18.2296C7.69467 18.1641 7.78276 18.1044 7.875 18.051V15.949C7.20247 15.56 6.75 14.8328 6.75 14C6.75 12.7574 7.75736 11.75 9 11.75H9.87803C10.1869 10.8761 11.0203 10.25 12 10.25C12.9831 10.25 13.8189 10.8805 14.1252 11.7591C15.8723 11.8871 17.25 13.3452 17.25 15.125V15.875C17.25 16.2687 17.1821 16.6476 17.0575 17C17.1821 17.3524 17.25 17.7313 17.25 18.125V18.2495L17.5 18.25C20.3995 18.25 22.75 15.8995 22.75 13C22.75 10.3541 20.7927 8.16534 18.2469 7.80273C18.1428 4.44224 15.3858 1.75 12 1.75C8.93585 1.75 6.38731 3.95456 5.853 6.86454Z',
  d6: 'M12.75 11.75V13.25H13.875C14.9105 13.25 15.75 14.0895 15.75 15.125V15.875C15.75 16.2971 15.6105 16.6866 15.3751 17C15.6105 17.3134 15.75 17.7029 15.75 18.125V18.875C15.75 19.9105 14.9105 20.75 13.875 20.75H12.75V22.25H11.25V20.75H8.25V19.25H9.375L9.375 14.75H8.25V13.25H11.25V11.75H12.75ZM10.875 14.75V16.25H13.875C14.0821 16.25 14.25 16.0821 14.25 15.875V15.125C14.25 14.9179 14.0821 14.75 13.875 14.75H10.875ZM13.875 17.75H10.875L10.875 19.25H13.875C14.0821 19.25 14.25 19.0821 14.25 18.875V18.125C14.25 17.9179 14.0821 17.75 13.875 17.75Z',
  d7: 'M5.853 6.86454C3.22664 7.39643 1.25 9.71699 1.25 12.5C1.25 15.49 3.53166 17.9463 6.44937 18.2239L6.48404 18.2272L7.875 18.2301V16.25H6.75V11.75H9.75V10.25H14.25V11.7706C15.9375 11.9571 17.25 13.3878 17.25 15.125V15.875C17.25 16.2687 17.1821 16.6476 17.0575 17C17.1821 17.3524 17.25 17.7313 17.25 18.125V18.2495L17.5 18.25C20.3995 18.25 22.75 15.8995 22.75 13C22.75 10.3541 20.7927 8.16534 18.2469 7.80273C18.1428 4.44224 15.3858 1.75 12 1.75C8.93585 1.75 6.38731 3.95456 5.853 6.86454Z',
};

export const IconBitcoinCloudStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-stroke-rounded IconBitcoinCloudStrokeRounded"
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

export const IconBitcoinCloudDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-duotone-rounded IconBitcoinCloudDuotoneRounded"
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
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconBitcoinCloudTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-twotone-rounded IconBitcoinCloudTwotoneRounded"
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

export const IconBitcoinCloudSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-solid-rounded IconBitcoinCloudSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCloudBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-bulk-rounded IconBitcoinCloudBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCloudStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-stroke-sharp IconBitcoinCloudStrokeSharp"
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
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinCloudSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-cloud-solid-sharp IconBitcoinCloudSolidSharp"
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

export const iconPackOfBitcoinCloud: TheIconSelfPack = {
  name: 'BitcoinCloud',
  StrokeRounded: IconBitcoinCloudStrokeRounded,
  DuotoneRounded: IconBitcoinCloudDuotoneRounded,
  TwotoneRounded: IconBitcoinCloudTwotoneRounded,
  SolidRounded: IconBitcoinCloudSolidRounded,
  BulkRounded: IconBitcoinCloudBulkRounded,
  StrokeSharp: IconBitcoinCloudStrokeSharp,
  SolidSharp: IconBitcoinCloudSolidSharp,
};
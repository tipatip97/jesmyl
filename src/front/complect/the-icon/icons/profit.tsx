import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C8.13401 2 5 5.134 5 9C5 12.866 8.13401 16 12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2Z',
  d2: 'M15 18C13 18 12 19.5 12 19.5C12 19.5 13 21 15 21C17 21 18 19.5 18 19.5C18 19.5 17 18 15 18Z',
  d3: 'M9 18C7 18 6 19.5 6 19.5C6 19.5 7 21 9 21C11 21 12 19.5 12 19.5C12 19.5 11 18 9 18Z',
  d4: 'M12 22V16',
  d5: 'M10.4375 11.6667L10.4375 6.33333M12 6.33333V5M12 13V11.6667M10.4375 9H13.5625M13.5625 9C14.0803 9 14.5 9.44772 14.5 10V10.6667C14.5 11.219 14.0803 11.6667 13.5625 11.6667H9.5M13.5625 9C14.0803 9 14.5 8.55228 14.5 8V7.33333C14.5 6.78105 14.0803 6.33333 13.5625 6.33333H9.5',
  d6: 'M12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2Z',
  d7: 'M12.3 20.85C12.0027 20.627 11.6109 20.2685 11.3763 19.9166C11.2084 19.6647 11.208 19.3359 11.376 19.084C11.6992 18.6484 12.0027 18.373 12.3 18.15C12.8969 17.7023 13.8009 17.25 15 17.25C16.1991 17.25 17.1031 17.7023 17.7 18.15C17.9973 18.373 18.2539 18.5781 18.624 19.084C18.792 19.3359 18.792 19.6641 18.624 19.916C18.4125 20.2333 17.9973 20.627 17.7 20.85C17.1031 21.2977 16.1991 21.75 15 21.75C13.8009 21.75 12.8969 21.2977 12.3 20.85Z',
  d8: 'M6.3 20.85C6.00269 20.627 5.61094 20.2685 5.37635 19.9166C5.2084 19.6647 5.20801 19.3359 5.37596 19.084C5.69922 18.6484 6.00269 18.373 6.3 18.15C6.89688 17.7023 7.80088 17.25 9 17.25C10.1991 17.25 11.1031 17.7023 11.7 18.15C11.9973 18.373 12.2539 18.5781 12.624 19.084C12.792 19.3359 12.792 19.6641 12.624 19.916C12.4125 20.2333 11.9973 20.627 11.7 20.85C11.1031 21.2977 10.1991 21.75 9 21.75C7.80088 21.75 6.89688 21.2977 6.3 20.85Z',
  d9: 'M12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16V22C11.25 22.4142 11.5858 22.75 12 22.75Z',
  d10: 'M12 1.25C7.7198 1.25 4.25 4.71979 4.25 9C4.25 13.2802 7.71979 16.75 12 16.75C16.2802 16.75 19.75 13.2802 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V5.58333H9.5C9.08579 5.58333 8.75 5.91912 8.75 6.33333C8.75 6.74755 9.08579 7.08333 9.5 7.08333H9.6875V10.9167H9.5C9.08579 10.9167 8.75 11.2525 8.75 11.6667C8.75 12.0809 9.08579 12.4167 9.5 12.4167H11.25V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4142 13.75 12.75 13.4142 12.75 13V12.4167H13.5625C14.5393 12.4167 15.25 11.5868 15.25 10.6667V10C15.25 9.6376 15.1398 9.2892 14.9465 9C15.1398 8.7108 15.25 8.3624 15.25 8V7.33333C15.25 6.41317 14.5393 5.58333 13.5625 5.58333H12.75V5ZM11.1875 8.25V7.08333H13.5625C13.6212 7.08333 13.75 7.14893 13.75 7.33333V8C13.75 8.1844 13.6212 8.25 13.5625 8.25H11.1875ZM11.1875 9.75H13.5625C13.6212 9.75 13.75 9.8156 13.75 10V10.6667C13.75 10.8511 13.6212 10.9167 13.5625 10.9167H11.1875V9.75Z',
  d11: 'M4.25 9C4.25 4.71979 7.7198 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9C19.75 13.2802 16.2802 16.75 12 16.75C7.71979 16.75 4.25 13.2802 4.25 9Z',
  d12: 'M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V5.58333H13.5625C14.5393 5.58333 15.25 6.41317 15.25 7.33333V8C15.25 8.3624 15.1398 8.7108 14.9465 9C15.1398 9.2892 15.25 9.6376 15.25 10V10.6667C15.25 11.5868 14.5393 12.4167 13.5625 12.4167H12.75V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.4167H9.5C9.08579 12.4167 8.75 12.0809 8.75 11.6667C8.75 11.2525 9.08579 10.9167 9.5 10.9167H9.6875L9.6875 7.08333H9.5C9.08579 7.08333 8.75 6.74755 8.75 6.33333C8.75 5.91912 9.08579 5.58333 9.5 5.58333H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25ZM11.1875 7.08333V8.25H13.5625C13.6212 8.25 13.75 8.1844 13.75 8V7.33333C13.75 7.14893 13.6212 7.08333 13.5625 7.08333H11.1875ZM13.5625 9.75H11.1875L11.1875 10.9167H13.5625C13.6212 10.9167 13.75 10.8511 13.75 10.6667V10C13.75 9.8156 13.6212 9.75 13.5625 9.75Z',
  d13: 'M11.25 16.7144V22.0002C11.25 22.4144 11.5858 22.7502 12 22.7502C12.4142 22.7502 12.75 22.4144 12.75 22.0002V16.7144C12.5032 16.7381 12.253 16.7502 12 16.7502C11.747 16.7502 11.4968 16.7381 11.25 16.7144Z',
  d14: 'M5.62692 20.2326C5.55074 20.1469 5.19922 19.7305 5.09859 19.5C5.29297 19.1797 5.55074 18.8531 5.62692 18.7674C5.77876 18.5965 6.00267 18.373 6.29998 18.15C6.89686 17.7023 7.80085 17.25 8.99998 17.25C10.1991 17.25 11.1031 17.7023 11.7 18.15C11.9973 18.373 12.2212 18.5965 12.373 18.7674C12.4492 18.8531 12.7578 19.2461 12.9014 19.5C12.8164 19.6758 12.4492 20.1469 12.373 20.2326C12.2212 20.4035 11.9973 20.627 11.7 20.85C11.1031 21.2977 10.1991 21.75 8.99998 21.75C7.80085 21.75 6.89686 21.2977 6.29998 20.85C6.00267 20.627 5.77876 20.4035 5.62692 20.2326Z',
  d15: 'M11.6269 20.2326C11.5507 20.1469 11.1992 19.7305 11.0986 19.5C11.293 19.1797 11.5507 18.8531 11.6269 18.7674C11.7788 18.5965 12.0027 18.373 12.3 18.15C12.8969 17.7023 13.8009 17.25 15 17.25C16.1991 17.25 17.1031 17.7023 17.7 18.15C17.9973 18.373 18.2212 18.5965 18.373 18.7674C18.4492 18.8531 18.7578 19.2461 18.9014 19.5C18.8164 19.6758 18.4492 20.1469 18.373 20.2326C18.2212 20.4035 17.9973 20.627 17.7 20.85C17.1031 21.2977 16.1991 21.75 15 21.75C13.8009 21.75 12.8969 21.2977 12.3 20.85C12.0027 20.627 11.7788 20.4035 11.6269 20.2326Z',
  d16: 'M12.75 22.75V15.25H11.25L11.25 22.75H12.75Z',
  d17: 'M12 16.75C16.2802 16.75 19.75 13.2802 19.75 9C19.75 4.71979 16.2802 1.25 12 1.25C7.71979 1.25 4.25 4.71979 4.25 9C4.25 13.2802 7.71979 16.75 12 16.75ZM12.75 5.58333V4.25H11.25V5.58333H8.75V7.08333H9.6875V10.9167H8.75V12.4167H11.25V13.75H12.75V12.4167H13.5625C14.5393 12.4167 15.25 11.5868 15.25 10.6667V10C15.25 9.6376 15.1398 9.2892 14.9465 9C15.1398 8.7108 15.25 8.3624 15.25 8V7.33333C15.25 6.41317 14.5393 5.58333 13.5625 5.58333H12.75ZM11.1875 8.25V7.08333H13.5625C13.6212 7.08333 13.75 7.14893 13.75 7.33333V8C13.75 8.1844 13.6212 8.25 13.5625 8.25H11.1875ZM11.1875 9.75H13.5625C13.6212 9.75 13.75 9.8156 13.75 10V10.6667C13.75 10.8511 13.6212 10.9167 13.5625 10.9167H11.1875V9.75Z',
};

export const IconProfitStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-stroke-rounded IconProfitStrokeRounded"
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

export const IconProfitDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-duotone-rounded IconProfitDuotoneRounded"
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

export const IconProfitTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-twotone-rounded IconProfitTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconProfitSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-solid-rounded IconProfitSolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProfitBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-bulk-rounded IconProfitBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProfitStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-stroke-sharp IconProfitStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconProfitSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="profit-solid-sharp IconProfitSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfProfit: TheIconSelfPack = {
  name: 'Profit',
  StrokeRounded: IconProfitStrokeRounded,
  DuotoneRounded: IconProfitDuotoneRounded,
  TwotoneRounded: IconProfitTwotoneRounded,
  SolidRounded: IconProfitSolidRounded,
  BulkRounded: IconProfitBulkRounded,
  StrokeSharp: IconProfitStrokeSharp,
  SolidSharp: IconProfitSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 9C8.41015 9 5.5 11.9101 5.5 15.5C5.5 19.0898 8.41015 22 12 22C15.5898 22 18.5 19.0899 18.5 15.5C18.5 11.9101 15.5898 9 12 9Z',
  d2: 'M14.5 4.5C14.0085 3.9943 12.7002 2 12 2M9.5 4.5C9.99153 3.9943 11.2998 2 12 2M12 2L12 6.5',
  d3: 'M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.5M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.5',
  d4: 'M13.1296 4.49635C13.3043 4.71742 13.4998 4.96486 13.6556 5.12414C14.013 5.48971 14.6009 5.49802 14.9686 5.14269C15.3364 4.78736 15.3447 4.20296 14.9873 3.83739C14.9155 3.76398 14.789 3.60773 14.5878 3.35308C14.5734 3.33485 14.5588 3.31628 14.5439 3.29741C14.3678 3.07437 14.1581 2.80887 13.9418 2.55513C13.7107 2.28395 13.4452 1.99408 13.1749 1.76527C13.0394 1.65054 12.881 1.53239 12.7058 1.43922C12.5381 1.34998 12.2927 1.25 12 1.25C11.7073 1.25 11.4619 1.34997 11.2942 1.43922C11.119 1.53239 10.9606 1.65054 10.8251 1.76527C10.5548 1.99408 10.2893 2.28395 10.0582 2.55513C9.84189 2.80886 9.63225 3.07437 9.45614 3.2974C9.44124 3.31628 9.42657 3.33485 9.41217 3.35308C9.21096 3.60773 9.0845 3.76398 9.01271 3.83739C8.65527 4.20296 8.66362 4.78736 9.03137 5.14269C9.39911 5.49802 9.98699 5.48971 10.3444 5.12414C10.5002 4.96486 10.6957 4.71742 10.8704 4.49635L10.8727 4.49344C10.8863 4.47619 10.9 4.45885 10.9137 4.44145C10.9656 4.37581 11.0182 4.30919 11.0714 4.24219L11.0714 6.32692C11.0714 6.83672 11.4872 7.25 12 7.25C12.5128 7.25 12.9286 6.83672 12.9286 6.32692V4.24219C12.9818 4.30919 13.0344 4.37581 13.0863 4.44143C13.1 4.45884 13.1137 4.47618 13.1273 4.49344L13.1296 4.49635Z',
  d5: 'M12 8.25C7.99594 8.25 4.75 11.4959 4.75 15.5C4.75 19.5041 7.99594 22.75 12 22.75C16.0041 22.75 19.25 19.5041 19.25 15.5C19.25 11.4959 16.0041 8.25 12 8.25ZM12.75 11.5C12.75 11.0858 12.4142 10.75 12 10.75C11.5858 10.75 11.25 11.0858 11.25 11.5V12.0833H9.5C9.08579 12.0833 8.75 12.4191 8.75 12.8333C8.75 13.2475 9.08579 13.5833 9.5 13.5833H9.6875V17.4167H9.5C9.08579 17.4167 8.75 17.7525 8.75 18.1667C8.75 18.5809 9.08579 18.9167 9.5 18.9167H11.25V19.5C11.25 19.9142 11.5858 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75V11.5ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875V16.25Z',
  d6: 'M4.75 15.5C4.75 11.4959 7.99594 8.25 12 8.25C16.0041 8.25 19.25 11.4959 19.25 15.5C19.25 19.5041 16.0041 22.75 12 22.75C7.99594 22.75 4.75 19.5041 4.75 15.5Z',
  d7: 'M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V12.0833H13.5625C14.5393 12.0833 15.25 12.9132 15.25 13.8333V14.5C15.25 14.8624 15.1398 15.2108 14.9465 15.5C15.1398 15.7892 15.25 16.1376 15.25 16.5V17.1667C15.25 18.0868 14.5393 18.9167 13.5625 18.9167H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V18.9167H9.5C9.08579 18.9167 8.75 18.5809 8.75 18.1667C8.75 17.7525 9.08579 17.4167 9.5 17.4167H9.6875L9.6875 13.5833H9.5C9.08579 13.5833 8.75 13.2475 8.75 12.8333C8.75 12.4191 9.08579 12.0833 9.5 12.0833H11.25V11.5C11.25 11.0858 11.5858 10.75 12 10.75ZM11.1875 13.5833V14.75H13.5625C13.6212 14.75 13.75 14.6844 13.75 14.5V13.8333C13.75 13.6489 13.6212 13.5833 13.5625 13.5833H11.1875ZM13.5625 16.25H11.1875L11.1875 17.4167H13.5625C13.6212 17.4167 13.75 17.3511 13.75 17.1667V16.5C13.75 16.3156 13.6212 16.25 13.5625 16.25Z',
  d8: 'M12 7L12 2.44101M9 5L12 2L15 5',
  d9: 'M12.0001 1.25C12.2653 1.25 12.5196 1.35536 12.7072 1.54289L15.7072 4.54289L14.293 5.95711L13.0001 4.66421L13.0001 7H11.0001L11.0001 4.66421L9.70718 5.95711L8.29297 4.54289L11.293 1.54289C11.4805 1.35536 11.7349 1.25 12.0001 1.25Z',
  d10: 'M12 22.75C16.0041 22.75 19.25 19.5041 19.25 15.5C19.25 11.4959 16.0041 8.25 12 8.25C7.99594 8.25 4.75 11.4959 4.75 15.5C4.75 19.5041 7.99594 22.75 12 22.75ZM12.75 12.0833V10.75H11.25V12.0833H8.75V13.5833H9.6875V17.4167H8.75V18.9167H11.25V20.25H12.75V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875V16.25Z',
};

export const IconBitcoinUp01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-stroke-rounded IconBitcoinUp01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinUp01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-duotone-rounded IconBitcoinUp01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinUp01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-twotone-rounded IconBitcoinUp01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconBitcoinUp01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-solid-rounded IconBitcoinUp01SolidRounded"
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

export const IconBitcoinUp01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-bulk-rounded IconBitcoinUp01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinUp01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-stroke-sharp IconBitcoinUp01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinUp01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-up-01-solid-sharp IconBitcoinUp01SolidSharp"
    >
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

export const iconPackOfBitcoinUp01: TheIconSelfPack = {
  name: 'BitcoinUp01',
  StrokeRounded: IconBitcoinUp01StrokeRounded,
  DuotoneRounded: IconBitcoinUp01DuotoneRounded,
  TwotoneRounded: IconBitcoinUp01TwotoneRounded,
  SolidRounded: IconBitcoinUp01SolidRounded,
  BulkRounded: IconBitcoinUp01BulkRounded,
  StrokeSharp: IconBitcoinUp01StrokeSharp,
  SolidSharp: IconBitcoinUp01SolidSharp,
};
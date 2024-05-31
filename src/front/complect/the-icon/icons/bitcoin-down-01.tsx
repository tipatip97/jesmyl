import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 12.0898 8.41015 15 12 15C15.5898 15 18.5 12.0899 18.5 8.5C18.5 4.91015 15.5898 2 12 2Z',
  d2: 'M9.5 19.5C9.99153 20.0057 11.2998 22 12 22M14.5 19.5C14.0085 20.0057 12.7002 22 12 22M12 22V17.5',
  d3: 'M10.4375 11.1667L10.4375 5.83333M12 5.83333V4.5M12 12.5V11.1667M10.4375 8.5H13.5625M13.5625 8.5C14.0803 8.5 14.5 8.94772 14.5 9.5V10.1667C14.5 10.719 14.0803 11.1667 13.5625 11.1667H9.5M13.5625 8.5C14.0803 8.5 14.5 8.05228 14.5 7.5V6.83333C14.5 6.28105 14.0803 5.83333 13.5625 5.83333H9.5',
  d4: 'M11.0714 19.7578C10.8968 19.5367 10.5002 19.0351 10.3444 18.8759C9.98699 18.5103 9.39911 18.502 9.03137 18.8573C8.66362 19.2126 8.65527 19.797 9.01271 20.1626C9.0845 20.236 9.25492 20.4479 9.45613 20.7026C9.63224 20.9256 9.84189 21.1911 10.0582 21.4449C10.2893 21.7161 10.5548 22.0059 10.8251 22.2347C10.9606 22.3495 11.119 22.4676 11.2942 22.5608C11.4619 22.65 11.7073 22.75 12 22.75C12.2927 22.75 12.5381 22.65 12.7058 22.5608C12.881 22.4676 13.0394 22.3495 13.1749 22.2347C13.4452 22.0059 13.7107 21.7161 13.9418 21.4449C14.1581 21.1911 14.3678 20.9256 14.5439 20.7026C14.7451 20.4479 14.9155 20.236 14.9873 20.1626C15.3447 19.797 15.3364 19.2126 14.9686 18.8573C14.6009 18.502 14.013 18.5103 13.6556 18.8759C13.4998 19.0351 13.1032 19.5367 12.9286 19.7578V17.6731C12.9286 17.1633 12.5128 16.75 12 16.75C11.4872 16.75 11.0714 17.1633 11.0714 17.6731V19.7578Z',
  d5: 'M12 15.75C16.0041 15.75 19.25 12.5041 19.25 8.5C19.25 4.49593 16.0041 1.25 12 1.25C7.99594 1.25 4.75 4.49593 4.75 8.5C4.75 12.5041 7.99594 15.75 12 15.75ZM12.75 4.5C12.75 4.08579 12.4142 3.75 12 3.75C11.5858 3.75 11.25 4.08579 11.25 4.5V5.08333H9.5C9.08579 5.08333 8.75 5.41912 8.75 5.83333C8.75 6.24755 9.08579 6.58333 9.5 6.58333H9.6875V10.4167H9.5C9.08579 10.4167 8.75 10.7525 8.75 11.1667C8.75 11.5809 9.08579 11.9167 9.5 11.9167H11.25V12.5C11.25 12.9142 11.5858 13.25 12 13.25C12.4142 13.25 12.75 12.9142 12.75 12.5V11.9167H13.5625C14.5393 11.9167 15.25 11.0868 15.25 10.1667V9.5C15.25 9.1376 15.1398 8.7892 14.9465 8.5C15.1398 8.2108 15.25 7.8624 15.25 7.5V6.83333C15.25 5.91317 14.5393 5.08333 13.5625 5.08333H12.75V4.5ZM11.1875 7.75V6.58333H13.5625C13.6212 6.58333 13.75 6.64893 13.75 6.83333V7.5C13.75 7.6844 13.6212 7.75 13.5625 7.75H11.1875ZM11.1875 9.25H13.5625C13.6212 9.25 13.75 9.3156 13.75 9.5V10.1667C13.75 10.3511 13.6212 10.4167 13.5625 10.4167H11.1875V9.25Z',
  d6: 'M19.25 8.5C19.25 12.5041 16.0041 15.75 12 15.75C7.99594 15.75 4.75 12.5041 4.75 8.5C4.75 4.49593 7.99594 1.25 12 1.25C16.0041 1.25 19.25 4.49593 19.25 8.5Z',
  d7: 'M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5V5.08333H13.5625C14.5393 5.08333 15.25 5.91317 15.25 6.83333V7.5C15.25 7.8624 15.1398 8.2108 14.9465 8.5C15.1398 8.7892 15.25 9.1376 15.25 9.5V10.1667C15.25 11.0868 14.5393 11.9167 13.5625 11.9167H12.75V12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5V11.9167H9.5C9.08579 11.9167 8.75 11.5809 8.75 11.1667C8.75 10.7525 9.08579 10.4167 9.5 10.4167H9.6875L9.6875 6.58333H9.5C9.08579 6.58333 8.75 6.24755 8.75 5.83333C8.75 5.41912 9.08579 5.08333 9.5 5.08333H11.25V4.5C11.25 4.08579 11.5858 3.75 12 3.75ZM11.1875 6.58333V7.75H13.5625C13.6212 7.75 13.75 7.6844 13.75 7.5V6.83333C13.75 6.64893 13.6212 6.58333 13.5625 6.58333H11.1875ZM13.5625 9.25H11.1875L11.1875 10.4167H13.5625C13.6212 10.4167 13.75 10.3511 13.75 10.1667V9.5C13.75 9.3156 13.6212 9.25 13.5625 9.25Z',
  d8: 'M9 19L12 22L15 19M12 17V21.5916',
  d9: 'M12.0001 22.75C12.2653 22.75 12.5196 22.6446 12.7072 22.4571L15.7072 19.4571L14.293 18.0429L13.0001 19.3358V17H11.0001V19.3358L9.70718 18.0429L8.29297 19.4571L11.293 22.4571C11.4805 22.6446 11.7349 22.75 12.0001 22.75Z',
  d10: 'M12 1.25C7.99594 1.25 4.75 4.49593 4.75 8.5C4.75 12.5041 7.99594 15.75 12 15.75C16.0041 15.75 19.25 12.5041 19.25 8.5C19.25 4.49593 16.0041 1.25 12 1.25ZM12.75 5.08333V3.75H11.25V5.08333H8.75V6.58333H9.6875V10.4167H8.75V11.9167H11.25V13.25H12.75V11.9167H13.5625C14.5393 11.9167 15.25 11.0868 15.25 10.1667V9.5C15.25 9.1376 15.1398 8.7892 14.9465 8.5C15.1398 8.2108 15.25 7.8624 15.25 7.5V6.83333C15.25 5.91317 14.5393 5.08333 13.5625 5.08333H12.75ZM11.1875 7.75V6.58333H13.5625C13.6212 6.58333 13.75 6.64893 13.75 6.83333V7.5C13.75 7.6844 13.6212 7.75 13.5625 7.75H11.1875ZM11.1875 9.25H13.5625C13.6212 9.25 13.75 9.3156 13.75 9.5V10.1667C13.75 10.3511 13.6212 10.4167 13.5625 10.4167H11.1875V9.25Z',
} as const;

export const IconBitcoinDown01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-stroke-rounded IconBitcoinDown01StrokeRounded"
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

export const IconBitcoinDown01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-duotone-rounded IconBitcoinDown01DuotoneRounded"
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

export const IconBitcoinDown01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-twotone-rounded IconBitcoinDown01TwotoneRounded"
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

export const IconBitcoinDown01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-solid-rounded IconBitcoinDown01SolidRounded"
    >
      <path 
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

export const IconBitcoinDown01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-bulk-rounded IconBitcoinDown01BulkRounded"
    >
      <path 
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

export const IconBitcoinDown01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-stroke-sharp IconBitcoinDown01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBitcoinDown01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-down-01-solid-sharp IconBitcoinDown01SolidSharp"
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

export const iconPackOfBitcoinDown01: TheIconSelfPack = {
  name: 'BitcoinDown01',
  StrokeRounded: IconBitcoinDown01StrokeRounded,
  DuotoneRounded: IconBitcoinDown01DuotoneRounded,
  TwotoneRounded: IconBitcoinDown01TwotoneRounded,
  SolidRounded: IconBitcoinDown01SolidRounded,
  BulkRounded: IconBitcoinDown01BulkRounded,
  StrokeSharp: IconBitcoinDown01StrokeSharp,
  SolidSharp: IconBitcoinDown01SolidSharp,
};
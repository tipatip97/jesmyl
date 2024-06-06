import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.5 11.0289C21.8239 11.8027 22 12.6343 22 13.5002C22 15.5588 21.0047 17.4237 19.3933 18.7789C19.1517 18.9821 19 19.2764 19 19.5921V22.0002H17L16.2062 20.8675C16.083 20.6918 15.8616 20.6154 15.6537 20.6689C13.9248 21.1134 12.0752 21.1134 10.3463 20.6689C10.1384 20.6154 9.91703 20.6918 9.79384 20.8675L9 22.0002H7V19.6156C7 19.2868 6.83835 18.979 6.56764 18.7923C5.49285 18.0513 2 16.6016 2 15.0584V13.5002C2 12.9084 2.44771 12.4287 3 12.4287C3.60665 12.4287 4.10188 12.1931 4.30205 11.5662C5.06912 9.16428 7.23085 7.2362 10.0206 6.4209',
  d2: 'M14.125 9.5L14.125 3.5M16 3.5V2M16 11V9.5M14.125 6.5H17.875M17.875 6.5C18.4963 6.5 19 7.00368 19 7.625V8.375C19 8.99632 18.4963 9.5 17.875 9.5H13M17.875 6.5C18.4963 6.5 19 5.99632 19 5.375V4.625C19 4.00368 18.4963 3.5 17.875 3.5H13',
  d3: 'M7.49981 12H7.50879',
  d4: 'M2 15.0586V13.5004C2 12.9087 2.44771 12.429 3 12.429C3.60665 12.429 4.10188 12.1933 4.30205 11.5665C5.06912 9.1645 7.23085 7.23642 10.0206 6.42112C13.0137 5.63344 19 6 21.5 11.0292C21.8239 11.803 22 12.6345 22 13.5004C22 15.559 21.0047 17.4239 19.3933 18.7791C19.1517 18.9823 19 19.2766 19 19.5923V22.0004H17L16.2062 20.8678C16.083 20.692 15.8616 20.6156 15.6537 20.6691C13.9248 21.1136 12.0752 21.1136 10.3463 20.6691C10.1384 20.6156 9.91703 20.692 9.79384 20.8678L9 22.0004H7V19.6158C7 19.287 6.83835 18.9792 6.56764 18.7926C5.49285 18.0515 2 16.6018 2 15.0586Z',
  d5: 'M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V2.75H17.875C18.9105 2.75 19.75 3.58947 19.75 4.625V5.375C19.75 5.7971 19.6105 6.18663 19.3751 6.5C19.6105 6.81337 19.75 7.2029 19.75 7.625V8.375C19.75 9.41053 18.9105 10.25 17.875 10.25H16.75V11C16.75 11.4142 16.4142 11.75 16 11.75C15.5858 11.75 15.25 11.4142 15.25 11V10.25H13C12.5858 10.25 12.25 9.91421 12.25 9.5C12.25 9.08579 12.5858 8.75 13 8.75H13.375V6.50015C13.375 6.5001 13.375 6.5002 13.375 6.50015L13.375 4.25H13C12.5858 4.25 12.25 3.91421 12.25 3.5C12.25 3.08579 12.5858 2.75 13 2.75H15.25V2C15.25 1.58579 15.5858 1.25 16 1.25ZM14.875 4.25V5.75H17.875C18.0821 5.75 18.25 5.58211 18.25 5.375V4.625C18.25 4.41789 18.0821 4.25 17.875 4.25H14.875ZM17.875 7.25H14.875L14.875 8.75H17.875C18.0821 8.75 18.25 8.58211 18.25 8.375V7.625C18.25 7.41789 18.0821 7.25 17.875 7.25Z',
  d6: 'M9.84415 5.69212C10.4194 5.55288 11.1124 5.43447 11.875 5.36719V7.55095C11.2025 7.93999 10.75 8.66712 10.75 9.49994C10.75 10.7426 11.7574 11.7499 13 11.7499H13.878C14.1869 12.6238 15.0203 13.2499 16 13.2499C16.9831 13.2499 17.8189 12.6195 18.1252 11.7408C19.7239 11.6237 21.0133 10.3928 21.2208 8.8208C21.6135 9.38232 21.9464 10.0262 22.2014 10.7624C22.5562 11.618 22.75 12.5399 22.75 13.5003C22.75 15.8137 21.6296 17.8783 19.876 19.3531C19.7853 19.4294 19.75 19.5212 19.75 19.5923V22.0003C19.75 22.4146 19.4142 22.7503 19 22.7503H17C16.7554 22.7503 16.5262 22.6311 16.3858 22.4308L15.687 21.4337C13.9312 21.8587 12.0688 21.8587 10.313 21.4337L9.61417 22.4308C9.47379 22.6311 9.24458 22.7503 9 22.7503H7C6.58579 22.7503 6.25 22.4146 6.25 22.0003V19.6158C6.25 19.5336 6.20959 19.4566 6.14191 19.41C5.91963 19.2567 5.55967 19.058 5.08674 18.7969C4.60951 18.5335 4.00277 18.1965 3.4751 17.8571C2.95227 17.5209 2.42306 17.1334 2.01729 16.7038C1.62349 16.2868 1.25 15.7288 1.25 15.0586V13.5003C1.25 12.544 1.9856 11.6789 3 11.6789C3.21227 11.6789 3.33997 11.637 3.4124 11.5927C3.47054 11.5572 3.53761 11.4948 3.5876 11.3383C4.44425 8.65576 6.82803 6.57273 9.8102 5.70119C9.82144 5.6979 9.83276 5.69488 9.84415 5.69212ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H7.50898C8.06127 13 8.50898 12.5523 8.50898 12C8.50898 11.4477 8.06127 11 7.50898 11H7.5Z',
  d7: 'M11.875 5.36719C11.1124 5.43447 10.4194 5.55288 9.84415 5.69212C9.83276 5.69488 9.82144 5.6979 9.8102 5.70119C6.82803 6.57273 4.44425 8.65576 3.5876 11.3383C3.53761 11.4948 3.47054 11.5572 3.4124 11.5927C3.33997 11.637 3.21227 11.6789 3 11.6789C1.9856 11.6789 1.25 12.544 1.25 13.5003V15.0586C1.25 15.7288 1.62349 16.2868 2.01729 16.7038C2.42306 17.1334 2.95227 17.5209 3.4751 17.8571C4.00277 18.1965 4.60951 18.5335 5.08674 18.7969C5.55967 19.058 5.91963 19.2567 6.14191 19.41C6.20959 19.4566 6.25 19.5336 6.25 19.6158V22.0003C6.25 22.4146 6.58579 22.7503 7 22.7503H9C9.24458 22.7503 9.47379 22.6311 9.61417 22.4308L10.313 21.4337C12.0688 21.8587 13.9312 21.8587 15.687 21.4337L16.3858 22.4308C16.5262 22.6311 16.7554 22.7503 17 22.7503H19C19.4142 22.7503 19.75 22.4146 19.75 22.0003V19.5923C19.75 19.5212 19.7853 19.4294 19.876 19.3531C21.6296 17.8783 22.75 15.8137 22.75 13.5003C22.75 12.5399 22.5562 11.618 22.2014 10.7624C21.9464 10.0262 21.6135 9.38232 21.2208 8.8208C21.0133 10.3928 19.7239 11.6237 18.1252 11.7408C17.8189 12.6195 16.9831 13.2499 16 13.2499C15.0203 13.2499 14.1869 12.6238 13.878 11.7499H13C11.7574 11.7499 10.75 10.7426 10.75 9.49994C10.75 8.66712 11.2025 7.93999 11.875 7.55095V5.36719Z',
  d8: 'M6.5 12C6.5 11.4477 6.94772 11 7.5 11H7.50898C8.06127 11 8.50898 11.4477 8.50898 12C8.50898 12.5523 8.06127 13 7.50898 13H7.5C6.94772 13 6.5 12.5523 6.5 12Z',
  d9: 'M21.5 11.0289C21.8239 11.8027 22 12.6343 22 13.5002C22 15.5588 20.6114 17.6448 19 19V22.0002H17L16 20.5C14.271 20.9445 11.729 20.9445 10 20.5L9 22.0002H7V19C7 19 3.5 18 2 15.0584V12.5H4C4.5 10 7.23085 7.2362 10.0206 6.4209',
  d10: 'M16.75 1.25V2.75H17.875C18.9105 2.75 19.75 3.58947 19.75 4.625V5.375C19.75 5.7971 19.6105 6.18663 19.3751 6.5C19.6105 6.81337 19.75 7.2029 19.75 7.625V8.375C19.75 9.41053 18.9105 10.25 17.875 10.25H16.75V11.75H15.25V10.25H12.25V8.75H13.375L13.375 4.25H12.25V2.75H15.25V1.25H16.75ZM14.875 4.25V5.75H17.875C18.0821 5.75 18.25 5.58211 18.25 5.375V4.625C18.25 4.41789 18.0821 4.25 17.875 4.25H14.875ZM17.875 7.25H14.875L14.875 8.75H17.875C18.0821 8.75 18.25 8.58211 18.25 8.375V7.625C18.25 7.41789 18.0821 7.25 17.875 7.25Z',
  d11: 'M9.84118 5.69259C10.411 5.55222 11.1054 5.43562 11.875 5.37598V7.25005H10.75V11.75H13.75V13.25H18.25V11.7294C19.7365 11.5651 20.932 10.4355 21.1957 8.98127C21.5737 9.4963 21.909 10.0781 22.1896 10.7339L22.1918 10.7392C22.5527 11.6013 22.75 12.5311 22.75 13.5001C22.75 15.7437 21.3426 17.9049 19.75 19.3411V22.7501H16.5986L15.6617 21.3445C14.0366 21.6629 11.9634 21.6629 10.3383 21.3445L9.40141 22.7501H6.25V19.5328C5.87151 19.3824 5.25521 19.1118 4.68555 18.7806C3.55556 18.1237 2.09014 16.8861 1.25 15.2385V11.7499H3.42057C3.81067 10.5168 4.62069 9.30934 5.61856 8.30104C6.78365 7.12377 8.27039 6.15094 9.8102 5.70093L9.8256 5.69643L9.84118 5.69259ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H7.50898C8.06127 13 8.50898 12.5523 8.50898 12C8.50898 11.4477 8.06127 11 7.50898 11H7.5Z',
};

export const IconBitcoinPiggyBankStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-stroke-rounded IconBitcoinPiggyBankStrokeRounded"
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

export const IconBitcoinPiggyBankDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-duotone-rounded IconBitcoinPiggyBankDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconBitcoinPiggyBankTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-twotone-rounded IconBitcoinPiggyBankTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinPiggyBankSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-solid-rounded IconBitcoinPiggyBankSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPiggyBankBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-bulk-rounded IconBitcoinPiggyBankBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconBitcoinPiggyBankStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-stroke-sharp IconBitcoinPiggyBankStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconBitcoinPiggyBankSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-piggy-bank-solid-sharp IconBitcoinPiggyBankSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinPiggyBank: TheIconSelfPack = {
  name: 'BitcoinPiggyBank',
  StrokeRounded: IconBitcoinPiggyBankStrokeRounded,
  DuotoneRounded: IconBitcoinPiggyBankDuotoneRounded,
  TwotoneRounded: IconBitcoinPiggyBankTwotoneRounded,
  SolidRounded: IconBitcoinPiggyBankSolidRounded,
  BulkRounded: IconBitcoinPiggyBankBulkRounded,
  StrokeSharp: IconBitcoinPiggyBankStrokeSharp,
  SolidSharp: IconBitcoinPiggyBankSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.3077 18L10.847 13.4789C10.7552 13.1947 10.4734 13 10.1538 13C9.83425 13 9.55249 13.1947 9.46066 13.4789L8 18M15 13V18M8.53846 16.5H11.7692',
  d2: 'M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z',
  d3: 'M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9',
  d4: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25C8.5 9.80228 8.05228 10.25 7.5 10.25C6.94772 10.25 6.5 9.80228 6.5 9.25V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25C17.5 9.80228 17.0523 10.25 16.5 10.25C15.9477 10.25 15.5 9.80228 15.5 9.25V6.75C15.5 4.817 13.933 3.25 12 3.25Z',
  d5: 'M12 8.25C10.4042 8.25 8.95364 8.28422 7.52522 8.34988C5.46716 8.4445 3.79609 10.0382 3.52452 12.0552C3.37636 13.1556 3.25 14.3118 3.25 15.5C3.25 16.6882 3.37636 17.8444 3.52452 18.9448C3.79609 20.9618 5.46716 22.5555 7.52522 22.6501C8.95364 22.7158 10.4042 22.75 12 22.75C13.5958 22.75 15.0464 22.7158 16.4748 22.6501C18.5328 22.5555 20.2039 20.9618 20.4755 18.9448C20.6236 17.8444 20.75 16.6882 20.75 15.5C20.75 14.3118 20.6236 13.1556 20.4755 12.0552C20.2039 10.0382 18.5328 8.4445 16.4748 8.34989C15.0464 8.28422 13.5958 8.25 12 8.25ZM8.74718 13.2483C8.94823 12.626 9.53997 12.25 10.154 12.25C10.7681 12.25 11.3599 12.626 11.5609 13.2483L13.0216 17.7694C13.1489 18.1636 12.9326 18.5863 12.5385 18.7137C12.1443 18.841 11.7216 18.6247 11.5942 18.2306L11.2774 17.25H9.03068L8.71388 18.2306C8.58654 18.6247 8.16378 18.841 7.76963 18.7137C7.37548 18.5863 7.15918 18.1636 7.28652 17.7694L8.74718 13.2483ZM10.1544 13.7725L9.51562 15.7496H10.7931L10.1544 13.7725ZM15.0002 12.25C15.4144 12.25 15.7502 12.5858 15.7502 13V18C15.7502 18.4142 15.4144 18.75 15.0002 18.75C14.586 18.75 14.2502 18.4142 14.2502 18V13C14.2502 12.5858 14.586 12.25 15.0002 12.25Z',
  d6: 'M7.52522 8.34988C8.95364 8.28422 10.4042 8.25 12 8.25C13.5958 8.25 15.0464 8.28422 16.4748 8.34989C18.5328 8.4445 20.2039 10.0382 20.4755 12.0552C20.6236 13.1556 20.75 14.3118 20.75 15.5C20.75 16.6882 20.6236 17.8444 20.4755 18.9448C20.2039 20.9618 18.5328 22.5555 16.4748 22.6501C15.0464 22.7158 13.5958 22.75 12 22.75C10.4042 22.75 8.95364 22.7158 7.52522 22.6501C5.46716 22.5555 3.79609 20.9618 3.52452 18.9448C3.37636 17.8444 3.25 16.6882 3.25 15.5C3.25 14.3118 3.37636 13.1556 3.52452 12.0552C3.79609 10.0382 5.46716 8.4445 7.52522 8.34988Z',
  d7: 'M10.154 12.25C9.53997 12.25 8.94823 12.626 8.74718 13.2483L7.28652 17.7694C7.15918 18.1636 7.37548 18.5863 7.76963 18.7137C8.16378 18.841 8.58654 18.6247 8.71388 18.2306L9.03068 17.25H11.2774L11.5942 18.2306C11.7216 18.6247 12.1443 18.841 12.5385 18.7137C12.9326 18.5863 13.1489 18.1636 13.0216 17.7694L11.5609 13.2483C11.3599 12.626 10.7681 12.25 10.154 12.25ZM9.51562 15.7496L10.1544 13.7725L10.7931 15.7496H9.51562Z',
  d8: 'M15.7502 13C15.7502 12.5858 15.4144 12.25 15.0002 12.25C14.586 12.25 14.2502 12.5858 14.2502 13V18C14.2502 18.4142 14.586 18.75 15.0002 18.75C15.4144 18.75 15.7502 18.4142 15.7502 18V13Z',
  d9: 'M8.5 6.75C8.5 4.817 10.067 3.25 12 3.25C13.933 3.25 15.5 4.817 15.5 6.75V8.31016C15.827 8.32177 16.1515 8.33502 16.4748 8.34988C16.8298 8.3662 17.1732 8.42712 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.5 3.71243 6.5 6.75V8.52712C6.82676 8.42712 7.17023 8.3662 7.52522 8.34988C7.84854 8.33502 8.17299 8.32177 8.5 8.31016V6.75Z',
  d10: 'M8.60925 16.5505L10.2371 12.5288L11.8968 16.5505M8.60925 16.5505L7.68359 18.7848M8.60925 16.5505H11.8968M11.8968 16.5505L12.7906 18.7848M14.9498 12.2734V18.7848',
  d11: 'M7.50043 8.96387V6.3418C7.50043 3.94497 9.44344 2.00195 11.8403 2.00195H12.1467C14.5435 2.00195 16.4865 3.94497 16.4865 6.3418V8.96387M4 8.96387H20V21.9984H4V8.96387Z',
  d12: 'M20.75 8.25H3.25V22.75H20.75V8.25ZM11.0081 12.25H9.49252L7.02539 18.4178L8.41811 18.9749L9.10807 17.25H11.3925L12.0825 18.9749L13.4752 18.4178L11.0081 12.25ZM10.7925 15.75H9.70807L10.2503 14.3944L10.7925 15.75ZM15.7503 18.75V12.25H14.2503V18.75H15.7503Z',
  d13: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25H6.5V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25H15.5V6.75C15.5 4.817 13.933 3.25 12 3.25Z',
};

export const IconAiLockStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-stroke-rounded IconAiLockStrokeRounded"
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

export const IconAiLockDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-duotone-rounded IconAiLockDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconAiLockTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-twotone-rounded IconAiLockTwotoneRounded"
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

export const IconAiLockSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-solid-rounded IconAiLockSolidRounded"
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

export const IconAiLockBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-bulk-rounded IconAiLockBulkRounded"
    >
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiLockStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-stroke-sharp IconAiLockStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiLockSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-lock-solid-sharp IconAiLockSolidSharp"
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

export const iconPackOfAiLock: TheIconSelfPack = {
  name: 'AiLock',
  StrokeRounded: IconAiLockStrokeRounded,
  DuotoneRounded: IconAiLockDuotoneRounded,
  TwotoneRounded: IconAiLockTwotoneRounded,
  SolidRounded: IconAiLockSolidRounded,
  BulkRounded: IconAiLockBulkRounded,
  StrokeSharp: IconAiLockStrokeSharp,
  SolidSharp: IconAiLockSolidSharp,
};
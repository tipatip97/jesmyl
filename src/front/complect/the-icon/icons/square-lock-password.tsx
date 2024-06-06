import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.491 15.5H14.5M9.5 15.5H9.50897',
  d2: 'M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z',
  d3: 'M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9',
  d4: 'M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z',
  d5: 'M12 8.25C10.4042 8.25 8.95364 8.28422 7.52522 8.34988C5.46716 8.4445 3.79609 10.0382 3.52452 12.0552C3.37636 13.1556 3.25 14.3118 3.25 15.5C3.25 16.6882 3.37636 17.8444 3.52452 18.9448C3.79609 20.9618 5.46716 22.5555 7.52522 22.6501C8.95364 22.7158 10.4042 22.75 12 22.75C13.5958 22.75 15.0464 22.7158 16.4748 22.6501C18.5328 22.5555 20.2039 20.9618 20.4755 18.9448C20.6236 17.8444 20.75 16.6882 20.75 15.5C20.75 14.3118 20.6236 13.1556 20.4755 12.0552C20.2039 10.0382 18.5328 8.4445 16.4748 8.34989C15.0464 8.28422 13.5958 8.25 12 8.25ZM9.5 14.5C8.94772 14.5 8.5 14.9477 8.5 15.5C8.5 16.0523 8.94772 16.5 9.5 16.5H9.50897C10.0613 16.5 10.509 16.0523 10.509 15.5C10.509 14.9477 10.0613 14.5 9.50897 14.5H9.5ZM14.491 14.5C13.9387 14.5 13.491 14.9477 13.491 15.5C13.491 16.0523 13.9387 16.5 14.491 16.5H14.5C15.0523 16.5 15.5 16.0523 15.5 15.5C15.5 14.9477 15.0523 14.5 14.5 14.5H14.491Z',
  d6: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25C8.5 9.80228 8.05228 10.25 7.5 10.25C6.94772 10.25 6.5 9.80228 6.5 9.25V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25C17.5 9.80228 17.0523 10.25 16.5 10.25C15.9477 10.25 15.5 9.80228 15.5 9.25V6.75C15.5 4.817 13.933 3.25 12 3.25Z',
  d7: 'M7.52522 8.34988C8.95364 8.28422 10.4042 8.25 12 8.25C13.5958 8.25 15.0464 8.28422 16.4748 8.34989C18.5328 8.4445 20.2039 10.0382 20.4755 12.0552C20.6236 13.1556 20.75 14.3118 20.75 15.5C20.75 16.6882 20.6236 17.8444 20.4755 18.9448C20.2039 20.9618 18.5328 22.5555 16.4748 22.6501C15.0464 22.7158 13.5958 22.75 12 22.75C10.4042 22.75 8.95364 22.7158 7.52522 22.6501C5.46716 22.5555 3.79609 20.9618 3.52452 18.9448C3.37636 17.8444 3.25 16.6882 3.25 15.5C3.25 14.3118 3.37636 13.1556 3.52452 12.0552C3.79609 10.0382 5.46716 8.4445 7.52522 8.34988Z',
  d8: 'M8.5 15.5C8.5 14.9477 8.94772 14.5 9.5 14.5H9.50897C10.0613 14.5 10.509 14.9477 10.509 15.5C10.509 16.0523 10.0613 16.5 9.50897 16.5H9.5C8.94772 16.5 8.5 16.0523 8.5 15.5ZM13.491 15.5C13.491 14.9477 13.9387 14.5 14.491 14.5H14.5C15.0523 14.5 15.5 14.9477 15.5 15.5C15.5 16.0523 15.0523 16.5 14.5 16.5H14.491C13.9387 16.5 13.491 16.0523 13.491 15.5Z',
  d9: 'M8.5 6.75C8.5 4.817 10.067 3.25 12 3.25C13.933 3.25 15.5 4.817 15.5 6.75V8.31016C15.827 8.32177 16.1515 8.33502 16.4748 8.34988C16.8298 8.3662 17.1732 8.42712 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.5 3.71243 6.5 6.75V8.52712C6.82676 8.42712 7.17023 8.3662 7.52522 8.34988C7.84854 8.33502 8.17299 8.32177 8.5 8.31016V6.75Z',
  d10: 'M14.4861 15.5H14.4951M9.49512 15.5H9.50409',
  d11: 'M16.4959 9.02315H20V21.999H4V9.02315H7.47206M16.4959 9.02315V6.32244C16.3185 3.22369 13.8284 2.09779 12.21 2.00654C10.3348 1.9008 7.60339 3.30209 7.51329 6.30218L7.47206 9.02315M16.4959 9.02315H7.47206',
  d12: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25H6.5V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25H15.5V6.75C15.5 4.817 13.933 3.25 12 3.25Z',
  d13: 'M20.75 8.25H3.25V22.75H20.75V8.25ZM10.509 14.5H8.5V16.5H10.509V14.5ZM15.5 14.5H13.491V16.5H15.5V14.5Z',
};

export const IconSquareLockPasswordStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-stroke-rounded IconSquareLockPasswordStrokeRounded"
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

export const IconSquareLockPasswordDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-duotone-rounded IconSquareLockPasswordDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
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

export const IconSquareLockPasswordTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-twotone-rounded IconSquareLockPasswordTwotoneRounded"
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

export const IconSquareLockPasswordSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-solid-rounded IconSquareLockPasswordSolidRounded"
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

export const IconSquareLockPasswordBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-bulk-rounded IconSquareLockPasswordBulkRounded"
    >
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockPasswordStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-stroke-sharp IconSquareLockPasswordStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareLockPasswordSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-lock-password-solid-sharp IconSquareLockPasswordSolidSharp"
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

export const iconPackOfSquareLockPassword: TheIconSelfPack = {
  name: 'SquareLockPassword',
  StrokeRounded: IconSquareLockPasswordStrokeRounded,
  DuotoneRounded: IconSquareLockPasswordDuotoneRounded,
  TwotoneRounded: IconSquareLockPasswordTwotoneRounded,
  SolidRounded: IconSquareLockPasswordSolidRounded,
  BulkRounded: IconSquareLockPasswordBulkRounded,
  StrokeSharp: IconSquareLockPasswordStrokeSharp,
  SolidSharp: IconSquareLockPasswordSolidSharp,
};
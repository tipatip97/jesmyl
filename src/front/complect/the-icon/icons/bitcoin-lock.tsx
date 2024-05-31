import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z',
  d2: 'M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9',
  d3: 'M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.5M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.5',
  d4: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25C8.5 9.80228 8.05228 10.25 7.5 10.25C6.94772 10.25 6.5 9.80228 6.5 9.25V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25C17.5 9.80228 17.0523 10.25 16.5 10.25C15.9477 10.25 15.5 9.80228 15.5 9.25V6.75C15.5 4.817 13.933 3.25 12 3.25Z',
  d5: 'M12 8.25C10.4042 8.25 8.95364 8.28422 7.52522 8.34988C5.46716 8.4445 3.79609 10.0382 3.52452 12.0552C3.37636 13.1556 3.25 14.3118 3.25 15.5C3.25 16.6882 3.37636 17.8444 3.52452 18.9448C3.79609 20.9618 5.46716 22.5555 7.52522 22.6501C8.95364 22.7158 10.4042 22.75 12 22.75C13.5958 22.75 15.0464 22.7158 16.4748 22.6501C18.5328 22.5555 20.2039 20.9618 20.4755 18.9448C20.6236 17.8444 20.75 16.6882 20.75 15.5C20.75 14.3118 20.6236 13.1556 20.4755 12.0552C20.2039 10.0382 18.5328 8.4445 16.4748 8.34989C15.0464 8.28422 13.5958 8.25 12 8.25ZM12.75 11.5C12.75 11.0858 12.4142 10.75 12 10.75C11.5858 10.75 11.25 11.0858 11.25 11.5V12.0833H9.5C9.08579 12.0833 8.75 12.4191 8.75 12.8333C8.75 13.2475 9.08579 13.5833 9.5 13.5833H9.6875V17.4167H9.5C9.08579 17.4167 8.75 17.7525 8.75 18.1667C8.75 18.5809 9.08579 18.9167 9.5 18.9167H11.25V19.5C11.25 19.9142 11.5858 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5V18.9167H13.5625C14.5393 18.9167 15.25 18.0868 15.25 17.1667V16.5C15.25 16.1376 15.1398 15.7892 14.9465 15.5C15.1398 15.2108 15.25 14.8624 15.25 14.5V13.8333C15.25 12.9132 14.5393 12.0833 13.5625 12.0833H12.75V11.5ZM11.1875 14.75V13.5833H13.5625C13.6212 13.5833 13.75 13.6489 13.75 13.8333V14.5C13.75 14.6844 13.6212 14.75 13.5625 14.75H11.1875ZM11.1875 16.25H13.5625C13.6212 16.25 13.75 16.3156 13.75 16.5V17.1667C13.75 17.3511 13.6212 17.4167 13.5625 17.4167H11.1875V16.25Z',
  d6: 'M7.52522 8.34988C8.95364 8.28422 10.4042 8.25 12 8.25C13.5958 8.25 15.0464 8.28422 16.4748 8.34989C18.5328 8.4445 20.2039 10.0382 20.4755 12.0552C20.6236 13.1556 20.75 14.3118 20.75 15.5C20.75 16.6882 20.6236 17.8444 20.4755 18.9448C20.2039 20.9618 18.5328 22.5555 16.4748 22.6501C15.0464 22.7158 13.5958 22.75 12 22.75C10.4042 22.75 8.95364 22.7158 7.52522 22.6501C5.46716 22.5555 3.79609 20.9618 3.52452 18.9448C3.37636 17.8444 3.25 16.6882 3.25 15.5C3.25 14.3118 3.37636 13.1556 3.52452 12.0552C3.79609 10.0382 5.46716 8.4445 7.52522 8.34988Z',
  d7: 'M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V12.0833H13.5625C14.5393 12.0833 15.25 12.9132 15.25 13.8333V14.5C15.25 14.8624 15.1398 15.2108 14.9465 15.5C15.1398 15.7892 15.25 16.1376 15.25 16.5V17.1667C15.25 18.0868 14.5393 18.9167 13.5625 18.9167H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V18.9167H9.5C9.08579 18.9167 8.75 18.5809 8.75 18.1667C8.75 17.7525 9.08579 17.4167 9.5 17.4167H9.6875L9.6875 13.5833H9.5C9.08579 13.5833 8.75 13.2475 8.75 12.8333C8.75 12.4191 9.08579 12.0833 9.5 12.0833H11.25V11.5C11.25 11.0858 11.5858 10.75 12 10.75ZM11.1875 13.5833V14.75H13.5625C13.6212 14.75 13.75 14.6844 13.75 14.5V13.8333C13.75 13.6489 13.6212 13.5833 13.5625 13.5833H11.1875ZM13.5625 16.25H11.1875L11.1875 17.4167H13.5625C13.6212 17.4167 13.75 17.3511 13.75 17.1667V16.5C13.75 16.3156 13.6212 16.25 13.5625 16.25Z',
  d8: 'M8.5 6.75C8.5 4.817 10.067 3.25 12 3.25C13.933 3.25 15.5 4.817 15.5 6.75V8.31016C15.827 8.32177 16.1515 8.33502 16.4748 8.34988C16.8298 8.3662 17.1732 8.42712 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.5 3.71243 6.5 6.75V8.52712C6.82676 8.42712 7.17023 8.3662 7.52522 8.34988C7.84854 8.33502 8.17299 8.32177 8.5 8.31016V6.75Z',
  d9: 'M4.00049 22H20.0005L20.0006 9.00014L4.00055 9L4.00049 22Z',
  d10: 'M12.0005 3.25C10.0675 3.25 8.50049 4.817 8.50049 6.75V9.25H6.50049V6.75C6.50049 3.71243 8.96292 1.25 12.0005 1.25C15.0381 1.25 17.5005 3.71243 17.5005 6.75V9.25H15.5005V6.75C15.5005 4.817 13.9335 3.25 12.0005 3.25Z',
  d11: 'M20.7506 8.25015L3.25056 8.25L3.25049 22.75H20.7505L20.7506 8.25015ZM12.7505 12.0833V10.75H11.2505V12.0833H8.75049V13.5833H9.68799V17.4167H8.75049V18.9167H11.2505V20.25H12.7505V18.9167H13.563C14.5398 18.9167 15.2505 18.0868 15.2505 17.1667V16.5C15.2505 16.1376 15.1403 15.7892 14.9469 15.5C15.1403 15.2108 15.2505 14.8624 15.2505 14.5V13.8333C15.2505 12.9132 14.5398 12.0833 13.563 12.0833H12.7505ZM11.188 14.75V13.5833H13.563C13.6217 13.5833 13.7505 13.6489 13.7505 13.8333V14.5C13.7505 14.6844 13.6217 14.75 13.563 14.75H11.188ZM11.188 16.25H13.563C13.6217 16.25 13.7505 16.3156 13.7505 16.5V17.1667C13.7505 17.3511 13.6217 17.4167 13.563 17.4167H11.188V16.25Z',
} as const;

export const IconBitcoinLockStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-stroke-rounded IconBitcoinLockStrokeRounded"
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

export const IconBitcoinLockDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-duotone-rounded IconBitcoinLockDuotoneRounded"
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

export const IconBitcoinLockTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-twotone-rounded IconBitcoinLockTwotoneRounded"
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

export const IconBitcoinLockSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-solid-rounded IconBitcoinLockSolidRounded"
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

export const IconBitcoinLockBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-bulk-rounded IconBitcoinLockBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinLockStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-stroke-sharp IconBitcoinLockStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinLockSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-lock-solid-sharp IconBitcoinLockSolidSharp"
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

export const iconPackOfBitcoinLock: TheIconSelfPack = {
  name: 'BitcoinLock',
  StrokeRounded: IconBitcoinLockStrokeRounded,
  DuotoneRounded: IconBitcoinLockDuotoneRounded,
  TwotoneRounded: IconBitcoinLockTwotoneRounded,
  SolidRounded: IconBitcoinLockSolidRounded,
  BulkRounded: IconBitcoinLockBulkRounded,
  StrokeSharp: IconBitcoinLockStrokeSharp,
  SolidSharp: IconBitcoinLockSolidSharp,
};
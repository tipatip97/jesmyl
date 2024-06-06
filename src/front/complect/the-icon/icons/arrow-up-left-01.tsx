import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7L18 18',
  d2: 'M13 6.13151C13 6.13151 7.36646 5.65662 6.51153 6.51153C5.65661 7.36645 6.13157 13 6.13157 13',
  d3: 'M12.9477 6.06958C12.1005 6.05914 7.01368 5.78975 6.41993 6.38666M6.41993 6.38666C5.82618 6.98356 6.03163 12.16 6.04528 13.0084M6.41993 6.38666L18 18',
  d4: 'M6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289Z',
  d5: 'M6.75558 5.28982C6.47489 5.37173 6.09348 5.51534 5.80437 5.80444C5.51526 6.09355 5.37165 6.47497 5.28973 6.75566C5.19917 7.06599 5.1394 7.41701 5.09818 7.77008C5.01544 8.4788 4.99487 9.31068 5.00093 10.0842C5.00704 10.8637 5.04056 11.6122 5.07231 12.1639C5.08822 12.4403 5.10378 12.6688 5.11541 12.8288C5.12117 12.908 5.13139 13.0376 5.1349 13.0822L5.135 13.0834C5.1814 13.6338 5.66519 14.0429 6.21553 13.9965C6.76583 13.9501 7.17433 13.4664 7.12799 12.9161C7.12487 12.8765 7.11565 12.7595 7.11014 12.6838C7.09914 12.5323 7.08426 12.314 7.06901 12.0489C7.03842 11.5176 7.00663 10.8042 7.00087 10.0685C6.99505 9.32682 7.01604 8.59001 7.08469 8.002C7.11916 7.7067 7.18838 7.39695 7.23548 7.23556C7.39687 7.18846 7.70663 7.11924 8.00194 7.08476C8.58995 7.01611 9.32676 6.99512 10.0685 7.00092C10.8042 7.00668 11.5175 7.03846 12.0489 7.06904C12.314 7.0843 12.5323 7.09917 12.6837 7.11017C12.7594 7.11567 12.876 7.12485 12.9156 7.12797C13.4659 7.17431 13.95 6.76584 13.9964 6.21554C14.0428 5.6652 13.6343 5.18146 13.0839 5.13507L13.0817 5.13489C13.0361 5.1313 12.9074 5.12115 12.8287 5.11543C12.6687 5.1038 12.4402 5.08825 12.1638 5.07234C11.6122 5.0406 10.8637 5.00709 10.0841 5.00099C9.3106 4.99493 8.47872 5.01551 7.77 5.09826C7.41693 5.13948 7.06591 5.19925 6.75558 5.28982Z',
  d6: 'M12.9947 6L6 6.00024L6.00004 12.962M18 18L6.28019 6.28042',
  d7: 'M8.41508 7H13.001V5H5.00098V13H7.00098V8.41432L17.5869 19.0002L19.0011 17.586L8.41508 7Z',
};

export const IconArrowUpLeft01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-stroke-rounded IconArrowUpLeft01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpLeft01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-duotone-rounded IconArrowUpLeft01DuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpLeft01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-twotone-rounded IconArrowUpLeft01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpLeft01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-solid-rounded IconArrowUpLeft01SolidRounded"
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

export const IconArrowUpLeft01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-bulk-rounded IconArrowUpLeft01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowUpLeft01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-stroke-sharp IconArrowUpLeft01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowUpLeft01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-up-left-01-solid-sharp IconArrowUpLeft01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowUpLeft01: TheIconSelfPack = {
  name: 'ArrowUpLeft01',
  StrokeRounded: IconArrowUpLeft01StrokeRounded,
  DuotoneRounded: IconArrowUpLeft01DuotoneRounded,
  TwotoneRounded: IconArrowUpLeft01TwotoneRounded,
  SolidRounded: IconArrowUpLeft01SolidRounded,
  BulkRounded: IconArrowUpLeft01BulkRounded,
  StrokeSharp: IconArrowUpLeft01StrokeSharp,
  SolidSharp: IconArrowUpLeft01SolidSharp,
};
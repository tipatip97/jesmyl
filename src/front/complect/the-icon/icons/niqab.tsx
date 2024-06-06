import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5C10.3431 5 9 6.33121 9 7.97334V14.9111C9 16.0413 9.00455 17.2286 10.2346 17.7336C11.1 18.0888 12.9 18.0888 13.7654 17.7336C14.9954 17.2286 15 16.0413 15 14.9111V7.97334C15 6.33121 13.6569 5 12 5Z',
  d2: 'M17.8022 7.51864C17.8022 4.47078 15.2045 2 12 2C8.79554 2 6.19782 4.47078 6.19782 7.51864C6.19782 9.61659 5.45992 13.4691 3.05841 16.4349C2.31105 17.3578 1.93737 17.8193 2.00859 18.244C2.0798 18.6687 2.48003 18.9288 3.28049 19.4489C8.51571 22.8504 15.4843 22.8504 20.7195 19.4489C21.52 18.9288 21.9202 18.6687 21.9914 18.244C22.0626 17.8193 21.689 17.3578 20.9416 16.4349C18.5401 13.4691 17.8022 9.61659 17.8022 7.51864Z',
  d3: 'M9 8H15',
  d4: 'M9 11H15',
  d5: 'M12 2C15.2045 2 17.8022 4.47078 17.8022 7.51864C17.8022 9.61659 18.5401 13.4691 20.9416 16.4349C21.6889 17.3578 22.0626 17.8193 21.9914 18.244C21.9202 18.6687 21.52 18.9288 20.7195 19.4489C15.4843 22.8504 8.51571 22.8504 3.28049 19.4489C2.48003 18.9288 2.0798 18.6687 2.00859 18.244C1.93737 17.8193 2.31105 17.3578 3.0584 16.4349C5.45991 13.4691 6.19782 9.61659 6.19782 7.51864C6.19782 4.47078 8.79554 2 12 2ZM9 11H15V8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V11Z',
  d6: 'M9 8H15M9 11H15M12 5C10.3431 5 9 6.33121 9 7.97334V14.9111C9 16.0413 9.00455 17.2286 10.2346 17.7336C11.1 18.0888 12.9 18.0888 13.7654 17.7336C14.9954 17.2286 15 16.0413 15 14.9111V7.97334C15 6.33121 13.6569 5 12 5Z',
  d7: 'M12.0001 1.25C8.41731 1.25 5.44794 4.0216 5.44794 7.51864C5.44794 9.49614 4.74062 13.1658 2.47566 15.9629L2.44681 15.9985C2.09784 16.4294 1.79351 16.8052 1.59121 17.1279C1.38428 17.458 1.18698 17.8786 1.26904 18.368C1.3441 18.8157 1.59759 19.1301 1.87698 19.3748C2.12711 19.5939 2.46633 19.8143 2.83235 20.052L2.872 20.0778C8.3557 23.6407 15.6446 23.6407 21.1283 20.0778L21.1679 20.0521C21.5339 19.8143 21.8731 19.594 22.1233 19.3748C22.4027 19.1301 22.6562 18.8157 22.7312 18.368C22.8133 17.8786 22.616 17.458 22.409 17.1279C22.2068 16.8052 21.9024 16.4294 21.5534 15.9985L21.5246 15.9629C19.2596 13.1658 18.5523 9.49614 18.5523 7.51864C18.5523 4.0216 15.5829 1.25 12.0001 1.25ZM12 4.25C9.93527 4.25 8.25001 5.9107 8.25001 7.97334L8.25001 14.9111L8.25001 14.9509C8.24989 15.4842 8.24973 16.1642 8.43949 16.7782C8.65176 17.4651 9.10155 18.0791 9.94981 18.4274C10.5138 18.6589 11.293 18.75 12 18.75C12.707 18.75 13.4862 18.6589 14.0502 18.4274C14.8985 18.0791 15.3483 17.4651 15.5605 16.7782C15.7503 16.1642 15.7501 15.4842 15.75 14.9509L15.75 14.9111V7.97334C15.75 5.9107 14.0648 4.25 12 4.25Z',
  d8: 'M11.9996 5.75C10.8194 5.75 9.86066 6.64435 9.75856 7.77349C9.74861 7.8835 9.83911 7.97334 9.94957 7.97334H14.0496C14.16 7.97334 14.2505 7.8835 14.2406 7.77349C14.1385 6.64435 13.1797 5.75 11.9996 5.75Z',
  d9: 'M9.75 14.9111C9.75 15.5024 9.75731 15.9623 9.8726 16.3353C9.97012 16.6509 10.1376 16.883 10.5195 17.0398C10.8208 17.1635 11.3743 17.25 12 17.25C12.6257 17.25 13.1792 17.1635 13.4805 17.0398C13.8624 16.883 14.0299 16.6509 14.1274 16.3353C14.2427 15.9623 14.25 15.5024 14.25 14.9111V10.9C14.25 10.7114 14.25 10.6172 14.1914 10.5586C14.1328 10.5 14.0386 10.5 13.85 10.5H10.15C9.96144 10.5 9.86716 10.5 9.80858 10.5586C9.75 10.6172 9.75 10.7114 9.75 10.9V14.9111Z',
  d10: 'M12 5C10.3431 5 9 6.33121 9 7.97334V18H15V7.97334C15 6.33121 13.6569 5 12 5Z',
  d11: 'M17.8024 7.51864C17.8024 4.47078 15.2046 2 12.0002 2C8.79573 2 6.198 4.47078 6.198 7.51864C6.198 9.61659 4.40151 15.0343 2 18C8.00402 23.3333 15.996 23.3333 22 18C19.5985 15.0343 17.8024 9.61659 17.8024 7.51864Z',
  d12: 'M12 5.75C10.751 5.75 9.75 6.75172 9.75 7.97334V8H14.25V7.97334C14.25 6.75172 13.249 5.75 12 5.75Z',
  d13: 'M9.75 17.25V11H14.25V17.25H9.75Z',
  d14: 'M12.0002 1.25C8.42834 1.25 5.46806 4.0216 5.46806 7.51864C5.46806 8.42795 5.06045 10.2031 4.32137 12.1693C3.58898 14.1178 2.57674 16.1317 1.44953 17.528L1 18.0849L1.53405 18.5607C7.80293 24.1464 16.1971 24.1464 22.4659 18.5607L23 18.0849L22.5505 17.528C21.4233 16.1317 20.4111 14.1178 19.6788 12.1693C18.9398 10.2031 18.5323 8.42797 18.5323 7.51864C18.5323 4.0216 15.572 1.25 12.0002 1.25ZM8.25 7.97334C8.25 5.91069 9.93526 4.25 12 4.25C14.0647 4.25 15.75 5.91069 15.75 7.97334V18.75H8.25V7.97334Z',
};

export const IconNiqabStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-stroke-rounded IconNiqabStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNiqabDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-duotone-rounded IconNiqabDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNiqabTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-twotone-rounded IconNiqabTwotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNiqabSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-solid-rounded IconNiqabSolidRounded"
    >
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

export const IconNiqabBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-bulk-rounded IconNiqabBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNiqabStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-stroke-sharp IconNiqabStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNiqabSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="niqab-solid-sharp IconNiqabSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNiqab: TheIconSelfPack = {
  name: 'Niqab',
  StrokeRounded: IconNiqabStrokeRounded,
  DuotoneRounded: IconNiqabDuotoneRounded,
  TwotoneRounded: IconNiqabTwotoneRounded,
  SolidRounded: IconNiqabSolidRounded,
  BulkRounded: IconNiqabBulkRounded,
  StrokeSharp: IconNiqabStrokeSharp,
  SolidSharp: IconNiqabSolidSharp,
};
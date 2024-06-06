import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 20L12 18.5M16 20V18.5M20 20V18.5',
  d2: 'M10 20L22 20',
  d3: 'M21.5556 11H10.4444C10.199 11 10 11.2487 10 11.5556C10 14.0102 11.5919 16 13.5556 16H18.4444C20.4081 16 22 14.0102 22 11.5556C22 11.2487 21.801 11 21.5556 11Z',
  d4: 'M13 8C14.652 6.97775 12.348 5.02225 14 4M16 8C17.652 6.97775 15.348 5.02225 17 4M19 8C20.652 6.97775 18.348 5.02225 20 4',
  d5: 'M10 11L8 9',
  d6: 'M3.36797 4.36797C3.85859 3.87734 4.65404 3.87734 5.14466 4.36797L7.63203 6.85534C8.12266 7.34596 8.12266 8.14141 7.63203 8.63203C7.14141 9.12266 6.34596 9.12266 5.85534 8.63203L3.36797 6.14466C2.87734 5.65404 2.87734 4.85859 3.36797 4.36797Z',
  d7: 'M12 20V18.5M16 20V18.5M20 20V18.5M10 20H22',
  d8: 'M11.5 17.75C11.9142 17.75 12.25 18.0858 12.25 18.5V19.25H14.75V18.5C14.75 18.0858 15.0858 17.75 15.5 17.75C15.9142 17.75 16.25 18.0858 16.25 18.5V19.25H18.75V18.5C18.75 18.0858 19.0858 17.75 19.5 17.75C19.9142 17.75 20.25 18.0858 20.25 18.5V19.25H21.5C21.9142 19.25 22.25 19.5858 22.25 20C22.25 20.4142 21.9142 20.75 21.5 20.75H9.5C9.08579 20.75 8.75 20.4142 8.75 20C8.75 19.5858 9.08579 19.25 9.5 19.25H10.75V18.5C10.75 18.0858 11.0858 17.75 11.5 17.75Z',
  d9: 'M8.75 11.5556C8.75 10.9993 9.13725 10.25 9.94444 10.25H21.0556C21.8628 10.25 22.25 10.9993 22.25 11.5556C22.25 14.2595 20.4699 16.75 17.9444 16.75H13.0556C10.5301 16.75 8.75 14.2595 8.75 11.5556Z',
  d10: 'M14.1379 3.60533C14.3558 3.95756 14.247 4.41979 13.8948 4.63775C13.6743 4.77416 13.6379 4.88755 13.6236 5.0039C13.6001 5.19585 13.6443 5.43581 13.7327 5.83957C13.736 5.85446 13.7394 5.86966 13.7428 5.88516C13.8174 6.22432 13.9234 6.70632 13.8654 7.17888C13.7954 7.74864 13.5003 8.26303 12.8948 8.63775C12.5425 8.85571 12.0803 8.74686 11.8623 8.39463C11.6444 8.0424 11.7532 7.58017 12.1055 7.36221C12.3259 7.2258 12.3623 7.11241 12.3766 6.99606C12.4001 6.80411 12.3559 6.56415 12.2675 6.1604C12.2642 6.14551 12.2609 6.1303 12.2574 6.1148C12.1828 5.77564 12.0768 5.29364 12.1348 4.82108C12.2048 4.25132 12.4999 3.73693 13.1055 3.36221C13.4577 3.14425 13.9199 3.2531 14.1379 3.60533ZM17.1379 3.60533C17.3558 3.95756 17.247 4.41979 16.8948 4.63775C16.6743 4.77416 16.6379 4.88755 16.6236 5.0039C16.6001 5.19585 16.6443 5.43581 16.7327 5.83957C16.736 5.85445 16.7394 5.86966 16.7428 5.88515C16.8174 6.22432 16.9234 6.70632 16.8654 7.17888C16.7954 7.74864 16.5003 8.26303 15.8948 8.63775C15.5425 8.85571 15.0803 8.74686 14.8623 8.39463C14.6444 8.0424 14.7532 7.58017 15.1055 7.36221C15.3259 7.2258 15.3623 7.11241 15.3766 6.99606C15.4001 6.80411 15.3559 6.56415 15.2675 6.1604C15.2642 6.14551 15.2609 6.1303 15.2574 6.1148C15.1828 5.77564 15.0768 5.29364 15.1348 4.82108C15.2048 4.25132 15.4999 3.73693 16.1055 3.36221C16.4577 3.14425 16.9199 3.2531 17.1379 3.60533ZM20.1379 3.60533C20.3558 3.95756 20.247 4.41979 19.8948 4.63775C19.6743 4.77416 19.6379 4.88755 19.6236 5.0039C19.6001 5.19585 19.6443 5.43581 19.7327 5.83957C19.736 5.85445 19.7394 5.86966 19.7428 5.88515C19.8174 6.22432 19.9234 6.70632 19.8654 7.17888C19.7954 7.74864 19.5003 8.26303 18.8948 8.63775C18.5425 8.85571 18.0803 8.74686 17.8623 8.39463C17.6444 8.0424 17.7532 7.58017 18.1055 7.36221C18.3259 7.2258 18.3623 7.11241 18.3766 6.99606C18.4001 6.80411 18.3559 6.56415 18.2675 6.1604C18.2642 6.14551 18.2609 6.13031 18.2574 6.11481C18.1828 5.77564 18.0768 5.29364 18.1348 4.82108C18.2048 4.25132 18.4999 3.73693 19.1055 3.36221C19.4577 3.14425 19.9199 3.2531 20.1379 3.60533Z',
  d11: 'M6.96967 8.46967C7.26256 8.17678 7.73744 8.17678 8.03033 8.46967L10.0303 10.4697C10.3232 10.7626 10.3232 11.2374 10.0303 11.5303C9.73744 11.8232 9.26256 11.8232 8.96967 11.5303L6.96967 9.53033C6.67678 9.23744 6.67678 8.76256 6.96967 8.46967Z',
  d12: 'M2.33764 3.83764C3.12115 3.05412 4.39148 3.05412 5.17499 3.83764L7.66236 6.32501C8.44588 7.10852 8.44588 8.37885 7.66236 9.16236C6.87885 9.94588 5.60852 9.94588 4.82501 9.16236L2.33764 6.67499C1.55412 5.89148 1.55412 4.62115 2.33764 3.83764Z',
  d13: 'M21 11H9V12C9 14.2091 10.7909 16 13 16H16.9998C19.209 16 20.9999 14.209 20.9998 11.9998L21 11Z',
  d14: 'M9 11L6.5 8.5',
  d15: 'M2.36797 4.36797C2.85859 3.87734 3.65404 3.87734 4.14466 4.36797L6.63203 6.85534C7.12266 7.34596 7.12266 8.14141 6.63203 8.63203C6.14141 9.12266 5.34596 9.12266 4.85534 8.63203L2.36797 6.14466C1.87734 5.65404 1.87734 4.85859 2.36797 4.36797Z',
  d16: 'M11 20V18M15 20V18M19 20V18M8 20H22',
  d17: 'M12 4V8',
  d18: 'M15.5 4V8',
  d19: 'M19 4V8',
  d20: 'M22.1248 11.8747C22.1248 14.4981 19.9982 16.625 17.3748 16.625H13.375C10.7516 16.625 8.625 14.4984 8.625 11.875V10.125H22.1252L22.1248 11.8747Z',
  d21: 'M7.58218 7.66785L10.0822 10.1678L8.66797 11.5821L6.16797 9.08206L7.58218 7.66785Z',
  d22: 'M2.21264 3.71264C2.99615 2.92912 4.26648 2.92912 5.04999 3.71264L7.53736 6.20001C8.32088 6.98352 8.32088 8.25385 7.53736 9.03736C6.75385 9.82088 5.48352 9.82088 4.70001 9.03736L2.21264 6.54999C1.42912 5.76648 1.42912 4.49615 2.21264 3.71264Z',
  d23: 'M10.375 18.875H8.375V20.875H22.375V18.875H20.375V17.875H18.375V18.875H16.375V17.875H14.375V18.875H12.375V17.875H10.375V18.875Z',
  d24: 'M11.375 7.875V3.875H13.375V7.875H11.375Z',
  d25: 'M14.875 7.875V3.875H16.875V7.875H14.875Z',
  d26: 'M18.375 7.875V3.875H20.375V7.875H18.375Z',
};

export const IconPan03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-stroke-rounded IconPan03StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPan03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-duotone-rounded IconPan03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPan03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-twotone-rounded IconPan03TwotoneRounded"
    >
      <path 
        d={d.d7} 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPan03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-solid-rounded IconPan03SolidRounded"
    >
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPan03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-bulk-rounded IconPan03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPan03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-stroke-sharp IconPan03StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPan03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-03-solid-sharp IconPan03SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPan03: TheIconSelfPack = {
  name: 'Pan03',
  StrokeRounded: IconPan03StrokeRounded,
  DuotoneRounded: IconPan03DuotoneRounded,
  TwotoneRounded: IconPan03TwotoneRounded,
  SolidRounded: IconPan03SolidRounded,
  BulkRounded: IconPan03BulkRounded,
  StrokeSharp: IconPan03StrokeSharp,
  SolidSharp: IconPan03SolidSharp,
};
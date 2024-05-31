import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 16.5C11 16.5 12.5 17 13.25 19C13.25 19 16.8235 13.1667 20 12',
  d2: 'M4 5H18',
  d3: 'M4 10H15',
  d4: 'M4 15H8',
  d5: 'M18 5H4V15H8L18 5Z',
  d6: 'M20.939 11.6555C21.1294 12.1739 20.8635 12.7486 20.345 12.939C19.7265 13.1661 19.0196 13.6518 18.2783 14.326C17.548 14.9902 16.8394 15.7862 16.2133 16.5646C15.5891 17.3405 15.0591 18.0835 14.6849 18.6333C14.4982 18.9076 14.3511 19.1326 14.2514 19.2878C14.2016 19.3654 14.1636 19.4254 14.1386 19.4654L14.1108 19.5101L14.1043 19.5205L14.103 19.5226C13.9033 19.8484 13.5353 20.0321 13.155 19.9957C12.7745 19.9593 12.4481 19.7092 12.3139 19.3514C12.0098 18.5403 11.5653 18.0579 11.2193 17.7811C11.044 17.6409 10.7716 17.4961 10.6707 17.4444C10.1553 17.2647 9.87843 16.7035 10.0516 16.184C10.2262 15.6601 10.7926 15.3769 11.3165 15.5516C11.3823 15.5788 11.6006 15.6675 11.7027 15.7198C11.9065 15.8243 12.1753 15.9847 12.4687 16.2194C12.7448 16.4403 13.0403 16.7253 13.3223 17.0874C13.6843 16.5715 14.1382 15.9532 14.6549 15.311C15.3192 14.4851 16.0996 13.6041 16.9327 12.8464C17.7548 12.0987 18.6858 11.4177 19.6555 11.0616C20.1739 10.8712 20.7486 11.1371 20.939 11.6555Z',
  d7: 'M3 5C3 4.44772 3.44772 4 4 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H4C3.44772 6 3 5.55228 3 5Z',
  d8: 'M3 10C3 9.44772 3.44772 9 4 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H4C3.44772 11 3 10.5523 3 10Z',
  d9: 'M3 15C3 14.4477 3.44772 14 4 14H8C8.55228 14 9 14.4477 9 15C9 15.5523 8.55228 16 8 16H4C3.44772 16 3 15.5523 3 15Z',
  d10: 'M11 16.5L13.25 19L20 12',
  d11: 'M21 11.5075L12.8108 20L9.17376 15.9589L10.6603 14.6209L12.8613 17.0664L19.5603 10.1192L21 11.5075Z',
  d12: 'M3 4H19V6H3V4Z',
  d13: 'M3 9H16V11H3V9Z',
  d14: 'M3 14H7V16H3V14Z',
} as const;

export const IconTextCheckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-stroke-rounded IconTextCheckStrokeRounded"
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

export const IconTextCheckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-duotone-rounded IconTextCheckDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconTextCheckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-twotone-rounded IconTextCheckTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTextCheckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-solid-rounded IconTextCheckSolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCheckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-bulk-rounded IconTextCheckBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextCheckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-stroke-sharp IconTextCheckStrokeSharp"
    >
      <path 
        d={d.d10} 
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
    </TheIconWrapper>
  );
};

export const IconTextCheckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-check-solid-sharp IconTextCheckSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTextCheck: TheIconSelfPack = {
  name: 'TextCheck',
  StrokeRounded: IconTextCheckStrokeRounded,
  DuotoneRounded: IconTextCheckDuotoneRounded,
  TwotoneRounded: IconTextCheckTwotoneRounded,
  SolidRounded: IconTextCheckSolidRounded,
  BulkRounded: IconTextCheckBulkRounded,
  StrokeSharp: IconTextCheckStrokeSharp,
  SolidSharp: IconTextCheckSolidSharp,
};
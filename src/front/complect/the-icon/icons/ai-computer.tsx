import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.014 2C6.23617 2 4.34725 2 3.17362 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17362 16.8284C4.34725 18 6.23617 18 10.014 18H14.021C17.7989 18 19.6878 18 20.8614 16.8284C21.671 16.0203 21.9221 14.8723 22 13',
  d2: 'M12 18V22',
  d3: 'M8 22H16',
  d4: 'M11 15H13',
  d5: 'M18 4H16C15.0572 4 14.5858 4 14.2929 4.29289C14 4.58579 14 5.05719 14 6V8C14 8.94281 14 9.41421 14.2929 9.70711C14.5858 10 15.0572 10 16 10H18C18.9428 10 19.4142 10 19.7071 9.70711C20 9.41421 20 8.94281 20 8V6C20 5.05719 20 4.58579 19.7071 4.29289C19.4142 4 18.9428 4 18 4Z',
  d6: 'M15.5 10V12M18.5 10V12M15.5 2V4M18.5 2V4M14 5.5H12M14 8.5H12M22 5.5H20M22 8.5H20',
  d7: 'M10 18H14C17.7712 18 19.6569 18 20.8284 16.8284C22 15.6569 22 13.7712 22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17157 16.8284C4.34315 18 6.22876 18 10 18ZM16 4H18C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6V8C20 8.94281 20 9.41421 19.7071 9.70711C19.4142 10 18.9428 10 18 10H16C15.0572 10 14.5858 10 14.2929 9.70711C14 9.41421 14 8.94281 14 8V6C14 5.05719 14 4.58579 14.2929 4.29289C14.5858 4 15.0572 4 16 4Z',
  d8: 'M9.99202 2C6.22524 2 4.34185 2 3.17165 3.17157C2.00146 4.34315 2.00146 6.22876 2.00146 10C2.00146 13.7712 2.00146 15.6569 3.17165 16.8284C4.34185 18 6.22524 18 9.99202 18H13.9873C17.7541 18 19.6375 18 20.8077 16.8284C21.6149 16.0203 21.8653 14.8723 21.943 13',
  d9: 'M11.9722 18V22',
  d10: 'M7.98389 22H15.9605',
  d11: 'M10.9751 15H12.9692',
  d12: 'M15.4425 2.00195V3.98097M11.9722 5.50233H14.0143M19.9567 5.50233H21.9989M19.9567 8.47556H21.9989M11.9722 8.47556H14.0143M15.4425 10.0212V12.0002M18.4534 10.0212V12.0002M18.4427 2.00195V3.98097M15.0095 9.96951H18.9615C19.5112 9.96951 19.9567 9.5218 19.9567 8.96951V4.98097C19.9567 4.42869 19.5112 3.98097 18.9615 3.98097H15.0095C14.4599 3.98097 14.0143 4.42869 14.0143 4.98097V8.96951C14.0143 9.5218 14.4599 9.96951 15.0095 9.96951Z',
  d13: 'M9.98773 1.25L10.0591 1.25C10.5989 1.25 11.0364 1.68754 11.0364 2.22727C11.0364 2.76701 10.5989 3.20455 10.0591 3.20455C8.18557 3.20455 6.87854 3.20661 5.89229 3.33898C4.93399 3.4676 4.42622 3.70293 4.06465 4.06386C3.70332 4.42456 3.4679 4.93074 3.33917 5.88656C3.20663 6.87067 3.20455 8.17502 3.20455 10.0455C3.20455 11.9159 3.20663 13.2202 3.33917 14.2043C3.4679 15.1602 3.70332 15.6664 4.06465 16.0271C4.42622 16.388 4.93399 16.6233 5.89229 16.7519C6.87854 16.8843 8.18557 16.8864 10.0591 16.8864H13.9751C15.8486 16.8864 17.1557 16.8843 18.1419 16.7519C19.1002 16.6233 19.608 16.388 19.9696 16.0271C20.4727 15.5248 20.7207 14.7542 20.7963 12.9367C20.8187 12.3974 21.2741 11.9784 21.8133 12.0008C22.3526 12.0233 22.7716 12.4786 22.7491 13.0179C22.6725 14.8598 22.4297 16.333 21.3504 17.4103C20.565 18.1943 19.5763 18.5315 18.4019 18.6891C17.2705 18.841 15.8318 18.8409 14.0465 18.8409H12.9773V20.7955H15.9091C16.4488 20.7955 16.8864 21.233 16.8864 21.7727C16.8864 22.3125 16.4488 22.75 15.9091 22.75H8.09091C7.55117 22.75 7.11363 22.3125 7.11363 21.7727C7.11363 21.233 7.55117 20.7955 8.09091 20.7955H11.0227V18.8409H9.98771C8.2024 18.8409 6.76373 18.841 5.6323 18.6891C4.45788 18.5315 3.46918 18.1943 2.68379 17.4103C1.89817 16.6261 1.56012 15.6384 1.40211 14.4652C1.24995 13.3354 1.24997 11.899 1.25 10.1171V9.97385C1.24997 8.19193 1.24995 6.75547 1.40211 5.62568C1.56012 4.4525 1.89817 3.46483 2.68379 2.68058C3.46918 1.89657 4.45788 1.55942 5.6323 1.4018C6.76374 1.24995 8.20241 1.24997 9.98773 1.25Z',
  d14: 'M10 15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H11C10.4477 16 10 15.5523 10 15Z',
  d15: 'M15.5 1.25C15.9142 1.25 16.25 1.58579 16.25 2V3.25H17.75V2C17.75 1.58579 18.0858 1.25 18.5 1.25C18.9142 1.25 19.25 1.58579 19.25 2V3.30087C19.5896 3.35268 19.9437 3.4688 20.2374 3.76256C20.5312 4.05633 20.6473 4.41037 20.6991 4.75H22C22.4142 4.75 22.75 5.08579 22.75 5.5C22.75 5.91421 22.4142 6.25 22 6.25H20.75V7.75H22C22.4142 7.75 22.75 8.08579 22.75 8.5C22.75 8.91421 22.4142 9.25 22 9.25H20.6991C20.6473 9.58963 20.5312 9.94367 20.2374 10.2374C19.9437 10.5312 19.5896 10.6473 19.25 10.6991V12C19.25 12.4142 18.9142 12.75 18.5 12.75C18.0858 12.75 17.75 12.4142 17.75 12V10.75H16.25V12C16.25 12.4142 15.9142 12.75 15.5 12.75C15.0858 12.75 14.75 12.4142 14.75 12V10.6991C14.4104 10.6473 14.0563 10.5312 13.7626 10.2374C13.4688 9.94367 13.3527 9.58963 13.3009 9.25H12C11.5858 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75H13.25V6.25H12C11.5858 6.25 11.25 5.91421 11.25 5.5C11.25 5.08579 11.5858 4.75 12 4.75H13.3009C13.3527 4.41037 13.4688 4.05633 13.7626 3.76256C14.0563 3.4688 14.4104 3.35268 14.75 3.30087V2C14.75 1.58579 15.0858 1.25 15.5 1.25Z',
  d16: 'M11.0142 2.00022L2 2L2.00034 18.0002L22 18L22.0002 13.0002',
  d17: 'M10.5 15H13.5',
  d18: 'M20 4H14V10H20V4Z',
  d19: 'M12 18.0015V22.0001M8 22.0001H16',
  d20: 'M1.25 1.25L11.0366 1.25024L11.0365 3.20478L3.20457 3.20459L3.20486 16.8866L20.7953 16.8864L20.7955 12.9775L22.75 12.9775L22.7497 18.8409L12.9772 18.841V20.7955H15.909V22.75H8.09086V20.7955H11.0226V18.841L1.25037 18.8411L1.25 1.25Z',
  d21: 'M13.5 16H10.5V14H13.5V16Z',
  d22: 'M15 3V1.25H16.5V3H18V1.25H19.5V3H21V4.5H22.75V6H21V7.5H22.75V9H21V10.5H19.5V12.25H18V10.5H16.5V12.25H15V10.5H13.5V9H11.75V7.5H13.5V6H11.75V4.5H13.5V3H15Z',
} as const;

export const IconAiComputerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-stroke-rounded IconAiComputerStrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiComputerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-duotone-rounded IconAiComputerDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiComputerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-twotone-rounded IconAiComputerTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiComputerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-solid-rounded IconAiComputerSolidRounded"
    >
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
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiComputerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-bulk-rounded IconAiComputerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiComputerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-stroke-sharp IconAiComputerStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconAiComputerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-computer-solid-sharp IconAiComputerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfAiComputer: TheIconSelfPack = {
  name: 'AiComputer',
  StrokeRounded: IconAiComputerStrokeRounded,
  DuotoneRounded: IconAiComputerDuotoneRounded,
  TwotoneRounded: IconAiComputerTwotoneRounded,
  SolidRounded: IconAiComputerSolidRounded,
  BulkRounded: IconAiComputerBulkRounded,
  StrokeSharp: IconAiComputerStrokeSharp,
  SolidSharp: IconAiComputerSolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 11C2 6.75736 2 4.63604 3.17157 3.31802C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.8284 18.682C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.682C2 17.364 2 15.2426 2 11Z',
  d2: 'M6 20V22M18 20V22',
  d3: 'M12 7V20',
  d4: 'M9 13V14',
  d5: 'M15 13V14',
  d6: 'M2 7H22',
  d7: 'M10 20H14C17.7712 20 19.6569 20 20.8284 18.682C22 17.364 22 15.2426 22 11C22 9.38277 22 8.07377 21.9351 7H2.06489C2 8.07377 2 9.38277 2 11C2 15.2426 2 17.364 3.17157 18.682C4.34315 20 6.22876 20 10 20Z',
  d8: 'M6 18.75C6.55228 18.75 7 19.1977 7 19.75V21.75C7 22.3023 6.55228 22.75 6 22.75C5.44772 22.75 5 22.3023 5 21.75V19.75C5 19.1977 5.44772 18.75 6 18.75ZM18 18.75C18.5523 18.75 19 19.1977 19 19.75V21.75C19 22.3023 18.5523 22.75 18 22.75C17.4477 22.75 17 22.3023 17 21.75V19.75C17 19.1977 17.4477 18.75 18 18.75Z',
  d9: 'M9.93748 1.25H14.0625C15.895 1.24998 17.356 1.24996 18.5013 1.42319C19.691 1.60314 20.6458 1.98363 21.389 2.81975C22.1209 3.64318 22.4436 4.67956 22.5983 5.97328C22.6159 6.12131 22.4991 6.25 22.3501 6.25H1.64995C1.50086 6.25 1.38406 6.12131 1.40175 5.97328C1.55636 4.67956 1.87907 3.64318 2.61102 2.81975C3.35423 1.98363 4.30896 1.60314 5.49875 1.42319C6.64403 1.24996 8.10496 1.24998 9.93748 1.25ZM22.6392 7.8358C22.7267 7.9216 22.7294 8.05787 22.7347 8.3304C22.75 9.11174 22.75 9.98136 22.75 10.9484V10.9485V10.9486V10.9487V10.9487V10.9488V11.0513C22.75 13.1292 22.75 14.7568 22.5983 16.0267C22.4436 17.3204 22.1209 18.3568 21.389 19.1803C20.6458 20.0164 19.691 20.3969 18.5013 20.5768C17.356 20.75 15.8951 20.75 14.0625 20.75H13.35C13.0672 20.75 12.9257 20.75 12.8379 20.6621C12.75 20.5743 12.75 20.4328 12.75 20.15V8.35C12.75 8.06716 12.75 7.92573 12.8379 7.83787C12.9257 7.75 13.0672 7.75 13.35 7.75H22.1391C22.4142 7.75 22.5517 7.75 22.6392 7.8358ZM10.65 20.75C10.9328 20.75 11.0743 20.75 11.1621 20.6621C11.25 20.5743 11.25 20.4328 11.25 20.15V8.35C11.25 8.06716 11.25 7.92573 11.1621 7.83787C11.0743 7.75 10.9328 7.75 10.65 7.75H1.86093C1.58584 7.75 1.4483 7.75 1.3608 7.8358C1.2733 7.9216 1.27063 8.05787 1.26529 8.3304C1.24999 9.11185 1.25 9.98152 1.25 10.9488V11.0512C1.24999 13.1291 1.24998 14.7568 1.40175 16.0267C1.55636 17.3204 1.87907 18.3568 2.61102 19.1803C3.35423 20.0164 4.30896 20.3969 5.49875 20.5768C6.64403 20.75 8.10495 20.75 9.93746 20.75H10.65ZM9 12.25C9.41421 12.25 9.75 12.5858 9.75 13V14C9.75 14.4142 9.41421 14.75 9 14.75C8.58579 14.75 8.25 14.4142 8.25 14V13C8.25 12.5858 8.58579 12.25 9 12.25ZM15.75 13C15.75 12.5858 15.4142 12.25 15 12.25C14.5858 12.25 14.25 12.5858 14.25 13V14C14.25 14.4142 14.5858 14.75 15 14.75C15.4142 14.75 15.75 14.4142 15.75 14V13Z',
  d10: 'M14.0625 1.25H9.93748C8.10496 1.24998 6.64403 1.24996 5.49875 1.42319C4.30896 1.60315 3.35423 1.98363 2.61102 2.81975C1.87907 3.64319 1.55636 4.67956 1.40175 5.97328C1.38406 6.12131 1.50086 6.25 1.64995 6.25H22.3501C22.4991 6.25 22.6159 6.12131 22.5983 5.97328C22.4436 4.67956 22.1209 3.64319 21.389 2.81975C20.6458 1.98363 19.691 1.60315 18.5013 1.42319C17.356 1.24996 15.895 1.24998 14.0625 1.25Z',
  d11: 'M22.7347 8.33041C22.7294 8.05787 22.7267 7.9216 22.6392 7.8358C22.5517 7.75 22.4142 7.75 22.1391 7.75H13.35C13.0672 7.75 12.9257 7.75 12.8379 7.83787C12.75 7.92574 12.75 8.06716 12.75 8.35V20.15C12.75 20.4328 12.75 20.5743 12.8379 20.6621C12.9257 20.75 13.0672 20.75 13.35 20.75H14.0625C15.8951 20.75 17.356 20.75 18.5013 20.5768C19.691 20.3969 20.6458 20.0164 21.389 19.1803C22.1209 18.3568 22.4436 17.3204 22.5983 16.0267C22.75 14.7568 22.75 13.1292 22.75 11.0513V10.9488C22.75 9.98158 22.75 9.11184 22.7347 8.33041Z',
  d12: 'M10.65 20.75C10.9328 20.75 11.0743 20.75 11.1621 20.6621C11.25 20.5743 11.25 20.4328 11.25 20.15V8.35C11.25 8.06716 11.25 7.92574 11.1621 7.83787C11.0743 7.75 10.9328 7.75 10.65 7.75H1.86093C1.58584 7.75 1.4483 7.75 1.3608 7.8358C1.2733 7.9216 1.27063 8.05787 1.26529 8.33041C1.24999 9.11185 1.25 9.98153 1.25 10.9488V11.0512C1.24999 13.1291 1.24998 14.7568 1.40175 16.0267C1.55636 17.3204 1.87907 18.3568 2.61102 19.1803C3.35423 20.0164 4.30896 20.3969 5.49875 20.5768C6.64403 20.75 8.10495 20.75 9.93746 20.75H10.65Z',
  d13: 'M17 20.7112V21.7499C17 22.3021 17.4477 22.7499 18 22.7499C18.5523 22.7499 19 22.3021 19 21.7499V20.4858C18.8386 20.5208 18.6723 20.5508 18.5013 20.5767C18.0508 20.6448 17.5515 20.6861 17 20.7112ZM5 20.4858C5.16144 20.5208 5.32766 20.5508 5.49875 20.5767C5.9492 20.6448 6.44849 20.6861 7 20.7112V21.7499C7 22.3021 6.55228 22.7499 6 22.7499C5.44772 22.7499 5 22.3021 5 21.7499V20.4858Z',
  d14: 'M14.063 1.25H9.93789C8.10538 1.24998 6.64445 1.24996 5.49917 1.42319C4.30938 1.60315 3.35465 1.98363 2.61144 2.81975C1.87949 3.64319 1.55678 4.67956 1.40217 5.97328C1.38448 6.12131 1.50128 6.25 1.65037 6.25H22.3505C22.4996 6.25 22.6164 6.12131 22.5987 5.97328C22.4441 4.67956 22.1213 3.64319 21.3894 2.81975C20.6462 1.98363 19.6915 1.60315 18.5017 1.42319C17.3564 1.24996 15.8955 1.24998 14.063 1.25Z',
  d15: 'M9.75 13C9.75 12.5858 9.41421 12.25 9 12.25C8.58579 12.25 8.25 12.5858 8.25 13V14C8.25 14.4142 8.58579 14.75 9 14.75C9.41421 14.75 9.75 14.4142 9.75 14V13ZM15.75 13C15.75 12.5858 15.4142 12.25 15 12.25C14.5858 12.25 14.25 12.5858 14.25 13V14C14.25 14.4142 14.5858 14.75 15 14.75C15.4142 14.75 15.75 14.4142 15.75 14V13Z',
  d16: 'M2 19H22V3H2V19Z',
  d17: 'M6 19V22M18 19V22',
  d18: 'M12 8V19',
  d19: 'M9 12.5V14.5',
  d20: 'M15 12.5V14.5',
  d21: 'M2 8H22',
  d22: 'M5 21.75V18.75H7V21.75H5ZM17 21.75V18.75H19V21.75H17Z',
  d23: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V7.25H22.75V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM22.75 8.75H12.75V19.75H22C22.4142 19.75 22.75 19.4142 22.75 19V8.75ZM11.25 8.75H1.25V19C1.25 19.4142 1.58579 19.75 2 19.75H11.25V8.75ZM8.25 15.25V13.25H9.75V15.25H8.25ZM14.25 13.25V15.25H15.75V13.25H14.25Z',
} as const;

export const IconLockerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-stroke-rounded IconLockerStrokeRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-duotone-rounded IconLockerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-twotone-rounded IconLockerTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-solid-rounded IconLockerSolidRounded"
    >
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

export const IconLockerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-bulk-rounded IconLockerBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-stroke-sharp IconLockerStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="locker-solid-sharp IconLockerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocker: TheIconSelfPack = {
  name: 'Locker',
  StrokeRounded: IconLockerStrokeRounded,
  DuotoneRounded: IconLockerDuotoneRounded,
  TwotoneRounded: IconLockerTwotoneRounded,
  SolidRounded: IconLockerSolidRounded,
  BulkRounded: IconLockerBulkRounded,
  StrokeSharp: IconLockerStrokeSharp,
  SolidSharp: IconLockerSolidSharp,
};
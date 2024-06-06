import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 12C18 10.6193 16.8807 9.5 15.5 9.5C14.1193 9.5 13 10.6193 13 12',
  d2: 'M6 3V12M8.5 2.5V7.5M11 2V7.5',
  d3: 'M4 4.5L6 4.1875M20 2L13.5 3.01562M4 7L6 6.875M20 6L13.5 6.40625',
  d4: 'M4.91145 12H19.0886C20.6914 12 21.2786 12.3707 20.8787 13.9821C20.1733 16.8246 18.1759 17.5306 16.3304 19.3859C15.8819 19.8369 16.5798 20.5032 16.5802 20.9992C16.5809 21.933 15.6928 22 14.9854 22H9.0146C8.30717 22 7.41908 21.933 7.41982 20.9992C7.4202 20.5137 8.0972 19.8159 7.66957 19.3859C5.82407 17.5306 3.82674 16.8246 3.12128 13.9821C2.72136 12.3707 3.30857 12 4.91145 12Z',
  d5: 'M15.5008 8.55078C13.5954 8.55078 12.0508 10.0954 12.0508 12.0008C12.0508 12.5255 12.4761 12.9508 13.0008 12.9508C13.5255 12.9508 13.9508 12.5255 13.9508 12.0008C13.9508 11.1447 14.6447 10.4508 15.5008 10.4508C16.3568 10.4508 17.0508 11.1447 17.0508 12.0008C17.0508 12.5255 17.4761 12.9508 18.0008 12.9508C18.5255 12.9508 18.9508 12.5255 18.9508 12.0008C18.9508 10.0954 17.4062 8.55078 15.5008 8.55078Z',
  d6: 'M11.0008 1.05078C10.4761 1.05078 10.0508 1.47611 10.0508 2.00078V7.50078C10.0508 8.02545 10.4761 8.45078 11.0008 8.45078C11.5255 8.45078 11.9508 8.02545 11.9508 7.50078V2.00078C11.9508 1.47611 11.5255 1.05078 11.0008 1.05078Z',
  d7: 'M8.50078 1.55078C7.97611 1.55078 7.55078 1.97611 7.55078 2.50078V7.50078C7.55078 8.02545 7.97611 8.45078 8.50078 8.45078C9.02545 8.45078 9.45078 8.02545 9.45078 7.50078V2.50078C9.45078 1.97611 9.02545 1.55078 8.50078 1.55078Z',
  d8: 'M6.00078 2.05078C5.47611 2.05078 5.05078 2.47611 5.05078 3.00078V12.0008C5.05078 12.5255 5.47611 12.9508 6.00078 12.9508C6.52545 12.9508 6.95078 12.5255 6.95078 12.0008V3.00078C6.95078 2.47611 6.52545 2.05078 6.00078 2.05078Z',
  d9: 'M20.9395 1.85426C20.8585 1.33588 20.3726 0.981309 19.8543 1.06231L13.3543 2.07793C12.8359 2.15893 12.4813 2.64482 12.5623 3.1632C12.6433 3.68158 13.1292 4.03615 13.6476 3.95515L20.1476 2.93953C20.666 2.85853 21.0205 2.37264 20.9395 1.85426Z',
  d10: 'M6.93953 4.04176C6.85853 3.52338 6.37264 3.16881 5.85426 3.24981L3.85426 3.56231C3.33588 3.6433 2.98131 4.12919 3.06231 4.64758C3.1433 5.16596 3.62919 5.52053 4.14758 5.43953L6.14758 5.12703C6.66596 5.04603 7.02053 4.56014 6.93953 4.04176Z',
  d11: 'M20.9491 5.94166C20.9163 5.41801 20.4653 5.02004 19.9417 5.05277L13.4417 5.45902C12.918 5.49175 12.52 5.94278 12.5528 6.46643C12.5855 6.99008 13.0365 7.38805 13.5602 7.35532L20.0602 6.94907C20.5838 6.91634 20.9818 6.46531 20.9491 5.94166Z',
  d12: 'M6.94907 6.81666C6.91634 6.29301 6.46531 5.89504 5.94166 5.92777L3.94166 6.05277C3.41801 6.0855 3.02004 6.53653 3.05277 7.06018C3.0855 7.58383 3.53653 7.9818 4.06018 7.94907L6.06018 7.82407C6.58383 7.79134 6.9818 7.34031 6.94907 6.81666Z',
  d13: 'M3.73884 11.3504C4.09032 11.2736 4.48966 11.25 4.91115 11.25H19.0883C19.5097 11.25 19.9091 11.2736 20.2606 11.3504C20.6121 11.4272 20.9753 11.57 21.262 11.8537C21.8716 12.4571 21.8116 13.3359 21.6063 14.1628C21.2102 15.7588 20.439 16.7666 19.5436 17.6025C19.1717 17.9496 18.7714 18.273 18.3837 18.5864L18.3836 18.5865C17.9615 18.929 17.3568 19.4282 16.954 19.8233C17.0978 20.0582 17.3744 20.6221 17.3299 20.9986C17.3302 21.3549 17.2439 21.689 17.0493 21.9733C16.8566 22.2548 16.5966 22.4303 16.3444 22.5388C15.8749 22.7407 15.3298 22.75 14.9851 22.75H9.0143C8.66959 22.75 8.12453 22.7407 7.65505 22.5388C7.4028 22.4303 7.14282 22.2548 6.95006 21.9733C6.75547 21.689 6.66924 21.3549 6.66952 20.9986C6.69416 20.7423 6.80225 20.1469 7.03755 19.8157C6.63725 19.4237 6.03513 18.9268 5.61578 18.5865C5.22805 18.2731 4.82776 17.9496 4.45585 17.6025C3.5604 16.7666 2.78919 15.7588 2.39307 14.1628C2.18785 13.3359 2.12779 12.4571 2.73744 11.8537C3.0241 11.57 3.38726 11.4272 3.73884 11.3504Z',
  d14: 'M10.0508 2.00078C10.0508 1.47611 10.4761 1.05078 11.0008 1.05078C11.5255 1.05078 11.9508 1.47611 11.9508 2.00078V7.50078C11.9508 8.02545 11.5255 8.45078 11.0008 8.45078C10.4761 8.45078 10.0508 8.02545 10.0508 7.50078V2.00078ZM7.55078 2.50078C7.55078 1.97611 7.97611 1.55078 8.50078 1.55078C9.02545 1.55078 9.45078 1.97611 9.45078 2.50078V7.50078C9.45078 8.02545 9.02545 8.45078 8.50078 8.45078C7.97611 8.45078 7.55078 8.02545 7.55078 7.50078V2.50078ZM6.00078 2.05078C5.47611 2.05078 5.05078 2.47611 5.05078 3.00078V11.25H6.95078V3.00078C6.95078 2.47611 6.52545 2.05078 6.00078 2.05078ZM14.1444 11.25H12.1327C12.4754 9.70564 13.8532 8.55078 15.5008 8.55078C17.1483 8.55078 18.5261 9.70564 18.8689 11.25H16.8571C16.5928 10.7734 16.0844 10.4508 15.5008 10.4508C14.9171 10.4508 14.4088 10.7734 14.1444 11.25Z',
  d15: 'M17.9528 11.9975C17.9528 10.6166 16.8384 9.49707 15.4637 9.49707C14.089 9.49707 12.9746 10.6166 12.9746 11.9975',
  d16: 'M6.00488 2.99793V11.9968M8.49399 2.49799V7.49738M10.9831 1.99805V7.49738',
  d17: 'M4.01367 4.49774L6.00496 4.18528M19.944 1.99805L13.4723 3.01354M4.01367 6.99744L6.00496 6.87246M19.944 5.99756L13.4723 6.40376',
  d18: 'M3 12.0078H11.9783H21C20.9376 16.4873 17.3358 18.5895 15.955 19.163L16.9201 21.8232C16.944 21.8885 16.9893 22.0006 16.9201 22.0006H11.9967H7.11669C7.04743 22.0006 6.99429 22.0154 7.01822 21.9501L7.99731 19.1703C6.61651 18.5969 3.06238 16.4873 3 12.0078Z',
  d19: 'M15.5 10.245C14.5335 10.245 13.75 11.0288 13.75 11.9957H12.25C12.25 10.2001 13.7051 8.74438 15.5 8.74438C17.2949 8.74438 18.75 10.2001 18.75 11.9957H17.25C17.25 11.0288 16.4665 10.245 15.5 10.245Z',
  d20: 'M10.25 7.49376V1.99146H11.75V7.49376H10.25ZM7.75 7.49376V2.49166H9.25V7.49376H7.75ZM5.25 11.9956V2.99187H6.75V11.9956H5.25Z',
  d21: 'M20.1163 2.73264L13.6163 3.74869L13.3848 2.26605L19.8848 1.25L20.1163 2.73264ZM6.11633 4.92105L4.11633 5.23368L3.88477 3.75105L5.88477 3.43842L6.11633 4.92105ZM20.0473 6.74185L13.5473 7.14827L13.4538 5.65056L19.9538 5.24414L20.0473 6.74185ZM6.04733 7.61721L4.04733 7.74226L3.95376 6.24456L5.95376 6.11951L6.04733 7.61721Z',
  d22: 'M21.75 11.2454V11.9957C21.75 15.2493 19.7841 18.0454 16.9305 19.5499L17.7072 21.75C17.7883 21.9796 17.7529 22.2343 17.6123 22.4332C17.4717 22.632 17.2434 22.7502 17 22.7502H7C6.75657 22.7502 6.52828 22.632 6.3877 22.4332C6.24712 22.2343 6.21174 21.9796 6.29281 21.75L7.06948 19.5499C4.21594 18.0454 2.25 15.2493 2.25 11.9957V11.2454H21.75Z',
};

export const IconNoodlesStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-stroke-rounded IconNoodlesStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoodlesDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-duotone-rounded IconNoodlesDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoodlesTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-twotone-rounded IconNoodlesTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoodlesSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-solid-rounded IconNoodlesSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoodlesBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-bulk-rounded IconNoodlesBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNoodlesStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-stroke-sharp IconNoodlesStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoodlesSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="noodles-solid-sharp IconNoodlesSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfNoodles: TheIconSelfPack = {
  name: 'Noodles',
  StrokeRounded: IconNoodlesStrokeRounded,
  DuotoneRounded: IconNoodlesDuotoneRounded,
  TwotoneRounded: IconNoodlesTwotoneRounded,
  SolidRounded: IconNoodlesSolidRounded,
  BulkRounded: IconNoodlesBulkRounded,
  StrokeSharp: IconNoodlesStrokeSharp,
  SolidSharp: IconNoodlesSolidSharp,
};
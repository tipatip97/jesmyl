import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 5C3.39322 4.59544 4.43982 3 5 3C5.56018 3 6.60678 4.59544 7 5',
  d2: 'M19 17C19.4046 17.3932 21 18.4398 21 19C21 19.5602 19.4046 20.6068 19 21',
  d3: 'M5 12H6C8.82843 12 10.2426 12 11.1213 12.8787C12 13.7574 12 15.1716 12 18V19',
  d4: 'M21 19H11C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13L5 3',
  d5: 'M11.1213 12.8787C10.2426 12 8.82843 12 6 12C5.44772 12 5 12.4477 5 13C5 15.8284 5 17.2426 5.87868 18.1213C6.75736 19 8.17157 19 11 19C11.5523 19 12 18.5523 12 18C12 15.1716 12 13.7574 11.1213 12.8787Z',
  d6: 'M7.53781 4.47726C7.82651 4.77428 7.81977 5.24911 7.52274 5.53781C7.37698 5.67949 7.18839 5.75002 7 5.75H6.0003V11.25C7.36788 11.25 8.52478 11.25 9.39175 11.3665C10.2919 11.4875 11.0497 11.7464 11.6516 12.3484C12.2536 12.9503 12.5125 13.7081 12.6335 14.6082C12.75 15.4752 12.75 16.6324 12.75 18H18.25V17C18.25 16.8116 18.3205 16.623 18.4622 16.4773C18.7509 16.1802 19.2257 16.1735 19.5227 16.4622C19.7161 16.614 20.4174 17.1795 20.6366 17.3652C20.8709 17.5638 21.1197 17.7905 21.3154 18.0202C21.4135 18.1353 21.5134 18.2688 21.5919 18.4155C21.6672 18.5562 21.75 18.7592 21.75 19C21.75 19.2408 21.6672 19.4438 21.5919 19.5845C21.5134 19.7312 21.4135 19.8647 21.3154 19.9798C21.1197 20.2095 20.8709 20.4362 20.6366 20.6348C20.4174 20.8205 19.7161 21.386 19.5227 21.5378C19.2257 21.8265 18.7509 21.8198 18.4622 21.5227C18.3205 21.377 18.25 21.1884 18.25 21V20H10.9315H10.9315C9.57588 20 8.46098 20 7.5792 19.8851C6.65687 19.7648 5.84 19.5031 5.18283 18.8658C4.52135 18.2244 4.24561 17.42 4.11961 16.5112C4.00022 15.6501 4.00026 14.5638 4.0003 13.2539V5.75H3.00056C2.81198 5.75016 2.62317 5.67963 2.47726 5.53781C2.18023 5.24911 2.17349 4.77428 2.46219 4.47726C2.61398 4.28388 3.17952 3.58255 3.36519 3.36344C3.56379 3.12906 3.79045 2.88028 4.02017 2.68463C4.13534 2.58655 4.26884 2.48655 4.41548 2.40808C4.55617 2.33279 4.75922 2.25 5 2.25C5.24078 2.25 5.44382 2.33279 5.58452 2.40808C5.73116 2.48655 5.86466 2.58655 5.97983 2.68463C6.20954 2.88028 6.43621 3.12906 6.63481 3.36344C6.82051 3.58259 7.386 4.28385 7.53781 4.47726Z',
  d7: 'M7.53781 4.47726C7.82651 4.77428 7.81977 5.24911 7.52274 5.53781C7.37698 5.67949 7.18839 5.75002 7 5.75H6.0003V14.0136C6.0003 15.902 6.0003 16.8463 6.58725 17.4323C7.1742 18.0182 8.11843 18.0167 10.0069 18.0136L18.25 18V17C18.25 16.8116 18.3205 16.623 18.4622 16.4773C18.7509 16.1802 19.2257 16.1735 19.5227 16.4622C19.7161 16.614 20.4174 17.1795 20.6366 17.3652C20.8709 17.5638 21.1197 17.7905 21.3154 18.0202C21.4135 18.1353 21.5134 18.2688 21.5919 18.4155C21.6672 18.5562 21.75 18.7592 21.75 19C21.75 19.2408 21.6672 19.4438 21.5919 19.5845C21.5134 19.7312 21.4135 19.8647 21.3154 19.9798C21.1197 20.2095 20.8709 20.4362 20.6366 20.6348C20.4174 20.8205 19.7161 21.386 19.5227 21.5378C19.2257 21.8265 18.7509 21.8198 18.4622 21.5227C18.3205 21.377 18.25 21.1884 18.25 21V20H10.9315C9.57589 20 8.46098 20 7.5792 19.8851C6.65687 19.7648 5.84 19.5031 5.18283 18.8658C4.52135 18.2244 4.24561 17.42 4.11961 16.5112C4.00022 15.6501 4.00026 14.5638 4.0003 13.2539V5.75H3.00056C2.81198 5.75016 2.62317 5.67963 2.47726 5.53781C2.18023 5.24911 2.17349 4.77428 2.46219 4.47726C2.61398 4.28388 3.17952 3.58255 3.36519 3.36344C3.56379 3.12906 3.79045 2.88028 4.02017 2.68463C4.13534 2.58655 4.26884 2.48655 4.41548 2.40808C4.55617 2.33279 4.75922 2.25 5 2.25C5.24078 2.25 5.44382 2.33279 5.58452 2.40808C5.73116 2.48655 5.86466 2.58655 5.97983 2.68463C6.20954 2.88028 6.43621 3.12906 6.63481 3.36344C6.82051 3.58259 7.386 4.28385 7.53781 4.47726Z',
  d8: 'M10.0069 18.0136C8.11843 18.0167 7.1742 18.0182 6.58725 17.4323C6.0003 16.8463 6.0003 15.902 6.0003 14.0136V11.25C7.36789 11.25 8.52478 11.25 9.39175 11.3665C10.2919 11.4875 11.0497 11.7464 11.6516 12.3484C12.2536 12.9503 12.5125 13.7081 12.6335 14.6083C12.75 15.4752 12.75 16.6324 12.75 18L10.0069 18.0136Z',
  d9: 'M6 12H12V18',
  d10: 'M3 6L6 3L9 6M18 15L21 18L18 21M6 3.65156V18H20.3244',
  d11: 'M2 5.70711L5.70711 2L9.41421 5.70711L8 7.12132L6.70711 5.82843V11H13V17.2929H18.1716L16.8787 16L18.2929 14.5858L22 18.2929L18.2929 22L16.8787 20.5858L18.1716 19.2929H4.70711V5.82843L3.41422 7.12132L2 5.70711Z',
};

export const IconRightAngleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-stroke-rounded IconRightAngleStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightAngleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-duotone-rounded IconRightAngleDuotoneRounded"
    >
      <path 
        opacity="0.5" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightAngleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-twotone-rounded IconRightAngleTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRightAngleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-solid-rounded IconRightAngleSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRightAngleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-bulk-rounded IconRightAngleBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRightAngleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-stroke-sharp IconRightAngleStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRightAngleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="right-angle-solid-sharp IconRightAngleSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRightAngle: TheIconSelfPack = {
  name: 'RightAngle',
  StrokeRounded: IconRightAngleStrokeRounded,
  DuotoneRounded: IconRightAngleDuotoneRounded,
  TwotoneRounded: IconRightAngleTwotoneRounded,
  SolidRounded: IconRightAngleSolidRounded,
  BulkRounded: IconRightAngleBulkRounded,
  StrokeSharp: IconRightAngleStrokeSharp,
  SolidSharp: IconRightAngleSolidSharp,
};
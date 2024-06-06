import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 21C4 21 11 5 22 5',
  d2: 'M11 5H13M6 5L8 5M6 5C6 6.10457 5.10457 7 4 7C2.89543 7 2 6.10457 2 5C2 3.89543 2.89543 3 4 3C5.10457 3 6 3.89543 6 5Z',
  d3: 'M6 5C6 6.10457 5.10457 7 4 7C2.89543 7 2 6.10457 2 5C2 3.89543 2.89543 3 4 3C5.10457 3 6 3.89543 6 5Z',
  d4: 'M4.91615 21.4008L4.91943 21.3934L4.93282 21.3634C4.9451 21.336 4.96407 21.2941 4.98964 21.2385C5.04079 21.1274 5.11831 20.962 5.22145 20.7501C5.42781 20.326 5.73634 19.7164 6.14107 18.9833C6.95183 17.5148 8.14215 15.5624 9.66302 13.6156C12.7489 9.66572 16.9892 6 22 6C22.5523 6 23 5.55228 23 5C23 4.44772 22.5523 4 22 4C16.0108 4 11.2511 8.33428 8.08697 12.3844C6.48284 14.4376 5.23566 16.4852 4.39018 18.0167C3.96678 18.7836 3.64249 19.424 3.42307 19.8749C3.31332 20.1005 3.22971 20.2788 3.17295 20.4021C3.14457 20.4637 3.12289 20.5116 3.10801 20.5448L3.0908 20.5834L3.08603 20.5942L3.08415 20.5985C3.08398 20.5989 3.08384 20.5992 4 21L3.08415 20.5985C2.86278 21.1045 3.0932 21.6948 3.59918 21.9162C4.10505 22.1375 4.69467 21.9066 4.91615 21.4008Z',
  d5: 'M1 5C1 3.34315 2.34315 2 4 2C5.30622 2 6.41746 2.83481 6.82929 4L8 4C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6L6.82929 6C6.41746 7.16519 5.30622 8 4 8C2.34315 8 1 6.65685 1 5Z',
  d6: 'M10 5C10 4.44772 10.4477 4 11 4H13C13.5523 4 14 4.44772 14 5C14 5.55228 13.5523 6 13 6H11C10.4477 6 10 5.55228 10 5Z',
  d7: 'M5.41585 21.7499L4.49984 21.3487C3.58368 20.9479 3.58398 20.9472 3.58398 20.9472L3.58587 20.9429L3.59064 20.9321L3.60785 20.8936C3.62273 20.8604 3.64441 20.8125 3.67279 20.7508C3.72955 20.6276 3.81316 20.4492 3.92291 20.2237C4.14233 19.7728 4.46662 19.1323 4.89002 18.3654C5.7355 16.834 6.98268 14.487 8.58681 12.4337C11.7509 8.3836 16.5106 4.04932 22.4998 4.04932V6.04932C17.489 6.04932 13.2487 9.71503 10.1629 13.665C8.64199 15.6117 7.45167 17.8635 6.64091 19.3321C6.23618 20.0652 5.92765 20.6747 5.72129 21.0988C5.61815 21.3108 5.41585 21.7499 5.41585 21.7499Z',
  d8: 'M7.32929 6.25C6.91746 7.41519 5.80622 8.25 4.5 8.25C2.84315 8.25 1.5 6.90685 1.5 5.25C1.5 3.59315 2.84315 2.25 4.5 2.25C5.80622 2.25 6.91746 3.08481 7.32929 4.25L9.5 4.25V6.25H7.32929Z',
  d9: 'M11.5 4.25H13.5V6.25H11.5V4.25Z',
};

export const IconEaseOutControlPointStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-stroke-rounded IconEaseOutControlPointStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconEaseOutControlPointDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-duotone-rounded IconEaseOutControlPointDuotoneRounded"
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
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconEaseOutControlPointTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-twotone-rounded IconEaseOutControlPointTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEaseOutControlPointSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-solid-rounded IconEaseOutControlPointSolidRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEaseOutControlPointBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-bulk-rounded IconEaseOutControlPointBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconEaseOutControlPointStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-stroke-sharp IconEaseOutControlPointStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEaseOutControlPointSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ease-out-control-point-solid-sharp IconEaseOutControlPointSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfEaseOutControlPoint: TheIconSelfPack = {
  name: 'EaseOutControlPoint',
  StrokeRounded: IconEaseOutControlPointStrokeRounded,
  DuotoneRounded: IconEaseOutControlPointDuotoneRounded,
  TwotoneRounded: IconEaseOutControlPointTwotoneRounded,
  SolidRounded: IconEaseOutControlPointSolidRounded,
  BulkRounded: IconEaseOutControlPointBulkRounded,
  StrokeSharp: IconEaseOutControlPointStrokeSharp,
  SolidSharp: IconEaseOutControlPointSolidSharp,
};
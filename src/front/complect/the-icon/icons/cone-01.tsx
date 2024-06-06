import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 18C21 15.7909 16.9706 14 12 14C7.02944 14 3 15.7909 3 18C3 20.2091 7.02944 22 12 22C16.9706 22 21 20.2091 21 18Z',
  d2: 'M20.5 16.5L16.1561 7.39413C14.3427 3.79804 13.436 2 12 2C10.564 2 9.65732 3.79804 7.84393 7.39413L3.5 16.5',
  d3: 'M21.4521 16.7842L16.921 7.02317L16.8777 6.93758C16.0276 5.25864 15.3394 3.89942 14.6819 2.96917C14.0174 2.02898 13.1933 1.25 12.0002 1.25C10.8072 1.25 9.98309 2.02898 9.31855 2.96917C8.66103 3.89943 7.97285 5.25864 7.12278 6.93759L7.07945 7.02317L2.59638 16.6919C2.37822 17.0905 2.25 17.5287 2.25 17.9998C2.25 18.7961 2.61625 19.4983 3.16397 20.0738C3.70801 20.6455 4.45981 21.1262 5.33143 21.5136C7.07658 22.2892 9.4349 22.7498 12 22.7498C14.5651 22.7498 16.9234 22.2892 18.6686 21.5136C19.5402 21.1262 20.292 20.6455 20.836 20.0738C21.3838 19.4983 21.75 18.7961 21.75 17.9998C21.75 17.6373 21.6741 17.2942 21.5397 16.9738L21.5351 16.9628C21.5094 16.9024 21.4818 16.8429 21.4521 16.7842ZM5.74539 14.3125C7.44107 13.6422 9.63246 13.2498 12 13.2498C14.3678 13.2498 16.5594 13.6423 18.2552 14.3127L15.1726 7.8774C14.2774 6.10943 13.6535 4.88333 13.0895 4.0855C12.5217 3.28215 12.2053 3.18937 12.0002 3.18937C11.7951 3.18937 11.4787 3.28216 10.9109 4.0855C10.347 4.88333 9.72302 6.10943 8.82782 7.8774L5.74539 14.3125Z',
  d4: 'M5.74539 14.3127C7.44107 13.6424 9.63246 13.25 12 13.25C14.3678 13.25 16.5594 13.6425 18.2552 14.3129C19.1532 14.7623 21.0674 15.9236 21.5397 16.9739C21.6741 17.2944 21.75 17.6374 21.75 18C21.75 18.7963 21.3838 19.4985 20.836 20.074C20.292 20.6457 19.5402 21.1264 18.6686 21.5138C16.9234 22.2894 14.5651 22.75 12 22.75C9.4349 22.75 7.07658 22.2894 5.33143 21.5138C4.45981 21.1264 3.70801 20.6457 3.16397 20.074C2.61625 19.4985 2.25 18.7963 2.25 18C2.25 17.5288 2.37822 17.0906 2.59638 16.6921C2.97736 16.2035 4.14053 15.0436 5.74539 14.3127Z',
  d5: 'M21 17.5L12 2L3 17.5',
  d6: 'M11.9993 1.25C11.6534 1.25 11.3337 1.43407 11.16 1.73316L2.63188 16.629C2.39219 17.0442 2.25 17.5038 2.25 18C2.25 18.7963 2.61625 19.4985 3.16397 20.074C3.70801 20.6457 4.45981 21.1264 5.33143 21.5138C7.07658 22.2894 9.4349 22.75 12 22.75C14.5651 22.75 16.9234 22.2894 18.6686 21.5138C19.5402 21.1264 20.292 20.6457 20.836 20.074C21.3838 19.4985 21.75 18.7963 21.75 18C21.75 17.4828 21.5955 17.0054 21.3372 16.5765L12.8385 1.73316C12.6649 1.43407 12.3451 1.25 11.9993 1.25ZM17.6882 14.1058C16.0833 13.5625 14.1113 13.2502 11.9992 13.2502C9.89231 13.2502 7.92494 13.5609 6.32227 14.1017L11.9985 4.15332L17.6882 14.1058Z',
};

export const IconCone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-stroke-rounded IconCone01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-duotone-rounded IconCone01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-twotone-rounded IconCone01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-solid-rounded IconCone01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-bulk-rounded IconCone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-stroke-sharp IconCone01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-01-solid-sharp IconCone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCone01: TheIconSelfPack = {
  name: 'Cone01',
  StrokeRounded: IconCone01StrokeRounded,
  DuotoneRounded: IconCone01DuotoneRounded,
  TwotoneRounded: IconCone01TwotoneRounded,
  SolidRounded: IconCone01SolidRounded,
  BulkRounded: IconCone01BulkRounded,
  StrokeSharp: IconCone01StrokeSharp,
  SolidSharp: IconCone01SolidSharp,
};
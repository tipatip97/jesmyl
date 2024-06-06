import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z',
  d2: 'M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94848 20.0083 9.79043 19.1075 11.4743 17.3058Z',
  d3: 'M4.39841 17L2.71567 15.1334C1.86569 14.1905 1.76171 12.7867 2.46339 11.7274C3.46608 10.2137 5.6201 10.0631 6.82103 11.4229L8.13722 12.9131C8.26707 13.0601 8.33199 13.1336 8.3997 13.1751C8.57138 13.2803 8.78453 13.2792 8.95511 13.1722C9.02237 13.13 9.08718 13.055 9.21679 12.9051C11.6868 10.0482 14.2907 7.37521 17.6376 4.59913C18.8103 3.62642 20.5429 3.87098 21.4547 5.09453C21.8772 5.66145 22.0507 6.34325 21.9873 7',
  d4: 'M8.51198 12.5835L7.19579 11.0933C5.77676 9.48658 3.23051 9.66526 2.04655 11.4526C1.21907 12.7018 1.34139 14.357 2.34429 15.4695L4.43319 17.7867C5.18388 18.6195 5.78061 19.2814 6.30715 19.7318C6.84593 20.1926 7.38218 20.4955 8.01732 20.5013C8.65975 20.5071 9.21741 20.1916 9.78507 19.7164C10.3454 19.2474 10.9939 18.5535 11.8149 17.675L11.815 17.675L11.8396 17.6486C12.1037 17.366 12.3669 17.0916 12.6298 16.8239C12.6298 16.8239 8.93154 13.003 8.51198 12.5835Z',
  d5: 'M21.8555 4.79607C20.7806 3.35353 18.7214 3.05073 17.3183 4.21459C13.9461 7.0116 11.3228 9.70493 8.83847 12.5784L4.45441 16.9624C4.393 17.0238 4.36228 17.0546 4.34012 17.0845C4.2152 17.2535 4.20927 17.4826 4.32528 17.6578C4.34586 17.6889 4.37494 17.7211 4.4331 17.7856C5.18379 18.6184 5.78052 19.2804 6.30705 19.7307C6.84584 20.1915 7.38209 20.4945 8.01723 20.5002C8.65965 20.5061 9.21731 20.1906 9.78497 19.7154C10.3453 19.2463 10.9938 18.5524 11.8149 17.6739L11.8395 17.6475C14.1196 15.208 16.3309 13.3751 18.8861 11.2574C19.678 10.601 20.5031 9.91712 21.3733 9.17948C22.6728 8.07799 22.8677 6.15429 21.8555 4.79607Z',
  d6: 'M9.00945 13.4994L5.00585 10.0087C5.00172 10.0051 4.99547 10.0055 4.99181 10.0095L2.00012 13.3382C1.99649 13.3422 1.99675 13.3484 2.00071 13.3522L9.07749 19.9996C9.08138 20.0032 9.08747 20.0032 9.09131 19.9995L21.9992 7.51477C22.0032 7.5109 22.0032 7.50452 21.9993 7.50056L18.535 4.00102C18.5311 3.99707 18.5248 3.99705 18.5208 4.00098L9.00945 13.4994Z',
  d7: 'M9 13.5L18.5 4L22 7.5L9.05883 20L2 13.353L5 10L9 13.5Z',
};

export const IconTick03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-stroke-rounded IconTick03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-duotone-rounded IconTick03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-twotone-rounded IconTick03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTick03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-solid-rounded IconTick03SolidRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-bulk-rounded IconTick03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTick03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-stroke-sharp IconTick03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-03-solid-sharp IconTick03SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTick03: TheIconSelfPack = {
  name: 'Tick03',
  StrokeRounded: IconTick03StrokeRounded,
  DuotoneRounded: IconTick03DuotoneRounded,
  TwotoneRounded: IconTick03TwotoneRounded,
  SolidRounded: IconTick03SolidRounded,
  BulkRounded: IconTick03BulkRounded,
  StrokeSharp: IconTick03StrokeSharp,
  SolidSharp: IconTick03SolidSharp,
};
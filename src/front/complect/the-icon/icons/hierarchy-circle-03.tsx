import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z',
  d2: 'M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z',
  d3: 'M16 5C13.547 5.1828 13 6.20315 13 9.65278V12M16 19C13.547 18.8172 13 17.7969 13 14.3472L13 12M13 12H10',
  d4: 'M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z',
  d5: 'M15.25 19C15.25 16.9289 16.9289 15.25 19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19Z',
  d6: 'M15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5Z',
  d7: 'M16.9972 4.92573C17.0383 5.47649 16.6251 5.95624 16.0743 5.99728C14.9533 6.08082 14.615 6.33248 14.428 6.63151C14.1566 7.06572 14 7.9008 14 9.65283V14.3473C14 16.0993 14.1566 16.9344 14.428 17.3686C14.615 17.6676 14.9533 17.9193 16.0743 18.0028C16.6251 18.0439 17.0383 18.5236 16.9972 19.0744C16.9562 19.6251 16.4764 20.0383 15.9257 19.9973C14.5937 19.898 13.432 19.5481 12.7322 18.4289C12.1169 17.4448 12 16.0449 12 14.3473L12 13H10C9.44772 13 9 12.5523 9 12C9 11.4478 9.44772 11 10 11H12V9.65283C12 7.95522 12.1169 6.55531 12.7322 5.57124C13.432 4.45199 14.5937 4.10207 15.9257 4.00281C16.4764 3.96177 16.9562 4.37497 16.9972 4.92573Z',
  d8: 'M1.25 12C1.25 9.37665 3.37665 7.25 6 7.25C8.62335 7.25 10.75 9.37665 10.75 12C10.75 14.6234 8.62335 16.75 6 16.75C3.37665 16.75 1.25 14.6234 1.25 12Z',
  d9: 'M15.3683 4.0625C15.2911 4.36232 15.25 4.67667 15.25 5.0006C15.25 5.37673 15.3054 5.73993 15.4084 6.08249C14.8034 6.20167 14.5713 6.40298 14.428 6.63211C14.1566 7.06632 14 7.9014 14 9.65343V14.3479C14 16.0999 14.1566 16.935 14.428 17.3692C14.5713 17.5983 14.8034 17.7996 15.4084 17.9188C15.3054 18.2613 15.25 18.6245 15.25 19.0006C15.25 19.3246 15.2911 19.6389 15.3683 19.9388C14.2725 19.7835 13.3324 19.3895 12.7322 18.4295C12.1169 17.4454 12 16.0455 12 14.3479L12 13.0006H10.6445C10.7136 12.6782 10.75 12.3437 10.75 12.0006C10.75 11.6576 10.7136 11.323 10.6446 11.0006H12V9.65343C12 7.95582 12.1169 6.55591 12.7322 5.57184C13.3324 4.61184 14.2725 4.21782 15.3683 4.0625Z',
  d10: 'M16 5L13 5V12M16 19H13V12M13 12H10',
  d11: 'M12.2929 4.29289C12.4804 4.10536 12.7348 4 13 4L16 4L16 6.00001L14 6V18H16V20H13C12.4477 20 12 19.5523 12 19V13H10V11H12V5C12 4.73478 12.1054 4.48043 12.2929 4.29289Z',
};

export const IconHierarchyCircle03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-stroke-rounded IconHierarchyCircle03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyCircle03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-duotone-rounded IconHierarchyCircle03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyCircle03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-twotone-rounded IconHierarchyCircle03TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyCircle03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-solid-rounded IconHierarchyCircle03SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchyCircle03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-bulk-rounded IconHierarchyCircle03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHierarchyCircle03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-stroke-sharp IconHierarchyCircle03StrokeSharp"
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconHierarchyCircle03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-03-solid-sharp IconHierarchyCircle03SolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchyCircle03: TheIconSelfPack = {
  name: 'HierarchyCircle03',
  StrokeRounded: IconHierarchyCircle03StrokeRounded,
  DuotoneRounded: IconHierarchyCircle03DuotoneRounded,
  TwotoneRounded: IconHierarchyCircle03TwotoneRounded,
  SolidRounded: IconHierarchyCircle03SolidRounded,
  BulkRounded: IconHierarchyCircle03BulkRounded,
  StrokeSharp: IconHierarchyCircle03StrokeSharp,
  SolidSharp: IconHierarchyCircle03SolidSharp,
};
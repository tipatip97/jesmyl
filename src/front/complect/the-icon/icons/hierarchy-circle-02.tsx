import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19C8 20.6569 6.65685 22 5 22Z',
  d2: 'M19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19C22 20.6569 20.6569 22 19 22Z',
  d3: 'M19 16C18.8172 13.547 17.7969 13 14.3472 13L9.65278 13C6.20315 13 5.1828 13.547 5 16',
  d4: 'M12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10Z',
  d5: 'M5 15.25C7.07107 15.25 8.75 16.9289 8.75 19C8.75 21.0711 7.07107 22.75 5 22.75C2.92893 22.75 1.25 21.0711 1.25 19C1.25 16.9289 2.92893 15.25 5 15.25Z',
  d6: 'M19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19C15.25 16.9289 16.9289 15.25 19 15.25Z',
  d7: 'M5.57123 12.7322C6.55531 12.1169 7.95522 12 9.65283 12L14.3473 12C16.0449 12 17.4448 12.1169 18.4289 12.7322C19.5481 13.432 19.898 14.5937 19.9973 15.9257C20.0383 16.4764 19.6251 16.9562 19.0744 16.9972C18.5236 17.0383 18.0439 16.6251 18.0028 16.0743C17.9193 14.9533 17.6676 14.615 17.3686 14.428C16.9344 14.1566 16.0993 14 14.3473 14L9.65283 14C7.9008 14 7.06572 14.1566 6.63151 14.428C6.33248 14.615 6.08082 14.9533 5.99728 16.0743C5.95624 16.6251 5.47649 17.0383 4.92573 16.9972C4.37497 16.9562 3.96177 16.4764 4.00281 15.9257C4.10207 14.5937 4.45199 13.432 5.57123 12.7322Z',
  d8: 'M12 1.25C14.6234 1.25 16.75 3.37665 16.75 6C16.75 8.62335 14.6234 10.75 12 10.75C9.37665 10.75 7.25 8.62335 7.25 6C7.25 3.37665 9.37665 1.25 12 1.25Z',
  d9: 'M9.65343 12C7.95582 12 6.55591 12.1169 5.57183 12.7322C4.61184 13.3324 4.21782 14.2725 4.0625 15.3683C4.36232 15.2911 4.67667 15.25 5.0006 15.25C5.37673 15.25 5.73993 15.3054 6.08248 15.4084C6.20167 14.8034 6.40298 14.5713 6.63211 14.428C7.06632 14.1566 7.9014 14 9.65343 14L14.3479 14C16.0999 14 16.935 14.1566 17.3692 14.428C17.5983 14.5713 17.7996 14.8034 17.9188 15.4084C18.2613 15.3054 18.6245 15.25 19.0006 15.25C19.3246 15.25 19.6389 15.2911 19.9388 15.3683C19.7835 14.2725 19.3895 13.3324 18.4295 12.7322C17.4454 12.1169 16.0455 12 14.3479 12H9.65343Z',
  d10: 'M19.0001 16V13L4.99902 13L5.00007 16',
  d11: 'M4.29179 12.293C4.47934 12.1054 4.73375 12 4.99902 12H19.0001C19.5524 12 20.0001 12.4477 20.0001 13V16H18.0001V14H5.99937L6.00007 15.9997L4.00007 16.0003L3.99902 13.0003C3.99893 12.7351 4.10425 12.4806 4.29179 12.293Z',
} as const;

export const IconHierarchyCircle02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-stroke-rounded IconHierarchyCircle02StrokeRounded"
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

export const IconHierarchyCircle02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-duotone-rounded IconHierarchyCircle02DuotoneRounded"
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

export const IconHierarchyCircle02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-twotone-rounded IconHierarchyCircle02TwotoneRounded"
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

export const IconHierarchyCircle02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-solid-rounded IconHierarchyCircle02SolidRounded"
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

export const IconHierarchyCircle02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-bulk-rounded IconHierarchyCircle02BulkRounded"
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

export const IconHierarchyCircle02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-stroke-sharp IconHierarchyCircle02StrokeSharp"
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconHierarchyCircle02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-circle-02-solid-sharp IconHierarchyCircle02SolidSharp"
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

export const iconPackOfHierarchyCircle02: TheIconSelfPack = {
  name: 'HierarchyCircle02',
  StrokeRounded: IconHierarchyCircle02StrokeRounded,
  DuotoneRounded: IconHierarchyCircle02DuotoneRounded,
  TwotoneRounded: IconHierarchyCircle02TwotoneRounded,
  SolidRounded: IconHierarchyCircle02SolidRounded,
  BulkRounded: IconHierarchyCircle02BulkRounded,
  StrokeSharp: IconHierarchyCircle02StrokeSharp,
  SolidSharp: IconHierarchyCircle02SolidSharp,
};
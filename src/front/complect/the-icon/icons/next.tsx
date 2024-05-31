import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.9351 12.6258C15.6807 13.8374 14.327 14.7077 11.6198 16.4481C8.67528 18.3411 7.20303 19.2876 6.01052 18.9229C5.60662 18.7994 5.23463 18.5823 4.92227 18.2876C4 17.4178 4 15.6118 4 12C4 8.38816 4 6.58224 4.92227 5.71235C5.23463 5.41773 5.60662 5.20057 6.01052 5.07707C7.20304 4.71243 8.67528 5.6589 11.6198 7.55186C14.327 9.29233 15.6807 10.1626 15.9351 11.3742C16.0216 11.7865 16.0216 12.2135 15.9351 12.6258Z',
  d2: 'M20 5V19',
  d3: 'M11.8547 6.89181L11.944 6.94923C13.2606 7.79563 14.307 8.4683 15.0505 9.08377C15.8069 9.70986 16.3649 10.3671 16.5441 11.2203C16.652 11.7342 16.652 12.2661 16.5441 12.78C16.3649 13.6333 15.8069 14.2905 15.0505 14.9166C14.307 15.532 13.2606 16.2047 11.9441 17.0511L11.8547 17.1085C10.4211 18.0301 9.2858 18.7601 8.35942 19.2076C7.42728 19.658 6.54123 19.9079 5.66621 19.6403C5.1501 19.4825 4.67749 19.2058 4.28265 18.8334C3.62188 18.2102 3.36562 17.3148 3.24511 16.2571C3.12498 15.2029 3.12499 13.8139 3.125 12.051V11.9493C3.12499 10.1865 3.12498 8.79739 3.24511 7.7432C3.36562 6.68556 3.62188 5.79017 4.28265 5.16692C4.67749 4.7945 5.1501 4.51783 5.66621 4.36001C6.54123 4.09245 7.42727 4.34237 8.35942 4.79271C9.2858 5.24027 10.4211 5.97018 11.8547 6.89181Z',
  d4: 'M19.875 3C19.3227 3 18.875 3.44772 18.875 4L18.875 20C18.875 20.5523 19.3227 21 19.875 21C20.4273 21 20.875 20.5523 20.875 20L20.875 4C20.875 3.44772 20.4273 3 19.875 3Z',
  d5: 'M4 19V5L16 12L4 19Z',
  d6: 'M20 4V20',
  d7: 'M3.62645 4.34964C3.39358 4.4834 3.25 4.73145 3.25 5V19C3.25 19.2685 3.39358 19.5166 3.62645 19.6504C3.85932 19.7841 4.14594 19.7831 4.3779 19.6478L16.3779 12.6478C16.6083 12.5134 16.75 12.2668 16.75 12C16.75 11.7332 16.6083 11.4866 16.3779 11.3522L4.3779 4.35217C4.14594 4.21685 3.85932 4.21589 3.62645 4.34964Z',
  d8: 'M20.75 19.75V4.25H18.75V19.75H20.75Z',
} as const;

export const IconNextStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-stroke-rounded IconNextStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNextDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-duotone-rounded IconNextDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconNextTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-twotone-rounded IconNextTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconNextSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-solid-rounded IconNextSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNextBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-bulk-rounded IconNextBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNextStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-stroke-sharp IconNextStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNextSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="next-solid-sharp IconNextSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNext: TheIconSelfPack = {
  name: 'Next',
  StrokeRounded: IconNextStrokeRounded,
  DuotoneRounded: IconNextDuotoneRounded,
  TwotoneRounded: IconNextTwotoneRounded,
  SolidRounded: IconNextSolidRounded,
  BulkRounded: IconNextBulkRounded,
  StrokeSharp: IconNextStrokeSharp,
  SolidSharp: IconNextSolidSharp,
};
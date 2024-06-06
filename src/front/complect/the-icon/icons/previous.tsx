import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.06492 12.6258C8.31931 13.8374 9.67295 14.7077 12.3802 16.4481C15.3247 18.3411 16.797 19.2876 17.9895 18.9229C18.3934 18.7994 18.7654 18.5823 19.0777 18.2876C20 17.4178 20 15.6118 20 12C20 8.38816 20 6.58224 19.0777 5.71235C18.7654 5.41773 18.3934 5.20057 17.9895 5.07707C16.797 4.71243 15.3247 5.6589 12.3802 7.55186C9.67295 9.29233 8.31931 10.1626 8.06492 11.3742C7.97836 11.7865 7.97836 12.2135 8.06492 12.6258Z',
  d2: 'M4 4L4 20',
  d3: 'M12.1453 6.89181L12.056 6.94923C10.7394 7.79563 9.69302 8.4683 8.9495 9.08377C8.19314 9.70986 7.63505 10.3671 7.45592 11.2203C7.34803 11.7342 7.34803 12.2661 7.45592 12.78C7.63505 13.6333 8.19314 14.2905 8.9495 14.9166C9.69302 15.532 10.7394 16.2047 12.0559 17.0511L12.1453 17.1085C13.5789 18.0301 14.7142 18.7601 15.6406 19.2076C16.5727 19.658 17.4588 19.9079 18.3338 19.6403C18.8499 19.4825 19.3225 19.2058 19.7173 18.8334C20.3781 18.2102 20.6344 17.3148 20.7549 16.2571C20.875 15.2029 20.875 13.8139 20.875 12.051V11.9493C20.875 10.1865 20.875 8.79739 20.7549 7.7432C20.6344 6.68556 20.3781 5.79017 19.7173 5.16692C19.3225 4.7945 18.8499 4.51783 18.3338 4.36001C17.4588 4.09245 16.5727 4.34237 15.6406 4.79271C14.7142 5.24027 13.5789 5.97018 12.1453 6.89181Z',
  d4: 'M4.125 3C4.67728 3 5.125 3.44772 5.125 4L5.125 20C5.125 20.5523 4.67728 21 4.125 21C3.57271 21 3.125 20.5523 3.125 20L3.125 4C3.125 3.44772 3.57272 3 4.125 3Z',
  d5: 'M20 19V5L8 12L20 19Z',
  d6: 'M4 4V20',
  d7: 'M20.3735 4.34964C20.6064 4.4834 20.75 4.73145 20.75 5V19C20.75 19.2685 20.6064 19.5166 20.3735 19.6504C20.1407 19.7841 19.8541 19.7831 19.6221 19.6478L7.6221 12.6478C7.39168 12.5134 7.25 12.2668 7.25 12C7.25 11.7332 7.39168 11.4866 7.6221 11.3522L19.6221 4.35217C19.8541 4.21685 20.1407 4.21589 20.3735 4.34964Z',
  d8: 'M3.25 19.75V4.25H5.25V19.75H3.25Z',
} as const;

export const IconPreviousStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-stroke-rounded IconPreviousStrokeRounded"
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

export const IconPreviousDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-duotone-rounded IconPreviousDuotoneRounded"
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

export const IconPreviousTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-twotone-rounded IconPreviousTwotoneRounded"
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

export const IconPreviousSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-solid-rounded IconPreviousSolidRounded"
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

export const IconPreviousBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-bulk-rounded IconPreviousBulkRounded"
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

export const IconPreviousStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-stroke-sharp IconPreviousStrokeSharp"
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

export const IconPreviousSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="previous-solid-sharp IconPreviousSolidSharp"
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

export const iconPackOfPrevious: TheIconSelfPack = {
  name: 'Previous',
  StrokeRounded: IconPreviousStrokeRounded,
  DuotoneRounded: IconPreviousDuotoneRounded,
  TwotoneRounded: IconPreviousTwotoneRounded,
  SolidRounded: IconPreviousSolidRounded,
  BulkRounded: IconPreviousBulkRounded,
  StrokeSharp: IconPreviousStrokeSharp,
  SolidSharp: IconPreviousSolidSharp,
};
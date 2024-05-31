import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 20.5C12.8284 20.5 13.5898 20.2551 14.1904 19.8455C14.4774 19.6498 14.5909 19.242 14.4189 18.9153C14.0734 18.2595 13.3308 17.5 12 17.5C10.6692 17.5 9.92656 18.2595 9.58115 18.9153C9.40905 19.242 9.52257 19.6498 9.8096 19.8455C10.4102 20.2551 11.1716 20.5 12 20.5Z',
  d2: 'M12 17.5V9.5',
  d3: 'M4.71342 3.66031C6.61061 3.09115 9.18662 2.75 12 2.75C14.8134 2.75 17.3894 3.09115 19.2866 3.66031C20.2304 3.94346 21.0488 4.29551 21.648 4.72052C22.2278 5.13171 22.75 5.72218 22.75 6.5C22.75 7.27782 22.2278 7.86829 21.648 8.27948C21.0488 8.70449 20.2304 9.05654 19.2866 9.33969C17.3894 9.90885 14.8134 10.25 12 10.25C9.18662 10.25 6.61061 9.90885 4.71342 9.33969C3.7696 9.05654 2.95117 8.70449 2.35195 8.27948C1.77222 7.86829 1.25 7.27782 1.25 6.5C1.25 5.72218 1.77222 5.13171 2.35195 4.72052C2.95117 4.29551 3.7696 3.94346 4.71342 3.66031Z',
  d4: 'M8.91788 18.5657C9.35903 17.7282 10.325 16.75 12.0003 16.75C13.6756 16.75 14.6416 17.7282 15.0827 18.5657C15.4366 19.2375 15.2081 20.0595 14.6133 20.4651C13.8851 20.9618 12.9757 21.25 12.0003 21.25C11.0249 21.25 10.1155 20.9618 9.38734 20.4651C8.79252 20.0595 8.56406 19.2375 8.91788 18.5657Z',
  d5: 'M12 8.5C12.5523 8.5 13 8.94772 13 9.5V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V9.5C11 8.94772 11.4477 8.5 12 8.5Z',
  d6: 'M11 10.2344C11.3294 10.244 11.663 10.2489 12 10.2489C12.337 10.2489 12.6706 10.244 13 10.2344V17.4989C13 18.0512 12.5523 18.4989 12 18.4989C11.4477 18.4989 11 18.0512 11 17.4989V10.2344Z',
  d7: 'M15 20.5H9L10 17.5H14L15 20.5Z',
  d8: 'M9.28849 17.2628C9.39058 16.9566 9.67718 16.75 10 16.75H14C14.3228 16.75 14.6094 16.9566 14.7115 17.2628L15.7115 20.2628C15.7878 20.4915 15.7494 20.743 15.6084 20.9385C15.4675 21.1341 15.2411 21.25 15 21.25H9.00001C8.75892 21.25 8.53254 21.1341 8.39157 20.9385C8.25061 20.743 8.21226 20.4915 8.28849 20.2628L9.28849 17.2628Z',
  d9: 'M13 9.5V17.5H11V9.5H13Z',
} as const;

export const IconTableRoundStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-stroke-rounded IconTableRoundStrokeRounded"
    >
      <ellipse 
        cx="12" 
        cy="6.5" 
        rx="10" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableRoundDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-duotone-rounded IconTableRoundDuotoneRounded"
    >
      <ellipse 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="6.5" 
        rx="10" 
        ry="3" 
        fill="var(--icon-fill)"></ellipse>
      <ellipse 
        cx="12" 
        cy="6.5" 
        rx="10" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableRoundTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-twotone-rounded IconTableRoundTwotoneRounded"
    >
      <ellipse 
        cx="12" 
        cy="6.5" 
        rx="10" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTableRoundSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-solid-rounded IconTableRoundSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableRoundBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-bulk-rounded IconTableRoundBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableRoundStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-stroke-sharp IconTableRoundStrokeSharp"
    >
      <ellipse 
        cx="12" 
        cy="6.5" 
        rx="10" 
        ry="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d7} 
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

export const IconTableRoundSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="table-round-solid-sharp IconTableRoundSolidSharp"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfTableRound: TheIconSelfPack = {
  name: 'TableRound',
  StrokeRounded: IconTableRoundStrokeRounded,
  DuotoneRounded: IconTableRoundDuotoneRounded,
  TwotoneRounded: IconTableRoundTwotoneRounded,
  SolidRounded: IconTableRoundSolidRounded,
  BulkRounded: IconTableRoundBulkRounded,
  StrokeSharp: IconTableRoundStrokeSharp,
  SolidSharp: IconTableRoundSolidSharp,
};
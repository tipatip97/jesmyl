import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M12.0078 10.5082C11.1794 10.5082 10.5078 11.1798 10.5078 12.0082C10.5078 12.8366 11.1794 13.5082 12.0078 13.5082C12.8362 13.5082 13.5078 12.8366 13.5078 12.0082C13.5078 11.1798 12.8362 10.5082 12.0078 10.5082ZM12.0078 10.5082V6.99902M15.0147 15.0198L13.0661 13.0712',
  d3: 'M12 21.8906C17.5228 21.8906 22 17.4134 22 11.8906C22 6.36777 17.5228 1.89062 12 1.89062C6.47715 1.89062 2 6.36777 2 11.8906C2 17.4134 6.47715 21.8906 12 21.8906ZM12 13.3906C12.8284 13.3906 13.5 12.719 13.5 11.8906C13.5 11.0622 12.8284 10.3906 12 10.3906C11.1716 10.3906 10.5 11.0622 10.5 11.8906C10.5 12.719 11.1716 13.3906 12 13.3906Z',
  d4: 'M12 21.8906C17.5228 21.8906 22 17.4135 22 11.8906C22 6.36778 17.5228 1.89062 12 1.89062C6.47715 1.89062 2 6.36778 2 11.8906C2 17.4135 6.47715 21.8906 12 21.8906Z',
  d5: 'M11.9961 10.3891C11.1677 10.3891 10.4961 11.0607 10.4961 11.8891C10.4961 12.7175 11.1677 13.3891 11.9961 13.3891C12.8245 13.3891 13.4961 12.7175 13.4961 11.8891C13.4961 11.0607 12.8245 10.3891 11.9961 10.3891ZM11.9961 10.3891V6.87988M15.003 14.9007L13.0544 12.9521',
  d6: 'M11.9961 10.4989C11.1677 10.4989 10.4961 11.1705 10.4961 11.9989C10.4961 12.8273 11.1677 13.4989 11.9961 13.4989C12.8245 13.4989 13.4961 12.8273 13.4961 11.9989C13.4961 11.1705 12.8245 10.4989 11.9961 10.4989ZM11.9961 10.4989V6.98975M15.003 15.0105L13.0544 13.0619',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9.70802C10.117 10.0938 9.5 10.9748 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C12.3224 14.5 12.6306 14.439 12.9136 14.3278L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L14.3278 12.9136C14.439 12.6306 14.5 12.3224 14.5 12C14.5 10.9748 13.883 10.0938 13 9.70802V7Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M12 6C12.5523 6 13 6.44772 13 7V9.70802C13.883 10.0938 14.5 10.9748 14.5 12C14.5 12.3224 14.439 12.6306 14.3278 12.9136L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12.9136 14.3278C12.6306 14.439 12.3224 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.9748 10.117 10.0938 11 9.70802V7C11 6.44772 11.4477 6 12 6Z',
  d10: 'M12 7V10.5M12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5ZM13.5 13.5L15 15',
  d11: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13 9.98388C13.7409 10.3521 14.25 11.1166 14.25 12C14.25 12.2513 14.2088 12.4929 14.1328 12.7186L15.7071 14.2929L14.2929 15.7071L12.7186 14.1328C12.4929 14.2088 12.2513 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 11.1166 10.2591 10.3521 11 9.98388V7H13V9.98388Z',
} as const;

export const IconTime02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-stroke-rounded IconTime02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTime02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-duotone-rounded IconTime02DuotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTime02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-twotone-rounded IconTime02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTime02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-solid-rounded IconTime02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTime02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-bulk-rounded IconTime02BulkRounded"
    >
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

export const IconTime02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-stroke-sharp IconTime02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTime02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="time-02-solid-sharp IconTime02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTime02: TheIconSelfPack = {
  name: 'Time02',
  StrokeRounded: IconTime02StrokeRounded,
  DuotoneRounded: IconTime02DuotoneRounded,
  TwotoneRounded: IconTime02TwotoneRounded,
  SolidRounded: IconTime02SolidRounded,
  BulkRounded: IconTime02BulkRounded,
  StrokeSharp: IconTime02StrokeSharp,
  SolidSharp: IconTime02SolidSharp,
};
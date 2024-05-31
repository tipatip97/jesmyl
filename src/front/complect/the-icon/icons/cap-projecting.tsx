import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 5L10 5C7.19108 5 5.78661 5 4.77772 5.67412C4.34096 5.96596 3.96596 6.34096 3.67412 6.77772C3 7.78661 3 9.19107 3 12C3 14.8089 3 16.2134 3.67412 17.2223C3.96596 17.659 4.34096 18.034 4.77772 18.3259C5.78661 19 7.19108 19 10 19L21 19',
  d2: 'M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z',
  d3: 'M13 12L21 12',
  d4: 'M10 5H21V19L10 19C7.19108 19 5.78661 19 4.77772 18.3259C4.34096 18.034 3.96596 17.659 3.67412 17.2223C3 16.2134 3 14.8089 3 12C3 9.19107 3 7.78661 3.67412 6.77772C3.96596 6.34096 4.34096 5.96596 4.77772 5.67412C5.78661 5 7.19108 5 10 5ZM10.5 14.5C11.8807 14.5 13 13.3807 13 12C13 10.6193 11.8807 9.5 10.5 9.5C9.11929 9.5 8 10.6193 8 12C8 13.3807 9.11929 14.5 10.5 14.5Z',
  d5: 'M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12ZM13 12H21',
  d6: 'M10.5 8.5C12.0855 8.5 13.4248 9.55426 13.8551 11L20.75 11C21.3023 11 21.75 11.4477 21.75 12C21.75 12.5523 21.3023 13 20.75 13H13.8551C13.4248 14.4457 12.0855 15.5 10.5 15.5C8.567 15.5 7 13.933 7 12C7 10.067 8.567 8.5 10.5 8.5ZM10.5 10.5C9.67157 10.5 9 11.1716 9 12C9 12.8284 9.67157 13.5 10.5 13.5C11.3284 13.5 12 12.8284 12 12C12 11.1716 11.3284 10.5 10.5 10.5Z',
  d7: 'M20.6663 5.34835C20.0639 4.74644 19.3054 4.48754 18.4046 4.36652C17.5369 4.24996 16.4337 4.24998 15.065 4.25H9.96453C8.59424 4.24999 7.50847 4.24999 6.64143 4.33812C5.75308 4.42841 5.01145 4.61739 4.36272 5.05052C3.84365 5.39707 3.39798 5.84239 3.05116 6.36104C2.61769 7.00926 2.42856 7.7503 2.33819 8.63795C2.24998 9.5043 2.24999 10.5892 2.25 11.9584V12.0416C2.24999 13.4108 2.24998 14.4957 2.33819 15.3621C2.42856 16.2497 2.61768 16.9907 3.05115 17.639C3.39798 18.1576 3.84365 18.6029 4.36272 18.9495C5.01145 19.3826 5.75308 19.5716 6.64143 19.6619C7.50847 19.75 8.59422 19.75 9.96451 19.75H15.065C16.4337 19.75 17.5369 19.75 18.4046 19.6335C19.3054 19.5125 20.0639 19.2536 20.6662 18.6517C21.2686 18.0497 21.5277 17.2919 21.6489 16.3918C21.7002 16.0104 21.7289 15.5835 21.745 15.1086C21.7546 14.8248 21.7594 14.683 21.6709 14.5915C21.5824 14.5 21.4382 14.5 21.1499 14.5H15.187C15.0222 14.5 14.9398 14.5 14.8737 14.5351C14.8076 14.5702 14.7574 14.6446 14.6569 14.7934C13.7584 16.124 12.236 17 10.5065 17C7.74293 17 5.50258 14.7614 5.50258 12C5.50258 9.23858 7.74293 7 10.5065 7C12.236 7 13.7584 7.87596 14.6569 9.20663C14.7574 9.3554 14.8076 9.42979 14.8737 9.46489C14.9398 9.5 15.0222 9.5 15.187 9.5L21.1499 9.5C21.4382 9.5 21.5824 9.5 21.6709 9.40851C21.7594 9.31703 21.7546 9.17516 21.745 8.89144C21.7289 8.41648 21.7002 7.9896 21.6489 7.60825C21.5277 6.70814 21.2686 5.95027 20.6663 5.34835Z',
  d8: 'M21 5L3 5L3 19H21',
  d9: 'M11.25 8.75C9.45507 8.75 8 10.2051 8 12C8 13.7949 9.45507 15.25 11.25 15.25C12.7868 15.25 14.0745 14.1834 14.413 12.75H21.75V11.25H14.413C14.0745 9.81665 12.7868 8.75 11.25 8.75ZM9.5 12C9.5 11.0335 10.2835 10.25 11.25 10.25C12.2165 10.25 13 11.0335 13 12C13 12.9665 12.2165 13.75 11.25 13.75C10.2835 13.75 9.5 12.9665 9.5 12Z',
  d10: 'M2.25 19C2.25 19.4142 2.58579 19.75 3 19.75H21.75V14.25H15.4339C14.6321 15.7381 13.0604 16.75 11.25 16.75C8.62665 16.75 6.5 14.6234 6.5 12C6.5 9.37665 8.62665 7.25 11.25 7.25C13.0604 7.25 14.6321 8.26186 15.4339 9.75H21.75V4.25H3C2.58579 4.25 2.25 4.58579 2.25 5V19Z',
} as const;

export const IconCapProjectingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-stroke-rounded IconCapProjectingStrokeRounded"
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

export const IconCapProjectingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-duotone-rounded IconCapProjectingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconCapProjectingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-twotone-rounded IconCapProjectingTwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapProjectingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-solid-rounded IconCapProjectingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapProjectingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-bulk-rounded IconCapProjectingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapProjectingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-stroke-sharp IconCapProjectingStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconCapProjectingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-projecting-solid-sharp IconCapProjectingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCapProjecting: TheIconSelfPack = {
  name: 'CapProjecting',
  StrokeRounded: IconCapProjectingStrokeRounded,
  DuotoneRounded: IconCapProjectingDuotoneRounded,
  TwotoneRounded: IconCapProjectingTwotoneRounded,
  SolidRounded: IconCapProjectingSolidRounded,
  BulkRounded: IconCapProjectingBulkRounded,
  StrokeSharp: IconCapProjectingStrokeSharp,
  SolidSharp: IconCapProjectingSolidSharp,
};
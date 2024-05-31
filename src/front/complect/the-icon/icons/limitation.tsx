import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 20C7.48595 20.6974 7.2774 20.9401 6.85472 20.9929C6.43205 21.0457 6.13982 20.8037 5.55537 20.3197C3.38109 18.5193 2 15.8253 2 12.8147C2 7.39421 6.47715 3 12 3C17.5228 3 22 7.39421 22 12.8147C22 15.8253 20.6189 18.5193 18.4446 20.3197C17.8602 20.8037 17.568 21.0457 17.1453 20.9929C16.7226 20.9401 16.514 20.6974 16 20',
  d2: 'M13.5 10.5L18 5',
  d3: 'M12 23C17.5228 23 22 18.5228 22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13C2 18.5228 6.47715 23 12 23ZM12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z',
  d4: 'M13.5 10.5L18 5M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z',
  d5: 'M12 4C7.01173 4 3 7.96404 3 12.8147C3 15.5112 4.23546 17.9285 6.19315 19.5495C6.34295 19.6736 6.45707 19.7679 6.55754 19.8457C6.64178 19.9108 6.70019 19.9515 6.74206 19.9774C6.77435 19.9452 6.82047 19.8942 6.88627 19.8129C6.96921 19.7104 7.06695 19.5805 7.19502 19.4067C7.52269 18.9621 8.14873 18.8673 8.5933 19.195C9.03788 19.5227 9.13265 20.1487 8.80498 20.5933C8.56236 20.9225 8.32287 21.2435 8.06719 21.4768C7.75459 21.7621 7.40744 21.9316 6.97865 21.9852C6.50584 22.0442 6.11005 21.9216 5.76726 21.7245C5.47739 21.5578 5.18365 21.3102 4.9176 21.09C2.52673 19.1102 1 16.1395 1 12.8147C1 6.82438 5.94258 2 12 2C18.0574 2 23 6.82438 23 12.8147C23 16.1395 21.4733 19.1102 19.0824 21.09C18.8163 21.3102 18.5226 21.5578 18.2327 21.7245C17.8899 21.9216 17.4942 22.0442 17.0214 21.9852C16.5926 21.9316 16.2454 21.7621 15.9328 21.4768C15.6771 21.2435 15.4376 20.9225 15.195 20.5933C14.8673 20.1487 14.9621 19.5227 15.4067 19.195C15.8513 18.8673 16.4773 18.9621 16.805 19.4067C16.933 19.5805 17.0308 19.7104 17.1137 19.8129C17.1795 19.8942 17.2256 19.9452 17.2579 19.9774C17.2998 19.9515 17.3582 19.9108 17.4425 19.8457C17.5429 19.7679 17.6571 19.6736 17.8069 19.5495C19.7645 17.9285 21 15.5112 21 12.8147C21 7.96404 16.9883 4 12 4Z',
  d6: 'M18.6333 4.22607C19.0607 4.5758 19.1237 5.20582 18.774 5.63327L14.274 11.1333C13.9243 11.5607 13.2942 11.6237 12.8668 11.274C12.4393 10.9243 12.3763 10.2942 12.7261 9.86679L17.2261 4.36679C17.5758 3.93935 18.2058 3.87635 18.6333 4.22607Z',
  d7: 'M12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12Z',
  d8: 'M16 18.999L18.001 21C20.4293 19.1755 22 16.2712 22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13C2 16.2712 3.57069 19.1755 5.99902 21L8 18.999',
  d9: 'M12 4.16921C7.1424 4.16921 3.20455 8.03587 3.20455 12.8056C3.20455 15.3327 4.30908 17.6063 6.07293 19.1867L7.39987 17.8838L8.78194 19.2409L6.2266 21.75L5.54839 21.2497C2.94013 19.3255 1.25 16.2592 1.25 12.8056C1.25 6.97592 6.06294 2.25 12 2.25C17.9371 2.25 22.75 6.97592 22.75 12.8056C22.75 16.2592 21.0599 19.3255 18.4516 21.2497L17.7734 21.75L15.2181 19.2409L16.6001 17.8838L17.9271 19.1867C19.6909 17.6063 20.7955 15.3327 20.7955 12.8056C20.7955 8.03587 16.8576 4.16921 12 4.16921Z',
  d10: 'M19.0181 5.89023L14.0181 11.8902L12.4817 10.6099L17.4817 4.60986L19.0181 5.89023Z',
  d11: 'M10 12.25C10 11.0074 11.0074 10 12.25 10C13.4926 10 14.5 11.0074 14.5 12.25C14.5 13.4926 13.4926 14.5 12.25 14.5C11.0074 14.5 10 13.4926 10 12.25Z',
} as const;

export const IconLimitationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-stroke-rounded IconLimitationStrokeRounded"
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
      <circle 
        cx="12" 
        cy="12" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconLimitationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-duotone-rounded IconLimitationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconLimitationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-twotone-rounded IconLimitationTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLimitationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-solid-rounded IconLimitationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLimitationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-bulk-rounded IconLimitationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLimitationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-stroke-sharp IconLimitationStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLimitationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="limitation-solid-sharp IconLimitationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLimitation: TheIconSelfPack = {
  name: 'Limitation',
  StrokeRounded: IconLimitationStrokeRounded,
  DuotoneRounded: IconLimitationDuotoneRounded,
  TwotoneRounded: IconLimitationTwotoneRounded,
  SolidRounded: IconLimitationSolidRounded,
  BulkRounded: IconLimitationBulkRounded,
  StrokeSharp: IconLimitationStrokeSharp,
  SolidSharp: IconLimitationSolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.5 21.685C10.299 21.8906 11.1368 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.3375 2.01672 12.6711 2.04938 13',
  d2: 'M5.02108 14L2.8602 16.0826C1.69974 17.2204 1.71976 19.0523 2.88023 20.1707C4.06071 21.2892 5.96146 21.2699 7.12193 20.1515C8.30241 19.0137 8.2824 17.1818 7.12193 16.0633L5.02108 14Z',
  d3: 'M8.00897 8.44238H8M16 8.44238H15.991',
  d4: 'M15 16C14.1644 15.3721 13.1256 15 12 15C11.0893 15 10.2354 15.2436 9.5 15.6692',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.4521 2.30949 14.8318 2.8661 16.077L5.02108 14L7.12193 16.0633C8.2824 17.1818 8.30241 19.0137 7.12193 20.1515C6.99205 20.2766 6.8529 20.388 6.70652 20.4856C8.24171 21.4453 10.0561 22 12 22Z',
  d6: 'M8.00897 8.44141H8M16 8.44141H15.991',
  d7: 'M3.38334 16.6208C2.53004 17.4596 2.54276 18.8018 3.39859 19.629C4.28617 20.4675 5.72867 20.4533 6.60166 19.6119C7.47259 18.7725 7.45959 17.4307 6.60166 16.6038L6.59657 16.5989L5.01635 15.0469L3.38334 16.6208Z',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.206 1.44859 14.3656 1.81487 15.448C1.88781 15.6635 2.17286 15.7064 2.33535 15.5471L2.33992 15.5426L4.50082 13.46C4.7933 13.1781 5.25702 13.1803 5.54682 13.4649L7.64528 15.5259C9.10563 16.9362 9.13171 19.2563 7.6426 20.6915L7.62436 20.7089C7.22965 21.0843 7.0323 21.2719 7.0603 21.4305C7.08829 21.5891 7.29595 21.6795 7.71128 21.8604C9.02509 22.4327 10.4755 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6.75 8.44141C6.75 7.75105 7.30964 7.19141 8 7.19141H8.00897C8.69933 7.19141 9.25897 7.75105 9.25897 8.44141C9.25897 9.13176 8.69933 9.69141 8.00897 9.69141H8C7.30964 9.69141 6.75 9.13176 6.75 8.44141ZM14.741 8.44141C14.741 7.75105 15.3007 7.19141 15.991 7.19141H16C16.6904 7.19141 17.25 7.75105 17.25 8.44141C17.25 9.13176 16.6904 9.69141 16 9.69141H15.991C15.3007 9.69141 14.741 9.13176 14.741 8.44141ZM12.0001 14.25C10.954 14.25 9.97099 14.5301 9.12448 15.02C8.76596 15.2275 8.64352 15.6863 8.85098 16.0448C9.05845 16.4033 9.51726 16.5258 9.87577 16.3183C10.5001 15.957 11.2248 15.75 12.0001 15.75C12.9577 15.75 13.8394 16.0659 14.5496 16.5996C14.8807 16.8484 15.3509 16.7817 15.5997 16.4505C15.8485 16.1194 15.7818 15.6492 15.4507 15.4004C14.4896 14.6782 13.2938 14.25 12.0001 14.25Z',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.206 1.44859 14.3656 1.81487 15.448C1.88781 15.6635 2.17286 15.7064 2.33535 15.5471L2.33992 15.5426L4.50082 13.46C4.7933 13.1781 5.25702 13.1803 5.54682 13.4649L7.64528 15.5259C9.10563 16.9362 9.13171 19.2563 7.6426 20.6915C7.63653 20.6973 7.63046 20.7031 7.62436 20.7089C7.22965 21.0843 7.0323 21.2719 7.0603 21.4305C7.08829 21.5891 7.29595 21.6795 7.71128 21.8604C9.02509 22.4327 10.4755 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d10: 'M6.75 8.44141C6.75 7.75105 7.30964 7.19141 8 7.19141H8.00897C8.69933 7.19141 9.25897 7.75105 9.25897 8.44141C9.25897 9.13176 8.69933 9.69141 8.00897 9.69141H8C7.30964 9.69141 6.75 9.13176 6.75 8.44141ZM14.741 8.44141C14.741 7.75105 15.3007 7.19141 15.991 7.19141H16C16.6904 7.19141 17.25 7.75105 17.25 8.44141C17.25 9.13176 16.6904 9.69141 16 9.69141H15.991C15.3007 9.69141 14.741 9.13176 14.741 8.44141Z',
  d11: 'M9.12447 15.02C9.97099 14.5301 10.954 14.25 12.0001 14.25C13.2938 14.25 14.4896 14.6782 15.4507 15.4004C15.7818 15.6492 15.8485 16.1194 15.5997 16.4505C15.3509 16.7817 14.8807 16.8484 14.5496 16.5996C13.8394 16.0659 12.9577 15.75 12.0001 15.75C11.2248 15.75 10.5001 15.957 9.87577 16.3183C9.51726 16.5258 9.05845 16.4033 8.85098 16.0448C8.64352 15.6863 8.76596 15.2275 9.12447 15.02Z',
  d12: 'M5.02128 14L2.8604 16.0826C1.69993 17.2204 1.71996 19.0523 2.88043 20.1707C4.06091 21.2892 5.96166 21.2699 7.12213 20.1515C8.30261 19.0137 8.2826 17.1818 7.12213 16.0633L5.02128 14Z',
  d13: 'M4.27202 14L2.11113 16.0826C0.950667 17.2204 0.970694 19.0523 2.13116 20.1707C3.31164 21.2892 5.21239 21.2699 6.37286 20.1515C7.55334 19.0137 7.53333 17.1818 6.37286 16.0633L4.27202 14Z',
  d14: 'M12.0007 1.25C6.06367 1.25 1.25073 6.06294 1.25073 12C1.25073 12.9745 1.38041 13.9188 1.62344 14.8164L4.28026 12.2559L7.24493 15.1676C8.90508 16.7725 8.93515 19.4179 7.24032 21.0513C7.10318 21.1835 6.95887 21.3048 6.80857 21.4152C8.34775 22.2658 10.1177 22.75 12.0007 22.75C17.9378 22.75 22.7507 17.9371 22.7507 12C22.7507 6.06294 17.9378 1.25 12.0007 1.25ZM6.75073 8.44238C6.75073 7.75203 7.31038 7.19238 8.00073 7.19238H8.0097C8.70006 7.19238 9.2597 7.75203 9.2597 8.44238C9.2597 9.13274 8.70006 9.69238 8.0097 9.69238H8.00073C7.31038 9.69238 6.75073 9.13274 6.75073 8.44238ZM14.7418 8.44238C14.7418 7.75203 15.3014 7.19238 15.9918 7.19238H16.0007C16.6911 7.19238 17.2507 7.75203 17.2507 8.44238C17.2507 9.13274 16.6911 9.69238 16.0007 9.69238H15.9918C15.3014 9.69238 14.7418 9.13274 14.7418 8.44238ZM11.9994 14.25C10.9533 14.25 9.97029 14.5301 9.12378 15.02L9.87508 16.3183C10.4994 15.957 11.2241 15.75 11.9994 15.75C12.957 15.75 13.8387 16.0659 14.5489 16.5996L15.45 15.4004C14.4889 14.6782 13.2931 14.25 11.9994 14.25Z',
} as const;

export const IconSad02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-stroke-rounded IconSad02StrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSad02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-duotone-rounded IconSad02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSad02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-twotone-rounded IconSad02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconSad02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-solid-rounded IconSad02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSad02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-bulk-rounded IconSad02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSad02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-stroke-sharp IconSad02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSad02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sad-02-solid-sharp IconSad02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSad02: TheIconSelfPack = {
  name: 'Sad02',
  StrokeRounded: IconSad02StrokeRounded,
  DuotoneRounded: IconSad02DuotoneRounded,
  TwotoneRounded: IconSad02TwotoneRounded,
  SolidRounded: IconSad02SolidRounded,
  BulkRounded: IconSad02BulkRounded,
  StrokeSharp: IconSad02StrokeSharp,
  SolidSharp: IconSad02SolidSharp,
};
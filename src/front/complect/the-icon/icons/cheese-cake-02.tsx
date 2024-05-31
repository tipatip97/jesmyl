import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.5 7C17.4335 7.42441 18 7.9819 18 8.59247C18 9.92211 15.3137 11 12 11C8.68629 11 6 9.92211 6 8.59247C6 7.9819 6.56645 7.42441 7.5 7',
  d2: 'M6 13C6 14.1046 8.68629 15 12 15C15.3137 15 18 14.1046 18 13',
  d3: 'M18 9V17C18 18.1046 15.3137 19 12 19C8.68629 19 6 18.1046 6 17V9',
  d4: 'M20.5 16C21.4509 16.6013 22 17.3109 22 18.0708C22 20.2409 17.5228 22 12 22C6.47715 22 2 20.2409 2 18.0708C2 17.3109 2.54913 16.6013 3.5 16',
  d5: 'M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2',
  d6: 'M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z',
  d7: 'M12 11.0013C8.68629 11.0013 6 9.92339 6 8.59375V17.0013C6 18.1058 8.68629 19.0013 12 19.0013C15.3137 19.0013 18 18.1058 18 17.0013V8.59375C18 9.92339 15.3137 11.0013 12 11.0013Z',
  d8: 'M19.6548 15.3407C19.3596 15.8075 19.4988 16.4252 19.9655 16.7203C20.8157 17.2579 21 17.7048 21 17.946C21 18.1181 20.9152 18.3881 20.5335 18.7427C20.1505 19.0985 19.5416 19.465 18.7054 19.7936C17.039 20.4483 14.6686 20.8751 12 20.8751C9.33138 20.8751 6.96105 20.4483 5.29463 19.7936C4.45839 19.465 3.84949 19.0985 3.46645 18.7427C3.08476 18.3881 3 18.1181 3 17.946C3 17.7048 3.18431 17.2579 4.03445 16.7203C4.50124 16.4252 4.64037 15.8075 4.3452 15.3407C4.05003 14.8739 3.43233 14.7348 2.96555 15.0299C1.91395 15.6949 1 16.6672 1 17.946C1 18.8589 1.47488 19.6224 2.10525 20.208C2.73427 20.7924 3.58983 21.2726 4.56323 21.655C6.51611 22.4224 9.14577 22.8751 12 22.8751C14.8542 22.8751 17.4839 22.4224 19.4368 21.655C20.4102 21.2726 21.2657 20.7924 21.8948 20.208C22.5251 19.6224 23 18.8589 23 17.946C23 16.6672 22.086 15.6949 21.0345 15.0299C20.5677 14.7348 19.95 14.8739 19.6548 15.3407Z',
  d9: 'M14.7276 1.69328C14.8281 2.09512 14.5837 2.50232 14.1819 2.60278C13.5431 2.76248 13.1841 3.04554 12.9853 3.30694C14.0174 3.70314 14.75 4.7036 14.75 5.87518C14.75 7.39396 13.5188 8.62518 12 8.62518C10.4812 8.62518 9.25 7.39396 9.25 5.87518C9.25 4.57436 10.1532 3.48449 11.3667 3.19846C11.6247 2.41871 12.3417 1.51666 13.8181 1.14757C14.2199 1.04711 14.6271 1.29143 14.7276 1.69328Z',
  d10: 'M15.4615 6.66226C15.2411 7.12311 15.4554 7.66654 15.9402 7.87606C16.3224 8.04123 16.568 8.20727 16.7049 8.34266C16.7951 8.43187 16.8165 8.48431 16.8209 8.50108C16.8159 8.52007 16.7895 8.58521 16.6674 8.69531C16.4926 8.85293 16.1881 9.03711 15.732 9.21107C14.8251 9.55698 13.5061 9.7915 12 9.7915C10.4939 9.7915 9.17487 9.55698 8.26798 9.21107C7.8119 9.03711 7.5074 8.85293 7.33262 8.69531C7.21053 8.58521 7.18408 8.52007 7.17906 8.50108C7.18354 8.48431 7.20494 8.43187 7.29514 8.34266C7.43205 8.20727 7.67758 8.04123 8.05979 7.87606C8.5446 7.66654 8.75895 7.12311 8.53854 6.66226C8.31814 6.2014 7.74645 5.99765 7.26164 6.20716C6.74365 6.43101 6.26596 6.71499 5.9047 7.07228C5.54607 7.42696 5.26093 7.89887 5.25 8.46741V11.3882C5.25 11.7199 5.25 11.8858 5.31238 12.054C5.34707 12.1476 5.4164 12.2677 5.48009 12.3445C5.59459 12.4827 5.71385 12.5515 5.95236 12.6892C7.4629 13.5614 9.59943 14.1248 12 14.1248C14.4006 14.1248 16.5371 13.5614 18.0476 12.6892C18.1477 12.6315 18.2445 12.5727 18.338 12.5131C18.5306 12.3901 18.6269 12.3287 18.6885 12.2164C18.75 12.1041 18.75 11.9787 18.75 11.7279V8.50132L18.7497 8.46741C18.7387 7.89887 18.4539 7.42696 18.0953 7.07228C17.734 6.71499 17.2564 6.43101 16.7384 6.20716C16.2536 5.99765 15.6819 6.2014 15.4615 6.66226Z',
  d11: 'M18.75 14.7038C18.75 14.4007 18.75 14.2492 18.6564 14.1904C18.5628 14.1316 18.4221 14.1994 18.1408 14.3349C16.4483 15.1502 14.3061 15.6248 12 15.6248C9.6939 15.6248 7.55168 15.1502 5.85923 14.3349C5.57789 14.1994 5.43721 14.1316 5.34361 14.1904C5.25 14.2492 5.25 14.4007 5.25 14.7038V16.8749C5.25 17.4794 5.61818 17.9358 6.00728 18.2425C6.40483 18.5558 6.93362 18.8051 7.52019 19.0007C8.70117 19.3943 10.285 19.6249 12 19.6249C13.715 19.6249 15.2988 19.3943 16.4798 19.0007C17.0664 18.8051 17.5952 18.5558 17.9927 18.2425C18.3818 17.9358 18.75 17.4794 18.75 16.8749V14.7038Z',
  d12: 'M20.0992 16.6275C20.9745 17.1816 21.25 17.6947 21.25 18.066C21.25 18.3309 21.1165 18.663 20.7037 19.0469C20.2899 19.4317 19.6502 19.8128 18.7968 20.1484C17.0946 20.8179 14.6918 21.2484 12 21.2484C9.30818 21.2484 6.90543 20.8179 5.20321 20.1484C4.34982 19.8128 3.71008 19.4317 3.2963 19.0469C2.88353 18.663 2.75 18.3309 2.75 18.066C2.75 17.6947 3.02552 17.1816 3.90084 16.6275L3.09916 15.3584C2.07275 16.0081 1.25 16.9157 1.25 18.066C1.25 18.8871 1.67612 19.5897 2.2754 20.147C2.87367 20.7034 3.6984 21.1698 4.65466 21.546C6.57172 22.3 9.16897 22.75 12 22.75C14.831 22.75 17.4283 22.3 19.3453 21.546C20.3016 21.1698 21.1263 20.7034 21.7246 20.147C22.3239 19.5897 22.75 18.8871 22.75 18.066C22.75 16.9157 21.9273 16.0081 20.9008 15.3584L20.0992 16.6275Z',
  d13: 'M14.75 5.98254C14.75 4.80974 14.0174 3.80824 12.9853 3.41162C13.1841 3.14995 13.5431 2.8666 14.1819 2.70673L13.8181 1.25C12.3417 1.61948 11.6247 2.52247 11.3667 3.30303C10.1532 3.58936 9.25 4.68036 9.25 5.98254C9.25 7.5029 10.4812 8.7354 12 8.7354C13.5188 8.7354 14.75 7.5029 14.75 5.98254Z',
  d14: 'M7.18961 6.30029C6.67003 6.53675 6.20475 6.83078 5.85919 7.19067C5.51015 7.5542 5.25 8.02341 5.25 8.57789V11.766C5.53784 12.2315 6.05835 12.7015 6.85142 13.1216C8.13064 13.7994 9.94967 14.2413 12 14.2413C14.0503 14.2413 15.8694 13.7994 17.1486 13.1216C17.9417 12.7015 18.4622 12.2315 18.75 11.766V8.57789C18.75 8.02341 18.4898 7.5542 18.1408 7.19067C17.7952 6.83078 17.33 6.53675 16.8104 6.30029L16.1896 7.66723C16.6036 7.85562 16.8883 8.05305 17.0594 8.23121C17.2269 8.40573 17.25 8.52117 17.25 8.57789C17.25 8.63858 17.2225 8.77172 17.0123 8.97131C16.8005 9.1725 16.4538 9.38827 15.9633 9.58527C14.9865 9.97762 13.5856 10.2371 12 10.2371C10.4144 10.2371 9.01346 9.97762 8.03665 9.58527C7.54621 9.38827 7.19954 9.1725 6.98769 8.97131C6.77752 8.77172 6.75 8.63858 6.75 8.57789C6.75 8.52117 6.77308 8.40573 6.94065 8.23121C7.1117 8.05305 7.39642 7.85562 7.81039 7.66723L7.18961 6.30029Z',
  d15: 'M18.75 13.8879C18.47 14.0934 18.1674 14.2808 17.8502 14.4488C16.3146 15.2624 14.245 15.7429 12 15.7429C9.75502 15.7429 7.68538 15.2624 6.14975 14.4488C5.8326 14.2808 5.53002 14.0934 5.25 13.8879V16.9942C5.25 17.5993 5.61818 18.0562 6.00728 18.3632C6.40483 18.6768 6.93362 18.9264 7.52019 19.1221C8.70117 19.5162 10.285 19.7471 12 19.7471C13.715 19.7471 15.2988 19.5162 16.4798 19.1221C17.0664 18.9264 17.5952 18.6768 17.9927 18.3632C18.3818 18.0562 18.75 17.5993 18.75 16.9942V13.8879Z',
} as const;

export const IconCheeseCake02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-stroke-rounded IconCheeseCake02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCheeseCake02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-duotone-rounded IconCheeseCake02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCheeseCake02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-twotone-rounded IconCheeseCake02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-solid-rounded IconCheeseCake02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconCheeseCake02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-bulk-rounded IconCheeseCake02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconCheeseCake02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-stroke-sharp IconCheeseCake02StrokeSharp"
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
        d={d.d3} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-02-solid-sharp IconCheeseCake02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCheeseCake02: TheIconSelfPack = {
  name: 'CheeseCake02',
  StrokeRounded: IconCheeseCake02StrokeRounded,
  DuotoneRounded: IconCheeseCake02DuotoneRounded,
  TwotoneRounded: IconCheeseCake02TwotoneRounded,
  SolidRounded: IconCheeseCake02SolidRounded,
  BulkRounded: IconCheeseCake02BulkRounded,
  StrokeSharp: IconCheeseCake02StrokeSharp,
  SolidSharp: IconCheeseCake02SolidSharp,
};
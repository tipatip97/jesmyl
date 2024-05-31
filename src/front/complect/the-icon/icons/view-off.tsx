import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 8C22 8 18 14 12 14C6 14 2 8 2 8',
  d2: 'M15 13.5L16.5 16',
  d3: 'M20 11L22 13',
  d4: 'M2 13L4 11',
  d5: 'M9 13.5L7.5 16',
  d6: 'M12 14C18 14 22 8 22 8H2C2 8 6 14 12 14Z',
  d7: 'M1.44541 7.1683C1.90493 6.86195 2.5258 6.98612 2.83216 7.44565C2.85837 7.48309 2.93295 7.58935 2.98827 7.66431C3.099 7.81433 3.26659 8.03308 3.48708 8.29767C3.92916 8.82816 4.57785 9.53563 5.4009 10.2411C7.06276 11.6655 9.33801 13.0004 12.0001 13.0004C14.6622 13.0004 16.9371 11.6655 18.599 10.2411C19.422 9.53563 20.0707 8.82816 20.5128 8.29767C20.7333 8.03308 20.9009 7.81433 21.0116 7.66431C21.0669 7.58935 21.1415 7.48309 21.1677 7.44565C21.4741 6.98612 22.095 6.86195 22.5545 7.1683C23.014 7.47465 23.1382 8.09552 22.8318 8.55505L22.8262 8.56307C22.786 8.62051 22.6834 8.7672 22.6208 8.85202C22.4893 9.03013 22.2975 9.28012 22.0493 9.57803C21.5538 10.1725 20.8275 10.9651 19.9006 11.7596C18.0624 13.3352 15.338 15.0003 12.0001 15.0003C8.6622 15.0003 5.93746 13.3352 4.09931 11.7596C3.17236 10.9651 2.44606 10.1725 1.95064 9.57803C1.70237 9.28012 1.51059 9.03013 1.37913 8.85202C1.31336 8.76291 1.20337 8.6055 1.16806 8.55505C0.861704 8.09552 0.985877 7.47465 1.44541 7.1683Z',
  d8: 'M4.70711 10.2929C5.09763 10.6834 5.09763 11.3166 4.70711 11.7071L2.70711 13.7071C2.31658 14.0976 1.68342 14.0976 1.29289 13.7071C0.902369 13.3166 0.902369 12.6834 1.29289 12.2929L3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929ZM19.2929 10.2929C19.6834 9.90237 20.3166 9.90237 20.7071 10.2929L22.7071 12.2929C23.0976 12.6834 23.0976 13.3166 22.7071 13.7071C22.3166 14.0976 21.6834 14.0976 21.2929 13.7071L19.2929 11.7071C18.9024 11.3166 18.9024 10.6834 19.2929 10.2929ZM9.5145 12.6425C9.98808 12.9267 10.1416 13.5409 9.85749 14.0145L8.35749 16.5145C8.07334 16.9881 7.45908 17.1416 6.9855 16.8575C6.51192 16.5733 6.35836 15.9591 6.64251 15.4855L8.14251 12.9855C8.42666 12.5119 9.04092 12.3584 9.5145 12.6425ZM14.4855 12.6425C14.9591 12.3584 15.5733 12.5119 15.8575 12.9855L17.3575 15.4855C17.6416 15.9591 17.4881 16.5733 17.0145 16.8575C16.5409 17.1416 15.9267 16.9881 15.6425 16.5145L14.1425 14.0145C13.8584 13.5409 14.0119 12.9267 14.4855 12.6425Z',
  d9: 'M1.44541 7.16818C1.90493 6.86183 2.5258 6.986 2.83216 7.44553C2.85837 7.48297 2.93295 7.58923 2.98827 7.66419C3.099 7.8142 3.26659 8.03296 3.48708 8.29754C3.92916 8.82804 4.57785 9.53551 5.4009 10.241C7.06276 11.6654 9.33801 13.0002 12.0001 13.0002C14.6622 13.0002 16.9371 11.6654 18.599 10.241C19.422 9.53551 20.0707 8.82804 20.5128 8.29754C20.7333 8.03296 20.9009 7.8142 21.0116 7.66419C21.0669 7.58923 21.1415 7.48297 21.1677 7.44553C21.4741 6.986 22.095 6.86183 22.5545 7.16818C23.014 7.47453 23.1382 8.0954 22.8318 8.55493L22.8262 8.56295C22.786 8.62039 22.6834 8.76708 22.6208 8.85189C22.4893 9.03 22.2975 9.28 22.0493 9.57791C21.5538 10.1724 20.8275 10.965 19.9006 11.7595C18.0624 13.335 15.338 15.0002 12.0001 15.0002C8.6622 15.0002 5.93746 13.335 4.09931 11.7595C3.17236 10.965 2.44606 10.1724 1.95064 9.57791C1.70237 9.28 1.51059 9.03 1.37913 8.85189C1.31336 8.76279 1.20337 8.60538 1.16806 8.55493C0.861704 8.0954 0.985877 7.47453 1.44541 7.16818Z',
  d10: 'M2.92675 10.6602L1.29289 12.2941C0.902369 12.6846 0.902369 13.3178 1.29289 13.7083C1.68342 14.0988 2.31658 14.0988 2.70711 13.7083L4.40167 12.0137C4.29838 11.9292 4.19758 11.8448 4.09931 11.7605C3.66294 11.3865 3.27103 11.0129 2.92675 10.6602Z',
  d11: 'M7.53761 13.9948L6.64251 15.4867C6.35836 15.9603 6.51192 16.5745 6.9855 16.8587C7.45908 17.1428 8.07334 16.9892 8.35749 16.5157L9.46017 14.6779C8.78308 14.5047 8.14117 14.2703 7.53761 13.9948Z',
  d12: 'M14.5399 14.6779L15.6425 16.5157C15.9267 16.9892 16.5409 17.1428 17.0145 16.8587C17.4881 16.5745 17.6416 15.9603 17.3575 15.4867L16.4624 13.9949C15.8588 14.2703 15.2169 14.5048 14.5399 14.6779Z',
  d13: 'M19.5983 12.0137L21.2929 13.7083C21.6834 14.0988 22.3166 14.0988 22.7071 13.7083C23.0976 13.3178 23.0976 12.6846 22.7071 12.2941L21.0732 10.6602C20.7289 11.0129 20.337 11.3865 19.9006 11.7605C19.8023 11.8447 19.7016 11.9292 19.5983 12.0137Z',
  d14: 'M5.45012 10.2746C7.09949 11.6881 9.35765 13.0126 11.9997 13.0126C14.6418 13.0126 16.9 11.6881 18.5494 10.2746C19.3662 9.57461 20.0101 8.8726 20.4488 8.34619C20.6676 8.08365 20.834 7.86658 20.9439 7.71772C20.9988 7.64334 21.0395 7.58614 21.0655 7.54899C21.0785 7.53042 21.0878 7.51687 21.0934 7.50871L21.0989 7.50055C21.0988 7.50078 21.0988 7.50075 21.9246 8.05117C22.7504 8.60159 22.7502 8.60189 22.75 8.60222L22.7482 8.60492L22.7445 8.61042L22.7327 8.62779C22.7229 8.64215 22.7092 8.66204 22.6916 8.68707C22.6566 8.73713 22.6062 8.80785 22.5409 8.89627C22.4105 9.073 22.2201 9.32107 21.9737 9.61669C21.7135 9.92892 21.389 10.2962 21.0048 10.6897L22.6264 12.311L21.2228 13.7143L19.541 12.0328C18.6726 12.7428 17.6267 13.4519 16.4286 13.9986L17.317 15.4789L15.6149 16.5L14.5205 14.6763C13.7271 14.8791 12.8852 14.9972 11.9997 14.9972C11.1143 14.9972 10.2723 14.8791 9.47903 14.6763L8.3846 16.5L6.6825 15.4789L7.57091 13.9986C6.37278 13.4519 5.32691 12.7428 4.45851 12.0328L2.77667 13.7143L1.37308 12.311L2.99466 10.6897C2.61047 10.2962 2.28603 9.92892 2.02578 9.61669C1.77938 9.32107 1.58904 9.073 1.45856 8.89627C1.39329 8.80785 1.34289 8.73713 1.30784 8.68707C1.29031 8.66204 1.27661 8.64215 1.2668 8.62779L1.255 8.61042L1.25131 8.60492L1.25001 8.60298C1.24979 8.60266 1.24908 8.60159 2.07488 8.05117C2.90068 7.50075 2.9005 7.50049 2.90035 7.50026C2.89995 7.49966 2.90038 7.5003 2.90035 7.50026L2.90609 7.50871C2.91167 7.51687 2.92099 7.53042 2.93399 7.54899C2.96 7.58614 3.00071 7.64334 3.05562 7.71772C3.16551 7.86658 3.33185 8.08365 3.55068 8.34619C3.98943 8.8726 4.63326 9.57461 5.45012 10.2746Z',
} as const;

export const IconViewOffStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-stroke-rounded IconViewOffStrokeRounded"
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
        strokeLinecap="round" 
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

export const IconViewOffDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-duotone-rounded IconViewOffDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
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

export const IconViewOffTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-twotone-rounded IconViewOffTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconViewOffSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-solid-rounded IconViewOffSolidRounded"
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

export const IconViewOffBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-bulk-rounded IconViewOffBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconViewOffStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-stroke-sharp IconViewOffStrokeSharp"
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

export const IconViewOffSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="view-off-solid-sharp IconViewOffSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfViewOff: TheIconSelfPack = {
  name: 'ViewOff',
  StrokeRounded: IconViewOffStrokeRounded,
  DuotoneRounded: IconViewOffDuotoneRounded,
  TwotoneRounded: IconViewOffTwotoneRounded,
  SolidRounded: IconViewOffSolidRounded,
  BulkRounded: IconViewOffBulkRounded,
  StrokeSharp: IconViewOffStrokeSharp,
  SolidSharp: IconViewOffSolidSharp,
};
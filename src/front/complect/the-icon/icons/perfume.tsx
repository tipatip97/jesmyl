import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 16.0333C2 17.9969 2.76322 19.7833 4.01078 21.1151C4.70497 21.8562 5.32548 22 6.32891 22H12.6711C13.6745 22 14.295 21.8562 14.9892 21.1151C16.2368 19.7833 17 17.9969 17 16.0333C17 13.0265 15.2105 10.4354 12.6328 9.2554C12.1918 9.05357 11.8016 9 11.3176 9H7.68245C7.19837 9 6.80816 9.05357 6.36725 9.2554C3.7895 10.4354 2 13.0265 2 16.0333Z',
  d2: 'M7 9V8C7 6.34533 7.34533 6 9 6H10C11.6547 6 12 6.34533 12 8V9',
  d3: 'M11 6V4.5C11 3.4506 10.6269 3 9.5 3C8.37313 3 8 3.4506 8 4.5V6',
  d4: 'M6 4H8M11 4H16',
  d5: 'M6 4H8M11 4H16M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z',
  d6: 'M15.2582 4.75C15.2528 4.83263 15.25 4.91599 15.25 5C15.25 7.07107 16.9289 8.75 19 8.75C21.0711 8.75 22.75 7.07107 22.75 5C22.75 2.92893 21.0711 1.25 19 1.25C17.561 1.25 16.3113 2.06055 15.6825 3.25H11.5047C11.4304 3.10266 11.3351 2.96353 11.2135 2.83699C10.7668 2.37182 10.1349 2.25 9.50001 2.25C8.8651 2.25 8.23318 2.37182 7.78647 2.83699C7.66497 2.96353 7.56966 3.10266 7.49536 3.25H6C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75H7.25001V5C7.24994 5.16977 7.24986 5.37455 7.26411 5.54624C7.1158 5.6238 6.97567 5.72267 6.84917 5.84917C6.56966 6.12868 6.42498 6.4748 6.34728 6.82851C6.27144 7.17373 6.25 7.5701 6.25 8V8.49085C6.18576 8.51589 6.12085 8.54335 6.05508 8.57345C3.22214 9.87024 1.25 12.7206 1.25 16.0333C1.25 18.1954 2.09122 20.163 3.46342 21.6279C3.87535 22.0676 4.30233 22.367 4.80609 22.5434C5.29364 22.714 5.80052 22.75 6.32891 22.75H12.6711C13.1995 22.75 13.7064 22.714 14.1939 22.5434C14.6977 22.367 15.1246 22.0676 15.5366 21.6279C16.9088 20.163 17.75 18.1954 17.75 16.0333C17.75 12.7206 15.7779 9.87024 12.9449 8.57345C12.8792 8.54335 12.8142 8.51589 12.75 8.49085V8C12.75 7.5701 12.7286 7.17373 12.6527 6.82851C12.575 6.4748 12.4303 6.12868 12.1508 5.84917C12.0243 5.72268 11.8842 5.6238 11.7359 5.54625C11.7502 5.37456 11.7501 5.16977 11.75 5V4.75H15.2582ZM10.0057 6.75L10 6.75H10H9.00001H9L8.99428 6.75C8.6 6.75021 8.33438 6.77192 8.15036 6.81234C7.97395 6.8511 7.92348 6.89618 7.90983 6.90983C7.89618 6.92348 7.8511 6.97395 7.81234 7.15036C7.77172 7.33527 7.75 7.60256 7.75 8V8.25H11.25V8C11.25 7.60256 11.2283 7.33527 11.1877 7.15036C11.1489 6.97395 11.1038 6.92348 11.0902 6.90983C11.0765 6.89618 11.0261 6.8511 10.8496 6.81234C10.6656 6.77192 10.4 6.75021 10.0057 6.75Z',
  d7: 'M15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5Z',
  d8: 'M6.05508 8.57345C6.62422 8.31293 7.12982 8.25 7.68245 8.25H11.3176C11.8702 8.25 12.3758 8.31293 12.9449 8.57345C15.7779 9.87024 17.75 12.7206 17.75 16.0333C17.75 18.1954 16.9088 20.163 15.5366 21.6279C15.1246 22.0676 14.6977 22.367 14.1939 22.5434C13.7064 22.714 13.1995 22.75 12.6711 22.75H6.32891C5.80052 22.75 5.29364 22.714 4.80609 22.5434C4.30233 22.367 3.87535 22.0676 3.46342 21.6279C2.09122 20.163 1.25 18.1954 1.25 16.0333C1.25 12.7206 3.22214 9.87024 6.05508 8.57345Z',
  d9: 'M7.75 8C7.75 7.60256 7.77172 7.33527 7.81234 7.15036C7.8511 6.97395 7.89618 6.92349 7.90983 6.90983C7.92349 6.89618 7.97395 6.8511 8.15036 6.81234C8.33527 6.77172 8.60256 6.75 9 6.75H10C10.3974 6.75 10.6647 6.77172 10.8496 6.81234C11.0261 6.8511 11.0765 6.89618 11.0902 6.90983C11.1038 6.92349 11.1489 6.97395 11.1877 7.15036C11.2283 7.33527 11.25 7.60256 11.25 8V8.25H11.3176C11.8063 8.25 12.2583 8.29923 12.75 8.49085V8C12.75 7.5701 12.7286 7.17373 12.6527 6.82851C12.575 6.4748 12.4303 6.12868 12.1508 5.84917C11.8713 5.56966 11.5252 5.42498 11.1715 5.34728C10.8263 5.27144 10.4299 5.25 10 5.25H9C8.5701 5.25 8.17373 5.27144 7.82851 5.34728C7.4748 5.42498 7.12868 5.56966 6.84917 5.84917C6.56966 6.12868 6.42498 6.4748 6.34728 6.82851C6.27144 7.17373 6.25 7.5701 6.25 8V8.49085C6.74169 8.29923 7.19367 8.25 7.68245 8.25H7.75V8Z',
  d10: 'M7.78647 2.83699C8.23318 2.37182 8.8651 2.25 9.50001 2.25C10.1349 2.25 10.7668 2.37182 11.2135 2.83699C11.6538 3.29546 11.75 3.91932 11.75 4.5V5C11.7501 5.20512 11.7502 5.46135 11.725 5.64857C11.6955 5.86789 11.6197 6.14808 11.3839 6.38388C11.1481 6.61968 10.8679 6.69552 10.6486 6.72501C10.4614 6.75018 10.2396 6.75009 10.0345 6.75001L10 6.75H9.00001L8.96556 6.75001C8.76045 6.75009 8.53865 6.75018 8.35144 6.72501C8.13211 6.69552 7.85193 6.61968 7.61613 6.38388C7.38033 6.14808 7.30449 5.86789 7.275 5.64857C7.24983 5.46135 7.24993 5.20512 7.25001 5V4.5C7.25001 3.91932 7.34622 3.29546 7.78647 2.83699Z',
  d11: 'M5.25 4C5.25 3.58579 5.58579 3.25 6 3.25H8C8.41421 3.25 8.75 3.58579 8.75 4C8.75 4.41421 8.41421 4.75 8 4.75H6C5.58579 4.75 5.25 4.41421 5.25 4ZM10.25 4C10.25 3.58579 10.5858 3.25 11 3.25H16C16.4142 3.25 16.75 3.58579 16.75 4C16.75 4.41421 16.4142 4.75 16 4.75H11C10.5858 4.75 10.25 4.41421 10.25 4Z',
  d12: 'M7.06055 8.98953V5.99365H12.0412V8.98953',
  d13: 'M11.045 5.99542V2.99951H8.05664V5.99542',
  d14: 'M19.0138 7.99052C20.6642 7.99052 22.0021 6.6496 22.0021 4.9955C22.0021 3.3414 20.6642 2.00049 19.0138 2.00049C17.3633 2.00049 16.0254 3.3414 16.0254 4.9955C16.0254 6.6496 17.3633 7.99052 19.0138 7.99052Z',
  d15: 'M5.06836 3.99658H8.05673M11.0451 3.99658H16.0257',
  d16: 'M10.3258 8.96109L6.89596 9.06153C4.83119 9.68234 2.52927 12.128 2.06715 15.1384C1.60504 18.1488 3.55753 21.0023 4.58444 21.9993H14.5269C15.3399 21.2864 17.3265 18.9208 16.9414 15.1384C16.6544 12.3196 14.8345 10.5226 13.295 9.58355C12.4122 9.04511 11.3588 8.93051 10.3258 8.96109Z',
  d17: 'M15.1132 22.4601C15.0725 22.4973 14.7631 22.75 14.7631 22.75H4.23691C4.23691 22.75 3.92748 22.4973 3.88679 22.4601C3.80544 22.3858 3.69405 22.2788 3.56276 22.139C3.30047 21.8599 2.95681 21.4479 2.61475 20.9029C1.92886 19.81 1.25 18.182 1.25 16.0333C1.25 12.7206 3.22214 9.87024 6.05508 8.57345C6.62422 8.31293 7.12982 8.25 7.68245 8.25H11.3176C11.8702 8.25 12.3758 8.31293 12.9449 8.57345C15.7779 9.87024 17.75 12.7206 17.75 16.0333C17.75 18.182 17.0711 19.81 16.3853 20.9029C16.0432 21.4479 15.6995 21.8599 15.4372 22.139C15.306 22.2788 15.1946 22.3858 15.1132 22.4601Z',
  d18: 'M11.75 2.25H7.25V5.25H7C6.58579 5.25 6.25 5.58579 6.25 6V8.99998H7.75V6.75H11.25V8.99998H12.75V6C12.75 5.58579 12.4142 5.25 12 5.25H11.75V2.25ZM10.25 5.25V3.75H8.75V5.25H10.25Z',
  d19: 'M8 4.75H5V3.25H8V4.75ZM16 4.75H11V3.25H16V4.75Z',
} as const;

export const IconPerfumeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-stroke-rounded IconPerfumeStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="19" 
        cy="5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconPerfumeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-duotone-rounded IconPerfumeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="19" 
        cy="5" 
        r="3" 
        fill="var(--icon-fill)"></circle>
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="19" 
        cy="5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconPerfumeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-twotone-rounded IconPerfumeTwotoneRounded"
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

export const IconPerfumeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-solid-rounded IconPerfumeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPerfumeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-bulk-rounded IconPerfumeBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPerfumeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-stroke-sharp IconPerfumeStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPerfumeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="perfume-solid-sharp IconPerfumeSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPerfume: TheIconSelfPack = {
  name: 'Perfume',
  StrokeRounded: IconPerfumeStrokeRounded,
  DuotoneRounded: IconPerfumeDuotoneRounded,
  TwotoneRounded: IconPerfumeTwotoneRounded,
  SolidRounded: IconPerfumeSolidRounded,
  BulkRounded: IconPerfumeBulkRounded,
  StrokeSharp: IconPerfumeStrokeSharp,
  SolidSharp: IconPerfumeSolidSharp,
};
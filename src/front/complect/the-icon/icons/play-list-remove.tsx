import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 7H21',
  d2: 'M16.5 2L13.5 7',
  d3: 'M9.5 2L6.5 7',
  d4: 'M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5',
  d5: 'M15 15L18.5 18.5M18.5 18.5L22 22M18.5 18.5L15 22M18.5 18.5L22 15',
  d6: 'M2.09793 7C2 8.18354 2 9.6509 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C15.9783 21 18.2175 21 19.6088 19.6088C21 18.2175 21 15.9783 21 11.5C21 9.6509 21 8.18354 20.9021 7H2.09793Z',
  d7: 'M11.1525 1.31827C11.2667 1.25339 11.4052 1.253 11.6823 1.25222L11.8881 1.25161C12.8696 1.24865 13.8524 1.24568 14.833 1.28283C15.2678 1.29931 15.4853 1.30755 15.5666 1.45848C15.648 1.60941 15.5338 1.79812 15.3055 2.17554L12.9793 6.02089C12.8368 6.25655 12.7655 6.37438 12.6512 6.43884C12.5368 6.50329 12.3991 6.50329 12.1237 6.50329H8.67267C8.35945 6.50329 8.20283 6.50329 8.14539 6.40183C8.08794 6.30037 8.16852 6.16608 8.32967 5.89749L10.825 1.73861C10.9672 1.50163 11.0383 1.38314 11.1525 1.31827Z',
  d8: 'M8.5907 1.37407C8.53003 1.27195 8.37165 1.27784 8.0549 1.28961C7.36371 1.31529 6.7436 1.3591 6.18802 1.43379C4.81137 1.61888 3.71911 2.00591 2.86091 2.86411C1.99797 3.72705 1.62446 4.88277 1.44949 6.06051C1.41938 6.26319 1.40433 6.36453 1.46417 6.43391C1.524 6.50329 1.62901 6.50329 1.83901 6.50329H5.09742C5.37539 6.50329 5.51438 6.50329 5.6294 6.43782C5.74441 6.37235 5.81537 6.25284 5.95728 6.01381L8.40681 1.8881C8.56985 1.61349 8.65137 1.47619 8.5907 1.37407Z',
  d9: 'M18.6711 1.89702C18.3653 1.77117 18.2124 1.70825 18.0375 1.7651C17.8627 1.82196 17.7656 1.97977 17.5714 2.29539L15.357 5.89365C15.191 6.16349 15.108 6.29841 15.1652 6.40085C15.2224 6.50329 15.3809 6.50329 15.6977 6.50329H21.161C21.371 6.50329 21.476 6.50329 21.5358 6.43391C21.5957 6.36453 21.5806 6.26319 21.5505 6.06051C21.3756 4.88277 21.002 3.72705 20.1391 2.86411C19.7103 2.43532 19.2231 2.12415 18.6711 1.89702Z',
  d10: 'M21.6183 8.61872C21.7352 8.73416 21.7374 8.917 21.7419 9.2827C21.75 9.94706 21.75 10.6667 21.75 11.4458V11.5604C21.75 11.7438 21.75 11.8355 21.7349 11.8956C21.6945 12.0559 21.6425 12.1246 21.4992 12.207C21.4454 12.2379 21.3199 12.2733 21.0688 12.3441C20.6709 12.4564 20.2954 12.6691 19.9822 12.9822L18.9571 14.0074C18.6238 14.3407 18.4571 14.5074 18.25 14.5074C18.0429 14.5074 17.8762 14.3407 17.5429 14.0074L16.5178 12.9822C15.5415 12.0059 13.9585 12.0059 12.9822 12.9822C12.0059 13.9585 12.0059 15.5415 12.9822 16.5178L14.0074 17.5429C14.3407 17.8762 14.5074 18.0429 14.5074 18.25C14.5074 18.4571 14.3407 18.6238 14.0074 18.9571L12.9822 19.9822C12.6691 20.2954 12.4564 20.6709 12.3441 21.0688C12.2725 21.3225 12.2367 21.4494 12.2053 21.5037C12.1231 21.6457 12.0552 21.6971 11.8961 21.7377C11.8353 21.7532 11.7426 21.7532 11.5572 21.7532H11.4428C9.2521 21.7532 7.53144 21.7532 6.18802 21.5726C4.81137 21.3875 3.71911 21.0005 2.86091 20.1423C2.00272 19.2841 1.61568 18.1918 1.43059 16.8152C1.24998 15.4718 1.24999 13.7511 1.25 11.5604V11.446C1.25 10.6669 1.24999 9.94711 1.25811 9.2827C1.26259 8.917 1.26482 8.73416 1.38167 8.61872C1.49853 8.50329 1.68305 8.50329 2.0521 8.50329H20.9479C21.3169 8.50329 21.5015 8.50329 21.6183 8.61872Z',
  d11: 'M22.4571 14.0429C22.8476 14.4334 22.8476 15.0666 22.4571 15.4571L19.6642 18.25L22.4571 21.0429C22.8476 21.4334 22.8476 22.0666 22.4571 22.4571C22.0666 22.8476 21.4334 22.8476 21.0429 22.4571L18.25 19.6642L15.4571 22.4571C15.0666 22.8476 14.4334 22.8476 14.0429 22.4571C13.6524 22.0666 13.6524 21.4334 14.0429 21.0429L16.8358 18.25L14.0429 15.4571C13.6524 15.0666 13.6524 14.4334 14.0429 14.0429C14.4334 13.6524 15.0666 13.6524 15.4571 14.0429L18.25 16.8358L21.0429 14.0429C21.4334 13.6524 22.0666 13.6524 22.4571 14.0429Z',
  d12: 'M2 6H20',
  d13: 'M16 2L13 6',
  d14: 'M9 2L6 6',
  d15: 'M20 12V2H2V20H12',
  d16: 'M16.6283 18.0429L13.8354 20.8358L15.2497 22.25L18.0426 19.4571L20.8354 22.25L22.2497 20.8358L19.4568 18.0429L22.2497 15.25L20.8354 13.8358L18.0426 16.6287L15.2497 13.8358L13.8354 15.25L16.6283 18.0429Z',
  d17: 'M8.2331 1.75H2.5C2.08579 1.75 1.75 2.08579 1.75 2.5V5.75H6.05309L8.2331 1.75Z',
  d18: 'M7.76139 5.75H13.0531L15.2331 1.75H9.94141L7.76139 5.75Z',
  d19: 'M16.9414 1.75L14.7614 5.75H21.25V2.5C21.25 2.08579 20.9142 1.75 20.5 1.75H16.9414Z',
  d20: 'M1.75 7.25H21.25V11.3019L18.0443 14.5075L15.2514 11.7146L11.7158 15.2501L14.5087 18.043L11.3022 21.25H2.5C2.08579 21.25 1.75 20.9142 1.75 20.5V7.25Z',
} as const;

export const IconPlayListRemoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-stroke-rounded IconPlayListRemoveStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListRemoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-duotone-rounded IconPlayListRemoveDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListRemoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-twotone-rounded IconPlayListRemoveTwotoneRounded"
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
        strokeLinecap="round" 
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

export const IconPlayListRemoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-solid-rounded IconPlayListRemoveSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListRemoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-bulk-rounded IconPlayListRemoveBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayListRemoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-stroke-sharp IconPlayListRemoveStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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

export const IconPlayListRemoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-list-remove-solid-sharp IconPlayListRemoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlayListRemove: TheIconSelfPack = {
  name: 'PlayListRemove',
  StrokeRounded: IconPlayListRemoveStrokeRounded,
  DuotoneRounded: IconPlayListRemoveDuotoneRounded,
  TwotoneRounded: IconPlayListRemoveTwotoneRounded,
  SolidRounded: IconPlayListRemoveSolidRounded,
  BulkRounded: IconPlayListRemoveBulkRounded,
  StrokeSharp: IconPlayListRemoveStrokeSharp,
  SolidSharp: IconPlayListRemoveSolidSharp,
};
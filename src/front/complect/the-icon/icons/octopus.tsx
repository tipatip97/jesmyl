import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.0925 13C17.2309 12.0981 18 10.8493 18 9.46931C18 6.71919 14.9455 2 12 2C9.05448 2 6 6.71919 6 9.46931C6 10.8493 6.76907 12.0981 7.90754 13',
  d2: 'M14.0117 10L14.0027 10',
  d3: 'M10.0117 10L10.0027 10',
  d4: 'M13.5 14C13.0164 18 13.8997 19.7143 17 22M10.5 14C10.9836 18 10.1002 19.7143 7 22',
  d5: 'M13.5 14C14.5 16 17.0791 18.5 19.0475 18.5C21.0158 18.5 22 17.2688 22 15.75C22 14.2312 20.8984 13 19.5396 13M10.5 14C9.5 16 6.92082 18.5 4.95249 18.5C2.98416 18.5 2 17.2688 2 15.75C2 14.2312 3.10156 13 4.46041 13',
  d6: 'M12 2C9.05448 2 6 6.71919 6 9.46931C6 10.8493 6.76907 12.0981 7.90754 13C9.33333 12.3333 12.9664 11.4 16.0925 13C17.2309 12.0981 18 10.8493 18 9.46931C18 6.71919 14.9455 2 12 2Z',
  d7: 'M12 1.125C11.0632 1.125 10.1728 1.4984 9.39272 2.03886C8.60961 2.58144 7.89538 3.32074 7.29338 4.13111C6.10791 5.72691 5.25 7.74918 5.25 9.34431C5.25 10.7456 5.90536 11.9921 6.85734 12.9433C7.0234 13.1092 7.20824 13.2409 7.4034 13.3425C7.57014 13.4293 7.6535 13.4727 7.76699 13.4416C7.88048 13.4105 7.93515 13.3224 8.04449 13.1463C8.12848 13.011 8.20202 12.8804 8.26374 12.757C8.75726 11.77 9.83955 11.2233 10.9269 11.4118C11.1715 11.4542 11.4034 11.5316 11.6173 11.6385C11.8251 11.7423 11.929 11.7942 11.9998 11.7942C12.0706 11.7942 12.1745 11.7423 12.3823 11.6385L12.3823 11.6385L12.3823 11.6385C12.5963 11.5316 12.8281 11.4542 13.0728 11.4118C14.1601 11.2233 15.2424 11.77 15.7359 12.757C15.7976 12.8805 15.8712 13.0111 15.9552 13.1465C16.0646 13.3226 16.1192 13.4106 16.2327 13.4417C16.3462 13.4728 16.4295 13.4294 16.5963 13.3427C16.7915 13.241 16.9765 13.1093 17.1427 12.9433C18.0946 11.9921 18.75 10.7456 18.75 9.34431C18.75 7.74918 17.8921 5.72691 16.7066 4.13111C16.1046 3.32074 15.3904 2.58144 14.6073 2.03886C13.8272 1.4984 12.9368 1.125 12 1.125ZM15.0117 8.875C15.0117 9.42729 14.564 9.875 14.0117 9.875H14.0027C13.4505 9.875 13.0027 9.42728 13.0027 8.875C13.0027 8.32271 13.4505 7.875 14.0027 7.875H14.0117C14.564 7.875 15.0117 8.32272 15.0117 8.875ZM10.0117 9.875C10.564 9.875 11.0117 9.42729 11.0117 8.875C11.0117 8.32272 10.564 7.875 10.0117 7.875H10.0027C9.45045 7.875 9.00274 8.32271 9.00274 8.875C9.00274 9.42728 9.45045 9.875 10.0027 9.875H10.0117Z',
  d8: 'M1 15.625C1 13.6615 2.44754 11.875 4.46041 11.875C5.01269 11.875 5.46041 12.3227 5.46041 12.875C5.46041 13.4273 5.01269 13.875 4.46041 13.875C3.75558 13.875 3 14.551 3 15.625C3 16.1691 3.17345 16.5876 3.4492 16.8664C3.71943 17.1397 4.18291 17.375 4.95249 17.375C5.56823 17.375 6.47224 16.9481 7.43674 16.1173C8.36697 15.3161 9.17294 14.293 9.60557 13.4278C9.80298 13.033 10.2359 12.8143 10.6708 12.8897C11.1057 12.9651 11.4398 13.3167 11.4928 13.755C11.7437 15.8303 11.6627 17.4726 11.0055 18.9292C10.351 20.3795 9.18782 21.5044 7.59342 22.6799C7.14889 23.0076 6.52285 22.913 6.19511 22.4684C5.86737 22.0239 5.96205 21.3978 6.40658 21.0701C7.91241 19.9599 8.74106 19.0847 9.18245 18.1066C9.34824 17.7391 9.46834 17.337 9.54105 16.875C9.28516 17.1411 9.01726 17.3956 8.742 17.6327C7.67483 18.5519 6.30507 19.375 4.95249 19.375C3.75374 19.375 2.74098 18.9947 2.02705 18.2727C1.31863 17.5562 1 16.5996 1 15.625ZM18.5396 12.875C18.5396 12.3227 18.9873 11.875 19.5396 11.875C21.5524 11.875 23 13.6615 23 15.625C23 16.5996 22.6814 17.5562 21.9729 18.2727C21.259 18.9947 20.2462 19.375 19.0475 19.375C17.6949 19.375 16.3251 18.5519 15.258 17.6327C14.9827 17.3956 14.7148 17.1411 14.4589 16.875C14.5317 17.3371 14.6518 17.7392 14.8175 18.1066C15.2589 19.0847 16.0876 19.9599 17.5934 21.0701C18.038 21.3978 18.1326 22.0239 17.8049 22.4684C17.4772 22.9129 16.8511 23.0076 16.4066 22.6799C14.8122 21.5044 13.649 20.3795 12.9945 18.9292C12.3373 17.4726 12.2563 15.8303 12.5072 13.755C12.5602 13.3167 12.8943 12.9651 13.3292 12.8897C13.7641 12.8143 14.197 13.033 14.3944 13.4278C14.8271 14.293 15.633 15.3161 16.5632 16.1173C17.5277 16.9481 18.4317 17.375 19.0475 17.375C19.8171 17.375 20.2806 17.1397 20.5508 16.8664C20.8265 16.5876 21 16.1691 21 15.625C21 14.551 20.2444 13.875 19.5396 13.875C18.9873 13.875 18.5396 13.4273 18.5396 12.875Z',
  d9: 'M17 22C13.8997 19.7143 13.0164 18 13.5 14C14.5 16 17.0791 18.5 19.0475 18.5C21.0158 18.5 22 17.2688 22 15.75C22 14.2312 20.8984 13 19.5396 13M7 22C10.1002 19.7143 10.9836 18 10.5 14C9.5 16 6.92082 18.5 4.95249 18.5C2.98416 18.5 2 17.2688 2 15.75C2 14.2312 3.10156 13 4.46041 13',
  d10: 'M12 1.5C11.0632 1.5 10.1728 1.8734 9.39272 2.41386C8.60961 2.95644 7.89538 3.69574 7.29338 4.50611C6.10791 6.10191 5.25 8.12418 5.25 9.71931C5.25 11.3909 6.17931 12.8377 7.44183 13.8379C7.96136 14.25 8.46786 14.6026 8.97214 14.8869C8.57488 15.3941 8.10476 15.8934 7.59989 16.3282C6.62256 17.1701 5.66034 17.6465 4.95249 17.6465C4.12926 17.6465 3.59712 17.3931 3.27143 17.0637C2.9416 16.7301 2.75 16.2444 2.75 15.6465C2.75 14.4613 3.59208 13.6465 4.46041 13.6465V12.1465C2.61105 12.1465 1.25 13.7941 1.25 15.6465C1.25 16.5673 1.55048 17.4566 2.20482 18.1184C2.86329 18.7843 3.80739 19.1465 4.95249 19.1465C6.21297 19.1465 7.5245 18.3729 8.57884 17.4647C9.03589 17.0711 9.4717 16.6288 9.86412 16.1662C9.82571 16.9837 9.6746 17.6452 9.41033 18.2309C8.9423 19.2681 8.07184 20.1744 6.55493 21.2928L7.44507 22.5002C9.0284 21.3328 10.1498 20.2392 10.7776 18.8478C11.2011 17.9091 11.3787 16.8833 11.3739 15.6866C11.5185 15.6998 11.6642 15.7068 11.8113 15.7073C12.0829 15.7083 12.3541 15.6872 12.6263 15.6451C12.6173 16.8596 12.794 17.8983 13.2224 18.8478C13.8502 20.2392 14.9716 21.3328 16.5549 22.5002L17.4451 21.2928C15.9281 20.1744 15.0577 19.2681 14.5897 18.2309C14.3254 17.6452 14.1743 16.9837 14.1359 16.1662C14.5283 16.6288 14.9641 17.0711 15.4211 17.4647C16.4755 18.3729 17.787 19.1465 19.0475 19.1465C20.1926 19.1465 21.1367 18.7843 21.7952 18.1184C22.4495 17.4566 22.75 16.5673 22.75 15.6465C22.75 13.7941 21.3889 12.1465 19.5396 12.1465V13.6465C20.4079 13.6465 21.25 14.4613 21.25 15.6465C21.25 16.2444 21.0584 16.7301 20.7286 17.0637C20.4029 17.3931 19.8707 17.6465 19.0475 17.6465C18.3396 17.6465 17.3774 17.1701 16.4001 16.3282C15.8715 15.8729 15.381 15.347 14.9723 14.8153C15.4702 14.5523 15.9827 14.235 16.5169 13.8683L16.5582 13.8379C17.8207 12.8377 18.75 11.3909 18.75 9.71931C18.75 8.12418 17.8921 6.10191 16.7066 4.50611C16.1046 3.69574 15.3904 2.95644 14.6073 2.41386C13.8272 1.8734 12.9368 1.5 12 1.5ZM15.0117 10.25C15.0117 10.8023 14.564 11.25 14.0117 11.25H14.0027C13.4505 11.25 13.0027 10.8023 13.0027 10.25C13.0027 9.69771 13.4505 9.25 14.0027 9.25H14.0117C14.564 9.25 15.0117 9.69771 15.0117 10.25ZM10.0117 11.25C10.564 11.25 11.0117 10.8023 11.0117 10.25C11.0117 9.69771 10.564 9.25 10.0117 9.25H10.0027C9.45045 9.25 9.00274 9.69771 9.00274 10.25C9.00274 10.8023 9.45045 11.25 10.0027 11.25H10.0117Z',
} as const;

export const IconOctopusStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-stroke-rounded IconOctopusStrokeRounded"
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

export const IconOctopusDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-duotone-rounded IconOctopusDuotoneRounded"
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

export const IconOctopusTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-twotone-rounded IconOctopusTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconOctopusSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-solid-rounded IconOctopusSolidRounded"
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

export const IconOctopusBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-bulk-rounded IconOctopusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconOctopusStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-stroke-sharp IconOctopusStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconOctopusSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="octopus-solid-sharp IconOctopusSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOctopus: TheIconSelfPack = {
  name: 'Octopus',
  StrokeRounded: IconOctopusStrokeRounded,
  DuotoneRounded: IconOctopusDuotoneRounded,
  TwotoneRounded: IconOctopusTwotoneRounded,
  SolidRounded: IconOctopusSolidRounded,
  BulkRounded: IconOctopusBulkRounded,
  StrokeSharp: IconOctopusStrokeSharp,
  SolidSharp: IconOctopusSolidSharp,
};
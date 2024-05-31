import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.28266 19.233C6.11911 19.7294 5.81343 20.1328 5.43088 20.4088M5.43088 20.4088C4.87511 20.8099 4.15708 20.9424 3.47686 20.7015C2.32843 20.2948 1.72265 18.978 2.12382 17.7603C2.43197 16.8249 3.24462 16.2201 4.12541 16.1742C4.57355 16.1509 5.04512 15.9411 5.18553 15.5149L6.67292 11L8 13L10 12L8.49202 16.7315C8.36086 17.1431 8.59532 17.575 8.92471 17.8544C9.62114 18.4451 9.92359 19.4585 9.60974 20.4111C9.20857 21.6289 7.95237 22.2863 6.80394 21.8797C6.12372 21.6388 5.63387 21.0786 5.43088 20.4088Z',
  d2: 'M18.5436 5.32421C18.9979 5.07331 19.5019 4.98221 19.9822 5.03295M19.9822 5.03295C20.68 5.10666 21.3277 5.47972 21.7003 6.09705C22.3294 7.13929 21.936 8.48309 20.8216 9.0985C19.9517 9.57893 18.8996 9.47344 18.1806 8.90821C17.8388 8.63947 17.3635 8.49844 16.9863 8.7147L13 11V9L11 7.98057L15.1147 5.70815C15.512 5.48872 15.628 4.97807 15.5636 4.52878C15.4401 3.66842 15.8707 2.77446 16.7211 2.30477C17.8355 1.68936 19.2488 2.03537 19.8778 3.07761C20.2504 3.69494 20.2643 4.41805 19.9822 5.03295Z',
  d3: 'M7 8L5 8M9 6L9 4',
  d4: 'M13 16L13 18M15 14L17 14',
  d5: 'M3.47686 20.7015C4.15708 20.9424 4.87511 20.8099 5.43088 20.4088C5.63387 21.0786 6.12372 21.6388 6.80394 21.8797C7.95237 22.2863 9.20857 21.6289 9.60974 20.4111C9.92359 19.4585 9.62114 18.4451 8.92471 17.8544C8.59532 17.575 8.36086 17.1431 8.49202 16.7315L10 12L8 13L6.67292 11L5.18553 15.5149C5.04512 15.9411 4.57355 16.1509 4.12541 16.1742C3.24462 16.2201 2.43197 16.8249 2.12382 17.7603C1.72265 18.978 2.32843 20.2948 3.47686 20.7015Z',
  d6: 'M21.7003 6.09705C21.3277 5.47972 20.68 5.10666 19.9822 5.03295C20.2643 4.41805 20.2504 3.69494 19.8778 3.07761C19.2488 2.03537 17.8355 1.68936 16.7211 2.30477C15.8707 2.77446 15.4401 3.66842 15.5636 4.52878C15.628 4.97807 15.512 5.48872 15.1147 5.70815L11 7.98057L13 9V11L16.9863 8.7147C17.3635 8.49844 17.8388 8.63947 18.1806 8.90821C18.8996 9.47344 19.9517 9.57893 20.8216 9.0985C21.936 8.48309 22.3294 7.13929 21.7003 6.09705Z',
  d7: 'M6.57204 10.2567C6.85669 10.2184 7.13822 10.346 7.29702 10.5853L8.25723 12.0325L9.66375 11.3292C9.93346 11.1943 10.2577 11.2341 10.4868 11.4302C10.7159 11.6263 10.8053 11.9405 10.7137 12.2278L9.20576 16.9593C9.2048 16.9623 9.20354 16.9672 9.20447 16.9782C9.20552 16.9907 9.20981 17.0136 9.22405 17.0468C9.25436 17.1174 9.31742 17.2048 9.40901 17.2825C10.3426 18.0744 10.7289 19.4085 10.3212 20.6458C9.80025 22.2273 8.13245 23.1461 6.55275 22.5867C5.92383 22.364 5.42255 21.9434 5.0825 21.422C4.49992 21.618 3.85245 21.6304 3.22567 21.4085C1.66039 20.8542 0.892941 19.097 1.41064 17.5256C1.81211 16.3069 2.88466 15.4878 4.08557 15.4252C4.21447 15.4185 4.32681 15.3848 4.39993 15.3433C4.43428 15.3238 4.45295 15.3067 4.46185 15.2967C4.46957 15.288 4.47135 15.2833 4.47235 15.2803L5.95974 10.7653C6.04961 10.4925 6.28738 10.295 6.57204 10.2567Z',
  d8: 'M16.3566 1.64746C17.7973 0.851793 19.6655 1.27677 20.518 2.68927C20.8605 3.25673 20.9792 3.88999 20.9038 4.49605C21.483 4.72893 21.9959 5.13781 22.3404 5.70871C23.2065 7.14358 22.6395 8.94948 21.1823 9.75425C20.0495 10.3798 18.6719 10.2492 17.7151 9.49703C17.6213 9.42328 17.523 9.37931 17.4474 9.36418C17.4119 9.35707 17.3885 9.35764 17.3759 9.35922C17.3649 9.36062 17.3603 9.36289 17.3574 9.36457L13.3711 11.6499C13.139 11.7829 12.8535 11.7823 12.6221 11.6482C12.3906 11.514 12.248 11.2668 12.248 10.9992V9.45874L10.6575 8.64798C10.4102 8.52196 10.2528 8.2697 10.2482 7.99223C10.2435 7.71475 10.3925 7.45741 10.6355 7.32325L14.7502 5.05083C14.753 5.04929 14.7572 5.04671 14.7644 5.03737C14.7727 5.02656 14.7862 5.00451 14.799 4.96612C14.8264 4.8844 14.8379 4.76487 14.8192 4.63452C14.6499 3.45455 15.2431 2.26239 16.3566 1.64746Z',
  d9: 'M3.99805 8C3.99805 8.55228 4.44576 9 4.99805 9L6.99805 9C7.55033 9 7.99805 8.55228 7.99805 8C7.99805 7.44772 7.55033 7 6.99805 7L4.99805 7C4.44576 7 3.99805 7.44772 3.99805 8ZM8.99805 3C8.44576 3 7.99805 3.44772 7.99805 4L7.99805 6C7.99805 6.55228 8.44576 7 8.99805 7C9.55033 7 9.99805 6.55228 9.99805 6L9.99805 4C9.99805 3.44772 9.55033 3 8.99805 3Z',
  d10: 'M12.998 19C12.4458 19 11.998 18.5523 11.998 18L11.998 16C11.998 15.4477 12.4458 15 12.998 15C13.5503 15 13.998 15.4477 13.998 16L13.998 18C13.998 18.5523 13.5503 19 12.998 19ZM17.998 14C17.998 14.5523 17.5503 15 16.998 15L14.998 15C14.4458 15 13.998 14.5523 13.998 14C13.998 13.4477 14.4458 13 14.998 13L16.998 13C17.5503 13 17.998 13.4477 17.998 14Z',
  d11: 'M7 9.00942H5M9 7.00617V5.00293',
  d12: 'M13 17.0228V19.026M15 15.0195H17',
  d13: 'M18.5421 6.33782C19.0019 6.07421 19.4775 5.93968 20.0716 6.05536M20.0716 6.05536C20.3915 6.11764 20.8559 6.27245 21.1221 6.47358L21.1263 6.4767C21.2266 6.55234 21.7823 6.9714 21.9311 7.66703C22.1944 8.57626 21.667 9.73094 20.699 10.1712C19.6432 10.6514 18.6812 10.426 17.7338 9.54731L13.0206 12.0089C13.014 12.0123 13.006 12.0075 13.006 12V10.0088L11.0231 9.01304C11.0159 9.00945 11.0157 8.99932 11.0226 8.99537L15.7002 6.33782C15.4182 5.11026 15.3812 3.53782 17.5524 3.01394C18.1805 2.8624 20.668 3.20955 20.0716 6.05536Z',
  d14: 'M6.28078 20.2615C6.11297 20.7649 5.85342 21.196 5.33328 21.506M5.33328 21.506C5.05325 21.6728 4.7381 21.82 4.4058 21.8475C3.86842 21.892 3.40038 21.804 2.81839 21.3782C2.19148 20.816 1.69723 19.6887 2.20304 18.5414C2.67142 17.479 3.5738 17.1752 4.9241 17.1001L6.65819 12.0351C6.66087 12.0273 6.67134 12.0259 6.67595 12.0328L7.99845 14.0067L9.97674 13.0159C9.98469 13.0119 9.99349 13.0195 9.99071 13.0279L8.25483 18.3223C9.53745 19.2472 10.242 20.3765 9.2974 22.0808C9.12287 22.3957 8.36233 22.9702 7.47266 22.9832C6.76388 22.9935 5.97497 22.6237 5.33328 21.506Z',
  d15: 'M3.47686 20.7015C4.15708 20.9424 4.87511 20.8099 5.43088 20.4088C5.63387 21.0786 6.12372 21.6388 6.80394 21.8797C7.95237 22.2863 9.20857 21.6289 9.60974 20.4111C9.92359 19.4585 9.62114 18.4451 8.92471 17.8544L8.24843 17.3063L10 12L8 13L6.67292 11L4.93993 16.0871L4.12541 16.1742C3.24462 16.2201 2.43197 16.8249 2.12382 17.7603C1.72265 18.978 2.32843 20.2948 3.47686 20.7015Z',
  d16: 'M21.7003 6.09705C21.3277 5.47972 20.68 5.10666 19.9822 5.03295C20.2643 4.41805 20.2504 3.69494 19.8778 3.07761C19.2488 2.03537 17.8355 1.68936 16.7211 2.30477C15.8707 2.77446 15.4401 3.66842 15.5636 4.52878L15.6979 5.32421L11 7.98057L13 9V11L17.7379 8.52953L18.1806 8.90821C18.8996 9.47344 19.9517 9.57893 20.8216 9.0985C21.936 8.48309 22.3294 7.13929 21.7003 6.09705Z',
  d17: 'M10 3V6H8V3H10ZM4 7L7 7V9L4 9V7Z',
  d18: 'M18 15H15L15 13L18 13V15ZM12 19L12 16H14V19H12Z',
} as const;

export const IconBrokenBoneStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-stroke-rounded IconBrokenBoneStrokeRounded"
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

export const IconBrokenBoneDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-duotone-rounded IconBrokenBoneDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconBrokenBoneTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-twotone-rounded IconBrokenBoneTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBrokenBoneSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-solid-rounded IconBrokenBoneSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBrokenBoneBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-bulk-rounded IconBrokenBoneBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBrokenBoneStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-stroke-sharp IconBrokenBoneStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconBrokenBoneSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="broken-bone-solid-sharp IconBrokenBoneSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBrokenBone: TheIconSelfPack = {
  name: 'BrokenBone',
  StrokeRounded: IconBrokenBoneStrokeRounded,
  DuotoneRounded: IconBrokenBoneDuotoneRounded,
  TwotoneRounded: IconBrokenBoneTwotoneRounded,
  SolidRounded: IconBrokenBoneSolidRounded,
  BulkRounded: IconBrokenBoneBulkRounded,
  StrokeSharp: IconBrokenBoneStrokeSharp,
  SolidSharp: IconBrokenBoneSolidSharp,
};
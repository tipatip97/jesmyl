import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5483 17C20.7476 15.9645 21.5819 14.6272 22 13.1756C19.5473 13.4746 17.0369 12.3432 15.7234 10.1113C14.4099 7.87928 14.6664 5.1807 16.1567 3.2463C14.1701 2.75234 11.9929 2.98823 10.0779 4.07295C7.30713 5.64236 5.83056 8.56635 6.0155 11.5',
  d2: 'M2 15C5.5 18.5 11.5755 17 12.7324 15C12.9026 14.7058 13 14.3643 13 14C13 12.8954 12.1046 12 11 12C9.89543 12 9 12.8954 9 14',
  d3: 'M14.0001 20.9146C14.1565 20.9699 14.3248 21 14.5001 21C15.3285 21 16.0001 20.3284 16.0001 19.5C16.0001 18.6716 15.3285 18 14.5001 18C14.206 18 13.9317 18.0846 13.7002 18.2309C12.5505 19.0225 10.4209 20.0378 8 20.301M5 20.1936C4.33025 20.0635 3.6594 19.8541 3 19.5478',
  d4: 'M19 20.0003C19.2581 20.0003 19.9557 19.8804 21 19.4551',
  d5: 'M16.1892 3.2463C14.6941 5.1807 14.4368 7.87928 15.7546 10.1113C17.0631 12.3278 19.5558 13.4589 22 13.1816C21.0321 16.5396 17.8856 19 14.1534 19C9.65042 19 6 15.4183 6 11C6 6.58172 9.65042 3 14.1534 3C14.8152 3 15.5731 3.10029 16.1892 3.2463Z',
  d6: 'M11 12.75C10.3096 12.75 9.75 13.3096 9.75 14C9.75 14.4142 9.41421 14.75 9 14.75C8.58579 14.75 8.25 14.4142 8.25 14C8.25 12.4812 9.48122 11.25 11 11.25C12.5188 11.25 13.75 12.4812 13.75 14C13.75 14.4996 13.6161 14.9703 13.3816 15.3755C12.983 16.0647 12.2295 16.6177 11.3767 17.0156C10.5046 17.4225 9.44171 17.7087 8.31153 17.8095C6.05923 18.0105 3.42044 17.4811 1.46967 15.5303C1.17678 15.2374 1.17678 14.7626 1.46967 14.4697C1.76256 14.1768 2.23744 14.1768 2.53033 14.4697C4.07956 16.0189 6.22852 16.4895 8.1782 16.3155C9.14901 16.2288 10.0407 15.9837 10.7425 15.6563C11.4636 15.3198 11.9034 14.9353 12.0832 14.6245C12.1891 14.4414 12.25 14.2289 12.25 14C12.25 13.3096 11.6904 12.75 11 12.75ZM14.1109 18.8586C14.2239 18.7898 14.3563 18.75 14.5001 18.75C14.9143 18.75 15.2501 19.0858 15.2501 19.5C15.2501 19.9142 14.9143 20.25 14.5001 20.25C14.4111 20.25 14.3273 20.2348 14.25 20.2075C13.8595 20.0695 13.431 20.2742 13.293 20.6647C13.1549 21.0552 13.3596 21.4837 13.7502 21.6218C13.9857 21.705 14.2385 21.75 14.5001 21.75C15.7427 21.75 16.7501 20.7426 16.7501 19.5C16.7501 18.2574 15.7427 17.25 14.5001 17.25C14.0601 17.25 13.6475 17.377 13.2997 17.5967L13.2871 17.6047L13.2749 17.6131C12.2102 18.3462 10.1968 19.3078 7.91893 19.5554C7.50714 19.6002 7.20962 19.9703 7.25439 20.3821C7.29917 20.7939 7.66928 21.0914 8.08107 21.0466C10.6349 20.769 12.8732 19.7071 14.1109 18.8586ZM21.6946 19.1722C21.8508 19.5558 21.6665 19.9934 21.2829 20.1497C20.2 20.5908 19.3982 20.7503 19 20.7503C18.5858 20.7503 18.25 20.4145 18.25 20.0003C18.25 19.5861 18.5858 19.2503 19 19.2503C19.1179 19.2503 19.7114 19.1701 20.7171 18.7605C21.1007 18.6042 21.5383 18.7886 21.6946 19.1722ZM2.31981 19.2318C2.49432 18.8562 2.94033 18.6931 3.31598 18.8676C3.91703 19.1469 4.52945 19.3382 5.14307 19.4574C5.54967 19.5364 5.81524 19.9301 5.73623 20.3367C5.65722 20.7433 5.26354 21.0089 4.85693 20.9299C4.13105 20.7888 3.40177 20.5614 2.68402 20.228C2.30836 20.0535 2.1453 19.6075 2.31981 19.2318Z',
  d7: 'M14.1218 2.25C9.23276 2.25 5.25 6.15687 5.25 11C5.25 12.2603 5.5197 13.4572 6.00487 14.5383C6.02211 14.5767 6.03073 14.5959 6.04362 14.6157C6.07798 14.6683 6.13776 14.7148 6.19717 14.7353C6.21945 14.743 6.23925 14.7465 6.27886 14.7534C6.41072 14.7767 6.47664 14.7883 6.52108 14.7829C6.6629 14.7656 6.75018 14.6849 6.77866 14.5449C6.78758 14.501 6.77851 14.4065 6.76038 14.2175C6.75351 14.146 6.75 14.0734 6.75 14C6.75 11.6528 8.65279 9.75 11 9.75C13.3472 9.75 15.25 11.6528 15.25 14C15.25 14.3334 15.2112 14.6591 15.1378 14.9721C15.0477 15.3561 15.0027 15.5482 15.0594 15.6497C15.1161 15.7512 15.3066 15.8148 15.6877 15.942C16.5391 16.226 17.2546 16.8071 17.7113 17.5622C17.8468 17.7864 17.9146 17.8985 18.0082 17.9358C18.1017 17.973 18.2124 17.9426 18.4338 17.8817C18.9765 17.7323 19.8068 17.4958 20.19 17.358C20.2373 17.341 20.261 17.3325 20.2878 17.3159C20.3146 17.2993 20.3342 17.2805 20.3735 17.2429C21.4702 16.1926 22.2939 14.8688 22.7208 13.3827C22.79 13.1422 22.7345 12.883 22.573 12.6917C22.4115 12.5005 22.1653 12.4024 21.9165 12.4303C19.7533 12.6725 17.5101 11.6685 16.3698 9.73087C15.2186 7.77472 15.4397 5.40996 16.7469 3.70907C16.9007 3.50896 16.9436 3.24491 16.8609 3.00645C16.7783 2.76798 16.5812 2.58707 16.3366 2.52504C15.6278 2.34535 14.8855 2.25 14.1218 2.25Z',
  d8: 'M11.2071 13C10.6548 13 10.2071 13.4477 10.2071 14H8.20711C8.20711 12.3431 9.55025 11 11.2071 11C12.864 11 14.2071 12.3431 14.2071 14C14.2071 14.5448 14.061 15.0584 13.8051 15.5007C13.37 16.2529 12.5642 16.834 11.6895 17.2421C10.7891 17.6623 9.6976 17.9553 8.54086 18.0585C6.23812 18.264 3.51769 17.7248 1.5 15.7071L2.91421 14.2929C4.39652 15.7752 6.46385 16.236 8.36308 16.0665C9.30734 15.9822 10.1704 15.7439 10.8439 15.4297C11.5431 15.1035 11.9306 14.7471 12.0739 14.4993C12.1584 14.3532 12.2071 14.1838 12.2071 14C12.2071 13.4477 11.7594 13 11.2071 13Z',
  d9: 'M14.4526 19.069C14.5264 19.0252 14.6122 19 14.7066 19C14.9827 19 15.2066 19.2239 15.2066 19.5C15.2066 19.7761 14.9827 20 14.7066 20C14.6463 20 14.5907 19.9898 14.5398 19.9718L13.8733 21.8575C14.1353 21.9501 14.4162 22 14.7066 22C16.0873 22 17.2066 20.8807 17.2066 19.5C17.2066 18.1193 16.0873 17 14.7066 17C14.218 17 13.7593 17.1412 13.3727 17.3854C13.3615 17.3924 13.3504 17.3997 13.3395 17.4072C12.3032 18.1208 10.3286 19.0644 8.09837 19.3069L8.31456 21.2952C10.9117 21.0128 13.1854 19.9362 14.4526 19.069Z',
  d10: 'M3.62778 18.6409C4.20937 18.9111 4.80232 19.0964 5.39722 19.212L5.01571 21.1753C4.27112 21.0306 3.52236 20.7972 2.78516 20.4547L3.62778 18.6409Z',
  d11: 'M19.2072 21.0007C19.6521 21.0007 20.4886 20.8279 21.5844 20.3815L20.83 18.5293C20.3486 18.7254 19.9592 18.8461 19.6729 18.9166C19.5297 18.9519 19.4158 18.9739 19.3319 18.9866C19.252 18.9987 19.2128 19.0004 19.2076 19.0006L19.2072 21.0007Z',
  d12: 'M16.2234 9.11126C14.9099 6.87928 15.1664 4.1807 16.6567 2.2463C14.6701 1.75234 12.4929 1.98823 10.5779 3.07295C7.80713 4.64236 6.33056 7.56635 6.5155 10.5C6.5595 11.198 6.70985 11.8825 6.95044 12.5372C7.55758 10.77 9.23414 9.5 11.2073 9.5C13.6926 9.5 15.7073 11.5147 15.7073 14C15.7073 14.5477 15.6085 15.0757 15.4271 15.5647C16.5276 15.7648 17.4711 16.4152 18.0598 17.3181C18.7352 16.9932 19.4021 16.558 20.0483 16C21.2476 14.9645 22.0819 13.6272 22.5 12.1756C20.0473 12.4746 17.5369 11.3432 16.2234 9.11126Z',
} as const;

export const IconMoonFastWindStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-stroke-rounded IconMoonFastWindStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoonFastWindDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-duotone-rounded IconMoonFastWindDuotoneRounded"
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
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconMoonFastWindTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-twotone-rounded IconMoonFastWindTwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMoonFastWindSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-solid-rounded IconMoonFastWindSolidRounded"
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

export const IconMoonFastWindBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-bulk-rounded IconMoonFastWindBulkRounded"
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

export const IconMoonFastWindStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-stroke-sharp IconMoonFastWindStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconMoonFastWindSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-fast-wind-solid-sharp IconMoonFastWindSolidSharp"
    >
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoonFastWind: TheIconSelfPack = {
  name: 'MoonFastWind',
  StrokeRounded: IconMoonFastWindStrokeRounded,
  DuotoneRounded: IconMoonFastWindDuotoneRounded,
  TwotoneRounded: IconMoonFastWindTwotoneRounded,
  SolidRounded: IconMoonFastWindSolidRounded,
  BulkRounded: IconMoonFastWindBulkRounded,
  StrokeSharp: IconMoonFastWindStrokeSharp,
  SolidSharp: IconMoonFastWindSolidSharp,
};
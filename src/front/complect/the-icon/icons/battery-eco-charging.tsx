import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 18.9997H13C15.8284 18.9997 17.2426 18.9997 18.1213 18.1211C19 17.2424 19 15.8282 19 12.9997C19 11.1364 19 9.88678 18.7488 8.99976M5.5 7.03809C4.24209 7.10866 3.44798 7.30911 2.87868 7.87841C2 8.75709 2 10.1713 2 12.9997C2 15.2435 2 16.5973 2.43866 17.4998',
  d2: 'M19 10.5L20.0272 10.6712C20.7085 10.7847 21.0491 10.8415 21.3076 11.0067C21.5618 11.1691 21.7612 11.4044 21.8796 11.6819C22 11.964 22 12.3093 22 13C22 13.6907 22 14.036 21.8796 14.3181C21.7612 14.5956 21.5618 14.8309 21.3076 14.9933C21.0491 15.1585 20.7085 15.2153 20.0272 15.3288L19 15.5',
  d3: 'M5.03319 20C4.54502 14.6 9.00032 13.5 11.0002 11M11.0339 15.8353C13.5787 15.1243 15.2108 13.4224 15.8162 10.8483C16.502 7.93305 15.2725 3.96327 12.1026 4.00026C12.1026 4.00026 12.4253 5.25961 12.143 5.8764C11.1022 8.15057 7.50025 7.99259 6.3325 10.8769C5.63711 12.4908 6.05765 14.2938 7.36616 15.3279C8.18838 15.9778 9.81192 16.1767 11.0339 15.8353Z',
  d4: 'M11.0337 15.8353C13.5784 15.1243 15.2105 13.4224 15.816 10.8483C16.0995 9.64317 16.0557 8.25779 15.6827 7.04977C16.8357 7.1296 17.5801 7.33745 18.1213 7.87868C19 8.75736 19 10.1716 19 13C19 15.8284 19 17.2426 18.1213 18.1213C17.2426 19 15.8284 19 13 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13C2 10.1716 2 8.75736 2.87868 7.87868C3.75736 7 5.17157 7 8 7H11.2421C10.7475 7.40093 10.1442 7.70894 9.52456 8.02528C8.27343 8.66403 6.9558 9.33674 6.33225 10.8769C5.63685 12.4908 6.0574 14.2938 7.36591 15.3279C8.18813 15.9778 9.81167 16.1767 11.0337 15.8353Z',
  d5: 'M8 19.0007H13C15.8284 19.0007 17.2426 19.0007 18.1213 18.122C19 17.2434 19 15.8291 19 13.0007C19 11.1373 19 9.88776 18.7488 9.00073M5.5 7.03906C4.24209 7.10964 3.44798 7.31009 2.87868 7.87939C2 8.75807 2 10.1723 2 13.0007C2 15.2445 2 16.5983 2.43866 17.5007',
  d6: 'M18.6536 7.3482C18.4088 7.10349 18.2864 6.98114 18.159 7.04139C18.1558 7.04292 18.1518 7.04496 18.1486 7.04668C18.025 7.11424 18.0556 7.30758 18.1169 7.69425C18.316 8.9512 18.2718 10.237 18.0071 11.3621C16.8049 16.4704 11.9606 18.6125 8.40706 18.1011C7.89051 18.0268 7.63224 17.9896 7.46218 18.1282C7.29213 18.2668 7.28014 18.4679 7.25615 18.8699C7.24996 18.9736 7.24668 19.0817 7.24665 19.1942C7.24657 19.4437 7.24653 19.5685 7.33422 19.6563C7.4219 19.7442 7.55487 19.7444 7.82079 19.7449C9.56613 19.7479 11.3115 19.7442 13.0568 19.7442C14.4244 19.7443 15.5268 19.7443 16.3937 19.6278C17.2938 19.5068 18.0517 19.248 18.6536 18.6464C19.3218 17.9785 19.5676 17.0594 19.6644 16.146L20.1771 16.0605C20.6968 15.974 21.2596 15.9114 21.7135 15.6216C22.3303 15.2276 22.683 14.5822 22.7351 13.8634C22.7521 13.6283 22.7521 13.3463 22.7521 13.0223V12.9726C22.7521 12.6486 22.7521 12.3665 22.7351 12.1314C22.683 11.4126 22.3303 10.7672 21.7135 10.3732C21.2597 10.0834 20.6968 10.0208 20.1771 9.93428L19.6644 9.84887C19.5676 8.93532 19.3219 8.01618 18.6536 7.3482ZM19.7518 12.9424C19.7519 12.3777 19.7519 11.8583 19.7437 11.3821C20.0467 11.4325 20.3528 11.4743 20.6515 11.5466C21.0104 11.6334 21.2132 11.8855 21.2389 12.2396C21.2515 12.4141 21.252 12.6414 21.252 12.9974C21.252 13.3533 21.2515 13.5806 21.2389 13.7552C21.2132 14.1093 21.0104 14.3614 20.6515 14.4482C20.3528 14.5204 20.0467 14.5622 19.7437 14.6127C19.7519 14.1363 19.7519 13.6168 19.7518 13.0521V12.9424Z',
  d7: 'M2.79515 18.2338C2.76009 18.5741 2.74256 18.7443 2.61557 18.783C2.48859 18.8218 2.39222 18.7062 2.19947 18.4751C1.71685 17.8963 1.47094 17.1493 1.36848 16.3875C1.25192 15.521 1.25194 14.4191 1.25195 13.0522V12.9424C1.25194 11.5755 1.25192 10.4736 1.36848 9.60707C1.4895 8.70737 1.74839 7.94984 2.35031 7.3482C2.95222 6.74655 3.7101 6.48777 4.61021 6.36681C5.20945 6.28628 5.81572 6.25826 6.42269 6.24978C7.05342 6.24096 7.36878 6.23656 7.41429 6.37685C7.4598 6.51714 7.19095 6.70621 6.65326 7.08433C5.74966 7.71978 4.82224 8.62815 4.25692 10.0086C3.7042 11.3047 3.60744 12.7145 3.95295 14.0122C4.0198 14.2633 4.05323 14.3888 4.04066 14.4863C4.02808 14.5837 3.96601 14.693 3.84186 14.9115C3.26155 15.9327 2.91545 17.0662 2.79515 18.2338Z',
  d8: 'M16.5463 11.0201C15.8783 13.86 14.044 15.7731 11.2357 16.5576C9.82043 16.953 7.97654 16.8149 6.8121 15.8441C6.55792 16.1858 6.34034 16.5534 6.16938 16.9587C5.84168 17.7356 5.66799 18.692 5.78013 19.9325C5.81743 20.345 5.51324 20.7097 5.10071 20.747C4.68818 20.7843 4.32352 20.4801 4.28623 20.0675C4.15428 18.608 4.35444 17.4019 4.7873 16.3757C5.06133 15.7261 5.42165 15.165 5.82729 14.6685C5.14009 13.4624 5.05374 11.9557 5.64042 10.5878C6.33869 8.87125 7.76785 8.08515 8.94222 7.48095C10.2148 6.82624 12.115 5.93908 11.3761 4.18645C11.2574 3.72294 11.6153 3.25591 12.0938 3.25032C15.9734 3.20505 17.2771 7.91336 16.5463 11.0201Z',
  d9: 'M19.0039 10.5117L21.9996 11.0066V14.9932L19.0039 15.5117',
  d10: 'M5.02442 20C4.53602 14.6 8.99342 13.5 10.9942 11M11.028 15.8353C13.574 15.1243 15.2068 13.4224 15.8125 10.8483C16.4986 7.93305 15.2686 3.96327 12.0972 4.00026C12.0972 4.00026 12.42 5.25961 12.1376 5.8764C11.0963 8.15057 7.49265 7.99259 6.32434 10.8769C5.62863 12.4908 6.04936 14.2938 7.35849 15.3279C8.1811 15.9778 9.80541 16.1767 11.028 15.8353Z',
  d11: 'M2.00098 19.7616L2.00136 7.10879C2.00136 7.05356 2.04615 7.00879 2.1014 7.00879H6.01386M7.99914 19.018H18.904C18.9592 19.018 19.004 18.9733 19.004 18.918L19.0038 9.00195',
  d12: 'M16.0874 6.50549C16.7795 8.02 16.9245 9.91251 16.5463 11.5201C15.8783 14.36 14.044 16.2731 11.2357 17.0576C10.5145 17.2591 9.69955 17.2967 8.95088 17.1967C8.21293 17.0982 7.36654 16.7823 6.8121 16.3441C6.55792 16.6858 6.34034 17.0534 6.16938 17.4587C5.85793 18.1971 5.6856 19.0976 5.76554 20.25H4.26249C4.18494 18.9318 4.38624 17.8265 4.7873 16.8757C5.06133 16.2261 5.42165 15.665 5.82729 15.1685C5.14009 13.9624 5.05374 12.4557 5.64042 11.0878C6.33869 9.37124 7.76785 8.58513 8.94222 7.98094C9.45223 7.72028 10.1428 7.36704 10.5314 7.09623C11.606 6.24755 11.3843 4.51943 11.139 3.76146L12.0938 3.75031C14.0629 3.72734 15.3871 4.97297 16.0874 6.50549Z',
  d13: 'M8.60334 6.75H2C1.58579 6.75 1.25 7.08579 1.25 7.5V19.5C1.25 19.9142 1.58579 20.25 2 20.25H3.01056C2.93444 18.7895 3.16105 17.5148 3.63555 16.3899C3.84689 15.8889 4.09998 15.4352 4.37904 15.0222C3.84471 13.6298 3.87244 12.0463 4.48697 10.6059C5.3757 8.43286 7.1974 7.47289 8.37035 6.86943L8.37333 6.86789C8.44926 6.82908 8.52625 6.78967 8.60334 6.75Z',
  d14: 'M7.01904 20.25H19C19.4142 20.25 19.75 19.9142 19.75 19.5V16.6341L22.7501 16.1274V10.8728L19.75 10.3661V7.5C19.75 7.08579 19.4142 6.75 19 6.75H17.5262C18.0729 8.36939 18.1393 10.2067 17.7631 11.8063C16.9908 15.0893 14.8196 17.3543 11.572 18.2615C10.6672 18.5143 9.67953 18.5551 8.78549 18.4358C8.30705 18.3719 7.78445 18.2357 7.28502 18.0331C7.07127 18.5779 6.9405 19.2823 7.01904 20.25ZM19.75 15.1129V11.8874L21.2501 12.1407V14.8595L19.75 15.1129Z',
} as const;

export const IconBatteryEcoChargingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-stroke-rounded IconBatteryEcoChargingStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEcoChargingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-duotone-rounded IconBatteryEcoChargingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEcoChargingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-twotone-rounded IconBatteryEcoChargingTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEcoChargingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-solid-rounded IconBatteryEcoChargingSolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEcoChargingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-bulk-rounded IconBatteryEcoChargingBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEcoChargingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-stroke-sharp IconBatteryEcoChargingStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEcoChargingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-eco-charging-solid-sharp IconBatteryEcoChargingSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfBatteryEcoCharging: TheIconSelfPack = {
  name: 'BatteryEcoCharging',
  StrokeRounded: IconBatteryEcoChargingStrokeRounded,
  DuotoneRounded: IconBatteryEcoChargingDuotoneRounded,
  TwotoneRounded: IconBatteryEcoChargingTwotoneRounded,
  SolidRounded: IconBatteryEcoChargingSolidRounded,
  BulkRounded: IconBatteryEcoChargingBulkRounded,
  StrokeSharp: IconBatteryEcoChargingStrokeSharp,
  SolidSharp: IconBatteryEcoChargingSolidSharp,
};
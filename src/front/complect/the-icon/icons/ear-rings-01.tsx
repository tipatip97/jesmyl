import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 10.5C11.2818 10.0721 10.9725 9.72785 10.6018 9.49708C9.28087 8.67461 8.12796 9.00606 7.43537 9.53401C7.15139 9.75048 7.0094 9.85871 6.92586 9.85871C6.84232 9.85871 6.70033 9.75048 6.41636 9.53401C5.72376 9.00606 4.57085 8.67461 3.24991 9.49708C1.51631 10.5765 1.12404 14.1374 5.12277 17.1417C5.8844 17.7139 6.26521 18 6.92586 18C7.58651 18 7.96733 17.7139 8.72896 17.1417C8.96385 16.9652 9.18359 16.7868 9.38879 16.6071',
  d2: 'M13.2687 12.4971C14.6095 11.6746 15.7798 12.0061 16.4828 12.534C16.7711 12.7505 16.9152 12.8587 17 12.8587C17.0848 12.8587 17.2289 12.7505 17.5172 12.534C18.2202 12.0061 19.3905 11.6746 20.7313 12.4971C22.491 13.5765 22.8891 17.1374 18.8302 20.1417C18.0571 20.7139 17.6706 21 17 21C16.3294 21 15.9429 20.7139 15.1698 20.1417C11.1109 17.1374 11.509 13.5765 13.2687 12.4971Z',
  d3: 'M15.5 7.5C15.5 6.67157 16.1716 6 17 6C17.8284 6 18.5 6.67157 18.5 7.5C18.5 8.64806 17 8.65873 17 9.5V12.5',
  d4: 'M5.5 4.5C5.5 3.67157 6.17157 3 7 3C7.82843 3 8.5 3.67157 8.5 4.5C8.5 5.64806 7 5.65873 7 6.5V9.5',
  d5: 'M6.99993 9.85869C6.91513 9.85869 6.77103 9.75049 6.48273 9.53399C5.77973 9.00609 4.60943 8.67459 3.26863 9.49709C1.50893 10.5765 1.111 14.1375 5.1699 17.1418C5.94289 17.7139 6.32938 18 6.99993 18C7.67053 18 8.61564 17.1895 9.38874 16.6173M6.99993 9.85869C7.08473 9.85869 7.22884 9.75049 7.51714 9.53399C8.22014 9.00609 9.32732 8.71149 10.6681 9.53399C11.0243 9.7525 11.3326 10.1587 11.5515 10.5554M6.99993 9.85869L6.99993 6.5C6.99993 5.65873 8.49993 5.64806 8.49993 4.5C8.49993 3.67157 7.82833 3 6.99993 3C6.17153 3 5.49993 3.67157 5.49993 4.5',
  d6: 'M16.2495 7.5C16.2495 7.08579 16.5853 6.75 16.9995 6.75C17.4137 6.75 17.7495 7.08579 17.7495 7.5C17.7495 7.9116 16.9733 8.20037 16.7101 8.45729C16.4747 8.68702 16.2495 9.0272 16.2495 9.5V11.3827C16.2495 11.4549 16.1754 11.5035 16.1081 11.4775C15.2282 11.1373 14.0894 11.1136 12.8762 11.8578C11.6948 12.5825 11.0744 14.0635 11.2935 15.6973C11.5146 17.3458 12.573 19.1531 14.7232 20.7446C15.4141 21.2567 16.1016 21.7501 16.9996 21.7501C17.8976 21.7501 18.5851 21.2567 19.276 20.7446C21.4262 19.1531 22.4846 17.3458 22.7057 15.6973C22.9248 14.0635 22.3044 12.5825 21.123 11.8578C19.9097 11.1136 18.7709 11.1373 17.8909 11.4775C17.8236 11.5036 17.7495 11.4549 17.7495 11.3828V9.79729C17.7495 9.52761 17.9641 9.37353 18.1671 9.23806C18.5464 8.98382 19.2495 8.49647 19.2495 7.5C19.2495 6.25736 18.2422 5.25 16.9995 5.25C15.7569 5.25 14.7495 6.25736 14.7495 7.5C14.7495 7.91421 15.0853 8.25 15.4995 8.25C15.9137 8.25 16.2495 7.91421 16.2495 7.5Z',
  d7: 'M6.24951 4.5C6.24951 4.08579 6.5853 3.75 6.99951 3.75C7.41373 3.75 7.74951 4.08579 7.74951 4.5C7.74951 4.6516 7.70262 4.74361 7.33195 4.99204C7.18473 5.09071 6.91417 5.25808 6.71005 5.45729C6.47466 5.68702 6.24951 6.0272 6.24951 6.5V8.38272C6.24951 8.45487 6.17542 8.50348 6.10812 8.47746C5.22817 8.13733 4.08944 8.11362 2.87618 8.85784C1.69478 9.58251 1.07441 11.0635 1.29354 12.6973C1.51463 14.3458 2.57303 16.1531 4.72318 17.7446C5.4141 18.2567 6.10164 18.7501 6.99961 18.7501C7.89758 18.7501 8.58513 18.2567 9.27604 17.7446C9.48818 17.5876 9.6897 17.4284 9.88083 17.2676C9.97519 17.1882 10.0224 17.1485 10.0397 17.0922C10.057 17.0359 10.0392 16.9727 10.0037 16.8463C9.915 16.5307 9.84937 16.2137 9.80685 15.8967C9.52867 13.8226 10.3308 11.7006 12.1027 10.5761C12.259 10.4769 12.3372 10.4273 12.3568 10.3503C12.3764 10.2734 12.3372 10.2026 12.2587 10.061C11.9831 9.56365 11.5985 9.14949 11.123 8.85784C9.90999 8.11375 8.77143 8.13732 7.89155 8.47729C7.82408 8.50336 7.74985 8.45444 7.75014 8.38211L7.75686 6.74026C7.75797 6.46917 7.97072 6.36914 8.16707 6.23806C8.5464 5.98382 9.24951 5.49647 9.24951 4.5C9.24951 3.25736 8.24215 2.25 6.99951 2.25C5.75687 2.25 4.74951 3.25736 4.74951 4.5C4.74951 4.91421 5.0853 5.25 5.49951 5.25C5.91373 5.25 6.24951 4.91421 6.24951 4.5Z',
  d8: 'M11.5 10.5C11.2818 10.0721 10.9725 9.72785 10.6018 9.49708C9.28088 8.67461 8.12796 9.00606 7.43537 9.53401L6.92586 9.85871L6.41636 9.53401C5.72376 9.00606 4.57085 8.67461 3.24991 9.49708C1.51631 10.5765 1.12404 14.1374 5.12277 17.1417C5.8844 17.7139 6.92586 18 6.92586 18C6.92586 18 7.96733 17.7139 8.72896 17.1417C8.96385 16.9652 9.18359 16.7868 9.38879 16.6071',
  d9: 'M13.2687 12.4971C14.6095 11.6746 15.7798 12.0061 16.4828 12.534L17 12.8587L17.5172 12.534C18.2202 12.0061 19.3905 11.6746 20.7313 12.4971C22.491 13.5765 22.8891 17.1374 18.8302 20.1417C18.0571 20.7139 17 21 17 21C17 21 15.9429 20.7139 15.1698 20.1417C11.1109 17.1374 11.509 13.5765 13.2687 12.4971Z',
  d10: 'M15.5 7.5C15.5 6.67157 16.1716 6 17 6C17.8284 6 18.5 6.67157 18.5 7.5C18.5 8.64806 17 9 17 9V12.5',
  d11: 'M5.5 4.5C5.5 3.67157 6.17157 3 7 3C7.82843 3 8.5 3.67157 8.5 4.5C8.5 5.64806 7 6 7 6V9.5',
  d12: 'M7.00098 3.74793C6.58676 3.74793 6.25098 4.08325 6.25098 4.4969H4.75098C4.75098 3.25597 5.75834 2.25 7.00098 2.25C8.24362 2.25 9.25098 3.25597 9.25098 4.4969C9.25098 5.44957 8.61524 6.02319 8.14494 6.31311C8.00825 6.39737 7.8735 6.46593 7.75098 6.52094V9.49H6.25098V5.99483C6.25098 5.64709 6.49065 5.34509 6.82966 5.26566C6.93783 5.22654 7.22564 5.11946 7.35701 5.03848C7.63671 4.86605 7.75098 4.6907 7.75098 4.4969C7.75098 4.08325 7.41519 3.74793 7.00098 3.74793Z',
  d13: 'M16.9071 11.9011L17.0006 11.9598L17.0941 11.9011C18.0091 11.2291 19.4998 10.8496 21.124 11.8445C22.3054 12.5682 22.9258 14.0472 22.7067 15.6787C22.4856 17.3249 21.4272 19.1298 19.277 20.719C18.8162 21.0596 18.2914 21.3021 17.9021 21.4562C17.7036 21.5347 17.0006 21.7501 17.0006 21.7501C17.0006 21.7501 16.2976 21.5347 16.099 21.4562C15.7098 21.3021 15.1849 21.0596 14.7242 20.719C12.574 19.1298 11.5156 17.3249 11.2945 15.6787C11.0754 14.0472 11.6958 12.5682 12.8772 11.8445C14.5014 10.8496 15.9921 11.2291 16.9071 11.9011Z',
  d14: 'M17.001 6.74402C16.5868 6.74402 16.251 7.07935 16.251 7.49299H14.751C14.751 6.25206 15.7583 5.24609 17.001 5.24609C18.2436 5.24609 19.251 6.25206 19.251 7.49299C19.251 8.44566 18.6152 9.01928 18.1449 9.3092C18.0083 9.39346 17.8735 9.46202 17.751 9.51703V12.4861H16.251V8.99092C16.251 8.64319 16.4906 8.34119 16.8297 8.26176C16.9378 8.22263 17.2256 8.11555 17.357 8.03457C17.6367 7.86215 17.751 7.6868 17.751 7.49299C17.751 7.07935 17.4152 6.74402 17.001 6.74402Z',
  d15: 'M7.00059 8.96465L6.90705 8.90601C5.99206 8.23394 4.50138 7.8545 2.87715 8.84943C1.69575 9.5731 1.07539 11.0521 1.29451 12.6836C1.5156 14.3298 2.574 16.1347 4.72416 17.7239C5.18494 18.0645 5.7098 18.307 6.09903 18.461C6.29758 18.5396 7.00059 18.755 7.00059 18.755C7.00059 18.755 7.7036 18.5396 7.90215 18.461C8.29138 18.307 8.81623 18.0645 9.27702 17.7239C9.64405 17.4526 9.97927 17.1751 10.2839 16.8931C10.1782 16.5443 10.1019 16.1944 10.055 15.8451C9.78393 13.827 10.5373 11.8115 12.2236 10.7786C12.3199 10.7196 12.4162 10.6643 12.5122 10.6125C12.247 9.86499 11.7691 9.2446 11.124 8.84943C9.49979 7.8545 8.00911 8.23394 7.09412 8.90601L7.00059 8.96465Z',
} as const;

export const IconEarRings01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-stroke-rounded IconEarRings01StrokeRounded"
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

export const IconEarRings01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-duotone-rounded IconEarRings01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconEarRings01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-twotone-rounded IconEarRings01TwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarRings01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-solid-rounded IconEarRings01SolidRounded"
    >
      <path 
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

export const IconEarRings01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-bulk-rounded IconEarRings01BulkRounded"
    >
      <path 
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

export const IconEarRings01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-stroke-sharp IconEarRings01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEarRings01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ear-rings-01-solid-sharp IconEarRings01SolidSharp"
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

export const iconPackOfEarRings01: TheIconSelfPack = {
  name: 'EarRings01',
  StrokeRounded: IconEarRings01StrokeRounded,
  DuotoneRounded: IconEarRings01DuotoneRounded,
  TwotoneRounded: IconEarRings01TwotoneRounded,
  SolidRounded: IconEarRings01SolidRounded,
  BulkRounded: IconEarRings01BulkRounded,
  StrokeSharp: IconEarRings01StrokeSharp,
  SolidSharp: IconEarRings01SolidSharp,
};
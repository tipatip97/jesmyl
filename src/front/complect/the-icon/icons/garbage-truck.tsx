import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 9V12',
  d2: 'M7 10V12',
  d3: 'M17 4H15M15 4H9.48528C8.25903 4 7.6459 4 7.09459 4.22836C6.54328 4.45672 6.10973 4.89027 5.24264 5.75736L3.46446 7.53554C2.74189 8.25811 2.3806 8.6194 2.1903 9.07883C2 9.53825 2 10.0492 2 11.0711V13C2 15.357 2 16.5355 2.73223 17.2678C3.2191 17.7546 3.90328 17.9178 5 17.9724M15 4V8C15 9.88562 15 10.8284 15.5858 11.4142C16.1716 12 17.1144 12 19 12H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M9 18H15',
  d4: 'M15 7H16.6998C18.0581 7 18.7373 7 19.29 7.35371C19.8427 7.70742 20.1647 8.34811 20.8087 9.6295L22 12',
  d5: 'M3.46446 7.53554L5.24264 5.75736C6.10973 4.89027 6.54328 4.45672 7.09459 4.22836C7.6459 4 8.25903 4 9.48528 4H15V8C15 9.88562 15 10.8284 15.5858 11.4142C16.1716 12 17.1144 12 19 12H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724C18.9853 16.8806 18.0954 16 17 16C15.8954 16 15 16.8954 15 18H9C9 16.8954 8.10457 16 7 16C5.90463 16 5.01493 16.8806 5.00019 17.9725C3.90346 17.9178 3.2191 17.7546 2.73223 17.2678C2 16.5355 2 15.357 2 13V11.0711C2 10.0492 2 9.53825 2.1903 9.07883C2.3806 8.6194 2.74189 8.25811 3.46446 7.53554Z',
  d6: 'M17 15.375C15.6193 15.375 14.5 16.4943 14.5 17.875C14.5 19.2557 15.6193 20.375 17 20.375C18.3807 20.375 19.5 19.2557 19.5 17.875C19.5 16.4943 18.3807 15.375 17 15.375Z',
  d7: 'M7 15.375C5.61929 15.375 4.5 16.4943 4.5 17.875C4.5 19.2557 5.61929 20.375 7 20.375C8.38071 20.375 9.5 19.2557 9.5 17.875C9.5 16.4943 8.38071 15.375 7 15.375Z',
  d8: 'M18.2066 8.51775C17.883 8.48334 17.4614 8.48209 16.7998 8.48209H15.1944C14.6728 8.48209 14.25 8.06636 14.25 7.55355C14.25 7.04073 14.6728 6.625 15.1944 6.625H16.7998C16.8153 6.625 16.8308 6.625 16.8462 6.625C17.4479 6.62497 17.9726 6.62494 18.4098 6.67144C18.8825 6.72172 19.3298 6.83228 19.7551 7.09988C20.1764 7.36502 20.472 7.71889 20.7295 8.11996C20.9715 8.49707 21.2171 8.97762 21.5045 9.53983L22.6492 11.7793C22.8834 12.2375 22.6955 12.7956 22.2295 13.0259C21.7634 13.2562 21.1957 13.0714 20.9615 12.6132L19.8364 10.4121C19.524 9.80101 19.3192 9.40249 19.1321 9.11112C18.955 8.83517 18.8375 8.72738 18.7369 8.66408C18.6402 8.60324 18.5058 8.54958 18.2066 8.51775Z',
  d9: 'M16.1501 5.62487H16.9959C17.5481 5.62487 17.9958 5.17717 17.9958 4.62491C17.9958 4.07265 17.5481 3.62496 16.9959 3.62496L9.34273 3.625C8.25496 3.62448 7.49901 3.62412 6.80763 3.9105C6.11626 4.19687 5.58198 4.73167 4.81317 5.50121L2.83999 7.47437C2.20889 8.10464 1.74591 8.56701 1.49745 9.16686C1.24899 9.7667 1.24941 10.421 1.25 11.3129L1.25006 13.4287C1.25003 14.5616 1.25001 15.4873 1.34827 16.2182C1.45098 16.9821 1.67327 17.6444 2.20196 18.1731C2.50353 18.4747 2.84975 18.6774 3.23542 18.8149C3.2906 18.8346 3.33918 18.8519 3.38232 18.8661C3.29602 18.5504 3.24994 18.218 3.24994 17.875C3.24994 15.8039 4.92888 14.125 6.99994 14.125C9.07101 14.125 10.7499 15.8039 10.7499 17.875C10.7499 18.3028 10.6783 18.7139 10.5463 19.0969C10.5833 19.0975 10.6245 19.0975 10.6703 19.0975H13.3296C13.3754 19.0975 13.4166 19.0975 13.4536 19.0969C13.3216 18.7139 13.2499 18.3028 13.2499 17.875C13.2499 15.8039 14.9289 14.125 16.9999 14.125C19.071 14.125 20.7499 15.8039 20.7499 17.875C20.7499 18.2181 20.7039 18.5504 20.6175 18.8662C20.6607 18.852 20.7093 18.8347 20.7644 18.815C21.1502 18.6775 21.4965 18.4748 21.7982 18.1731C22.3268 17.6444 22.5491 16.9821 22.6518 16.2182C22.7501 15.4873 22.7501 14.5615 22.7501 13.4288V13.4288V12.375C22.7501 11.9608 22.4143 11.625 22.0001 11.625H19.0001C18.036 11.625 17.3885 11.6235 16.9054 11.5585C16.444 11.4965 16.2465 11.3892 16.1162 11.2589C15.9859 11.1286 15.8786 10.9311 15.8166 10.4697C15.7516 9.98662 15.7501 9.33906 15.7501 8.37504V6.02487C15.7501 5.83631 15.7501 5.74203 15.8086 5.68345C15.8672 5.62487 15.9615 5.62487 16.1501 5.62487ZM11.75 9.375C11.75 8.96079 11.4142 8.625 11 8.625C10.5858 8.625 10.25 8.96079 10.25 9.375V12.375C10.25 12.7892 10.5858 13.125 11 13.125C11.4142 13.125 11.75 12.7892 11.75 12.375V9.375ZM7.75 10.375C7.75 9.96079 7.41421 9.625 7 9.625C6.58579 9.625 6.25 9.96079 6.25 10.375V12.375C6.25 12.7892 6.58579 13.125 7 13.125C7.41421 13.125 7.75 12.7892 7.75 12.375V10.375Z',
  d10: 'M16.3501 5.62846H16.9959C17.5482 5.62846 17.9959 5.17997 17.9959 4.62673C17.9959 4.07349 17.5482 3.625 16.9959 3.625L9.34279 3.62504C8.25502 3.62452 7.49907 3.62416 6.80769 3.91105C6.11632 4.19793 5.58203 4.73367 4.81323 5.50458L2.84004 7.48125C2.20895 8.11264 1.74597 8.57583 1.4975 9.17674C1.24904 9.77765 1.24947 10.4331 1.25006 11.3266L1.25011 13.4462C1.25009 14.581 1.25007 15.5084 1.34833 16.2406C1.45104 17.0059 1.67332 17.6694 2.20202 18.199C2.50359 18.5011 2.84981 18.7042 3.23548 18.8419C3.29827 18.8644 3.35938 18.8072 3.34451 18.7421C3.28267 18.4714 3.25 18.1897 3.25 17.9003C3.25 15.8255 4.92893 14.1436 7 14.1436C9.07107 14.1436 10.75 15.8255 10.75 17.9003C10.75 18.2853 10.6922 18.6567 10.5848 19.0064C10.5668 19.0649 10.6093 19.125 10.6704 19.125H13.3296C13.3907 19.125 13.4332 19.0649 13.4152 19.0064C13.3078 18.6567 13.25 18.2853 13.25 17.9003C13.25 15.8255 14.9289 14.1436 17 14.1436C19.0711 14.1436 20.75 15.8255 20.75 17.9003C20.75 18.1897 20.7173 18.4715 20.6555 18.7421C20.6406 18.8072 20.7017 18.8645 20.7645 18.842C21.1503 18.7043 21.4966 18.5012 21.7982 18.199C22.3269 17.6694 22.5492 17.0059 22.6519 16.2406C22.7502 15.5084 22.7501 14.581 22.7501 13.4462V12.3906C22.7501 12.3471 22.7462 12.3043 22.7486 12.2608C22.7572 12.1044 22.7257 11.9437 22.6492 11.7938L21.5045 9.55032C21.2171 8.98712 20.9715 8.50572 20.7295 8.12794C20.472 7.72616 20.1764 7.37165 19.7551 7.10605C19.3298 6.83798 18.8825 6.72722 18.4098 6.67685C17.9726 6.63027 17.4479 6.6303 16.8462 6.63033L16.1501 6.63033C15.9615 6.63033 15.8672 6.63033 15.8086 6.57175C15.75 6.51318 15.75 6.4189 15.75 6.23035L15.75 6.02848C15.75 5.83991 15.75 5.74563 15.8085 5.68704C15.8671 5.62846 15.9614 5.62846 16.1499 5.62846C16.2078 5.62846 16.2742 5.62846 16.3501 5.62846ZM16.1502 8.49071C15.9614 8.49071 15.867 8.49071 15.8084 8.54962C15.7498 8.60853 15.7501 8.70287 15.7507 8.89154C15.7529 9.58538 15.7638 10.0882 15.8166 10.4818C15.8787 10.9441 15.9859 11.142 16.1162 11.2725C16.2465 11.4031 16.444 11.5105 16.9055 11.5726C17.3885 11.6377 18.0361 11.6393 19.0001 11.6393H19.8027C20.0954 11.6393 20.2417 11.6393 20.3002 11.5435C20.3587 11.4477 20.2921 11.3172 20.1589 11.0562L19.8364 10.4242C19.524 9.81197 19.3192 9.41274 19.1321 9.12086C18.955 8.84442 18.8375 8.73643 18.7369 8.67302C18.6402 8.61208 18.5058 8.55832 18.2066 8.52644C17.883 8.49196 17.4614 8.49071 16.7998 8.49071H16.1502Z',
  d11: 'M16.1496 8.48438C15.9608 8.48438 15.8664 8.48437 15.8078 8.54318C15.7492 8.60199 15.7495 8.69616 15.7501 8.8845C15.7523 9.5771 15.7632 10.079 15.8161 10.472C15.8781 10.9334 15.9853 11.1309 16.1157 11.2613C16.246 11.3916 16.4435 11.4988 16.9049 11.5608C17.388 11.6258 18.0355 11.6274 18.9995 11.6274H19.8022C20.0948 11.6274 20.2411 11.6274 20.2996 11.5318C20.3581 11.4362 20.2915 11.3059 20.1583 11.0453L19.8358 10.4144C19.5235 9.80329 19.3186 9.40478 19.1316 9.11341C18.9544 8.83746 18.837 8.72967 18.7364 8.66637C18.6397 8.60553 18.5053 8.55187 18.206 8.52004C17.8825 8.48563 17.4608 8.48438 16.7992 8.48438H16.1496Z',
  d12: 'M11 8.625C11.4142 8.625 11.75 8.96079 11.75 9.375V12.375C11.75 12.7892 11.4142 13.125 11 13.125C10.5858 13.125 10.25 12.7892 10.25 12.375V9.375C10.25 8.96079 10.5858 8.625 11 8.625ZM7 9.625C7.41421 9.625 7.75 9.96079 7.75 10.375V12.375C7.75 12.7892 7.41421 13.125 7 13.125C6.58579 13.125 6.25 12.7892 6.25 12.375V10.375C6.25 9.96079 6.58579 9.625 7 9.625Z',
  d13: 'M11 8V12',
  d14: 'M7 9V12',
  d15: 'M17 4H15M15 4H7L2.00022 9L2 18H5M15 4V12H22V18H19M9 18H15',
  d16: 'M15 7H19L22 12',
  d17: 'M17 15.75C15.6193 15.75 14.5 16.8693 14.5 18.25C14.5 19.6307 15.6193 20.75 17 20.75C18.3807 20.75 19.5 19.6307 19.5 18.25C19.5 16.8693 18.3807 15.75 17 15.75Z',
  d18: 'M7 15.75C5.61929 15.75 4.5 16.8693 4.5 18.25C4.5 19.6307 5.61929 20.75 7 20.75C8.38071 20.75 9.5 19.6307 9.5 18.25C9.5 16.8693 8.38071 15.75 7 15.75Z',
  d19: 'M6.42259 3.53376C6.60586 3.35207 6.85444 3.25 7.11364 3.25H16.8864V5.1875H15.9091V6.15625H18.8409C19.1842 6.15625 19.5023 6.33479 19.6789 6.62658L22.6107 11.4703C22.7019 11.6209 22.75 11.7932 22.75 11.9688V17.7812C22.75 18.3163 22.3125 18.75 21.7727 18.75H20.717C20.7388 18.5864 20.75 18.4195 20.75 18.25C20.75 16.1789 19.0711 14.5 17 14.5C14.9289 14.5 13.25 16.1789 13.25 18.25C13.25 18.4195 13.2612 18.5864 13.283 18.75H10.717C10.7388 18.5864 10.75 18.4195 10.75 18.25C10.75 16.1789 9.07107 14.5 7 14.5C4.92893 14.5 3.25 16.1789 3.25 18.25C3.25 18.4195 3.26125 18.5864 3.28304 18.75H2.22727C1.96808 18.75 1.7195 18.6479 1.53623 18.4663C1.35295 18.2846 1.24999 18.0382 1.25 17.7812L1.25021 9.06248C1.25022 8.80556 1.35317 8.55917 1.53643 8.37751L6.42259 3.53376ZM15.9102 11H20.0477L18.2887 8.09375H15.9102V11ZM10 11V7H12V11H10ZM6 8V11H8V8H6Z',
};

export const IconGarbageTruckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-stroke-rounded IconGarbageTruckStrokeRounded"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconGarbageTruckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-duotone-rounded IconGarbageTruckDuotoneRounded"
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
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconGarbageTruckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-twotone-rounded IconGarbageTruckTwotoneRounded"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGarbageTruckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-solid-rounded IconGarbageTruckSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGarbageTruckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-bulk-rounded IconGarbageTruckBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGarbageTruckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-stroke-sharp IconGarbageTruckStrokeSharp"
    >
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGarbageTruckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="garbage-truck-solid-sharp IconGarbageTruckSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
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

export const iconPackOfGarbageTruck: TheIconSelfPack = {
  name: 'GarbageTruck',
  StrokeRounded: IconGarbageTruckStrokeRounded,
  DuotoneRounded: IconGarbageTruckDuotoneRounded,
  TwotoneRounded: IconGarbageTruckTwotoneRounded,
  SolidRounded: IconGarbageTruckSolidRounded,
  BulkRounded: IconGarbageTruckBulkRounded,
  StrokeSharp: IconGarbageTruckStrokeSharp,
  SolidSharp: IconGarbageTruckSolidSharp,
};
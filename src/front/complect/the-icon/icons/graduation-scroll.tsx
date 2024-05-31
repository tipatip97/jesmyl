import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.1609 9.92846C22.1928 9.54155 22.2858 7.69292 21.3685 5.79943C20.4512 3.90594 18.8711 2.68462 17.8391 3.07154M21.1609 9.92846C20.1289 10.3154 18.5488 9.09406 17.6315 7.20057C16.7142 5.30708 16.8072 3.45845 17.8391 3.07154M21.1609 9.92846L6.16089 18.9285C5.12895 19.3154 3.54878 18.0941 2.6315 16.2006C1.71421 14.3071 1.80716 12.4584 2.83911 12.0715L17.8391 3.07154',
  d2: 'M15 13.6067C13.6383 13.0337 10.9233 10.9504 10.9574 7.20068M11.5 15.7007C10.3333 15.144 7.9 13.0782 7.5 9.26917',
  d3: 'M15.43 14C16.0276 15.1302 16.639 18.1124 14.5498 21L13.5632 19.584L11 20.8103C11 20.8103 12.8249 18.8868 11.9528 16',
  d4: 'M17.6311 7.2013C18.5484 9.09479 20.1286 10.3161 21.1605 9.92919L14.9996 13.6257C12.1996 12.1257 11.1379 8.71778 10.957 7.2013L17.5132 3.26759C17.6086 3.18374 17.7172 3.11785 17.8388 3.07227L17.5132 3.26759C16.7989 3.89544 16.8219 5.53091 17.6311 7.2013Z',
  d5: 'M2.6315 16.201C3.54878 18.0944 5.12895 19.3158 6.16089 18.9289L11.2787 15.8582C8.70158 13.7444 7.68577 10.5889 7.5 9.27539L2.83911 12.0719C1.80716 12.4588 1.71421 14.3075 2.6315 16.201Z',
  d6: 'M15 13.6072C13.6383 13.0342 10.9233 10.9509 10.9574 7.20117M11.5 15.7012C10.3333 15.1444 7.9 13.0787 7.5 9.26966',
  d7: 'M20.1055 2.98818C20.8499 3.56356 21.5426 4.43983 22.0435 5.47371C22.5432 6.50522 22.79 7.56644 22.7447 8.46784C22.7021 9.31459 22.3725 10.2341 21.4954 10.6036L17.195 13.1839C17.0569 13.2668 16.9879 13.3082 16.9051 13.3254C16.8224 13.3427 16.7511 13.3334 16.6086 13.3149C13.2633 12.8799 11.8619 9.51001 11.7286 6.43231C11.7172 6.16994 11.7115 6.03875 11.7767 5.91764C11.8418 5.79652 11.9612 5.72488 12.2001 5.58159L17.5118 2.39453L17.5758 2.37054C18.461 2.03864 19.3968 2.44048 20.1055 2.98818ZM19.1881 4.17495C18.6194 3.73535 18.2491 3.71999 18.1024 3.775C18.001 3.81303 17.7848 3.98484 17.7534 4.60995C17.7236 5.20297 17.8889 6.01281 18.3065 6.87479C18.7229 7.7344 19.2789 8.41553 19.8118 8.82746C20.3806 9.26706 20.7509 9.28242 20.8976 9.22741C20.999 9.18938 21.2152 9.01757 21.2466 8.39245C21.2764 7.79944 21.1111 6.9896 20.6935 6.12762C20.2771 5.26801 19.7211 4.58687 19.1881 4.17495Z',
  d8: 'M9.90512 6.95855C10.0398 6.87775 10.1071 6.83735 10.1574 6.86484C10.2077 6.89234 10.2101 6.97215 10.2148 7.13177C10.3046 10.1589 11.8605 13.0402 14.7014 14.2928C14.8687 14.3666 14.9524 14.4035 14.9562 14.4642C14.96 14.5249 14.8834 14.5709 14.7302 14.6628L13.5944 15.3443C13.394 15.4645 13.2938 15.5246 13.1755 15.5335C13.0573 15.5423 12.9577 15.5013 12.7587 15.4192C9.86831 14.2272 8.57605 11.5938 8.19602 8.64439C8.15853 8.35346 8.13979 8.208 8.20475 8.0739C8.26971 7.9398 8.40142 7.86077 8.66483 7.70273L9.90512 6.95855Z',
  d9: 'M6.43533 9.04043C6.55639 8.96779 6.61692 8.93147 6.66565 8.95518C6.71438 8.97889 6.72327 9.04975 6.74105 9.19148C7.11151 12.1445 8.51595 15.0081 11.2221 16.394C11.3742 16.4719 11.4502 16.5108 11.4521 16.5696C11.4541 16.6284 11.3825 16.6714 11.2394 16.7573L6.48818 19.608L6.4242 19.632C5.53898 19.9639 4.60318 19.5621 3.89455 19.0143C3.15012 18.439 2.45739 17.5627 1.95653 16.5288C1.45683 15.4973 1.20997 14.4361 1.25529 13.5347C1.29787 12.6879 1.62752 11.7684 2.50457 11.3989L6.43533 9.04043Z',
  d10: 'M15.1574 21.4427C15.015 21.6395 14.786 21.7552 14.5431 21.753C14.3001 21.7508 14.0733 21.6311 13.9344 21.4318L13.3121 20.5386L11.3237 21.4899C10.9975 21.646 10.6063 21.547 10.3935 21.2546C10.1816 20.9632 10.2068 20.5625 10.4531 20.3001L10.4542 20.2989L10.4559 20.2971C10.5199 20.2251 10.9956 19.6636 11.2598 18.7819C11.314 18.6008 11.3412 18.5103 11.3871 18.4512C11.433 18.3922 11.5036 18.3498 11.6448 18.2651L16.1306 15.5736C16.3577 15.4374 16.4713 15.3692 16.5694 15.4182C16.6675 15.4671 16.6809 15.5939 16.7075 15.8474C16.873 17.42 16.5931 19.4583 15.1574 21.4427Z',
  d11: 'M9.90535 6.95777C10.04 6.87697 10.1074 6.83657 10.1576 6.86406C10.2079 6.89156 10.2103 6.97137 10.215 7.13099C10.3048 10.1581 11.8607 13.0394 14.7017 14.292C14.869 14.3658 14.9526 14.4027 14.9564 14.4634C14.9603 14.5241 14.8837 14.5701 14.7305 14.662L13.5946 15.3435C13.3942 15.4637 13.294 15.5239 13.1758 15.5327C13.0575 15.5415 12.958 15.5005 12.7589 15.4184C9.86854 14.2264 8.57629 11.593 8.19625 8.64361C8.15877 8.35268 8.14002 8.20721 8.20498 8.07312C8.26995 7.93902 8.40165 7.85999 8.66507 7.70195L9.90535 6.95777Z',
  d12: 'M21.1609 9.93468C22.1928 9.54742 22.2858 7.69713 21.3685 5.80194C20.4512 3.90675 18.8711 2.68433 17.8391 3.0716M21.1609 9.93468C20.1289 10.322 18.5488 9.09953 17.6315 7.20434C16.7142 5.30915 16.8072 3.45886 17.8391 3.0716M21.1609 9.93468L6.16089 18.9428C5.12895 19.3301 3.54878 18.1077 2.6315 16.2125C1.71421 14.3173 1.80716 12.4669 2.83911 12.0796L17.8391 3.0716',
  d13: 'M15 13.6159C13.6383 13.0424 10.9233 10.9572 10.9574 7.2041M11.5 15.7118C10.3333 15.1546 7.9 13.0869 7.5 9.27445',
  d14: 'M15.4304 13.9424C16.1328 15.3741 16.477 18.7034 14.5565 20.985C14.5523 20.99 14.5443 20.9897 14.5406 20.9843L13.5761 19.587L11.0892 20.7621C11.08 20.7664 11.0703 20.7569 11.0759 20.7484C11.5044 20.1033 12.7327 18.1704 11.9522 15.9645',
  d15: 'M17.0644 2.66251C17.2108 2.54286 17.3805 2.4433 17.5758 2.37005C18.461 2.03815 19.3968 2.43999 20.1055 2.9877C20.8499 3.56307 21.5426 4.43934 22.0435 5.47322C22.5432 6.50473 22.79 7.56595 22.7447 8.46735C22.7021 9.31411 22.3725 10.2336 21.4954 10.6032L17.0055 13.2971C16.2127 13.1251 15.5681 12.9741 15.2402 12.894C14.0348 12.3628 11.6788 10.5048 11.7083 7.20922C11.7123 6.86009 11.7521 6.33338 11.8518 5.79006L17.0644 2.66251ZM18.1481 3.76161C18.3183 3.72596 18.6713 3.77509 19.1881 4.17458C19.7211 4.58651 20.2771 5.26764 20.6935 6.12725C21.1111 6.98923 21.2764 7.79907 21.2466 8.39209C21.2152 9.0172 20.999 9.18902 20.8976 9.22704C20.7509 9.28205 20.3806 9.26669 19.8118 8.82709C19.2789 8.41517 18.7229 7.73403 18.3065 6.87442C17.8889 6.01245 17.7236 5.20261 17.7534 4.60959C17.7748 4.18452 17.8816 3.96905 17.9796 3.86272L18.1481 3.76161Z',
  d16: 'M10.2247 6.76634L8.26512 7.94207C8.23796 8.4409 8.23795 8.89895 8.24949 9.21616C8.62553 12.7071 10.8518 14.5579 11.8187 15.0221C12.1353 15.1667 12.6202 15.3757 13.1745 15.5957L15.1445 14.4137C15.0136 14.3827 14.9046 14.3563 14.8212 14.3357C14.7833 14.3263 14.7461 14.314 14.7101 14.2989C13.1751 13.653 10.1706 11.3503 10.2084 7.19472L10.2084 7.19304C10.2099 7.06664 10.215 6.92292 10.2247 6.76634Z',
  d17: 'M11.575 16.5554C11.428 16.4914 11.2981 16.4334 11.1892 16.3837L11.1779 16.3785C9.81086 15.7261 7.18616 13.4533 6.75509 9.34835C6.75338 9.33207 6.7522 9.31573 6.75156 9.29936C6.7465 9.16999 6.74315 9.02043 6.74236 8.85572L2.50457 11.3984C1.62752 11.768 1.29787 12.6874 1.25529 13.5342C1.20997 14.4356 1.45683 15.4968 1.95653 16.5283C2.45739 17.5622 3.15012 18.4385 3.89455 19.0139C4.60318 19.5616 5.53898 19.9634 6.4242 19.6315C6.46676 19.6155 6.50779 19.5958 6.54677 19.5724L11.575 16.5554Z',
  d18: 'M11.402 18.117C11.3472 18.5309 11.237 18.8949 11.1101 19.2025C10.9611 19.5637 10.789 19.8464 10.6566 20.036C10.5907 20.1304 10.4895 20.2538 10.4531 20.2978C10.2068 20.5603 10.1816 20.961 10.3935 21.2523C10.6063 21.5448 10.9975 21.6437 11.3237 21.4876L13.3121 20.5363L13.9344 21.4295C14.0733 21.6289 14.3001 21.7486 14.5431 21.7508C14.786 21.7529 15.015 21.6373 15.1574 21.4404C16.8618 19.0847 16.9373 16.653 16.5725 15.0146L11.402 18.117Z',
} as const;

export const IconGraduationScrollStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-stroke-rounded IconGraduationScrollStrokeRounded"
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

export const IconGraduationScrollDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-duotone-rounded IconGraduationScrollDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconGraduationScrollTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-twotone-rounded IconGraduationScrollTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconGraduationScrollSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-solid-rounded IconGraduationScrollSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconGraduationScrollBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-bulk-rounded IconGraduationScrollBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      </g>
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGraduationScrollStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-stroke-sharp IconGraduationScrollStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconGraduationScrollSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduation-scroll-solid-sharp IconGraduationScrollSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfGraduationScroll: TheIconSelfPack = {
  name: 'GraduationScroll',
  StrokeRounded: IconGraduationScrollStrokeRounded,
  DuotoneRounded: IconGraduationScrollDuotoneRounded,
  TwotoneRounded: IconGraduationScrollTwotoneRounded,
  SolidRounded: IconGraduationScrollSolidRounded,
  BulkRounded: IconGraduationScrollBulkRounded,
  StrokeSharp: IconGraduationScrollStrokeSharp,
  SolidSharp: IconGraduationScrollSolidSharp,
};
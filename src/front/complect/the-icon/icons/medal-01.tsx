import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 2V10.5M15.5 2V10.5',
  d2: 'M17.9162 2.01166H6.0838C5.17286 2.01166 3.96696 1.85424 3.34398 2.69602C3 3.1608 3 3.83334 3 5.17844C3 6.32524 3 6.89864 3.23194 7.38174C3.62807 8.20684 4.51377 8.56526 5.27291 8.95504L8.98131 10.8591C10.4626 11.6197 11.2033 12 12 12C12.7967 12 13.5374 11.6197 15.0187 10.8591L18.7271 8.95504C19.4862 8.56526 20.3719 8.20684 20.7681 7.38174C21 6.89864 21 6.32524 21 5.17844C21 3.83334 21 3.1608 20.656 2.69602C20.033 1.85424 18.8271 2.01166 17.9162 2.01166Z',
  d3: 'M10.5292 13.6376C11.2478 13.2125 11.6071 13 12 13C12.3929 13 12.7522 13.2125 13.4708 13.6376L14.4708 14.2292C15.2167 14.6704 15.5896 14.891 15.7948 15.26C16 15.6289 16 16.0789 16 16.979V18.021C16 18.9211 16 19.3711 15.7948 19.74C15.5896 20.109 15.2167 20.3296 14.4708 20.7708L13.4708 21.3624C12.7522 21.7875 12.3929 22 12 22C11.6071 22 11.2478 21.7875 10.5292 21.3624L9.52922 20.7708C8.78332 20.3296 8.41037 20.109 8.20519 19.74C8 19.3711 8 18.9211 8 18.021V16.979C8 16.0789 8 15.6289 8.20519 15.26C8.41037 14.891 8.78332 14.6704 9.52922 14.2292L10.5292 13.6376Z',
  d4: 'M2.05052 6.80803C2 6.60312 2 6.37737 2 5.92586C2 4.86687 2 4.33738 2.15278 3.90965C2.45111 3.07449 3.15617 2.41924 4.05482 2.14199C4.51506 2 5.08481 2 6.2243 2H8V10.3487L3.54838 8.26288C3.11456 8.05961 2.89765 7.95798 2.72352 7.82381C2.38519 7.56313 2.14867 7.20614 2.05052 6.80803Z',
  d5: 'M21.9495 6.80803C22 6.60312 22 6.37737 22 5.92586C22 4.86687 22 4.33738 21.8472 3.90965C21.5489 3.07449 20.8438 2.41924 19.9452 2.14199C19.4849 2 18.9152 2 17.7757 2H16V10.3487L20.4516 8.26288L20.4516 8.26287C20.8854 8.05961 21.1024 7.95798 21.2765 7.82381C21.6148 7.56313 21.8513 7.20614 21.9495 6.80803Z',
  d6: 'M8 2V10',
  d7: 'M16 2V10',
  d8: 'M2 5.92586C2 4.86687 2 4.33738 2.15278 3.90965C2.45111 3.07449 3.15617 2.41924 4.05482 2.14199C4.51506 2 5.08481 2 6.2243 2H17.7757C18.9152 2 19.4849 2 19.9452 2.14199C20.8438 2.41924 21.5489 3.07449 21.8472 3.90965C22 4.33738 22 4.86687 22 5.92586C22 6.37737 22 6.60312 21.9495 6.80803C21.8513 7.20614 21.6148 7.56313 21.2765 7.82381C21.1023 7.95798 20.8854 8.05961 20.4516 8.26288L13.8007 11.3791C12.9174 11.793 12.4757 12 12 12C11.5243 12 11.0827 11.793 10.1993 11.3791L3.54838 8.26288C3.11456 8.05961 2.89765 7.95798 2.72352 7.82381C2.38519 7.56313 2.14867 7.20614 2.05052 6.80803C2 6.60312 2 6.37737 2 5.92586Z',
  d9: 'M6.06144 1.00006C6.11499 1.00009 6.16933 1.00012 6.22449 1.00012H17.7759C17.8311 1.00012 17.8854 1.00009 17.9389 1.00006C18.9191 0.999513 19.6326 0.999117 20.2402 1.18655C21.4188 1.55016 22.3775 2.4211 22.7891 3.57338C23.0017 4.16847 23.0011 4.86518 23.0003 5.75823C23.0002 5.81339 23.0002 5.8693 23.0002 5.92597C23.0002 5.95369 23.0002 5.98127 23.0003 6.00872C23.0007 6.37711 23.0011 6.72094 22.9206 7.04751C22.7659 7.67506 22.3966 8.22346 21.887 8.61607C21.6235 8.81909 21.3105 8.96543 20.9518 9.13311C20.9268 9.1448 20.9015 9.1566 20.8761 9.16852L14.2252 12.2848C14.1763 12.3077 14.1278 12.3305 14.0797 12.3531C13.3423 12.7 12.7044 13.0001 12.0002 13.0001C11.296 13.0001 10.6581 12.7 9.92065 12.3531C9.87259 12.3305 9.82411 12.3077 9.77516 12.2848L3.12429 9.16852C3.09884 9.1566 3.07362 9.14481 3.04861 9.13312C2.68991 8.96543 2.37686 8.81909 2.11338 8.61607C1.60381 8.22346 1.2345 7.67506 1.07978 7.04751C0.999267 6.72094 0.999682 6.37711 1.00013 6.00871C1.00016 5.98127 1.00019 5.95369 1.00019 5.92597C1.00019 5.86929 1.00014 5.81339 1.00009 5.75823C0.999303 4.86518 0.998686 4.16847 1.21125 3.57338C1.62285 2.42109 2.58163 1.55016 3.76021 1.18655C4.36774 0.999117 5.08127 0.999513 6.06144 1.00006ZM6.22449 3.00012C5.01045 3.00012 4.62958 3.01136 4.34982 3.09767C3.7311 3.28855 3.27974 3.72812 3.0947 4.24615C3.01483 4.46976 3.00019 4.78235 3.00019 5.92597C3.00019 6.42918 3.00712 6.50987 3.02164 6.56877C3.06323 6.73746 3.16695 6.90304 3.33405 7.03179C3.40046 7.08295 3.49571 7.1339 3.97286 7.35746L10.6237 10.4737C11.5905 10.9267 11.799 11.0001 12.0002 11.0001C12.2014 11.0001 12.4099 10.9267 13.3767 10.4737L20.0275 7.35746C20.5047 7.1339 20.5999 7.08295 20.6663 7.03179C20.8334 6.90304 20.9372 6.73746 20.9787 6.56877C20.9933 6.50987 21.0002 6.42918 21.0002 5.92597C21.0002 4.78235 20.9856 4.46976 20.9057 4.24615C20.7206 3.72812 20.2693 3.28855 19.6506 3.09767C19.3708 3.01136 18.9899 3.00012 17.7759 3.00012H6.22449Z',
  d10: 'M17 1H7V10.9845L9.77497 12.2847L9.92045 12.353C10.6579 12.6999 11.2958 13 12 13C12.7042 13 13.3421 12.6999 14.0795 12.353L14.225 12.2847L17 10.9845L17 1Z',
  d11: 'M12 12.25C11.6556 12.25 11.356 12.3467 11.0707 12.4792C10.8078 12.6014 10.5108 12.7771 10.1759 12.9752L9.11841 13.6008C8.7702 13.8067 8.46236 13.9888 8.2193 14.1681C7.95498 14.363 7.72183 14.586 7.54973 14.8955C7.37872 15.203 7.31016 15.5201 7.27898 15.8497C7.24997 16.1564 7.24998 16.5242 7.25 16.9466V18.0534C7.24998 18.4758 7.24997 18.8436 7.27898 19.1503C7.31016 19.4799 7.37872 19.797 7.54973 20.1045C7.72183 20.414 7.95498 20.637 8.2193 20.8319C8.46236 21.0112 8.77021 21.1933 9.11842 21.3992L10.1759 22.0248C10.5107 22.2229 10.8078 22.3986 11.0707 22.5208C11.356 22.6533 11.6556 22.75 12 22.75C12.3444 22.75 12.644 22.6533 12.9293 22.5208C13.1922 22.3986 13.4893 22.2229 13.8241 22.0248L14.8816 21.3992C15.2298 21.1933 15.5376 21.0112 15.7807 20.8319C16.045 20.637 16.2782 20.414 16.4503 20.1045C16.6213 19.797 16.6898 19.4799 16.721 19.1503C16.75 18.8436 16.75 18.4758 16.75 18.0534V16.9466C16.75 16.5242 16.75 16.1564 16.721 15.8497C16.6898 15.5201 16.6213 15.203 16.4503 14.8955C16.2782 14.586 16.045 14.363 15.7807 14.1681C15.5376 13.9888 15.2298 13.8067 14.8816 13.6008L13.8241 12.9752C13.4893 12.7771 13.1922 12.6014 12.9293 12.4792C12.644 12.3467 12.3444 12.25 12 12.25Z',
  d12: 'M7.99996 2L7.97656 10.2344',
  d13: 'M16 2V10.115',
  d14: 'M16.0001 15L12.0001 13L8 15V20L12.0001 22L16.0001 20V15Z',
  d15: 'M11.9428 12L2 7.47948L2 2.09973C2 2.04465 2.04477 2 2.1 2H21.8989C21.9541 2 21.9989 2.04477 21.9989 2.1V7.50268L11.9428 12Z',
  d16: 'M2.22727 1.25C1.96808 1.25 1.71951 1.35016 1.53624 1.52845C1.35296 1.70674 1.25 1.94855 1.25 2.20068V8.04413L12 12.75L22.75 8.04413V2.20069C22.75 1.67564 22.3125 1.25001 21.7727 1.25001L2.22727 1.25ZM3.20455 6.81473V3.15136L8 3.15137V8.91397L3.20455 6.81473ZM16 8.91397L20.7955 6.81473V3.15137L16 3.15137V8.91397Z',
  d17: 'M11.6647 12.3292C11.8758 12.2236 12.1243 12.2236 12.3355 12.3292L16.3355 14.3292C16.5896 14.4562 16.7501 14.7159 16.7501 15V20C16.7501 20.2841 16.5896 20.5438 16.3355 20.6708L12.3355 22.6708C12.1243 22.7764 11.8758 22.7764 11.6647 22.6708L7.66459 20.6708C7.4105 20.5438 7.25 20.2841 7.25 20V15C7.25 14.7159 7.4105 14.4562 7.66459 14.3292L11.6647 12.3292Z',
} as const;

export const IconMedal01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-stroke-rounded IconMedal01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-duotone-rounded IconMedal01DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-twotone-rounded IconMedal01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-solid-rounded IconMedal01SolidRounded"
    >
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-bulk-rounded IconMedal01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-stroke-sharp IconMedal01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconMedal01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-01-solid-sharp IconMedal01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMedal01: TheIconSelfPack = {
  name: 'Medal01',
  StrokeRounded: IconMedal01StrokeRounded,
  DuotoneRounded: IconMedal01DuotoneRounded,
  TwotoneRounded: IconMedal01TwotoneRounded,
  SolidRounded: IconMedal01SolidRounded,
  BulkRounded: IconMedal01BulkRounded,
  StrokeSharp: IconMedal01StrokeSharp,
  SolidSharp: IconMedal01SolidSharp,
};
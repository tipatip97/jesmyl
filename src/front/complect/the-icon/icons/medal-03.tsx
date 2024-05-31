import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.5292 13.6376C11.2478 13.2125 11.6071 13 12 13C12.3929 13 12.7522 13.2125 13.4708 13.6376L14.4708 14.2292C15.2167 14.6704 15.5896 14.891 15.7948 15.26C16 15.6289 16 16.0789 16 16.979V18.021C16 18.9211 16 19.3711 15.7948 19.74C15.5896 20.109 15.2167 20.3296 14.4708 20.7708L13.4708 21.3624C12.7522 21.7875 12.3929 22 12 22C11.6071 22 11.2478 21.7875 10.5292 21.3624L9.52922 20.7708C8.78332 20.3296 8.41037 20.109 8.20519 19.74C8 19.3711 8 18.9211 8 18.021V16.979C8 16.0789 8 15.6289 8.20519 15.26C8.41037 14.891 8.78332 14.6704 9.52922 14.2292L10.5292 13.6376Z',
  d2: 'M17.2588 2.01167H6.74116C5.93143 2.01167 4.85952 1.85424 4.30576 2.69602C4 3.1608 4 3.83334 4 5.17844C4 6.32524 4 6.89864 4.20617 7.38174C4.55829 8.20684 5.34557 8.56526 6.02037 8.95504L9.31672 10.8591C10.6334 11.6197 11.2918 12 12 12C12.7082 12 13.3666 11.6197 14.6833 10.8591L17.9796 8.95504C18.6544 8.56526 19.4417 8.20684 19.7938 7.38174C20 6.89864 20 6.32524 20 5.17844C20 3.83334 20 3.1608 19.6942 2.69602C19.1405 1.85424 18.0686 2.01167 17.2588 2.01167Z',
  d3: 'M12 2V7',
  d4: 'M17.2588 2.0105H6.74116C5.93143 2.0105 4.85952 1.86882 4.30576 2.62642C4 3.04472 4 3.65001 4 4.8606C4 5.89272 4 6.40877 4.20617 6.84356C4.55829 7.58616 5.34557 7.90873 6.02037 8.25954L9.31672 9.97321C10.6334 10.6577 11.2918 11 12 11C12.7082 11 13.3666 10.6577 14.6833 9.97321L17.9796 8.25954C18.6544 7.90873 19.4417 7.58616 19.7938 6.84356C20 6.40877 20 5.89272 20 4.8606C20 3.65001 20 3.04472 19.6942 2.62642C19.1405 1.86882 18.0686 2.0105 17.2588 2.0105Z',
  d5: 'M12 2V6',
  d6: 'M11.0707 12.4792C11.356 12.3467 11.6556 12.25 12 12.25C12.3444 12.25 12.644 12.3467 12.9293 12.4792C13.1922 12.6014 13.4893 12.7771 13.8241 12.9752L14.8816 13.6008L14.8816 13.6008C15.2298 13.8067 15.5376 13.9888 15.7807 14.1681C16.045 14.363 16.2782 14.586 16.4503 14.8955C16.6213 15.203 16.6898 15.5201 16.721 15.8497C16.75 16.1564 16.75 16.5242 16.75 16.9466V16.9466V18.0534V18.0534C16.75 18.4758 16.75 18.8436 16.721 19.1503C16.6898 19.4799 16.6213 19.797 16.4503 20.1045C16.2782 20.414 16.045 20.637 15.7807 20.8319C15.5376 21.0112 15.2298 21.1933 14.8816 21.3992L13.8241 22.0248C13.4893 22.2229 13.1922 22.3986 12.9293 22.5208C12.644 22.6533 12.3444 22.75 12 22.75C11.6556 22.75 11.356 22.6533 11.0707 22.5208C10.8078 22.3986 10.5108 22.2229 10.176 22.0248L10.1759 22.0248L9.11842 21.3992C8.77021 21.1933 8.46236 21.0112 8.2193 20.8319C7.95498 20.637 7.72183 20.414 7.54973 20.1045C7.37872 19.797 7.31016 19.4799 7.27898 19.1503C7.24997 18.8436 7.24998 18.4758 7.25 18.0534V18.0534V16.9466V16.9466C7.24998 16.5242 7.24997 16.1564 7.27898 15.8497C7.31016 15.5201 7.37872 15.203 7.54973 14.8955C7.72183 14.586 7.95498 14.363 8.2193 14.1681C8.46236 13.9888 8.7702 13.8067 9.11841 13.6008L9.14736 13.5837L10.1474 12.9921L10.1759 12.9752C10.5108 12.7771 10.8078 12.6014 11.0707 12.4792Z',
  d7: 'M18.6511 1.29097C19.1921 1.36437 19.8287 1.5746 20.2724 2.18368C20.5346 2.54356 20.634 2.94841 20.6788 3.36595C20.7755 4.26649 20.7672 5.2347 20.693 6.13759C20.6171 7.06064 20.1721 7.80419 19.4 8.32189C19.0305 8.56965 18.5973 8.77224 18.3048 8.92484L14.9894 10.6541C14.3586 10.9831 13.8411 11.2531 13.3932 11.4372C12.9245 11.6298 12.4838 11.7499 12 11.7499C11.5162 11.7499 11.0755 11.6298 10.6068 11.4372C10.1589 11.2531 9.64143 10.9831 9.0106 10.6541L5.69524 8.92484C5.40268 8.77224 4.96953 8.56968 4.59998 8.32189C3.82786 7.80419 3.38292 7.06064 3.30702 6.13759C3.23278 5.2347 3.22454 4.26649 3.32119 3.36595C3.366 2.94841 3.4654 2.54356 3.72758 2.18368C4.17133 1.5746 4.80788 1.36437 5.34894 1.29097C5.85208 1.22272 6.43524 1.26035 6.75847 1.26035H10.2059C10.5818 1.26035 10.7697 1.26035 10.8865 1.37751C11.0033 1.49466 11.0033 1.68323 11.0033 2.06035V5C11.0033 5.55228 11.4495 6 12 6C12.5505 6 12.9967 5.55228 12.9967 5V2.06035C12.9967 1.68323 12.9967 1.49466 13.1135 1.37751C13.2303 1.26035 13.4182 1.26035 13.7941 1.26035H17.2415C17.5648 1.26035 18.1479 1.22272 18.6511 1.29097Z',
  d8: 'M16.0001 15L12.0001 13L8 15V20L12.0001 22L16.0001 20V15Z',
  d9: 'M4 2.01C4 2.00448 4.00448 2 4.01 2C4.01 2 4.01 2 4.01 2C4.01 2 19.9845 2 19.99 2C19.9955 2 20 2.00448 20 2.01C20 2.01552 20 7 20 7L12 10.5L4 7V2.01Z',
  d10: 'M11.6647 12.3292C11.8758 12.2236 12.1243 12.2236 12.3355 12.3292L16.3355 14.3292C16.5896 14.4562 16.7501 14.7159 16.7501 15V20C16.7501 20.2841 16.5896 20.5438 16.3355 20.6708L12.3355 22.6708C12.1243 22.7764 11.8758 22.7764 11.6647 22.6708L7.66459 20.6708C7.4105 20.5438 7.25 20.2841 7.25 20V15C7.25 14.7159 7.4105 14.4562 7.66459 14.3292L11.6647 12.3292Z',
  d11: 'M11 1.25V6H13V1.25H20C20.4142 1.25 20.75 1.58349 20.75 1.99487V7.44293L12 11.25L3.25057 7.44294L3.25 1.99495C3.24998 1.79738 3.32899 1.6079 3.46964 1.4682C3.6103 1.32849 3.80107 1.25 4 1.25H11Z',
} as const;

export const IconMedal03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-stroke-rounded IconMedal03StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-duotone-rounded IconMedal03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMedal03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-twotone-rounded IconMedal03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMedal03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-solid-rounded IconMedal03SolidRounded"
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

export const IconMedal03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-bulk-rounded IconMedal03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-stroke-sharp IconMedal03StrokeSharp"
    >
      <path 
        d={d.d8} 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-03-solid-sharp IconMedal03SolidSharp"
    >
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

export const iconPackOfMedal03: TheIconSelfPack = {
  name: 'Medal03',
  StrokeRounded: IconMedal03StrokeRounded,
  DuotoneRounded: IconMedal03DuotoneRounded,
  TwotoneRounded: IconMedal03TwotoneRounded,
  SolidRounded: IconMedal03SolidRounded,
  BulkRounded: IconMedal03BulkRounded,
  StrokeSharp: IconMedal03StrokeSharp,
  SolidSharp: IconMedal03SolidSharp,
};
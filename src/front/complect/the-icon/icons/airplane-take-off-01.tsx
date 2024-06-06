import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 20H18',
  d2: 'M3.82496 12.1661C3.54996 11.9661 3.29996 11.7161 2.99998 10.8411C2.91861 10.6241 2.61108 9.53619 2.34998 8.54109C2.12972 7.7017 1.93347 6.93555 2.02497 6.74109C2.09998 6.54109 2.19997 6.39109 2.52497 6.19109C2.72496 6.06802 3.74996 5.81609 3.94996 5.76609C4.14996 5.71609 4.42496 5.69109 4.64996 5.76609C5.07496 5.84109 5.94996 7.11609 6.17496 7.26609C6.27495 7.36609 6.59996 7.657 6.97496 7.69109C7.24997 7.71609 7.52496 7.64109 7.82497 7.51609C8.09996 7.40151 13.525 4.76609 14.025 4.54109C18.1 2.84109 21.06 5.63609 21.51 6.23609C21.975 6.81609 22.075 6.99109 21.95 7.49109C21.7884 8.01609 21.35 8.11609 21.1 8.19109C20.8499 8.26609 17.4 9.19109 16.05 9.56609C15.7551 9.6621 15.6111 9.85492 15.575 9.89109C15.4 10.1411 14.605 11.8411 14.38 12.2161C14.225 12.6161 13.8 13.1161 13.25 13.3161C12.675 13.5161 11.675 13.7411 11.45 13.8161C11.225 13.8911 10.7 14.0411 10.525 13.9911C10.3 13.9411 10.085 13.7161 10.185 13.3661C10.285 13.0161 10.475 12.0411 10.5 11.8911C10.525 11.7411 10.775 11.1161 10.5 11.0911C10.45 11.0161 9.92496 11.2411 9.14996 11.4161C8.57419 11.5782 7.9712 11.7386 7.54996 11.8411C5.92496 12.3161 5.0449 12.4411 4.84996 12.4411C4.47496 12.4411 4.19996 12.3911 3.82496 12.1661Z',
  d3: 'M2.76451 8.9129L2.47758 7.83606C2.27681 7.08259 2.17642 6.70586 2.31544 6.39339C2.55834 5.8474 3.27817 5.75288 3.78784 5.61556C4.27837 5.48339 4.52363 5.4173 4.75638 5.46509C5.31106 5.57897 5.72038 6.24969 6.08307 6.6531C6.91286 7.57606 7.31105 7.63679 8.42448 7.09951C10.3071 6.19108 12.1841 5.2697 14.0728 4.37415C16.8535 3.05563 20.2469 3.88772 22.0729 6.37949C22.4804 6.94477 22.1461 7.71815 21.5005 7.8934L16.3421 9.2833C16.0767 9.35481 15.8541 9.53632 15.7296 9.78263L14.5022 12.2106C14.2372 12.6598 13.8031 12.989 13.2954 13.1258L11.0342 13.7351C10.6785 13.8309 10.3491 13.5257 10.425 13.1704L10.8778 11.0491C10.9082 10.9068 10.7782 10.7824 10.6384 10.8201L7.59448 11.6403C5.78978 12.1265 4.88743 12.3697 4.1801 11.9703C3.47276 11.5708 3.23668 10.6848 2.76451 8.9129Z',
  d4: 'M2.25098 19.7529H18.251',
  d5: 'M4.07398 11.919C3.79898 11.719 3.54898 11.469 3.249 10.594C3.16763 10.377 2.8601 9.28912 2.599 8.29402C2.37874 7.45463 2.18249 6.68848 2.27399 6.49402C2.349 6.29402 2.44899 6.14402 2.77399 5.94402C2.97398 5.82095 3.99898 5.56902 4.19898 5.51902C4.39898 5.46902 4.67398 5.44402 4.89898 5.51902C5.32398 5.59402 6.19898 6.86902 6.42398 7.01902C6.52397 7.11902 6.84898 7.40993 7.22398 7.44402C7.49899 7.46902 7.77398 7.39402 8.07399 7.26902C8.34898 7.15444 13.774 4.51902 14.274 4.29402C18.349 2.59402 21.309 5.38902 21.759 5.98902C22.224 6.56902 22.324 6.74402 22.199 7.24402C22.0374 7.76902 21.599 7.86902 21.349 7.94402C21.0989 8.01902 17.649 8.94402 16.299 9.31902C16.0041 9.41503 15.8601 9.60785 15.824 9.64402C15.649 9.89403 14.854 11.594 14.629 11.969C14.474 12.369 14.049 12.869 13.499 13.069C12.924 13.269 11.924 13.494 11.699 13.569C11.474 13.644 10.949 13.794 10.774 13.744C10.549 13.694 10.334 13.469 10.434 13.119C10.534 12.769 10.724 11.794 10.749 11.644C10.774 11.494 11.024 10.869 10.749 10.844C10.699 10.769 10.174 10.994 9.39898 11.169C8.82321 11.3311 8.22022 11.4915 7.79898 11.594C6.17398 12.069 5.29392 12.194 5.09898 12.194C4.72398 12.194 4.44898 12.144 4.07398 11.919Z',
  d6: 'M3.82301 12.1661C3.54801 11.9661 3.29801 11.7161 2.99803 10.8411C2.91666 10.6241 2.60913 9.53619 2.34803 8.54109C2.12777 7.7017 1.93152 6.93555 2.02302 6.74109C2.09803 6.54109 2.19802 6.39109 2.52302 6.19109C2.72301 6.06802 3.74801 5.81609 3.94801 5.76609C4.14801 5.71609 4.42301 5.69109 4.64801 5.76609C5.07301 5.84109 5.94801 7.11609 6.17301 7.26609C6.273 7.36609 6.59801 7.657 6.97301 7.69109C7.24802 7.71609 7.52301 7.64109 7.82302 7.51609C8.09801 7.40151 13.523 4.76609 14.023 4.54109C18.098 2.84109 21.058 5.63609 21.508 6.23609C21.973 6.81609 22.073 6.99109 21.948 7.49109C21.7864 8.01609 21.348 8.11609 21.098 8.19109C20.8479 8.26609 17.398 9.19109 16.048 9.56609C15.7531 9.6621 15.6091 9.85492 15.573 9.89109C15.398 10.1411 14.603 11.8411 14.378 12.2161C14.223 12.6161 13.798 13.1161 13.248 13.3161C12.673 13.5161 11.673 13.7411 11.448 13.8161C11.223 13.8911 10.698 14.0411 10.523 13.9911C10.298 13.9411 10.083 13.7161 10.183 13.3661C10.283 13.0161 10.473 12.0411 10.498 11.8911C10.523 11.7411 10.773 11.1161 10.498 11.0911C10.448 11.0161 9.92301 11.2411 9.14801 11.4161C8.57224 11.5782 7.96925 11.7386 7.54801 11.8411C5.92301 12.3161 5.04295 12.4411 4.84801 12.4411C4.47301 12.4411 4.19801 12.3911 3.82301 12.1661Z',
  d7: 'M22.2257 6.33097C20.256 3.64319 16.6024 2.74953 13.608 4.1694C12.3446 4.76845 11.0848 5.37984 9.82744 5.99004C9.20329 6.29294 8.5797 6.59558 7.95663 6.89624C7.39875 7.16544 7.15473 7.21017 6.98787 7.17928C6.82519 7.14917 6.61644 7.02423 6.20434 6.56585C5.99745 6.33574 5.81802 6.08267 5.60658 5.85627C5.37302 5.6062 5.04222 5.31182 4.60638 5.22234C4.40557 5.18111 4.21719 5.19432 4.03041 5.22765C3.53114 5.31672 2.98821 5.44586 2.51619 5.63369C1.81185 5.91397 1.41488 6.51391 1.52366 7.26779C1.56071 7.52455 1.64244 7.83119 1.73666 8.18472L2.04037 9.32451C2.26832 10.18 2.45267 10.8719 2.67239 11.3965C2.90114 11.9426 3.19539 12.377 3.68369 12.6527C4.17037 12.9275 4.69776 12.9589 5.29103 12.8801C5.86337 12.8041 6.56644 12.6147 7.43928 12.3795L9.87601 11.7229C9.94821 11.7035 10.0154 11.7672 9.99983 11.8403L9.68543 13.3131C9.52847 14.0483 10.2112 14.6542 10.9137 14.4649L13.1749 13.8557C13.8076 13.6852 14.3502 13.2746 14.6823 12.7118C14.6878 12.7024 14.693 12.6929 14.6979 12.6832L15.9252 10.2552C15.9859 10.1351 16.094 10.0475 16.2216 10.0131L21.3809 8.62297C22.3214 8.36766 22.8646 7.21732 22.228 6.33414L22.2257 6.33097Z',
  d8: 'M1 20C1 19.4477 1.44772 19 2 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H2C1.44772 21 1 20.5523 1 20Z',
  d9: 'M2 19H18',
  d10: 'M2.00487 7.98943L4.50039 6.49944C4.50469 6.49687 4.51023 6.49789 4.51335 6.50181L6.50204 9.00531L13.9769 5.54077C17.9764 3.75212 22.1063 6.86643 21.9999 8.24301C21.9435 8.4967 21.8524 8.98381 21.2168 9.17502L15.0136 11.0097L14.0037 13.5158C14.0026 13.5185 14.0003 13.5206 13.9975 13.5215L9.54605 14.9928C9.53827 14.9954 9.53086 14.988 9.5334 14.9802L10.5 12.0119L4.00766 13.5175C4.00273 13.5186 3.99772 13.5159 3.996 13.5111L2.0006 8.00142C1.99897 7.99692 2.00076 7.99189 2.00487 7.98943Z',
  d11: 'M13.5042 4.94079C16.6045 3.47407 20.3847 4.3991 22.425 7.18318L22.4285 7.18793C23.1774 8.22686 22.5359 9.5607 21.4541 9.86148L15.5598 11.6153L14.6945 13.7785C14.6126 13.9833 14.4446 14.1417 14.2353 14.2115L9.73531 15.7115C9.46581 15.8013 9.16868 15.7312 8.96781 15.5303C8.76693 15.3294 8.69679 15.0323 8.78662 14.7628L9.36374 13.0314L4.16674 14.2307C3.79751 14.3159 3.42274 14.1124 3.29325 13.7563L1.29329 8.25625C1.17056 7.91874 1.30431 7.5416 1.61226 7.35683L4.11226 5.85683C4.43416 5.66369 4.84928 5.73829 5.08379 6.03143L6.71219 8.06692C7.72383 7.58859 12.1749 5.55012 13.5042 4.94079Z',
  d12: 'M17.998 19.75H1.99805V17.75H17.998V19.75Z',
};

export const IconAirplaneTakeOff01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-stroke-rounded IconAirplaneTakeOff01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneTakeOff01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-duotone-rounded IconAirplaneTakeOff01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneTakeOff01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-twotone-rounded IconAirplaneTakeOff01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneTakeOff01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-solid-rounded IconAirplaneTakeOff01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconAirplaneTakeOff01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-bulk-rounded IconAirplaneTakeOff01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAirplaneTakeOff01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-stroke-sharp IconAirplaneTakeOff01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneTakeOff01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-take-off-01-solid-sharp IconAirplaneTakeOff01SolidSharp"
    >
      <path 
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

export const iconPackOfAirplaneTakeOff01: TheIconSelfPack = {
  name: 'AirplaneTakeOff01',
  StrokeRounded: IconAirplaneTakeOff01StrokeRounded,
  DuotoneRounded: IconAirplaneTakeOff01DuotoneRounded,
  TwotoneRounded: IconAirplaneTakeOff01TwotoneRounded,
  SolidRounded: IconAirplaneTakeOff01SolidRounded,
  BulkRounded: IconAirplaneTakeOff01BulkRounded,
  StrokeSharp: IconAirplaneTakeOff01StrokeSharp,
  SolidSharp: IconAirplaneTakeOff01SolidSharp,
};
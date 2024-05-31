import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.98801 6.02675C6.92211 5.10619 7.4891 3.28508 9.04497 2.52362C9.68654 2.13388 11.4476 1.53042 13.1319 2.60569C14.7918 3.66538 14.9038 5.22776 15.0082 6.01639',
  d2: 'M17.1655 22.0011C17.1202 20.365 17.2234 20.2029 17.343 19.839C17.4626 19.475 18.2993 18.1625 18.5953 17.2248C19.553 14.1909 18.6604 13.5456 17.4703 12.6853C16.1506 11.7312 13.7759 11.2574 12.5414 11.362V6.52308C12.5414 5.69965 11.7521 5.02637 10.9094 5.02637C10.0666 5.02637 9.29184 5.69965 9.29184 6.52308V14.8349L7.57253 13.3441C7.01296 12.751 6.11368 12.6909 5.49994 13.2303C4.91833 13.7415 4.83345 14.6024 5.30449 15.2127L6.43511 16.6774M9.24463 22.0011V21.1478C9.2822 20.095 8.49833 19.4079 7.476 18.0344C7.40234 17.9355 7.33066 17.8398 7.26087 17.7473M7.26087 17.7473C6.95112 17.3364 6.67858 16.9864 6.43511 16.6774M7.26087 17.7473L8.28395 19.0727M7.26087 17.7473L6.43511 16.6774M6.43511 16.6774C5.93524 16.0432 5.5579 15.5822 5.2326 15.1243',
  d3: 'M18.1237 18.3358C18.7424 17.0806 19.5891 14.6242 18.4059 13.4675C16.5408 11.6442 13.9322 11.3104 12.4375 11.375V6.4875C12.4375 5.66598 11.7519 5 10.9062 5C10.0606 5 9.375 5.66598 9.375 6.4875V15.2L7.43548 13.2206C6.80196 12.6764 5.84454 12.7666 5.32329 13.4195C4.88962 13.9627 4.89254 14.7354 5.33031 15.2753L8.20131 18.9601C8.70147 19.602 8.95157 19.923 9.08905 20.2977C9.10124 20.331 9.11275 20.3645 9.12355 20.3982C9.24533 20.7783 9.24533 21.1856 9.24533 22H17.1554V20.6247C17.1554 19.8379 17.7889 19.0148 18.1237 18.3358Z',
  d4: 'M17.166 22.0001C17.1207 20.364 17.2239 20.2019 17.3435 19.838C17.4631 19.474 18.2998 18.1615 18.5958 17.2238C19.5535 14.1899 18.6609 13.5446 17.4708 12.6843C16.1511 11.7302 13.7764 11.2564 12.5419 11.361V6.5221C12.5419 5.69867 11.7526 5.02539 10.9099 5.02539C10.0671 5.02539 9.29233 5.69867 9.29233 6.5221V14.8339L7.57302 13.3431C7.01345 12.75 6.11417 12.6899 5.50043 13.2293C4.91882 13.7405 4.83394 14.6014 5.30498 15.2117L6.4356 16.6764M6.4356 16.6764C6.67907 16.9854 6.95161 17.3354 7.26136 17.7463M6.4356 16.6764L7.26136 17.7463M6.4356 16.6764C5.93573 16.0422 5.55839 15.5812 5.23309 15.1233M9.24512 22.0001V21.1468C9.28269 20.094 8.49882 19.4069 7.47649 18.0334C7.40283 17.9345 7.33115 17.8388 7.26136 17.7463M7.26136 17.7463L8.28444 19.0717',
  d5: 'M15 6C15 3.79086 13.2091 2 11 2C8.79086 2 7 3.79086 7 6',
  d6: 'M17.1655 22.0011C17.1202 20.365 17.2234 20.2029 17.343 19.839C17.4626 19.475 18.2993 18.1625 18.5953 17.2248C19.553 14.1909 18.6604 13.5456 17.4703 12.6853C16.1506 11.7312 13.7759 11.2574 12.5414 11.362V6.52308C12.5414 5.69965 11.7521 5.02637 10.9094 5.02637C10.0666 5.02637 9.29184 5.69965 9.29184 6.52308V14.8349L7.57253 13.3441C7.01296 12.751 6.11368 12.6909 5.49994 13.2303C4.91833 13.7415 4.83345 14.6024 5.30449 15.2127L6.43511 16.6774M6.43511 16.6774C6.67858 16.9864 6.95112 17.3364 7.26087 17.7473M6.43511 16.6774L7.26087 17.7473M6.43511 16.6774C5.93524 16.0432 5.5579 15.5822 5.2326 15.1243M9.24463 22.0011V21.1478C9.2822 20.095 8.49833 19.4079 7.476 18.0344C7.40234 17.9355 7.33066 17.8398 7.26087 17.7473M7.26087 17.7473L8.28395 19.0727',
  d7: 'M8.55769 6.74038C8.55769 5.43402 9.61671 4.375 10.9231 4.375C12.2294 4.375 13.2885 5.43402 13.2885 6.74038V10.7312C14.912 10.8063 17.1672 11.3327 18.9302 13.0562C19.7897 13.8965 19.8333 15.1207 19.6818 16.104C19.5249 17.1218 19.125 18.1257 18.7964 18.7924C18.7002 18.9874 18.5856 19.187 18.4811 19.3684C18.3763 19.5505 18.2685 19.7379 18.1809 19.9081C17.9932 20.2727 17.9054 20.5424 17.9054 20.7497C17.906 21.0228 17.9068 21.3803 17.8299 21.6334C17.6602 22.1924 17.2228 22.6298 16.6638 22.7995C16.4107 22.8764 16.1254 22.8757 15.8522 22.8751L10.2698 22.8641C9.68218 22.8641 9.20009 22.4529 9.02367 22.2473C8.86788 22.0609 8.77028 21.817 8.6981 21.6211C8.61845 21.4049 8.49691 21.0306 8.38493 20.681C8.29718 20.4418 8.13853 20.2248 7.60969 19.546L4.74271 15.8665C4.08805 15.0532 4.08534 13.8931 4.73717 13.0766C5.52325 12.0919 6.96819 11.9555 7.92416 12.7766L7.92555 12.7778L8.55769 13.3235V6.74038Z',
  d8: 'M11 3.125C9.34315 3.125 8 4.46815 8 6.125C8 6.67728 7.55228 7.125 7 7.125C6.44772 7.125 6 6.67728 6 6.125C6 3.36358 8.23858 1.125 11 1.125C13.7614 1.125 16 3.36358 16 6.125C16 6.67728 15.5523 7.125 15 7.125C14.4477 7.125 14 6.67728 14 6.125C14 4.46815 12.6569 3.125 11 3.125Z',
  d9: 'M17.1508 22.0002V19.9736L17.9383 18.6211C18.2067 18.1602 18.4216 17.6699 18.588 17.1629C18.9148 16.1669 19.1158 15.5289 18.9308 14.4883C18.8486 14.026 18.6213 13.672 18.3105 13.3762C17.078 12.2031 15.3643 11.5509 13.6724 11.3853C13.3393 11.3527 12.9772 11.3441 12.5354 11.3568V6.71976C12.5867 5.90948 11.9916 5.07814 11.0532 5.0036C10.1204 4.96347 9.3206 5.66067 9.3206 6.44858V14.839L7.79897 13.5089C7.48185 13.2307 7.13119 12.9528 6.67117 12.901C6.51349 12.8832 6.36547 12.8823 6.22075 12.9006C5.66369 13.0069 5.34589 13.3689 5.11231 13.8069C4.87435 14.3357 5.02268 14.908 5.43578 15.4L9.25984 20.0014V22.0002',
  d10: 'M7.01318 5.99769C7.01318 3.78983 8.79987 2 11.0039 2C13.2078 2 14.9945 3.78983 14.9945 5.99769',
  d11: 'M8.55771 6.61538C8.55771 5.30902 9.61673 4.25 10.9231 4.25C12.2295 4.25 13.2885 5.30902 13.2885 6.61538V10.6062C14.912 10.6813 17.1672 11.2077 18.9302 12.9312C19.7898 13.7715 19.8333 14.9957 19.6818 15.979C19.5249 16.9968 19.1251 18.0007 18.7964 18.6674L18.7849 18.6906L17.9054 20.2023V22.75H8.49535V20.2704L4.74773 15.7477C4.08805 14.9341 4.08369 13.7701 4.73718 12.9516C5.52327 11.9669 6.9682 11.8305 7.92418 12.6516L7.92557 12.6528L8.55771 13.1985V6.61538Z',
  d12: 'M11 2.75C9.20507 2.75 7.75 4.20507 7.75 6H6.25C6.25 3.37665 8.37665 1.25 11 1.25C13.6234 1.25 15.75 3.37665 15.75 6H14.25C14.25 4.20507 12.7949 2.75 11 2.75Z',
} as const;

export const IconTap01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-stroke-rounded IconTap01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTap01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-duotone-rounded IconTap01DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-twotone-rounded IconTap01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTap01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-solid-rounded IconTap01SolidRounded"
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

export const IconTap01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-bulk-rounded IconTap01BulkRounded"
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

export const IconTap01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-stroke-sharp IconTap01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-01-solid-sharp IconTap01SolidSharp"
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

export const iconPackOfTap01: TheIconSelfPack = {
  name: 'Tap01',
  StrokeRounded: IconTap01StrokeRounded,
  DuotoneRounded: IconTap01DuotoneRounded,
  TwotoneRounded: IconTap01TwotoneRounded,
  SolidRounded: IconTap01SolidRounded,
  BulkRounded: IconTap01BulkRounded,
  StrokeSharp: IconTap01StrokeSharp,
  SolidSharp: IconTap01SolidSharp,
};
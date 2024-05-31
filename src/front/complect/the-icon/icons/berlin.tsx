import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 5.3H9M15 5.3H22M22 9.7H16.4396C15.3109 9.7 14.7465 9.7 14.4465 9.29739C14.1464 8.89478 14.2571 8.28603 14.4784 7.06855L14.5216 6.83145C14.7429 5.61397 14.8536 5.00522 14.5535 4.60261C14.2535 4.2 13.6891 4.2 12.5604 4.2H11.4396C10.3109 4.2 9.74652 4.2 9.44646 4.60261C9.1464 5.00522 9.25709 5.61397 9.47845 6.83145L9.52155 7.06855C9.74291 8.28603 9.8536 8.89478 9.55354 9.29739C9.25348 9.7 8.68912 9.7 7.56039 9.7H2M13.5 4.2C13.5 3.65 13.7 2.44 14.5 2M10.5 4.2C10.5 3.65 10.3 2.44 9.5 2M3 5.3V22M21 5.3V22M18 9.7V22M15 22V9.7H9V22M6 9.7V22M2 22H22',
  d2: 'M9 9H3V22H9V9Z',
  d3: 'M21 9H15V22H21V9Z',
  d4: 'M3 9V5H9.26379C9.26746 5.33571 9.35613 5.77904 9.47876 6.39222L9.52187 6.60777C9.74323 7.71456 9.85391 8.26798 9.55386 8.63399H14.4468C14.1467 8.26798 14.2574 7.71457 14.4788 6.60777L14.5219 6.39223C14.6445 5.77905 14.7332 5.33571 14.7368 5H21V9H3Z',
  d5: 'M2 5H9',
  d6: 'M15 5L22 5',
  d7: 'M9 9H15',
  d8: 'M22 9H16.4396C15.3109 9 14.7465 9 14.4465 8.63399C14.1464 8.26798 14.2571 7.71457 14.4784 6.60777L14.5216 6.39223C14.7429 5.28543 14.8536 4.73202 14.5535 4.36601C14.2535 4 13.6891 4 12.5604 4H11.4396C10.3109 4 9.74652 4 9.44646 4.36601C9.1464 4.73202 9.25709 5.28543 9.47845 6.39223L9.52155 6.60777C9.74291 7.71457 9.8536 8.26798 9.55354 8.63399C9.25348 9 8.68912 9 7.56039 9H2',
  d9: 'M13.5 4C13.5 3.5 13.7 2.4 14.5 2',
  d10: 'M10.5 4C10.5 3.5 10.3 2.4 9.5 2',
  d11: 'M3 5V22',
  d12: 'M21 5V22',
  d13: 'M18 9V22',
  d14: 'M15 9V22',
  d15: 'M6 9V22',
  d16: 'M9 9V22',
  d17: 'M2 22H22',
  d18: 'M8.817 1.66475C9.00296 1.29427 9.45519 1.1441 9.8271 1.32934C10.4595 1.64433 10.8083 2.20986 10.9956 2.69192C11.0397 2.80555 11.077 2.91962 11.1082 3.03194C11.1433 3.15834 11.2557 3.25015 11.3869 3.25016L11.4375 3.25016H12.5625L12.6131 3.25016C12.7443 3.25015 12.8567 3.15834 12.8918 3.03194C12.923 2.91962 12.9603 2.80555 13.0044 2.69192C13.1917 2.20986 13.5405 1.64433 14.1729 1.32934C14.5448 1.1441 14.997 1.29427 15.183 1.66475C15.369 2.03524 15.2182 2.48574 14.8463 2.67098C14.6756 2.756 14.5225 2.94047 14.4086 3.23341C14.3769 3.31513 14.4256 3.40327 14.5073 3.43511C14.7396 3.52565 14.9613 3.66672 15.1456 3.89068C15.4672 4.28145 15.518 4.73379 15.4953 5.1429C15.4744 5.51942 15.382 5.97923 15.2794 6.4901L15.2794 6.49012L15.2695 6.53948L15.0687 7.53948L15.0611 7.57771C14.9905 7.92956 14.9247 8.2572 14.8367 8.52217C14.739 8.81632 14.5889 9.11636 14.2985 9.35351C14.0081 9.59066 13.6833 9.67849 13.3746 9.71624C13.0965 9.75025 12.7611 9.75021 12.4009 9.75017L12.3618 9.75016H11.6382L11.5991 9.75017C11.2389 9.75021 10.9035 9.75025 10.6254 9.71624C10.3167 9.67849 9.99192 9.59066 9.70153 9.35351C9.41114 9.11636 9.261 8.81632 9.16329 8.52217C9.07528 8.2572 9.00954 7.92955 8.93894 7.57769L8.93127 7.53948L8.7305 6.53948L8.72059 6.49012C8.61796 5.97924 8.5256 5.51943 8.5047 5.1429C8.48198 4.73379 8.53284 4.28145 8.85442 3.89068C9.03874 3.66672 9.26041 3.52565 9.49272 3.43511C9.57441 3.40327 9.62312 3.31513 9.59136 3.23341C9.47753 2.94047 9.32439 2.756 9.1537 2.67098C8.78179 2.48574 8.63105 2.03524 8.817 1.66475Z',
  d19: 'M16.993 5.22605C16.966 5.71188 16.8552 6.26293 16.7622 6.72482L16.5229 7.9168C16.4593 8.23419 16.3779 8.64072 16.2602 8.99502C16.1636 9.28602 16.1152 9.43154 16.1313 9.5101C16.1507 9.60492 16.1917 9.6617 16.2755 9.70999C16.345 9.75 16.4789 9.75 16.7467 9.75H22C22.4142 9.75 22.75 9.41421 22.75 9C22.75 8.58579 22.4142 8.25 22 8.25C21.8619 8.25 21.75 8.13807 21.75 8V6C21.75 5.86193 21.8619 5.75 22 5.75C22.4142 5.75 22.75 5.41421 22.75 5C22.75 4.58579 22.4142 4.25 22 4.25H17.6645C17.3386 4.25 17.1756 4.25 17.0878 4.33787C16.9999 4.42575 16.9999 4.61105 16.9999 4.98166C16.9999 5.06799 16.9972 5.14977 16.993 5.22605Z',
  d20: 'M7.73977 8.99502C7.62208 8.6407 7.54065 8.2342 7.47707 7.91679L7.23776 6.72484C7.14484 6.26294 7.03397 5.71188 7.007 5.22605C7.00277 5.14977 7.00006 5.06799 7.00007 4.98166C7.00009 4.61105 7.00011 4.42575 6.91224 4.33787C6.82437 4.25 6.6614 4.25 6.33546 4.25H2C1.58579 4.25 1.25 4.58579 1.25 5C1.25 5.41421 1.58579 5.75 2 5.75C2.13807 5.75 2.25 5.86193 2.25 6V8C2.25 8.13807 2.13807 8.25 2 8.25C1.58579 8.25 1.25 8.58579 1.25 9C1.25 9.41421 1.58579 9.75 2 9.75H7.25326C7.52107 9.75 7.65497 9.75 7.72447 9.70999C7.80834 9.6617 7.84931 9.60492 7.8687 9.51011C7.88476 9.43154 7.83643 9.28603 7.73977 8.99502Z',
  d21: 'M1 21.75C1 21.1977 1.44772 20.75 2 20.75C2.13807 20.75 2.25 20.6381 2.25 20.5V11.6C2.25 11.3172 2.25 11.1757 2.33787 11.0879C2.42574 11 2.56716 11 2.85 11H6.15C6.43284 11 6.57426 11 6.66213 11.0879C6.75 11.1757 6.75 11.3172 6.75 11.6V20.15C6.75 20.4328 6.75 20.5743 6.83787 20.6621C6.92574 20.75 7.06716 20.75 7.35 20.75H7.65C7.93284 20.75 8.07426 20.75 8.16213 20.6621C8.25 20.5743 8.25 20.4328 8.25 20.15V11.6C8.25 11.3172 8.25 11.1757 8.33787 11.0879C8.42574 11 8.56716 11 8.85 11H9.15C9.43284 11 9.57426 11 9.66213 11.0879C9.75 11.1757 9.75 11.3172 9.75 11.6V20.15C9.75 20.4328 9.75 20.5743 9.83787 20.6621C9.92574 20.75 10.0672 20.75 10.35 20.75H13.65C13.9328 20.75 14.0743 20.75 14.1621 20.6621C14.25 20.5743 14.25 20.4328 14.25 20.15V11.6C14.25 11.3172 14.25 11.1757 14.3379 11.0879C14.4257 11 14.5672 11 14.85 11H15.15C15.4328 11 15.5743 11 15.6621 11.0879C15.75 11.1757 15.75 11.3172 15.75 11.6V20.15C15.75 20.4328 15.75 20.5743 15.8379 20.6621C15.9257 20.75 16.0672 20.75 16.35 20.75H16.65C16.9328 20.75 17.0743 20.75 17.1621 20.6621C17.25 20.5743 17.25 20.432 17.25 20.1474V11.6026C17.25 11.318 17.25 11.1757 17.3379 11.0879C17.4257 11 17.5672 11 17.85 11H21.15C21.4328 11 21.5743 11 21.6621 11.0879C21.75 11.1757 21.75 11.3172 21.75 11.6V20.5C21.75 20.6381 21.8619 20.75 22 20.75C22.5523 20.75 23 21.1977 23 21.75C23 22.3023 22.5523 22.75 22 22.75H2C1.44772 22.75 1 22.3023 1 21.75Z',
  d22: 'M16.993 5.22605C16.966 5.71188 16.8552 6.26293 16.7622 6.72482L16.5229 7.9168C16.4593 8.23419 16.3779 8.64072 16.2602 8.99502C16.2483 9.03101 16.2355 9.06803 16.2217 9.10593C16.1072 9.42171 16.0499 9.57961 16.1096 9.6648C16.1693 9.75 16.3227 9.75 16.6293 9.75H22C22.4142 9.75 22.75 9.41421 22.75 9C22.75 8.58579 22.4142 8.25 22 8.25C21.9535 8.25 21.9303 8.25 21.911 8.24616C21.8316 8.23038 21.7696 8.16836 21.7538 8.08902C21.75 8.0697 21.75 8.04647 21.75 8V6C21.75 5.95353 21.75 5.9303 21.7538 5.91098C21.7696 5.83164 21.8316 5.76962 21.911 5.75384C21.9303 5.75 21.9535 5.75 22 5.75C22.4142 5.75 22.75 5.41421 22.75 5C22.75 4.58579 22.4142 4.25 22 4.25H17.4191C17.1985 4.25 17.0883 4.25 17.029 4.31307C16.9698 4.37614 16.9773 4.49621 16.9924 4.73636C17.0036 4.91524 17.0011 5.08062 16.993 5.22605Z',
  d23: 'M7.73977 8.99502C7.62208 8.6407 7.54065 8.2342 7.47707 7.91679L7.23776 6.72484C7.14484 6.26294 7.03397 5.71188 7.007 5.22605C6.99893 5.08062 6.99643 4.91524 7.00763 4.73636C7.02268 4.49621 7.0302 4.37614 6.97095 4.31307C6.91171 4.25 6.80145 4.25 6.58094 4.25H2C1.58579 4.25 1.25 4.58579 1.25 5C1.25 5.41421 1.58579 5.75 2 5.75C2.04647 5.75 2.0697 5.75 2.08902 5.75384C2.16836 5.76962 2.23038 5.83164 2.24616 5.91098C2.25 5.9303 2.25 5.95353 2.25 6V8C2.25 8.04647 2.25 8.0697 2.24616 8.08902C2.23038 8.16836 2.16836 8.23038 2.08902 8.24616C2.0697 8.25 2.04647 8.25 2 8.25C1.58579 8.25 1.25 8.58579 1.25 9C1.25 9.41421 1.58579 9.75 2 9.75H7.37069C7.67734 9.75 7.83066 9.75 7.89038 9.6648C7.9501 9.57961 7.89283 9.42171 7.77827 9.10593C7.76452 9.06803 7.75172 9.03101 7.73977 8.99502Z',
  d24: 'M21.75 11.4V20.75H17.25V11.4C17.25 11.2114 17.25 11.1172 17.3086 11.0586C17.3672 11 17.4614 11 17.65 11H21.35C21.5386 11 21.6328 11 21.6914 11.0586C21.75 11.1172 21.75 11.2114 21.75 11.4Z',
  d25: 'M6.75 11.4V20.75H2.25V11.4C2.25 11.2114 2.25 11.1172 2.30858 11.0586C2.36716 11 2.46144 11 2.65 11H6.35C6.53856 11 6.63284 11 6.69142 11.0586C6.75 11.1172 6.75 11.2114 6.75 11.4Z',
  d26: 'M15.75 11.4V20.75H14.25V11.4C14.25 11.2114 14.25 11.1172 14.3086 11.0586C14.3672 11 14.4614 11 14.65 11H15.35C15.5386 11 15.6328 11 15.6914 11.0586C15.75 11.1172 15.75 11.2114 15.75 11.4Z',
  d27: 'M9.75 11.4V20.75H8.25V11.4C8.25 11.2114 8.25 11.1172 8.30858 11.0586C8.36716 11 8.46144 11 8.65 11H9.35C9.53856 11 9.63284 11 9.69142 11.0586C9.75 11.1172 9.75 11.2114 9.75 11.4Z',
  d28: 'M1 21.75C1 21.1977 1.44772 20.75 2 20.75H22C22.5523 20.75 23 21.1977 23 21.75C23 22.3023 22.5523 22.75 22 22.75H2C1.44772 22.75 1 22.3023 1 21.75Z',
  d29: 'M2 5.5H9',
  d30: 'M15 5.5L22 5.5',
  d31: 'M14 9.00001H22M14 9.00001L15 4H9L10 9.00001M14 9.00001H10M10 9.00001H2',
  d32: 'M4 5V22',
  d33: 'M20 5V22',
  d34: 'M17 9V22',
  d35: 'M14 9V22',
  d36: 'M7 9V22',
  d37: 'M10 9V22',
  d38: 'M8.42 3.69528C8.56245 3.52152 8.77531 3.42078 9.00001 3.42078H9.60695L9.60057 3.40407C9.48718 3.11112 9.33462 2.92666 9.16459 2.84164L9.83541 1.5C10.4654 1.81498 10.8128 2.38052 10.9994 2.86257C11.0723 3.05076 11.1263 3.24017 11.1652 3.42078H12.8348C12.8737 3.24017 12.9277 3.05076 13.0006 2.86257C13.1872 2.38052 13.5346 1.81498 14.1646 1.5L14.8354 2.84164C14.6654 2.92666 14.5128 3.11112 14.3994 3.40407L14.393 3.42078H15C15.2247 3.42078 15.4376 3.52152 15.58 3.69528C15.7225 3.86905 15.7795 4.09753 15.7354 4.31786L14.7354 9.31788C14.6653 9.66844 14.3575 9.92079 14 9.92079H10C9.6425 9.92079 9.33468 9.66844 9.26457 9.31788L8.26457 4.31786C8.2205 4.09753 8.27755 3.86905 8.42 3.69528Z',
  d39: 'M22 22.5H2V20.5H22V22.5Z',
  d40: 'M3.25 11V22.5H7.75V11H3.25Z',
  d41: 'M10.75 11H9.25V22.5H10.75V11Z',
  d42: 'M14.75 11H13.25V22.5H14.75V11Z',
  d43: 'M20.75 11H16.25V22.5H20.75V11Z',
  d44: 'M16.8896 4.9209H22V6.4209H20.75V8.42091H22V9.92091H15.8543C15.9003 9.80693 15.9363 9.68736 15.9612 9.56317L16.8896 4.9209Z',
  d45: 'M7.1104 4.9209L8.03886 9.56317C8.06369 9.68736 8.09972 9.80693 8.14575 9.92091H2V8.42091H3.25V6.4209H2V4.9209H7.1104Z',
} as const;

export const IconBerlinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-stroke-rounded IconBerlinStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBerlinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-duotone-rounded IconBerlinDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBerlinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-twotone-rounded IconBerlinTwotoneRounded"
    >
      <path 
        d={d.d5} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBerlinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-solid-rounded IconBerlinSolidRounded"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBerlinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-bulk-rounded IconBerlinBulkRounded"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      </g>
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBerlinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-stroke-sharp IconBerlinStrokeSharp"
    >
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d33} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d34} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d35} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d36} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d37} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBerlinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="berlin-solid-sharp IconBerlinSolidSharp"
    >
      <path 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d39} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d40} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d41} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d42} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d43} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d44} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d45} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBerlin: TheIconSelfPack = {
  name: 'Berlin',
  StrokeRounded: IconBerlinStrokeRounded,
  DuotoneRounded: IconBerlinDuotoneRounded,
  TwotoneRounded: IconBerlinTwotoneRounded,
  SolidRounded: IconBerlinSolidRounded,
  BulkRounded: IconBerlinBulkRounded,
  StrokeSharp: IconBerlinStrokeSharp,
  SolidSharp: IconBerlinSolidSharp,
};
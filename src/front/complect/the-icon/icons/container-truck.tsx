import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 9V11',
  d2: 'M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2 16.5355 2 15.357 2 13V9C2 6.64298 2 5.46447 2.73223 4.73223C3.46447 4 4.64298 4 7 4H10.3C11.4168 4 11.9752 4 12.4271 4.14683C13.3404 4.44358 14.0564 5.15964 14.3532 6.07295C14.5 6.52485 14.5 7.08323 14.5 8.2C14.5 8.94451 14.5 9.31677 14.5979 9.61803C14.7957 10.2269 15.2731 10.7043 15.882 10.9021C16.1832 11 16.5555 11 17.3 11H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M9 18H15',
  d3: 'M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11',
  d4: 'M6 9V11',
  d5: 'M2 9V13C2 15.357 2 16.5355 2.73223 17.2678C3.2191 17.7546 3.90328 17.9178 5 17.9724C5.01474 16.8806 5.90463 16 7 16C8.10457 16 9 16.8954 9 18H15C15 16.8954 15.8954 16 17 16C18.0954 16 18.9851 16.8806 18.9998 17.9725C20.0965 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H7C4.64298 4 3.46447 4 2.73223 4.73223C2 5.46447 2 6.64298 2 9Z',
  d6: 'M17 15.375C15.6193 15.375 14.5 16.4943 14.5 17.875C14.5 19.2557 15.6193 20.375 17 20.375C18.3807 20.375 19.5 19.2557 19.5 17.875C19.5 16.4943 18.3807 15.375 17 15.375Z',
  d7: 'M7 15.375C5.61929 15.375 4.5 16.4943 4.5 17.875C4.5 19.2557 5.61929 20.375 7 20.375C8.38071 20.375 9.5 19.2557 9.5 17.875C9.5 16.4943 8.38071 15.375 7 15.375Z',
  d8: 'M10.439 3.62503C11.421 3.62465 12.0918 3.62438 12.6588 3.80881C13.394 4.04796 14.027 4.50471 14.4835 5.10485C14.5899 5.24465 14.643 5.31456 14.706 5.34577C14.7689 5.37698 14.847 5.37698 15.0032 5.37698L16.1185 5.37698C16.8059 5.37696 17.3946 5.37694 17.883 5.42631C18.4051 5.47909 18.8933 5.59411 19.3593 5.87273C19.8252 6.15134 20.1579 6.52715 20.4518 6.96231C20.7268 7.36945 21.0059 7.88835 21.3317 8.49425L22.6305 10.909C22.7156 11.0672 22.7539 11.2381 22.75 11.4058V13.4397C22.75 14.5737 22.75 15.5006 22.6518 16.2322C22.5491 16.997 22.3268 17.6601 21.7981 18.1893C21.6456 18.3421 21.4762 18.4708 21.2948 18.5793C21.0392 18.7323 20.9114 18.8087 20.8081 18.7453C20.7049 18.682 20.717 18.5047 20.7412 18.1503C20.747 18.0646 20.75 17.9781 20.75 17.8908C20.75 15.8175 19.0711 14.1367 17 14.1367C14.9289 14.1367 13.25 15.8175 13.25 17.8908C13.25 18.1263 13.2717 18.3567 13.3131 18.5802C13.3617 18.8423 13.386 18.9734 13.3267 19.0454C13.2674 19.1175 13.1454 19.1186 12.9015 19.1208C12.3007 19.1264 11.6993 19.1264 11.0985 19.1208C10.8546 19.1186 10.7326 19.1175 10.6733 19.0454C10.614 18.9734 10.6383 18.8423 10.6869 18.5802C10.7283 18.3567 10.75 18.1263 10.75 17.8908C10.75 15.8175 9.07107 14.1367 7 14.1367C4.92893 14.1367 3.25 15.8175 3.25 17.8908C3.25 17.9781 3.25297 18.0646 3.25882 18.1503C3.28299 18.5048 3.29507 18.682 3.19185 18.7453C3.08863 18.8087 2.96083 18.7323 2.70524 18.5793C2.52377 18.4708 2.35444 18.3421 2.20191 18.1893C1.67321 17.6601 1.45093 16.997 1.34822 16.2322C1.24996 15.5005 1.24998 14.5738 1.25 13.4397V9.32769C1.24998 8.19362 1.24996 7.26685 1.34822 6.53519C1.45093 5.77039 1.67321 5.10731 2.20191 4.57803C2.7306 4.04875 3.39294 3.82622 4.15689 3.7234C4.88775 3.62503 5.81348 3.62505 6.94631 3.62507L10.439 3.62503ZM15.3031 7.43868C15.3618 7.37921 15.4593 7.37921 15.6542 7.37921H16.0713C16.819 7.37921 17.306 7.38038 17.6821 7.41841C18.0358 7.45416 18.2075 7.51618 18.3337 7.59167C18.46 7.66716 18.5959 7.7891 18.795 8.08388C19.0068 8.39738 19.2387 8.82613 19.5932 9.48515L19.893 10.0426C20.0347 10.306 20.1056 10.4378 20.0473 10.5353C19.9891 10.6329 19.8397 10.6329 19.5408 10.6329H17.3C16.4971 10.6329 16.2735 10.6236 16.1137 10.5716C15.7332 10.4478 15.4348 10.1491 15.3112 9.76817C15.2593 9.60818 15.25 9.24519 15.25 8.44141C15.2501 8.20982 15.2502 7.99552 15.2479 7.79579C15.2456 7.59737 15.2444 7.49816 15.3031 7.43868ZM7.00013 8.375C7.00013 7.82272 6.55242 7.375 6.00013 7.375C5.44785 7.375 5.00013 7.82272 5.00013 8.375V10.375C5.00013 10.9273 5.44785 11.375 6.00013 11.375C6.55242 11.375 7.00013 10.9273 7.00013 10.375V8.375ZM11.0001 8.375C11.0001 7.82272 10.5524 7.375 10.0001 7.375C9.44785 7.375 9.00013 7.82272 9.00013 8.375V10.375C9.00013 10.9273 9.44785 11.375 10.0001 11.375C10.5524 11.375 11.0001 10.9273 11.0001 10.375V8.375Z',
  d9: 'M10.439 3.62503C11.421 3.62465 12.0918 3.62438 12.6588 3.80881C13.394 4.04796 14.027 4.50471 14.4835 5.10485C14.5899 5.24465 14.643 5.31456 14.706 5.34577C14.7689 5.37698 14.847 5.37698 15.0032 5.37698L16.1185 5.37698C16.8059 5.37696 17.3946 5.37694 17.883 5.42631C18.4051 5.47909 18.8933 5.59411 19.3593 5.87273C19.8252 6.15134 20.1579 6.52715 20.4518 6.96231C20.7268 7.36945 21.0059 7.88835 21.3317 8.49425L22.6305 10.909C22.7156 11.0672 22.7539 11.2381 22.75 11.4058V13.4397V13.4398C22.75 14.5738 22.75 15.5006 22.6518 16.2322C22.5491 16.997 22.3268 17.6601 21.7981 18.1893C21.6456 18.3421 21.4762 18.4708 21.2948 18.5793C21.0392 18.7323 20.9114 18.8087 20.8081 18.7453C20.7049 18.682 20.717 18.5047 20.7412 18.1503C20.747 18.0646 20.75 17.9781 20.75 17.8908C20.75 15.8175 19.0711 14.1367 17 14.1367C14.9289 14.1367 13.25 15.8175 13.25 17.8908C13.25 18.1263 13.2717 18.3567 13.3131 18.5802C13.3617 18.8423 13.386 18.9734 13.3267 19.0454C13.2674 19.1175 13.1454 19.1186 12.9015 19.1208C12.3007 19.1264 11.6993 19.1264 11.0985 19.1208C10.8546 19.1186 10.7326 19.1175 10.6733 19.0454C10.614 18.9734 10.6383 18.8423 10.6869 18.5802C10.7283 18.3567 10.75 18.1263 10.75 17.8908C10.75 15.8175 9.07107 14.1367 7 14.1367C4.92893 14.1367 3.25 15.8175 3.25 17.8908C3.25 17.9781 3.25297 18.0646 3.25882 18.1503C3.28299 18.5048 3.29507 18.682 3.19185 18.7453C3.08863 18.8087 2.96083 18.7323 2.70524 18.5793C2.52377 18.4708 2.35444 18.3421 2.20191 18.1893C1.67321 17.6601 1.45093 16.997 1.34822 16.2322C1.24996 15.5005 1.24998 14.5738 1.25 13.4397V13.4397V9.32769V9.32767C1.24998 8.19361 1.24996 7.26685 1.34822 6.53519C1.45093 5.77039 1.67321 5.10731 2.20191 4.57803C2.7306 4.04875 3.39294 3.82622 4.15689 3.7234C4.88775 3.62503 5.81348 3.62505 6.94631 3.62507L10.439 3.62503Z',
  d10: 'M15.303 7.43868C15.3617 7.37921 15.4592 7.37921 15.6541 7.37921H16.0712C16.8188 7.37921 17.3059 7.38038 17.682 7.41841C18.0356 7.45416 18.2073 7.51618 18.3336 7.59167C18.4598 7.66716 18.5958 7.7891 18.7949 8.08388C19.0066 8.39738 19.2386 8.82613 19.593 9.48515L19.8929 10.0426C20.0346 10.306 20.1054 10.4378 20.0472 10.5353C19.989 10.6329 19.8396 10.6329 19.5407 10.6329H17.2999C16.497 10.6329 16.2734 10.6236 16.1136 10.5716C15.7331 10.4478 15.4347 10.1491 15.311 9.76817C15.2591 9.60818 15.2499 9.24519 15.2499 8.44141C15.25 8.20982 15.2501 7.99552 15.2477 7.79579C15.2454 7.59737 15.2443 7.49816 15.303 7.43868ZM7 8.375C7 7.82272 6.55228 7.375 6 7.375C5.44772 7.375 5 7.82272 5 8.375V10.375C5 10.9273 5.44772 11.375 6 11.375C6.55228 11.375 7 10.9273 7 10.375V8.375ZM11 8.375C11 7.82272 10.5523 7.375 10 7.375C9.44772 7.375 9 7.82272 9 8.375V10.375C9 10.9273 9.44772 11.375 10 11.375C10.5523 11.375 11 10.9273 11 10.375V8.375Z',
  d11: 'M5 18H2.00188L2 4H14.5V11H22V18H19M9 18H15',
  d12: 'M14.5 6H18.5L22 11',
  d13: 'M10 8V12M6 8V12',
  d14: 'M4.5 18.25C4.5 16.8693 5.61929 15.75 7 15.75C8.38071 15.75 9.5 16.8693 9.5 18.25C9.5 19.6307 8.38071 20.75 7 20.75C5.61929 20.75 4.5 19.6307 4.5 18.25Z',
  d15: 'M14.5 18.25C14.5 16.8693 15.6193 15.75 17 15.75C18.3807 15.75 19.5 16.8693 19.5 18.25C19.5 19.6307 18.3807 20.75 17 20.75C15.6193 20.75 14.5 19.6307 14.5 18.25Z',
  d16: 'M2.22727 3.25C1.96806 3.25 1.71947 3.35208 1.53619 3.53379C1.35291 3.71549 1.24997 3.96193 1.25 4.21888L1.25184 17.7814C1.25191 18.3164 1.68943 18.75 2.22911 18.75H3.28304C3.26125 18.5864 3.25 18.4195 3.25 18.25C3.25 16.1789 4.92893 14.5 7 14.5C9.07107 14.5 10.75 16.1789 10.75 18.25C10.75 18.4195 10.7388 18.5864 10.717 18.75H13.283C13.2612 18.5864 13.25 18.4195 13.25 18.25C13.25 16.1789 14.9289 14.5 17 14.5C19.0711 14.5 20.75 16.1789 20.75 18.25C20.75 18.4195 20.7388 18.5864 20.717 18.75H21.7727C22.3125 18.75 22.75 18.3163 22.75 17.7812V11C22.75 10.8012 22.6883 10.6073 22.5733 10.4445L19.1529 5.60071C18.97 5.34174 18.6712 5.1875 18.3523 5.1875H15.4205V4.21875C15.4205 3.68372 14.9829 3.25 14.4432 3.25H2.22727ZM15.4219 10.0312V7.125H17.8449L19.8971 10.0312H15.4219ZM5 7V11H7V7H5ZM9 7V11H11V7H9Z',
} as const;

export const IconContainerTruckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-stroke-rounded IconContainerTruckStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconContainerTruckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-duotone-rounded IconContainerTruckDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
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

export const IconContainerTruckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-twotone-rounded IconContainerTruckTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconContainerTruckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-solid-rounded IconContainerTruckSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContainerTruckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-bulk-rounded IconContainerTruckBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconContainerTruckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-stroke-sharp IconContainerTruckStrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconContainerTruckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="container-truck-solid-sharp IconContainerTruckSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfContainerTruck: TheIconSelfPack = {
  name: 'ContainerTruck',
  StrokeRounded: IconContainerTruckStrokeRounded,
  DuotoneRounded: IconContainerTruckDuotoneRounded,
  TwotoneRounded: IconContainerTruckTwotoneRounded,
  SolidRounded: IconContainerTruckSolidRounded,
  BulkRounded: IconContainerTruckBulkRounded,
  StrokeSharp: IconContainerTruckStrokeSharp,
  SolidSharp: IconContainerTruckSolidSharp,
};
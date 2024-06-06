import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 2V4M12 2V4M7 2V4',
  d2: 'M3.5 16V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V12C20.5 16.714 20.5 19.0711 19.0355 20.5355C17.5711 22 15.214 22 10.5 22H9.5C6.67157 22 5.25736 22 4.37868 21.1213C3.5 20.2426 3.5 18.8284 3.5 16Z',
  d3: 'M8 15H12M8 10H16',
  d4: 'M20.5 14.5C20.5 15.8807 19.3807 17 18 17C17.5007 17 16.912 16.9125 16.4265 17.0426C15.9951 17.1582 15.6582 17.4951 15.5426 17.9265C15.4125 18.412 15.5 19.0007 15.5 19.5C15.5 20.8807 14.3807 22 13 22',
  d5: 'M13.5 3H10.5C7.20017 3 5.55025 3 4.52513 4.02513C3.5 5.05025 3.5 6.70017 3.5 10V15C3.5 18.2998 3.5 19.9497 4.52513 20.9749C5.55025 22 7.20017 22 10.5 22H13C13.2237 22 13.4405 21.9706 13.6468 21.9155L14.7615 21.274C15.2176 20.8211 15.5 20.1935 15.5 19.5C15.5 19.3595 15.4931 19.2119 15.486 19.0615C15.468 18.6775 15.4491 18.2754 15.5426 17.9265C15.6582 17.4951 15.9951 17.1582 16.4265 17.0426C16.7754 16.9491 17.1775 16.968 17.5615 16.986C17.7119 16.9931 17.8595 17 18 17C19.3807 17 20.5 15.8807 20.5 14.5V10C20.5 6.70017 20.5 5.05025 19.4749 4.02513C18.4497 3 16.7998 3 13.5 3Z',
  d6: 'M7 1C7.55228 1 8 1.44772 8 2V4C8 4.55228 7.55228 5 7 5C6.44772 5 6 4.55228 6 4V2C6 1.44772 6.44772 1 7 1ZM12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1ZM17 1C17.5523 1 18 1.44772 18 2V4C18 4.55228 17.5523 5 17 5C16.4477 5 16 4.55228 16 4V2C16 1.44772 16.4477 1 17 1Z',
  d7: 'M14.5549 2.25H14.5549H14.5549C15.9225 2.24998 17.0248 2.24997 17.8918 2.36653C18.7919 2.48754 19.5497 2.74644 20.1517 3.34835C20.7536 3.95027 21.0125 4.70814 21.1335 5.60825C21.25 6.47522 21.25 7.57754 21.25 8.94513V12.0574V12.0575C21.25 12.7371 21.25 13.3734 21.2452 13.969C21.1773 14.42 21.0047 14.893 20.674 15.2818C20.2463 15.7844 19.4661 16.25 17.9993 16.25C17.8937 16.25 17.779 16.2454 17.6458 16.2392L17.5967 16.2369C17.4807 16.2314 17.3516 16.2254 17.2229 16.2227C16.9329 16.2167 16.5789 16.2251 16.2316 16.3182C15.5414 16.5031 15.0023 17.0422 14.8174 17.7324C14.7244 18.0796 14.7159 18.4336 14.7219 18.7236C14.7246 18.8523 14.7307 18.9813 14.7361 19.0973L14.7361 19.0973L14.7361 19.0974L14.7384 19.1465C14.7446 19.2798 14.7493 19.3945 14.7493 19.5C14.7493 20.1705 14.6823 20.9979 14.3163 21.6423C14.1415 21.95 13.8997 22.2133 13.5544 22.4047C13.206 22.5977 12.7114 22.74 12 22.74C11.9616 22.74 11.9238 22.7429 11.8869 22.7485C11.4648 22.75 11.0237 22.75 10.5625 22.75H10.5574H9.44513C8.07754 22.75 6.97522 22.75 6.10825 22.6335C5.20814 22.5125 4.45027 22.2536 3.84835 21.6517C3.24644 21.0497 2.98754 20.2919 2.86653 19.3918C2.74997 18.5248 2.74998 17.4225 2.75 16.0549V16.0549V16.0549V16.0549V8.94513V8.94511V8.9451V8.94507C2.74998 7.57751 2.74997 6.47521 2.86653 5.60825C2.98754 4.70814 3.24644 3.95027 3.84835 3.34835C4.45027 2.74644 5.20814 2.48754 6.10825 2.36653C6.97521 2.24997 8.07751 2.24998 9.44508 2.25H9.4451H9.44511H9.44513H14.5549H14.5549ZM17.9993 17.75C19.3517 17.75 20.3825 17.4199 21.1375 16.8781C21.1161 17.1246 21.0906 17.3605 21.0603 17.5863C20.866 19.031 20.4607 20.1711 19.5659 21.0659C18.6711 21.9607 17.531 22.366 16.0863 22.5603C15.8881 22.5869 15.682 22.6098 15.4678 22.6295C15.5224 22.5487 15.5732 22.4665 15.6205 22.3832C16.1916 21.3778 16.2493 20.2102 16.2493 19.5C16.2493 19.3559 16.243 19.2097 16.2368 19.077L16.2344 19.0258C16.2289 18.9081 16.2238 18.8001 16.2216 18.6925C16.2164 18.4419 16.2292 18.2589 16.2663 18.1206C16.3125 17.948 16.4473 17.8133 16.6198 17.767C16.7581 17.73 16.9412 17.7172 17.1917 17.7224C17.2993 17.7246 17.4073 17.7296 17.525 17.7352L17.5252 17.7352L17.5763 17.7376C17.709 17.7437 17.8551 17.75 17.9993 17.75ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8ZM8 14.25C7.58579 14.25 7.25 14.5858 7.25 15C7.25 15.4142 7.58579 15.75 8 15.75H12C12.4142 15.75 12.75 15.4142 12.75 15C12.75 14.5858 12.4142 14.25 12 14.25H8Z',
  d8: 'M14.5549 2.25H9.44513C8.07755 2.24998 6.97521 2.24997 6.10825 2.36653C5.20814 2.48754 4.45027 2.74644 3.84835 3.34835C3.24644 3.95027 2.98754 4.70814 2.86653 5.60825C2.74997 6.47521 2.74998 7.57752 2.75 8.9451V16.0549C2.74998 17.4225 2.74997 18.5248 2.86653 19.3918C2.98754 20.2919 3.24644 21.0497 3.84835 21.6517C4.45027 22.2536 5.20814 22.5125 6.10825 22.6335C6.97522 22.75 8.07754 22.75 9.44513 22.75H10.5574C11.0381 22.75 11.52 22.74 12 22.74C12.7114 22.74 13.206 22.5977 13.5544 22.4047C13.8997 22.2133 14.1415 21.95 14.3163 21.6423C14.6823 20.9979 14.7493 20.1705 14.7493 19.5C14.7493 18.9076 14.6613 18.3149 14.8174 17.7324C15.0023 17.0422 15.5414 16.5031 16.2316 16.3182C16.8142 16.1621 17.4068 16.25 17.9993 16.25C19.4661 16.25 20.2463 15.7844 20.674 15.2818C21.0047 14.893 21.1773 14.42 21.2452 13.969C21.25 13.3734 21.25 12.737 21.25 12.0574V8.94513C21.25 7.57754 21.25 6.47522 21.1335 5.60825C21.0125 4.70814 20.7536 3.95027 20.1517 3.34835C19.5497 2.74644 18.7919 2.48754 17.8918 2.36653C17.0248 2.24997 15.9225 2.24998 14.5549 2.25Z',
  d9: 'M21.0603 17.5863C21.0915 17.354 21.1071 17.2379 21.0696 17.177C21.0403 17.1295 21.0009 17.1008 20.9466 17.0876C20.8772 17.0708 20.7597 17.1272 20.5249 17.24C19.852 17.5632 19.0167 17.75 17.9993 17.75C17.5515 17.75 17.0595 17.6493 16.6198 17.767C16.4473 17.8133 16.3125 17.948 16.2663 18.1206C16.1485 18.5602 16.2493 19.0522 16.2493 19.5C16.2493 20.1415 16.2019 21.1559 15.7722 22.0872C15.6904 22.2644 15.6495 22.353 15.6534 22.4047C15.6594 22.486 15.704 22.5464 15.78 22.5761C15.8282 22.595 15.9142 22.5834 16.0863 22.5603C17.531 22.366 18.6711 21.9607 19.5659 21.0659C20.4607 20.1711 20.866 19.031 21.0603 17.5863Z',
  d10: 'M21.0595 17.5875C21.0907 17.3552 21.1063 17.2391 21.0688 17.1783C21.0395 17.1307 21.0001 17.1021 20.9458 17.0889C20.8764 17.072 20.7589 17.1284 20.5241 17.2412C19.8512 17.5644 19.0159 17.7512 17.9985 17.7512C17.5507 17.7512 17.0587 17.6505 16.6191 17.7683C16.4465 17.8145 16.3117 17.9493 16.2655 18.1218C16.1477 18.5614 16.2485 19.0535 16.2485 19.5012C16.2485 20.1427 16.2011 21.1572 15.7714 22.0885C15.6896 22.2657 15.6488 22.3543 15.6526 22.4059C15.6586 22.4872 15.7033 22.5476 15.7792 22.5773C15.8274 22.5962 15.9134 22.5846 16.0855 22.5615C17.5302 22.3672 18.6703 21.9619 19.5651 21.0671C20.4599 20.1723 20.8652 19.0323 21.0595 17.5875Z',
  d11: 'M7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM7.25 15C7.25 14.5858 7.58579 14.25 8 14.25H12C12.4142 14.25 12.75 14.5858 12.75 15C12.75 15.4142 12.4142 15.75 12 15.75H8C7.58579 15.75 7.25 15.4142 7.25 15Z',
  d12: 'M7 2V6M12 2V6M17 2V6',
  d13: 'M20.5755 15H14V21.4158M21 4H3V22H14L21 15V4Z',
  d14: 'M11 16H8M16 11H8',
  d15: 'M21.75 16.5L15.75 22.5V16.5H21.75Z',
  d16: 'M16 3H13V1.5H11V3H8V1.5H6V3H3C2.58579 3 2.25 3.33579 2.25 3.75V21.75C2.25 21.9489 2.32902 22.1397 2.46967 22.2803C2.61032 22.421 2.80109 22.5 3 22.5L14.2498 22.5V15H21.75V3.75C21.75 3.33579 21.4142 3 21 3H18V1.5H16V3ZM16 10.501H8V9.00098H16V10.501ZM11 16.501H8V15.001H11V16.501Z',
};

export const IconNote04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-stroke-rounded IconNote04StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-duotone-rounded IconNote04DuotoneRounded"
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

export const IconNote04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-twotone-rounded IconNote04TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-solid-rounded IconNote04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-bulk-rounded IconNote04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-stroke-sharp IconNote04StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconNote04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="note-04-solid-sharp IconNote04SolidSharp"
    >
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

export const iconPackOfNote04: TheIconSelfPack = {
  name: 'Note04',
  StrokeRounded: IconNote04StrokeRounded,
  DuotoneRounded: IconNote04DuotoneRounded,
  TwotoneRounded: IconNote04TwotoneRounded,
  SolidRounded: IconNote04SolidRounded,
  BulkRounded: IconNote04BulkRounded,
  StrokeSharp: IconNote04StrokeSharp,
  SolidSharp: IconNote04SolidSharp,
};
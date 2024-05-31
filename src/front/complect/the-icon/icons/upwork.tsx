import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 4.5V10.75C2 12.7925 3.7075 14.5 5.75 14.5C7.7925 14.5 9.5 12.7925 9.5 10.75V4.5C10.75 7.625 13.0965 14.5 17.625 14.5C20.0079 14.5 22 12.5079 22 10.125C22 7.74208 20.0079 5.75 17.625 5.75C15.0913 5.75 13.5912 7.625 13.25 9.5C12.9475 11.1625 11.375 19.5 11.375 19.5',
  d2: 'M2 4.5V10.75C2 12.7925 3.7075 14.5 5.75 14.5C7.7925 14.5 9.5 12.7925 9.5 10.75V4.5',
  d3: 'M10.4285 4.12871C10.2504 3.68363 9.78161 3.42749 9.31089 3.51814C8.84017 3.60879 8.5 4.02073 8.5 4.5001L8.5 10.7501C8.5 12.2403 7.24022 13.5001 5.75 13.5001C4.25978 13.5001 3 12.2403 3 10.7501L3 4.5001C3 3.94781 2.55228 3.5001 2 3.5001C1.44772 3.5001 1 3.94781 1 4.5001L1 10.7501C1 13.3449 3.15521 15.5001 5.75 15.5001C8.34479 15.5001 10.5 13.3449 10.5 10.7501V9.42039C10.7998 10.0232 11.127 10.625 11.4834 11.1992C11.5915 11.3735 11.7037 11.5476 11.8202 11.7204C11.6362 12.7038 11.422 13.8443 11.2163 14.9388C11.0008 16.0847 10.7949 17.1787 10.6427 17.9863L10.3923 19.3147C10.29 19.8574 10.6469 20.3804 11.1897 20.4828C11.7324 20.5851 12.2554 20.2278 12.3577 19.6851L12.6081 18.3565C12.7603 17.5488 12.9663 16.4546 13.1818 15.3083L13.4816 13.7129C14.5997 14.7615 15.9669 15.5001 17.625 15.5001C20.5602 15.5001 23 13.0603 23 10.1251C23 7.1899 20.5602 4.7501 17.625 4.7501C14.7614 4.7501 12.9921 6.70955 12.4008 8.74986C11.7147 7.40533 11.1692 6.01374 10.7199 4.86752C10.618 4.60748 10.521 4.36007 10.4285 4.12871ZM17.6522 13.5C16.285 13.5 15.079 12.6534 14 11.2476C14.1286 10.553 14.2311 9.99585 14.2883 9.67902C14.5628 8.15816 15.7308 6.75 17.6522 6.75C19.4681 6.75 21 8.29437 21 10.125C21 11.9556 19.4681 13.5 17.6522 13.5Z',
  d4: 'M10.4287 4.12888C10.2236 3.61609 9.64166 3.36668 9.12888 3.57179C8.61609 3.7769 8.36668 4.35887 8.57179 4.87166C8.65652 5.08349 8.74779 5.31681 8.84584 5.56749C9.44832 7.10778 10.3072 9.30363 11.4836 11.1994C11.5918 11.3737 11.704 11.5477 11.8205 11.7205C11.6364 12.7039 11.4223 13.8445 11.2165 14.9389C11.0011 16.0849 10.7951 17.1789 10.643 17.9864L10.3926 19.3148C10.2902 19.8575 10.6472 20.3806 11.1899 20.4829C11.7326 20.5853 12.2557 20.2279 12.358 19.6852L12.6084 18.3567C12.7606 17.549 12.9666 16.4547 13.1821 15.3085L13.4818 13.713C14.6 14.7616 15.9672 15.5003 17.6253 15.5003C20.5605 15.5003 23.0003 13.0605 23.0003 10.1253C23.0003 7.19006 20.5605 4.75027 17.6253 4.75027C14.7617 4.75027 12.9924 6.70972 12.401 8.75003C11.7149 7.4055 11.1695 6.01392 10.7202 4.86771C10.6183 4.60768 10.5213 4.36024 10.4287 4.12888ZM17.6252 13.5C16.2469 13.5 15.0311 12.6534 13.9434 11.2476C14.073 10.553 14.1764 9.99585 14.234 9.67902C14.5107 8.15816 15.6882 6.75 17.6252 6.75C19.4558 6.75 21.0002 8.29437 21.0002 10.125C21.0002 11.9556 19.4558 13.5 17.6252 13.5Z',
  d5: 'M2 3.5C2.55228 3.5 3 3.94772 3 4.5V10.75C3 12.2402 4.25978 13.5 5.75 13.5C7.24022 13.5 8.5 12.2402 8.5 10.75V4.5C8.5 3.94772 8.94772 3.5 9.5 3.5C10.0523 3.5 10.5 3.94772 10.5 4.5V10.75C10.5 13.3448 8.34479 15.5 5.75 15.5C3.15521 15.5 1 13.3448 1 10.75V4.5C1 3.94772 1.44772 3.5 2 3.5Z',
  d6: 'M9.31089 4.01814C9.78161 3.92749 10.2504 4.18363 10.4285 4.62871C10.521 4.86007 10.618 5.10748 10.7199 5.36752C11.1692 6.51374 11.7147 7.90533 12.4008 9.24986C12.9921 7.20955 14.7614 5.2501 17.625 5.2501C20.5602 5.2501 23 7.6899 23 10.6251C23 13.5603 20.5602 16.0001 17.625 16.0001C15.9669 16.0001 14.5997 15.2615 13.4816 14.2129C13.3825 14.7406 13.2811 15.2801 13.1818 15.8083C12.9663 16.9546 12.7603 17.8638 12.6081 18.6715L12.3577 20L10.3923 19.6296L10.6427 18.3012C10.7949 17.4937 11.0008 16.5847 11.2163 15.4388C11.422 14.3443 11.6362 13.2038 11.8202 12.2204C11.7037 12.0476 11.5915 11.8735 11.4834 11.6992C11.127 11.125 10.7998 10.5232 10.5 9.92039V11.2501C10.5 13.8449 8.34479 16.0001 5.75 16.0001C3.15521 16.0001 1 13.8449 1 11.2501V5.0001H3V11.2501C3 12.7403 4.25978 14.0001 5.75 14.0001C7.24022 14.0001 8.5 12.7403 8.5 11.2501V5.0001C8.5 4.52073 8.84017 4.10879 9.31089 4.01814ZM13.9432 11.7477C15.031 13.1535 16.2468 14.0001 17.625 14.0001C19.4556 14.0001 21 12.4557 21 10.6251C21 8.79447 19.4556 7.2501 17.625 7.2501C15.6881 7.2501 14.5106 8.65826 14.2338 10.1791C14.1762 10.4959 14.0728 11.0531 13.9432 11.7477Z',
} as const;

export const IconUpworkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-stroke-rounded IconUpworkStrokeRounded"
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

export const IconUpworkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-duotone-rounded IconUpworkDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUpworkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-twotone-rounded IconUpworkTwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUpworkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-solid-rounded IconUpworkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUpworkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-bulk-rounded IconUpworkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUpworkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-stroke-sharp IconUpworkStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUpworkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upwork-solid-sharp IconUpworkSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUpwork: TheIconSelfPack = {
  name: 'Upwork',
  StrokeRounded: IconUpworkStrokeRounded,
  DuotoneRounded: IconUpworkDuotoneRounded,
  TwotoneRounded: IconUpworkTwotoneRounded,
  SolidRounded: IconUpworkSolidRounded,
  BulkRounded: IconUpworkBulkRounded,
  StrokeSharp: IconUpworkStrokeSharp,
  SolidSharp: IconUpworkSolidSharp,
};
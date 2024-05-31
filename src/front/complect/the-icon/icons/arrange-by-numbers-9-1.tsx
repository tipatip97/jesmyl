import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 21.0003V14.9491C7 14.3746 7 14.0873 6.76959 14.0158C6.26306 13.8587 5.5 15 5.5 15M7 21.0003H5.5M7 21.0003H8.5',
  d2: 'M9 6.50098V4.75098C9 3.92602 9 3.51354 8.70711 3.25726C8.41421 3.00098 7.94281 3.00098 7 3.00098C6.05719 3.00098 5.58579 3.00098 5.29289 3.25726C5 3.51354 5 3.92602 5 4.75098C5 5.57593 5 5.98841 5.29289 6.2447C5.58579 6.50098 6.05719 6.50098 7 6.50098H9ZM9 6.50098V7.37598C9 8.61341 9 9.23213 8.56066 9.61655C8.12132 10.001 7.41421 10.001 6 10.001H5',
  d3: 'M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5',
  d4: 'M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9Z',
  d5: 'M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5',
  d6: 'M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5',
  d7: 'M6.00011 15.8659C5.68076 16.0499 5.27144 16.0497 4.94431 15.8309C4.48518 15.524 4.36183 14.903 4.66879 14.4438L4.83108 14.2187C4.92457 14.0957 5.06069 13.9264 5.22224 13.7575C5.37649 13.5962 5.59163 13.395 5.84651 13.2434C6.07607 13.1069 6.53348 12.8951 7.06603 13.0604C7.3255 13.1409 7.55548 13.3008 7.72022 13.5345C7.86742 13.7433 7.92592 13.9595 7.95395 14.108C8.00082 14.3562 8.00044 14.6588 8.00015 14.8953L8.00011 19.5C8.00011 19.6869 8.00011 19.7804 8.0403 19.85C8.06663 19.8956 8.1045 19.9334 8.15011 19.9598C8.21972 20 8.31318 20 8.5001 20C9.05239 20 9.5001 20.4477 9.5001 21C9.5001 21.5523 9.05239 22 8.5001 22H5.50011C4.94782 22 4.50011 21.5523 4.50011 21C4.50011 20.4477 4.94782 20 5.50011 20C5.68703 20 5.78049 20 5.85011 19.9598C5.89571 19.9334 5.93358 19.8956 5.95991 19.85C6.00011 19.7804 6.00011 19.6869 6.00011 19.5V15.8659Z',
  d8: 'M6.95005 2C6.96667 2.00001 6.98333 2.00001 7.00003 2.00001C7.01672 2.00001 7.03338 2.00001 7.05 2C7.47814 1.99995 7.88259 1.99989 8.21413 2.03889C8.57513 2.08136 8.99995 2.18373 9.36564 2.50371C9.75054 2.84051 9.89409 3.26236 9.95182 3.63803C10.0003 3.95358 10.0002 4.33089 10 4.69428C10 4.7129 10 4.73148 10 4.75001V7.37501C10 7.39669 10 7.41832 10 7.4399C10.0001 8.00241 10.0002 8.53286 9.93351 8.96705C9.85748 9.46185 9.67732 9.9673 9.21919 10.3682C8.78028 10.7522 8.25992 10.8866 7.76277 10.9451C7.29536 11.0001 6.7151 11.0001 6.05591 11L5.00003 11C4.44774 11 4.00003 10.5523 4.00003 10C4.00003 9.44772 4.44774 9.00001 5.00003 9.00001H6.00003C6.73195 9.00001 7.19273 8.99838 7.5291 8.95881C7.84435 8.92172 7.9002 8.86502 7.90213 8.86306L7.90356 8.86187C7.90539 8.86044 7.90584 8.86008 7.90972 8.85183C7.91833 8.83351 7.9386 8.78114 7.95671 8.66331C7.97901 8.51814 7.98989 8.33987 7.99516 8.10055C8.00132 7.82048 8.00441 7.68044 7.91615 7.59022C7.8279 7.50001 7.68509 7.50001 7.39948 7.50001H7.00003C6.98333 7.50001 6.96667 7.50001 6.95005 7.50001C6.52191 7.50007 6.11746 7.50013 5.78592 7.46113C5.42493 7.41866 5.00011 7.31628 4.63441 6.9963C4.24951 6.65951 4.10596 6.23766 4.04824 5.86199C3.99975 5.54644 3.99989 5.16913 4.00001 4.80574C4.00002 4.78712 4.00003 4.76854 4.00003 4.75001C4.00003 4.73147 4.00002 4.71289 4.00001 4.69428C3.99989 4.33088 3.99975 3.95358 4.04824 3.63803C4.10596 3.26236 4.24951 2.84051 4.63441 2.50371C5.00011 2.18373 5.42492 2.08136 5.78592 2.03889C6.11746 1.99989 6.52192 1.99995 6.95005 2ZM7.40003 5.50001C7.68287 5.50001 7.82429 5.50001 7.91216 5.41214C8.00003 5.32427 8.00003 5.18285 8.00003 4.90001V4.75001C8.00003 4.53952 7.99994 4.37476 7.99587 4.23345C7.99342 4.1487 7.98974 4.08245 7.9852 4.03008C7.98498 4.02753 7.983 4.02549 7.98046 4.0252C7.78025 4.00164 7.49624 4.00001 7.00003 4.00001C6.50381 4.00001 6.2198 4.00164 6.01959 4.0252C6.01705 4.02549 6.01507 4.02753 6.01485 4.03008C6.01032 4.08245 6.00663 4.1487 6.00419 4.23345C6.00011 4.37476 6.00003 4.53952 6.00003 4.75001C6.00003 4.9605 6.00011 5.12526 6.00419 5.26656C6.00663 5.35132 6.01032 5.41756 6.01485 5.46994C6.01507 5.47249 6.01705 5.47452 6.01959 5.47482C6.2198 5.49838 6.50381 5.50001 7.00003 5.50001H7.40003Z',
  d9: 'M17.7559 4C17.7559 3.44772 17.3081 3 16.7559 3C16.2036 3 15.7559 3.44772 15.7559 4L15.7559 16.5L15.1616 16.5C14.986 16.4999 14.7703 16.4997 14.5939 16.5218L14.5905 16.5222C14.4641 16.538 13.888 16.6098 13.6137 17.1754C13.3387 17.7423 13.6407 18.2424 13.706 18.3506L13.7084 18.3546C13.8006 18.5076 13.9348 18.6785 14.0451 18.8191L14.0688 18.8493C14.3635 19.2252 14.7454 19.7094 15.1259 20.1004C15.3157 20.2955 15.533 20.4967 15.7639 20.6556C15.9691 20.7968 16.3193 21 16.75 21C17.1807 21 17.5309 20.7968 17.7361 20.6556C17.967 20.4967 18.1843 20.2955 18.3741 20.1004C18.7546 19.7094 19.1365 19.2252 19.4312 18.8493L19.4549 18.8191C19.5652 18.6785 19.6994 18.5077 19.7916 18.3546L19.794 18.3506C19.8593 18.2424 20.1613 17.7422 19.8863 17.1754C19.612 16.6098 19.0359 16.538 18.9095 16.5222L18.9061 16.5218C18.7297 16.4997 18.514 16.4999 18.3384 16.5L17.7559 16.5L17.7559 4Z',
  d10: 'M7 21.0002V14H6.3579L5 15.5M7 21.0002L5 21M7 21.0002H9',
  d11: 'M9 6.5V3H5V6.5H9ZM9 6.5V10H4.5',
  d12: 'M16.5 4V19.2978M14 17.5L16.5 20L19 17.5',
  d13: 'M6.65562 13H8.74135V20.0002H9.74135V22.0002H7.74135L5.74123 22L5.74147 20L6.74135 20.0001V15.8854L6.4827 16.1711L5 14.8289L6.65562 13Z',
  d14: 'M4.5 2H10.5V11H4.5V9H8.5V7.5H4.5V2ZM8.5 5.5V4H6.5V5.5H8.5Z',
  d15: 'M17.293 3.29297V16.8788L18.0859 16.0859L19.5002 17.5001L16.293 20.7072L13.0859 17.5001L14.5002 16.0859L15.293 16.8788V3.29297H17.293Z',
} as const;

export const IconArrangeByNumbers91StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-stroke-rounded IconArrangeByNumbers91StrokeRounded"
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

export const IconArrangeByNumbers91DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-duotone-rounded IconArrangeByNumbers91DuotoneRounded"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByNumbers91TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-twotone-rounded IconArrangeByNumbers91TwotoneRounded"
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

export const IconArrangeByNumbers91SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-solid-rounded IconArrangeByNumbers91SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByNumbers91BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-bulk-rounded IconArrangeByNumbers91BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrangeByNumbers91StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-stroke-sharp IconArrangeByNumbers91StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByNumbers91SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-9-1-solid-sharp IconArrangeByNumbers91SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrangeByNumbers91: TheIconSelfPack = {
  name: 'ArrangeByNumbers91',
  StrokeRounded: IconArrangeByNumbers91StrokeRounded,
  DuotoneRounded: IconArrangeByNumbers91DuotoneRounded,
  TwotoneRounded: IconArrangeByNumbers91TwotoneRounded,
  SolidRounded: IconArrangeByNumbers91SolidRounded,
  BulkRounded: IconArrangeByNumbers91BulkRounded,
  StrokeSharp: IconArrangeByNumbers91StrokeSharp,
  SolidSharp: IconArrangeByNumbers91SolidSharp,
};
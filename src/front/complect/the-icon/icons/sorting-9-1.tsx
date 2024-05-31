import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5',
  d2: 'M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5',
  d3: 'M16.5 19.999V3.99902M16.5 19.999C15.7998 19.999 14.4915 18.0047 14 17.499M16.5 19.999C17.2002 19.999 18.5085 18.0047 19 17.499',
  d4: 'M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5',
  d5: 'M14.5939 16.2718C14.7703 16.2497 14.986 16.2499 15.1616 16.25L15.75 16.25V4C15.75 3.44772 16.1977 3 16.75 3C17.3023 3 17.75 3.44772 17.75 4V16.25L18.3384 16.25C18.514 16.2499 18.7297 16.2497 18.9061 16.2718L18.9095 16.2722C19.0359 16.288 19.612 16.3598 19.8863 16.9254C20.1613 17.4922 19.8593 17.9924 19.794 18.1006L19.4549 18.5691C19.1602 18.9449 18.7546 19.4593 18.3741 19.8503C18.1843 20.0454 17.967 20.2467 17.7361 20.4055C17.5309 20.5467 17.1807 20.75 16.75 20.75C16.3193 20.75 15.9691 20.5467 15.7639 20.4055C15.533 20.2467 15.3157 20.0454 15.1259 19.8503C14.7454 19.4593 14.3397 18.9449 14.0451 18.569L13.706 18.1006C13.6407 17.9924 13.3387 17.4922 13.6137 16.9254C13.888 16.3598 14.4641 16.288 14.5905 16.2722L14.5939 16.2718Z',
  d6: 'M6.00011 15.8659C5.68076 16.0499 5.27144 16.0497 4.94431 15.8309C4.48518 15.524 4.36183 14.903 4.66879 14.4438C4.97583 13.9853 5.36739 13.5283 5.84651 13.2434C6.07607 13.1069 6.53348 12.8951 7.06603 13.0604C7.3255 13.1409 7.55548 13.3008 7.72022 13.5345C7.86742 13.7433 7.92592 13.9595 7.95395 14.108C8.00082 14.3562 8.00044 14.6588 8.00015 14.8953C7.99804 16.5968 8.00011 18.2984 8.00011 20H8.5001C9.05239 20 9.5001 20.4477 9.5001 21C9.5001 21.5523 9.05239 22 8.5001 22H5.50011C4.94782 22 4.50011 21.5523 4.50011 21C4.50011 20.4477 4.94782 20 5.50011 20H6.00011V15.8659Z',
  d7: 'M6.95005 2C6.96667 2.00001 6.98333 2.00001 7.00003 2.00001C7.01672 2.00001 7.03338 2.00001 7.05 2C7.47814 1.99995 7.88259 1.99989 8.21413 2.03889C8.57513 2.08136 8.99995 2.18373 9.36564 2.50371C9.75054 2.84051 9.89409 3.26236 9.95182 3.63803C10.0003 3.95358 10.0002 4.33089 10 4.69428C10 4.7129 10 4.73148 10 4.75001V7.37501C10 7.39669 10 7.41832 10 7.4399C10.0001 8.00241 10.0002 8.53286 9.93351 8.96705C9.85748 9.46185 9.67732 9.9673 9.21919 10.3682C8.78028 10.7522 8.25992 10.8866 7.76277 10.9451C7.29536 11.0001 6.7151 11.0001 6.05591 11L5.00003 11C4.44774 11 4.00003 10.5523 4.00003 10C4.00003 9.44772 4.44774 9.00001 5.00003 9.00001H6.00003C6.73195 9.00001 7.19273 8.99838 7.5291 8.95881C7.84435 8.92172 7.9002 8.86502 7.90213 8.86306C7.90268 8.86258 7.90318 8.86218 7.90356 8.86187C7.90539 8.86044 7.90584 8.86008 7.90972 8.85183C7.91833 8.83351 7.9386 8.78114 7.95671 8.66331C7.9946 8.41672 7.9995 8.0746 7.99998 7.50001H7.00003C6.98333 7.50001 6.96667 7.50001 6.95005 7.50001C6.52191 7.50007 6.11746 7.50013 5.78592 7.46113C5.42493 7.41866 5.00011 7.31628 4.63441 6.9963C4.24951 6.65951 4.10596 6.23766 4.04824 5.86199C3.99975 5.54644 3.99989 5.16913 4.00001 4.80574C4.00002 4.78712 4.00003 4.76854 4.00003 4.75001C4.00003 4.73147 4.00002 4.71289 4.00001 4.69428C3.99989 4.33088 3.99975 3.95358 4.04824 3.63803C4.10596 3.26236 4.24951 2.84051 4.63441 2.50371C5.00011 2.18373 5.42492 2.08136 5.78592 2.03889C6.11746 1.99989 6.52192 1.99995 6.95005 2ZM8.00003 5.50001V4.75001C8.00003 4.53952 7.99994 4.37476 7.99587 4.23345C7.99335 4.14633 7.98953 4.07876 7.98482 4.02571C7.98338 4.02554 7.98193 4.02537 7.98046 4.0252C7.78025 4.00164 7.49624 4.00001 7.00003 4.00001C6.50381 4.00001 6.2198 4.00164 6.01959 4.0252C6.01812 4.02537 6.01667 4.02554 6.01523 4.02571C6.01052 4.07876 6.0067 4.14633 6.00419 4.23345C6.00011 4.37476 6.00003 4.53952 6.00003 4.75001C6.00003 4.9605 6.00011 5.12526 6.00419 5.26656C6.0067 5.35369 6.01052 5.42126 6.01523 5.4743C6.01667 5.47448 6.01812 5.47465 6.01959 5.47482C6.2198 5.49838 6.50381 5.50001 7.00003 5.50001H8.00003Z',
  d8: 'M7 20.9998V13.9995H6.3579L5 15.4995M7 20.9998L5 20.9995M7 20.9998H9',
  d9: 'M9 6.5V3H5V6.5H9ZM9 6.5V10H4.5',
  d10: 'M16.5 4V19.4397M14 17.5L16.5 20L19 17.5',
  d11: 'M5.65562 12.9999H7.74135V20.0001H8.74135V22.0001H6.74135L4.74123 21.9999L4.74147 19.9999L5.74135 20V15.8853L5.4827 16.171L4 14.8288L5.65562 12.9999Z',
  d12: 'M3.5 1.99988H9.5V10.9999H3.5V8.99988H7.5V7.49988H3.5V1.99988ZM7.5 5.49988V3.99988H5.5V5.49988H7.5Z',
  d13: 'M16.293 3.29285V16.8786L17.0859 16.0857L18.5002 17.5L15.293 20.7071L12.0859 17.5L13.5002 16.0857L14.293 16.8786V3.29285H16.293Z',
} as const;

export const IconSorting91StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-stroke-rounded IconSorting91StrokeRounded"
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

export const IconSorting91DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-duotone-rounded IconSorting91DuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting91TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-twotone-rounded IconSorting91TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting91SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-solid-rounded IconSorting91SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSorting91BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-bulk-rounded IconSorting91BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting91StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-stroke-sharp IconSorting91StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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

export const IconSorting91SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-9-1-solid-sharp IconSorting91SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSorting91: TheIconSelfPack = {
  name: 'Sorting91',
  StrokeRounded: IconSorting91StrokeRounded,
  DuotoneRounded: IconSorting91DuotoneRounded,
  TwotoneRounded: IconSorting91TwotoneRounded,
  SolidRounded: IconSorting91SolidRounded,
  BulkRounded: IconSorting91BulkRounded,
  StrokeSharp: IconSorting91StrokeSharp,
  SolidSharp: IconSorting91SolidSharp,
};
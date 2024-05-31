import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 9.99936V3.94812C7 3.3736 7 3.08634 6.76959 3.01485C6.26306 2.85769 5.5 3.99902 5.5 3.99902M7 9.99936H5.5M7 9.99936H8.5',
  d2: 'M9 17.4991V15.7491C9 14.9242 9 14.5117 8.70711 14.2554C8.41421 13.9991 7.94281 13.9991 7 13.9991C6.05719 13.9991 5.58579 13.9991 5.29289 14.2554C5 14.5117 5 14.9242 5 15.7491C5 16.5741 5 16.9866 5.29289 17.2429C5.58579 17.4991 6.05719 17.4991 7 17.4991H9ZM9 17.4991V18.3741C9 19.6116 9 20.2303 8.56066 20.6147C8.12132 20.9991 7.41421 20.9991 6 20.9991H5',
  d3: 'M16.5 19.9991V3.99915M16.5 19.9991C15.7998 19.9991 14.4915 18.0048 14 17.4991M16.5 19.9991C17.2002 19.9991 18.5085 18.0048 19 17.4991',
  d4: 'M9 17.5V15.75C9 14.925 9 14.5126 8.70711 14.2563C8.41421 14 7.94281 14 7 14C6.05719 14 5.58579 14 5.29289 14.2563C5 14.5126 5 14.925 5 15.75C5 16.575 5 16.9874 5.29289 17.2437C5.58579 17.5 6.05719 17.5 7 17.5H9ZM9 17.5V18.375C9 19.6124 9 20.2312 8.56066 20.6156C8.12132 21 7.41421 21 6 21H5',
  d5: 'M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5',
  d6: 'M14.5939 16.2718C14.7703 16.2497 14.986 16.2499 15.1616 16.25L15.75 16.25V4C15.75 3.44772 16.1977 3 16.75 3C17.3023 3 17.75 3.44772 17.75 4V16.25L18.3384 16.25C18.514 16.2499 18.7297 16.2497 18.9061 16.2718L18.9095 16.2722C19.0359 16.288 19.612 16.3598 19.8863 16.9254C20.1613 17.4922 19.8593 17.9924 19.794 18.1006L19.4549 18.5691C19.1602 18.9449 18.7546 19.4593 18.3741 19.8503C18.1843 20.0454 17.967 20.2467 17.7361 20.4055C17.5309 20.5467 17.1807 20.75 16.75 20.75C16.3193 20.75 15.9691 20.5467 15.7639 20.4055C15.533 20.2467 15.3157 20.0454 15.1259 19.8503C14.7454 19.4593 14.3397 18.9449 14.0451 18.569L13.706 18.1006C13.6407 17.9924 13.3387 17.4922 13.6137 16.9254C13.888 16.3598 14.4641 16.288 14.5905 16.2722L14.5939 16.2718Z',
  d7: 'M6.00011 4.86591C5.68076 5.04991 5.27144 5.04965 4.94431 4.83095C4.48518 4.52399 4.36183 3.90296 4.66879 3.44383C4.97583 2.98535 5.36739 2.52834 5.84651 2.24342C6.07607 2.10691 6.53348 1.89514 7.06603 2.06038C7.3255 2.14088 7.55548 2.30077 7.72022 2.53446C7.86742 2.74326 7.92592 2.95946 7.95395 3.10795C8.00082 3.35624 8.00044 3.65881 8.00015 3.89527C7.99804 5.59683 8.00011 7.29841 8.00011 8.99997H8.5001C9.05239 8.99997 9.5001 9.44768 9.5001 9.99997C9.5001 10.5523 9.05239 11 8.5001 11H5.50011C4.94782 11 4.50011 10.5523 4.50011 9.99997C4.50011 9.44768 4.94782 8.99997 5.50011 8.99997H6.00011V4.86591Z',
  d8: 'M6.95005 13C6.96667 13 6.98333 13 7.00003 13C7.01672 13 7.03338 13 7.05 13C7.47814 12.9999 7.88259 12.9999 8.21413 13.0389C8.57513 13.0814 8.99995 13.1837 9.36564 13.5037C9.75054 13.8405 9.89409 14.2624 9.95182 14.638C10.0003 14.9536 10.0002 15.3309 10 15.6943C10 15.7129 10 15.7315 10 15.75V18.375C10 18.3967 10 18.4183 10 18.4399C10.0001 19.0024 10.0002 19.5329 9.93351 19.967C9.85748 20.4618 9.67732 20.9673 9.21919 21.3682C8.78028 21.7522 8.25992 21.8866 7.76277 21.9451C7.29536 22.0001 6.7151 22.0001 6.05591 22L5.00003 22C4.44774 22 4.00003 21.5523 4.00003 21C4.00003 20.4477 4.44774 20 5.00003 20H6.00003C6.73195 20 7.19273 19.9984 7.5291 19.9588C7.84435 19.9217 7.9002 19.865 7.90213 19.8631L7.90356 19.8619C7.90539 19.8604 7.90584 19.8601 7.90972 19.8518C7.91833 19.8335 7.9386 19.7811 7.95671 19.6633C7.9946 19.4167 7.9995 19.0746 7.99998 18.5H7.00003C6.98333 18.5 6.96667 18.5 6.95005 18.5C6.52191 18.5001 6.11746 18.5001 5.78592 18.4611C5.42493 18.4187 5.00011 18.3163 4.63441 17.9963C4.24951 17.6595 4.10596 17.2377 4.04824 16.862C3.99975 16.5464 3.99989 16.1691 4.00001 15.8057C4.00002 15.7871 4.00003 15.7685 4.00003 15.75C4.00003 15.7315 4.00002 15.7129 4.00001 15.6943C3.99989 15.3309 3.99975 14.9536 4.04824 14.638C4.10596 14.2624 4.24951 13.8405 4.63441 13.5037C5.00011 13.1837 5.42492 13.0814 5.78592 13.0389C6.11746 12.9999 6.52192 12.9999 6.95005 13ZM8.00003 16.5V15.75C8.00003 15.5395 7.99994 15.3748 7.99587 15.2335C7.99335 15.1463 7.98953 15.0788 7.98482 15.0257L7.98046 15.0252C7.78025 15.0016 7.49624 15 7.00003 15C6.50381 15 6.2198 15.0016 6.01959 15.0252L6.01523 15.0257C6.01052 15.0788 6.0067 15.1463 6.00419 15.2335C6.00011 15.3748 6.00003 15.5395 6.00003 15.75C6.00003 15.9605 6.00011 16.1253 6.00419 16.2666C6.0067 16.3537 6.01052 16.4213 6.01523 16.4743L6.01959 16.4748C6.2198 16.4984 6.50381 16.5 7.00003 16.5H8.00003Z',
  d9: 'M7.25 10.0002V3H6.6079L5.25 4.5M7.25 10.0002L5.25 10M7.25 10.0002H9.25',
  d10: 'M9.25 17.5V14H5.25V17.5H9.25ZM9.25 17.5V21H4.75',
  d11: 'M16.75 4V19.195M14.25 17.5L16.75 20L19.25 17.5',
  d12: 'M6.65562 2H8.74135V9.00025H9.74135V11.0002H7.74135L5.74123 11L5.74147 9L6.74135 9.00012V4.8854L6.4827 5.17112L5 3.82888L6.65562 2Z',
  d13: 'M4.5 13H10.5V22H4.5V20H8.5V18.5H4.5V13ZM8.5 16.5V15H6.5V16.5H8.5Z',
  d14: 'M17.293 3.29297V16.8788L18.0859 16.0859L19.5002 17.5001L16.293 20.7072L13.0859 17.5001L14.5002 16.0859L15.293 16.8788V3.29297H17.293Z',
} as const;

export const IconSorting19StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-stroke-rounded IconSorting19StrokeRounded"
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

export const IconSorting19DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-duotone-rounded IconSorting19DuotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting19TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-twotone-rounded IconSorting19TwotoneRounded"
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

export const IconSorting19SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-solid-rounded IconSorting19SolidRounded"
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

export const IconSorting19BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-bulk-rounded IconSorting19BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSorting19StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-stroke-sharp IconSorting19StrokeSharp"
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSorting19SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sorting-1-9-solid-sharp IconSorting19SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSorting19: TheIconSelfPack = {
  name: 'Sorting19',
  StrokeRounded: IconSorting19StrokeRounded,
  DuotoneRounded: IconSorting19DuotoneRounded,
  TwotoneRounded: IconSorting19TwotoneRounded,
  SolidRounded: IconSorting19SolidRounded,
  BulkRounded: IconSorting19BulkRounded,
  StrokeSharp: IconSorting19StrokeSharp,
  SolidSharp: IconSorting19SolidSharp,
};
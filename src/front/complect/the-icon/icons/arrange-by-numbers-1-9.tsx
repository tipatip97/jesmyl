import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 10.0003V3.94909C7 3.37458 7 3.08732 6.76959 3.01583C6.26306 2.85867 5.5 4 5.5 4M7 10.0003H5.5M7 10.0003H8.5',
  d2: 'M9 17.5V15.75C9 14.925 9 14.5126 8.70711 14.2563C8.41421 14 7.94281 14 7 14C6.05719 14 5.58579 14 5.29289 14.2563C5 14.5126 5 14.925 5 15.75C5 16.575 5 16.9874 5.29289 17.2437C5.58579 17.5 6.05719 17.5 7 17.5H9ZM9 17.5V18.375C9 19.6124 9 20.2312 8.56066 20.6156C8.12132 21 7.41421 21 6 21H5',
  d3: 'M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5',
  d4: 'M9 17.5V15.75C9 14.925 9 14.5126 8.70711 14.2563C8.41421 14 7.94281 14 7 14C6.05719 14 5.58579 14 5.29289 14.2563C5 14.5126 5 14.925 5 15.75C5 16.575 5 16.9874 5.29289 17.2437C5.58579 17.5 6.05719 17.5 7 17.5H9Z',
  d5: 'M7 9.99936V3.94812C7 3.3736 7 3.08634 6.76959 3.01485C6.26306 2.85769 5.5 3.99902 5.5 3.99902M7 9.99936H5.5M7 9.99936H8.5',
  d6: 'M6.00011 4.86591C5.68076 5.04991 5.27144 5.04965 4.94431 4.83095C4.48518 4.52399 4.36183 3.90296 4.66879 3.44383L4.83108 3.21868C4.92457 3.09565 5.06069 2.92639 5.22224 2.75746C5.37649 2.59616 5.59163 2.39499 5.84651 2.24342C6.07607 2.10691 6.53348 1.89514 7.06603 2.06038C7.3255 2.14088 7.55548 2.30077 7.72022 2.53446C7.86742 2.74326 7.92592 2.95946 7.95395 3.10795C8.00082 3.35624 8.00044 3.65881 8.00015 3.89527L8.00011 8.49997C8.00011 8.68689 8.00011 8.78035 8.0403 8.84997C8.06663 8.89558 8.1045 8.93345 8.15011 8.95978C8.21972 8.99997 8.31318 8.99997 8.5001 8.99997C9.05239 8.99997 9.5001 9.44768 9.5001 9.99997C9.5001 10.5523 9.05239 11 8.5001 11H5.50011C4.94782 11 4.50011 10.5523 4.50011 9.99997C4.50011 9.44768 4.94782 8.99997 5.50011 8.99997C5.68703 8.99997 5.78049 8.99997 5.85011 8.95978C5.89571 8.93345 5.93358 8.89558 5.95991 8.84997C6.00011 8.78035 6.00011 8.68689 6.00011 8.49997V4.86591Z',
  d7: 'M6.95005 13C6.96667 13 6.98333 13 7.00003 13C7.01672 13 7.03338 13 7.05 13C7.47814 12.9999 7.88259 12.9999 8.21413 13.0389C8.57513 13.0814 8.99995 13.1837 9.36564 13.5037C9.75054 13.8405 9.89409 14.2624 9.95182 14.638C10.0003 14.9536 10.0002 15.3309 10 15.6943C10 15.7129 10 15.7315 10 15.75V18.375C10 18.3967 10 18.4183 10 18.4399C10.0001 19.0024 10.0002 19.5329 9.93351 19.967C9.85748 20.4618 9.67732 20.9673 9.21919 21.3682C8.78028 21.7522 8.25992 21.8866 7.76277 21.9451C7.29536 22.0001 6.7151 22.0001 6.05591 22L5.00003 22C4.44774 22 4.00003 21.5523 4.00003 21C4.00003 20.4477 4.44774 20 5.00003 20H6.00003C6.73195 20 7.19273 19.9984 7.5291 19.9588C7.84435 19.9217 7.9002 19.865 7.90213 19.8631L7.90356 19.8619C7.90539 19.8604 7.90584 19.8601 7.90972 19.8518C7.91833 19.8335 7.9386 19.7811 7.95671 19.6633C7.97901 19.5181 7.98989 19.3399 7.99516 19.1006C8.00132 18.8205 8.00441 18.6804 7.91615 18.5902C7.8279 18.5 7.68509 18.5 7.39948 18.5H7.00003C6.98333 18.5 6.96667 18.5 6.95005 18.5C6.52191 18.5001 6.11746 18.5001 5.78592 18.4611C5.42493 18.4187 5.00011 18.3163 4.63441 17.9963C4.24951 17.6595 4.10596 17.2377 4.04824 16.862C3.99975 16.5464 3.99989 16.1691 4.00001 15.8057C4.00002 15.7871 4.00003 15.7685 4.00003 15.75C4.00003 15.7315 4.00002 15.7129 4.00001 15.6943C3.99989 15.3309 3.99975 14.9536 4.04824 14.638C4.10596 14.2624 4.24951 13.8405 4.63441 13.5037C5.00011 13.1837 5.42492 13.0814 5.78592 13.0389C6.11746 12.9999 6.52192 12.9999 6.95005 13ZM7.40003 16.5C7.68287 16.5 7.82429 16.5 7.91216 16.4121C8.00003 16.3243 8.00003 16.1829 8.00003 15.9V15.75C8.00003 15.5395 7.99994 15.3748 7.99587 15.2335C7.99342 15.1487 7.98974 15.0825 7.9852 15.0301C7.98498 15.0275 7.983 15.0255 7.98046 15.0252C7.78025 15.0016 7.49624 15 7.00003 15C6.50381 15 6.2198 15.0016 6.01959 15.0252C6.01705 15.0255 6.01507 15.0275 6.01485 15.0301C6.01032 15.0825 6.00663 15.1487 6.00419 15.2335C6.00011 15.3748 6.00003 15.5395 6.00003 15.75C6.00003 15.9605 6.00011 16.1253 6.00419 16.2666C6.00663 16.3513 6.01032 16.4176 6.01485 16.4699C6.01507 16.4725 6.01705 16.4745 6.01959 16.4748C6.2198 16.4984 6.50381 16.5 7.00003 16.5H7.40003Z',
  d8: 'M17.7559 4C17.7559 3.44772 17.3081 3 16.7559 3C16.2036 3 15.7559 3.44772 15.7559 4L15.7559 16.5L15.1616 16.5C14.986 16.4999 14.7703 16.4997 14.5939 16.5218L14.5905 16.5222C14.4641 16.538 13.888 16.6098 13.6137 17.1754C13.3387 17.7423 13.6407 18.2424 13.706 18.3506L13.7084 18.3546C13.8006 18.5076 13.9348 18.6785 14.0451 18.8191L14.0688 18.8493C14.3635 19.2252 14.7454 19.7094 15.1259 20.1004C15.3157 20.2955 15.533 20.4967 15.7639 20.6556C15.9691 20.7968 16.3193 21 16.75 21C17.1807 21 17.5309 20.7968 17.7361 20.6556C17.967 20.4967 18.1843 20.2955 18.3741 20.1004C18.7546 19.7094 19.1365 19.2252 19.4312 18.8493L19.4549 18.8191C19.5652 18.6785 19.6994 18.5077 19.7916 18.3546L19.794 18.3506C19.8593 18.2424 20.1613 17.7422 19.8863 17.1754C19.612 16.6098 19.0359 16.538 18.9095 16.5222L18.9061 16.5218C18.7297 16.4997 18.514 16.4999 18.3384 16.5L17.7559 16.5L17.7559 4Z',
  d9: 'M7 10.0002V3H6.3579L5 4.5M7 10.0002L5 10M7 10.0002H9',
  d10: 'M9 17.5V14H5V17.5H9ZM9 17.5V21H4.5',
  d11: 'M16.5 4V19.4753M14 17.5L16.5 20L19 17.5',
  d12: 'M6.65562 2H8.74135V9.00025H9.74135V11.0002H7.74135L5.74123 11L5.74147 9L6.74135 9.00012V4.8854L6.4827 5.17112L5 3.82888L6.65562 2Z',
  d13: 'M4.5 13H10.5V22H4.5V20H8.5V18.5H4.5V13ZM8.5 16.5V15H6.5V16.5H8.5Z',
  d14: 'M17.293 3.29297V16.8788L18.0859 16.0859L19.5002 17.5001L16.293 20.7072L13.0859 17.5001L14.5002 16.0859L15.293 16.8788V3.29297H17.293Z',
} as const;

export const IconArrangeByNumbers19StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-stroke-rounded IconArrangeByNumbers19StrokeRounded"
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

export const IconArrangeByNumbers19DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-duotone-rounded IconArrangeByNumbers19DuotoneRounded"
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

export const IconArrangeByNumbers19TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-twotone-rounded IconArrangeByNumbers19TwotoneRounded"
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

export const IconArrangeByNumbers19SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-solid-rounded IconArrangeByNumbers19SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByNumbers19BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-bulk-rounded IconArrangeByNumbers19BulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrangeByNumbers19StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-stroke-sharp IconArrangeByNumbers19StrokeSharp"
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

export const IconArrangeByNumbers19SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrange-by-numbers-1-9-solid-sharp IconArrangeByNumbers19SolidSharp"
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

export const iconPackOfArrangeByNumbers19: TheIconSelfPack = {
  name: 'ArrangeByNumbers19',
  StrokeRounded: IconArrangeByNumbers19StrokeRounded,
  DuotoneRounded: IconArrangeByNumbers19DuotoneRounded,
  TwotoneRounded: IconArrangeByNumbers19TwotoneRounded,
  SolidRounded: IconArrangeByNumbers19SolidRounded,
  BulkRounded: IconArrangeByNumbers19BulkRounded,
  StrokeSharp: IconArrangeByNumbers19StrokeSharp,
  SolidSharp: IconArrangeByNumbers19SolidSharp,
};
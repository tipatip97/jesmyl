import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 7L4 21',
  d2: 'M11.7576 3.90865C8.45236 2.22497 5.85125 3.21144 4.55426 4.2192C4.32048 4.40085 4.20358 4.49167 4.10179 4.69967C4 4.90767 4 5.10138 4 5.4888V14.7319C4.9697 13.6342 7.87879 11.9328 11.7576 13.9086C15.224 15.6744 18.1741 14.9424 19.5697 14.1795C19.7633 14.0737 19.8601 14.0207 19.9301 13.9028C20 13.7849 20 13.6569 20 13.4009V5.87389C20 5.04538 20 4.63113 19.8027 4.48106C19.6053 4.33099 19.1436 4.459 18.2202 4.71504C16.64 5.15319 14.3423 5.22532 11.7576 3.90865Z',
  d3: 'M12.0992 3.24076C8.49724 1.40591 5.58647 2.46876 4.09534 3.62736C3.87875 3.79513 3.60842 4.00454 3.42937 4.3704C3.24916 4.73864 3.25019 5.09828 3.25111 5.42129L3.25098 20.7505C3.25098 21.3028 3.69869 21.7505 4.25098 21.7505C4.80326 21.7505 5.25098 21.3028 5.25098 20.7505L5.25098 14.9583C5.25098 14.7996 5.25098 14.7202 5.29075 14.6509C5.33053 14.5815 5.39362 14.5446 5.51979 14.4708C6.73875 13.758 8.81137 13.2493 11.4184 14.5773C15.1333 16.4697 18.3465 15.704 19.9307 14.838C20.0879 14.7538 20.3972 14.5879 20.5764 14.2858C20.7569 13.9815 20.7532 13.5956 20.7512 13.4013L20.7512 5.83419C20.7513 5.45456 20.7513 5.10916 20.7221 4.84205C20.696 4.60284 20.6277 4.1657 20.2579 3.88447C20.0497 3.72616 19.8213 3.68039 19.6479 3.67004C19.4773 3.65985 19.306 3.68077 19.1542 3.70766C18.863 3.75922 18.4511 3.87345 18.021 3.99272C16.604 4.38564 14.5012 4.46434 12.0992 3.24076Z',
  d4: 'M4.09534 3.62544C3.87875 3.7932 3.60842 4.00262 3.42937 4.36847C3.24916 4.73671 3.25019 5.09636 3.25111 5.41937L3.25098 20.7486C3.25098 21.3008 3.69869 21.7486 4.25098 21.7486C4.80326 21.7486 5.25098 21.3008 5.25098 20.7486L5.25098 14.9564C5.25098 14.8945 5.25098 14.8446 5.25334 14.8027C5.27812 14.3629 5.29051 14.1429 5.29063 14.1387C5.29073 14.1352 5.29075 14.5449 5.29075 14.5449L5.29075 14.489V2.89844C4.82759 3.11559 4.42646 3.36816 4.09534 3.62544Z',
  d5: 'M4 14V21',
  d6: 'M4.00879 4.42176V14.7029C5.7031 13.0186 8.78458 12.3729 11.6459 13.9137C14.5073 15.4544 17.8704 15.1151 19.9953 14.1043V4.03907C18.1718 4.88306 15.3523 5.52146 12.1384 4.03907C8.54806 1.99974 5.31197 3.42984 4.01262 4.41389C4.01012 4.41578 4.00879 4.41863 4.00879 4.42176Z',
  d7: 'M20.75 3.34308L19.6902 3.824L19.6893 3.82444L19.6836 3.82697L19.6585 3.83812C19.6358 3.84815 19.6014 3.86317 19.557 3.88218C19.4679 3.92024 19.3389 3.97408 19.1819 4.0358C18.8659 4.16005 18.4464 4.31248 18.0174 4.43296C16.6024 4.83039 14.5021 4.91039 12.1015 3.67169C8.46316 1.79434 4.9928 3.18247 3.53615 4.32893C3.35547 4.47113 3.25 4.68836 3.25 4.91828V21.2515H5.25L5.25 15.1999C6.41745 14.3969 8.60499 13.6849 11.4137 15.1341C15.1557 17.065 18.8064 16.0853 20.3633 15.2232L20.75 15.0091V3.34308Z',
} as const;

export const IconFlag02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-stroke-rounded IconFlag02StrokeRounded"
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

export const IconFlag02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-duotone-rounded IconFlag02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconFlag02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-twotone-rounded IconFlag02TwotoneRounded"
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

export const IconFlag02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-solid-rounded IconFlag02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlag02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-bulk-rounded IconFlag02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlag02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-stroke-sharp IconFlag02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFlag02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flag-02-solid-sharp IconFlag02SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlag02: TheIconSelfPack = {
  name: 'Flag02',
  StrokeRounded: IconFlag02StrokeRounded,
  DuotoneRounded: IconFlag02DuotoneRounded,
  TwotoneRounded: IconFlag02TwotoneRounded,
  SolidRounded: IconFlag02SolidRounded,
  BulkRounded: IconFlag02BulkRounded,
  StrokeSharp: IconFlag02StrokeSharp,
  SolidSharp: IconFlag02SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z',
  d2: 'M13 4L20 11',
  d3: 'M14 22L22 22',
  d4: 'M3.26538 21.9613L3.54536 21.9686C5.6032 22.0224 6.63212 22.0493 7.56806 21.6837C8.504 21.3182 9.25287 20.5969 10.7506 19.1543L10.7506 19.1543L19.655 10.5779L13.5 4.5L4.78943 13.9445C3.57944 15.2555 2.97444 15.9109 2.62371 16.7182C2.27297 17.5255 2.20301 18.4235 2.06308 20.2197L2.03608 20.5662C1.98636 21.2043 1.9615 21.5234 2.14359 21.73C2.32567 21.9367 2.63891 21.9449 3.26538 21.9613Z',
  d5: 'M12.748 21.75C12.748 21.1977 13.1958 20.75 13.748 20.75L21.748 20.75C22.3003 20.75 22.748 21.1977 22.748 21.75C22.748 22.3023 22.3003 22.75 21.748 22.75L13.748 22.75C13.1958 22.75 12.748 22.3023 12.748 21.75Z',
  d6: 'M19.0527 1.7366C17.8479 1.06772 16.3869 1.0898 15.2023 1.79431C14.8262 2.01799 14.479 2.35124 14.0419 2.81506C13.8559 3.01232 13.763 3.11094 13.7648 3.2326C13.7666 3.35426 13.8634 3.45109 14.0571 3.64476L20.4484 10.036C20.6461 10.2338 20.745 10.3327 20.8689 10.3329C20.9928 10.3332 21.0908 10.236 21.2869 10.0416C21.7077 9.62443 22.0127 9.28622 22.2202 8.92206C22.9038 7.72256 22.9249 6.24777 22.2764 5.02866C22.006 4.52051 21.5507 4.05569 20.8704 3.36116L20.6863 3.17307C20.0083 2.48005 19.5525 2.01406 19.0527 1.7366Z',
  d7: 'M18.9837 12.2642C19.1909 12.0646 19.2945 11.9648 19.2957 11.8389C19.2969 11.713 19.1952 11.6113 18.9917 11.4078L12.7336 5.14972C12.5262 4.94228 12.4225 4.83856 12.2947 4.84112C12.1669 4.84367 12.0674 4.95146 11.8684 5.16704L4.14251 13.5377C3.02245 14.7509 2.33596 15.4944 1.93411 16.4194C1.53303 17.3425 1.45405 18.3582 1.32491 20.019L1.32469 20.0219C1.32445 20.0248 1.2392 21.1155 1.25236 21.3517C1.26726 21.6191 1.33095 21.9442 1.57916 22.2259C1.82961 22.5101 2.14618 22.6123 2.41271 22.6568C2.64454 22.6955 3.68873 22.7227 3.69083 22.7227C5.58798 22.7727 6.76074 22.8036 7.83921 22.3823C8.91615 21.9617 9.76721 21.1417 11.1481 19.8112L18.9837 12.2642Z',
  d8: 'M19.0526 1.7366C17.8478 1.06772 16.3868 1.0898 15.2022 1.79431C14.8261 2.01799 14.4789 2.35124 14.0417 2.81506C13.8558 3.01232 13.7629 3.11094 13.7647 3.2326C13.7665 3.35426 13.8633 3.45109 14.057 3.64476L20.4483 10.036C20.646 10.2338 20.7449 10.3327 20.8688 10.3329C20.9927 10.3332 21.0907 10.236 21.2868 10.0416C21.7076 9.62443 22.0126 9.28622 22.2201 8.92206C22.9037 7.72256 22.9248 6.24777 22.2763 5.02866C22.0059 4.52051 21.5506 4.05569 20.8703 3.36116L20.6862 3.17307C20.0082 2.48005 19.5523 2.01406 19.0526 1.7366Z',
  d9: 'M18.9837 12.263C19.1909 12.0634 19.2945 11.9636 19.2957 11.8377C19.2969 11.7118 19.1952 11.61 18.9917 11.4066L12.7336 5.1485C12.5262 4.94105 12.4225 4.83733 12.2947 4.83989C12.1669 4.84245 12.0674 4.95024 11.8684 5.16582L4.14251 13.5365C3.02245 14.7497 2.33596 15.4932 1.93411 16.4181C1.53303 17.3413 1.45405 18.357 1.32491 20.0178L1.32469 20.0207C1.32445 20.0236 1.2392 21.1143 1.25236 21.3504C1.26726 21.6179 1.33095 21.943 1.57916 22.2247C1.82961 22.5089 2.14618 22.6111 2.41271 22.6556C2.64454 22.6942 3.68873 22.7214 3.69083 22.7215C5.58798 22.7715 6.76074 22.8023 7.83921 22.3811C8.91615 21.9605 9.76721 21.1405 11.1481 19.81L18.9837 12.263Z',
  d10: 'M11.9756 6.00049L17.991 12.0005',
  d11: 'M12.9766 22.0005H21.9998',
  d12: 'M2.00013 16.0079L15.9623 2.00418C15.9684 1.998 15.9784 1.99795 15.9846 2.00407L21.9888 8.00014C21.9927 8.00405 21.9927 8.01037 21.9888 8.01428L7.99205 21.9998H2L2.00013 16.0079Z',
  d13: 'M22 22L13 22L13 20L22 20L22 22Z',
  d14: 'M18.5298 11.4693L21.9991 8L15.9991 2L12.5302 5.46912L18.5298 11.4693Z',
  d15: 'M17.4691 12.53L11.4696 6.52981L2 16V22H7.99908L17.4691 12.53Z',
} as const;

export const IconEdit02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-stroke-rounded IconEdit02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEdit02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-duotone-rounded IconEdit02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEdit02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-twotone-rounded IconEdit02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEdit02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-solid-rounded IconEdit02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEdit02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-bulk-rounded IconEdit02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEdit02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-stroke-sharp IconEdit02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconEdit02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="edit-02-solid-sharp IconEdit02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEdit02: TheIconSelfPack = {
  name: 'Edit02',
  StrokeRounded: IconEdit02StrokeRounded,
  DuotoneRounded: IconEdit02DuotoneRounded,
  TwotoneRounded: IconEdit02TwotoneRounded,
  SolidRounded: IconEdit02SolidRounded,
  BulkRounded: IconEdit02BulkRounded,
  StrokeSharp: IconEdit02StrokeSharp,
  SolidSharp: IconEdit02SolidSharp,
};
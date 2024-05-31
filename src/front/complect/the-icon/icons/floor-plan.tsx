import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.7191 21.352 18.6251 21.7133 17 21.8731',
  d2: 'M12 22C12 19.2386 14.2386 17 17 17',
  d3: 'M2 9H14',
  d4: 'M18 9L22 9',
  d5: 'M9 22V9',
  d6: 'M9 5L9 2',
  d7: 'M12.5882 2C17.025 2 19.2434 2 20.6217 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.6217 20.8284C19.2434 22 17.025 22 12.5882 22H11.4118C6.97502 22 4.75664 22 3.37832 20.8284C2 19.6569 2 17.7712 2 14L2 10C2 6.22876 2 4.34315 3.37832 3.17157C4.75664 2 6.97502 2 11.4118 2L12.5882 2Z',
  d8: 'M8 1.93421C8 1.63679 8 1.48809 7.90414 1.39907C7.80828 1.31006 7.66261 1.32085 7.37127 1.34244C7.03337 1.36748 6.71451 1.3993 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.3993 6.71451 1.36748 7.03337 1.34244 7.37127C1.32085 7.66262 1.31006 7.80829 1.39907 7.90414C1.48809 8 1.63679 8 1.93421 8H14C14.5523 8 15 8.44772 15 9C15 9.55229 14.5523 10 14 10H10.6C10.3172 10 10.1757 10 10.0879 10.0879C10 10.1757 10 10.3172 10 10.6V22.1499C10 22.4308 10 22.5712 10.0875 22.659C10.1749 22.7468 10.3149 22.7474 10.5949 22.7484C11.0241 22.75 11.473 22.75 11.9426 22.75C11.9743 22.75 12 22.7243 12 22.6926V22C12 18.6863 14.6863 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18C15.7909 18 14 19.7909 14 22V22.1398C14 22.4254 14 22.5682 14.0896 22.6563C14.1791 22.7445 14.3211 22.7422 14.6052 22.7377C15.7556 22.7194 16.7421 22.6738 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 11.473 22.75 11.0241 22.7484 10.5949C22.7474 10.3149 22.7468 10.1749 22.659 10.0875C22.5712 10 22.4308 10 22.1499 10H18C17.4477 10 17 9.55229 17 9C17 8.44772 17.4477 8 18 8H22.0658C22.3632 8 22.5119 8 22.6009 7.90414C22.6899 7.80829 22.6791 7.66262 22.6576 7.37127C22.6325 7.03337 22.6007 6.71451 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H12.0574H11.9426H11.9426C11.473 1.25 11.0241 1.25 10.5949 1.25159C10.3149 1.25263 10.1749 1.25315 10.0875 1.34095C10 1.42875 10 1.56919 10 1.85005L10 5C10 5.55229 9.55229 6 9 6C8.44772 6 8 5.55229 8 5L8 1.93421ZM7.37127 22.6576C7.66262 22.6791 7.80829 22.6899 7.90414 22.6009C8 22.5119 8 22.3632 8 22.0658V10.6C8 10.3172 8 10.1757 7.91213 10.0879C7.82426 10 7.68284 10 7.4 10H1.85005C1.56919 10 1.42875 10 1.34095 10.0875C1.25315 10.1749 1.25263 10.3149 1.25159 10.5949C1.25 11.0241 1.25 11.473 1.25 11.9426V11.9426V12.0574V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C6.71451 22.6007 7.03337 22.6325 7.37127 22.6576Z',
  d9: 'M12.0574 1.25C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V12.0574V11.9426V11.9426C1.24999 9.63422 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63422 1.24999 11.9426 1.25H11.9426H12.0574H12.0574Z',
  d10: 'M14 22.7449C13.3954 22.75 12.7488 22.75 12.0574 22.75H12V22C12 18.6863 14.6863 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18C15.7909 18 14 19.7909 14 22V22.7449Z',
  d11: 'M1.25391 9.99882C1.26002 9.27312 1.27349 8.60803 1.30313 7.99882H13.9988C14.5511 7.99882 14.9988 8.44653 14.9988 8.99882C14.9988 9.5511 14.5511 9.99882 13.9988 9.99882H9.99882V22.7437C9.27312 22.7376 8.60803 22.7241 7.99882 22.6945V9.99882H1.25391Z',
  d12: 'M22.6945 7.99882C22.7241 8.60803 22.7376 9.27312 22.7437 9.99882H17.9988C17.4465 9.99882 16.9988 9.5511 16.9988 8.99882C16.9988 8.44653 17.4465 7.99882 17.9988 7.99882H22.6945Z',
  d13: 'M9.99882 1.25391L9.99882 4.99882C9.99882 5.5511 9.5511 5.99882 8.99882 5.99882C8.44653 5.99882 7.99882 5.5511 7.99882 4.99882L7.99882 1.30313C8.60803 1.27349 9.27312 1.26002 9.99882 1.25391Z',
  d14: 'M3 9H14',
  d15: 'M18 9H20.9998',
  d16: 'M9.00098 21V9',
  d17: 'M9.00098 6V3',
  d18: 'M16.8199 21H20.8091C20.8146 21 20.8191 20.9955 20.8191 20.99V3.01001C20.8191 3.00448 20.8146 3 20.8091 3H2.82445C2.81893 3 2.81445 3.00448 2.81445 3.01001L2.8145 20.99C2.8145 20.9955 2.81898 21 2.8245 21H12.8259C12.8259 18.2738 15.1735 16.9834 16.8199 16.9834',
  d19: 'M8 2.25H3.00017C2.58596 2.25 2.25018 2.58578 2.25017 2.99999L2.25013 8H14V10H10V21.75H13V21C13.0005 18.2392 15.2387 16 18 16L18 18C16.3437 18 15.0004 19.3434 15 21.0002V21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V10H18V8H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H10L10 6H8L8 2.25Z',
  d20: 'M8 21.75V10H2.25011L2.25 21C2.25 21.1989 2.32901 21.3897 2.46967 21.5303C2.61032 21.671 2.80109 21.75 3 21.75H8Z',
} as const;

export const IconFloorPlanStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-stroke-rounded IconFloorPlanStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFloorPlanDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-duotone-rounded IconFloorPlanDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFloorPlanTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-twotone-rounded IconFloorPlanTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFloorPlanSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-solid-rounded IconFloorPlanSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFloorPlanBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-bulk-rounded IconFloorPlanBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFloorPlanStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-stroke-sharp IconFloorPlanStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFloorPlanSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="floor-plan-solid-sharp IconFloorPlanSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFloorPlan: TheIconSelfPack = {
  name: 'FloorPlan',
  StrokeRounded: IconFloorPlanStrokeRounded,
  DuotoneRounded: IconFloorPlanDuotoneRounded,
  TwotoneRounded: IconFloorPlanTwotoneRounded,
  SolidRounded: IconFloorPlanSolidRounded,
  BulkRounded: IconFloorPlanBulkRounded,
  StrokeSharp: IconFloorPlanStrokeSharp,
  SolidSharp: IconFloorPlanSolidSharp,
};
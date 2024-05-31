import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.5 19.5H13.5C10.6716 19.5 9.25736 19.5 8.37868 18.6213C7.5 17.7426 7.5 16.3284 7.5 13.5V11.5M7.5 8V11.5M7.5 11.5H12',
  d2: 'M14.5 19.5C14.5 18.3215 14.5 17.7322 14.8515 17.3661C15.2029 17 15.7686 17 16.9 17H18.1C19.2314 17 19.7971 17 20.1485 17.3661C20.5 17.7322 20.5 18.3215 20.5 19.5C20.5 20.6785 20.5 21.2678 20.1485 21.6339C19.7971 22 19.2314 22 18.1 22H16.9C15.7686 22 15.2029 22 14.8515 21.6339C14.5 21.2678 14.5 20.6785 14.5 19.5Z',
  d3: 'M5.78571 2H9.21429C11.2888 2 11.5 3.10993 11.5 5C11.5 6.89007 11.2888 8 9.21429 8H5.78571C3.7112 8 3.5 6.89007 3.5 5C3.5 3.10993 3.7112 2 5.78571 2Z',
  d4: 'M17.5 9V14M20 11.5L15 11.5',
  d5: 'M7.5 7C8.05229 7 8.5 7.44772 8.5 8V10.5H12C12.5523 10.5 13 10.9477 13 11.5C13 12.0523 12.5523 12.5 12 12.5H8.5V13.5C8.5 14.9425 8.50213 15.9237 8.60092 16.6586C8.69585 17.3646 8.86322 17.6916 9.08579 17.9142C9.30836 18.1368 9.63538 18.3042 10.3414 18.3991C11.0763 18.4979 12.0575 18.5 13.5 18.5H14.5C15.0523 18.5 15.5 18.9477 15.5 19.5C15.5 20.0523 15.0523 20.5 14.5 20.5L13.4294 20.5C12.0753 20.5 10.9587 20.5001 10.0749 20.3812C9.14711 20.2565 8.32768 19.9845 7.67158 19.3284C7.01547 18.6723 6.7435 17.8529 6.61875 16.9251C6.49994 16.0413 6.49997 14.9247 6.5 13.5706L6.5 8C6.5 7.44772 6.94772 7 7.5 7Z',
  d6: 'M17.5 8C18.0523 8 18.5 8.44772 18.5 9V10.5H20C20.5523 10.5 21 10.9477 21 11.5C21 12.0523 20.5523 12.5 20 12.5H18.5V14C18.5 14.5523 18.0523 15 17.5 15C16.9477 15 16.5 14.5523 16.5 14V12.5H15C14.4477 12.5 14 12.0523 14 11.5C14 10.9477 14.4477 10.5 15 10.5L16.5 10.5V9C16.5 8.44772 16.9477 8 17.5 8Z',
  d7: 'M16.8516 16.25L16.9 16.25H18.1L18.1484 16.25C18.6725 16.25 19.1415 16.2499 19.5208 16.303C19.9364 16.3612 20.3527 16.4958 20.6896 16.8467C21.0224 17.1934 21.1459 17.6143 21.1999 18.0324C21.2501 18.4212 21.25 18.9042 21.25 19.454V19.546C21.25 20.0958 21.2501 20.5788 21.1999 20.9676C21.1459 21.3857 21.0224 21.8066 20.6896 22.1533C20.3527 22.5042 19.9364 22.6388 19.5208 22.697C19.1415 22.7501 18.6725 22.7501 18.1484 22.75L18.1 22.75H16.9L16.8516 22.75C16.3275 22.7501 15.8585 22.7501 15.4793 22.697C15.0636 22.6388 14.6473 22.5042 14.3104 22.1533C13.9777 21.8066 13.8541 21.3857 13.8001 20.9676C13.7499 20.5788 13.75 20.0958 13.75 19.546L13.75 19.5L13.75 19.454C13.75 18.9042 13.7499 18.4212 13.8001 18.0324C13.8541 17.6143 13.9777 17.1934 14.3104 16.8467C14.6473 16.4958 15.0636 16.3612 15.4793 16.303C15.8585 16.2499 16.3275 16.25 16.8516 16.25L16.8516 16.25Z',
  d8: 'M3.22393 2.40181C3.72979 1.56916 4.62113 1.25 5.78571 1.25H9.21429C10.3789 1.25 11.2702 1.56916 11.7761 2.40181C12.2139 3.12249 12.25 4.08766 12.25 5C12.25 5.91234 12.2139 6.87751 11.7761 7.59819C11.2702 8.43084 10.3789 8.75 9.21429 8.75H5.78571C4.62113 8.75 3.72979 8.43084 3.22393 7.59819C2.7861 6.87751 2.75 5.91234 2.75 5C2.75 4.08766 2.7861 3.12249 3.22393 2.40181Z',
  d9: 'M6.5 8.75L6.5 13.5706C6.49997 14.9247 6.49994 16.0413 6.61876 16.9251C6.7435 17.8529 7.01547 18.6723 7.67158 19.3284C8.32769 19.9845 9.14711 20.2565 10.0749 20.3812C10.9587 20.5001 12.0753 20.5 13.4294 20.5L13.7625 20.5C13.75 20.2132 13.75 19.8929 13.75 19.546V19.454C13.75 19.1071 13.75 18.7868 13.7625 18.5H13.5C12.0575 18.5 11.0763 18.4979 10.3414 18.3991C9.63538 18.3042 9.30836 18.1368 9.08579 17.9142C8.86322 17.6916 8.69585 17.3646 8.60092 16.6586C8.50213 15.9237 8.5 14.9425 8.5 13.5V12.5H12C12.5523 12.5 13 12.0523 13 11.5C13 10.9477 12.5523 10.5 12 10.5H8.5V8.75H6.5Z',
  d10: 'M14.5 19.5H7.5V11.5M7.5 8V11.5M7.5 11.5H13',
  d11: 'M20.5 22V17H14.5V22H20.5Z',
  d12: 'M11.5 8V2H3.5V8H11.5Z',
  d13: 'M6.5 8H8.5V10.5H13V12.5H8.5V18.5H14.5V20.5H7.5C6.94772 20.5 6.5 20.0523 6.5 19.5V8Z',
  d14: 'M13.75 17C13.75 16.5858 14.0858 16.25 14.5 16.25H20.5C20.9142 16.25 21.25 16.5858 21.25 17V22C21.25 22.4142 20.9142 22.75 20.5 22.75H14.5C14.0858 22.75 13.75 22.4142 13.75 22V17Z',
  d15: 'M2.75 2C2.75 1.58579 3.08579 1.25 3.5 1.25H11.5C11.9142 1.25 12.25 1.58579 12.25 2V8C12.25 8.41421 11.9142 8.75 11.5 8.75H3.5C3.08579 8.75 2.75 8.41421 2.75 8V2Z',
  d16: 'M16.5 10.5V9H18.5V10.5L20 10.5V12.5H18.5V14H16.5V12.5H15V10.5L16.5 10.5Z',
} as const;

export const IconSubnodeAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-stroke-rounded IconSubnodeAddStrokeRounded"
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

export const IconSubnodeAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-duotone-rounded IconSubnodeAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconSubnodeAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-twotone-rounded IconSubnodeAddTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSubnodeAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-solid-rounded IconSubnodeAddSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSubnodeAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-bulk-rounded IconSubnodeAddBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSubnodeAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-stroke-sharp IconSubnodeAddStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSubnodeAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="subnode-add-solid-sharp IconSubnodeAddSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSubnodeAdd: TheIconSelfPack = {
  name: 'SubnodeAdd',
  StrokeRounded: IconSubnodeAddStrokeRounded,
  DuotoneRounded: IconSubnodeAddDuotoneRounded,
  TwotoneRounded: IconSubnodeAddTwotoneRounded,
  SolidRounded: IconSubnodeAddSolidRounded,
  BulkRounded: IconSubnodeAddBulkRounded,
  StrokeSharp: IconSubnodeAddStrokeSharp,
  SolidSharp: IconSubnodeAddSolidSharp,
};
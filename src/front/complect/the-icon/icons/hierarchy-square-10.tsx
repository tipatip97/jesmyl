import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 20C2 19.0572 2 18.5858 2.29289 18.2929C2.58579 18 3.05719 18 4 18H5C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22H4C3.05719 22 2.58579 22 2.29289 21.7071C2 21.4142 2 20.9428 2 20Z',
  d2: 'M17 20C17 19.0572 17 18.5858 17.2929 18.2929C17.5858 18 18.0572 18 19 18H20C20.9428 18 21.4142 18 21.7071 18.2929C22 18.5858 22 19.0572 22 20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H19C18.0572 22 17.5858 22 17.2929 21.7071C17 21.4142 17 20.9428 17 20Z',
  d3: 'M19.5 17.5C19.5 14.1907 18.8525 13.5 15.75 13.5H14.5M4.5 17.5C4.5 14.1907 5.1475 13.5 8.25 13.5H9.5M12 7V11',
  d4: 'M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z',
  d5: 'M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z',
  d6: 'M3.95526 17.25L4.00001 17.25H5.00001L5.04476 17.25C5.47757 17.25 5.8744 17.2499 6.19721 17.2933C6.55269 17.3411 6.92842 17.4535 7.23744 17.7626C7.54647 18.0716 7.65891 18.4473 7.70671 18.8028C7.75011 19.1256 7.75006 19.5224 7.75001 19.9553V19.9553L7.75001 20L7.75001 20.0448V20.0448C7.75006 20.4776 7.75011 20.8744 7.70671 21.1972C7.65891 21.5527 7.54647 21.9284 7.23744 22.2374C6.92842 22.5465 6.55269 22.6589 6.19721 22.7067C5.8744 22.7501 5.47758 22.7501 5.04476 22.75H5.04475L5.00001 22.75H4.00001L3.95526 22.75H3.95525C3.52244 22.7501 3.12561 22.7501 2.8028 22.7067C2.44732 22.6589 2.07159 22.5465 1.76257 22.2374C1.45355 21.9284 1.3411 21.5527 1.29331 21.1972C1.24991 20.8744 1.24995 20.4776 1.25 20.0448L1.25001 20L1.25 19.9553C1.24995 19.5224 1.24991 19.1256 1.29331 18.8028C1.3411 18.4473 1.45355 18.0716 1.76257 17.7626C2.07159 17.4535 2.44732 17.3411 2.8028 17.2933C3.12561 17.2499 3.52244 17.25 3.95526 17.25Z',
  d7: 'M18.9553 17.25L19 17.25H20L20.0448 17.25C20.4776 17.25 20.8744 17.2499 21.1972 17.2933C21.5527 17.3411 21.9284 17.4535 22.2374 17.7626C22.5465 18.0716 22.6589 18.4473 22.7067 18.8028C22.7501 19.1256 22.7501 19.5224 22.75 19.9553V19.9553L22.75 20L22.75 20.0448V20.0448C22.7501 20.4776 22.7501 20.8744 22.7067 21.1972C22.6589 21.5527 22.5465 21.9284 22.2374 22.2374C21.9284 22.5465 21.5527 22.6589 21.1972 22.7067C20.8744 22.7501 20.4776 22.7501 20.0448 22.75H20.0448L20 22.75H19L18.9553 22.75H18.9553C18.5224 22.7501 18.1256 22.7501 17.8028 22.7067C17.4473 22.6589 17.0716 22.5465 16.7626 22.2374C16.4535 21.9284 16.3411 21.5527 16.2933 21.1972C16.2499 20.8744 16.25 20.4776 16.25 20.0448L16.25 20L16.25 19.9553C16.25 19.5224 16.2499 19.1256 16.2933 18.8028C16.3411 18.4473 16.4535 18.0716 16.7626 17.7626C17.0716 17.4535 17.4473 17.3411 17.8028 17.2933C18.1256 17.2499 18.5224 17.25 18.9553 17.25Z',
  d8: 'M12 6C12.5523 6 13 6.44772 13 7V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V7C11 6.44772 11.4477 6 12 6ZM4.48203 13.5751C5.36085 12.6376 6.73394 12.5 8.25 12.5H9.5C10.0523 12.5 10.5 12.9477 10.5 13.5C10.5 14.0523 10.0523 14.5 9.5 14.5H8.25C6.66356 14.5 6.16165 14.7077 5.9411 14.9429C5.83477 15.0564 5.7159 15.2591 5.62909 15.6806C5.54066 16.11 5.5 16.6928 5.5 17.5C5.5 18.0523 5.05228 18.5 4.5 18.5C3.94772 18.5 3.5 18.0523 3.5 17.5C3.5 16.6525 3.54028 15.908 3.6702 15.2772C3.80175 14.6384 4.03867 14.048 4.48203 13.5751ZM13.5 13.5C13.5 12.9477 13.9477 12.5 14.5 12.5H15.75C17.2661 12.5 18.6391 12.6376 19.518 13.5751C19.9613 14.048 20.1982 14.6384 20.3298 15.2772C20.4597 15.908 20.5 16.6525 20.5 17.5C20.5 18.0523 20.0523 18.5 19.5 18.5C18.9477 18.5 18.5 18.0523 18.5 17.5C18.5 16.6928 18.4593 16.11 18.3709 15.6806C18.2841 15.2591 18.1652 15.0564 18.0589 14.9429C17.8384 14.7077 17.3364 14.5 15.75 14.5H14.5C13.9477 14.5 13.5 14.0523 13.5 13.5Z',
  d9: 'M7.68699 2.256C8.16023 1.51414 8.97917 1.25 10 1.25H14C15.0208 1.25 15.8398 1.51414 16.313 2.256C16.7214 2.89623 16.75 3.74489 16.75 4.5C16.75 5.25511 16.7214 6.10377 16.313 6.744C15.8398 7.48586 15.0208 7.75 14 7.75H10C8.97917 7.75 8.16023 7.48586 7.68699 6.744C7.27859 6.10377 7.25 5.25511 7.25 4.5C7.25 3.74489 7.27859 2.89623 7.68699 2.256Z',
  d10: 'M8.75 13.5C8.75 11.7051 10.2051 10.25 12 10.25C13.7949 10.25 15.25 11.7051 15.25 13.5C15.25 15.2949 13.7949 16.75 12 16.75C10.2051 16.75 8.75 15.2949 8.75 13.5Z',
  d11: 'M11.0007 7.75H13.0007V10.4067C12.6857 10.305 12.3496 10.25 12.0007 10.25C11.6518 10.25 11.3158 10.305 11.0007 10.4067V7.75Z',
  d12: 'M8.90748 12.5H8.25073C6.73466 12.5 5.36158 12.6376 4.48275 13.5751C4.0394 14.048 3.80248 14.6384 3.67093 15.2772C3.55383 15.8457 3.50955 16.5066 3.50195 17.252C3.64738 17.25 3.79933 17.25 3.95598 17.25H5.04548C5.20307 17.25 5.35588 17.25 5.50209 17.252C5.50983 16.5716 5.55071 16.0647 5.62982 15.6806C5.71663 15.2591 5.83549 15.0564 5.94183 14.9429C6.16237 14.7077 6.66429 14.5 8.25073 14.5H8.90748C8.80571 14.185 8.75073 13.8489 8.75073 13.5C8.75073 13.1511 8.80571 12.815 8.90748 12.5Z',
  d13: 'M15.094 14.5H15.7507C17.3372 14.5 17.8391 14.7077 18.0596 14.9429C18.166 15.0564 18.2848 15.2591 18.3716 15.6806C18.4507 16.0647 18.4916 16.5716 18.4994 17.252C18.6456 17.25 18.7984 17.25 18.956 17.25H20.0455C20.2021 17.25 20.3541 17.25 20.4995 17.252C20.4919 16.5066 20.4476 15.8457 20.3305 15.2772C20.199 14.6384 19.9621 14.048 19.5187 13.5751C18.6399 12.6376 17.2668 12.5 15.7507 12.5H15.094C15.1957 12.815 15.2507 13.1511 15.2507 13.5C15.2507 13.8489 15.1957 14.185 15.094 14.5Z',
  d14: 'M7 22V18H2V22H7Z',
  d15: 'M22 22V18H17V22H22Z',
  d16: 'M19.4993 18L19.5001 13.5H14.5001M4.49927 18V13.5H9.50008M12.0001 7V11',
  d17: 'M16 7V2H8V7H16Z',
  d18: 'M1.25 18C1.25 17.5858 1.58579 17.25 2 17.25H7C7.41421 17.25 7.75 17.5858 7.75 18V22C7.75 22.4142 7.41421 22.75 7 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V18Z',
  d19: 'M16.25 18C16.25 17.5858 16.5858 17.25 17 17.25H22C22.4142 17.25 22.75 17.5858 22.75 18V22C22.75 22.4142 22.4142 22.75 22 22.75H17C16.5858 22.75 16.25 22.4142 16.25 22V18Z',
  d20: 'M11.0001 11V7H13.0001V11H11.0001ZM3.49927 13.5C3.49927 12.9477 3.94698 12.5 4.49927 12.5H9.50008V14.5H5.49927V18H3.49927V13.5ZM18.4999 14.5H14.5001V12.5H19.5001C19.7653 12.5 20.0197 12.6054 20.2073 12.793C20.3948 12.9805 20.5001 13.2349 20.5001 13.5002L20.4993 18.0002L18.4993 17.9998L18.4999 14.5Z',
  d21: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7V2Z',
} as const;

export const IconHierarchySquare10StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-stroke-rounded IconHierarchySquare10StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare10DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-duotone-rounded IconHierarchySquare10DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare10TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-twotone-rounded IconHierarchySquare10TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare10SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-solid-rounded IconHierarchySquare10SolidRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare10BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-bulk-rounded IconHierarchySquare10BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHierarchySquare10StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-stroke-sharp IconHierarchySquare10StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHierarchySquare10SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-10-solid-sharp IconHierarchySquare10SolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchySquare10: TheIconSelfPack = {
  name: 'HierarchySquare10',
  StrokeRounded: IconHierarchySquare10StrokeRounded,
  DuotoneRounded: IconHierarchySquare10DuotoneRounded,
  TwotoneRounded: IconHierarchySquare10TwotoneRounded,
  SolidRounded: IconHierarchySquare10SolidRounded,
  BulkRounded: IconHierarchySquare10BulkRounded,
  StrokeSharp: IconHierarchySquare10StrokeSharp,
  SolidSharp: IconHierarchySquare10SolidSharp,
};
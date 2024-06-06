import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.9977 12.5C20.9977 12.5 21 12 21 11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C12.0307 21 12.5 20.9977 12.5 20.9977',
  d2: 'M2 7H21',
  d3: 'M10 16H11.5M6 16H7M10 12H16M6 12H7',
  d4: 'M15 18.5H22M18.5 22L18.5 15',
  d5: 'M3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C15.9783 21 18.2175 21 19.6088 19.6088C21 18.2175 21 15.9783 21 11.5C21 9.6509 21 8.18354 20.9021 7H2.09793C2 8.18354 2 9.6509 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088Z',
  d6: 'M10 16H11.5M6 16H7',
  d7: 'M10 12H16M6 12H7',
  d8: 'M18.375 13.875C18.9273 13.875 19.375 14.3227 19.375 14.875V17.375H21.875C22.4273 17.375 22.875 17.8227 22.875 18.375C22.875 18.9273 22.4273 19.375 21.875 19.375H19.375V21.875C19.375 22.4273 18.9273 22.875 18.375 22.875C17.8227 22.875 17.375 22.4273 17.375 21.875L17.375 19.375H14.875C14.3227 19.375 13.875 18.9273 13.875 18.375C13.875 17.8227 14.3227 17.375 14.875 17.375H17.375L17.375 14.875C17.375 14.3227 17.8227 13.875 18.375 13.875Z',
  d9: 'M11.3182 1.125H11.4325C13.6232 1.12499 15.3439 1.12498 16.6873 1.30559C18.064 1.49068 19.1562 1.87772 20.0144 2.73591C20.8726 3.59411 21.2597 4.68637 21.4447 6.06302C21.4731 6.27367 21.4872 6.37899 21.4437 6.46307C21.422 6.50501 21.3882 6.54365 21.3495 6.57077C21.272 6.62512 21.1621 6.62512 20.9425 6.62512H1.80819C1.58854 6.62512 1.47871 6.62512 1.40118 6.57077C1.36251 6.54365 1.32871 6.50501 1.307 6.46307C1.26346 6.37899 1.27762 6.27367 1.30594 6.06302C1.49102 4.68637 1.87806 3.59411 2.73626 2.73591C3.59445 1.87772 4.68671 1.49068 6.06336 1.30559C7.40678 1.12498 9.12747 1.12499 11.3182 1.125ZM21.6099 8.70605C21.6047 8.43322 21.6021 8.2968 21.5146 8.21096C21.427 8.12512 21.2894 8.12512 21.0141 8.12512H1.7359C1.4606 8.12512 1.32295 8.12512 1.23545 8.21096C1.14794 8.2968 1.14532 8.43322 1.14008 8.70605C1.12499 9.49192 1.12499 10.36 1.125 11.3178V11.3178V11.4322C1.12499 13.6229 1.12498 15.3436 1.30559 16.687C1.49068 18.0636 1.87772 19.1559 2.73591 20.0141C3.59411 20.8723 4.68637 21.2593 6.06302 21.4444C7.40644 21.625 9.1271 21.625 11.3178 21.625H11.4322C13.0536 21.625 14.4176 21.625 15.5617 21.5518C15.5934 21.5498 15.6093 21.5487 15.6242 21.5463C15.7563 21.5243 15.86 21.4137 15.8735 21.2805C15.875 21.2655 15.875 21.2487 15.875 21.2152C15.875 21.1779 15.875 21.1592 15.8733 21.1435C15.8585 21.0027 15.7473 20.8915 15.6065 20.8767C15.5908 20.875 15.5721 20.875 15.5348 20.875H14.875C13.4943 20.875 12.375 19.7557 12.375 18.375C12.375 16.9943 13.4943 15.875 14.875 15.875H15.275C15.5578 15.875 15.6993 15.875 15.7871 15.7871C15.875 15.6993 15.875 15.5578 15.875 15.275V14.875C15.875 13.4943 16.9943 12.375 18.375 12.375C19.7557 12.375 20.875 13.4943 20.875 14.875V15.5348C20.875 15.5721 20.875 15.5908 20.8767 15.6065C20.8915 15.7473 21.0027 15.8585 21.1435 15.8733C21.1592 15.875 21.1779 15.875 21.2152 15.875C21.2487 15.875 21.2655 15.875 21.2805 15.8735C21.4137 15.86 21.5243 15.7563 21.5463 15.6242C21.5487 15.6093 21.5498 15.5934 21.5518 15.5617C21.625 14.4176 21.625 13.0537 21.625 11.4322V11.3177V11.3176V11.3175V11.3174C21.625 10.3597 21.625 9.49184 21.6099 8.70605ZM5.875 11.125C5.46079 11.125 5.125 11.4608 5.125 11.875C5.125 12.2892 5.46079 12.625 5.875 12.625H6.875C7.28921 12.625 7.625 12.2892 7.625 11.875C7.625 11.4608 7.28921 11.125 6.875 11.125H5.875ZM9.875 11.125C9.46079 11.125 9.125 11.4608 9.125 11.875C9.125 12.2892 9.46079 12.625 9.875 12.625H14.875C15.2892 12.625 15.625 12.2892 15.625 11.875C15.625 11.4608 15.2892 11.125 14.875 11.125H9.875ZM5.875 15.125C5.46079 15.125 5.125 15.4608 5.125 15.875C5.125 16.2892 5.46079 16.625 5.875 16.625H6.875C7.28921 16.625 7.625 16.2892 7.625 15.875C7.625 15.4608 7.28921 15.125 6.875 15.125H5.875ZM9.875 15.125C9.46079 15.125 9.125 15.4608 9.125 15.875C9.125 16.2892 9.46079 16.625 9.875 16.625H11.375C11.7892 16.625 12.125 16.2892 12.125 15.875C12.125 15.4608 11.7892 15.125 11.375 15.125H9.875Z',
  d10: 'M11.4325 1.125H11.3182C9.12747 1.12499 7.40678 1.12498 6.06336 1.30559C4.68671 1.49068 3.59445 1.87772 2.73625 2.73591C1.87806 3.59411 1.49102 4.68637 1.30593 6.06302C1.27761 6.27367 1.26345 6.37899 1.30699 6.46307C1.32871 6.50501 1.3625 6.54365 1.40118 6.57077C1.47871 6.62512 1.58854 6.62512 1.80819 6.62512H20.9425C21.1621 6.62512 21.272 6.62512 21.3495 6.57077C21.3882 6.54365 21.422 6.50501 21.4437 6.46307C21.4872 6.37899 21.4731 6.27367 21.4447 6.06302C21.2597 4.68637 20.8726 3.59411 20.0144 2.73591C19.1562 1.87772 18.064 1.49068 16.6873 1.30559C15.3439 1.12498 13.6232 1.12499 11.4325 1.125Z',
  d11: 'M21.5146 8.21084C21.6021 8.29668 21.6047 8.4331 21.6099 8.70593C21.625 9.49181 21.625 10.3598 21.625 11.3176V11.4321C21.625 13.0535 21.625 14.4175 21.5518 15.5616C21.5498 15.5933 21.5487 15.6092 21.5463 15.6241C21.5243 15.7562 21.4137 15.8599 21.2805 15.8734C21.2655 15.8749 21.2487 15.8749 21.2152 15.8749C21.1779 15.8749 21.1592 15.8749 21.1435 15.8732C21.0027 15.8584 20.8915 15.7471 20.8767 15.6064C20.875 15.5907 20.875 15.572 20.875 15.5347V14.8749C20.875 13.4942 19.7557 12.3749 18.375 12.3749C16.9943 12.3749 15.875 13.4942 15.875 14.8749V15.2749C15.875 15.5577 15.875 15.6991 15.7871 15.787C15.6993 15.8749 15.5578 15.8749 15.275 15.8749H14.875C13.4943 15.8749 12.375 16.9942 12.375 18.3749C12.375 19.7556 13.4943 20.8749 14.875 20.8749H15.5348C15.5721 20.8749 15.5908 20.8749 15.6065 20.8765C15.7473 20.8914 15.8585 21.0026 15.8733 21.1434C15.875 21.1591 15.875 21.1777 15.875 21.215C15.875 21.2486 15.875 21.2653 15.8735 21.2804C15.86 21.4136 15.7563 21.5242 15.6242 21.5461C15.6093 21.5486 15.5934 21.5496 15.5617 21.5517C14.4176 21.6249 13.0536 21.6249 11.4322 21.6249H11.3178C9.1271 21.6249 7.40644 21.6249 6.06302 21.4443C4.68637 21.2592 3.59411 20.8722 2.73591 20.014C1.87772 19.1558 1.49068 18.0635 1.30559 16.6869C1.12498 15.3434 1.12499 13.6228 1.125 11.4321V11.3177C1.12499 10.3599 1.12499 9.49181 1.14008 8.70593C1.14532 8.4331 1.14794 8.29668 1.23545 8.21084C1.32295 8.125 1.4606 8.125 1.7359 8.125H21.0141C21.2894 8.125 21.427 8.125 21.5146 8.21084Z',
  d12: 'M5.125 11.875C5.125 11.4608 5.46079 11.125 5.875 11.125H6.875C7.28921 11.125 7.625 11.4608 7.625 11.875C7.625 12.2892 7.28921 12.625 6.875 12.625H5.875C5.46079 12.625 5.125 12.2892 5.125 11.875ZM9.125 11.875C9.125 11.4608 9.46079 11.125 9.875 11.125H14.875C15.2892 11.125 15.625 11.4608 15.625 11.875C15.625 12.2892 15.2892 12.625 14.875 12.625H9.875C9.46079 12.625 9.125 12.2892 9.125 11.875ZM5.125 15.875C5.125 15.4608 5.46079 15.125 5.875 15.125H6.875C7.28921 15.125 7.625 15.4608 7.625 15.875C7.625 16.2892 7.28921 16.625 6.875 16.625H5.875C5.46079 16.625 5.125 16.2892 5.125 15.875ZM9.125 15.875C9.125 15.4608 9.46079 15.125 9.875 15.125H11.375C11.7892 15.125 12.125 15.4608 12.125 15.875C12.125 16.2892 11.7892 16.625 11.375 16.625H9.875C9.46079 16.625 9.125 16.2892 9.125 15.875Z',
  d13: 'M20 12V2H2V20L12 20',
  d14: 'M2 7H20',
  d15: 'M10 15.5H12M6 15.5H8M10 11.5H16M6 11.5H8',
  d16: 'M14 18H22M18 22L18 14',
  d17: 'M0.75 2C0.75 1.58579 1.08579 1.25 1.5 1.25H19.5C19.9142 1.25 20.25 1.58579 20.25 2V6.25H0.75V2Z',
  d18: 'M0.75 7.75H20.25V13.25H16.75V16.25H13.75V20.75L1.5 20.75C1.08579 20.75 0.75 20.4142 0.75 20V7.75ZM7.5 13H5.5V11.5H7.5V13ZM15.5 13H9.5V11.5H15.5V13ZM7.5 17H5.5V15.5H7.5V17ZM12.5 17H9.5V15.5H12.5V17Z',
  d19: 'M20.25 19.75V22.75H18.25L18.25 19.75H15.25V17.75H18.25L18.25 14.75H20.25V17.75H23.25V19.75H20.25Z',
};

export const IconPropertyAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-stroke-rounded IconPropertyAddStrokeRounded"
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-duotone-rounded IconPropertyAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-twotone-rounded IconPropertyAddTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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

export const IconPropertyAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-solid-rounded IconPropertyAddSolidRounded"
    >
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

export const IconPropertyAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-bulk-rounded IconPropertyAddBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-stroke-sharp IconPropertyAddStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconPropertyAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="property-add-solid-sharp IconPropertyAddSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPropertyAdd: TheIconSelfPack = {
  name: 'PropertyAdd',
  StrokeRounded: IconPropertyAddStrokeRounded,
  DuotoneRounded: IconPropertyAddDuotoneRounded,
  TwotoneRounded: IconPropertyAddTwotoneRounded,
  SolidRounded: IconPropertyAddSolidRounded,
  BulkRounded: IconPropertyAddBulkRounded,
  StrokeSharp: IconPropertyAddStrokeSharp,
  SolidSharp: IconPropertyAddSolidSharp,
};
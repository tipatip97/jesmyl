import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 10H8.13008C8.36879 10 8.59962 9.90452 8.78087 9.7308L11.3492 7.2692C11.7237 6.91027 12.2763 6.91027 12.6508 7.2692L15.2191 9.7308C15.4004 9.90452 15.6312 10 15.8699 10H22',
  d2: 'M3 10L4.961 5.42432C5.82259 3.41397 6.45038 3 8.63758 3H15.3624C17.5496 3 18.1774 3.41397 19.039 5.42432L21 10',
  d3: 'M3 10V21',
  d4: 'M21 10V21',
  d5: 'M2 21L22 21',
  d6: 'M12.008 11L11.999 11',
  d7: 'M9.5 21V16.5C9.5 15.6716 10.1716 15 11 15H13C13.8284 15 14.5 15.6716 14.5 16.5V21',
  d8: 'M6 14H7',
  d9: 'M17 14L18 14',
  d10: 'M3 21V10H8.5L12 7L15.5 10H21V21H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V21H3Z',
  d11: 'M12.009 11L12 11',
  d12: 'M1.25 21C1.25 20.5858 1.58579 20.25 2 20.25L22 20.25C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75L2 21.75C1.58579 21.75 1.25 21.4142 1.25 21Z',
  d13: 'M21.75 11.15C21.75 10.9614 21.75 10.8672 21.6914 10.8086C21.6328 10.75 21.5386 10.75 21.35 10.75H15.8699C15.427 10.75 15.0131 10.5722 14.7002 10.2723L12.1318 7.81066C12.0511 7.73331 11.9489 7.73331 11.8682 7.81066L9.29983 10.2723C8.98693 10.5722 8.57296 10.75 8.13008 10.75H2.65C2.46144 10.75 2.36716 10.75 2.30858 10.8086C2.25 10.8672 2.25 10.9614 2.25 11.15L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75H9.5C9.08579 21.75 8.75 21.4142 8.75 21V16.5C8.75 15.2574 9.75736 14.25 11 14.25H13C14.2426 14.25 15.25 15.2574 15.25 16.5V21C15.25 21.4142 14.9142 21.75 14.5 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21V11.15ZM14.5 21.75H9.5C9.91421 21.75 10.25 21.4142 10.25 21V16.5C10.25 16.0858 10.5858 15.75 11 15.75H13C13.4142 15.75 13.75 16.0858 13.75 16.5V21C13.75 21.4142 14.0858 21.75 14.5 21.75ZM8.63758 2.25C7.531 2.25 6.62731 2.34552 5.88932 2.83215C5.15133 3.31878 4.70755 4.11177 4.27165 5.12889L2.74441 8.69243C2.63648 8.94427 2.58251 9.0702 2.64179 9.1601C2.70107 9.25 2.83807 9.25 3.11207 9.25H8.13008C8.16461 9.25 8.21232 9.23687 8.26191 9.18934L10.8302 6.72773C11.4948 6.09076 12.5052 6.09076 13.1698 6.72773L15.7381 9.18934C15.7877 9.23687 15.8354 9.25 15.8699 9.25H20.8879C21.1619 9.25 21.2989 9.25 21.3582 9.1601C21.4175 9.0702 21.3635 8.94427 21.2556 8.69243L19.7284 5.12888C19.2924 4.11177 18.8487 3.31878 18.1107 2.83215C17.3727 2.34552 16.469 2.25 15.3624 2.25H8.63758ZM13 11C13 11.5523 12.5543 12 12.0045 12H11.9955C11.4457 12 11 11.5523 11 11C11 10.4477 11.4457 10 11.9955 10H12.0045C12.5543 10 13 10.4477 13 11ZM5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H7C7.41421 13.25 7.75 13.5858 7.75 14C7.75 14.4142 7.41421 14.75 7 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14ZM17 13.25C16.5858 13.25 16.25 13.5858 16.25 14C16.25 14.4142 16.5858 14.75 17 14.75H18C18.4142 14.75 18.75 14.4142 18.75 14C18.75 13.5858 18.4142 13.25 18 13.25H17Z',
  d14: 'M21.75 11.1513C21.75 10.9627 21.75 10.8684 21.6914 10.8098C21.6328 10.7513 21.5386 10.7513 21.35 10.7513H15.8699C15.427 10.7513 15.0131 10.5734 14.7002 10.2735L12.1318 7.81192C12.0511 7.73457 11.9489 7.73457 11.8682 7.81192L9.29983 10.2735C8.98693 10.5734 8.57296 10.7513 8.13008 10.7513H2.65C2.46144 10.7513 2.36716 10.7513 2.30858 10.8098C2.25 10.8684 2.25 10.9627 2.25 11.1513V21.0013C2.25 21.4155 2.58579 21.7513 3 21.7513H21C21.4142 21.7513 21.75 21.4155 21.75 21.0013V11.1513Z',
  d15: 'M8.63744 2.25C7.53086 2.25 6.62717 2.34552 5.88918 2.83215C5.15118 3.31878 4.70741 4.11177 4.2715 5.12889L2.74427 8.69243C2.63634 8.94427 2.58237 9.0702 2.64165 9.1601C2.70093 9.25 2.83793 9.25 3.11193 9.25H8.12993C8.16447 9.25 8.21218 9.23687 8.26177 9.18934L10.8301 6.72773C11.4947 6.09076 12.505 6.09076 13.1696 6.72773L15.738 9.18934C15.7875 9.23687 15.8352 9.25 15.8698 9.25H20.8878C21.1618 9.25 21.2988 9.25 21.3581 9.1601C21.4173 9.0702 21.3634 8.94427 21.2554 8.69243L19.7282 5.12888C19.2923 4.11177 18.8485 3.31878 18.1105 2.83215C17.3725 2.34552 16.4689 2.25 15.3623 2.25H8.63744Z',
  d16: 'M13 11C13 11.5523 12.5543 12 12.0045 12L11.9955 12C11.4457 12 11 11.5523 11 11C11 10.4477 11.4457 10 11.9955 10L12.0045 10C12.5543 10 13 10.4477 13 11Z',
  d17: 'M11 15.75C10.5858 15.75 10.25 16.0858 10.25 16.5V21C10.25 21.4142 9.91421 21.75 9.5 21.75C9.08579 21.75 8.75 21.4142 8.75 21V16.5C8.75 15.2574 9.75736 14.25 11 14.25H13C14.2426 14.25 15.25 15.2574 15.25 16.5V21C15.25 21.4142 14.9142 21.75 14.5 21.75C14.0858 21.75 13.75 21.4142 13.75 21V16.5C13.75 16.0858 13.4142 15.75 13 15.75H11Z',
  d18: 'M5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H7C7.41421 13.25 7.75 13.5858 7.75 14C7.75 14.4142 7.41421 14.75 7 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14Z',
  d19: 'M16.25 14C16.25 13.5858 16.5858 13.25 17 13.25L18 13.25C18.4142 13.25 18.75 13.5858 18.75 14C18.75 14.4142 18.4142 14.75 18 14.75L17 14.75C16.5858 14.75 16.25 14.4142 16.25 14Z',
  d20: 'M3.0155 9.99999L6.01176 3H17.9968L20.9931 9.99999',
  d21: 'M3.01794 10V21',
  d22: 'M21.0179 10V21',
  d23: 'M1.01794 21H22.9905',
  d24: 'M12.0123 11H12.0033',
  d25: 'M9.5072 21V15H14.501V21',
  d26: 'M5.51208 14H7.50959',
  d27: 'M16.4989 14H18.4964',
  d28: 'M1.00134 9.978H8.54499L12.0107 7.01314C12.0144 7.00993 12.02 7.00994 12.0237 7.01317L15.4549 9.978H22.9987',
  d29: 'M23 21.75L1 21.75L1 20.25L23 20.25L23 21.75Z',
  d30: 'M21.75 10.75V21.75L2.25 21.75L2.25 10.75H8.77744L12 7.98783L15.2226 10.75L21.75 10.75ZM21.4946 9.25002L18.4945 2.25001L5.50545 2.25001L2.50544 9.25002L8.22256 9.25002L12 6.01221L15.7774 9.25002L21.4946 9.25002ZM13.0078 13H11.0078V11H13.0078V13ZM9.5 15.25C9.08579 15.25 8.75 15.5858 8.75 16V21.75H10.25V16.75H13.75V21.75H15.25V16C15.25 15.5858 14.9142 15.25 14.5 15.25L9.5 15.25ZM6.5 14.75H4.5V13.25H6.5V14.75ZM17.5 14.75H19.5V13.25H17.5V14.75Z',
} as const;

export const IconHouse02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-stroke-rounded IconHouse02StrokeRounded"
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
      <path 
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
      <path 
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-duotone-rounded IconHouse02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
      <path 
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
      <path 
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-twotone-rounded IconHouse02TwotoneRounded"
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
      <path 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-solid-rounded IconHouse02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconHouse02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-bulk-rounded IconHouse02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHouse02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-stroke-sharp IconHouse02StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-02-solid-sharp IconHouse02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHouse02: TheIconSelfPack = {
  name: 'House02',
  StrokeRounded: IconHouse02StrokeRounded,
  DuotoneRounded: IconHouse02DuotoneRounded,
  TwotoneRounded: IconHouse02TwotoneRounded,
  SolidRounded: IconHouse02SolidRounded,
  BulkRounded: IconHouse02BulkRounded,
  StrokeSharp: IconHouse02StrokeSharp,
  SolidSharp: IconHouse02SolidSharp,
};
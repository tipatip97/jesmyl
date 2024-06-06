import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 12C9 10.5858 9 9.87868 8.48744 9.43934C7.97487 9 7.14992 9 5.5 9C3.85008 9 3.02513 9 2.51256 9.43934C2 9.87868 2 10.5858 2 12C2 13.4142 2 14.1213 2.51256 14.5607C3.02513 15 3.85008 15 5.5 15C7.14992 15 7.97487 15 8.48744 14.5607C9 14.1213 9 13.4142 9 12Z',
  d2: 'M22 5C22 3.58579 22 2.87868 21.5899 2.43934C21.1799 2 20.5199 2 19.2 2H17.8C16.4801 2 15.8201 2 15.4101 2.43934C15 2.87868 15 3.58579 15 5C15 6.41421 15 7.12132 15.4101 7.56066C15.8201 8 16.4801 8 17.8 8H19.2C20.5199 8 21.1799 8 21.5899 7.56066C22 7.12132 22 6.41421 22 5Z',
  d3: 'M22 19C22 17.5858 22 16.8787 21.5899 16.4393C21.1799 16 20.5199 16 19.2 16H17.8C16.4801 16 15.8201 16 15.4101 16.4393C15 16.8787 15 17.5858 15 19C15 20.4142 15 21.1213 15.4101 21.5607C15.8201 22 16.4801 22 17.8 22H19.2C20.5199 22 21.1799 22 21.5899 21.5607C22 21.1213 22 20.4142 22 19Z',
  d4: 'M12 11.999L12 16.0462C12 17.9201 12.9172 18.7615 15 19M12 11.999L12 7.95192C12 6.18453 12.779 5.25846 15 5M12 11.999L9 11.999',
  d5: 'M5.45506 8.25C4.66837 8.24998 4.01359 8.24996 3.49391 8.30985C2.95314 8.37217 2.4451 8.50935 2.02446 8.8699C1.58715 9.24474 1.40388 9.72301 1.32312 10.2379C1.24988 10.7048 1.24993 11.285 1.24999 11.9446L1.24999 12L1.24999 12.0554C1.24993 12.715 1.24988 13.2952 1.32312 13.7621C1.40388 14.277 1.58715 14.7553 2.02446 15.1301C2.4451 15.4907 2.95314 15.6278 3.49391 15.6902C4.01359 15.75 4.66839 15.75 5.45509 15.75H5.5449C6.3316 15.75 6.98639 15.75 7.50608 15.6902C8.04685 15.6278 8.55489 15.4907 8.97552 15.1301C9.41284 14.7553 9.59611 14.277 9.67686 13.7621C9.7501 13.2952 9.75005 12.715 9.75 12.0554L9.75 12.0554L9.74999 12L9.75 11.9446L9.75 11.9446C9.75005 11.285 9.7501 10.7048 9.67686 10.2379C9.59611 9.72301 9.41284 9.24474 8.97552 8.8699C8.55489 8.50935 8.04685 8.37217 7.50608 8.30985C6.9864 8.24996 6.33162 8.24998 5.54493 8.25H5.5449H5.45509H5.45506Z',
  d6: 'M19.2512 1.25L19.2 1.25001H17.8L17.7488 1.25C17.1327 1.24996 16.592 1.24991 16.1569 1.31259C15.6826 1.3809 15.2267 1.53655 14.8618 1.92761C14.5036 2.31133 14.3677 2.77808 14.3071 3.26072C14.2499 3.71616 14.25 4.28608 14.25 4.95319V4.95321V5.0468V5.04682C14.25 5.71393 14.2499 6.28385 14.3071 6.73929C14.3677 7.22193 14.5036 7.68868 14.8618 8.0724C15.2267 8.46346 15.6826 8.61911 16.1569 8.68743C16.5919 8.7501 17.1327 8.75006 17.7488 8.75001H17.7488L17.8 8.75001H19.2L19.2512 8.75001H19.2512C19.8673 8.75006 20.408 8.7501 20.8431 8.68743C21.3174 8.61911 21.7732 8.46346 22.1382 8.0724C22.4964 7.68868 22.6323 7.22193 22.6929 6.73929C22.7501 6.28386 22.75 5.71394 22.75 5.04685V5.04681L22.75 5.00001L22.75 4.9532V4.95316C22.75 4.28607 22.7501 3.71615 22.6929 3.26072C22.6323 2.77808 22.4964 2.31133 22.1382 1.92761C21.7732 1.53655 21.3174 1.3809 20.8431 1.31259C20.408 1.24991 19.8673 1.24996 19.2512 1.25Z',
  d7: 'M19.2512 15.25L19.2 15.25H17.8L17.7488 15.25C17.1327 15.25 16.592 15.2499 16.1569 15.3126C15.6826 15.3809 15.2267 15.5365 14.8618 15.9276C14.5036 16.3113 14.3677 16.7781 14.3071 17.2607C14.2499 17.7162 14.25 18.2861 14.25 18.9532V18.9532V19.0468V19.0468C14.25 19.7139 14.2499 20.2838 14.3071 20.7393C14.3677 21.2219 14.5036 21.6887 14.8618 22.0724C15.2267 22.4635 15.6826 22.6191 16.1569 22.6874C16.5919 22.7501 17.1327 22.7501 17.7488 22.75H17.7488L17.8 22.75H19.2L19.2512 22.75H19.2512C19.8673 22.7501 20.408 22.7501 20.8431 22.6874C21.3174 22.6191 21.7732 22.4635 22.1382 22.0724C22.4964 21.6887 22.6323 21.2219 22.6929 20.7393C22.7501 20.2839 22.75 19.7139 22.75 19.0469V19.0468L22.75 19L22.75 18.9532V18.9532C22.75 18.2861 22.7501 17.7162 22.6929 17.2607C22.6323 16.7781 22.4964 16.3113 22.1382 15.9276C21.7732 15.5365 21.3174 15.3809 20.8431 15.3126C20.408 15.2499 19.8673 15.25 19.2512 15.25Z',
  d8: 'M15.9935 19.1137C16.0563 18.565 15.6624 18.0692 15.1137 18.0064C14.1597 17.8972 13.6718 17.6671 13.4148 17.4181C13.1869 17.1973 13 16.8231 13 16.0461L13 7.95183C13 7.20448 13.1644 6.83261 13.3833 6.60793C13.6222 6.36276 14.1012 6.11125 15.1156 5.9932C15.6642 5.92936 16.0571 5.4329 15.9933 4.88431C15.9295 4.33573 15.433 3.94277 14.8844 4.00661C13.6778 4.14702 12.6568 4.48778 11.951 5.21211C11.2251 5.95693 11 6.93178 11 7.95183L11 10.999L9 10.999C8.44771 10.999 8 11.4467 8 11.999C8 12.5512 8.44771 12.999 9 12.999L11 12.999L11 16.0461C11 17.1429 11.2717 18.1265 12.0231 18.8545C12.7454 19.5543 13.7575 19.8642 14.8863 19.9934C15.435 20.0562 15.9307 19.6624 15.9935 19.1137Z',
  d9: 'M14.2554 4.10156C13.3226 4.28053 12.5305 4.61667 11.9509 5.21142C11.2251 5.95624 11 6.93109 11 7.95113L11 10.9983L9.74023 10.9983C9.75002 11.2896 9.75 11.6063 9.74997 11.9438V12.0546C9.75 12.3913 9.75002 12.7074 9.7403 12.9983L11 12.9983L11 16.0454C11 17.1422 11.2717 18.1258 12.0231 18.8538C12.6078 19.4204 13.3826 19.7314 14.2554 19.8978C14.2499 19.6353 14.25 19.3508 14.25 19.046V18.9524C14.2499 18.5471 14.2499 18.1777 14.2627 17.8481C13.8421 17.7306 13.5804 17.5779 13.4147 17.4174C13.1868 17.1966 13 16.8224 13 16.0454L13 7.95113C13 7.20379 13.1643 6.83191 13.3833 6.60724C13.5419 6.44449 13.8062 6.27895 14.2628 6.15151C14.2499 5.82156 14.2499 5.45176 14.25 5.04601V4.95239C14.25 4.64801 14.2499 4.36385 14.2554 4.10156Z',
  d10: 'M5.45507 8.25C4.66838 8.24998 4.0136 8.24997 3.49392 8.30985C2.95315 8.37217 2.44511 8.50936 2.02448 8.8699C1.58716 9.24474 1.40389 9.72301 1.32314 10.2379C1.2499 10.7048 1.24995 11.285 1.25 11.9446V12.0554C1.24995 12.715 1.2499 13.2952 1.32314 13.7621C1.40389 14.277 1.58716 14.7553 2.02448 15.1301C2.44511 15.4907 2.95315 15.6278 3.49392 15.6902C4.01361 15.75 4.6684 15.75 5.4551 15.75H5.54491C6.33161 15.75 6.98641 15.75 7.50609 15.6902C8.04686 15.6278 8.5549 15.4907 8.97554 15.1301C9.41285 14.7553 9.59612 14.277 9.67688 13.7621C9.75012 13.2952 9.75007 12.715 9.75001 12.0554V11.9446C9.75007 11.285 9.75012 10.7048 9.67688 10.2379C9.59612 9.72301 9.41285 9.24474 8.97554 8.8699C8.5549 8.50936 8.04686 8.37217 7.50609 8.30985C6.98641 8.24997 6.3316 8.24998 5.54491 8.25H5.45507Z',
  d11: 'M19.2512 1.25H17.7488C17.1327 1.24996 16.592 1.24991 16.1569 1.31259C15.6826 1.3809 15.2268 1.53655 14.8618 1.92761C14.5036 2.31133 14.3677 2.77808 14.3071 3.26072C14.2499 3.71616 14.25 4.28611 14.25 4.95321V5.04682C14.25 5.71393 14.2499 6.28385 14.3071 6.73929C14.3677 7.22193 14.5036 7.68868 14.8618 8.0724C15.2268 8.46346 15.6826 8.61911 16.1569 8.68743C16.592 8.7501 17.1328 8.75006 17.7488 8.75001H19.2512C19.8673 8.75006 20.4081 8.7501 20.8431 8.68743C21.3174 8.61911 21.7733 8.46346 22.1382 8.0724C22.4964 7.68868 22.6324 7.22193 22.6929 6.73929C22.7501 6.28386 22.75 5.7139 22.75 5.04681V4.9532C22.75 4.28611 22.7501 3.71615 22.6929 3.26072C22.6324 2.77808 22.4964 2.31133 22.1382 1.92761C21.7733 1.53655 21.3174 1.3809 20.8431 1.31259C20.408 1.24991 19.8673 1.24996 19.2512 1.25Z',
  d12: 'M19.2512 15.25H17.7488C17.1327 15.25 16.592 15.2499 16.1569 15.3126C15.6826 15.3809 15.2268 15.5365 14.8618 15.9276C14.5036 16.3113 14.3677 16.7781 14.3071 17.2607C14.2499 17.7162 14.25 18.2861 14.25 18.9532V19.0468C14.25 19.7139 14.2499 20.2838 14.3071 20.7393C14.3677 21.2219 14.5036 21.6887 14.8618 22.0724C15.2268 22.4635 15.6826 22.6191 16.1569 22.6874C16.592 22.7501 17.1328 22.7501 17.7488 22.75H19.2512C19.8673 22.7501 20.4081 22.7501 20.8431 22.6874C21.3174 22.6191 21.7733 22.4635 22.1382 22.0724C22.4964 21.6887 22.6324 21.2219 22.6929 20.7393C22.7501 20.2839 22.75 19.7139 22.75 19.0468V18.9532C22.75 18.2861 22.7501 17.7162 22.6929 17.2607C22.6324 16.7781 22.4964 16.3113 22.1382 15.9276C21.7733 15.5365 21.3174 15.3809 20.8431 15.3126C20.408 15.2499 19.8673 15.25 19.2512 15.25Z',
  d13: 'M9 15V9H2V15H9Z',
  d14: 'M22 8V2H15V8H22Z',
  d15: 'M22 22V16H15V22H22Z',
  d16: 'M12 11.999L12 19L15 19M12 11.999L12 4.99998L15 4.99998M12 11.999L9 11.999',
  d17: 'M1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H9C9.41421 8.25 9.75 8.58579 9.75 9V15C9.75 15.4142 9.41421 15.75 9 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V9Z',
  d18: 'M14.25 2C14.25 1.58579 14.5858 1.25 15 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V8C22.75 8.41421 22.4142 8.75 22 8.75H15C14.5858 8.75 14.25 8.41421 14.25 8V2Z',
  d19: 'M14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H15C14.5858 22.75 14.25 22.4142 14.25 22V16Z',
  d20: 'M11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20L15 20L15 18L13 18L13 5.99998L15 5.99998L15 3.99998L12 3.99998C11.4477 3.99998 11 4.4477 11 4.99998L11 10.999L9 10.999L9 12.999L11 12.999L11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071Z',
};

export const IconHierarchySquare04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-stroke-rounded IconHierarchySquare04StrokeRounded"
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

export const IconHierarchySquare04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-duotone-rounded IconHierarchySquare04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconHierarchySquare04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-twotone-rounded IconHierarchySquare04TwotoneRounded"
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

export const IconHierarchySquare04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-solid-rounded IconHierarchySquare04SolidRounded"
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

export const IconHierarchySquare04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-bulk-rounded IconHierarchySquare04BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconHierarchySquare04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-stroke-sharp IconHierarchySquare04StrokeSharp"
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

export const IconHierarchySquare04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-04-solid-sharp IconHierarchySquare04SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfHierarchySquare04: TheIconSelfPack = {
  name: 'HierarchySquare04',
  StrokeRounded: IconHierarchySquare04StrokeRounded,
  DuotoneRounded: IconHierarchySquare04DuotoneRounded,
  TwotoneRounded: IconHierarchySquare04TwotoneRounded,
  SolidRounded: IconHierarchySquare04SolidRounded,
  BulkRounded: IconHierarchySquare04BulkRounded,
  StrokeSharp: IconHierarchySquare04StrokeSharp,
  SolidSharp: IconHierarchySquare04SolidSharp,
};
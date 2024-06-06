import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 12C15 13.4142 15 14.1213 15.5126 14.5607C16.0251 15 16.8501 15 18.5 15C20.1499 15 20.9749 15 21.4874 14.5607C22 14.1213 22 13.4142 22 12C22 10.5858 22 9.87868 21.4874 9.43934C20.9749 9 20.1499 9 18.5 9C16.8501 9 16.0251 9 15.5126 9.43934C15 9.87868 15 10.5858 15 12Z',
  d2: 'M2 19C2 20.4142 2 21.1213 2.41005 21.5607C2.8201 22 3.48007 22 4.8 22H6.2C7.51993 22 8.1799 22 8.58995 21.5607C9 21.1213 9 20.4142 9 19C9 17.5858 9 16.8787 8.58995 16.4393C8.1799 16 7.51993 16 6.2 16H4.8C3.48007 16 2.8201 16 2.41005 16.4393C2 16.8787 2 17.5858 2 19Z',
  d3: 'M2 5C2 6.41421 2 7.12132 2.41005 7.56066C2.8201 8 3.48007 8 4.8 8L6.2 8C7.51993 8 8.1799 8 8.58995 7.56066C9 7.12132 9 6.41421 9 5C9 3.58579 9 2.87868 8.58995 2.43934C8.1799 2 7.51993 2 6.2 2L4.8 2C3.48007 2 2.8201 2 2.41005 2.43934C2 2.87868 2 3.58579 2 5Z',
  d4: 'M12 12.001L12 7.95383C12 6.07993 11.0828 5.23846 9 5M12 12.001L12 16.0481C12 17.8155 11.221 18.7415 9 19M12 12.001L15 12.001',
  d5: 'M18.5449 15.75C19.3316 15.75 19.9864 15.75 20.5061 15.6901C21.0469 15.6278 21.5549 15.4906 21.9755 15.1301C22.4129 14.7553 22.5961 14.277 22.6769 13.7621C22.7501 13.2952 22.7501 12.715 22.75 12.0554L22.75 12L22.75 11.9446C22.7501 11.285 22.7501 10.7048 22.6769 10.2379C22.5961 9.72301 22.4129 9.24474 21.9755 8.8699C21.5549 8.50935 21.0469 8.37217 20.5061 8.30985C19.9864 8.24996 19.3316 8.24998 18.5449 8.25H18.4551C17.6684 8.24998 17.0136 8.24996 16.4939 8.30985C15.9532 8.37217 15.4451 8.50935 15.0245 8.8699C14.5872 9.24474 14.4039 9.72301 14.3231 10.2379C14.2499 10.7048 14.2499 11.285 14.25 11.9446L14.25 11.9446L14.25 12L14.25 12.0554L14.25 12.0554C14.2499 12.715 14.2499 13.2952 14.3231 13.7621C14.4039 14.277 14.5872 14.7553 15.0245 15.1301C15.4451 15.4906 15.9532 15.6278 16.4939 15.6901C17.0136 15.75 17.6684 15.75 18.4551 15.75H18.4551H18.5449H18.5449Z',
  d6: 'M4.74877 22.75L4.8 22.75H6.2L6.25124 22.75C6.86726 22.75 7.40805 22.7501 7.84312 22.6874C8.31739 22.6191 8.77325 22.4635 9.13824 22.0724C9.49639 21.6887 9.63235 21.2219 9.69291 20.7393C9.75006 20.2838 9.75003 19.7139 9.75 19.0468V19.0468V18.9532V18.9532C9.75003 18.2861 9.75006 17.7162 9.69291 17.2607C9.63235 16.7781 9.49639 16.3113 9.13824 15.9276C8.77325 15.5365 8.31739 15.3809 7.84312 15.3126C7.40805 15.2499 6.86727 15.2499 6.25125 15.25H6.25123L6.2 15.25H4.8L4.74877 15.25H4.74876C4.13274 15.2499 3.59196 15.2499 3.15689 15.3126C2.68262 15.3809 2.22675 15.5365 1.86176 15.9276C1.50362 16.3113 1.36766 16.7781 1.3071 17.2607C1.24995 17.7161 1.24997 18.2861 1.25 18.9531V18.9532L1.25 19L1.25 19.0468V19.0468C1.24997 19.7139 1.24995 20.2838 1.3071 20.7393C1.36766 21.2219 1.50362 21.6887 1.86176 22.0724C2.22675 22.4635 2.68262 22.6191 3.15689 22.6874C3.59196 22.7501 4.13274 22.75 4.74877 22.75Z',
  d7: 'M4.74877 8.75L4.8 8.74999H6.2L6.25124 8.75C6.86726 8.75004 7.40805 8.75009 7.84312 8.68741C8.31739 8.6191 8.77325 8.46345 9.13824 8.07239C9.49639 7.68867 9.63235 7.22192 9.69291 6.73928C9.75006 6.28384 9.75003 5.71392 9.75 5.04681V5.04679V4.9532V4.95318C9.75003 4.28607 9.75006 3.71615 9.69291 3.26071C9.63235 2.77807 9.49639 2.31132 9.13824 1.9276C8.77325 1.53654 8.31739 1.38089 7.84312 1.31257C7.40805 1.2499 6.86727 1.24994 6.25125 1.24999H6.25123L6.2 1.24999L4.8 1.24999L4.74877 1.24999H4.74876C4.13274 1.24994 3.59196 1.2499 3.15689 1.31257C2.68262 1.38089 2.22675 1.53654 1.86176 1.9276C1.50362 2.31132 1.36766 2.77807 1.3071 3.26071C1.24995 3.71614 1.24997 4.28606 1.25 4.95315V4.95319L1.25 4.99999L1.25 5.0468V5.04684C1.24997 5.71393 1.24995 6.28385 1.3071 6.73928C1.36766 7.22192 1.50362 7.68867 1.86176 8.07239C2.22675 8.46345 2.68262 8.6191 3.15689 8.68741C3.59196 8.75009 4.13274 8.75004 4.74877 8.75Z',
  d8: 'M8.00649 4.88635C7.94367 5.43505 8.33756 5.93078 8.88626 5.9936C9.84032 6.10283 10.3282 6.33293 10.5852 6.58191C10.8131 6.80274 11 7.17688 11 7.95392L11 16.0482C11 16.7955 10.8356 17.1674 10.6167 17.3921C10.3778 17.6372 9.8988 17.8887 8.88441 18.0068C8.33583 18.0706 7.94286 18.5671 8.00671 19.1157C8.07055 19.6643 8.56701 20.0572 9.1156 19.9934C10.3222 19.853 11.3432 19.5122 12.049 18.7879C12.7749 18.0431 13 17.0682 13 16.0482L13 13.001L15 13.001C15.5523 13.001 16 12.5533 16 12.001C16 11.4488 15.5523 11.001 15 11.001L13 11.001L13 7.95392C13 6.85706 12.7283 5.87351 11.9769 5.14552C11.2546 4.44568 10.2425 4.13581 9.11374 4.00658C8.56504 3.94376 8.06931 4.33765 8.00649 4.88635Z',
  d9: 'M9.73633 17.8479C9.74918 18.1778 9.74916 18.5476 9.74914 18.9534V19.047C9.74916 19.3514 9.74917 19.6355 9.74375 19.8978C10.6766 19.7189 11.4686 19.3827 12.0482 18.788C12.774 18.0431 12.9991 17.0683 12.9991 16.0483L12.9991 13.0011H14.2589C14.2491 12.7098 14.2491 12.3931 14.2491 12.0556V11.9448C14.2491 11.6081 14.2491 11.292 14.2588 11.0011L12.9991 11.0011L12.9991 7.954C12.9991 6.85714 12.7274 5.87359 11.976 5.1456C11.3913 4.579 10.6165 4.26802 9.74373 4.10156C9.74917 4.36412 9.74916 4.64861 9.74914 4.95339V5.047C9.74916 5.45226 9.74918 5.82166 9.73638 6.15131C10.157 6.26881 10.4187 6.42147 10.5844 6.58198C10.8123 6.80282 10.9991 7.17695 10.9991 7.954L10.9991 16.0483C10.9991 16.7956 10.8348 17.1675 10.6158 17.3921C10.4572 17.5549 10.1929 17.7204 9.73633 17.8479Z',
  d10: 'M18.5449 15.75C19.3316 15.75 19.9864 15.75 20.5061 15.6902C21.0469 15.6278 21.5549 15.4907 21.9755 15.1301C22.4129 14.7553 22.5961 14.277 22.6769 13.7621C22.7501 13.2952 22.7501 12.715 22.75 12.0554V11.9446C22.7501 11.285 22.7501 10.7048 22.6769 10.2379C22.5961 9.72301 22.4129 9.24474 21.9755 8.8699C21.5549 8.50936 21.0469 8.37217 20.5061 8.30985C19.9864 8.24997 19.3316 8.24998 18.5449 8.25H18.4551C17.6684 8.24998 17.0136 8.24997 16.4939 8.30985C15.9531 8.37217 15.4451 8.50936 15.0245 8.8699C14.5872 9.24474 14.4039 9.72301 14.3231 10.2379C14.2499 10.7048 14.2499 11.285 14.25 11.9446V12.0554C14.2499 12.715 14.2499 13.2952 14.3231 13.7621C14.4039 14.277 14.5872 14.7553 15.0245 15.1301C15.4451 15.4907 15.9531 15.6278 16.4939 15.6902C17.0136 15.75 17.6684 15.75 18.4551 15.75H18.5449Z',
  d11: 'M4.74877 22.75H6.25124C6.86726 22.7501 7.40805 22.7501 7.84312 22.6874C8.31739 22.6191 8.77326 22.4635 9.13824 22.0724C9.49639 21.6887 9.63235 21.2219 9.69291 20.7393C9.75006 20.2838 9.75004 19.7139 9.75 19.0468V18.9532C9.75004 18.2861 9.75006 17.7162 9.69291 17.2607C9.63235 16.7781 9.49639 16.3113 9.13824 15.9276C8.77326 15.5365 8.31739 15.3809 7.84312 15.3126C7.40805 15.2499 6.86725 15.25 6.25124 15.25H4.74877C4.13275 15.25 3.59196 15.2499 3.15689 15.3126C2.68262 15.3809 2.22675 15.5365 1.86176 15.9276C1.50362 16.3113 1.36766 16.7781 1.3071 17.2607C1.24995 17.7162 1.24997 18.2861 1.25 18.9532V19.0468C1.24997 19.7139 1.24995 20.2839 1.3071 20.7393C1.36766 21.2219 1.50362 21.6887 1.86176 22.0724C2.22675 22.4635 2.68262 22.6191 3.15689 22.6874C3.59196 22.7501 4.13275 22.7501 4.74877 22.75Z',
  d12: 'M4.74877 8.75001H6.25124C6.86726 8.75006 7.40805 8.7501 7.84312 8.68743C8.31739 8.61911 8.77326 8.46346 9.13824 8.0724C9.49639 7.68868 9.63235 7.22193 9.69291 6.73929C9.75006 6.28385 9.75004 5.7139 9.75 5.0468V4.95319C9.75004 4.28608 9.75006 3.71616 9.69291 3.26072C9.63235 2.77808 9.49639 2.31133 9.13824 1.92761C8.77326 1.53655 8.31739 1.3809 7.84312 1.31259C7.40805 1.24991 6.86725 1.24996 6.25124 1.25H4.74877C4.13275 1.24996 3.59196 1.24991 3.15689 1.31259C2.68262 1.3809 2.22675 1.53655 1.86176 1.92761C1.50362 2.31133 1.36766 2.77808 1.3071 3.26072C1.24995 3.71615 1.24997 4.28611 1.25 4.9532V5.04681C1.24997 5.7139 1.24995 6.28386 1.3071 6.73929C1.36766 7.22193 1.50362 7.68868 1.86176 8.0724C2.22675 8.46346 2.68262 8.61911 3.15689 8.68743C3.59196 8.7501 4.13275 8.75006 4.74877 8.75001Z',
  d13: 'M9 8V2H2V8H9Z',
  d14: 'M9 22V16H2V22H9Z',
  d15: 'M22 15V9H15V15H22Z',
  d16: 'M12 12.001L12 5L9 5.00002M12 12.001L12 19H9M12 12.001L15 12.001',
  d17: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H9C9.41421 1.25 9.75 1.58579 9.75 2V8C9.75 8.41421 9.41421 8.75 9 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8V2Z',
  d18: 'M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16V22C9.75 22.4142 9.41421 22.75 9 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16Z',
  d19: 'M14.25 9C14.25 8.58579 14.5858 8.25 15 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9V15C22.75 15.4142 22.4142 15.75 22 15.75H15C14.5858 15.75 14.25 15.4142 14.25 15V9Z',
  d20: 'M11 6.00001L9.00001 6.00002L9 4.00002L12 4C12.2652 4 12.5196 4.10535 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5L13 11.001L15 11.001V13.001L13 13.001L13 19C13 19.5523 12.5523 20 12 20H9.00001V18H11V6.00001Z',
};

export const IconHierarchySquare05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-stroke-rounded IconHierarchySquare05StrokeRounded"
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

export const IconHierarchySquare05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-duotone-rounded IconHierarchySquare05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconHierarchySquare05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-twotone-rounded IconHierarchySquare05TwotoneRounded"
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

export const IconHierarchySquare05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-solid-rounded IconHierarchySquare05SolidRounded"
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

export const IconHierarchySquare05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-bulk-rounded IconHierarchySquare05BulkRounded"
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

export const IconHierarchySquare05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-stroke-sharp IconHierarchySquare05StrokeSharp"
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

export const IconHierarchySquare05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hierarchy-square-05-solid-sharp IconHierarchySquare05SolidSharp"
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

export const iconPackOfHierarchySquare05: TheIconSelfPack = {
  name: 'HierarchySquare05',
  StrokeRounded: IconHierarchySquare05StrokeRounded,
  DuotoneRounded: IconHierarchySquare05DuotoneRounded,
  TwotoneRounded: IconHierarchySquare05TwotoneRounded,
  SolidRounded: IconHierarchySquare05SolidRounded,
  BulkRounded: IconHierarchySquare05BulkRounded,
  StrokeSharp: IconHierarchySquare05StrokeSharp,
  SolidSharp: IconHierarchySquare05SolidSharp,
};
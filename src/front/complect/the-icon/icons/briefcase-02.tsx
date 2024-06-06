import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.57956 8.62505C2.50886 8.03528 2.47351 7.74039 2.52323 7.499C2.6651 6.81015 3.27111 6.25159 4.07871 6.06529C4.36172 6 4.717 6 5.42757 6H18.5724C19.283 6 19.6383 6 19.9213 6.06529C20.7289 6.25159 21.3349 6.81015 21.4768 7.499C21.5265 7.74039 21.4911 8.03528 21.4204 8.62505C21.2584 9.97669 20.4991 10.716 19.0512 11.1423L14.88 12.3703C13.4541 12.7901 12.7411 13 12 13C11.2589 13 10.5459 12.7901 9.11996 12.3703L4.94882 11.1423C3.50094 10.7161 2.7416 9.97669 2.57956 8.62505Z',
  d2: 'M3.46283 10.5L3.26658 12.7757C2.91481 16.855 2.73892 18.8947 3.86734 20.1974C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.1974C21.2611 18.8947 21.0852 16.855 20.7334 12.7757L20.5372 10.5',
  d3: 'M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5',
  d4: 'M3.58579 10.5H3.46283L3.26658 12.7757C2.91481 16.855 2.73892 18.8947 3.86734 20.1974C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.1974C21.2611 18.8947 21.0852 16.855 20.7334 12.7757L20.5372 10.5H20.4142C20.057 10.7709 19.6043 10.9795 19.0512 11.1423L14.88 12.3703C13.4541 12.7901 12.7411 13 12 13C11.2589 13 10.5459 12.7901 9.11996 12.3703L4.94882 11.1423C4.39568 10.9795 3.94303 10.7709 3.58579 10.5Z',
  d5: 'M21.4834 12.7687C21.4734 12.6525 21.3429 12.5884 21.2422 12.6472C20.7431 12.939 20.2114 13.1471 19.6846 13.3022C19.2054 13.4432 18.7262 13.5842 18.247 13.7253C17.2518 14.0181 16.2565 14.3109 15.2615 14.6044C14.0689 14.9562 13.0678 15.2514 11.998 15.2514C10.9283 15.2514 9.92715 14.9562 8.7345 14.6044C7.73959 14.3109 6.74448 14.0181 5.74938 13.7253C5.27005 13.5843 4.79072 13.4433 4.31141 13.3022C3.78463 13.1471 3.2529 12.939 2.75378 12.6472C2.65309 12.5884 2.52249 12.6525 2.51247 12.7687C2.34067 14.7607 2.20528 16.3307 2.2606 17.5627C2.31723 18.8237 2.57629 19.856 3.29841 20.6896C4.02636 21.53 4.99549 21.904 6.20111 22.0805C7.3678 22.2513 8.86987 22.2512 10.7602 22.2512H13.2357C15.126 22.2512 16.6281 22.2513 17.7948 22.0805C19.0004 21.904 19.9696 21.53 20.6975 20.6896C21.4196 19.856 21.6787 18.8237 21.7353 17.5627C21.7906 16.3307 21.6552 14.7607 21.4834 12.7687Z',
  d6: 'M5.32747 5.25002C4.71341 5.24979 4.27743 5.24963 3.90939 5.33453C2.87931 5.57215 2.00101 6.31311 1.78791 7.34775C1.7128 7.71245 1.76284 8.12544 1.82126 8.60749C1.91752 9.40471 2.17401 10.1608 2.74041 10.7503C3.25379 11.2847 3.94025 11.6275 4.73627 11.8618L9.01832 13.1225C10.3383 13.5113 11.149 13.75 11.9993 13.75C12.8496 13.75 13.6602 13.5113 14.9802 13.1225L19.2623 11.8618C20.0583 11.6275 20.7447 11.2847 21.2581 10.7503C21.8245 10.1608 22.081 9.4047 22.1773 8.60746C22.2357 8.12543 22.2857 7.71245 22.2106 7.34775C21.9975 6.31311 21.1192 5.57215 20.0891 5.33453C19.7211 5.24963 19.2851 5.24979 18.6711 5.25002H5.32747Z',
  d7: 'M11.8414 1.5C11.9469 1.50002 12.0529 1.50002 12.1578 1.5C12.7185 1.49994 13.2313 1.49989 13.6583 1.5556C14.1342 1.61769 14.6011 1.75865 15.0223 2.10567C15.4322 2.44331 15.6742 2.87391 15.8581 3.32585C16.0313 3.7512 16.1879 4.28824 16.3686 4.90811L16.5312 5.42111L14.6256 6.02844L14.4658 5.52697L14.4624 5.5151C14.2639 4.83479 14.1353 4.39822 14.0057 4.07988C13.8704 3.74743 13.7588 3.58567 13.3996 3.53879C13.1174 3.50197 12.737 3.50001 12.102 3.50001H11.8973C11.2623 3.50001 10.8819 3.50197 10.5997 3.53879C10.2404 3.58567 10.1288 3.74743 9.99352 4.07988C9.86404 4.39797 9.73551 4.83412 9.53734 5.51352L9.42962 5.88737L7.50781 5.33362C7.54868 5.19177 7.58926 5.04983 7.63059 4.90812C7.81135 4.28825 7.96796 3.7512 8.1411 3.32585C8.32507 2.87391 8.56701 2.44331 8.97691 2.10567C9.39819 1.75865 9.86504 1.61769 10.3409 1.5556C10.7679 1.49989 11.2807 1.49994 11.8414 1.5Z',
  d8: 'M3.46274 9.75C3.0735 9.75 2.74895 10.0478 2.71551 10.4356L2.51442 12.7675C2.34263 14.7595 2.20723 16.3295 2.26255 17.5614C2.31918 18.8225 2.57824 19.8548 3.30037 20.6884C4.02831 21.5288 4.99744 21.9028 6.20306 22.0793C7.36976 22.25 8.87183 22.25 10.7622 22.25H13.2377C15.128 22.25 16.6301 22.25 17.7968 22.0793C19.0024 21.9028 19.9715 21.5288 20.6995 20.6884C21.4216 19.8548 21.6806 18.8225 21.7373 17.5614C21.7926 16.3295 21.6572 14.7595 21.4854 12.7674L21.2843 10.4356C21.2509 10.0478 20.9263 9.75 20.5371 9.75H3.46274Z',
  d9: 'M11.9999 14L11.7741 14.7152L11.9999 14.7865L12.2258 14.7152L11.9999 14ZM2.49951 11H1.74951V11.5497L2.27367 11.7152L2.49951 11ZM21.4995 11L21.7254 11.7152L22.2495 11.5497L22.2495 11.0001L21.4995 11ZM21.4999 6L22.2499 6.00006C22.2499 5.80114 22.1709 5.61036 22.0303 5.46969C21.8896 5.32903 21.6988 5.25 21.4999 5.25V6ZM2.49951 6V5.25C2.0853 5.25 1.74951 5.58579 1.74951 6H2.49951ZM2.49951 6.75H21.4999V5.25H2.49951V6.75ZM21.2737 10.2848L11.7741 13.2848L12.2258 14.7152L21.7254 11.7152L21.2737 10.2848ZM12.2258 13.2848L2.72535 10.2848L2.27367 11.7152L11.7741 14.7152L12.2258 13.2848ZM1.74951 6V11H3.24951V6H1.74951ZM22.2495 11.0001L22.2499 6.00006L20.7499 5.99994L20.7495 10.9999L22.2495 11.0001Z',
  d10: 'M3.46263 11.5L3.46167 21.5H20.537V11.5',
  d11: 'M15.5 6V2.5H8.5V6',
  d12: 'M1.74951 6C1.74951 5.58579 2.0853 5.25 2.49951 5.25H21.4999C21.6988 5.25 21.8896 5.32903 22.0303 5.46969C22.1709 5.61036 22.2499 5.80114 22.2499 6.00006L22.2495 11.5497L11.9999 14.7865L1.74951 11.5497V6Z',
  d13: 'M21.2862 21.5001C21.2862 21.9144 20.9505 22.2501 20.5362 22.2501H3.46094C3.26201 22.2501 3.07124 22.1711 2.93058 22.0304C2.78993 21.8898 2.71092 21.699 2.71094 21.5001L2.71171 13.4269L11.9991 16.3597L21.2862 13.4268V21.5001Z',
  d14: 'M7.49951 2.75C7.49951 2.19772 7.94723 1.75 8.49951 1.75H15.4995C16.0518 1.75 16.4995 2.19772 16.4995 2.75V6.25H14.4995V3.75H9.49951V6.25H7.49951V2.75Z',
};

export const IconBriefcase02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-stroke-rounded IconBriefcase02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-duotone-rounded IconBriefcase02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-twotone-rounded IconBriefcase02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-solid-rounded IconBriefcase02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-bulk-rounded IconBriefcase02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBriefcase02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-stroke-sharp IconBriefcase02StrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBriefcase02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-02-solid-sharp IconBriefcase02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfBriefcase02: TheIconSelfPack = {
  name: 'Briefcase02',
  StrokeRounded: IconBriefcase02StrokeRounded,
  DuotoneRounded: IconBriefcase02DuotoneRounded,
  TwotoneRounded: IconBriefcase02TwotoneRounded,
  SolidRounded: IconBriefcase02SolidRounded,
  BulkRounded: IconBriefcase02BulkRounded,
  StrokeSharp: IconBriefcase02StrokeSharp,
  SolidSharp: IconBriefcase02SolidSharp,
};
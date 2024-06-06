import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5 21H6.5',
  d2: 'M16.5 6C16.5 5.37191 16.5 5.05787 16.4194 4.78267C16.2518 4.21026 15.8066 3.71716 15.2541 3.49226C14.9886 3.38413 14.6885 3.35347 14.0884 3.29216C12.6695 3.14718 10.8874 3 9.5 3C8.11262 3 6.33047 3.14718 4.91161 3.29216C4.3115 3.35347 4.01144 3.38413 3.74586 3.49226C3.19344 3.71716 2.74816 4.21026 2.58057 4.78267C2.5 5.05787 2.5 5.37191 2.5 6',
  d3: 'M9.5 3.34863L9.5 20.8486',
  d4: 'M21.5 21H19.5C19.0286 21 18.7929 21 18.6464 20.8566C18.5 20.7133 18.5 20.4825 18.5 20.021V19.0766C18.5 18.2812 18.676 18.1253 19.5004 18.1094C20.2769 18.0944 20.7401 18.0388 21.0607 17.8333C21.5 17.5516 21.5 17.0983 21.5 16.1916C21.5 14.4594 18.5 15.1262 18.5 15.1262',
  d5: 'M13 21H7M10 3V21M10 3C8.61262 3 6.83047 3.14718 5.41161 3.29216C4.8115 3.35347 4.51144 3.38413 4.24586 3.49226C3.69344 3.71716 3.24816 4.21026 3.08057 4.78267C3 5.05787 3 5.37191 3 6M10 3C11.3874 3 13.1695 3.14718 14.5884 3.29216C15.1885 3.35347 15.4886 3.38413 15.7541 3.49226C16.3066 3.71716 16.7518 4.21026 16.9194 4.78267C17 5.05787 17 5.37191 17 6',
  d6: 'M22 21H20C19.5286 21 19.2929 21 19.1464 20.8566C19 20.7133 19 20.4825 19 20.021V19.0766C19 18.2812 19.176 18.1253 20.0004 18.1094C20.7769 18.0944 21.2401 18.0388 21.5607 17.8333C22 17.5516 22 17.0983 22 16.1916C22 14.4594 19 15.1262 19 15.1262',
  d7: 'M9.5 3.5L9.5 21',
  d8: 'M9.50016 4.02187C8.36529 4.06724 7.09384 4.17658 6.01342 4.28698C5.35381 4.35437 5.22459 4.37712 5.12309 4.41844C4.85311 4.52836 4.62235 4.78389 4.54045 5.06365C4.50991 5.16796 4.50016 5.30827 4.50016 6C4.50016 6.55228 4.05245 7 3.50016 7C2.94788 7 2.50016 6.55228 2.50016 6C2.50016 5.96303 2.50012 5.92639 2.50008 5.89007C2.49949 5.37184 2.49897 4.91856 2.62102 4.50169C2.87429 3.63663 3.53411 2.90596 4.36895 2.56607C4.77109 2.40235 5.20933 2.35808 5.70703 2.30779C5.74112 2.30435 5.77548 2.30087 5.81013 2.29733C7.23474 2.15178 9.0591 2 10.5002 2C11.9412 2 13.7656 2.15178 15.1902 2.29733C15.2248 2.30087 15.2592 2.30435 15.2933 2.30779C15.791 2.35808 16.2292 2.40235 16.6314 2.56607C17.4662 2.90596 18.126 3.63663 18.3793 4.50169C18.5014 4.91856 18.5008 5.37184 18.5002 5.89007C18.5002 5.92639 18.5002 5.96303 18.5002 6C18.5002 6.55228 18.0524 7 17.5002 7C16.9479 7 16.5002 6.55228 16.5002 6C16.5002 5.30827 16.4904 5.16796 16.4599 5.06365C16.378 4.78389 16.1472 4.52836 15.8772 4.41844C15.7757 4.37712 15.6465 4.35437 14.9869 4.28698C13.9065 4.17658 12.635 4.06724 11.5002 4.02187V20H13.5002C14.0524 20 14.5002 20.4477 14.5002 21C14.5002 21.5523 14.0524 22 13.5002 22H7.50016C6.94788 22 6.50016 21.5523 6.50016 21C6.50016 20.4477 6.94788 20 7.50016 20H9.50016V4.02187Z',
  d9: 'M20.5728 14.4535C21.1296 14.812 21.5002 15.4064 21.5002 16.1916L21.5002 16.2594V16.2594C21.5005 16.6522 21.5008 17.0859 21.424 17.452C21.3243 17.9276 21.0848 18.3647 20.6006 18.6751C20.0067 19.0559 19.2556 19.095 18.5199 19.1092L18.5002 19.1096V20H20.5002C21.0525 20 21.5002 20.4477 21.5002 21C21.5002 21.5523 21.0525 22 20.5002 22H18.5002L18.4612 22H18.4612C18.2609 22.0001 18.0243 22.0002 17.8211 21.9735C17.5779 21.9415 17.2379 21.8558 16.9471 21.5712C16.6534 21.2836 16.5619 20.9423 16.5278 20.6941C16.4999 20.4908 16.5001 20.2551 16.5002 20.0602L16.5002 20.021V19.0766C16.5002 18.7128 16.51 18.0459 17.0008 17.5774C17.2507 17.3387 17.5411 17.2319 17.7806 17.1789C18.0119 17.1278 18.257 17.1139 18.4812 17.1095C19.1314 17.097 19.3753 17.0488 19.4717 17.0144C19.4807 16.9608 19.4891 16.8789 19.4941 16.7516C19.5001 16.6009 19.5002 16.424 19.5002 16.1916C19.5002 16.1298 19.4977 16.1316 19.4939 16.1343L19.4901 16.1351C19.4178 16.0886 19.2418 16.0275 18.9339 16.0071C18.6461 15.988 18.3403 16.0101 18.094 16.0412C17.9739 16.0563 17.8746 16.0727 17.8072 16.0849C17.7737 16.091 17.7484 16.0959 17.7328 16.0991L17.7171 16.1024C17.1781 16.2219 16.6438 15.8821 16.524 15.3431C16.4042 14.804 16.7441 14.2698 17.2833 14.15L17.2859 14.1494L17.2897 14.1485L17.3006 14.1462L17.335 14.1391C17.3633 14.1333 17.4025 14.1256 17.451 14.1169C17.5477 14.0994 17.6828 14.0772 17.8439 14.0569C18.1601 14.017 18.6043 13.9808 19.0665 14.0115C19.5087 14.0409 20.0826 14.1379 20.5728 14.4535Z',
  d10: 'M17.0001 6.00002V3.00002L3 3L3.00008 6.00002',
  d11: 'M21.0005 21H18V18H21.0005V15H18.0005',
  d12: 'M10.0915 3.66797V21.0002M10.0915 21.0002H12.9992M10.0915 21.0002H7.06641',
  d13: 'M9 20V3H11V20H13V22H7V20H9Z',
  d14: 'M2.29288 2.2929C2.48042 2.10536 2.73478 2 3 2L17.0001 2.00002C17.5524 2.00002 18.0001 2.44773 18.0001 3.00002V6.00002H16.0001V4.00002L4.00003 4L4.00008 5.99999L2.00008 6.00004L2 3.00003C1.99999 2.73481 2.10535 2.48044 2.29288 2.2929Z',
  d15: 'M17.0005 14H21.0005C21.5528 14 22.0005 14.4477 22.0005 15V18C22.0005 18.5523 21.5528 19 21.0005 19H19V20H22.0005V22H18C17.4477 22 17 21.5523 17 21V18C17 17.4477 17.4477 17 18 17H20.0005V16H17.0005V14Z',
};

export const IconTextSubscriptStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-stroke-rounded IconTextSubscriptStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSubscriptDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-duotone-rounded IconTextSubscriptDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSubscriptTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-twotone-rounded IconTextSubscriptTwotoneRounded"
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
        d={d.d7} 
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

export const IconTextSubscriptSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-solid-rounded IconTextSubscriptSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconTextSubscriptBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-bulk-rounded IconTextSubscriptBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextSubscriptStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-stroke-sharp IconTextSubscriptStrokeSharp"
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
        strokeLinecap="square" 
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

export const IconTextSubscriptSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-subscript-solid-sharp IconTextSubscriptSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextSubscript: TheIconSelfPack = {
  name: 'TextSubscript',
  StrokeRounded: IconTextSubscriptStrokeRounded,
  DuotoneRounded: IconTextSubscriptDuotoneRounded,
  TwotoneRounded: IconTextSubscriptTwotoneRounded,
  SolidRounded: IconTextSubscriptSolidRounded,
  BulkRounded: IconTextSubscriptBulkRounded,
  StrokeSharp: IconTextSubscriptStrokeSharp,
  SolidSharp: IconTextSubscriptSolidSharp,
};
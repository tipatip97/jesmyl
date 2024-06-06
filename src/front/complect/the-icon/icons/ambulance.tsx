import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 18H15M13.5 8H14.4429C15.7533 8 16.4086 8 16.9641 8.31452C17.5196 8.62904 17.89 9.20972 18.6308 10.3711C19.1502 11.1854 19.6955 11.7765 20.4622 12.3024C21.2341 12.8318 21.6012 13.0906 21.8049 13.506C22 13.9038 22 14.375 22 15.3173C22 16.5596 22 17.1808 21.651 17.5755C21.636 17.5925 21.6207 17.609 21.6049 17.625C21.2375 18 20.6594 18 19.503 18H19',
  d2: 'M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15V8C2 6.58579 2 5.87868 2.43934 5.43934C2.87868 5 3.58579 5 5 5H10.5C11.9142 5 12.6213 5 13.0607 5.43934C13.5 5.87868 13.5 6.58579 13.5 8V18H9',
  d3: 'M22 15H21',
  d4: 'M8 9V13M10 11L6 11',
  d5: 'M13.5 17.5V7.5C13.5 6.08579 13.5 5.37868 13.0607 4.93934C12.6213 4.5 11.9142 4.5 10.5 4.5H5C3.58579 4.5 2.87868 4.5 2.43934 4.93934C2 5.37868 2 6.08579 2 7.5V14.5C2 15.9142 2 16.6213 2.43934 17.0607C2.87868 17.5 3.58579 17.5 5 17.5C5 16.3954 5.89543 15.5 7 15.5C8.10457 15.5 9 16.3954 9 17.5H13.5Z',
  d6: 'M11 17.5H15M13.5 7.5H14.4429C15.7533 7.5 16.4086 7.5 16.9641 7.81452C17.5196 8.12904 17.89 8.70972 18.6308 9.87107C19.1502 10.6854 19.6955 11.2765 20.4622 11.8024C21.2341 12.3318 21.6012 12.5906 21.8049 13.006C22 13.4038 22 13.875 22 14.8173C22 16.0596 22 16.6808 21.651 17.0755C21.636 17.0925 21.6207 17.109 21.6049 17.125C21.2375 17.5 20.6594 17.5 19.503 17.5H19',
  d7: 'M5 17.5C3.58579 17.5 2.87868 17.5 2.43934 17.0607C2 16.6213 2 15.9142 2 14.5V7.5C2 6.08579 2 5.37868 2.43934 4.93934C2.87868 4.5 3.58579 4.5 5 4.5H10.5C11.9142 4.5 12.6213 4.5 13.0607 4.93934C13.5 5.37868 13.5 6.08579 13.5 7.5V17.5H9',
  d8: 'M22 14.5H21',
  d9: 'M8 8.5V12.5M10 10.5L6 10.5',
  d10: 'M4.95356 3.875H10.5523C11.2171 3.87497 11.7901 3.87494 12.2488 3.93661C12.7404 4.00271 13.2117 4.15177 13.5939 4.53402C13.9762 4.91626 14.1252 5.38753 14.1913 5.87916C14.2301 6.16738 14.2445 6.50064 14.2498 6.87346C14.2498 6.87432 14.2505 6.87501 14.2514 6.87501C14.2522 6.87501 14.2529 6.87571 14.2529 6.87657V10.625C14.2529 11.0392 14.5887 11.375 15.0029 11.375C15.4171 11.375 15.7529 11.0392 15.7529 10.625V7.20617C15.7529 7.03698 15.8951 6.9013 16.0634 6.91797C16.5232 6.9635 16.9376 7.06102 17.3365 7.28687C17.7329 7.51131 18.036 7.81837 18.3244 8.19176C18.6683 8.63692 18.9639 9.11904 19.266 9.59274C19.72 10.3045 20.2802 10.8915 20.9762 11.3684C21.6493 11.8294 22.1846 12.196 22.4812 12.8008C22.6343 13.1129 22.697 13.4308 22.7258 13.7686C22.7307 13.8262 22.6849 13.875 22.6271 13.875H21.7529C21.3387 13.875 21.0029 14.2108 21.0029 14.625C21.0029 15.0392 21.3387 15.375 21.7529 15.375H22.1496C22.437 15.375 22.5807 15.375 22.6693 15.4671C22.7578 15.5592 22.7523 15.6987 22.7412 15.9777C22.734 16.1584 22.7225 16.3261 22.7039 16.4795C22.6516 16.9105 22.5336 17.3379 22.2158 17.6973C21.889 18.067 21.4386 18.2535 20.9567 18.3209C20.818 18.3403 20.7066 18.2142 20.7233 18.0752C20.7409 17.9276 20.75 17.7774 20.75 17.625C20.75 15.5539 19.0711 13.875 17 13.875C14.9438 13.875 13.2445 15.5943 13.2501 17.646C13.2521 18.0141 13.2531 18.1981 13.1651 18.2866C13.0772 18.375 12.9151 18.375 12.591 18.375H11.409C11.0849 18.375 10.9229 18.375 10.8349 18.2866C10.7469 18.1981 10.7479 18.0141 10.7499 17.646C10.7555 15.5943 9.05619 13.875 7 13.875C4.92893 13.875 3.25 15.5539 3.25 17.625C3.25 17.8428 3.26857 18.0562 3.3042 18.2638C3.30905 18.2921 3.28546 18.3172 3.25709 18.3134C2.76546 18.2473 2.29419 18.0982 1.91195 17.716C1.5297 17.3338 1.38064 16.8625 1.31454 16.3709C1.25287 15.9121 1.2529 15.3393 1.25293 14.6745V7.57563C1.2529 6.91083 1.25287 6.33788 1.31454 5.87916C1.38064 5.38753 1.5297 4.91626 1.91195 4.53402C2.29419 4.15177 2.76546 4.00271 3.25709 3.93661C3.71581 3.87494 4.28876 3.87497 4.95356 3.875ZM8.75293 7.625C8.75293 7.21079 8.41714 6.875 8.00293 6.875C7.58872 6.875 7.25293 7.21079 7.25293 7.625V8.875H6.00293C5.58872 8.875 5.25293 9.21079 5.25293 9.625C5.25293 10.0392 5.58872 10.375 6.00293 10.375H7.25293V11.625C7.25293 12.0392 7.58872 12.375 8.00293 12.375C8.41714 12.375 8.75293 12.0392 8.75293 11.625V10.375H10.0029C10.4171 10.375 10.7529 10.0392 10.7529 9.625C10.7529 9.21079 10.4171 8.875 10.0029 8.875H8.75293V7.625Z',
  d11: 'M10.5494 3.875H4.95063C4.28583 3.87497 3.71288 3.87494 3.25416 3.93661C2.76253 4.00271 2.29126 4.15177 1.90902 4.53402C1.52677 4.91626 1.37771 5.38753 1.31161 5.87916C1.24994 6.33788 1.24997 6.91079 1.25 7.57559V14.6745C1.24997 15.3393 1.24994 15.9121 1.31161 16.3709C1.37771 16.8625 1.52677 17.3338 1.90902 17.716C2.23655 18.0435 2.62371 18.1993 3.04178 18.2792C3.15972 18.3018 3.21869 18.313 3.25578 18.2787C3.29286 18.2443 3.28557 18.1798 3.27099 18.0509C3.25519 17.9111 3.24707 17.769 3.24707 17.625C3.24707 15.5539 4.926 13.875 6.99707 13.875C9.06814 13.875 10.7471 15.5539 10.7471 17.625C10.7471 17.632 10.7471 17.639 10.747 17.646C10.745 18.0141 10.744 18.1981 10.832 18.2866C10.9199 18.375 11.082 18.375 11.4061 18.375H12.5881C12.9122 18.375 13.0742 18.375 13.1622 18.2866C13.2502 18.1981 13.2491 18.0141 13.2471 17.646C13.2471 17.639 13.2471 17.632 13.2471 17.625C13.2471 15.5539 14.926 13.875 16.9971 13.875C19.0681 13.875 20.7471 15.5539 20.7471 17.625C20.7471 17.7774 20.738 17.9276 20.7203 18.0752C20.7037 18.2142 20.8151 18.3403 20.9537 18.3209C21.4356 18.2535 21.8861 18.067 22.2129 17.6973C22.5307 17.3379 22.6487 16.9105 22.7009 16.4795C22.7388 16.1671 22.7475 15.7959 22.7494 15.375H21.75C21.3358 15.375 21 15.0392 21 14.625C21 14.2108 21.3358 13.875 21.75 13.875H22.7309C22.7056 13.4863 22.6471 13.145 22.4783 12.8008C22.1817 12.196 21.6464 11.8294 20.9732 11.3684C20.2773 10.8915 19.7171 10.3045 19.2631 9.59274L19.245 9.56441C18.89 9.00777 18.5969 8.54828 18.3215 8.19176C18.0331 7.81837 17.73 7.51131 17.3336 7.28687C16.9347 7.06102 16.5203 6.9635 16.0605 6.91797C15.8921 6.9013 15.75 7.03698 15.75 7.20617V10.625C15.75 11.0392 15.4142 11.375 15 11.375C14.5858 11.375 14.25 11.0392 14.25 10.625V6.87501H14.2469C14.2416 6.50156 14.2272 6.16778 14.1884 5.87916C14.1223 5.38753 13.9732 4.91626 13.591 4.53402C13.2088 4.15177 12.7375 4.00271 12.2459 3.93661C11.7871 3.87494 11.2142 3.87497 10.5494 3.875Z',
  d12: 'M22.7494 15.375H21.75C21.3358 15.375 21 15.0392 21 14.625C21 14.2108 21.3358 13.875 21.75 13.875H22.7309L22.7494 15.375Z',
  d13: 'M8 6.875C8.41421 6.875 8.75 7.21079 8.75 7.625V8.875H10C10.4142 8.875 10.75 9.21079 10.75 9.625C10.75 10.0392 10.4142 10.375 10 10.375H8.75V11.625C8.75 12.0392 8.41421 12.375 8 12.375C7.58579 12.375 7.25 12.0392 7.25 11.625V10.375H6C5.58579 10.375 5.25 10.0392 5.25 9.625C5.25 9.21079 5.58579 8.875 6 8.875H7.25V7.625C7.25 7.21079 7.58579 6.875 8 6.875Z',
  d14: 'M11 17.5H15M13.5 7.5H18.5L22 12V17.5H19',
  d15: 'M5 17.5H2.00005L2 4.5H13.5V17.5H9',
  d16: 'M8 7.5V12.5M10.5 10H5.5',
  d17: 'M17 19.5C18.1046 19.5 19 18.6046 19 17.5C19 16.3954 18.1046 15.5 17 15.5C15.8954 15.5 15 16.3954 15 17.5C15 18.6046 15.8954 19.5 17 19.5Z',
  d18: 'M7 19.5C8.10457 19.5 9 18.6046 9 17.5C9 16.3954 8.10457 15.5 7 15.5C5.89543 15.5 5 16.3954 5 17.5C5 18.6046 5.89543 19.5 7 19.5Z',
  d19: 'M20 14.5H21.9873',
  d20: 'M13.5 3.75H2C1.80109 3.75 1.61032 3.82902 1.46967 3.96967C1.32902 4.11032 1.25 4.30109 1.25 4.5L1.25005 17.5C1.25005 17.9142 1.58584 18.25 2.00005 18.25H3.28304C3.26125 18.0864 3.25 17.9195 3.25 17.75C3.25 15.6789 4.92893 14 7 14C9.07107 14 10.75 15.6789 10.75 17.75C10.75 17.9195 10.7388 18.0864 10.717 18.25H13.283C13.2612 18.0864 13.25 17.9195 13.25 17.75C13.25 15.6789 14.9289 14 17 14C19.0711 14 20.75 15.6789 20.75 17.75C20.75 17.9195 20.7388 18.0864 20.717 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5V14.25H21V12.75H22.75V12C22.75 11.8332 22.6944 11.6712 22.592 11.5395L19.092 7.03954C18.9499 6.85685 18.7314 6.75 18.5 6.75H15.75V11.5H14.25V4.5C14.25 4.30109 14.171 4.11032 14.0303 3.96967C13.8897 3.82902 13.6989 3.75 13.5 3.75ZM7 6.5V8H5.5V10H7V11.5H9V10H10.5V8H9V6.5H7Z',
  d21: 'M7 20.25C8.38071 20.25 9.5 19.1307 9.5 17.75C9.5 16.3693 8.38071 15.25 7 15.25C5.61929 15.25 4.5 16.3693 4.5 17.75C4.5 19.1307 5.61929 20.25 7 20.25Z',
  d22: 'M17 20.25C18.3807 20.25 19.5 19.1307 19.5 17.75C19.5 16.3693 18.3807 15.25 17 15.25C15.6193 15.25 14.5 16.3693 14.5 17.75C14.5 19.1307 15.6193 20.25 17 20.25Z',
};

export const IconAmbulanceStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-stroke-rounded IconAmbulanceStrokeRounded"
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
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAmbulanceDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-duotone-rounded IconAmbulanceDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      <circle 
        cx="17" 
        cy="17.5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17.5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAmbulanceTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-twotone-rounded IconAmbulanceTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <circle 
        cx="17" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="18" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconAmbulanceSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-solid-rounded IconAmbulanceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="17.001" 
        cy="17.625" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7.00098" 
        cy="17.625" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconAmbulanceBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-bulk-rounded IconAmbulanceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="16.998" 
        cy="17.625" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="6.99805" 
        cy="17.625" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconAmbulanceStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-stroke-sharp IconAmbulanceStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAmbulanceSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ambulance-solid-sharp IconAmbulanceSolidSharp"
    >
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
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAmbulance: TheIconSelfPack = {
  name: 'Ambulance',
  StrokeRounded: IconAmbulanceStrokeRounded,
  DuotoneRounded: IconAmbulanceDuotoneRounded,
  TwotoneRounded: IconAmbulanceTwotoneRounded,
  SolidRounded: IconAmbulanceSolidRounded,
  BulkRounded: IconAmbulanceBulkRounded,
  StrokeSharp: IconAmbulanceStrokeSharp,
  SolidSharp: IconAmbulanceSolidSharp,
};
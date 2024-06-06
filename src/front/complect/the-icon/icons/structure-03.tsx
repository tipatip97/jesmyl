import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z',
  d2: 'M10.2857 2H13.7143C15.7888 2 16 2.92494 16 4.5C16 6.07506 15.7888 7 13.7143 7H10.2857C8.2112 7 8 6.07506 8 4.5C8 2.92494 8.2112 2 10.2857 2Z',
  d3: 'M4 13C4.24764 11.377 5.24469 11 7.98759 11H16.0153C18.7582 11 19.7524 11.377 20 13',
  d4: 'M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13C4.94281 13 5.41421 13 5.70711 13.2929C6 13.5858 6 14.0572 6 15C6 15.9428 6 16.4142 5.70711 16.7071C5.41421 17 4.94281 17 4 17C3.05719 17 2.58579 17 2.29289 16.7071C2 16.4142 2 15.9428 2 15Z',
  d5: 'M18 15C18 14.0572 18 13.5858 18.2929 13.2929C18.5858 13 19.0572 13 20 13C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15C22 15.9428 22 16.4142 21.7071 16.7071C21.4142 17 20.9428 17 20 17C19.0572 17 18.5858 17 18.2929 16.7071C18 16.4142 18 15.9428 18 15Z',
  d6: 'M12 7L12 14',
  d7: 'M12 19L12 22',
  d8: 'M3.25858 12.8869C3.1961 13.2963 3.4774 13.6789 3.88687 13.7414C4.29635 13.8039 4.67894 13.5226 4.74142 13.1131L3.25858 12.8869ZM19.2586 13.1131C19.3211 13.5226 19.7037 13.8039 20.1131 13.7414C20.5226 13.6789 20.8039 13.2963 20.7414 12.8869L19.2586 13.1131ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14H11.25ZM12.75 19C12.75 18.5858 12.4142 18.25 12 18.25C11.5858 18.25 11.25 18.5858 11.25 19H12.75ZM11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22H11.25ZM7.98759 11.75H16.0153V10.25H7.98759V11.75ZM7.98759 10.25C6.62574 10.25 5.52981 10.3355 4.73526 10.7144C4.31168 10.9164 3.96669 11.2033 3.7128 11.5943C3.46529 11.9755 3.33056 12.4151 3.25858 12.8869L4.74142 13.1131C4.79326 12.7733 4.87603 12.5572 4.97084 12.4112C5.05925 12.2751 5.18139 12.1635 5.38089 12.0683C5.8325 11.853 6.60654 11.75 7.98759 11.75V10.25ZM16.0153 11.75C17.3965 11.75 18.1696 11.853 18.6203 12.0682C18.8192 12.1632 18.9411 12.2746 19.0293 12.4108C19.124 12.5568 19.2067 12.7731 19.2586 13.1131L20.7414 12.8869C20.6695 12.4154 20.535 11.9759 20.288 11.5948C20.0345 11.2038 19.6899 10.9167 19.2665 10.7145C18.4725 10.3355 17.3771 10.25 16.0153 10.25V11.75ZM11.25 7V14H12.75V7H11.25ZM11.25 19V22H12.75V19H11.25Z',
  d9: 'M8.75 16.375C8.75 14.5801 10.2051 13.125 12 13.125C13.7949 13.125 15.25 14.5801 15.25 16.375C15.25 18.1699 13.7949 19.625 12 19.625C10.2051 19.625 8.75 18.1699 8.75 16.375Z',
  d10: 'M7.75887 2.09252C8.28551 1.37015 9.16897 1.125 10.2857 1.125H13.7143C14.831 1.125 15.7145 1.37015 16.2411 2.09252C16.7171 2.74538 16.75 3.61777 16.75 4.375C16.75 5.13223 16.7171 6.00462 16.2411 6.65748C15.7145 7.37985 14.831 7.625 13.7143 7.625H10.2857C9.16897 7.625 8.28551 7.37985 7.75887 6.65748C7.28291 6.00462 7.25 5.13223 7.25 4.375C7.25 3.61777 7.28291 2.74538 7.75887 2.09252Z',
  d11: 'M3.95526 12.125L4.00001 12.125L4.04476 12.125C4.47757 12.125 4.8744 12.1249 5.19721 12.1683C5.55269 12.2161 5.92842 12.3285 6.23744 12.6376C6.54647 12.9466 6.65891 13.3223 6.70671 13.6778C6.75011 14.0006 6.75006 14.3974 6.75001 14.8302V14.8303L6.75001 14.875L6.75001 14.9198V14.9198C6.75006 15.3526 6.75011 15.7494 6.70671 16.0722C6.65891 16.4277 6.54647 16.8034 6.23744 17.1124C5.92842 17.4215 5.55269 17.5339 5.19721 17.5817C4.8744 17.6251 4.47758 17.6251 4.04476 17.625H4.04475L4.00001 17.625L3.95526 17.625H3.95525C3.52244 17.6251 3.12561 17.6251 2.8028 17.5817C2.44732 17.5339 2.07159 17.4215 1.76257 17.1124C1.45355 16.8034 1.3411 16.4277 1.29331 16.0722C1.24991 15.7494 1.24995 15.3526 1.25 14.9198L1.25001 14.875L1.25 14.8303C1.24995 14.3974 1.24991 14.0006 1.29331 13.6778C1.3411 13.3223 1.45355 12.9466 1.76257 12.6376C2.07159 12.3285 2.44732 12.2161 2.8028 12.1683C3.12561 12.1249 3.52244 12.125 3.95526 12.125Z',
  d12: 'M19.9553 12.125L20 12.125L20.0448 12.125C20.4776 12.125 20.8744 12.1249 21.1972 12.1683C21.5527 12.2161 21.9284 12.3285 22.2374 12.6376C22.5465 12.9466 22.6589 13.3223 22.7067 13.6778C22.7501 14.0006 22.7501 14.3974 22.75 14.8302V14.8303L22.75 14.875L22.75 14.9198V14.9198C22.7501 15.3526 22.7501 15.7494 22.7067 16.0722C22.6589 16.4277 22.5465 16.8034 22.2374 17.1124C21.9284 17.4215 21.5527 17.5339 21.1972 17.5817C20.8744 17.6251 20.4776 17.6251 20.0448 17.625H20.0448L20 17.625L19.9553 17.625H19.9553C19.5224 17.6251 19.1256 17.6251 18.8028 17.5817C18.4473 17.5339 18.0716 17.4215 17.7626 17.1124C17.4535 16.8034 17.3411 16.4277 17.2933 16.0722C17.2499 15.7494 17.25 15.3526 17.25 14.9198L17.25 14.875L17.25 14.8303C17.25 14.3974 17.2499 14.0006 17.2933 13.6778C17.3411 13.3223 17.4535 12.9466 17.7626 12.6376C18.0716 12.3285 18.4473 12.2161 18.8028 12.1683C19.1256 12.1249 19.5224 12.125 19.9553 12.125Z',
  d13: 'M11.9999 5.875C12.5522 5.875 12.9999 6.32272 12.9999 6.875V9.875H16.0152C17.3738 9.875 18.5229 9.95754 19.3741 10.3639C19.8349 10.5839 20.2166 10.9003 20.4976 11.3338C20.7701 11.7541 20.9132 12.2308 20.9885 12.7242C21.0718 13.2701 20.6967 13.7803 20.1507 13.8636C19.6048 13.9469 19.0946 13.5718 19.0113 13.0258C18.9628 12.7077 18.8887 12.5287 18.8194 12.4218C18.7587 12.3281 18.674 12.2459 18.5125 12.1688C18.119 11.9809 17.3996 11.875 16.0152 11.875H12.9999V13.875C12.9999 14.4273 12.5522 14.875 11.9999 14.875C11.4476 14.875 10.9999 14.4273 10.9999 13.875V11.875H7.98748C6.60323 11.875 5.88284 11.9809 5.48839 12.169C5.32623 12.2463 5.24124 12.3287 5.1804 12.4224C5.11105 12.5292 5.03694 12.708 4.98845 13.0258C4.90515 13.5718 4.39503 13.9469 3.84906 13.8636C3.30309 13.7803 2.92803 13.2701 3.01134 12.7242C3.08667 12.2304 3.23006 11.7535 3.50302 11.3332C3.78449 10.8997 4.16663 10.5835 4.62755 10.3637C5.47926 9.95759 6.62883 9.875 7.98748 9.875H10.9999V6.875C10.9999 6.32272 11.4476 5.875 11.9999 5.875ZM11.9999 17.875C12.5522 17.875 12.9999 18.3227 12.9999 18.875V21.875C12.9999 22.4273 12.5522 22.875 11.9999 22.875C11.4476 22.875 10.9999 22.4273 10.9999 21.875V18.875C10.9999 18.3227 11.4476 17.875 11.9999 17.875Z',
  d14: 'M11.001 7.625V9.875H7.98857C6.62992 9.875 5.48035 9.95759 4.62864 10.3637C4.16772 10.5835 3.78558 10.8997 3.50411 11.3332C3.34111 11.5842 3.22432 11.8554 3.14062 12.1383C3.38826 12.1249 3.66398 12.125 3.95609 12.125H4.0456C4.47841 12.125 4.87525 12.1249 5.19806 12.1683C5.27047 12.178 5.34372 12.1905 5.41708 12.2067C5.43937 12.194 5.46343 12.1814 5.48948 12.169C5.88393 11.9809 6.60432 11.875 7.98857 11.875H11.001V13.2817C11.316 13.18 11.652 13.125 12.0008 13.125C12.3498 13.125 12.6859 13.18 13.001 13.2818V11.875H16.0163C17.4007 11.875 18.1201 11.9809 18.5135 12.1688C18.5395 12.1812 18.5635 12.1937 18.5858 12.2064C18.6587 12.1903 18.7316 12.178 18.8036 12.1683C19.1265 12.1249 19.5233 12.125 19.9561 12.125H20.0456C20.3379 12.125 20.6137 12.1249 20.8614 12.1383C20.7779 11.8556 20.6614 11.5847 20.4987 11.3338C20.2177 10.9003 19.836 10.5839 19.3752 10.3639C18.524 9.95754 17.3748 9.875 16.0163 9.875H13.001V7.625H11.001Z',
  d15: 'M11.001 19.4683C11.316 19.57 11.652 19.625 12.0008 19.625C12.3498 19.625 12.6859 19.57 13.001 19.4682V21.875C13.001 22.4273 12.5533 22.875 12.001 22.875C11.4487 22.875 11.001 22.4273 11.001 21.875V19.4683Z',
  d16: 'M16 7V2H8V7H16Z',
  d17: 'M6 18V14H2V18H6Z',
  d18: 'M22 18V14H18V18H22Z',
  d19: 'M4 14L4.0018 11H20V14',
  d20: 'M8.75 16.5C8.75 14.7051 10.2051 13.25 12 13.25C13.7949 13.25 15.25 14.7051 15.25 16.5C15.25 18.2949 13.7949 19.75 12 19.75C10.2051 19.75 8.75 18.2949 8.75 16.5Z',
  d21: 'M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25H16C16.4142 1.25 16.75 1.58579 16.75 2V7C16.75 7.41421 16.4142 7.75 16 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7V2Z',
  d22: 'M1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H6C6.41421 13.25 6.75 13.5858 6.75 14V18C6.75 18.4142 6.41421 18.75 6 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V14Z',
  d23: 'M17.25 14C17.25 13.5858 17.5858 13.25 18 13.25H22C22.4142 13.25 22.75 13.5858 22.75 14V18C22.75 18.4142 22.4142 18.75 22 18.75H18C17.5858 18.75 17.25 18.4142 17.25 18V14Z',
  d24: 'M11 10V7H13V10H20C20.5523 10 21 10.4477 21 11V14H19V12H13V14H11V12H5.0012L5 14.0006L3 13.9994L3.0018 10.9994C3.00213 10.4473 3.44975 10 4.0018 10H11ZM11 22V19H13V22H11Z',
};

export const IconStructure03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-stroke-rounded IconStructure03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconStructure03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-duotone-rounded IconStructure03DuotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconStructure03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-twotone-rounded IconStructure03TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-solid-rounded IconStructure03SolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-bulk-rounded IconStructure03BulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconStructure03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-stroke-sharp IconStructure03StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-03-solid-sharp IconStructure03SolidSharp"
    >
      <path 
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
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructure03: TheIconSelfPack = {
  name: 'Structure03',
  StrokeRounded: IconStructure03StrokeRounded,
  DuotoneRounded: IconStructure03DuotoneRounded,
  TwotoneRounded: IconStructure03TwotoneRounded,
  SolidRounded: IconStructure03SolidRounded,
  BulkRounded: IconStructure03BulkRounded,
  StrokeSharp: IconStructure03StrokeSharp,
  SolidSharp: IconStructure03SolidSharp,
};
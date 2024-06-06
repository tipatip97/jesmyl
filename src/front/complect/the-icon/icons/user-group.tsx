import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.774 18C21.5233 18 22.1193 17.5285 22.6545 16.8691C23.7499 15.5194 21.9513 14.4408 21.2654 13.9126C20.568 13.3756 19.7894 13.0714 19 13M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6',
  d2: 'M3.22596 18C2.47666 18 1.88067 17.5285 1.34555 16.8691C0.250089 15.5194 2.04867 14.4408 2.73465 13.9126C3.43197 13.3756 4.21058 13.0714 5 13M5.5 11C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6',
  d3: 'M8.0838 15.1112C7.06203 15.743 4.38299 17.0331 6.0147 18.6474C6.81178 19.436 7.69952 20 8.81563 20H15.1844C16.3005 20 17.1882 19.436 17.9853 18.6474C19.617 17.0331 16.938 15.743 15.9162 15.1112C13.5201 13.6296 10.4799 13.6296 8.0838 15.1112Z',
  d4: 'M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z',
  d5: 'M20.5 8.5C20.5 9.88071 19.3807 11 18 11C16.6193 11 15.5 9.88071 15.5 8.5C15.5 7.11929 16.6193 6 18 6C19.3807 6 20.5 7.11929 20.5 8.5Z',
  d6: 'M8.5 8.5C8.5 9.88071 7.38071 11 6 11C4.61929 11 3.5 9.88071 3.5 8.5C3.5 7.11929 4.61929 6 6 6C7.38071 6 8.5 7.11929 8.5 8.5Z',
  d7: 'M7.50337 13.1474C7.21627 13.3013 6.93491 13.4624 6.72814 13.5903C6.23354 13.8795 5.30191 14.4241 4.62889 15.1082C4.19456 15.5497 3.6236 16.2837 3.51733 17.2933C3.48451 17.6051 3.49934 17.9036 3.55304 18.1871C3.60678 18.4709 3.63366 18.6128 3.56186 18.6872C3.49006 18.7616 3.37042 18.7434 3.13114 18.707C2.10732 18.5512 1.41543 17.9931 0.847642 17.3845C0.423078 16.9295 0.203787 16.4061 0.258175 15.8464C0.30924 15.3208 0.59019 14.8976 0.871177 14.5882C1.31466 14.0998 1.96834 13.686 2.35981 13.4381C2.44345 13.3852 2.51514 13.3398 2.57023 13.3029C4.04765 12.3132 5.8097 12.0212 7.45505 12.427C7.84296 12.5226 8.03691 12.5704 8.05406 12.7068C8.0712 12.8431 7.88193 12.9445 7.50337 13.1474Z',
  d8: 'M6.48741 5.28631C6.67712 5.31484 6.77197 5.3291 6.8207 5.4079C6.86944 5.48671 6.83547 5.59136 6.76754 5.80068C6.59386 6.33583 6.5 6.90695 6.5 7.5C6.5 8.73995 6.91032 9.88407 7.60259 10.804C7.73465 10.9795 7.80068 11.0672 7.78033 11.1575C7.75999 11.2478 7.67509 11.2922 7.5053 11.3811C7.05526 11.6167 6.5432 11.75 6 11.75C4.20507 11.75 2.75 10.2949 2.75 8.5C2.75 6.70507 4.20507 5.25 6 5.25C6.16566 5.25 6.32842 5.26239 6.48741 5.28631Z',
  d9: 'M16.4971 13.1474C16.7842 13.3013 17.0656 13.4624 17.2723 13.5903C17.767 13.8795 18.6986 14.4241 19.3716 15.1082C19.8059 15.5497 20.3769 16.2837 20.4832 17.2933C20.516 17.6051 20.5011 17.9036 20.4474 18.1871C20.3937 18.4709 20.3668 18.6128 20.4386 18.6872C20.5104 18.7616 20.6301 18.7434 20.8694 18.707C21.8932 18.5512 22.5851 17.9931 23.1528 17.3845C23.5774 16.9295 23.7967 16.4061 23.7423 15.8464C23.6912 15.3208 23.4103 14.8976 23.1293 14.5882C22.6858 14.0998 22.0322 13.686 21.6407 13.4381C21.557 13.3852 21.4853 13.3398 21.4303 13.3029C19.9528 12.3132 18.1908 12.0212 16.5454 12.427C16.1575 12.5226 15.9636 12.5704 15.9464 12.7068C15.9293 12.8431 16.1186 12.9445 16.4971 13.1474Z',
  d10: 'M16.3978 10.804C16.2657 10.9795 16.1997 11.0672 16.2201 11.1575C16.2404 11.2478 16.3253 11.2922 16.4951 11.3811C16.9451 11.6167 17.4572 11.75 18.0004 11.75C19.7953 11.75 21.2504 10.2949 21.2504 8.5C21.2504 6.70507 19.7953 5.25 18.0004 5.25C17.8347 5.25 17.672 5.26239 17.513 5.28631C17.3233 5.31484 17.2284 5.3291 17.1797 5.4079C17.131 5.48671 17.1649 5.59136 17.2329 5.80068C17.4065 6.33583 17.5004 6.90695 17.5004 7.5C17.5004 8.73995 17.0901 9.88407 16.3978 10.804Z',
  d11: 'M7.69146 14.4733C10.3292 12.8422 13.675 12.8422 16.3127 14.4733C16.3905 14.5214 16.489 14.579 16.6022 14.6452L16.6022 14.6452C17.1145 14.945 17.9276 15.4208 18.4826 15.9849C18.8311 16.3391 19.1787 16.8221 19.242 17.4242C19.3099 18.0683 19.0365 18.6646 18.5149 19.1806C17.6533 20.033 16.5859 20.75 15.1865 20.75H8.81773C7.41827 20.75 6.35094 20.033 5.48932 19.1806C4.96775 18.6646 4.69435 18.0683 4.76215 17.4242C4.82553 16.8221 5.17313 16.3391 5.52165 15.9849C6.07655 15.4208 6.88974 14.945 7.40201 14.6452L7.40204 14.6452C7.51521 14.579 7.6137 14.5214 7.69146 14.4733Z',
  d12: 'M7.75195 7.5C7.75195 5.15279 9.65474 3.25 12.002 3.25C14.3492 3.25 16.252 5.15279 16.252 7.5C16.252 9.84721 14.3492 11.75 12.002 11.75C9.65474 11.75 7.75195 9.84721 7.75195 7.5Z',
  d13: 'M7.50337 13.1474C7.21627 13.3013 6.93491 13.4624 6.72814 13.5902C6.23354 13.8794 5.30191 14.4241 4.62889 15.1082C4.19456 15.5497 3.6236 16.2837 3.51733 17.2933C3.48451 17.605 3.49934 17.9035 3.55304 18.1871C3.60678 18.4708 3.63366 18.6127 3.56186 18.6871C3.49006 18.7616 3.37042 18.7434 3.13114 18.7069C2.10732 18.5511 1.41543 17.993 0.847642 17.3844C0.423078 16.9294 0.203787 16.4061 0.258175 15.8463C0.30924 15.3207 0.59019 14.8975 0.871177 14.5881C1.31466 14.0998 1.96834 13.6859 2.35981 13.4381C2.44345 13.3851 2.51514 13.3397 2.57023 13.3028C4.04765 12.3131 5.8097 12.0212 7.45505 12.4269C7.84296 12.5225 8.03691 12.5704 8.05406 12.7067C8.0712 12.843 7.88193 12.9445 7.50337 13.1474Z',
  d14: 'M6.48748 5.28631C6.67718 5.31484 6.77203 5.3291 6.82077 5.4079C6.8695 5.48671 6.83553 5.59136 6.7676 5.80068C6.59392 6.33583 6.50006 6.90695 6.50006 7.5C6.50006 8.73995 6.91038 9.88407 7.60265 10.804C7.73471 10.9795 7.80075 11.0672 7.7804 11.1575C7.76005 11.2478 7.67515 11.2922 7.50536 11.3811C7.05533 11.6167 6.54326 11.75 6.00006 11.75C4.20514 11.75 2.75006 10.2949 2.75006 8.5C2.75006 6.70507 4.20514 5.25 6.00006 5.25C6.16572 5.25 6.32848 5.26239 6.48748 5.28631Z',
  d15: 'M16.4971 13.1474C16.7842 13.3013 17.0655 13.4624 17.2723 13.5902C17.7669 13.8794 18.6985 14.4241 19.3715 15.1082C19.8059 15.5497 20.3768 16.2837 20.4831 17.2933C20.5159 17.605 20.5011 17.9035 20.4474 18.1871C20.3937 18.4708 20.3668 18.6127 20.4386 18.6871C20.5104 18.7616 20.63 18.7434 20.8693 18.7069C21.8931 18.5511 22.585 17.993 23.1528 17.3844C23.5774 16.9294 23.7967 16.4061 23.7423 15.8463C23.6912 15.3207 23.4102 14.8975 23.1293 14.5881C22.6858 14.0998 22.0321 13.6859 21.6406 13.4381C21.557 13.3851 21.4853 13.3397 21.4302 13.3028C19.9528 12.3131 18.1907 12.0212 16.5454 12.4269C16.1575 12.5225 15.9635 12.5704 15.9464 12.7067C15.9292 12.843 16.1185 12.9445 16.4971 13.1474Z',
  d16: 'M16.3979 10.804C16.2659 10.9795 16.1998 11.0672 16.2202 11.1575C16.2405 11.2478 16.3254 11.2922 16.4952 11.3811C16.9452 11.6167 17.4573 11.75 18.0005 11.75C19.7954 11.75 21.2505 10.2949 21.2505 8.5C21.2505 6.70507 19.7954 5.25 18.0005 5.25C17.8348 5.25 17.6721 5.26239 17.5131 5.28631C17.3234 5.31484 17.2285 5.3291 17.1798 5.4079C17.1311 5.48671 17.165 5.59136 17.233 5.80068C17.4066 6.33583 17.5005 6.90695 17.5005 7.5C17.5005 8.73995 17.0902 9.88407 16.3979 10.804Z',
  d17: 'M17 10.5C18.3807 10.5 19.5 9.38071 19.5 8C19.5 6.61929 18.3807 5.5 17 5.5M22 18C22 15.2386 19.7614 13 17 13',
  d18: 'M6.99998 10.5C5.61927 10.5 4.49998 9.38071 4.49998 8C4.49998 6.61929 5.61927 5.5 6.99998 5.5M2 18C2 15.2386 4.23858 13 7 13',
  d19: 'M5 20H19C19 16.6863 15.866 14 12 14C8.13401 14 5 16.6863 5 20Z',
  d20: 'M7.75 7.5C7.75 5.15279 9.65279 3.25 12 3.25C14.3472 3.25 16.25 5.15279 16.25 7.5C16.25 9.84721 14.3472 11.75 12 11.75C9.65279 11.75 7.75 9.84721 7.75 7.5Z',
  d21: 'M4.25 20C4.25 16.1678 7.83242 13.25 12 13.25C16.1676 13.25 19.75 16.1678 19.75 20V20.75H4.25V20Z',
  d22: 'M7.23113 4.75809C6.76605 5.56524 6.5 6.50155 6.5 7.5C6.5 8.89211 7.0172 10.1634 7.86994 11.1323C7.59306 11.209 7.30133 11.25 7.00002 11.25C5.20511 11.25 3.74998 9.79494 3.74998 8C3.74998 6.20506 5.20511 4.75 7.00002 4.75C7.07772 4.75 7.15479 4.75273 7.23113 4.75809Z',
  d23: 'M8.786 12.5328C5.91139 13.5128 3.61372 15.7763 3.10517 18.75H1.25V18C1.25 14.8244 3.82436 12.25 7 12.25C7.62349 12.25 8.2238 12.3492 8.786 12.5328Z',
  d24: 'M20.8947 18.75H22.7499V18C22.7499 14.8244 20.1755 12.25 16.9999 12.25C16.3764 12.25 15.7761 12.3492 15.2139 12.5328C18.0885 13.5128 20.3861 15.7763 20.8947 18.75Z',
  d25: 'M16.1299 11.1323C16.4068 11.209 16.6986 11.25 16.9999 11.25C18.7948 11.25 20.2499 9.79493 20.2499 8C20.2499 6.20507 18.7948 4.75 16.9999 4.75C16.9222 4.75 16.8451 4.75273 16.7687 4.75809C17.2338 5.56524 17.4999 6.50155 17.4999 7.5C17.4999 8.89211 16.9827 10.1634 16.1299 11.1323Z',
} as const;

export const IconUserGroupStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-stroke-rounded IconUserGroupStrokeRounded"
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
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconUserGroupDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-duotone-rounded IconUserGroupDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconUserGroupTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-twotone-rounded IconUserGroupTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserGroupSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-solid-rounded IconUserGroupSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserGroupBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-bulk-rounded IconUserGroupBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserGroupStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-stroke-sharp IconUserGroupStrokeSharp"
    >
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
        d={d.d4} 
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

export const IconUserGroupSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-group-solid-sharp IconUserGroupSolidSharp"
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
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserGroup: TheIconSelfPack = {
  name: 'UserGroup',
  StrokeRounded: IconUserGroupStrokeRounded,
  DuotoneRounded: IconUserGroupDuotoneRounded,
  TwotoneRounded: IconUserGroupTwotoneRounded,
  SolidRounded: IconUserGroupSolidRounded,
  BulkRounded: IconUserGroupBulkRounded,
  StrokeSharp: IconUserGroupStrokeSharp,
  SolidSharp: IconUserGroupSolidSharp,
};
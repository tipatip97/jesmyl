import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.4593 17.5153C20.8198 17.9308 21 18.1385 21 18.5C21 18.8615 20.8198 19.0692 20.4593 19.4847C19.5612 20.5199 17.9381 22 16 22C14.0619 22 12.4388 20.5199 11.5407 19.4847C11.1802 19.0692 11 18.8615 11 18.5C11 18.1385 11.1802 17.9308 11.5407 17.5153C12.4388 16.4801 14.0619 15 16 15C17.9381 15 19.5612 16.4801 20.4593 17.5153Z',
  d2: 'M20 13.0032V7.81989C20 6.12616 20 5.27928 19.732 4.60291C19.3012 3.51554 18.3902 2.65784 17.2352 2.25228C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44148C5.81714 3.15122 4.22281 4.6522 3.46894 6.55509C3 7.73875 3 9.22077 3 12.1848V14.731C3 17.8013 3 19.3364 3.8477 20.4025C4.09058 20.708 4.37862 20.9792 4.70307 21.2078C5.61506 21.8506 6.85019 21.9757 9 22',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M15.9922 18.5H16.0012',
  d5: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.3322 22 15.6051 22 15.8362 21.9965C13.9706 21.9166 12.4134 20.4906 11.5407 19.4847C11.1802 19.0693 11 18.8615 11 18.5C11 18.1385 11.1802 17.9308 11.5407 17.5153C12.4388 16.4801 14.0619 15 16 15C17.643 15 19.0595 16.0636 20 17.0182C20 17.0122 20 17.0061 20 17V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792Z',
  d6: 'M16 14.2499C14.8378 14.2499 13.8051 14.693 12.9686 15.2425C12.1312 15.7926 11.4499 16.4754 10.9742 17.0237C10.6683 17.3734 10.25 17.8518 10.25 18.4999C10.25 19.148 10.6683 19.6263 10.9742 19.9761C11.4499 20.5244 12.1312 21.2072 12.9686 21.7573C13.8051 22.3068 14.8378 22.7499 16 22.7499C17.1622 22.7499 18.1949 22.3068 19.0314 21.7573C19.8688 21.2072 20.5501 20.5244 21.0258 19.9761C21.3317 19.6263 21.75 19.148 21.75 18.4999C21.75 17.8518 21.3317 17.3734 21.0258 17.0237C20.5501 16.4754 19.8688 15.7926 19.0314 15.2425C18.1949 14.693 17.1622 14.2499 16 14.2499ZM15.9855 16.9999C15.1608 16.9999 14.4922 17.6715 14.4922 18.4999C14.4922 19.3283 15.1608 19.9999 15.9855 19.9999H15.9989C16.8236 19.9999 17.4922 19.3283 17.4922 18.4999C17.4922 17.6715 16.8236 16.9999 15.9989 16.9999H15.9855Z',
  d7: 'M6.93654 22.6471C7.91879 22.7498 7.48161 22.7499 9.02271 22.7499C9.56245 22.7499 10 22.3123 10 21.7726C10 21.2328 9.56245 20.7953 9.02271 20.7953C7.41409 20.7953 8.00785 20.794 7.1384 20.703C6.28448 20.6137 5.80055 20.4469 5.44272 20.1939C5.20127 20.0232 4.98889 19.8221 4.8111 19.5977C4.55553 19.2752 4.38609 18.8424 4.29386 18.0556C4.19893 17.2459 4.19735 16.1886 4.19735 14.6651L4.19727 11.7649C4.19725 11.4979 4.19742 10.8593 4.47804 10.3872C4.65097 10.0962 4.87239 9.85308 5.09984 9.72926C5.46635 9.52974 5.88654 9.41638 6.33321 9.41638L7.37358 9.45286C7.75367 9.46076 8.19721 9.44875 8.62536 9.33403C9.45933 9.11057 10.1107 8.45916 10.3342 7.62519C10.4489 7.19704 10.4609 6.7535 10.453 6.37341L10.4165 5.33304C10.4165 4.86535 10.5409 4.45822 10.7583 4.07981C10.885 3.85922 11.1057 3.65733 11.4105 3.48002C11.8726 3.21111 12.426 3.20862 12.7642 3.20709C13.1023 3.20557 13.4591 3.2044 13.7572 3.2044C15.5913 3.2044 16.2584 3.21835 16.7618 3.3957C17.6344 3.70316 18.3001 4.3448 18.6102 5.13017C18.6878 5.32681 18.7427 5.58523 18.7721 6.03318C18.8021 6.48985 18.8026 9.0728 18.8026 9.91306V12.0261C18.8026 12.5639 19.2386 12.9998 19.7763 12.9998C20.3141 12.9998 20.75 12.5639 20.75 12.0261V9.87987C20.75 9.08072 20.75 6.43316 20.7153 5.90458C20.6795 5.35995 20.6039 4.87428 20.4206 4.41012C19.8918 3.07081 18.7834 2.03654 17.4068 1.55153C16.548 1.24895 15.0759 1.24934 13.5209 1.24988C10.6813 1.24952 8.99465 1.24931 7.61221 1.73639C5.39221 2.51856 3.61848 4.18131 2.77509 6.31737C2.49397 7.02933 2.36944 7.79404 2.30919 8.71088C2.25 9.61159 2.25 10.7242 2.25 12.1425V12.1425V14.726C2.24998 16.1741 2.24996 17.3467 2.35985 18.2841C2.47396 19.2575 2.71721 20.0954 3.28704 20.8144C3.58222 21.1869 3.93077 21.5157 4.32114 21.7917C5.0659 22.3184 5.92712 22.5415 6.93654 22.6471Z',
  d8: 'M16 22C18.7614 22 21 18.5 21 18.5C21 18.5 18.7614 15 16 15C13.2386 15 11 18.5 11 18.5C11 18.5 13.2386 22 16 22Z',
  d9: 'M10 22H3.01C3.00448 22 3 21.9955 3 21.99V9L10 2H19.99C19.9955 2 20 2.00448 20 2.01V12.9739M10 2.52311V9H3.53817',
  d10: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H9.01306V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V12H20.75V2.22727Z',
  d11: 'M21.75 18.5C21.75 18.5 21.4182 17.9735 21.3827 17.9212C21.3117 17.8167 21.2088 17.67 21.0771 17.4951C20.8148 17.1467 20.4339 16.6801 19.9603 16.2109C19.042 15.3012 17.6432 14.25 16 14.25C14.3568 14.25 12.958 15.3012 12.0397 16.2109C11.5661 16.6801 11.1852 17.1467 10.9229 17.4951C10.7912 17.67 10.6883 17.8167 10.6173 17.9212C10.5818 17.9735 10.25 18.5 10.25 18.5C10.25 18.5 10.5818 19.0265 10.6173 19.0788C10.6883 19.1833 10.7912 19.33 10.9229 19.5049C11.1852 19.8533 11.5661 20.3199 12.0397 20.7891C12.958 21.6988 14.3568 22.75 16 22.75C17.6432 22.75 19.042 21.6988 19.9603 20.7891C20.4339 20.3199 20.8148 19.8533 21.0771 19.5049C21.2088 19.33 21.3117 19.1833 21.3827 19.0788C21.4182 19.0265 21.75 18.5 21.75 18.5ZM15.9933 17C15.1686 17 14.5 17.6716 14.5 18.5C14.5 19.3284 15.1686 20 15.9933 20H16.0067C16.8314 20 17.5 19.3284 17.5 18.5C17.5 17.6716 16.8314 17 16.0067 17H15.9933Z',
} as const;

export const IconFileViewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-stroke-rounded IconFileViewStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconFileViewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-duotone-rounded IconFileViewDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileViewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-twotone-rounded IconFileViewTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFileViewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-solid-rounded IconFileViewSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileViewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-bulk-rounded IconFileViewBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileViewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-stroke-sharp IconFileViewStrokeSharp"
    >
      <path 
        d={d.d8} 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileViewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-view-solid-sharp IconFileViewSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileView: TheIconSelfPack = {
  name: 'FileView',
  StrokeRounded: IconFileViewStrokeRounded,
  DuotoneRounded: IconFileViewDuotoneRounded,
  TwotoneRounded: IconFileViewTwotoneRounded,
  SolidRounded: IconFileViewSolidRounded,
  BulkRounded: IconFileViewBulkRounded,
  StrokeSharp: IconFileViewStrokeSharp,
  SolidSharp: IconFileViewSolidSharp,
};
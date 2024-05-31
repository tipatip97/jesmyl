import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M20.5007 17.2196C20.4486 16.0292 19.674 16 18.6231 16C17.0044 16 16.736 16.406 16.736 18V20C16.736 21.594 17.0044 22 18.6231 22C19.674 22 20.4486 21.9708 20.5007 20.7804M7.26568 19C7.26568 20.6569 6.00155 22 4.44215 22C4.0903 22 3.91437 22 3.78333 21.9196C3.46959 21.7272 3.50098 21.3376 3.50098 21V17C3.50098 16.6624 3.46959 16.2728 3.78333 16.0804C3.91437 16 4.0903 16 4.44215 16C6.00155 16 7.26568 17.3431 7.26568 19ZM12.0007 22C11.1134 22 10.6697 22 10.394 21.7071C10.1184 21.4142 10.1184 20.9428 10.1184 20V18C10.1184 17.0572 10.1184 16.5858 10.394 16.2929C10.6697 16 11.1134 16 12.0007 16C12.8881 16 13.3318 16 13.6074 16.2929C13.8831 16.5858 13.8831 17.0572 13.8831 18V20C13.8831 20.9428 13.8831 21.4142 13.6074 21.7071C13.3318 22 12.8881 22 12.0007 22Z',
  d4: 'M9.49879 8.49792C5.89879 8.49792 3.5 9.5 3.5 12.1963V13H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d5: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d6: 'M4.44243 15.25C6.45823 15.25 8.01596 16.9724 8.01596 19C8.01596 21.0276 6.45823 22.75 4.44243 22.75C4.43426 22.75 4.42606 22.75 4.41782 22.75C4.26357 22.75 4.09942 22.7501 3.95833 22.7365C3.79755 22.721 3.59346 22.6828 3.39144 22.5589C2.99796 22.3175 2.84465 21.95 2.78819 21.6554C2.74628 21.4368 2.74914 21.1955 2.75076 21.0583C2.75103 21.0359 2.75126 21.0163 2.75126 21V17C2.75126 16.9837 2.75103 16.9641 2.75076 16.9417C2.74914 16.8045 2.74628 16.5632 2.78819 16.3446C2.84465 16.05 2.99796 15.6825 3.39144 15.4411C3.59346 15.3172 3.79755 15.279 3.95833 15.2635C4.09941 15.2499 4.28818 15.25 4.44243 15.25ZM4.25124 16.7507C4.25124 16.7507 4.36612 16.75 4.44243 16.75C5.54543 16.75 6.51596 17.7139 6.51596 19C6.51596 20.2861 5.54543 21.25 4.44243 21.25C4.36612 21.25 4.25124 21.2493 4.25124 21.2493L4.25124 16.7507Z',
  d7: 'M11.9995 15.25C12.4036 15.2499 12.8284 15.2499 13.1383 15.2942C13.4864 15.3439 13.8542 15.4621 14.1524 15.7789C14.4445 16.0893 14.5475 16.4611 14.5915 16.8086C14.632 17.1285 14.6319 17.5226 14.6319 17.9571V20.0429C14.6319 20.4774 14.632 20.8716 14.5915 21.1914C14.5475 21.539 14.4445 21.9108 14.1524 22.2211C13.8542 22.5379 13.4864 22.6561 13.1383 22.7059C12.8284 22.7501 12.4036 22.7501 11.9995 22.75C11.5955 22.7501 11.1707 22.7501 10.8608 22.7059C10.5127 22.6561 10.1449 22.5379 9.84671 22.2211C9.55458 21.9108 9.45156 21.539 9.40758 21.1914C9.36711 20.8715 9.36715 20.4774 9.36719 20.0429C9.36719 20.0286 9.36719 20.0143 9.36719 20V18C9.36719 17.9857 9.36719 17.9714 9.36719 17.9571C9.36715 17.5226 9.36711 17.1285 9.40758 16.8086C9.45156 16.4611 9.55458 16.0893 9.84671 15.7789C10.1449 15.4621 10.5127 15.3439 10.8608 15.2942C11.1707 15.2499 11.5955 15.2499 11.9995 15.25ZM10.9378 16.8099C10.9366 16.8125 10.9349 16.8162 10.9329 16.8214C10.9233 16.8463 10.9082 16.8979 10.8957 16.9969C10.8686 17.2111 10.8672 17.5086 10.8672 18V20C10.8672 20.4914 10.8686 20.7889 10.8957 21.0031C10.9082 21.1022 10.9233 21.1537 10.9329 21.1786C10.9349 21.1838 10.9366 21.1875 10.9378 21.1901C10.9524 21.1962 10.991 21.2092 11.0729 21.2209C11.2639 21.2482 11.5334 21.25 11.9995 21.25C12.4657 21.25 12.7352 21.2482 12.9262 21.2209C13.0081 21.2092 13.0467 21.1962 13.0613 21.1901C13.0625 21.1875 13.0642 21.1838 13.0662 21.1786C13.0758 21.1537 13.0908 21.1022 13.1034 21.0031C13.1305 20.7889 13.1319 20.4914 13.1319 20V18C13.1319 17.5086 13.1305 17.2111 13.1034 16.9969C13.0908 16.8979 13.0758 16.8463 13.0662 16.8214C13.0642 16.8162 13.0625 16.8125 13.0613 16.8099C13.0467 16.8039 13.0081 16.7908 12.9262 16.7791C12.7352 16.7518 12.4657 16.75 11.9995 16.75C11.5334 16.75 11.2639 16.7518 11.0729 16.7791C10.991 16.7908 10.9524 16.8039 10.9378 16.8099Z',
  d8: 'M16.5123 15.9018C17.0267 15.3276 17.8285 15.25 18.6215 15.25C18.8805 15.25 19.1606 15.2513 19.4229 15.2766C19.6845 15.3019 19.9779 15.3547 20.2543 15.4849C20.5464 15.6224 20.804 15.8393 20.984 16.1572C21.1567 16.462 21.232 16.8134 21.2484 17.1868C21.2665 17.6006 20.9457 17.9507 20.5319 17.9689C20.1181 17.987 19.7679 17.6662 19.7498 17.2524C19.7401 17.0306 19.699 16.932 19.6789 16.8965C19.6662 16.8741 19.6547 16.8605 19.6153 16.842C19.5602 16.816 19.4596 16.7871 19.2788 16.7697C19.0987 16.7523 18.8879 16.75 18.6215 16.75C17.7957 16.75 17.654 16.8754 17.6295 16.9027C17.6171 16.9166 17.5736 16.9723 17.5381 17.1568C17.5015 17.3467 17.4844 17.6129 17.4844 18V20C17.4844 20.3871 17.5015 20.6533 17.5381 20.8432C17.5736 21.0277 17.6171 21.0834 17.6295 21.0973C17.654 21.1246 17.7957 21.25 18.6215 21.25C18.8879 21.25 19.0987 21.2477 19.2788 21.2303C19.4596 21.2129 19.5602 21.184 19.6153 21.158C19.6547 21.1395 19.6662 21.1259 19.6789 21.1035C19.699 21.068 19.7401 20.9694 19.7498 20.7476C19.7679 20.3338 20.1181 20.013 20.5319 20.0311C20.9457 20.0493 21.2665 20.3994 21.2484 20.8132C21.232 21.1866 21.1567 21.538 20.984 21.8428C20.804 22.1607 20.5464 22.3776 20.2543 22.5151C19.9779 22.6453 19.6845 22.6981 19.4229 22.7234C19.1606 22.7487 18.8805 22.75 18.6215 22.75C17.8285 22.75 17.0267 22.6724 16.5123 22.0982C16.2553 21.8113 16.1305 21.4666 16.0651 21.1267C16.0007 20.7922 15.9844 20.4099 15.9844 20V18C15.9844 17.5901 16.0007 17.2078 16.0651 16.8733C16.1305 16.5334 16.2553 16.1887 16.5123 15.9018Z',
  d9: 'M20.4761 12.9998V2.02757C20.4761 2.02205 20.4716 2.01758 20.4661 2.01758L10.5096 2.01779L3.50879 9.00484L3.50891 13.0002M3.96157 9.00484H10.5096V2.51719',
  d10: 'M20.4759 17.4982V16.007C20.4759 16.0015 20.4714 15.997 20.4659 15.997H16.4952C16.4896 15.997 16.4852 16.0015 16.4852 16.007L16.4846 21.993C16.4846 21.9985 16.4891 22.003 16.4946 22.003H20.4659C20.4714 22.003 20.4759 21.9985 20.4759 21.993V20.5015M11.9917 22.0029C10.9049 22.0029 10.0239 21.1211 10.0239 20.0332V17.9668C10.0239 16.879 10.9049 15.9971 11.9917 15.9971C13.0786 15.9971 13.9596 16.879 13.9596 17.9668V20.0332C13.9596 21.1211 13.0786 22.0029 11.9917 22.0029ZM3.47852 15.9258L3.479 22.0089C4.97316 22.101 7.49247 21.7323 7.49247 19.0265C7.49247 16.4501 5.00994 15.8054 3.47852 15.9258Z',
  d11: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d12: 'M2.75 15.25H4.5C6.57107 15.25 8.25 16.9289 8.25 19C8.25 21.0711 6.57107 22.75 4.5 22.75H2.75V15.25ZM4.25 16.75V21.25H4.5C5.74264 21.25 6.75 20.2426 6.75 19C6.75 17.7574 5.74264 16.75 4.5 16.75H4.25ZM12 16.75C11.3096 16.75 10.75 17.3096 10.75 18V20C10.75 20.6904 11.3096 21.25 12 21.25C12.6904 21.25 13.25 20.6904 13.25 20V18C13.25 17.3096 12.6904 16.75 12 16.75ZM9.25 18C9.25 16.4812 10.4812 15.25 12 15.25C13.5188 15.25 14.75 16.4812 14.75 18V20C14.75 21.5188 13.5188 22.75 12 22.75C10.4812 22.75 9.25 21.5188 9.25 20V18ZM15.75 16C15.75 15.5858 16.0858 15.25 16.5 15.25H20.5007C20.915 15.25 21.2507 15.5858 21.2507 16V17.5H19.7507V16.75H17.25V21.25H19.7507V20.5H21.2507V22C21.2507 22.4142 20.915 22.75 20.5007 22.75H16.5C16.0858 22.75 15.75 22.4142 15.75 22V16Z',
} as const;

export const IconDoc01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-stroke-rounded IconDoc01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDoc01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-duotone-rounded IconDoc01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDoc01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-twotone-rounded IconDoc01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDoc01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-solid-rounded IconDoc01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDoc01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-bulk-rounded IconDoc01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDoc01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-stroke-sharp IconDoc01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoc01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="doc-01-solid-sharp IconDoc01SolidSharp"
    >
      <path 
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

export const iconPackOfDoc01: TheIconSelfPack = {
  name: 'Doc01',
  StrokeRounded: IconDoc01StrokeRounded,
  DuotoneRounded: IconDoc01DuotoneRounded,
  TwotoneRounded: IconDoc01TwotoneRounded,
  SolidRounded: IconDoc01SolidRounded,
  BulkRounded: IconDoc01BulkRounded,
  StrokeSharp: IconDoc01StrokeSharp,
  SolidSharp: IconDoc01SolidSharp,
};
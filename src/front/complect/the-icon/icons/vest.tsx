import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.51046 10.8307C6.9018 9.18607 7.10283 6.5528 6.37584 4.78313C6.07534 4.05166 5.92509 3.68592 6.00595 3.4945C6.29496 2.81042 8.36823 2.2903 9.00002 2L13.1722 11.7263C13.7687 13.1852 14.067 13.9147 13.9873 14.6637C13.9076 15.4127 13.4621 16.0664 12.571 17.3738L10.1303 20.9552C9.34647 22.1053 8.9197 22.2198 7.62956 21.715L5.30629 20.8059C4.23506 20.3867 4.00004 20.0761 4.00004 18.9185V11.7372C4.00004 11.1831 3.98581 11.1916 4.51046 10.8307Z',
  d2: 'M11.009 14L11 14',
  d3: 'M12 8.99367L15 2C15.6318 2.2903 17.705 2.81042 17.994 3.4945C18.0749 3.68592 17.9247 4.05166 17.6242 4.78313C16.8972 6.5528 17.0982 9.18607 19.4895 10.8307C20.0142 11.1916 20 11.1831 20 11.7372V18.9185C20 20.0761 19.7649 20.3867 18.6937 20.8059L16.3704 21.715C15.0803 22.2198 14.6535 22.1053 13.8697 20.9552L12 18.2117',
  d4: 'M9 2L15 2',
  d5: 'M19.4895 10.8307C17.0982 9.18607 16.8972 6.5528 17.6242 4.78313C17.9247 4.05166 18.0749 3.68592 17.994 3.4945C17.705 2.81042 15.6318 2.2903 15 2L12 8.99367L14 14.5L12 18.2117L13.8697 20.9552C14.6535 22.1053 15.0803 22.2198 16.3704 21.715L18.6937 20.8059C19.7649 20.3867 20 20.0761 20 18.9185V11.7372C20 11.1831 20.0142 11.1916 19.4895 10.8307Z',
  d6: 'M14.9993 1.25H9.00005H9C8.88696 1.25 8.77976 1.27501 8.68363 1.31979C8.62545 1.34289 8.52078 1.38358 8.38573 1.43608C7.73111 1.69055 6.3628 2.22245 6.11607 2.37307C5.84801 2.53672 5.48465 2.80127 5.31509 3.20263C5.22867 3.40718 5.22644 3.60462 5.24126 3.74985C5.25607 3.89504 5.29319 4.03647 5.33242 4.16124C5.40715 4.39894 5.6821 5.06813 5.6821 5.06813C6.30295 6.57939 6.12899 8.80733 4.08546 10.2128C3.74419 10.3904 3.50041 10.6708 3.40207 10.8488C3.25005 11.0008 3.25858 11.6941 3.25858 11.6941C3.25858 11.6941 3.24983 11.5842 3.25 11.6941L3.25005 18.9185C3.25005 19.5122 3.3006 20.0894 3.63738 20.5697C3.97046 21.0447 4.49269 21.2929 5.03301 21.5043L7.35628 22.4134C7.99498 22.6633 8.64693 22.8647 9.28441 22.6743C9.92725 22.4824 10.3582 21.9525 10.7501 21.3775L13.2104 17.7674C13.6393 17.1382 13.9899 16.6236 14.2396 16.1725C14.5005 15.7012 14.6789 15.2519 14.7331 14.7431C14.7873 14.234 14.7072 13.7578 14.551 13.2433C14.4016 12.7512 14.1667 12.1768 13.8796 11.4748L13.8665 11.4424L10.1378 2.75H13.8615L13.0177 4.71724C12.8509 5.10592 12.7676 5.30025 12.7676 5.50568C12.7676 5.71111 12.8509 5.90544 13.0177 6.29412L15.0147 10.9496L15.1065 11.1731C15.3378 11.7349 15.5699 12.2987 15.7465 12.8801C15.9312 13.4883 16.0535 14.1421 15.9755 14.8754C15.8975 15.6081 15.6405 16.2217 15.3327 16.7778C15.0547 17.2801 14.6763 17.8352 14.2691 18.4327L13.1395 20.0902C12.9537 20.3628 12.8608 20.4992 12.8608 20.6533C12.8608 20.8606 13.0089 21.0559 13.1426 21.2321L13.1426 21.2321C13.1806 21.2822 13.2174 21.3307 13.2493 21.3775C13.6411 21.9525 14.0721 22.4824 14.7149 22.6743C15.3524 22.8647 16.0044 22.6633 16.6431 22.4134L18.9664 21.5043C19.5067 21.2929 20.0289 21.0447 20.362 20.5697C20.6988 20.0894 20.7493 19.5122 20.7493 18.9185L20.7494 11.6941C20.7498 11.4024 20.7422 11.111 20.5973 10.8488C20.4487 10.5798 20.1944 10.4053 19.9468 10.2354L19.9139 10.2128C17.8704 8.80733 17.6964 6.57939 18.3173 5.06813C18.4567 4.72867 18.5922 4.39894 18.6669 4.16124C18.7649 3.84977 18.8155 3.5133 18.6843 3.20263C18.5147 2.80127 18.1514 2.53672 17.8833 2.37307C17.5847 2.19079 17.233 2.03422 16.902 1.90264L15.3177 1.32044C15.2213 1.27525 15.1136 1.25 15 1.25H14.9993H14.9993ZM10.9955 13C10.4457 13 10 13.4477 10 14C10 14.5523 10.4457 15 10.9955 15H11.0045C11.5543 15 12 14.5523 12 14C12 13.4477 11.5543 13 11.0045 13H10.9955Z',
  d7: 'M9.00005 1.25H14.9993H14.9993H15C15.1136 1.25 15.2213 1.27525 15.3177 1.32044L16.902 1.90264C17.233 2.03422 17.5847 2.19079 17.8833 2.37307C18.1514 2.53672 18.5147 2.80127 18.6843 3.20263C18.8155 3.5133 18.7649 3.84977 18.6669 4.16124C18.5922 4.39894 18.4567 4.72867 18.3173 5.06813C17.6964 6.57939 17.8704 8.80733 19.9139 10.2128L19.9468 10.2354C20.1944 10.4053 20.4487 10.5798 20.5973 10.8488C20.7422 11.111 20.7498 11.4024 20.7494 11.6941L20.7493 18.9185C20.7493 19.5122 20.6988 20.0894 20.362 20.5697C20.0289 21.0447 19.5067 21.2929 18.9664 21.5043L16.6431 22.4134C16.0044 22.6633 15.3524 22.8647 14.7149 22.6743C14.0721 22.4824 13.6411 21.9525 13.2493 21.3775C13.2174 21.3307 13.1806 21.2822 13.1426 21.2321L13.1426 21.2321C13.0089 21.0559 12.8608 20.8606 12.8608 20.6533C12.8608 20.4992 12.9537 20.3628 13.1395 20.0902L14.2691 18.4327C14.6763 17.8352 15.0547 17.2801 15.3327 16.7778C15.6405 16.2217 15.8975 15.6081 15.9755 14.8754C16.0535 14.1421 15.9312 13.4883 15.7465 12.8801C15.5699 12.2987 15.3378 11.7349 15.1065 11.1731L15.0147 10.9496L13.0177 6.29412C12.8509 5.90544 12.7676 5.71111 12.7676 5.50568C12.7676 5.30025 12.8509 5.10592 13.0177 4.71724L13.6223 3.30769C13.7304 3.0558 13.7844 2.92986 13.7251 2.83993C13.6658 2.75 13.5288 2.75 13.2547 2.75H10.7447C10.4706 2.75 10.3335 2.75 10.2743 2.83993C10.215 2.92986 10.269 3.0558 10.3771 3.30769L13.8665 11.4424L13.8796 11.4748C14.1667 12.1768 14.4016 12.7512 14.551 13.2433C14.7072 13.7578 14.7873 14.234 14.7331 14.7431C14.6789 15.2519 14.5005 15.7012 14.2396 16.1725C13.9899 16.6236 13.6393 17.1382 13.2104 17.7674L10.7501 21.3775C10.3582 21.9525 9.92725 22.4824 9.28441 22.6743C8.64693 22.8647 7.99498 22.6633 7.35628 22.4134L5.03301 21.5043C4.49269 21.2929 3.97046 21.0447 3.63738 20.5697C3.3006 20.0894 3.25005 19.5122 3.25005 18.9185L3.25 11.6941C3.25 11.6898 3.25927 11.6001 3.25935 11.5958C3.26337 11.4005 3.28532 10.9721 3.3993 10.8516C3.40117 10.8496 3.40269 10.8476 3.40402 10.8452C3.50362 10.6671 3.74643 10.3892 4.08546 10.2128C6.12899 8.80733 6.30294 6.5794 5.68211 5.06814C5.68211 5.06814 5.6821 5.06813 5.6821 5.06813C5.6821 5.06813 5.6821 5.06813 5.6821 5.06813C5.68202 5.06793 5.40714 4.3989 5.33242 4.16124C5.29319 4.03647 5.25607 3.89504 5.24126 3.74985C5.22644 3.60462 5.22867 3.40718 5.31509 3.20263C5.48465 2.80127 5.84801 2.53672 6.11607 2.37307C6.3628 2.22245 7.73111 1.69055 8.38573 1.43608C8.52078 1.38358 8.62545 1.34289 8.68363 1.31979C8.77976 1.27501 8.88696 1.25 9 1.25C9.00002 1.25 9.00003 1.25 9.00005 1.25Z',
  d8: 'M10 14C10 13.4477 10.4457 13 10.9955 13H11.0045C11.5543 13 12 13.4477 12 14C12 14.5523 11.5543 15 11.0045 15H10.9955C10.4457 15 10 14.5523 10 14Z',
  d9: 'M10.509 13.498H10.5',
  d10: 'M9 1.99805H15',
  d11: 'M12.0431 8.94619L9.00422 2.00794C9.00193 2.0027 8.99571 2.00045 8.99059 2.00301L6 3.49875C6.5 4.49905 6.89126 8.84812 4 11.001V19.9969C4 20.001 4.00249 20.0047 4.00629 20.0062L8.99202 22.0011C8.99661 22.0029 9.00185 22.0011 9.00436 21.9969L11.8214 17.2064M12.0431 8.94619L14 13.5017L11.8214 17.2064M12.0431 8.94619L14.9958 2.00809C14.9981 2.00279 15.0044 2.00048 15.0095 2.00306L18 3.49875C17.1917 5.45148 17.7266 9.48127 20 11.001V19.9969C20 20.001 19.9975 20.0047 19.9937 20.0062L15.0076 22.0012C15.0032 22.003 14.9981 22.0014 14.9955 21.9975L11.8214 17.2064',
  d12: 'M9 1.25H14.9999C15.115 1.25001 15.2298 1.2765 15.3349 1.32895L18.9526 3.13476L18.6878 3.7795C18.3973 4.48661 18.2887 5.79155 18.5627 7.14531C18.8356 8.49318 19.4514 9.71245 20.425 10.382L20.75 10.6056V20C20.75 20.3067 20.5633 20.5825 20.2785 20.6964L15.2785 22.6964C14.9492 22.8281 14.5727 22.7111 14.376 22.416L12.7621 19.9952L16.4782 13.5511L12.8294 5.15889L13.8628 2.75H10.1445L14.7981 13.4488L9.64647 22.3803C9.45858 22.6997 9.06556 22.834 8.72148 22.6964L3.72146 20.6964C3.43671 20.5825 3.25 20.3067 3.25 20V10.6056L3.57499 10.382C4.54858 9.71245 5.16442 8.49318 5.43728 7.14531C5.71133 5.79155 5.60273 4.48661 5.31224 3.7795L5.04737 3.13476L8.66506 1.32895C8.77014 1.2765 8.88489 1.25001 9 1.25ZM11.5 12.5H9.5L9.5 14.5H11.5V12.5Z',
} as const;

export const IconVestStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-stroke-rounded IconVestStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconVestDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-duotone-rounded IconVestDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconVestTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-twotone-rounded IconVestTwotoneRounded"
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

export const IconVestSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-solid-rounded IconVestSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVestBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-bulk-rounded IconVestBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconVestStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-stroke-sharp IconVestStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconVestSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vest-solid-sharp IconVestSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVest: TheIconSelfPack = {
  name: 'Vest',
  StrokeRounded: IconVestStrokeRounded,
  DuotoneRounded: IconVestDuotoneRounded,
  TwotoneRounded: IconVestTwotoneRounded,
  SolidRounded: IconVestSolidRounded,
  BulkRounded: IconVestBulkRounded,
  StrokeSharp: IconVestStrokeSharp,
  SolidSharp: IconVestSolidSharp,
};
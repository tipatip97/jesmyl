import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z',
  d2: 'M12 8.5L11.4685 7.17126C11.3094 6.77352 11.2299 6.57465 11.1227 6.40981C10.8287 5.95761 10.3645 5.64333 9.83543 5.53829C9.64256 5.5 9.42838 5.5 9 5.5C8.57162 5.5 8.35744 5.5 8.16457 5.53829C7.63553 5.64333 7.17133 5.95761 6.87732 6.40981C6.77014 6.57465 6.69059 6.77352 6.5315 7.17126L6 8.5',
  d3: 'M22 7.5L20.5 6M20.5 6L19 4.5M20.5 6L19 7.5M20.5 6L22 4.5',
  d4: 'M17 5.99993C14 5.99993 14.4095 3.43983 11.8598 2.26722C9.61977 1.23706 8.77077 3.40757 9.05199 5',
  d5: 'M1.125 15.1252C1.125 10.845 4.59479 7.37524 8.875 7.37524C13.1552 7.37524 16.625 10.845 16.625 15.1252C16.625 19.4055 13.1552 22.8752 8.875 22.8752C4.59479 22.8752 1.125 19.4055 1.125 15.1252Z',
  d6: 'M8.80047 4.62504L8.87527 4.62508L8.95006 4.62504C9.3041 4.62476 9.61332 4.62452 9.90544 4.68252C10.699 4.84008 11.3953 5.31149 11.8363 5.98979C11.9987 6.23947 12.1133 6.52667 12.2445 6.85548L12.2445 6.85549L12.2722 6.92494L12.8037 8.25369C13.0089 8.76647 12.7594 9.34844 12.2467 9.55355C11.7339 9.75867 11.1519 9.50925 10.9468 8.99647L10.4153 7.66772C10.2403 7.23026 10.2003 7.14256 10.1596 7.07998C10.0126 6.85388 9.78047 6.69674 9.51595 6.64422C9.44273 6.62969 9.34643 6.62508 8.87527 6.62508C8.4041 6.62508 8.3078 6.62969 8.23459 6.64422C7.97006 6.69674 7.73797 6.85388 7.59096 7.07998C7.55027 7.14256 7.51023 7.23026 7.33524 7.66773L6.80374 8.99647C6.59863 9.50925 6.01666 9.75867 5.50388 9.55355C4.99109 9.34844 4.74168 8.76647 4.94679 8.25369L5.47829 6.92494L5.50603 6.85548C5.63725 6.52667 5.75187 6.23947 5.91421 5.98979C6.35523 5.31149 7.05152 4.84008 7.84509 4.68252C8.13721 4.62452 8.44643 4.62476 8.80047 4.62504L8.80047 4.62504Z',
  d7: 'M22.5821 3.91814C22.9726 4.30866 22.9726 4.94183 22.5821 5.33235L21.7892 6.12524L22.5821 6.91814C22.9726 7.30866 22.9726 7.94183 22.5821 8.33235C22.1916 8.72288 21.5584 8.72288 21.1679 8.33235L20.375 7.53946L19.5821 8.33235C19.1916 8.72288 18.5584 8.72288 18.1679 8.33235C17.7774 7.94183 17.7774 7.30866 18.1679 6.91814L18.9608 6.12524L18.1679 5.33235C17.7774 4.94183 17.7774 4.30866 18.1679 3.91814C18.5584 3.52761 19.1916 3.52761 19.5821 3.91814L20.375 4.71103L21.1679 3.91814C21.5584 3.52761 22.1916 3.52761 22.5821 3.91814Z',
  d8: 'M10.1867 3.3731C9.9372 3.7076 9.80463 4.34684 9.91137 4.95122C10.0074 5.49509 9.64438 6.01385 9.10051 6.10989C8.55664 6.20594 8.03789 5.84291 7.94184 5.29904C7.76736 4.311 7.91868 3.06877 8.58342 2.17744C8.93313 1.70852 9.43857 1.3249 10.1019 1.18295C10.7561 1.04295 11.4519 1.16175 12.1522 1.48383C13.4957 2.10169 14.1863 3.06184 14.6916 3.76442C14.737 3.82749 14.7809 3.88849 14.8236 3.94697C15.0932 4.31614 15.2974 4.5651 15.5325 4.74747C15.7449 4.9122 16.0132 5.04492 16.4371 5.09916C16.9849 5.16928 17.3721 5.6702 17.302 6.21802C17.2319 6.76584 16.731 7.15309 16.1832 7.08298C15.4102 6.98406 14.8053 6.7145 14.3067 6.32782C13.8309 5.95877 13.4865 5.50717 13.2085 5.1266C13.1686 5.07196 13.1295 5.01815 13.0911 4.96517C12.5737 4.25273 12.1664 3.6917 11.3166 3.30088C10.8969 3.10787 10.6465 3.11168 10.5204 3.13867C10.4033 3.16373 10.294 3.22911 10.1867 3.3731Z',
  d9: 'M8.95107 4.62504C9.30511 4.62476 9.61433 4.62452 9.90645 4.68252L8.95107 4.62504Z',
  d10: 'M7.84611 4.68252C8.13823 4.62452 8.44745 4.62476 8.80148 4.62504H8.95107C9.30511 4.62476 9.61433 4.62452 9.90645 4.68252C10.7 4.84008 11.3963 5.31149 11.8373 5.98979C11.9997 6.23947 12.1143 6.52667 12.2455 6.85549L12.8048 8.25369C12.8345 8.32793 12.8546 8.40363 12.8658 8.47942C12.1044 8.02131 11.2578 7.69037 10.3554 7.51598C10.231 7.20818 10.1961 7.13454 10.1606 7.07998C10.0136 6.85388 9.78148 6.69674 9.51696 6.64422C9.44374 6.62969 9.34745 6.62508 8.87628 6.62508C8.40511 6.62508 8.30882 6.62969 8.2356 6.64422C7.97108 6.69674 7.73898 6.85388 7.59197 7.07998C7.5565 7.13453 7.52152 7.20817 7.39721 7.51597C6.49479 7.69036 5.64816 8.02129 4.88672 8.47939C4.89794 8.40361 4.91811 8.32792 4.9478 8.25369L5.50704 6.85548C5.63827 6.52667 5.75288 6.23947 5.91523 5.98979C6.35624 5.31149 7.05253 4.84008 7.84611 4.68252Z',
  d11: 'M12 8.5L11 5.5H7L6 8.5',
  d12: 'M17 6C14.0183 6 14.4253 3.41587 11.8911 2.23226C9.66477 1.19242 8.77013 3.88801 9.04964 5.49538',
  d13: 'M7.2507 4.75C6.92787 4.75 6.64127 4.95657 6.53918 5.26283L5.56698 8.17944C3.14511 9.49002 1.50012 12.0529 1.50012 15C1.50012 19.2802 4.96992 22.75 9.25012 22.75C13.5303 22.75 17.0001 19.2802 17.0001 15C17.0001 12.0535 15.3558 9.49101 12.9347 8.18019L11.9622 5.26283C11.8601 4.95657 11.5735 4.75 11.2507 4.75H7.2507ZM11.1191 7.47685L10.7101 6.25H7.79127L7.38242 7.47654C7.98061 7.32853 8.60619 7.25 9.25012 7.25C9.8945 7.25 10.5205 7.32864 11.1191 7.47685Z',
  d14: 'M19.4089 6.00006L18.4392 6.96973L19.4999 8.03039L20.4695 7.06072L21.4392 8.03039L22.4999 6.96973L21.5302 6.00006L22.4999 5.03039L21.4392 3.96973L20.4695 4.9394L19.4999 3.96973L18.4392 5.03039L19.4089 6.00006Z',
  d15: 'M10.4162 3.26965C10.0607 3.83654 9.92604 4.71958 10.0386 5.36701L8.5608 5.62399C8.39388 4.66405 8.56674 3.39561 9.14533 2.47283C9.44269 1.99857 9.87884 1.56803 10.4803 1.36642C11.0928 1.16109 11.7671 1.2299 12.4586 1.55284C13.7398 2.15126 14.4027 3.08881 14.9055 3.80002C14.9838 3.91085 15.0583 4.01618 15.1306 4.11388C15.409 4.48993 15.6484 4.75629 15.9454 4.94036C16.229 5.11612 16.6208 5.25012 17.2501 5.25012V6.75012C16.3885 6.75012 15.7131 6.56111 15.1552 6.21536C14.6107 5.87792 14.2344 5.42427 13.925 5.00633C13.8312 4.87965 13.7424 4.75565 13.6558 4.6347C13.1521 3.93141 12.7225 3.33167 11.8238 2.91192C11.4021 2.71494 11.1297 2.73077 10.957 2.78864C10.7733 2.85022 10.5858 2.99907 10.4162 3.26965Z',
} as const;

export const IconBombStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-stroke-rounded IconBombStrokeRounded"
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

export const IconBombDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-duotone-rounded IconBombDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconBombTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-twotone-rounded IconBombTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconBombSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-solid-rounded IconBombSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBombBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-bulk-rounded IconBombBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconBombStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-stroke-sharp IconBombStrokeSharp"
    >
      <path 
        d={d.d1} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBombSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bomb-solid-sharp IconBombSolidSharp"
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

export const iconPackOfBomb: TheIconSelfPack = {
  name: 'Bomb',
  StrokeRounded: IconBombStrokeRounded,
  DuotoneRounded: IconBombDuotoneRounded,
  TwotoneRounded: IconBombTwotoneRounded,
  SolidRounded: IconBombSolidRounded,
  BulkRounded: IconBombBulkRounded,
  StrokeSharp: IconBombStrokeSharp,
  SolidSharp: IconBombSolidSharp,
};
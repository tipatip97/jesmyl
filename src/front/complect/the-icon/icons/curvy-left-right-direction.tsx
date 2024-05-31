import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.99803 12.9996C3.99803 12.9996 1.99805 11.5266 1.99805 10.9996C1.99805 10.4725 3.99805 8.99965 3.99805 8.99965M20.0039 15.0001C20.0039 15.0001 22.0029 13.5271 22.0029 13.0001C22.0029 12.473 20.0039 11.0001 20.0039 11.0001M21.7781 12.8675C20.3664 13.1574 17.7204 13.27 16.4099 10.8163C15.8666 9.95268 15.9684 8.50668 15.9684 6.86106C15.9346 6.19025 15.3632 4.96995 13.931 5.00057C12.4989 5.03118 12.0286 6.20733 11.9725 6.79158V16.9022C11.9871 17.7539 11.4934 18.9993 9.97701 18.9993C8.49653 18.9993 7.91702 17.6872 8.04471 16.7036C8.39056 14.0396 7.5823 11.2472 4.08206 11.003H1.99805',
  d2: 'M2 11H3.95595C6.21181 11 8.04055 12.7909 8.04055 15V17.0845C8.04055 18.1424 8.9163 19 9.99659 19C11.0769 19 11.9526 18.1424 11.9526 17.0845V6.96543C11.9526 5.87995 12.8512 5 13.9596 5C15.0681 5 15.9666 5.87995 15.9666 6.96543V9C15.9666 11.2091 17.7954 13 20.0512 13H22M2 11C2 11.527 3.99998 13 3.99998 13M2 11C2 10.473 4 9 4 9M22 13C22 13.527 20 15 20 15M22 13C22 12.473 20 11 20 11',
  d3: 'M2 10.25C1.58579 10.25 1.25 10.5858 1.25 11C1.25 11.4142 1.58579 11.75 2 11.75V10.25ZM22 13.75C22.4142 13.75 22.75 13.4142 22.75 13C22.75 12.5858 22.4142 12.25 22 12.25V13.75ZM2 11.75H3.95595V10.25H2V11.75ZM7.29055 15V17.0845H8.79055V15H7.29055ZM12.7026 17.0845V6.96543H11.2026V17.0845H12.7026ZM15.2166 6.96543V9H16.7166V6.96543H15.2166ZM20.0512 13.75H22V12.25H20.0512V13.75ZM15.2166 9C15.2166 11.6381 17.396 13.75 20.0512 13.75V12.25C18.1947 12.25 16.7166 10.7802 16.7166 9H15.2166ZM13.9596 5.75C14.6687 5.75 15.2166 6.30889 15.2166 6.96543H16.7166C16.7166 5.45102 15.4674 4.25 13.9596 4.25V5.75ZM12.7026 6.96543C12.7026 6.30889 13.2505 5.75 13.9596 5.75V4.25C12.4519 4.25 11.2026 5.45102 11.2026 6.96543H12.7026ZM9.99659 19.75C11.4762 19.75 12.7026 18.5713 12.7026 17.0845H11.2026C11.2026 17.7135 10.6775 18.25 9.99659 18.25V19.75ZM7.29055 17.0845C7.29055 18.5713 8.51696 19.75 9.99659 19.75V18.25C9.31564 18.25 8.79055 17.7135 8.79055 17.0845H7.29055ZM3.95595 11.75C5.81247 11.75 7.29055 13.2198 7.29055 15H8.79055C8.79055 12.3619 6.61115 10.25 3.95595 10.25V11.75Z',
  d4: 'M20 15C20 15 22 13.527 22 13C22 12.4729 20 11 20 11',
  d5: 'M3.99998 13C3.99998 13 2 11.527 2 11C2 10.4729 4 9 4 9',
  d6: 'M13.9597 6C13.3837 6 12.9527 6.45186 12.9527 6.96543V17.0845C12.9527 18.7143 11.6094 20 9.99663 20C8.38389 20 7.04059 18.7143 7.04059 17.0845V15C7.04059 13.7121 6.1983 12.594 4.99999 12.1756L4.99999 12.6604L5.00003 12.6773C5.00029 12.7425 5.00087 12.8881 4.9818 13.0191C4.96085 13.1629 4.86817 13.6413 4.38239 13.8867C3.89918 14.1307 3.47956 13.9156 3.35425 13.8428C3.24241 13.7777 3.13173 13.6875 3.0828 13.6476L3.08279 13.6476L3.07015 13.6374C2.78003 13.403 2.32766 13.0247 1.94035 12.6413C1.74897 12.4518 1.54906 12.2373 1.38968 12.0215C1.31004 11.9137 1.22383 11.7833 1.15385 11.6376C1.08993 11.5045 1 11.2785 1 11C0.999998 10.7215 1.08993 10.4955 1.15385 10.3624C1.22383 10.2167 1.31005 10.0863 1.38968 9.97847C1.54907 9.76266 1.74898 9.54814 1.94036 9.3587C2.32768 8.97529 2.78006 8.59702 3.07018 8.36263L3.08282 8.35236L3.08282 8.35236C3.13174 8.31249 3.24243 8.22229 3.35428 8.15724C3.4796 8.08436 3.89921 7.8693 4.38242 8.11335C4.86819 8.35869 4.96086 8.83714 4.98181 8.98095C5.00088 9.1119 5.00031 9.25755 5.00005 9.32275L5 9.33964L5 10.1059C7.29517 10.578 9.04059 12.5754 9.04059 15V17.0845C9.04059 17.5705 9.44879 18 9.99663 18C10.5445 18 10.9527 17.5705 10.9527 17.0845V6.96543C10.9527 5.30804 12.3188 4 13.9597 4C15.6006 4 16.9667 5.30804 16.9667 6.96543V9C16.9667 10.2853 17.8056 11.4015 19 11.8219L19 11.3396L19 11.3227C18.9997 11.2575 18.9992 11.1119 19.0182 10.981C19.0392 10.8371 19.1318 10.3587 19.6176 10.1133C20.1008 9.8693 20.5204 10.0844 20.6458 10.1572C20.7576 10.2223 20.8683 10.3125 20.9172 10.3524L20.9299 10.3626C21.22 10.597 21.6724 10.9753 22.0597 11.3587C22.2511 11.5481 22.451 11.7627 22.6104 11.9785C22.69 12.0863 22.7762 12.2167 22.8462 12.3624C22.9101 12.4955 23 12.7215 23 13C23 13.2785 22.9101 13.5045 22.8462 13.6376C22.7762 13.7833 22.69 13.9137 22.6104 14.0215C22.451 14.2373 22.2511 14.4518 22.0597 14.6413C21.6724 15.0247 21.22 15.403 20.9299 15.6374L20.9172 15.6476C20.8683 15.6875 20.7576 15.7777 20.6458 15.8428C20.5205 15.9156 20.1009 16.1307 19.6176 15.8867C19.1319 15.6413 19.0392 15.1629 19.0182 15.0191C18.9992 14.8881 18.9997 14.7425 19 14.6773V14.6773L19.0001 14.6604L19 13.8927C16.7084 13.4178 14.9667 11.4221 14.9667 9V6.96543C14.9667 6.45186 14.5357 6 13.9597 6Z',
  d7: 'M20.9172 10.3524L20.9299 10.3626C21.22 10.597 21.6724 10.9753 22.0597 11.3587C22.2511 11.5481 22.451 11.7627 22.6104 11.9785C22.69 12.0863 22.7762 12.2167 22.8462 12.3624C22.9101 12.4955 23 12.7215 23 13C23 13.2785 22.9101 13.5045 22.8462 13.6376C22.7762 13.7833 22.69 13.9137 22.6104 14.0215C22.451 14.2373 22.2511 14.4518 22.0597 14.6413C21.6724 15.0247 21.22 15.403 20.9299 15.6374L20.9172 15.6476C20.8683 15.6875 20.7576 15.7777 20.6458 15.8428C20.5205 15.9156 20.1009 16.1307 19.6176 15.8867C19.1319 15.6413 19.0392 15.1629 19.0182 15.0191C18.9992 14.8881 18.9997 14.7425 19 14.6773V14.6773L19.0001 14.6604L19 13.8927L19 11.3396L19 11.3227C18.9997 11.2575 18.9992 11.1119 19.0182 10.981C19.0392 10.8371 19.1318 10.3587 19.6176 10.1133C20.1008 9.8693 20.5204 10.0844 20.6458 10.1572C20.7576 10.2223 20.8683 10.3125 20.9172 10.3524Z',
  d8: 'M3.08282 8.35236L3.07018 8.36263C2.78006 8.59702 2.32768 8.97529 1.94036 9.3587C1.74898 9.54814 1.54907 9.76266 1.38968 9.97847C1.31005 10.0863 1.22383 10.2167 1.15385 10.3624C1.08993 10.4955 0.999998 10.7215 1 11C1 11.2785 1.08993 11.5045 1.15385 11.6376C1.22383 11.7833 1.31004 11.9137 1.38968 12.0215C1.54906 12.2373 1.74897 12.4518 1.94035 12.6413C2.32766 13.0247 2.78003 13.403 3.07015 13.6374L3.08279 13.6476L3.0828 13.6476C3.13172 13.6875 3.24241 13.7777 3.35425 13.8428C3.47956 13.9156 3.89918 14.1307 4.38239 13.8867C4.86817 13.6413 4.96085 13.1629 4.9818 13.0191C5.00087 12.8881 5.00029 12.7425 5.00003 12.6773L4.99999 12.6604L5 10.1059L5 9.33964L5.00005 9.32275C5.00031 9.25755 5.00088 9.1119 4.98181 8.98095C4.96086 8.83714 4.86819 8.35869 4.38242 8.11335C3.89921 7.8693 3.4796 8.08436 3.35428 8.15724C3.24243 8.22229 3.13174 8.3125 3.08282 8.35236Z',
  d9: 'M3 11H6C7.10457 11 8 11.8954 8 13V17C8 18.1046 8.89544 19 10 19C11.1046 19 12 18.1046 12 17V6.99583C12 5.89356 12.8936 5 13.9958 5C15.1013 5 15.9963 5.89865 15.9916 7.00415L15.975 10.9916C15.9704 12.0995 16.8672 13 17.975 13H21',
  d10: 'M19 16L22 13L19 10',
  d11: 'M5 8L2 11L4.99998 14',
  d12: 'M13.9961 6C13.4461 6 13.0002 6.44585 13.0002 6.99583V17C13.0002 18.6568 11.6571 20 10.0002 20C8.34338 20 7.00023 18.6568 7.00023 17V13C7.00023 12.4477 6.55251 12 6.00023 12H4.82842L6.12132 13.2929L4.7071 14.7071L1 11L4.70711 7.29289L6.12132 8.70711L4.82843 9.99998H6.00023C7.65708 9.99998 9.00023 11.3431 9.00023 13V17C9.00023 17.5523 9.44794 18 10.0002 18C10.5525 18 11.0002 17.5523 11.0002 17V6.99583C11.0002 5.34128 12.3415 4 13.9961 4C15.6555 4 16.9988 5.34891 16.9919 7.00832L16.9752 10.9958C16.9729 11.5497 17.4213 12 17.9752 12H19.1716L17.8787 10.7071L19.2929 9.29289L23 13L19.2929 16.7071L17.8787 15.2929L19.1716 14H17.9752C16.3135 14 14.9683 12.6492 14.9752 10.9875L14.9919 6.99998C14.9942 6.44838 14.5477 6 13.9961 6Z',
} as const;

export const IconCurvyLeftRightDirectionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-stroke-rounded IconCurvyLeftRightDirectionStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftRightDirectionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-duotone-rounded IconCurvyLeftRightDirectionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftRightDirectionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-twotone-rounded IconCurvyLeftRightDirectionTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftRightDirectionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-solid-rounded IconCurvyLeftRightDirectionSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftRightDirectionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-bulk-rounded IconCurvyLeftRightDirectionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftRightDirectionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-stroke-sharp IconCurvyLeftRightDirectionStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftRightDirectionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-right-direction-solid-sharp IconCurvyLeftRightDirectionSolidSharp"
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

export const iconPackOfCurvyLeftRightDirection: TheIconSelfPack = {
  name: 'CurvyLeftRightDirection',
  StrokeRounded: IconCurvyLeftRightDirectionStrokeRounded,
  DuotoneRounded: IconCurvyLeftRightDirectionDuotoneRounded,
  TwotoneRounded: IconCurvyLeftRightDirectionTwotoneRounded,
  SolidRounded: IconCurvyLeftRightDirectionSolidRounded,
  BulkRounded: IconCurvyLeftRightDirectionBulkRounded,
  StrokeSharp: IconCurvyLeftRightDirectionStrokeSharp,
  SolidSharp: IconCurvyLeftRightDirectionSolidSharp,
};
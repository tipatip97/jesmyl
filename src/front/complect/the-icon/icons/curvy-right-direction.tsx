import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.0029 15.0001C20.0029 15.0001 22.0019 13.5271 22.0019 13.0001C22.0019 12.473 20.0029 11.0001 20.0029 11.0001M21.7771 12.8675C20.3654 13.1574 17.7194 13.27 16.4089 10.8163C15.8656 9.95268 15.9675 8.50668 15.9675 6.86106C15.9336 6.19025 15.3622 4.96995 13.93 5.00057C12.4979 5.03118 12.0277 6.20733 11.9716 6.79158V16.9022C11.9861 17.7539 11.4924 18.9993 9.97603 18.9993C8.49556 18.9993 7.91604 17.6872 8.04374 16.7036C8.38959 14.0396 7.58132 11.2472 4.08109 11.003H1.99707',
  d2: 'M2 11H3.95595C6.21181 11 8.04055 12.7909 8.04055 15V17.0845C8.04055 18.1424 8.9163 19 9.99659 19C11.0769 19 11.9526 18.1424 11.9526 17.0845V6.96543C11.9526 5.87995 12.8512 5 13.9596 5C15.0681 5 15.9666 5.87995 15.9666 6.96543V9C15.9666 11.2091 17.7954 13 20.0512 13H22M22 13C22 13.527 20 15 20 15M22 13C22 12.473 20 11 20 11',
  d3: 'M2 10.25C1.58579 10.25 1.25 10.5858 1.25 11C1.25 11.4142 1.58579 11.75 2 11.75V10.25ZM22 13.75C22.4142 13.75 22.75 13.4142 22.75 13C22.75 12.5858 22.4142 12.25 22 12.25V13.75ZM2 11.75H3.95595V10.25H2V11.75ZM7.29055 15V17.0845H8.79055V15H7.29055ZM12.7026 17.0845V6.96543H11.2026V17.0845H12.7026ZM15.2166 6.96543V9H16.7166V6.96543H15.2166ZM20.0512 13.75H22V12.25H20.0512V13.75ZM15.2166 9C15.2166 11.6381 17.396 13.75 20.0512 13.75V12.25C18.1947 12.25 16.7166 10.7802 16.7166 9H15.2166ZM13.9596 5.75C14.6687 5.75 15.2166 6.30889 15.2166 6.96543H16.7166C16.7166 5.45102 15.4674 4.25 13.9596 4.25V5.75ZM12.7026 6.96543C12.7026 6.30889 13.2505 5.75 13.9596 5.75V4.25C12.4519 4.25 11.2026 5.45102 11.2026 6.96543H12.7026ZM9.99659 19.75C11.4762 19.75 12.7026 18.5713 12.7026 17.0845H11.2026C11.2026 17.7135 10.6775 18.25 9.99659 18.25V19.75ZM7.29055 17.0845C7.29055 18.5713 8.51696 19.75 9.99659 19.75V18.25C9.31564 18.25 8.79055 17.7135 8.79055 17.0845H7.29055ZM3.95595 11.75C5.81247 11.75 7.29055 13.2198 7.29055 15H8.79055C8.79055 12.3619 6.61115 10.25 3.95595 10.25V11.75Z',
  d4: 'M20 15C20 15 22 13.527 22 13C22 12.4729 20 11 20 11',
  d5: 'M13.9596 6C13.3837 6 12.9526 6.45186 12.9526 6.96543V17.0845C12.9526 18.7143 11.6093 20 9.99659 20C8.38385 20 7.04055 18.7143 7.04055 17.0845V15C7.04055 13.3628 5.67936 12 3.95595 12H2C1.44772 12 1 11.5523 1 11C1 10.4477 1.44772 10 2 10H3.95595C6.74426 10 9.04055 12.219 9.04055 15V17.0845C9.04055 17.5705 9.44875 18 9.99659 18C10.5444 18 10.9526 17.5705 10.9526 17.0845V6.96543C10.9526 5.30804 12.3187 4 13.9596 4C15.6005 4 16.9666 5.30804 16.9666 6.96543V9C16.9666 10.2853 17.8055 11.4015 19 11.8219V11.3399L19 11.323C18.9997 11.2578 18.9991 11.1121 19.0182 10.9812C19.0392 10.8374 19.1318 10.3589 19.6176 10.1136C20.1008 9.86952 20.5204 10.0846 20.6457 10.1575C20.7576 10.2225 20.8683 10.3127 20.9172 10.3526L20.9298 10.3628C21.22 10.5972 21.6723 10.9755 22.0597 11.3589C22.251 11.5484 22.451 11.7629 22.6103 11.9787C22.69 12.0865 22.7762 12.2169 22.8462 12.3626C22.9101 12.4957 23 12.7217 23 13.0002C23 13.2787 22.9101 13.5047 22.8462 13.6378C22.7762 13.7835 22.69 13.9139 22.6103 14.0217C22.451 14.2375 22.251 14.452 22.0597 14.6415C21.6724 15.0249 21.22 15.4032 20.9299 15.6376L20.9172 15.6478C20.8683 15.6877 20.7576 15.7779 20.6458 15.843C20.5205 15.9159 20.1008 16.1309 19.6176 15.8869C19.1319 15.6415 19.0392 15.1631 19.0182 15.0193C18.9992 14.8883 18.9997 14.7427 19 14.6775L19 14.6606V13.8927C16.7084 13.4178 14.9666 11.4221 14.9666 9V6.96543C14.9666 6.45186 14.5356 6 13.9596 6Z',
  d6: 'M20.9173 10.3524L20.9299 10.3626C21.2201 10.597 21.6724 10.9753 22.0598 11.3587C22.2511 11.5481 22.4511 11.7627 22.6104 11.9785C22.6901 12.0863 22.7763 12.2167 22.8463 12.3624C22.9102 12.4955 23.0001 12.7215 23.0001 13C23.0001 13.2785 22.9102 13.5045 22.8463 13.6376C22.7763 13.7833 22.6901 13.9137 22.6104 14.0215C22.4511 14.2373 22.2511 14.4518 22.0598 14.6413C21.6725 15.0247 21.2201 15.403 20.93 15.6374L20.9173 15.6476C20.8684 15.6875 20.7577 15.7777 20.6459 15.8428C20.5206 15.9156 20.1009 16.1307 19.6177 15.8867C19.132 15.6413 19.0393 15.1629 19.0183 15.0191C18.9993 14.8881 18.9998 14.7425 19.0001 14.6773L19.0001 14.6773L19.0001 14.6604V13.8925L19.0001 11.3396L19.0001 11.3227C18.9998 11.2575 18.9992 11.1119 19.0183 10.981C19.0393 10.8371 19.1319 10.3587 19.6177 10.1133C20.1009 9.8693 20.5205 10.0844 20.6458 10.1572C20.7577 10.2223 20.8684 10.3125 20.9173 10.3524Z',
  d7: 'M2 11H6C7.10457 11 8 11.8954 8 13V17C8 18.1046 8.89544 19 10 19C11.1046 19 12 18.1046 12 17V6.99583C12 5.89356 12.8936 5 13.9958 5C15.1013 5 15.9963 5.89865 15.9916 7.00415L15.975 10.9916C15.9704 12.0995 16.8672 13 17.975 13H21',
  d8: 'M19 16L22 13L19 10',
  d9: 'M12.9958 6C12.4458 6 12 6.44585 12 6.99583V17C12 18.6568 10.6569 20 9.00002 20C7.34315 20 6 18.6568 6 17V13C6 12.4477 5.55228 12 5 12H1V9.99998H5C6.65685 9.99998 8 11.3431 8 13V17C8 17.5523 8.44772 18 9.00001 18C9.55229 18 10 17.5523 10 17V6.99583C10 5.34128 11.3413 4 12.9958 4C14.6553 4 15.9986 5.34891 15.9916 7.00832L15.975 10.9958C15.9727 11.5497 16.4211 12 16.975 12H19.1716L17.8787 10.7071L19.2929 9.29289L23 13L19.2929 16.7071L17.8787 15.2929L19.1716 14H16.975C15.3132 14 13.9681 12.6492 13.975 10.9875L13.9916 6.99998C13.9939 6.44838 13.5474 6 12.9958 6Z',
} as const;

export const IconCurvyRightDirectionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-stroke-rounded IconCurvyRightDirectionStrokeRounded"
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

export const IconCurvyRightDirectionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-duotone-rounded IconCurvyRightDirectionDuotoneRounded"
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

export const IconCurvyRightDirectionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-twotone-rounded IconCurvyRightDirectionTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCurvyRightDirectionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-solid-rounded IconCurvyRightDirectionSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyRightDirectionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-bulk-rounded IconCurvyRightDirectionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyRightDirectionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-stroke-sharp IconCurvyRightDirectionStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyRightDirectionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-right-direction-solid-sharp IconCurvyRightDirectionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCurvyRightDirection: TheIconSelfPack = {
  name: 'CurvyRightDirection',
  StrokeRounded: IconCurvyRightDirectionStrokeRounded,
  DuotoneRounded: IconCurvyRightDirectionDuotoneRounded,
  TwotoneRounded: IconCurvyRightDirectionTwotoneRounded,
  SolidRounded: IconCurvyRightDirectionSolidRounded,
  BulkRounded: IconCurvyRightDirectionBulkRounded,
  StrokeSharp: IconCurvyRightDirectionStrokeSharp,
  SolidSharp: IconCurvyRightDirectionSolidSharp,
};
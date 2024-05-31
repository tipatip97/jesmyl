import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.99709 15.0001C3.99709 15.0001 1.99805 13.5271 1.99805 13.0001C1.99805 12.473 3.99711 11.0001 3.99711 11.0001M2.2229 12.8675C3.63456 13.1574 6.28054 13.27 7.59106 10.8163C8.13439 9.95268 8.03253 8.50668 8.03253 6.86106C8.06633 6.19025 8.63778 4.96995 10.0699 5.00057C11.5021 5.03118 11.9723 6.20733 12.0284 6.79158V16.9022C12.0138 17.7539 12.5076 18.9993 14.0239 18.9993C15.5044 18.9993 16.0839 17.6872 15.9562 16.7036C15.6104 14.0396 16.4187 11.2472 19.9189 11.003H22.0029',
  d2: 'M22 11H20.044C17.7882 11 15.9595 12.7909 15.9595 15V17.0845C15.9595 18.1424 15.0837 19 14.0034 19C12.9231 19 12.0474 18.1424 12.0474 17.0845V6.96543C12.0474 5.87995 11.1488 5 10.0404 5C8.93193 5 8.03337 5.87995 8.03337 6.96543V9C8.03337 11.2091 6.20463 13 3.94877 13H2M2 13C2 13.527 3.99998 15 3.99998 15M2 13C2 12.473 4 11 4 11',
  d3: 'M22 10.25C22.4142 10.25 22.75 10.5858 22.75 11C22.75 11.4142 22.4142 11.75 22 11.75V10.25ZM2 13.75C1.58579 13.75 1.25 13.4142 1.25 13C1.25 12.5858 1.58579 12.25 2 12.25V13.75ZM22 11.75H20.044V10.25H22V11.75ZM16.7095 15V17.0845H15.2095V15H16.7095ZM11.2974 17.0845V6.96543H12.7974V17.0845H11.2974ZM8.78337 6.96543V9H7.28337V6.96543H8.78337ZM3.94877 13.75H2V12.25H3.94877V13.75ZM8.78337 9C8.78337 11.6381 6.60397 13.75 3.94877 13.75V12.25C5.8053 12.25 7.28337 10.7802 7.28337 9H8.78337ZM10.0404 5.75C9.33127 5.75 8.78337 6.30889 8.78337 6.96543H7.28337C7.28337 5.45102 8.53259 4.25 10.0404 4.25V5.75ZM11.2974 6.96543C11.2974 6.30889 10.7495 5.75 10.0404 5.75V4.25C11.5481 4.25 12.7974 5.45102 12.7974 6.96543H11.2974ZM14.0034 19.75C12.5238 19.75 11.2974 18.5713 11.2974 17.0845H12.7974C12.7974 17.7135 13.3225 18.25 14.0034 18.25V19.75ZM16.7095 17.0845C16.7095 18.5713 15.483 19.75 14.0034 19.75V18.25C14.6844 18.25 15.2095 17.7135 15.2095 17.0845H16.7095ZM20.044 11.75C18.1875 11.75 16.7095 13.2198 16.7095 15H15.2095C15.2095 12.3619 17.3889 10.25 20.044 10.25V11.75Z',
  d4: 'M3.99998 15C3.99998 15 2 13.527 2 13C2 12.4729 4 11 4 11',
  d5: 'M10.0404 6C10.6163 6 11.0474 6.45186 11.0474 6.96543V17.0845C11.0474 18.7143 12.3907 20 14.0034 20C15.6162 20 16.9595 18.7143 16.9595 17.0845V15C16.9595 13.3628 18.3206 12 20.044 12H22C22.5523 12 23 11.5523 23 11C23 10.4477 22.5523 10 22 10H20.044C17.2557 10 14.9595 12.219 14.9595 15V17.0845C14.9595 17.5705 14.5513 18 14.0034 18C13.4556 18 13.0474 17.5705 13.0474 17.0845V6.96543C13.0474 5.30804 11.6813 4 10.0404 4C8.39948 4 7.03337 5.30804 7.03337 6.96543V9C7.03337 10.2853 6.19446 11.4015 4.99998 11.8219V11.3399L5.00002 11.323C5.00028 11.2578 5.00086 11.1121 4.98179 10.9812C4.96084 10.8374 4.86817 10.3589 4.3824 10.1136C3.89919 9.86952 3.47957 10.0846 3.35426 10.1575C3.24241 10.2225 3.13171 10.3127 3.0828 10.3526L3.07016 10.3628C2.78004 10.5972 2.32765 10.9755 1.94033 11.3589C1.74896 11.5484 1.54905 11.7629 1.38966 11.9787C1.31002 12.0865 1.22381 12.2169 1.15383 12.3626C1.08991 12.4957 0.999975 12.7217 0.999977 13.0002C0.999979 13.2787 1.08991 13.5047 1.15383 13.6378C1.22381 13.7835 1.31002 13.9139 1.38965 14.0217C1.54904 14.2375 1.74895 14.452 1.94032 14.6415C2.32764 15.0249 2.78001 15.4032 3.07013 15.6376L3.08277 15.6478C3.13169 15.6877 3.24238 15.7779 3.35423 15.843C3.47954 15.9159 3.89915 16.1309 4.38237 15.8869C4.86814 15.6415 4.96082 15.1631 4.98177 15.0193C5.00084 14.8883 5.00027 14.7427 5.00001 14.6775L4.99996 14.6606V13.8927C7.29159 13.4178 9.03337 11.4221 9.03337 9V6.96543C9.03337 6.45186 9.46439 6 10.0404 6Z',
  d6: 'M3.0827 10.3524L3.07006 10.3626C2.77994 10.597 2.32756 10.9753 1.94024 11.3587C1.74886 11.5481 1.54895 11.7627 1.38956 11.9785C1.30992 12.0863 1.22371 12.2167 1.15373 12.3624C1.08981 12.4955 0.999877 12.7215 0.999879 13C0.999881 13.2785 1.08981 13.5045 1.15373 13.6376C1.22371 13.7833 1.30992 13.9137 1.38955 14.0215C1.54894 14.2373 1.74885 14.4518 1.94022 14.6413C2.32754 15.0247 2.77991 15.403 3.07004 15.6374L3.08267 15.6476C3.13159 15.6875 3.24228 15.7777 3.35413 15.8428C3.47944 15.9156 3.89906 16.1307 4.38227 15.8867C4.86805 15.6413 4.96073 15.1629 4.98168 15.0191C5.00075 14.8881 5.00017 14.7425 4.99991 14.6773L4.99991 14.6773L4.99987 14.6604V13.8925L4.99988 11.3396L4.99993 11.3227C5.00019 11.2575 5.00076 11.1119 4.98169 10.981C4.96074 10.8371 4.86807 10.3587 4.3823 10.1133C3.89909 9.8693 3.47947 10.0844 3.35416 10.1572C3.24231 10.2223 3.13162 10.3125 3.0827 10.3524Z',
  d7: 'M22 11H18C16.8954 11 16 11.8954 16 13V17C16 18.1046 15.1046 19 14 19C12.8954 19 12 18.1046 12 17V6.99583C12 5.89356 11.1064 5 10.0042 5C8.89865 5 8.00375 5.89865 8.00836 7.00415L8.02499 10.9916C8.02961 12.0995 7.13284 13 6.02501 13H3',
  d8: 'M4.99998 16L2 13L5 10',
  d9: 'M11.0042 6C11.5542 6 12 6.44585 12 6.99583V17C12 18.6568 13.3431 20 15 20C16.6568 20 18 18.6568 18 17V13C18 12.4477 18.4477 12 19 12H23V9.99998H19C17.3431 9.99998 16 11.3431 16 13V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V6.99583C14 5.34128 12.6587 4 11.0042 4C9.34474 4 8.00145 5.34891 8.00837 7.00832L8.025 10.9958C8.02731 11.5497 7.57892 12 7.02501 12H4.82844L6.12132 10.7071L4.70711 9.29289L1 13L4.7071 16.7071L6.12132 15.2929L4.82841 14H7.02501C8.68675 14 10.0319 12.6492 10.025 10.9875L10.0084 6.99998C10.0061 6.44838 10.4526 6 11.0042 6Z',
} as const;

export const IconCurvyLeftDirectionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-stroke-rounded IconCurvyLeftDirectionStrokeRounded"
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

export const IconCurvyLeftDirectionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-duotone-rounded IconCurvyLeftDirectionDuotoneRounded"
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

export const IconCurvyLeftDirectionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-twotone-rounded IconCurvyLeftDirectionTwotoneRounded"
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

export const IconCurvyLeftDirectionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-solid-rounded IconCurvyLeftDirectionSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCurvyLeftDirectionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-bulk-rounded IconCurvyLeftDirectionBulkRounded"
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

export const IconCurvyLeftDirectionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-stroke-sharp IconCurvyLeftDirectionStrokeSharp"
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

export const IconCurvyLeftDirectionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="curvy-left-direction-solid-sharp IconCurvyLeftDirectionSolidSharp"
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

export const iconPackOfCurvyLeftDirection: TheIconSelfPack = {
  name: 'CurvyLeftDirection',
  StrokeRounded: IconCurvyLeftDirectionStrokeRounded,
  DuotoneRounded: IconCurvyLeftDirectionDuotoneRounded,
  TwotoneRounded: IconCurvyLeftDirectionTwotoneRounded,
  SolidRounded: IconCurvyLeftDirectionSolidRounded,
  BulkRounded: IconCurvyLeftDirectionBulkRounded,
  StrokeSharp: IconCurvyLeftDirectionStrokeSharp,
  SolidSharp: IconCurvyLeftDirectionSolidSharp,
};
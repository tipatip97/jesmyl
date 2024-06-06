import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.96256 12H19.0374C20.0144 12 20.5028 12 20.8047 12.3753C21.1065 12.7506 21.0135 13.1617 20.8276 13.984C20.2864 16.3763 18.7876 18.408 16.7527 19.6599C16.3614 19.9006 16.1944 20.3975 16.4056 20.8042C16.689 21.3497 16.2909 22 15.6735 22H8.32647C7.70915 22 7.31104 21.3497 7.5944 20.8042C7.80561 20.3975 7.63863 19.9006 7.24729 19.6599C5.21237 18.408 3.71356 16.3763 3.17245 13.984C2.98645 13.1617 2.89345 12.7506 3.1953 12.3753C3.49715 12 3.98562 12 4.96256 12Z',
  d2: 'M17.4588 12L19.0095 8.28104C19.1841 7.86217 19.6148 7.65205 20.047 7.57994C20.4208 7.51758 20.7187 7.3415 20.8785 7.05278C21.2753 6.33534 20.6683 5.1941 19.5226 4.50374C18.3769 3.81338 17.1264 3.83534 16.7295 4.55278C16.5698 4.8415 16.5726 5.19885 16.7078 5.56783C16.864 5.99454 16.905 6.48886 16.6448 6.85615L13 12',
  d3: 'M6.50185 5.50185L10 9M8.60074 3.40297C10.1463 4.94854 9.75993 6.44156 8.60074 7.60074C7.44156 8.75993 5.94854 9.14632 4.40297 7.60074C2.85739 6.05516 3.00371 2.00371 3.00371 2.00371C3.00371 2.00371 7.05516 1.85739 8.60074 3.40297Z',
  d4: 'M8.60074 3.40297C10.1463 4.94854 9.75992 6.44156 8.60074 7.60074C7.44156 8.75992 5.94854 9.14632 4.40297 7.60074C2.85739 6.05516 3.00371 2.00371 3.00371 2.00371C3.00371 2.00371 7.05516 1.85739 8.60074 3.40297Z',
  d5: 'M4.90847 11.25H19.0876C19.5308 11.2499 19.9512 11.2498 20.2953 11.3071C20.6936 11.3734 21.0851 11.5297 21.3871 11.9053C21.6723 12.2598 21.7603 12.6433 21.7466 13.0381C21.7354 13.3626 21.6517 13.732 21.5686 14.0986C20.9817 16.6933 19.269 19.0394 17.0669 20.394C17.6127 21.4447 16.8448 22.75 15.6716 22.75H8.32449C7.15124 22.75 6.38336 21.4447 6.92912 20.394C4.72709 19.0394 3.0143 16.6932 2.42741 14.0986C2.34436 13.732 2.26067 13.3626 2.2494 13.0381C2.23569 12.6433 2.32374 12.2598 2.6089 11.9053C2.91097 11.5297 3.30245 11.3734 3.7007 11.3071C4.04486 11.2498 4.4652 11.2499 4.90847 11.25Z',
  d6: 'M9.62312 7.5625C9.47295 7.76341 9.30636 7.95271 9.12939 8.12968C8.95251 8.30656 8.7633 8.47308 8.5625 8.6232L9.46834 9.52903C9.76123 9.82193 10.2361 9.82193 10.529 9.52903C10.8219 9.23614 10.8219 8.76127 10.529 8.46837L9.62312 7.5625Z',
  d7: 'M2.25409 1.97478L2.25403 1.98243V1.98245C2.25291 2.11107 2.2498 2.47076 2.25515 2.67806C2.26605 3.10003 2.29739 3.68163 2.3799 4.31702C2.46206 4.94972 2.59722 5.65384 2.82233 6.31402C3.0449 6.96674 3.37305 7.62938 3.87254 8.12887C4.75681 9.01314 5.71745 9.42765 6.69747 9.36111C7.39463 9.31377 8.02158 9.02795 8.56395 8.6225L5.97178 6.03033C5.67889 5.73744 5.67889 5.26256 5.97178 4.96967C6.26467 4.67678 6.73955 4.67678 7.03244 4.96967L9.62461 7.56184C10.0301 7.01947 10.3159 6.39252 10.3632 5.69536C10.4298 4.71535 10.0152 3.75471 9.13098 2.87044C8.63148 2.37094 7.96884 2.0428 7.31613 1.82023C6.65595 1.59511 5.95182 1.45995 5.31912 1.37779C4.68373 1.29528 4.10214 1.26394 3.68017 1.25305C3.47258 1.24769 3.1126 1.2508 2.98446 1.25191L2.97731 1.25197C2.58435 1.26616 2.26828 1.58181 2.25409 1.97478Z',
  d8: 'M19.9091 3.85744C19.2379 3.45302 18.5018 3.23478 17.8314 3.24655C17.1722 3.25812 16.448 3.50713 16.0726 4.18582C15.7763 4.72148 15.8186 5.31862 16.0029 5.82184C16.058 5.97225 16.0833 6.11068 16.0819 6.22111C16.0806 6.32754 16.0557 6.38547 16.0322 6.41864L14.3454 8.79921C14.0514 9.21417 13.9044 9.42165 13.9882 9.58387C14.0721 9.74609 14.3264 9.74609 14.835 9.74609H18.8091C19.0029 9.74609 19.0998 9.74609 19.1754 9.69573C19.251 9.64537 19.2883 9.55591 19.3629 9.377L19.7011 8.56577C19.7178 8.52583 19.7506 8.48094 19.8265 8.4338C19.9078 8.38337 20.0252 8.33994 20.1698 8.31581C20.7015 8.22711 21.2341 7.95432 21.5341 7.41192C21.903 6.74506 21.75 5.99383 21.4405 5.41199C21.1227 4.81438 20.5811 4.26236 19.9091 3.85744Z',
  d9: 'M2.25191 1.98243L2.25198 1.97478C2.26617 1.58181 2.58224 1.26616 2.9752 1.25197L2.98235 1.25191C3.11049 1.2508 3.47046 1.24769 3.67806 1.25305C4.10003 1.26394 4.68162 1.29528 5.31701 1.37779C5.94971 1.45995 6.65384 1.59511 7.31402 1.82023C7.96673 2.0428 8.62937 2.37094 9.12887 2.87044C10.0131 3.75471 10.4276 4.71535 10.3611 5.69536C10.2962 6.6507 9.78354 7.4742 9.12887 8.12887C8.47419 8.78355 7.6507 9.29624 6.69535 9.36111C5.71534 9.42765 4.7547 9.01314 3.87043 8.12887C3.37094 7.62938 3.04279 6.96674 2.82022 6.31402C2.59511 5.65384 2.45995 4.94972 2.37779 4.31702C2.29528 3.68163 2.26394 3.10003 2.25304 2.67806C2.24769 2.47074 2.2508 2.11102 2.25191 1.98243Z',
  d10: 'M5.96967 4.96967C6.26256 4.67678 6.73744 4.67678 7.03033 4.96967L10.5285 8.46782C10.8214 8.76071 10.8214 9.23558 10.5285 9.52848C10.2356 9.82137 9.76071 9.82137 9.46782 9.52848L5.96967 6.03033C5.67678 5.73744 5.67678 5.26256 5.96967 4.96967Z',
  d11: 'M16 20.0645C18.9634 18.5918 21 15.5337 21 12H3C3 15.5337 5.03656 18.5918 8 20.0645V22H16V20.0645Z',
  d12: 'M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 15.6614 19.7317 18.8501 16.75 20.5165V22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22V20.5165C4.26828 18.8501 2.25 15.6614 2.25 12Z',
  d13: 'M9.94157 10.0021L8.56445 8.62497C8.76551 8.47472 8.95496 8.30802 9.13204 8.13093C9.3088 7.95417 9.47521 7.7651 9.62525 7.56445L11.0022 8.94143L9.94157 10.0021Z',
  d14: 'M10.3633 5.69756C10.316 6.39496 10.0309 7.02196 9.62525 7.56445L7.03136 4.97168L5.9707 6.03234L8.56445 8.62497C8.02221 9.0302 7.39448 9.31598 6.69756 9.3633C5.71754 9.42985 4.75691 9.01534 3.87264 8.13107C3.37314 7.63157 3.045 6.96893 2.82243 6.31622C2.59731 5.65604 2.46215 4.95192 2.37999 4.31922C2.29748 3.68382 2.26614 3.10223 2.25525 2.68026C2.24978 2.46867 2.24942 2.2957 2.25047 2.17434C2.25082 2.13335 2.26353 1.75497 2.27198 1.50319C2.27604 1.38209 2.27913 1.29025 2.27938 1.27938C2.29021 1.27913 2.38143 1.27607 2.50192 1.27202L2.50313 1.27198C2.75491 1.26353 3.13334 1.25082 3.17434 1.25047C3.2957 1.24942 3.46867 1.24978 3.68026 1.25525C4.10223 1.26614 4.68382 1.29748 5.31922 1.37999C5.95192 1.46215 6.65604 1.59731 7.31622 1.82243C7.96893 2.045 8.63157 2.37314 9.13107 2.87264C10.0153 3.75691 10.4298 4.71754 10.3633 5.69756Z',
  d15: 'M13.6748 9.75H19.2093L19.7014 8.56967C19.7181 8.52974 19.7509 8.48484 19.8269 8.4377C19.9081 8.38727 20.0255 8.34384 20.1702 8.31971C20.7018 8.23101 21.2344 7.95823 21.5345 7.41583C21.9034 6.74897 21.7504 5.99774 21.4409 5.4159C21.123 4.81829 20.5814 4.26627 19.9094 3.86135C19.2382 3.45692 18.5021 3.23868 17.8318 3.25045C17.1726 3.26203 16.4484 3.51104 16.0729 4.18973C15.7766 4.72539 15.8189 5.32253 16.0032 5.82575C16.0583 5.97616 16.0836 6.11459 16.0822 6.22501C16.0809 6.33145 16.056 6.38938 16.0325 6.42255L13.6748 9.75Z',
};

export const IconMortarStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-stroke-rounded IconMortarStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-duotone-rounded IconMortarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-twotone-rounded IconMortarTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconMortarSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-solid-rounded IconMortarSolidRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-bulk-rounded IconMortarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMortarStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-stroke-sharp IconMortarStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMortarSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mortar-solid-sharp IconMortarSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
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

export const iconPackOfMortar: TheIconSelfPack = {
  name: 'Mortar',
  StrokeRounded: IconMortarStrokeRounded,
  DuotoneRounded: IconMortarDuotoneRounded,
  TwotoneRounded: IconMortarTwotoneRounded,
  SolidRounded: IconMortarSolidRounded,
  BulkRounded: IconMortarBulkRounded,
  StrokeSharp: IconMortarStrokeSharp,
  SolidSharp: IconMortarSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.3559 12.0514L20.1247 13.9617C20.7073 14.3635 20.9986 14.5645 21 14.8311C21.0014 15.0977 20.7123 15.3009 20.1341 15.7072L19.5576 16.1123C18.6051 16.7815 18.1289 17.1162 17.7424 16.9635C17.3559 16.8109 17.3559 16.2882 17.3559 15.2427V12.0514ZM17.3559 12.0514L17.2813 12M17.3559 12.0514V11.9486M17.2813 12L14 9.73627M17.2813 12L17.3559 11.9486M17.2813 12L14 14.2637M17.3559 11.9486L20.1247 10.0383C20.7073 9.63646 20.9986 9.43551 21 9.16889C21.0014 8.90227 20.7123 8.69912 20.1341 8.29281L19.5576 7.88774C18.6051 7.21847 18.1289 6.88383 17.7424 7.03647C17.3559 7.18911 17.3559 7.71182 17.3559 8.75726V11.9486Z',
  d2: 'M21 19.682C19.6595 21 17.5021 21 13.1873 21H11.1532C6.83834 21 4.68091 21 3.34046 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34046 4.31802C4.68091 3 6.83834 3 11.1532 3H13.1873C17.5021 3 19.6595 3 21 4.31802',
  d3: 'M6.5 3.5V20.5',
  d4: 'M11 3H13C17.2426 3 19.364 3 20.682 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.682 19.682C19.364 21 17.2426 21 13 21H11C9.12274 21 7.6608 21 6.5 20.8858V3.11418C7.6608 3 9.12274 3 11 3ZM19.5575 16.1123L20.134 15.7072C20.7122 15.3009 21.0014 15.0977 20.9999 14.8311C20.9985 14.5645 20.7072 14.3635 20.1247 13.9617L17.3558 12.0514V11.9486L20.1247 10.0383C20.7072 9.63646 20.9985 9.43551 20.9999 9.16889C21.0014 8.90227 20.7122 8.69912 20.134 8.29281L19.5575 7.88774C18.6051 7.21847 18.1288 6.88383 17.7423 7.03647C17.3558 7.18911 17.3558 7.71182 17.3558 8.75726V11.9486L17.2812 12L17.3558 12.0514V15.2427C17.3558 16.2882 17.3558 16.8109 17.7423 16.9635C18.1288 17.1162 18.6051 16.7815 19.5575 16.1123Z',
  d5: 'M18.8315 7.03417C18.8485 7.04611 18.8655 7.05808 18.8826 7.07007L19.4591 7.47515C19.4731 7.48501 19.4872 7.49491 19.5014 7.50484C19.7529 7.68146 20.0206 7.8694 20.2172 8.05309C20.431 8.25284 20.753 8.62059 20.7501 9.17477C20.7471 9.72833 20.4218 10.0927 20.2065 10.2902C20.0082 10.4722 19.7387 10.6579 19.4852 10.8327C19.471 10.8425 19.4568 10.8523 19.4427 10.862L17.7924 12.0005L19.4427 13.1391C19.4568 13.1488 19.471 13.1586 19.4852 13.1684C19.7387 13.3431 20.0082 13.5289 20.2065 13.7108C20.4218 13.9084 20.7471 14.2727 20.7501 14.8263C20.753 15.3805 20.431 15.7482 20.2172 15.948C20.0206 16.1317 19.7529 16.3196 19.5014 16.4962C19.4872 16.5062 19.4731 16.5161 19.4591 16.5259L18.8826 16.931C18.8655 16.943 18.8485 16.955 18.8315 16.9669C18.3996 17.2705 17.995 17.5549 17.6475 17.7348C17.2909 17.9193 16.7348 18.135 16.1251 17.8942C15.4516 17.6282 15.2409 17.027 15.1688 16.6082C15.1056 16.2415 15.1058 15.7743 15.106 15.3142C15.106 15.2905 15.106 15.2669 15.106 15.2433V13.8539L13.318 15.0874C12.8634 15.401 12.2406 15.2867 11.927 14.8321C11.6133 14.3775 11.7276 13.7548 12.1822 13.4411L14.2704 12.0005L12.1822 10.5599C11.7276 10.2463 11.6133 9.62355 11.927 9.16895C12.2406 8.71435 12.8634 8.60007 13.318 8.91369L15.106 10.1472V8.7578C15.106 8.73419 15.106 8.71055 15.106 8.6869C15.1058 8.22681 15.1056 7.7596 15.1688 7.39283C15.2409 6.97404 15.4516 6.37291 16.1251 6.10692C16.7348 5.86613 17.2909 6.0818 17.6475 6.26632C17.995 6.44617 18.3996 6.7306 18.8315 7.03417ZM17.106 13.9568L18.307 14.7853C18.3333 14.8035 18.3586 14.8209 18.3829 14.8377C18.3593 14.8544 18.3347 14.8716 18.3092 14.8895L17.7328 15.2946C17.4748 15.4758 17.2724 15.6173 17.1079 15.7269C17.106 15.5868 17.106 15.4281 17.106 15.2433V13.9568ZM17.106 10.0443V8.7578C17.106 8.57299 17.106 8.41424 17.1079 8.27417C17.2724 8.38375 17.4748 8.52523 17.7328 8.70649L18.3092 9.11156C18.3347 9.12948 18.3593 9.14672 18.3829 9.16335C18.3586 9.18017 18.3333 9.19761 18.307 9.21576L17.106 10.0443Z',
  d6: 'M13.2549 2.25H11.1202C9.06787 2.24998 7.43009 2.24996 6.14561 2.41901C4.82004 2.59346 3.72454 2.96355 2.85563 3.81412C1.98413 4.66721 1.60257 5.74704 1.42315 7.05336C1.24996 8.31434 1.24998 9.92064 1.25 11.9266V12.0734C1.24998 14.0793 1.24996 15.6857 1.42315 16.9466C1.60257 18.253 1.98413 19.3328 2.85563 20.1859C3.72454 21.0364 4.82004 21.4065 6.14561 21.581C7.43009 21.75 9.06784 21.75 11.1202 21.75H13.2549C15.3073 21.75 16.945 21.75 18.2295 21.581C19.5551 21.4065 20.6506 21.0364 21.5195 20.1859C22.1081 19.6097 22.479 18.9235 22.7114 18.1204C22.8611 17.6031 22.5621 17.0626 22.0435 16.9133C21.525 16.7639 20.9833 17.0622 20.8336 17.5796C20.6771 18.1202 20.4578 18.4933 20.1507 18.794C19.7068 19.2285 19.0894 19.5009 17.9739 19.6477C16.8321 19.798 15.3236 19.8 13.1836 19.8H11.1915C10.0116 19.8 9.02367 19.7994 8.18332 19.7737C7.74921 19.7604 7.53216 19.7537 7.39108 19.6083C7.25 19.4628 7.25 19.2403 7.25 18.7952V5.20483C7.25 4.75975 7.25 4.5372 7.39108 4.39174C7.53216 4.24628 7.74921 4.23963 8.18331 4.22634C9.02366 4.20061 10.0116 4.2 11.1915 4.2H13.1836C15.3236 4.2 16.8321 4.202 17.9739 4.35226C19.0894 4.49907 19.7068 4.77152 20.1507 5.20603C20.4578 5.50673 20.6771 5.87983 20.8336 6.42043C20.9833 6.93778 21.525 7.2361 22.0435 7.08674C22.5621 6.93738 22.8611 6.39691 22.7114 5.87956C22.479 5.07647 22.1081 4.39032 21.5195 3.81412C20.6506 2.96355 19.5551 2.59346 18.2295 2.41901C16.945 2.24996 15.3073 2.24998 13.2549 2.25Z',
  d7: 'M22 6V3L2 3L2 21L22 21V18',
  d8: 'M6.5 3V21',
  d9: 'M14 14.9412L21 9.05881L17.5008 7V17L21 14.9412L14 9.05881',
  d10: 'M16.1266 6.34894C16.3602 6.21538 16.6474 6.21715 16.8793 6.35359L20.3785 8.41239C20.5883 8.53588 20.7252 8.75358 20.7455 8.99624C20.7658 9.2389 20.6671 9.47633 20.4806 9.63299L17.6639 12L20.4806 14.367C20.6671 14.5237 20.7658 14.7611 20.7455 15.0037C20.7252 15.2464 20.5883 15.4641 20.3785 15.5876L16.8793 17.6464C16.6474 17.7829 16.3602 17.7846 16.1266 17.6511C15.8931 17.5175 15.7489 17.2691 15.7489 17V13.6092L13.4806 15.5154L12.5156 14.367L15.3323 12L12.5156 9.63299L13.4806 8.48462L15.7489 10.3908V7C15.7489 6.73095 15.8931 6.48251 16.1266 6.34894ZM17.2489 13.6106L18.7034 14.8328L17.2489 15.6885V13.6106ZM17.2489 10.3894V8.31146L18.7034 9.1672L17.2489 10.3894Z',
  d11: 'M2.22727 2.25H21.7727C22.0319 2.25 22.2805 2.35272 22.4638 2.53557C22.647 2.71842 22.75 2.96641 22.75 3.225V7H20.7955V4.19995H8V19.8L20.7955 19.7999V17H22.75V20.775C22.75 21.3135 22.3125 21.75 21.7727 21.75L2.22727 21.75C1.96808 21.75 1.71951 21.6473 1.53624 21.4644C1.35296 21.2816 1.25 21.0336 1.25 20.775V3.225C1.25 2.68652 1.68754 2.25 2.22727 2.25Z',
};

export const IconTabletConnectedBluetoothStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-stroke-rounded IconTabletConnectedBluetoothStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedBluetoothDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-duotone-rounded IconTabletConnectedBluetoothDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedBluetoothTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-twotone-rounded IconTabletConnectedBluetoothTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedBluetoothSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-solid-rounded IconTabletConnectedBluetoothSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTabletConnectedBluetoothBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-bulk-rounded IconTabletConnectedBluetoothBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedBluetoothStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-stroke-sharp IconTabletConnectedBluetoothStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTabletConnectedBluetoothSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-connected-bluetooth-solid-sharp IconTabletConnectedBluetoothSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTabletConnectedBluetooth: TheIconSelfPack = {
  name: 'TabletConnectedBluetooth',
  StrokeRounded: IconTabletConnectedBluetoothStrokeRounded,
  DuotoneRounded: IconTabletConnectedBluetoothDuotoneRounded,
  TwotoneRounded: IconTabletConnectedBluetoothTwotoneRounded,
  SolidRounded: IconTabletConnectedBluetoothSolidRounded,
  BulkRounded: IconTabletConnectedBluetoothBulkRounded,
  StrokeSharp: IconTabletConnectedBluetoothStrokeSharp,
  SolidSharp: IconTabletConnectedBluetoothSolidSharp,
};
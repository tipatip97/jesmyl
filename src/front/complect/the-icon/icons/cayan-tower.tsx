import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 22C18 19.8333 16.4136 15.3 14.9492 12.5C13.4848 9.7 12.3765 4.33333 11.9697 2L6.47299 4C4.64237 9.5 8.48152 15.6 11.8984 22',
  d2: 'M10 18H11.5M8 15.0185L10.5 15M7.5 12H10',
  d3: 'M12 2L17.5719 4C18.5782 7 17.7186 10.362 15.9505 14.4155M6 22C6 20.2797 6.85094 17.152 8 14.5',
  d4: 'M4 22L20 22',
  d5: 'M11.9697 2L6.47299 4C4.64237 9.5 8.48152 15.6 11.8984 22H18C18 19.8333 16.4136 15.3 14.9492 12.5C13.4848 9.7 12.3765 4.33333 11.9697 2Z',
  d6: 'M10 18H11.5M8.5 15H10.5M7.5 12H10',
  d7: 'M12.3455 1.35087C12.5376 1.46203 12.6706 1.65256 12.7087 1.8712C12.9096 3.02364 13.2844 4.92846 13.7893 6.88789C14.2978 8.86177 14.9239 10.8331 15.6139 12.1524C16.3678 13.5939 17.1456 15.4656 17.736 17.2522C18.3186 19.0155 18.7501 20.7881 18.7501 22C18.7501 22.4142 18.4143 22.75 18.0001 22.75H11.8985C11.6216 22.75 11.3673 22.5975 11.2369 22.3532C10.9064 21.7341 10.5694 21.1135 10.2326 20.4934L10.2278 20.4844C8.91619 18.0691 7.60694 15.658 6.66547 13.3074C6.56852 13.0654 6.52004 12.9443 6.57953 12.8564C6.63902 12.7685 6.77075 12.7685 7.0342 12.7685H9.0001C9.41431 12.7685 9.7501 12.4327 9.7501 12.0185C9.7501 11.6043 9.41431 11.2685 9.0001 11.2685H6.24128C6.09766 11.2685 6.02585 11.2685 5.9724 11.2282C5.91895 11.1879 5.89945 11.1198 5.86046 10.9836C5.78859 10.7326 5.72214 10.4816 5.66161 10.2308C5.6088 10.012 5.5824 9.90255 5.64246 9.82627C5.70251 9.75 5.81697 9.75 6.04588 9.75H8.0001C8.41431 9.75 8.7501 9.41422 8.7501 9C8.7501 8.58579 8.41431 8.25 8.0001 8.25H5.67658C5.50396 8.25 5.41766 8.25 5.36011 8.1966C5.30257 8.14319 5.29628 8.05896 5.2837 7.8905C5.17987 6.5003 5.30964 5.12065 5.76147 3.76315C5.8338 3.54585 6.00144 3.37351 6.21665 3.29521L11.7134 1.29521C11.922 1.21932 12.1534 1.2397 12.3455 1.35087Z',
  d8: 'M6.26413 17.2518C5.68146 19.0151 5.25 20.7877 5.25 21.9996C5.25 22.4138 5.58579 22.7496 6 22.7496H9.25001C9.47246 22.7496 9.58369 22.7496 9.62743 22.677C9.67116 22.6045 9.61919 22.5061 9.51524 22.3094L6.81143 17.1937C6.6737 16.9331 6.60483 16.8028 6.50605 16.811C6.40727 16.8193 6.36126 16.9583 6.26924 17.2364C6.26753 17.2415 6.26583 17.2467 6.26413 17.2518Z',
  d9: 'M18.2385 3.76278C18.1662 3.54548 17.9986 3.37314 17.7834 3.29483L14.7491 2.19081C14.5306 2.11131 14.4213 2.07156 14.3549 2.12816C14.2884 2.18476 14.3101 2.29844 14.3535 2.52578C14.563 3.62175 14.8658 5.05378 15.2418 6.51329C15.7455 8.46847 16.3375 10.2989 16.9431 11.4569C17.0467 11.6549 17.1504 11.8601 17.2539 12.0713C17.3897 12.3484 17.4575 12.4869 17.5575 12.4807C17.6575 12.4744 17.7068 12.3309 17.8052 12.0439C18.761 9.25669 19.1382 6.46584 18.2385 3.76278Z',
  d10: 'M3 21.75C3 21.1977 3.44772 20.75 4 20.75L20 20.75C20.5523 20.75 21 21.1977 21 21.75C21 22.3023 20.5523 22.75 20 22.75L4 22.75C3.44772 22.75 3 22.3023 3 21.75Z',
  d11: 'M12.7087 1.8712C12.6706 1.65256 12.5376 1.46203 12.3455 1.35087C12.1534 1.2397 11.922 1.21932 11.7134 1.2952L6.21665 3.29521C6.00144 3.37351 5.8338 3.54585 5.76147 3.76315C4.76628 6.75315 5.3335 9.85056 6.51793 12.9316C7.46682 15.4 8.84945 17.9462 10.2326 20.4934C10.5694 21.1136 10.9063 21.734 11.2369 22.3532C11.3673 22.5975 11.6216 22.75 11.8985 22.75H18.0001C18.4143 22.75 18.7501 22.4142 18.7501 22C18.7501 20.7881 18.3186 19.0155 17.736 17.2522C17.1456 15.4656 16.3678 13.5939 15.6139 12.1524C14.9239 10.8331 14.2978 8.86177 13.7893 6.88789C13.2844 4.92846 12.9096 3.02364 12.7087 1.8712Z',
  d12: 'M5.94504 11.2685C6.09618 11.7685 6.26803 12.2687 6.45655 12.7685H9.00085C9.41507 12.7685 9.75085 12.4327 9.75085 12.0185C9.75085 11.6043 9.41507 11.2685 9.00085 11.2685H5.94504Z',
  d13: 'M5.31641 8.25C5.36782 8.74895 5.44826 9.24913 5.55367 9.75H8.00085C8.41507 9.75 8.75085 9.41421 8.75085 9C8.75085 8.58579 8.41507 8.25 8.00085 8.25H5.31641Z',
  d14: 'M10 18.0048H13.5M8 15.025H12M7.5 12.0083H11',
  d15: 'M4 22.0024H20',
  d16: 'M15.8669 14.5375C17.5599 11.0591 18.5049 5.88713 17.5429 3.95883L12.0492 1.99756L6.46999 3.95883C5.29922 7.04879 6.5314 11.0959 8.14667 14.6755M15.8669 14.5375C17.0311 17.2125 17.9857 19.5145 17.9035 21.3541M15.8669 14.5375C14.34 11.0286 12.4524 6.87789 12.0711 2.28673M11.9592 21.8437C10.8886 19.993 9.42404 17.5063 8.14667 14.6755M8.14667 14.6755C7.73177 14.3245 6.51109 19.1146 5.94531 21.5331',
  d17: 'M12.7077 1.8712C12.6696 1.65256 12.5366 1.46203 12.3445 1.35087C12.1524 1.2397 11.9209 1.21932 11.7124 1.2952L5.87494 3.41916L5.76045 3.76315C4.96365 6.15709 5.22717 8.69987 6.00769 11.25H10V12.75H6.52241C6.54725 12.8158 6.57237 12.8815 6.59775 12.9472C6.76705 13.3857 6.94933 13.8264 7.14221 14.2685H11V15.7685H7.83151C8.06867 16.2618 8.31556 16.756 8.56892 17.25H12.5V18.75H9.35548C9.71961 19.4319 10.0898 20.1116 10.4574 20.7866C10.744 21.3128 11.029 21.8361 11.3083 22.3553C11.4391 22.5984 11.6928 22.75 11.9688 22.75H17.9991C18.4133 22.75 18.7491 22.4142 18.7491 22C18.7491 20.7881 18.3176 19.0155 17.7349 17.2522C17.1446 15.4656 16.3668 13.5939 15.6129 12.1524C14.9229 10.8331 14.2968 8.86177 13.7882 6.88789C13.2834 4.92846 12.9086 3.02364 12.7077 1.8712Z',
  d18: 'M20 22.75L4 22.75L4 20.75L20 20.75V22.75Z',
  d19: 'M10.1013 22.7499H6.02832C5.61411 22.7499 5.27832 22.4141 5.27832 21.9999C5.27832 20.7879 5.70978 19.0153 6.29245 17.252C6.40697 16.9055 6.52854 16.5557 6.65563 16.2065C7.48709 17.9457 8.43053 19.678 9.33786 21.3439L9.35988 21.3844C9.61013 21.8439 9.85782 22.2987 10.1013 22.7499Z',
  d20: 'M17.4116 12.9936C17.1837 12.4924 16.9516 12.0145 16.7207 11.573C16.101 10.3881 15.5034 8.53418 14.9989 6.57589C14.5387 4.78951 14.1878 3.04505 13.9827 1.90186L18.1525 3.41902L18.2669 3.763C19.2406 6.68819 18.6311 9.83558 17.4296 12.9471C17.4237 12.9626 17.4177 12.9781 17.4116 12.9936Z',
};

export const IconCayanTowerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-stroke-rounded IconCayanTowerStrokeRounded"
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

export const IconCayanTowerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-duotone-rounded IconCayanTowerDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCayanTowerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-twotone-rounded IconCayanTowerTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
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

export const IconCayanTowerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-solid-rounded IconCayanTowerSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCayanTowerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-bulk-rounded IconCayanTowerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCayanTowerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-stroke-sharp IconCayanTowerStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCayanTowerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cayan-tower-solid-sharp IconCayanTowerSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCayanTower: TheIconSelfPack = {
  name: 'CayanTower',
  StrokeRounded: IconCayanTowerStrokeRounded,
  DuotoneRounded: IconCayanTowerDuotoneRounded,
  TwotoneRounded: IconCayanTowerTwotoneRounded,
  SolidRounded: IconCayanTowerSolidRounded,
  BulkRounded: IconCayanTowerBulkRounded,
  StrokeSharp: IconCayanTowerStrokeSharp,
  SolidSharp: IconCayanTowerSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 8C16.3288 7.37209 14.2513 7 12 7C9.74872 7 7.67122 7.37209 6 8',
  d2: 'M6.96964 8L6.24016 6.58747C5.66135 5.46671 5.37195 4.90633 5.55422 4.41103C5.73648 3.91574 6.29735 3.73843 7.41907 3.38381L11.3897 2.12854C11.6608 2.04285 11.7963 2 11.9354 2C12.0745 2 12.21 2.04285 12.4811 2.12854L16.7191 3.46833C17.7295 3.78776 18.2347 3.94748 18.4274 4.39586C18.62 4.84425 18.4131 5.37861 17.9991 6.44734L17.3977 8',
  d3: 'M7 8V9.72517C7 11.5184 7.92149 13.1802 9.42752 14.1028L9.94202 14.418C11.2087 15.194 12.7913 15.194 14.058 14.418L14.5725 14.1028C16.0785 13.1802 17 11.5184 17 9.72517V8',
  d4: 'M15 14L16 17M16 17L14.6312 18.1954C13.3773 19.2905 12.7504 19.838 12 19.838C11.2496 19.838 10.6227 19.2905 9.36884 18.1954L8 17M16 17L17.7341 17.578C18.7322 17.9107 19.2312 18.0771 19.6742 18.3342C20.1079 18.5859 20.5012 18.9014 20.841 19.2701C21.1881 19.6468 22 21 22 22M9 14L8 17M8 17L6.26586 17.578C5.2678 17.9107 4.76877 18.0771 4.32577 18.3342C3.89213 18.5859 3.49882 18.9014 3.15903 19.2701C2.81191 19.6468 2 21 2 22',
  d5: 'M17.4698 7.81388C15.8981 7.29925 14.0189 7 12 7C10.106 7 8.33502 7.26336 6.82547 7.72084L6.24016 6.58747C5.66135 5.46671 5.37195 4.90633 5.55422 4.41103C5.73648 3.91574 6.29735 3.73843 7.41907 3.38381L11.3897 2.12854C11.6608 2.04285 11.7963 2 11.9354 2C12.0745 2 12.21 2.04285 12.4811 2.12854L16.7191 3.46833C17.7295 3.78776 18.2347 3.94748 18.4274 4.39586C18.62 4.84425 18.4131 5.37861 17.9991 6.44734L17.4698 7.81388Z',
  d6: 'M14.6315 18.1954L15.1382 17.7529L15.1382 17.7529C15.5591 17.3853 15.7695 17.2015 16.0303 17.1492C16.291 17.0969 16.5561 17.1852 17.0862 17.362L17.7344 17.578L17.7345 17.578C18.7325 17.9107 19.2315 18.0771 19.6745 18.3342C20.1082 18.5859 20.5015 18.9014 20.8413 19.2701C21.1884 19.6468 22 20 22 22H2C2 20 2.81222 19.6468 3.15934 19.2701C3.49913 18.9014 3.89244 18.5859 4.32608 18.3342C4.76908 18.0771 5.26811 17.9107 6.26617 17.578L6.91441 17.362C7.44456 17.1852 7.70964 17.0969 7.97036 17.1492C8.23109 17.2015 8.44154 17.3853 8.86245 17.7529L9.36915 18.1954C10.623 19.2905 11.2499 19.838 12.0003 19.838C12.7507 19.838 13.3776 19.2905 14.6315 18.1954Z',
  d7: 'M18.7152 6.67533L18.7151 6.67535L18.5076 7.21125C18.5874 7.23749 18.6666 7.26421 18.745 7.29141C19.1363 7.42713 19.3435 7.85441 19.2078 8.24575C19.0721 8.6371 18.6448 8.84432 18.2535 8.70859C17.9549 8.60506 17.6426 8.50844 17.3175 8.41947C15.772 7.99647 13.953 7.75 11.9992 7.75C10.1616 7.75 8.44273 7.96804 6.9583 8.34621C6.53285 8.4546 6.12756 8.57591 5.74498 8.70859C5.35364 8.84432 4.92636 8.6371 4.79063 8.24575C4.65491 7.85441 4.86213 7.42713 5.25347 7.29141C5.3953 7.24222 5.53947 7.1946 5.68588 7.14858L5.57383 6.93162C5.30374 6.40873 5.04442 5.90669 4.90536 5.51648C4.75642 5.09853 4.67243 4.6357 4.85041 4.15202C5.03296 3.65595 5.40511 3.36943 5.80083 3.17293C6.15687 2.99613 6.62509 2.84817 7.14177 2.6849L11.2181 1.39612C11.4323 1.32777 11.6761 1.25 11.9354 1.25C12.1948 1.25 12.4386 1.32777 12.6528 1.39612L16.9933 2.76843C17.457 2.91495 17.8824 3.04937 18.2106 3.21057C18.578 3.39103 18.9239 3.65147 19.1165 4.09978C19.3043 4.53685 19.2671 4.96919 19.1691 5.3679C19.078 5.73862 18.9079 6.17778 18.7152 6.67533Z',
  d8: 'M7.00098 7.25C7.41519 7.25 7.75098 7.58579 7.75098 8V9.72517C7.75098 11.2623 8.54095 12.6795 9.82029 13.4633L10.3348 13.7785C11.3611 14.4072 12.6409 14.4072 13.6672 13.7785L14.1817 13.4633C15.461 12.6795 16.251 11.2623 16.251 9.72517V8C16.251 7.58579 16.5868 7.25 17.001 7.25C17.4152 7.25 17.751 7.58579 17.751 8V9.72517C17.751 11.7745 16.698 13.6808 14.9652 14.7423L14.4507 15.0575C12.9436 15.9808 11.0584 15.9808 9.5512 15.0575L9.03671 14.7423C7.30399 13.6808 6.25098 11.7745 6.25098 9.72517V8C6.25098 7.58579 6.58676 7.25 7.00098 7.25Z',
  d9: 'M9.23892 13.2887C9.63163 13.4197 9.84386 13.8444 9.71296 14.2374L8.87138 16.7637L9.86353 17.6307C10.5048 18.1912 10.9336 18.564 11.2921 18.8051C11.633 19.0344 11.8308 19.0882 12 19.0882C12.1692 19.0882 12.367 19.0344 12.7079 18.8051C13.0664 18.564 13.4952 18.1912 14.1365 17.6307L15.1286 16.7637L14.287 14.2374C14.1561 13.8444 14.3684 13.4197 14.7611 13.2887C15.1538 13.1577 15.5783 13.3701 15.7092 13.763L16.59 16.4073L18.048 16.8936C18.9688 17.2006 19.5358 17.3897 20.0457 17.6858C20.544 17.9752 20.996 18.3381 21.3866 18.7621C21.5847 18.9772 21.8598 19.3948 22.0809 19.8018C22.2222 20.0612 22.3935 20.3756 22.4631 20.6966C22.5553 21.1215 22.4719 21.5119 22.2444 21.8947C21.9894 22.3239 21.6316 22.5633 21.1916 22.6685C20.8482 22.7507 20.4402 22.7505 20.0554 22.7502H20.0554H3.94462H3.9446C3.55983 22.7505 3.15184 22.7507 2.8084 22.6685C2.36836 22.5633 2.01063 22.3239 1.75557 21.8947C1.52812 21.5119 1.44472 21.1215 1.53687 20.6966C1.60649 20.3756 1.77777 20.0612 1.9191 19.8018C2.14019 19.3948 2.41532 18.9772 2.61344 18.7621C3.00395 18.3381 3.45598 17.9752 3.95435 17.6858C4.46416 17.3897 5.0312 17.2006 5.95203 16.8936L5.95203 16.8936L7.40997 16.4073L8.29083 13.763C8.42174 13.3701 8.84621 13.1577 9.23892 13.2887Z',
  d10: 'M19 7.99902H5',
  d11: 'M17.0002 7.99899L18.5002 4.49946L12.0002 2L5.5 4.49946L7 7.99899',
  d12: 'M17 7.99902V9.99869C17 12.7596 14.7614 14.9978 12 14.9978C9.23858 14.9978 7 12.7596 7 9.99869V7.99902',
  d13: 'M9.02519 14.0034V17.0468M9.02519 17.0468L12.0189 19.0097L15.0112 17.0011M9.02519 17.0468L2.36501 18.9077C2.14924 18.968 2 19.1649 2 19.3893V22.0018M15.0112 17.0011V13.998M15.0112 17.0011L21.6376 18.9058C21.8516 18.9673 21.999 19.1634 21.999 19.3864V22.0018',
  d14: 'M12.2694 1.29999C12.0961 1.23334 11.9042 1.23334 11.7309 1.29998L5.23078 3.79987C5.04055 3.87303 4.88828 4.02046 4.80902 4.20824C4.72977 4.39602 4.73035 4.60797 4.81064 4.79531L5.86261 7.25H5V8.75H6.98342C6.99469 8.75026 7.00598 8.75026 7.01729 8.75H16.9829C16.9942 8.75026 17.0055 8.75026 17.0167 8.75H19V7.25H18.1375L19.1895 4.79531C19.2698 4.60797 19.2704 4.39603 19.1911 4.20825C19.1119 4.02047 18.9596 3.87303 18.7694 3.79987L12.2694 1.29999Z',
  d15: 'M7.75 8V10C7.75 12.3472 9.65279 14.25 12 14.25C14.3472 14.25 16.25 12.3472 16.25 10V8H17.75V10C17.75 13.1756 15.1756 15.75 12 15.75C8.82436 15.75 6.25 13.1756 6.25 10V8H7.75Z',
  d16: 'M9.75 16.5986L12 18.0986L14.25 16.5986V14H15.75V16.4343L22.206 18.2789C22.528 18.3709 22.75 18.6651 22.75 19V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V19C1.25 18.6651 1.47198 18.3709 1.79396 18.2789L8.25 16.4343V14H9.75V16.5986Z',
};

export const IconPrisonGuardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-stroke-rounded IconPrisonGuardStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPrisonGuardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-duotone-rounded IconPrisonGuardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPrisonGuardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-twotone-rounded IconPrisonGuardTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPrisonGuardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-solid-rounded IconPrisonGuardSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrisonGuardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-bulk-rounded IconPrisonGuardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPrisonGuardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-stroke-sharp IconPrisonGuardStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrisonGuardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="prison-guard-solid-sharp IconPrisonGuardSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrisonGuard: TheIconSelfPack = {
  name: 'PrisonGuard',
  StrokeRounded: IconPrisonGuardStrokeRounded,
  DuotoneRounded: IconPrisonGuardDuotoneRounded,
  TwotoneRounded: IconPrisonGuardTwotoneRounded,
  SolidRounded: IconPrisonGuardSolidRounded,
  BulkRounded: IconPrisonGuardBulkRounded,
  StrokeSharp: IconPrisonGuardStrokeSharp,
  SolidSharp: IconPrisonGuardSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.8295 14.2542C19.1276 13.9312 19.2766 13.7698 19.435 13.6756C19.8171 13.4483 20.2876 13.4412 20.6761 13.6569C20.8372 13.7463 20.9908 13.9032 21.298 14.2171C21.6053 14.531 21.7589 14.6879 21.8464 14.8524C22.0575 15.2492 22.0506 15.7299 21.8281 16.1203C21.7359 16.2821 21.5779 16.4343 21.2617 16.7388L17.5003 20.3617C16.9012 20.9387 16.6016 21.2273 16.2272 21.3735C15.8528 21.5197 15.4413 21.509 14.6181 21.4874L14.5062 21.4845C14.2556 21.478 14.1303 21.4747 14.0574 21.392C13.9846 21.3094 13.9945 21.1817 14.0144 20.9265L14.0252 20.7879C14.0812 20.0694 14.1092 19.7102 14.2495 19.3873C14.3898 19.0644 14.6318 18.8022 15.1158 18.2778L18.8295 14.2542Z',
  d2: 'M22 10.5V9.71749C22 7.77787 22 6.80807 21.4142 6.2055C20.8284 5.60294 19.8856 5.60294 18 5.60294H15.9214C15.004 5.60294 14.9964 5.60116 14.1715 5.18834L10.8399 3.52114C9.44884 2.82504 8.75332 2.47699 8.01238 2.50118C7.27143 2.52537 6.59877 2.91808 5.25345 3.70351L4.02558 4.42037C3.03739 4.99729 2.54329 5.28576 2.27164 5.76564C2 6.24553 2 6.82993 2 7.99873V16.2157C2 17.7514 2 18.5193 2.34226 18.9467C2.57001 19.231 2.88916 19.4222 3.242 19.4856C3.77226 19.5808 4.42148 19.2018 5.71987 18.4437C6.60156 17.929 7.45011 17.3944 8.50487 17.5394C9.38869 17.6608 10.21 18.2185 11 18.6138',
  d3: 'M8 2.5L8 17.5',
  d4: 'M15 5.5V13.5',
  d5: 'M4.02558 4.42037L5.25345 3.70351C6.59128 2.92246 7.26392 2.52976 8 2.50162L8.01238 2.50118C8.75332 2.47699 9.44884 2.82504 10.8399 3.52114L14.1715 5.18834C14.9964 5.60116 15.004 5.60294 15.9214 5.60294H18C19.8856 5.60294 20.8284 5.60294 21.4142 6.2055C22 6.80807 22 7.77787 22 9.71749V15.4692C21.9999 15.2571 21.9488 15.0449 21.8464 14.8524C21.7589 14.6879 21.6053 14.531 21.298 14.2171C20.9908 13.9033 20.8372 13.7463 20.6761 13.6569C20.2876 13.4412 19.8171 13.4483 19.435 13.6756C19.2766 13.7698 19.1276 13.9312 18.8295 14.2542L15.1158 18.2778C14.9547 18.4523 14.8205 18.5977 14.7079 18.726L11 18.6138C10.8135 18.5205 10.6253 18.4181 10.4349 18.3146C9.81874 17.9795 9.18005 17.6322 8.50487 17.5394C7.49945 17.4012 6.68141 17.8805 5.84342 18.3714C5.8023 18.3955 5.76112 18.4197 5.71987 18.4437C4.42151 19.2018 3.77226 19.5808 3.242 19.4856C2.88916 19.4222 2.57001 19.231 2.34226 18.9467C2 18.5193 2 17.7514 2 16.2157V7.99873C2 6.82993 2 6.24553 2.27164 5.76564C2.54329 5.28576 3.03739 4.99729 4.02558 4.42037Z',
  d6: 'M19.1832 14.6018C19.5185 14.2387 19.6862 14.0572 19.8643 13.9513C20.2942 13.6958 20.8236 13.6878 21.2607 13.9303C21.4418 14.0308 21.6146 14.2072 21.9603 14.5601C22.3059 14.9129 22.4787 15.0894 22.5772 15.2743C22.8147 15.7205 22.8069 16.2609 22.5566 16.6997C22.4529 16.8816 22.2751 17.0528 21.9194 17.3951L17.6878 21.4682C17.0138 22.1169 16.6768 22.4413 16.2556 22.6057C15.8345 22.7701 15.3714 22.758 14.4454 22.7338L14.3194 22.7305C14.0375 22.7231 13.8966 22.7194 13.8146 22.6265C13.7327 22.5336 13.7439 22.3901 13.7662 22.1031L13.7784 21.9473C13.8414 21.1396 13.8728 20.7357 14.0307 20.3727C14.1885 20.0096 14.4607 19.7149 15.0052 19.1253L19.1832 14.6018Z',
  d7: 'M8.75 17.1732C8.75 17.3756 8.75 17.4768 8.7977 17.5509C8.84539 17.625 8.9445 17.6702 9.14273 17.7604C9.364 17.8612 9.6448 17.9991 10.0237 18.1873L12.4168 19.3765C12.5774 19.4563 12.6578 19.4962 12.7304 19.4771C12.803 19.458 12.8574 19.3777 12.966 19.2171C13.2081 18.8592 13.5045 18.5396 13.8018 18.219L13.9031 18.1096L14.1438 17.8489C14.1963 17.7921 14.2225 17.7637 14.2363 17.7286C14.25 17.6935 14.25 17.6548 14.25 17.5775L14.25 4.07791C14.25 3.89718 14.25 3.80681 14.205 3.73426C14.16 3.66171 14.0791 3.62148 13.9171 3.54101L11.1426 2.16234C10.4736 1.82991 9.92553 1.55757 9.45232 1.37512C9.16028 1.26251 9.01425 1.20621 8.88544 1.29067L8.87522 1.29767C8.75 1.38737 8.75 1.55625 8.75 1.89401L8.75 17.1732Z',
  d8: 'M22.75 12.2671C22.75 12.6379 22.75 12.8234 22.6508 12.8812C22.5516 12.9391 22.3688 12.8358 22.0032 12.6291C21.9982 12.6262 21.9932 12.6234 21.9882 12.6206C21.0843 12.1191 19.986 12.1359 19.0978 12.6638C18.7221 12.8871 18.4054 13.2324 18.1545 13.5061L18.081 13.586L16.4438 15.3586C16.1508 15.6759 16.0043 15.8346 15.8771 15.7848C15.75 15.7351 15.75 15.5191 15.75 15.0873L15.75 4.33759C15.75 4.24312 15.8268 4.16662 15.9214 4.16662L18.0529 4.16662C18.9506 4.16659 19.7008 4.16657 20.2966 4.24839C20.9275 4.33502 21.4955 4.52579 21.9503 4.99029C22.4028 5.45251 22.5866 6.02601 22.6704 6.66247C22.7501 7.2678 22.75 8.03116 22.75 8.9505V12.2671Z',
  d9: 'M7.25 1.9569C7.25 1.62958 7.25 1.46593 7.13415 1.37591C7.1208 1.36553 7.10282 1.35404 7.08779 1.34627C6.95744 1.27892 6.81999 1.34235 6.54509 1.46923C6.08426 1.68193 5.55431 1.98915 4.90724 2.36428L3.6187 3.11126C3.15062 3.38259 2.75247 3.61339 2.44084 3.83827C2.10848 4.07811 1.82705 4.34344 1.61998 4.70668C1.4134 5.06905 1.32728 5.44743 1.28746 5.85746C1.24997 6.24357 1.24999 6.70959 1.25 7.26037V15.494C1.24999 16.2226 1.24998 16.8251 1.29639 17.2962C1.34327 17.772 1.44676 18.25 1.75833 18.6363C2.09802 19.0575 2.57688 19.3438 3.11024 19.4389C3.60335 19.5268 4.0707 19.379 4.5015 19.1846C4.92742 18.9925 5.49919 18.661 6.11822 18.3021C6.40134 18.138 6.6546 17.9912 6.89091 17.8691C7.07195 17.7757 7.16247 17.7289 7.20624 17.6571C7.25 17.5853 7.25 17.4908 7.25 17.3017L7.25 1.9569Z',
  d10: 'M22 10.7488V5.74902H15L8.01175 2.75L2 5.83199V19.749L8.01175 17.749L11 19.0318',
  d11: 'M8 2.75V17.75',
  d12: 'M15 5.75V12.75',
  d13: 'M16.5017 20.7459H14.001V18.2459L19.4955 12.7529C19.4994 12.749 19.5058 12.749 19.5097 12.7529L21.9962 15.2388C22.0002 15.2427 22.0002 15.249 21.9962 15.2529L16.5017 20.7459Z',
  d14: 'M13.75 19.75V22.25H16.25L22.75 15.75L20.25 13.25L13.75 19.75Z',
  d15: 'M12.25 20.1357L8.75 18.6333L8.75 1.75L14.25 4.11034V17.1289L12.25 19.1289V20.1357Z',
  d16: 'M22.75 13.6289V5.24835C22.75 4.83413 22.4142 4.49835 22 4.49835H15.75V15.6289L20.25 11.1289L22.75 13.6289Z',
  d17: 'M1.65785 4.66391L7.25 1.79703L7.25 18.544L2.23675 20.2118C2.00807 20.2879 1.75676 20.2495 1.56129 20.1085C1.36582 19.9675 1.25 19.7412 1.25 19.5002V5.33131C1.25 5.04995 1.40747 4.79226 1.65785 4.66391Z',
};

export const IconMapsEditingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-stroke-rounded IconMapsEditingStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMapsEditingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-duotone-rounded IconMapsEditingDuotoneRounded"
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

export const IconMapsEditingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-twotone-rounded IconMapsEditingTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMapsEditingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-solid-rounded IconMapsEditingSolidRounded"
    >
      <path 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsEditingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-bulk-rounded IconMapsEditingBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconMapsEditingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-stroke-sharp IconMapsEditingStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsEditingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-editing-solid-sharp IconMapsEditingSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapsEditing: TheIconSelfPack = {
  name: 'MapsEditing',
  StrokeRounded: IconMapsEditingStrokeRounded,
  DuotoneRounded: IconMapsEditingDuotoneRounded,
  TwotoneRounded: IconMapsEditingTwotoneRounded,
  SolidRounded: IconMapsEditingSolidRounded,
  BulkRounded: IconMapsEditingBulkRounded,
  StrokeSharp: IconMapsEditingStrokeSharp,
  SolidSharp: IconMapsEditingSolidSharp,
};
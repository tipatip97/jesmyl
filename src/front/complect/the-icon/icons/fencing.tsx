import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.88673 15.6009L2.72303 18.5907C2.56872 18.7001 2.42869 18.8285 2.30621 18.9728C1.33417 20.1179 2.8868 21.6661 4.03001 20.6924C4.17151 20.5719 4.29775 20.4344 4.40576 20.283L7.38448 16.0995M9.01217 14.006C7.05577 12.0464 4.94319 13.6542 4.94319 13.6542C4.94319 13.6542 5.9327 14.6453 7.15333 15.868C8.37395 17.0906 9.31531 18.0335 9.31531 18.0335C9.31531 18.0335 10.9686 15.9657 9.01217 14.006ZM9.01217 14.006L20 3',
  d2: 'M17.1133 15.6009L21.277 18.5907C21.4313 18.7001 21.5713 18.8285 21.6938 18.9728C22.6658 20.1179 21.1132 21.666 19.97 20.6924C19.8285 20.5719 19.7023 20.4344 19.5942 20.283L16.6155 16.0995M14.9878 14.006C16.9442 12.0464 19.0568 13.6542 19.0568 13.6542C19.0568 13.6542 18.0673 14.6453 16.8467 15.868C15.626 17.0906 14.6847 18.0335 14.6847 18.0335C14.6847 18.0335 13.0314 15.9657 14.9878 14.006ZM14.9878 14.006L4 3',
  d3: 'M9.02668 13.9743C7.8409 12.7885 6.03854 12.6684 5.00098 13.7059L9.29506 18C10.3326 16.9624 10.2125 15.1601 9.02668 13.9743Z',
  d4: 'M14.9753 13.9743C16.1611 12.7885 17.9634 12.6684 19.001 13.7059L14.7069 18C13.6694 16.9624 13.7895 15.1601 14.9753 13.9743Z',
  d5: 'M4.19932 20.6055L7.36725 16.073L6.88017 15.5859L2.40796 18.8197C1.1253 19.8681 3.19492 21.8448 4.19932 20.6055Z',
  d6: 'M19.8026 20.6055L16.6346 16.073L17.1217 15.5859L21.5939 18.8197C22.8766 19.8681 20.8069 21.8448 19.8026 20.6055Z',
  d7: 'M6.88771 15.6009L2.72401 18.5907C2.5697 18.7001 2.42967 18.8285 2.30719 18.9728C1.33515 20.1179 2.88778 21.6661 4.03099 20.6924C4.17249 20.5719 4.29873 20.4344 4.40674 20.283L7.38546 16.0995M9.01315 14.006C7.05675 12.0464 4.94417 13.6542 4.94417 13.6542C4.94417 13.6542 5.93368 14.6453 7.15431 15.868C8.37493 17.0906 9.31629 18.0335 9.31629 18.0335C9.31629 18.0335 10.9696 15.9657 9.01315 14.006ZM9.01315 14.006L20.001 3',
  d8: 'M17.1143 15.6009L21.278 18.5907C21.4323 18.7001 21.5723 18.8285 21.6948 18.9728C22.6668 20.1179 21.1142 21.666 19.971 20.6924C19.8295 20.5719 19.7033 20.4344 19.5952 20.283L16.6165 16.0995M14.9888 14.006C16.9452 12.0464 19.0578 13.6542 19.0578 13.6542C19.0578 13.6542 18.0683 14.6453 16.8477 15.868C15.627 17.0906 14.6857 18.0335 14.6857 18.0335C14.6857 18.0335 13.0324 15.9657 14.9888 14.006ZM14.9888 14.006L4.00098 3',
  d9: 'M4.46967 13.1766C5.86443 11.7819 8.1461 12.0351 9.55603 13.445C10.966 14.8549 11.2192 17.1366 9.82441 18.5314C9.53152 18.8242 9.05665 18.8242 8.76375 18.5314L7.46853 17.2361L4.81308 21.0354C4.8029 21.0499 4.79221 21.0641 4.78102 21.0779C4.36803 21.5875 3.80462 21.7924 3.24935 21.7441C2.72811 21.6988 2.26043 21.438 1.92159 21.1078C1.58311 20.778 1.30731 20.3142 1.25779 19.7854C1.20478 19.2193 1.42152 18.6567 1.93236 18.2392C1.94382 18.2299 1.95554 18.2209 1.96752 18.2122L5.72651 15.4941L4.46967 14.2373C4.32902 14.0966 4.25 13.9059 4.25 13.7069C4.25 13.508 4.32902 13.3173 4.46967 13.1766Z',
  d10: 'M20.4568 2.54289C20.8473 2.93342 20.8473 3.56658 20.4568 3.95711L9.4825 14.9314C9.09197 15.3219 8.45881 15.3219 8.06828 14.9314C7.67776 14.5409 7.67776 13.9077 8.06828 13.5172L19.0426 2.54289C19.4331 2.15237 20.0663 2.15237 20.4568 2.54289Z',
  d11: 'M19.5303 13.1766C18.1356 11.7819 15.8539 12.0351 14.444 13.445C13.034 14.8549 12.7808 17.1366 14.1756 18.5314C14.4685 18.8242 14.9434 18.8242 15.2362 18.5314L16.5315 17.2361L19.1869 21.0354C19.1971 21.0499 19.2078 21.0641 19.219 21.0779C19.632 21.5875 20.1954 21.7924 20.7507 21.7441C21.2719 21.6988 21.7396 21.438 22.0784 21.1078C22.4169 20.778 22.6927 20.3142 22.7422 19.7854C22.7952 19.2193 22.5785 18.6567 22.0676 18.2392C22.0562 18.2299 22.0445 18.2209 22.0325 18.2122L18.2735 15.4941L19.5303 14.2373C19.671 14.0966 19.75 13.9059 19.75 13.7069C19.75 13.508 19.671 13.3173 19.5303 13.1766Z',
  d12: 'M3.5432 2.54289C3.15268 2.93342 3.15268 3.56658 3.5432 3.95711L14.5175 14.9314C14.908 15.3219 15.5412 15.3219 15.9317 14.9314C16.3222 14.5409 16.3222 13.9077 15.9317 13.5172L4.95742 2.54289C4.56689 2.15237 3.93373 2.15237 3.5432 2.54289Z',
  d13: 'M9.55603 13.445C8.1461 12.0351 5.86443 11.7819 4.46967 13.1766C4.32902 13.3173 4.25 13.508 4.25 13.7069C4.25 13.9059 4.32902 14.0966 4.46967 14.2373L5.72651 15.4941L1.96752 18.2122C1.95554 18.2209 1.94382 18.2299 1.93236 18.2392C1.42152 18.6567 1.20478 19.2193 1.25779 19.7854C1.30731 20.3142 1.58311 20.778 1.92159 21.1078C2.26043 21.438 2.72811 21.6988 3.24935 21.7441C3.80462 21.7924 4.36803 21.5875 4.78102 21.0779C4.79221 21.0641 4.8029 21.0499 4.81308 21.0354L7.46853 17.2361L8.76375 18.5314C9.05665 18.8242 9.53152 18.8242 9.82441 18.5314C11.2192 17.1366 10.966 14.8549 9.55603 13.445ZM14.444 13.445C15.8539 12.0351 18.1356 11.7819 19.5303 13.1766C19.671 13.3173 19.75 13.508 19.75 13.7069C19.75 13.9059 19.671 14.0966 19.5303 14.2373L18.2735 15.4941L22.0325 18.2122C22.0445 18.2209 22.0562 18.2299 22.0676 18.2392C22.5785 18.6567 22.7952 19.2193 22.7422 19.7854C22.6927 20.3142 22.4169 20.778 22.0784 21.1078C21.7396 21.438 21.2719 21.6988 20.7507 21.7441C20.1954 21.7924 19.632 21.5875 19.219 21.0779C19.2078 21.0641 19.1971 21.0499 19.1869 21.0354L16.5315 17.2361L15.2362 18.5314C14.9434 18.8242 14.4685 18.8242 14.1756 18.5314C12.7808 17.1366 13.034 14.8549 14.444 13.445Z',
  d14: 'M3.54326 2.54289C3.15273 2.93342 3.15273 3.56658 3.54326 3.95711L10.5858 10.9997L8.76187 12.8237C9.04636 12.995 9.31407 13.203 9.55609 13.445C9.79764 13.6865 10.0052 13.9537 10.1764 14.2375L12.0001 12.4139L13.8237 14.2375C13.9949 13.9537 14.2025 13.6865 14.444 13.445C14.686 13.203 14.9537 12.995 15.2382 12.8237L13.4143 10.9997L20.4569 3.95711C20.8474 3.56658 20.8474 2.93342 20.4569 2.54289C20.0663 2.15237 19.4332 2.15237 19.0426 2.54289L12.0001 9.58548L4.95747 2.54289C4.56695 2.15237 3.93378 2.15237 3.54326 2.54289Z',
  d15: 'M9.0257 13.9743C7.83992 12.7885 6.03756 12.6684 5 13.7059L9.29408 18C10.3316 16.9624 10.2115 15.1601 9.0257 13.9743ZM9.0257 13.9743L20 3M7.36628 16.0722L4.19835 20.6047C3.19395 21.844 1.12433 19.8672 2.40699 18.8189L6.8792 15.5851',
  d16: 'M14.9743 13.9743C16.1601 12.7885 17.9624 12.6684 19 13.7059L14.7059 18C13.6684 16.9624 13.7885 15.1601 14.9743 13.9743ZM14.9743 13.9743L4 3M16.6337 16.0722L19.8017 20.6047C20.806 21.844 22.8757 19.8672 21.593 18.8189L17.1208 15.5851',
  d17: 'M10.1605 14.2106L20.7069 3.66421L19.2927 2.25L8.73562 12.807C7.36654 11.9961 5.61768 12.0276 4.46967 13.1756L3.93934 13.706L5.72651 15.4931L1.94954 18.2242L1.93236 18.2383C1.42152 18.6558 1.20478 19.2183 1.25779 19.7845C1.30731 20.3132 1.58311 20.777 1.92159 21.1069C2.26043 21.4371 2.72811 21.6978 3.24935 21.7432C3.80462 21.7915 4.36803 21.5866 4.78102 21.077L4.79781 21.0563L7.46853 17.2352L9.29408 19.0607L9.82441 18.5304C10.9875 17.3673 11.0046 15.5873 10.1605 14.2106Z',
  d18: 'M13.8394 14.2106L3.29309 3.66421L4.7073 2.25L15.2643 12.807C16.6334 11.9961 18.3823 12.0276 19.5303 13.1756L20.0606 13.706L18.2735 15.4931L22.0504 18.2242L22.0676 18.2383C22.5784 18.6558 22.7952 19.2183 22.7422 19.7845C22.6927 20.3132 22.4169 20.777 22.0784 21.1069C21.7395 21.4371 21.2718 21.6978 20.7506 21.7432C20.1953 21.7915 19.6319 21.5866 19.2189 21.077L19.2022 21.0563L16.5314 17.2352L14.7059 19.0607L14.1755 18.5304C13.0124 17.3673 12.9953 15.5873 13.8394 14.2106Z',
} as const;

export const IconFencingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-stroke-rounded IconFencingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFencingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-duotone-rounded IconFencingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFencingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-twotone-rounded IconFencingTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFencingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-solid-rounded IconFencingSolidRounded"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFencingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-bulk-rounded IconFencingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconFencingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-stroke-sharp IconFencingStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFencingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="fencing-solid-sharp IconFencingSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFencing: TheIconSelfPack = {
  name: 'Fencing',
  StrokeRounded: IconFencingStrokeRounded,
  DuotoneRounded: IconFencingDuotoneRounded,
  TwotoneRounded: IconFencingTwotoneRounded,
  SolidRounded: IconFencingSolidRounded,
  BulkRounded: IconFencingBulkRounded,
  StrokeSharp: IconFencingStrokeSharp,
  SolidSharp: IconFencingSolidSharp,
};
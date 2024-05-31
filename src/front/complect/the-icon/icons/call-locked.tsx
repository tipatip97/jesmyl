import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M15.7424 6.18216L15.7424 4.79302C15.7424 4.58783 15.751 4.38009 15.8244 4.18848C16.0198 3.67844 16.5374 3.01025 17.4797 3.01025C18.4221 3.01025 18.96 3.67844 19.1554 4.18848C19.2289 4.38009 19.2374 4.58783 19.2374 4.79302L19.2374 6.18216M15.8117 12H19.1884C20.1825 12 20.9884 11.1941 20.9884 10.2V8.20039C20.9884 7.20628 20.1825 6.40039 19.1884 6.40039H15.8117C14.8176 6.40039 14.0117 7.20628 14.0117 8.20039V10.2C14.0117 11.1941 14.8176 12 15.8117 12Z',
  d3: 'M6.05008 13.9424C5.10206 12.2893 4.64431 10.9395 4.3683 9.57121C3.96008 7.54758 4.89427 5.57081 6.44184 4.30947C7.09591 3.77638 7.84569 3.95852 8.23246 4.6524L9.10564 6.21891C9.79775 7.46057 10.1438 8.08139 10.0752 8.73959C10.0065 9.39779 9.53983 9.93386 8.60643 11.006L6.05008 13.9424Z',
  d4: 'M14.3301 22.2226C15.9832 23.1706 17.333 23.6284 18.7013 23.9044C20.7249 24.3126 22.7017 23.3784 23.963 21.8308C24.4961 21.1768 24.314 20.427 23.6201 20.0402L22.0536 19.167C20.8119 18.4749 20.1911 18.1289 19.5329 18.1975C18.8747 18.2661 18.3386 18.7328 17.2665 19.6662L14.3301 22.2226Z',
  d5: 'M6.05008 13.9424C5.10206 12.2893 4.64431 10.9395 4.3683 9.57121C3.96008 7.54758 4.89427 5.57081 6.44184 4.30947C7.09591 3.77638 7.84569 3.95852 8.23246 4.6524L9.10564 6.21891C9.79775 7.46057 10.1438 8.08139 10.0752 8.73959C10.0065 9.39779 9.53983 9.93386 8.60643 11.006L6.05008 13.9424ZM6.05008 13.9424C7.96897 17.2883 10.9803 20.3013 14.3301 22.2224M14.3301 22.2224C15.9832 23.1704 17.333 23.6282 18.7013 23.9042C20.7249 24.3124 22.7017 23.3782 23.963 21.8306C24.4961 21.1766 24.314 20.4268 23.6201 20.04L22.0536 19.1668C20.8119 18.4747 20.1911 18.1287 19.5329 18.1973C18.8747 18.2659 18.3386 18.7326 17.2665 19.666L14.3301 22.2224Z',
  d6: 'M18.0149 8.18216V6.79301C18.0149 6.58782 18.0235 6.38008 18.0969 6.18847C18.2923 5.67843 18.8099 5.01025 19.7522 5.01025C20.6946 5.01025 21.2325 5.67843 21.4279 6.18847C21.5013 6.38008 21.5099 6.58782 21.5099 6.79301V8.18216M18.0842 14H21.4609C22.455 14 23.2609 13.1941 23.2609 12.2V10.2004C23.2609 9.20627 22.455 8.40038 21.4609 8.40038H18.0842C17.0901 8.40038 16.2842 9.20627 16.2842 10.2004V12.2C16.2842 13.1941 17.0901 14 18.0842 14Z',
  d7: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d8: 'M20.002 5.74918V4.6875C20.002 3.31583 18.8567 2.25 17.502 2.25C16.1472 2.25 15.002 3.31583 15.002 4.6875V5.74918C14.9268 5.77196 14.8522 5.79929 14.778 5.8322C14.1578 6.10744 13.6809 6.62765 13.4356 7.26203C13.3297 7.53595 13.289 7.81726 13.2701 8.11392C13.2519 8.39939 13.2519 8.74715 13.252 9.16389V9.2111C13.2519 9.62784 13.2519 9.97561 13.2701 10.2611C13.289 10.5577 13.3297 10.839 13.4356 11.113C13.6809 11.7474 14.1578 12.2676 14.778 12.5428C15.0504 12.6637 15.3292 12.7093 15.6148 12.7302C15.8864 12.75 16.2154 12.75 16.6008 12.75H18.4031C18.7885 12.75 19.1175 12.75 19.3892 12.7302C19.6747 12.7093 19.9536 12.6637 20.2259 12.5428C20.8461 12.2676 21.323 11.7474 21.5683 11.113C21.6742 10.839 21.7149 10.5577 21.7338 10.2611C21.752 9.97561 21.752 9.62785 21.752 9.2111V9.16392C21.752 8.74717 21.752 8.39939 21.7338 8.11392C21.7149 7.81726 21.6742 7.53595 21.5683 7.26203C21.323 6.62765 20.8461 6.10744 20.2259 5.8322C20.1517 5.79929 20.0771 5.77196 20.002 5.74918ZM16.502 4.6875C16.502 4.19521 16.9237 3.75 17.502 3.75C18.0802 3.75 18.502 4.19521 18.502 4.6875V5.62501H16.502V4.6875Z',
  d9: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d10: 'M20 5.74918V4.6875C20 3.31583 18.8548 2.25 17.5 2.25C16.1452 2.25 15 3.31583 15 4.6875V5.74918C14.9249 5.77196 14.8502 5.79929 14.7761 5.8322C14.1559 6.10744 13.6789 6.62765 13.4337 7.26203C13.3278 7.53595 13.2871 7.81726 13.2682 8.11392C13.25 8.39939 13.25 8.74715 13.25 9.16389V9.2111C13.25 9.62784 13.25 9.97561 13.2682 10.2611C13.2871 10.5577 13.3278 10.839 13.4337 11.113C13.6789 11.7474 14.1559 12.2676 14.7761 12.5428C15.0484 12.6637 15.3272 12.7093 15.6128 12.7302C15.8844 12.75 16.2134 12.75 16.5989 12.75H18.4011C18.7866 12.75 19.1156 12.75 19.3872 12.7302C19.6728 12.7093 19.9516 12.6637 20.2239 12.5428C20.8441 12.2676 21.3211 11.7474 21.5663 11.113C21.6722 10.839 21.7129 10.5577 21.7318 10.2611C21.75 9.97561 21.75 9.62785 21.75 9.2111V9.16392C21.75 8.74717 21.75 8.39939 21.7318 8.11392C21.7129 7.81726 21.6722 7.53595 21.5663 7.26203C21.3211 6.62765 20.8441 6.10744 20.2239 5.8322C20.1498 5.79929 20.0751 5.77196 20 5.74918ZM16.5 4.6875C16.5 4.19521 16.9218 3.75 17.5 3.75C18.0782 3.75 18.5 4.19521 18.5 4.6875V5.62501H16.5V4.6875Z',
  d11: 'M19.4996 5.49805V3.99805C19.4996 2.89348 18.6042 1.99805 17.4996 1.99805C16.395 1.99805 15.4996 2.89348 15.4996 3.99805V5.49805M13.9996 5.49805H20.9996V10.998H13.9996V5.49805Z',
  d12: 'M3.77685 11.9812L7.99158 8.01246L5.00618 2.00355C5.00336 1.99786 4.99593 1.99629 4.99095 2.00023C2.8245 3.71561 1.79846 5.55375 2.03096 7.16793C2.33413 9.27274 3.52878 12.5921 6.66532 15.8698C7.79383 17.2216 9.78575 19.0186 12.0897 20.2616M12.0897 20.2616C14.5042 21.5642 17.2649 22.8058 19.6019 21.3389C20.1167 21.0158 21.5157 19.7631 21.9997 19.0439C22.003 19.0389 22.0011 19.0324 21.9957 19.0297L16.0058 16.0189L12.0897 20.2616Z',
  d13: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d14: 'M17.5 1.25C15.9812 1.25 14.75 2.48122 14.75 4V4.75H13.25V11.75H21.75V4.75H20.25V4C20.25 2.48122 19.0188 1.25 17.5 1.25ZM18.75 4V4.75H16.25V4C16.25 3.30964 16.8096 2.75 17.5 2.75C18.1904 2.75 18.75 3.30964 18.75 4Z',
} as const;

export const IconCallLockedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-stroke-rounded IconCallLockedStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCallLockedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-duotone-rounded IconCallLockedDuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallLockedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-twotone-rounded IconCallLockedTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallLockedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-solid-rounded IconCallLockedSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconCallLockedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-bulk-rounded IconCallLockedBulkRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconCallLockedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-stroke-sharp IconCallLockedStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallLockedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-locked-solid-sharp IconCallLockedSolidSharp"
    >
      <path 
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

export const iconPackOfCallLocked: TheIconSelfPack = {
  name: 'CallLocked',
  StrokeRounded: IconCallLockedStrokeRounded,
  DuotoneRounded: IconCallLockedDuotoneRounded,
  TwotoneRounded: IconCallLockedTwotoneRounded,
  SolidRounded: IconCallLockedSolidRounded,
  BulkRounded: IconCallLockedBulkRounded,
  StrokeSharp: IconCallLockedStrokeSharp,
  SolidSharp: IconCallLockedSolidSharp,
};
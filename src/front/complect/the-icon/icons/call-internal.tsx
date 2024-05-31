import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7',
  d3: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d4: 'M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d5: 'M5.19226 1.28657C5.75895 1.40369 6.21024 1.78443 6.49064 2.28746L7.38385 3.88991C7.71286 4.48011 7.98973 4.9768 8.17054 5.40857C8.36235 5.86658 8.47626 6.31824 8.42419 6.8176C8.37211 7.31696 8.16746 7.7354 7.88529 8.14399C7.61928 8.52917 7.24588 8.95804 6.80218 9.46767L5.48917 10.9759C5.25389 11.2461 5.13624 11.3812 5.12549 11.5501C5.11474 11.719 5.21116 11.8633 5.404 12.1518C7.04759 14.6109 9.26273 16.8268 11.7238 18.4718C12.0124 18.6647 12.1566 18.7611 12.3255 18.7503C12.4944 18.7396 12.6296 18.6219 12.8998 18.3866L14.4081 17.0736C14.9177 16.6299 15.3466 16.2565 15.7318 15.9905C16.1403 15.7083 16.5588 15.5036 17.0581 15.4516C17.5575 15.3995 18.0092 15.5134 18.4672 15.7052C18.8989 15.886 19.3956 16.1629 19.9857 16.4918L21.5883 17.3851C22.0913 17.6655 22.4721 18.1168 22.5892 18.6835C22.7075 19.2561 22.533 19.8316 22.1474 20.3047C20.7485 22.021 18.5072 23.1139 16.156 22.6396C14.7108 22.348 13.2848 21.8623 11.5601 20.8732C8.0947 18.8858 4.98763 15.777 3.00255 12.3157C2.01343 10.591 1.52772 9.165 1.23618 7.71974C0.76188 5.36852 1.85471 3.12724 3.57108 1.72833C4.04411 1.34279 4.61966 1.16822 5.19226 1.28657Z',
  d6: 'M19.4559 2.2568C19.8664 1.88729 20.4987 1.92049 20.8682 2.33095C20.9126 2.38031 21.0185 2.47838 21.2158 2.65547L21.2584 2.69368C21.427 2.84497 21.6321 3.02893 21.8284 3.21903C22.0381 3.42205 22.2688 3.66149 22.4532 3.90892C22.6022 4.10884 22.875 4.50898 22.875 5.00001C22.875 5.49103 22.6022 5.89117 22.4532 6.09109C22.2688 6.33853 22.0381 6.57797 21.8284 6.78098C21.6321 6.9711 21.427 7.15509 21.2583 7.30639L21.2158 7.34455C21.0185 7.52164 20.9126 7.61971 20.8682 7.66906C20.4987 8.07953 19.8664 8.11273 19.4559 7.74322C19.2367 7.54584 19.1251 7.27348 19.125 7V6.00001H14.625V7C14.6249 7.27348 14.5133 7.54584 14.2941 7.74322C13.8836 8.11273 13.2513 8.07953 12.8818 7.66906C12.8374 7.61971 12.7315 7.52164 12.5342 7.34455L12.4917 7.30637C12.323 7.15508 12.1179 6.9711 11.9216 6.78098C11.7119 6.57797 11.4812 6.33853 11.2968 6.09109C11.1478 5.89117 10.875 5.49103 10.875 5.00001C10.875 4.50898 11.1478 4.10884 11.2968 3.90892C11.4812 3.66149 11.7119 3.42205 11.9216 3.21903C12.1179 3.02892 12.323 2.84495 12.4917 2.69366L12.5342 2.65547C12.7315 2.47838 12.8374 2.38031 12.8818 2.33095C13.2513 1.92049 13.8836 1.88729 14.2941 2.2568C14.5135 2.45433 14.6251 2.72697 14.625 3.00066V4.00001L19.125 4.00001V3C19.1251 2.72653 19.2367 2.45417 19.4559 2.2568Z',
  d7: 'M5.19226 1.28657C5.75895 1.40369 6.21024 1.78443 6.49064 2.28746L7.38385 3.88991C7.71286 4.48011 7.98973 4.9768 8.17054 5.40857C8.36235 5.86658 8.47626 6.31824 8.42419 6.8176C8.37211 7.31696 8.16746 7.7354 7.88529 8.14399C7.61928 8.52917 7.24588 8.95804 6.80218 9.46767L5.48917 10.9759C5.25389 11.2461 5.13624 11.3812 5.12549 11.5501C5.11474 11.719 5.21116 11.8633 5.404 12.1518C7.04759 14.6109 9.26273 16.8268 11.7238 18.4718C12.0124 18.6647 12.1566 18.7611 12.3255 18.7503C12.4944 18.7396 12.6296 18.6219 12.8998 18.3866L14.4081 17.0736C14.9177 16.6299 15.3466 16.2565 15.7318 15.9905C16.1403 15.7083 16.5588 15.5036 17.0581 15.4516C17.5575 15.3995 18.0092 15.5134 18.4672 15.7052C18.8989 15.886 19.3956 16.1629 19.9857 16.4918L19.9859 16.4919L21.5883 17.3851C22.0913 17.6655 22.4721 18.1168 22.5892 18.6835C22.7075 19.2561 22.533 19.8316 22.1474 20.3047C20.7485 22.021 18.5072 23.1139 16.156 22.6396C14.7108 22.348 13.2848 21.8623 11.5601 20.8732C8.0947 18.8858 4.98763 15.777 3.00255 12.3157C2.01343 10.591 1.52772 9.165 1.23618 7.71974C0.76188 5.36852 1.85471 3.12724 3.57108 1.72833C4.04411 1.34279 4.61966 1.16822 5.19226 1.28657Z',
  d8: 'M18.9996 2L21.9996 5L18.9996 8M14.9996 2L11.9996 5L14.9996 8M21.7155 5H12.3428',
  d9: 'M3.77685 11.9812L7.99158 8.01246L5.00618 2.00355C5.00336 1.99786 4.99593 1.99629 4.99095 2.00023C2.8245 3.71561 1.79846 5.55375 2.03096 7.16793C2.33413 9.27274 3.52878 12.5921 6.66532 15.8698C7.79383 17.2216 9.78575 19.0186 12.0897 20.2616M12.0897 20.2616C14.5042 21.5642 17.2649 22.8058 19.6019 21.3389C20.1167 21.0158 21.5157 19.7631 21.9997 19.0439C22.003 19.0389 22.0011 19.0324 21.9957 19.0297L16.0058 16.0189L12.0897 20.2616Z',
  d10: 'M5.08286 11.7457C5.94792 13.1708 7.02532 14.5303 8.24804 15.7521C9.46969 16.9746 10.8291 18.0523 12.2539 18.9174L15.8317 15.0788L22.7499 19.0189C21.7458 20.8831 19.3378 23.2672 16.2783 22.6508C14.8325 22.3591 13.4058 21.8729 11.6805 20.8831C9.94391 19.8868 8.30427 18.6143 6.8475 17.1565C5.38965 15.6997 4.11312 14.056 3.1168 12.3194C2.12693 10.5941 1.6408 9.16735 1.34903 7.72156C0.732719 4.66214 3.1168 2.25408 4.98097 1.25L8.92105 8.16817L5.08286 11.7457Z',
  d11: 'M19.0431 1.25L22.7502 4.95711L19.0431 8.66421L17.6289 7.25L18.9218 5.95711H13.7502L15.0431 7.25L13.6289 8.66421L9.92175 4.95711L13.6289 1.25L15.0431 2.66421L13.7502 3.95711L18.9218 3.95711L17.6289 2.66421L19.0431 1.25Z',
} as const;

export const IconCallInternalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-stroke-rounded IconCallInternalStrokeRounded"
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

export const IconCallInternalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-duotone-rounded IconCallInternalDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconCallInternalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-twotone-rounded IconCallInternalTwotoneRounded"
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

export const IconCallInternalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-solid-rounded IconCallInternalSolidRounded"
    >
      <path 
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

export const IconCallInternalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-bulk-rounded IconCallInternalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallInternalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-stroke-sharp IconCallInternalStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallInternalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="call-internal-solid-sharp IconCallInternalSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCallInternal: TheIconSelfPack = {
  name: 'CallInternal',
  StrokeRounded: IconCallInternalStrokeRounded,
  DuotoneRounded: IconCallInternalDuotoneRounded,
  TwotoneRounded: IconCallInternalTwotoneRounded,
  SolidRounded: IconCallInternalSolidRounded,
  BulkRounded: IconCallInternalBulkRounded,
  StrokeSharp: IconCallInternalStrokeSharp,
  SolidSharp: IconCallInternalSolidSharp,
};
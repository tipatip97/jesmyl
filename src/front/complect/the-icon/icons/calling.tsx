import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M14 6.83185C15.4232 7.43624 16.5638 8.57677 17.1682 10M14.654 2C18.1912 3.02076 20.9791 5.80852 22 9.34563',
  d3: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d4: 'M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d5: 'M5.19238 1.41157C5.75907 1.52869 6.21037 1.90943 6.49076 2.41246L7.38397 4.01491C7.71298 4.60511 7.98985 5.1018 8.17067 5.53357C8.36247 5.99158 8.47639 6.44324 8.42431 6.9426C8.37224 7.44196 8.16758 7.8604 7.88541 8.26899C7.6194 8.65417 7.24601 9.08304 6.8023 9.59267L5.4893 11.1009C5.25401 11.3711 5.13636 11.5062 5.12561 11.6751C5.11486 11.844 5.21128 11.9883 5.40413 12.2768C7.04771 14.7359 9.26285 16.9518 11.7239 18.5968C12.0125 18.7897 12.1567 18.8861 12.3256 18.8753C12.4945 18.8646 12.6297 18.7469 12.8999 18.5116L14.4082 17.1986C14.9178 16.7549 15.3467 16.3815 15.7319 16.1155C16.1405 15.8333 16.5589 15.6286 17.0583 15.5766C17.5576 15.5245 18.0093 15.6384 18.4673 15.8302C18.899 16.011 19.3957 16.2879 19.9858 16.6168L21.5884 17.5101C22.0914 17.7905 22.4722 18.2418 22.5893 18.8085C22.7077 19.3811 22.5331 19.9566 22.1475 20.4297C20.7486 22.146 18.5074 23.2389 16.1561 22.7646C14.7109 22.473 13.2849 21.9873 11.5602 20.9982C8.09482 19.0108 4.98775 15.902 3.00268 12.4407C2.01356 10.716 1.52784 9.29 1.2363 7.84474C0.762002 5.49352 1.85484 3.25224 3.5712 1.85333C4.04423 1.46779 4.61978 1.29322 5.19238 1.41157Z',
  d6: 'M13.5685 1.84799C13.7216 1.31736 14.2759 1.01134 14.8065 1.16447C18.6739 2.28049 21.7199 5.32634 22.836 9.19358C22.9892 9.72421 22.6832 10.2785 22.1526 10.4317C21.6219 10.5848 21.0676 10.2788 20.9145 9.74819C19.9889 6.54122 17.4591 4.01154 14.252 3.08605C13.7214 2.93292 13.4154 2.37863 13.5685 1.84799ZM12.9548 6.56624C13.1707 6.05789 13.7578 5.82079 14.2661 6.03666C15.9278 6.74231 17.2582 8.07269 17.9639 9.73438C18.1798 10.2427 17.9427 10.8298 17.4343 11.0457C16.926 11.2616 16.3389 11.0245 16.123 10.5161C15.6199 9.33137 14.6692 8.38068 13.4844 7.87756C12.976 7.66169 12.7389 7.07459 12.9548 6.56624Z',
  d7: 'M5.19226 1.41157C5.75895 1.52869 6.21024 1.90943 6.49064 2.41246L7.38385 4.01491C7.71286 4.60511 7.98973 5.1018 8.17054 5.53357C8.36235 5.99158 8.47626 6.44324 8.42419 6.9426C8.37211 7.44196 8.16746 7.8604 7.88529 8.26899C7.61928 8.65417 7.24588 9.08304 6.80218 9.59267L5.48917 11.1009C5.25389 11.3711 5.13624 11.5062 5.12549 11.6751C5.11474 11.844 5.21116 11.9883 5.404 12.2768C7.04759 14.7359 9.26273 16.9518 11.7238 18.5968C12.0124 18.7897 12.1566 18.8861 12.3255 18.8753C12.4944 18.8646 12.6296 18.7469 12.8998 18.5116L14.4081 17.1986C14.9177 16.7549 15.3466 16.3815 15.7318 16.1155C16.1403 15.8333 16.5588 15.6286 17.0581 15.5766C17.5575 15.5245 18.0092 15.6384 18.4672 15.8302C18.8989 16.011 19.3956 16.2879 19.9857 16.6168L19.9859 16.6169L21.5883 17.5101C22.0913 17.7905 22.4721 18.2418 22.5892 18.8085C22.7075 19.3811 22.533 19.9566 22.1474 20.4297C20.7485 22.146 18.5072 23.2389 16.156 22.7646C14.7108 22.473 13.2848 21.9873 11.5601 20.9982C8.0947 19.0108 4.98763 15.902 3.00255 12.4407C2.01343 10.716 1.52772 9.29 1.23618 7.84474C0.76188 5.49352 1.85471 3.25224 3.57108 1.85333C4.04411 1.46779 4.61966 1.29322 5.19226 1.41157Z',
  d8: 'M13.9996 6.83185C15.4228 7.43624 16.5634 8.57677 17.1678 10M14.6536 2C18.1908 3.02076 20.9787 5.80852 21.9996 9.34563',
  d9: 'M3.77685 11.9812L7.99158 8.01246L5.00618 2.00355C5.00336 1.99786 4.99593 1.99629 4.99095 2.00023C2.8245 3.71561 1.79846 5.55375 2.03096 7.16793C2.33413 9.27274 3.52878 12.5921 6.66532 15.8698C7.79383 17.2216 9.78575 19.0186 12.0897 20.2616M12.0897 20.2616C14.5042 21.5642 17.2649 22.8058 19.6019 21.3389C20.1167 21.0158 21.5157 19.7631 21.9997 19.0439C22.003 19.0389 22.0011 19.0324 21.9957 19.0297L16.0058 16.0189L12.0897 20.2616Z',
  d10: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d11: 'M20.8275 9.83373C19.9019 6.62675 17.3722 4.09708 14.1651 3.17159L14.7196 1.25C18.587 2.36603 21.6329 5.41188 22.7491 9.27912L20.8275 9.83373ZM16.0361 10.6017C15.5329 9.4169 14.5823 8.46622 13.3975 7.96309L14.1792 6.1222C15.8409 6.82784 17.1713 8.15823 17.877 9.81992L16.0361 10.6017Z',
} as const;

export const IconCallingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-stroke-rounded IconCallingStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCallingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-duotone-rounded IconCallingDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCallingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-twotone-rounded IconCallingTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCallingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-solid-rounded IconCallingSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-bulk-rounded IconCallingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-stroke-sharp IconCallingStrokeSharp"
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

export const IconCallingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calling-solid-sharp IconCallingSolidSharp"
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

export const iconPackOfCalling: TheIconSelfPack = {
  name: 'Calling',
  StrokeRounded: IconCallingStrokeRounded,
  DuotoneRounded: IconCallingDuotoneRounded,
  TwotoneRounded: IconCallingTwotoneRounded,
  SolidRounded: IconCallingSolidRounded,
  BulkRounded: IconCallingBulkRounded,
  StrokeSharp: IconCallingStrokeSharp,
  SolidSharp: IconCallingSolidSharp,
};
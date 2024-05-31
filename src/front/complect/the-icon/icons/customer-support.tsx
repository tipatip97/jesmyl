import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z',
  d2: 'M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z',
  d3: 'M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9',
  d4: 'M19 17V17.8C19 19.5673 17.2091 21 15 21H13',
  d5: 'M12 4C8.74862 4 6.31466 6.09486 6.02826 8.52063C6.1504 8.57303 6.26811 8.62684 6.37478 8.67566C6.73093 8.83478 7.40248 9.13482 7.65827 9.89191C7.75129 10.1672 7.75056 10.4616 7.74988 10.7355V15.2645C7.75056 15.5384 7.75129 15.8327 7.65827 16.1081C7.40248 16.8652 6.73093 17.1652 6.37478 17.3243C6.01187 17.4904 5.52109 17.7144 5.16339 17.7434C4.76602 17.7755 4.36372 17.6906 4.01468 17.4947C3.69768 17.3168 3.45969 17.0265 3.21864 16.7323C3.13147 16.6265 2.96648 16.4318 2.85058 16.2975L2.85057 16.2975L2.85057 16.2975L2.85052 16.2975C2.63866 16.052 2.39816 15.7733 2.19982 15.5137C1.87217 15.0849 1.54384 14.5711 1.38075 13.9741C1.20611 13.3348 1.20611 12.6652 1.38075 12.0259C1.49909 11.5927 1.71322 11.2104 1.99588 10.8091C2.26961 10.4205 2.73581 9.85098 3.19182 9.29711L3.19183 9.2971C3.26535 9.20386 3.36642 9.07569 3.44116 8.99009C3.5765 8.83505 3.76378 8.64608 4.01468 8.50526L4.01937 8.50263C4.31329 4.74952 7.91051 2 12 2C16.0895 2 19.6867 4.74952 19.9806 8.50264L19.9853 8.50526C20.2362 8.64608 20.4235 8.83505 20.5588 8.99009C20.6336 9.07569 20.7346 9.20386 20.8082 9.2971L20.8082 9.29711C21.2642 9.85098 21.7304 10.4205 22.0041 10.8091C22.2868 11.2104 22.5009 11.5927 22.6193 12.0259C22.7939 12.6652 22.7939 13.3348 22.6193 13.9741C22.4562 14.5711 22.1278 15.0849 21.8002 15.5137C21.6018 15.7733 21.3613 16.052 21.1495 16.2975L21.1494 16.2975L21.1494 16.2975C21.0335 16.4318 20.8685 16.6265 20.7814 16.7323L20.7813 16.7324C20.544 17.0219 20.3097 17.3078 20 17.4864V17.8C20 20.3163 17.5417 22 15 22H13C12.4477 22 12 21.5523 12 21C12 20.4477 12.4477 20 13 20H15C16.8766 20 18 18.8183 18 17.8V17.4914C17.8678 17.4353 17.7401 17.3769 17.6252 17.3243C17.2691 17.1652 16.5975 16.8652 16.3417 16.1081C16.2487 15.8327 16.2494 15.5384 16.2501 15.2645V10.7355C16.2494 10.4616 16.2487 10.1672 16.3417 9.89191C16.5975 9.13482 17.2691 8.83478 17.6252 8.67566C17.7319 8.62684 17.8496 8.57303 17.9717 8.52063C17.6853 6.09486 15.2514 4 12 4Z',
  d6: 'M18.8356 8.25664C19.233 8.2245 19.6353 8.30935 19.9843 8.50526C20.2352 8.64608 20.4225 8.83505 20.5579 8.99009C20.6326 9.07569 20.7337 9.20386 20.8072 9.2971L20.8072 9.29711C21.2632 9.85098 21.7294 10.4205 22.0031 10.8091C22.2858 11.2104 22.4999 11.5927 22.6183 12.0259C22.7929 12.6652 22.7929 13.3348 22.6183 13.9741C22.4552 14.5711 22.1269 15.0849 21.7992 15.5137C21.6008 15.7733 21.3603 16.052 21.1485 16.2975L21.1484 16.2975C21.0325 16.4318 20.8675 16.6265 20.7804 16.7323C20.5393 17.0265 20.3013 17.3168 19.9843 17.4947C19.6353 17.6906 19.233 17.7755 18.8356 17.7434C18.4779 17.7144 17.9872 17.4904 17.6242 17.3243C17.2681 17.1652 16.5965 16.8652 16.3408 16.1081C16.2477 15.8327 16.2485 15.5384 16.2491 15.2645V10.7355C16.2485 10.4616 16.2477 10.1672 16.3408 9.89191C16.5965 9.13482 17.2681 8.83478 17.6242 8.67566C17.9872 8.50958 18.4779 8.28557 18.8356 8.25664Z',
  d7: 'M5.16241 8.25664C4.76505 8.2245 4.36275 8.30935 4.0137 8.50526C3.76281 8.64608 3.57552 8.83505 3.44018 8.99009C3.36545 9.07569 3.26438 9.20386 3.19086 9.2971L3.19084 9.29711C2.73483 9.85098 2.26863 10.4205 1.9949 10.8091C1.71224 11.2104 1.49812 11.5927 1.37977 12.0259C1.20513 12.6652 1.20513 13.3348 1.37977 13.9741C1.54286 14.5711 1.87119 15.0849 2.19885 15.5137C2.3972 15.7733 2.63772 16.052 2.8496 16.2975L2.84961 16.2975C2.9655 16.4318 3.1305 16.6265 3.21767 16.7323C3.45872 17.0265 3.69671 17.3168 4.0137 17.4947C4.36275 17.6906 4.76505 17.7755 5.16241 17.7434C5.52012 17.7144 6.0109 17.4904 6.3738 17.3243C6.72996 17.1652 7.40151 16.8652 7.65729 16.1081C7.75031 15.8327 7.74958 15.5384 7.74891 15.2645V10.7355C7.74958 10.4616 7.75031 10.1672 7.65729 9.89191C7.40151 9.13482 6.72996 8.83478 6.3738 8.67566C6.01089 8.50958 5.52012 8.28557 5.16241 8.25664Z',
  d8: 'M17.999 17.4931V17.8018C17.999 18.8201 16.8756 20.0018 14.999 20.0018H12.999C12.4467 20.0018 11.999 20.4495 11.999 21.0018C11.999 21.554 12.4467 22.0018 12.999 22.0018H14.999C17.5407 22.0018 19.999 20.3181 19.999 17.8018V17.4883C19.9942 17.491 19.9894 17.4938 19.9846 17.4965C19.6355 17.6924 19.2332 17.7773 18.8359 17.7451C18.5913 17.7253 18.2846 17.6144 17.999 17.4931Z',
  d9: 'M6.02747 8.52053C6.31392 6.09481 8.74785 4 11.9992 4C15.2506 4 17.6846 6.09492 17.9709 8.52072C18.2644 8.39481 18.5834 8.27707 18.836 8.25664C19.2315 8.22465 19.6319 8.30855 19.9798 8.5025C19.6858 4.74945 16.0886 2 11.9992 2C7.90966 2 4.3124 4.74958 4.01855 8.50277C4.36657 8.30863 4.76713 8.22464 5.16281 8.25664C5.41532 8.27706 5.73413 8.39469 6.02747 8.52053Z',
  d10: 'M19 17V21H12',
  d11: 'M6.99343 15.9921V10.0238L4.99492 9.01002L2.04391 11.0193C2.01655 11.0379 2.00017 11.0689 2.00017 11.1021L2 14.959C2 14.9925 2.01675 15.0238 2.04463 15.0423L4.9622 16.9833C4.99236 17.0034 5.03101 17.0055 5.06319 16.9889L6.99343 15.9921Z',
  d12: 'M17.0066 15.9821V10.0138L19.0051 9L21.9561 11.0093C21.9834 11.0279 21.9998 11.0589 21.9998 11.092L22 14.9489C22 14.9825 21.9832 15.0138 21.9554 15.0323L19.0378 16.9733C19.0076 16.9934 18.969 16.9955 18.9368 16.9789L17.0066 15.9821Z',
  d13: 'M18.6649 8.33296C18.9053 8.21284 19.1917 8.23059 19.4155 8.37949L22.4155 10.3755C22.6244 10.5146 22.75 10.7489 22.75 10.9999V14.9999C22.75 15.2507 22.6247 15.4849 22.416 15.624L19.416 17.624C19.1918 17.7735 18.9047 17.7912 18.6638 17.6704L16.25 16.4598V9.53921L18.6649 8.33296Z',
  d14: 'M4.58455 8.37949C4.80833 8.23059 5.09469 8.21284 5.33515 8.33296L7.75 9.53921V16.4598L5.33622 17.6704C5.09535 17.7912 4.80818 17.7735 4.58397 17.624L1.58397 15.624C1.37533 15.4849 1.25 15.2507 1.25 14.9999V10.9999C1.25 10.7489 1.37557 10.5146 1.58455 10.3755L4.58455 8.37949Z',
  d15: 'M12 4C8.53612 4 6 6.37764 6 9H4C4 4.99494 7.7319 2 12 2C16.2681 2 20 4.99494 20 9H18C18 6.37764 15.4639 4 12 4Z',
  d16: 'M18 20V17H20V21C20 21.5523 19.5523 22 19 22H12V20H18Z',
} as const;

export const IconCustomerSupportStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-stroke-rounded IconCustomerSupportStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
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

export const IconCustomerSupportDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-duotone-rounded IconCustomerSupportDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
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

export const IconCustomerSupportTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-twotone-rounded IconCustomerSupportTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
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

export const IconCustomerSupportSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-solid-rounded IconCustomerSupportSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerSupportBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-bulk-rounded IconCustomerSupportBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCustomerSupportStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-stroke-sharp IconCustomerSupportStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerSupportSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-support-solid-sharp IconCustomerSupportSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCustomerSupport: TheIconSelfPack = {
  name: 'CustomerSupport',
  StrokeRounded: IconCustomerSupportStrokeRounded,
  DuotoneRounded: IconCustomerSupportDuotoneRounded,
  TwotoneRounded: IconCustomerSupportTwotoneRounded,
  SolidRounded: IconCustomerSupportSolidRounded,
  BulkRounded: IconCustomerSupportBulkRounded,
  StrokeSharp: IconCustomerSupportStrokeSharp,
  SolidSharp: IconCustomerSupportSolidSharp,
};
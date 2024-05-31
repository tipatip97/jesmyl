import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 13.8045C17 13.4588 17 13.286 17.052 13.132C17.2032 12.6844 17.6018 12.5108 18.0011 12.3289C18.45 12.1244 18.6744 12.0222 18.8968 12.0042C19.1493 11.9838 19.4022 12.0382 19.618 12.1593C19.9041 12.3198 20.1036 12.6249 20.3079 12.873C21.2512 14.0188 21.7229 14.5918 21.8955 15.2236C22.0348 15.7334 22.0348 16.2666 21.8955 16.7764C21.6438 17.6979 20.8485 18.4704 20.2598 19.1854C19.9587 19.5511 19.8081 19.734 19.618 19.8407C19.4022 19.9618 19.1493 20.0162 18.8968 19.9958C18.6744 19.9778 18.45 19.8756 18.0011 19.6711C17.6018 19.4892 17.2032 19.3156 17.052 18.868C17 18.714 17 18.5412 17 18.1955V13.8045Z',
  d2: 'M9.5 21C10.8807 22.3333 13.1193 22.3333 14.5 21',
  d3: 'M7 13.8045C7 13.3693 6.98778 12.9782 6.63591 12.6722C6.50793 12.5609 6.33825 12.4836 5.99891 12.329C5.55001 12.1246 5.32556 12.0224 5.10316 12.0044C4.43591 11.9504 4.07692 12.4058 3.69213 12.8731C2.74875 14.0189 2.27706 14.5918 2.10446 15.2236C1.96518 15.7334 1.96518 16.2666 2.10446 16.7764C2.3562 17.6979 3.15152 18.4702 3.74021 19.1852C4.11129 19.6359 4.46577 20.0472 5.10316 19.9956C5.32556 19.9776 5.55001 19.8754 5.99891 19.6709C6.33825 19.5164 6.50793 19.4391 6.63591 19.3278C6.98778 19.0218 7 18.6307 7 18.1954V13.8045Z',
  d4: 'M2 16V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L22.0001 16',
  d5: 'M18.8366 11.2566C19.234 11.2245 19.6363 11.3093 19.9853 11.5053C20.2362 11.6461 20.4235 11.8351 20.5588 11.9901C21.0149 12.544 21.7304 13.4205 22.0041 13.8091C22.2868 14.2104 22.5009 14.5927 22.6193 15.0259C22.7939 15.6652 22.7939 16.3348 22.6193 16.9741C22.4562 17.5711 22.1278 18.0849 21.8002 18.5137C21.6018 18.7733 20.9932 19.4868 20.7814 19.7323C20.5403 20.0265 20.3023 20.3168 19.9853 20.4947C19.6363 20.6906 19.234 20.7755 18.8366 20.7434C18.4789 20.7144 17.9881 20.4904 17.6252 20.3243C17.2691 20.1652 16.5975 19.8652 16.3417 19.1081C16.2487 18.8327 16.2494 18.5384 16.2501 18.2645V13.7355C16.2494 13.4616 16.2487 13.1672 16.3417 12.8919C16.5975 12.1348 17.2691 11.8348 17.6252 11.6757C17.9881 11.5096 18.4789 11.2856 18.8366 11.2566Z',
  d6: 'M5.16338 11.2566C4.76601 11.2245 4.36371 11.3093 4.01467 11.5053C3.76377 11.6461 3.57649 11.8351 3.44114 11.9901C2.98513 12.544 2.2696 13.4205 1.99586 13.8091C1.71321 14.2104 1.49908 14.5927 1.38073 15.0259C1.2061 15.6652 1.2061 16.3348 1.38073 16.9741C1.54383 17.5711 1.87216 18.0849 2.19981 18.5137C2.39817 18.7733 3.00675 19.4868 3.21863 19.7323C3.45968 20.0265 3.69767 20.3168 4.01467 20.4947C4.36371 20.6906 4.76601 20.7755 5.16338 20.7434C5.52108 20.7144 6.01186 20.4904 6.37476 20.3243C6.73092 20.1652 7.40247 19.8652 7.65825 19.1081C7.75127 18.8327 7.75055 18.5384 7.74987 18.2645V13.7355C7.75055 13.4616 7.75127 13.1672 7.65825 12.8919C7.40247 12.1348 6.73092 11.8348 6.37476 11.6757C6.01186 11.5096 5.52108 11.2856 5.16338 11.2566Z',
  d7: 'M8.78066 20.0553C9.16431 19.6581 9.79738 19.647 10.1947 20.0307C11.1879 20.9898 12.8121 20.9898 13.8053 20.0307C14.2026 19.647 14.8357 19.6581 15.2193 20.0553C15.603 20.4526 15.5919 21.0857 15.1947 21.4693C13.4264 23.1769 10.5736 23.1769 8.80534 21.4693C8.40806 21.0857 8.39701 20.4526 8.78066 20.0553Z',
  d8: 'M12 3.1875C7.14239 3.1875 3.20454 7.09103 3.20454 11.9063V15.7812C3.20454 16.3163 2.767 16.75 2.22727 16.75C1.68754 16.75 1.25 16.3163 1.25 15.7812V11.9063C1.25 6.02097 6.06293 1.25 12 1.25C17.937 1.25 22.7499 6.02097 22.7499 11.9063L22.75 15.7812C22.75 16.3163 22.3125 16.75 21.7727 16.75C21.233 16.75 20.7955 16.3163 20.7955 15.7813L20.7954 11.9063C20.7954 7.09103 16.8576 3.1875 12 3.1875Z',
  d9: 'M3.20454 11.9063C3.20454 7.09103 7.14239 3.1875 12 3.1875C16.8576 3.1875 20.7954 7.09103 20.7954 11.9063L20.7954 12.2782C21.233 12.8126 21.7743 13.4829 22.0041 13.8091C22.2868 14.2104 22.5009 14.5927 22.6193 15.0259C22.6935 15.2978 22.7362 15.5753 22.7473 15.8536C22.7491 15.8297 22.75 15.8056 22.75 15.7812L22.7499 11.9063C22.7499 6.02097 17.937 1.25 12 1.25C6.06293 1.25 1.25 6.02097 1.25 11.9063V15.7812C1.25 15.8063 1.25096 15.8311 1.25283 15.8556C1.26379 15.5766 1.3065 15.2985 1.38098 15.0259C1.49932 14.5927 1.71345 14.2104 1.99611 13.8091C2.22588 13.4829 2.76697 12.8129 3.20454 12.2785V11.9063Z',
  d10: 'M7 13V19L5 20C3.32748 18.5478 2.49121 17.8217 2.18521 17.021C2.05713 16.6859 1.99548 16.3428 2.00026 16C1.99548 15.6572 2.05713 15.3141 2.18521 14.979C2.49121 14.1783 3.32748 13.4522 5 12L7 13Z',
  d11: 'M17 19L17 13L19 12C20.6725 13.4522 21.5088 14.1783 21.8148 14.979C21.9429 15.3141 22.0045 15.6572 21.9997 16C22.0045 16.3428 21.9429 16.6859 21.8148 17.021C21.5088 17.8217 20.6725 18.5478 19 20L17 19Z',
  d12: 'M9 21C10.6569 22.3333 13.3431 22.3333 15 21',
  d13: 'M4.88692 20.8956C4.0714 20.1875 3.02289 19.2772 2.54595 18.7932C2.0625 18.3026 1.69235 17.8329 1.48462 17.2893C1.3251 16.8719 1.24544 16.4381 1.2502 16.0005C1.24544 15.5629 1.3251 15.1292 1.48462 14.7118C1.69235 14.1682 2.0625 13.6985 2.54595 13.2079C3.02289 12.7239 4.0714 11.8135 4.88692 11.1055L7.75 12.537V19.4641L4.88692 20.8956Z',
  d14: 'M19.1131 11.1055C19.9286 11.8135 20.9771 12.7239 21.4541 13.2079C21.9375 13.6985 22.3077 14.1682 22.5154 14.7118C22.6749 15.1292 22.7546 15.5629 22.7498 16.0005C22.7546 16.4381 22.6749 16.8719 22.5154 17.2893C22.3077 17.8329 21.9375 18.3026 21.4541 18.7932C20.9771 19.2772 19.9286 20.1875 19.1131 20.8956L16.25 19.4641V12.537L19.1131 11.1055Z',
  d15: 'M15.6269 21.5288C13.604 23.1567 10.396 23.1567 8.37305 21.5288L9.62693 19.9707C10.9177 21.0095 13.0822 21.0095 14.373 19.9707L15.6269 21.5288Z',
  d16: 'M12 3.20454C7.14239 3.20454 3.20454 7.14239 3.20454 12V15.909H1.25V12C1.25 6.06293 6.06293 1.25 12 1.25C17.937 1.25 22.7499 6.06293 22.7499 12L22.75 15.909L20.7955 15.909L20.7954 12C20.7954 7.14239 16.8576 3.20454 12 3.20454Z',
} as const;

export const IconCustomerService02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-stroke-rounded IconCustomerService02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCustomerService02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-duotone-rounded IconCustomerService02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCustomerService02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-twotone-rounded IconCustomerService02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCustomerService02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-solid-rounded IconCustomerService02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerService02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-bulk-rounded IconCustomerService02BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerService02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-stroke-sharp IconCustomerService02StrokeSharp"
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomerService02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customer-service-02-solid-sharp IconCustomerService02SolidSharp"
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

export const iconPackOfCustomerService02: TheIconSelfPack = {
  name: 'CustomerService02',
  StrokeRounded: IconCustomerService02StrokeRounded,
  DuotoneRounded: IconCustomerService02DuotoneRounded,
  TwotoneRounded: IconCustomerService02TwotoneRounded,
  SolidRounded: IconCustomerService02SolidRounded,
  BulkRounded: IconCustomerService02BulkRounded,
  StrokeSharp: IconCustomerService02StrokeSharp,
  SolidSharp: IconCustomerService02SolidSharp,
};
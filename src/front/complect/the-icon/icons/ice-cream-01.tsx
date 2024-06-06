import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 12.1534C14.4268 12.1534 16.7094 11.8086 18.6994 11.202C19.3273 11.0106 19.6412 10.9149 19.8479 11.0982C20.0546 11.2815 20.0152 11.5735 19.9363 12.1577C19.4239 15.9501 16.0416 19 12 19C7.95837 19 4.57608 15.9501 4.06374 12.1577C3.98483 11.5735 3.94537 11.2815 4.15209 11.0982C4.3588 10.9149 4.67272 11.0106 5.30056 11.202C7.29063 11.8086 9.57324 12.1534 12 12.1534Z',
  d2: 'M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z',
  d3: 'M12 19V22H9H15',
  d4: 'M7.08771 5C6.61656 6.46159 8.10425 7.61154 10.0967 7.22833C11.8214 6.89661 11.4094 7.44878 13.5462 7.89178C16.0476 8.41038 17 6.94879 17 5.97439',
  d5: 'M4.99609 9.02924C5.29578 7.27396 6.7514 3.89183 10.4974 2.9928',
  d6: 'M19.0234 9.00095C18.6983 7.501 17.252 3.87646 13.5404 3.01184',
  d7: 'M13.501 3.5C13.501 4.32843 12.8294 5 12.001 5C11.1726 5 10.501 4.32843 10.501 3.5C10.501 2.67157 11.1726 2 12.001 2C12.8294 2 13.501 2.67157 13.501 3.5Z',
  d8: 'M12.001 12.1534C14.4278 12.1534 16.7104 11.8086 18.7004 11.202C19.3283 11.0106 19.6422 10.9149 19.8489 11.0982C20.0556 11.2815 20.0162 11.5735 19.9373 12.1577C19.4249 15.9501 16.0426 19 12.001 19C7.95934 19 4.57705 15.9501 4.06471 12.1577C3.9858 11.5735 3.94634 11.2815 4.15306 11.0982C4.35977 10.9149 4.67369 11.0106 5.30153 11.202C7.2916 11.8086 9.57421 12.1534 12.001 12.1534Z',
  d9: 'M4.99707 9.0296C5.29676 7.27432 6.75238 3.89219 10.4984 2.99316',
  d10: 'M19.024 9.00083C18.6989 7.50088 17.2526 3.87634 13.541 3.01172',
  d11: 'M12.001 19V21C12.001 21.5523 11.5533 22 11.001 22H9.00098H15.001',
  d12: 'M7.08868 5C6.61753 6.46159 8.10522 7.61154 10.0977 7.22833C11.8224 6.89661 11.4104 7.44878 13.5472 7.89178C16.0486 8.41038 17.001 6.94879 17.001 5.97439',
  d13: 'M9 22H15',
  d14: 'M12 19V22',
  d15: 'M4.99512 9.02961C5.2948 7.27433 6.75042 3.8922 10.4965 2.99316M19.0224 9.00127C18.6972 7.50132 17.2509 3.87678 13.5394 3.01216',
  d16: 'M5.47521 10.3459L5.51918 10.3593C7.43396 10.943 9.64253 11.2781 11.9999 11.2781C14.3573 11.2781 16.5659 10.943 18.4807 10.3593L18.5246 10.3459L18.5247 10.3459C18.7996 10.2619 19.0862 10.1744 19.3302 10.1412C19.6149 10.1023 20.0082 10.1127 20.3454 10.4117C20.6552 10.6864 20.7381 11.0349 20.7486 11.3252C20.7571 11.56 20.7197 11.8361 20.6854 12.089L20.6794 12.1328C20.1168 16.2973 16.417 19.6247 11.9999 19.6247C7.58289 19.6247 3.88302 16.2973 3.32042 12.1328L3.31448 12.089C3.28018 11.8361 3.24273 11.56 3.25122 11.3252C3.26172 11.0349 3.34461 10.6864 3.65443 10.4117C3.99164 10.1127 4.38491 10.1023 4.6697 10.1412C4.9137 10.1744 5.20028 10.2619 5.47521 10.3459Z',
  d17: 'M12 17.875C12.5523 17.875 13 18.3227 13 18.875V20.875H15C15.5523 20.875 16 21.3227 16 21.875C16 22.4273 15.5523 22.875 15 22.875H9C8.44772 22.875 8 22.4273 8 21.875C8 21.3227 8.44772 20.875 9 20.875H11V18.875C11 18.3227 11.4477 17.875 12 17.875Z',
  d18: 'M12 1.125C12.8164 1.125 13.5312 1.55979 13.9256 2.21044C16.8599 3.00687 19.1053 5.56361 19.7357 8.72855C19.8166 9.13478 19.5529 9.52969 19.1466 9.6106C18.7404 9.69151 18.3455 9.42778 18.2646 9.02155C18.1138 8.26451 17.855 7.55605 17.5084 6.91511C17.3313 7.29942 17.0541 7.6668 16.6677 7.96316C15.905 8.548 14.8051 8.79375 13.3941 8.50121C12.4506 8.30561 11.9309 8.07709 11.5908 7.92751C11.5154 7.89435 11.4488 7.86507 11.3884 7.84089C11.2502 7.7856 11.1564 7.76051 11.0249 7.75384C10.8742 7.74619 10.6437 7.76193 10.2385 7.83988C9.08293 8.06213 7.98515 7.85699 7.218 7.28064C6.98526 7.10579 6.78747 6.89873 6.6325 6.66688C6.21486 7.37137 5.90621 8.1654 5.7357 9.02155C5.65479 9.42778 5.25988 9.69151 4.85364 9.6106C4.44741 9.52969 4.18368 9.13478 4.26459 8.72855C4.89493 5.56373 7.14026 3.00707 10.0744 2.21054C10.4687 1.55983 11.1836 1.125 12 1.125ZM12 2.625C11.5858 2.625 11.25 2.96079 11.25 3.375C11.25 3.78921 11.5858 4.125 12 4.125C12.4142 4.125 12.75 3.78921 12.75 3.375C12.75 2.96079 12.4142 2.625 12 2.625Z',
  d19: 'M12 2.625C11.5858 2.625 11.25 2.96079 11.25 3.375C11.25 3.78921 11.5858 4.125 12 4.125C12.4142 4.125 12.75 3.78921 12.75 3.375C12.75 2.96079 12.4142 2.625 12 2.625Z',
  d20: 'M13.4319 3.5C13.4319 4.32843 12.7648 5 11.942 5C11.1192 5 10.4521 4.32843 10.4521 3.5C10.4521 2.67157 11.1192 2 11.942 2C12.7648 2 13.4319 2.67157 13.4319 3.5Z',
  d21: 'M18.8947 9C18.3008 5.99819 16.1515 3.63804 13.4258 3M4.98926 9C5.58309 5.99819 7.73238 3.63804 10.4582 3',
  d22: 'M11.9416 19V21C11.9416 21.5523 11.497 22 10.9484 22H8.96191H14.9214',
  d23: 'M6.97559 5C6.97446 9.0479 11.1845 7.89136 11.1845 7.89136C16.908 10.5 17.4047 5.5 17.4047 5.5',
  d24: 'M20.0005 10.9911C18.0239 11.5977 14.3527 12.0009 11.9423 12.0009C9.5319 12.0009 5.97565 11.612 3.99902 11.0054C3.99863 15.8833 7.92794 19.0002 11.9423 19.0002C15.9566 19.0002 19.6214 16.0824 20.0005 10.9911Z',
  d25: 'M20.75 11.0002V10.0225L19.8056 10.2758C17.4971 10.8952 14.8371 11.2502 12 11.2502C9.16292 11.2502 6.50286 10.8952 4.19436 10.2758L3.25 10.0225V11.0002C3.25 15.5801 6.7686 19.3381 11.25 19.7185V21.25H9V22.75H15V21.25H12.75V19.7185C17.2314 19.3381 20.75 15.5801 20.75 11.0002Z',
  d26: 'M13.9257 2.33574C16.8595 3.13251 19.1045 5.689 19.7348 8.85355L18.2637 9.14655C18.1372 8.51173 17.9349 7.91106 17.6684 7.35572C17.5171 7.63219 17.3255 7.91542 17.083 8.1804C16.5505 8.76241 15.7876 9.23813 14.7356 9.3632C13.7541 9.47987 12.5767 9.28512 11.1604 8.67722C11.0308 8.70262 10.8599 8.7315 10.6599 8.75423C10.218 8.80448 9.60252 8.8285 8.96793 8.69862C8.32964 8.56798 7.63023 8.27199 7.09355 7.64937C6.89404 7.41792 6.72701 7.15294 6.5956 6.85325C6.1962 7.54237 5.90036 8.31517 5.73478 9.14655L4.26367 8.85355C4.89409 5.68833 7.13991 3.13143 10.0746 2.33524C10.4689 1.6847 11.1837 1.25 12 1.25C12.8165 1.25 13.5314 1.68492 13.9257 2.33574ZM11.25 3.5C11.25 3.08579 11.5858 2.75 12 2.75C12.4142 2.75 12.75 3.08579 12.75 3.5C12.75 3.91421 12.4142 4.25 12 4.25C11.5858 4.25 11.25 3.91421 11.25 3.5Z',
};

export const IconIceCream01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-stroke-rounded IconIceCream01StrokeRounded"
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
      <path 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconIceCream01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-duotone-rounded IconIceCream01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-twotone-rounded IconIceCream01TwotoneRounded"
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
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-solid-rounded IconIceCream01SolidRounded"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-bulk-rounded IconIceCream01BulkRounded"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-stroke-sharp IconIceCream01StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-01-solid-sharp IconIceCream01SolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIceCream01: TheIconSelfPack = {
  name: 'IceCream01',
  StrokeRounded: IconIceCream01StrokeRounded,
  DuotoneRounded: IconIceCream01DuotoneRounded,
  TwotoneRounded: IconIceCream01TwotoneRounded,
  SolidRounded: IconIceCream01SolidRounded,
  BulkRounded: IconIceCream01BulkRounded,
  StrokeSharp: IconIceCream01StrokeSharp,
  SolidSharp: IconIceCream01SolidSharp,
};
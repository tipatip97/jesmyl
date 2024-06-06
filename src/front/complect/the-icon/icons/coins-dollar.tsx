import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z',
  d2: 'M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434',
  d3: 'M15.7712 8.20518C15.555 7.29304 14.4546 6.46998 13.1337 7.08573C11.8128 7.70148 11.603 9.68263 13.601 9.89309C14.5041 9.98822 15.0928 9.78271 15.6319 10.364C16.1709 10.9453 16.2711 12.562 14.8931 12.9977C13.5151 13.4333 12.1506 12.7526 12.002 11.7859M13.9862 6.00415V6.87319M13.9862 13.1318V14.0042',
  d4: 'M15.7712 8.20494C15.555 7.2928 14.4546 6.46974 13.1337 7.08549C11.8128 7.70124 11.603 9.68239 13.601 9.89285C14.5041 9.98798 15.0928 9.78247 15.6319 10.3638C16.1709 10.9451 16.2711 12.5618 14.8931 12.9975C13.5151 13.4331 12.1506 12.7524 12.002 11.7857M13.9862 6.00391V6.87295M13.9862 13.1316V14.004',
  d5: 'M15.7692 8.20103C15.5531 7.28889 14.4527 6.46583 13.1318 7.08158C11.8109 7.69733 11.601 9.67848 13.599 9.88894C14.5021 9.98407 15.0909 9.77856 15.6299 10.3599C16.169 10.9412 16.2691 12.5578 14.8911 12.9935C13.5131 13.4292 12.1486 12.7484 12 11.7818M13.9842 6V6.86904M13.9842 13.1276V14',
  d6: 'M2.98515 10.205C3.25474 9.87581 3.38954 9.7112 3.52051 9.75811C3.65149 9.80502 3.6511 10.0334 3.65031 10.4902C3.6503 10.4959 3.65029 10.5017 3.65029 10.5075C3.65029 15.9432 8.05679 20.3497 13.4925 20.3497C13.4983 20.3497 13.5041 20.3497 13.5098 20.3497C13.9666 20.3489 14.195 20.3485 14.2419 20.4795C14.2888 20.6105 14.1242 20.7453 13.795 21.0149C12.4704 22.0995 10.777 22.7502 8.93147 22.7502C4.68898 22.7502 1.24976 19.311 1.24976 15.0685C1.24976 13.223 1.90054 11.5296 2.98515 10.205Z',
  d7: 'M13.9998 1.25024C9.16726 1.25024 5.24976 5.16775 5.24976 10.0002C5.24976 14.8327 9.16726 18.7502 13.9998 18.7502C18.8322 18.7502 22.7498 14.8327 22.7498 10.0002C22.7498 5.16775 18.8322 1.25024 13.9998 1.25024ZM14.7348 6.00024C14.7348 5.58603 14.399 5.25024 13.9848 5.25024C13.5706 5.25024 13.2348 5.58603 13.2348 6.00024L13.2348 6.24157C12.2127 6.52457 11.3877 7.37241 11.3877 8.50248C11.3877 9.09289 11.5613 9.69282 12.0899 10.1143C12.58 10.5051 13.2476 10.6352 13.9848 10.6352C14.5986 10.6352 14.8987 10.746 15.0378 10.8534C15.1337 10.9273 15.2499 11.0732 15.2499 11.4984C15.2499 11.8491 15.1281 12.017 14.9751 12.1258C14.7841 12.2616 14.4548 12.3615 13.9848 12.3615C13.2343 12.3615 12.8018 11.9346 12.7327 11.618C12.6443 11.2134 12.2446 10.9569 11.8399 11.0453C11.4353 11.1336 11.1788 11.5333 11.2672 11.938C11.4753 12.8911 12.2885 13.5446 13.2348 13.7724V14.0002C13.2348 14.4145 13.5706 14.7502 13.9848 14.7502C14.399 14.7502 14.7348 14.4145 14.7348 14.0002V13.7962C15.1304 13.7233 15.5137 13.5833 15.8443 13.3483C16.4206 12.9385 16.7499 12.2998 16.7499 11.4984C16.7499 10.7713 16.5303 10.1105 15.9544 9.66599C15.4219 9.25488 14.7145 9.13519 13.9848 9.13519C13.3787 9.13519 13.1227 9.01936 13.025 8.94152C12.966 8.89441 12.8877 8.80299 12.8877 8.50248C12.8877 8.11795 13.2802 7.63931 13.9848 7.63931C14.6032 7.63931 14.9993 8.02285 15.0689 8.36983C15.1503 8.77597 15.5455 9.03923 15.9516 8.95785C16.3578 8.87646 16.621 8.48124 16.5396 8.0751C16.3555 7.15611 15.6243 6.48483 14.7348 6.24041V6.00024Z',
  d8: 'M5.24976 10.0002C5.24976 5.16775 9.16726 1.25024 13.9998 1.25024C18.8322 1.25024 22.7498 5.16775 22.7498 10.0002C22.7498 14.8327 18.8322 18.7502 13.9998 18.7502C9.16726 18.7502 5.24976 14.8327 5.24976 10.0002Z',
  d9: 'M13.9848 5.25024C14.399 5.25024 14.7348 5.58603 14.7348 6.00024L14.7348 6.24041C15.6243 6.48482 16.3555 7.15611 16.5396 8.0751C16.621 8.48124 16.3578 8.87646 15.9516 8.95785C15.5455 9.03923 15.1503 8.77597 15.0689 8.36983C14.9993 8.02285 14.6032 7.63931 13.9848 7.63931C13.2802 7.63931 12.8877 8.11795 12.8877 8.50248C12.8877 8.80299 12.966 8.89441 13.025 8.94152C13.1227 9.01936 13.3787 9.13519 13.9848 9.13519C14.7145 9.13519 15.4219 9.25488 15.9544 9.66599C16.5303 10.1105 16.7499 10.7713 16.7499 11.4984C16.7499 12.2998 16.4206 12.9385 15.8443 13.3483C15.5137 13.5833 15.1304 13.7233 14.7348 13.7962V14.0002C14.7348 14.4145 14.399 14.7502 13.9848 14.7502C13.5706 14.7502 13.2348 14.4145 13.2348 14.0002V13.7724C12.2885 13.5446 11.4753 12.8911 11.2672 11.938C11.1788 11.5333 11.4353 11.1336 11.8399 11.0453C12.2446 10.9569 12.6443 11.2134 12.7327 11.618C12.8018 11.9346 13.2343 12.3615 13.9848 12.3615C14.4548 12.3615 14.7841 12.2616 14.9751 12.1258C15.1281 12.017 15.2499 11.8491 15.2499 11.4984C15.2499 11.0732 15.1337 10.9273 15.0378 10.8534C14.8987 10.746 14.5986 10.6352 13.9848 10.6352C13.2476 10.6352 12.58 10.5051 12.0899 10.1143C11.5613 9.69282 11.3877 9.09289 11.3877 8.50248C11.3877 7.37241 12.2127 6.52457 13.2348 6.24157L13.2348 6.00024C13.2348 5.58603 13.5706 5.25024 13.9848 5.25024Z',
  d10: 'M14 7C12.8954 7 12 7.67157 12 8.5C12 9.32843 12.8954 10 14 10C15.1046 10 16 10.6716 16 11.5C16 12.3284 15.1046 13 14 13M14 7C14.8708 7 15.6116 7.4174 15.8862 8M14 7V5.5M14 13C13.1292 13 12.3884 12.5826 12.1138 12M14 13V14.5',
  d11: 'M4.03233 7.60083C3.84776 8.37045 3.75 9.17383 3.75 10C3.75 15.661 8.33908 20.25 14 20.25C14.8262 20.25 15.6296 20.1523 16.3992 19.9677C14.802 21.6797 12.526 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 11.474 2.32039 9.19802 4.03233 7.60083Z',
  d12: 'M14 1.25C9.16751 1.25 5.25 5.16751 5.25 10C5.25 14.8325 9.16751 18.75 14 18.75C18.8325 18.75 22.75 14.8325 22.75 10C22.75 5.16751 18.8325 1.25 14 1.25ZM12.1358 6.83934C12.4543 6.60048 12.8358 6.42809 13.25 6.33359V5.5H14.75V6.33451C15.5387 6.51515 16.2347 6.98027 16.5646 7.68028L15.2078 8.31972C15.0905 8.07097 14.6684 7.75 14 7.75C13.5943 7.75 13.2559 7.87427 13.0358 8.03934C12.8159 8.20423 12.75 8.37478 12.75 8.5C12.75 8.62522 12.8159 8.79577 13.0358 8.96066C13.2559 9.12573 13.5943 9.25 14 9.25C14.6989 9.25 15.3604 9.46151 15.8642 9.83934C16.3682 10.2173 16.75 10.7968 16.75 11.5C16.75 12.2032 16.3682 12.7827 15.8642 13.1607C15.5457 13.3995 15.1642 13.5719 14.75 13.6664V14.5H13.25V13.6655C12.4613 13.4848 11.7653 13.0197 11.4354 12.3197L12.7922 11.6803C12.9095 11.929 13.3316 12.25 14 12.25C14.4057 12.25 14.7441 12.1257 14.9642 11.9607C15.1841 11.7958 15.25 11.6252 15.25 11.5C15.25 11.3748 15.1841 11.2042 14.9642 11.0393C14.7441 10.8743 14.4057 10.75 14 10.75C13.3011 10.75 12.6396 10.5385 12.1358 10.1607C11.6318 9.78266 11.25 9.20321 11.25 8.5C11.25 7.79679 11.6318 7.21734 12.1358 6.83934Z',
};

export const IconCoinsDollarStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-stroke-rounded IconCoinsDollarStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsDollarDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-duotone-rounded IconCoinsDollarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsDollarTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-twotone-rounded IconCoinsDollarTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsDollarSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-solid-rounded IconCoinsDollarSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconCoinsDollarBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-bulk-rounded IconCoinsDollarBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsDollarStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-stroke-sharp IconCoinsDollarStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsDollarSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-dollar-solid-sharp IconCoinsDollarSolidSharp"
    >
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

export const iconPackOfCoinsDollar: TheIconSelfPack = {
  name: 'CoinsDollar',
  StrokeRounded: IconCoinsDollarStrokeRounded,
  DuotoneRounded: IconCoinsDollarDuotoneRounded,
  TwotoneRounded: IconCoinsDollarTwotoneRounded,
  SolidRounded: IconCoinsDollarSolidRounded,
  BulkRounded: IconCoinsDollarBulkRounded,
  StrokeSharp: IconCoinsDollarStrokeSharp,
  SolidSharp: IconCoinsDollarSolidSharp,
};
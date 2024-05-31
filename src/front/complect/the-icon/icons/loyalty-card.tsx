import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 7.99306 2 5.98959 3.17157 4.7448C4.34315 3.5 6.22876 3.5 10 3.5H14C17.7712 3.5 19.6569 3.5 20.8284 4.7448C22 5.98959 22 7.99306 22 12C22 16.0069 22 18.0104 20.8284 19.2552C19.6569 20.5 17.7712 20.5 14 20.5H10C6.22876 20.5 4.34315 20.5 3.17157 19.2552C2 18.0104 2 16.0069 2 12Z',
  d2: 'M6.8881 10.8314C7.82668 10.2831 8.64587 10.504 9.13798 10.856C9.33975 11.0003 9.44064 11.0725 9.5 11.0725C9.55936 11.0725 9.66025 11.0003 9.86202 10.856C10.3541 10.504 11.1733 10.2831 12.1119 10.8314C13.3437 11.551 13.6224 13.925 10.7812 15.9278C10.24 16.3093 9.96942 16.5 9.5 16.5C9.03058 16.5 8.76 16.3093 8.21884 15.9278C5.3776 13.925 5.65632 11.551 6.8881 10.8314Z',
  d3: 'M18 16.5H15',
  d4: 'M3.17157 4.7448C2 5.98959 2 7.99306 2 12C2 16.0069 2 18.0104 3.17157 19.2552C4.34315 20.5 6.22876 20.5 10 20.5H14C17.7712 20.5 19.6569 20.5 20.8284 19.2552C22 18.0104 22 16.0069 22 12C22 7.99306 22 5.98959 20.8284 4.7448C19.6569 3.5 17.7712 3.5 14 3.5H10C6.22876 3.5 4.34315 3.5 3.17157 4.7448ZM9.13798 10.856C8.64587 10.504 7.82668 10.2831 6.8881 10.8314C5.65632 11.551 5.3776 13.9249 8.21884 15.9278C8.76 16.3093 9.03058 16.5 9.5 16.5C9.96942 16.5 10.24 16.3093 10.7812 15.9278C13.6224 13.9249 13.3437 11.551 12.1119 10.8314C11.1733 10.2831 10.3541 10.504 9.86202 10.856C9.66025 11.0003 9.55936 11.0725 9.5 11.0725C9.44064 11.0725 9.33975 11.0003 9.13798 10.856Z',
  d5: 'M14.0595 2.75C15.8946 2.74998 17.3529 2.74997 18.4951 2.91314C19.6762 3.08185 20.6284 3.43801 21.3746 4.23077C22.1147 5.01711 22.4417 6.0099 22.5976 7.24244C22.75 8.44685 22.75 10.0958 22.75 12.0537C22.75 14.0116 22.75 15.5532 22.5976 16.7576C22.4417 17.9901 22.1147 18.9829 21.3746 19.7692C20.6284 20.562 19.6762 20.9182 18.4951 21.0869C17.3529 21.25 15.8946 21.25 14.0595 21.25H9.94047C8.10537 21.25 6.6471 21.25 5.50485 21.0869C4.32381 20.9182 3.37155 20.562 2.62542 19.7692C1.88535 18.9829 1.55834 17.9901 1.40238 16.7576C1.24998 15.5532 1.24999 14.0117 1.25 12.0537V12.0537C1.24999 10.0958 1.24998 8.44685 1.40238 7.24244C1.55834 6.0099 1.88535 5.01711 2.62542 4.23077C3.37155 3.43801 4.32381 3.08185 5.50485 2.91314C6.64711 2.74997 8.10539 2.74998 9.9405 2.75H14.0595ZM6.00945 10.184C7.1945 9.49175 8.29596 9.72815 8.99966 10.1951C9.70336 9.72815 10.8048 9.49175 11.9899 10.184C12.9085 10.7207 13.3834 11.8166 13.2162 13.0032C13.0482 14.1964 12.1838 15.5043 10.6447 16.5893C10.1619 16.9307 9.71002 17.2503 8.99966 17.2503C8.2893 17.2503 7.83744 16.9307 7.35465 16.5893C5.8155 15.5043 4.95111 14.1964 4.78308 13.0032C4.61597 11.8166 5.09079 10.7207 6.00945 10.184ZM15.25 15.25C14.6977 15.25 14.25 15.6977 14.25 16.25C14.25 16.8023 14.6977 17.25 15.25 17.25L18.25 17.25C18.8023 17.25 19.25 16.8023 19.25 16.25C19.25 15.6977 18.8023 15.25 18.25 15.25H15.25Z',
  d6: 'M14.0595 2.75C15.8946 2.74998 17.3529 2.74997 18.4951 2.91314C19.6762 3.08185 20.6284 3.43801 21.3746 4.23077C22.1147 5.01711 22.4417 6.0099 22.5976 7.24244C22.75 8.44685 22.75 10.0958 22.75 12.0537C22.75 14.0116 22.75 15.5532 22.5976 16.7576C22.4417 17.9901 22.1147 18.9829 21.3746 19.7692C20.6284 20.562 19.6762 20.9182 18.4951 21.0869C17.3529 21.25 15.8946 21.25 14.0595 21.25H9.94047C8.10537 21.25 6.6471 21.25 5.50485 21.0869C4.32381 20.9182 3.37155 20.562 2.62542 19.7692C1.88535 18.9829 1.55834 17.9901 1.40238 16.7576C1.24998 15.5532 1.24999 14.0117 1.25 12.0537C1.24999 10.0958 1.24998 8.44685 1.40238 7.24244C1.55834 6.0099 1.88535 5.01711 2.62542 4.23077C3.37155 3.43801 4.32381 3.08185 5.50485 2.91314C6.64711 2.74997 8.10539 2.74998 9.9405 2.75H14.0595Z',
  d7: 'M6.00945 10.184C7.1945 9.49175 8.29596 9.72815 8.99966 10.1951C9.70336 9.72815 10.8048 9.49175 11.9899 10.184C12.9085 10.7207 13.3834 11.8166 13.2162 13.0032C13.0482 14.1964 12.1838 15.5043 10.6447 16.5893C10.1619 16.9307 9.71002 17.2503 8.99966 17.2503C8.2893 17.2503 7.83744 16.9307 7.35465 16.5893C5.8155 15.5043 4.95111 14.1964 4.78308 13.0032C4.61597 11.8166 5.09079 10.7207 6.00945 10.184Z',
  d8: 'M14.25 16.25C14.25 15.6977 14.6977 15.25 15.25 15.25H18.25C18.8023 15.25 19.25 15.6977 19.25 16.25C19.25 16.8023 18.8023 17.25 18.25 17.25H15.25C14.6977 17.25 14.25 16.8023 14.25 16.25Z',
  d9: 'M22 3.5H2V20.5H22V3.5Z',
  d10: 'M11.9002 10.7482C10.5031 10.0346 9.50002 11.0866 9.50002 11.0866C9.50002 11.0866 8.49683 10.0346 7.09974 10.7482C5.40759 11.6126 5.28608 14.9973 9.50002 16.5C13.714 14.9973 13.5924 11.6126 11.9002 10.7482Z',
  d11: 'M19 16.5H14',
  d12: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75L22 2.75C22.4142 2.75 22.75 3.08579 22.75 3.5L22.75 20.5C22.75 20.9142 22.4142 21.25 22 21.25L2 21.25C1.58579 21.25 1.25 20.9142 1.25 20.5L1.25 3.5ZM8.48136 9.95547C8.62884 10.0157 8.76016 10.0836 8.87396 10.1513C8.98777 10.0836 9.11907 10.0157 9.26655 9.95548C9.85577 9.71478 10.6882 9.60673 11.6154 10.0803C12.8264 10.6989 13.3702 12.1484 13.0166 13.5662C12.6553 15.0147 11.401 16.3951 9.12588 17.2064L8.87397 17.2962L8.62206 17.2064C6.34696 16.3951 5.09261 15.0147 4.73134 13.5662C4.37773 12.1485 4.92145 10.6989 6.13253 10.0803C7.05967 9.60673 7.89213 9.71478 8.48136 9.95547ZM19.375 15.2963H14.375V17.2963L19.375 17.2963V15.2963Z',
} as const;

export const IconLoyaltyCardStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-stroke-rounded IconLoyaltyCardStrokeRounded"
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

export const IconLoyaltyCardDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-duotone-rounded IconLoyaltyCardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconLoyaltyCardTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-twotone-rounded IconLoyaltyCardTwotoneRounded"
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

export const IconLoyaltyCardSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-solid-rounded IconLoyaltyCardSolidRounded"
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

export const IconLoyaltyCardBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-bulk-rounded IconLoyaltyCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconLoyaltyCardStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-stroke-sharp IconLoyaltyCardStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoyaltyCardSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="loyalty-card-solid-sharp IconLoyaltyCardSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLoyaltyCard: TheIconSelfPack = {
  name: 'LoyaltyCard',
  StrokeRounded: IconLoyaltyCardStrokeRounded,
  DuotoneRounded: IconLoyaltyCardDuotoneRounded,
  TwotoneRounded: IconLoyaltyCardTwotoneRounded,
  SolidRounded: IconLoyaltyCardSolidRounded,
  BulkRounded: IconLoyaltyCardBulkRounded,
  StrokeSharp: IconLoyaltyCardStrokeSharp,
  SolidSharp: IconLoyaltyCardSolidSharp,
};
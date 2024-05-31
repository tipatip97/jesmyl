import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z',
  d2: 'M16.9588 5C17.6186 5.86961 18 6.89801 18 8C18 9.10199 17.6186 10.1304 16.9588 11M7.04117 5C6.38143 5.86961 6 6.89801 6 8C6 9.10199 6.38143 10.1304 7.04117 11',
  d3: 'M20.3159 3C21.3796 4.43008 22 6.14984 22 8C22 9.85016 21.3796 11.5699 20.3159 13M3.68409 3C2.62036 4.43008 2 6.14984 2 8C2 9.85016 2.62036 11.5699 3.68409 13',
  d4: 'M11 10L7 21',
  d5: 'M17 21L13 10',
  d6: 'M8.5 17H15.5',
  d7: 'M16.3544 4.20338C16.7944 3.86957 17.4217 3.95565 17.7555 4.39565C18.5342 5.422 19 6.65922 19 8.00005C19 9.34089 18.5342 10.5781 17.7555 11.6045C17.4217 12.0445 16.7944 12.1305 16.3544 11.7967C15.9144 11.4629 15.8283 10.8356 16.1622 10.3956C16.703 9.68278 17 8.86321 17 8.00005C17 7.1369 16.703 6.31733 16.1622 5.60446C15.8283 5.16447 15.9144 4.53719 16.3544 4.20338ZM7.64558 4.20338C8.08557 4.53719 8.17165 5.16447 7.83785 5.60446C7.29702 6.31733 7 7.1369 7 8.00005C7 8.86321 7.29702 9.68278 7.83785 10.3956C8.17165 10.8356 8.08557 11.4629 7.64558 11.7967C7.20559 12.1305 6.57831 12.0445 6.2445 11.6045C5.46584 10.5781 5 9.34089 5 8.00005C5 6.65922 5.46584 5.422 6.2445 4.39565C6.57831 3.95565 7.20559 3.86957 7.64558 4.20338Z',
  d8: 'M4.28091 2.19769C4.72405 2.52731 4.81607 3.15375 4.48646 3.59689C3.54203 4.86658 3 6.37957 3 8.00006C3 9.62056 3.54203 11.1335 4.48646 12.4032C4.81607 12.8464 4.72405 13.4728 4.28091 13.8024C3.83777 14.1321 3.21133 14.04 2.88171 13.5969C1.69869 12.0064 1 10.0799 1 8.00006C1 5.92024 1.69869 3.99371 2.88171 2.40324C3.21133 1.9601 3.83777 1.86807 4.28091 2.19769ZM19.7191 2.19769C20.1622 1.86807 20.7887 1.9601 21.1183 2.40324C22.3013 3.99371 23 5.92024 23 8.00006C23 10.0799 22.3013 12.0064 21.1183 13.5969C20.7887 14.04 20.1622 14.1321 19.7191 13.8024C19.276 13.4728 19.1839 12.8464 19.5135 12.4032C20.458 11.1335 21 9.62056 21 8.00006C21 6.37957 20.458 4.86658 19.5135 3.59689C19.1839 3.15375 19.276 2.52731 19.7191 2.19769Z',
  d9: 'M12.0003 5.25C10.4815 5.25 9.25027 6.48122 9.25027 8C9.25027 8.722 9.52851 9.37901 9.98361 9.86966L6.06048 20.6583C5.87174 21.1773 6.1395 21.7511 6.65853 21.9398C7.17756 22.1285 7.75133 21.8608 7.94007 21.3417L9.15525 18H14.8453L16.0605 21.3417C16.2492 21.8608 16.823 22.1285 17.342 21.9398C17.861 21.7511 18.1288 21.1773 17.9401 20.6583L14.0169 9.86966C14.472 9.37901 14.7503 8.722 14.7503 8C14.7503 6.48122 13.5191 5.25 12.0003 5.25ZM14.118 16L12.2062 10.7424C12.1382 10.7474 12.0695 10.75 12.0003 10.75C11.931 10.75 11.8623 10.7474 11.7944 10.7424L9.88252 16H14.118Z',
  d10: 'M3 8.09682C3 6.47633 3.54203 4.96334 4.48646 3.69365L2.88171 2.5C1.69869 4.09047 1 6.017 1 8.09682C1 10.1766 1.69869 12.1032 2.88171 13.6936L4.48646 12.5C3.54203 11.2303 3 9.71732 3 8.09682Z',
  d11: 'M19.5135 3.69365C20.458 4.96334 21 6.47633 21 8.09682C21 9.71732 20.458 11.2303 19.5135 12.5L21.1183 13.6936C22.3013 12.1032 23 10.1766 23 8.09682C23 6.017 22.3013 4.09047 21.1183 2.5L19.5135 3.69365Z',
  d12: 'M16.1622 5.70101C16.703 6.41387 17 7.23344 17 8.0966C17 8.95975 16.703 9.77932 16.1622 10.4922L17.7555 11.701C18.5342 10.6747 19 9.43743 19 8.0966C19 6.75576 18.5342 5.51854 17.7555 4.49219L16.1622 5.70101Z',
  d13: 'M7 8.0966C7 7.23344 7.29702 6.41387 7.83785 5.70101L6.2445 4.49219C5.46584 5.51854 5 6.75576 5 8.0966C5 9.43743 5.46584 10.6747 6.2445 11.701L7.83785 10.4922C7.29702 9.77932 7 8.95975 7 8.0966Z',
  d14: 'M12 5.09668C10.3431 5.09668 9 6.43983 9 8.09668C9 8.93051 9.34018 9.68489 9.88933 10.2286L6.0625 20.8164L7.94209 21.4999L9.17214 18.0967H14.8312L16.0625 21.5L17.9421 20.8165L14.1113 10.228C14.6601 9.68434 15 8.93021 15 8.09668C15 6.43983 13.6569 5.09668 12 5.09668ZM12.2935 11.0825C12.197 11.0919 12.099 11.0967 12 11.0967C11.9012 11.0967 11.8036 11.0919 11.7073 11.0826L9.89501 16.0967H14.1076L12.2935 11.0825Z',
} as const;

export const IconInternetAntenna04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-stroke-rounded IconInternetAntenna04StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconInternetAntenna04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-duotone-rounded IconInternetAntenna04DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconInternetAntenna04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-twotone-rounded IconInternetAntenna04TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconInternetAntenna04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-solid-rounded IconInternetAntenna04SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-bulk-rounded IconInternetAntenna04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconInternetAntenna04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-stroke-sharp IconInternetAntenna04StrokeSharp"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-04-solid-sharp IconInternetAntenna04SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfInternetAntenna04: TheIconSelfPack = {
  name: 'InternetAntenna04',
  StrokeRounded: IconInternetAntenna04StrokeRounded,
  DuotoneRounded: IconInternetAntenna04DuotoneRounded,
  TwotoneRounded: IconInternetAntenna04TwotoneRounded,
  SolidRounded: IconInternetAntenna04SolidRounded,
  BulkRounded: IconInternetAntenna04BulkRounded,
  StrokeSharp: IconInternetAntenna04StrokeSharp,
  SolidSharp: IconInternetAntenna04SolidSharp,
};
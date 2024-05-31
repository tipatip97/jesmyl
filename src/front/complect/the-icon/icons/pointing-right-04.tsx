import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.5 9.91601L13 9.91601M13 9.91601L19.25 9.91601C20.2165 9.91601 21 10.6995 21 11.666C21 12.6325 20.2165 13.416 19.25 13.416H14L13.5224 16.493C13.2331 18.4216 13.0885 19.386 12.6816 20.0652C12.0094 21.1872 11 22 9.52639 22C8.5 22 7.8114 21.7463 5.96127 21.1296C4.78733 20.7383 4.20036 20.5426 3.73571 20.2236C2.97073 19.6983 2.4122 18.9233 2.15576 18.0315C2 17.4898 2 16.8711 2 15.6336L2 14.2287C2 12.4442 2 11.552 2.33495 10.7858C2.48627 10.4397 2.68587 10.1167 2.92779 9.82659C3.46326 9.18438 4.2613 8.78536 5.85738 7.98731C7.15171 7.34015 7.79887 7.01657 8.46984 7.00083C8.77244 6.99373 9.07436 7.03246 9.36537 7.11571C10.0106 7.30031 10.5552 7.77678 11.6442 8.7297L13 9.91601Z',
  d2: 'M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7',
  d3: 'M19.25 9.91601L13 9.91601L11.6442 8.7297C10.5552 7.77678 10.0106 7.30031 9.36537 7.11571C9.07436 7.03246 8.77244 6.99373 8.46984 7.00083C7.79887 7.01657 7.15171 7.34015 5.85738 7.98731C4.2613 8.78536 3.46326 9.18438 2.92779 9.82659C2.68587 10.1167 2.48627 10.4397 2.33495 10.7858C2 11.552 2 12.4442 2 14.2287L2 15.6336C2 16.8711 2 17.4898 2.15576 18.0315C2.4122 18.9233 2.97073 19.6983 3.73571 20.2236C4.20036 20.5426 4.78733 20.7383 5.96127 21.1296C7.8114 21.7463 8.5 22 9.52639 22C11 22 12.0094 21.1872 12.6816 20.0652C13.0885 19.386 13.2331 18.4216 13.5224 16.493L14 13.416H19.25C20.2165 13.416 21 12.6325 21 11.666C21 10.6995 20.2165 9.91601 19.25 9.91601Z',
  d4: 'M13.2818 9.16601L19.25 9.16601C20.6307 9.16601 21.75 10.2853 21.75 11.666C21.75 13.0467 20.6307 14.166 19.25 14.166H14.6426L14.2641 16.6043L14.2636 16.608L14.2602 16.6306C14.1189 17.5726 14.0074 18.3158 13.879 18.9068C13.7485 19.5075 13.5892 20.0095 13.3249 20.4506C12.5596 21.7281 11.3367 22.75 9.52639 22.75C8.43943 22.75 7.6554 22.4875 6.11758 21.9727C5.05526 21.6188 3.86412 21.2216 3.31116 20.8418C2.40274 20.218 1.73948 19.2978 1.43497 18.2388C1.2496 17.5941 1.24975 16.8758 1.24998 15.7561L1.24997 14.0544C1.24948 12.4387 1.24916 11.3971 1.64775 10.4854C1.82745 10.0744 2.06447 9.69085 2.35176 9.3463C2.98897 8.58206 3.9207 8.11655 5.36609 7.3944C5.98987 7.0825 6.68169 6.73662 7.11768 6.56139C7.57127 6.37909 7.99395 6.26179 8.45225 6.25103C8.83049 6.24216 9.2079 6.29057 9.57166 6.39464C10.0124 6.52073 10.3918 6.74093 10.7847 7.03182C11.1623 7.31143 11.5901 7.68574 12.1149 8.145L13.2818 9.16601Z',
  d5: 'M15.75 5.50586C15.1977 5.50586 14.75 5.05814 14.75 4.50586C14.75 3.95357 15.1977 3.50586 15.75 3.50586L18.25 3.50586L18.25 2.9116C18.2499 2.73596 18.2497 2.52031 18.2718 2.34387L18.2722 2.34053C18.288 2.21408 18.3598 1.63804 18.9254 1.36368C19.4922 1.08872 19.9924 1.39065 20.1006 1.45597L20.569 1.79511C20.9449 2.08975 21.4593 2.49545 21.8503 2.87588C22.0454 3.06571 22.2467 3.28297 22.4055 3.51388C22.5467 3.71914 22.75 4.06933 22.75 4.5C22.75 4.93067 22.5467 5.28086 22.4055 5.48612C22.2467 5.71703 22.0454 5.93429 21.8503 6.12412C21.4593 6.50455 20.9449 6.91025 20.5691 7.20488L20.1006 7.54403C19.9924 7.60935 19.4922 7.91128 18.9254 7.63632C18.3598 7.36196 18.288 6.78592 18.2722 6.65947L18.2718 6.65613C18.2497 6.47969 18.2499 6.26403 18.25 6.0884L18.25 5.50586L15.75 5.50586Z',
  d6: 'M8.46984 9.91601L13 9.91601M13 9.91601L19.25 9.91601C20.2165 9.91601 21 10.6995 21 11.666C21 12.6325 20.2165 13.416 19.25 13.416H14V19C14 20.6569 12.6569 22 11 22H5C3.34315 22 2 20.6569 2 19V10.5L5.85738 7.98731C7.18485 7.11571 7.79887 7.01657 8.46984 7.00083C8.77244 6.99373 9.07436 7.03246 9.36537 7.11571C10.0106 7.30031 10.5552 7.77679 11.6442 8.7297L13 9.91601Z',
  d7: 'M16 4.5L21.4926 4.5M19.5 2L22 4.5L19.5 7',
  d8: 'M12.1381 8.16526L13.2818 9.16601L19.25 9.16601C20.6307 9.16601 21.75 10.2853 21.75 11.666C21.75 13.0467 20.6307 14.166 19.25 14.166H14.75V19C14.75 21.0711 13.0711 22.75 11 22.75H5C2.92893 22.75 1.25 21.0711 1.25 19V10.0935L5.44691 7.35961C6.13996 6.90464 6.68466 6.6258 7.17062 6.46228C7.67094 6.29394 8.07409 6.25991 8.45225 6.25103C8.83049 6.24216 9.2079 6.29057 9.57166 6.39464C10.0124 6.52073 10.3918 6.74093 10.7847 7.03183C11.1623 7.31144 11.5901 7.68574 12.1149 8.145L12.1149 8.145L12.1381 8.16526Z',
  d9: 'M19.543 1.25L22.7502 4.45711L19.543 7.66421L18.1288 6.25L18.9217 5.45711L15.3359 5.45711V3.45711L18.9217 3.45711L18.1288 2.66421L19.543 1.25Z',
} as const;

export const IconPointingRight04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-stroke-rounded IconPointingRight04StrokeRounded"
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

export const IconPointingRight04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-duotone-rounded IconPointingRight04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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

export const IconPointingRight04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-twotone-rounded IconPointingRight04TwotoneRounded"
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

export const IconPointingRight04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-solid-rounded IconPointingRight04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-bulk-rounded IconPointingRight04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-stroke-sharp IconPointingRight04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-04-solid-sharp IconPointingRight04SolidSharp"
    >
      <path 
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

export const iconPackOfPointingRight04: TheIconSelfPack = {
  name: 'PointingRight04',
  StrokeRounded: IconPointingRight04StrokeRounded,
  DuotoneRounded: IconPointingRight04DuotoneRounded,
  TwotoneRounded: IconPointingRight04TwotoneRounded,
  SolidRounded: IconPointingRight04SolidRounded,
  BulkRounded: IconPointingRight04BulkRounded,
  StrokeSharp: IconPointingRight04StrokeSharp,
  SolidSharp: IconPointingRight04SolidSharp,
};
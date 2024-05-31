import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 9H22',
  d2: 'M4 9L4.50393 14.5432C4.73952 17.1348 4.85732 18.4305 5.71663 19.2153C6.57594 20 7.87705 20 10.4793 20H13.5207C16.1229 20 17.4241 20 18.2834 19.2153C19.1427 18.4305 19.2605 17.1348 19.4961 14.5432L20 9',
  d3: 'M4 6H20M9 6L9.62283 3.94291C9.85063 3.37343 10.4022 3 11.0155 3H12.9845C13.5978 3 14.1494 3.37343 14.3772 3.94291L15 6',
  d4: 'M20 9H4L4.50393 14.5432C4.73952 17.1348 4.85732 18.4305 5.71663 19.2153C6.57594 20 7.87705 20 10.4793 20H13.5207C16.1229 20 17.4241 20 18.2834 19.2153C19.1427 18.4305 19.2605 17.1348 19.4961 14.5432L20 9Z',
  d5: 'M15.3056 4.3214L15.3217 4.36159L15.6608 5.07826C15.7104 5.1831 15.816 5.24995 15.932 5.24995H20C20.5523 5.24995 21 5.69767 21 6.24995C21 6.80224 20.5523 7.24995 20 7.24995H15.0225C15.0072 7.25031 14.992 7.2503 14.9767 7.24995H9.02326C9.00804 7.2503 8.99277 7.25031 8.97747 7.24995H4C3.44772 7.24995 3 6.80224 3 6.24995C3 5.69767 3.44772 5.24995 4 5.24995H8.068C8.18398 5.24995 8.28958 5.1831 8.33918 5.07826L8.67828 4.36159L8.69436 4.3214C9.07402 3.37226 9.99329 2.74988 11.0155 2.74988H12.9845C14.0067 2.74988 14.926 3.37226 15.3056 4.3214Z',
  d6: 'M2.5 8.74995C1.94772 8.74995 1.5 9.19767 1.5 9.74995C1.5 10.3022 1.94772 10.75 2.5 10.75H2.81266C3.07288 10.75 3.20299 10.75 3.28892 10.8284C3.37485 10.9069 3.38663 11.0365 3.41019 11.2956L3.76176 15.1629C3.87554 16.4147 3.96752 17.4266 4.14441 18.22C4.3284 19.0453 4.62354 19.7327 5.21092 20.2691C5.7983 20.8055 6.50961 21.0372 7.34815 21.1457C8.15433 21.25 9.1704 21.25 10.4274 21.25H13.5727C14.8297 21.25 15.8458 21.25 16.6519 21.1457C17.4905 21.0372 18.2018 20.8055 18.7892 20.2691C19.3766 19.7327 19.6717 19.0453 19.8557 18.22C20.0326 17.4266 20.1245 16.4147 20.2383 15.1629L20.5899 11.2956C20.6135 11.0365 20.6252 10.9069 20.7112 10.8284C20.7971 10.75 20.9272 10.75 21.1874 10.75H21.5C22.0523 10.75 22.5 10.3022 22.5 9.74995C22.5 9.19767 22.0523 8.74995 21.5 8.74995H2.5Z',
  d7: 'M3.33878 10.5L3.76267 15.1629C3.87646 16.4147 3.96843 17.4266 4.14532 18.22C4.32931 19.0453 4.62446 19.7327 5.21184 20.2691C5.79922 20.8055 6.51052 21.0372 7.34907 21.1457C8.15524 21.25 9.1713 21.25 10.4283 21.25H10.4283H10.4283H13.5736H13.5737H13.5737C14.8306 21.25 15.8467 21.25 16.6529 21.1457C17.4914 21.0372 18.2027 20.8055 18.7901 20.2691C19.3775 19.7327 19.6726 19.0453 19.8566 18.22C20.0335 17.4266 20.1255 16.4148 20.2392 15.1631L20.2392 15.163L20.2392 15.1629L20.6631 10.5H21.5C22.0523 10.5 22.5 10.0523 22.5 9.5C22.5 8.94771 22.0523 8.5 21.5 8.5L2.5 8.5C1.94772 8.5 1.5 8.94771 1.5 9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H3.33878Z',
  d8: 'M4 9L5 20H19L20 9',
  d9: 'M3.5 6H20.5M9 6L10 3H14L15 6',
  d10: 'M3.36137 10.75L4.25391 20.5679C4.28903 20.9542 4.61292 21.25 5.00083 21.25H19.0008C19.3887 21.25 19.7126 20.9542 19.7477 20.5679L20.6403 10.75H22V8.75H2V10.75H3.36137Z',
  d11: 'M9.05132 3.29702C9.18743 2.97034 9.56957 2.75 10 2.75H14C14.4304 2.75 14.8126 2.97034 14.9487 3.29702L15.7208 5H20.5V7H3.5V5H8.27924L9.05132 3.29702Z',
} as const;

export const IconPot01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-stroke-rounded IconPot01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPot01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-duotone-rounded IconPot01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPot01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-twotone-rounded IconPot01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPot01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-solid-rounded IconPot01SolidRounded"
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

export const IconPot01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-bulk-rounded IconPot01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPot01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-stroke-sharp IconPot01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPot01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pot-01-solid-sharp IconPot01SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPot01: TheIconSelfPack = {
  name: 'Pot01',
  StrokeRounded: IconPot01StrokeRounded,
  DuotoneRounded: IconPot01DuotoneRounded,
  TwotoneRounded: IconPot01TwotoneRounded,
  SolidRounded: IconPot01SolidRounded,
  BulkRounded: IconPot01BulkRounded,
  StrokeSharp: IconPot01StrokeSharp,
  SolidSharp: IconPot01SolidSharp,
};
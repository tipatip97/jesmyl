import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.45946 20L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4 18.5405',
  d2: 'M5.57835 21.8426C7.08033 19.7713 4.24567 16.9109 2.15723 18.4251C1.96763 18.5625 1.94595 18.8368 2.11159 19.0023L5.00015 21.8884C5.16597 22.0541 5.44077 22.0323 5.57835 21.8426Z',
  d3: 'M10 17L7 14',
  d4: 'M20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L7.23657 14.2204L9.75781 16.7763L20.5567 8.68934Z',
  d5: 'M5.45946 20L5.99426 19.5993M4 18.5405L4.43164 17.9644M5.99426 19.5993L20.5567 8.68934C22.3317 7.30882 22.495 4.68503 20.905 3.09501C19.315 1.50499 16.6912 1.66834 15.3107 3.4433L4.43164 17.9644M5.99426 19.5993L4.43164 17.9644',
  d6: 'M5.74541 18.258C4.78267 17.2918 3.14314 16.7819 1.71692 17.816C1.15385 18.2242 1.08928 19.0392 1.58142 19.5309L4.46998 22.4171C4.96194 22.9086 5.77708 22.8441 6.18546 22.281C7.2135 20.8633 6.70646 19.2225 5.74541 18.258Z',
  d7: 'M21.0064 9.28959L10.2289 17.364C10.2226 17.3689 10.2162 17.3737 10.2098 17.3783L6.44399 20.1996C6.11249 20.4479 5.64242 20.3805 5.39407 20.049C5.14571 19.7175 5.21311 19.2475 5.54461 18.9991L8.62826 16.6889L7.31117 15.3718L5.03192 18.4141C4.78356 18.7456 4.3135 18.813 3.982 18.5646C3.6505 18.3163 3.5831 17.8462 3.83145 17.5147L6.62173 13.7903C6.6264 13.7839 6.63118 13.7775 6.63609 13.7711L14.7187 2.98286C16.3762 0.8518 19.5264 0.655677 21.4354 2.56469C23.3444 4.4737 23.1483 7.62388 21.0172 9.28137L21.0064 9.28959Z',
  d8: 'M21.75 18.5C21.75 16.7051 20.2949 15.25 18.5 15.25C16.7051 15.25 15.25 16.7051 15.25 18.5C15.25 20.2949 16.7051 21.75 18.5 21.75C20.2949 21.75 21.75 20.2949 21.75 18.5Z',
  d9: 'M5.31322 18.6863C6.22828 19.6013 6.22828 21.0849 5.31322 22L1.99951 18.6863C2.91457 17.7712 4.39816 17.7712 5.31322 18.6863Z',
  d10: 'M21.7485 18.5C21.7485 16.7051 20.2935 15.25 18.4985 15.25C16.7036 15.25 15.2485 16.7051 15.2485 18.5C15.2485 20.2949 16.7036 21.75 18.4985 21.75C20.2935 21.75 21.7485 20.2949 21.7485 18.5Z',
  d11: 'M21.4356 2.56469C19.5266 0.655677 16.3764 0.8518 14.7189 2.98286L14.7106 2.99355L7.14847 13.0875L10.9129 16.8517L21.0175 9.28146C23.1486 7.62398 23.3446 4.4737 21.4356 2.56469Z',
  d12: 'M4.01446 17.2707L6.23991 14.3002L9.70013 17.7603L6.72852 19.9866C6.83302 20.8924 6.53787 21.8355 5.84305 22.5303L5.62412 22.75L1.24976 18.3756L1.46868 18.156C2.16402 17.4606 3.10805 17.1655 4.01446 17.2707ZM5.18033 20.807L3.19206 18.8187C3.73652 18.6535 4.35196 18.7862 4.78239 19.2166C5.21282 19.647 5.34546 20.2625 5.18033 20.807Z',
} as const;

export const IconBaseballBatStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-stroke-rounded IconBaseballBatStrokeRounded"
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
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBaseballBatDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-duotone-rounded IconBaseballBatDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBaseballBatTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-twotone-rounded IconBaseballBatTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconBaseballBatSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-solid-rounded IconBaseballBatSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBaseballBatBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-bulk-rounded IconBaseballBatBulkRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconBaseballBatStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-stroke-sharp IconBaseballBatStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="2.5" 
        cy="2.5" 
        r="2.5" 
        transform="matrix(1 0 0 1 21 16)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBaseballBatSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baseball-bat-solid-sharp IconBaseballBatSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBaseballBat: TheIconSelfPack = {
  name: 'BaseballBat',
  StrokeRounded: IconBaseballBatStrokeRounded,
  DuotoneRounded: IconBaseballBatDuotoneRounded,
  TwotoneRounded: IconBaseballBatTwotoneRounded,
  SolidRounded: IconBaseballBatSolidRounded,
  BulkRounded: IconBaseballBatBulkRounded,
  StrokeSharp: IconBaseballBatStrokeSharp,
  SolidSharp: IconBaseballBatSolidSharp,
};
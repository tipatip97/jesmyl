import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 3H6.73259C9.34372 3 10.6493 3 11.8679 3.40119C13.0866 3.80239 14.1368 4.57795 16.2373 6.12907L19.9289 8.85517C19.9692 8.88495 19.9894 8.89984 20.0084 8.91416C21.2491 9.84877 21.985 11.307 21.9998 12.8603C22 12.8841 22 12.9091 22 12.9593C22 12.9971 22 13.016 21.9997 13.032C21.9825 14.1115 21.1115 14.9825 20.032 14.9997C20.016 15 19.9971 15 19.9593 15H2',
  d2: 'M2 11H6.095C8.68885 11 9.98577 11 11.1857 11.451C12.3856 11.9019 13.3983 12.77 15.4238 14.5061L16 15',
  d3: 'M10 7H17',
  d4: 'M2 19H22',
  d5: 'M18 19V21',
  d6: 'M12 19V21',
  d7: 'M6 19V21',
  d8: 'M6.73259 3H2V11L11.5 11.5L15.5 15L20.032 14.9997C21.1115 14.9825 21.9825 14.1115 21.9997 13.032C22 13.016 22 12.9971 22 12.9593C22 12.9091 22 12.8841 21.9998 12.8603C21.985 11.307 21.2491 9.84877 20.0084 8.91416C19.9894 8.89984 19.9692 8.88495 19.9289 8.85517L16.2373 6.12907C14.1368 4.57795 13.0866 3.80239 11.8679 3.40119C10.6493 3 9.34372 3 6.73259 3Z',
  d9: 'M2 19H6M6 19H12M6 19V21M12 19H18M12 19V21M18 19H22M18 19V21',
  d10: 'M12.1024 2.68882C10.7688 2.24976 9.35032 2.24985 6.87599 2.25001L2 2.25001C1.58579 2.25001 1.25 2.5858 1.25 3.00001V9.65002C1.25 9.93286 1.25 10.0743 1.33787 10.1622C1.42574 10.25 1.56716 10.25 1.85 10.25L6.25277 10.25C8.69564 10.2498 10.1211 10.2497 11.4495 10.7489C13.1587 11.3913 14.5448 12.7647 15.9058 13.9315L17.8444 15.5229C17.9811 15.6352 18.0495 15.6913 18.1306 15.7205C18.2118 15.7497 18.3008 15.7501 18.4789 15.7508C19.0006 15.753 19.5226 15.758 20.044 15.7497C21.5283 15.7259 22.7259 14.5283 22.7496 13.044C22.779 11.2035 21.9347 9.42623 20.4596 8.31511C20.2941 8.19044 20.1271 8.06771 19.96 7.94506C19.828 7.84816 19.762 7.79971 19.6862 7.77486C19.6103 7.75 19.5288 7.75 19.3656 7.75L11.1133 7.75C10.6991 7.75 10.3633 7.41421 10.3633 7C10.3633 6.58579 10.6991 6.25 11.1133 6.25L16.4486 6.25C16.95 6.25 17.2008 6.25 17.246 6.11254C17.2913 5.97508 17.0896 5.82613 16.6862 5.52823L16.5675 5.44057C14.5771 3.97058 13.4361 3.12788 12.1024 2.68882Z',
  d11: 'M1.25 15V12.35C1.25 12.0672 1.25 11.9258 1.33787 11.8379C1.42574 11.75 1.56716 11.75 1.85 11.75H6.095C8.74292 11.75 9.87879 11.761 10.9218 12.153C11.9689 12.5466 12.8686 13.3038 14.9357 15.0756L14.9417 15.0807C15.2597 15.3418 15.4187 15.4723 15.3939 15.5908C15.3902 15.6089 15.3839 15.6263 15.3754 15.6427C15.3193 15.75 15.1136 15.75 14.7022 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15Z',
  d12: 'M1 19C1 18.4477 1.44772 18 2 18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19Z',
  d13: 'M6.11328 18C6.66557 18 7.11328 18.4477 7.11328 19V21C7.11328 21.5523 6.66557 22 6.11328 22C5.561 22 5.11328 21.5523 5.11328 21L5.11328 19C5.11328 18.4477 5.561 18 6.11328 18ZM12.1133 18C12.6656 18 13.1133 18.4477 13.1133 19V21C13.1133 21.5523 12.6656 22 12.1133 22C11.561 22 11.1133 21.5523 11.1133 21V19C11.1133 18.4477 11.561 18 12.1133 18ZM18.1133 18C18.6656 18 19.1133 18.4477 19.1133 19V21.0002C19.1133 21.5525 18.6656 22.0002 18.1133 22.0002C17.561 22.0002 17.1133 21.5525 17.1133 21.0002V19C17.1133 18.4477 17.561 18 18.1133 18Z',
  d14: 'M12.1024 2.68882C10.7688 2.24976 9.35032 2.24985 6.87599 2.25001L2 2.25001C1.58579 2.25001 1.25 2.5858 1.25 3.00001V15C1.25 15.4142 1.58579 15.75 2 15.75H19.9652C19.9972 15.75 20.0219 15.75 20.044 15.7497C21.5283 15.7259 22.7259 14.5283 22.7496 13.044C22.75 13.0219 22.75 12.9973 22.75 12.9654V12.9554C22.75 12.909 22.75 12.8806 22.7497 12.8531C22.7327 11.0668 21.8865 9.38992 20.4596 8.31511C20.4377 8.29858 20.4148 8.28168 20.3774 8.25409L16.5675 5.44057C14.5771 3.97058 13.4361 3.12788 12.1024 2.68882Z',
  d15: 'M17.6636 6.25H11.1133C10.6991 6.25 10.3633 6.58579 10.3633 7C10.3633 7.41421 10.6991 7.75 11.1133 7.75L19.6948 7.75L17.6636 6.25ZM18.121 15.75L15.9058 13.9315L15.7895 13.8318C13.8813 12.1959 12.7742 11.2468 11.4495 10.7489C10.1211 10.2497 8.69564 10.2498 6.25277 10.25L6.095 10.25H1.25V11.75H6.095C8.74292 11.75 9.87879 11.761 10.9218 12.153C11.9689 12.5466 12.8686 13.3038 14.9357 15.0756L14.9417 15.0807L15.757 15.75H18.121Z',
  d16: 'M2 3.00009L10 3L20.8395 10.2266C21.5644 10.7098 21.9997 11.5234 21.9997 12.3945C21.9997 13.8335 20.8332 15.0001 19.3942 15.0001H2',
  d17: 'M2 11.0002L11 11L16 15.0002',
  d18: 'M8 7H16',
  d19: 'M2 18H22',
  d20: 'M18 18V21M12 18V21M6 18V21',
  d21: 'M1.99999 2.75009L9.99999 2.75C10.1481 2.75 10.2928 2.79383 10.416 2.87597L16.2269 6.75H10V8.25H18.4768L21.2556 10.1025C22.189 10.7249 22.7497 11.7726 22.7497 12.8945C22.7497 14.7477 21.2474 16.2501 19.3942 16.2501H17.694L11.4881 10.9306C11.3522 10.814 11.179 10.75 11 10.75L1.25 10.7502V3.50009C1.25 3.08588 1.58578 2.75009 1.99999 2.75009Z',
  d22: 'M10.7226 12.25L15.3891 16.2501H2C1.58579 16.2501 1.25 15.9143 1.25 15.5001V12.2502L10.7226 12.25Z',
  d23: 'M19 19.25H22V17.25H2V19.25H5V21.25H7V19.25H11V21.25H13V19.25H17V21.25H19V19.25Z',
} as const;

export const IconSpeedTrain02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-stroke-rounded IconSpeedTrain02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeedTrain02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-duotone-rounded IconSpeedTrain02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeedTrain02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-twotone-rounded IconSpeedTrain02TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeedTrain02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-solid-rounded IconSpeedTrain02SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeedTrain02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-bulk-rounded IconSpeedTrain02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeedTrain02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-stroke-sharp IconSpeedTrain02StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpeedTrain02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="speed-train-02-solid-sharp IconSpeedTrain02SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpeedTrain02: TheIconSelfPack = {
  name: 'SpeedTrain02',
  StrokeRounded: IconSpeedTrain02StrokeRounded,
  DuotoneRounded: IconSpeedTrain02DuotoneRounded,
  TwotoneRounded: IconSpeedTrain02TwotoneRounded,
  SolidRounded: IconSpeedTrain02SolidRounded,
  BulkRounded: IconSpeedTrain02BulkRounded,
  StrokeSharp: IconSpeedTrain02StrokeSharp,
  SolidSharp: IconSpeedTrain02SolidSharp,
};
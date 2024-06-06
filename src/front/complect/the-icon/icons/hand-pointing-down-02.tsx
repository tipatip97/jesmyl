import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.41601 10L7.41601 13.5M7.41601 13.5V19.75C7.41601 20.7165 8.19951 21.5 9.16601 21.5C10.1325 21.5 10.916 20.7165 10.916 19.75V14.5L13.993 14.0224C15.9216 13.7331 16.886 13.5885 17.5652 13.1816C18.6872 12.5094 19.5 11.5 19.5 10.0264C19.5 9 19.2463 8.3114 18.6296 6.46127C18.2383 5.28733 18.0426 4.70036 17.7236 4.23571C17.1983 3.47073 16.4233 2.9122 15.5315 2.65576C14.9898 2.5 14.3711 2.5 13.1336 2.5H11.7287C9.94422 2.5 9.05198 2.5 8.28584 2.83495C7.9397 2.98627 7.61674 3.18587 7.32659 3.42779C6.68438 3.96326 6.28536 4.7613 5.48731 6.35738C4.84015 7.65171 4.51657 8.29887 4.50083 8.96984C4.49373 9.27244 4.53246 9.57436 4.61571 9.86537C4.80031 10.5106 5.27678 11.0552 6.2297 12.1442L7.41601 13.5Z',
  d2: 'M7.41601 19.75L7.41601 13.5L6.2297 12.1442C5.27678 11.0552 4.80031 10.5106 4.61571 9.86537C4.53246 9.57436 4.49373 9.27244 4.50083 8.96984C4.51657 8.29887 4.84015 7.65171 5.48731 6.35738C6.28536 4.7613 6.68438 3.96326 7.32659 3.42779C7.61674 3.18587 7.9397 2.98627 8.28584 2.83495C9.05198 2.5 9.94422 2.5 11.7287 2.5H13.1336C14.3711 2.5 14.9898 2.5 15.5315 2.65576C16.4233 2.9122 17.1983 3.47073 17.7236 4.23571C18.0426 4.70036 18.2383 5.28733 18.6296 6.46127C19.2463 8.3114 19.5 9 19.5 10.0264C19.5 11.5 18.6872 12.5094 17.5652 13.1816C16.886 13.5885 15.9216 13.7331 13.993 14.0224L10.916 14.5V19.75C10.916 20.7165 10.1325 21.5 9.16601 21.5C8.19951 21.5 7.41601 20.7165 7.41601 19.75Z',
  d3: 'M10.916 2.5L13.1336 2.5C14.3711 2.5 14.9898 2.5 15.5315 2.65576C16.4233 2.91219 17.1983 3.47073 17.7236 4.23571C18.0426 4.70036 18.2383 5.28733 18.6296 6.46127C19.2463 8.3114 19.5 9 19.5 10.0264C19.5 11.5 18.6872 12.5094 17.5652 13.1816C16.886 13.5885 15.9216 13.7331 13.993 14.0224L10.916 14.5L10.916 19.75C10.916 20.7165 10.1325 21.5 9.16601 21.5C9.11002 21.5 9.05464 21.4974 9 21.4922',
  d4: 'M6.66601 13.7819L6.66601 19.7501C6.66601 21.1308 7.7853 22.2501 9.16601 22.2501C10.5467 22.2501 11.666 21.1308 11.666 19.7501V15.1426L14.1043 14.7642L14.108 14.7636L14.1306 14.7602C15.0726 14.6189 15.8158 14.5075 16.4068 14.3791C17.0075 14.2486 17.5095 14.0893 17.9506 13.825C19.2281 13.0597 20.25 11.8368 20.25 10.0265C20.25 8.9395 19.9875 8.15547 19.4727 6.61765C19.1188 5.55532 18.7216 4.36419 18.3418 3.81122C17.718 2.90281 16.7978 2.23955 15.7388 1.93503C15.0941 1.74967 12.6741 1.7498 11.5544 1.75003C9.93866 1.74954 8.89712 1.74923 7.9854 2.14782C7.57436 2.32752 7.19085 2.56454 6.8463 2.85182C6.08206 3.48904 5.61655 4.42076 4.8944 5.86616C4.5825 6.48994 4.23662 7.18175 4.06139 7.61775C3.87909 8.07134 3.76179 8.49402 3.75103 8.95232C3.74216 9.33056 3.79057 9.70797 3.89464 10.0717C4.02073 10.5125 4.24093 10.8918 4.53182 11.2847C4.81144 11.6624 5.18574 12.0901 5.645 12.615L6.66601 13.7819Z',
  d5: 'M7.41601 8.96984V13.5M7.41601 13.5V19.75C7.41601 20.7165 8.19951 21.5 9.16601 21.5C10.1325 21.5 10.916 20.7165 10.916 19.75V14.5H16.5C18.1569 14.5 19.5 13.1569 19.5 11.5V5.5C19.5 3.84315 18.1569 2.5 16.5 2.5H8L5.48731 6.35738C4.61571 7.68485 4.51657 8.29887 4.50083 8.96984C4.49373 9.27244 4.53246 9.57436 4.61571 9.86537C4.80031 10.5106 5.27679 11.0552 6.2297 12.1442L7.41601 13.5Z',
  d6: 'M16.5 1.75C18.5711 1.75 20.25 3.42893 20.25 5.5V11.5C20.25 13.5711 18.5711 15.25 16.5 15.25H11.666V19.75C11.666 21.1307 10.5467 22.25 9.16601 22.25C7.78529 22.25 6.66601 21.1307 6.66601 19.75V13.7818L5.64498 12.6149C5.18574 12.0901 4.81144 11.6623 4.53183 11.2847C4.24093 10.8918 4.02073 10.5124 3.89464 10.0717C3.79057 9.7079 3.74216 9.33049 3.75103 8.95225C3.75991 8.57409 3.79394 8.17094 3.96228 7.67062C4.1258 7.18466 4.40464 6.63996 4.85961 5.94691L7.59346 1.75H16.5Z',
} as const;

export const IconHandPointingDown02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-stroke-rounded IconHandPointingDown02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-duotone-rounded IconHandPointingDown02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-twotone-rounded IconHandPointingDown02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconHandPointingDown02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-solid-rounded IconHandPointingDown02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-bulk-rounded IconHandPointingDown02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-stroke-sharp IconHandPointingDown02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-02-solid-sharp IconHandPointingDown02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingDown02: TheIconSelfPack = {
  name: 'HandPointingDown02',
  StrokeRounded: IconHandPointingDown02StrokeRounded,
  DuotoneRounded: IconHandPointingDown02DuotoneRounded,
  TwotoneRounded: IconHandPointingDown02TwotoneRounded,
  SolidRounded: IconHandPointingDown02SolidRounded,
  BulkRounded: IconHandPointingDown02BulkRounded,
  StrokeSharp: IconHandPointingDown02StrokeSharp,
  SolidSharp: IconHandPointingDown02SolidSharp,
};
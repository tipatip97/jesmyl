import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 10C16.995 9.36815 14.5882 9 12 9C9.41179 9 7.00499 9.36815 5 10V13.5C7.00499 12.8682 9.41179 12.5 12 12.5C14.5882 12.5 16.995 12.8682 19 13.5V10Z',
  d2: 'M19 13V15.0232C19 17.1542 17.9679 19.129 16.2812 20.2254L14.8812 21.1354C13.1078 22.2882 10.8922 22.2882 9.11882 21.1354L7.71883 20.2254C6.03208 19.129 5 17.1542 5 15.0232V13',
  d3: 'M19 10L20.1257 9.4071C21.3888 8.57875 22.0203 8.16457 21.9995 7.57281C21.9787 6.98105 21.32 6.62104 20.0025 5.90101L15.2753 3.31756C13.6681 2.43919 12.8645 2 12 2C11.1355 2 10.3319 2.43919 8.72468 3.31756L3.99753 5.90101C2.68004 6.62104 2.02129 6.98105 2.0005 7.57281C1.9797 8.16457 2.61125 8.57875 3.87434 9.4071L5 10',
  d4: 'M14.8812 21.1353L16.2812 20.2253C17.9679 19.1289 19 17.1541 19 15.023V14.0115C12.6 11.6207 7 13.0153 5 14.0115V15.023C5 17.1541 6.03208 19.1289 7.71883 20.2253L9.11882 21.1353C10.8922 22.288 13.1078 22.288 14.8812 21.1353Z',
  d5: 'M15.2753 3.31756L20.0025 5.90101C21.32 6.62104 21.9787 6.98105 21.9995 7.57281C22.0203 8.16457 21.3888 8.57875 20.1257 9.4071L19 10C13 8 7.16667 9.16667 5 10L3.87434 9.4071C2.61125 8.57875 1.9797 8.16457 2.0005 7.57281C2.02129 6.98105 2.68004 6.62104 3.99753 5.90101L8.72468 3.31756C10.3319 2.43919 11.1355 2 12 2C12.8645 2 13.6681 2.43919 15.2753 3.31756Z',
  d6: 'M19 10V13V15.0232C19 17.1542 17.9679 19.129 16.2812 20.2254L14.8812 21.1354C13.1078 22.2882 10.8922 22.2882 9.11882 21.1354L7.71883 20.2254C6.03208 19.129 5 17.1542 5 15.0232V13V10',
  d7: 'M5 11.875C5.55228 11.875 6 12.3227 6 12.875V14.8982C6 16.7148 6.88044 18.3628 8.26382 19.262L9.66382 20.172C11.1058 21.1093 12.8942 21.1093 14.3362 20.172L15.7362 19.262C17.1196 18.3628 18 16.7148 18 14.8982V12.875C18 12.3227 18.4477 11.875 19 11.875C19.5523 11.875 20 12.3227 20 12.875V14.8982C20 17.3437 18.8163 19.6452 16.8262 20.9389L15.4262 21.8489C13.3214 23.217 10.6786 23.217 8.57383 21.8489L7.17383 20.9389C5.18371 19.6452 4 17.3437 4 14.8982V12.875C4 12.3227 4.44772 11.875 5 11.875Z',
  d8: 'M12 1.125C11.4297 1.125 10.9077 1.27288 10.3442 1.51556C9.80197 1.74911 9.1734 2.09264 8.39645 2.51726L3.58599 5.14623C2.97174 5.48186 2.43523 5.77502 2.05706 6.06434C1.65507 6.37188 1.27304 6.79387 1.25099 7.42147C1.22901 8.04686 1.57809 8.4961 1.95505 8.83441C2.31094 9.1538 2.82448 9.49054 3.41402 9.8771L3.41407 9.87714L3.41409 9.87715L4 10.19V13.375C4 13.6139 4.11749 13.8385 4.31636 13.9798C4.51523 14.1211 4.77168 14.1621 5.00689 14.0903C6.99331 13.4839 9.39843 13.125 12 13.125C14.6016 13.125 17.0067 13.4839 18.9931 14.0903C19.2283 14.1621 19.4848 14.1211 19.6836 13.9798C19.8825 13.8385 20 13.6139 20 13.375V10.19L20.5859 9.87716C21.1755 9.49057 21.6891 9.15382 22.045 8.83441C22.422 8.4961 22.771 8.04686 22.7491 7.42147C22.727 6.79387 22.345 6.37188 21.943 6.06434C21.5648 5.77502 21.0283 5.48186 20.414 5.14623L15.6036 2.51727C14.8267 2.09264 14.1981 1.74911 13.6558 1.51556C13.0923 1.27288 12.5704 1.125 12 1.125Z',
  d9: 'M19 13.5V10H5V13.5H19Z',
  d10: 'M19 13V15.25C19 20.5 12 22 12 22C12 22 5 20.5 5 15.25V13',
  d11: 'M18.9998 10L21.9993 7.57281L11.9998 2L1.99805 7.57281L4.9998 10',
  d12: 'M11.6367 1.34476C11.8637 1.2184 12.1399 1.21841 12.3669 1.3448L22.3664 6.91319C22.5839 7.03435 22.7271 7.25552 22.7485 7.50348C22.7699 7.75143 22.6667 7.99382 22.473 8.15037L19.75 10.3521V15.2389C19.75 18.2525 17.7256 20.1378 15.8808 21.2241C14.9488 21.7729 14.0233 22.1436 13.3347 22.3771C12.9891 22.4943 12.6998 22.578 12.4948 22.6328C12.419 22.6531 12.2161 22.7 12.0923 22.7286C12.0487 22.7386 12.0149 22.7464 12 22.75C11.985 22.7464 11.9513 22.7386 11.9076 22.7286C11.7839 22.7 11.581 22.6531 11.5052 22.6328C11.3002 22.578 11.0109 22.4943 10.6653 22.3771C9.97665 22.1436 9.05121 21.7729 8.11923 21.2241C6.27436 20.1378 4.25 18.2525 4.25 15.2389V10.3494L1.52844 8.15054C1.33471 7.99402 1.23141 7.7516 1.25276 7.50358C1.27412 7.25556 1.41733 7.03432 1.63496 6.91316L11.6367 1.34476ZM18.25 12.2405H5.75V15.2389C5.75 17.4712 7.22564 18.9582 8.88077 19.9328C9.69879 20.4144 10.5233 20.7462 11.1472 20.9577C11.4579 21.063 11.8222 21.1653 12 21.2129C12.1778 21.1653 12.5421 21.063 12.8528 20.9577C13.4767 20.7462 14.3012 20.4144 15.1192 19.9328C16.7744 18.9582 18.25 17.4712 18.25 15.2389V12.2405Z',
} as const;

export const IconGraduateMaleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-stroke-rounded IconGraduateMaleStrokeRounded"
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

export const IconGraduateMaleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-duotone-rounded IconGraduateMaleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconGraduateMaleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-twotone-rounded IconGraduateMaleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconGraduateMaleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-solid-rounded IconGraduateMaleSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconGraduateMaleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-bulk-rounded IconGraduateMaleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGraduateMaleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-stroke-sharp IconGraduateMaleStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGraduateMaleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-male-solid-sharp IconGraduateMaleSolidSharp"
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

export const iconPackOfGraduateMale: TheIconSelfPack = {
  name: 'GraduateMale',
  StrokeRounded: IconGraduateMaleStrokeRounded,
  DuotoneRounded: IconGraduateMaleDuotoneRounded,
  TwotoneRounded: IconGraduateMaleTwotoneRounded,
  SolidRounded: IconGraduateMaleSolidRounded,
  BulkRounded: IconGraduateMaleBulkRounded,
  StrokeSharp: IconGraduateMaleStrokeSharp,
  SolidSharp: IconGraduateMaleSolidSharp,
};
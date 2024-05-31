import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2C19.4001 2 20.1002 2 20.635 2.27248C21.1054 2.51217 21.4878 2.89462 21.7275 3.36502C22 3.8998 22 4.59987 22 6C22 7.40013 22 8.1002 21.7275 8.63498C21.4878 9.10538 21.1054 9.48783 20.635 9.72752C20.1002 10 19.4001 10 18 10L6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2L18 2Z',
  d2: 'M12 18L12 10M12 18C11.2998 18 9.99153 16.0057 9.5 15.5M12 18C12.7002 18 14.0085 16.0057 14.5 15.5',
  d3: 'M2 16C2 18.3389 2 19.5083 2.53646 20.3621C2.81621 20.8073 3.19267 21.1838 3.63789 21.4635C4.49167 22 5.66111 22 8 22L16 22C18.3389 22 19.5083 22 20.3621 21.4635C20.8073 21.1838 21.1838 20.8073 21.4635 20.3621C22 19.5083 22 18.3389 22 16',
  d4: 'M1.25 6.03143C1.24999 6.7048 1.24998 7.25551 1.28655 7.70307C1.3244 8.16633 1.40514 8.58473 1.60423 8.97547C1.91582 9.587 2.41301 10.0842 3.02453 10.3958C3.41527 10.5949 3.83367 10.6756 4.29693 10.7134C4.74448 10.75 5.29518 10.75 5.96853 10.75L5.96856 10.75L18.0314 10.75L18.0315 10.75C18.7048 10.75 19.2555 10.75 19.7031 10.7134C20.1663 10.6756 20.5847 10.5949 20.9755 10.3958C21.587 10.0842 22.0842 9.587 22.3958 8.97547C22.5949 8.58473 22.6756 8.16633 22.7134 7.70307C22.75 7.25551 22.75 6.70481 22.75 6.03144L22.75 5.96856C22.75 5.29519 22.75 4.74449 22.7134 4.29693C22.6756 3.83367 22.5949 3.41527 22.3958 3.02453C22.0842 2.413 21.587 1.91582 20.9755 1.60423C20.5847 1.40514 20.1663 1.3244 19.7031 1.28655C19.2555 1.24998 18.7048 1.24999 18.0314 1.25L5.96858 1.25L5.96857 1.25C5.2952 1.24999 4.74449 1.24998 4.29693 1.28655C3.83367 1.3244 3.41527 1.40514 3.02453 1.60423C2.413 1.91582 1.91582 2.413 1.60423 3.02453C1.40514 3.41527 1.3244 3.83367 1.28655 4.29693C1.24998 4.74449 1.24999 5.2952 1.25 5.96857L1.25 5.96858L1.25 6.03142L1.25 6.03143Z',
  d5: 'M3.31239 18.3914C3.2511 17.7595 3.25 16.9392 3.25 15.75C3.25 15.1977 2.80229 14.75 2.25 14.75C1.69772 14.75 1.25 15.1977 1.25 15.75L1.25 15.8005L1.25 15.8005C1.24999 16.927 1.24997 17.8446 1.32173 18.5845C1.39605 19.3508 1.55466 20.0313 1.93974 20.6441C2.29942 21.2166 2.78344 21.7006 3.35586 22.0603C3.96871 22.4453 4.64919 22.604 5.4155 22.6783C6.1554 22.75 7.07296 22.75 8.19952 22.75L15.8005 22.75C16.927 22.75 17.8446 22.75 18.5845 22.6783C19.3508 22.604 20.0313 22.4453 20.6441 22.0603C21.2166 21.7006 21.7006 21.2166 22.0603 20.6441C22.4453 20.0313 22.604 19.3508 22.6783 18.5845C22.75 17.8446 22.75 16.9271 22.75 15.8005L22.75 15.8005L22.75 15.75C22.75 15.1977 22.3023 14.75 21.75 14.75C21.1977 14.75 20.75 15.1977 20.75 15.75C20.75 16.9392 20.7489 17.7595 20.6876 18.3914C20.6278 19.008 20.5182 19.3392 20.3668 19.5801C20.167 19.8981 19.8981 20.167 19.5801 20.3668C19.3392 20.5182 19.008 20.6278 18.3914 20.6876C17.7595 20.7489 16.9392 20.75 15.75 20.75L8.25 20.75C7.06078 20.75 6.24053 20.7489 5.60856 20.6876C4.99198 20.6278 4.66085 20.5182 4.41992 20.3668C4.10191 20.167 3.83301 19.8981 3.63319 19.5801C3.48181 19.3392 3.37219 19.008 3.31239 18.3914Z',
  d6: 'M12 9C11.4477 9 11 9.44772 11 10L11 15.0001L10.1962 15.0001L10.1775 15C10.1073 14.9999 9.98207 14.9996 9.87285 15.0137L9.86923 15.0141C9.79033 15.0241 9.32077 15.0837 9.0943 15.5543C8.86682 16.0271 9.1172 16.4328 9.15759 16.4982L9.1599 16.502C9.21722 16.5956 9.29574 16.6931 9.34079 16.7491L9.3408 16.7491L9.35276 16.764C9.40925 16.8345 9.47389 16.9168 9.54457 17.0067C9.77851 17.3045 10.0789 17.6868 10.3713 18.0086C10.5639 18.2206 10.7834 18.4411 11.0116 18.6149C11.2049 18.7621 11.56 19 12 19C12.44 19 12.7951 18.7621 12.9884 18.6149C13.2166 18.4411 13.4361 18.2206 13.6287 18.0086C13.9211 17.6868 14.2215 17.3045 14.4554 17.0067C14.5261 16.9168 14.5907 16.8345 14.6472 16.764L14.6592 16.7491C14.7043 16.6932 14.7828 16.5956 14.8401 16.502L14.8424 16.4982C14.8828 16.4328 15.1332 16.0271 14.9057 15.5543C14.6792 15.0837 14.2097 15.0241 14.1308 15.0141L14.1271 15.0137C14.0179 14.9996 13.8927 14.9999 13.8225 15L13.8038 15.0001L13 15.0001L13 10C13 9.44772 12.5523 9 12 9Z',
  d7: 'M1.99805 10L21.998 10V2L1.99805 2L1.99805 10Z',
  d8: 'M1.99805 14V22H21.998V14',
  d9: 'M11.998 10L11.998 17.625M14.498 15.5L11.998 18L9.49805 15.5',
  d10: 'M21.9995 1.25C22.4137 1.25 22.7495 1.58579 22.7495 2V10C22.7495 10.4142 22.4137 10.75 21.9995 10.75L1.99951 10.75C1.5853 10.75 1.24951 10.4142 1.24951 10L1.24951 2C1.24951 1.58579 1.5853 1.25 1.99951 1.25L21.9995 1.25Z',
  d11: 'M20.795 20.8611V14.25H22.7495V21.8056C22.7495 22.3272 22.312 22.75 21.7722 22.75L2.22678 22.75C1.68705 22.75 1.24951 22.3272 1.24951 21.8056L1.24951 14.25H3.20406L3.20406 20.8611L20.795 20.8611Z',
  d12: 'M15.2067 16.2071L11.9996 19.4142L8.79248 16.2071L10.2067 14.7929L10.9996 15.5858L10.9996 10H12.9996L12.9996 15.5858L13.7925 14.7929L15.2067 16.2071Z',
} as const;

export const IconTransitionBottomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-stroke-rounded IconTransitionBottomStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTransitionBottomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-duotone-rounded IconTransitionBottomDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTransitionBottomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-twotone-rounded IconTransitionBottomTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionBottomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-solid-rounded IconTransitionBottomSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconTransitionBottomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-bulk-rounded IconTransitionBottomBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionBottomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-stroke-sharp IconTransitionBottomStrokeSharp"
    >
      <path 
        d={d.d7} 
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
      />
    </TheIconWrapper>
  );
};

export const IconTransitionBottomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-bottom-solid-sharp IconTransitionBottomSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTransitionBottom: TheIconSelfPack = {
  name: 'TransitionBottom',
  StrokeRounded: IconTransitionBottomStrokeRounded,
  DuotoneRounded: IconTransitionBottomDuotoneRounded,
  TwotoneRounded: IconTransitionBottomTwotoneRounded,
  SolidRounded: IconTransitionBottomSolidRounded,
  BulkRounded: IconTransitionBottomBulkRounded,
  StrokeSharp: IconTransitionBottomStrokeSharp,
  SolidSharp: IconTransitionBottomSolidSharp,
};
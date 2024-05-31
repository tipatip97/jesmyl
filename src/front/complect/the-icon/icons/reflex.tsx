import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22.0007 10.5H11.8276C10.692 10.5 10.1242 10.5 9.65783 10.7714C9.19147 11.0428 8.91094 11.5365 8.34989 12.5238L3.70815 21.4524M22.0007 10.5C22.0007 9.93982 19.9999 8.5 19.9999 8.5M22.0007 10.5C22.0007 11.0602 19.9999 12.5 19.9999 12.5M3.70815 21.4524C3.23858 21.1799 3 18.794 3 18.794M3.70815 21.4524C4.17772 21.7248 6.35295 20.7395 6.35295 20.7395',
  d2: 'M15.9368 10.5C15.9785 10.1889 16 9.87134 16 9.54873C16 5.65582 12.866 2.5 9 2.5C5.13401 2.5 2 5.65582 2 9.54873C2 12.3606 3.63505 14.8687 6 16',
  d3: 'M9.65783 10.7714C10.1242 10.5 10.692 10.5 11.8276 10.5H15.9368C15.9785 10.1889 16 9.87134 16 9.54873C16 5.65582 12.866 2.5 9 2.5C5.13401 2.5 2 5.65582 2 9.54873C2 12.3606 3.63505 14.8687 6 16L6.4331 16.2108L8.34989 12.5238C8.91094 11.5365 9.19147 11.0428 9.65783 10.7714Z',
  d4: 'M5.19513 16.4243C2.83257 15.0734 1.25 12.4551 1.25 9.54873C1.25 5.24652 4.7149 1.75 9 1.75C13.2689 1.75 16.7238 5.22015 16.7499 9.5L19.25 9.5V8.5C19.2499 8.34806 19.2958 8.19466 19.3913 8.06191C19.6332 7.7257 20.1027 7.64986 20.4389 7.8918L20.444 7.89565C20.6434 8.04844 21.2274 8.49596 21.4894 8.72116C21.7497 8.94497 22.0304 9.20392 22.252 9.45647C22.3622 9.58206 22.4736 9.72376 22.5613 9.87286C22.6391 10.0051 22.7509 10.2293 22.7509 10.5C22.7509 10.7707 22.6391 10.9949 22.5613 11.1271C22.4736 11.2762 22.3622 11.4179 22.252 11.5435C22.0304 11.796 21.7497 12.055 21.4894 12.2788C21.2276 12.5038 20.6441 12.9509 20.4444 13.104L20.4389 13.1082C20.1027 13.3501 19.6332 13.2743 19.3913 12.9381C19.2961 12.8058 19.2502 12.6531 19.25 12.5017V11.5H11.8277C11.2403 11.5 10.8721 11.5011 10.5905 11.529C10.2577 11.5475 9.96211 11.8217 9.85589 11.9565C9.69424 12.1851 9.51347 12.5004 9.2286 13.0017L5.81628 19.5654L6.65583 20.0534C6.8188 20.1252 6.95692 20.2551 7.03619 20.4301C7.2071 20.8074 7.03888 21.2522 6.66156 21.4231L6.65583 21.4255C6.43091 21.5193 5.77205 21.7941 5.45591 21.9055C5.14185 22.0161 4.7876 22.1271 4.46681 22.1913C4.3073 22.2233 4.13274 22.2485 3.96289 22.2499C3.81261 22.2512 3.5647 22.2362 3.3318 22.1011C3.09936 21.9662 2.96318 21.7587 2.88958 21.6281C2.80624 21.4803 2.74094 21.3163 2.68882 21.1618C2.58399 20.8511 2.50257 20.4878 2.44091 20.1593C2.37896 19.8292 2.28647 19.1195 2.25473 18.8759L2.25378 18.8686C2.21256 18.4565 2.51327 18.0889 2.92543 18.0477C3.07051 18.0332 3.21006 18.0611 3.3318 18.1212L4.08525 18.5592L5.19513 16.4243Z',
  d5: 'M19.3913 8.06161C19.6332 7.72539 20.1027 7.64955 20.4389 7.89149L20.444 7.89535C20.6434 8.04813 21.2274 8.49566 21.4894 8.72085C21.7497 8.94466 22.0304 9.20361 22.252 9.45616C22.3622 9.58176 22.4736 9.72346 22.5613 9.87256C22.6391 10.0048 22.7509 10.229 22.7509 10.4997C22.7509 10.7704 22.6391 10.9946 22.5613 11.1268C22.4736 11.2759 22.3622 11.4176 22.252 11.5432C22.0304 11.7957 21.7497 12.0547 21.4894 12.2785C21.2276 12.5035 20.6441 12.9506 20.4444 13.1037L20.4389 13.1079C20.1027 13.3498 19.6332 13.274 19.3913 12.9377C19.2961 12.8055 19.2502 12.6528 19.25 12.5014V11.4997H11.8277C11.2403 11.4997 10.8721 11.5008 10.5905 11.5287C10.2577 11.5472 9.96211 11.8214 9.85589 11.9562C9.69424 12.1848 9.51347 12.5001 9.2286 13.0014L5.81628 19.5651L6.65583 20.0531C6.8188 20.1249 6.95692 20.2548 7.03619 20.4298C7.2071 20.8071 7.03888 21.2519 6.66156 21.4228L6.65583 21.4252C6.43091 21.519 5.77205 21.7938 5.45591 21.9052C5.14185 22.0158 4.7876 22.1268 4.46681 22.191C4.3073 22.2229 4.13274 22.2482 3.96289 22.2496C3.81261 22.2509 3.5647 22.2359 3.3318 22.1007C3.09936 21.9659 2.96318 21.7584 2.88958 21.6278C2.80624 21.4799 2.74094 21.316 2.68882 21.1615C2.58399 20.8508 2.50257 20.4875 2.44091 20.159C2.37896 19.8289 2.28647 19.1192 2.25473 18.8756L2.25378 18.8683C2.21256 18.4562 2.51327 18.0886 2.92543 18.0474C3.07051 18.0329 3.21006 18.0608 3.3318 18.1209L4.08525 18.5589L7.28029 12.2428C7.95558 10.9078 8.29323 10.2403 8.89554 9.87001C9.49786 9.4997 10.2459 9.4997 11.7419 9.4997L19.25 9.4997V8.49969C19.2499 8.34775 19.2958 8.19435 19.3913 8.06161Z',
  d6: 'M1.25 9.54873C1.25 12.4456 2.82222 15.0563 5.17194 16.411L7.28029 12.2431C7.95558 10.9081 8.29323 10.2406 8.89554 9.87031C9.49786 9.5 10.2459 9.5 11.7419 9.5H16.7499C16.7238 5.22015 13.2689 1.75 9 1.75C4.7149 1.75 1.25 5.24652 1.25 9.54873Z',
  d7: 'M19 8L22 10.5074L19 13M3 18L4 21.5L8 20M21.3437 10.5074H9.49974L4.33122 20.838',
  d8: 'M19.3919 6.98242L22.3919 9.48978C22.6196 9.6801 22.751 9.96174 22.7506 10.2585C22.7502 10.5553 22.6179 10.8366 22.3897 11.0262L19.3897 13.5189L18.1115 11.9806L18.9823 11.2571H9.86819L5.78473 19.4189L7.39946 18.8134L8.10171 20.686L4.10171 22.186C3.8403 22.2841 3.54981 22.2684 3.3005 22.1427C3.05119 22.017 2.86576 21.7929 2.78906 21.5244L1.78906 18.0244L3.71211 17.475L4.00612 18.504L8.35602 9.80964C8.52545 9.47097 8.87165 9.25707 9.25033 9.25707H18.9948L18.1093 8.51701L19.3919 6.98242Z',
  d9: 'M9.33855 10.4004L5.67636 16.6766C3.04995 15.4202 1.25 12.6483 1.25 9.54873C1.25 5.24652 4.7149 1.75 9 1.75C13.2851 1.75 16.75 5.24652 16.75 9.54873C16.75 9.90474 16.7262 10.2556 16.6802 10.5996L9.33855 10.4004Z',
} as const;

export const IconReflexStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-stroke-rounded IconReflexStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconReflexDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-duotone-rounded IconReflexDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconReflexTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-twotone-rounded IconReflexTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconReflexSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-solid-rounded IconReflexSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconReflexBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-bulk-rounded IconReflexBulkRounded"
    >
      <path 
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

export const IconReflexStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-stroke-sharp IconReflexStrokeSharp"
    >
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconReflexSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reflex-solid-sharp IconReflexSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfReflex: TheIconSelfPack = {
  name: 'Reflex',
  StrokeRounded: IconReflexStrokeRounded,
  DuotoneRounded: IconReflexDuotoneRounded,
  TwotoneRounded: IconReflexTwotoneRounded,
  SolidRounded: IconReflexSolidRounded,
  BulkRounded: IconReflexBulkRounded,
  StrokeSharp: IconReflexStrokeSharp,
  SolidSharp: IconReflexSolidSharp,
};
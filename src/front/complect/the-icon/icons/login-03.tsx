import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.9871 10.2401 20.8194 9.05112 20.484C6.18961 19.6769 3.70555 18.3204 3.10956 15.2816C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27704 3.10956 8.71845C3.70555 5.67963 6.18961 4.32314 9.05112 3.516C10.2401 3.18062 10.8346 3.01293 11.3156 3.00116C13.3831 2.95058 14.9264 4.52305 15 6.37499',
  d2: 'M10 12H21M10 12C10 11.2998 11.9943 9.99153 12.5 9.5M10 12C10 12.7002 11.9943 14.0085 12.5 14.5',
  d3: 'M3 11.1627V12.8373C3 14.0944 3 14.723 3.10956 15.2815C3.70555 18.3203 6.18961 19.6768 9.05112 20.484C10.2401 20.8194 10.8346 20.987 11.3156 20.9988C13.3831 21.0494 14.9264 19.4769 15 17.625V6.37501C14.9264 4.52307 13.3831 2.95061 11.3156 3.00119C10.8346 3.01295 10.2401 3.18064 9.05112 3.51603C6.18961 4.32316 3.70555 5.67965 3.10956 8.71846C3 9.27705 3 9.90561 3 11.1627Z',
  d4: 'M11.5412 2.0015C14.1631 1.93735 16.1543 3.94579 16.2492 6.3353C16.2712 6.88715 15.8416 7.35229 15.2897 7.37423C14.7379 7.39616 14.2727 6.96658 14.2508 6.41473C14.1986 5.10037 13.1031 3.96388 11.5901 4.0009C11.2681 4.00878 10.8273 4.12457 9.57262 4.47848C6.79407 5.26221 4.82159 6.4599 4.34088 8.91093C4.25456 9.35105 4.25002 9.86248 4.25002 11.1628V12.8373C4.25002 14.1375 4.25456 14.649 4.34088 15.0891C4.82159 17.5401 6.79407 18.7378 9.57261 19.5215C10.8273 19.8754 11.2681 19.9912 11.5901 19.9991C13.1031 20.0361 14.1986 18.8996 14.2508 17.5853C14.2727 17.0334 14.7379 16.6038 15.2897 16.6258C15.8416 16.6477 16.2712 17.1129 16.2492 17.6647C16.1543 20.0542 14.1631 22.0627 11.5412 21.9985C10.9317 21.9836 10.224 21.7837 9.18755 21.491C9.13575 21.4764 9.08313 21.4615 9.02967 21.4464C6.08519 20.6159 3.08955 19.1006 2.37827 15.474C2.24978 14.8189 2.24987 14.0995 2.25001 12.9538C2.25001 12.9154 2.25002 12.8766 2.25002 12.8373L2.25002 11.1628C2.25002 11.1234 2.25001 11.0846 2.25001 11.0463C2.24987 9.90053 2.24978 9.18113 2.37827 8.526C3.08955 4.89942 6.0852 3.38413 9.02967 2.55359C9.08314 2.53851 9.13576 2.52365 9.18756 2.50902C10.224 2.21629 10.9317 2.01641 11.5412 2.0015Z',
  d5: 'M20.75 13.0059C21.3023 13.0059 21.75 12.5581 21.75 12.0059C21.75 11.4536 21.3023 11.0059 20.75 11.0059L13.25 11.0059L13.25 10.4116C13.2501 10.236 13.2503 10.0203 13.2282 9.84387L13.2278 9.84053C13.212 9.71408 13.1402 9.13804 12.5746 8.86368C12.0077 8.58872 11.5076 8.89065 11.3994 8.95597L10.9309 9.29511C10.5551 9.58975 10.0406 9.99545 9.64962 10.3759C9.45451 10.5657 9.25328 10.783 9.09443 11.0139C8.95323 11.2191 8.74996 11.5693 8.74996 12C8.74996 12.4307 8.95323 12.7809 9.09443 12.9861C9.25328 13.217 9.45451 13.4343 9.64962 13.6241C10.0406 14.0046 10.5551 14.4102 10.9309 14.7049L11.3994 15.044C11.5076 15.1093 12.0078 15.4113 12.5746 15.1363C13.1402 14.862 13.212 14.2859 13.2278 14.1595L13.2282 14.1561C13.2503 13.9797 13.2501 13.764 13.25 13.5884L13.25 13.0059L20.75 13.0059Z',
  d6: 'M15 17.9987L13 21.9974L3 17.9987L3 5.99868L13 2L15 5.99868',
  d7: 'M21 11.9961H10.6916M13.0002 8.99609L10 11.9961L13.0002 14.9961',
  d8: 'M13.1287 1.07264C13.6115 0.879578 14.1617 1.08876 14.3943 1.55382L16.3944 5.55251L14.6056 6.44718L13.0171 3.27123L4.5 6.67696L4.5 17.3227L13.0171 20.7285L14.6056 17.5525L16.3944 18.4472L14.3943 22.4459C14.1617 22.9109 13.6115 23.1201 13.1287 22.927L3.12872 18.9284C2.749 18.7765 2.5 18.4088 2.5 17.9998L2.5 5.99984C2.5 5.5909 2.749 5.22316 3.12871 5.07133L13.1287 1.07264Z',
  d9: 'M12.9145 12.9972L14.2075 14.29L12.7933 15.7043L9.08594 11.9972L12.7933 8.29004L14.2075 9.7043L12.9145 10.9972H21.5002V12.9972H12.9145Z',
};

export const IconLogin03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-stroke-rounded IconLogin03StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogin03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-duotone-rounded IconLogin03DuotoneRounded"
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

export const IconLogin03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-twotone-rounded IconLogin03TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogin03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-solid-rounded IconLogin03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLogin03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-bulk-rounded IconLogin03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLogin03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-stroke-sharp IconLogin03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogin03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="login-03-solid-sharp IconLogin03SolidSharp"
    >
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

export const iconPackOfLogin03: TheIconSelfPack = {
  name: 'Login03',
  StrokeRounded: IconLogin03StrokeRounded,
  DuotoneRounded: IconLogin03DuotoneRounded,
  TwotoneRounded: IconLogin03TwotoneRounded,
  SolidRounded: IconLogin03SolidRounded,
  BulkRounded: IconLogin03BulkRounded,
  StrokeSharp: IconLogin03StrokeSharp,
  SolidSharp: IconLogin03SolidSharp,
};
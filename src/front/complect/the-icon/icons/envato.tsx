import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.6208 9.71868C5.57738 11.0491 5.74133 12.522 6.29962 13.7648C6.58057 14.3902 6.72104 14.7029 6.97131 14.6597C7.22157 14.6165 7.24731 14.225 7.2988 13.4418C7.63656 8.30431 12.0617 2.82088 17.2345 2.06656C17.7565 1.99044 18.0175 1.95237 18.3247 2.10501C18.6318 2.25765 18.7647 2.50609 19.0305 3.00296C23.4777 11.3161 20.1384 22 11.581 22C4.84807 22 0.829706 14.1923 4.23649 9.08353C4.77945 8.26932 5.05093 7.86222 5.36303 7.95815C5.67513 8.05409 5.65702 8.60895 5.6208 9.71868Z',
  d2: 'M17.2381 2.06656C12.0735 2.82088 7.35784 8.36248 7.02061 13.5C6.80003 16.8604 7.49802 21.5 11.5935 22C20.1375 22 23.4715 11.3161 19.0313 3.00296C18.7659 2.50609 18.6332 2.25765 18.3266 2.10501C18.0199 1.95237 17.7593 1.99044 17.2381 2.06656Z',
  d3: 'M11.581 22C4.84807 22 0.829706 14.1923 4.23649 9.08353C4.77945 8.26932 5.05093 7.86222 5.36303 7.95815C5.67513 8.05409 5.65702 8.60895 5.6208 9.71868C5.57738 11.0491 5.74133 12.522 6.29962 13.7648C6.58057 14.3902 6.72104 14.7029 6.97131 14.6597C7.22157 14.6165 7.24731 14.225 7.2988 13.4418C7.63656 8.30431 12.0617 2.82088 17.2345 2.06656C17.5705 2.01756 17.7984 1.98433 18 2.00757',
  d4: 'M5.0892 9.54758C5.04216 10.9778 5.21978 12.5612 5.82459 13.8972C6.12895 14.5695 6.28113 14.9056 6.55225 14.8592C6.82337 14.8128 6.85126 14.3918 6.90703 13.55C7.27294 8.02713 12.0669 2.13244 17.6707 1.32156C18.2362 1.23972 18.519 1.1988 18.8517 1.36289C19.1844 1.52698 19.3284 1.79405 19.6164 2.32818C24.4342 11.2648 20.8166 22.75 11.5461 22.75C4.25207 22.75 -0.101151 14.3567 3.58953 8.8648C4.17774 7.98952 4.47184 7.55188 4.80995 7.65501C5.14806 7.75814 5.12844 8.35462 5.0892 9.54758Z',
  d5: 'M5.0892 9.54758C5.04216 10.9778 5.21978 12.5612 5.82459 13.8972C6.12895 14.5695 6.28113 14.9056 6.55225 14.8592C6.82337 14.8128 6.85126 14.3918 6.90703 13.55C7.27294 8.02713 12.0669 2.13244 17.6707 1.32156C18.2362 1.23972 18.519 1.1988 18.8517 1.36289C18 7 15 17.5 8 22.0333C2.97021 19.8889 0.547592 13.3913 3.58953 8.8648C4.17774 7.98952 4.47184 7.55188 4.80995 7.65501C5.14806 7.75814 5.12844 8.35462 5.0892 9.54758Z',
  d6: 'M5.28768 7.95809C4.92576 12 6.89103 14.6597 6.89103 14.6597C7.22776 9.52215 10.9454 3 17.8974 2C24.3528 11.5001 20.0179 22 11.4866 22C4.77429 22 -0.0587058 13.5 5.28768 7.95809Z',
  d7: 'M17.79 1.25766C18.0738 1.21684 18.356 1.34137 18.5171 1.57849C21.8604 6.49866 22.4514 11.7455 21.0188 15.8118C19.582 19.89 16.1047 22.75 11.486 22.75C7.8042 22.75 4.67752 20.4246 3.19089 17.387C1.69176 14.3237 1.82712 10.4644 4.74732 7.43738L6.52109 5.92738C6.52109 5.92738 6.15327 6.77255 6.00284 8.45247C5.85242 10.1324 6.16442 11.1273 6.52109 12.1873C7.70109 7.35072 11.4576 2.16854 17.79 1.25766Z',
};

export const IconEnvatoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-stroke-rounded IconEnvatoStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnvatoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-duotone-rounded IconEnvatoDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnvatoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-twotone-rounded IconEnvatoTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEnvatoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-solid-rounded IconEnvatoSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEnvatoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-bulk-rounded IconEnvatoBulkRounded"
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

export const IconEnvatoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-stroke-sharp IconEnvatoStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEnvatoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="envato-solid-sharp IconEnvatoSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEnvato: TheIconSelfPack = {
  name: 'Envato',
  StrokeRounded: IconEnvatoStrokeRounded,
  DuotoneRounded: IconEnvatoDuotoneRounded,
  TwotoneRounded: IconEnvatoTwotoneRounded,
  SolidRounded: IconEnvatoSolidRounded,
  BulkRounded: IconEnvatoBulkRounded,
  StrokeSharp: IconEnvatoStrokeSharp,
  SolidSharp: IconEnvatoSolidSharp,
};
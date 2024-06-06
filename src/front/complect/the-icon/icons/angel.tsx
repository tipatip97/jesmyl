import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.07818 7.5C2.38865 8.85588 2 10.39 2 12.0148C2 17.5295 6.47715 22 12 22C17.5228 22 22 17.5295 22 12.0148C22 10.39 21.6114 8.85588 20.9218 7.5',
  d2: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d3: 'M7 10.5C7 9.6716 7.67157 9.00003 8.5 9.00003C9.32843 9.00003 10 9.6716 10 10.5M14 10.5C14 9.67157 14.6716 9 15.5 9C16.3284 9 17 9.67157 17 10.5',
  d4: 'M12 22C17.5228 22 22 17.5295 22 12.0148C22 10.39 21.6895 8.35588 21 7C14 8.5 6.08848 7.83333 3 7C2.31046 8.35588 2 10.39 2 12.0148C2 17.5295 6.47715 22 12 22Z',
  d5: 'M3.70523 4C4.08994 4.13612 4.61699 4.27287 5.2813 4.3975C6.96967 4.71423 9.34561 4.91667 12 4.91667C14.6544 4.91667 17.0303 4.71423 18.7187 4.3975C19.383 4.27288 19.9101 4.13612 20.2948 4C19.9101 3.86388 19.383 3.72713 18.7187 3.6025C17.0303 3.28577 14.6544 3.08333 12 3.08333C9.34561 3.08333 6.96967 3.28577 5.2813 3.6025C4.61699 3.72713 4.08994 3.86388 3.70523 4ZM4.89798 1.80477C6.74664 1.45797 9.25706 1.25 12 1.25C14.7429 1.25 17.2534 1.45797 19.102 1.80477C20.0183 1.97666 20.8232 2.19187 21.4225 2.45769C21.7197 2.5895 22.0189 2.75641 22.2573 2.97496C22.4973 3.19501 22.75 3.54007 22.75 4C22.75 4.45993 22.4973 4.80499 22.2573 5.02504C22.0189 5.24359 21.7197 5.4105 21.4225 5.54231C20.8232 5.80813 20.0183 6.02334 19.102 6.19523C17.2534 6.54203 14.7429 6.75 12 6.75C9.25706 6.75 6.74664 6.54203 4.89798 6.19523C3.9817 6.02334 3.17685 5.80813 2.5775 5.54231C2.28031 5.4105 1.98113 5.24359 1.74273 5.02504C1.50271 4.80499 1.25 4.45993 1.25 4C1.25 3.54007 1.50271 3.19501 1.74273 2.97496C1.98113 2.75641 2.28031 2.5895 2.5775 2.45769C3.17685 2.19187 3.9817 1.97666 4.89798 1.80477Z',
  d6: 'M21.1963 6.96493C21.3401 6.91786 21.4981 6.98013 21.5667 7.11493L21.5903 7.16149C22.3322 8.62023 22.75 10.2706 22.75 12.0163C22.75 17.9462 17.936 22.7515 12 22.7515C6.06399 22.7515 1.25 17.9462 1.25 12.0163C1.25 10.2706 1.66782 8.62023 2.40967 7.16149L2.43334 7.11493C2.5019 6.98013 2.65993 6.91786 2.80365 6.96493C3.37438 7.15184 4.01133 7.30216 4.6675 7.42526C6.61281 7.7902 9.20405 8.00146 12 8.00146C14.7959 8.00146 17.3872 7.79019 19.3325 7.42526C19.9887 7.30216 20.6256 7.15184 21.1963 6.96493ZM7.54964 15.4005C7.88084 15.1517 8.35099 15.2186 8.59974 15.5498C9.37631 16.5837 10.6103 17.2502 12 17.2502C13.3898 17.2502 14.6238 16.5837 15.4003 15.5498C15.6491 15.2186 16.1192 15.1517 16.4505 15.4005C16.7817 15.6492 16.8485 16.1194 16.5997 16.4506C15.5521 17.8455 13.8816 18.7502 12 18.7502C10.1185 18.7502 8.44802 17.8455 7.40035 16.4506C7.1516 16.1194 7.21843 15.6492 7.54964 15.4005ZM14.75 11.5001C14.75 11.0859 15.0858 10.7501 15.5 10.7501C15.9142 10.7501 16.25 11.0859 16.25 11.5001C16.25 11.9143 16.5858 12.2501 17 12.2501C17.4142 12.2501 17.75 11.9143 17.75 11.5001C17.75 10.2575 16.7426 9.25012 15.5 9.25012C14.2574 9.25012 13.25 10.2575 13.25 11.5001C13.25 11.9143 13.5858 12.2501 14 12.2501C14.4142 12.2501 14.75 11.9143 14.75 11.5001ZM7.75 11.5002C7.75 11.0859 8.08579 10.7502 8.5 10.7502C8.91421 10.7502 9.25 11.0859 9.25 11.5002C9.25 11.9144 9.58579 12.2502 10 12.2502C10.4142 12.2502 10.75 11.9144 10.75 11.5002C10.75 10.2575 9.74264 9.25016 8.5 9.25016C7.25736 9.25016 6.25 10.2575 6.25 11.5002C6.25 11.9144 6.58579 12.2502 7 12.2502C7.41421 12.2502 7.75 11.9144 7.75 11.5002Z',
  d7: 'M21.1963 6.96481C21.3401 6.91774 21.4981 6.98 21.5667 7.11481L21.5903 7.16136C22.3322 8.62011 22.75 10.2705 22.75 12.0162C22.75 17.9461 17.936 22.7513 12 22.7513C6.06399 22.7513 1.25 17.9461 1.25 12.0162C1.25 10.2705 1.66782 8.62011 2.40967 7.16136L2.43334 7.11481C2.5019 6.98 2.65993 6.91774 2.80365 6.96481C3.37438 7.15172 4.01133 7.30204 4.6675 7.42514C6.61281 7.79007 9.20405 8.00134 12 8.00134C14.7959 8.00134 17.3872 7.79007 19.3325 7.42514C19.9887 7.30204 20.6256 7.15172 21.1963 6.96481Z',
  d8: 'M7.54964 15.4003C7.88084 15.1516 8.35099 15.2184 8.59974 15.5496C9.37631 16.5836 10.6103 17.25 12 17.25C13.3898 17.25 14.6238 16.5836 15.4003 15.5496C15.6491 15.2184 16.1192 15.1516 16.4505 15.4003C16.7817 15.6491 16.8485 16.1192 16.5997 16.4505C15.5521 17.8454 13.8816 18.75 12 18.75C10.1185 18.75 8.44802 17.8454 7.40035 16.4505C7.1516 16.1192 7.21843 15.6491 7.54964 15.4003Z',
  d9: 'M15.5 10.75C15.0858 10.75 14.75 11.0858 14.75 11.5C14.75 11.9142 14.4142 12.25 14 12.25C13.5858 12.25 13.25 11.9142 13.25 11.5C13.25 10.2574 14.2574 9.25 15.5 9.25C16.7426 9.25 17.75 10.2574 17.75 11.5C17.75 11.9142 17.4142 12.25 17 12.25C16.5858 12.25 16.25 11.9142 16.25 11.5C16.25 11.0858 15.9142 10.75 15.5 10.75ZM8.5 10.75C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 7.41421 12.25 7 12.25C6.58579 12.25 6.25 11.9142 6.25 11.5C6.25 10.2574 7.25736 9.25003 8.5 9.25003C9.74264 9.25003 10.75 10.2574 10.75 11.5C10.75 11.9142 10.4142 12.25 10 12.25C9.58579 12.25 9.25 11.9142 9.25 11.5C9.25 11.0858 8.91421 10.75 8.5 10.75Z',
  d10: 'M2.42983 7.09863C1.67561 8.56834 1.25 10.2345 1.25 12C1.25 17.937 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.937 22.75 12C22.75 10.2345 22.3244 8.56834 21.5702 7.09863C20.9107 7.33964 20.1532 7.52416 19.3786 7.66948C17.414 8.03804 14.8066 8.24997 12 8.24997C9.19345 8.24997 6.58605 8.03804 4.62141 7.66948C3.84675 7.52416 3.0893 7.33964 2.42983 7.09863ZM15.5 11.75C15.0858 11.75 14.75 12.0858 14.75 12.5H13.25C13.25 11.2574 14.2574 10.25 15.5 10.25C16.7426 10.25 17.75 11.2574 17.75 12.5H16.25C16.25 12.0858 15.9142 11.75 15.5 11.75ZM8.5 11.75C8.08579 11.75 7.75 12.0858 7.75 12.5H6.25C6.25 11.2574 7.25736 10.25 8.5 10.25C9.74264 10.25 10.75 11.2574 10.75 12.5H9.25C9.25 12.0858 8.91421 11.75 8.5 11.75ZM15.4004 15.5498C14.6238 16.5838 13.3899 17.2502 12.0001 17.2502C10.6103 17.2502 9.37635 16.5838 8.59978 15.5498L7.40039 16.4506C8.44806 17.8455 10.1185 18.7502 12.0001 18.7502C13.8816 18.7502 15.5521 17.8455 16.5998 16.4506L15.4004 15.5498Z',
};

export const IconAngelStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-stroke-rounded IconAngelStrokeRounded"
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
      <ellipse 
        cx="12" 
        cy="4" 
        rx="10" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></ellipse>
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

export const IconAngelDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-duotone-rounded IconAngelDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <ellipse 
        cx="12" 
        cy="4" 
        rx="10" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></ellipse>
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

export const IconAngelTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-twotone-rounded IconAngelTwotoneRounded"
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
      <ellipse 
        cx="12" 
        cy="4" 
        rx="10" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></ellipse>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngelSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-solid-rounded IconAngelSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAngelBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-bulk-rounded IconAngelBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconAngelStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-stroke-sharp IconAngelStrokeSharp"
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
      <ellipse 
        cx="12" 
        cy="4" 
        rx="10" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngelSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angel-solid-sharp IconAngelSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAngel: TheIconSelfPack = {
  name: 'Angel',
  StrokeRounded: IconAngelStrokeRounded,
  DuotoneRounded: IconAngelDuotoneRounded,
  TwotoneRounded: IconAngelTwotoneRounded,
  SolidRounded: IconAngelSolidRounded,
  BulkRounded: IconAngelBulkRounded,
  StrokeSharp: IconAngelStrokeSharp,
  SolidSharp: IconAngelSolidSharp,
};
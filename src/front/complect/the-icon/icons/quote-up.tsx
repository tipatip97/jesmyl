import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z',
  d2: 'M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4',
  d3: 'M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z',
  d4: 'M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4',
  d5: 'M14 16C14 17.8856 14 18.8284 14.5858 19.4142C15.1716 20 16.1144 20 18 20C19.8856 20 20.8284 20 21.4142 19.4142C22 18.8284 22 17.8856 22 16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 12.5858C14 13.1716 14 14.1144 14 16ZM14 16V11.8626C14 8.19569 16.5157 5.08584 20 4',
  d6: 'M18.052 11.25C18.9505 11.25 19.6997 11.2499 20.2945 11.3299C20.9223 11.4143 21.4891 11.6 21.9445 12.0555C22.4 12.5109 22.5857 13.0777 22.6701 13.7055C22.7501 14.3003 22.75 15.0495 22.75 15.948V15.948V16.052V16.052C22.75 16.9505 22.7501 17.6997 22.6701 18.2945C22.5857 18.9223 22.4 19.4891 21.9445 19.9445C21.4891 20.4 20.9223 20.5857 20.2945 20.6701C19.6997 20.7501 18.9505 20.75 18.052 20.75H18.052H17.948H17.948C17.0495 20.75 16.3003 20.7501 15.7055 20.6701C15.0777 20.5857 14.5109 20.4 14.0555 19.9445C13.6 19.4891 13.4143 18.9223 13.3299 18.2945C13.2499 17.6997 13.25 16.9505 13.25 16.052V16.052V15.948V15.948C13.25 15.0495 13.2499 14.3003 13.3299 13.7055C13.4143 13.0777 13.6 12.5109 14.0555 12.0555C14.5109 11.6 15.0777 11.4143 15.7055 11.3299C16.3003 11.2499 17.0495 11.25 17.948 11.25H17.948H18.052H18.052Z',
  d7: 'M21.2047 3.95274C21.369 4.48001 21.0748 5.04066 20.5475 5.20498C17.4399 6.17345 15.25 8.92534 15.25 12.1129V16.2503C15.25 16.8026 14.8023 17.2503 14.25 17.2503C13.6977 17.2503 13.25 16.8026 13.25 16.2503V12.1129C13.25 7.96657 16.0916 4.49876 19.9525 3.29555C20.4797 3.13123 21.0404 3.42547 21.2047 3.95274Z',
  d8: 'M6.05203 11.25C6.9505 11.25 7.69971 11.2499 8.29448 11.3299C8.92228 11.4143 9.48908 11.6 9.94455 12.0555C10.4 12.5109 10.5857 13.0777 10.6701 13.7055C10.7501 14.3003 10.75 15.0495 10.75 15.948V15.948V16.052V16.052C10.75 16.9505 10.7501 17.6997 10.6701 18.2945C10.5857 18.9223 10.4 19.4891 9.94455 19.9445C9.48908 20.4 8.92228 20.5857 8.29448 20.6701C7.69971 20.7501 6.9505 20.75 6.05203 20.75H6.052H5.94801H5.94798C5.04951 20.75 4.3003 20.7501 3.70552 20.6701C3.07773 20.5857 2.51093 20.4 2.05546 19.9445C1.59999 19.4891 1.41432 18.9223 1.32991 18.2945C1.24995 17.6997 1.24997 16.9505 1.25 16.052V16.052V15.948V15.948C1.24997 15.0495 1.24995 14.3003 1.32991 13.7055C1.41432 13.0777 1.59999 12.5109 2.05546 12.0555C2.51093 11.6 3.07773 11.4143 3.70552 11.3299C4.3003 11.2499 5.04951 11.25 5.94797 11.25H5.948H6.052H6.05203Z',
  d9: 'M9.20471 3.95274C9.36903 4.48001 9.0748 5.04066 8.54753 5.20498C5.43986 6.17345 3.25 8.92534 3.25 12.1129V16.2503C3.25 16.8026 2.80228 17.2503 2.25 17.2503C1.69772 17.2503 1.25 16.8026 1.25 16.2503V12.1129C1.25 7.96657 4.09156 4.49876 7.95247 3.29555C8.47975 3.13123 9.04039 3.42547 9.20471 3.95274Z',
  d10: 'M20.5475 5.20498C21.0748 5.04066 21.369 4.48001 21.2047 3.95274C21.0404 3.42547 20.4797 3.13123 19.9525 3.29555C16.0916 4.49876 13.25 7.96657 13.25 12.1129V15.861C13.2501 15.0011 13.2525 14.2811 13.3299 13.7056C13.4143 13.0779 13.6 12.5111 14.0555 12.0556C14.4071 11.704 14.8251 11.5131 15.2862 11.4056C15.5827 8.52367 17.6723 6.10102 20.5475 5.20498Z',
  d11: 'M13.25 16.2582C13.25 16.2188 13.25 16.1792 13.25 16.1392V16.2503C13.25 16.2529 13.25 16.2555 13.25 16.2582Z',
  d12: 'M8.54753 5.20498C9.0748 5.04066 9.36903 4.48001 9.20471 3.95274C9.04039 3.42547 8.47975 3.13123 7.95247 3.29555C4.09156 4.49876 1.25 7.96657 1.25 12.1129V15.861C1.25005 15.0011 1.25254 14.2811 1.32991 13.7056C1.41432 13.0779 1.59999 12.5111 2.05546 12.0556C2.40708 11.704 2.82505 11.5131 3.28622 11.4056C3.58271 8.52367 5.67229 6.10102 8.54753 5.20498Z',
  d13: 'M1.25003 16.2582C1.25001 16.2188 1.25 16.1792 1.25 16.1392V16.2503C1.25 16.2529 1.25001 16.2555 1.25003 16.2582Z',
  d14: 'M10 20V12H2V20H10Z',
  d15: 'M2 12V10C2 6.68629 4.68629 4 8 4',
  d16: 'M22 20V12H14V20H22Z',
  d17: 'M14 12V10C14 6.68629 16.6863 4 20 4',
  d18: 'M3.25 10.25C3.25 7.48858 5.48858 5.25 8.25 5.25V3.25C4.38401 3.25 1.25 6.38401 1.25 10.25V20.75H10.75V11.25H3.25V10.25Z',
  d19: 'M15.25 10.25C15.25 7.48858 17.4886 5.25 20.25 5.25V3.25C16.384 3.25 13.25 6.38401 13.25 10.25V20.75H22.75V11.25H15.25V10.25Z',
};

export const IconQuoteUpStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-stroke-rounded IconQuoteUpStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-duotone-rounded IconQuoteUpDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-twotone-rounded IconQuoteUpTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-solid-rounded IconQuoteUpSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconQuoteUpBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-bulk-rounded IconQuoteUpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-stroke-sharp IconQuoteUpStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuoteUpSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quote-up-solid-sharp IconQuoteUpSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQuoteUp: TheIconSelfPack = {
  name: 'QuoteUp',
  StrokeRounded: IconQuoteUpStrokeRounded,
  DuotoneRounded: IconQuoteUpDuotoneRounded,
  TwotoneRounded: IconQuoteUpTwotoneRounded,
  SolidRounded: IconQuoteUpSolidRounded,
  BulkRounded: IconQuoteUpBulkRounded,
  StrokeSharp: IconQuoteUpStrokeSharp,
  SolidSharp: IconQuoteUpSolidSharp,
};
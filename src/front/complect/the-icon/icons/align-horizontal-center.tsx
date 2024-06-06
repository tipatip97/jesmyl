import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 19L12 22',
  d2: 'M12 10L12 14',
  d3: 'M12 2L12 5',
  d4: 'M8.00036 7.5C8.00036 6.65611 7.91699 5.68211 8.75036 5.20096C9.09844 5 9.56575 5 10.5004 5H13.5004C14.435 5 14.9023 5 15.2504 5.20096C16.0837 5.68211 16.0004 6.65611 16.0004 7.5C16.0004 8.34389 16.0837 9.31789 15.2504 9.79904C14.9023 10 14.435 10 13.5004 10H10.5004C9.56575 10 9.09844 10 8.75036 9.79904C7.91699 9.31789 8.00036 8.34389 8.00036 7.5Z',
  d5: 'M4.00036 16.5C4.00036 15.6561 3.91699 14.6821 4.75036 14.201C5.09844 14 5.56575 14 6.50036 14H17.5004C18.435 14 18.9023 14 19.2504 14.201C20.0837 14.6821 20.0004 15.6561 20.0004 16.5C20.0004 17.3439 20.0837 18.3179 19.2504 18.799C18.9023 19 18.435 19 17.5004 19H6.50036C5.56575 19 5.09844 19 4.75036 18.799C3.91699 18.3179 4.00036 17.3439 4.00036 16.5Z',
  d6: 'M12 1C12.5523 1 13 1.44772 13 2L13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22L11 2C11 1.44772 11.4477 1 12 1Z',
  d7: 'M13.5314 4.25C13.9709 4.24998 14.35 4.24997 14.6611 4.27818C14.9901 4.30802 15.3159 4.37407 15.6229 4.55144C16.2768 4.92918 16.5571 5.51158 16.6697 6.06477C16.7566 6.49173 16.752 6.96075 16.7485 7.31682C16.7479 7.38198 16.7473 7.44336 16.7473 7.5C16.7473 7.55665 16.7479 7.61802 16.7485 7.68318C16.752 8.03925 16.7566 8.50827 16.6697 8.93523C16.5571 9.48843 16.2768 10.0708 15.6229 10.4486C15.3159 10.6259 14.9901 10.692 14.6611 10.7218C14.35 10.75 13.9709 10.75 13.5313 10.75H10.4687C10.0291 10.75 9.65 10.75 9.33889 10.7218C9.0099 10.692 8.68413 10.6259 8.3771 10.4486C7.72321 10.0708 7.44288 9.48843 7.33028 8.93523C7.24337 8.50827 7.24799 8.03925 7.2515 7.68318C7.25214 7.61802 7.25275 7.55665 7.25275 7.5C7.25275 7.44336 7.25214 7.38198 7.2515 7.31682C7.24799 6.96075 7.24337 6.49173 7.33028 6.06477C7.44288 5.51158 7.72321 4.92918 8.3771 4.55144C8.68413 4.37407 9.0099 4.30802 9.33889 4.27818C9.65 4.24997 10.0291 4.24998 10.4686 4.25H10.4687H13.5313H13.5314Z',
  d8: 'M17.5305 13.25C17.9702 13.25 18.3494 13.25 18.6606 13.2782C18.9896 13.308 19.3155 13.3741 19.6226 13.5514C20.2767 13.9292 20.5571 14.5116 20.6697 15.0648C20.7566 15.4917 20.752 15.9608 20.7485 16.3168C20.7479 16.382 20.7472 16.4434 20.7472 16.5C20.7472 16.5566 20.7479 16.618 20.7485 16.6832C20.752 17.0393 20.7566 17.5083 20.6697 17.9352C20.5571 18.4884 20.2767 19.0708 19.6226 19.4486C19.3155 19.6259 18.9896 19.692 18.6606 19.7218C18.3494 19.75 17.9701 19.75 17.5305 19.75H6.46951C6.02986 19.75 5.65064 19.75 5.33944 19.7218C5.01036 19.692 4.68451 19.6259 4.3774 19.4486C3.72334 19.0708 3.44293 18.4884 3.3303 17.9352C3.24337 17.5083 3.24799 17.0393 3.2515 16.6832C3.25214 16.618 3.25275 16.5566 3.25275 16.5C3.25275 16.4434 3.25214 16.382 3.2515 16.3168C3.24799 15.9607 3.24337 15.4917 3.3303 15.0648C3.44293 14.5116 3.72334 13.9292 4.3774 13.5514C4.68451 13.3741 5.01036 13.308 5.33944 13.2782C5.65063 13.25 6.02984 13.25 6.46948 13.25H6.46951H17.5305H17.5305Z',
  d9: 'M11.998 19L11.998 22M11.998 10L11.998 14M11.998 2V5',
  d10: 'M7.99805 10L7.99805 5L15.998 5.00326L15.998 10H7.99805Z',
  d11: 'M3.99805 19L3.99805 14L19.998 14.0033L19.998 19H3.99805Z',
  d12: 'M10.998 5V2H12.998V5H10.998ZM10.998 14L10.998 10H12.998V14H10.998ZM10.998 22L10.998 19H12.998V22H10.998Z',
  d13: 'M7.46783 4.46956C7.60854 4.3289 7.79939 4.24992 7.99835 4.25L15.9984 4.25326C16.4124 4.25342 16.748 4.58916 16.748 5.00326L16.748 10C16.748 10.4142 16.4123 10.75 15.998 10.75H7.99805C7.79913 10.75 7.60837 10.671 7.46772 10.5303C7.32706 10.3897 7.24805 10.1989 7.24805 10V5C7.24805 4.80103 7.32711 4.61022 7.46783 4.46956Z',
  d14: 'M3.46777 13.4696C3.60846 13.329 3.79926 13.25 3.9982 13.25L19.9982 13.2533C20.4124 13.2533 20.748 13.5891 20.748 14.0033L20.748 19C20.748 19.4142 20.4123 19.75 19.998 19.75H3.99805C3.79913 19.75 3.60837 19.671 3.46772 19.5303C3.32706 19.3897 3.24805 19.1989 3.24805 19V14C3.24805 13.8011 3.32709 13.6103 3.46777 13.4696Z',
};

export const IconAlignHorizontalCenterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-stroke-rounded IconAlignHorizontalCenterStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignHorizontalCenterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-duotone-rounded IconAlignHorizontalCenterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignHorizontalCenterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-twotone-rounded IconAlignHorizontalCenterTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignHorizontalCenterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-solid-rounded IconAlignHorizontalCenterSolidRounded"
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

export const IconAlignHorizontalCenterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-bulk-rounded IconAlignHorizontalCenterBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignHorizontalCenterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-stroke-sharp IconAlignHorizontalCenterStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAlignHorizontalCenterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-horizontal-center-solid-sharp IconAlignHorizontalCenterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlignHorizontalCenter: TheIconSelfPack = {
  name: 'AlignHorizontalCenter',
  StrokeRounded: IconAlignHorizontalCenterStrokeRounded,
  DuotoneRounded: IconAlignHorizontalCenterDuotoneRounded,
  TwotoneRounded: IconAlignHorizontalCenterTwotoneRounded,
  SolidRounded: IconAlignHorizontalCenterSolidRounded,
  BulkRounded: IconAlignHorizontalCenterBulkRounded,
  StrokeSharp: IconAlignHorizontalCenterStrokeSharp,
  SolidSharp: IconAlignHorizontalCenterSolidSharp,
};
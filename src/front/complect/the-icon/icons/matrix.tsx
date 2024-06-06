import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5',
  d2: 'M7 8H7.00897M11.9955 8H12.0045M16.991 8H17M7 12H7.00897M7 16H7.00897M11.9955 12H12.0045M11.9955 16H12.0045M16.991 12H17M16.991 16H17',
  d3: 'M7.26894 2.39006C7.3297 2.939 6.93396 3.43325 6.38503 3.49402C5.10653 3.63554 4.46123 3.9319 3.99964 4.45137C3.56839 4.93669 3.29509 5.62061 3.14945 6.8397C3.00168 8.07662 3 9.70695 3 12.0001C3 14.2932 3.00168 15.9236 3.14945 17.1605C3.29509 18.3796 3.56839 19.0635 3.99964 19.5488C4.46123 20.0683 5.10653 20.3646 6.38503 20.5062C6.93396 20.5669 7.3297 21.0612 7.26894 21.6101C7.20817 22.159 6.71392 22.5548 6.16499 22.494C4.66448 22.3279 3.43918 21.929 2.5046 20.8773C1.68373 19.9535 1.33097 18.7989 1.16358 17.3977C0.99997 16.0283 0.999984 14.2782 1 12.0673V11.9329C0.999984 9.72193 0.99997 7.97192 1.16358 6.60245C1.33097 5.20131 1.68373 4.0467 2.5046 3.1229C3.43918 2.07113 4.66448 1.67226 6.16499 1.50616C6.71392 1.44539 7.20817 1.84113 7.26894 2.39006ZM16.7311 2.39006C16.7918 1.84113 17.2861 1.4454 17.835 1.50616C19.3355 1.67226 20.5608 2.07113 21.4954 3.1229C22.3163 4.0467 22.669 5.20131 22.8364 6.60245C23 7.97191 23 9.72191 23 11.9329V12.0673C23 14.2783 23 16.0283 22.8364 17.3977C22.669 18.7989 22.3163 19.9535 21.4954 20.8773C20.5608 21.929 19.3355 22.3279 17.835 22.494C17.2861 22.5548 16.7918 22.159 16.7311 21.6101C16.6703 21.0612 17.066 20.5669 17.615 20.5062C18.8935 20.3646 19.5388 20.0683 20.0004 19.5488C20.4316 19.0635 20.7049 18.3796 20.8505 17.1605C20.9983 15.9236 21 14.2932 21 12.0001C21 9.70695 20.9983 8.07662 20.8505 6.8397C20.7049 5.62061 20.4316 4.93669 20.0004 4.45137C19.5388 3.9319 18.8935 3.63554 17.615 3.49402C17.066 3.43325 16.6703 2.939 16.7311 2.39006Z',
  d4: 'M5.75 8C5.75 7.30964 6.30964 6.75 7 6.75H7.00897C7.69933 6.75 8.25897 7.30964 8.25897 8C8.25897 8.69036 7.69933 9.25 7.00897 9.25H7C6.30964 9.25 5.75 8.69036 5.75 8ZM10.7455 8C10.7455 7.30964 11.3052 6.75 11.9955 6.75H12.0045C12.6948 6.75 13.2545 7.30964 13.2545 8C13.2545 8.69036 12.6948 9.25 12.0045 9.25H11.9955C11.3052 9.25 10.7455 8.69036 10.7455 8ZM15.741 8C15.741 7.30964 16.3007 6.75 16.991 6.75H17C17.6904 6.75 18.25 7.30964 18.25 8C18.25 8.69036 17.6904 9.25 17 9.25H16.991C16.3007 9.25 15.741 8.69036 15.741 8ZM5.75 12C5.75 11.3096 6.30964 10.75 7 10.75H7.00897C7.69933 10.75 8.25897 11.3096 8.25897 12C8.25897 12.6904 7.69933 13.25 7.00897 13.25H7C6.30964 13.25 5.75 12.6904 5.75 12ZM10.7455 12C10.7455 11.3096 11.3052 10.75 11.9955 10.75H12.0045C12.6948 10.75 13.2545 11.3096 13.2545 12C13.2545 12.6904 12.6948 13.25 12.0045 13.25H11.9955C11.3052 13.25 10.7455 12.6904 10.7455 12ZM15.741 12C15.741 11.3096 16.3007 10.75 16.991 10.75H17C17.6904 10.75 18.25 11.3096 18.25 12C18.25 12.6904 17.6904 13.25 17 13.25H16.991C16.3007 13.25 15.741 12.6904 15.741 12ZM5.75 16C5.75 15.3096 6.30964 14.75 7 14.75H7.00897C7.69933 14.75 8.25897 15.3096 8.25897 16C8.25897 16.6904 7.69933 17.25 7.00897 17.25H7C6.30964 17.25 5.75 16.6904 5.75 16ZM10.7455 16C10.7455 15.3096 11.3052 14.75 11.9955 14.75H12.0045C12.6948 14.75 13.2545 15.3096 13.2545 16C13.2545 16.6904 12.6948 17.25 12.0045 17.25H11.9955C11.3052 17.25 10.7455 16.6904 10.7455 16ZM15.741 16C15.741 15.3096 16.3007 14.75 16.991 14.75H17C17.6904 14.75 18.25 15.3096 18.25 16C18.25 16.6904 17.6904 17.25 17 17.25H16.991C16.3007 17.25 15.741 16.6904 15.741 16Z',
  d5: 'M18 3.00005L22 3.00003V21H18M6 21L2 21V3H6',
  d6: 'M1.5 2H6.5V4H3.5V20L6.49999 20L6.50001 22L1.5 22V2ZM22.5 2.00002V22H17.5V20H20.5V4.00003L17.5 4.00005L17.5 2.00005L22.5 2.00002Z',
};

export const IconMatrixStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-stroke-rounded IconMatrixStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMatrixDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-duotone-rounded IconMatrixDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMatrixTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-twotone-rounded IconMatrixTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMatrixSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-solid-rounded IconMatrixSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMatrixBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-bulk-rounded IconMatrixBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMatrixStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-stroke-sharp IconMatrixStrokeSharp"
    >
      <path 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconMatrixSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="matrix-solid-sharp IconMatrixSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMatrix: TheIconSelfPack = {
  name: 'Matrix',
  StrokeRounded: IconMatrixStrokeRounded,
  DuotoneRounded: IconMatrixDuotoneRounded,
  TwotoneRounded: IconMatrixTwotoneRounded,
  SolidRounded: IconMatrixSolidRounded,
  BulkRounded: IconMatrixBulkRounded,
  StrokeSharp: IconMatrixStrokeSharp,
  SolidSharp: IconMatrixSolidSharp,
};
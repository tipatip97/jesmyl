import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 8L12 16M12 8C11.2998 8 9.99153 9.9943 9.5 10.5M12 8C12.7002 8 14.0085 9.9943 14.5 10.5',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.7521 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25ZM13.0059 16C13.0059 16.5523 12.5581 17 12.0059 17C11.4536 17 11.0059 16.5523 11.0059 16V11.5L10.4116 11.5C10.236 11.5001 10.0203 11.5003 9.84387 11.4782L9.84053 11.4778C9.71408 11.462 9.13804 11.3902 8.86368 10.8246C8.58872 10.2577 8.89065 9.75761 8.95597 9.6494L8.95841 9.64537C9.05062 9.49235 9.18477 9.32147 9.29511 9.18092L9.31885 9.15067C9.61348 8.77485 9.99545 8.29063 10.3759 7.89962C10.5657 7.70451 10.783 7.50328 11.0139 7.34443C11.2191 7.20323 11.5693 6.99996 12 6.99996C12.4307 6.99996 12.7809 7.20323 12.9861 7.34443C13.217 7.50328 13.4343 7.70451 13.6241 7.89962C14.0046 8.29063 14.3865 8.77485 14.6812 9.15067L14.7049 9.18091C14.8152 9.32147 14.9494 9.49235 15.0416 9.64537L15.044 9.64941C15.1093 9.75761 15.4113 10.2578 15.1363 10.8246C14.862 11.3902 14.2859 11.462 14.1595 11.4778L14.1561 11.4782C13.9797 11.5003 13.764 11.5001 13.5884 11.5L13.0059 11.5V16Z',
  d4: 'M12.0572 22.25H12.0572H11.9428H11.9428C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.7521 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25Z',
  d5: 'M12.0059 17C12.5581 17 13.0059 16.5523 13.0059 16V11.5L13.5884 11.5C13.764 11.5001 13.9797 11.5003 14.1561 11.4782L14.1595 11.4778C14.2859 11.462 14.862 11.3902 15.1363 10.8246C15.4113 10.2578 15.1093 9.75761 15.044 9.64941L15.0416 9.64537C14.9494 9.49235 14.8152 9.32147 14.7049 9.18091L14.6812 9.15067C14.3865 8.77485 14.0046 8.29063 13.6241 7.89962C13.4343 7.70451 13.217 7.50328 12.9861 7.34443C12.7809 7.20323 12.4307 6.99996 12 6.99996C11.5693 6.99996 11.2191 7.20323 11.0139 7.34443C10.783 7.50328 10.5657 7.70451 10.3759 7.89962C9.99545 8.29063 9.61348 8.77485 9.31885 9.15067L9.29511 9.18092C9.18477 9.32147 9.05062 9.49235 8.95841 9.64537L8.95597 9.6494C8.89065 9.75761 8.58872 10.2577 8.86368 10.8246C9.13804 11.3902 9.71408 11.462 9.84053 11.4778L9.84387 11.4782C10.0203 11.5003 10.236 11.5001 10.4116 11.5L11.0059 11.5V16C11.0059 16.5523 11.4536 17 12.0059 17Z',
  d6: 'M21 21H3V3H21V21Z',
  d7: 'M12 16L12 8.37957M9 11.0002L12 8L15 11.0002',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.7491 10.3411L12.7491 16.5304H11.2491V10.3411L9.52945 12.0609L8.46875 11.0003L11.9991 7.46967L15.5294 11.0003L14.4688 12.0609L12.7491 10.3411Z',
} as const;

export const IconUploadSquare01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-stroke-rounded IconUploadSquare01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-duotone-rounded IconUploadSquare01DuotoneRounded"
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-twotone-rounded IconUploadSquare01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-solid-rounded IconUploadSquare01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-bulk-rounded IconUploadSquare01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUploadSquare01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-stroke-sharp IconUploadSquare01StrokeSharp"
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

export const IconUploadSquare01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="upload-square-01-solid-sharp IconUploadSquare01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUploadSquare01: TheIconSelfPack = {
  name: 'UploadSquare01',
  StrokeRounded: IconUploadSquare01StrokeRounded,
  DuotoneRounded: IconUploadSquare01DuotoneRounded,
  TwotoneRounded: IconUploadSquare01TwotoneRounded,
  SolidRounded: IconUploadSquare01SolidRounded,
  BulkRounded: IconUploadSquare01BulkRounded,
  StrokeSharp: IconUploadSquare01StrokeSharp,
  SolidSharp: IconUploadSquare01SolidSharp,
};
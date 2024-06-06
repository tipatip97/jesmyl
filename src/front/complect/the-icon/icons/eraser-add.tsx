import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13C14.9628 4 15.9443 4 16.7889 4.42229C17.6334 4.84458 18.2223 5.62972 19.4 7.2C21.1333 9.51111 22 10.6667 22 12C22 13.3333 21.1333 14.4889 19.4 16.8C18.2223 18.3703 17.6334 19.1554 16.7889 19.5777C15.9443 20 14.9628 20 13 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z',
  d2: 'M11 8V16M15 12L7 12',
  d3: 'M17.1243 3.75155C16.1193 3.24905 14.9682 3.24944 13.189 3.25004L13 3.25008L9.94358 3.25008C8.10582 3.25007 6.65019 3.25005 5.51098 3.40322C4.33856 3.56085 3.38961 3.89296 2.64124 4.64133C1.89288 5.38969 1.56076 6.33864 1.40314 7.51106C1.24997 8.65027 1.24998 10.1059 1.25 11.9437V11.9437V12.0565V12.0565C1.24998 13.8943 1.24997 15.3499 1.40314 16.4891C1.56076 17.6615 1.89288 18.6105 2.64124 19.3588C3.38961 20.1072 4.33856 20.4393 5.51098 20.5969C6.65018 20.7501 8.1058 20.7501 9.94354 20.7501H9.94359H13C13.0638 20.7501 13.1268 20.7501 13.189 20.7501C14.9682 20.7507 16.1193 20.7511 17.1243 20.2486C18.1293 19.7461 18.8196 18.8251 19.8866 17.4013C20.0128 17.233 20.14 17.0651 20.2674 16.897C20.8774 16.0919 21.4906 15.2827 21.9982 14.4107C22.4686 13.6026 22.75 12.8479 22.75 12.0001C22.75 11.1523 22.4686 10.3976 21.9982 9.58945C21.4906 8.71738 20.8773 7.90806 20.2672 7.10292C20.1399 6.9349 20.0127 6.76705 19.8866 6.59886C18.8196 5.1751 18.1293 4.25405 17.1243 3.75155ZM12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H10V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H12V8Z',
  d4: 'M13.189 3.25004C14.9682 3.24944 16.1193 3.24905 17.1243 3.75155C18.1293 4.25405 18.8196 5.1751 19.8866 6.59886C20.6167 7.57299 21.3846 8.53539 21.9982 9.58945C22.4686 10.3976 22.75 11.1523 22.75 12.0001C22.75 12.8479 22.4686 13.6026 21.9982 14.4107C21.3846 15.4648 20.6167 16.4272 19.8866 17.4013C18.8196 18.8251 18.1293 19.7461 17.1243 20.2486C16.0841 20.7687 14.8876 20.7501 13 20.7501H9.94359H9.94354C8.1058 20.7501 6.65018 20.7501 5.51098 20.5969C4.33856 20.4393 3.38961 20.1072 2.64124 19.3588C1.89288 18.6105 1.56076 17.6615 1.40314 16.4891C1.24997 15.3499 1.24998 13.8943 1.25 12.0565V12.0565V11.9437V11.9437C1.24998 10.1059 1.24997 8.65027 1.40314 7.51106C1.56076 6.33864 1.89288 5.38969 2.64124 4.64133C3.38961 3.89296 4.33856 3.56085 5.51098 3.40322C6.65019 3.25005 8.10582 3.25007 9.94358 3.25008L13 3.25008L13.189 3.25004Z',
  d5: 'M11 7C11.5523 7 12 7.44772 12 8V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H12V16C12 16.5523 11.5523 17 11 17C10.4477 17 10 16.5523 10 16V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H10V8C10 7.44772 10.4477 7 11 7Z',
  d6: 'M11.0117 8.00293V16.0029M15.0117 12.0029H7.01172',
  d7: 'M1.99951 4.1C1.99951 4.04477 2.04428 4 2.09951 4H17.0597L21.8373 11.7373C21.9367 11.8983 21.9367 12.1017 21.8373 12.2627L17.0597 20H2.09951C2.04428 20 1.99951 19.9552 1.99951 19.9V4.1Z',
  d8: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H17.4157L22.636 11.6025C22.788 11.8457 22.788 12.1543 22.636 12.3975L17.4157 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V4ZM10 8V11H7V13H10V16H12V13H15V11H12V8H10Z',
} as const;

export const IconEraserAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-stroke-rounded IconEraserAddStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconEraserAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-duotone-rounded IconEraserAddDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconEraserAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-twotone-rounded IconEraserAddTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEraserAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-solid-rounded IconEraserAddSolidRounded"
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

export const IconEraserAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-bulk-rounded IconEraserAddBulkRounded"
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

export const IconEraserAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-stroke-sharp IconEraserAddStrokeSharp"
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

export const IconEraserAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-add-solid-sharp IconEraserAddSolidSharp"
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

export const iconPackOfEraserAdd: TheIconSelfPack = {
  name: 'EraserAdd',
  StrokeRounded: IconEraserAddStrokeRounded,
  DuotoneRounded: IconEraserAddDuotoneRounded,
  TwotoneRounded: IconEraserAddTwotoneRounded,
  SolidRounded: IconEraserAddSolidRounded,
  BulkRounded: IconEraserAddBulkRounded,
  StrokeSharp: IconEraserAddStrokeSharp,
  SolidSharp: IconEraserAddSolidSharp,
};
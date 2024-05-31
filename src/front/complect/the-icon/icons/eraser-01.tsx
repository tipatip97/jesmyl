import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13C14.9628 4 15.9443 4 16.7889 4.42229C17.6334 4.84458 18.2223 5.62972 19.4 7.2C21.1333 9.51111 22 10.6667 22 12C22 13.3333 21.1333 14.4889 19.4 16.8C18.2223 18.3703 17.6334 19.1554 16.7889 19.5777C15.9443 20 14.9628 20 13 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z',
  d2: 'M14 9L8 14.9996M14 15L8 9.00039',
  d3: 'M17.1243 3.75155C16.1193 3.24905 14.9682 3.24944 13.189 3.25004L13 3.25008L9.94358 3.25008C8.10582 3.25007 6.65019 3.25005 5.51098 3.40322C4.33856 3.56085 3.38961 3.89296 2.64124 4.64133C1.89288 5.38969 1.56076 6.33864 1.40314 7.51106C1.24997 8.65027 1.24998 10.1059 1.25 11.9437V11.9437V12.0565V12.0565C1.24998 13.8943 1.24997 15.3499 1.40314 16.4891C1.56076 17.6615 1.89288 18.6105 2.64124 19.3588C3.38961 20.1072 4.33856 20.4393 5.51098 20.5969C6.65018 20.7501 8.1058 20.7501 9.94354 20.7501H9.94359H13C13.0638 20.7501 13.1268 20.7501 13.189 20.7501C14.9682 20.7507 16.1193 20.7511 17.1243 20.2486C18.1293 19.7461 18.8196 18.8251 19.8866 17.4013C20.0128 17.233 20.14 17.0651 20.2674 16.897C20.8774 16.0919 21.4906 15.2827 21.9982 14.4107C22.4686 13.6026 22.75 12.8479 22.75 12.0001C22.75 11.1523 22.4686 10.3976 21.9982 9.58945C21.4906 8.71738 20.8773 7.90806 20.2672 7.10292C20.1399 6.9349 20.0127 6.76705 19.8866 6.59886C18.8196 5.1751 18.1293 4.25405 17.1243 3.75155ZM14.7071 9.70713C15.0976 9.31662 15.0976 8.68345 14.7071 8.29292C14.3166 7.90238 13.6835 7.90236 13.2929 8.29287L10.9998 10.5858L8.70708 8.29326C8.31655 7.90275 7.68338 7.90277 7.29287 8.29331C6.90236 8.68385 6.90238 9.31701 7.29292 9.70752L9.58554 12L7.29292 14.2925C6.90238 14.683 6.90236 15.3162 7.29287 15.7067C7.68338 16.0972 8.31655 16.0972 8.70708 15.7067L10.9998 13.4142L13.2929 15.7071C13.6835 16.0976 14.3166 16.0976 14.7071 15.7071C15.0976 15.3165 15.0976 14.6834 14.7071 14.2929L12.4141 12L14.7071 9.70713Z',
  d4: 'M13.189 3.25004C14.9682 3.24944 16.1193 3.24905 17.1243 3.75155C18.1293 4.25405 18.8196 5.1751 19.8866 6.59886C20.6167 7.57299 21.3846 8.53539 21.9982 9.58945C22.4686 10.3976 22.75 11.1523 22.75 12.0001C22.75 12.8479 22.4686 13.6026 21.9982 14.4107C21.3846 15.4648 20.6167 16.4272 19.8866 17.4013C18.8196 18.8251 18.1293 19.7461 17.1243 20.2486C16.0841 20.7687 14.8876 20.7501 13 20.7501H9.94359H9.94354C8.1058 20.7501 6.65018 20.7501 5.51098 20.5969C4.33856 20.4393 3.38961 20.1072 2.64124 19.3588C1.89288 18.6105 1.56076 17.6615 1.40314 16.4891C1.24997 15.3499 1.24998 13.8943 1.25 12.0565V12.0565V11.9437V11.9437C1.24998 10.1059 1.24997 8.65027 1.40314 7.51106C1.56076 6.33864 1.89288 5.38969 2.64124 4.64133C3.38961 3.89296 4.33856 3.56085 5.51098 3.40322C6.65019 3.25005 8.10582 3.25007 9.94358 3.25008L13 3.25008L13.189 3.25004Z',
  d5: 'M14.7071 8.29292C15.0976 8.68345 15.0976 9.31662 14.7071 9.70713L12.4141 12L14.7071 14.2929C15.0976 14.6834 15.0976 15.3165 14.7071 15.7071C14.3166 16.0976 13.6835 16.0976 13.2929 15.7071L10.9998 13.4142L8.70708 15.7067C8.31655 16.0972 7.68338 16.0972 7.29287 15.7067C6.90236 15.3162 6.90238 14.683 7.29292 14.2925L9.58554 12L7.29292 9.70752C6.90238 9.31701 6.90236 8.68385 7.29287 8.29331C7.68338 7.90277 8.31655 7.90275 8.70708 8.29326L10.9998 10.5858L13.2929 8.29287C13.6835 7.90236 14.3166 7.90238 14.7071 8.29292Z',
  d6: 'M13.0117 9.00293L7.01172 15.0025M13.0117 15.0029L7.01172 9.00332',
  d7: 'M2 4.1C2 4.04477 2.04477 4 2.1 4H17.0601L21.8378 11.7373C21.9372 11.8983 21.9372 12.1017 21.8378 12.2627L17.0601 20H2.1C2.04477 20 2 19.9552 2 19.9V4.1Z',
  d8: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H17.4157L22.636 11.6025C22.788 11.8457 22.788 12.1543 22.636 12.3975L17.4157 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V4ZM12.293 8.29285L9.99986 10.5858L7.70714 8.29324L6.29297 9.7075L8.5856 12L6.29297 14.2925L7.70714 15.7067L9.99986 13.4141L12.293 15.7071L13.7071 14.2928L11.4141 12L13.7071 9.70711L12.293 8.29285Z',
} as const;

export const IconEraser01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-stroke-rounded IconEraser01StrokeRounded"
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

export const IconEraser01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-duotone-rounded IconEraser01DuotoneRounded"
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

export const IconEraser01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-twotone-rounded IconEraser01TwotoneRounded"
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

export const IconEraser01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-solid-rounded IconEraser01SolidRounded"
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

export const IconEraser01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-bulk-rounded IconEraser01BulkRounded"
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

export const IconEraser01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-stroke-sharp IconEraser01StrokeSharp"
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

export const IconEraser01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-01-solid-sharp IconEraser01SolidSharp"
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

export const iconPackOfEraser01: TheIconSelfPack = {
  name: 'Eraser01',
  StrokeRounded: IconEraser01StrokeRounded,
  DuotoneRounded: IconEraser01DuotoneRounded,
  TwotoneRounded: IconEraser01TwotoneRounded,
  SolidRounded: IconEraser01SolidRounded,
  BulkRounded: IconEraser01BulkRounded,
  StrokeSharp: IconEraser01StrokeSharp,
  SolidSharp: IconEraser01SolidSharp,
};
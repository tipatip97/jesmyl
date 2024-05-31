import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8V6Z',
  d2: 'M2 19C2 18.0681 2 17.6022 2.15224 17.2346C2.35523 16.7446 2.74458 16.3552 3.23463 16.1522C3.60218 16 4.06812 16 5 16H7C7.93188 16 8.39782 16 8.76537 16.1522C9.25542 16.3552 9.64477 16.7446 9.84776 17.2346C10 17.6022 10 18.0681 10 19C10 19.9319 10 20.3978 9.84776 20.7654C9.64477 21.2554 9.25542 21.6448 8.76537 21.8478C8.39782 22 7.93188 22 7 22H5C4.06812 22 3.60218 22 3.23463 21.8478C2.74458 21.6448 2.35523 21.2554 2.15224 20.7654C2 20.3978 2 19.9319 2 19Z',
  d3: 'M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V16Z',
  d4: 'M14 5C14 4.06812 14 3.60218 14.1522 3.23463C14.3552 2.74458 14.7446 2.35523 15.2346 2.15224C15.6022 2 16.0681 2 17 2H19C19.9319 2 20.3978 2 20.7654 2.15224C21.2554 2.35523 21.6448 2.74458 21.8478 3.23463C22 3.60218 22 4.06812 22 5C22 5.93188 22 6.39782 21.8478 6.76537C21.6448 7.25542 21.2554 7.64477 20.7654 7.84776C20.3978 8 19.9319 8 19 8H17C16.0681 8 15.6022 8 15.2346 7.84776C14.7446 7.64477 14.3552 7.25542 14.1522 6.76537C14 6.39782 14 5.93188 14 5Z',
  d5: 'M6.05203 1.25C6.9505 1.24997 7.69971 1.24995 8.29448 1.32991C8.92228 1.41432 9.48908 1.59999 9.94455 2.05546C10.4 2.51093 10.5857 3.07773 10.6701 3.70552C10.7501 4.3003 10.75 5.04951 10.75 5.94798V5.94801V8.052V8.05203C10.75 8.9505 10.7501 9.69971 10.6701 10.2945C10.5857 10.9223 10.4 11.4891 9.94455 11.9445C9.48908 12.4 8.92228 12.5857 8.29448 12.6701C7.69971 12.7501 6.9505 12.75 6.05203 12.75H6.052H5.94801H5.94798C5.04951 12.75 4.3003 12.7501 3.70552 12.6701C3.07773 12.5857 2.51093 12.4 2.05546 11.9445C1.59999 11.4891 1.41432 10.9223 1.32991 10.2945C1.24995 9.69971 1.24997 8.9505 1.25 8.05203V8.052V5.948V5.94797C1.24997 5.04951 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04951 1.24997 5.94797 1.25H5.948H6.052H6.05203Z',
  d6: 'M7.02526 15.25C7.46972 15.25 7.84075 15.25 8.14537 15.2708C8.46247 15.2924 8.76199 15.339 9.05238 15.4593C9.72621 15.7384 10.2616 16.2738 10.5407 16.9476C10.661 17.238 10.7076 17.5375 10.7292 17.8546C10.75 18.1592 10.75 18.5303 10.75 18.9747V19.0253C10.75 19.4697 10.75 19.8408 10.7292 20.1454C10.7076 20.4625 10.661 20.762 10.5407 21.0524C10.2616 21.7262 9.72621 22.2616 9.05238 22.5407C8.76199 22.661 8.46247 22.7076 8.14537 22.7292C7.84075 22.75 7.46972 22.75 7.02526 22.75H4.97474C4.53028 22.75 4.15925 22.75 3.85464 22.7292C3.53754 22.7076 3.23801 22.661 2.94762 22.5407C2.27379 22.2616 1.73844 21.7262 1.45933 21.0524C1.33905 20.762 1.29241 20.4625 1.27077 20.1454C1.24999 19.8408 1.24999 19.4697 1.25 19.0253V19.0253V18.9747V18.9747C1.24999 18.5303 1.24999 18.1592 1.27077 17.8546C1.29241 17.5375 1.33905 17.238 1.45933 16.9476C1.73844 16.2738 2.27379 15.7384 2.94762 15.4593C3.23801 15.339 3.53754 15.2924 3.85464 15.2708C4.15925 15.25 4.53028 15.25 4.97474 15.25H4.97475H7.02525H7.02526Z',
  d7: 'M18.052 11.25C18.9505 11.25 19.6997 11.2499 20.2945 11.3299C20.9223 11.4143 21.4891 11.6 21.9445 12.0555C22.4 12.5109 22.5857 13.0777 22.6701 13.7055C22.7501 14.3003 22.75 15.0495 22.75 15.948V15.948V18.052V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H18.052H17.948H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V18.052V15.948V15.948C13.25 15.0495 13.2499 14.3003 13.3299 13.7055C13.4143 13.0777 13.6 12.5109 14.0555 12.0555C14.5109 11.6 15.0777 11.4143 15.7055 11.3299C16.3003 11.2499 17.0495 11.25 17.948 11.25H17.948H18.052H18.052Z',
  d8: 'M19.0253 1.25C19.4697 1.24999 19.8408 1.24999 20.1454 1.27077C20.4625 1.29241 20.762 1.33905 21.0524 1.45933C21.7262 1.73844 22.2616 2.27379 22.5407 2.94762C22.661 3.23801 22.7076 3.53754 22.7292 3.85464C22.75 4.15925 22.75 4.53028 22.75 4.97474V5.02526C22.75 5.46972 22.75 5.84075 22.7292 6.14537C22.7076 6.46247 22.661 6.76199 22.5407 7.05238C22.2616 7.72621 21.7262 8.26156 21.0524 8.54067C20.762 8.66095 20.4625 8.7076 20.1454 8.72923C19.8408 8.75001 19.4697 8.75001 19.0253 8.75H16.9747C16.5303 8.75001 16.1592 8.75001 15.8546 8.72923C15.5375 8.7076 15.238 8.66095 14.9476 8.54067C14.2738 8.26156 13.7384 7.72621 13.4593 7.05238C13.339 6.76199 13.2924 6.46247 13.2708 6.14537C13.25 5.84075 13.25 5.46972 13.25 5.02526V5.02525V4.97475V4.97474C13.25 4.53028 13.25 4.15925 13.2708 3.85464C13.2924 3.53754 13.339 3.23801 13.4593 2.94762C13.7384 2.27379 14.2738 1.73844 14.9476 1.45933C15.238 1.33905 15.5375 1.29241 15.8546 1.27077C16.1592 1.24999 16.5303 1.24999 16.9747 1.25H16.9747H19.0253H19.0253Z',
  d9: 'M10 2H2V12H10V2Z',
  d10: 'M10 16H2V22H10V16Z',
  d11: 'M22 12H14V22H22V12Z',
  d12: 'M22 2H14V8H22V2Z',
  d13: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V12C10.75 12.4142 10.4142 12.75 10 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12V2Z',
  d14: 'M1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16V22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V16Z',
  d15: 'M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12V22C22.75 22.4142 22.4142 22.75 22 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22V12Z',
  d16: 'M13.25 2C13.25 1.58579 13.5858 1.25 14 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V8C22.75 8.41421 22.4142 8.75 22 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8V2Z',
} as const;

export const IconDashboardSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-stroke-rounded IconDashboardSquare02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-duotone-rounded IconDashboardSquare02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-twotone-rounded IconDashboardSquare02TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-solid-rounded IconDashboardSquare02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconDashboardSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-bulk-rounded IconDashboardSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-stroke-sharp IconDashboardSquare02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-02-solid-sharp IconDashboardSquare02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDashboardSquare02: TheIconSelfPack = {
  name: 'DashboardSquare02',
  StrokeRounded: IconDashboardSquare02StrokeRounded,
  DuotoneRounded: IconDashboardSquare02DuotoneRounded,
  TwotoneRounded: IconDashboardSquare02TwotoneRounded,
  SolidRounded: IconDashboardSquare02SolidRounded,
  BulkRounded: IconDashboardSquare02BulkRounded,
  StrokeSharp: IconDashboardSquare02StrokeSharp,
  SolidSharp: IconDashboardSquare02SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 6L14 6',
  d2: 'M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z',
  d3: 'M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z',
  d4: 'M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z',
  d5: 'M18.0314 13.25C18.7048 13.25 19.2555 13.25 19.7031 13.2866C20.1663 13.3244 20.5847 13.4051 20.9755 13.6042C21.587 13.9158 22.0842 14.413 22.3958 15.0245C22.5949 15.4153 22.6756 15.8337 22.7134 16.2969C22.75 16.7445 22.75 17.2952 22.75 17.9685V17.9686V18.0314V18.0315C22.75 18.7048 22.75 19.2555 22.7134 19.7031C22.6756 20.1663 22.5949 20.5847 22.3958 20.9755C22.0842 21.587 21.587 22.0842 20.9755 22.3958C20.5847 22.5949 20.1663 22.6756 19.7031 22.7134C19.2555 22.75 18.7048 22.75 18.0315 22.75H18.0314H17.9686H17.9685C17.2952 22.75 16.7445 22.75 16.2969 22.7134C15.8337 22.6756 15.4153 22.5949 15.0245 22.3958C14.413 22.0842 13.9158 21.587 13.6042 20.9755C13.4051 20.5847 13.3244 20.1663 13.2866 19.7031C13.25 19.2555 13.25 18.7048 13.25 18.0314V18.0314V17.9686V17.9686C13.25 17.2952 13.25 16.7445 13.2866 16.2969C13.3244 15.8337 13.4051 15.4153 13.6042 15.0245C13.9158 14.413 14.413 13.9158 15.0245 13.6042C15.4153 13.4051 15.8337 13.3244 16.2969 13.2866C16.7445 13.25 17.2952 13.25 17.9686 13.25H17.9686H18.0314H18.0314Z',
  d6: 'M6.03143 13.25C6.7048 13.25 7.25551 13.25 7.70307 13.2866C8.16633 13.3244 8.58473 13.4051 8.97547 13.6042C9.587 13.9158 10.0842 14.413 10.3958 15.0245C10.5949 15.4153 10.6756 15.8337 10.7134 16.2969C10.75 16.7445 10.75 17.2952 10.75 17.9685V17.9686V18.0314V18.0315C10.75 18.7048 10.75 19.2555 10.7134 19.7031C10.6756 20.1663 10.5949 20.5847 10.3958 20.9755C10.0842 21.587 9.587 22.0842 8.97547 22.3958C8.58473 22.5949 8.16633 22.6756 7.70307 22.7134C7.25552 22.75 6.70482 22.75 6.03147 22.75H6.03144H5.96856H5.96853C5.29518 22.75 4.74448 22.75 4.29693 22.7134C3.83367 22.6756 3.41527 22.5949 3.02453 22.3958C2.413 22.0842 1.91582 21.587 1.60423 20.9755C1.40514 20.5847 1.3244 20.1663 1.28655 19.7031C1.24998 19.2555 1.24999 18.7048 1.25 18.0314V18.0314V17.9686V17.9686C1.24999 17.2952 1.24998 16.7445 1.28655 16.2969C1.3244 15.8337 1.40514 15.4153 1.60423 15.0245C1.91582 14.413 2.413 13.9158 3.02453 13.6042C3.41527 13.4051 3.83367 13.3244 4.29693 13.2866C4.74449 13.25 5.2952 13.25 5.96857 13.25H5.96858H6.03142H6.03143Z',
  d7: 'M6.03143 1.25C6.7048 1.24999 7.25551 1.24998 7.70307 1.28655C8.16633 1.3244 8.58473 1.40514 8.97547 1.60423C9.587 1.91582 10.0842 2.413 10.3958 3.02453C10.5949 3.41527 10.6756 3.83367 10.7134 4.29693C10.75 4.74448 10.75 5.29518 10.75 5.96853V5.96856V6.03144V6.03147C10.75 6.70482 10.75 7.25552 10.7134 7.70307C10.6756 8.16633 10.5949 8.58473 10.3958 8.97547C10.0842 9.587 9.587 10.0842 8.97547 10.3958C8.58473 10.5949 8.16633 10.6756 7.70307 10.7134C7.25552 10.75 6.70482 10.75 6.03147 10.75H6.03144H5.96856H5.96853C5.29518 10.75 4.74448 10.75 4.29693 10.7134C3.83367 10.6756 3.41527 10.5949 3.02453 10.3958C2.413 10.0842 1.91582 9.587 1.60423 8.97547C1.40514 8.58473 1.3244 8.16633 1.28655 7.70307C1.24998 7.25551 1.24999 6.7048 1.25 6.03143V6.03142V5.96858V5.96857C1.24999 5.2952 1.24998 4.74449 1.28655 4.29693C1.3244 3.83367 1.40514 3.41527 1.60423 3.02453C1.91582 2.413 2.413 1.91582 3.02453 1.60423C3.41527 1.40514 3.83367 1.3244 4.29693 1.28655C4.74449 1.24998 5.2952 1.24999 5.96857 1.25H5.96858H6.03142H6.03143Z',
  d8: 'M14.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6C22.5 6.55228 22.0523 7 21.5 7L14.5 7C13.9477 7 13.5 6.55228 13.5 6C13.5 5.44772 13.9477 5 14.5 5Z',
  d9: 'M22.5 6L13.5 6',
  d10: 'M10 2H2V10H10V2Z',
  d11: 'M10 14H2V22H10V14Z',
  d12: 'M22 14H14V22H22V14Z',
  d13: 'M13.5 5L22.5 5L22.5 7L13.5 7L13.5 5Z',
  d14: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V10C10.75 10.4142 10.4142 10.75 10 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10V2Z',
  d15: 'M1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V14Z',
  d16: 'M13.25 14C13.25 13.5858 13.5858 13.25 14 13.25H22C22.4142 13.25 22.75 13.5858 22.75 14V22C22.75 22.4142 22.4142 22.75 22 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22V14Z',
} as const;

export const IconDashboardSquareRemoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-stroke-rounded IconDashboardSquareRemoveStrokeRounded"
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

export const IconDashboardSquareRemoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-duotone-rounded IconDashboardSquareRemoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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

export const IconDashboardSquareRemoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-twotone-rounded IconDashboardSquareRemoveTwotoneRounded"
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

export const IconDashboardSquareRemoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-solid-rounded IconDashboardSquareRemoveSolidRounded"
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

export const IconDashboardSquareRemoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-bulk-rounded IconDashboardSquareRemoveBulkRounded"
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

export const IconDashboardSquareRemoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-stroke-sharp IconDashboardSquareRemoveStrokeSharp"
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

export const IconDashboardSquareRemoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-remove-solid-sharp IconDashboardSquareRemoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfDashboardSquareRemove: TheIconSelfPack = {
  name: 'DashboardSquareRemove',
  StrokeRounded: IconDashboardSquareRemoveStrokeRounded,
  DuotoneRounded: IconDashboardSquareRemoveDuotoneRounded,
  TwotoneRounded: IconDashboardSquareRemoveTwotoneRounded,
  SolidRounded: IconDashboardSquareRemoveSolidRounded,
  BulkRounded: IconDashboardSquareRemoveBulkRounded,
  StrokeSharp: IconDashboardSquareRemoveStrokeSharp,
  SolidSharp: IconDashboardSquareRemoveSolidSharp,
};
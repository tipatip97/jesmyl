import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 7.5C12 9.433 10.433 11 8.5 11C6.567 11 5 9.433 5 7.5C5 5.567 6.567 4 8.5 4C10.433 4 12 5.567 12 7.5Z',
  d2: 'M13.5 11C15.433 11 17 9.433 17 7.5C17 5.567 15.433 4 13.5 4',
  d3: 'M13.1429 20H3.85714C2.83147 20 2 19.2325 2 18.2857C2 15.9188 4.07868 14 6.64286 14H10.3571C11.4023 14 12.3669 14.3188 13.1429 14.8568',
  d4: 'M19 14V20M22 17L16 17',
  d5: 'M2 18.2857C2 19.2325 2.83147 20 3.85714 20H13.1431C14.1688 20 15.0003 19.2325 15.0003 18.2857C15.0003 15.9188 12.9216 14 10.3574 14H6.64286C4.07868 14 2 15.9188 2 18.2857Z',
  d6: 'M4.25 7.5C4.25 5.15279 6.15279 3.25 8.5 3.25C10.8472 3.25 12.75 5.15279 12.75 7.5C12.75 9.84721 10.8472 11.75 8.5 11.75C6.15279 11.75 4.25 9.84721 4.25 7.5Z',
  d7: 'M1.25 18.2857C1.25 15.4492 3.72212 13.25 6.64286 13.25H10.3574C10.7503 13.25 11.135 13.2898 11.5067 13.3656C12.1467 13.496 12.4667 13.5613 12.8049 13.9754C13.1431 14.3895 13.1431 14.8356 13.1431 15.7277V17.75C13.1431 19.1642 13.1431 19.8713 12.7038 20.3107C12.2645 20.75 11.5573 20.75 10.1431 20.75H3.85714C2.47491 20.75 1.25 19.7021 1.25 18.2857Z',
  d8: 'M18.75 12.75C19.3023 12.75 19.75 13.1977 19.75 13.75V15.75H21.75C22.3023 15.75 22.75 16.1977 22.75 16.75C22.75 17.3023 22.3023 17.75 21.75 17.75H19.75V19.75C19.75 20.3023 19.3023 20.75 18.75 20.75C18.1977 20.75 17.75 20.3023 17.75 19.75V17.75H15.75C15.1977 17.75 14.75 17.3023 14.75 16.75C14.75 16.1977 15.1977 15.75 15.75 15.75L17.75 15.75V13.75C17.75 13.1977 18.1977 12.75 18.75 12.75Z',
  d9: 'M12.4991 11.6315C12.8201 11.709 13.1552 11.75 13.5 11.75C15.8472 11.75 17.75 9.84721 17.75 7.5C17.75 5.15279 15.8472 3.25 13.5 3.25C13.1552 3.25 12.8201 3.29104 12.4991 3.36851C13.5788 4.41382 14.25 5.87853 14.25 7.5C14.25 9.12147 13.5788 10.5862 12.4991 11.6315Z',
  d10: 'M12.4992 11.6315C12.8201 11.709 13.1553 11.75 13.5 11.75C15.8472 11.75 17.75 9.84721 17.75 7.5C17.75 5.15279 15.8472 3.25 13.5 3.25C13.1553 3.25 12.8201 3.29104 12.4992 3.36851C13.5788 4.41382 14.25 5.87853 14.25 7.5C14.25 9.12147 13.5788 10.5862 12.4992 11.6315Z',
  d11: 'M13 20H2V18C2 15.7909 3.79086 14 6 14H11C11.7286 14 12.4117 14.1948 13 14.5351',
  d12: 'M1.25 18C1.25 15.3766 3.37665 13.25 6 13.25H11C11.7145 13.25 12.3921 13.4078 13 13.6903V20.75H1.25V18Z',
  d13: 'M19.75 12.75V15.75H22.75V17.75H19.75V20.75H17.75V17.75H14.75L14.75 15.75L17.75 15.75V12.75H19.75Z',
  d14: 'M12.5 11.6315C12.8209 11.709 13.1561 11.75 13.5008 11.75C15.848 11.75 17.7508 9.84721 17.7508 7.5C17.7508 5.15279 15.848 3.25 13.5008 3.25C13.1561 3.25 12.8209 3.29104 12.5 3.36851C13.5797 4.41382 14.2508 5.87853 14.2508 7.5C14.2508 9.12147 13.5797 10.5862 12.5 11.6315Z',
} as const;

export const IconAddTeamStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-stroke-rounded IconAddTeamStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAddTeamDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-duotone-rounded IconAddTeamDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAddTeamTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-twotone-rounded IconAddTeamTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconAddTeamSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-solid-rounded IconAddTeamSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAddTeamBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-bulk-rounded IconAddTeamBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAddTeamStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-stroke-sharp IconAddTeamStrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconAddTeamSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="add-team-solid-sharp IconAddTeamSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfAddTeam: TheIconSelfPack = {
  name: 'AddTeam',
  StrokeRounded: IconAddTeamStrokeRounded,
  DuotoneRounded: IconAddTeamDuotoneRounded,
  TwotoneRounded: IconAddTeamTwotoneRounded,
  SolidRounded: IconAddTeamSolidRounded,
  BulkRounded: IconAddTeamBulkRounded,
  StrokeSharp: IconAddTeamStrokeSharp,
  SolidSharp: IconAddTeamSolidSharp,
};
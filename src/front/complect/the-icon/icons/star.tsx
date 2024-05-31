import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z',
  d2: 'M12 2C11.3702 1.99825 10.7388 2.47965 10.258 3.44418L8.49821 6.99288C8.25824 7.48687 7.61831 7.9607 7.08837 8.05143L3.89872 8.58575C1.85895 8.92853 1.389 10.4206 2.84884 11.8925L5.32856 14.3927C5.74852 14.8161 5.97849 15.6327 5.84851 16.2175L5.13859 19.3125C4.57865 21.7522 5.8785 22.71 8.01827 21.4296L11.0079 19.6452C11.2825 19.4841 11.6418 19.4035 12 19.4032',
  d3: 'M11.9961 1.25C13.0454 1.25 13.8719 2.04253 14.3995 3.11191L16.1616 6.66516C16.215 6.77513 16.3417 6.92998 16.5321 7.07164C16.7223 7.21315 16.9086 7.29121 17.0311 7.3118L20.2207 7.84613C21.3729 8.03973 22.3386 8.60449 22.6521 9.5879C22.9653 10.5705 22.5064 11.5916 21.6778 12.4216L21.677 12.4225L19.1991 14.9209C19.1009 15.0199 18.9909 15.2064 18.9219 15.4494C18.8534 15.6908 18.8473 15.9107 18.8784 16.0527L18.8788 16.0547L19.5877 19.1454C19.8818 20.4317 19.7843 21.7073 18.8771 22.3742C17.9667 23.0433 16.7227 22.7467 15.5925 22.0736L12.6026 20.289C12.477 20.214 12.2614 20.1532 12.0011 20.1532C11.7427 20.1532 11.5226 20.2132 11.3888 20.291L11.3869 20.2921L8.40288 22.0732C7.27405 22.7487 6.03154 23.04 5.12111 22.3702C4.21449 21.7032 4.11214 20.43 4.40711 19.1447L5.1159 16.0547L5.11633 16.0527C5.14741 15.9107 5.14133 15.6908 5.0728 15.4494C5.0038 15.2064 4.89379 15.0199 4.79558 14.9209L2.31585 12.4206C1.49265 11.5906 1.03521 10.5704 1.34595 9.58925C1.65759 8.60525 2.62143 8.0398 3.77433 7.84606L6.96132 7.31219L6.96233 7.31202C7.07917 7.29175 7.2627 7.21456 7.45248 7.07268C7.64261 6.93054 7.76959 6.77535 7.82312 6.66516L7.82582 6.65967L9.58562 3.11097L9.58632 3.10957C10.119 2.04108 10.948 1.25 11.9961 1.25Z',
  d4: 'M9.58632 3.10957C10.119 2.04108 10.948 1.25 11.9961 1.25V20.1532C11.7399 20.154 11.5217 20.2137 11.3888 20.291L11.3869 20.2921L8.40288 22.0732C7.27405 22.7487 6.03154 23.04 5.12111 22.3702C4.21449 21.7032 4.11214 20.43 4.40711 19.1447L5.1159 16.0547L5.11633 16.0527C5.14741 15.9107 5.14133 15.6908 5.0728 15.4494C5.0038 15.2064 4.89379 15.0199 4.79558 14.9209L2.31585 12.4206C1.49265 11.5906 1.03521 10.5704 1.34595 9.58925C1.65759 8.60525 2.62143 8.0398 3.77433 7.84606L6.96132 7.31219L6.96233 7.31202C7.07917 7.29175 7.2627 7.21456 7.45248 7.07268C7.64261 6.93054 7.76959 6.77535 7.82312 6.66516L7.82582 6.65967L9.58562 3.11097L9.58632 3.10957Z',
  d5: 'M15.5147 7.9986L12.0137 2.00496C12.0098 1.99835 12.0003 1.99834 11.9964 2.00495L8.4869 7.9986L2.00758 9.62485C2.00021 9.6267 1.99751 9.63577 2.00267 9.64135L6.49085 14.4931L4.80567 21.9878C4.80389 21.9957 4.81177 22.0023 4.81927 21.9992L12.0065 19.024L19.1768 21.9992C19.1843 22.0023 19.1922 21.9957 19.1904 21.9878L17.5083 14.4818L21.9973 9.6479C22.0025 9.64233 21.9998 9.63325 21.9924 9.63139L15.5147 7.9986Z',
  d6: 'M12 1.25C12.2668 1.25 12.5134 1.39168 12.6478 1.6221L15.989 7.34985L22.1834 8.91209C22.4402 8.97684 22.6437 9.17215 22.719 9.42598C22.7943 9.67981 22.7302 9.95455 22.5504 10.1488L18.318 14.7204L19.9122 21.836C19.9735 22.1096 19.8771 22.3946 19.6622 22.5747C19.4473 22.7549 19.1499 22.8001 18.8912 22.692L12 19.8128L5.10881 22.692C4.85009 22.8001 4.55269 22.7549 4.33782 22.5747C4.12295 22.3946 4.02652 22.1096 4.08782 21.836L5.68203 14.7204L1.44966 10.1488C1.26979 9.95455 1.20568 9.67981 1.281 9.42598C1.35631 9.17215 1.55988 8.97684 1.81661 8.91209L8.01099 7.34985L11.3522 1.6221C11.4866 1.39168 11.7333 1.25 12 1.25Z',
} as const;

export const IconStarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-stroke-rounded IconStarStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-duotone-rounded IconStarDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-twotone-rounded IconStarTwotoneRounded"
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

export const IconStarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-solid-rounded IconStarSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-bulk-rounded IconStarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-stroke-sharp IconStarStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-solid-sharp IconStarSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStar: TheIconSelfPack = {
  name: 'Star',
  StrokeRounded: IconStarStrokeRounded,
  DuotoneRounded: IconStarDuotoneRounded,
  TwotoneRounded: IconStarTwotoneRounded,
  SolidRounded: IconStarSolidRounded,
  BulkRounded: IconStarBulkRounded,
  StrokeSharp: IconStarStrokeSharp,
  SolidSharp: IconStarSolidSharp,
};
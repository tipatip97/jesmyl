import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 15C5 11.134 8.02208 8 11.75 8H12.25C15.9779 8 19 11.134 19 15C19 18.866 15.9779 22 12.25 22H11.75C8.02208 22 5 18.866 5 15Z',
  d2: 'M12.5 17.9994V12.9481C12.5 12.3736 12.5 12.0863 12.2696 12.0149C11.7631 11.8577 11 12.999 11 12.999M12.5 17.9994H11M12.5 17.9994H14',
  d3: 'M13.5601 2L11 7.89783M18 2L15.1786 8.5',
  d4: 'M10.4399 2L12 5.59405M6 2L8.82144 8.5',
  d5: 'M5.60208 1.58294C6.1087 1.36304 6.69766 1.59546 6.91756 2.10208L9.73901 8.60208C9.95891 9.1087 9.72649 9.69766 9.21987 9.91756C8.71325 10.1375 8.12429 9.90504 7.90439 9.39843L5.08294 2.89843C4.86304 2.39181 5.09546 1.80285 5.60208 1.58294ZM10.042 1.58294C10.5486 1.36304 11.1376 1.59546 11.3575 2.10208L12.0003 3.58284L12.643 2.10208C12.8629 1.59546 13.4519 1.36304 13.9585 1.58294C14.4651 1.80285 14.6975 2.39181 14.4776 2.89843L12.9185 6.49025L12.9164 6.49509L11.9176 8.79626C11.6977 9.30288 11.1087 9.5353 10.6021 9.3154C10.0955 9.09549 9.86304 8.50653 10.0829 7.99991L10.9101 6.0943L9.52288 2.89843C9.30298 2.39181 9.5354 1.80285 10.042 1.58294ZM18.3984 1.58294C18.905 1.80285 19.1375 2.39181 18.9176 2.89843L16.0961 9.39843C15.8762 9.90504 15.2873 10.1375 14.7806 9.91756C14.274 9.69766 14.0416 9.1087 14.2615 8.60208L17.0829 2.10208C17.3028 1.59546 17.8918 1.36304 18.3984 1.58294Z',
  d6: 'M11.75 7C7.58239 7 4.25 10.4957 4.25 14.75C4.25 19.0043 7.58239 22.5 11.75 22.5H12.25C16.4176 22.5 19.75 19.0043 19.75 14.75C19.75 10.4957 16.4176 7 12.25 7H11.75ZM11.6233 13.1665L11.627 13.1612L11.6461 13.1338C11.6637 13.1089 11.6904 13.0719 11.7243 13.0274L11.75 12.9939V16.9998H11C10.5858 16.9998 10.25 17.3356 10.25 17.7498C10.25 18.164 10.5858 18.4998 11 18.4998H14C14.4142 18.4998 14.75 18.164 14.75 17.7498C14.75 17.3356 14.4142 16.9998 14 16.9998H13.25V12.6986L13.25 12.6505C13.2502 12.4072 13.2504 12.128 13.2082 11.9042C13.1836 11.7737 13.1343 11.5964 13.0158 11.4284C12.8841 11.2416 12.7008 11.1138 12.4918 11.049C12.0608 10.9152 11.682 11.0845 11.4742 11.2081C11.2473 11.3431 11.0503 11.5259 10.9028 11.6801C10.7499 11.84 10.62 12.0014 10.53 12.1198C10.4844 12.1798 10.4475 12.2308 10.4214 12.2677C10.4084 12.2862 10.3979 12.3012 10.3904 12.3122L10.3812 12.3257L10.3783 12.33L10.3773 12.3315L10.3767 12.3324C10.1465 12.6767 10.2388 13.1427 10.5832 13.373C10.9274 13.6031 11.3931 13.5107 11.6233 13.1665Z',
  d7: 'M4.25 14.75C4.25 10.4957 7.58239 7 11.75 7H12.25C16.4176 7 19.75 10.4957 19.75 14.75C19.75 19.0043 16.4176 22.5 12.25 22.5H11.75C7.58239 22.5 4.25 19.0043 4.25 14.75Z',
  d8: 'M6.91756 2.10208C6.69766 1.59546 6.1087 1.36304 5.60208 1.58294C5.09546 1.80285 4.86304 2.39181 5.08294 2.89843L7.46549 8.3873C8.00738 7.99664 8.60199 7.67791 9.23672 7.44492L6.91756 2.10208ZM12.6916 7.01315C12.5455 7.00443 12.3983 7 12.25 7H11.75C11.3126 7 10.8843 7.03851 10.4682 7.11237L10.9101 6.0943L9.52288 2.89843C9.30298 2.39181 9.5354 1.80285 10.042 1.58294C10.5486 1.36304 11.1376 1.59546 11.3575 2.10208L12.0003 3.58284L12.643 2.10208C12.8629 1.59546 13.4519 1.36304 13.9585 1.58294C14.4651 1.80285 14.6975 2.39181 14.4776 2.89843L12.9185 6.49025L12.9164 6.49509L12.6916 7.01315ZM16.5349 8.38758C15.993 7.99688 15.3984 7.67811 14.7637 7.44508L17.0829 2.10208C17.3028 1.59546 17.8918 1.36304 18.3984 1.58294C18.905 1.80285 19.1375 2.39181 18.9176 2.89843L16.5349 8.38758Z',
  d9: 'M11.627 13.1612L11.6233 13.1665C11.3931 13.5107 10.9274 13.6031 10.5832 13.373C10.2388 13.1427 10.1465 12.6767 10.3767 12.3324L10.3773 12.3315L10.3783 12.33L10.3812 12.3257L10.3904 12.3122C10.3979 12.3012 10.4084 12.2862 10.4214 12.2677C10.4475 12.2308 10.4844 12.1798 10.53 12.1198C10.62 12.0014 10.7499 11.84 10.9028 11.6801C11.0503 11.5259 11.2473 11.343 11.4742 11.2081C11.682 11.0845 12.0608 10.9152 12.4918 11.049C12.7008 11.1138 12.8841 11.2416 13.0158 11.4284C13.1343 11.5964 13.1836 11.7737 13.2082 11.9042C13.2504 12.128 13.2502 12.4072 13.25 12.6505L13.25 12.6986V16.9998H14C14.4142 16.9998 14.75 17.3356 14.75 17.7498C14.75 18.164 14.4142 18.4998 14 18.4998H11C10.5858 18.4998 10.25 18.164 10.25 17.7498C10.25 17.3356 10.5858 16.9998 11 16.9998H11.75V12.9939L11.7243 13.0274C11.6904 13.0719 11.6637 13.1089 11.6461 13.1338L11.627 13.1612Z',
  d10: 'M13.5603 2L11.001 8M18.0003 2L15.1788 8.5',
  d11: 'M10.4399 2L12.0008 5.5M6 2L8.82144 8.5',
  d12: 'M10 18H12M12 18H14M12 18V12H11.5L10 13.5',
  d13: 'M16.9239 8.38631L19.4238 2.01726L17.5776 1.24805L15.0777 7.6171L16.9239 8.38631Z',
  d14: 'M11.6634 6.8627L10.8638 7.19214L9.01459 2.01726L10.8638 1.25539L11.9589 4.32004L13.1362 1.25172L14.9854 2.01359L12.9254 7.38264L11.6634 6.8627Z',
  d15: 'M8.92274 7.6171L6.42233 1.25172L4.57617 2.02094L7.07658 8.38632L8.92274 7.6171Z',
  d16: 'M12 22.752C16.5563 22.752 20.25 19.0583 20.25 14.502C20.25 9.9456 16.5563 6.25195 12 6.25195C7.44365 6.25195 3.75 9.9456 3.75 14.502C3.75 19.0583 7.44365 22.752 12 22.752ZM12.7491 10.752H11.19L9.4707 12.4586L10.5274 13.5232L11.2491 12.8069V16.752H9.99907V18.252H13.9991V16.752H12.7491V10.752Z',
} as const;

export const IconMedalFirstPlaceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-stroke-rounded IconMedalFirstPlaceStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMedalFirstPlaceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-duotone-rounded IconMedalFirstPlaceDuotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMedalFirstPlaceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-twotone-rounded IconMedalFirstPlaceTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalFirstPlaceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-solid-rounded IconMedalFirstPlaceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalFirstPlaceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-bulk-rounded IconMedalFirstPlaceBulkRounded"
    >
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalFirstPlaceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-stroke-sharp IconMedalFirstPlaceStrokeSharp"
    >
      <path 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMedalFirstPlaceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-first-place-solid-sharp IconMedalFirstPlaceSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMedalFirstPlace: TheIconSelfPack = {
  name: 'MedalFirstPlace',
  StrokeRounded: IconMedalFirstPlaceStrokeRounded,
  DuotoneRounded: IconMedalFirstPlaceDuotoneRounded,
  TwotoneRounded: IconMedalFirstPlaceTwotoneRounded,
  SolidRounded: IconMedalFirstPlaceSolidRounded,
  BulkRounded: IconMedalFirstPlaceBulkRounded,
  StrokeSharp: IconMedalFirstPlaceStrokeSharp,
  SolidSharp: IconMedalFirstPlaceSolidSharp,
};
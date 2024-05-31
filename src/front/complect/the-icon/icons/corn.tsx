import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.88481 20.1321C5.98804 22.2096 9.86304 21.7503 12.5399 19.1062C15.5988 16.0847 17.1823 15.1788 18.2931 14.5591C18.5175 14.434 18.5733 14.1229 18.3912 13.9429C14.7824 10.3783 8.75783 13.0463 8.10703 17.75M3.88481 20.1321L2.5 21.5M3.88481 20.1321C1.78158 18.0546 2.24717 14.2277 4.92401 11.5836C5.77111 10.956 7.39551 9.17678 7.65754 6.77425C7.68407 6.53098 7.99311 6.40789 8.16826 6.5809C9.47265 7.86934 10.1241 9.55848 10.1227 11.2472',
  d2: 'M17.5917 13C19.9418 9.37568 22.5321 4.72423 21.0791 3.04556C19.3481 1.04574 14.0084 4.93844 10 8.33662',
  d3: 'M12.5399 19.1062C9.86304 21.7503 5.98804 22.2096 3.88481 20.1321C1.78158 18.0546 2.24717 14.2277 4.92401 11.5836C5.77111 10.956 7.39551 9.17678 7.65754 6.77425C7.68407 6.53098 7.99311 6.40789 8.16826 6.5809C9.47265 7.86934 10.1241 9.55848 10.1227 11.2472L10.276 13.8672C12.5217 11.9584 15.9908 11.5719 18.3912 13.9429C18.5733 14.1229 18.5175 14.434 18.2931 14.5591C17.1823 15.1788 15.5988 16.0847 12.5399 19.1062Z',
  d4: 'M10.6558 10.7304C10.8535 10.624 10.9524 10.5708 10.9948 10.4843C11.0372 10.3978 11.0207 10.2992 10.9876 10.102C10.7201 8.50508 10.0083 6.99295 8.87016 5.86873C8.45836 5.46197 7.90378 5.4305 7.4962 5.58784C7.09463 5.74285 6.72188 6.12151 6.66259 6.6651C6.46691 8.45926 5.43707 9.66963 4.22041 10.8714C1.31992 13.7364 0.528468 18.2225 3.18122 20.8428C5.82151 23.4508 10.3418 22.6815 13.2418 19.8169C16.2319 16.8634 17.7416 16.0106 18.7794 15.4317C19.5283 15.014 19.7949 13.924 19.0931 13.2308C17.5961 11.7521 15.7717 11.192 14.0038 11.3086C12.9366 11.3789 11.4389 11.709 10.3795 12.7877C9.57197 13.61 8.98502 14.9229 8.74506 17.0825C8.69932 17.4942 8.3285 17.7908 7.91682 17.7451C7.50514 17.6993 7.20849 17.3285 7.25423 16.9168C7.51427 14.5765 8.17732 12.8893 9.30934 11.7367C9.71367 11.325 10.1649 10.9946 10.6558 10.7304Z',
  d5: 'M19.0142 1.56388C19.9938 1.39773 21.0792 1.5167 21.8352 2.39014C22.4577 3.10929 22.5607 4.04616 22.4724 4.90119C22.3829 5.76864 22.0815 6.72324 21.6849 7.67639C20.9723 9.38891 19.8748 11.2764 18.8047 12.9607C18.2771 12.4928 17.7139 12.1313 17.1304 11.8664C18.1727 10.2242 19.1928 8.45937 19.8384 6.90804C20.2015 6.03545 20.4221 5.28592 20.483 4.69584C20.5452 4.09333 20.4271 3.81927 20.323 3.69908C20.2136 3.57261 19.9823 3.42824 19.3486 3.53572C18.7089 3.64423 17.8713 3.98512 16.8817 4.53864C14.9464 5.62118 12.7078 7.3559 10.7348 9.02388C10.5314 8.35596 10.2454 7.71695 9.87837 7.13145C11.7759 5.54949 13.9481 3.88797 15.9054 2.79314C16.9681 2.1987 18.0406 1.729 19.0142 1.56388ZM2.52935 20.0661L1.79726 20.7892C1.40434 21.1774 1.40044 21.8105 1.78856 22.2034C2.17667 22.5964 2.80982 22.6002 3.20274 22.2121L3.94968 21.4743C3.6796 21.2914 3.42256 21.0812 3.18122 20.8428C2.9345 20.5991 2.71756 20.3393 2.52935 20.0661Z',
  d6: 'M3.88481 20.1321C5.98804 22.2097 9.86304 21.7503 12.5399 19.1062C15.5988 16.0848 17.3891 15.1197 18.5 14.5C14.8912 10.9354 8.75783 13.0463 8.10703 17.75M3.88481 20.1321L2.5 21.5M3.88481 20.1321C1.78158 18.0546 2.24717 14.2277 4.92401 11.5836C5.77111 10.956 7.845 8.90241 8.10703 6.49988C9.41142 7.78831 10.607 8.99988 10.107 11.5836',
  d7: 'M7.48332 4.8844L8.59114 5.97867C9.28034 6.65945 10.1668 7.6702 10.6589 9.12969C11.0014 10.1458 11.141 11.3434 10.9288 12.7521C13.4319 11.5028 16.6985 11.714 19.0168 14.004L19.7297 14.7082L18.8546 15.1963L18.7644 15.2466C17.6833 15.8486 15.9616 16.8074 13.0379 19.6953C10.3889 22.3119 6.43 23.0974 3.86505 21.209L2.96645 22.0966L1.90901 21.026L2.79629 20.1496C0.89045 17.6063 1.69569 13.691 4.34065 11.0784L4.37862 11.0409L4.42151 11.0091C4.78643 10.7388 5.46568 10.1197 6.08021 9.28533C6.69676 8.44823 7.20286 7.45587 7.31449 6.43236L7.48332 4.8844Z',
  d8: 'M19.069 12.0847C19.9752 10.612 20.8525 9.04046 21.4523 7.59895C21.8459 6.6529 22.1381 5.721 22.2244 4.8856C22.3096 4.05954 22.2044 3.20283 21.645 2.55653C20.9676 1.774 19.986 1.65147 19.0467 1.81078C18.1119 1.96932 17.0655 2.42436 16.0086 3.01554C14.4013 3.91457 12.6425 5.20208 11.0078 6.51631C11.4151 7.11004 11.7996 7.81735 12.0803 8.65018C12.2894 9.27025 12.4335 9.93745 12.4954 10.6528C14.6816 10.2302 17.0695 10.6317 19.069 12.0847Z',
} as const;

export const IconCornStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-stroke-rounded IconCornStrokeRounded"
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

export const IconCornDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-duotone-rounded IconCornDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconCornTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-twotone-rounded IconCornTwotoneRounded"
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

export const IconCornSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-solid-rounded IconCornSolidRounded"
    >
      <path 
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

export const IconCornBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-bulk-rounded IconCornBulkRounded"
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

export const IconCornStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-stroke-sharp IconCornStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCornSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="corn-solid-sharp IconCornSolidSharp"
    >
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

export const iconPackOfCorn: TheIconSelfPack = {
  name: 'Corn',
  StrokeRounded: IconCornStrokeRounded,
  DuotoneRounded: IconCornDuotoneRounded,
  TwotoneRounded: IconCornTwotoneRounded,
  SolidRounded: IconCornSolidRounded,
  BulkRounded: IconCornBulkRounded,
  StrokeSharp: IconCornStrokeSharp,
  SolidSharp: IconCornSolidSharp,
};
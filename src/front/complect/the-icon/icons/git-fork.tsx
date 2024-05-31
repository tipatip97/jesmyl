import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z',
  d2: 'M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z',
  d3: 'M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z',
  d4: 'M6.01734 8.74104C6.01734 10.4146 5.77537 12.1999 9.22051 11.9858H12.0053M17.9929 8.57654C18.1259 11.9858 16.9199 11.7651 15.7861 11.9858H12.0053M12.0053 15.7005V11.9858',
  d5: 'M6.01832 8.74067C6.01832 10.4142 5.77635 12.1995 9.22149 11.9854H12.0063M12.0063 11.9854H15.7871C16.9209 11.7647 18.1269 11.9854 17.9939 8.57617M12.0063 11.9854V15.7001',
  d6: 'M6.00098 8C7.10555 8 8.00098 7.10457 8.00098 6C8.00098 4.89543 7.10555 4 6.00098 4C4.89641 4 4.00098 4.89543 4.00098 6C4.00098 7.10457 4.89641 8 6.00098 8Z',
  d7: 'M12.001 20C13.1055 20 14.001 19.1046 14.001 18C14.001 16.8954 13.1055 16 12.001 16C10.8964 16 10.001 16.8954 10.001 18C10.001 19.1046 10.8964 20 12.001 20Z',
  d8: 'M18.001 8C19.1055 8 20.001 7.10457 20.001 6C20.001 4.89543 19.1055 4 18.001 4C16.8964 4 16.001 4.89543 16.001 6C16.001 7.10457 16.8964 8 18.001 8Z',
  d9: 'M6.01441 8.77314C6.01441 10.4467 5.77244 12.232 9.21758 12.0179H12.0024M17.9899 8.60864C18.1229 12.0179 16.9169 11.7973 15.7831 12.0179H12.0024M12.0024 15.7326V12.0179',
  d10: 'M6 7C6.55229 7 7 7.44772 7 8C7 8.97108 7.00213 9.59879 7.06431 10.0613C7.12263 10.495 7.21677 10.631 7.2929 10.7071C7.36902 10.7832 7.50497 10.8774 7.93871 10.9357C8.40122 10.9979 9.02893 11 10 11H14C14.9711 11 15.5988 10.9979 16.0613 10.9357C16.495 10.8774 16.631 10.7832 16.7071 10.7071C16.7832 10.631 16.8774 10.495 16.9357 10.0613C16.9979 9.59879 17 8.97108 17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8L19 8.06583C19.0001 8.95232 19.0001 9.71613 18.9179 10.3278C18.8297 10.9833 18.631 11.6117 18.1213 12.1213C17.6117 12.631 16.9833 12.8297 16.3278 12.9179C15.7161 13.0001 14.9523 13.0001 14.0658 13L13 13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H10C9.97799 13 9.95604 13 9.93417 13C9.04769 13.0001 8.28387 13.0001 7.67221 12.9179C7.0167 12.8297 6.38835 12.631 5.87868 12.1213C5.36902 11.6117 5.17028 10.9833 5.08215 10.3278C4.99991 9.71613 4.99995 8.95232 5 8.06583C5 8.04396 5 8.02202 5 8C5 7.44772 5.44772 7 6 7Z',
  d11: 'M3.25 6C3.25 4.48122 4.48122 3.25 6 3.25C7.51878 3.25 8.75 4.48122 8.75 6C8.75 7.51878 7.51878 8.75 6 8.75C4.48122 8.75 3.25 7.51878 3.25 6Z',
  d12: 'M9.25 18C9.25 16.4812 10.4812 15.25 12 15.25C13.5188 15.25 14.75 16.4812 14.75 18C14.75 19.5188 13.5188 20.75 12 20.75C10.4812 20.75 9.25 19.5188 9.25 18Z',
  d13: 'M15.25 6C15.25 4.48122 16.4812 3.25 18 3.25C19.5188 3.25 20.75 4.48122 20.75 6C20.75 7.51878 19.5188 8.75 18 8.75C16.4812 8.75 15.25 7.51878 15.25 6Z',
  d14: 'M6 7.74414C7.10457 7.74414 8 6.84871 8 5.74414C8 4.63957 7.10457 3.74414 6 3.74414C4.89543 3.74414 4 4.63957 4 5.74414C4 6.84871 4.89543 7.74414 6 7.74414Z',
  d15: 'M12 19.7441C13.1046 19.7441 14 18.8487 14 17.7441C14 16.6396 13.1046 15.7441 12 15.7441C10.8954 15.7441 10 16.6396 10 17.7441C10 18.8487 10.8954 19.7441 12 19.7441Z',
  d16: 'M18 7.74414C19.1046 7.74414 20 6.84871 20 5.74414C20 4.63957 19.1046 3.74414 18 3.74414C16.8954 3.74414 16 4.63957 16 5.74414C16 6.84871 16.8954 7.74414 18 7.74414Z',
  d17: 'M6.00781 8.20869V11.7592H18.0094V8.18359M11.9961 12.3889V15.1836',
  d18: 'M4.99829 11.9995L5.00009 7.99951L7.00009 8.00041L6.99874 11H17.0001V7.99996H19.0001V12C19.0001 12.5522 18.5524 13 18.0001 13H13.0001V16H11.0001V13H5.99829C5.733 13 5.47857 12.8945 5.29103 12.7069C5.10348 12.5193 4.99817 12.2648 4.99829 11.9995Z',
} as const;

export const IconGitForkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-stroke-rounded IconGitForkStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGitForkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-duotone-rounded IconGitForkDuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitForkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-twotone-rounded IconGitForkTwotoneRounded"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGitForkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-solid-rounded IconGitForkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitForkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-bulk-rounded IconGitForkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitForkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-stroke-sharp IconGitForkStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitForkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="git-fork-solid-sharp IconGitForkSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGitFork: TheIconSelfPack = {
  name: 'GitFork',
  StrokeRounded: IconGitForkStrokeRounded,
  DuotoneRounded: IconGitForkDuotoneRounded,
  TwotoneRounded: IconGitForkTwotoneRounded,
  SolidRounded: IconGitForkSolidRounded,
  BulkRounded: IconGitForkBulkRounded,
  StrokeSharp: IconGitForkStrokeSharp,
  SolidSharp: IconGitForkSolidSharp,
};
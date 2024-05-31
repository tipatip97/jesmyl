import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.5 10C9.5 11.1046 10.3954 12 11.5 12C12.6046 12 13.5 11.1046 13.5 10C13.5 8.89543 12.6046 8 11.5 8C10.3954 8 9.5 8.89543 9.5 10Z',
  d2: 'M4.57026 14C3.88958 12.8233 3.5 11.4571 3.5 10C3.5 5.58172 7.08172 2 11.5 2C15.9183 2 19.5 5.58172 19.5 10C19.5 11.4571 19.1104 12.8233 18.4297 14',
  d3: 'M13.35 22H5.65C4.38598 22 3.75398 22 3.29997 21.6148C3.10343 21.448 2.93468 21.2337 2.80335 20.9842C2.5 20.4076 2.5 19.6051 2.5 18C2.5 16.3949 2.5 15.5924 2.80335 15.0158C2.93468 14.7663 3.10343 14.552 3.29997 14.3852C3.75398 14 4.38598 14 5.65 14H19.5',
  d4: 'M15.3906 6.61055L17.4021 4.59912',
  d5: 'M16.5 17L19 19.5M19 19.5L21.5 22M19 19.5L16.5 22M19 19.5L21.5 17',
  d6: 'M2.5 18C2.5 16.3949 2.5 15.5924 2.7948 15.0158C2.92242 14.7663 3.08641 14.552 3.2774 14.3852C3.7186 14 4.33278 14 5.56113 14H16.9311C18.1594 14 18.7736 14 19.2148 14.3852C19.4058 14.552 19.5698 14.7663 19.6974 15.0158C19.9922 15.5924 19.9922 16.3949 19.9922 18C19.9922 19.6051 19.9922 20.4076 19.6974 20.9842C19.5698 21.2337 19.4058 21.448 19.2148 21.6148C18.7736 22 18.1594 22 16.9311 22H5.56113C4.33278 22 3.7186 22 3.2774 21.6148C3.08641 21.448 2.92242 21.2337 2.7948 20.9842C2.5 20.4076 2.5 19.6051 2.5 18Z',
  d7: 'M15.3906 6.61104L17.4021 4.59961',
  d8: 'M9.375 9.875C9.375 10.9796 10.2704 11.875 11.375 11.875C12.4796 11.875 13.375 10.9796 13.375 9.875C13.375 8.77043 12.4796 7.875 11.375 7.875C10.2704 7.875 9.375 8.77043 9.375 9.875Z',
  d9: 'M2.625 9.82498C2.625 5.02011 6.54251 1.125 11.375 1.125C13.929 1.125 16.2274 2.21296 17.827 3.94818L17.834 3.95573C19.2569 5.50295 20.125 7.56317 20.125 9.82498C20.125 11.465 19.6678 13.0006 18.8737 14.3106H16.5395C16.5746 14.2201 16.6241 14.1334 16.6883 14.0537C17.6224 12.8951 18.1806 11.4261 18.1806 9.82498C18.1806 8.42966 17.7558 7.13298 17.0278 6.0558L15.8448 7.23208C15.4651 7.60959 14.8495 7.60959 14.4699 7.23208C14.0902 6.85458 14.0902 6.24252 14.4699 5.86501L15.7229 4.61912C14.5438 3.64446 13.0282 3.05833 11.375 3.05833C7.6164 3.05833 4.56944 6.08786 4.56944 9.82498C4.56944 11.4261 5.12755 12.8951 6.06169 14.0537C6.39753 14.4702 6.33016 15.0786 5.91121 15.4125C5.49226 15.7465 4.88038 15.6795 4.54454 15.2629C3.34384 13.7737 2.625 11.8815 2.625 9.82498Z',
  d10: 'M22.0821 16.1679C22.4726 16.5584 22.4726 17.1916 22.0821 17.5821L20.2892 19.375L22.0821 21.1679C22.4726 21.5584 22.4726 22.1916 22.0821 22.5821C21.6916 22.9726 21.0584 22.9726 20.6679 22.5821L18.875 20.7892L17.0821 22.5821C16.6916 22.9726 16.0584 22.9726 15.6679 22.5821C15.2774 22.1916 15.2774 21.5584 15.6679 21.1679L17.4608 19.375L15.6679 17.5821C15.2774 17.1916 15.2774 16.5584 15.6679 16.1679C16.0584 15.7774 16.6916 15.7774 17.0821 16.1679L18.875 17.9608L20.6679 16.1679C21.0584 15.7774 21.6916 15.7774 22.0821 16.1679Z',
  d11: 'M17.2661 14.125C17.863 14.125 18.3729 14.125 18.788 14.1719C19.2296 14.2218 19.6477 14.3319 20.0221 14.6099C20.0272 14.6137 20.0144 14.6042 20.0168 14.606C20.1716 14.7259 20.1747 14.9512 20.0233 15.0753C20.0209 15.0772 20.0095 15.0862 19.9865 15.1042C19.9164 15.1594 19.8487 15.2193 19.784 15.284L19.2993 15.7688C19.0993 15.9688 18.9993 16.0688 18.875 16.0688C18.7507 16.0688 18.6507 15.9688 18.4507 15.7688L17.966 15.284C17.0873 14.4053 15.6627 14.4053 14.784 15.284C13.9053 16.1627 13.9053 17.5873 14.784 18.466L15.2688 18.9507C15.4688 19.1507 15.5688 19.2507 15.5688 19.375C15.5688 19.4993 15.4688 19.5993 15.2688 19.7993L14.784 20.284C14.3659 20.7022 14.1467 21.2439 14.1265 21.7917C14.1102 22.2352 14.102 22.457 14.0149 22.541C13.9277 22.625 13.7536 22.625 13.4053 22.625H5.48402C4.88703 22.625 4.37713 22.625 3.962 22.5781C3.5204 22.5282 3.10229 22.4181 2.7279 22.1401C2.44945 21.9334 2.21534 21.6715 2.03562 21.3727C1.80062 20.9819 1.70865 20.5518 1.66605 20.0865C1.62498 19.6379 1.62499 19.0825 1.625 18.4102V18.3399C1.62499 17.6676 1.62498 17.1121 1.66605 16.6635C1.70865 16.1982 1.80062 15.7681 2.03562 15.3773C2.21534 15.0785 2.44945 14.8166 2.7279 14.6099C3.10229 14.3319 3.5204 14.2218 3.962 14.1719C4.37712 14.125 4.88694 14.125 5.48391 14.125H17.2661ZM9.375 18.375C9.375 17.8227 9.82272 17.375 10.375 17.375H12.375C12.9273 17.375 13.375 17.8227 13.375 18.375C13.375 18.9273 12.9273 19.375 12.375 19.375H10.375C9.82272 19.375 9.375 18.9273 9.375 18.375Z',
  d12: 'M17.2661 14.125C17.863 14.125 18.3729 14.125 18.788 14.1719C19.2296 14.2218 19.6477 14.3319 20.0221 14.6099C20.0272 14.6137 20.0144 14.6042 20.0168 14.606C20.1716 14.7259 20.1747 14.9512 20.0233 15.0753L19.9865 15.1042C19.9164 15.1594 19.8487 15.2193 19.784 15.284L19.2993 15.7688C19.0993 15.9688 18.9993 16.0688 18.875 16.0688C18.7507 16.0688 18.6507 15.9688 18.4507 15.7688L17.966 15.284C17.0873 14.4053 15.6627 14.4053 14.784 15.284C13.9053 16.1627 13.9053 17.5873 14.784 18.466L15.2688 18.9507C15.4688 19.1507 15.5688 19.2507 15.5688 19.375C15.5688 19.4993 15.4688 19.5993 15.2688 19.7993L14.784 20.284C14.3659 20.7022 14.1467 21.2439 14.1265 21.7917C14.1102 22.2352 14.102 22.457 14.0149 22.541C13.9277 22.625 13.7536 22.625 13.4053 22.625H5.48402C4.88703 22.625 4.37713 22.625 3.962 22.5781C3.5204 22.5282 3.10229 22.4181 2.7279 22.1401C2.44945 21.9334 2.21534 21.6715 2.03562 21.3727C1.80062 20.9819 1.70865 20.5518 1.66605 20.0865C1.62498 19.6379 1.62499 19.0825 1.625 18.4102V18.4102V18.3399V18.3399C1.62499 17.6675 1.62498 17.1121 1.66605 16.6635C1.70865 16.1982 1.80062 15.7681 2.03562 15.3773C2.21534 15.0785 2.44945 14.8166 2.7279 14.6099C3.10229 14.3319 3.5204 14.2218 3.962 14.1719C4.37712 14.125 4.88692 14.125 5.48388 14.125H5.48391H17.2661H17.2661Z',
  d13: 'M9.375 18.375C9.375 17.8227 9.82271 17.375 10.375 17.375H12.375C12.9273 17.375 13.375 17.8227 13.375 18.375C13.375 18.9273 12.9273 19.375 12.375 19.375H10.375C9.82271 19.375 9.375 18.9273 9.375 18.375Z',
  d14: 'M11.375 1.125C6.54251 1.125 2.625 5.02011 2.625 9.82498C2.625 11.4159 3.05523 12.9086 3.80595 14.1924C3.85761 14.1846 3.90964 14.1778 3.962 14.1719C4.37711 14.125 4.8869 14.125 5.48384 14.125H6.11407C6.09785 14.1007 6.08039 14.0769 6.06169 14.0537C5.12755 12.8951 4.56944 11.4261 4.56944 9.82498C4.56944 6.08786 7.6164 3.05833 11.375 3.05833C13.0282 3.05833 14.5438 3.64446 15.7229 4.61912L14.4699 5.86501C14.0902 6.24252 14.0902 6.85458 14.4699 7.23208C14.8495 7.60959 15.4651 7.60959 15.8448 7.23208L17.0278 6.0558C17.7558 7.13298 18.1806 8.42966 18.1806 9.82498C18.1806 11.4261 17.6224 12.8951 16.6883 14.0537C16.6696 14.0769 16.6521 14.1007 16.6359 14.125H17.2661C17.863 14.125 18.3729 14.125 18.788 14.1719C18.8404 14.1778 18.8924 14.1846 18.9441 14.1924C19.6948 12.9086 20.125 11.4159 20.125 9.82498C20.125 7.56317 19.2569 5.50295 17.834 3.95573L17.827 3.94818C16.2274 2.21296 13.929 1.125 11.375 1.125Z',
  d15: 'M9 10C9 11.1046 9.89543 12 11 12C12.1046 12 13 11.1046 13 10C13 8.89543 12.1046 8 11 8C9.89543 8 9 8.89543 9 10Z',
  d16: 'M15 22H2V15H20',
  d17: 'M17.2454 15C18.3433 13.6304 19 11.8919 19 10C19 5.58172 15.4183 2 11 2C6.58172 2 3 5.58172 3 10C3 11.8919 3.65672 13.6304 4.75463 15M16.5 4.5L14.5 6.5',
  d18: 'M17 17L19.5 19.5M19.5 19.5L22 22M19.5 19.5L17 22M19.5 19.5L22 17',
  d19: 'M2.24994 10C2.24994 5.16751 6.16745 1.25 10.9999 1.25C15.8324 1.25 19.7499 5.16751 19.7499 10C19.7499 11.677 19.2774 13.2453 18.4586 14.5771L16.3133 14.253C17.2474 13.0877 17.8055 11.6104 17.8055 10C17.8055 8.47134 17.3015 7.0604 16.4506 5.92428L15.0902 7.28469L13.7153 5.90976L15.0757 4.54935C13.9395 3.69845 12.5286 3.19444 10.9999 3.19444C7.24133 3.19444 4.19438 6.24139 4.19438 10C4.19438 11.6104 4.75249 13.0877 5.68663 14.253L4.16948 15.4692C2.96878 13.9714 2.24994 12.0683 2.24994 10Z',
  d20: 'M8.99994 10C8.99994 11.1046 9.89537 12 10.9999 12C12.1045 12 12.9999 11.1046 12.9999 10C12.9999 8.89543 12.1045 8 10.9999 8C9.89537 8 8.99994 8.89543 8.99994 10Z',
  d21: 'M18.1288 19.543L16.3359 21.3359L17.7501 22.7502L19.543 20.9573L21.3359 22.7502L22.7501 21.3359L20.9572 19.543L22.7501 17.7502L21.3359 16.3359L19.543 18.1288L17.7501 16.3359L16.3359 17.7502L18.1288 19.543Z',
  d22: 'M1.24988 15C1.24988 14.5858 1.58566 14.25 1.99988 14.25H19.9999C20.4141 14.25 20.7499 14.5858 20.7499 15V15.1545L19.5431 16.3613L17.7502 14.5684L14.5682 17.7503L16.3611 19.5432L14.5682 21.3361L15.9821 22.75H1.99988C1.58566 22.75 1.24988 22.4142 1.24988 22V15ZM12.9999 19.5H8.99988V17.5H12.9999V19.5Z',
  d23: 'M19.5183 22.75H19.5679L19.5431 22.7252L19.5183 22.75Z',
} as const;

export const IconSoftwareUninstallStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-stroke-rounded IconSoftwareUninstallStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareUninstallDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-duotone-rounded IconSoftwareUninstallDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareUninstallTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-twotone-rounded IconSoftwareUninstallTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareUninstallSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-solid-rounded IconSoftwareUninstallSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSoftwareUninstallBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-bulk-rounded IconSoftwareUninstallBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSoftwareUninstallStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-stroke-sharp IconSoftwareUninstallStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareUninstallSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-uninstall-solid-sharp IconSoftwareUninstallSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSoftwareUninstall: TheIconSelfPack = {
  name: 'SoftwareUninstall',
  StrokeRounded: IconSoftwareUninstallStrokeRounded,
  DuotoneRounded: IconSoftwareUninstallDuotoneRounded,
  TwotoneRounded: IconSoftwareUninstallTwotoneRounded,
  SolidRounded: IconSoftwareUninstallSolidRounded,
  BulkRounded: IconSoftwareUninstallBulkRounded,
  StrokeSharp: IconSoftwareUninstallStrokeSharp,
  SolidSharp: IconSoftwareUninstallSolidSharp,
};
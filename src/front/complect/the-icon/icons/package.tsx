import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613C3 16.7742 3 10.0645 3 7M12 22C12.8182 22 13.5998 21.6698 15.1631 21.0095C19.0544 19.3657 21 18.5438 21 17.1613V7M12 22L12 11.3548',
  d2: 'M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z',
  d3: 'M6 12L8 13',
  d4: 'M17 4L7 9',
  d5: 'M21 17.1613C21 18.5438 19.0544 19.3657 15.1631 21.0095C13.5998 21.6698 12.8182 22 12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613L3 7L12 11.3548L21 7V17.1613Z',
  d6: 'M2.25 6.50024L2.25 17.1615C2.25 18.2819 3.06734 19.0271 4.07333 19.6307C5.09172 20.2418 6.80103 20.9639 8.69413 21.7636C10.1132 22.3635 11.028 22.7502 12 22.7502C12.972 22.7502 13.8868 22.3635 15.3058 21.7636L15.3059 21.7636C17.1989 20.9639 18.9083 20.2418 19.9267 19.6307C20.9327 19.0271 21.75 18.2819 21.75 17.1615L21.75 6.50024C21.75 6.3099 21.6791 6.13612 21.5623 6.00387L18.2686 7.60298L15.3474 9.01651C13.4796 9.92034 12.7576 10.2502 12 10.2502C11.2424 10.2502 10.5204 9.92034 8.6526 9.01651L5.7314 7.60297L2.43775 6.00387C2.32091 6.13612 2.25 6.3099 2.25 6.50024ZM6.33557 11.3293C5.96509 11.1441 5.51459 11.2942 5.32934 11.6647C5.1441 12.0352 5.29427 12.4857 5.66475 12.6709L7.66475 13.6709C8.03524 13.8562 8.48574 13.706 8.67098 13.3355C8.85623 12.9651 8.70606 12.5145 8.33557 12.3293L6.33557 11.3293Z',
  d7: 'M12 1.25049C10.8275 1.25049 9.75551 1.75899 8.19088 2.50115L5.07878 3.97554C4.35402 4.31881 3.715 4.62147 3.26541 4.91878C2.81527 5.21645 2.25 5.70469 2.25 6.50049C2.25 7.29629 2.81527 7.78452 3.26541 8.0822C3.71499 8.3795 4.35401 8.68216 5.07876 9.02542L8.19089 10.4998C9.75551 11.242 10.8275 11.7505 12 11.7505C13.1725 11.7505 14.2445 11.242 15.8091 10.4998L18.9212 9.02545C19.646 8.68217 20.285 8.37951 20.7346 8.0822C21.1847 7.78452 21.75 7.29629 21.75 6.50049C21.75 5.70469 21.1847 5.21645 20.7346 4.91878C20.285 4.62147 19.646 4.3188 18.9212 3.97553L15.8091 2.50115C14.2445 1.75899 13.1725 1.25049 12 1.25049ZM8.84253 4.31447C10.6848 3.44173 11.3304 3.16064 12.0001 3.16064C12.6131 3.16064 13.2059 3.39617 14.7149 4.10542L7.06869 7.8483L5.99436 7.33935C5.18366 6.95529 4.67577 6.71198 4.35742 6.50155C4.67577 6.29112 5.18366 6.04781 5.99436 5.66376L8.84253 4.31447ZM9.28528 8.89769L16.9315 5.1548L18.0058 5.66375C18.8165 6.04781 19.3244 6.29112 19.6427 6.50155C19.3244 6.71198 18.8165 6.9553 18.0058 7.33935L15.1576 8.68864C13.3154 9.56138 12.6698 9.84246 12.0001 9.84246C11.387 9.84246 10.7942 9.60694 9.28528 8.89769Z',
  d8: 'M2.25 6.50018V17.1615C2.25 18.2819 3.06734 19.027 4.07333 19.6307C5.09172 20.2418 6.80103 20.9638 8.69413 21.7635C10.1132 22.3634 11.028 22.7502 12 22.7502C12.972 22.7502 13.8868 22.3634 15.3058 21.7635C17.1989 20.9639 18.9083 20.2418 19.9267 19.6307C20.9327 19.027 21.75 18.2819 21.75 17.1615V6.50018C21.75 5.70438 21.1847 5.21584 20.7346 4.91817C20.285 4.62087 19.646 4.31821 18.9213 3.97495L15.8091 2.50054C14.2445 1.75838 13.1725 1.24988 12 1.24988C10.8275 1.24988 9.75551 1.75838 8.19088 2.50054L5.07878 3.97493C4.35402 4.3182 3.715 4.62086 3.26541 4.91817C2.81527 5.21584 2.25 5.70438 2.25 6.50018ZM8.84253 4.31282C10.6848 3.44008 11.3304 3.159 12.0001 3.159C12.6131 3.159 13.2059 3.39452 14.7149 4.10377L18.0058 5.66211C18.8165 6.04616 19.3244 6.28947 19.6427 6.4999C19.3244 6.71033 18.8165 6.95365 18.0058 7.3377L15.1576 8.68699C13.3154 9.55973 12.6698 9.84081 12.0001 9.84081C11.387 9.84081 10.7942 9.60529 9.28528 8.89604L5.99436 7.3377C5.18366 6.95365 4.67577 6.71033 4.35742 6.4999C4.67577 6.28947 5.18366 6.04616 5.99436 5.66211L8.84253 4.31282Z',
  d9: 'M5.32934 11.6648C5.51459 11.2943 5.96509 11.1441 6.33557 11.3293L8.33557 12.3293C8.70606 12.5146 8.85623 12.9651 8.67098 13.3356C8.48574 13.7061 8.03524 13.8562 7.66475 13.671L5.66475 12.671C5.29427 12.4857 5.1441 12.0352 5.32934 11.6648Z',
  d10: 'M7.06836 7.84835L14.7145 4.10547L16.9311 5.15485L9.28495 8.89774L7.06836 7.84835Z',
  d11: 'M12 10L21 6L12 2L3 6L12 10Z',
  d12: 'M16.5 4L7.5 8',
  d13: 'M3.00391 6V17.981L12.0087 22L21.0039 17.9771V6.01357M12.0191 10.0336V21.961',
  d14: 'M2.82902 5.13188C2.47692 5.28435 2.25 5.62457 2.25 6V18.4874L11.6954 22.6854C11.8893 22.7715 12.1107 22.7715 12.3046 22.6854L21.75 18.4874V6C21.75 5.62457 21.5231 5.28435 21.171 5.13188L12.396 1.33188C12.1439 1.22271 11.8561 1.22271 11.604 1.33188L2.82902 5.13188ZM7.61244 6.86037L5.62566 6L12 3.2396L13.9868 4.09997L7.61244 6.86037ZM10.0131 7.89997L16.3874 5.13957L18.3743 6L12 8.7604L10.0131 7.89997ZM6 12.5L8.5 14V12.5L6 11V12.5Z',
} as const;

export const IconPackageStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-stroke-rounded IconPackageStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-duotone-rounded IconPackageDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-twotone-rounded IconPackageTwotoneRounded"
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
      <path 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-solid-rounded IconPackageSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-bulk-rounded IconPackageBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-stroke-sharp IconPackageStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-solid-sharp IconPackageSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackage: TheIconSelfPack = {
  name: 'Package',
  StrokeRounded: IconPackageStrokeRounded,
  DuotoneRounded: IconPackageDuotoneRounded,
  TwotoneRounded: IconPackageTwotoneRounded,
  SolidRounded: IconPackageSolidRounded,
  BulkRounded: IconPackageBulkRounded,
  StrokeSharp: IconPackageStrokeSharp,
  SolidSharp: IconPackageSolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 21H6',
  d2: 'M9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 21C8.25 21.4142 8.58579 21.75 9 21.75C9.41421 21.75 9.75 21.4142 9.75 21H8.25ZM8.25 3V21H9.75V3H8.25Z',
  d3: 'M16 6C16 5.37191 16 5.05787 15.9194 4.78267C15.7518 4.21026 15.3066 3.71716 14.7541 3.49226C14.4886 3.38413 14.1885 3.35347 13.5884 3.29216C12.1695 3.14718 10.3874 3 9 3C7.61262 3 5.83047 3.14718 4.41161 3.29216C3.8115 3.35347 3.51144 3.38413 3.24586 3.49226C2.69344 3.71716 2.24816 4.21026 2.08057 4.78267C2 5.05787 2 5.37191 2 6',
  d4: 'M22 12H20C19.5286 12 19.2929 12 19.1464 11.8566C19 11.7133 19 11.4825 19 11.021V10.0766C19 9.28117 19.176 9.12533 20.0004 9.10939C20.7769 9.09438 21.2401 9.03883 21.5607 8.83328C22 8.55161 22 8.09827 22 7.19159C22 5.45943 19 6.12617 19 6.12617',
  d5: 'M12.002 21H6.00195M9.00195 3.05957V21M16.002 6C16.002 5.37191 16.002 5.05787 15.9214 4.78267C15.7538 4.21026 15.3086 3.71716 14.7561 3.49226C14.4906 3.38413 14.1905 3.35347 13.5904 3.29216C12.1715 3.14718 10.3894 3 9.00195 3C7.61457 3 5.83242 3.14718 4.41356 3.29216C3.81345 3.35347 3.51339 3.38413 3.24781 3.49226C2.69539 3.71716 2.25011 4.21026 2.08252 4.78267C2.00195 5.05787 2.00195 5.37191 2.00195 6',
  d6: 'M22 12H20C19.5286 12 19.2929 12 19.1464 11.8566C19 11.7133 19 11.4825 19 11.021V10.0766C19 9.28115 19.176 9.12531 20.0004 9.10937C20.7769 9.09436 21.2401 9.03881 21.5607 8.83326C22 8.55159 22 8.09825 22 7.19157C22 5.45941 19 6.12615 19 6.12615',
  d7: 'M8.00016 4.02187C6.86529 4.06724 5.59384 4.17658 4.51342 4.28698C3.85381 4.35437 3.72459 4.37712 3.62309 4.41844C3.35311 4.52836 3.12235 4.78389 3.04045 5.06365C3.00991 5.16796 3.00016 5.30827 3.00016 6C3.00016 6.55228 2.55245 7 2.00016 7C1.44788 7 1.00016 6.55228 1.00016 6C1.00016 5.96303 1.00012 5.92639 1.00008 5.89007C0.99949 5.37184 0.998973 4.91856 1.12102 4.50169C1.37429 3.63663 2.03411 2.90596 2.86895 2.56607C3.27109 2.40235 3.70933 2.35808 4.20703 2.30779C4.24112 2.30435 4.27548 2.30087 4.31013 2.29733C5.73474 2.15178 7.5591 2 9.00016 2C10.4412 2 12.2656 2.15178 13.6902 2.29733C13.7248 2.30087 13.7592 2.30435 13.7933 2.30779C14.291 2.35808 14.7292 2.40235 15.1314 2.56607C15.9662 2.90596 16.626 3.63663 16.8793 4.50169C17.0014 4.91856 17.0008 5.37184 17.0002 5.89007C17.0002 5.92639 17.0002 5.96303 17.0002 6C17.0002 6.55228 16.5524 7 16.0002 7C15.4479 7 15.0002 6.55228 15.0002 6C15.0002 5.30827 14.9904 5.16796 14.9599 5.06365C14.878 4.78389 14.6472 4.52836 14.3772 4.41844C14.2757 4.37712 14.1465 4.35437 13.4869 4.28698C12.4065 4.17658 11.135 4.06724 10.0002 4.02187V20H12.0002C12.5524 20 13.0002 20.4477 13.0002 21C13.0002 21.5523 12.5524 22 12.0002 22H6.00016C5.44788 22 5.00016 21.5523 5.00016 21C5.00016 20.4477 5.44788 20 6.00016 20H8.00016V4.02187Z',
  d8: 'M22.0728 5.45353C22.6296 5.81201 23.0002 6.40638 23.0002 7.19156L23.0002 7.25942C23.0005 7.65215 23.0008 8.08586 22.924 8.45203C22.8243 8.9276 22.5848 9.36465 22.1006 9.6751C21.5067 10.0559 20.7556 10.095 20.0199 10.1092L20.0002 10.1096V11H22.0002C22.5525 11 23.0002 11.4477 23.0002 12C23.0002 12.5523 22.5525 13 22.0002 13L19.9612 13C19.7609 13.0001 19.5243 13.0002 19.3211 12.9735C19.0779 12.9415 18.7379 12.8558 18.4471 12.5712C18.1534 12.2836 18.0619 11.9423 18.0278 11.6941C17.9999 11.4908 18.0001 11.2551 18.0002 11.0602L18.0002 10.0766C18.0002 9.71279 18.01 9.04587 18.5008 8.57735C18.7507 8.33871 19.0411 8.23191 19.2806 8.17894C19.5119 8.12781 19.757 8.11388 19.9812 8.10955C20.6314 8.09698 20.8753 8.04884 20.9717 8.01441C20.9807 7.96081 20.9891 7.87892 20.9941 7.75164C21.0001 7.60094 21.0002 7.42402 21.0002 7.19156C21.0002 7.12978 20.9977 7.1316 20.9939 7.13427L20.9901 7.13514C20.9178 7.08859 20.7418 7.02754 20.4339 7.00709C20.1461 6.98797 19.7338 6.95657 19.2151 7.10278L19.2171 7.10235C18.6781 7.22186 18.1438 6.88206 18.024 6.34309C17.9042 5.80396 18.2441 5.26978 18.7833 5.14996C18.8868 5.12805 19.1439 5.07876 19.3439 5.05687C19.6601 5.01703 20.1043 4.98078 20.5665 5.01149C21.0087 5.04087 21.5826 5.13792 22.0728 5.45353Z',
  d9: 'M16.0001 5.99382V3.00002L2 3L2.00008 5.99382',
  d10: 'M22.0005 11.9812H19V8.98745H22.0005V5.99365H19.0005',
  d11: 'M9.02512 3.70752V21.0039M9.02512 21.0039H11.9328M9.02512 21.0039H6',
  d12: 'M8 20V3H10V20H12V22H6V20H8Z',
  d13: 'M1.29288 2.2929C1.48042 2.10536 1.73478 2 2 2L16.0001 2.00002C16.5524 2.00002 17.0001 2.44773 17.0001 3.00002V6.00002H15.0001V4.00002L3.00003 4L3.00008 5.99999L1.00008 6.00004L1 3.00003C0.999993 2.73481 1.10535 2.48044 1.29288 2.2929Z',
  d14: 'M18.0005 5H22.0005C22.5528 5 23.0005 5.44772 23.0005 6V9C23.0005 9.55228 22.5528 10 22.0005 10H20V11H23.0005V13H19C18.4477 13 18 12.5523 18 12V9C18 8.44772 18.4477 8 19 8H21.0005V7H18.0005V5Z',
} as const;

export const IconTextSuperscriptStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-stroke-rounded IconTextSuperscriptStrokeRounded"
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
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconTextSuperscriptDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-duotone-rounded IconTextSuperscriptDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSuperscriptTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-twotone-rounded IconTextSuperscriptTwotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTextSuperscriptSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-solid-rounded IconTextSuperscriptSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextSuperscriptBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-bulk-rounded IconTextSuperscriptBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextSuperscriptStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-stroke-sharp IconTextSuperscriptStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextSuperscriptSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-superscript-solid-sharp IconTextSuperscriptSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextSuperscript: TheIconSelfPack = {
  name: 'TextSuperscript',
  StrokeRounded: IconTextSuperscriptStrokeRounded,
  DuotoneRounded: IconTextSuperscriptDuotoneRounded,
  TwotoneRounded: IconTextSuperscriptTwotoneRounded,
  SolidRounded: IconTextSuperscriptSolidRounded,
  BulkRounded: IconTextSuperscriptBulkRounded,
  StrokeSharp: IconTextSuperscriptStrokeSharp,
  SolidSharp: IconTextSuperscriptSolidSharp,
};
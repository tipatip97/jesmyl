import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 3H11C6.75736 3 4.63604 3 3.31802 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.31802 19.682C4.63604 21 6.75736 21 11 21H13C17.2426 21 19.364 21 20.682 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.682 4.31802C19.364 3 17.2426 3 13 3Z',
  d2: 'M11 10L9.24536 13.9123C8.92013 14.6374 8.75751 15 8.5 15C8.24249 15 8.07987 14.6374 7.75464 13.9123L6 10M14 15V13M14 13V11C14 10.5286 14 10.2929 14.1464 10.1464C14.2929 10 14.5286 10 15 10H16.5C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13M14 13H16.5M16.5 13L17.5 15',
  d3: 'M13.0569 2.25H13.057C15.13 2.24999 16.7623 2.24998 18.0377 2.42144C19.3462 2.59737 20.3907 2.9661 21.2123 3.78769C22.0339 4.60928 22.4026 5.65376 22.5786 6.96234C22.75 8.23769 22.75 9.87002 22.75 11.9431V12.0569C22.75 14.13 22.75 15.7623 22.5786 17.0377C22.4026 18.3462 22.0339 19.3907 21.2123 20.2123C20.3907 21.0339 19.3462 21.4026 18.0377 21.5786C16.7623 21.75 15.13 21.75 13.0569 21.75H10.9431C8.87002 21.75 7.23769 21.75 5.96234 21.5786C4.65376 21.4026 3.60928 21.0339 2.78769 20.2123C1.9661 19.3907 1.59737 18.3462 1.42144 17.0377C1.24998 15.7623 1.24999 14.13 1.25 12.057V12.0569V11.9431V11.943C1.24999 9.87001 1.24998 8.23769 1.42144 6.96234C1.59737 5.65376 1.9661 4.60928 2.78769 3.78769C3.60928 2.9661 4.65376 2.59737 5.96234 2.42144C7.23769 2.24998 8.87001 2.24999 10.943 2.25H10.9431H13.0569ZM6.68451 9.19315C6.51501 8.8152 6.07121 8.64623 5.69327 8.81574C5.31533 8.98524 5.14635 9.42904 5.31586 9.80698L7.08993 13.7626C7.23552 14.0874 7.37568 14.4001 7.5172 14.6261C7.64941 14.8373 7.94941 15.2501 8.50019 15.2501C9.05096 15.2501 9.35096 14.8373 9.48317 14.6261C9.62469 14.4001 9.76485 14.0874 9.91043 13.7626L11.6845 9.80698C11.854 9.42904 11.685 8.98524 11.3071 8.81574C10.9292 8.64623 10.4854 8.8152 10.3159 9.19315L8.50019 13.2413L6.68451 9.19315ZM14.9657 8.75005C14.7606 8.74997 14.5388 8.74989 14.3516 8.77506C14.1323 8.80454 13.8521 8.88038 13.6163 9.11618C13.3805 9.35198 13.3047 9.63217 13.2752 9.85149C13.25 10.0387 13.2501 10.2605 13.2502 10.4656L13.2502 14.5001C13.2502 14.9143 13.586 15.2501 14.0002 15.2501C14.4144 15.2501 14.7502 14.9143 14.7502 14.5001V13.2501H16.0367L16.8294 14.8355C17.0146 15.206 17.4651 15.3561 17.8356 15.1709C18.2061 14.9856 18.3562 14.5351 18.171 14.1647L17.5768 12.9762C18.2759 12.5946 18.7502 11.8527 18.7502 11.0001C18.7502 9.75742 17.7428 8.75006 16.5002 8.75006L14.9657 8.75005ZM16.5002 11.7501H14.7502V10.5001C14.7502 10.401 14.7503 10.3207 14.7514 10.2513C14.8209 10.2502 14.9012 10.2501 15.0002 10.2501H16.5002C16.9145 10.2501 17.2502 10.5859 17.2502 11.0001C17.2502 11.4143 16.9145 11.7501 16.5002 11.7501Z',
  d4: 'M13.057 2.25H13.0569H10.9431H10.943C8.87001 2.24999 7.23769 2.24998 5.96234 2.42144C4.65376 2.59737 3.60928 2.9661 2.78769 3.78769C1.9661 4.60928 1.59737 5.65376 1.42144 6.96234C1.24998 8.23769 1.24999 9.87001 1.25 11.943V11.9431V12.0569V12.057C1.24999 14.13 1.24998 15.7623 1.42144 17.0377C1.59737 18.3462 1.9661 19.3907 2.78769 20.2123C3.60928 21.0339 4.65376 21.4026 5.96234 21.5786C7.23769 21.75 8.87002 21.75 10.9431 21.75H13.0569C15.13 21.75 16.7623 21.75 18.0377 21.5786C19.3462 21.4026 20.3907 21.0339 21.2123 20.2123C22.0339 19.3907 22.4026 18.3462 22.5786 17.0377C22.75 15.7623 22.75 14.13 22.75 12.0569V11.9431C22.75 9.87002 22.75 8.23769 22.5786 6.96234C22.4026 5.65376 22.0339 4.60928 21.2123 3.78769C20.3907 2.9661 19.3462 2.59737 18.0377 2.42144C16.7623 2.24998 15.13 2.24999 13.057 2.25Z',
  d5: 'M5.69327 8.81586C6.07121 8.64635 6.51501 8.81533 6.68451 9.19327L8.50019 13.2415L10.3159 9.19327C10.4854 8.81533 10.9292 8.64635 11.3071 8.81586C11.685 8.98537 11.854 9.42916 11.6845 9.8071L9.91044 13.7627C9.76485 14.0875 9.62469 14.4002 9.48317 14.6262C9.35096 14.8374 9.05096 15.2502 8.50019 15.2502C7.94941 15.2502 7.64941 14.8374 7.5172 14.6262C7.37568 14.4002 7.23552 14.0875 7.08993 13.7627L5.31586 9.8071C5.14635 9.42916 5.31533 8.98537 5.69327 8.81586Z',
  d6: 'M14.3516 8.77518C14.5388 8.75001 14.7606 8.7501 14.9657 8.75018L16.5002 8.75019C17.7428 8.75019 18.7502 9.75754 18.7502 11.0002C18.7502 11.8528 18.2759 12.5947 17.5768 12.9764L18.171 14.1648C18.3562 14.5353 18.2061 14.9858 17.8356 15.171C17.4651 15.3562 17.0146 15.2061 16.8294 14.8356L16.0367 13.2502H14.7502V14.5002C14.7502 14.9144 14.4144 15.2502 14.0002 15.2502C13.586 15.2502 13.2502 14.9144 13.2502 14.5002L13.2502 10.4657C13.2501 10.2606 13.25 10.0388 13.2752 9.85161C13.3047 9.63229 13.3805 9.3521 13.6163 9.1163C13.8521 8.8805 14.1323 8.80467 14.3516 8.77518ZM14.7502 11.7502H16.5002C16.9145 11.7502 17.2502 11.4145 17.2502 11.0002C17.2502 10.586 16.9145 10.2502 16.5002 10.2502H15.0002C14.9012 10.2502 14.8209 10.2503 14.7514 10.2514C14.7503 10.3209 14.7502 10.4012 14.7502 10.5002V11.7502Z',
  d7: 'M22 3.5H2V20.5H22V3.5Z',
  d8: 'M5.98047 9.62158L8.41312 14.9074C8.44879 14.9843 8.5596 14.9842 8.59509 14.9072L11.0066 9.62158M14.0105 15.7038V9.99858H16.4784C16.8647 9.99858 17.2555 10.1845 17.5461 10.4355C17.9382 10.7743 18.0102 11.0989 18.0036 11.5688C17.9567 12.0887 17.8107 12.3869 17.4931 12.6735C17.1998 12.9382 16.7952 13.0369 16.3977 13.0369H14.7458M15.7691 13.0369L17.5779 15.7042',
  d9: 'M16.5004 12.25H14.7504V10.75H16.5004C16.9146 10.75 17.2504 11.0858 17.2504 11.5C17.2504 11.9142 16.9146 12.25 16.5004 12.25Z',
  d10: 'M2 2.75C1.58579 2.75 1.25 3.08579 1.25 3.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 20.9142 22.75 20.5V3.5C22.75 3.08579 22.4142 2.75 22 2.75H2ZM16.5004 9.25L13.2504 9.25V15.711H14.7504V13.75H15.351L16.9487 16.1291L18.194 15.2929L17.103 13.6684C18.053 13.4049 18.7504 12.5339 18.7504 11.5C18.7504 10.2574 17.743 9.25 16.5004 9.25ZM6.68042 9.3081L8.50037 13.2214L10.3203 9.3081L11.6804 9.94064L9.18042 15.3163C9.05739 15.5808 8.79212 15.75 8.50037 15.75C8.20862 15.75 7.94334 15.5808 7.82031 15.3163L5.32031 9.94064L6.68042 9.3081Z',
} as const;

export const IconVirtualRealityVr02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-stroke-rounded IconVirtualRealityVr02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconVirtualRealityVr02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-duotone-rounded IconVirtualRealityVr02DuotoneRounded"
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

export const IconVirtualRealityVr02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-twotone-rounded IconVirtualRealityVr02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconVirtualRealityVr02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-solid-rounded IconVirtualRealityVr02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVirtualRealityVr02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-bulk-rounded IconVirtualRealityVr02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconVirtualRealityVr02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-stroke-sharp IconVirtualRealityVr02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVirtualRealityVr02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="virtual-reality-vr-02-solid-sharp IconVirtualRealityVr02SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfVirtualRealityVr02: TheIconSelfPack = {
  name: 'VirtualRealityVr02',
  StrokeRounded: IconVirtualRealityVr02StrokeRounded,
  DuotoneRounded: IconVirtualRealityVr02DuotoneRounded,
  TwotoneRounded: IconVirtualRealityVr02TwotoneRounded,
  SolidRounded: IconVirtualRealityVr02SolidRounded,
  BulkRounded: IconVirtualRealityVr02BulkRounded,
  StrokeSharp: IconVirtualRealityVr02StrokeSharp,
  SolidSharp: IconVirtualRealityVr02SolidSharp,
};
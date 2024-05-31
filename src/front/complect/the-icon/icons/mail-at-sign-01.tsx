import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5',
  d2: 'M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5',
  d3: 'M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5',
  d4: 'M14.9012 19.4647C12.9607 19.5118 11.0393 19.5118 9.09883 19.4647C5.95033 19.3883 4.37608 19.3501 3.24496 18.2539C2.11383 17.1576 2.08114 15.6777 2.01577 12.7178C1.99475 11.7661 1.99474 10.8201 2.01576 9.86836C2.0608 7.82941 2.09032 6.49275 2.47411 5.5L12 10.3276L21.5259 5.5C21.9097 6.49275 21.9392 7.82941 21.9842 9.86838C22.0053 10.8201 22.0053 11.7661 21.9842 12.7178C21.9189 15.6776 21.8862 17.1576 20.755 18.2539C19.6239 19.3501 18.0497 19.3883 14.9012 19.4647ZM17.5 18.5C18.3284 18.5 19 17.8284 19 17C19 16.1716 18.3284 15.5 17.5 15.5C16.6716 15.5 16 16.1716 16 17C16 17.8284 16.6716 18.5 17.5 18.5Z',
  d5: 'M15.4545 9.662L19.6903 7.26197C20.0513 7.05742 20.2318 6.95514 20.3787 7.03609C20.5255 7.11703 20.5352 7.31979 20.5545 7.72529C20.5806 8.27185 20.5947 8.90551 20.6107 9.6547C20.615 9.85716 20.6185 9.9956 20.621 10.0968C20.6347 10.6485 21.058 11.1048 21.6098 11.1166C22.1615 11.1283 22.634 10.6909 22.6209 10.1392C22.6183 10.0269 22.6142 9.86761 22.6088 9.61215L22.6072 9.53677C22.5759 8.07128 22.5501 6.86037 22.3795 5.87916C22.1977 4.8336 21.8388 3.95811 21.0894 3.20674C20.666 2.78228 20.1996 2.4827 19.6838 2.26889C19.6053 2.22604 19.5211 2.19373 19.4335 2.17311C19.1037 2.05684 18.7544 1.97116 18.3841 1.90676C17.3831 1.73265 16.1413 1.70152 14.6319 1.66368L14.557 1.66181C12.6013 1.61273 11.1482 1.61274 9.19246 1.66181L9.11761 1.66369C7.60825 1.70152 6.36636 1.73265 5.3654 1.90675C4.30303 2.09154 3.41352 2.45141 2.66011 3.20674C1.91066 3.95811 1.55181 4.8336 1.37001 5.87916C1.1994 6.86038 1.17359 8.07123 1.14234 9.53675L1.14073 9.61214C1.11942 10.6101 1.11943 11.14 1.14074 12.1379L1.14235 12.2133C1.1736 13.6788 1.19942 14.8896 1.37003 15.8709C1.55182 16.9164 1.91067 17.7919 2.66013 18.5433C3.41353 19.2986 4.30305 19.6585 5.36542 19.8433C6.36638 20.0174 7.60825 20.0485 9.11761 20.0863L9.19247 20.0882C9.52067 20.0964 9.72205 20.1033 9.877 20.1088C10.4278 20.1282 10.8746 19.6782 10.8746 19.127C10.8746 18.5758 10.4277 18.1314 9.87684 18.1118C9.73174 18.1066 9.54168 18.1003 9.24267 18.0928C7.63972 18.0526 6.54649 18.0226 5.7083 17.8768C4.91502 17.7388 4.45285 17.5124 4.07597 17.1345C3.69514 16.7527 3.47251 16.2968 3.33907 15.5293C3.19736 14.7143 3.17211 13.6553 3.1388 12.0953C3.1181 11.1258 3.11809 10.6242 3.13879 9.6547C3.15478 8.90561 3.16892 8.27204 3.19498 7.72553C3.21433 7.32001 3.224 7.11725 3.37084 7.0363C3.51768 6.95535 3.69819 7.05763 4.05921 7.26219L8.29461 9.662C9.59422 10.3984 10.6934 10.875 11.8746 10.875C13.0558 10.875 14.1549 10.3984 15.4545 9.662Z',
  d6: 'M17.375 13.375C15.442 13.375 13.875 14.942 13.875 16.875C13.875 18.808 15.442 20.375 17.375 20.375C17.9273 20.375 18.375 20.8227 18.375 21.375C18.375 21.9273 17.9273 22.375 17.375 22.375C14.3374 22.375 11.875 19.9126 11.875 16.875C11.875 13.8374 14.3374 11.375 17.375 11.375C20.4126 11.375 22.875 13.8374 22.875 16.875V17.375C22.875 18.7557 21.7557 19.875 20.375 19.875C19.6546 19.875 19.0053 19.5703 18.5491 19.0827C18.1991 19.2693 17.7994 19.375 17.375 19.375C15.9943 19.375 14.875 18.2557 14.875 16.875C14.875 15.4943 15.9943 14.375 17.375 14.375C18.7557 14.375 19.875 15.4943 19.875 16.875V17.375C19.875 17.6511 20.0989 17.875 20.375 17.875C20.6511 17.875 20.875 17.6511 20.875 17.375V16.875C20.875 14.942 19.308 13.375 17.375 13.375ZM17.875 16.875C17.875 16.5989 17.6511 16.375 17.375 16.375C17.0989 16.375 16.875 16.5989 16.875 16.875C16.875 17.1511 17.0989 17.375 17.375 17.375C17.6511 17.375 17.875 17.1511 17.875 16.875Z',
  d7: 'M17.3749 13.375C15.4419 13.375 13.8749 14.942 13.8749 16.875C13.8749 18.808 15.4419 20.375 17.3749 20.375C17.9272 20.375 18.3749 20.8227 18.3749 21.375C18.3749 21.9273 17.9272 22.375 17.3749 22.375C14.3373 22.375 11.8749 19.9126 11.8749 16.875C11.8749 13.8374 14.3373 11.375 17.3749 11.375C20.4124 11.375 22.8749 13.8374 22.8749 16.875V17.375C22.8749 18.7557 21.7556 19.875 20.3749 19.875C19.6545 19.875 19.0052 19.5703 18.549 19.0827C18.1989 19.2693 17.7993 19.375 17.3749 19.375C15.9942 19.375 14.8749 18.2557 14.8749 16.875C14.8749 15.4943 15.9942 14.375 17.3749 14.375C18.7556 14.375 19.8749 15.4943 19.8749 16.875V17.375C19.8749 17.6511 20.0987 17.875 20.3749 17.875C20.651 17.875 20.8749 17.6511 20.8749 17.375V16.875C20.8749 14.942 19.3079 13.375 17.3749 13.375ZM17.8749 16.875C17.8749 16.5989 17.651 16.375 17.3749 16.375C17.0987 16.375 16.8749 16.5989 16.8749 16.875C16.8749 17.1511 17.0987 17.375 17.3749 17.375C17.651 17.375 17.8749 17.1511 17.8749 16.875Z',
  d8: 'M22 11V2.5H2V19.5H10',
  d9: 'M2 6L12 11L22 6',
  d10: 'M1.25 2.22368C1.25 1.68593 1.68754 1.25 2.22727 1.25H21.7727C22.3125 1.25 22.75 1.68593 22.75 2.22368V11H20.796V7.10217L12.0003 11.5L3.20508 7.1024V17.8026H10V19.75H2.22727C1.68754 19.75 1.25 19.3141 1.25 18.7763V2.22368Z',
  d11: 'M17.5 14.1591C15.6549 14.1591 14.1591 15.6549 14.1591 17.5C14.1591 19.3451 15.6549 20.8409 17.5 20.8409V22.75C14.6005 22.75 12.25 20.3995 12.25 17.5C12.25 14.6005 14.6005 12.25 17.5 12.25C20.3995 12.25 22.75 14.6005 22.75 17.5V17.9773C22.75 19.2952 21.6816 20.3636 20.3636 20.3636C19.676 20.3636 19.0562 20.0728 18.6208 19.6073C18.2866 19.7854 17.9051 19.8864 17.5 19.8864C16.182 19.8864 15.1136 18.818 15.1136 17.5C15.1136 16.182 16.182 15.1136 17.5 15.1136C18.818 15.1136 19.8864 16.182 19.8864 17.5V17.9773C19.8864 18.2409 20.1 18.4545 20.3636 18.4545C20.6272 18.4545 20.8409 18.2409 20.8409 17.9773V17.5C20.8409 15.6549 19.3451 14.1591 17.5 14.1591ZM17.9773 17.5C17.9773 17.2364 17.7636 17.0227 17.5 17.0227C17.2364 17.0227 17.0227 17.2364 17.0227 17.5C17.0227 17.7636 17.2364 17.9773 17.5 17.9773C17.7636 17.9773 17.9773 17.7636 17.9773 17.5Z',
} as const;

export const IconMailAtSign01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-stroke-rounded IconMailAtSign01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMailAtSign01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-duotone-rounded IconMailAtSign01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMailAtSign01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-twotone-rounded IconMailAtSign01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAtSign01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-solid-rounded IconMailAtSign01SolidRounded"
    >
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

export const IconMailAtSign01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-bulk-rounded IconMailAtSign01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconMailAtSign01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-stroke-sharp IconMailAtSign01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAtSign01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-01-solid-sharp IconMailAtSign01SolidSharp"
    >
      <path 
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

export const iconPackOfMailAtSign01: TheIconSelfPack = {
  name: 'MailAtSign01',
  StrokeRounded: IconMailAtSign01StrokeRounded,
  DuotoneRounded: IconMailAtSign01DuotoneRounded,
  TwotoneRounded: IconMailAtSign01TwotoneRounded,
  SolidRounded: IconMailAtSign01SolidRounded,
  BulkRounded: IconMailAtSign01BulkRounded,
  StrokeSharp: IconMailAtSign01StrokeSharp,
  SolidSharp: IconMailAtSign01SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.51757 13.0007L7.96488 10.0432M7.96488 10.0432L6.84967 4.07572C6.67352 3.13311 7.2856 2.22346 8.224 2.03325C9.17357 1.84078 10.0988 2.45694 10.289 3.40846L11.5029 9.48123L12.723 3.40846C12.9132 2.45694 13.8384 1.84078 14.788 2.03325C15.7264 2.22346 16.2706 3.13795 16.0944 4.08057L15.0682 9.82971M7.96488 10.0432C6.07249 11.8178 4.91164 12.8595 4.67388 13.7962C4.40895 14.84 4.18954 15.9851 6.07829 18.2819C6.7 19.0379 7.22411 19.5625 7.3454 19.7626C7.55658 20.111 8.0038 20.3723 8.0038 22.0023M15.0841 9.84861C17.3457 10.4912 18.817 11.7103 19.2384 12.5798C19.7079 13.5487 19.5752 15.0057 18.5904 17.4059C18.2019 18.3528 17.7258 18.8915 17.6473 19.112C17.4643 19.6257 17.1853 20.1789 17.3136 21.9783',
  d2: 'M18.3912 17.6892C19.1167 16.2125 20.1095 13.3225 18.7221 11.9617C17.5976 10.8586 16.2737 10.2122 15.0146 9.85481L16.0652 4.04463C16.2577 2.98 15.4443 2 14.368 2C13.5458 2 12.8379 2.58355 12.6767 3.39424L11.4621 9.5L10.2475 3.39424C10.0863 2.58355 9.37832 2 8.55605 2C7.47984 2 6.66638 2.98 6.8589 4.04463L7.94242 10.0364L6.52328 11.3747C5.32107 12.71 4.71998 13.3776 4.55872 14.1756C4.50808 14.4262 4.49008 14.6821 4.50516 14.9372C4.50119 16.524 5.95486 18.298 7.09154 19.4887C7.64856 20.0721 7.98104 20.8381 7.98104 21.6468V22H17.2559V20.382C17.2559 19.4563 17.9988 18.488 18.3912 17.6892Z',
  d3: 'M8.57735 13.0007L8.02765 10.0432M8.02765 10.0432L6.91849 4.07572C6.74329 3.13311 7.35205 2.22346 8.28537 2.03325C9.2298 1.84078 10.15 2.45694 10.3392 3.40846L11.5465 9.48123L12.76 3.40846C12.9492 2.45694 13.8694 1.84078 14.8138 2.03325C15.7471 2.22346 16.2884 3.13795 16.1131 4.08057L15.0925 9.82971M8.02765 10.0432C6.14552 11.8178 4.99096 12.8595 4.75448 13.7962C4.49099 14.84 4.27277 15.9851 6.15129 18.2819C6.76963 19.0379 7.2909 19.5625 7.41153 19.7626C7.62157 20.111 8.06636 20.3723 8.06636 22.0023M15.1083 9.84861C17.3576 10.4912 18.821 11.7103 19.2401 12.5798C19.7071 13.5487 19.5751 15.0057 18.5956 17.4059C18.2092 18.3528 17.7357 18.8915 17.6576 19.112C17.4756 19.6257 17.1981 20.1789 17.3257 21.9783',
  d4: 'M11.502 9.49295L12.7221 3.42018C12.9123 2.46866 13.8375 1.8525 14.7871 2.04497C15.7255 2.23518 16.2697 3.14967 16.0935 4.09229L15.0673 9.84143M15.0832 9.86033C17.3448 10.5029 18.8161 11.722 19.2375 12.5915C19.707 13.5604 19.5743 15.0174 18.5895 17.4176C18.201 18.3645 17.7249 18.9032 17.6464 19.1237C17.4634 19.6374 17.1844 20.1906 17.3127 21.99',
  d5: 'M8.51611 13.0124L7.96342 10.0549M7.96342 10.0549L6.84821 4.08744C6.67206 3.14483 7.28414 2.23518 8.22254 2.04497C9.17211 1.8525 10.0973 2.46866 10.2875 3.42018L11.5014 9.49295L12.7215 3.42018C12.9117 2.46866 13.8369 1.8525 14.7865 2.04497C15.7249 2.23518 16.2691 3.14967 16.0929 4.09229L15.0667 9.84143M7.96342 10.0549C6.07103 11.8295 4.91018 12.8712 4.67242 13.8079C4.40749 14.8517 4.18808 15.9968 6.07683 18.2936C6.69854 19.0496 7.22265 19.5742 7.34394 19.7743C7.55512 20.1227 8.00234 20.384 8.00234 22.014M15.0826 9.86033C17.3442 10.5029 18.8155 11.722 19.2369 12.5915C19.7064 13.5604 19.5737 15.0174 18.5889 17.4176C18.2004 18.3645 17.7243 18.9032 17.6458 19.1237C17.4628 19.6374 17.1838 20.1906 17.3121 21.99',
  d6: 'M5.4729 4.1788C5.19563 2.65379 6.36719 1.25 7.9172 1.25C9.10146 1.25 10.1211 2.08589 10.3533 3.24715L11.4057 7.31143C11.4314 7.41069 11.572 7.41158 11.599 7.31266L12.7071 3.24719C12.9393 2.08593 13.9589 1.25004 15.1432 1.25004C16.6932 1.25004 17.8648 2.65383 17.5875 4.17884L15.9277 9.34012C17.0895 9.7515 18.2813 10.4083 19.3234 11.4249C20.2893 12.3673 20.3479 13.7513 20.1711 14.8965C19.9889 16.076 19.5234 17.2438 19.1393 18.0213C19.0282 18.2463 18.8952 18.4774 18.7717 18.6915L18.7717 18.6916C18.6486 18.9049 18.5194 19.1288 18.4147 19.3318C18.1912 19.7651 18.0754 20.1056 18.0754 20.382V21C18.0754 21.9665 17.2919 22.75 16.3254 22.75H9C8.00978 22.75 7.33389 21.9622 7.13962 21.1957C7.0099 20.6839 6.79203 20.245 6.56458 20.008C5.97917 19.3981 5.2901 18.6167 4.74427 17.7667C4.21194 16.9378 3.7597 15.9583 3.75521 14.9587C3.7386 14.6462 3.76173 14.333 3.82406 14.0262C3.93545 13.478 4.19502 13.0095 4.55239 12.529C4.89652 12.0663 5.37012 11.5432 5.95326 10.899L5.95329 10.899L7.15021 9.76877L5.4729 4.1788Z',
  d7: 'M8.53572 13.0152L6.89057 4.17789C6.71715 3.20846 7.2994 2.18434 8.27387 2.04671C9.20033 1.91587 10.1146 2.46211 10.2631 3.34686L11.4884 10.0809L12.7317 3.34686C12.927 2.40319 13.8711 1.84122 14.8118 2.04736C15.745 2.25184 16.2892 3.31654 16.0849 4.2504L14.9577 10.0102C17.2784 10.687 18.3261 11.3771 19.0411 12.2989C20.0501 13.9385 19.1411 16.0657 18.3192 18.0207C17.8318 18.96 17.3846 19.8483 17.3014 20.0133C17.3014 20.7472 17.3097 22.0078 17.3097 22.0078M7.97861 21.9884V20.5481C1.56909 13.8322 5.4996 13.0413 7.79196 10.0102',
  d8: 'M5.5 4.17888C5.22273 2.65387 6.39429 1.25009 7.9443 1.25009C9.12856 1.25009 10.1482 2.08598 10.3804 3.24724L10.3827 3.25869L11.5 7.88868L12.6195 3.24713C12.8517 2.08587 13.8714 1.25 15.0557 1.25C16.6057 1.25 17.7773 2.65379 17.5 4.1788L17.4992 4.18342L15.8624 9.50934C16.9937 9.86351 18.2592 10.3868 19.3234 11.425C20.2893 12.3673 20.3479 13.7514 20.1711 14.8966C19.9889 16.0761 19.5234 17.2439 19.1393 18.0214L18.0754 20.1752V22.7501H7.25V20.7841L6.5539 19.997C5.9708 19.3887 5.28679 18.6116 4.74427 17.7668C4.21194 16.9379 3.7597 15.9584 3.75521 14.9588C3.7386 14.6463 3.76173 14.3331 3.82406 14.0263C3.93545 13.4781 4.19502 13.0096 4.55239 12.5291C4.89652 12.0664 5.37012 11.5433 5.95326 10.8991L5.95329 10.8991L5.99886 10.8487L7.15021 9.76886L5.5 4.17888Z',
} as const;

export const IconVictoryFinger01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-stroke-rounded IconVictoryFinger01StrokeRounded"
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

export const IconVictoryFinger01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-duotone-rounded IconVictoryFinger01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconVictoryFinger01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-twotone-rounded IconVictoryFinger01TwotoneRounded"
    >
      <path 
        d={d.d4} 
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

export const IconVictoryFinger01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-solid-rounded IconVictoryFinger01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVictoryFinger01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-bulk-rounded IconVictoryFinger01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVictoryFinger01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-stroke-sharp IconVictoryFinger01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVictoryFinger01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="victory-finger-01-solid-sharp IconVictoryFinger01SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVictoryFinger01: TheIconSelfPack = {
  name: 'VictoryFinger01',
  StrokeRounded: IconVictoryFinger01StrokeRounded,
  DuotoneRounded: IconVictoryFinger01DuotoneRounded,
  TwotoneRounded: IconVictoryFinger01TwotoneRounded,
  SolidRounded: IconVictoryFinger01SolidRounded,
  BulkRounded: IconVictoryFinger01BulkRounded,
  StrokeSharp: IconVictoryFinger01StrokeSharp,
  SolidSharp: IconVictoryFinger01SolidSharp,
};
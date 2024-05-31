import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.8809 7.01656L17.6538 8.28825M11.8578 10.8134L14.2442 11.4492M11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.2471 11.9765 17.9664Z',
  d2: 'M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015',
  d3: 'M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.2471 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z',
  d4: 'M8.80678 6.94841C9.53023 4.26367 9.89196 2.9213 10.9555 2.31074C12.019 1.70018 13.369 2.05986 16.0689 2.77924L17.0235 3.03358C19.7235 3.75295 21.0735 4.11264 21.6875 5.17016C22.3015 6.22768 21.9398 7.57005 21.2163 10.2548L20.1932 14.0516C19.4698 16.7363 19.108 18.0787 18.0445 18.6893C16.981 19.2998 15.631 18.9401 12.9311 18.2208L11.9765 17.9664C9.27651 17.2471 7.92652 16.8874 7.3125 15.8298C6.69848 14.7723 7.0602 13.4299 7.78366 10.7452L8.80678 6.94841Z',
  d5: 'M12.8805 7.0166L17.6535 8.28829M11.8574 10.8134L14.2439 11.4492',
  d6: 'M6.4247 5.96656C6.58139 6.49615 6.27908 7.05249 5.74949 7.20917C4.16178 7.67891 3.67116 7.99964 3.42994 8.4151C3.27579 8.68059 3.19906 9.0304 3.28685 9.72268C3.37837 10.4444 3.62421 11.3754 3.98943 12.7462L5.00179 16.5459C5.36703 17.9168 5.61699 18.8466 5.89648 19.5175C6.16466 20.1613 6.40442 20.424 6.66765 20.5751C6.93172 20.7267 7.28257 20.8022 7.97966 20.7109C8.70491 20.616 9.64085 20.366 11.017 19.9951L11.4897 19.8678C12.023 19.7241 12.5718 20.0399 12.7155 20.5731C12.8592 21.1064 12.5434 21.6552 12.0101 21.7989L11.4696 21.9445C10.1784 22.2925 9.11286 22.5796 8.23925 22.694C7.32225 22.814 6.46836 22.7668 5.6719 22.3096C4.87461 21.8519 4.40515 21.1385 4.05028 20.2866C3.71269 19.4763 3.42979 18.4143 3.08741 17.1292L2.03867 13.1929C1.6962 11.9076 1.41325 10.8457 1.30274 9.97429C1.18654 9.05805 1.23873 8.20589 1.70034 7.41087C2.38635 6.22933 3.65428 5.74336 5.18209 5.29135C5.71168 5.13467 6.26802 5.43697 6.4247 5.96656Z',
  d7: 'M20.4252 3.28231C19.6271 2.95101 18.5745 2.67059 17.2693 2.32287L16.2093 2.04043C14.9041 1.69265 13.8515 1.4122 12.9938 1.30229C12.1033 1.18818 11.3123 1.241 10.582 1.66025C9.85111 2.07986 9.40858 2.73583 9.06201 3.5614C8.72858 4.35566 8.4464 5.40287 8.09685 6.70016L7.04511 10.6032L7.04511 10.6032C6.69553 11.9004 6.41332 12.9476 6.30269 13.8013C6.18771 14.6885 6.24088 15.4779 6.66385 16.2064C7.08645 16.9342 7.74612 17.3737 8.57468 17.7176C9.37284 18.0489 10.4254 18.3293 11.7306 18.677L12.7907 18.9595C14.0958 19.3073 15.1484 19.5877 16.0061 19.6976C16.8966 19.8117 17.6876 19.7589 18.4179 19.3396C19.1488 18.92 19.5913 18.2641 19.9379 17.4385C20.2713 16.6442 20.5535 15.597 20.903 14.2997L21.9548 10.3967C22.3044 9.09953 22.5866 8.05231 22.6972 7.19861C22.8122 6.31139 22.759 5.52199 22.336 4.79352C21.9134 4.06567 21.2538 3.62623 20.4252 3.28231ZM13.0738 6.29109C12.6736 6.18445 12.2627 6.42247 12.156 6.82272C12.0494 7.22297 12.2874 7.63389 12.6876 7.74053L17.4605 9.01221C17.8608 9.11885 18.2717 8.88084 18.3784 8.48059C18.485 8.08034 18.247 7.66942 17.8467 7.56278L13.0738 6.29109ZM12.0507 10.0879C11.6504 9.98125 11.2395 10.2193 11.1329 10.6195C11.0262 11.0198 11.2643 11.4307 11.6645 11.5373L14.051 12.1732C14.4512 12.2798 14.8621 12.0418 14.9688 11.6415C15.0754 11.2413 14.8374 10.8304 14.4372 10.7237L12.0507 10.0879Z',
  d8: 'M17.2693 2.32287C18.5745 2.67059 19.6271 2.95101 20.4252 3.28231C21.2538 3.62623 21.9134 4.06567 22.336 4.79352C22.759 5.52199 22.8122 6.31139 22.6972 7.19861C22.5866 8.05231 22.3044 9.09953 21.9548 10.3967L20.903 14.2997C20.5535 15.597 20.2713 16.6442 19.9379 17.4385C19.5913 18.2641 19.1488 18.92 18.4179 19.3396C17.6876 19.7589 16.8966 19.8117 16.0061 19.6976C15.1484 19.5877 14.0958 19.3073 12.7907 18.9595L11.7306 18.677C10.4254 18.3293 9.37284 18.0489 8.57468 17.7176C7.74612 17.3737 7.08645 16.9342 6.66385 16.2064C6.24088 15.4779 6.18771 14.6885 6.30269 13.8013C6.41332 12.9476 6.69553 11.9004 7.04511 10.6032L7.04511 10.6032L8.09685 6.70016C8.4464 5.40287 8.72858 4.35566 9.06201 3.5614C9.40858 2.73583 9.85111 2.07986 10.582 1.66025C11.3123 1.241 12.1033 1.18818 12.9938 1.30229C13.8515 1.4122 14.9041 1.69265 16.2093 2.04043L17.2693 2.32287Z',
  d9: 'M12.156 6.82272C12.2627 6.42247 12.6736 6.18445 13.0738 6.29109L17.8467 7.56278C18.247 7.66942 18.485 8.08034 18.3784 8.48059C18.2717 8.88084 17.8608 9.11885 17.4605 9.01221L12.6876 7.74053C12.2874 7.63389 12.0494 7.22297 12.156 6.82272ZM11.1329 10.6195C11.2395 10.2193 11.6504 9.98125 12.0507 10.0879L14.4372 10.7237C14.8374 10.8304 15.0754 11.2413 14.9688 11.6415C14.8621 12.0418 14.4512 12.2798 14.051 12.1732L11.6645 11.5373C11.2643 11.4307 11.0262 11.0198 11.1329 10.6195Z',
  d10: 'M7.00019 6.79199L2 8.29634L6.02129 21.9578L13.0004 19.8581',
  d11: 'M21.9893 5.32484L11.0464 1.95943C11.041 1.95779 11.0354 1.96083 11.0338 1.96618L7.06095 15.5725C7.05942 15.5777 7.06237 15.5832 7.06758 15.5848L18.008 18.9853C18.0133 18.9869 18.019 18.9839 18.0206 18.9785L21.996 5.33716C21.9975 5.33193 21.9945 5.32644 21.9893 5.32484Z',
  d12: 'M12.8711 6.98828L17.6541 8.28962',
  d13: 'M11.8477 10.7979L14.2459 11.4332',
  d14: 'M11.2378 1.28193C11.0465 1.22424 10.84 1.2453 10.6643 1.34043C10.4885 1.43556 10.358 1.59689 10.3017 1.78863L6.28059 15.4786C6.16444 15.874 6.38911 16.289 6.7837 16.408L17.7626 19.7181C17.9539 19.7758 18.1603 19.7547 18.3361 19.6596C18.5118 19.5644 18.6423 19.4031 18.6987 19.2114L22.7198 5.52144C22.8359 5.12602 22.6113 4.71097 22.2167 4.592L11.2378 1.28193ZM12.6872 7.74118L17.4601 9.01287L17.8463 7.56343L13.0734 6.29175L12.6872 7.74118ZM11.6641 11.538L14.0505 12.1738L14.4367 10.7244L12.0502 10.0885L11.6641 11.538Z',
  d15: 'M1.7837 7.59195L6.7837 6.08447L7.21669 7.52062L2.92966 8.81314L6.52804 21.0638L12.7837 19.1778L13.2167 20.6139L6.23781 22.718C6.04648 22.7757 5.84004 22.7546 5.66429 22.6595C5.48855 22.5644 5.35804 22.4031 5.30172 22.2113L1.28059 8.52139C1.16444 8.12597 1.38911 7.71091 1.7837 7.59195Z',
} as const;

export const IconNoteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-stroke-rounded IconNoteStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconNoteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-duotone-rounded IconNoteDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-twotone-rounded IconNoteTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconNoteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-solid-rounded IconNoteSolidRounded"
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

export const IconNoteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-bulk-rounded IconNoteBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-stroke-sharp IconNoteStrokeSharp"
    >
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-solid-sharp IconNoteSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNote: TheIconSelfPack = {
  name: 'Note',
  StrokeRounded: IconNoteStrokeRounded,
  DuotoneRounded: IconNoteDuotoneRounded,
  TwotoneRounded: IconNoteTwotoneRounded,
  SolidRounded: IconNoteSolidRounded,
  BulkRounded: IconNoteBulkRounded,
  StrokeSharp: IconNoteStrokeSharp,
  SolidSharp: IconNoteSolidSharp,
};
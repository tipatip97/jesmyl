import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.0235 3.03358L16.0689 2.77924C13.369 2.05986 12.019 1.70018 10.9555 2.31074C9.89196 2.9213 9.53023 4.26367 8.80678 6.94841L7.78366 10.7452C7.0602 13.4299 6.69848 14.7723 7.3125 15.8298C7.92652 16.8874 9.27651 17.247 11.9765 17.9664L12.9311 18.2208C15.631 18.9401 16.981 19.2998 18.0445 18.6893C19.108 18.0787 19.4698 16.7363 20.1932 14.0516L21.2163 10.2548C21.9398 7.57005 22.3015 6.22768 21.6875 5.17016C21.0735 4.11264 19.7235 3.75295 17.0235 3.03358Z',
  d2: 'M16.8538 7.43306C16.8538 8.24714 16.1901 8.90709 15.3714 8.90709C14.5527 8.90709 13.889 8.24714 13.889 7.43306C13.889 6.61898 14.5527 5.95904 15.3714 5.95904C16.1901 5.95904 16.8538 6.61898 16.8538 7.43306Z',
  d3: 'M12 20.9463L11.0477 21.2056C8.35403 21.9391 7.00722 22.3059 5.94619 21.6833C4.88517 21.0608 4.52429 19.6921 3.80253 16.9547L2.78182 13.0834C2.06006 10.346 1.69918 8.97731 2.31177 7.89904C2.84167 6.96631 4 7.00027 5.5 7.00015',
  d4: 'M16.0689 2.77924L17.0235 3.03358C19.7235 3.75295 21.0735 4.11264 21.6875 5.17016C22.3015 6.22768 21.9398 7.57005 21.2163 10.2548L20.1932 14.0516C19.4698 16.7363 19.108 18.0787 18.0445 18.6893C16.981 19.2998 15.631 18.9401 12.9311 18.2208L11.9765 17.9664C9.27651 17.2471 7.92652 16.8874 7.3125 15.8298C6.69848 14.7723 7.0602 13.4299 7.78366 10.7452L8.80678 6.94841C9.53023 4.26367 9.89196 2.9213 10.9555 2.31074C12.019 1.70018 13.369 2.05986 16.0689 2.77924ZM15.3711 8.90703C16.1898 8.90703 16.8534 8.24709 16.8534 7.43301C16.8534 6.61893 16.1898 5.95898 15.3711 5.95898C14.5524 5.95898 13.8887 6.61893 13.8887 7.43301C13.8887 8.24709 14.5524 8.90703 15.3711 8.90703Z',
  d5: 'M16.8534 7.43301C16.8534 8.24709 16.1898 8.90703 15.3711 8.90703C14.5524 8.90703 13.8887 8.24709 13.8887 7.43301C13.8887 6.61893 14.5524 5.95898 15.3711 5.95898C16.1898 5.95898 16.8534 6.61893 16.8534 7.43301Z',
  d6: 'M20.4252 3.28231C19.6271 2.95101 18.5745 2.67059 17.2693 2.32287L16.2093 2.04043C14.9041 1.69265 13.8515 1.4122 12.9938 1.30229C12.1033 1.18818 11.3123 1.241 10.582 1.66025C9.85111 2.07986 9.40858 2.73583 9.06201 3.5614C8.72858 4.35566 8.4464 5.40287 8.09685 6.70016L7.04511 10.6032L7.04511 10.6032C6.69553 11.9004 6.41332 12.9476 6.30269 13.8013C6.18771 14.6885 6.24088 15.4779 6.66385 16.2064C7.08645 16.9342 7.74612 17.3737 8.57468 17.7176C9.37284 18.0489 10.4254 18.3293 11.7306 18.677L12.7907 18.9595C14.0958 19.3073 15.1484 19.5877 16.0061 19.6976C16.8966 19.8117 17.6876 19.7589 18.4179 19.3396C19.1488 18.92 19.5913 18.2641 19.9379 17.4385C20.2713 16.6442 20.5535 15.597 20.903 14.2997L21.9548 10.3967C22.3044 9.09953 22.5866 8.05231 22.6972 7.19861C22.8122 6.31139 22.759 5.52199 22.336 4.79352C21.9134 4.06567 21.2538 3.62623 20.4252 3.28231ZM15.4999 8.5C16.3284 8.5 16.9999 7.82843 16.9999 7C16.9999 6.17157 16.3284 5.5 15.4999 5.5C14.6715 5.5 13.9999 6.17157 13.9999 7C13.9999 7.82843 14.6715 8.5 15.4999 8.5Z',
  d7: 'M6.4247 5.96656C6.58139 6.49615 6.27908 7.05249 5.74949 7.20917C4.16178 7.67891 3.67116 7.99964 3.42994 8.4151C3.27579 8.68059 3.19906 9.0304 3.28685 9.72268C3.37837 10.4444 3.62421 11.3754 3.98943 12.7462L5.00179 16.5459C5.36703 17.9168 5.61699 18.8466 5.89648 19.5175C6.16466 20.1613 6.40442 20.424 6.66765 20.5751C6.93172 20.7267 7.28257 20.8022 7.97966 20.7109C8.70491 20.616 9.64085 20.366 11.017 19.9951L11.4897 19.8678C12.023 19.7241 12.5718 20.0399 12.7155 20.5731C12.8592 21.1064 12.5434 21.6552 12.0101 21.7989L11.4696 21.9445C10.1784 22.2925 9.11286 22.5796 8.23925 22.694C7.32225 22.814 6.46836 22.7668 5.6719 22.3096C4.87461 21.8519 4.40515 21.1385 4.05028 20.2866C3.71269 19.4763 3.42979 18.4143 3.08741 17.1292L2.03867 13.1929C1.6962 11.9076 1.41325 10.8457 1.30274 9.97429C1.18654 9.05805 1.23873 8.20589 1.70034 7.41087C2.38635 6.22933 3.65428 5.74336 5.18209 5.29135C5.71168 5.13467 6.26802 5.43697 6.4247 5.96656Z',
  d8: 'M17.2693 2.32287C18.5745 2.67059 19.6271 2.95101 20.4252 3.28231C21.2538 3.62623 21.9134 4.06567 22.336 4.79352C22.759 5.52199 22.8122 6.31139 22.6972 7.19861C22.5866 8.05231 22.3044 9.09953 21.9548 10.3967L20.903 14.2997C20.5535 15.597 20.2713 16.6442 19.9379 17.4385C19.5913 18.2641 19.1488 18.92 18.4179 19.3396C17.6876 19.7589 16.8966 19.8117 16.0061 19.6976C15.1484 19.5877 14.0958 19.3073 12.7907 18.9595L11.7306 18.677C10.4254 18.3293 9.37284 18.0489 8.57468 17.7176C7.74612 17.3737 7.08645 16.9342 6.66385 16.2064C6.24088 15.4779 6.18771 14.6885 6.30269 13.8013C6.41332 12.9476 6.69553 11.9004 7.04511 10.6032L7.04511 10.6032L8.09685 6.70016C8.4464 5.40287 8.72858 4.35566 9.06201 3.5614C9.40858 2.73583 9.85111 2.07986 10.582 1.66025C11.3123 1.241 12.1033 1.18818 12.9938 1.30229C13.8515 1.4122 14.9041 1.69265 16.2093 2.04043L17.2693 2.32287Z',
  d9: 'M17 7C17 7.82843 16.3284 8.5 15.5 8.5C14.6716 8.5 14 7.82843 14 7C14 6.17157 14.6716 5.5 15.5 5.5C16.3284 5.5 17 6.17157 17 7Z',
  d10: 'M16.5 8C16.5 8.82843 15.8284 9.5 15 9.5C14.1716 9.5 13.5 8.82843 13.5 8C13.5 7.17157 14.1716 6.5 15 6.5C15.8284 6.5 16.5 7.17157 16.5 8Z',
  d11: 'M22 5.31008L11.0211 2L7 15.6899L17.9789 19L22 5.31008Z',
  d12: 'M7 6.80273L2 8.31021L6.02113 22.0001L13 19.896',
  d13: 'M11.2378 1.28193C11.0465 1.22424 10.84 1.2453 10.6643 1.34043C10.4885 1.43556 10.358 1.59689 10.3017 1.78863L6.28059 15.4786C6.16444 15.874 6.38911 16.289 6.7837 16.408L17.7626 19.7181C17.9539 19.7758 18.1603 19.7547 18.3361 19.6596C18.5118 19.5644 18.6423 19.4031 18.6987 19.2114L22.7198 5.52144C22.8359 5.12602 22.6113 4.71097 22.2167 4.592L11.2378 1.28193ZM15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z',
  d14: 'M1.7837 7.59195L6.7837 6.08447L7.21669 7.52062L2.92966 8.81314L6.52804 21.0638L12.7837 19.1778L13.2167 20.6139L6.23781 22.718C6.04648 22.7757 5.84004 22.7546 5.66429 22.6595C5.48855 22.5644 5.35804 22.4031 5.30172 22.2113L1.28059 8.52139C1.16444 8.12597 1.38911 7.71091 1.7837 7.59195Z',
} as const;

export const IconClipboardStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-stroke-rounded IconClipboardStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClipboardDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-duotone-rounded IconClipboardDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClipboardTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-twotone-rounded IconClipboardTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconClipboardSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-solid-rounded IconClipboardSolidRounded"
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

export const IconClipboardBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-bulk-rounded IconClipboardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClipboardStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-stroke-sharp IconClipboardStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconClipboardSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clipboard-solid-sharp IconClipboardSolidSharp"
    >
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

export const iconPackOfClipboard: TheIconSelfPack = {
  name: 'Clipboard',
  StrokeRounded: IconClipboardStrokeRounded,
  DuotoneRounded: IconClipboardDuotoneRounded,
  TwotoneRounded: IconClipboardTwotoneRounded,
  SolidRounded: IconClipboardSolidRounded,
  BulkRounded: IconClipboardBulkRounded,
  StrokeSharp: IconClipboardStrokeSharp,
  SolidSharp: IconClipboardSolidSharp,
};
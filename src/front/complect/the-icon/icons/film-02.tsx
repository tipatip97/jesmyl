import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5Z',
  d2: 'M7 21.5L7 2.5',
  d3: 'M17 21.5L17 2.5',
  d4: 'M17 12L7 12',
  d5: 'M7 16L3 16M7 8L3 8',
  d6: 'M21 16L17 16M21 8L17 8',
  d7: 'M17 2.64733C15.7363 2.5 14.1188 2.5 12 2.5C9.88124 2.5 8.26368 2.5 7 2.64733V21.3518H17L17 2.64733Z',
  d8: 'M12.5 21C8.02166 21 5.78249 21 4.39124 19.6088C3 18.2175 3 15.9783 3 11.5C3 7.02166 3 4.78249 4.39124 3.39124C5.78248 2 8.02166 2 12.5 2C16.9783 2 19.2175 2 20.6088 3.39124C22 4.78248 22 7.02166 22 11.5C22 15.9783 22 18.2175 20.6088 19.6088C19.2175 21 16.9783 21 12.5 21Z',
  d9: 'M7.5 21L7.5 2',
  d10: 'M17.5 21L17.5 2',
  d11: 'M17.5 11.5L7.5 11.5',
  d12: 'M7.5 15.5L3.5 15.5M7.5 7.5L3.5 7.5',
  d13: 'M21.5 15.5L17.5 15.5M21.5 7.5L17.5 7.5',
  d14: 'M1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03143 22.0694 6.68802C21.8843 5.31136 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H12.0572H11.9428H11.9428C9.75213 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428ZM16 10C16 10.4714 16 10.7071 15.8536 10.8536C15.7071 11 15.4714 11 15 11L9 11C8.5286 11 8.2929 11 8.14645 10.8536C8 10.7071 8 10.4714 8 10V4.25628C8 3.8081 8 3.58402 8.14157 3.43846C8.28313 3.2929 8.50244 3.2868 8.94106 3.27459C9.80939 3.25043 10.817 3.25 12 3.25C13.183 3.25 14.1906 3.25043 15.0589 3.27459C15.4976 3.2868 15.7169 3.2929 15.8584 3.43846C16 3.58402 16 3.8081 16 4.25627L16 10ZM12 20.75C10.817 20.75 9.80939 20.7496 8.94106 20.7254C8.50244 20.7132 8.28313 20.7071 8.14157 20.5615C8 20.416 8 20.1919 8 19.7437V14C8 13.5286 8 13.2929 8.14645 13.1464C8.2929 13 8.5286 13 9 13L15 13C15.4714 13 15.7071 13 15.8536 13.1464C16 13.2929 16 13.5286 16 14L16 19.7437C16 20.1919 16 20.416 15.8584 20.5615C15.7169 20.7071 15.4976 20.7132 15.0589 20.7254C14.1906 20.7496 13.183 20.75 12 20.75ZM3.56155 8.93804C3.50252 8.8766 3.50637 8.78043 3.51405 8.58808C3.53173 8.14563 3.55742 7.7312 3.59476 7.35306C3.61096 7.18899 3.61906 7.10695 3.67612 7.05517C3.73318 7.00339 3.81739 7.00327 3.98582 7.00303H3.98582L6.09966 7.00003C6.28847 6.99977 6.38287 6.99963 6.44155 7.05823C6.50023 7.11682 6.50023 7.21123 6.50023 7.40003V8.59947C6.50023 8.78803 6.50023 8.88231 6.44165 8.94089C6.38307 8.99947 6.28879 8.99947 6.10023 8.99947H3.91166C3.7176 8.99947 3.62057 8.99947 3.56155 8.93804ZM3.56155 15.0609C3.50252 15.1223 3.50637 15.2185 3.51405 15.4108C3.53173 15.8533 3.55742 16.2677 3.59476 16.6459C3.61096 16.8099 3.61906 16.892 3.67612 16.9438C3.73318 16.9955 3.81739 16.9957 3.98582 16.9959L6.09966 16.9989C6.28847 16.9992 6.38287 16.9993 6.44155 16.9407C6.50023 16.8821 6.50023 16.7877 6.50023 16.5989V15.3995C6.50023 15.2109 6.50023 15.1166 6.44165 15.058C6.38307 14.9995 6.28879 14.9995 6.10023 14.9995H3.91166C3.7176 14.9995 3.62057 14.9995 3.56155 15.0609ZM20.4862 15.4108C20.4939 15.2185 20.4977 15.1223 20.4387 15.0609C20.3797 14.9995 20.2827 14.9995 20.0886 14.9995H17.9C17.7115 14.9995 17.6172 14.9995 17.5586 15.058C17.5 15.1166 17.5 15.2109 17.5 15.3995V16.5989C17.5 16.7877 17.5 16.8821 17.5587 16.9407C17.6174 16.9993 17.7118 16.9992 17.9006 16.9989L20.0144 16.9959C20.1829 16.9957 20.2671 16.9955 20.3241 16.9438C20.3812 16.892 20.3893 16.8099 20.4055 16.6459C20.4428 16.2677 20.4685 15.8533 20.4862 15.4108ZM20.4387 8.93804C20.4977 8.8766 20.4939 8.78043 20.4862 8.58808C20.4685 8.14563 20.4428 7.7312 20.4055 7.35306C20.3893 7.18899 20.3812 7.10695 20.3241 7.05517C20.2671 7.00339 20.1829 7.00327 20.0144 7.00303L17.9006 7.00003C17.7118 6.99977 17.6174 6.99963 17.5587 7.05823C17.5 7.11682 17.5 7.21123 17.5 7.40003V8.59947C17.5 8.78803 17.5 8.88231 17.5586 8.94089C17.6172 8.99947 17.7115 8.99947 17.9 8.99947H20.0886C20.2827 8.99947 20.3797 8.99947 20.4387 8.93804Z',
  d15: 'M1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03143 22.0694 6.68802C21.8843 5.31136 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75213 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428Z',
  d16: 'M12 20.75C10.817 20.75 9.80939 20.7496 8.94106 20.7254C8.50244 20.7132 8.28313 20.7071 8.14156 20.5615C8 20.416 8 20.1919 8 19.7437V14C8 13.5286 8 13.2929 8.14645 13.1464C8.29289 13 8.5286 13 9 13L15 13C15.4714 13 15.7071 13 15.8536 13.1464C16 13.2929 16 13.5286 16 14L16 19.7437C16 20.1919 16 20.416 15.8584 20.5615C15.7169 20.7071 15.4976 20.7132 15.0589 20.7254C14.1906 20.7496 13.183 20.75 12 20.75Z',
  d17: 'M16 10C16 10.4714 16 10.7071 15.8536 10.8536C15.7071 11 15.4714 11 15 11L9 11C8.5286 11 8.29289 11 8.14645 10.8536C8 10.7071 8 10.4714 8 10V4.25628C8 3.80811 8 3.58402 8.14156 3.43846C8.28313 3.2929 8.50244 3.2868 8.94106 3.2746C9.80939 3.25044 10.817 3.25 12 3.25C13.183 3.25 14.1906 3.25044 15.0589 3.2746C15.4976 3.2868 15.7169 3.2929 15.8584 3.43846C16 3.58402 16 3.8081 16 4.25628L16 10Z',
  d18: 'M3.51405 15.4108C3.50637 15.2185 3.50252 15.1223 3.56155 15.0609C3.62057 14.9995 3.7176 14.9995 3.91166 14.9995H6.10023C6.28879 14.9995 6.38307 14.9995 6.44165 15.058C6.50023 15.1166 6.50023 15.2109 6.50023 15.3995V16.5989C6.50023 16.7877 6.50023 16.8821 6.44155 16.9407C6.38287 16.9993 6.28847 16.9992 6.09966 16.9989L3.98582 16.9959C3.81739 16.9957 3.73318 16.9955 3.67612 16.9438C3.61906 16.892 3.61096 16.8099 3.59476 16.6459C3.55742 16.2677 3.53173 15.8533 3.51405 15.4108Z',
  d19: 'M3.51405 8.58808C3.50637 8.78043 3.50252 8.8766 3.56155 8.93804C3.62057 8.99947 3.7176 8.99947 3.91166 8.99947H6.10023C6.28879 8.99947 6.38307 8.99947 6.44165 8.94089C6.50023 8.88231 6.50023 8.78803 6.50023 8.59947V7.40003C6.50023 7.21123 6.50023 7.11682 6.44155 7.05823C6.38287 6.99963 6.28847 6.99977 6.09966 7.00003L3.98582 7.00303C3.81739 7.00327 3.73318 7.00339 3.67612 7.05517C3.61906 7.10695 3.61096 7.18899 3.59476 7.35306C3.55742 7.7312 3.53173 8.14563 3.51405 8.58808Z',
  d20: 'M20.4862 15.4108C20.4939 15.2185 20.4977 15.1223 20.4387 15.0609C20.3797 14.9995 20.2827 14.9995 20.0886 14.9995H17.9C17.7115 14.9995 17.6172 14.9995 17.5586 15.058C17.5 15.1166 17.5 15.2109 17.5 15.3995V16.5989C17.5 16.7877 17.5 16.8821 17.5587 16.9407C17.6174 16.9993 17.7118 16.9992 17.9006 16.9989L20.0144 16.9959C20.1829 16.9957 20.2671 16.9955 20.3241 16.9438C20.3812 16.892 20.3893 16.8099 20.4055 16.6459C20.4428 16.2677 20.4685 15.8533 20.4862 15.4108Z',
  d21: 'M20.4862 8.58808C20.4939 8.78043 20.4977 8.8766 20.4387 8.93804C20.3797 8.99947 20.2827 8.99947 20.0886 8.99947H17.9C17.7115 8.99947 17.6172 8.99947 17.5586 8.94089C17.5 8.88231 17.5 8.78803 17.5 8.59947V7.40003C17.5 7.21123 17.5 7.11682 17.5587 7.05823C17.6174 6.99963 17.7118 6.99977 17.9006 7.00003L20.0144 7.00303C20.1829 7.00327 20.2671 7.00339 20.3241 7.05517C20.3812 7.10695 20.3893 7.18899 20.4055 7.35306C20.4428 7.7312 20.4685 8.14563 20.4862 8.58808Z',
  d22: 'M21.5 21.5V2.5H2.5V21.5H21.5Z',
  d23: 'M7 22L7 2',
  d24: 'M17 22L17 2',
  d25: 'M1.75 21.2738C1.75 21.8129 2.18706 22.25 2.72619 22.25H21.2738C21.8129 22.25 22.25 21.8129 22.25 21.2738V2.72619C22.25 2.18706 21.8129 1.75 21.2738 1.75L2.72619 1.75C2.18706 1.75 1.75 2.18706 1.75 2.72619L1.75 21.2738ZM16 20.2969H8L8 13L16 13L16 20.2969ZM16 11V3.70164L8 3.70164L8 11L16 11ZM3.70215 17H6V15L3.70215 15V17ZM3.70215 7L6 7L6 9L3.70215 9V7ZM18 17H20.2976V15H18V17ZM18 9H20.2976V7L18 7V9Z',
} as const;

export const IconFilm02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-stroke-rounded IconFilm02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconFilm02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-duotone-rounded IconFilm02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconFilm02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-twotone-rounded IconFilm02TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilm02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-solid-rounded IconFilm02SolidRounded"
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

export const IconFilm02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-bulk-rounded IconFilm02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilm02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-stroke-sharp IconFilm02StrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilm02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="film-02-solid-sharp IconFilm02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilm02: TheIconSelfPack = {
  name: 'Film02',
  StrokeRounded: IconFilm02StrokeRounded,
  DuotoneRounded: IconFilm02DuotoneRounded,
  TwotoneRounded: IconFilm02TwotoneRounded,
  SolidRounded: IconFilm02SolidRounded,
  BulkRounded: IconFilm02BulkRounded,
  StrokeSharp: IconFilm02StrokeSharp,
  SolidSharp: IconFilm02SolidSharp,
};
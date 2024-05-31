import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22',
  d2: 'M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2',
  d3: 'M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21',
  d4: 'M19.8988 19.9288L22 22M21.1083 17.0459C21.1083 19.2805 19.2932 21.0919 17.0541 21.0919C14.8151 21.0919 13 19.2805 13 17.0459C13 14.8114 14.8151 13 17.0541 13C19.2932 13 21.1083 14.8114 21.1083 17.0459Z',
  d5: 'M19.7826 5.7201C21.1697 7.43673 22.0003 9.62157 22.0003 12.0004C22.0003 13.5399 21.6525 14.9981 21.0311 16.3007C20.6795 14.4222 19.0309 13.0004 17.0503 13.0004C14.8136 13.0004 13.0003 14.8137 13.0003 17.0504C13.0003 19.031 14.4221 20.6796 16.3006 21.0312C14.998 21.6526 13.5398 22.0004 12.0003 22.0004C10.6745 22.0004 9.40898 21.7424 8.25117 21.2739L8.51094 21.0004C9.18506 20.1678 9.06684 19.1986 8.72865 18.2293C8.49767 17.5673 8.36931 17.1994 8.29796 16.8207C8.20871 16.347 8.20871 15.8565 8.20871 14.7522C8.20871 12.7653 7.68877 12.2686 5.08908 12.2686C3.85566 12.2686 2.80512 11.6863 2.0459 11.0396C2.47548 6.53327 5.89568 2.89917 10.2993 2.14453C9.74789 3.31036 9.93928 4.72809 11.0405 5.26259C11.9613 5.70953 12.0553 6.35294 12.1505 7.00386C12.2372 7.597 12.3248 8.19638 13.0397 8.65905C14.0394 9.30599 15.5388 9.14404 17.0382 7.20321C17.8052 6.21045 18.8855 5.826 19.7826 5.7201Z',
  d6: 'M20.0371 5.69899C19.1024 5.76636 17.9052 6.12824 17.075 7.20277C15.5756 9.14361 14.0761 9.30556 13.0765 8.65861C11.577 7.6882 12.8371 6.11636 11.0772 5.26215C9.93024 4.70542 9.77032 3.19045 10.4087 2',
  d7: 'M2.17188 11.1328C2.93437 11.7949 3.82779 12.255 5.08607 12.255C7.68576 12.255 8.2057 12.7517 8.2057 14.7386C8.2057 16.7255 8.2057 16.7255 8.72564 18.2156C9.06384 19.1849 9.18205 20.1542 8.50793 20.9868',
  d8: 'M3.29549 10.7305C3.27749 10.855 3.26848 10.9173 3.2981 10.9744C3.32772 11.0315 3.38213 11.0591 3.49095 11.1144C3.97458 11.36 4.51335 11.5181 5.08874 11.5181C5.75485 11.5181 6.32888 11.5492 6.81102 11.6396C7.29426 11.7301 7.73816 11.8894 8.09861 12.1845C8.84883 12.7989 8.95837 13.7614 8.95837 14.7517C8.95837 15.7706 8.9604 16.1997 9.01512 16.5656C9.06753 16.9161 9.16946 17.2165 9.43644 17.9817C9.59057 18.4234 9.80455 19.0505 9.79233 19.7265C9.79017 19.8463 9.781 19.9665 9.764 20.0867C9.73483 20.293 9.72025 20.3961 9.76476 20.4605C9.80928 20.5248 9.8975 20.5445 10.074 20.5839C10.3848 20.6534 10.7019 20.7064 11.0243 20.7419C11.5608 20.8012 12 21.233 12 21.7727C12 22.3125 11.561 22.7546 11.0235 22.7062C5.54403 22.2128 1.25 17.6079 1.25 12C1.25 12 1.25 11.9999 1.25 11.9999C1.25 11.9468 1.25038 11.8939 1.25115 11.841C1.33552 6.02218 6.04305 1.32252 11.8649 1.25083C11.9099 1.25028 11.9548 1.25 11.9999 1.25H12C17.6079 1.25 22.2128 5.54403 22.7062 11.0235C22.7546 11.561 22.3125 12 21.7727 12C21.233 12 20.8012 11.5608 20.7419 11.0243C20.5739 9.50183 20.0173 8.09643 19.1735 6.90946C19.091 6.79351 19.0498 6.73553 18.9794 6.71718C18.909 6.69883 18.8478 6.72787 18.7254 6.78594C18.3245 6.97608 17.9437 7.25735 17.6315 7.66148C16.8187 8.71346 15.9471 9.36062 15.063 9.62078C14.1618 9.88596 13.3114 9.72818 12.6319 9.28843C11.6258 8.63728 11.4958 7.72722 11.4107 7.13129C11.3644 6.81991 11.3081 6.52842 11.2244 6.37357C11.1546 6.24455 11.0279 6.09006 10.7127 5.93705C9.92015 5.55237 9.471 4.84887 9.31521 4.09096C9.27621 3.90125 9.25671 3.8064 9.20557 3.762C9.18265 3.7421 9.15963 3.72954 9.1305 3.72103C9.06548 3.70205 8.98641 3.73263 8.82827 3.79379C5.91739 4.91962 3.75535 7.54963 3.29549 10.7305Z',
  d9: 'M12.75 17.2765C12.75 14.7766 14.7766 12.75 17.2765 12.75C19.7765 12.75 21.8031 14.7766 21.8031 17.2765C21.8031 18.1656 21.5468 18.9947 21.104 19.6942L22.456 21.0418C22.8471 21.4317 22.8481 22.0648 22.4582 22.456C22.0683 22.8471 21.4352 22.8481 21.044 22.4582L19.6888 21.1074C18.9905 21.5481 18.1633 21.8031 17.2765 21.8031C14.7766 21.8031 12.75 19.7765 12.75 17.2765ZM17.2765 14.75C15.8812 14.75 14.75 15.8812 14.75 17.2765C14.75 18.6719 15.8812 19.8031 17.2765 19.8031C18.6719 19.8031 19.8031 18.6719 19.8031 17.2765C19.8031 15.8812 18.6719 14.75 17.2765 14.75Z',
  d10: 'M10.1724 1.40483C10.7669 1.30298 11.3775 1.25 11.9999 1.25C15.3801 1.25 18.3963 2.81097 20.3657 5.24849C20.5374 5.46093 20.58 5.74988 20.4769 6.00281C20.3739 6.25574 20.1415 6.43266 19.8703 6.46468C19.1028 6.55526 18.2377 6.87675 17.6315 7.66148C16.8187 8.71346 15.9471 9.36062 15.063 9.62078C14.1618 9.88596 13.3114 9.72818 12.6319 9.28843C11.6258 8.63728 11.4958 7.72722 11.4107 7.13129C11.3644 6.81991 11.3081 6.52842 11.2244 6.37357C11.1546 6.24455 11.0279 6.09006 10.7127 5.93705C9.92015 5.55237 9.471 4.84887 9.31521 4.09096C9.1621 3.34613 9.28442 2.5351 9.62111 1.82335C9.72567 1.60231 9.93142 1.44612 10.1724 1.40483Z',
  d11: 'M1.7638 10.344C2.02294 10.239 2.319 10.2868 2.53187 10.4681C3.21164 11.0471 4.09563 11.5181 5.08874 11.5181C5.75485 11.5181 6.32888 11.5492 6.81102 11.6396C7.29426 11.7301 7.73816 11.8894 8.09861 12.1845C8.84883 12.7989 8.95837 13.7614 8.95837 14.7517C8.95837 15.7706 8.9604 16.1997 9.01512 16.5656C9.06753 16.9161 9.16946 17.2165 9.43644 17.9817C9.59057 18.4234 9.80455 19.0505 9.79233 19.7265C9.77927 20.4492 9.51156 21.1855 8.80931 21.8406C8.59704 22.0386 8.28956 22.0963 8.01992 21.9888C4.05446 20.4075 1.25 16.5321 1.25 11.9999C1.25 11.652 1.26655 11.3077 1.29895 10.9679C1.32548 10.6895 1.50467 10.4491 1.7638 10.344Z',
  d12: 'M11.0243 20.7419C6.62586 20.2565 3.20455 16.5278 3.20455 12C3.20455 7.1424 7.1424 3.20454 12 3.20454C16.5278 3.20454 20.2565 6.62586 20.7419 11.0243C20.8012 11.5608 21.233 12 21.7727 12C22.3125 12 22.7546 11.561 22.7062 11.0235C22.2128 5.54403 17.6079 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.6079 5.54403 22.2128 11.0235 22.7062C11.561 22.7546 12 22.3125 12 21.7727C12 21.233 11.5608 20.8012 11.0243 20.7419Z',
  d13: 'M20.2 20.2L22 22M21.1 17.05C21.1 14.8132 19.2868 13 17.05 13C14.8132 13 13 14.8132 13 17.05C13 19.2868 14.8132 21.1 17.05 21.1C19.2868 21.1 21.1 19.2868 21.1 17.05Z',
  d14: 'M12 20.7955C11.1773 20.7955 10.3809 20.6825 9.62565 20.4712C9.88274 19.6083 9.69422 18.7255 9.43468 17.9817C9.16769 17.2165 9.06577 16.9161 9.01335 16.5656C8.95863 16.1996 8.9566 15.7706 8.9566 14.7517C8.9566 13.7614 8.84706 12.7989 8.09684 12.1845C7.73639 11.8894 7.2925 11.7301 6.80925 11.6396C6.32711 11.5492 5.75308 11.5181 5.08697 11.5181C4.41958 11.5181 3.8015 11.3053 3.26187 10.9903C3.65643 7.53795 6.04987 4.69281 9.25614 3.64099C9.26338 3.76072 9.27707 3.87958 9.29742 3.99694C9.43481 4.78918 9.88585 5.5356 10.7127 5.93693C11.0279 6.08995 11.1546 6.24443 11.2244 6.37345C11.3081 6.5283 11.3493 6.71585 11.3956 7.02724C11.4006 7.06067 11.4056 7.09535 11.4107 7.13118C11.4958 7.7271 11.6258 8.63716 12.6319 9.28831C13.3114 9.72806 14.1618 9.88584 15.063 9.62067C15.9471 9.3605 16.8187 8.71334 17.6314 7.66136C18.0137 7.16653 18.4997 6.85578 18.998 6.67113C20.1257 8.14987 20.7955 9.99672 20.7955 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75V20.7955Z',
  d15: 'M12.043 17.093C12.043 14.3039 14.3039 12.043 17.093 12.043C19.882 12.043 22.143 14.3039 22.143 17.093C22.143 18.1259 21.8329 19.0864 21.3006 19.8864L22.7501 21.3359L21.3359 22.7501L19.8864 21.3006C19.0864 21.8329 18.1259 22.143 17.093 22.143C14.3039 22.143 12.043 19.882 12.043 17.093ZM17.093 14.043C15.4085 14.043 14.043 15.4085 14.043 17.093C14.043 18.7774 15.4085 20.143 17.093 20.143C18.7774 20.143 20.143 18.7774 20.143 17.093C20.143 15.4085 18.7774 14.043 17.093 14.043Z',
} as const;

export const IconGlobalSearchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-stroke-rounded IconGlobalSearchStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconGlobalSearchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-duotone-rounded IconGlobalSearchDuotoneRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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
      />
    </TheIconWrapper>
  );
};

export const IconGlobalSearchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-twotone-rounded IconGlobalSearchTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGlobalSearchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-solid-rounded IconGlobalSearchSolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconGlobalSearchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-bulk-rounded IconGlobalSearchBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
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

export const IconGlobalSearchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-stroke-sharp IconGlobalSearchStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
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

export const IconGlobalSearchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="global-search-solid-sharp IconGlobalSearchSolidSharp"
    >
      <path 
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

export const iconPackOfGlobalSearch: TheIconSelfPack = {
  name: 'GlobalSearch',
  StrokeRounded: IconGlobalSearchStrokeRounded,
  DuotoneRounded: IconGlobalSearchDuotoneRounded,
  TwotoneRounded: IconGlobalSearchTwotoneRounded,
  SolidRounded: IconGlobalSearchSolidRounded,
  BulkRounded: IconGlobalSearchBulkRounded,
  StrokeSharp: IconGlobalSearchStrokeSharp,
  SolidSharp: IconGlobalSearchSolidSharp,
};
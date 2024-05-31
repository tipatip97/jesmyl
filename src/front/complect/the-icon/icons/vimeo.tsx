import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.3459 4.65406C19.0372 2.82124 15.4614 5.64316 14.5961 7.12694C15.8974 7.43176 18.5 7.54313 16 12.0276C15 13.6885 12.7 15.8145 11.5 11.0311C10 5.05175 10 0.567257 2 7.54313C2.47556 8.4911 3.76645 8.5883 4.74116 8.17029C5.62781 7.79005 6.54267 7.94136 7 9.53652C8 13.0245 8.5 19.9866 12 19.9866C15.6345 20.4812 24.461 7.12711 21.3459 4.65406Z',
  d2: 'M12 20C8.5 20 8 13.032 7 9.54115C6.54267 7.94467 5.62781 7.79322 4.74116 8.17378C3.76645 8.59215 2.47556 8.49486 2 7.5461C10 0.564381 10 5.05263 11.5 11.037C12.0237 13.1262 12.7568 13.8985 13.5 13.9672',
  d3: 'M13.9072 7.42297C13.8131 7.20441 13.8284 6.9542 13.9482 6.74867C14.4654 5.86194 15.6931 4.69404 17.0876 3.97899C18.4724 3.26889 20.3093 2.8731 21.8123 4.06625C23.0893 5.08007 22.8183 6.99044 22.4331 8.36464C21.9602 10.0517 20.9958 12.0059 19.8377 13.8341C18.6773 15.6658 17.2928 17.418 15.9473 18.6916C14.925 19.6593 13.4741 20.9054 11.9515 20.7358C9.58121 20.7021 8.45861 18.2301 7.84737 16.295C7.44636 15.0255 7.15113 13.6229 6.88675 12.3669L6.87912 12.3306C6.67355 11.3541 6.48713 10.4685 6.27908 9.7428C6.08553 9.06769 5.7687 8.54528 5.0368 8.85916C4.43118 9.11889 3.7161 9.22624 3.05082 9.10672C2.37466 8.98525 1.69817 8.6136 1.32966 7.87901C1.17624 7.57319 1.24925 7.2023 1.50712 6.97744C3.52076 5.22158 5.09761 4.12507 6.36589 3.60919C7.6665 3.08015 8.7881 3.11417 9.66966 3.85398C10.4532 4.51149 10.8918 5.61945 11.2279 6.77223C11.437 7.48967 11.6311 8.325 11.8337 9.19716C12.1156 10.4103 12.2719 11.9806 13.1279 12.9381C13.5834 13.4476 14.1142 13.0955 14.5258 12.7025C15.4119 11.8563 16.112 10.5194 16.2751 9.31205C16.3641 8.65301 16.1043 8.30073 15.4887 8.10494C14.9804 7.94329 14.1545 7.99767 13.9072 7.42297Z',
  d4: 'M13.9075 7.42336C13.8135 7.20481 13.8287 6.95459 13.9486 6.74907C14.4657 5.86233 15.6934 4.69444 17.0879 3.97938C18.4727 3.26928 20.3097 2.8735 21.8126 4.06664C23.0896 5.08046 22.8186 6.99083 22.4334 8.36503C21.9606 10.0521 20.9961 12.0063 19.838 13.8345C18.6777 15.6662 17.2931 17.4184 15.9476 18.692C14.9253 19.6597 13.4744 20.9058 11.9518 20.7362C9.86256 20.7065 8.74267 18.7824 8.08789 17.0014C11.3882 16.194 15.7756 13.0131 16.2754 9.31244C16.3645 8.6534 16.1047 8.30112 15.489 8.10533C14.9808 7.94368 14.1548 7.99806 13.9075 7.42336Z',
  d5: 'M8.09179 4.03038C6.26727 3.66095 3.13996 6.65133 2.00277 7.99169C1.99721 7.99824 2.00251 8.00763 2.0111 8.00749L5.9823 7.94259C6.24071 8.75494 7.77562 15.9295 9.61555 18.4367C10.2394 19.389 11.9197 21.331 14.906 18.6052C17.8445 15.9231 20.7682 11.4412 21.6553 8.16736C22.1712 6.78837 22.475 4.11506 19.7699 4.03038C17.1673 3.9489 15.0538 6.18009 14.5811 7.17199C14.578 7.1786 14.5834 7.18559 14.5907 7.18561C17.0336 7.19285 17.8975 8.85962 15.971 12.1079C13.9974 15.4359 12.2229 13.5214 11.8348 12.2743L11.1142 9.65023C10.7512 8.32835 10.6216 6.9127 9.98807 5.69694C9.57796 4.90989 8.9488 4.20391 8.09179 4.03038Z',
  d6: 'M21.3459 4.60094C19.0372 2.76178 15.4614 5.59347 14.5961 7.08238C15.8974 7.38825 18.5 7.50001 16 12C15 13.6667 12.7 15.8 11.5 11C10 5 9.5 0.432518 2 7.95848L6 7.95846C7 11.4585 8.5 19.9866 12 19.9866C15.6345 20.4829 24.461 7.08255 21.3459 4.60094Z',
} as const;

export const IconVimeoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-stroke-rounded IconVimeoStrokeRounded"
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

export const IconVimeoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-duotone-rounded IconVimeoDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVimeoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-twotone-rounded IconVimeoTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconVimeoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-solid-rounded IconVimeoSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVimeoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-bulk-rounded IconVimeoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVimeoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-stroke-sharp IconVimeoStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVimeoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vimeo-solid-sharp IconVimeoSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVimeo: TheIconSelfPack = {
  name: 'Vimeo',
  StrokeRounded: IconVimeoStrokeRounded,
  DuotoneRounded: IconVimeoDuotoneRounded,
  TwotoneRounded: IconVimeoTwotoneRounded,
  SolidRounded: IconVimeoSolidRounded,
  BulkRounded: IconVimeoBulkRounded,
  StrokeSharp: IconVimeoStrokeSharp,
  SolidSharp: IconVimeoSolidSharp,
};
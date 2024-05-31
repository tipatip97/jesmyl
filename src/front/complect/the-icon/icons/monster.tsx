import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 11.5H12.009',
  d2: 'M16.5 11.5C16.5 13.433 14.4853 15 12 15C9.51472 15 7.5 13.433 7.5 11.5C7.5 9.567 9.51472 8 12 8C14.4853 8 16.5 9.567 16.5 11.5Z',
  d3: 'M14 18C13.4846 18.3093 12.7787 18.5 12 18.5C11.2213 18.5 10.5154 18.3093 10 18',
  d4: 'M12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 14.5752 4.24365 16.4767 5.47899 17.9525C6.06977 18.6583 6.5 19.5115 6.5 20.4319C6.5 21.2979 7.20207 22 8.06812 22H15.9319C16.7979 22 17.5 21.2979 17.5 20.4319C17.5 19.5115 17.9302 18.6583 18.521 17.9525C19.7564 16.4767 20.5 14.5752 20.5 12.5C20.5 7.80558 16.6944 4 12 4Z',
  d5: 'M16 5C16.1667 4.1 17 2.24 19 2',
  d6: 'M8 5C7.83333 4.1 7 2.24 5 2',
  d7: 'M3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5C20.5 14.5752 19.7564 16.4767 18.521 17.9525C17.9302 18.6583 17.5 19.5115 17.5 20.4319C17.5 21.2979 16.7979 22 15.9319 22H8.06812C7.20207 22 6.5 21.2979 6.5 20.4319C6.5 19.5115 6.06977 18.6583 5.47899 17.9525C4.24365 16.4767 3.5 14.5752 3.5 12.5ZM12 15C14.4853 15 16.5 13.433 16.5 11.5C16.5 9.567 14.4853 8 12 8C9.51472 8 7.5 9.567 7.5 11.5C7.5 13.433 9.51472 15 12 15Z',
  d8: 'M11 11.5C11 10.9477 11.4477 10.5 12 10.5H12.009C12.5613 10.5 13.009 10.9477 13.009 11.5C13.009 12.0523 12.5613 12.5 12.009 12.5H12C11.4477 12.5 11 12.0523 11 11.5Z',
  d9: 'M2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5C21.25 14.7576 20.4402 16.8281 19.0961 18.4339C18.5722 19.0598 18.25 19.748 18.25 20.4319C18.25 21.7121 17.2121 22.75 15.9319 22.75L8.06812 22.75C6.78786 22.75 5.75 21.7121 5.75 20.4319C5.75 19.748 5.4278 19.0598 4.90387 18.4339C3.55977 16.8281 2.75 14.7576 2.75 12.5ZM6.75 11.5C6.75 8.9883 9.28684 7.25 12 7.25C14.7132 7.25 17.25 8.9883 17.25 11.5C17.25 14.0117 14.7132 15.75 12 15.75C9.28684 15.75 6.75 14.0117 6.75 11.5ZM10.386 18.357C10.0308 18.1439 9.57015 18.259 9.35702 18.6142C9.14388 18.9694 9.25903 19.4301 9.6142 19.6432C10.2636 20.0329 11.1074 20.2501 12.0001 20.2501C12.8929 20.2501 13.7366 20.0329 14.386 19.6432C14.7412 19.4301 14.8563 18.9694 14.6432 18.6142C14.4301 18.259 13.9694 18.1439 13.6142 18.357C13.2328 18.5859 12.6647 18.7501 12.0001 18.7501C11.3356 18.7501 10.7675 18.5859 10.386 18.357Z',
  d10: 'M4.257 2.04281C4.32074 1.54933 4.80305 1.19728 5.33425 1.2565C6.60942 1.39865 7.5113 2.02821 8.09856 2.71989C8.67169 3.39493 8.97181 4.15538 9.07759 4.68602C9.17501 5.17474 8.82752 5.64429 8.30145 5.7348C7.77537 5.8253 7.26993 5.50248 7.17251 5.01376C7.11683 4.73444 6.93258 4.25297 6.57734 3.83456C6.23623 3.4328 5.76573 3.11741 5.10341 3.04358C4.57221 2.98436 4.19325 2.5363 4.257 2.04281ZM19.743 2.04281C19.8067 2.5363 19.4278 2.98436 18.8966 3.04358C18.2343 3.11741 17.7638 3.4328 17.4227 3.83456C17.0674 4.25297 16.8832 4.73444 16.8275 5.01376C16.7301 5.50248 16.2246 5.8253 15.6986 5.7348C15.1725 5.64429 14.825 5.17474 14.9224 4.68602C15.0282 4.15538 15.3283 3.39493 15.9014 2.71989C16.4887 2.02821 17.3906 1.39865 18.6657 1.2565C19.197 1.19728 19.6793 1.54933 19.743 2.04281Z',
  d11: 'M12 3.25C6.89137 3.25 2.75 7.39137 2.75 12.5C2.75 14.7576 3.55977 16.8281 4.90387 18.4339C5.4278 19.0598 5.75 19.748 5.75 20.4319C5.75 21.7121 6.78786 22.75 8.06812 22.75H15.9319C17.2121 22.75 18.25 21.7121 18.25 20.4319C18.25 19.748 18.5722 19.0598 19.0961 18.4339C20.4402 16.8281 21.25 14.7576 21.25 12.5C21.25 7.39137 17.1086 3.25 12 3.25ZM12 7.25C9.28684 7.25 6.75 8.9883 6.75 11.5C6.75 14.0117 9.28684 15.75 12 15.75C14.7132 15.75 17.25 14.0117 17.25 11.5C17.25 8.9883 14.7132 7.25 12 7.25Z',
  d12: 'M9.35702 18.6142C9.57015 18.259 10.0308 18.1439 10.386 18.357C10.7675 18.5859 11.3356 18.7501 12.0001 18.7501C12.6647 18.7501 13.2328 18.5859 13.6142 18.357C13.9694 18.1439 14.4301 18.259 14.6432 18.6142C14.8563 18.9694 14.7412 19.4301 14.386 19.6432C13.7366 20.0329 12.8929 20.2501 12.0001 20.2501C11.1074 20.2501 10.2636 20.0329 9.6142 19.6432C9.25903 19.4301 9.14388 18.9694 9.35702 18.6142Z',
  d13: 'M5.33425 1.2565C4.80305 1.19728 4.32074 1.54933 4.257 2.04281C4.19325 2.5363 4.57221 2.98436 5.10341 3.04358C5.76573 3.11741 6.23623 3.4328 6.57734 3.83456C6.81254 4.11159 6.97279 4.41627 7.07039 4.67161C7.60948 4.33142 8.18616 4.04538 8.79279 3.82113C8.63061 3.46147 8.40313 3.07862 8.09856 2.71989C7.5113 2.02821 6.60942 1.39865 5.33425 1.2565Z',
  d14: 'M16.9296 4.67161C16.3905 4.33142 15.8138 4.04539 15.2072 3.82113C15.3694 3.46147 15.5969 3.07862 15.9014 2.71989C16.4887 2.02821 17.3906 1.39865 18.6657 1.2565C19.197 1.19728 19.6793 1.54933 19.743 2.04281C19.8067 2.5363 19.4278 2.98436 18.8966 3.04358C18.2343 3.11741 17.7638 3.4328 17.4227 3.83456C17.1875 4.11159 17.0272 4.41627 16.9296 4.67161Z',
  d15: 'M12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 15.0969 4.66459 17.4218 6.5 18.981V22H17.5V18.981C19.3354 17.4218 20.5 15.0969 20.5 12.5C20.5 7.80558 16.6944 4 12 4Z',
  d16: 'M14.5 18C13.8557 18.6186 12.9733 19 12 19C11.0267 19 10.1443 18.6186 9.5 18',
  d17: 'M16 5C16.1667 4.1 17.5 2 19.5 2',
  d18: 'M8 5C7.83333 4.1 6.5 2 4.5 2',
  d19: 'M11 10.5H13.009V12.5H11V10.5Z',
  d20: 'M2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5C21.25 15.1993 20.0929 17.6291 18.25 19.3192L18.25 22.75L5.75 22.75L5.75 19.3192C3.90708 17.6291 2.75 15.1993 2.75 12.5ZM6.75 11.5C6.75 8.9883 9.28684 7.25 12 7.25C14.7132 7.25 17.25 8.9883 17.25 11.5C17.25 14.0117 14.7132 15.75 12 15.75C9.28684 15.75 6.75 14.0117 6.75 11.5ZM11.9999 19.25C11.2258 19.25 10.528 18.9474 10.0193 18.459L8.98047 19.541C9.76035 20.2898 10.8274 20.75 11.9999 20.75C13.1724 20.75 14.2395 20.2898 15.0193 19.541L13.9805 18.459C13.4718 18.9474 12.774 19.25 11.9999 19.25Z',
  d21: 'M7.66333 2.72462C8.36356 3.46348 8.85616 4.38146 8.98328 5.06791L7.01672 5.43209C6.97717 5.21854 6.71978 4.63652 6.21167 4.10038C5.72062 3.58223 5.132 3.25 4.5 3.25V1.25C5.868 1.25 6.94605 1.96777 7.66333 2.72462ZM17.7883 4.10038C17.2802 4.63652 17.0228 5.21854 16.9833 5.43209L15.0167 5.06791C15.1438 4.38146 15.6364 3.46348 16.3367 2.72462C17.054 1.96777 18.132 1.25 19.5 1.25V3.25C18.868 3.25 18.2794 3.58223 17.7883 4.10038Z',
} as const;

export const IconMonsterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-stroke-rounded IconMonsterStrokeRounded"
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
      />
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconMonsterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-duotone-rounded IconMonsterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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
      />
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconMonsterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-twotone-rounded IconMonsterTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonsterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-solid-rounded IconMonsterSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonsterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-bulk-rounded IconMonsterBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonsterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-stroke-sharp IconMonsterStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonsterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monster-solid-sharp IconMonsterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMonster: TheIconSelfPack = {
  name: 'Monster',
  StrokeRounded: IconMonsterStrokeRounded,
  DuotoneRounded: IconMonsterDuotoneRounded,
  TwotoneRounded: IconMonsterTwotoneRounded,
  SolidRounded: IconMonsterSolidRounded,
  BulkRounded: IconMonsterBulkRounded,
  StrokeSharp: IconMonsterStrokeSharp,
  SolidSharp: IconMonsterSolidSharp,
};
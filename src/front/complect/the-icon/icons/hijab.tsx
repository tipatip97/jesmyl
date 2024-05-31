import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5C10.3431 5 9 6.34315 9 8V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V8C15 6.34315 13.6569 5 12 5Z',
  d2: 'M15 10C15 12.5 14.68 14.4 11.2667 16C7.85333 17.6 7 19.8333 7 21',
  d3: 'M9 8H15',
  d4: 'M17.8022 7.51864C17.8022 4.47078 15.2045 2 12 2C8.79554 2 6.19782 4.47078 6.19782 7.51864C6.19782 9.61659 5.45992 13.4691 3.05841 16.4349C2.31105 17.3578 1.93737 17.8193 2.00859 18.244C2.0798 18.6687 2.48003 18.9288 3.28049 19.4489C8.51571 22.8504 15.4843 22.8504 20.7195 19.4489C21.52 18.9288 21.9202 18.6687 21.9914 18.244C22.0626 17.8193 21.689 17.3578 20.9416 16.4349C18.5401 13.4691 17.8022 9.61659 17.8022 7.51864Z',
  d5: 'M12 2C15.2045 2 17.8022 4.47078 17.8022 7.51864C17.8022 9.61659 18.5401 13.4691 20.9416 16.4349C21.6889 17.3578 22.0626 17.8193 21.9914 18.244C21.9202 18.6687 21.52 18.9288 20.7195 19.4489C15.4843 22.8504 8.51571 22.8504 3.28049 19.4489C2.48003 18.9288 2.0798 18.6687 2.00859 18.244C1.93737 17.8193 2.31105 17.3578 3.0584 16.4349C5.45991 13.4691 6.19782 9.61659 6.19782 7.51864C6.19782 4.47078 8.79554 2 12 2ZM9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8V10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10V8Z',
  d6: 'M9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8M9 8V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10M9 8H15M15 10V8M15 10C15 12.5 14.68 14.4 11.2667 16C7.85333 17.6 7 19.8333 7 21',
  d7: 'M15.75 10.0185C15.7492 11.2746 15.6724 12.5264 15.0806 13.6799C14.4744 14.8613 13.3871 15.8343 11.585 16.6791C8.37962 18.1816 7.74996 20.1809 7.74996 21V21.0356L7.68873 21.6785C7.66553 21.9221 7.65392 22.044 7.71975 22.1355C7.78559 22.2269 7.90193 22.254 8.1346 22.308C12.5214 23.3272 17.2713 22.5838 21.1283 20.0778L21.1679 20.0521C21.5339 19.8143 21.8731 19.594 22.1233 19.3748C22.4027 19.1301 22.6562 18.8157 22.7312 18.368C22.8133 17.8786 22.616 17.458 22.409 17.1279C22.2068 16.8052 21.9024 16.4294 21.5534 15.9985L21.5246 15.9629C19.2596 13.1658 18.5523 9.49614 18.5523 7.51864C18.5523 4.0216 15.5829 1.25 12.0001 1.25C8.41731 1.25 5.44794 4.0216 5.44794 7.51864C5.44794 9.49614 4.74062 13.1658 2.47566 15.9629L2.44681 15.9985C2.09784 16.4294 1.79351 16.8052 1.59121 17.1279C1.38428 17.458 1.18698 17.8786 1.26904 18.368C1.3441 18.8157 1.59759 19.1301 1.87698 19.3748C2.12711 19.5939 2.46633 19.8143 2.83235 20.052L2.872 20.0778C3.69869 20.6149 4.56641 21.0711 5.46279 21.4463C5.77822 21.5783 5.93594 21.6443 6.06416 21.5712C6.06785 21.5691 6.07177 21.5668 6.07536 21.5645C6.20028 21.4859 6.21692 21.3113 6.25019 20.962C6.26806 19.4448 7.3571 17.0043 10.9483 15.3209C11.5295 15.0485 12.0025 14.7732 12.3888 14.4953C12.6174 14.3309 12.7318 14.2486 12.7649 14.1792C12.8358 14.0306 12.7828 13.8663 12.6385 13.787C12.5711 13.75 12.3807 13.75 12 13.75C9.92893 13.75 8.25 12.0711 8.25 10V8C8.25 7.91113 8.25309 7.82298 8.25917 7.73565C8.27423 7.51938 8.28176 7.41125 8.3682 7.33062C8.45463 7.25 8.57491 7.25 8.81546 7.25H15.1845C15.4251 7.25 15.5454 7.25 15.6318 7.33062C15.7182 7.41125 15.7258 7.51938 15.7408 7.73565C15.7469 7.82298 15.75 7.91113 15.75 8V10C15.75 10.0062 15.75 10.0123 15.75 10.0185Z',
  d8: 'M17.8024 7.51864C17.8024 4.47078 15.2046 2 12.0002 2C8.79573 2 6.198 4.47078 6.198 7.51864C6.198 9.61659 4.40151 15.0343 2 18C8.00402 23.3333 15.996 23.3333 22 18C19.5985 15.0343 17.8024 9.61659 17.8024 7.51864Z',
  d9: 'M13.496 12.9956C13.5546 12.8816 13.6066 12.765 13.6527 12.6456C13.1605 12.872 12.5977 13.0005 12 13.0005C10.067 13.0005 8.5 11.6573 8.5 10.0005V8.00049C8.5 6.34363 10.067 5.00049 12 5.00049C13.933 5.00049 15.5 6.34363 15.5 8.00049V10.0005C15.5 11.2628 15.4254 12.5212 14.8306 13.6804C14.2245 14.8618 13.1372 15.8348 11.335 16.6796C8.12966 18.1821 7.5 20.1814 7.5 21.0005V22.0369C12.5504 23.6646 18.0383 22.5059 22.4659 18.5607L23 18.0849L22.5505 17.528C21.4233 16.1317 20.4111 14.1178 19.6788 12.1693C18.9398 10.2031 18.5323 8.42797 18.5323 7.51864C18.5323 4.0216 15.572 1.25 12.0002 1.25C8.42834 1.25 5.46806 4.0216 5.46806 7.51864C5.46806 8.42795 5.06045 10.2031 4.32137 12.1693C3.58898 14.1178 2.57674 16.1317 1.44953 17.528L1 18.0849L1.53405 18.5607C2.93265 19.8069 4.43703 20.7751 6 21.4652V21.0005C6 19.4863 7.07701 17.0189 10.6983 15.3214C12.3095 14.5662 13.0889 13.7892 13.496 12.9956Z',
} as const;

export const IconHijabStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-stroke-rounded IconHijabStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHijabDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-duotone-rounded IconHijabDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHijabTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-twotone-rounded IconHijabTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHijabSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-solid-rounded IconHijabSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHijabBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-bulk-rounded IconHijabBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHijabStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-stroke-sharp IconHijabStrokeSharp"
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHijabSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hijab-solid-sharp IconHijabSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHijab: TheIconSelfPack = {
  name: 'Hijab',
  StrokeRounded: IconHijabStrokeRounded,
  DuotoneRounded: IconHijabDuotoneRounded,
  TwotoneRounded: IconHijabTwotoneRounded,
  SolidRounded: IconHijabSolidRounded,
  BulkRounded: IconHijabBulkRounded,
  StrokeSharp: IconHijabStrokeSharp,
  SolidSharp: IconHijabSolidSharp,
};
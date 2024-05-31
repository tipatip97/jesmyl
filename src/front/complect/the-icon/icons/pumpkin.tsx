import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 18C16 20 14 22 12 22C10 22 8 20 8 18',
  d2: 'M15 8C14.4012 6.8044 13.2819 6 12 6C10.7181 6 9.59883 6.8044 9 8',
  d3: 'M15.4118 19.4077C19.6471 21.8019 22 16.4063 22 12.7038C22 9.00141 19.7754 6 17.0313 6C16.0946 6 14.9412 6.47885 14 7.43654',
  d4: 'M8.58824 19.4077C4.35294 21.8019 2 16.4063 2 12.7038C2 9.00141 4.22456 6 6.9687 6C7.90542 6 9.05882 6.47885 10 7.43654',
  d5: 'M12 6C12 4.66667 12.6 2 15 2',
  d6: 'M2 12.7038C2 16.4063 4.35294 21.8019 8.58824 19.4077C9.85882 23.3338 14.3922 21.4385 16.5 20C19 20 22.5 18 21.5 11C20.7 5.4 16.5 6 14.5 7C12.1 5.4 10.5 6.62436 10 7.43654C9.05882 6.47885 7.90542 6 6.9687 6C4.22456 6 2 9.00141 2 12.7038Z',
  d7: 'M13.4799 4.10796C13.1308 4.75438 13 5.57827 13 6.13281C13 6.6851 12.5523 7.13281 12 7.13281C11.4477 7.13281 11 6.6851 11 6.13281C11 5.35402 11.1692 4.17791 11.7201 3.15766C12.2944 2.09409 13.3376 1.13281 15 1.13281C15.5523 1.13281 16 1.58053 16 2.13281C16 2.6851 15.5523 3.13281 15 3.13281C14.2624 3.13281 13.8056 3.50487 13.4799 4.10796Z',
  d8: 'M7.70703 6.05924C7.36167 6.49292 7.06717 6.97255 6.83086 7.48068C6.6562 7.85626 6.81907 8.30233 7.19466 8.477C7.57024 8.65167 8.01631 8.48879 8.19098 8.11321C8.74876 6.91382 9.65237 6.01092 10.7205 5.60462C11.1211 5.46124 11.5503 5.38281 12 5.38281C12.4435 5.38281 12.8672 5.4591 13.263 5.59877C14.3379 6.0022 15.2476 6.90803 15.808 8.11321C15.9827 8.48879 16.4288 8.65167 16.8044 8.477C17.1799 8.30233 17.3428 7.85626 17.1682 7.48068C16.9319 6.9726 16.6374 6.49301 16.2921 6.05936C16.0988 5.81661 16.0021 5.69523 16.045 5.58745C16.0879 5.47967 16.2252 5.46019 16.4999 5.42123C16.6797 5.39572 16.8574 5.38281 17.0313 5.38281C18.6962 5.38281 20.1431 6.29497 21.1472 7.64973C22.1514 9.0046 22.75 10.8409 22.75 12.8367C22.75 14.8084 22.1316 17.2503 20.8973 18.9206C20.2737 19.7644 19.4547 20.461 18.4289 20.7463C18.3153 20.7779 18.2005 20.8041 18.0846 20.8248C17.8064 20.8745 17.6672 20.8993 17.5931 20.8047C17.5189 20.7101 17.5834 20.5645 17.7125 20.2735C18.048 19.5171 18.2432 18.7015 18.2432 17.8724C18.2432 17.4582 17.9074 17.1224 17.4932 17.1224C17.079 17.1224 16.7432 17.4582 16.7432 17.8724C16.7432 19.0769 16.1607 20.3359 15.2344 21.305C14.306 22.2762 13.1172 22.869 12 22.869C10.8828 22.869 9.69398 22.2762 8.7656 21.305C7.83927 20.3359 7.25684 19.0769 7.25684 17.8724C7.25684 17.4582 6.92105 17.1224 6.50684 17.1224C6.09262 17.1224 5.75684 17.4582 5.75684 17.8724C5.75684 18.7015 5.95203 19.5171 6.28747 20.2735C6.41658 20.5645 6.48113 20.7101 6.40695 20.8047C6.33276 20.8993 6.19364 20.8745 5.9154 20.8248C5.79946 20.8041 5.68467 20.7779 5.57109 20.7463C4.54528 20.461 3.72626 19.7644 3.1027 18.9206C1.8684 17.2503 1.25 14.8084 1.25 12.8367C1.25 10.8409 1.84857 9.0046 2.85275 7.64973C3.85686 6.29497 5.30378 5.38281 6.9687 5.38281C7.14234 5.38281 7.31964 5.39568 7.49914 5.4211C7.77388 5.46 7.91124 5.47945 7.95415 5.58724C7.99706 5.69504 7.90038 5.81644 7.70703 6.05924Z',
  d9: 'M13.0438 5.52872C13.107 5.06643 13.2434 4.54638 13.4801 4.10796C13.8058 3.50487 14.2626 3.13281 15.0002 3.13281C15.5525 3.13281 16.0002 2.6851 16.0002 2.13281C16.0002 1.58053 15.5525 1.13281 15.0002 1.13281C13.3379 1.13281 12.2946 2.09409 11.7203 3.15766C11.3022 3.93186 11.104 4.79582 11.0327 5.5078C11.3416 5.42633 11.6652 5.38281 12.0002 5.38281C12.3628 5.38281 12.7121 5.4338 13.0438 5.52872Z',
  d10: 'M12.7997 5.33466C12.8679 4.85473 13.0112 4.31696 13.2599 3.85636C13.6167 3.19571 14.1468 2.75 15 2.75V1.25C13.4532 1.25 12.4833 2.13762 11.9401 3.14364C11.5568 3.85346 11.3656 4.64758 11.2901 5.31673C10.6531 5.43796 10.0721 5.71887 9.57499 6.11419C8.73031 5.54975 7.80688 5.25 6.9687 5.25C5.30378 5.25 3.85686 6.16216 2.85275 7.51692C1.84857 8.87179 1.25 10.7081 1.25 12.7038C1.25 14.6755 1.8684 17.1174 3.1027 18.7877C3.72626 19.6316 4.54528 20.3282 5.57109 20.6135C6.34978 20.8301 7.18553 20.7924 8.0572 20.4779C8.25283 20.7677 8.47652 21.0372 8.71967 21.2803C9.57493 22.1356 10.7561 22.75 12 22.75C13.2439 22.75 14.4251 22.1356 15.2803 21.2803C15.5235 21.0372 15.7472 20.7677 15.9428 20.4779C16.8145 20.7924 17.6502 20.8301 18.4289 20.6135C19.4547 20.3282 20.2737 19.6316 20.8973 18.7877C22.1316 17.1174 22.75 14.6755 22.75 12.7038C22.75 10.7081 22.1514 8.87179 21.1472 7.51692C20.1431 6.16216 18.6962 5.25 17.0313 5.25C16.1934 5.25 15.2702 5.54958 14.4257 6.1137C13.9519 5.73701 13.4018 5.46426 12.7997 5.33466Z',
} as const;

export const IconPumpkinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-stroke-rounded IconPumpkinStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPumpkinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-duotone-rounded IconPumpkinDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPumpkinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-twotone-rounded IconPumpkinTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPumpkinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-solid-rounded IconPumpkinSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPumpkinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-bulk-rounded IconPumpkinBulkRounded"
    >
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

export const IconPumpkinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-stroke-sharp IconPumpkinStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPumpkinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pumpkin-solid-sharp IconPumpkinSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPumpkin: TheIconSelfPack = {
  name: 'Pumpkin',
  StrokeRounded: IconPumpkinStrokeRounded,
  DuotoneRounded: IconPumpkinDuotoneRounded,
  TwotoneRounded: IconPumpkinTwotoneRounded,
  SolidRounded: IconPumpkinSolidRounded,
  BulkRounded: IconPumpkinBulkRounded,
  StrokeSharp: IconPumpkinStrokeSharp,
  SolidSharp: IconPumpkinSolidSharp,
};
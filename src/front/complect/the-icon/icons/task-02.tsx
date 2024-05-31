import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 9.36842C3.5 5.89491 3.5 4.15816 4.52513 3.07908C5.55025 2 7.20017 2 10.5 2H13.5C16.7998 2 18.4497 2 19.4749 3.07908C20.5 4.15816 20.5 5.89491 20.5 9.36842V14.6316C20.5 18.1051 20.5 19.8418 19.4749 20.9209C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9209C3.5 19.8418 3.5 18.1051 3.5 14.6316V9.36842Z',
  d2: 'M8 2L8.0822 2.4932C8.28174 3.69044 8.38151 4.28906 8.80113 4.64453C9.22075 5 9.82762 5 11.0414 5H12.9586C14.1724 5 14.7793 5 15.1989 4.64453C15.6185 4.28906 15.7183 3.69044 15.9178 2.4932L16 2',
  d3: 'M8 16H12M8 11H16',
  d4: 'M4.52513 3.07908C3.5 4.15816 3.5 5.89491 3.5 9.36842V14.6316C3.5 18.1051 3.5 19.8418 4.52513 20.9209C5.55025 22 7.20016 22 10.5 22H13.5C16.7998 22 18.4497 22 19.4749 20.9209C20.5 19.8418 20.5 18.1051 20.5 14.6316V9.36842C20.5 5.89491 20.5 4.15816 19.4749 3.07908C18.6968 2.26008 17.5589 2.06268 15.6128 2.01511C15.816 2.07093 15.9544 2.2737 15.9178 2.4932C15.7183 3.69043 15.6185 4.28906 15.1989 4.64453C14.7793 5 14.1724 5 12.9586 5H11.0414C9.82762 5 9.22075 5 8.80113 4.64453C8.38151 4.28906 8.28174 3.69044 8.0822 2.4932C8.04562 2.27369 8.18405 2.07093 8.38721 2.01511C6.44114 2.06268 5.30318 2.26008 4.52513 3.07908Z',
  d5: 'M7.10944 1.40966C7.20878 1.4868 7.22491 1.62456 7.25717 1.90006L7.33705 2.58219L7.3418 2.61071C7.43374 3.16263 7.52624 3.71794 7.64008 4.10029C7.76484 4.51935 7.95313 4.91107 8.31611 5.21856C8.67908 5.52604 9.09643 5.64738 9.5303 5.70155C9.93298 5.75183 10.4279 5.7518 10.9969 5.75177H13.0026C13.5716 5.7518 14.0665 5.75183 14.4692 5.70155C14.9031 5.64738 15.3204 5.52604 15.6834 5.21856C16.0464 4.91107 16.2347 4.51935 16.3594 4.10029C16.4737 3.71642 16.566 3.1626 16.6583 2.60864L16.6583 2.60861L16.6619 2.58688L16.7471 1.89694C16.7809 1.62309 16.7978 1.48617 16.897 1.40968C16.9962 1.33319 17.1276 1.35093 17.3903 1.38642L17.4455 1.39405C18.4891 1.54173 19.3453 1.85554 20.0186 2.56428C20.6868 3.26761 20.9779 4.15293 21.1158 5.23259C21.25 6.28338 21.25 7.62531 21.25 9.31665V14.6869C21.25 16.3782 21.25 17.7202 21.1158 18.7709C20.9779 19.8506 20.6868 20.7359 20.0186 21.4392C19.3453 22.148 18.4891 22.4618 17.4455 22.6095C16.4399 22.7518 15.1587 22.7518 13.5583 22.7518H10.4417C8.84128 22.7518 7.5601 22.7518 6.55446 22.6095C5.51094 22.4618 4.65468 22.148 3.98138 21.4392C3.31322 20.7359 3.02208 19.8506 2.88419 18.7709C2.74998 17.7202 2.74999 16.3782 2.75 14.6869V14.6869V9.31663V9.31661C2.74999 7.62529 2.74998 6.28337 2.88419 5.23259C3.02208 4.15293 3.31322 3.26761 3.98138 2.56428C4.65468 1.85554 5.51094 1.54173 6.55446 1.39405L6.61383 1.38586C6.878 1.3503 7.01009 1.33252 7.10944 1.40966ZM8 10.25C7.58579 10.25 7.25 10.5858 7.25 11C7.25 11.4142 7.58579 11.75 8 11.75H16C16.4142 11.75 16.75 11.4142 16.75 11C16.75 10.5858 16.4142 10.25 16 10.25H8ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H12C12.4142 16.75 12.75 16.4142 12.75 16C12.75 15.5858 12.4142 15.25 12 15.25H8Z',
  d6: 'M15.2327 1.92129C15.271 1.61164 15.2901 1.45681 15.2012 1.35564C15.1122 1.25448 14.9572 1.25362 14.6471 1.2519C14.302 1.24999 13.9393 1.25 13.5586 1.25H10.442C10.0622 1.25 9.70044 1.24999 9.35607 1.25189C9.04774 1.25359 8.89358 1.25444 8.80469 1.3549C8.7158 1.45536 8.73385 1.60943 8.76993 1.91759L8.825 2.38786C8.92625 2.99518 8.99291 3.38484 9.07797 3.67052C9.15788 3.93895 9.22928 4.02428 9.28592 4.07226C9.34256 4.12025 9.43847 4.17665 9.71638 4.21134C10.0151 4.24864 10.4153 4.25 11.0414 4.25H12.9586C13.5848 4.25 13.9849 4.24864 14.2836 4.21134C14.5616 4.17665 14.6575 4.12025 14.7141 4.07226C14.7707 4.02428 14.8421 3.93895 14.9221 3.67053C15.0072 3.38447 15.0739 2.99418 15.1754 2.38553L15.2327 1.92129Z',
  d7: 'M7.25717 1.90006C7.22491 1.62456 7.20878 1.4868 7.10943 1.40966C7.01009 1.33252 6.878 1.3503 6.61383 1.38586C6.59393 1.38853 6.57414 1.39127 6.55446 1.39405C5.51094 1.54173 4.65468 1.85554 3.98138 2.56428C3.31322 3.26761 3.02208 4.15293 2.88419 5.23259C2.74997 6.28337 2.74999 7.6253 2.75 9.31663V14.6869C2.74999 16.3782 2.74997 17.7202 2.88419 18.7709C3.02208 19.8506 3.31322 20.7359 3.98138 21.4392C4.65468 22.148 5.51094 22.4618 6.55446 22.6095C7.5601 22.7518 8.84128 22.7518 10.4417 22.7518H13.5583C15.1587 22.7518 16.4399 22.7518 17.4455 22.6095C18.4891 22.4618 19.3453 22.148 20.0186 21.4392C20.6868 20.7359 20.9779 19.8506 21.1158 18.7709C21.25 17.7202 21.25 16.3782 21.25 14.6869V9.31665C21.25 7.62531 21.25 6.28338 21.1158 5.23259C20.9779 4.15293 20.6868 3.26761 20.0186 2.56428C19.3453 1.85554 18.4891 1.54173 17.4455 1.39405C17.4272 1.39146 17.4088 1.38891 17.3903 1.38642C17.1276 1.35093 16.9962 1.33319 16.897 1.40968C16.7978 1.48617 16.7809 1.62309 16.7471 1.89694L16.6619 2.58688L16.6583 2.60861C16.566 3.16259 16.4737 3.71641 16.3594 4.10029C16.2347 4.51935 16.0464 4.91107 15.6834 5.21856C15.3204 5.52604 14.9031 5.64738 14.4692 5.70155C14.0665 5.75183 13.5716 5.7518 13.0026 5.75177H10.9969C10.4279 5.7518 9.93298 5.75183 9.5303 5.70155C9.09643 5.64738 8.67908 5.52604 8.31611 5.21856C7.95313 4.91107 7.76483 4.51935 7.64008 4.10029C7.52624 3.71794 7.43374 3.16263 7.3418 2.61071L7.33705 2.58219L7.25717 1.90006Z',
  d8: 'M7.25 11C7.25 10.5858 7.58579 10.25 8 10.25H16C16.4142 10.25 16.75 10.5858 16.75 11C16.75 11.4142 16.4142 11.75 16 11.75H8C7.58579 11.75 7.25 11.4142 7.25 11ZM7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H12C12.4142 15.25 12.75 15.5858 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16Z',
  d9: 'M20.5 22V2H3.5V22L20.5 22Z',
  d10: 'M16 2H8V5H16V2Z',
  d11: 'M3.5 1.25H7.25V4.75C7.25 5.16421 7.58579 5.5 8 5.5H16C16.4142 5.5 16.75 5.16421 16.75 4.75V1.25H20.5C20.9142 1.25 21.25 1.58579 21.25 2V22C21.25 22.1989 21.171 22.3897 21.0303 22.5303C20.8897 22.671 20.6989 22.75 20.5 22.75L3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V2C2.75 1.58579 3.08579 1.25 3.5 1.25ZM8 11.75H16V10.25H8V11.75ZM8 16.75H12V15.25H8V16.75Z',
  d12: 'M8.75 1.25H15.25V4H8.75V1.25Z',
} as const;

export const IconTask02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-stroke-rounded IconTask02StrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconTask02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-duotone-rounded IconTask02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
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

export const IconTask02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-twotone-rounded IconTask02TwotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconTask02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-solid-rounded IconTask02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTask02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-bulk-rounded IconTask02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTask02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-stroke-sharp IconTask02StrokeSharp"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTask02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="task-02-solid-sharp IconTask02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTask02: TheIconSelfPack = {
  name: 'Task02',
  StrokeRounded: IconTask02StrokeRounded,
  DuotoneRounded: IconTask02DuotoneRounded,
  TwotoneRounded: IconTask02TwotoneRounded,
  SolidRounded: IconTask02SolidRounded,
  BulkRounded: IconTask02BulkRounded,
  StrokeSharp: IconTask02StrokeSharp,
  SolidSharp: IconTask02SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 12C4 8.72077 4 7.08116 4.81382 5.91891C5.1149 5.48891 5.48891 5.1149 5.91891 4.81382C7.08116 4 8.72077 4 12 4C15.2792 4 16.9188 4 18.0811 4.81382C18.5111 5.1149 18.8851 5.48891 19.1862 5.91891C20 7.08116 20 8.72077 20 12C20 15.2792 20 16.9188 19.1862 18.0811C18.8851 18.5111 18.5111 18.8851 18.0811 19.1862C16.9188 20 15.2792 20 12 20C8.72077 20 7.08116 20 5.91891 19.1862C5.48891 18.8851 5.1149 18.5111 4.81382 18.0811C4 16.9188 4 15.2792 4 12Z',
  d2: 'M3.5 12C3.5 8.51582 3.5 6.77373 4.36468 5.53884C4.68459 5.08196 5.08196 4.68459 5.53884 4.36468C6.77373 3.5 8.51582 3.5 12 3.5C15.4842 3.5 17.2263 3.5 18.4612 4.36468C18.918 4.68459 19.3154 5.08196 19.6353 5.53884C20.5 6.77373 20.5 8.51582 20.5 12C20.5 15.4842 20.5 17.2263 19.6353 18.4612C19.3154 18.918 18.918 19.3154 18.4612 19.6353C17.2263 20.5 15.4842 20.5 12 20.5C8.51582 20.5 6.77373 20.5 5.53884 19.6353C5.08196 19.3154 4.68459 18.918 4.36468 18.4612C3.5 17.2263 3.5 15.4842 3.5 12Z',
  d3: 'M12 20.5C8.51582 20.5 6.77373 20.5 5.53884 19.6353C5.08196 19.3154 4.68459 18.918 4.36468 18.4612C3.5 17.2263 3.5 15.4842 3.5 12C3.5 8.51582 3.5 6.77373 4.36468 5.53884C4.68459 5.08196 5.08196 4.68459 5.53884 4.36468C6.77373 3.5 8.51582 3.5 12 3.5',
  d4: 'M12.0436 3.25C13.6463 3.24999 14.9086 3.24998 15.913 3.35586C16.9399 3.4641 17.7833 3.68971 18.5113 4.19945C19.0129 4.55072 19.4493 4.98706 19.8005 5.48872C20.3103 6.21671 20.5359 7.06008 20.6441 8.08697C20.75 9.0914 20.75 10.3537 20.75 11.9564V12.0436C20.75 13.6463 20.75 14.9086 20.6441 15.913C20.5359 16.9399 20.3103 17.7833 19.8005 18.5113C19.4493 19.0129 19.0129 19.4493 18.5113 19.8005C17.7833 20.3103 16.9399 20.5359 15.913 20.6441C14.9086 20.75 13.6463 20.75 12.0436 20.75H11.9564C10.3537 20.75 9.0914 20.75 8.08697 20.6441C7.06008 20.5359 6.21671 20.3103 5.48872 19.8005C4.98706 19.4493 4.55072 19.0129 4.19945 18.5113C3.68971 17.7833 3.4641 16.9399 3.35586 15.913C3.24998 14.9086 3.24999 13.6463 3.25 12.0436V11.9564C3.24999 10.3537 3.24998 9.0914 3.35586 8.08697C3.4641 7.06008 3.68971 6.21671 4.19945 5.48872C4.55072 4.98706 4.98706 4.55072 5.48872 4.19945C6.21671 3.68971 7.06008 3.4641 8.08697 3.35586C9.0914 3.24998 10.3537 3.24999 11.9564 3.25H12.0436Z',
  d5: 'M19.8019 5.4901C20.3117 6.21808 20.5373 7.06146 20.6455 8.08834C20.7514 9.09277 20.7514 10.3551 20.7514 11.9577V12.045C20.7514 13.6477 20.7514 14.91 20.6455 15.9144C20.5373 16.9413 20.3117 17.7847 19.8019 18.5126C19.4507 19.0143 19.0143 19.4507 18.5126 19.8019C17.7847 20.3117 16.9413 20.5373 15.9144 20.6455C14.91 20.7514 13.6477 20.7514 12.045 20.7514H11.9577C10.3551 20.7514 9.09277 20.7514 8.08834 20.6455C7.06146 20.5373 6.21808 20.3117 5.4901 19.8019C5.23926 19.6263 5.00476 19.4294 4.78906 19.2137L19.2137 4.78906C19.4294 5.00476 19.6263 5.23926 19.8019 5.4901Z',
  d6: 'M4 20H20V4H4V20Z',
  d7: 'M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V20C20.75 20.4142 20.4142 20.75 20 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4Z',
} as const;

export const IconStopStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-stroke-rounded IconStopStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStopDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-duotone-rounded IconStopDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStopTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-twotone-rounded IconStopTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconStopSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-solid-rounded IconStopSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStopBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-bulk-rounded IconStopBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStopStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-stroke-sharp IconStopStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStopSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stop-solid-sharp IconStopSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStop: TheIconSelfPack = {
  name: 'Stop',
  StrokeRounded: IconStopStrokeRounded,
  DuotoneRounded: IconStopDuotoneRounded,
  TwotoneRounded: IconStopTwotoneRounded,
  SolidRounded: IconStopSolidRounded,
  BulkRounded: IconStopBulkRounded,
  StrokeSharp: IconStopStrokeSharp,
  SolidSharp: IconStopSolidSharp,
};
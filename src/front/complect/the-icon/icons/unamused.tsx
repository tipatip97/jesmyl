import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 8C7.20949 8.5826 7.77476 9 8.43922 9C9.10367 9 9.66894 8.5826 9.87843 8M14.1216 8C14.3311 8.5826 14.8963 9 15.5608 9C16.2252 9 16.7905 8.5826 17 8',
  d2: 'M10 16L15 14',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.43942 8.25C8.09461 8.25 7.80952 8.0342 7.70596 7.74622C7.5658 7.35644 7.1362 7.15408 6.74642 7.29424C6.35664 7.4344 6.15429 7.864 6.29445 8.25378C6.60988 9.13099 7.45533 9.75 8.43942 9.75C9.42351 9.75 10.269 9.13099 10.5844 8.25378C10.7246 7.864 10.5222 7.4344 10.1324 7.29424C9.74264 7.15408 9.31304 7.35644 9.17288 7.74622C9.06932 8.0342 8.78423 8.25 8.43942 8.25ZM15.561 8.25C15.2162 8.25 14.9311 8.0342 14.8275 7.74622C14.6874 7.35644 14.2578 7.15408 13.868 7.29424C13.4782 7.4344 13.2759 7.864 13.416 8.25378C13.7314 9.13099 14.5769 9.75 15.561 9.75C16.5451 9.75 17.3905 9.13099 17.706 8.25378C17.8461 7.864 17.6438 7.4344 17.254 7.29424C16.8642 7.15408 16.4346 7.35644 16.2944 7.74622C16.1909 8.0342 15.9058 8.25 15.561 8.25ZM15.2787 14.6964C15.6633 14.5425 15.8504 14.1061 15.6966 13.7215C15.5427 13.3369 15.1062 13.1498 14.7217 13.3037L9.72166 15.3037C9.33707 15.4575 9.15001 15.894 9.30384 16.2786C9.45768 16.6631 9.89415 16.8502 10.2787 16.6964L15.2787 14.6964Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M8.43942 8.25C8.09461 8.25 7.80952 8.0342 7.70596 7.74622C7.5658 7.35644 7.1362 7.15408 6.74642 7.29424C6.35664 7.4344 6.15429 7.864 6.29445 8.25378C6.60988 9.13099 7.45533 9.75 8.43942 9.75C9.42351 9.75 10.269 9.13099 10.5844 8.25378C10.7246 7.864 10.5222 7.4344 10.1324 7.29424C9.74264 7.15408 9.31304 7.35644 9.17288 7.74622C9.06932 8.0342 8.78423 8.25 8.43942 8.25ZM15.561 8.25C15.2162 8.25 14.9311 8.0342 14.8275 7.74622C14.6874 7.35644 14.2578 7.15408 13.868 7.29424C13.4782 7.4344 13.2759 7.864 13.416 8.25378C13.7314 9.13099 14.5769 9.75 15.561 9.75C16.5451 9.75 17.3905 9.13099 17.706 8.25378C17.8461 7.864 17.6438 7.4344 17.254 7.29424C16.8642 7.15408 16.4346 7.35644 16.2944 7.74622C16.1909 8.0342 15.9058 8.25 15.561 8.25Z',
  d6: 'M15.6966 13.7217C15.8504 14.1062 15.6633 14.5427 15.2787 14.6966L10.2787 16.6966C9.89415 16.8504 9.45768 16.6633 9.30384 16.2787C9.15001 15.8942 9.33707 15.4577 9.72166 15.3038L14.7217 13.3038C15.1062 13.15 15.5427 13.3371 15.6966 13.7217Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.4399 8.25C8.09508 8.25 7.80999 8.0342 7.70644 7.74622L6.29492 8.25378C6.61035 9.13099 7.45581 9.75 8.4399 9.75C9.42399 9.75 10.2694 9.13099 10.5849 8.25378L9.17335 7.74622C9.0698 8.0342 8.78471 8.25 8.4399 8.25ZM15.5615 8.25C15.2167 8.25 14.9316 8.0342 14.828 7.74622L13.4165 8.25378C13.7319 9.13099 14.5774 9.75 15.5615 9.75C16.5456 9.75 17.391 9.13099 17.7064 8.25378L16.2949 7.74622C16.1914 8.0342 15.9063 8.25 15.5615 8.25ZM14.7207 13.3037L9.7207 15.3037L10.2778 16.6964L15.2778 14.6964L14.7207 13.3037Z',
} as const;

export const IconUnamusedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-stroke-rounded IconUnamusedStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconUnamusedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-duotone-rounded IconUnamusedDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconUnamusedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-twotone-rounded IconUnamusedTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUnamusedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-solid-rounded IconUnamusedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnamusedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-bulk-rounded IconUnamusedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnamusedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-stroke-sharp IconUnamusedStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconUnamusedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="unamused-solid-sharp IconUnamusedSolidSharp"
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

export const iconPackOfUnamused: TheIconSelfPack = {
  name: 'Unamused',
  StrokeRounded: IconUnamusedStrokeRounded,
  DuotoneRounded: IconUnamusedDuotoneRounded,
  TwotoneRounded: IconUnamusedTwotoneRounded,
  SolidRounded: IconUnamusedSolidRounded,
  BulkRounded: IconUnamusedBulkRounded,
  StrokeSharp: IconUnamusedStrokeSharp,
  SolidSharp: IconUnamusedSolidSharp,
};
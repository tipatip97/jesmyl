import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 9C7.20949 9.5826 7.77476 10 8.43922 10C9.10367 10 9.66894 9.5826 9.87843 9M14.1216 9C14.3311 9.5826 14.8963 10 15.5608 10C16.2252 10 16.7905 9.5826 17 9',
  d2: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.43942 9.25C8.09461 9.25 7.80952 9.0342 7.70596 8.74622C7.5658 8.35644 7.1362 8.15408 6.74642 8.29424C6.35664 8.4344 6.15429 8.864 6.29445 9.25378C6.60988 10.131 7.45533 10.75 8.43942 10.75C9.42351 10.75 10.269 10.131 10.5844 9.25378C10.7246 8.864 10.5222 8.4344 10.1324 8.29424C9.74264 8.15408 9.31304 8.35644 9.17288 8.74622C9.06932 9.0342 8.78423 9.25 8.43942 9.25ZM15.561 9.25C15.2162 9.25 14.9311 9.0342 14.8275 8.74622C14.6874 8.35644 14.2578 8.15408 13.868 8.29424C13.4782 8.4344 13.2759 8.864 13.416 9.25378C13.7314 10.131 14.5769 10.75 15.561 10.75C16.5451 10.75 17.3905 10.131 17.706 9.25378C17.8461 8.864 17.6438 8.4344 17.254 8.29424C16.8642 8.15408 16.4346 8.35644 16.2944 8.74622C16.1909 9.0342 15.9058 9.25 15.561 9.25ZM8.59974 14.5496C8.35099 14.2184 7.88084 14.1515 7.54964 14.4003C7.21843 14.649 7.1516 15.1192 7.40035 15.4504C8.44802 16.8453 10.1185 17.75 12 17.75C13.8816 17.75 15.5521 16.8453 16.5997 15.4504C16.8485 15.1192 16.7817 14.649 16.4505 14.4003C16.1192 14.1515 15.6491 14.2184 15.4003 14.5496C14.6238 15.5835 13.3898 16.25 12 16.25C10.6103 16.25 9.37631 15.5835 8.59974 14.5496Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M8.43942 9.25C8.09461 9.25 7.80952 9.0342 7.70596 8.74622C7.5658 8.35644 7.1362 8.15408 6.74642 8.29424C6.35664 8.4344 6.15429 8.864 6.29445 9.25378C6.60988 10.131 7.45533 10.75 8.43942 10.75C9.42351 10.75 10.269 10.131 10.5844 9.25378C10.7246 8.864 10.5222 8.4344 10.1324 8.29424C9.74264 8.15408 9.31304 8.35644 9.17288 8.74622C9.06932 9.0342 8.78423 9.25 8.43942 9.25ZM15.561 9.25C15.2162 9.25 14.9311 9.0342 14.8275 8.74622C14.6874 8.35644 14.2578 8.15408 13.868 8.29424C13.4782 8.4344 13.2759 8.864 13.416 9.25378C13.7314 10.131 14.5769 10.75 15.561 10.75C16.5451 10.75 17.3905 10.131 17.706 9.25378C17.8461 8.864 17.6438 8.4344 17.254 8.29424C16.8642 8.15408 16.4346 8.35644 16.2944 8.74622C16.1909 9.0342 15.9058 9.25 15.561 9.25Z',
  d6: 'M7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.4399 9.25C8.09508 9.25 7.80999 9.0342 7.70644 8.74622L6.29492 9.25378C6.61035 10.131 7.45581 10.75 8.4399 10.75C9.42399 10.75 10.2694 10.131 10.5849 9.25378L9.17335 8.74622C9.0698 9.0342 8.78471 9.25 8.4399 9.25ZM15.5615 9.25C15.2167 9.25 14.9316 9.0342 14.828 8.74622L13.4165 9.25378C13.7319 10.131 14.5774 10.75 15.5615 10.75C16.5456 10.75 17.391 10.131 17.7064 9.25378L16.2949 8.74622C16.1914 9.0342 15.9063 9.25 15.5615 9.25ZM15.4004 14.5498C14.6238 15.5838 13.3899 16.2502 12.0001 16.2502C10.6103 16.2502 9.37635 15.5838 8.59978 14.5498L7.40039 15.4506C8.44806 16.8455 10.1185 17.7502 12.0001 17.7502C13.8816 17.7502 15.5521 16.8455 16.5998 15.4506L15.4004 14.5498Z',
} as const;

export const IconRelieved01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-stroke-rounded IconRelieved01StrokeRounded"
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

export const IconRelieved01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-duotone-rounded IconRelieved01DuotoneRounded"
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

export const IconRelieved01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-twotone-rounded IconRelieved01TwotoneRounded"
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

export const IconRelieved01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-solid-rounded IconRelieved01SolidRounded"
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

export const IconRelieved01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-bulk-rounded IconRelieved01BulkRounded"
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

export const IconRelieved01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-stroke-sharp IconRelieved01StrokeSharp"
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

export const IconRelieved01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="relieved-01-solid-sharp IconRelieved01SolidSharp"
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

export const iconPackOfRelieved01: TheIconSelfPack = {
  name: 'Relieved01',
  StrokeRounded: IconRelieved01StrokeRounded,
  DuotoneRounded: IconRelieved01DuotoneRounded,
  TwotoneRounded: IconRelieved01TwotoneRounded,
  SolidRounded: IconRelieved01SolidRounded,
  BulkRounded: IconRelieved01BulkRounded,
  StrokeSharp: IconRelieved01StrokeSharp,
  SolidSharp: IconRelieved01SolidSharp,
};
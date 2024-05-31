import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 9.5C10 10.3284 9.32843 11 8.5 11C7.67157 11 7 10.3284 7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5Z',
  d2: 'M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z',
  d3: 'M9 16H15',
  d4: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 9.5C10 10.3284 9.32843 11 8.5 11C7.67157 11 7 10.3284 7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5ZM15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.5 8.75C8.08579 8.75 7.75 9.08579 7.75 9.5C7.75 9.91421 8.08579 10.25 8.5 10.25C8.91421 10.25 9.25 9.91421 9.25 9.5C9.25 9.08579 8.91421 8.75 8.5 8.75ZM6.25 9.5C6.25 8.25736 7.25736 7.25 8.5 7.25C9.74264 7.25 10.75 8.25736 10.75 9.5C10.75 10.7426 9.74264 11.75 8.5 11.75C7.25736 11.75 6.25 10.7426 6.25 9.5ZM15.5 8.75C15.0858 8.75 14.75 9.08579 14.75 9.5C14.75 9.91421 15.0858 10.25 15.5 10.25C15.9142 10.25 16.25 9.91421 16.25 9.5C16.25 9.08579 15.9142 8.75 15.5 8.75ZM13.25 9.5C13.25 8.25736 14.2574 7.25 15.5 7.25C16.7426 7.25 17.75 8.25736 17.75 9.5C17.75 10.7426 16.7426 11.75 15.5 11.75C14.2574 11.75 13.25 10.7426 13.25 9.5ZM9 15.25C8.58579 15.25 8.25 15.5858 8.25 16C8.25 16.4142 8.58579 16.75 9 16.75H15C15.4142 16.75 15.75 16.4142 15.75 16C15.75 15.5858 15.4142 15.25 15 15.25L9 15.25Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M8.5 8.75C8.08579 8.75 7.75 9.08579 7.75 9.5C7.75 9.91421 8.08579 10.25 8.5 10.25C8.91421 10.25 9.25 9.91421 9.25 9.5C9.25 9.08579 8.91421 8.75 8.5 8.75ZM6.25 9.5C6.25 8.25736 7.25736 7.25 8.5 7.25C9.74264 7.25 10.75 8.25736 10.75 9.5C10.75 10.7426 9.74264 11.75 8.5 11.75C7.25736 11.75 6.25 10.7426 6.25 9.5ZM15.5 8.75C15.0858 8.75 14.75 9.08579 14.75 9.5C14.75 9.91421 15.0858 10.25 15.5 10.25C15.9142 10.25 16.25 9.91421 16.25 9.5C16.25 9.08579 15.9142 8.75 15.5 8.75ZM13.25 9.5C13.25 8.25736 14.2574 7.25 15.5 7.25C16.7426 7.25 17.75 8.25736 17.75 9.5C17.75 10.7426 16.7426 11.75 15.5 11.75C14.2574 11.75 13.25 10.7426 13.25 9.5Z',
  d8: 'M8.25 16C8.25 15.5858 8.58579 15.25 9 15.25H15C15.4142 15.25 15.75 15.5858 15.75 16C15.75 16.4142 15.4142 16.75 15 16.75H9C8.58579 16.75 8.25 16.4142 8.25 16Z',
  d9: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.5 8.75C8.08579 8.75 7.75 9.08579 7.75 9.5C7.75 9.91421 8.08579 10.25 8.5 10.25C8.91421 10.25 9.25 9.91421 9.25 9.5C9.25 9.08579 8.91421 8.75 8.5 8.75ZM6.25 9.5C6.25 8.25736 7.25736 7.25 8.5 7.25C9.74264 7.25 10.75 8.25736 10.75 9.5C10.75 10.7426 9.74264 11.75 8.5 11.75C7.25736 11.75 6.25 10.7426 6.25 9.5ZM15.5 8.75C15.0858 8.75 14.75 9.08579 14.75 9.5C14.75 9.91421 15.0858 10.25 15.5 10.25C15.9142 10.25 16.25 9.91421 16.25 9.5C16.25 9.08579 15.9142 8.75 15.5 8.75ZM13.25 9.5C13.25 8.25736 14.2574 7.25 15.5 7.25C16.7426 7.25 17.75 8.25736 17.75 9.5C17.75 10.7426 16.7426 11.75 15.5 11.75C14.2574 11.75 13.25 10.7426 13.25 9.5ZM15 15.25L9 15.25V16.75H15L15 15.25Z',
} as const;

export const IconFlushedStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-stroke-rounded IconFlushedStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlushedDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-duotone-rounded IconFlushedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlushedTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-twotone-rounded IconFlushedTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlushedSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-solid-rounded IconFlushedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlushedBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-bulk-rounded IconFlushedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlushedStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-stroke-sharp IconFlushedStrokeSharp"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlushedSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flushed-solid-sharp IconFlushedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlushed: TheIconSelfPack = {
  name: 'Flushed',
  StrokeRounded: IconFlushedStrokeRounded,
  DuotoneRounded: IconFlushedDuotoneRounded,
  TwotoneRounded: IconFlushedTwotoneRounded,
  SolidRounded: IconFlushedSolidRounded,
  BulkRounded: IconFlushedBulkRounded,
  StrokeSharp: IconFlushedStrokeSharp,
  SolidSharp: IconFlushedSolidSharp,
};
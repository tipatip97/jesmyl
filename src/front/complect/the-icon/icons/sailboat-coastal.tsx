import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 18C4.59373 17.0625 3.80546 15.9647 3.39377 14.9482C3.10599 14.2376 2.96211 13.8823 3.2594 13.4411C3.55669 13 4.0378 13 5 13L19 13C19.9622 13 20.4433 13 20.7406 13.4411C21.0379 13.8823 20.894 14.2376 20.6062 14.9482C20.1945 15.9647 19.4063 17.0625 18 18',
  d2: 'M15.8417 3.46469L17.9109 6.30956C18.7796 7.50391 19.2139 8.10108 18.896 8.55054C18.5782 9 17.7215 9 16.0082 9L10.6283 9C8.44171 9 7.3484 9 7.06067 8.46141C6.77293 7.92283 7.52225 7.27894 9.02088 5.99117L12.3316 3.1463C13.2563 2.35171 13.7186 1.95441 14.2671 2.00416C14.8156 2.05391 15.1576 2.52417 15.8417 3.46469Z',
  d3: 'M14 13L14 2',
  d4: 'M2 21L22 21',
  d5: 'M6 18C4.59373 17.0625 3.80546 15.9647 3.39377 14.9482C3.10599 14.2376 2.96211 13.8823 3.2594 13.4411C3.55669 13 4.0378 13 5 13L19 13C19.9622 13 20.4433 13 20.7406 13.4411C21.0379 13.8823 20.894 14.2376 20.6062 14.9482C20.1945 15.9647 19.4063 17.0625 18 18L6 18Z',
  d6: 'M6.00047 18C4.5942 17.0625 3.80593 15.9647 3.39424 14.9482C3.10646 14.2376 2.96258 13.8823 3.25987 13.4411C3.55716 13 4.03827 13 5.00047 13H19.0005C19.9627 13 20.4438 13 20.7411 13.4411C21.0384 13.8823 20.8945 14.2376 20.6067 14.9482C20.195 15.9647 19.4068 17.0625 18.0005 18',
  d7: 'M2 21H22',
  d8: 'M14 13V2M15.8417 3.46469L17.9109 6.30956C18.7796 7.50391 19.2139 8.10108 18.896 8.55054C18.5782 9 17.7215 9 16.0082 9H10.6283C8.44171 9 7.3484 9 7.06067 8.46141C6.77293 7.92283 7.52225 7.27894 9.02088 5.99117L12.3316 3.1463C13.2563 2.35171 13.7186 1.95441 14.2671 2.00416C14.8156 2.05391 15.1576 2.52417 15.8417 3.46469Z',
  d9: 'M20.2661 12.5695C20.6932 12.6543 21.0805 12.853 21.3629 13.272C21.6177 13.65 21.6971 14.0386 21.635 14.4545C21.5867 14.7776 21.4483 15.1187 21.3227 15.4282L21.3227 15.4283C20.9739 16.2895 20.3716 17.2387 19.4601 18.0642L19.4294 18.092C19.1003 18.3903 18.8342 18.6315 18.3559 18.8159C17.8762 19.0009 17.4277 19.0005 16.8717 19.0001L7.12905 19.0001H7.12905C6.57311 19.0005 6.12458 19.0009 5.64493 18.8159C5.16659 18.6315 4.90049 18.3903 4.57143 18.0921L4.54073 18.0642C3.62923 17.2387 3.02691 16.2895 2.67814 15.4283C2.55252 15.1187 2.4141 14.7776 2.36582 14.4545C2.30368 14.0386 2.38311 13.65 2.63785 13.272C2.92026 12.853 3.30755 12.6543 3.73469 12.5695C4.08618 12.4997 4.51202 12.4999 4.94275 12.5L19.058 12.5C19.4888 12.4999 19.9146 12.4997 20.2661 12.5695Z',
  d10: 'M13.0352 1.87752C13.4108 1.63635 13.8315 1.46162 14.3348 1.50727C14.8449 1.55354 15.2223 1.80632 15.5358 2.12206C15.8164 2.40475 16.1019 2.79744 16.4175 3.23148L18.5558 6.17128C18.9571 6.72295 19.3135 7.21287 19.5191 7.62393C19.7356 8.05668 19.9126 8.66199 19.5083 9.23363C19.1515 9.73813 18.5639 9.8786 18.0647 9.93852C17.5517 10.0001 16.8723 10.0001 16.0586 10L10.5757 10C9.52698 10.0001 8.6721 10.0001 8.04626 9.92776C7.47483 9.86173 6.74225 9.7072 6.39909 9.06487C6.21744 8.72485 6.21324 8.36515 6.32479 8.03759C6.42444 7.74497 6.61219 7.48659 6.80501 7.26498C7.1798 6.83422 7.77533 6.32253 8.48261 5.71483L11.88 2.79547L11.88 2.79547C12.3103 2.42563 12.6909 2.09853 13.0352 1.87752Z',
  d11: 'M14 2.25C14.5523 2.25 15 2.69772 15 3.25L15 13.25C15 13.8023 14.5523 14.25 14 14.25C13.4477 14.25 13 13.8023 13 13.25L13 3.25C13 2.69772 13.4477 2.25 14 2.25Z',
  d12: 'M2.25 20.5L21.7504 20.5C22.3027 20.5 22.7504 20.9477 22.7504 21.5C22.7504 22.0523 22.3027 22.5 21.7504 22.5L2.25 22.5C1.69772 22.5 1.25 22.0523 1.25 21.5C1.25 20.9477 1.69771 20.5 2.25 20.5Z',
  d13: 'M13 10H15L15 13.25C15 13.8023 14.5523 14.25 14 14.25C13.4477 14.25 13 13.8023 13 13.25V10Z',
  d14: 'M6 19C3.6 17.4 3 15.3333 3 14L21 14C21 15.3333 20.4 17.4 18 19',
  d15: 'M14 2L18 9.99999L7 10L14 2Z',
  d16: 'M14 14L14 2',
  d17: 'M2 22L22 22',
  d18: 'M13.25 10.75L7.25001 10.75C6.95573 10.75 6.68864 10.5779 6.56704 10.3099C6.44544 10.042 6.49179 9.72762 6.68558 9.50614L13.6856 1.50613C13.8501 1.31806 14.0976 1.22431 14.3454 1.25611C14.5933 1.2879 14.8091 1.44108 14.9208 1.6646L18.9208 9.66459C19.0371 9.89708 19.0246 10.1732 18.888 10.3943C18.7513 10.6154 18.5099 10.75 18.25 10.75L15.25 10.75V14H13.25L13.25 10.75Z',
  d19: 'M22 22.75L2 22.75L2 20.75L22 20.75L22 22.75Z',
  d20: 'M4.34198 19.25H20.158C20.6865 18.591 21.0715 17.8709 21.3471 17.1768C21.8334 15.9519 22 14.7577 22 14V13.25L2.5 13.25V14C2.5 14.7577 2.66661 15.952 3.15294 17.1768C3.42854 17.8709 3.81349 18.591 4.34198 19.25Z',
} as const;

export const IconSailboatCoastalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-stroke-rounded IconSailboatCoastalStrokeRounded"
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
        strokeLinecap="round" 
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

export const IconSailboatCoastalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-duotone-rounded IconSailboatCoastalDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSailboatCoastalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-twotone-rounded IconSailboatCoastalTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatCoastalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-solid-rounded IconSailboatCoastalSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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

export const IconSailboatCoastalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-bulk-rounded IconSailboatCoastalBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatCoastalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-stroke-sharp IconSailboatCoastalStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSailboatCoastalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sailboat-coastal-solid-sharp IconSailboatCoastalSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSailboatCoastal: TheIconSelfPack = {
  name: 'SailboatCoastal',
  StrokeRounded: IconSailboatCoastalStrokeRounded,
  DuotoneRounded: IconSailboatCoastalDuotoneRounded,
  TwotoneRounded: IconSailboatCoastalTwotoneRounded,
  SolidRounded: IconSailboatCoastalSolidRounded,
  BulkRounded: IconSailboatCoastalBulkRounded,
  StrokeSharp: IconSailboatCoastalStrokeSharp,
  SolidSharp: IconSailboatCoastalSolidSharp,
};
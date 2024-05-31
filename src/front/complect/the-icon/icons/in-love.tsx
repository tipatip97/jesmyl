import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 2.01228C12.3344 2.00413 12.1677 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.1368 21.8906 10.299 21.685 9.5',
  d2: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d3: 'M10 9.5H8.70711C8.25435 9.5 7.82014 9.67986 7.5 10M14 9.5H15.2929C15.7456 9.5 16.1799 9.67986 16.5 10',
  d4: 'M15.8881 2.33117C16.8267 1.78287 17.6459 2.00383 18.138 2.35579C18.3398 2.50011 18.4406 2.57227 18.5 2.57227C18.5594 2.57227 18.6602 2.50011 18.862 2.35579C19.3541 2.00383 20.1733 1.78287 21.1119 2.33117C22.3437 3.05077 22.6224 5.42474 19.7812 7.42757C19.24 7.80905 18.9694 7.99979 18.5 7.99979C18.0306 7.99979 17.76 7.80905 17.2188 7.42757C14.3776 5.42474 14.6563 3.05077 15.8881 2.33117Z',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 10.0998 21.47 8.32341 20.5498 6.81055C20.324 7.01862 20.0685 7.225 19.7812 7.42757C19.24 7.80905 18.9694 7.99979 18.5 7.99979C18.0306 7.99979 17.76 7.80905 17.2188 7.42757C14.6972 5.65006 14.6331 3.58022 15.5117 2.63397C14.4191 2.22413 13.2357 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.6833 1.25 13.3517 1.31375 13.9995 1.43562C14.2959 1.49137 14.4441 1.51924 14.486 1.61768C14.5279 1.71612 14.4327 1.86133 14.2425 2.15175C13.7954 2.83414 13.6147 3.69859 13.7388 4.57944C13.9336 5.96284 14.8438 7.34388 16.4698 8.49012L16.5559 8.55106C17.0265 8.88533 17.6101 9.29979 18.5 9.29979C19.3899 9.29979 19.9735 8.88533 20.4441 8.55107L20.5302 8.49012C20.818 8.28721 21.0834 8.07693 21.3264 7.86059C21.5304 7.67897 21.6324 7.58815 21.7335 7.61188C21.8347 7.63561 21.8824 7.75428 21.9778 7.99162C22.4759 9.2303 22.75 10.5831 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.70711 8.75C8.05544 8.75 7.43047 9.00887 6.96967 9.46967C6.67678 9.76256 6.67678 10.2374 6.96967 10.5303C7.26256 10.8232 7.73744 10.8232 8.03033 10.5303C8.20982 10.3508 8.45327 10.25 8.70711 10.25H10C10.4142 10.25 10.75 9.91421 10.75 9.5C10.75 9.08579 10.4142 8.75 10 8.75H8.70711ZM14 8.75C13.5858 8.75 13.25 9.08579 13.25 9.5C13.25 9.91421 13.5858 10.25 14 10.25H15.2929C15.5467 10.25 15.7902 10.3508 15.9697 10.5303C16.2626 10.8232 16.7374 10.8232 17.0303 10.5303C17.3232 10.2374 17.3232 9.76256 17.0303 9.46967C16.5695 9.00887 15.9446 8.75 15.2929 8.75H14ZM8.59969 14.5496C8.35094 14.2184 7.8808 14.1516 7.54959 14.4003C7.21839 14.6491 7.15155 15.1192 7.40031 15.4504C8.44798 16.8453 10.1184 17.75 12 17.75C13.8816 17.75 15.552 16.8453 16.5997 15.4504C16.8484 15.1192 16.7816 14.6491 16.4504 14.4003C16.1192 14.1516 15.6491 14.2184 15.4003 14.5496C14.6237 15.5836 13.3898 16.25 12 16.25C10.6102 16.25 9.37627 15.5836 8.59969 14.5496Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 10.5831 22.4759 9.2303 21.9778 7.99162C21.8824 7.75428 21.8347 7.63561 21.7335 7.61188C21.6324 7.58815 21.5304 7.67897 21.3264 7.86059C21.0834 8.07693 20.818 8.28721 20.5302 8.49012L20.4441 8.55107C19.9735 8.88533 19.3899 9.29979 18.5 9.29979C17.6101 9.29979 17.0265 8.88533 16.5559 8.55106L16.4698 8.49012C14.8438 7.34388 13.9336 5.96284 13.7388 4.57944C13.6147 3.69859 13.7954 2.83414 14.2425 2.15175C14.4327 1.86133 14.5279 1.71612 14.486 1.61768C14.4441 1.51924 14.2959 1.49136 13.9995 1.43562C13.3517 1.31375 12.6833 1.25 12 1.25Z',
  d8: 'M6.96967 9.46967C7.43047 9.00887 8.05544 8.75 8.70711 8.75H10C10.4142 8.75 10.75 9.08579 10.75 9.5C10.75 9.91421 10.4142 10.25 10 10.25H8.70711C8.45327 10.25 8.20982 10.3508 8.03033 10.5303C7.73744 10.8232 7.26256 10.8232 6.96967 10.5303C6.67678 10.2374 6.67678 9.76256 6.96967 9.46967ZM13.25 9.5C13.25 9.08579 13.5858 8.75 14 8.75H15.2929C15.9446 8.75 16.5695 9.00887 17.0303 9.46967C17.3232 9.76256 17.3232 10.2374 17.0303 10.5303C16.7374 10.8232 16.2626 10.8232 15.9697 10.5303C15.7902 10.3508 15.5467 10.25 15.2929 10.25H14C13.5858 10.25 13.25 9.91421 13.25 9.5ZM7.54959 14.4003C7.8808 14.1516 8.35094 14.2184 8.59969 14.5496C9.37627 15.5836 10.6102 16.25 12 16.25C13.3898 16.25 14.6237 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4504 14.4003C16.7816 14.6491 16.8484 15.1192 16.5997 15.4504C15.552 16.8453 13.8816 17.75 12 17.75C10.1184 17.75 8.44798 16.8453 7.40031 15.4504C7.15155 15.1192 7.21839 14.6491 7.54959 14.4003Z',
  d9: 'M20.9002 2.24823C19.5031 1.53461 18.5 2.58657 18.5 2.58657C18.5 2.58657 17.4968 1.53461 16.0997 2.24823C14.4076 3.11256 14.2861 6.49734 18.5 8C22.714 6.49734 22.5924 3.11256 20.9002 2.24823Z',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 10.3511 22.3788 8.7889 21.7153 7.39244C21.1408 7.79547 20.4589 8.14608 19.6701 8.42737L19.2502 8.57708L18.8304 8.42737C16.4432 7.57611 15.0347 6.09001 14.6225 4.43722C14.3819 3.47281 14.5052 2.46991 14.9589 1.66236C14.0189 1.39381 13.0263 1.25 12 1.25ZM12.0001 16.2502C13.3899 16.2502 14.6238 15.5838 15.4004 14.5498L16.5998 15.4506C15.5521 16.8455 13.8816 17.7502 12.0001 17.7502C10.1185 17.7502 8.44806 16.8455 7.40039 15.4506L8.59978 14.5498C9.37635 15.5838 10.6103 16.2502 12.0001 16.2502ZM8.70619 8.75C8.05452 8.75 7.42955 9.00887 6.96875 9.46967L8.02941 10.5303C8.2089 10.3508 8.45235 10.25 8.70619 10.25H9.99908V8.75H8.70619ZM13.9991 10.25H15.292C15.5458 10.25 15.7893 10.3508 15.9688 10.5303L17.0294 9.46967C16.5686 9.00887 15.9436 8.75 15.292 8.75H13.9991V10.25Z',
  d11: 'M21.6502 1.49823C20.2531 0.784609 19.25 1.83657 19.25 1.83657C19.25 1.83657 18.2468 0.784606 16.8497 1.49823C15.1576 2.36256 15.0361 5.74734 19.25 7.25C23.464 5.74734 23.3424 2.36256 21.6502 1.49823Z',
} as const;

export const IconInLoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-stroke-rounded IconInLoveStrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconInLoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-duotone-rounded IconInLoveDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInLoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-twotone-rounded IconInLoveTwotoneRounded"
    >
      <path 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconInLoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-solid-rounded IconInLoveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInLoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-bulk-rounded IconInLoveBulkRounded"
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
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInLoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-stroke-sharp IconInLoveStrokeSharp"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInLoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="in-love-solid-sharp IconInLoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInLove: TheIconSelfPack = {
  name: 'InLove',
  StrokeRounded: IconInLoveStrokeRounded,
  DuotoneRounded: IconInLoveDuotoneRounded,
  TwotoneRounded: IconInLoveTwotoneRounded,
  SolidRounded: IconInLoveSolidRounded,
  BulkRounded: IconInLoveBulkRounded,
  StrokeSharp: IconInLoveStrokeSharp,
  SolidSharp: IconInLoveSolidSharp,
};
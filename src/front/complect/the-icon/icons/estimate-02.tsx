import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 11V7.3C17.5 5.03726 17.5 3.90589 16.7247 3.20294C15.9494 2.5 14.7016 2.5 12.2059 2.5H7.79412C5.29845 2.5 4.05061 2.5 3.27531 3.20294C2.5 3.90589 2.5 5.03726 2.5 7.3V13.7C2.5 15.9627 2.5 17.0941 3.27531 17.7971C4.05061 18.5 5.29845 18.5 7.79412 18.5H11',
  d2: 'M5.5 6.5L14.5 6.5',
  d3: 'M5.5 10.5H6.5',
  d4: 'M9.5 10.5H10.5',
  d5: 'M13.5 10.5H14.5',
  d6: 'M5.5 14.5H6.5',
  d7: 'M9.5 14.5H10.5',
  d8: 'M18.5 18L17.5 17.5V16',
  d9: 'M13.6206 18.4787C13.5418 18.1655 13.5 17.8377 13.5 17.5C13.5 15.2914 15.2899 13.5009 17.4983 13.5C17.5 13.1878 17.5 12.855 17.5 12.5V7.3C17.5 5.03726 17.5 3.90589 16.7247 3.20294C15.9494 2.5 14.7016 2.5 12.2059 2.5H7.79412C5.29845 2.5 4.05061 2.5 3.27531 3.20294C2.5 3.90589 2.5 5.03726 2.5 7.3V13.7C2.5 15.9627 2.5 17.0941 3.27531 17.7971C4.05061 18.5 5.29845 18.5 7.79412 18.5H11.5C12.3181 18.5 13.0179 18.5 13.6206 18.4787Z',
  d10: 'M17.5 11.75C14.3244 11.75 11.75 14.3244 11.75 17.5C11.75 18.1102 11.8451 18.6982 12.0212 19.25H7.74435C6.53882 19.25 5.56512 19.25 4.79883 19.1566C4.00736 19.0601 3.32354 18.8532 2.77154 18.3527C2.20905 17.8427 1.96639 17.1945 1.85503 16.4435C1.74995 15.7348 1.74997 14.84 1.75 13.7579L1.75 7.24211C1.74997 6.1601 1.74995 5.2652 1.85503 4.55654C1.96639 3.80555 2.20905 3.15732 2.77154 2.64732C3.32354 2.14684 4.00736 1.93986 4.79883 1.84338C5.56513 1.74997 6.53879 1.74998 7.74435 1.75H12.2556C13.4612 1.74998 14.4349 1.74997 15.2012 1.84338C15.9926 1.93986 16.6765 2.14684 17.2285 2.64732C17.791 3.15732 18.0336 3.80555 18.145 4.55654C18.2501 5.2652 18.25 6.16003 18.25 7.24204V11.7985C18.0045 11.7665 17.7542 11.75 17.5 11.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75L14.5 5.75C14.9142 5.75 15.25 6.08579 15.25 6.5C15.25 6.91421 14.9142 7.25 14.5 7.25L5.5 7.25C5.08579 7.25 4.75 6.91421 4.75 6.5ZM5.5 9.75C5.08579 9.75 4.75 10.0858 4.75 10.5C4.75 10.9142 5.08579 11.25 5.5 11.25H6.5C6.91421 11.25 7.25 10.9142 7.25 10.5C7.25 10.0858 6.91421 9.75 6.5 9.75H5.5ZM8.75 10.5C8.75 10.0858 9.08579 9.75 9.5 9.75H10.5C10.9142 9.75 11.25 10.0858 11.25 10.5C11.25 10.9142 10.9142 11.25 10.5 11.25H9.5C9.08579 11.25 8.75 10.9142 8.75 10.5ZM13.5 9.75C13.0858 9.75 12.75 10.0858 12.75 10.5C12.75 10.9142 13.0858 11.25 13.5 11.25H14.5C14.9142 11.25 15.25 10.9142 15.25 10.5C15.25 10.0858 14.9142 9.75 14.5 9.75H13.5ZM4.75 14.5C4.75 14.0858 5.08579 13.75 5.5 13.75H6.5C6.91421 13.75 7.25 14.0858 7.25 14.5C7.25 14.9142 6.91421 15.25 6.5 15.25H5.5C5.08579 15.25 4.75 14.9142 4.75 14.5ZM9.5 13.75C9.08579 13.75 8.75 14.0858 8.75 14.5C8.75 14.9142 9.08579 15.25 9.5 15.25H10.5C10.9142 15.25 11.25 14.9142 11.25 14.5C11.25 14.0858 10.9142 13.75 10.5 13.75H9.5Z',
  d11: 'M17.5 12.75C14.8766 12.75 12.75 14.8766 12.75 17.5C12.75 20.1234 14.8766 22.25 17.5 22.25C20.1234 22.25 22.25 20.1234 22.25 17.5C22.25 14.8766 20.1234 12.75 17.5 12.75ZM18.25 16C18.25 15.5858 17.9142 15.25 17.5 15.25C17.0858 15.25 16.75 15.5858 16.75 16V17.5C16.75 17.7841 16.9105 18.0438 17.1646 18.1708L18.1646 18.6708C18.5351 18.8561 18.9856 18.7059 19.1708 18.3354C19.3561 17.9649 19.2059 17.5144 18.8354 17.3292L18.25 17.0365V16Z',
  d12: 'M17.5 11.75C14.3244 11.75 11.75 14.3244 11.75 17.5C11.75 18.1102 11.8451 18.6982 12.0212 19.25H7.74435C6.53882 19.25 5.56511 19.25 4.79883 19.1566C4.00736 19.0601 3.32354 18.8532 2.77154 18.3527C2.20905 17.8427 1.96639 17.1945 1.85503 16.4435C1.74994 15.7348 1.74997 14.84 1.75 13.7579V7.24211C1.74997 6.1601 1.74994 5.2652 1.85503 4.55654C1.96639 3.80555 2.20905 3.15732 2.77154 2.64732C3.32354 2.14685 4.00736 1.93986 4.79883 1.84338C5.56513 1.74997 6.53879 1.74998 7.74435 1.75H12.2556C13.4612 1.74998 14.4349 1.74997 15.2012 1.84338C15.9926 1.93986 16.6765 2.14685 17.2285 2.64732C17.791 3.15732 18.0336 3.80555 18.145 4.55654C18.2501 5.2652 18.25 6.16003 18.25 7.24204V11.7985C18.0045 11.7665 17.7542 11.75 17.5 11.75Z',
  d13: 'M4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75L14.5 5.75C14.9142 5.75 15.25 6.08579 15.25 6.5C15.25 6.91421 14.9142 7.25 14.5 7.25L5.5 7.25C5.08579 7.25 4.75 6.91421 4.75 6.5Z',
  d14: 'M4.75 10.5C4.75 10.0858 5.08579 9.75 5.5 9.75H6.5C6.91421 9.75 7.25 10.0858 7.25 10.5C7.25 10.9142 6.91421 11.25 6.5 11.25H5.5C5.08579 11.25 4.75 10.9142 4.75 10.5Z',
  d15: 'M8.75 10.5C8.75 10.0858 9.08579 9.75 9.5 9.75H10.5C10.9142 9.75 11.25 10.0858 11.25 10.5C11.25 10.9142 10.9142 11.25 10.5 11.25H9.5C9.08579 11.25 8.75 10.9142 8.75 10.5Z',
  d16: 'M12.75 10.5C12.75 10.0858 13.0858 9.75 13.5 9.75H14.5C14.9142 9.75 15.25 10.0858 15.25 10.5C15.25 10.9142 14.9142 11.25 14.5 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5Z',
  d17: 'M4.75 14.5C4.75 14.0858 5.08579 13.75 5.5 13.75H6.5C6.91421 13.75 7.25 14.0858 7.25 14.5C7.25 14.9142 6.91421 15.25 6.5 15.25H5.5C5.08579 15.25 4.75 14.9142 4.75 14.5Z',
  d18: 'M8.75 14.5C8.75 14.0858 9.08579 13.75 9.5 13.75H10.5C10.9142 13.75 11.25 14.0858 11.25 14.5C11.25 14.9142 10.9142 15.25 10.5 15.25H9.5C9.08579 15.25 8.75 14.9142 8.75 14.5Z',
  d19: 'M17.5 11V2.5L2.5 2.5V18.5H11',
  d20: 'M17.75 11.7553C14.6903 11.8862 12.25 14.4081 12.25 17.5C12.25 18.1102 12.345 18.6982 12.5212 19.25H1.25L1.25 1.75L17.75 1.75L17.75 11.7553ZM4.25 5.75L14.75 5.75V7.25L4.25 7.25V5.75ZM6.75 9.75H4.25L4.25 11.25H6.75V9.75ZM8.25 9.75L10.75 9.75V11.25H8.25V9.75ZM14.75 9.75H12.25V11.25H14.75V9.75ZM4.25 13.75H6.75V15.25H4.25L4.25 13.75ZM10.75 13.75H8.25V15.25L10.75 15.25V13.75Z',
  d21: 'M18 12.75C15.3766 12.75 13.25 14.8766 13.25 17.5C13.25 20.1234 15.3766 22.25 18 22.25C20.6234 22.25 22.75 20.1234 22.75 17.5C22.75 14.8766 20.6234 12.75 18 12.75ZM18.75 17.0365V15.25H17.25V17.9635L19.3354 19.0062L20.0062 17.6646L18.75 17.0365Z',
} as const;

export const IconEstimate02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-stroke-rounded IconEstimate02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="17.5" 
        cy="17.5" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-duotone-rounded IconEstimate02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="17.5" 
        cy="17.5" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-twotone-rounded IconEstimate02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="17.5" 
        cy="17.5" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-solid-rounded IconEstimate02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-bulk-rounded IconEstimate02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-stroke-sharp IconEstimate02StrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="17.5" 
        cy="17.5" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconEstimate02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="estimate-02-solid-sharp IconEstimate02SolidSharp"
    >
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

export const iconPackOfEstimate02: TheIconSelfPack = {
  name: 'Estimate02',
  StrokeRounded: IconEstimate02StrokeRounded,
  DuotoneRounded: IconEstimate02DuotoneRounded,
  TwotoneRounded: IconEstimate02TwotoneRounded,
  SolidRounded: IconEstimate02SolidRounded,
  BulkRounded: IconEstimate02BulkRounded,
  StrokeSharp: IconEstimate02StrokeSharp,
  SolidSharp: IconEstimate02SolidSharp,
};
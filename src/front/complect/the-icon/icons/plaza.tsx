import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 22L22 22',
  d2: 'M4 22V6.75122C4 6.12696 4 5.81484 4.16802 5.56401C4.33604 5.31317 4.63861 5.17359 5.24377 4.89441L9.74377 2.81844C11.2032 2.14517 11.9329 1.80854 12.4664 2.11279C13 2.41703 13 3.16977 13 4.67525V22',
  d3: 'M20 22V11.2361C20 10.6347 20 10.334 19.8258 10.0923C19.6515 9.85065 19.3377 9.71617 18.7102 9.44721L13 7',
  d4: 'M7.5 9L9.5 9M7.5 13H9.5M7.5 17H9.5',
  d5: 'M6.10557 5.89441L10.1056 3.81844C11.4028 3.14517 12.0515 2.80854 12.5257 3.11279C13 3.41703 13 4.16977 13 5.67525V21H5V7.75122C5 7.12696 5 6.81484 5.14935 6.56401C5.2987 6.31317 5.56766 6.17359 6.10557 5.89441Z',
  d6: 'M3 21H21',
  d7: 'M5 21V7.75122C5 7.12696 5 6.81484 5.14935 6.56401C5.2987 6.31317 5.56766 6.17359 6.10557 5.89441L10.1056 3.81844C11.4028 3.14517 12.0515 2.80854 12.5257 3.11279C13 3.41703 13 4.16977 13 5.67525V21',
  d8: 'M19 21V12.2361C19 11.6347 19 11.334 18.8507 11.0923C18.7013 10.8507 18.4323 10.7162 17.8944 10.4472L13 8',
  d9: 'M8.5 9L9.5 9M8.5 13H9.5M8.5 17H9.5',
  d10: 'M2.5 20.75C2.5 20.1977 2.94772 19.75 3.5 19.75H20.5C21.0523 19.75 21.5 20.1977 21.5 20.75C21.5 21.3023 21.0523 21.75 20.5 21.75H3.5C2.94772 21.75 2.5 21.3023 2.5 20.75Z',
  d11: 'M12.1058 7.30301C12.3528 6.80903 12.9535 6.6088 13.4474 6.85579L18.3419 9.30301C18.353 9.30859 18.3642 9.31417 18.3754 9.31976C18.6152 9.4396 18.8577 9.56082 19.0553 9.68653C19.2816 9.83053 19.5196 10.0225 19.7015 10.3168C19.8834 10.6111 19.9487 10.9098 19.9762 11.1767C20.0003 11.4096 20.0003 11.6807 20.0002 11.9488C20.0002 11.9613 20.0002 11.9738 20.0002 11.9863V20.7502C20.0002 21.3025 19.5525 21.7502 19.0002 21.7502C18.4479 21.7502 18.0002 21.3025 18.0002 20.7502V11.9863C18.0002 11.6651 17.999 11.4997 17.9869 11.3823C17.9867 11.3805 17.9865 11.3786 17.9863 11.3769C17.9848 11.3759 17.9832 11.3749 17.9816 11.3739C17.8821 11.3106 17.7348 11.2355 17.4474 11.0919L12.553 8.64465C12.059 8.39766 11.8588 7.79698 12.1058 7.30301Z',
  d12: 'M13.1807 2.48152C12.6558 2.1448 12.0956 2.23179 11.6331 2.38889C11.195 2.53769 10.6661 2.81224 10.0621 3.12575L5.98214 5.24323C5.73727 5.37028 5.50499 5.4908 5.31842 5.61401C5.10924 5.75216 4.90701 5.92489 4.75493 6.18031C4.60385 6.43406 4.54718 6.69411 4.52237 6.94324C4.49995 7.16831 4.49997 7.43482 4.5 7.7205L4.5 21C4.5 21.4142 4.83579 21.75 5.25 21.75H13.25C13.6642 21.75 14 21.4142 14 21L14 5.61931C14.0001 4.91449 14.0001 4.3052 13.9332 3.83734C13.8637 3.35171 13.6961 2.81213 13.1807 2.48152ZM8.75 8.25001C8.33579 8.25001 8 8.5858 8 9.00001C8 9.41423 8.33579 9.75001 8.75 9.75001H9.75C10.1642 9.75001 10.5 9.41423 10.5 9.00001C10.5 8.5858 10.1642 8.25001 9.75 8.25001H8.75ZM8.75 12.25C8.33579 12.25 8 12.5858 8 13C8 13.4142 8.33579 13.75 8.75 13.75H9.75C10.1642 13.75 10.5 13.4142 10.5 13C10.5 12.5858 10.1642 12.25 9.75 12.25H8.75ZM8.75 16.25C8.33579 16.25 8 16.5858 8 17C8 17.4142 8.33579 17.75 8.75 17.75H9.75C10.1642 17.75 10.5 17.4142 10.5 17C10.5 16.5858 10.1642 16.25 9.75 16.25H8.75Z',
  d13: 'M14 7.13186L18.3419 9.30279L18.3754 9.31954C18.6152 9.43938 18.8577 9.56061 19.0553 9.68631C19.2816 9.83031 19.5196 10.0223 19.7015 10.3166C19.8834 10.6109 19.9487 10.9096 19.9762 11.1764C20.0003 11.4093 20.0003 11.6805 20.0002 11.9486V11.9486L20.0002 11.9861V20.75C20.0002 21.3023 19.5525 21.75 19.0002 21.75C18.4479 21.75 18.0002 21.3023 18.0002 20.75V11.9861C18.0002 11.6648 17.999 11.4995 17.9868 11.3821L17.9863 11.3767L17.9816 11.3737C17.8821 11.3104 17.7347 11.2353 17.4474 11.0916L14 9.36793L14 7.13186Z',
  d14: 'M11.6331 2.38887C12.0956 2.23177 12.6558 2.14478 13.1807 2.4815C13.6961 2.81212 13.8637 3.3517 13.9332 3.83733C14.0001 4.30519 14.0001 4.91448 14 5.61929L14 21C14 21.4142 13.6642 21.75 13.25 21.75H5.25C4.83579 21.75 4.5 21.4142 4.5 21L4.5 7.72048C4.49997 7.4348 4.49995 7.1683 4.52237 6.94323C4.54718 6.69409 4.60385 6.43405 4.75493 6.18029C4.90701 5.92488 5.10924 5.75215 5.31842 5.614C5.50499 5.49078 5.73727 5.37026 5.98214 5.24322L10.0621 3.12574C10.6661 2.81223 11.195 2.53768 11.6331 2.38887Z',
  d15: 'M8 9C8 8.58579 8.33579 8.25 8.75 8.25L9.75 8.25C10.1642 8.25 10.5 8.58579 10.5 9C10.5 9.41421 10.1642 9.75 9.75 9.75L8.75 9.75C8.33579 9.75 8 9.41421 8 9ZM8 13C8 12.5858 8.33579 12.25 8.75 12.25H9.75C10.1642 12.25 10.5 12.5858 10.5 13C10.5 13.4142 10.1642 13.75 9.75 13.75H8.75C8.33579 13.75 8 13.4142 8 13ZM8 17C8 16.5858 8.33579 16.25 8.75 16.25H9.75C10.1642 16.25 10.5 16.5858 10.5 17C10.5 17.4142 10.1642 17.75 9.75 17.75H8.75C8.33579 17.75 8 17.4142 8 17Z',
  d16: 'M3 20.9824H21',
  d17: 'M19.0001 20.983V10.99L12.9146 7.81543',
  d18: 'M7.5 8.99072H10.5M7.5 12.9879H10.5M7.5 16.9851H10.5',
  d19: 'M5.01904 20.999V6.44668L12.9006 3.00709C12.9072 3.0042 12.9146 3.00904 12.9146 3.01625V20.999',
  d20: 'M21 21.75H3V19.75H21V21.75Z',
  d21: 'M17.75 11.7167L12.2017 8.82033L13.1272 7.04736L19.75 10.5046V21.1106H17.75V11.7167Z',
  d22: 'M13.75 3C13.75 2.74689 13.6223 2.51086 13.4105 2.37232C13.1987 2.23378 12.9313 2.21143 12.6994 2.31288L4.25 6.00949L4.25 21H13.75L13.75 3ZM7.5 9.75H10.5V8.25H7.5V9.75ZM7.5 13.75H10.5V12.25H7.5V13.75ZM7.5 17.75H10.5V16.25H7.5V17.75Z',
} as const;

export const IconPlazaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-stroke-rounded IconPlazaStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlazaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-duotone-rounded IconPlazaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlazaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-twotone-rounded IconPlazaTwotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlazaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-solid-rounded IconPlazaSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlazaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-bulk-rounded IconPlazaBulkRounded"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlazaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-stroke-sharp IconPlazaStrokeSharp"
    >
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
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlazaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plaza-solid-sharp IconPlazaSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlaza: TheIconSelfPack = {
  name: 'Plaza',
  StrokeRounded: IconPlazaStrokeRounded,
  DuotoneRounded: IconPlazaDuotoneRounded,
  TwotoneRounded: IconPlazaTwotoneRounded,
  SolidRounded: IconPlazaSolidRounded,
  BulkRounded: IconPlazaBulkRounded,
  StrokeSharp: IconPlazaStrokeSharp,
  SolidSharp: IconPlazaSolidSharp,
};
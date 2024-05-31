import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12',
  d2: 'M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12',
  d3: 'M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8',
  d4: 'M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21',
  d5: 'M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21',
  d6: 'M19.0931 2.19488C18.6484 1.86736 18.0224 1.96235 17.6949 2.40705C17.5632 2.58581 17.4999 2.79387 17.5 3.00007V4.50012H9.5C5.24485 4.50012 2 7.62252 2 12.0001C2 12.5524 2.44772 13.0001 3 13.0001C3.55228 13.0001 4 12.5524 4 12.0001C4 8.74779 6.3286 6.50012 9.5 6.50012H17.5V8.00827C17.5015 8.21177 17.565 8.41668 17.6949 8.59307C18.0224 9.03777 18.6485 9.13265 19.0932 8.80514L19.0966 8.80259C19.1718 8.74581 19.3859 8.58413 19.5059 8.49044C19.7487 8.301 20.0757 8.03872 20.4057 7.75223C20.7307 7.47005 21.0814 7.1447 21.3588 6.83078C21.4965 6.67496 21.6373 6.49836 21.7491 6.31294C21.8443 6.15497 22.0001 5.86093 22.0001 5.50008C22.0001 5.13924 21.8443 4.8452 21.7491 4.68723C21.6373 4.50181 21.4965 4.32521 21.3588 4.16939C21.0815 3.85547 20.7307 3.53011 20.4057 3.24793C20.0757 2.96144 19.7487 2.69915 19.5059 2.50971C19.3861 2.41617 19.1724 2.25476 19.0969 2.19771L19.0968 2.19766L19.0931 2.19488Z',
  d7: 'M14.5 19.5C18.7552 19.5 22 16.3776 22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12C20 15.2523 17.6714 17.5 14.5 17.5H6.50005V16C6.50021 15.7938 6.43683 15.5857 6.30517 15.407C5.97765 14.9623 5.35149 14.8674 4.9068 15.1949L4.90333 15.1975L4.90332 15.1975C4.82804 15.2544 4.61412 15.416 4.49412 15.5096C4.25138 15.6991 3.92434 15.9614 3.59438 16.2479C3.26938 16.53 2.91862 16.8554 2.64124 17.1693C2.50356 17.3251 2.36278 17.5017 2.25101 17.6872C2.15578 17.8451 2 18.1392 2 18.5C2 18.8608 2.15577 19.1549 2.251 19.3129C2.36278 19.4983 2.50356 19.6749 2.64124 19.8307C2.91862 20.1446 3.26939 20.47 3.59439 20.7522C3.92436 21.0386 4.2514 21.3009 4.49415 21.4904C4.6141 21.584 4.82806 21.7456 4.90343 21.8025L4.90699 21.8052C5.35169 22.1327 5.97769 22.0377 6.3052 21.593C6.43777 21.413 6.5011 21.2033 6.50005 20.9957V19.5H14.5Z',
  d8: 'M2 12C2 7.6224 5.24485 4.5 9.5 4.5H20.5C21.0523 4.5 21.5 4.94772 21.5 5.5C21.5 6.05228 21.0523 6.5 20.5 6.5H9.5C6.3286 6.5 4 8.74767 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12Z',
  d9: 'M17.6949 2.40705C18.0224 1.96235 18.6484 1.86736 19.0931 2.19488L19.0968 2.19766C19.1722 2.25466 19.3861 2.41614 19.5059 2.50971C19.7487 2.69915 20.0757 2.96144 20.4057 3.24793C20.7307 3.53011 21.0815 3.85547 21.3588 4.16939C21.4965 4.32521 21.6373 4.50181 21.7491 4.68723C21.8443 4.8452 22.0001 5.13924 22.0001 5.50008C22.0001 5.86093 21.8443 6.15497 21.7491 6.31294C21.6373 6.49836 21.4965 6.67496 21.3588 6.83078C21.0814 7.1447 20.7307 7.47005 20.4057 7.75223C20.0757 8.03872 19.7487 8.301 19.5059 8.49044C19.3859 8.58413 19.1718 8.74581 19.0966 8.80259L19.0932 8.80514C18.6485 9.13265 18.0224 9.03777 17.6949 8.59307C17.565 8.41668 17.5015 8.21177 17.5 8.00827V3.00007C17.4999 2.79387 17.5632 2.58581 17.6949 2.40705Z',
  d10: 'M22 12C22 16.3776 18.7552 19.5 14.5 19.5H3.5C2.94772 19.5 2.5 19.0523 2.5 18.5C2.5 17.9477 2.94772 17.5 3.5 17.5H14.5C17.6714 17.5 20 15.2523 20 12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12Z',
  d11: 'M6.3052 21.593C5.97769 22.0377 5.35169 22.1327 4.90699 21.8052L4.90343 21.8025C4.82806 21.7456 4.6141 21.584 4.49415 21.4904C4.2514 21.3009 3.92436 21.0386 3.59439 20.7522C3.26939 20.47 2.91862 20.1446 2.64124 19.8307C2.50356 19.6749 2.36278 19.4983 2.251 19.3129C2.15577 19.1549 2 18.8608 2 18.5C2 18.1392 2.15578 17.8451 2.25101 17.6872C2.36278 17.5017 2.50356 17.3251 2.64124 17.1693C2.91862 16.8554 3.26938 16.53 3.59438 16.2479C3.92434 15.9614 4.25138 15.6991 4.49412 15.5096C4.61412 15.416 4.82805 15.2544 4.90333 15.1975L4.9068 15.1949C5.35149 14.8674 5.97765 14.9623 6.30517 15.407C6.43683 15.5857 6.50021 15.7938 6.50005 16V20.9957C6.5011 21.2033 6.43777 21.413 6.3052 21.593Z',
  d12: 'M17.4853 10.0099L21.0012 6.49632L17.4853 3.00049M4.98633 10.9913L4.98635 6.61553C4.98635 6.56024 5.03154 6.49632 5.08727 6.49632H20.5115',
  d13: 'M6.51491 13.9901L2.99902 17.5037L6.51491 20.9996M19.0139 13.0088L19.0139 17.3845C19.0139 17.4398 18.9687 17.5037 18.913 17.5037H3.47625',
  d14: 'M17.5001 2L22 6.50005L17.5001 11L16.0858 9.58581L18.1716 7.50005L4.00013 7.50008L4 12.0001L2 12L2.00016 6.50005C2.00018 5.94777 2.44789 5.50008 3.00016 5.50008L18.1716 5.50005L16.0858 3.41421L17.5001 2Z',
  d15: 'M22.0023 12V17.5C22.0023 18.0523 21.5546 18.5 21.0023 18.5L5.82844 18.5004L7.91414 20.586L6.49995 22.0002L2 17.5004L6.49995 13.0005L7.91417 14.4147L5.82848 16.5004L20.0023 16.5V12H22.0023Z',
} as const;

export const IconArrowReloadHorizontalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-stroke-rounded IconArrowReloadHorizontalStrokeRounded"
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

export const IconArrowReloadHorizontalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-duotone-rounded IconArrowReloadHorizontalDuotoneRounded"
    >
      <path 
        d={d.d1} 
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

export const IconArrowReloadHorizontalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-twotone-rounded IconArrowReloadHorizontalTwotoneRounded"
    >
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

export const IconArrowReloadHorizontalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-solid-rounded IconArrowReloadHorizontalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowReloadHorizontalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-bulk-rounded IconArrowReloadHorizontalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowReloadHorizontalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-stroke-sharp IconArrowReloadHorizontalStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowReloadHorizontalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-horizontal-solid-sharp IconArrowReloadHorizontalSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfArrowReloadHorizontal: TheIconSelfPack = {
  name: 'ArrowReloadHorizontal',
  StrokeRounded: IconArrowReloadHorizontalStrokeRounded,
  DuotoneRounded: IconArrowReloadHorizontalDuotoneRounded,
  TwotoneRounded: IconArrowReloadHorizontalTwotoneRounded,
  SolidRounded: IconArrowReloadHorizontalSolidRounded,
  BulkRounded: IconArrowReloadHorizontalBulkRounded,
  StrokeSharp: IconArrowReloadHorizontalStrokeSharp,
  SolidSharp: IconArrowReloadHorizontalSolidSharp,
};
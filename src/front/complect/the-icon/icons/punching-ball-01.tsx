import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.002 22C8.4121 22 5.50195 19.8177 5.50195 16.5095C5.50195 13.6609 7.9118 11.6468 9.27297 7.95509C9.4458 7.48634 9.53222 7.25196 9.59859 7.1298C9.95355 6.47644 10.4553 6.14521 11.2407 6.04564C11.7205 5.98482 12.2832 5.98478 12.7629 6.04554C13.5485 6.14503 14.0503 6.47626 14.4054 7.12968C14.4717 7.25185 14.5582 7.48626 14.731 7.95508C16.0922 11.6466 18.502 13.6606 18.502 16.5092C18.502 19.8174 15.5918 22 12.002 22Z',
  d2: 'M9.95495 14C8.93192 15.7778 9.65332 22 12.0009 22C14.3463 22 15.0741 15.7778 14.0487 14',
  d3: 'M12 6V3.5M12 3.5L12.9153 3.27116C13.6038 3.09905 14.1826 2.63471 14.5 2M12 3.5L11.0847 3.27116C10.3962 3.09905 9.81735 2.63471 9.5 2',
  d4: 'M15.002 9H9.00195',
  d5: 'M12 22C8.41012 22 5.49997 19.8177 5.49997 16.5095C5.49997 13.6609 7.90982 11.6468 9.27099 7.95509C9.44382 7.48634 9.53024 7.25196 9.59661 7.1298C9.95157 6.47644 10.4533 6.14521 11.2387 6.04564C11.7185 5.98482 12.2812 5.98478 12.7609 6.04554C13.5465 6.14503 14.0483 6.47626 14.4034 7.12968C14.4697 7.25185 14.5562 7.48626 14.729 7.95508C16.0902 11.6466 18.5 13.6606 18.5 16.5092C18.5 19.8174 15.5898 22 12 22Z',
  d6: 'M9.95297 14C8.92994 15.7778 9.65134 22 11.9989 22C14.3443 22 15.0721 15.7778 14.0467 14',
  d7: 'M11.998 6V3.5M11.998 3.5L12.9133 3.27116C13.6018 3.09905 14.1806 2.63471 14.498 2M11.998 3.5L11.0827 3.27116C10.3942 3.09905 9.81537 2.63471 9.49802 2',
  d8: 'M7.28796 11.8536C6.32828 13.4562 5.49997 14.8394 5.49997 16.5095C5.49997 19.8177 8.41012 22 12 22C15.5898 22 18.5 19.8174 18.5 16.5092C18.5 14.8391 17.6716 13.4559 16.712 11.8533C16.1961 10.9918 15.6423 10.0669 15.1587 9H8.84372L7.28796 11.8536Z',
  d9: 'M15 9H8.99997',
  d10: 'M12 22C8.41015 22 5.5 19.8177 5.5 16.5095C5.5 13.6609 7.90985 11.6468 9.27102 7.95509C9.44385 7.48634 9.53027 7.25196 9.59664 7.1298C9.9516 6.47644 10.4533 6.14521 11.2388 6.04564C11.7185 5.98482 12.2813 5.98478 12.761 6.04554C13.5466 6.14503 14.0484 6.47626 14.4034 7.12968C14.4698 7.25185 14.5562 7.48626 14.7291 7.95508C16.0903 11.6466 18.5 13.6606 18.5 16.5092C18.5 19.8174 15.5899 22 12 22Z',
  d11: 'M9.953 14C8.92997 15.7778 9.65137 22 11.9989 22C14.3443 22 15.0722 15.7778 14.0467 14',
  d12: 'M15 9H9',
  d13: 'M14.947 1.23079C14.453 0.983803 13.8523 1.18403 13.6054 1.67801C13.4186 2.05161 13.0778 2.32493 12.6726 2.42624L11.9998 2.59444L11.327 2.42624C10.9217 2.32493 10.581 2.05161 10.3942 1.67801C10.1472 1.18403 9.54655 0.983803 9.05257 1.23079C8.55859 1.47778 8.35836 2.07845 8.60535 2.57243C9.05326 3.46825 9.87025 4.12361 10.8419 4.36652L10.9998 4.406V6.12522C10.9998 6.6775 11.4475 7.12522 11.9998 7.12522C12.5521 7.12522 12.9998 6.6775 12.9998 6.12522V4.406L13.1577 4.36652C14.1293 4.12361 14.9463 3.46825 15.3942 2.57243C15.6412 2.07845 15.441 1.47778 14.947 1.23079Z',
  d14: 'M11.1426 5.42709C11.687 5.35768 12.3126 5.35763 12.8571 5.42698C13.3447 5.48909 13.8064 5.63183 14.2181 5.90516C14.6331 6.1807 14.9402 6.55094 15.1727 6.98137C15.2716 7.1645 15.412 7.54811 15.5451 7.91165C16.0554 9.30368 16.7198 10.4207 17.372 11.5171C17.512 11.7524 17.6514 11.9868 17.7886 12.2228C18.542 13.5184 19.25 14.8977 19.25 16.5645C19.25 19.5536 17.2595 21.6468 14.6294 22.4774C14.4553 22.5324 14.3682 22.5599 14.3251 22.5134C14.2821 22.4669 14.3176 22.3787 14.3887 22.2024C14.6793 21.4819 14.8894 20.6397 15.0293 19.7862C15.2105 18.6809 15.2819 17.5075 15.2406 16.4652C15.2003 15.4483 15.0499 14.4645 14.7258 13.7955C14.5476 13.4278 14.1001 13.2717 13.7261 13.4469C13.3522 13.622 13.1934 14.0621 13.3716 14.4299C13.5602 14.8192 13.7034 15.5551 13.7417 16.5226C13.7791 17.4646 13.7142 18.5401 13.5484 19.5515C13.3812 20.5717 13.119 21.4783 12.7881 22.1086C12.433 22.7849 12.1376 22.7852 12 22.7852C11.8618 22.7852 11.5682 22.7847 11.2135 22.1087C10.8828 21.4786 10.6212 20.5721 10.4544 19.5518C10.2892 18.5405 10.2248 17.4649 10.2623 16.5228C10.3009 15.5553 10.444 14.8189 10.6323 14.4292C10.8101 14.0614 10.651 13.6214 10.2769 13.4466C9.90279 13.2717 9.45537 13.4282 9.27757 13.7961C8.9544 14.4647 8.80402 15.4482 8.76349 16.465C8.72194 17.5072 8.79281 18.6806 8.97345 19.7858C9.113 20.6397 9.32275 21.4823 9.61322 22.2031C9.68425 22.3793 9.71977 22.4674 9.67673 22.514C9.63368 22.5605 9.54664 22.533 9.37254 22.4781C6.74156 21.648 4.75 19.5546 4.75 16.5648C4.75 14.898 5.45802 13.5186 6.21146 12.2229C6.34864 11.987 6.48807 11.7526 6.62802 11.5174C7.2802 10.4209 7.94464 9.30382 8.455 7.91167C8.58803 7.54819 8.72843 7.16463 8.82734 6.98152C9.05983 6.55113 9.36681 6.18091 9.78179 5.90536C10.1934 5.63202 10.6551 5.48925 11.1426 5.42709ZM12.6138 7.35591C12.2308 7.30712 11.7684 7.30715 11.3854 7.35599C11.1136 7.39063 10.9531 7.45727 10.8466 7.52795C10.7437 7.59629 10.6369 7.70439 10.5265 7.90841L10.1638 8.8532C10.1165 8.9765 10.0929 9.03815 10.1227 9.08151C10.1525 9.12487 10.2185 9.12487 10.3506 9.12487L13.6494 9.12487C13.7815 9.12487 13.8476 9.12487 13.8774 9.08149C13.9072 9.03811 13.8835 8.97644 13.8361 8.8531L13.4729 7.90835C13.3624 7.70429 13.2556 7.59617 13.1526 7.52784C13.0462 7.45716 12.8856 7.39053 12.6138 7.35591Z',
  d15: 'M13.6054 1.67801C13.8523 1.18403 14.453 0.983803 14.947 1.23079C15.441 1.47778 15.6412 2.07845 15.3942 2.57243C14.9463 3.46825 14.1293 4.12361 13.1577 4.36652L12.9998 4.406V5.44763C12.9525 5.43994 12.9049 5.43307 12.8571 5.42698C12.3126 5.35763 11.687 5.35768 11.1426 5.42709C11.0947 5.43319 11.0471 5.44007 10.9998 5.44777V4.406L10.8419 4.36652C9.87025 4.12361 9.05326 3.46825 8.60536 2.57243C8.35837 2.07845 8.55859 1.47778 9.05257 1.23079C9.54655 0.983803 10.1472 1.18403 10.3942 1.67801C10.581 2.05161 10.9217 2.32493 11.327 2.42624L11.9998 2.59444L12.6726 2.42624C13.0778 2.32493 13.4186 2.05161 13.6054 1.67801Z',
  d16: 'M12 22C8.13401 22 5 19.6813 5 16.1664C5 13.1397 7.59522 10.9997 9.06109 7.07729C9.24722 6.57923 9.34029 6.3302 9.41176 6.20041C9.79403 5.50621 10.3343 5.15428 11.1802 5.04849C11.6969 4.98388 12.3029 4.98383 12.8195 5.04839C13.6656 5.15409 14.2059 5.50602 14.5883 6.20029C14.6598 6.33009 14.7528 6.57915 14.939 7.07728C16.4049 10.9995 19 13.1394 19 16.1661C19 19.681 15.866 22 12 22Z',
  d17: 'M9.51639 14C9.51627 16.25 9.15023 22 12 22C14.8472 22 14.4867 16.25 14.4859 14',
  d18: 'M12 5V2M9 2L15 2',
  d19: 'M16 9L8 9',
  d20: 'M15 1.25L9 1.25V2.75L11.25 2.75V5H12.75V2.75H15V1.25Z',
  d21: 'M11.0872 4.30429C11.6656 4.23195 12.3341 4.2319 12.9125 4.30417C13.418 4.36733 13.8804 4.51031 14.2871 4.77515C14.6967 5.04193 15.0058 5.40376 15.2452 5.83849C15.344 6.0178 15.4539 6.31204 15.6085 6.7262L15.6416 6.81471C15.8314 7.32256 16.0402 7.79803 16.2609 8.25H7.73924C7.95989 7.79804 8.16876 7.32258 8.35855 6.81474L8.39161 6.72622C8.54622 6.31211 8.65605 6.01793 8.75478 5.83864C8.99415 5.40395 9.30321 5.04214 9.71279 4.77536C10.1194 4.51051 10.5818 4.36749 11.0872 4.30429Z',
  d22: 'M6.93042 9.75C6.71918 10.1129 6.50537 10.4654 6.29408 10.8138C6.13928 11.069 5.98577 11.3221 5.83568 11.5753C4.99878 12.9871 4.25 14.4326 4.25 16.1664C4.25 19.421 6.56784 21.6779 9.60107 22.4535C9.26258 21.6985 9.06629 20.7787 8.94678 19.8559C8.72338 18.1312 8.74554 16.1722 8.76095 14.8092C8.76437 14.5074 8.76745 14.2346 8.76746 14.0002L10.2675 14.0003C10.2675 14.2608 10.2643 14.5539 10.2608 14.8712C10.2459 16.2383 10.2262 18.0559 10.4343 19.6632C10.563 20.6565 10.7703 21.4863 11.0716 22.0477C11.3164 22.5039 11.5694 22.6988 11.8445 22.7488C11.8963 22.7496 11.9481 22.75 12 22.75C12.0526 22.75 12.1051 22.7496 12.1575 22.7488C12.4321 22.6987 12.685 22.504 12.93 22.0476C13.2315 21.486 13.4392 20.6561 13.5683 19.6629C13.778 18.0501 13.7583 16.2251 13.7435 14.8567C13.7402 14.545 13.7371 14.2569 13.737 14.0005L15.237 14C15.2371 14.2312 15.2401 14.4996 15.2434 14.7965C15.2587 16.1603 15.2807 18.1259 15.0558 19.8563C14.9359 20.7787 14.7392 21.6982 14.4007 22.453C17.4331 21.6769 19.75 19.42 19.75 16.1661C19.75 14.4323 19.0013 12.9869 18.1644 11.5751C18.0143 11.3218 17.8608 11.0688 17.7059 10.8134C17.4947 10.4652 17.2809 10.1128 17.0698 9.75H6.93042Z',
} as const;

export const IconPunchingBall01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-stroke-rounded IconPunchingBall01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPunchingBall01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-duotone-rounded IconPunchingBall01DuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
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

export const IconPunchingBall01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-twotone-rounded IconPunchingBall01TwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-solid-rounded IconPunchingBall01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconPunchingBall01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-bulk-rounded IconPunchingBall01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPunchingBall01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-stroke-sharp IconPunchingBall01StrokeSharp"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-01-solid-sharp IconPunchingBall01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPunchingBall01: TheIconSelfPack = {
  name: 'PunchingBall01',
  StrokeRounded: IconPunchingBall01StrokeRounded,
  DuotoneRounded: IconPunchingBall01DuotoneRounded,
  TwotoneRounded: IconPunchingBall01TwotoneRounded,
  SolidRounded: IconPunchingBall01SolidRounded,
  BulkRounded: IconPunchingBall01BulkRounded,
  StrokeSharp: IconPunchingBall01StrokeSharp,
  SolidSharp: IconPunchingBall01SolidSharp,
};
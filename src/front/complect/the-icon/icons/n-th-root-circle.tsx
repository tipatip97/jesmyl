import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M17.5048 8.48535L12.2537 8.48536C11.437 8.48536 11.4844 8.63898 11.3234 9.46303L10.0145 14.5133C9.68244 15.8414 9.28914 15.4711 9.28914 15.4711C8.92914 15.3511 8.87392 15.2096 8.26415 13.9573L7.85415 13.074C7.5915 12.5346 7.26222 12.5981 7.08189 12.6797C7.08189 12.6797 6.80521 12.7804 6.49805 12.9796M12.997 11.5058C13.417 11.4919 13.8643 11.4691 14.0896 11.9235C14.4329 12.6159 14.9494 13.8127 15.1513 14.2628C15.2523 14.4359 15.5682 14.49 15.5682 14.49C15.8375 14.5246 16.1408 14.5133 16.1408 14.5133M16.3327 11.5058C15.4865 11.5058 14.9876 12.4812 14.5138 13.074C13.9045 13.9807 13.4598 14.49 12.8042 14.5133',
  d3: 'M12.9893 11.4921C13.3787 11.4797 13.8753 11.492 14.0717 11.8704C14.39 12.4839 14.8742 13.6824 15.0614 14.0812C15.1551 14.2346 15.2117 14.3671 15.5455 14.4734C15.7952 14.5041 16.1575 14.5124 16.1575 14.5124',
  d4: 'M16.3622 11.502C15.5775 11.502 15.1286 12.2984 14.6892 12.8236C14.1242 13.6269 13.543 14.5257 12.8086 14.5009',
  d5: 'M17.4961 8.51013L12.556 8.51001C11.703 8.51001 11.517 8.47665 11.3489 9.19475L10.1046 14.2038C9.75776 15.3611 9.67772 15.4871 9.33236 15.5103C8.95635 15.4057 8.77234 14.9284 8.20504 13.8375C8.10414 13.6701 7.74962 12.8638 7.5967 12.7228C7.40442 12.5455 6.8277 12.8114 6.50688 12.985',
  d6: 'M16.5177 10.1738L13.6121 10.1739C12.7954 10.1739 12.5593 10.9277 12.3248 11.6818L11.0017 15.1405C10.6696 16.4686 10.3751 16.5102 10.0445 16.5368C9.68449 16.4168 9.63742 16.2636 9.02765 15.0112L8.87781 14.6712C8.61516 14.1318 8.58089 14.1089 8.31537 14.0358C7.97641 13.9426 7.77689 14.094 7.46973 14.2932',
  d7: 'M7.46973 10.6645V9.03897M7.46973 9.03897C7.52626 8.23303 8.09299 7.51758 8.86182 7.51758C9.76861 7.51758 10.1785 8.42964 10.2402 9.03897V10.6645M7.46973 9.03897V7.51758',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.03227 6.65314C7.87818 6.55612 7.69575 6.5 7.50021 6.5C6.94793 6.5 6.50021 6.94772 6.50021 7.5V10.65C6.50021 11.2023 6.94793 11.65 7.50021 11.65C8.0525 11.65 8.50021 11.2023 8.50021 10.65V9.04286C8.50021 8.85193 8.56801 8.70203 8.64819 8.6104C8.71688 8.54824 8.89384 8.46121 9.05223 8.6104C9.13241 8.70203 9.20021 8.85193 9.20021 9.04286V10.65C9.20021 11.2023 9.64793 11.65 10.2002 11.65C10.7525 11.65 11.2002 11.2023 11.2002 10.65V9.04286C11.2002 7.76808 10.2693 6.5 8.85021 6.5C8.55513 6.5 8.28116 6.55483 8.03227 6.65314ZM16.5002 9.2L13.8205 9.20954C13.4861 9.22682 13.0496 9.24938 12.5778 9.5802C12.1016 9.91419 11.9027 10.389 11.7529 10.7464L10.0378 14.7819L9.37486 13.7785C9.34044 13.7258 9.25485 13.5947 9.1378 13.4781C8.98053 13.3216 8.80716 13.2232 8.63311 13.1554C8.5238 13.1128 8.35937 13.0562 8.16176 13.0458C7.96571 13.0356 7.80448 13.0776 7.76289 13.0884C7.57094 13.1362 7.17795 13.3032 7.05144 13.357L7.05143 13.357L7.04374 13.3603C6.55235 13.6124 6.35837 14.2151 6.61047 14.7065C6.85229 15.1778 7.41669 15.3755 7.89601 15.1684L8.42068 15.9625C8.59621 16.2765 8.78818 16.62 8.96876 16.8556C9.14819 17.0898 9.55658 17.5445 10.2304 17.4967C10.9024 17.449 11.2433 16.9435 11.3886 16.6874C11.5353 16.429 11.671 16.0822 11.8025 15.7461L13.7353 11.2208L16.5002 11.2C17.0525 11.2 17.5002 10.7523 17.5002 10.2C17.5002 9.64771 17.0525 9.2 16.5002 9.2Z',
  d9: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d10: 'M13.8205 9.20954L16.5002 9.2C17.0525 9.2 17.5002 9.64772 17.5002 10.2C17.5002 10.7523 17.0525 11.2 16.5002 11.2L13.7353 11.2208L11.8025 15.7461C11.671 16.0822 11.5353 16.429 11.3886 16.6874C11.2433 16.9435 10.9024 17.449 10.2304 17.4967C9.55658 17.5445 9.14819 17.0898 8.96876 16.8556C8.78818 16.62 8.59621 16.2765 8.42068 15.9625L7.89601 15.1684C7.41669 15.3755 6.85229 15.1778 6.61047 14.7065C6.35837 14.2151 6.55235 13.6124 7.04374 13.3603L7.05143 13.357C7.17792 13.3032 7.57093 13.1362 7.76289 13.0884C7.80448 13.0776 7.96571 13.0356 8.16176 13.0458C8.35937 13.0562 8.5238 13.1128 8.63311 13.1554C8.80716 13.2232 8.98053 13.3216 9.1378 13.4781C9.25485 13.5947 9.34044 13.7258 9.37486 13.7785L10.0378 14.7819L11.7529 10.7464C11.9027 10.389 12.1016 9.91419 12.5778 9.5802C13.0496 9.24938 13.4861 9.22682 13.8205 9.20954Z',
  d11: 'M7.50021 6.5C7.69575 6.5 7.87818 6.55612 8.03227 6.65314C8.28116 6.55483 8.55513 6.5 8.85021 6.5C10.2693 6.5 11.2002 7.76808 11.2002 9.04286V10.65C11.2002 11.2023 10.7525 11.65 10.2002 11.65C9.64793 11.65 9.20021 11.2023 9.20021 10.65V9.04286C9.20021 8.85193 9.13241 8.70203 9.05223 8.6104C8.89384 8.46121 8.71688 8.54824 8.64819 8.6104C8.56801 8.70203 8.50021 8.85193 8.50021 9.04286V10.65C8.50021 11.2023 8.0525 11.65 7.50021 11.65C6.94793 11.65 6.50021 11.2023 6.50021 10.65V7.5C6.50021 6.94772 6.94793 6.5 7.50021 6.5Z',
  d12: 'M19.0006 9.98786H14.0017C13.9979 9.98786 13.9944 9.99001 13.9927 9.99341L10.5037 16.9997C10.5 17.0071 10.4895 17.0071 10.4858 16.9997L8.50983 13.0149C8.50679 13.0088 8.49864 13.0075 8.4938 13.0123L7.00195 14.504M11.0039 10.5V8.65303C11.0039 7.73285 10.3155 7.00172 9.48689 7.00172C8.817 7.01406 8.16022 7.57527 8.00366 8.46398M8.00366 10.4893V8.46398M8.00366 8.46398V6.25977',
  d13: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.35359 6V6.05189C9.51301 6.01798 9.67993 6 9.85359 6C11.3556 6 12.3536 7.34483 12.3536 8.71429V10.5H10.3536V8.71429C10.3536 8.47602 10.269 8.28327 10.1617 8.16061C10.0561 8.03992 9.94484 8 9.85359 8C9.76235 8 9.65111 8.03992 9.54551 8.16061C9.43818 8.28327 9.35359 8.47602 9.35359 8.71429V10.5H7.35359V6H9.35359ZM14.3536 9C13.9748 9 13.6286 9.214 13.4592 9.55279L10.8536 14.7639L9.74802 12.5528C9.60426 12.2653 9.33107 12.0644 9.01377 12.0129C8.69648 11.9614 8.37378 12.0656 8.14648 12.2929L6.64648 13.7929L8.0607 15.2071L8.57964 14.6882L9.95916 17.4472C10.1286 17.786 10.4748 18 10.8536 18C11.2324 18 11.5786 17.786 11.748 17.4472L14.9716 11H19.3536V9H14.3536Z',
} as const;

export const IconNThRootCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-stroke-rounded IconNThRootCircleStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-duotone-rounded IconNThRootCircleDuotoneRounded"
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
        strokeLinejoin="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-twotone-rounded IconNThRootCircleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-solid-rounded IconNThRootCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-bulk-rounded IconNThRootCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconNThRootCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-stroke-sharp IconNThRootCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNThRootCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="n-th-root-circle-solid-sharp IconNThRootCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNThRootCircle: TheIconSelfPack = {
  name: 'NThRootCircle',
  StrokeRounded: IconNThRootCircleStrokeRounded,
  DuotoneRounded: IconNThRootCircleDuotoneRounded,
  TwotoneRounded: IconNThRootCircleTwotoneRounded,
  SolidRounded: IconNThRootCircleSolidRounded,
  BulkRounded: IconNThRootCircleBulkRounded,
  StrokeSharp: IconNThRootCircleStrokeSharp,
  SolidSharp: IconNThRootCircleSolidSharp,
};
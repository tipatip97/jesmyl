import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5022 13.2635C7.34661 13.2515 10.1431 12.6706 10.736 13.2635C11.3289 13.8564 10.748 16.6529 10.736 17.4973M13.2684 6.49733C13.2564 7.34173 12.6755 10.1382 13.2684 10.7311C13.8613 11.324 16.6578 10.7431 17.5022 10.7311M20.999 2.99902L13.6101 10.3812M10.369 13.6237L2.99987 21.001',
  d2: 'M13.2867 6.49967C13.2729 7.34394 12.6856 10.1388 13.2773 10.733C13.8689 11.3271 16.6672 10.7525 17.5112 10.7424M13.5028 10.5057L21.0015 3.02588',
  d3: 'M6.51653 13.2984C7.36057 13.2895 10.1597 12.719 10.7505 13.3141C11.3413 13.9091 10.7499 16.7031 10.7348 17.5474M2.99805 21.024L10.5187 13.5451',
  d4: 'M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L21.5303 3.53033ZM12.9697 9.96967C12.6768 10.2626 12.6768 10.7374 12.9697 11.0303C13.2626 11.3232 13.7374 11.3232 14.0303 11.0303L12.9697 9.96967ZM20.4697 2.46967L12.9697 9.96967L14.0303 11.0303L21.5303 3.53033L20.4697 2.46967Z',
  d5: 'M11.0303 14.0303C11.3232 13.7374 11.3232 13.2626 11.0303 12.9697C10.7374 12.6768 10.2626 12.6768 9.96967 12.9697L11.0303 14.0303ZM2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L2.46967 20.4697ZM9.96967 12.9697L2.46967 20.4697L3.53033 21.5303L11.0303 14.0303L9.96967 12.9697Z',
  d6: 'M17.5 10.7338C16.6556 10.7458 13.8591 11.3267 13.2662 10.7338C12.6733 10.1409 13.2542 7.34441 13.2662 6.5',
  d7: 'M10.7338 17.5C10.7458 16.6556 11.3267 13.8591 10.7338 13.2662C10.1409 12.6733 7.34441 13.2542 6.5 13.2662',
  d8: 'M17.0913 11.3269C16.5323 11.3943 15.8125 11.4811 15.1694 11.4973C14.8294 11.5058 14.4684 11.4963 14.1391 11.4408C13.8458 11.3913 13.3977 11.2784 13.0597 10.9403C12.7217 10.6023 12.6087 10.1542 12.5592 9.86096C12.5037 9.53166 12.4942 9.17067 12.5028 8.83067C12.5189 8.18757 12.6057 7.4678 12.6731 6.90877L12.6892 6.77496C12.7103 6.59837 12.7361 6.38301 12.779 6.20973L12.78 6.20557C12.8104 6.0824 12.9503 5.51591 13.5455 5.31013C14.1391 5.10489 14.5972 5.46073 14.6985 5.53949L14.7005 5.54103C14.841 5.6501 14.9931 5.80248 15.1163 5.92583L15.8881 6.69765L20.2929 2.29275C20.6834 1.90223 21.3166 1.90223 21.7071 2.29275C22.0976 2.68328 22.0976 3.31644 21.7071 3.70697L17.3023 8.11186L18.0742 8.88374L18.0742 8.88374C18.1976 9.00691 18.3499 9.15905 18.459 9.29951L18.4605 9.30149C18.5393 9.40287 18.8951 9.86093 18.6899 10.4545C18.4841 11.0497 17.9176 11.1896 17.7945 11.22L17.7903 11.221C17.6171 11.2639 17.4015 11.2897 17.225 11.3108L17.0913 11.3269Z',
  d9: 'M6.90868 12.6731C7.4677 12.6057 8.18755 12.5189 8.83065 12.5027C9.17065 12.4942 9.53163 12.5037 9.86094 12.5592C10.1542 12.6087 10.6023 12.7216 10.9403 13.0597C11.2783 13.3977 11.3913 13.8458 11.4408 14.139C11.4963 14.4683 11.5058 14.8293 11.4972 15.1693C11.4811 15.8124 11.3943 16.5322 11.3269 17.0912L11.3108 17.225C11.2897 17.4016 11.2639 17.617 11.221 17.7903L11.22 17.7944C11.1896 17.9176 11.0497 18.4841 10.4545 18.6899C9.8609 18.8951 9.40285 18.5393 9.30146 18.4605L9.29948 18.459C9.15903 18.3499 9.00688 18.1975 8.88371 18.0742L8.11189 17.3024L3.70711 21.7072C3.31658 22.0978 2.68342 22.0978 2.29289 21.7072C1.90237 21.3167 1.90237 20.6836 2.29289 20.293L6.69768 15.8881L5.9258 15.1163L5.9258 15.1163C5.80244 14.9931 5.65008 14.8409 5.54101 14.7005L5.53947 14.6985C5.46071 14.5971 5.10487 14.1391 5.3101 13.5455C5.51588 12.9503 6.08237 12.8104 6.20555 12.78L6.2097 12.779C6.38294 12.7361 6.59846 12.7103 6.77502 12.6892L6.90868 12.6731Z',
  d10: 'M20.2929 2.29417C20.6834 1.90365 21.3166 1.90365 21.7071 2.29417C22.0976 2.6847 22.0976 3.31786 21.7071 3.70839L17.3023 8.11328L15.8881 6.69907L20.2929 2.29417Z',
  d11: 'M17.0924 11.3269C16.5334 11.3943 15.8135 11.4811 15.1704 11.4973C14.8304 11.5058 14.4695 11.4963 14.1402 11.4408C13.8469 11.3913 13.3988 11.2784 13.0608 10.9403C12.7228 10.6023 12.6098 10.1542 12.5603 9.86096C12.5048 9.53166 12.4953 9.17067 12.5039 8.83067C12.52 8.18757 12.6068 7.4678 12.6742 6.90877L12.6903 6.77496C12.7114 6.59837 12.7372 6.38301 12.7801 6.20973L12.7811 6.20557L12.7811 6.20557C12.8115 6.08238 12.9514 5.51591 13.5466 5.31013C14.1402 5.10489 14.5982 5.46073 14.6996 5.53949L14.7016 5.54103C14.8421 5.6501 14.9942 5.80248 15.1174 5.92583L17.3034 8.11186L18.0753 8.88374L18.0753 8.88374C18.1986 9.00691 18.351 9.15905 18.4601 9.29951L18.4616 9.30149C18.5404 9.40287 18.8962 9.86093 18.691 10.4545C18.4852 11.0497 17.9187 11.1896 17.7955 11.22L17.7955 11.22L17.7914 11.221C17.6182 11.2639 17.4026 11.2897 17.2261 11.3108L17.2261 11.3108L17.0924 11.3269Z',
  d12: 'M3.70711 21.7058C3.31658 22.0964 2.68342 22.0964 2.29289 21.7058C1.90237 21.3153 1.90237 20.6821 2.29289 20.2916L6.69768 15.8867L8.11189 17.3009L3.70711 21.7058Z',
  d13: 'M6.90759 12.6731C7.46661 12.6057 8.18646 12.5189 8.82955 12.5027C9.16955 12.4942 9.53054 12.5037 9.85984 12.5592C10.1531 12.6087 10.6012 12.7216 10.9392 13.0597C11.2772 13.3977 11.3902 13.8458 11.4397 14.139C11.4952 14.4683 11.5047 14.8293 11.4961 15.1693C11.48 15.8124 11.3932 16.5322 11.3258 17.0912L11.3097 17.225C11.2886 17.4016 11.2628 17.617 11.2199 17.7903L11.2189 17.7944L11.2189 17.7944C11.1885 17.9176 11.0486 18.4841 10.4534 18.6899C9.85981 18.8951 9.40175 18.5393 9.30037 18.4605L9.29839 18.459C9.15793 18.3499 9.00579 18.1975 8.88261 18.0742L8.1108 17.3024L5.9247 15.1163L5.9247 15.1163C5.80135 14.9931 5.64899 14.8409 5.53991 14.7005L5.53837 14.6985C5.45961 14.5971 5.10377 14.1391 5.30901 13.5455C5.51479 12.9503 6.08127 12.8104 6.20445 12.78L6.20445 12.78L6.20861 12.779C6.38185 12.7361 6.59736 12.7103 6.77392 12.6892L6.77393 12.6892L6.90759 12.6731Z',
  d14: 'M13.5049 4.479V10.4962H19.5229',
  d15: 'M10.4956 19.5226V13.5054H4.47754',
  d16: 'M9.96867 14.0317L2.99902 21.0002',
  d17: 'M21.0009 3.00049L14.0313 9.96897',
  d18: 'M8.08564 14.5L2 20.5856L3.41421 21.9998L9.5 15.9141L9.5 20.5H11.5V12.5H3.5V14.5L8.08564 14.5Z',
  d19: 'M15.9144 9.49979L22 3.41421L20.5858 2L14.5 8.08572L14.5 3.49979H12.5V11.4998H20.5V9.49979L15.9144 9.49979Z',
} as const;

export const IconArrowShrink02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-stroke-rounded IconArrowShrink02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowShrink02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-duotone-rounded IconArrowShrink02DuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowShrink02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-twotone-rounded IconArrowShrink02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconArrowShrink02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-solid-rounded IconArrowShrink02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowShrink02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-bulk-rounded IconArrowShrink02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
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

export const IconArrowShrink02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-stroke-sharp IconArrowShrink02StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowShrink02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-02-solid-sharp IconArrowShrink02SolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowShrink02: TheIconSelfPack = {
  name: 'ArrowShrink02',
  StrokeRounded: IconArrowShrink02StrokeRounded,
  DuotoneRounded: IconArrowShrink02DuotoneRounded,
  TwotoneRounded: IconArrowShrink02TwotoneRounded,
  SolidRounded: IconArrowShrink02SolidRounded,
  BulkRounded: IconArrowShrink02BulkRounded,
  StrokeSharp: IconArrowShrink02StrokeSharp,
  SolidSharp: IconArrowShrink02SolidSharp,
};
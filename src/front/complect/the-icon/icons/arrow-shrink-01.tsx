import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.50232 10.7365C7.34673 10.7485 10.1432 11.3294 10.7361 10.7365C11.329 10.1436 10.7481 7.34708 10.7361 6.50267M13.2685 17.5027C13.2565 16.6583 12.6756 13.8618 13.2685 13.2689C13.8614 12.676 16.6579 13.2569 17.5023 13.2689M20.9991 21.001L13.6103 13.6188M10.3691 10.3763L3 2.99902',
  d2: 'M10.7128 6.49967C10.7267 7.34394 11.314 10.1388 10.7223 10.733C10.1306 11.3271 7.33233 10.7525 6.48831 10.7424M10.4968 10.5057L2.99805 3.02588',
  d3: 'M17.4831 13.2984C16.6391 13.2895 13.84 12.719 13.2492 13.3141C12.6584 13.9091 13.2497 16.7031 13.2649 17.5474M21.0016 21.024L13.481 13.5451',
  d4: 'M11.0303 9.96967C11.3232 10.2626 11.3232 10.7374 11.0303 11.0303C10.7374 11.3232 10.2626 11.3232 9.96967 11.0303L11.0303 9.96967ZM2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L2.46967 3.53033ZM3.53033 2.46967L11.0303 9.96967L9.96967 11.0303L2.46967 3.53033L3.53033 2.46967Z',
  d5: 'M12.9697 14.0303C12.6768 13.7374 12.6768 13.2626 12.9697 12.9697C13.2626 12.6768 13.7374 12.6768 14.0303 12.9697L12.9697 14.0303ZM21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L21.5303 20.4697ZM14.0303 12.9697L21.5303 20.4697L20.4697 21.5303L12.9697 14.0303L14.0303 12.9697Z',
  d6: 'M6.5 10.7338C7.34441 10.7458 10.1409 11.3267 10.7338 10.7338C11.3267 10.1409 10.7458 7.34441 10.7338 6.5',
  d7: 'M13.2662 17.5C13.2542 16.6556 12.6733 13.8591 13.2662 13.2662C13.8591 12.6733 16.6556 13.2542 17.5 13.2662',
  d8: 'M6.90868 11.3269C7.4677 11.3943 8.18755 11.4811 8.83065 11.4973C9.17065 11.5058 9.53163 11.4963 9.86094 11.4408C10.1542 11.3913 10.6023 11.2784 10.9403 10.9403C11.2783 10.6023 11.3913 10.1542 11.4408 9.86096C11.4963 9.53166 11.5058 9.17067 11.4972 8.83067C11.4811 8.18757 11.3943 7.4678 11.3269 6.90877L11.3108 6.77496C11.2897 6.59837 11.2639 6.38301 11.221 6.20973L11.22 6.20557C11.1896 6.0824 11.0497 5.51591 10.4545 5.31013C9.8609 5.10489 9.40285 5.46073 9.30146 5.53949L9.29948 5.54103C9.15903 5.6501 9.00688 5.80248 8.88371 5.92583L8.11189 6.69765L3.70711 2.29275C3.31658 1.90223 2.68342 1.90223 2.29289 2.29275C1.90237 2.68328 1.90237 3.31644 2.29289 3.70697L6.69768 8.11186L5.9258 8.88374L5.9258 8.88374C5.80244 9.00691 5.65008 9.15905 5.54101 9.29951L5.53947 9.30149C5.46071 9.40287 5.10487 9.86093 5.3101 10.4545C5.51588 11.0497 6.08237 11.1896 6.20555 11.22L6.2097 11.221C6.38294 11.2639 6.59846 11.2897 6.77502 11.3108L6.90868 11.3269Z',
  d9: 'M17.0913 12.6731C16.5323 12.6057 15.8125 12.5189 15.1694 12.5027C14.8294 12.4942 14.4684 12.5037 14.1391 12.5592C13.8458 12.6087 13.3977 12.7216 13.0597 13.0597C12.7217 13.3977 12.6087 13.8458 12.5592 14.139C12.5037 14.4683 12.4942 14.8293 12.5028 15.1693C12.5189 15.8124 12.6057 16.5322 12.6731 17.0912L12.6892 17.225C12.7103 17.4016 12.7361 17.617 12.779 17.7903L12.78 17.7944C12.8104 17.9176 12.9503 18.4841 13.5455 18.6899C14.1391 18.8951 14.5972 18.5393 14.6985 18.4605L14.7005 18.459C14.841 18.3499 14.9931 18.1975 15.1163 18.0742L15.8881 17.3024L20.2929 21.7072C20.6834 22.0978 21.3166 22.0978 21.7071 21.7072C22.0976 21.3167 22.0976 20.6836 21.7071 20.293L17.3023 15.8881L18.0742 15.1163L18.0742 15.1163C18.1976 14.9931 18.3499 14.8409 18.459 14.7005L18.4605 14.6985C18.5393 14.5971 18.8951 14.1391 18.6899 13.5455C18.4841 12.9503 17.9176 12.8104 17.7945 12.78L17.7903 12.779C17.6171 12.7361 17.4015 12.7103 17.225 12.6892L17.0913 12.6731Z',
  d10: 'M3.70711 2.29417C3.31658 1.90365 2.68342 1.90365 2.29289 2.29417C1.90237 2.6847 1.90237 3.31786 2.29289 3.70839L6.69768 8.11328L8.11189 6.69907L3.70711 2.29417Z',
  d11: 'M6.90759 11.3269C7.46661 11.3943 8.18646 11.4811 8.82955 11.4973C9.16955 11.5058 9.53054 11.4963 9.85984 11.4408C10.1531 11.3913 10.6012 11.2784 10.9392 10.9403C11.2772 10.6023 11.3902 10.1542 11.4397 9.86096C11.4952 9.53166 11.5047 9.17067 11.4961 8.83067C11.48 8.18757 11.3932 7.4678 11.3258 6.90877L11.3097 6.77496C11.2886 6.59837 11.2628 6.38301 11.2199 6.20973L11.2189 6.20557L11.2189 6.20557C11.1885 6.08238 11.0486 5.51591 10.4534 5.31013C9.85981 5.10489 9.40175 5.46073 9.30037 5.53949L9.29839 5.54103C9.15793 5.6501 9.00579 5.80248 8.88261 5.92583L8.1108 6.69765L5.9247 8.88374L5.9247 8.88374C5.80135 9.00691 5.64899 9.15905 5.53991 9.29951L5.53837 9.30149C5.45961 9.40287 5.10377 9.86093 5.30901 10.4545C5.51479 11.0497 6.08127 11.1896 6.20445 11.22L6.20445 11.22L6.20861 11.221C6.38185 11.2639 6.59736 11.2897 6.77392 11.3108L6.77393 11.3108L6.90759 11.3269Z',
  d12: 'M20.2929 21.7058C20.6834 22.0964 21.3166 22.0964 21.7071 21.7058C22.0976 21.3153 22.0976 20.6821 21.7071 20.2916L17.3023 15.8867L15.8881 17.3009L20.2929 21.7058Z',
  d13: 'M17.0924 12.6731C16.5334 12.6057 15.8135 12.5189 15.1704 12.5027C14.8304 12.4942 14.4695 12.5037 14.1402 12.5592C13.8469 12.6087 13.3988 12.7216 13.0608 13.0597C12.7228 13.3977 12.6098 13.8458 12.5603 14.139C12.5048 14.4683 12.4953 14.8293 12.5039 15.1693C12.52 15.8124 12.6068 16.5322 12.6742 17.0912L12.6903 17.225C12.7114 17.4016 12.7372 17.617 12.7801 17.7903L12.7811 17.7944L12.7811 17.7944C12.8115 17.9176 12.9514 18.4841 13.5466 18.6899C14.1402 18.8951 14.5982 18.5393 14.6996 18.4605L14.7016 18.459C14.8421 18.3499 14.9942 18.1975 15.1174 18.0742L17.3034 15.8881L18.0753 15.1163L18.0753 15.1163C18.1986 14.9931 18.351 14.8409 18.4601 14.7005L18.4616 14.6985C18.5404 14.5971 18.8962 14.1391 18.691 13.5455C18.4852 12.9503 17.9187 12.8104 17.7955 12.78L17.7955 12.78L17.7914 12.779C17.6182 12.7361 17.4026 12.7103 17.2261 12.6892L17.2261 12.6892L17.0924 12.6731Z',
  d14: 'M10.51 4.50342V10.5114H4.50195',
  d15: 'M13.5146 19.5231V13.5151H19.5227',
  d16: 'M9.95885 9.95847L3.00098 3.00049',
  d17: 'M20.9989 20.9995L14.041 14.0415',
  d18: 'M8.08564 9.49979L2 3.41421L3.41421 2L9.5 8.08572L9.5 3.49979H11.5V11.4998H3.5V9.49979L8.08564 9.49979Z',
  d19: 'M15.9144 14.5L22 20.5856L20.5858 21.9998L14.5 15.9141L14.5 20.5H12.5V12.5H20.5V14.5L15.9144 14.5Z',
} as const;

export const IconArrowShrink01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-stroke-rounded IconArrowShrink01StrokeRounded"
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

export const IconArrowShrink01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-duotone-rounded IconArrowShrink01DuotoneRounded"
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

export const IconArrowShrink01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-twotone-rounded IconArrowShrink01TwotoneRounded"
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

export const IconArrowShrink01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-solid-rounded IconArrowShrink01SolidRounded"
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

export const IconArrowShrink01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-bulk-rounded IconArrowShrink01BulkRounded"
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

export const IconArrowShrink01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-stroke-sharp IconArrowShrink01StrokeSharp"
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

export const IconArrowShrink01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-shrink-01-solid-sharp IconArrowShrink01SolidSharp"
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

export const iconPackOfArrowShrink01: TheIconSelfPack = {
  name: 'ArrowShrink01',
  StrokeRounded: IconArrowShrink01StrokeRounded,
  DuotoneRounded: IconArrowShrink01DuotoneRounded,
  TwotoneRounded: IconArrowShrink01TwotoneRounded,
  SolidRounded: IconArrowShrink01SolidRounded,
  BulkRounded: IconArrowShrink01BulkRounded,
  StrokeSharp: IconArrowShrink01StrokeSharp,
  SolidSharp: IconArrowShrink01SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V11.5',
  d2: 'M3.5 7H11',
  d3: 'M21 2L14 8.99954M21 9L14 2.00046',
  d4: 'M3.02775 7H18.9723C19 7.77051 19 8.66411 19 9.70753V17.9808C19 20.2867 19 21.4396 18.2272 21.8523C17.0846 22.4624 15.178 21.0527 13.7467 19.9944C13.3032 19.6665 12.9054 19.3723 12.59 19.1824C11.8168 18.7168 11.4302 18.484 11 18.484C10.5698 18.484 10.1832 18.7168 9.41 19.1824C9.09462 19.3723 8.69675 19.6665 8.25325 19.9944C6.82195 21.0527 4.91543 22.4624 3.77285 21.8523C3 21.4396 3 20.2867 3 17.9808V9.70753C3 8.66411 3 7.77051 3.02775 7Z',
  d5: 'M21.5821 1.41792C21.9726 1.80845 21.9726 2.44162 21.5821 2.83213L18.789 5.625L21.5821 8.41787C21.9726 8.80838 21.9726 9.44155 21.5821 9.83208C21.1916 10.2226 20.5585 10.2226 20.1679 9.83213L17.3748 7.03917L14.5821 9.83167C14.1915 10.2222 13.5584 10.2222 13.1679 9.83162C12.7774 9.44109 12.7774 8.80792 13.1679 8.41741L15.9605 5.625L13.1679 2.83259C12.7774 2.44208 12.7774 1.80891 13.1679 1.41838C13.5584 1.02784 14.1915 1.02782 14.5821 1.41833L17.3748 4.21083L20.1679 1.41787C20.5585 1.02736 21.1916 1.02738 21.5821 1.41792Z',
  d6: 'M11.3802 1.97938C11.3938 1.7461 11.4006 1.62946 11.3786 1.57035C11.3459 1.48256 11.304 1.43812 11.2183 1.4004C11.1605 1.375 11.0653 1.375 10.875 1.375C9.03568 1.37499 7.527 1.37498 6.38958 1.52231C5.22212 1.67353 4.27551 1.99172 3.52621 2.71363C2.773 3.43931 2.43743 4.36243 2.27865 5.50025C2.26795 5.57691 2.258 5.65506 2.24874 5.73469C2.21468 6.02757 2.19765 6.17401 2.28714 6.27451C2.37662 6.375 2.5289 6.375 2.83346 6.375H12.8417C12.9643 6.375 13.0256 6.375 13.0807 6.35217C13.1358 6.32933 13.1792 6.28598 13.2659 6.19928L13.4158 6.0494C13.6158 5.8494 13.7158 5.74939 13.7158 5.62512C13.7158 5.50085 13.6158 5.40085 13.4158 5.20084L12.1083 3.89341C11.5829 3.36805 11.3402 2.66702 11.3802 1.97938Z',
  d7: 'M11.3903 8.85643C11.4463 8.33481 11.4743 8.074 11.3849 7.9745C11.2955 7.875 11.0871 7.875 10.6704 7.875H2.72477C2.44555 7.875 2.30594 7.875 2.2182 7.96217C2.13045 8.04934 2.12954 8.18813 2.12771 8.4657C2.125 8.87804 2.125 9.31393 2.12501 9.77438L2.125 18.1708C2.12496 19.2683 2.12493 20.1803 2.23033 20.8655C2.33938 21.5745 2.59357 22.2645 3.29458 22.6389C3.91976 22.9727 4.6074 22.9048 5.19044 22.7278C5.78014 22.5488 6.37954 22.2239 6.92835 21.8771C7.48239 21.527 8.02565 21.1279 8.498 20.7788C8.96081 20.4367 9.38808 20.1208 9.6719 19.9499C10.0715 19.7093 10.3238 19.5585 10.5283 19.4621C10.717 19.3732 10.8087 19.359 10.875 19.359C10.9413 19.359 11.033 19.3732 11.2217 19.4621C11.4263 19.5585 11.6785 19.7093 12.0781 19.9499C12.3619 20.1208 12.7892 20.4367 13.252 20.7788C13.7244 21.1279 14.2676 21.527 14.8217 21.8771C15.3705 22.2239 15.9699 22.5488 16.5596 22.7278C17.1426 22.9048 17.8303 22.9727 18.4554 22.6389C19.1564 22.2645 19.4106 21.5745 19.5197 20.8655C19.6251 20.1803 19.625 19.2684 19.625 18.1708V11.6364C19.625 11.4773 19.625 11.3978 19.5947 11.3356C19.5643 11.2733 19.4891 11.2145 19.3385 11.0968C19.2587 11.0344 19.1817 10.9664 19.1083 10.8929L17.8 9.58476C17.6 9.38478 17.5 9.28479 17.3757 9.28479C17.2515 9.28479 17.1515 9.38478 16.9515 9.58476L15.6437 10.8925C14.6673 11.8688 13.0844 11.8687 12.1082 10.8924C11.5517 10.3359 11.3124 9.58237 11.3903 8.85643Z',
  d8: 'M3.51221 7H11.007',
  d9: 'M21 2L14.0049 8.99954M21 9L14.0049 2.00046',
  d10: 'M3.01226 2.05V22L11.0067 18L19.0012 22V12M3.01226 2.05L11.0067 2M3.01226 2.05C3.01226 2.02238 2.98467 2.05 3.01226 2.05Z',
  d11: 'M18.0428 4.04296L20.8359 1.25L22.2501 2.66426L19.4571 5.45713L22.2501 8.25L20.8359 9.66426L18.0428 6.8713L15.2501 9.6638L13.8359 8.24954L16.6285 5.45713L13.8359 2.66472L15.2501 1.25046L18.0428 4.04296Z',
  d12: 'M13.1298 1.25H2.5C2.30109 1.25 2.11032 1.32902 1.96967 1.46967C1.82902 1.61032 1.75 1.80109 1.75 2V6.25H13.7147L14.5074 5.45736L11.7148 2.66502L13.1298 1.25Z',
  d13: 'M12.2146 7.75H1.75V22.75L10.5 18.375L19.25 22.75V10.1997L18.043 8.99277L15.2503 11.7853L11.7148 8.2497L12.2146 7.75Z',
} as const;

export const IconBookmarkRemove01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-stroke-rounded IconBookmarkRemove01StrokeRounded"
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

export const IconBookmarkRemove01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-duotone-rounded IconBookmarkRemove01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconBookmarkRemove01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-twotone-rounded IconBookmarkRemove01TwotoneRounded"
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
      />
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

export const IconBookmarkRemove01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-solid-rounded IconBookmarkRemove01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkRemove01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-bulk-rounded IconBookmarkRemove01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconBookmarkRemove01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-stroke-sharp IconBookmarkRemove01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkRemove01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-remove-01-solid-sharp IconBookmarkRemove01SolidSharp"
    >
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookmarkRemove01: TheIconSelfPack = {
  name: 'BookmarkRemove01',
  StrokeRounded: IconBookmarkRemove01StrokeRounded,
  DuotoneRounded: IconBookmarkRemove01DuotoneRounded,
  TwotoneRounded: IconBookmarkRemove01TwotoneRounded,
  SolidRounded: IconBookmarkRemove01SolidRounded,
  BulkRounded: IconBookmarkRemove01BulkRounded,
  StrokeSharp: IconBookmarkRemove01StrokeSharp,
  SolidSharp: IconBookmarkRemove01SolidSharp,
};
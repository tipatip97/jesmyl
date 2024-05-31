import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.1667 7.83333L18.8333 3.16667M20 5.5C20 7.433 18.433 9 16.5 9C14.567 9 13 7.433 13 5.5C13 3.567 14.567 2 16.5 2C18.433 2 20 3.567 20 5.5Z',
  d2: 'M19 11.5V17.9808C19 20.2867 19 21.4396 18.2272 21.8523C16.7305 22.6514 13.9232 19.9852 12.59 19.1824C11.8168 18.7168 11.4302 18.484 11 18.484C10.5698 18.484 10.1832 18.7168 9.41 19.1824C8.0768 19.9852 5.26947 22.6514 3.77285 21.8523C3 21.4396 3 20.2867 3 17.9808V9.70753C3 6.07416 3 4.25748 4.17157 3.12874C5.29018 2.05103 7.05974 2.00231 10.5 2.0001',
  d3: 'M3.5 7H10',
  d4: 'M13.3368 7H3.02775C3 7.77051 3 8.66411 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C4.91543 22.4624 6.82195 21.0527 8.25325 19.9944C8.69675 19.6665 9.09462 19.3723 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C12.9054 19.3723 13.3032 19.6665 13.7467 19.9944C15.178 21.0527 17.0846 22.4624 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V9.70753C19 9.06972 19 8.4879 18.9937 7.95594C18.3589 8.60043 17.4761 9 16.5 9C15.1038 9 13.8985 8.18247 13.3368 7Z',
  d5: 'M16.8809 3.125C15.5001 3.125 14.3809 4.24429 14.3809 5.625C14.3809 5.94743 14.4419 6.2556 14.5531 6.53859L17.7945 3.29719C17.5115 3.18604 17.2033 3.125 16.8809 3.125ZM19.2087 4.7114L15.9673 7.95281C16.2503 8.06396 16.5584 8.125 16.8809 8.125C18.2616 8.125 19.3809 7.00571 19.3809 5.625C19.3809 5.30257 19.3198 4.9944 19.2087 4.7114ZM12.3809 5.625C12.3809 3.13972 14.3956 1.125 16.8809 1.125C19.3661 1.125 21.3809 3.13972 21.3809 5.625C21.3809 8.11028 19.3661 10.125 16.8809 10.125C14.3956 10.125 12.3809 8.11028 12.3809 5.625Z',
  d6: 'M11.3672 1.375C11.8216 1.375 12.0488 1.375 12.1375 1.4678C12.1779 1.51017 12.1991 1.54921 12.2125 1.60624C12.2419 1.73115 12.1064 1.93926 11.8354 2.3555C11.223 3.29606 10.8672 4.41897 10.8672 5.625C10.8672 5.64918 10.8673 5.67334 10.8676 5.69745C10.8716 6.03032 10.8735 6.19675 10.7854 6.28587C10.6974 6.375 10.543 6.375 10.2341 6.375H3.32564C3.02109 6.375 2.86881 6.375 2.77932 6.27451C2.68984 6.17401 2.70687 6.02757 2.74092 5.73469C2.75019 5.65506 2.76014 5.57691 2.77084 5.50025C2.92962 4.36243 3.26519 3.43931 4.0184 2.71363C4.7677 1.99172 5.71431 1.67353 6.88176 1.52231C8.01919 1.37498 9.52787 1.37499 11.3672 1.375Z',
  d7: 'M10.8989 7.875C11.0906 7.875 11.1865 7.875 11.2595 7.9207C11.3325 7.96639 11.3776 8.05909 11.4677 8.2445C12.4403 10.2457 14.4927 11.625 16.8672 11.625C17.6724 11.625 18.4406 11.4664 19.1422 11.1787C19.615 10.9848 19.8514 10.8878 19.9843 10.977C20.1172 11.0661 20.1172 11.3011 20.1172 11.771V18.1708C20.1172 19.2684 20.1173 20.1803 20.0119 20.8655C19.9028 21.5745 19.6486 22.2645 18.9476 22.6389C18.3224 22.9727 17.6348 22.9048 17.0518 22.7278C16.4621 22.5488 15.8627 22.2239 15.3138 21.8771C14.7598 21.527 14.2165 21.1279 13.7442 20.7788C13.2814 20.4367 12.8541 20.1208 12.5703 19.9499C12.1707 19.7093 11.9184 19.5585 11.7139 19.4621C11.5252 19.3732 11.4335 19.359 11.3672 19.359C11.3009 19.359 11.2092 19.3732 11.0205 19.4621C10.8159 19.5585 10.5637 19.7093 10.1641 19.9499C9.88027 20.1208 9.453 20.4367 8.99018 20.7788C8.51784 21.1279 7.97458 21.527 7.42054 21.8771C6.87173 22.2239 6.27233 22.5488 5.68263 22.7278C5.09959 22.9048 4.41195 22.9727 3.78676 22.6389C3.08576 22.2645 2.83157 21.5745 2.72252 20.8655C2.61712 20.1803 2.61715 19.2683 2.61719 18.1708L2.61719 9.77443C2.61719 9.31398 2.61718 8.87806 2.6199 8.4657C2.62172 8.18813 2.62264 8.04934 2.71038 7.96217C2.79813 7.875 2.93774 7.875 3.21695 7.875H10.8989Z',
  d8: 'M14.6667 7.83333L19.3333 3.16667M20.5 5.5C20.5 7.433 18.933 9 17 9C15.067 9 13.5 7.433 13.5 5.5C13.5 3.567 15.067 2 17 2C18.933 2 20.5 3.567 20.5 5.5Z',
  d9: 'M4 7H10.5',
  d10: 'M19.5 12V22L11.5 18L3.5 22V2.05C3.5 2.02238 3.52239 2 3.55 2H10.5',
  d11: 'M17.75 3.25C16.3693 3.25 15.25 4.36929 15.25 5.75C15.25 6.07243 15.311 6.3806 15.4222 6.66359L18.6636 3.42219C18.3806 3.31104 18.0724 3.25 17.75 3.25ZM20.0778 4.8364L16.8364 8.07781C17.1194 8.18896 17.4276 8.25 17.75 8.25C19.1307 8.25 20.25 7.13071 20.25 5.75C20.25 5.42757 20.189 5.1194 20.0778 4.8364ZM13.25 5.75C13.25 3.26472 15.2647 1.25 17.75 1.25C20.2353 1.25 22.25 3.26472 22.25 5.75C22.25 8.23528 20.2353 10.25 17.75 10.25C15.2647 10.25 13.25 8.23528 13.25 5.75Z',
  d12: 'M13.7813 1.25C12.5356 2.34942 11.75 3.95796 11.75 5.75C11.75 5.91838 11.7569 6.08513 11.7705 6.25H1.75V2C1.75 1.80109 1.82902 1.61032 1.96967 1.46967C2.11032 1.32902 2.30109 1.25 2.5 1.25H13.7813Z',
  d13: 'M12.0914 7.75C12.9151 10.0804 15.1376 11.75 17.75 11.75C18.268 11.75 18.7706 11.6844 19.25 11.561V22.75L10.5 18.375L1.75 22.75V7.75H12.0914Z',
} as const;

export const IconBookmarkBlock01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-stroke-rounded IconBookmarkBlock01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-duotone-rounded IconBookmarkBlock01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-twotone-rounded IconBookmarkBlock01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-solid-rounded IconBookmarkBlock01SolidRounded"
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

export const IconBookmarkBlock01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-bulk-rounded IconBookmarkBlock01BulkRounded"
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

export const IconBookmarkBlock01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-stroke-sharp IconBookmarkBlock01StrokeSharp"
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

export const IconBookmarkBlock01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-01-solid-sharp IconBookmarkBlock01SolidSharp"
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

export const iconPackOfBookmarkBlock01: TheIconSelfPack = {
  name: 'BookmarkBlock01',
  StrokeRounded: IconBookmarkBlock01StrokeRounded,
  DuotoneRounded: IconBookmarkBlock01DuotoneRounded,
  TwotoneRounded: IconBookmarkBlock01TwotoneRounded,
  SolidRounded: IconBookmarkBlock01SolidRounded,
  BulkRounded: IconBookmarkBlock01BulkRounded,
  StrokeSharp: IconBookmarkBlock01StrokeSharp,
  SolidSharp: IconBookmarkBlock01SolidSharp,
};
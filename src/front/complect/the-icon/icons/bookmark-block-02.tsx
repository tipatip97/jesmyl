import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 12.5001V17.9809C19 20.2868 19 21.4397 18.2272 21.8524C16.7305 22.6515 13.9232 19.9853 12.59 19.1825C11.8168 18.7169 11.4302 18.4841 11 18.4841C10.5698 18.4841 10.1832 18.7169 9.41 19.1825C8.0768 19.9853 5.26947 22.6515 3.77285 21.8524C3 21.4397 3 20.2868 3 17.9809V9.70761C3 6.07425 3 4.25756 4.17157 3.12882C5.23467 2.10459 6.8857 2.00976 10 2.00098',
  d2: 'M13.2 3.2L18.8 8.8M20 6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6C12 8.20914 13.7909 10 16 10C18.2091 10 20 8.20914 20 6Z',
  d3: 'M3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C4.91543 22.4624 6.82195 21.0527 8.25325 19.9944C8.69675 19.6665 9.09462 19.3723 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C12.9054 19.3723 13.3032 19.6665 13.7467 19.9944C15.178 21.0527 17.0846 22.4624 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V9.70753C19 9.33545 19 8.98243 18.9987 8.64724C18.2658 9.47684 17.194 10 16 10C13.7909 10 12 8.20914 12 6C12 4.10673 13.3154 2.52067 15.0821 2.10582C14.0373 2 12.7132 2 11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753Z',
  d4: 'M19 12.4991V17.9799C19 20.2858 19 21.4387 18.2272 21.8514C16.7305 22.6506 13.9232 19.9843 12.59 19.1815C11.8168 18.7159 11.4302 18.4831 11 18.4831C10.5698 18.4831 10.1832 18.7159 9.41 19.1815C8.0768 19.9843 5.26947 22.6506 3.77285 21.8514C3 21.4387 3 20.2858 3 17.9799V9.70663C3 6.07327 3 4.25659 4.17157 3.12785C5.23467 2.10362 6.8857 2.00878 10 2',
  d5: 'M11.375 6.125C11.375 3.36358 13.6136 1.125 16.375 1.125C19.1364 1.125 21.375 3.36358 21.375 6.125C21.375 8.88642 19.1364 11.125 16.375 11.125C13.6136 11.125 11.375 8.88642 11.375 6.125ZM13.6674 4.83158C13.48 5.22322 13.375 5.66185 13.375 6.125C13.375 7.78185 14.7181 9.125 16.375 9.125C16.8381 9.125 17.2768 9.02005 17.6684 8.83263L13.6674 4.83158ZM15.0816 3.41737L19.0826 7.41842C19.27 7.02678 19.375 6.58815 19.375 6.125C19.375 4.46815 18.0319 3.125 16.375 3.125C15.9119 3.125 15.4732 3.22995 15.0816 3.41737Z',
  d6: 'M11.4296 1.375C11.6116 1.375 11.7033 1.60194 11.5803 1.73619C10.5213 2.89258 9.875 4.43332 9.875 6.125C9.875 9.71485 12.7852 12.625 16.375 12.625C17.3575 12.625 18.289 12.407 19.1239 12.0168C19.6061 11.7915 19.8472 11.6788 19.9861 11.7672C20.125 11.8556 20.125 12.1019 20.125 12.5943V18.1708C20.125 19.2684 20.1251 20.1803 20.0197 20.8655C19.9106 21.5745 19.6564 22.2645 18.9554 22.6389C18.3303 22.9727 17.6426 22.9048 17.0596 22.7278C16.4699 22.5488 15.8705 22.2239 15.3217 21.8771C14.7676 21.527 14.1688 21.0868 13.6965 20.7377C13.2337 20.3956 12.8619 20.1208 12.5781 19.9499C12.1785 19.7093 11.9263 19.5585 11.7217 19.4621C11.533 19.3732 11.4413 19.359 11.375 19.359C11.3087 19.359 11.217 19.3732 11.0283 19.4621C10.8238 19.5585 10.5715 19.7093 10.1719 19.9499C9.88808 20.1208 9.51636 20.3956 9.05354 20.7377C8.5812 21.0868 7.98239 21.527 7.42835 21.8771C6.87954 22.2239 6.28014 22.5488 5.69044 22.7278C5.1074 22.9048 4.41976 22.9727 3.79458 22.6389C3.09357 22.2645 2.83938 21.5745 2.73033 20.8655C2.62493 20.1803 2.62496 19.2684 2.625 18.1709L2.62501 9.77443C2.62499 8.00706 2.62497 6.6015 2.77865 5.50025C2.93743 4.36243 3.273 3.43931 4.02621 2.71363C4.77551 1.99172 5.72212 1.67353 6.88958 1.52231C8.027 1.37498 9.48109 1.37499 11.3204 1.375H11.4296Z',
  d7: 'M13.7 3.2L19.3 8.8M20.5 6C20.5 3.79086 18.7091 2 16.5 2C14.2909 2 12.5 3.79086 12.5 6C12.5 8.20914 14.2909 10 16.5 10C18.7091 10 20.5 8.20914 20.5 6Z',
  d8: 'M19.5 13V22L11.5 18L3.5 22V2.05C3.5 2.02238 3.52239 2 3.55 2H10.5',
  d9: 'M12.25 6.25C12.25 3.48858 14.4886 1.25 17.25 1.25C20.0114 1.25 22.25 3.48858 22.25 6.25C22.25 9.01142 20.0114 11.25 17.25 11.25C14.4886 11.25 12.25 9.01142 12.25 6.25ZM14.5424 4.95658C14.355 5.34822 14.25 5.78685 14.25 6.25C14.25 7.90685 15.5931 9.25 17.25 9.25C17.7131 9.25 18.1518 9.14505 18.5434 8.95763L14.5424 4.95658ZM15.9566 3.54237L19.9576 7.54342C20.145 7.15178 20.25 6.71315 20.25 6.25C20.25 4.59315 18.9069 3.25 17.25 3.25C16.7869 3.25 16.3482 3.35495 15.9566 3.54237Z',
  d10: 'M13.0964 1.25C11.6627 2.4423 10.75 4.23956 10.75 6.25C10.75 9.83985 13.6601 12.75 17.25 12.75C17.9478 12.75 18.6199 12.64 19.25 12.4365V22.75L10.5 18.375L1.75 22.75V2C1.75 1.80109 1.82902 1.61032 1.96967 1.46967C2.11032 1.32902 2.30109 1.25 2.5 1.25H13.0964Z',
} as const;

export const IconBookmarkBlock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-stroke-rounded IconBookmarkBlock02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-duotone-rounded IconBookmarkBlock02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-twotone-rounded IconBookmarkBlock02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-solid-rounded IconBookmarkBlock02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-bulk-rounded IconBookmarkBlock02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-stroke-sharp IconBookmarkBlock02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookmarkBlock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookmark-block-02-solid-sharp IconBookmarkBlock02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookmarkBlock02: TheIconSelfPack = {
  name: 'BookmarkBlock02',
  StrokeRounded: IconBookmarkBlock02StrokeRounded,
  DuotoneRounded: IconBookmarkBlock02DuotoneRounded,
  TwotoneRounded: IconBookmarkBlock02TwotoneRounded,
  SolidRounded: IconBookmarkBlock02SolidRounded,
  BulkRounded: IconBookmarkBlock02BulkRounded,
  StrokeSharp: IconBookmarkBlock02StrokeSharp,
  SolidSharp: IconBookmarkBlock02SolidSharp,
};
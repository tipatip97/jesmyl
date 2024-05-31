import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 17.5L21.5 21.5',
  d2: 'M5.97185 3.79282L9.31786 4.92059C9.78049 5.08073 10.4825 4.97602 10.88 4.69283L13.2273 3.01883C14.729 1.949 15.972 2.58706 15.9733 4.44162L15.9862 7.58112C15.9884 8.11281 16.3582 8.7726 16.8087 9.05928L19.207 10.5629C21.104 11.7544 20.8884 13.1649 18.7263 13.713L15.7172 14.4729C15.1735 14.6099 14.6126 15.1709 14.4693 15.721L13.7096 18.7307C13.1679 20.8868 11.7449 21.1025 10.5601 19.2114L9.0567 16.8127C8.77007 16.3621 8.1104 15.9923 7.57881 15.9901L4.43989 15.9772C2.59198 15.9696 1.94773 14.7327 3.01737 13.2306L4.69105 10.8829C4.96789 10.4917 5.07258 9.78951 4.91247 9.3268L3.78491 5.98017C3.17623 4.16109 4.15941 3.17773 5.97185 3.79282Z',
  d3: 'M5.97185 3.79282L9.31786 4.92059C9.78049 5.08073 10.4825 4.97602 10.88 4.69283L13.2273 3.01883C14.729 1.949 15.972 2.58706 15.9733 4.44162L15.9862 7.58112C15.9884 8.11281 16.3582 8.7726 16.8087 9.05928L19.207 10.5629C21.104 11.7544 20.8884 13.1649 18.7263 13.713L15.7172 14.4729C15.1735 14.6099 14.6126 15.1709 14.4693 15.721L13.7096 18.7307C13.1679 20.8868 11.7449 21.1025 10.5601 19.2114L9.05669 16.8127C8.77007 16.3621 8.1104 15.9923 7.57881 15.9901L4.43989 15.9772C2.59198 15.9696 1.94773 14.7327 3.01737 13.2306L4.69105 10.8829C4.96789 10.4917 5.07258 9.78951 4.91247 9.3268L3.78491 5.98017C3.17623 4.16109 4.15941 3.17773 5.97185 3.79282Z',
  d4: 'M17.0185 17.0185C17.3765 16.6605 17.9569 16.6605 18.3148 17.0185L21.9815 20.6852C22.3395 21.0431 22.3395 21.6235 21.9815 21.9815C21.6235 22.3395 21.0431 22.3395 20.6852 21.9815L17.0185 18.3148C16.6605 17.9569 16.6605 17.3765 17.0185 17.0185Z',
  d5: 'M15.5075 1.96667C16.363 2.40861 16.7226 3.37922 16.7236 4.43903L16.7236 4.44051L16.7366 7.57745C16.7461 7.767 16.8546 8.20209 17.2117 8.42596L19.6062 9.92721C20.6082 10.5565 21.3899 11.4482 21.2306 12.4918C21.0706 13.5393 20.0537 14.1498 18.9103 14.4396L15.9008 15.1995C15.7235 15.2069 15.3344 15.3588 15.1959 15.9073L15.1954 15.9094L14.4373 18.9129C14.1498 20.0575 13.5371 21.0701 12.4893 21.2296C11.4461 21.3885 10.5529 20.6115 9.92483 19.6091L8.42421 17.2147C8.20648 16.8673 7.76805 16.7531 7.57605 16.7395L4.43713 16.7266C3.38065 16.7222 2.41169 16.3621 1.96915 15.5091C1.52526 14.6536 1.79394 13.6556 2.407 12.7947L4.07967 10.4484C4.28745 10.157 4.24784 9.73848 4.20206 9.56568L3.0745 6.21905L3.074 6.21757C2.73219 5.19605 2.74766 4.13569 3.44041 3.44281C4.13402 2.74907 5.19438 2.73644 6.21321 3.08202L9.56352 4.21127C9.72524 4.26224 10.128 4.30762 10.4452 4.0814L12.7924 2.4074C13.6525 1.79467 14.6512 1.52424 15.5075 1.96667Z',
  d6: 'M16.5947 16.5938L20.6218 20.6207',
  d7: 'M4.34636 4.36547L6.89866 10.7108L2.56746 14.9946C2.56124 15.0008 2.56528 15.0114 2.574 15.0119L9.17768 15.3631L12.1508 21.5197C12.1547 21.5279 12.1667 21.527 12.1694 21.5183L14.3941 14.3997L21.5603 12.1985C21.569 12.1958 21.5699 12.1839 21.5618 12.1798L15.3342 9.06607L15.0532 2.53407C15.0529 2.52533 15.0423 2.52119 15.0361 2.52736L10.6112 6.9279L4.35953 4.35241C4.35129 4.34901 4.34303 4.3572 4.34636 4.36547Z',
  d8: 'M19.293 20.7072L15.293 16.7072L16.7072 15.293L20.7072 19.293L19.293 20.7072Z',
  d9: 'M14.7295 1.30048C15.0064 1.40753 15.1941 1.66782 15.2082 1.96435L15.4988 8.06661L21.3354 10.9849C21.61 11.1222 21.7732 11.4129 21.7474 11.7188C21.7216 12.0246 21.512 12.2839 21.2184 12.3733L14.4371 14.4371L12.3733 21.2184C12.2839 21.512 12.0246 21.7216 11.7188 21.7474C11.4129 21.7732 11.1222 21.61 10.9849 21.3354L8.06661 15.4988L1.96435 15.2082C1.66782 15.1941 1.40753 15.0064 1.30048 14.7295C1.19343 14.4526 1.25978 14.1386 1.46969 13.9287L5.48065 9.91775L3.17252 4.14742C3.06109 3.86885 3.1264 3.55069 3.33854 3.33854C3.55069 3.1264 3.86885 3.06109 4.14742 3.17252L9.91775 5.48065L13.9287 1.46969C14.1386 1.25978 14.4526 1.19343 14.7295 1.30048Z',
} as const;

export const IconMagicWand02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-stroke-rounded IconMagicWand02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMagicWand02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-duotone-rounded IconMagicWand02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-twotone-rounded IconMagicWand02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-solid-rounded IconMagicWand02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-bulk-rounded IconMagicWand02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-stroke-sharp IconMagicWand02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-02-solid-sharp IconMagicWand02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMagicWand02: TheIconSelfPack = {
  name: 'MagicWand02',
  StrokeRounded: IconMagicWand02StrokeRounded,
  DuotoneRounded: IconMagicWand02DuotoneRounded,
  TwotoneRounded: IconMagicWand02TwotoneRounded,
  SolidRounded: IconMagicWand02SolidRounded,
  BulkRounded: IconMagicWand02BulkRounded,
  StrokeSharp: IconMagicWand02StrokeSharp,
  SolidSharp: IconMagicWand02SolidSharp,
};
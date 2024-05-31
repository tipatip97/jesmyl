import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 12H20',
  d2: 'M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.55336 8.59783 6.6668 9M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12',
  d3: 'M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 18.9107 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12H9.09212C7.03071 12.5782 6 13.9404 6 16.3333Z',
  d4: 'M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12',
  d5: 'M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.55336 8.59783 6.6668 9',
  d6: 'M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z',
  d7: 'M12 4C9.35437 4 7.5 5.78936 7.5 7.66667C7.5 8.08123 7.54568 8.43225 7.62925 8.72853C7.77917 9.26008 7.46981 9.81252 6.93827 9.96245C6.40672 10.1124 5.85428 9.80301 5.70435 9.27147C5.56105 8.76341 5.5 8.22435 5.5 7.66667C5.5 4.38931 8.57049 2 12 2C15.4295 2 18.5 4.38931 18.5 7.66667C18.5 8.21895 18.0523 8.66667 17.5 8.66667C16.9477 8.66667 16.5 8.21895 16.5 7.66667C16.5 5.78936 14.6456 4 12 4ZM13.945 11.73C14.0942 11.1982 14.6462 10.888 15.1779 11.0372C16.3665 11.3705 17.3572 11.9605 18.037 12.8998C18.712 13.8322 19 14.9977 19 16.3333C19 18.3126 18.1799 19.7939 16.811 20.7395C15.4955 21.6481 13.7675 22 12 22C8.38245 22 5 19.6823 5 16.3333C5 15.781 5.44772 15.3333 6 15.3333C6.55228 15.3333 7 15.781 7 16.3333C7 18.1391 8.99013 20 12 20C13.5463 20 14.8182 19.6852 15.6743 19.0939C16.4769 18.5394 17 17.6874 17 16.3333C17 15.276 16.7727 14.5639 16.4169 14.0725C16.0661 13.5878 15.5107 13.2077 14.6378 12.9628C14.1061 12.8137 13.7959 12.2617 13.945 11.73Z',
  d8: 'M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.5 9.5 6.5 9.5M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12',
  d9: 'M20 13H4V11H20V13Z',
  d10: 'M12 4C9.35437 4 7.5 5.78936 7.5 7.66667V9.49962L5.5 9.49998V7.66667C5.5 4.38931 8.57049 2 12 2C15.4295 2 18.5 4.38931 18.5 7.66667H16.5C16.5 5.78936 14.6456 4 12 4ZM16.4169 14.0725C16.0661 13.5878 15.5107 13.2077 14.6378 12.9628L15.1779 11.0372C16.3665 11.3705 17.3572 11.9605 18.037 12.8998C18.712 13.8322 19 14.9977 19 16.3333C19 18.3126 18.1799 19.7939 16.811 20.7395C15.4955 21.6481 13.7675 22 12 22C8.38245 22 5 19.6823 5 16.3333H7C7 18.1391 8.99013 20 12 20C13.5463 20 14.8182 19.6852 15.6743 19.0939C16.4769 18.5394 17 17.6874 17 16.3333C17 15.276 16.7727 14.5639 16.4169 14.0725Z',
} as const;

export const IconTextStrikethroughStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-stroke-rounded IconTextStrikethroughStrokeRounded"
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

export const IconTextStrikethroughDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-duotone-rounded IconTextStrikethroughDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTextStrikethroughTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-twotone-rounded IconTextStrikethroughTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextStrikethroughSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-solid-rounded IconTextStrikethroughSolidRounded"
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

export const IconTextStrikethroughBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-bulk-rounded IconTextStrikethroughBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextStrikethroughStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-stroke-sharp IconTextStrikethroughStrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconTextStrikethroughSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-strikethrough-solid-sharp IconTextStrikethroughSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextStrikethrough: TheIconSelfPack = {
  name: 'TextStrikethrough',
  StrokeRounded: IconTextStrikethroughStrokeRounded,
  DuotoneRounded: IconTextStrikethroughDuotoneRounded,
  TwotoneRounded: IconTextStrikethroughTwotoneRounded,
  SolidRounded: IconTextStrikethroughSolidRounded,
  BulkRounded: IconTextStrikethroughBulkRounded,
  StrokeSharp: IconTextStrikethroughStrokeSharp,
  SolidSharp: IconTextStrikethroughSolidSharp,
};
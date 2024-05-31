import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.9835 2C6.17689 2.06395 4.53758 2.33111 3.41752 3.44729C2.43723 4.42418 2.10954 5.79744 2 8M15.0165 2C17.8231 2.06395 19.4624 2.33111 20.5825 3.44729C21.5628 4.42418 21.8905 5.79744 22 8M15.0165 22C17.8231 21.9361 19.4624 21.6689 20.5825 20.5527C21.5628 19.5758 21.8905 18.2026 22 16M8.9835 22C6.17689 21.9361 4.53758 21.6689 3.41752 20.5527C2.43723 19.5758 2.10954 18.2026 2 16',
  d2: 'M15 15L17 17M16 11.5C16 9.01469 13.9853 7 11.5 7C9.01469 7 7 9.01469 7 11.5C7 13.9853 9.01469 16 11.5 16C13.9853 16 16 13.9853 16 11.5Z',
  d3: 'M8.9835 2.00049C6.17689 2.06444 4.53758 2.3316 3.41752 3.44778C2.43723 4.42467 2.10954 5.79793 2 8.00049V16.0005C2.10954 18.2031 2.43723 19.5763 3.41752 20.5532C4.53758 21.6694 6.17689 21.9366 8.9835 22.0005H15.0165C17.8231 21.9366 19.4624 21.6694 20.5825 20.5532C21.5628 19.5763 21.8905 18.2031 22 16.0005V8.00049C21.8905 5.79793 21.5628 4.42467 20.5825 3.44778C19.4624 2.3316 17.8231 2.06444 15.0165 2.00049H8.9835ZM11.5 7.00049C13.9853 7.00049 16 9.01521 16 11.5005C16 13.9858 13.9853 16.0005 11.5 16.0005C9.01472 16.0005 7 13.9858 7 11.5005C7 9.01521 9.01472 7.00049 11.5 7.00049Z',
  d4: 'M8.9835 2.00049C6.17689 2.06444 4.53758 2.3316 3.41752 3.44778C2.43723 4.42467 2.10954 5.79793 2 8.00049M15.0165 2.00049C17.8231 2.06444 19.4624 2.3316 20.5825 3.44778C21.5628 4.42467 21.8905 5.79793 22 8.00049M15.0165 22.0005C17.8231 21.9366 19.4624 21.6694 20.5825 20.5532C21.5628 19.5763 21.8905 18.2031 22 16.0005M8.9835 22.0005C6.17689 21.9366 4.53758 21.6694 3.41752 20.5532C2.43723 19.5763 2.10954 18.2031 2 16.0005',
  d5: 'M15 15.0005L17 17.0005M16 11.5005C16 9.01515 13.9853 7.00049 11.5 7.00049C9.01467 7.00049 7 9.01515 7 11.5005C7 13.9858 9.01467 16.0005 11.5 16.0005C13.9853 16.0005 16 13.9858 16 11.5005Z',
  d6: 'M9.98326 1.97723C9.99584 2.52937 9.55844 2.98717 9.0063 2.99975C6.16249 3.06454 4.92642 3.35541 4.12342 4.15563C3.42972 4.84692 3.10692 5.87538 2.99879 8.04968C2.97136 8.60128 2.50195 9.0262 1.95035 8.99877C1.39875 8.97134 0.973824 8.50194 1.00126 7.95033C1.1122 5.7195 1.44478 4.00145 2.71166 2.73896C4.14878 1.30683 6.19134 1.06337 8.96074 1.00026C9.51288 0.987684 9.97068 1.42508 9.98326 1.97723ZM14.0168 1.97723C14.0294 1.42508 14.4872 0.987684 15.0393 1.00026C17.8087 1.06337 19.8513 1.30683 21.2884 2.73896C22.5553 4.00145 22.8878 5.7195 22.9988 7.95033C23.0262 8.50194 22.6013 8.97134 22.0497 8.99877C21.4981 9.0262 21.0287 8.60128 21.0013 8.04968C20.8931 5.87538 20.5703 4.84692 19.8766 4.15563C19.0736 3.35541 17.8376 3.06454 14.9937 2.99975C14.4416 2.98717 14.0042 2.52937 14.0168 1.97723ZM1.95035 15.0012C2.50195 14.9738 2.97136 15.3987 2.99879 15.9503C3.10692 18.1246 3.42972 19.1531 4.12342 19.8444C4.92642 20.6446 6.16249 20.9355 9.0063 21.0003C9.55844 21.0128 9.99584 21.4706 9.98326 22.0228C9.97068 22.5749 9.51288 23.0123 8.96074 22.9997C6.19134 22.9366 4.14878 22.6932 2.71166 21.261C1.44478 19.9986 1.1122 18.2805 1.00126 16.0497C0.973824 15.4981 1.39875 15.0287 1.95035 15.0012ZM22.0497 15.0012C22.6013 15.0287 23.0262 15.4981 22.9988 16.0497C22.8878 18.2805 22.5553 19.9986 21.2884 21.261C19.8513 22.6932 17.8087 22.9366 15.0393 22.9997C14.4872 23.0123 14.0294 22.5749 14.0168 22.0228C14.0042 21.4706 14.4416 21.0128 14.9937 21.0003C17.8376 20.9355 19.0736 20.6446 19.8766 19.8444C20.5703 19.1531 20.8931 18.1246 21.0013 15.9503C21.0287 15.3987 21.4981 14.9738 22.0497 15.0012Z',
  d7: 'M6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5C17 12.6575 16.6424 13.7315 16.0317 14.6175L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L14.6175 16.0317C13.7315 16.6424 12.6575 17 11.5 17C8.46243 17 6 14.5376 6 11.5ZM11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8Z',
  d8: 'M9.14426 2.5H2.5V9.14426M14.8557 2.5H21.5V9.14426M14.8557 21.5H21.5V14.8557M9.14426 21.5H2.5V14.8557',
  d9: 'M15 15L17 17M16 11.5C16 9.01472 13.9853 7 11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C13.9853 16 16 13.9853 16 11.5Z',
  d10: 'M1.5 1.5H9.14426V3.5H3.5V9.14426H1.5V1.5ZM20.5 3.5H14.8557V1.5H22.5V9.14426H20.5V3.5ZM22.5 14.8557V22.5H14.8557V20.5H20.5V14.8557H22.5ZM3.5 20.5V14.8557H1.5V22.5H9.14426V20.5H3.5Z',
  d11: 'M6 11.5C6 8.46243 8.46243 6 11.5 6C14.5376 6 17 8.46243 17 11.5C17 12.6575 16.6424 13.7315 16.0317 14.6175L17.7071 16.2929L16.2929 17.7071L14.6175 16.0317C13.7315 16.6424 12.6575 17 11.5 17C8.46243 17 6 14.5376 6 11.5ZM11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8Z',
} as const;

export const IconSearchVisualStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-stroke-rounded IconSearchVisualStrokeRounded"
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

export const IconSearchVisualDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-duotone-rounded IconSearchVisualDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchVisualTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-twotone-rounded IconSearchVisualTwotoneRounded"
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

export const IconSearchVisualSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-solid-rounded IconSearchVisualSolidRounded"
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

export const IconSearchVisualBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-bulk-rounded IconSearchVisualBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchVisualStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-stroke-sharp IconSearchVisualStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchVisualSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="search-visual-solid-sharp IconSearchVisualSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSearchVisual: TheIconSelfPack = {
  name: 'SearchVisual',
  StrokeRounded: IconSearchVisualStrokeRounded,
  DuotoneRounded: IconSearchVisualDuotoneRounded,
  TwotoneRounded: IconSearchVisualTwotoneRounded,
  SolidRounded: IconSearchVisualSolidRounded,
  BulkRounded: IconSearchVisualBulkRounded,
  StrokeSharp: IconSearchVisualStrokeSharp,
  SolidSharp: IconSearchVisualSolidSharp,
};
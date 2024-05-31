import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 5.5C20.5 7.15685 19.1569 8.5 17.5 8.5C15.8431 8.5 14.5 7.15685 14.5 5.5C14.5 3.84315 15.8431 2.5 17.5 2.5C19.1569 2.5 20.5 3.84315 20.5 5.5Z',
  d2: 'M8.5 11.5C8.5 13.1569 7.15685 14.5 5.5 14.5C3.84315 14.5 2.5 13.1569 2.5 11.5C2.5 9.84315 3.84315 8.5 5.5 8.5C7.15685 8.5 8.5 9.84315 8.5 11.5Z',
  d3: 'M21.5 18.5C21.5 20.1569 20.1569 21.5 18.5 21.5C16.8431 21.5 15.5 20.1569 15.5 18.5C15.5 16.8431 16.8431 15.5 18.5 15.5C20.1569 15.5 21.5 16.8431 21.5 18.5Z',
  d4: 'M14.5348 4.58109C14.1554 4.52765 13.7677 4.5 13.3733 4.5C10.2974 4.5 7.62058 6.18227 6.24054 8.66317M19.7131 7.49453C20.8311 8.86497 21.5 10.6056 21.5 12.5C21.5 13.8758 21.1472 15.1705 20.5258 16.3012M15.8816 20.1117C15.0917 20.3638 14.2486 20.5 13.3733 20.5C9.58287 20.5 6.39853 17.9454 5.5 14.4898',
  d5: 'M19.7416 7.49454C19.1921 8.11146 18.3917 8.5 17.5006 8.5C15.8437 8.5 14.5006 7.15685 14.5006 5.5C14.5006 5.17947 14.5509 4.87068 14.6439 4.58109C14.2705 4.52765 13.8888 4.5 13.5006 4.5C10.4726 4.5 7.83752 6.18227 6.47899 8.66317C7.65545 9.06884 8.50059 10.1857 8.50059 11.5C8.50059 13.0729 7.29016 14.363 5.75 14.4898C6.63453 17.9454 9.76923 20.5 13.5006 20.5C14.3623 20.5 15.1921 20.3638 15.9698 20.1117C15.6727 19.6461 15.5006 19.0932 15.5006 18.5C15.5006 16.8431 16.8437 15.5 18.5006 15.5C19.2889 15.5 20.0062 15.804 20.5416 16.3012C21.1533 15.1705 21.5006 13.8758 21.5006 12.5C21.5006 10.6056 20.8421 8.86497 19.7416 7.49454Z',
  d6: 'M17.5 1.5C15.2909 1.5 13.5 3.29086 13.5 5.5C13.5 7.70914 15.2909 9.5 17.5 9.5C19.7091 9.5 21.5 7.70914 21.5 5.5C21.5 3.29086 19.7091 1.5 17.5 1.5Z',
  d7: 'M5.5 7.5C3.29086 7.5 1.5 9.29086 1.5 11.5C1.5 13.7091 3.29086 15.5 5.5 15.5C7.70914 15.5 9.5 13.7091 9.5 11.5C9.5 9.29086 7.70914 7.5 5.5 7.5Z',
  d8: 'M18.5 14.5C16.2909 14.5 14.5 16.2909 14.5 18.5C14.5 20.7091 16.2909 22.5 18.5 22.5C20.7091 22.5 22.5 20.7091 22.5 18.5C22.5 16.2909 20.7091 14.5 18.5 14.5Z',
  d9: 'M13.3724 5.5C10.6684 5.5 8.32148 6.97769 7.1135 9.14928L5.36571 8.17705C6.9178 5.38685 9.92453 3.5 13.3724 3.5C13.8135 3.5 14.2479 3.53093 14.6733 3.59086L14.3943 5.57131C14.0611 5.52436 13.7199 5.5 13.3724 5.5ZM20.4991 12.5C20.4991 10.8457 19.916 9.32633 18.9373 8.12666L20.4871 6.86241C21.7444 8.40362 22.4991 10.3655 22.4991 12.5C22.4991 14.049 22.1014 15.5088 21.4012 16.7829L19.6485 15.8196C20.1911 14.8322 20.4991 13.7027 20.4991 12.5ZM6.46689 14.2381C7.25118 17.2544 10.0387 19.5 13.3724 19.5C14.1434 19.5 14.8839 19.3801 15.5767 19.159L16.1847 21.0643C15.2975 21.3475 14.352 21.5 13.3724 21.5C9.12518 21.5 5.54402 18.6364 4.53125 14.7414L6.46689 14.2381Z',
  d10: 'M13.75 5.5C13.75 3.42893 15.4289 1.75 17.5 1.75C19.5711 1.75 21.25 3.42893 21.25 5.5C21.25 7.57107 19.5711 9.25 17.5 9.25C15.4289 9.25 13.75 7.57107 13.75 5.5Z',
  d11: 'M1.75 11.5C1.75 9.42893 3.42893 7.75 5.5 7.75C7.57107 7.75 9.25 9.42893 9.25 11.5C9.25 13.5711 7.57107 15.25 5.5 15.25C3.42893 15.25 1.75 13.5711 1.75 11.5Z',
  d12: 'M14.75 18.5C14.75 16.4289 16.4289 14.75 18.5 14.75C20.5711 14.75 22.25 16.4289 22.25 18.5C22.25 20.5711 20.5711 22.25 18.5 22.25C16.4289 22.25 14.75 20.5711 14.75 18.5Z',
} as const;

export const IconShare07StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-stroke-rounded IconShare07StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare07DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-duotone-rounded IconShare07DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare07TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-twotone-rounded IconShare07TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare07SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-solid-rounded IconShare07SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare07BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-bulk-rounded IconShare07BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare07StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-stroke-sharp IconShare07StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare07SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-07-solid-sharp IconShare07SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShare07: TheIconSelfPack = {
  name: 'Share07',
  StrokeRounded: IconShare07StrokeRounded,
  DuotoneRounded: IconShare07DuotoneRounded,
  TwotoneRounded: IconShare07TwotoneRounded,
  SolidRounded: IconShare07SolidRounded,
  BulkRounded: IconShare07BulkRounded,
  StrokeSharp: IconShare07StrokeSharp,
  SolidSharp: IconShare07SolidSharp,
};
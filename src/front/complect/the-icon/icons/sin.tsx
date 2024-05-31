import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 7H12M14 7H12M14 17H12M10 17H12M12 7V17',
  d2: 'M22 7V17L17 7V17',
  d3: 'M6.68959 8.61565C6.26371 7.65235 5.4428 7 4.5 7H4C2.89543 7 2 8.11929 2 9.5C2 10.8807 2.89543 12 4 12H5C6.10457 12 7 13.1193 7 14.5C7 15.8807 6.10457 17 5 17H4.5C3.47484 17 2.5938 16.2287 2.20802 15.125',
  d4: 'M9 7C9 6.44772 9.44772 6 10 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H13V16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17C9 16.4477 9.44772 16 10 16H11V8H10C9.44772 8 9 7.55228 9 7Z',
  d5: 'M16.7702 6.02685C17.2216 5.92029 17.687 6.13807 17.8944 6.55288L21 12.764V7.0001C21 6.44781 21.4477 6.0001 22 6.0001C22.5523 6.0001 23 6.44781 23 7.0001V17.0001C23 17.4639 22.6811 17.8668 22.2298 17.9733C21.7784 18.0799 21.313 17.8621 21.1056 17.4473L18 11.2362V17.0001C18 17.5524 17.5523 18.0001 17 18.0001C16.4477 18.0001 16 17.5524 16 17.0001V7.0001C16 6.53632 16.3189 6.1334 16.7702 6.02685Z',
  d6: 'M1 9.5C1 7.78677 2.14645 6 4 6H4.5C5.94172 6 7.0645 6.99059 7.60419 8.2113C7.82751 8.71642 7.59907 9.30694 7.09395 9.53026C6.58883 9.75358 5.99831 9.52513 5.77499 9.02001C5.46291 8.31412 4.94388 8 4.5 8H4C3.64441 8 3 8.45181 3 9.5C3 10.5482 3.64441 11 4 11H5C6.85355 11 8 12.7868 8 14.5C8 16.2132 6.85355 18 5 18H4.5C2.92954 18 1.7458 16.8333 1.26403 15.455C1.0818 14.9336 1.35671 14.3632 1.87806 14.181C2.39942 13.9988 2.96979 14.2737 3.15202 14.795C3.4418 15.6241 4.02014 16 4.5 16H5C5.35559 16 6 15.5482 6 14.5C6 13.4518 5.35559 13 5 13H4C2.14645 13 1 11.2132 1 9.5Z',
  d7: 'M22 6.5V17L17 7V17.5',
  d8: 'M11.001 8H10.001V6H14.001V8H13.001V16H14.001V18H10.001V16H11.001V8Z',
  d9: 'M16.7712 6.02685C17.2226 5.92029 17.688 6.13807 17.8954 6.55288L21.001 12.764V6.02685H23.001V17.0001C23.001 17.4639 22.6821 17.8668 22.2307 17.9733C21.7794 18.0799 21.314 17.8621 21.1065 17.4473L18.001 11.2362V17.9733H16.001V7.0001C16.001 6.53632 16.3199 6.1334 16.7712 6.02685Z',
  d10: 'M1.00098 9.5C1.00098 7.78677 2.14742 6 4.00098 6H4.50098C5.9427 6 7.06548 6.99059 7.60517 8.2113L5.77597 9.02001C5.46388 8.31412 4.94485 8 4.50098 8H4.00098C3.64539 8 3.00098 8.45181 3.00098 9.5C3.00098 10.5482 3.64539 11 4.00098 11H5.00098C6.85453 11 8.00098 12.7868 8.00098 14.5C8.00098 16.2132 6.85453 18 5.00098 18H4.50098C2.93051 18 1.74678 16.8333 1.265 15.455L3.15299 14.795C3.44278 15.6241 4.02112 16 4.50098 16H5.00098C5.35656 16 6.00098 15.5482 6.00098 14.5C6.00098 13.4518 5.35656 13 5.00098 13H4.00098C2.14742 13 1.00098 11.2132 1.00098 9.5Z',
} as const;

export const IconSinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-stroke-rounded IconSinStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-duotone-rounded IconSinDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-twotone-rounded IconSinTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-solid-rounded IconSinSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconSinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-bulk-rounded IconSinBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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

export const IconSinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-stroke-sharp IconSinStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconSinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sin-solid-sharp IconSinSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfSin: TheIconSelfPack = {
  name: 'Sin',
  StrokeRounded: IconSinStrokeRounded,
  DuotoneRounded: IconSinDuotoneRounded,
  TwotoneRounded: IconSinTwotoneRounded,
  SolidRounded: IconSinSolidRounded,
  BulkRounded: IconSinBulkRounded,
  StrokeSharp: IconSinStrokeSharp,
  SolidSharp: IconSinSolidSharp,
};
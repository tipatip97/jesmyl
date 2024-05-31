import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 20.7288C18 22.6651 16.5884 13.6549 16.3311 12.0453C15.4666 6.63802 14.1205 3 12 3C9.87955 3 8.53343 6.63802 7.66891 12.0453C7.41158 13.6549 6 22.6651 2 20.7288',
  d2: 'M2 12H4.5',
  d3: 'M19.5 12H22',
  d4: 'M10.5 12H13.5',
  d5: 'M10.2764 5.90347C9.62121 7.36732 9.08481 9.52486 8.6566 12.2032C8.65436 12.2172 8.65202 12.2319 8.64959 12.2471C8.51419 13.0952 8.08239 15.7998 7.16661 18.0883C6.70662 19.2377 6.07364 20.4173 5.18719 21.1752C4.72938 21.5667 4.1778 21.868 3.53214 21.9662C2.88097 22.0653 2.2177 21.945 1.56452 21.6288C1.06741 21.3882 0.859506 20.7902 1.10014 20.2931C1.34078 19.7959 1.93883 19.588 2.43594 19.8287C2.78275 19.9966 3.0386 20.0183 3.23125 19.989C3.42942 19.9588 3.64638 19.8613 3.88743 19.6552C4.39869 19.218 4.88469 18.4074 5.30976 17.3452C6.14151 15.2667 6.54546 12.7396 6.67878 11.9056L6.68168 11.8874C7.11799 9.15848 7.68691 6.79336 8.45098 5.08637C9.17598 3.46665 10.2832 2 12.0002 2C13.7173 2 14.8245 3.46665 15.5495 5.08637C16.3135 6.79336 16.8825 9.15848 17.3188 11.8874L17.3217 11.9056C17.455 12.7396 17.8589 15.2667 18.6907 17.3452C19.1158 18.4074 19.6018 19.218 20.113 19.6552C20.3541 19.8613 20.571 19.9588 20.7692 19.989C20.9619 20.0183 21.2177 19.9966 21.5645 19.8287C22.0616 19.588 22.6597 19.7959 22.9003 20.2931C23.141 20.7902 22.933 21.3882 22.4359 21.6288C21.7828 21.945 21.1195 22.0653 20.4683 21.9662C19.8227 21.868 19.2711 21.5667 18.8133 21.1752C17.9268 20.4173 17.2938 19.2377 16.8339 18.0883C15.9181 15.7998 15.4863 13.0952 15.3509 12.2471C15.3484 12.2319 15.3461 12.2172 15.3439 12.2032C14.9156 9.52486 14.3792 7.36732 13.724 5.90347C13.0297 4.35236 12.4036 4 12.0002 4C11.5969 4 10.9707 4.35236 10.2764 5.90347Z',
  d6: 'M1 12C1 11.4477 1.44772 11 2 11H4.5C5.05228 11 5.5 11.4477 5.5 12C5.5 12.5523 5.05228 13 4.5 13H2C1.44772 13 1 12.5523 1 12ZM9.5 12C9.5 11.4477 9.94772 11 10.5 11H13.5C14.0523 11 14.5 11.4477 14.5 12C14.5 12.5523 14.0523 13 13.5 13H10.5C9.94772 13 9.5 12.5523 9.5 12ZM18.5 12C18.5 11.4477 18.9477 11 19.5 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H19.5C18.9477 13 18.5 12.5523 18.5 12Z',
  d7: 'M2 12H5',
  d8: 'M19 12H22',
  d9: 'M10.2764 5.90577C9.62115 7.37047 9.08475 9.52928 8.65653 12.2092C8.65429 12.2232 8.65195 12.2379 8.64952 12.2531C8.51412 13.1017 8.08233 15.8079 7.16654 18.0977C6.70655 19.2479 6.07357 20.4281 5.18712 21.1865C4.72931 21.5782 4.17774 21.8796 3.53208 21.9779C2.88091 22.0771 2.15319 21.8278 1.5 21.5115L2.43587 19.8392C2.78269 20.0071 3.03853 20.0289 3.23119 19.9995C3.42935 19.9694 3.64632 19.8718 3.88737 19.6655C4.39863 19.2281 4.88462 18.4171 5.3097 17.3542C6.14145 15.2745 6.5454 12.7459 6.67871 11.9114L6.68161 11.8933C7.11792 9.16269 7.68684 6.79617 8.45091 5.08818C9.17592 3.46751 10.2831 2 12.0002 2C13.7172 2 14.8244 3.46751 15.5494 5.08818C16.3135 6.79617 16.8824 9.16269 17.3187 11.8933L17.3216 11.9114C17.4549 12.7459 17.8589 15.2745 18.6906 17.3542C19.1157 18.4171 19.6017 19.2281 20.113 19.6655C20.354 19.8718 20.571 19.9694 20.7691 19.9995C20.9618 20.0289 21.2176 20.0071 21.5645 19.8392L22.5 21.5115C21.8468 21.8278 21.1194 22.0771 20.4682 21.9779C19.8226 21.8796 19.271 21.5782 18.8132 21.1865C17.9268 20.4281 17.2938 19.2479 16.8338 18.0977C15.918 15.8079 15.4862 13.1017 15.3508 12.2531C15.3484 12.2379 15.346 12.2232 15.3438 12.2092C14.9156 9.52928 14.3792 7.37047 13.7239 5.90577C13.0297 4.35374 12.4035 4.00118 12.0002 4.00118C11.5968 4.00118 10.9707 4.35374 10.2764 5.90577Z',
  d10: 'M5 13H2V11H5V13Z',
  d11: 'M22 13H19V11H22V13Z',
  d12: 'M13.5 13H10.5V11H13.5V13Z',
} as const;

export const IconCosine01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-stroke-rounded IconCosine01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosine01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-duotone-rounded IconCosine01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosine01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-twotone-rounded IconCosine01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCosine01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-solid-rounded IconCosine01SolidRounded"
    >
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

export const IconCosine01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-bulk-rounded IconCosine01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCosine01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-stroke-sharp IconCosine01StrokeSharp"
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
        d={d.d8} 
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

export const IconCosine01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-01-solid-sharp IconCosine01SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCosine01: TheIconSelfPack = {
  name: 'Cosine01',
  StrokeRounded: IconCosine01StrokeRounded,
  DuotoneRounded: IconCosine01DuotoneRounded,
  TwotoneRounded: IconCosine01TwotoneRounded,
  SolidRounded: IconCosine01SolidRounded,
  BulkRounded: IconCosine01BulkRounded,
  StrokeSharp: IconCosine01StrokeSharp,
  SolidSharp: IconCosine01SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 3.27124C18 1.33494 16.5884 10.3451 16.3311 11.9547C15.4666 17.362 14.1205 21 12 21C9.87955 21 8.53343 17.362 7.66891 11.9547C7.41158 10.3451 6 1.33494 2 3.27124',
  d2: 'M2 12H5',
  d3: 'M19 12H22',
  d4: 'M10 12L14 12',
  d5: 'M10.2764 18.0965C9.62121 16.6327 9.08481 14.4751 8.6566 11.7968C8.65436 11.7828 8.65202 11.7681 8.64959 11.7529C8.51419 10.9048 8.08239 8.20022 7.16661 5.91174C6.70662 4.76226 6.07364 3.58274 5.18719 2.82477C4.72938 2.43331 4.1778 2.13205 3.53214 2.03379C2.88097 1.9347 2.2177 2.05496 1.56452 2.37115C1.06741 2.61179 0.859506 3.20984 1.10014 3.70695C1.34078 4.20405 1.93883 4.41196 2.43594 4.17133C2.78275 4.00344 3.0386 3.98171 3.23125 4.01103C3.42942 4.04118 3.64638 4.13874 3.88743 4.34484C4.39869 4.78201 4.88469 5.59257 5.30976 6.65479C6.14151 8.73328 6.54546 11.2604 6.67878 12.0944L6.68168 12.1126C7.11799 14.8415 7.68691 17.2066 8.45098 18.9136C9.17598 20.5334 10.2832 22 12.0002 22C13.7173 22 14.8245 20.5334 15.5495 18.9136C16.3135 17.2066 16.8825 14.8415 17.3188 12.1126L17.3217 12.0944C17.455 11.2604 17.8589 8.73329 18.6907 6.6548C19.1158 5.59257 19.6018 4.78201 20.113 4.34484C20.3541 4.13874 20.571 4.04118 20.7692 4.01103C20.9619 3.98171 21.2177 4.00344 21.5645 4.17133C22.0616 4.41196 22.6597 4.20405 22.9003 3.70695C23.141 3.20984 22.933 2.61179 22.4359 2.37115C21.7828 2.05496 21.1195 1.9347 20.4683 2.03379C19.8227 2.13205 19.2711 2.43331 18.8133 2.82477C17.9268 3.58274 17.2938 4.76226 16.8339 5.91174C15.9181 8.20021 15.4863 10.9048 15.3509 11.7529C15.3484 11.7681 15.3461 11.7828 15.3439 11.7968C14.9156 14.4751 14.3792 16.6327 13.724 18.0965C13.0297 19.6476 12.4036 20 12.0002 20C11.5969 20 10.9707 19.6476 10.2764 18.0965Z',
  d6: 'M1 12C1 11.4477 1.44772 11 2 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H2C1.44772 13 1 12.5523 1 12ZM9.5 12C9.5 11.4477 9.94772 11 10.5 11H13.5C14.0523 11 14.5 11.4477 14.5 12C14.5 12.5523 14.0523 13 13.5 13H10.5C9.94772 13 9.5 12.5523 9.5 12ZM18 12C18 11.4477 18.4477 11 19 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H19C18.4477 13 18 12.5523 18 12Z',
  d7: 'M10.2764 18.0942C9.62115 16.6295 9.08475 14.4707 8.65653 11.7908C8.65429 11.7768 8.65195 11.7621 8.64952 11.7469C8.51412 10.8983 8.08233 8.19211 7.16654 5.90228C6.70655 4.75213 6.07357 3.57191 5.18712 2.8135C4.72931 2.42181 4.17774 2.12037 3.53208 2.02205C2.88091 1.9229 2.15319 2.17216 1.5 2.48854L2.43587 4.16084C2.78269 3.99286 3.03853 3.97112 3.23119 4.00045C3.42935 4.03063 3.64632 4.12824 3.88737 4.33447C4.39863 4.77188 4.88462 5.58292 5.3097 6.64577C6.14145 8.72549 6.5454 11.2541 6.67871 12.0886L6.68161 12.1067C7.11792 14.8373 7.68684 17.2038 8.45091 18.9118C9.17592 20.5325 10.2831 22 12.0002 22C13.7172 22 14.8244 20.5325 15.5494 18.9118C16.3135 17.2038 16.8824 14.8373 17.3187 12.1067L17.3216 12.0886C17.4549 11.2541 17.8589 8.72549 18.6906 6.64577C19.1157 5.58292 19.6017 4.77188 20.113 4.33447C20.354 4.12824 20.571 4.03063 20.7691 4.00045C20.9618 3.97112 21.2176 3.99286 21.5645 4.16084L22.5 2.48854C21.8468 2.17216 21.1194 1.9229 20.4682 2.02205C19.8226 2.12037 19.271 2.42181 18.8132 2.8135C17.9268 3.57191 17.2938 4.75213 16.8338 5.90228C15.918 8.1921 15.4862 10.8983 15.3508 11.7469C15.3484 11.7621 15.346 11.7768 15.3438 11.7908C14.9156 14.4707 14.3792 16.6295 13.7239 18.0942C13.0297 19.6463 12.4035 19.9988 12.0002 19.9988C11.5968 19.9988 10.9707 19.6463 10.2764 18.0942Z',
  d8: 'M5 11H2V13H5V11Z',
  d9: 'M22 11H19V13H22V11Z',
  d10: 'M13.5 11H10.5V13H13.5V11Z',
} as const;

export const IconCosine02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-stroke-rounded IconCosine02StrokeRounded"
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

export const IconCosine02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-duotone-rounded IconCosine02DuotoneRounded"
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

export const IconCosine02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-twotone-rounded IconCosine02TwotoneRounded"
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

export const IconCosine02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-solid-rounded IconCosine02SolidRounded"
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

export const IconCosine02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-bulk-rounded IconCosine02BulkRounded"
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

export const IconCosine02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-stroke-sharp IconCosine02StrokeSharp"
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

export const IconCosine02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cosine-02-solid-sharp IconCosine02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfCosine02: TheIconSelfPack = {
  name: 'Cosine02',
  StrokeRounded: IconCosine02StrokeRounded,
  DuotoneRounded: IconCosine02DuotoneRounded,
  TwotoneRounded: IconCosine02TwotoneRounded,
  SolidRounded: IconCosine02SolidRounded,
  BulkRounded: IconCosine02BulkRounded,
  StrokeSharp: IconCosine02StrokeSharp,
  SolidSharp: IconCosine02SolidSharp,
};
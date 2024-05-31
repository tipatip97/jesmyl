import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 3.00195H21.5',
  d2: 'M4.5 3.00195V14.001C4.5 16.3298 4.93059 17.0903 6.92752 18.2885L9.94202 20.0972C10.9447 20.6987 11.446 20.9996 12 20.9996C12.554 20.9996 13.0553 20.6987 14.058 20.0972L17.0725 18.2885C19.0694 17.0903 19.5 16.3298 19.5 14.001V3.00195',
  d3: 'M12.6045 8.00546L13.2204 9.24751C13.3044 9.4204 13.5284 9.58625 13.7173 9.618L14.8337 9.80501C15.5476 9.92498 15.7156 10.4472 15.2012 10.9624L14.3333 11.8374C14.1863 11.9856 14.1058 12.2715 14.1513 12.4761L14.3998 13.5594C14.5957 14.4168 14.1443 14.7485 13.3919 14.3004L12.3455 13.6758C12.1565 13.5629 11.845 13.5629 11.6526 13.6758L10.6062 14.3004C9.85726 14.7485 9.40231 14.4133 9.59829 13.5594L9.84676 12.4761C9.89226 12.2715 9.81177 11.9856 9.66478 11.8374L8.79688 10.9624C8.28594 10.4472 8.45042 9.92498 9.16434 9.80501L10.2807 9.618C10.4662 9.58625 10.6902 9.4204 10.7742 9.24751L11.3901 8.00546C11.7261 7.33151 12.272 7.33151 12.6045 8.00546Z',
  d4: 'M2.5 3.00098H21.5',
  d5: 'M4.5 14V3.00098H19.5V14C19.5 16.3288 19.0694 17.0893 17.0725 18.2875L14.058 20.0962L14.058 20.0962C13.0553 20.6978 12.554 20.9986 12 20.9986C11.446 20.9986 10.9447 20.6978 9.94204 20.0962L9.94202 20.0962L6.92752 18.2875C4.93059 17.0893 4.5 16.3288 4.5 14Z',
  d6: 'M4.5 3.00098V14C4.5 16.3288 4.93059 17.0893 6.92752 18.2875L9.94202 20.0962C10.9447 20.6978 11.446 20.9986 12 20.9986C12.554 20.9986 13.0553 20.6978 14.058 20.0962L17.0725 18.2875C19.0694 17.0893 19.5 16.3288 19.5 14V3.00098H4.5ZM13.2204 9.24751L12.6045 8.00546C12.272 7.33151 11.7261 7.33151 11.3901 8.00546L10.7742 9.24751C10.6902 9.4204 10.4662 9.58625 10.2807 9.618L9.16434 9.80501C8.45042 9.92498 8.28594 10.4472 8.79688 10.9624L9.66478 11.8375C9.81177 11.9856 9.89226 12.2715 9.84676 12.4761L9.59829 13.5594C9.40231 14.4133 9.85726 14.7485 10.6062 14.3004L11.6526 13.6758C11.845 13.5629 12.1565 13.5629 12.3455 13.6758L13.3919 14.3004C14.1443 14.7485 14.5957 14.4168 14.3998 13.5594L14.1513 12.4761C14.1058 12.2715 14.1863 11.9856 14.3333 11.8375L15.2012 10.9624C15.7156 10.4472 15.5476 9.92498 14.8337 9.80501L13.7173 9.618C13.5284 9.58625 13.3044 9.4204 13.2204 9.24751Z',
  d7: 'M4.5 3.00098V14C4.5 16.3288 4.93059 17.0893 6.92752 18.2875L9.94202 20.0962C10.9447 20.6978 11.446 20.9986 12 20.9986C12.554 20.9986 13.0553 20.6978 14.058 20.0962L17.0725 18.2875C19.0694 17.0893 19.5 16.3288 19.5 14V3.00098',
  d8: 'M1.75 3.25098C1.75 2.69869 2.19772 2.25098 2.75 2.25098H21.25C21.8023 2.25098 22.25 2.69869 22.25 3.25098C22.25 3.80326 21.8023 4.25098 21.25 4.25098H2.75C2.19772 4.25098 1.75 3.80326 1.75 3.25098Z',
  d9: 'M4.5 2.25098C4.08579 2.25098 3.75 2.58676 3.75 3.00098L3.75 14C3.75 15.1881 3.85395 16.1278 4.31226 16.9373C4.77057 17.7467 5.52287 18.3193 6.54165 18.9306L9.587 20.7578C10.062 21.0428 10.4657 21.285 10.8202 21.4517C11.1977 21.6292 11.574 21.7486 12 21.7486C12.426 21.7486 12.8023 21.6292 13.1798 21.4517C13.5343 21.2851 13.9688 21.0244 14.4437 20.7394L14.4438 20.7393L14.4439 20.7393L17.4584 18.9306C18.4771 18.3193 19.2294 17.7467 19.6877 16.9373C20.146 16.1278 20.25 15.1881 20.25 14L20.25 3.00098C20.25 2.58676 19.9142 2.25098 19.5 2.25098L4.5 2.25098ZM13.2204 9.24751L12.6045 8.00546C12.272 7.33151 11.7261 7.33151 11.3901 8.00546L10.7742 9.24751C10.6902 9.4204 10.4662 9.58625 10.2807 9.618L9.16434 9.80501C8.45042 9.92498 8.28594 10.4472 8.79688 10.9624L9.66478 11.8375C9.81177 11.9856 9.89226 12.2715 9.84676 12.4761L9.59829 13.5594C9.40231 14.4133 9.85726 14.7485 10.6062 14.3004L11.6526 13.6758C11.845 13.5629 12.1565 13.5629 12.3455 13.6758L13.3919 14.3004C14.1443 14.7485 14.5957 14.4168 14.3998 13.5594L14.1513 12.4761C14.1058 12.2715 14.1863 11.9856 14.3333 11.8375L15.2012 10.9624C15.7156 10.4472 15.5476 9.92498 14.8337 9.80501L13.7173 9.618C13.5284 9.58625 13.3044 9.4204 13.2204 9.24751Z',
  d10: 'M3.75 3.00098C3.75 2.58676 4.08579 2.25098 4.5 2.25098H19.5C19.9142 2.25098 20.25 2.58676 20.25 3.00098V14C20.25 15.1881 20.146 16.1278 19.6877 16.9373C19.2294 17.7467 18.4771 18.3193 17.4584 18.9306L14.4439 20.7393L14.4438 20.7393C13.9688 21.0243 13.5343 21.2851 13.1798 21.4517C12.8023 21.6292 12.426 21.7486 12 21.7486C11.574 21.7486 11.1977 21.6292 10.8202 21.4517C10.4657 21.285 10.062 21.0428 9.587 20.7578L6.54165 18.9306C5.52287 18.3193 4.77057 17.7467 4.31226 16.9373C3.85395 16.1278 3.75 15.1881 3.75 14V3.00098Z',
  d11: 'M4.5 3V15.9809L11.9363 20.983C11.97 21.0057 12.0141 21.0057 12.0478 20.983L19.5 15.9809V3',
  d12: 'M11.9086 7.07589C11.9415 6.99156 12.0606 6.9908 12.0945 7.07471L13.2094 9.83066L15.9241 9.79009C16.0123 9.78877 16.0589 9.89406 15.9985 9.95846L14.0432 12.0452L15.0355 14.9523C15.0655 15.0401 14.9701 15.1179 14.8901 15.0708L12.0001 13.3691L9.08408 15.0645C9.00237 15.112 8.90645 15.0301 8.94055 14.942L10.0612 12.0452L8.00906 9.87723C7.94725 9.81194 7.99629 9.7046 8.08612 9.70859L10.8348 9.83066L11.9086 7.07589Z',
  d13: 'M21.75 4.25098H2.25V2.25098H21.75V4.25098Z',
  d14: 'M3.75 16.4012L11.584 21.6227C11.8359 21.7906 12.1641 21.7906 12.416 21.6227L20.25 16.4012L20.25 2.25098L3.75 2.25098L3.75 16.4012ZM12 6.5L13.35 9.65H16.5L14.25 12.125L15.375 15.5L12 13.7L8.625 15.5L9.75 12.125L7.5 9.65L10.65 9.65L12 6.5Z',
} as const;

export const IconHonourStarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-stroke-rounded IconHonourStarStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHonourStarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-duotone-rounded IconHonourStarDuotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconHonourStarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-twotone-rounded IconHonourStarTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconHonourStarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-solid-rounded IconHonourStarSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconHonourStarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-bulk-rounded IconHonourStarBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHonourStarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-stroke-sharp IconHonourStarStrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHonourStarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="honour-star-solid-sharp IconHonourStarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHonourStar: TheIconSelfPack = {
  name: 'HonourStar',
  StrokeRounded: IconHonourStarStrokeRounded,
  DuotoneRounded: IconHonourStarDuotoneRounded,
  TwotoneRounded: IconHonourStarTwotoneRounded,
  SolidRounded: IconHonourStarSolidRounded,
  BulkRounded: IconHonourStarBulkRounded,
  StrokeSharp: IconHonourStarStrokeSharp,
  SolidSharp: IconHonourStarSolidSharp,
};
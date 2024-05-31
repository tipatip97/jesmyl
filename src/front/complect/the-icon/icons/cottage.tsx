import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 21H21',
  d2: 'M4 21V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V21',
  d3: 'M9 21V18C9 16.1775 10.0596 15 12 15C13.9404 15 15 16.1775 15 18V21',
  d4: 'M4 11V21H9V18C9 16.1775 10.0596 15 12 15C13.9404 15 15 16.1775 15 18V21H20V11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z',
  d5: 'M2 20.75C2 20.1977 2.44772 19.75 3 19.75H21C21.5523 19.75 22 20.1977 22 20.75C22 21.3023 21.5523 21.75 21 21.75H3C2.44772 21.75 2 21.3023 2 20.75Z',
  d6: 'M3.25 11C3.25 6.16751 7.16751 2.25 12 2.25C16.8325 2.25 20.75 6.16751 20.75 11V21C20.75 21.4142 20.4142 21.75 20 21.75L15 21.75H9H4C3.58579 21.75 3.25 21.4142 3.25 21L3.25 11ZM9 21.75C8.58579 21.75 8.25 21.4142 8.25 21V17C8.25 15.9456 8.5586 14.9894 9.23449 14.2939C9.91387 13.5948 10.8759 13.25 12 13.25C13.1241 13.25 14.0861 13.5948 14.7655 14.2939C15.4414 14.9894 15.75 15.9456 15.75 17V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V17C14.25 16.2319 14.0288 15.6881 13.6898 15.3392C13.3543 14.994 12.8163 14.75 12 14.75C11.1837 14.75 10.6457 14.994 10.3102 15.3392C9.97121 15.6881 9.75 16.2319 9.75 17V21C9.75 21.4142 9.41421 21.75 9 21.75ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z',
  d7: 'M3.25 11C3.25 6.16751 7.16751 2.25 12 2.25C16.8325 2.25 20.75 6.16751 20.75 11V21C20.75 21.4142 20.4142 21.75 20 21.75H4C3.58579 21.75 3.25 21.4142 3.25 21V11Z',
  d8: 'M12 13C10.8248 13 9.792 13.3614 9.0552 14.1196C8.32306 14.873 8 15.898 8 17V20C8 20.5523 8.44772 21 9 21C9.55228 21 10 20.5523 10 20V17C10 16.2799 10.2065 15.8047 10.4895 15.5135C10.7679 15.227 11.2353 15 12 15C12.7647 15 13.2321 15.227 13.5105 15.5135C13.7935 15.8047 14 16.2799 14 17V20C14 20.5523 14.4477 21 15 21C15.5523 21 16 20.5523 16 20V17C16 15.898 15.6769 14.873 14.9448 14.1196C14.208 13.3614 13.1752 13 12 13Z',
  d9: 'M2 21H22',
  d10: 'M9 21V15L15 15V21',
  d11: 'M22 21.75H2V19.75H22V21.75Z',
  d12: 'M3.25 11C3.25 6.16751 7.16751 2.25 12 2.25C16.8325 2.25 20.75 6.16751 20.75 11V21C20.75 21.4142 20.4142 21.75 20 21.75L4 21.75C3.58579 21.75 3.25 21.4142 3.25 21L3.25 11ZM8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25L15 14.25C15.4142 14.25 15.75 14.5858 15.75 15V21H14.25V15.75L9.75 15.75V21H8.25V15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z',
} as const;

export const IconCottageStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-stroke-rounded IconCottageStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="9" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconCottageDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-duotone-rounded IconCottageDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="9" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconCottageTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-twotone-rounded IconCottageTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="9" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
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
    </TheIconWrapper>
  );
};

export const IconCottageSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-solid-rounded IconCottageSolidRounded"
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

export const IconCottageBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-bulk-rounded IconCottageBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="8" 
        r="2" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconCottageStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-stroke-sharp IconCottageStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="9" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCottageSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cottage-solid-sharp IconCottageSolidSharp"
    >
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

export const iconPackOfCottage: TheIconSelfPack = {
  name: 'Cottage',
  StrokeRounded: IconCottageStrokeRounded,
  DuotoneRounded: IconCottageDuotoneRounded,
  TwotoneRounded: IconCottageTwotoneRounded,
  SolidRounded: IconCottageSolidRounded,
  BulkRounded: IconCottageBulkRounded,
  StrokeSharp: IconCottageStrokeSharp,
  SolidSharp: IconCottageSolidSharp,
};
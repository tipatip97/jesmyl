import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 17L18 6',
  d2: 'M6 12L14 2.5',
  d3: 'M7 5L10 7.5',
  d4: 'M12.0097 22C11.656 22 11.4911 21.8487 11.3085 21.341C10.8283 19.6517 9.93051 18.1911 8.84193 16.8195C7.85602 15.5031 6.40188 14.0036 5.64625 12.2964C3.54607 7.65487 6.8014 1.99238 11.9927 2.00003C17.3276 1.98532 20.5359 7.85105 18.2565 12.5446C17.5862 13.7271 16.8028 14.8433 15.917 15.878C14.5359 17.5095 13.2946 19.2753 12.7057 21.3436C12.5703 21.7426 12.3955 22 12.0097 22Z',
  d5: 'M11.3085 21.341C11.4911 21.8487 11.656 22 12.0097 22C12.3955 22 12.5703 21.7426 12.7057 21.3436C13.2946 19.2753 14.5359 17.5095 15.917 15.878C16.8028 14.8433 17.5862 13.7271 18.2565 12.5446C20.5359 7.85105 17.3276 1.98532 11.9927 2.00003C6.8014 1.99238 3.54607 7.65487 5.64625 12.2964C6.19865 13.5445 7.12436 14.6815 7.96752 15.7171C8.27773 16.0981 8.57676 16.4654 8.84193 16.8195C9.93051 18.1911 10.8283 19.6517 11.3085 21.341ZM9 17L6 12L14 2.5C15 2.5 17 3.5 18 6L9 17Z',
  d6: 'M19.4964 7.26977C19.3974 6.87646 19.3479 6.6798 19.1794 6.6333C19.011 6.5868 18.8603 6.73752 18.5588 7.03897L8.90908 16.6887C8.61342 16.9844 8.46559 17.1322 8.45062 17.3152C8.43564 17.4982 8.5624 17.6749 8.81592 18.0285C9.60446 19.1281 10.2264 20.275 10.5881 21.5466C10.5927 21.563 10.598 21.5793 10.6037 21.5953C10.7016 21.8673 10.8371 22.1785 11.0837 22.4091C11.3758 22.6822 11.7157 22.7505 12.0113 22.7505C12.3992 22.7505 12.7391 22.6094 12.9966 22.3393C13.221 22.1039 13.3409 21.8125 13.4181 21.5851C13.4221 21.5733 13.4258 21.5615 13.4292 21.5495C13.9741 19.6366 15.1325 17.9696 16.4915 16.3647C17.4083 15.294 18.2194 14.1388 18.9134 12.915C18.9212 12.9012 18.9286 12.8871 18.9356 12.8728C19.8157 11.0613 19.9515 9.07749 19.4964 7.26977Z',
  d7: 'M5.80727 12.7185C5.54919 12.9766 5.42016 13.1056 5.40097 13.2803C5.38178 13.455 5.47422 13.6003 5.65911 13.8909C5.94353 14.338 6.25335 14.7626 6.56272 15.1631C6.59076 15.1994 6.61886 15.2356 6.647 15.2717C6.96241 15.6759 7.12011 15.878 7.34501 15.8918C7.56991 15.9056 7.75428 15.7213 8.12302 15.3525L10.7838 12.6917C11.0023 12.4732 11.1115 12.364 11.0938 12.2618C11.0762 12.1596 10.9209 12.086 10.6104 11.9389C9.93224 11.6176 9.38307 11.0684 9.06173 10.3903C8.9146 10.0798 8.84104 9.92455 8.73884 9.90685C8.63664 9.88915 8.52741 9.99839 8.30894 10.2169L5.80727 12.7185Z',
  d8: 'M13.2169 5.3089C12.9984 5.52736 12.8892 5.6366 12.9069 5.7388C12.9246 5.841 13.0798 5.91456 13.3903 6.06168C14.0685 6.38302 14.6176 6.9322 14.939 7.61036C15.0861 7.92086 15.1596 8.0761 15.2618 8.0938C15.364 8.1115 15.4733 8.00226 15.6918 7.78379L17.9696 5.50597C18.2418 5.23375 18.3779 5.09764 18.3912 4.91152C18.4044 4.72541 18.2979 4.58338 18.085 4.29933C17.6979 3.78293 17.2494 3.31362 16.7463 2.9064C16.4649 2.67864 16.3241 2.56476 16.1325 2.57483C15.9409 2.5849 15.8012 2.72457 15.5219 3.00389L13.2169 5.3089Z',
  d9: 'M14.0212 2.38296C14.3228 2.08136 14.4736 1.93055 14.4254 1.761C14.3772 1.59145 14.181 1.54527 13.7887 1.45291C13.2204 1.31912 12.6205 1.24842 11.993 1.25003C10.315 1.24789 8.82634 1.7726 7.61389 2.64263C7.37665 2.81287 7.25803 2.89799 7.24673 3.03636C7.23543 3.17474 7.34438 3.28369 7.56227 3.50158L9.80818 5.74749C10.0082 5.94749 10.1082 6.04749 10.2324 6.04749C10.3567 6.04749 10.4567 5.94749 10.6567 5.74749L14.0212 2.38296Z',
  d10: 'M6.53655 4.59719C6.31201 4.37264 6.19973 4.26037 6.05868 4.27413C5.91762 4.2879 5.83352 4.41329 5.66532 4.66406C4.48586 6.42258 3.97831 8.64862 4.39355 10.8175C4.47303 11.2326 4.51277 11.4402 4.68535 11.4932C4.85793 11.5463 5.01547 11.3887 5.33053 11.0737L8.74752 7.65668C8.94752 7.45668 9.04752 7.35668 9.04752 7.23241C9.04752 7.10815 8.94752 7.00815 8.74752 6.80815L6.53655 4.59719Z',
  d11: 'M19.4964 7.26977C19.3974 6.87646 19.3479 6.6798 19.1794 6.6333C19.011 6.5868 18.8603 6.73752 18.5588 7.03897L8.90908 16.6887C8.61342 16.9844 8.46559 17.1322 8.45061 17.3152C8.43564 17.4982 8.5624 17.6749 8.81592 18.0285C9.60445 19.1281 10.2264 20.275 10.5881 21.5466C10.5927 21.563 10.598 21.5793 10.6037 21.5953C10.7016 21.8673 10.8371 22.1785 11.0837 22.4091C11.3758 22.6822 11.7157 22.7505 12.0113 22.7505C12.3992 22.7505 12.7391 22.6094 12.9966 22.3393C13.221 22.1039 13.3409 21.8125 13.4181 21.5851C13.4221 21.5733 13.4258 21.5615 13.4292 21.5495C13.974 19.6366 15.1325 17.9696 16.4915 16.3647C17.4083 15.294 18.2193 14.1388 18.9134 12.915C18.9212 12.9012 18.9286 12.8871 18.9356 12.8728C19.8157 11.0613 19.9515 9.07749 19.4964 7.26977Z',
  d12: 'M14.0212 2.38296C14.3228 2.08136 14.4736 1.93055 14.4254 1.761C14.3772 1.59145 14.181 1.54527 13.7887 1.45291C13.2204 1.31912 12.6205 1.24842 11.993 1.25003C10.315 1.24789 8.82634 1.7726 7.61388 2.64263C7.37665 2.81287 7.25803 2.89799 7.24673 3.03636C7.23543 3.17474 7.34437 3.28369 7.56227 3.50158L9.80817 5.74749C10.0082 5.94749 10.1082 6.04749 10.2324 6.04749C10.3567 6.04749 10.4567 5.94749 10.6567 5.74749L14.0212 2.38296Z',
  d13: 'M6.53655 4.59719C6.312 4.37264 6.19973 4.26037 6.05867 4.27413C5.91761 4.2879 5.83352 4.41329 5.66532 4.66406C4.48586 6.42258 3.97831 8.64862 4.39355 10.8175C4.47303 11.2326 4.51277 11.4402 4.68535 11.4932C4.85793 11.5463 5.01546 11.3887 5.33053 11.0737L8.74751 7.65668C8.94751 7.45668 9.04751 7.35668 9.04751 7.23241C9.04751 7.10815 8.94751 7.00815 8.74751 6.80815L6.53655 4.59719Z',
  d14: 'M18.2565 12.5446C17.5862 13.7271 16.8028 14.8433 15.917 15.878C14.5359 17.5095 12.5986 19.9317 12.0097 22C11.5295 20.3107 9.93051 18.1911 8.84193 16.8195C7.85602 15.5031 6.40188 14.0036 5.64625 12.2964C3.54607 7.65487 6.8014 1.99238 11.9927 2.00003C17.3276 1.98532 20.5359 7.85105 18.2565 12.5446Z',
  d15: 'M14.1484 1.54728C13.4753 1.35266 12.7543 1.24808 11.9926 1.25003C9.9378 1.24741 8.16698 2.03479 6.83952 3.27886L9.8661 6.30544L14.1484 1.54728Z',
  d16: 'M5.8453 4.40596C4.30605 6.52035 3.77405 9.38856 4.72285 12.0202L8.86126 7.42192L5.8453 4.40596Z',
  d17: 'M5.41604 13.4922C5.76165 14.0871 6.16235 14.645 6.56231 15.1628C6.8372 15.5187 7.11796 15.8634 7.38351 16.1895L7.44982 16.2709C7.5978 16.4526 7.74019 16.628 7.87571 16.7984L11.8749 12.2476C10.3771 12.1909 9.13889 11.1207 8.82625 9.70309L5.41604 13.4922Z',
  d18: 'M12.3657 5.77035C13.8092 5.932 14.9669 7.03914 15.205 8.45812L18.4266 4.79222C17.7283 3.7018 16.7755 2.78187 15.6214 2.15298L12.3657 5.77035Z',
  d19: 'M19.1607 6.22918L8.81363 18.0034C9.21385 18.5265 9.63743 19.1064 10.0256 19.7006C10.6094 20.5944 11.0796 21.4708 11.2884 22.2051C11.3801 22.5275 11.6747 22.7499 12.01 22.75C12.3453 22.7501 12.6399 22.5278 12.7318 22.2054C12.9933 21.2873 13.5716 20.2437 14.2867 19.1986C14.995 18.1636 15.8044 17.1742 16.4904 16.3641C17.4072 15.2935 18.2182 14.1383 18.9123 12.9145C18.9201 12.9006 18.9275 12.8866 18.9345 12.8723C19.987 10.7057 19.9751 8.29264 19.1607 6.22918Z',
} as const;

export const IconGoogleMapsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-stroke-rounded IconGoogleMapsStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="9" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconGoogleMapsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-duotone-rounded IconGoogleMapsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="9" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconGoogleMapsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-twotone-rounded IconGoogleMapsTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="9" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleMapsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-solid-rounded IconGoogleMapsSolidRounded"
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

export const IconGoogleMapsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-bulk-rounded IconGoogleMapsBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconGoogleMapsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-stroke-sharp IconGoogleMapsStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="9" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleMapsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-maps-solid-sharp IconGoogleMapsSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGoogleMaps: TheIconSelfPack = {
  name: 'GoogleMaps',
  StrokeRounded: IconGoogleMapsStrokeRounded,
  DuotoneRounded: IconGoogleMapsDuotoneRounded,
  TwotoneRounded: IconGoogleMapsTwotoneRounded,
  SolidRounded: IconGoogleMapsSolidRounded,
  BulkRounded: IconGoogleMapsBulkRounded,
  StrokeSharp: IconGoogleMapsStrokeSharp,
  SolidSharp: IconGoogleMapsSolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z',
  d2: 'M9 11.8333C9 11.8333 9.875 11.8333 10.75 13.5C10.75 13.5 13.5294 9.33333 16 8.5',
  d3: 'M12.0015 1.25C8.17538 1.25 4.52505 3.51303 2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90758 21.0169L8.90824 21.0175C9.23768 21.3222 9.56031 21.6206 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732L15.0391 21.0732L15.0391 21.0732C16.787 19.4627 18.7304 17.672 20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25ZM16.3196 9.44782C16.8429 9.27131 17.1241 8.70398 16.9475 8.18066C16.771 7.65734 16.2037 7.37621 15.6804 7.55272C14.8951 7.81759 14.1478 8.32147 13.4964 8.86558C12.8354 9.41765 12.2188 10.0574 11.6963 10.6539C11.3459 11.0539 11.0323 11.4408 10.7701 11.7786C10.5377 11.5287 10.3061 11.3395 10.0829 11.1977C9.83248 11.0387 9.60331 10.9465 9.41295 10.8947C9.31842 10.869 9.17578 10.8336 9 10.8336C8.44771 10.8336 8 11.2813 8 11.8336C8 12.3522 8.3948 12.7786 8.90026 12.8287C8.91856 12.8354 8.95654 12.8517 9.01087 12.8862C9.16314 12.9828 9.49129 13.254 9.8646 13.9651C10.0286 14.2776 10.3452 14.4804 10.6976 14.4989C11.0499 14.5174 11.3861 14.3486 11.5819 14.0552C11.6581 13.9463 11.8828 13.6253 12.0263 13.4317C12.314 13.0434 12.7214 12.5189 13.2008 11.9717C13.682 11.4223 14.2234 10.8641 14.7784 10.4006C15.343 9.92907 15.8696 9.59962 16.3196 9.44782Z',
  d4: 'M2.99714 7.08468C4.52505 3.51303 8.17538 1.25 12.0015 1.25C15.8277 1.25 19.478 3.51303 21.0059 7.08468C22.4261 10.4045 21.6591 13.2362 20.0582 15.6609C18.7304 17.672 16.787 19.4627 15.0391 21.0732L15.0391 21.0732L15.039 21.0732C14.7286 21.3592 14.4243 21.6396 14.1308 21.9144C13.5558 22.4528 12.7919 22.75 12.0015 22.75C11.2112 22.75 10.4473 22.4528 9.87231 21.9145L9.87066 21.9129C9.5601 21.6204 9.23725 21.3218 8.90758 21.0169L8.90742 21.0168C7.17835 19.4178 5.26177 17.6454 3.94771 15.6595C2.34496 13.2373 1.57518 10.4086 2.99714 7.08468Z',
  d5: 'M16.9475 8.18066C17.1241 8.70398 16.8429 9.27131 16.3196 9.44782C15.8696 9.59962 15.343 9.92907 14.7784 10.4006C14.2234 10.8641 13.682 11.4223 13.2008 11.9717C12.7214 12.5189 12.314 13.0434 12.0263 13.4317C11.8828 13.6253 11.6581 13.9463 11.5819 14.0552C11.3861 14.3486 11.0499 14.5174 10.6976 14.4989C10.3452 14.4804 10.0286 14.2776 9.8646 13.9651C9.49129 13.254 9.16314 12.9828 9.01087 12.8862C8.95654 12.8517 8.91856 12.8354 8.90026 12.8287C8.3948 12.7786 8 12.3522 8 11.8336C8 11.2813 8.44771 10.8336 9 10.8336C9.17578 10.8336 9.31842 10.869 9.41295 10.8947C9.60331 10.9465 9.83248 11.0387 10.0829 11.1977C10.3061 11.3395 10.5377 11.5287 10.7701 11.7786C11.0323 11.4408 11.3459 11.0539 11.6963 10.6539C12.2188 10.0574 12.8354 9.41765 13.4964 8.86558C14.1478 8.32147 14.8951 7.81759 15.6804 7.55272C16.2037 7.37621 16.771 7.65734 16.9475 8.18066Z',
  d6: 'M21 11C21 18 12 22 12 22C12 22 3 18 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z',
  d7: 'M8 12L10 14L16 8',
  d8: 'M10.2203 21.8483C10.6562 22.0977 11.0206 22.2874 11.2779 22.4156L12 22.75L12.7221 22.4156C12.9794 22.2874 13.3438 22.0977 13.7797 21.8483C14.6496 21.3505 15.813 20.6101 16.9801 19.6407C19.2892 17.7227 21.75 14.7912 21.75 10.968C21.75 5.60091 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.60091 2.25 10.968C2.25 14.7912 4.71077 17.7227 7.01986 19.6407C8.18703 20.6101 9.35038 21.3505 10.2203 21.8483ZM10.0001 15.4143L16.7072 8.70718L15.293 7.29297L10.0001 12.5859L8.70718 11.293L7.29297 12.7072L10.0001 15.4143Z',
} as const;

export const IconLocationCheck01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-stroke-rounded IconLocationCheck01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationCheck01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-duotone-rounded IconLocationCheck01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationCheck01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-twotone-rounded IconLocationCheck01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLocationCheck01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-solid-rounded IconLocationCheck01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationCheck01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-bulk-rounded IconLocationCheck01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLocationCheck01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-stroke-sharp IconLocationCheck01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationCheck01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-01-solid-sharp IconLocationCheck01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocationCheck01: TheIconSelfPack = {
  name: 'LocationCheck01',
  StrokeRounded: IconLocationCheck01StrokeRounded,
  DuotoneRounded: IconLocationCheck01DuotoneRounded,
  TwotoneRounded: IconLocationCheck01TwotoneRounded,
  SolidRounded: IconLocationCheck01SolidRounded,
  BulkRounded: IconLocationCheck01BulkRounded,
  StrokeSharp: IconLocationCheck01StrokeSharp,
  SolidSharp: IconLocationCheck01SolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z',
  d2: 'M9.3881 7.83138C10.3267 7.28308 11.1459 7.50404 11.638 7.856C11.8398 8.00032 11.9406 8.07248 12 8.07248C12.0594 8.07248 12.1602 8.00032 12.362 7.856C12.8541 7.50404 13.6733 7.28308 14.6119 7.83138C15.8437 8.55098 16.1224 10.925 13.2812 12.9278C12.74 13.3093 12.4694 13.5 12 13.5C11.5306 13.5 11.26 13.3093 10.7188 12.9278C7.8776 10.925 8.15632 8.55098 9.3881 7.83138Z',
  d3: 'M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C13.9206 21.0834 14.2311 20.7971 14.5452 20.5075C18.3609 16.9893 22.711 12.9784 20.316 7.37966C18.9126 4.09916 15.5439 2 12.0011 2C8.45834 2 5.08963 4.09916 3.68627 7.37966C1.30093 12.9556 5.603 16.9368 9.39808 20.4488C9.73246 20.7582 10.0629 21.064 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22ZM11.638 7.856C11.1459 7.50404 10.3267 7.28308 9.3881 7.83138C8.15632 8.55098 7.8776 10.925 10.7188 12.9278C11.26 13.3093 11.5306 13.5 12 13.5C12.4694 13.5 12.74 13.3093 13.2812 12.9278C16.1224 10.925 15.8437 8.55098 14.6119 7.83138C13.6733 7.28308 12.8541 7.50404 12.362 7.856C12.1602 8.00032 12.0594 8.07248 12 8.07248C11.9406 8.07248 11.8398 8.00032 11.638 7.856Z',
  d4: 'M12.0015 1.25C8.17538 1.25 4.52505 3.51303 2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90758 21.0169L8.90824 21.0175C9.23768 21.3222 9.56031 21.6206 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732L15.0391 21.0732L15.0391 21.0732C16.787 19.4627 18.7304 17.672 20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25ZM14.8374 7.40578C13.7011 6.74312 12.6508 6.99154 12 7.44415C11.3492 6.99154 10.2989 6.74312 9.16259 7.40578C8.31508 7.89999 7.87577 8.90811 8.03073 10.0065C8.18686 11.1132 8.92997 12.301 10.398 13.3339C10.8645 13.6631 11.342 14 12 14C12.658 14 13.1355 13.6631 13.602 13.3339C15.07 12.301 15.8131 11.1132 15.9693 10.0065C16.1242 8.90811 15.6849 7.89999 14.8374 7.40578Z',
  d5: 'M2.99714 7.08468C4.52505 3.51303 8.17538 1.25 12.0015 1.25C15.8277 1.25 19.478 3.51303 21.0059 7.08468C22.4261 10.4045 21.6591 13.2362 20.0582 15.6609C18.7304 17.672 16.787 19.4627 15.0391 21.0732L15.0391 21.0732L15.039 21.0732C14.7286 21.3592 14.4243 21.6396 14.1308 21.9144C13.5558 22.4528 12.7919 22.75 12.0015 22.75C11.2112 22.75 10.4473 22.4528 9.87231 21.9145L9.87066 21.9129C9.5601 21.6204 9.23725 21.3218 8.90758 21.0169L8.90742 21.0168C7.17835 19.4178 5.26177 17.6454 3.94771 15.6595C2.34496 13.2373 1.57518 10.4086 2.99714 7.08468Z',
  d6: 'M12 7.44415C12.6508 6.99154 13.7011 6.74312 14.8374 7.40578C15.6849 7.89999 16.1242 8.90811 15.9693 10.0065C15.8131 11.1132 15.07 12.301 13.602 13.3339C13.1355 13.6631 12.658 14 12 14C11.342 14 10.8645 13.6631 10.398 13.3339C8.92997 12.301 8.18686 11.1132 8.03073 10.0065C7.87577 8.90811 8.31508 7.89999 9.16259 7.40578C10.2989 6.74312 11.3492 6.99154 12 7.44415Z',
  d7: 'M21 11C21 18 12 22 12 22C12 22 3 18 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z',
  d8: 'M14.7431 7.2896C13.1465 6.45704 12 7.68433 12 7.68433C12 7.68433 10.8535 6.45704 9.25684 7.2896C7.32296 8.29799 7.18409 12.2469 12 14C16.816 12.2469 16.677 8.29799 14.7431 7.2896Z',
  d9: 'M10.2203 21.8483C10.6562 22.0977 11.0206 22.2874 11.2779 22.4156L12 22.75L12.7221 22.4156C12.9794 22.2874 13.3438 22.0977 13.7797 21.8483C14.6496 21.3505 15.813 20.6101 16.9801 19.6407C19.2892 17.7227 21.75 14.7912 21.75 10.968C21.75 5.60091 17.3848 1.25 12 1.25C6.61522 1.25 2.25 5.60091 2.25 10.968C2.25 14.7912 4.71077 17.7227 7.01986 19.6407C8.18703 20.6101 9.35038 21.3505 10.2203 21.8483ZM12 7.28209C12 7.28209 13.2898 5.87948 15.086 6.83097C17.2616 7.98342 17.4179 12.4965 12 14.5C6.5821 12.4965 6.73833 7.98341 8.91395 6.83097C10.7102 5.87947 12 7.28209 12 7.28209Z',
} as const;

export const IconLocationFavourite01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-stroke-rounded IconLocationFavourite01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocationFavourite01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-duotone-rounded IconLocationFavourite01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconLocationFavourite01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-twotone-rounded IconLocationFavourite01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocationFavourite01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-solid-rounded IconLocationFavourite01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationFavourite01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-bulk-rounded IconLocationFavourite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationFavourite01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-stroke-sharp IconLocationFavourite01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationFavourite01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-01-solid-sharp IconLocationFavourite01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocationFavourite01: TheIconSelfPack = {
  name: 'LocationFavourite01',
  StrokeRounded: IconLocationFavourite01StrokeRounded,
  DuotoneRounded: IconLocationFavourite01DuotoneRounded,
  TwotoneRounded: IconLocationFavourite01TwotoneRounded,
  SolidRounded: IconLocationFavourite01SolidRounded,
  BulkRounded: IconLocationFavourite01BulkRounded,
  StrokeSharp: IconLocationFavourite01StrokeSharp,
  SolidSharp: IconLocationFavourite01SolidSharp,
};
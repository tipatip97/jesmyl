import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z',
  d2: 'M12.6047 8.00546L13.2206 9.24751C13.3046 9.4204 13.5286 9.58625 13.7175 9.618L14.8339 9.80501C15.5478 9.92498 15.7158 10.4472 15.2014 10.9624L14.3335 11.8374C14.1865 11.9856 14.106 12.2715 14.1515 12.4761L14.4 13.5594C14.596 14.4168 14.1445 14.7485 13.3921 14.3004L12.3457 13.6758C12.1567 13.5629 11.8453 13.5629 11.6528 13.6758L10.6064 14.3004C9.85748 14.7485 9.40253 14.4133 9.5985 13.5594L9.84698 12.4761C9.89247 12.2715 9.81198 11.9856 9.665 11.8374L8.79709 10.9624C8.28615 10.4472 8.45063 9.92498 9.16455 9.80501L10.2809 9.618C10.4664 9.58625 10.6904 9.4204 10.7744 9.24751L11.3903 8.00546C11.7263 7.33151 12.2722 7.33151 12.6047 8.00546Z',
  d3: 'M12.0011 22C12.6044 22 13.1841 21.773 13.6177 21.367C13.9206 21.0834 14.2311 20.7971 14.5452 20.5075C18.3609 16.9893 22.711 12.9784 20.316 7.37966C18.9126 4.09916 15.5439 2 12.0011 2C8.45834 2 5.08963 4.09916 3.68627 7.37966C1.30093 12.9556 5.603 16.9368 9.39808 20.4488C9.73246 20.7582 10.0629 21.064 10.3845 21.367C10.8182 21.773 11.3978 22 12.0011 22ZM13.2206 9.24751L12.6047 8.00546C12.2722 7.33151 11.7263 7.33151 11.3903 8.00546L10.7744 9.24751C10.6904 9.4204 10.4664 9.58625 10.2809 9.618L9.16455 9.80501C8.45063 9.92498 8.28615 10.4472 8.79709 10.9624L9.665 11.8375C9.81198 11.9856 9.89247 12.2715 9.84698 12.4761L9.59851 13.5594C9.40253 14.4133 9.85748 14.7485 10.6064 14.3004L11.6528 13.6758C11.8453 13.5629 12.1567 13.5629 12.3457 13.6758L13.3921 14.3004C14.1445 14.7485 14.596 14.4168 14.4 13.5594L14.1515 12.4761C14.106 12.2715 14.1865 11.9856 14.3335 11.8375L15.2014 10.9624C15.7158 10.4472 15.5478 9.92498 14.8339 9.80501L13.7176 9.618C13.5286 9.58625 13.3046 9.4204 13.2206 9.24751Z',
  d4: 'M12.0015 1.25C8.17538 1.25 4.52505 3.51303 2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90758 21.0169L8.90824 21.0175C9.23768 21.3222 9.56031 21.6206 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732L15.0391 21.0732L15.0391 21.0732C16.787 19.4627 18.7304 17.672 20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25ZM13.395 8.99715L12.6911 7.57767C12.3111 6.80744 11.6872 6.80744 11.3032 7.57767L10.5993 8.99715C10.5033 9.19475 10.2473 9.38428 10.0353 9.42057L8.75949 9.6343C7.94358 9.77141 7.7556 10.3682 8.33954 10.957L9.33143 11.9571C9.49941 12.1265 9.5914 12.4531 9.5394 12.687L9.25543 13.925C9.03146 14.9009 9.5514 15.284 10.4073 14.7718L11.6032 14.0581C11.8232 13.929 12.1791 13.929 12.3951 14.0581L13.591 14.7718C14.4509 15.284 14.9668 14.9049 14.7428 13.925L14.4589 12.687C14.4069 12.4531 14.4989 12.1265 14.6668 11.9571L15.6587 10.957C16.2467 10.3682 16.0547 9.77141 15.2388 9.6343L13.9629 9.42057C13.7469 9.38428 13.491 9.19475 13.395 8.99715Z',
  d5: 'M2.99714 7.08468C4.52505 3.51303 8.17538 1.25 12.0015 1.25C15.8277 1.25 19.478 3.51303 21.0059 7.08468C22.4261 10.4045 21.6591 13.2362 20.0582 15.6609C18.7304 17.672 16.787 19.4627 15.0391 21.0732L15.0391 21.0732L15.039 21.0732C14.7286 21.3592 14.4243 21.6396 14.1308 21.9144C13.5558 22.4528 12.7919 22.75 12.0015 22.75C11.2112 22.75 10.4473 22.4528 9.87231 21.9145L9.87066 21.9129C9.5601 21.6204 9.23725 21.3218 8.90758 21.0169L8.90742 21.0168C7.17835 19.4178 5.26177 17.6454 3.94771 15.6595C2.34496 13.2373 1.57518 10.4086 2.99714 7.08468Z',
  d6: 'M12.6911 7.57767L13.395 8.99715C13.491 9.19475 13.7469 9.38428 13.9629 9.42057L15.2388 9.6343C16.0547 9.77141 16.2467 10.3682 15.6587 10.957L14.6668 11.9571C14.4989 12.1265 14.4069 12.4531 14.4589 12.687L14.7428 13.925C14.9668 14.9049 14.4509 15.284 13.591 14.7718L12.3951 14.0581C12.1791 13.929 11.8232 13.929 11.6032 14.0581L10.4073 14.7718C9.5514 15.284 9.03146 14.9009 9.25543 13.925L9.5394 12.687C9.5914 12.4531 9.49941 12.1265 9.33143 11.9571L8.33954 10.957C7.7556 10.3682 7.94358 9.77141 8.75949 9.6343L10.0353 9.42057C10.2473 9.38428 10.5033 9.19475 10.5993 8.99715L11.3032 7.57767C11.6872 6.80744 12.3111 6.80744 12.6911 7.57767Z',
  d7: 'M21 11C21 18 12 22 12 22C12 22 3 18 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11Z',
  d8: 'M11.925 6.077C11.9647 6.0195 11.9776 5.96256 12.0174 6.01996L13.3987 8.40233L15.9469 9.01584C16.0163 9.03488 15.9919 9.06506 15.9469 9.12131L14.1894 11.0037L14.8595 13.9422C14.8607 13.9475 14.8615 13.953 14.8618 13.9584C14.8644 14.0213 14.8473 14.0086 14.7823 13.9847L11.9928 12.7935L9.23729 13.954C9.17284 13.9779 9.12469 14.0219 9.12389 13.9627C9.12382 13.957 9.12471 13.9512 9.12596 13.9457L9.7908 11.0041L8.03715 9.11816C7.99223 9.06197 7.99923 9.03965 8.06849 9.02051L10.5898 8.40005L11.925 6.077Z',
  d9: 'M10.2184 21.8483C10.6542 22.0977 11.0186 22.2874 11.2759 22.4156L11.998 22.75L12.7202 22.4156C12.9775 22.2874 13.3419 22.0977 13.7777 21.8483C14.6477 21.3505 15.811 20.6101 16.9782 19.6407C19.2873 17.7227 21.748 14.7912 21.748 10.968C21.748 5.60091 17.3828 1.25 11.998 1.25C6.61327 1.25 2.24805 5.60091 2.24805 10.968C2.24805 14.7912 4.70881 17.7227 7.01791 19.6407C8.18507 20.6101 9.34843 21.3505 10.2184 21.8483ZM11.998 5.5L13.573 8.2L16.498 8.93769L14.473 11.125L15.2292 14.5L11.998 13.15L8.76689 14.5L9.52305 11.125L7.49805 8.93769L10.423 8.2L11.998 5.5Z',
};

export const IconLocationStar01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-stroke-rounded IconLocationStar01StrokeRounded"
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

export const IconLocationStar01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-duotone-rounded IconLocationStar01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationStar01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-twotone-rounded IconLocationStar01TwotoneRounded"
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

export const IconLocationStar01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-solid-rounded IconLocationStar01SolidRounded"
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

export const IconLocationStar01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-bulk-rounded IconLocationStar01BulkRounded"
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

export const IconLocationStar01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-stroke-sharp IconLocationStar01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconLocationStar01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-01-solid-sharp IconLocationStar01SolidSharp"
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

export const iconPackOfLocationStar01: TheIconSelfPack = {
  name: 'LocationStar01',
  StrokeRounded: IconLocationStar01StrokeRounded,
  DuotoneRounded: IconLocationStar01DuotoneRounded,
  TwotoneRounded: IconLocationStar01TwotoneRounded,
  SolidRounded: IconLocationStar01SolidRounded,
  BulkRounded: IconLocationStar01BulkRounded,
  StrokeSharp: IconLocationStar01StrokeSharp,
  SolidSharp: IconLocationStar01SolidSharp,
};
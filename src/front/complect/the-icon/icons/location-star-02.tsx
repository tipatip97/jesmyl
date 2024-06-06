import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z',
  d2: 'M12.6911 7.57767L13.395 8.99715C13.491 9.19475 13.7469 9.38428 13.9629 9.42057L15.2388 9.6343C16.0547 9.77141 16.2467 10.3682 15.6587 10.957L14.6668 11.9571C14.4989 12.1265 14.4069 12.4531 14.4589 12.687L14.7428 13.925C14.9668 14.9049 14.4509 15.284 13.591 14.7718L12.3951 14.0581C12.1791 13.929 11.8232 13.929 11.6032 14.0581L10.4073 14.7718C9.5514 15.284 9.03146 14.9009 9.25543 13.925L9.5394 12.687C9.5914 12.4531 9.49941 12.1265 9.33143 11.9571L8.33954 10.957C7.7556 10.3682 7.94358 9.77141 8.75949 9.6343L10.0353 9.42057C10.2473 9.38428 10.5033 9.19475 10.5993 8.99715L11.3032 7.57767C11.6872 6.80744 12.3111 6.80744 12.6911 7.57767Z',
  d3: 'M21 10.9258C21 6.03298 16.8706 2 12 2C7.12944 2 3 6.03298 3 10.9258C3 15.9137 7.2039 19.3616 11.073 21.7567C11.3555 21.9162 11.675 22 12 22C12.325 22 12.6445 21.9162 12.927 21.7567C16.8033 19.3847 21 15.8965 21 10.9258ZM13.395 8.99715L12.6911 7.57767C12.3111 6.80744 11.6872 6.80744 11.3032 7.57767L10.5993 8.99715C10.5033 9.19475 10.2473 9.38428 10.0353 9.42057L8.75949 9.6343C7.94358 9.77141 7.7556 10.3682 8.33954 10.957L9.33143 11.9571C9.49941 12.1265 9.5914 12.4531 9.5394 12.687L9.25543 13.925C9.03146 14.9009 9.5514 15.284 10.4073 14.7718L11.6032 14.0581C11.8232 13.929 12.1791 13.929 12.3951 14.0581L13.591 14.7718C14.4509 15.284 14.9668 14.9049 14.7428 13.925L14.4589 12.687C14.4069 12.4531 14.4989 12.1265 14.6668 11.9571L15.6587 10.957C16.2467 10.3682 16.0547 9.77141 15.2388 9.6343L13.9629 9.42057C13.7469 9.38428 13.491 9.19475 13.395 8.99715Z',
  d4: 'M12 1.25C6.72451 1.25 2.25 5.60954 2.25 10.9258C2.25 13.6482 3.40187 15.9241 5.01689 17.8025C6.62496 19.6728 8.71834 21.1811 10.6782 22.3944L10.6911 22.4024L10.7043 22.4098C11.0996 22.6329 11.546 22.75 12 22.75C12.454 22.75 12.9004 22.6329 13.2957 22.4098L13.3072 22.4033L13.3185 22.3964C15.2855 21.1928 17.3793 19.6796 18.9866 17.8038C20.6003 15.9206 21.75 13.6392 21.75 10.9258C21.75 5.60954 17.2755 1.25 12 1.25ZM13.5693 8.74679L12.7774 7.14988C12.35 6.28337 11.6481 6.28337 11.2161 7.14988L10.4242 8.74679C10.3162 8.96909 10.0282 9.18232 9.78977 9.22315L8.35443 9.46359C7.43653 9.61784 7.22505 10.2893 7.88198 10.9516L8.99785 12.0767C9.18683 12.2673 9.29032 12.6347 9.23183 12.8979L8.91236 14.2906C8.66039 15.3885 9.24533 15.8195 10.2082 15.2433L11.5536 14.4403C11.801 14.2952 12.2015 14.2952 12.4445 14.4403L13.7898 15.2433C14.7572 15.8195 15.3377 15.393 15.0857 14.2906L14.7662 12.8979C14.7077 12.6347 14.8112 12.2673 15.0002 12.0767L16.1161 10.9516C16.7775 10.2893 16.5615 9.61784 15.6436 9.46359L14.2083 9.22315C13.9653 9.18232 13.6773 8.96909 13.5693 8.74679Z',
  d5: 'M2.25 10.9258C2.25 5.60954 6.72451 1.25 12 1.25C17.2755 1.25 21.75 5.60954 21.75 10.9258C21.75 13.6392 20.6003 15.9206 18.9866 17.8038C17.3793 19.6796 15.2855 21.1928 13.3185 22.3964L13.3072 22.4033L13.2957 22.4098C12.9004 22.6329 12.454 22.75 12 22.75C11.546 22.75 11.0996 22.6329 10.7043 22.4098L10.6911 22.4024L10.6782 22.3944C8.71834 21.1811 6.62496 19.6728 5.01689 17.8025C3.40187 15.9241 2.25 13.6482 2.25 10.9258Z',
  d6: 'M12.7774 7.14988L13.5693 8.74679C13.6773 8.96909 13.9653 9.18232 14.2083 9.22315L15.6436 9.46359C16.5615 9.61784 16.7775 10.2893 16.1161 10.9516L15.0002 12.0767C14.8112 12.2673 14.7077 12.6347 14.7662 12.8979L15.0857 14.2906C15.3377 15.393 14.7572 15.8195 13.7898 15.2433L12.4445 14.4403C12.2015 14.2952 11.801 14.2952 11.5536 14.4403L10.2082 15.2433C9.24533 15.8195 8.66039 15.3885 8.91236 14.2906L9.23183 12.8979C9.29032 12.6347 9.18683 12.2673 8.99785 12.0767L7.88198 10.9516C7.22505 10.2893 7.43653 9.61784 8.35443 9.46359L9.78977 9.22315C10.0282 9.18232 10.3162 8.96909 10.4242 8.74679L11.2161 7.14988C11.6481 6.28337 12.35 6.28337 12.7774 7.14988Z',
  d7: 'M12 2C7.58172 2 4 5.61783 4 10.0807C4 12.6325 5 14.6167 7 16.389C8.40971 17.6382 10.9746 20.3179 12 21.9999C13.0773 20.3514 15.5903 17.6382 17 16.389C19 14.6167 20 12.6325 20 10.0807C20 5.61783 16.4183 2 12 2Z',
  d8: 'M11.9338 6.07993C11.9735 6.02243 11.9864 5.96549 12.0262 6.02289L13.4075 8.40526L15.9557 9.01877C16.0251 9.03781 16.0007 9.06799 15.9557 9.12424L14.1981 11.0066L14.8683 13.9451C14.8695 13.9505 14.8703 13.9559 14.8705 13.9614C14.8732 14.0242 14.8561 14.0116 14.7911 13.9877L12.0015 12.7964L9.24608 13.957C9.18163 13.9808 9.13348 14.0248 9.13268 13.9656C9.1326 13.9599 9.1335 13.9542 9.13475 13.9486L9.79959 11.007L8.04594 9.12109C8.00102 9.0649 8.00802 9.04258 8.07728 9.02344L10.5986 8.40298L11.9338 6.07993Z',
  d9: 'M12 1.25C7.16043 1.25 3.25 5.21073 3.25 10.0807C3.25 12.8754 4.36442 15.0556 6.50258 16.9503C7.89367 18.183 10.3925 20.804 11.3596 22.3903C11.4936 22.61 11.7309 22.7457 11.9882 22.7498C12.2456 22.7538 12.487 22.6256 12.6278 22.4101C13.6574 20.8346 16.1198 18.1711 17.4974 16.9503C19.6356 15.0556 20.75 12.8754 20.75 10.0807C20.75 5.21073 16.8396 1.25 12 1.25ZM12 5.5L13.575 8.2L16.5 8.93769L14.475 11.125L15.2312 14.5L12 13.15L8.76885 14.5L9.525 11.125L7.5 8.93769L10.425 8.2L12 5.5Z',
};

export const IconLocationStar02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-stroke-rounded IconLocationStar02StrokeRounded"
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

export const IconLocationStar02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-duotone-rounded IconLocationStar02DuotoneRounded"
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

export const IconLocationStar02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-twotone-rounded IconLocationStar02TwotoneRounded"
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

export const IconLocationStar02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-solid-rounded IconLocationStar02SolidRounded"
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

export const IconLocationStar02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-bulk-rounded IconLocationStar02BulkRounded"
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

export const IconLocationStar02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-stroke-sharp IconLocationStar02StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconLocationStar02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-star-02-solid-sharp IconLocationStar02SolidSharp"
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

export const iconPackOfLocationStar02: TheIconSelfPack = {
  name: 'LocationStar02',
  StrokeRounded: IconLocationStar02StrokeRounded,
  DuotoneRounded: IconLocationStar02DuotoneRounded,
  TwotoneRounded: IconLocationStar02TwotoneRounded,
  SolidRounded: IconLocationStar02SolidRounded,
  BulkRounded: IconLocationStar02BulkRounded,
  StrokeSharp: IconLocationStar02StrokeSharp,
  SolidSharp: IconLocationStar02SolidSharp,
};
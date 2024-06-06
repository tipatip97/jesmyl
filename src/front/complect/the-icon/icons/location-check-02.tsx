import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z',
  d2: 'M8.5 11.8333C8.5 11.8333 9.41602 11.8333 10.291 13.5C10.291 13.5 13.0294 9.33333 15.5 8.5',
  d3: 'M12 1.25C6.72451 1.25 2.25 5.60954 2.25 10.9258C2.25 13.6482 3.40187 15.9241 5.01689 17.8025C6.62496 19.6728 8.71834 21.1811 10.6782 22.3944L10.6911 22.4024L10.7043 22.4098C11.0996 22.6329 11.546 22.75 12 22.75C12.454 22.75 12.9004 22.6329 13.2957 22.4098L13.3072 22.4033L13.3185 22.3964C15.2855 21.1928 17.3793 19.6796 18.9866 17.8038C20.6003 15.9206 21.75 13.6392 21.75 10.9258C21.75 5.60954 17.2755 1.25 12 1.25ZM16.3338 8.9429C16.8544 8.75852 17.127 8.18702 16.9426 7.66643C16.7582 7.14583 16.1868 6.87327 15.6662 7.05765C14.788 7.36865 13.9486 7.96179 13.212 8.60781C12.465 9.26292 11.7666 10.0235 11.1733 10.7347C10.734 11.2613 10.3456 11.7689 10.0304 12.1997C9.74163 11.8538 9.45398 11.6011 9.1797 11.4182C8.9053 11.2353 8.55228 11.0003 8 11.0003C7.44772 11.0003 7 11.448 7 12.0003C7 12.521 7.39799 12.9487 7.90638 12.9959C8.11042 13.0149 8.66489 13.5661 9.10557 14.4475C9.26675 14.7698 9.58893 14.9805 9.94886 14.999C10.3087 15.0174 10.6508 14.8406 10.8441 14.5365C10.8441 14.5365 11.1922 14.0141 11.3574 13.7801C11.6885 13.3111 12.1572 12.6774 12.7091 12.0159C13.2628 11.3521 13.888 10.6751 14.5307 10.1115C15.1837 9.53876 15.8002 9.1319 16.3338 8.9429Z',
  d4: 'M2.25 10.9258C2.25 5.60954 6.72451 1.25 12 1.25C17.2755 1.25 21.75 5.60954 21.75 10.9258C21.75 13.6392 20.6003 15.9206 18.9866 17.8038C17.3793 19.6796 15.2855 21.1928 13.3185 22.3964L13.3072 22.4033L13.2957 22.4098C12.9004 22.6329 12.454 22.75 12 22.75C11.546 22.75 11.0996 22.6329 10.7043 22.4098L10.6911 22.4024L10.6782 22.3944C8.71834 21.1811 6.62496 19.6728 5.01689 17.8025C3.40187 15.9241 2.25 13.6482 2.25 10.9258Z',
  d5: 'M16.9426 7.66643C17.127 8.18702 16.8544 8.75852 16.3338 8.9429C15.8002 9.1319 15.1837 9.53876 14.5307 10.1115C13.888 10.6751 13.2628 11.3521 12.7091 12.0159C12.1572 12.6774 11.6885 13.3111 11.3574 13.7801C11.1922 14.0141 10.8441 14.5365 10.8441 14.5365C10.6508 14.8406 10.3087 15.0174 9.94886 14.999C9.58893 14.9805 9.26675 14.7698 9.10557 14.4475C8.66489 13.5661 8.11042 13.0149 7.90638 12.9959C7.39799 12.9487 7 12.521 7 12.0003C7 11.448 7.44772 11.0003 8 11.0003C8.55228 11.0003 8.9053 11.2353 9.1797 11.4182C9.45398 11.6011 9.74163 11.8538 10.0304 12.1997C10.3456 11.7689 10.734 11.2613 11.1733 10.7347C11.7666 10.0235 12.465 9.26292 13.212 8.60781C13.9486 7.96179 14.788 7.36865 15.6662 7.05765C16.1868 6.87327 16.7582 7.14583 16.9426 7.66643Z',
  d6: 'M12 2C7.58172 2 4 5.61783 4 10.0807C4 12.6325 5 14.6167 7 16.389C8.40971 17.6382 10.9746 20.3179 12 21.9999C13.0773 20.3514 15.5903 17.6382 17 16.389C19 14.6167 20 12.6325 20 10.0807C20 5.61783 16.4183 2 12 2Z',
  d7: 'M8.5 10.3333L10.291 12L15.5 7',
  d8: 'M12 1.25C7.16043 1.25 3.25 5.21073 3.25 10.0807C3.25 12.8754 4.36442 15.0556 6.50258 16.9503C7.89367 18.183 10.3925 20.804 11.3596 22.3903C11.4936 22.61 11.7309 22.7457 11.9882 22.7498C12.2456 22.7538 12.487 22.6256 12.6278 22.4101C13.6574 20.8346 16.1198 18.1711 17.4974 16.9503C19.6356 15.0556 20.75 12.8754 20.75 10.0807C20.75 5.21073 16.8396 1.25 12 1.25ZM10.3032 13.3762L16.194 7.72167L14.8091 6.27881L10.2819 10.6243L9.18279 9.60151L7.82031 11.0656L10.3032 13.3762Z',
};

export const IconLocationCheck02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-stroke-rounded IconLocationCheck02StrokeRounded"
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

export const IconLocationCheck02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-duotone-rounded IconLocationCheck02DuotoneRounded"
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

export const IconLocationCheck02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-twotone-rounded IconLocationCheck02TwotoneRounded"
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

export const IconLocationCheck02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-solid-rounded IconLocationCheck02SolidRounded"
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

export const IconLocationCheck02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-bulk-rounded IconLocationCheck02BulkRounded"
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

export const IconLocationCheck02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-stroke-sharp IconLocationCheck02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationCheck02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-check-02-solid-sharp IconLocationCheck02SolidSharp"
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

export const iconPackOfLocationCheck02: TheIconSelfPack = {
  name: 'LocationCheck02',
  StrokeRounded: IconLocationCheck02StrokeRounded,
  DuotoneRounded: IconLocationCheck02DuotoneRounded,
  TwotoneRounded: IconLocationCheck02TwotoneRounded,
  SolidRounded: IconLocationCheck02SolidRounded,
  BulkRounded: IconLocationCheck02BulkRounded,
  StrokeSharp: IconLocationCheck02StrokeSharp,
  SolidSharp: IconLocationCheck02SolidSharp,
};
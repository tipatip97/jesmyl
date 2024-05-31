import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z',
  d2: 'M9.01498 7.38661C10.0876 6.74692 11.0238 7.00471 11.5863 7.41534C11.8169 7.58371 11.9322 7.66789 12 7.66789C12.0678 7.66789 12.1831 7.58371 12.4137 7.41534C12.9762 7.00471 13.9124 6.74692 14.985 7.38661C16.3928 8.22614 16.7113 10.9958 13.4642 13.3324C12.8457 13.7775 12.5365 14 12 14C11.4635 14 11.1543 13.7775 10.5358 13.3324C7.28869 10.9958 7.60723 8.22614 9.01498 7.38661Z',
  d3: 'M21 10.9258C21 6.03298 16.8706 2 12 2C7.12944 2 3 6.03298 3 10.9258C3 15.9137 7.2039 19.3616 11.073 21.7567C11.3555 21.9162 11.675 22 12 22C12.325 22 12.6445 21.9162 12.927 21.7567C16.8033 19.3847 21 15.8965 21 10.9258ZM11.5863 7.41534C11.0238 7.00471 10.0876 6.74692 9.01498 7.38661C7.60723 8.22614 7.28869 10.9958 10.5358 13.3324C11.1543 13.7775 11.4635 14 12 14C12.5365 14 12.8457 13.7775 13.4642 13.3324C16.7113 10.9958 16.3928 8.22614 14.985 7.38661C13.9124 6.74692 12.9762 7.00471 12.4137 7.41534C12.1831 7.58371 12.0678 7.66789 12 7.66789C11.9322 7.66789 11.8169 7.58371 11.5863 7.41534Z',
  d4: 'M12 1.25C6.72451 1.25 2.25 5.60954 2.25 10.9258C2.25 13.6482 3.40187 15.9241 5.01689 17.8025C6.62496 19.6728 8.71834 21.1811 10.6782 22.3944L10.6911 22.4024L10.7043 22.4098C11.0996 22.6329 11.546 22.75 12 22.75C12.454 22.75 12.9004 22.6329 13.2957 22.4098L13.3072 22.4033L13.3185 22.3964C15.2855 21.1928 17.3793 19.6796 18.9866 17.8038C20.6003 15.9206 21.75 13.6392 21.75 10.9258C21.75 5.60954 17.2755 1.25 12 1.25ZM15.1921 6.96374C13.9137 6.20642 12.7322 6.49033 12 7.0076C11.2678 6.49033 10.0863 6.20642 8.80791 6.96374C7.85447 7.52856 7.36024 8.68069 7.53457 9.936C7.71022 11.2008 8.54622 12.5583 10.1977 13.7388C10.7225 14.115 11.2598 14.5 12 14.5C12.7402 14.5 13.2775 14.115 13.8023 13.7388C15.4538 12.5583 16.2898 11.2008 16.4654 9.936C16.6398 8.68069 16.1455 7.52856 15.1921 6.96374Z',
  d5: 'M2.25 10.9258C2.25 5.60954 6.72451 1.25 12 1.25C17.2755 1.25 21.75 5.60954 21.75 10.9258C21.75 13.6392 20.6003 15.9206 18.9866 17.8038C17.3793 19.6796 15.2855 21.1928 13.3185 22.3964L13.3072 22.4033L13.2957 22.4098C12.9004 22.6329 12.454 22.75 12 22.75C11.546 22.75 11.0996 22.6329 10.7043 22.4098L10.6911 22.4024L10.6782 22.3944C8.71834 21.1811 6.62496 19.6728 5.01689 17.8025C3.40187 15.9241 2.25 13.6482 2.25 10.9258Z',
  d6: 'M12 7.0076C12.7322 6.49033 13.9137 6.20642 15.1921 6.96374C16.1455 7.52856 16.6398 8.68069 16.4654 9.936C16.2898 11.2008 15.4538 12.5583 13.8023 13.7388C13.2775 14.115 12.7402 14.5 12 14.5C11.2598 14.5 10.7225 14.115 10.1977 13.7388C8.54622 12.5583 7.71022 11.2008 7.53457 9.936C7.36024 8.68069 7.85447 7.52856 8.80791 6.96374C10.0863 6.20642 11.2678 6.49033 12 7.0076Z',
  d7: 'M12 2C7.58172 2 4 5.61783 4 10.0807C4 12.6325 5 14.6167 7 16.389C8.40971 17.6382 10.9746 20.3179 12 21.9999C13.0773 20.3514 15.5903 17.6382 17 16.389C19 14.6167 20 12.6325 20 10.0807C20 5.61783 16.4183 2 12 2Z',
  d8: 'M14.7431 7.2896C13.1465 6.45704 12 7.68433 12 7.68433C12 7.68433 10.8535 6.45704 9.25684 7.2896C7.32296 8.29799 7.18409 12.2469 12 14C16.816 12.2469 16.677 8.29799 14.7431 7.2896Z',
  d9: 'M12 1.25C7.16043 1.25 3.25 5.21073 3.25 10.0807C3.25 12.8754 4.36442 15.0556 6.50258 16.9503C7.89367 18.183 10.3925 20.804 11.3596 22.3903C11.4936 22.61 11.7309 22.7457 11.9882 22.7498C12.2456 22.7538 12.487 22.6256 12.6278 22.4101C13.6574 20.8346 16.1198 18.1711 17.4974 16.9503C19.6356 15.0556 20.75 12.8754 20.75 10.0807C20.75 5.21073 16.8396 1.25 12 1.25ZM12 7.28209C12 7.28209 13.2898 5.87948 15.086 6.83097C17.2616 7.98342 17.4179 12.4965 12 14.5C6.5821 12.4965 6.73833 7.98341 8.91395 6.83097C10.7102 5.87947 12 7.28209 12 7.28209Z',
} as const;

export const IconLocationFavourite02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-stroke-rounded IconLocationFavourite02StrokeRounded"
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

export const IconLocationFavourite02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-duotone-rounded IconLocationFavourite02DuotoneRounded"
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

export const IconLocationFavourite02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-twotone-rounded IconLocationFavourite02TwotoneRounded"
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

export const IconLocationFavourite02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-solid-rounded IconLocationFavourite02SolidRounded"
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

export const IconLocationFavourite02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-bulk-rounded IconLocationFavourite02BulkRounded"
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

export const IconLocationFavourite02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-stroke-sharp IconLocationFavourite02StrokeSharp"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationFavourite02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="location-favourite-02-solid-sharp IconLocationFavourite02SolidSharp"
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

export const iconPackOfLocationFavourite02: TheIconSelfPack = {
  name: 'LocationFavourite02',
  StrokeRounded: IconLocationFavourite02StrokeRounded,
  DuotoneRounded: IconLocationFavourite02DuotoneRounded,
  TwotoneRounded: IconLocationFavourite02TwotoneRounded,
  SolidRounded: IconLocationFavourite02SolidRounded,
  BulkRounded: IconLocationFavourite02BulkRounded,
  StrokeSharp: IconLocationFavourite02StrokeSharp,
  SolidSharp: IconLocationFavourite02SolidSharp,
};
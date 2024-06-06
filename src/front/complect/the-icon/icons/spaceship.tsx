import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 3C9.05058 3 6.59627 5.11144 6.07743 7.8996C5.9907 8.36569 5.94733 8.59873 6.1089 8.90532C6.27048 9.2119 6.49914 9.31381 6.95646 9.51763C8.33509 10.1321 10.0897 10.5 12 10.5C13.9103 10.5 15.6649 10.1321 17.0435 9.51763C17.5009 9.31381 17.7295 9.2119 17.8911 8.90532C18.0527 8.59873 18.0093 8.36569 17.9226 7.8996C17.4037 5.11144 14.9494 3 12 3Z',
  d2: 'M17 5.5C19.989 6.28752 22 7.75946 22 9.44533C22 11.9608 17.5228 14 12 14C6.47715 14 2 11.9608 2 9.44533C2 7.75946 4.01099 6.28752 7 5.5',
  d3: 'M12 18V21',
  d4: 'M17 17L18 21',
  d5: 'M7 17L6 21',
  d6: 'M7.10684 5.5C6.60011 6.20164 6.24173 7.01669 6.07743 7.8996C5.9907 8.36569 5.94733 8.59873 6.1089 8.90532C6.27048 9.2119 6.49914 9.31381 6.95646 9.51763C8.33509 10.1321 10.0897 10.5 12 10.5C13.9103 10.5 15.6649 10.1321 17.0435 9.51763C17.5009 9.31381 17.7295 9.2119 17.8911 8.90532C18.0527 8.59874 18.0093 8.3657 17.9226 7.89962C17.7583 7.0167 17.3999 6.20164 16.8932 5.5H17C19.989 6.28752 22 7.75946 22 9.44533C22 11.9608 17.5228 14 12 14C6.47715 14 2 11.9608 2 9.44533C2 7.75946 4.01099 6.28752 7 5.5H7.10684Z',
  d7: 'M12 2.25C9.85069 2.25 7.93124 3.21876 6.67234 4.73668C5.21141 5.13443 3.92823 5.70462 2.97752 6.42739C1.99328 7.17565 1.25 8.18492 1.25 9.40897C1.25 11.2262 2.84954 12.5585 4.68456 13.3808C6.6071 14.2423 9.19443 14.75 12 14.75C14.8056 14.75 17.3929 14.2423 19.3154 13.3808C21.1505 12.5585 22.75 11.2262 22.75 9.40897C22.75 8.18492 22.0067 7.17565 21.0225 6.42739C20.0718 5.70462 18.7886 5.13443 17.3277 4.73668C16.0688 3.21876 14.1493 2.25 12 2.25ZM7.17202 8.0974C7.59401 5.86618 9.59346 4.17188 11.9992 4.17188C14.405 4.17188 16.4044 5.86618 16.8264 8.0974C16.8485 8.2142 16.885 8.44602 16.885 8.44602C16.885 8.44602 16.6463 8.54816 16.5303 8.59903C15.3242 9.12792 13.7477 9.46034 11.9992 9.46034C10.2507 9.46034 8.67425 9.12792 7.46811 8.59903L7.11523 8.43501C7.11523 8.43501 7.14993 8.2142 7.17202 8.0974Z',
  d8: 'M7.24277 15.7801C7.77857 15.914 8.10433 16.457 7.97038 16.9928L6.97038 20.9928C6.83643 21.5286 6.2935 21.8543 5.7577 21.7204C5.22191 21.5864 4.89615 21.0435 5.03009 20.5077L6.03009 16.5077C6.16404 15.9719 6.70698 15.6461 7.24277 15.7801ZM16.7577 15.7801C17.2935 15.6461 17.8364 15.9719 17.9704 16.5077L18.9704 20.5077C19.1043 21.0435 18.7786 21.5864 18.2428 21.7204C17.707 21.8543 17.164 21.5286 17.0301 20.9928L16.0301 16.9928C15.8961 16.457 16.2219 15.914 16.7577 15.7801ZM12.0002 16.7502C12.5525 16.7502 13.0002 17.198 13.0002 17.7502V20.7502C13.0002 21.3025 12.5525 21.7502 12.0002 21.7502C11.448 21.7502 11.0002 21.3025 11.0002 20.7502V17.7502C11.0002 17.198 11.448 16.7502 12.0002 16.7502Z',
  d9: 'M6.67234 4.73668C7.93124 3.21876 9.85069 2.25 12 2.25C14.1493 2.25 16.0688 3.21876 17.3277 4.73668C18.7886 5.13443 20.0718 5.70462 21.0225 6.42739C22.0067 7.17565 22.75 8.18492 22.75 9.40897C22.75 11.2262 21.1505 12.5585 19.3154 13.3808C17.3929 14.2423 14.8056 14.75 12 14.75C9.19443 14.75 6.6071 14.2423 4.68456 13.3808C2.84954 12.5585 1.25 11.2262 1.25 9.40897C1.25 8.18492 1.99328 7.17565 2.97752 6.42739C3.92823 5.70462 5.21141 5.13443 6.67234 4.73668Z',
  d10: 'M11.9992 4.17188C9.59346 4.17188 7.59401 5.86618 7.17202 8.0974C7.14993 8.2142 7.11523 8.43501 7.11523 8.43501L7.46811 8.59903C8.67425 9.12792 10.2507 9.46034 11.9992 9.46034C13.7477 9.46034 15.3242 9.12792 16.5303 8.59903C16.6463 8.54816 16.885 8.44602 16.885 8.44602C16.885 8.44602 16.8485 8.2142 16.8264 8.0974C16.4044 5.86618 14.405 4.17188 11.9992 4.17188Z',
  d11: 'M17 5.50098C19.989 6.28875 22 7.76117 22 9.44759C22 11.9639 17.5228 14.0037 12 14.0037C6.47715 14.0037 2 11.9639 2 9.44759C2 7.76117 4.01099 6.28875 7 5.50098',
  d12: 'M12 17.0047V21.006M16 16.0044L18 21.006M8 16.0044L6 21.006',
  d13: 'M18.01 8.99234C18.0062 5.23404 14.8117 3.00586 12.011 3.00586C8.50148 3.00586 6.01159 5.95956 6.00781 8.99211C6.00781 8.99627 6.0104 9.00001 6.01429 9.00148C10.9664 10.8803 16.2377 9.7561 18.0043 9.00149C18.0079 8.99991 18.01 8.99634 18.01 8.99234Z',
  d14: 'M12 2.25C9.86013 2.25 7.94974 3.21669 6.69533 4.73044C5.22487 5.12846 3.93321 5.70083 2.97752 6.42739C1.99328 7.17565 1.25 8.18492 1.25 9.40897C1.25 11.2262 2.84954 12.5585 4.68456 13.3808C6.6071 14.2423 9.19443 14.75 12 14.75C14.8056 14.75 17.3929 14.2423 19.3154 13.3808C21.1505 12.5585 22.75 11.2262 22.75 9.40897C22.75 8.18492 22.0067 7.17565 21.0225 6.42739C20.0668 5.70083 18.7751 5.12846 17.3047 4.73044C16.0503 3.21669 14.1399 2.25 12 2.25ZM11.9996 8.98054C10.1893 8.98054 8.52586 8.72926 7.16016 8.31147C7.49109 5.97296 9.53168 4.17285 11.9996 4.17285C14.4675 4.17285 16.5081 5.97295 16.839 8.31147C15.4733 8.72926 13.8099 8.98054 11.9996 8.98054Z',
  d15: 'M5.07227 21.0077L7.07227 16.0077L8.92922 16.7505L6.92922 21.7505L5.07227 21.0077ZM17.0723 21.7505L15.0723 16.7505L16.9292 16.0077L18.9292 21.0077L17.0723 21.7505ZM11.0007 21.3791V17.3791H13.0007V21.3791H11.0007Z',
};

export const IconSpaceshipStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-stroke-rounded IconSpaceshipStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaceshipDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-duotone-rounded IconSpaceshipDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaceshipTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-twotone-rounded IconSpaceshipTwotoneRounded"
    >
      <path 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaceshipSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-solid-rounded IconSpaceshipSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconSpaceshipBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-bulk-rounded IconSpaceshipBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaceshipStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-stroke-sharp IconSpaceshipStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpaceshipSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spaceship-solid-sharp IconSpaceshipSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpaceship: TheIconSelfPack = {
  name: 'Spaceship',
  StrokeRounded: IconSpaceshipStrokeRounded,
  DuotoneRounded: IconSpaceshipDuotoneRounded,
  TwotoneRounded: IconSpaceshipTwotoneRounded,
  SolidRounded: IconSpaceshipSolidRounded,
  BulkRounded: IconSpaceshipBulkRounded,
  StrokeSharp: IconSpaceshipStrokeSharp,
  SolidSharp: IconSpaceshipSolidSharp,
};
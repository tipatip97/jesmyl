import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z',
  d2: 'M6 9.5V14.5M12.5 13.4999C12.5 14.0522 12.0523 14.4999 11.5 14.4999H9.5C8.94771 14.4999 8.5 14.0522 8.5 13.4999V10.4999C8.5 9.94764 8.94773 9.49993 9.50002 9.49994L11.5001 9.49998C12.0523 9.49999 12.5 9.94767 12.5 10.4999M15 11.5V12.5C15 13.6046 15.8954 14.5 17 14.5C18.1046 14.5 19 13.6046 19 12.5V11.5C19 10.3954 18.1046 9.5 17 9.5C15.8954 9.5 15 10.3954 15 11.5Z',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06293 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.25 10.5C9.25 10.3619 9.36193 10.25 9.5 10.25L11.5001 10.25C11.6381 10.25 11.75 10.3619 11.75 10.5C11.75 10.9142 12.0858 11.25 12.5 11.25C12.9142 11.25 13.25 10.9142 13.25 10.5C13.25 9.53353 12.4665 8.75006 11.5001 8.75004L9.50003 8.75C8.53352 8.74998 7.75 9.53349 7.75 10.5V13.5C7.75 14.4665 8.5335 15.25 9.5 15.25H11.5C12.4665 15.25 13.25 14.4665 13.25 13.5C13.25 13.0858 12.9142 12.75 12.5 12.75C12.0858 12.75 11.75 13.0858 11.75 13.5C11.75 13.6381 11.6381 13.75 11.5 13.75H9.5C9.36193 13.75 9.25 13.6381 9.25 13.5V10.5ZM6.75 9.50006C6.75 9.08585 6.41421 8.75006 6 8.75006C5.58579 8.75006 5.25 9.08585 5.25 9.50006V14.5001C5.25 14.9143 5.58579 15.2501 6 15.2501C6.41421 15.2501 6.75 14.9143 6.75 14.5001V9.50006ZM15.75 11.5001C15.75 10.8097 16.3096 10.2501 17 10.2501C17.6904 10.2501 18.25 10.8097 18.25 11.5001V12.5001C18.25 13.1904 17.6904 13.7501 17 13.7501C16.3096 13.7501 15.75 13.1904 15.75 12.5001V11.5001ZM17 8.75006C15.4812 8.75006 14.25 9.98128 14.25 11.5001V12.5001C14.25 14.0188 15.4812 15.2501 17 15.2501C18.5188 15.2501 19.75 14.0188 19.75 12.5001V11.5001C19.75 9.98128 18.5188 8.75006 17 8.75006Z',
  d4: 'M1.25 12C1.25 6.06293 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M9.5 10.25C9.36193 10.25 9.25 10.3619 9.25 10.5V13.5C9.25 13.6381 9.36193 13.75 9.5 13.75H11.5C11.6381 13.75 11.75 13.6381 11.75 13.5C11.75 13.0858 12.0858 12.75 12.5 12.75C12.9142 12.75 13.25 13.0858 13.25 13.5C13.25 14.4665 12.4665 15.25 11.5 15.25H9.5C8.5335 15.25 7.75 14.4665 7.75 13.5V10.5C7.75 9.53349 8.53352 8.74998 9.50003 8.75L11.5001 8.75004C12.4665 8.75006 13.25 9.53353 13.25 10.5C13.25 10.9142 12.9142 11.25 12.5 11.25C12.0858 11.25 11.75 10.9142 11.75 10.5C11.75 10.3619 11.6381 10.25 11.5001 10.25L9.5 10.25ZM6 8.75006C6.41421 8.75006 6.75 9.08585 6.75 9.50006V14.5001C6.75 14.9143 6.41421 15.2501 6 15.2501C5.58579 15.2501 5.25 14.9143 5.25 14.5001V9.50006C5.25 9.08585 5.58579 8.75006 6 8.75006ZM17 10.2501C16.3096 10.2501 15.75 10.8097 15.75 11.5001V12.5001C15.75 13.1904 16.3096 13.7501 17 13.7501C17.6904 13.7501 18.25 13.1904 18.25 12.5001V11.5001C18.25 10.8097 17.6904 10.2501 17 10.2501ZM14.25 11.5001C14.25 9.98128 15.4812 8.75006 17 8.75006C18.5188 8.75006 19.75 9.98128 19.75 11.5001V12.5001C19.75 14.0188 18.5188 15.2501 17 15.2501C15.4812 15.2501 14.25 14.0188 14.25 12.5001V11.5001Z',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06293 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.25 10.5C9.25 10.3619 9.36193 10.25 9.5 10.25L11.5001 10.25C11.6381 10.25 11.75 10.3619 11.75 10.5V11.25H13.25V10.5C13.25 9.53353 12.4665 8.75006 11.5001 8.75004L9.50003 8.75C8.53352 8.74998 7.75 9.53349 7.75 10.5V13.5C7.75 14.4665 8.5335 15.25 9.5 15.25H11.5C12.4665 15.25 13.25 14.4665 13.25 13.5V12.75H11.75V13.5C11.75 13.6381 11.6381 13.75 11.5 13.75H9.5C9.36193 13.75 9.25 13.6381 9.25 13.5V10.5ZM6.75 15.2501V8.75006H5.25V15.2501H6.75ZM15.75 11.5001C15.75 10.8097 16.3096 10.2501 17 10.2501C17.6904 10.2501 18.25 10.8097 18.25 11.5001V12.5001C18.25 13.1904 17.6904 13.7501 17 13.7501C16.3096 13.7501 15.75 13.1904 15.75 12.5001V11.5001ZM17 8.75006C15.4812 8.75006 14.25 9.98128 14.25 11.5001V12.5001C14.25 14.0188 15.4812 15.2501 17 15.2501C18.5188 15.2501 19.75 14.0188 19.75 12.5001V11.5001C19.75 9.98128 18.5188 8.75006 17 8.75006Z',
} as const;

export const IconIcoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-stroke-rounded IconIcoStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconIcoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-duotone-rounded IconIcoDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconIcoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-twotone-rounded IconIcoTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIcoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-solid-rounded IconIcoSolidRounded"
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

export const IconIcoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-bulk-rounded IconIcoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIcoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-stroke-sharp IconIcoStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconIcoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ico-solid-sharp IconIcoSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIco: TheIconSelfPack = {
  name: 'Ico',
  StrokeRounded: IconIcoStrokeRounded,
  DuotoneRounded: IconIcoDuotoneRounded,
  TwotoneRounded: IconIcoTwotoneRounded,
  SolidRounded: IconIcoSolidRounded,
  BulkRounded: IconIcoBulkRounded,
  StrokeSharp: IconIcoStrokeSharp,
  SolidSharp: IconIcoSolidSharp,
};
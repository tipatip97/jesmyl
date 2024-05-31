import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5 21.3704C14.4107 21.7775 13.2313 22 12 22C10.7687 22 9.58933 21.7775 8.5 21.3704M3.33782 17C2.48697 15.5291 2 13.8214 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.8214 21.513 15.5291 20.6622 17',
  d2: 'M9 15.9998C9.83563 15.372 10.8744 15 12 15C13.1256 15 14.1644 15.372 15 15.9998',
  d3: 'M9.5 9.5H8.20711C7.75435 9.5 7.32014 9.67986 7 10M14.5 9.5H15.7929C16.2456 9.5 16.6799 9.67986 17 10',
  d4: 'M6 13L6 22M18 13V22',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 14.9288 2.42126 17.5841 4.32094 19.5229C4.6915 19.9011 4.87678 20.0902 5.06339 20.0141C5.25 19.9379 5.25 19.6623 5.25 19.1111L5.25 13C5.25 12.5858 5.58579 12.25 6 12.25C6.41421 12.25 6.75 12.5858 6.75 13L6.75 21.0316C6.75 21.2046 6.75 21.2912 6.79366 21.363C6.83732 21.4348 6.91131 21.4732 7.05931 21.5499C8.53859 22.3167 10.2187 22.75 12 22.75C13.7813 22.75 15.4614 22.3167 16.9407 21.5499C17.0887 21.4732 17.1627 21.4348 17.2063 21.363C17.25 21.2912 17.25 21.2046 17.25 21.0316V13C17.25 12.5858 17.5858 12.25 18 12.25C18.4142 12.25 18.75 12.5858 18.75 13V19.1111C18.75 19.6623 18.75 19.9379 18.9366 20.0141C19.1232 20.0902 19.3085 19.9011 19.6791 19.5229C21.5787 17.5841 22.75 14.9288 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 14.25C10.7064 14.25 9.5106 14.6782 8.54954 15.4002C8.21838 15.649 8.15161 16.1192 8.40042 16.4503C8.64922 16.7815 9.11938 16.8483 9.45054 16.5995C10.1607 16.0659 11.0424 15.75 12 15.75C12.9577 15.75 13.8393 16.0659 14.5495 16.5995C14.8807 16.8483 15.3509 16.7815 15.5997 16.4503C15.8485 16.1192 15.7817 15.649 15.4505 15.4002C14.4895 14.6782 13.2937 14.25 12 14.25ZM6.46967 9.46967C6.93047 9.00887 7.55544 8.75 8.20711 8.75L9.5 8.75C9.91421 8.75 10.25 9.08579 10.25 9.5C10.25 9.91421 9.91421 10.25 9.5 10.25L8.20711 10.25C7.95327 10.25 7.70982 10.3508 7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303C6.17678 10.2374 6.17678 9.76256 6.46967 9.46967ZM13.75 9.5C13.75 9.08579 14.0858 8.75 14.5 8.75H15.7929C16.4446 8.75 17.0695 9.00887 17.5303 9.46967C17.8232 9.76256 17.8232 10.2374 17.5303 10.5303C17.2374 10.8232 16.7626 10.8232 16.4697 10.5303C16.2902 10.3508 16.0467 10.25 15.7929 10.25H14.5C14.0858 10.25 13.75 9.91421 13.75 9.5Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M8.54954 15.4002C9.5106 14.6782 10.7064 14.25 12 14.25C13.2937 14.25 14.4895 14.6782 15.4505 15.4002C15.7817 15.649 15.8485 16.1192 15.5997 16.4503C15.3509 16.7815 14.8807 16.8483 14.5495 16.5995C13.8393 16.0659 12.9577 15.75 12 15.75C11.0424 15.75 10.1607 16.0659 9.45054 16.5995C9.11938 16.8483 8.64922 16.7815 8.40042 16.4503C8.15161 16.1192 8.21838 15.649 8.54954 15.4002Z',
  d8: 'M6.46967 9.46967C6.93047 9.00887 7.55544 8.75 8.20711 8.75H9.5C9.91421 8.75 10.25 9.08579 10.25 9.5C10.25 9.91421 9.91421 10.25 9.5 10.25H8.20711C7.95327 10.25 7.70982 10.3508 7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303C6.17678 10.2374 6.17678 9.76256 6.46967 9.46967ZM13.75 9.5C13.75 9.08579 14.0858 8.75 14.5 8.75H15.7929C16.4446 8.75 17.0695 9.00887 17.5303 9.46967C17.8232 9.76256 17.8232 10.2374 17.5303 10.5303C17.2374 10.8232 16.7626 10.8232 16.4697 10.5303C16.2902 10.3508 16.0467 10.25 15.7929 10.25H14.5C14.0858 10.25 13.75 9.91421 13.75 9.5Z',
  d9: 'M6 12.25C6.41421 12.25 6.75 12.5858 6.75 13L6.75 22C6.75 22.4142 6.41421 22.75 6 22.75C5.58579 22.75 5.25 22.4142 5.25 22L5.25 13C5.25 12.5858 5.58579 12.25 6 12.25ZM18 12.25C18.4142 12.25 18.75 12.5858 18.75 13V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V13C17.25 12.5858 17.5858 12.25 18 12.25Z',
  d10: 'M9.49991 9.5H7.70686C7.25411 9.5 6.8199 9.67986 6.49976 10M14.4999 9.5H16.2928C16.7456 9.5 17.1798 9.67986 17.4999 10',
  d11: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 15.3804 2.8103 18.3964 5.25 20.3671L5.25 13H6.75L6.75 21.383C8.30261 22.2536 10.0933 22.75 12 22.75C13.9067 22.75 15.6974 22.2536 17.25 21.383V13H18.75V20.3671C21.1897 18.3964 22.75 15.3804 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.9993 14.25C10.7057 14.25 9.50988 14.6782 8.54883 15.4002L9.44983 16.5995C10.16 16.0659 11.0417 15.75 11.9993 15.75C12.9569 15.75 13.8386 16.0659 14.5488 16.5995L15.4498 15.4002C14.4888 14.6782 13.293 14.25 11.9993 14.25ZM5.96875 9.46967C6.42955 9.00887 7.05452 8.75 7.70619 8.75L9.49923 8.75V10.25L7.70619 10.25C7.45235 10.25 7.2089 10.3508 7.02941 10.5303L5.96875 9.46967ZM16.2921 10.25H14.4992V8.75H16.2921C16.9438 8.75 17.5688 9.00887 18.0296 9.46967L16.9689 10.5303C16.7894 10.3508 16.546 10.25 16.2921 10.25Z',
} as const;

export const IconCryingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-stroke-rounded IconCryingStrokeRounded"
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

export const IconCryingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-duotone-rounded IconCryingDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
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

export const IconCryingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-twotone-rounded IconCryingTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCryingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-solid-rounded IconCryingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCryingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-bulk-rounded IconCryingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCryingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-stroke-sharp IconCryingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCryingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="crying-solid-sharp IconCryingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCrying: TheIconSelfPack = {
  name: 'Crying',
  StrokeRounded: IconCryingStrokeRounded,
  DuotoneRounded: IconCryingDuotoneRounded,
  TwotoneRounded: IconCryingTwotoneRounded,
  SolidRounded: IconCryingSolidRounded,
  BulkRounded: IconCryingBulkRounded,
  StrokeSharp: IconCryingStrokeSharp,
  SolidSharp: IconCryingSolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 17.5L14 17.5',
  d2: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9587 8.52819 21.9963 9.68416 21.9994 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M12.875 18.0001C12.875 17.4478 13.3227 17.0001 13.875 17.0001L21.875 17.0001C22.4273 17.0001 22.875 17.4478 22.875 18.0001C22.875 18.5524 22.4273 19.0001 21.875 19.0001L13.875 19.0001C13.3227 19.0001 12.875 18.5524 12.875 18.0001Z',
  d5: 'M9.3376 2.48872C8.69873 2.24915 7.98705 2.24946 6.95764 2.24992C6.0789 2.24991 5.19705 2.24994 4.6247 2.30039C4.03496 2.35238 3.51888 2.46234 3.04758 2.72535C2.44033 3.06423 1.93928 3.56529 1.6004 4.17254C1.33738 4.64384 1.22742 5.15992 1.17544 5.74965C1.12498 6.322 1.12499 7.03073 1.125 7.90946V11.0573C1.12499 13.3657 1.12498 15.1748 1.31475 16.5863C1.50899 18.031 1.91433 19.171 2.80914 20.0658C3.70395 20.9606 4.84397 21.366 6.28871 21.5602C7.70019 21.75 9.50923 21.75 11.8176 21.75H13.1673C14.887 21.75 16.2352 21.75 17.3086 21.6408C17.7477 21.5961 18.2161 21.487 18.6696 21.3389C19.35 21.1167 19.6902 21.0056 19.65 20.7527C19.6097 20.4999 19.232 20.4999 18.4766 20.4999H13.875C12.4943 20.4999 11.375 19.3806 11.375 17.9999C11.375 16.6192 12.4943 15.4999 13.875 15.4999H21.9881C22.2586 15.4999 22.3939 15.4999 22.481 15.416C22.5681 15.3321 22.5732 15.1983 22.5834 14.9307C22.6125 14.1682 22.625 13.3297 22.625 12.2922C22.625 11.2732 22.625 10.3688 22.558 9.70944C22.4887 9.02888 22.3419 8.43868 21.993 7.91657C21.7194 7.50711 21.3679 7.15554 20.9584 6.88195C20.4363 6.53309 19.8461 6.38624 19.1655 6.31701C18.5062 6.24994 17.6845 6.24995 16.6655 6.24996L13.1111 6.24996C12.795 6.24996 12.6146 6.24903 12.4814 6.23527C12.3794 6.22813 12.3098 6.15251 12.2878 6.11559C12.2159 6.00265 11.9588 5.48904 11.8175 5.20631C11.3454 4.25117 10.7331 3.01201 9.3376 2.48872Z',
  d6: 'M22.0002 17.5H13.999',
  d7: 'M6.98803 6.5112H21.8936C21.9489 6.5112 21.9936 6.55597 21.9936 6.6112V13.9945M12.0485 20.4987H2.10392C2.04868 20.4987 2.00391 20.454 2.00391 20.3987L2.00402 2.60139C2.00402 2.54616 2.04879 2.50139 2.10403 2.50139L8.97541 2.50098L11.8444 6.27213',
  d8: 'M14.75 17.75L22.75 17.75V19.75L14.75 19.75V17.75Z',
  d9: 'M2 2.25C1.80109 2.25 1.61032 2.32902 1.46967 2.46967C1.32902 2.61032 1.25 2.80109 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H13.25V16.25H22.75V7C22.75 6.58579 22.4142 6.25 22 6.25H12.375L9.375 2.25001L2 2.25Z',
} as const;

export const IconFolderMinusStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-stroke-rounded IconFolderMinusStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderMinusDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-duotone-rounded IconFolderMinusDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderMinusTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-twotone-rounded IconFolderMinusTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderMinusSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-solid-rounded IconFolderMinusSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFolderMinusBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-bulk-rounded IconFolderMinusBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderMinusStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-stroke-sharp IconFolderMinusStrokeSharp"
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

export const IconFolderMinusSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-minus-solid-sharp IconFolderMinusSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderMinus: TheIconSelfPack = {
  name: 'FolderMinus',
  StrokeRounded: IconFolderMinusStrokeRounded,
  DuotoneRounded: IconFolderMinusDuotoneRounded,
  TwotoneRounded: IconFolderMinusTwotoneRounded,
  SolidRounded: IconFolderMinusSolidRounded,
  BulkRounded: IconFolderMinusBulkRounded,
  StrokeSharp: IconFolderMinusStrokeSharp,
  SolidSharp: IconFolderMinusSolidSharp,
};
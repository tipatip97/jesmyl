import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.39331 22 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994H12',
  d2: 'M22 21.5L19.8529 19.3529M19.8529 19.3529C19.9675 19.2384 20.0739 19.1158 20.1714 18.986C20.602 18.413 20.8571 17.7006 20.8571 16.9286C20.8571 15.035 19.3221 13.5 17.4286 13.5C15.535 13.5 14 15.035 14 16.9286C14 18.8221 15.535 20.3571 17.4286 20.3571C18.3753 20.3571 19.2325 19.9734 19.8529 19.3529Z',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 15.2612 22 17.0167 21.1573 18.2779C20.7926 18.8238 20.3238 19.2926 19.7779 19.6573C19.31 19.97 18.7741 20.1666 18.1057 20.2903C18.7809 20.155 19.3844 19.8215 19.8529 19.3529C19.9675 19.2384 20.0739 19.1158 20.1714 18.986C20.602 18.413 20.8571 17.7006 20.8571 16.9286C20.8571 15.035 19.3221 13.5 17.4286 13.5C15.535 13.5 14 15.035 14 16.9286C14 18.8221 15.535 20.3571 17.4286 20.3571C17.597 20.3571 17.7626 20.345 17.9246 20.3215C16.8121 20.5 15.3429 20.5 13.25 20.5Z',
  d4: 'M17.3036 14.3751C15.9623 14.3751 14.875 15.4624 14.875 16.8037C14.875 18.145 15.9623 19.2323 17.3036 19.2323C17.9745 19.2323 18.5803 18.9615 19.0208 18.521C19.1022 18.4396 19.1778 18.3526 19.2469 18.2605C19.5519 17.8547 19.7321 17.3517 19.7321 16.8037C19.7321 15.4624 18.6448 14.3751 17.3036 14.3751ZM12.875 16.8037C12.875 14.3579 14.8577 12.3751 17.3036 12.3751C19.7494 12.3751 21.7321 14.3579 21.7321 16.8037C21.7321 17.6632 21.4864 18.4675 21.0616 19.1475L22.5821 20.668C22.9726 21.0585 22.9726 21.6917 22.5821 22.0822C22.1916 22.4728 21.5584 22.4728 21.1679 22.0822L19.6474 20.5617C18.9677 20.9863 18.1639 21.2323 17.3036 21.2323C14.8577 21.2323 12.875 19.2495 12.875 16.8037Z',
  d5: 'M9.3376 1.86372C8.69873 1.62415 7.98705 1.62446 6.95764 1.62492C6.0789 1.62491 5.19705 1.62494 4.6247 1.67539C4.03496 1.72738 3.51888 1.83734 3.04758 2.10035C2.44033 2.43923 1.93928 2.94029 1.6004 3.54754C1.33738 4.01884 1.22742 4.53492 1.17544 5.12465C1.12498 5.697 1.12499 6.40573 1.125 7.28446V10.4323C1.12499 12.7407 1.12498 14.5498 1.31475 15.9613C1.50899 17.406 1.91433 18.546 2.80914 19.4408C3.70395 20.3356 4.84397 20.741 6.28871 20.9352C7.70019 21.125 9.50923 21.125 11.8176 21.125C12.3677 21.125 12.6427 21.125 12.7325 20.9995C12.7486 20.9771 12.7578 20.96 12.7679 20.9342C12.8241 20.7906 12.6597 20.5381 12.331 20.033C11.7263 19.1039 11.375 17.9947 11.375 16.8034C11.375 13.5292 14.0293 10.8749 17.3036 10.8749C18.7606 10.8749 20.0948 11.4005 21.127 12.2724C21.8941 12.9203 22.2777 13.2443 22.4513 13.1637C22.625 13.083 22.625 12.6364 22.625 11.7431C22.625 11.7179 22.625 11.6926 22.625 11.6672C22.625 10.6482 22.625 9.74377 22.558 9.08444C22.4887 8.40388 22.3419 7.81368 21.993 7.29157C21.7194 6.88211 21.3679 6.53054 20.9584 6.25695C20.4363 5.90809 19.8461 5.76124 19.1655 5.69201C18.5062 5.62494 17.6845 5.62495 16.6655 5.62496L13.1111 5.62496C12.795 5.62496 12.6146 5.62403 12.4814 5.61027C12.3794 5.60313 12.3098 5.52751 12.2878 5.49059C12.2159 5.37765 11.9588 4.86404 11.8175 4.58131C11.3454 3.62617 10.7331 2.38701 9.3376 1.86372Z',
  d6: 'M22 21.5L19.8519 19.3529M19.8519 19.3529C19.9665 19.2384 20.073 19.1158 20.1705 18.986C20.6013 18.413 20.8565 17.7006 20.8565 16.9286C20.8565 15.035 19.3208 13.5 17.4264 13.5C15.5318 13.5 13.9961 15.035 13.9961 16.9286C13.9961 18.8221 15.5318 20.3571 17.4264 20.3571C18.3735 20.3571 19.2312 19.9734 19.8519 19.3529Z',
  d7: 'M6.98973 6.5112H21.9004C21.9557 6.5112 22.0005 6.55597 22.0005 6.6112V13.9945M12.0519 20.4987H2.10396C2.0487 20.4987 2.00391 20.454 2.00391 20.3987L2.00402 2.60139C2.00402 2.54616 2.04881 2.50139 2.10406 2.50139L8.9778 2.50098L12.0195 6.5112',
  d8: 'M17.4571 14.65C16.1829 14.65 15.15 15.6829 15.15 16.9571C15.15 18.2313 16.1829 19.2643 17.4571 19.2643C18.0945 19.2643 18.67 19.0071 19.0885 18.5885C19.1658 18.5113 19.2376 18.4286 19.3033 18.3411C19.593 17.9556 19.7643 17.4777 19.7643 16.9571C19.7643 15.6829 18.7313 14.65 17.4571 14.65ZM13.25 16.9571C13.25 14.6336 15.1336 12.75 17.4571 12.75C19.7807 12.75 21.6643 14.6336 21.6643 16.9571C21.6643 17.7737 21.4308 18.5377 21.0273 19.1838L22.75 20.9065L21.4065 22.25L19.6837 20.5272C19.038 20.9306 18.2744 21.1643 17.4571 21.1643C15.1336 21.1643 13.25 19.2807 13.25 16.9571Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.6963C12.5033 20.204 11.75 18.6685 11.75 16.9571C11.75 13.8052 14.3052 11.25 17.4571 11.25C19.8528 11.25 21.9037 12.7261 22.75 14.8184V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
} as const;

export const IconFolderSearchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-stroke-rounded IconFolderSearchStrokeRounded"
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

export const IconFolderSearchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-duotone-rounded IconFolderSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderSearchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-twotone-rounded IconFolderSearchTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderSearchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-solid-rounded IconFolderSearchSolidRounded"
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

export const IconFolderSearchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-bulk-rounded IconFolderSearchBulkRounded"
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

export const IconFolderSearchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-stroke-sharp IconFolderSearchStrokeSharp"
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

export const IconFolderSearchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-search-solid-sharp IconFolderSearchSolidSharp"
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

export const iconPackOfFolderSearch: TheIconSelfPack = {
  name: 'FolderSearch',
  StrokeRounded: IconFolderSearchStrokeRounded,
  DuotoneRounded: IconFolderSearchDuotoneRounded,
  TwotoneRounded: IconFolderSearchTwotoneRounded,
  SolidRounded: IconFolderSearchSolidRounded,
  BulkRounded: IconFolderSearchBulkRounded,
  StrokeSharp: IconFolderSearchStrokeSharp,
  SolidSharp: IconFolderSearchSolidSharp,
};
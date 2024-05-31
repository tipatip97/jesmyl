import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994',
  d2: 'M18.375 19.25C18.375 20.4926 17.3956 21.5 16.1875 21.5C14.9794 21.5 14 20.4926 14 19.25C14 18.0074 14.9794 17 16.1875 17C17.3956 17 18.375 18.0074 18.375 19.25ZM18.375 19.25V12.5C18.6667 12.95 18.9 14.84 21 15.2',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 15.2612 22 17.0167 21.1573 18.2779C20.7926 18.8238 20.3238 19.2926 19.7779 19.6573C19.3157 19.9662 18.7871 20.1618 18.1299 20.2858C18.2865 19.9757 18.375 19.6235 18.375 19.25C18.375 18.0074 17.3956 17 16.1875 17C14.9794 17 14 18.0074 14 19.25C14 19.712 14.1354 20.1415 14.3676 20.4988C14.016 20.5 13.644 20.5 13.25 20.5Z',
  d4: 'M18.0914 11.4161C18.5163 11.2905 18.9732 11.4594 19.2142 11.8312C19.4069 12.1286 19.5991 12.9094 19.8582 13.2302C20.0957 13.6116 20.4538 13.9669 21.169 14.0895C21.7133 14.1828 22.0789 14.6997 21.9856 15.244C21.8923 15.7884 21.3754 16.154 20.831 16.0607C20.2504 15.9612 19.7711 15.768 19.375 15.5208V19.1251C19.375 20.8933 17.9743 22.3751 16.1875 22.3751C14.4007 22.3751 13 20.8933 13 19.1251C13 17.3569 14.4007 15.8751 16.1875 15.8751C16.6093 15.8751 17.0096 15.9577 17.375 16.1071V12.3751C17.375 11.932 17.6665 11.5418 18.0914 11.4161Z',
  d5: 'M9.4626 1.86384C8.82373 1.62427 8.11205 1.62458 7.08264 1.62504C6.2039 1.62503 5.32205 1.62506 4.7497 1.67552C4.15996 1.7275 3.64388 1.83746 3.17258 2.10048C2.56533 2.43935 2.06428 2.94041 1.7254 3.54766C1.46238 4.01896 1.35242 4.53504 1.30044 5.12478C1.24999 5.69712 1.24999 6.40585 1.25 7.28458V10.4325C1.24999 12.7408 1.24998 14.5499 1.43975 15.9614C1.63399 17.4061 2.03933 18.5461 2.93414 19.4409C3.82895 20.3358 4.96897 20.7411 6.41371 20.9353C7.62737 21.0985 9.13495 21.1214 11.0012 21.1246C11.4059 21.1253 11.6083 21.1256 11.6986 21.0113C11.7889 20.897 11.7365 20.6788 11.6319 20.2423C11.5455 19.882 11.5 19.5076 11.5 19.1252C11.5 16.8592 13.0988 14.8733 15.3175 14.4558C15.5971 14.4031 15.7368 14.3768 15.8059 14.2935C15.875 14.2102 15.875 14.0813 15.875 13.8235V12.3752C15.875 11.2676 16.6039 10.292 17.666 9.97784C18.7282 9.66372 19.8704 10.086 20.4729 11.0155C20.6025 11.2154 20.6943 11.4312 20.7477 11.5617C20.7916 11.6688 20.9953 12.1804 21.0343 12.2831C21.1323 12.5217 21.3339 12.6012 21.4224 12.6111C21.4553 12.6168 21.4879 12.623 21.5202 12.6299C22.1918 12.7723 22.5276 12.8435 22.6388 12.7534C22.7499 12.6634 22.7499 12.4012 22.75 11.8768L22.75 11.6673C22.75 10.6483 22.75 9.74389 22.683 9.08456C22.6137 8.404 22.4669 7.8138 22.118 7.29169C21.8444 6.88223 21.4929 6.53066 21.0834 6.25707C20.5613 5.90821 19.9711 5.76136 19.2905 5.69213C18.6312 5.62506 17.8095 5.62507 16.7905 5.62508L13.2361 5.62508C12.92 5.62508 12.7396 5.62415 12.6064 5.61039C12.5044 5.60325 12.4348 5.52763 12.4128 5.49071C12.3409 5.37777 12.0838 4.86416 11.9425 4.58144C11.4704 3.62629 10.8581 2.38713 9.4626 1.86384Z',
  d6: 'M6.98631 6.5112H21.9014C21.9567 6.5112 22.0015 6.55597 22.0015 6.6112V11.0699M12.05 20.4987H2.0991C2.04383 20.4987 1.99902 20.454 1.99902 20.3987L1.99913 2.60139C1.99914 2.54616 2.04394 2.50139 2.09921 2.50139L8.97496 2.50098L12.0234 6.5112',
  d7: 'M21.0002 15.1997C20.3949 15.1997 20.0425 14.8412 19.7931 14.5181C19.6548 14.3389 19.5435 14.1403 19.4509 13.9337L18.805 12.4927H18.3597L18.355 19.2487M18.355 19.2487C18.355 20.4951 17.3727 21.5055 16.1609 21.5055C14.9491 21.5055 13.9668 20.4951 13.9668 19.2487C13.9668 18.0022 14.9491 16.9918 16.1609 16.9918C17.3727 16.9918 18.355 18.0022 18.355 19.2487Z',
  d8: 'M21.1989 11.7531L21.4619 12.3457C21.5273 12.493 21.5884 12.6428 21.65 12.7939L21.65 12.7939C21.7958 13.1516 21.9446 13.5164 22.1604 13.8728C22.4794 14.3995 22.6849 14.4502 22.75 14.4502V16.4502C22.0591 16.4502 21.5257 16.1455 21.125 15.7669V19.5002C21.125 21.2684 19.7243 22.7502 17.9375 22.7502C16.1507 22.7502 14.75 21.2684 14.75 19.5002C14.75 17.732 16.1507 16.2502 17.9375 16.2502C18.3593 16.2502 18.7596 16.3328 19.125 16.4822V11.7476L21.1989 11.7531Z',
  d9: 'M2 1.25C1.80109 1.25 1.61032 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V20C1.25 20.4142 1.58579 20.75 2 20.75H13.4157C13.3075 20.3493 13.25 19.9298 13.25 19.5002C13.25 17.0485 15.1217 14.9246 17.625 14.7604V10.1793H22.75V6C22.75 5.58579 22.4142 5.25 22 5.25H12.375L9.375 1.25001L2 1.25Z',
} as const;

export const IconFolderMusicStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-stroke-rounded IconFolderMusicStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderMusicDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-duotone-rounded IconFolderMusicDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderMusicTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-twotone-rounded IconFolderMusicTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderMusicSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-solid-rounded IconFolderMusicSolidRounded"
    >
      <path 
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

export const IconFolderMusicBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-bulk-rounded IconFolderMusicBulkRounded"
    >
      <path 
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

export const IconFolderMusicStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-stroke-sharp IconFolderMusicStrokeSharp"
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

export const IconFolderMusicSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-music-solid-sharp IconFolderMusicSolidSharp"
    >
      <path 
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

export const iconPackOfFolderMusic: TheIconSelfPack = {
  name: 'FolderMusic',
  StrokeRounded: IconFolderMusicStrokeRounded,
  DuotoneRounded: IconFolderMusicDuotoneRounded,
  TwotoneRounded: IconFolderMusicTwotoneRounded,
  SolidRounded: IconFolderMusicSolidRounded,
  BulkRounded: IconFolderMusicBulkRounded,
  StrokeSharp: IconFolderMusicStrokeSharp,
  SolidSharp: IconFolderMusicSolidSharp,
};
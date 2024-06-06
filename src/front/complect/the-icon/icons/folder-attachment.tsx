import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3622 3.12712 10.8418 4.18358 11.3666 5.23313L12 6.5M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.39331 22 11.5',
  d2: 'M21 15.9615L21 18.4231C21 20.1224 19.6569 21.5 18 21.5C16.3431 21.5 15 20.1224 15 18.4231L15 15.0385C15 14.1888 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1888 18 15.0385L18 18.4231',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M14 18.2981C14 20.5257 15.7671 22.375 18 22.375C20.2329 22.375 22 20.5257 22 18.2981L22 15.8365C22 15.2843 21.5523 14.8365 21 14.8365C20.4477 14.8365 20 15.2843 20 15.8365L20 18.2981C20 19.4691 19.0809 20.375 18 20.375C16.9191 20.375 16 19.4691 16 18.2981L16 14.9135C16 14.5921 16.2476 14.375 16.5 14.375C16.7524 14.375 17 14.5921 17 14.9135L17 18.2981C17 18.8504 17.4477 19.2981 18 19.2981C18.5523 19.2981 19 18.8504 19 18.2981L19 14.9135C19 13.5355 17.9044 12.375 16.5 12.375C15.0956 12.375 14 13.5355 14 14.9135L14 18.2981Z',
  d5: 'M9.4626 1.86384C8.82373 1.62427 8.11205 1.62458 7.08264 1.62504C6.2039 1.62503 5.32205 1.62506 4.7497 1.67552C4.15996 1.7275 3.64388 1.83746 3.17258 2.10048C2.56533 2.43935 2.06428 2.94041 1.7254 3.54766C1.46238 4.01896 1.35242 4.53504 1.30044 5.12478C1.24998 5.69712 1.24999 6.40585 1.25 7.28458V10.4325C1.24999 12.7408 1.24998 14.5499 1.43975 15.9614C1.63399 17.4061 2.03933 18.5461 2.93414 19.4409C3.82895 20.3358 4.96897 20.7411 6.41371 20.9353C7.82519 21.1251 9.63423 21.1251 11.9426 21.1251H12.2183C12.6653 21.1251 12.8888 21.1251 12.9785 20.9982C13.0681 20.8713 12.9865 20.6411 12.8233 20.1808C12.6136 19.5894 12.5 18.9546 12.5 18.2982L12.5 14.9136C12.5 12.7476 14.2273 10.8751 16.5 10.8751C18.0314 10.8751 19.3152 11.7253 19.9898 12.9427C20.1216 13.1807 20.1876 13.2997 20.2658 13.3414C20.344 13.3832 20.4914 13.3707 20.786 13.3457C20.8565 13.3397 20.9279 13.3367 21 13.3367C21.1862 13.3367 21.3676 13.357 21.5421 13.3956C22.1959 13.5401 22.5228 13.6124 22.6348 13.5227C22.7469 13.4329 22.7477 13.1771 22.7491 12.6654C22.75 12.3473 22.75 12.0149 22.75 11.6673C22.75 10.6483 22.75 9.74389 22.683 9.08456C22.6137 8.404 22.4669 7.8138 22.118 7.29169C21.8444 6.88223 21.4929 6.53066 21.0834 6.25707C20.5613 5.90821 19.9711 5.76136 19.2905 5.69213C18.6312 5.62506 17.8095 5.62507 16.7905 5.62508L13.2361 5.62508C12.92 5.62508 12.7396 5.62415 12.6064 5.61039C12.5044 5.60325 12.4348 5.52763 12.4128 5.49071C12.3409 5.37777 12.0838 4.86416 11.9425 4.58144C11.4704 3.62629 10.8581 2.38713 9.4626 1.86384Z',
  d6: 'M21 15.9615V18.4231C21 20.1224 19.6569 21.5 18 21.5C16.3431 21.5 15 20.1224 15 18.4231V15.0385C15 14.1888 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1888 18 15.0385V18.4231',
  d7: 'M6.98656 6.49543H11.9984M11.9984 6.49543H21.99C21.9955 6.49543 22 6.49991 22 6.50543V11.9968M11.9984 6.49543L8.99515 2.5H2.01001C2.00448 2.5 2 2.50447 2 2.50999L2.00044 20.4357C2.00044 20.4412 2.00491 20.4457 2.01042 20.4457L12.0002 20.4729',
  d8: 'M14.75 18.1731C14.75 20.4007 16.5171 22.25 18.75 22.25C20.9829 22.25 22.75 20.4007 22.75 18.1731L22.75 15.7115L20.75 15.7115L20.75 18.1731C20.75 19.3441 19.8309 20.25 18.75 20.25C17.6691 20.25 16.75 19.3441 16.75 18.1731L16.75 14.7885C16.75 14.4671 16.9976 14.25 17.25 14.25C17.5024 14.25 17.75 14.4671 17.75 14.7885L17.75 18.1731L19.75 18.1731L19.75 14.7885C19.75 13.4105 18.6544 12.25 17.25 12.25C15.8456 12.25 14.75 13.4105 14.75 14.7885L14.75 18.1731Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H14.1641C13.5841 20.3608 13.25 19.2988 13.25 18.1731L13.25 14.7885C13.25 12.6225 14.9773 10.75 17.25 10.75C19.318 10.75 20.9344 12.3004 21.2088 14.2115L22.75 14.2115V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
} as const;

export const IconFolderAttachmentStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-stroke-rounded IconFolderAttachmentStrokeRounded"
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

export const IconFolderAttachmentDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-duotone-rounded IconFolderAttachmentDuotoneRounded"
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

export const IconFolderAttachmentTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-twotone-rounded IconFolderAttachmentTwotoneRounded"
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

export const IconFolderAttachmentSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-solid-rounded IconFolderAttachmentSolidRounded"
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

export const IconFolderAttachmentBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-bulk-rounded IconFolderAttachmentBulkRounded"
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

export const IconFolderAttachmentStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-stroke-sharp IconFolderAttachmentStrokeSharp"
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

export const IconFolderAttachmentSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-attachment-solid-sharp IconFolderAttachmentSolidSharp"
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

export const iconPackOfFolderAttachment: TheIconSelfPack = {
  name: 'FolderAttachment',
  StrokeRounded: IconFolderAttachmentStrokeRounded,
  DuotoneRounded: IconFolderAttachmentDuotoneRounded,
  TwotoneRounded: IconFolderAttachmentTwotoneRounded,
  SolidRounded: IconFolderAttachmentSolidRounded,
  BulkRounded: IconFolderAttachmentBulkRounded,
  StrokeSharp: IconFolderAttachmentStrokeSharp,
  SolidSharp: IconFolderAttachmentSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994H13',
  d2: 'M18.5 13.5L18.5 21.5M18.5 13.5C17.7998 13.5 16.4915 15.4943 16 16M18.5 13.5C19.2002 13.5 20.5085 15.4943 21 16',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M19.5059 21.375C19.5059 21.9273 19.0581 22.375 18.5059 22.375C17.9536 22.375 17.5059 21.9273 17.5059 21.375L17.5059 16.875L16.9116 16.875C16.736 16.8751 16.5203 16.8753 16.3439 16.8532L16.3405 16.8528C16.2141 16.837 15.638 16.7652 15.3637 16.1996C15.0887 15.6327 15.3907 15.1326 15.456 15.0244L15.7951 14.5559C16.0897 14.1801 16.4954 13.6656 16.8759 13.2746C17.0657 13.0795 17.283 12.8783 17.5139 12.7194C17.7191 12.5782 18.0693 12.375 18.5 12.375C18.9307 12.375 19.2809 12.5782 19.4861 12.7194C19.717 12.8783 19.9343 13.0795 20.1241 13.2746C20.5046 13.6656 20.9102 14.1801 21.2049 14.5559L21.544 15.0244C21.6093 15.1326 21.9113 15.6328 21.6363 16.1996C21.362 16.7652 20.7859 16.837 20.6595 16.8528L20.6561 16.8532C20.4797 16.8753 20.264 16.8751 20.0884 16.875L19.5059 16.875L19.5059 21.375Z',
  d5: 'M9.4626 1.86408C8.82373 1.62451 8.11205 1.62483 7.08264 1.62528C6.2039 1.62527 5.32205 1.62531 4.7497 1.67576C4.15996 1.72775 3.64388 1.83771 3.17258 2.10072C2.56533 2.4396 2.06428 2.94066 1.7254 3.5479C1.46238 4.01921 1.35242 4.53528 1.30044 5.12502C1.24999 5.69737 1.24999 6.4061 1.25 7.28483V10.4327C1.24999 12.7411 1.24998 14.5501 1.43975 15.9616C1.63399 17.4064 2.03933 18.5464 2.93414 19.4412C3.82895 20.336 4.96897 20.7413 6.41371 20.9356C7.82519 21.1253 9.63423 21.1253 11.9426 21.1253H13.2923C14.077 21.1253 14.7844 21.1253 15.4236 21.115C15.6968 21.1105 15.8334 21.1083 15.9195 21.0207C16.0057 20.9332 16.0057 20.7953 16.0057 20.5195L16.0057 18.8267C16.0057 18.5975 16.0057 18.4828 15.9509 18.4051C15.8962 18.3274 15.7697 18.2822 15.5168 18.1917C15.036 18.0198 14.4002 17.6508 14.0139 16.8545C13.3799 15.5476 14.0659 14.4229 14.1658 14.2591C14.6049 13.5391 15.3548 12.687 15.8006 12.2288C16.0225 12.0008 16.3176 11.7219 16.6635 11.4839C16.9464 11.2892 17.608 10.8752 18.4998 10.8752C19.3916 10.8752 20.0532 11.2892 20.3361 11.4839C20.682 11.7219 20.9771 12.0008 21.199 12.2288C21.3384 12.3721 21.5127 12.5741 21.6952 12.7952C22.1325 13.3249 22.3511 13.5898 22.5496 13.5186C22.748 13.4475 22.7485 13.1099 22.7496 12.4347C22.75 12.1875 22.75 11.932 22.75 11.6676C22.75 10.6486 22.75 9.74413 22.683 9.08481C22.6137 8.40425 22.4669 7.81404 22.118 7.29193C21.8444 6.88247 21.4929 6.53091 21.0834 6.25731C20.5613 5.90845 19.9711 5.7616 19.2905 5.69237C18.6312 5.6253 17.8095 5.62531 16.7905 5.62532L13.2361 5.62532C12.92 5.62532 12.7396 5.6244 12.6064 5.61063C12.5044 5.60349 12.4348 5.52787 12.4128 5.49095C12.3409 5.37802 12.0838 4.86441 11.9425 4.58168C11.4704 3.62654 10.8581 2.38737 9.4626 1.86408Z',
  d6: 'M19 21.5V14.201M16 16.5L19 13.5L22 16.5',
  d7: 'M14.0008 20.4987H2.10391C2.04868 20.4987 2.00391 20.454 2.00391 20.3987L2.00402 2.60139C2.00402 2.54616 2.04879 2.50139 2.10401 2.50139L8.97439 2.50098L12.0138 6.48288M12.0138 6.48288H6.98937M12.0138 6.48288H21.8959C21.9512 6.48288 21.9959 6.52765 21.9959 6.58288V10.9893',
  d8: 'M20.043 22.75L20.043 17.1642L21.3359 18.4571L22.7502 17.0429L19.043 13.3358L15.3359 17.0429L16.7502 18.4571L18.043 17.1642L18.043 22.75H20.043Z',
  d9: 'M2 1.25C1.80109 1.25 1.61032 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V20C1.25 20.4142 1.58579 20.75 2 20.75H16.5433V20.3713L13.2148 17.0429L19.0433 11.2145L22.75 14.9212V6C22.75 5.58579 22.4142 5.25 22 5.25H12.375L9.375 1.25001L2 1.25Z',
};

export const IconFolderUploadStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-stroke-rounded IconFolderUploadStrokeRounded"
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

export const IconFolderUploadDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-duotone-rounded IconFolderUploadDuotoneRounded"
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

export const IconFolderUploadTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-twotone-rounded IconFolderUploadTwotoneRounded"
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

export const IconFolderUploadSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-solid-rounded IconFolderUploadSolidRounded"
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

export const IconFolderUploadBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-bulk-rounded IconFolderUploadBulkRounded"
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

export const IconFolderUploadStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-stroke-sharp IconFolderUploadStrokeSharp"
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

export const IconFolderUploadSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-upload-solid-sharp IconFolderUploadSolidSharp"
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

export const iconPackOfFolderUpload: TheIconSelfPack = {
  name: 'FolderUpload',
  StrokeRounded: IconFolderUploadStrokeRounded,
  DuotoneRounded: IconFolderUploadDuotoneRounded,
  TwotoneRounded: IconFolderUploadTwotoneRounded,
  SolidRounded: IconFolderUploadSolidRounded,
  BulkRounded: IconFolderUploadBulkRounded,
  StrokeSharp: IconFolderUploadStrokeSharp,
  SolidSharp: IconFolderUploadSolidSharp,
};
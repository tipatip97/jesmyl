import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994H12',
  d2: 'M18.5 21.5L18.5 13.5M18.5 21.5C17.7998 21.5 16.4915 19.5057 16 19M18.5 21.5C19.2002 21.5 20.5085 19.5057 21 19',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M19.5059 13.375C19.5059 12.8227 19.0581 12.375 18.5059 12.375C17.9536 12.375 17.5059 12.8227 17.5059 13.375L17.5059 17.875L16.9116 17.875C16.736 17.8749 16.5203 17.8747 16.3439 17.8968L16.3405 17.8972C16.2141 17.913 15.638 17.9848 15.3637 18.5504C15.0887 19.1173 15.3907 19.6174 15.456 19.7256L15.7951 20.1941C16.0897 20.5699 16.4954 21.0844 16.8759 21.4754C17.0657 21.6705 17.283 21.8717 17.5139 22.0306C17.7191 22.1718 18.0693 22.375 18.5 22.375C18.9307 22.375 19.2809 22.1718 19.4861 22.0306C19.717 21.8717 19.9343 21.6705 20.1241 21.4754C20.5046 21.0844 20.9102 20.5699 21.2049 20.1941L21.544 19.7256C21.6093 19.6174 21.9113 19.1172 21.6363 18.5504C21.362 17.9848 20.7859 17.913 20.6595 17.8972L20.6561 17.8968C20.4797 17.8747 20.264 17.8749 20.0884 17.875L19.5059 17.875L19.5059 13.375Z',
  d5: 'M9.4626 1.86384C8.82373 1.62427 8.11205 1.62458 7.08264 1.62504C6.2039 1.62503 5.32205 1.62506 4.7497 1.67552C4.15996 1.7275 3.64388 1.83746 3.17258 2.10048C2.56533 2.43935 2.06428 2.94041 1.7254 3.54766C1.46238 4.01896 1.35242 4.53504 1.30044 5.12478C1.24999 5.69712 1.24999 6.40585 1.25 7.28458V10.4325C1.24999 12.7408 1.24998 14.5499 1.43975 15.9614C1.63399 17.4061 2.03933 18.5461 2.93414 19.4409C3.82895 20.3358 4.96897 20.7411 6.41371 20.9353C7.82519 21.1251 9.63423 21.1251 11.9426 21.1251L13.8423 21.1212C14.0058 21.1209 14.0875 21.1207 14.1384 21.1015C14.2826 21.0471 14.362 20.8923 14.3223 20.7434C14.3082 20.6908 14.2607 20.6243 14.1658 20.4913C14.0659 20.3275 13.3799 19.2028 14.0139 17.8959C14.4002 17.0996 15.036 16.7306 15.5168 16.5586C15.7697 16.4682 15.8962 16.423 15.9509 16.3452C16.0057 16.2675 16.0057 16.1529 16.0057 15.9236L16.0057 13.3751C16.0057 11.9944 17.1249 10.8751 18.5057 10.8751C19.8864 10.8751 21.0057 11.9944 21.0057 13.3751L21.0057 15.9279C21.0057 16.1562 21.0057 16.2704 21.0601 16.3479C21.1146 16.4255 21.2404 16.471 21.4921 16.562C21.5178 16.5712 21.5439 16.5811 21.5704 16.5915C22.0399 16.7766 22.2746 16.8691 22.4008 16.7947C22.5269 16.7203 22.5523 16.5251 22.6032 16.1348C22.6171 16.0281 22.6296 15.9194 22.6408 15.8087C22.75 14.7353 22.75 13.3871 22.75 11.6673C22.75 10.6483 22.75 9.74389 22.683 9.08456C22.6137 8.404 22.4669 7.8138 22.118 7.29169C21.8444 6.88223 21.4929 6.53066 21.0834 6.25707C20.5613 5.90821 19.9711 5.76136 19.2905 5.69213C18.6312 5.62506 17.8095 5.62507 16.7905 5.62508L13.2361 5.62508C12.92 5.62508 12.7396 5.62415 12.6064 5.61039C12.5044 5.60325 12.4348 5.52763 12.4128 5.49071C12.3409 5.37777 12.0838 4.86416 11.9425 4.58144C11.4704 3.62629 10.8581 2.38713 9.4626 1.86384Z',
  d6: 'M18 13.5V20.852M15 18.5L18 21.5L21 18.5',
  d7: 'M6.98737 6.50009H11.9999M11.9999 6.50009H21.9929C21.9984 6.50009 22.0029 6.50457 22.0029 6.51009V12.4995M11.9999 6.50009L8.99624 2.50195H2.01011C2.00458 2.50195 2.0001 2.50643 2.0001 2.51195L2.00054 20.4498C2.00054 20.4553 1.99497 20.4979 2.00048 20.498H11.9999',
  d8: 'M20.043 13.3357L20.043 18.9215L21.3359 17.6286L22.7502 19.0428L19.043 22.7499L15.3359 19.0428L16.7502 17.6286L18.043 18.9215L18.043 13.3357H20.043Z',
  d9: 'M2 1.25C1.80109 1.25 1.61032 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V20C1.25 20.4142 1.58579 20.75 2 20.75H14.922L13.2148 19.0428L16.5433 15.7144L16.5433 11.8357H21.5433V15.7144L22.75 16.9211V6C22.75 5.58579 22.4142 5.25 22 5.25H12.375L9.375 1.25001L2 1.25Z',
} as const;

export const IconFolderDownloadStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-stroke-rounded IconFolderDownloadStrokeRounded"
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

export const IconFolderDownloadDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-duotone-rounded IconFolderDownloadDuotoneRounded"
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

export const IconFolderDownloadTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-twotone-rounded IconFolderDownloadTwotoneRounded"
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

export const IconFolderDownloadSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-solid-rounded IconFolderDownloadSolidRounded"
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

export const IconFolderDownloadBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-bulk-rounded IconFolderDownloadBulkRounded"
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

export const IconFolderDownloadStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-stroke-sharp IconFolderDownloadStrokeSharp"
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

export const IconFolderDownloadSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-download-solid-sharp IconFolderDownloadSolidSharp"
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

export const iconPackOfFolderDownload: TheIconSelfPack = {
  name: 'FolderDownload',
  StrokeRounded: IconFolderDownloadStrokeRounded,
  DuotoneRounded: IconFolderDownloadDuotoneRounded,
  TwotoneRounded: IconFolderDownloadTwotoneRounded,
  SolidRounded: IconFolderDownloadSolidRounded,
  BulkRounded: IconFolderDownloadBulkRounded,
  StrokeSharp: IconFolderDownloadStrokeSharp,
  SolidSharp: IconFolderDownloadSolidSharp,
};
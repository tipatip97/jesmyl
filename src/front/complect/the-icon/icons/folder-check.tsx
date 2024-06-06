import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C21.9796 9.05942 21.9992 10.0588 22 12M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.7646 20.8357 6.7682 20.9816 10.5 20.9979',
  d2: 'M13 19C13 19 14 19 15 21C15 21 18.1765 16 21 15',
  d3: 'M12 21H13.25C16.7612 21 18.5167 21 19.7779 20.1573C20.3238 19.7926 20.7926 19.3238 21.1573 18.7779C22 17.5167 22 15.7612 22 12.25C22 10.1433 22 9.08996 21.4944 8.33329C21.2755 8.00572 20.9943 7.72447 20.6667 7.50559C19.91 7 18.8567 7 16.75 7H12L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 15.714 2 18.0711 3.46447 19.5355C4.92893 21 7.28595 21 12 21Z',
  d4: 'M21.9426 14.5414C22.127 15.062 21.8544 15.6335 21.3338 15.8179C20.8002 16.0069 20.1837 16.4138 19.5307 16.9865C18.888 17.5501 18.2628 18.2271 17.7091 18.8909C17.1572 19.5524 16.6885 20.1861 16.3574 20.6551C16.1922 20.8891 15.932 21.2794 15.8441 21.4115C15.6508 21.7156 15.3087 21.8924 14.9489 21.874C14.5889 21.8555 14.2668 21.6448 14.1056 21.3225C13.6649 20.4411 13.2696 20.0902 13.0703 19.9573C12.986 19.9011 12.929 19.8786 12.9064 19.8709C12.398 19.8237 12 19.396 12 18.8753C12 18.323 12.4477 17.8753 13 17.8753C13.1328 17.8753 13.3434 17.9155 13.4466 17.945C13.6545 18.0044 13.9053 18.1103 14.1797 18.2932C14.454 18.4761 14.7416 18.7288 15.0304 19.0747C15.3456 18.6439 15.734 18.1363 16.1733 17.6097C16.7666 16.8985 17.465 16.1379 18.212 15.4828C18.9486 14.8368 19.788 14.2436 20.6662 13.9326C21.1868 13.7483 21.7582 14.0208 21.9426 14.5414Z',
  d5: 'M9.4626 2.36384C8.82373 2.12427 8.11205 2.12458 7.08264 2.12504C6.2039 2.12503 5.32205 2.12506 4.7497 2.17552C4.15996 2.2275 3.64388 2.33746 3.17258 2.60048C2.56533 2.93935 2.06428 3.44041 1.7254 4.04766C1.46238 4.51896 1.35242 5.03504 1.30044 5.62478C1.24998 6.19712 1.24999 6.90585 1.25 7.78458V10.9325C1.24999 13.2408 1.24998 15.0499 1.43975 16.4614C1.63399 17.9061 2.03933 19.0461 2.93414 19.9409C3.82895 20.8358 4.96897 21.2411 6.41371 21.4353C7.82519 21.6251 9.63423 21.6251 11.9426 21.6251H12.1912C12.3527 21.6251 12.44 21.4307 12.3353 21.3077C12.3102 21.2782 12.2897 21.2727 12.2527 21.2612C11.2366 20.9431 10.5 19.9958 10.5 18.8751C10.5 17.4944 11.6193 16.3751 13 16.3751C13.3209 16.3751 13.6781 16.4509 13.8587 16.5025C14.0158 16.5474 14.1801 16.6058 14.3495 16.6803C14.5884 16.7854 14.7078 16.8379 14.8043 16.8161C14.9007 16.7942 14.9782 16.7044 15.1331 16.5246C15.7387 15.822 16.5322 14.9607 17.223 14.3549C18.0225 13.6537 19.029 12.921 20.1654 12.5185C20.7834 12.2996 21.4302 12.3383 21.9884 12.5787C22.2441 12.6889 22.372 12.7439 22.416 12.749C22.5897 12.7688 22.6867 12.7049 22.7372 12.5375C22.75 12.4952 22.75 12.3859 22.75 12.1673C22.75 11.1483 22.75 10.2439 22.683 9.58456C22.6137 8.904 22.4669 8.3138 22.118 7.79169C21.8444 7.38223 21.4929 7.03066 21.0834 6.75707C20.5613 6.40821 19.9711 6.26136 19.2905 6.19213C18.6312 6.12506 17.8095 6.12507 16.7905 6.12508L13.2361 6.12508C12.92 6.12508 12.7396 6.12415 12.6064 6.11039C12.5044 6.10325 12.4348 6.02763 12.4128 5.99071C12.3409 5.87777 12.0838 5.36416 11.9425 5.08144C11.4704 4.12629 10.8581 2.88713 9.4626 2.36384Z',
  d6: 'M13.0127 19L15.0149 21L21.0217 15',
  d7: 'M6.99811 7.00204H12.0106M12.0106 7.00204H22.0037C22.0092 7.00204 22.0137 7.00652 22.0137 7.01204L22.0037 13.041M12.0106 7.00204L9.00699 3.00391H2.02085C2.01532 3.00391 2.01084 3.00838 2.01084 3.01391L2.01128 20.9518C2.01128 20.9573 2.00571 20.9999 2.01123 20.9999H11.0417',
  d8: 'M22.7502 15.5429L16.043 22.25L13.3359 19.5429L14.7502 18.1287L16.043 19.4216L21.3359 14.1287L22.7502 15.5429Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H12.922L11.2148 19.5429L14.7504 16.0073L16.0433 17.3002L21.3362 12.0073L22.75 13.4212V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderCheckStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-stroke-rounded IconFolderCheckStrokeRounded"
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

export const IconFolderCheckDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-duotone-rounded IconFolderCheckDuotoneRounded"
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

export const IconFolderCheckTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-twotone-rounded IconFolderCheckTwotoneRounded"
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

export const IconFolderCheckSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-solid-rounded IconFolderCheckSolidRounded"
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

export const IconFolderCheckBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-bulk-rounded IconFolderCheckBulkRounded"
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

export const IconFolderCheckStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-stroke-sharp IconFolderCheckStrokeSharp"
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

export const IconFolderCheckSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-check-solid-sharp IconFolderCheckSolidSharp"
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

export const iconPackOfFolderCheck: TheIconSelfPack = {
  name: 'FolderCheck',
  StrokeRounded: IconFolderCheckStrokeRounded,
  DuotoneRounded: IconFolderCheckDuotoneRounded,
  TwotoneRounded: IconFolderCheckTwotoneRounded,
  SolidRounded: IconFolderCheckSolidRounded,
  BulkRounded: IconFolderCheckBulkRounded,
  StrokeSharp: IconFolderCheckStrokeSharp,
  SolidSharp: IconFolderCheckSolidSharp,
};
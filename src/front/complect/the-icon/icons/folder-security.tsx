import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9108 8.4565 21.984 9.11137 21.9969 10.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994',
  d2: 'M17.4991 12.5C16.0744 12.5 15.1506 13.4085 14.0581 13.7397C13.6138 13.8744 13.3917 13.9417 13.3018 14.0366C13.2119 14.1315 13.1856 14.2702 13.133 14.5476C12.5696 17.5157 13.801 20.2598 16.7375 21.3279C17.053 21.4426 17.2108 21.5 17.5007 21.5C17.7906 21.5 17.9484 21.4426 18.2639 21.3279C21.2002 20.2598 22.4304 17.5157 21.8669 14.5476C21.8142 14.2701 21.7879 14.1314 21.698 14.0365C21.6081 13.9416 21.386 13.8743 20.9418 13.7397C19.8488 13.4086 18.9239 12.5 17.4991 12.5Z',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 13.1044 22 14.1976 21.9516 15.1019C21.9304 14.9182 21.9022 14.7333 21.8669 14.5476C21.8142 14.2701 21.7879 14.1314 21.698 14.0365C21.6081 13.9416 21.386 13.8743 20.9418 13.7397C20.5456 13.6197 20.1714 13.4238 19.7876 13.2228C19.1126 12.8693 18.4075 12.5 17.4991 12.5C16.5908 12.5 15.8861 12.8693 15.2115 13.2228C14.8279 13.4238 14.4541 13.6197 14.0581 13.7397C13.6138 13.8744 13.3917 13.9417 13.3018 14.0366C13.2119 14.1315 13.1856 14.2702 13.133 14.5476C12.6828 16.9194 13.3787 19.1482 15.1749 20.493C14.5981 20.5 13.9599 20.5 13.25 20.5Z',
  d4: 'M15.3219 12.3228C15.908 12.0343 16.6173 11.75 17.4982 11.75C18.3792 11.75 19.0887 12.0343 19.675 12.3227C19.8696 12.4184 20.0403 12.5079 20.1971 12.59C20.5508 12.7754 20.8336 12.9236 21.1583 13.022C21.3622 13.0837 21.5689 13.1463 21.7134 13.2001C21.8392 13.2469 22.0665 13.3359 22.2415 13.5207C22.3965 13.6843 22.4706 13.8642 22.5137 14.0078C22.5498 14.1276 22.5803 14.289 22.6028 14.4077C23.2229 17.674 21.8583 20.8182 18.5193 22.0327C18.2123 22.1445 17.9225 22.25 17.4998 22.25C17.0771 22.25 16.7873 22.1445 16.4802 22.0327C13.1413 20.8183 11.7752 17.6743 12.3952 14.4077C12.4177 14.2891 12.4482 14.1277 12.4842 14.0079C12.5274 13.8643 12.6015 13.6844 12.7564 13.5208C12.9314 13.3361 13.1587 13.247 13.2845 13.2002C13.4289 13.1464 13.6357 13.0838 13.8396 13.022C14.1641 12.9236 14.4465 12.7755 14.8 12.5902C14.9567 12.508 15.1274 12.4185 15.3219 12.3228Z',
  d5: 'M7.08264 1.74992C8.11205 1.74946 8.82373 1.74915 9.4626 1.98872C10.8581 2.51201 11.4704 3.75117 11.9425 4.70631C12.0838 4.98904 12.3409 5.50265 12.4128 5.61559C12.4348 5.65251 12.5044 5.72813 12.6064 5.73527C12.7396 5.74903 12.92 5.74996 13.2361 5.74996L16.7905 5.74996C17.8095 5.74995 18.6312 5.74994 19.2905 5.81701C19.9711 5.88624 20.5613 6.03309 21.0834 6.38195C21.4929 6.65554 21.8444 7.00711 22.118 7.41657C22.4669 7.93868 22.6137 8.52888 22.683 9.20944C22.7284 9.65646 22.7431 10.3262 22.7478 11.0288C22.7509 11.496 22.7525 11.7296 22.6245 11.82C22.4966 11.9104 22.2701 11.8284 21.8172 11.6644C21.7438 11.6378 21.6768 11.6138 21.6213 11.5941C21.2239 11.4495 20.601 11.1222 20.3392 10.9766C19.6717 10.6483 18.7182 10.2499 17.5003 10.2499C16.2823 10.2499 15.329 10.6484 14.6616 10.9768L14.1102 11.2591C13.7335 11.4566 13.546 11.5441 13.3806 11.5942C13.1971 11.6498 12.9417 11.7279 12.7524 11.7983C12.5975 11.8558 12.0916 12.0435 11.6694 12.4892C11.2945 12.8851 11.1303 13.3079 11.0498 13.5761C10.9902 13.7744 10.9436 14.0218 10.9236 14.1279C10.519 16.2606 10.8362 18.4197 11.9006 20.1793C12.2095 20.6901 12.364 20.9455 12.2776 21.0983C12.1912 21.2511 11.913 21.2503 11.3568 21.2487C9.45122 21.2432 7.55756 21.214 6.41371 21.0602C4.96897 20.866 3.82895 20.4606 2.93414 19.5658C2.03933 18.671 1.63399 17.531 1.43975 16.0863C1.24998 14.6748 1.24999 12.8657 1.25 10.5573V7.40946C1.24999 6.53073 1.24999 5.822 1.30044 5.24965C1.35242 4.65992 1.46238 4.14384 1.7254 3.67254C2.06428 3.06529 2.56533 2.56423 3.17258 2.22535C3.64388 1.96234 4.15996 1.85238 4.7497 1.80039C5.32205 1.74994 6.2039 1.74991 7.08264 1.74992Z',
  d6: 'M6.98583 5.99878H12.0156M12.0156 5.99878H21.8965C21.9518 5.99878 21.9966 6.04342 21.9966 6.09849V10.4954M12.0156 5.99878L8.97389 2L2.10015 2.00041C2.0449 2.00041 2.00011 2.04505 2.00011 2.10012L2 19.8467C2 19.9018 2.04479 19.9464 2.10005 19.9464H12.048',
  d7: 'M16.6052 13.3013C15.7041 13.79 15.0384 14.1826 14.1218 14.1391C13.6171 17.8734 14.6181 19.7523 17.8296 20.9934C17.8489 21.0008 17.8708 21.0022 17.8908 20.997C21.0159 20.1902 22.6438 17.5148 21.7586 14.1508C20.9227 14.1156 20.2187 13.7476 19.3051 13.2842C18.4508 12.8509 17.4472 12.8446 16.6052 13.3013Z',
  d8: 'M15.8021 13.4119C16.3588 13.1233 17.0786 12.75 17.9999 12.75C18.9251 12.75 19.6456 13.1239 20.203 13.4132L20.2418 13.4333C20.8366 13.7417 21.2583 13.948 21.7835 13.948H22.3706L22.5115 14.5171C22.9716 16.3747 22.7532 18.1232 21.9624 19.51C21.1693 20.9011 19.8272 21.8781 18.1497 22.2195L17.9999 22.25L17.8501 22.2195C16.1725 21.8781 14.8305 20.9011 14.0374 19.51C13.2467 18.1232 13.0282 16.3747 13.4883 14.5171L13.6292 13.948H14.2163C14.7427 13.948 15.1662 13.7413 15.7611 13.4332L15.8021 13.4119Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.4219C13.1665 20.9407 12.9363 20.6077 12.7341 20.253C11.7275 18.4874 11.4924 16.3355 12.0321 14.1565L12.4552 12.448H14.2162C14.3248 12.448 14.4368 12.4297 15.071 12.1012L15.158 12.0561C15.7137 11.7674 16.7095 11.25 17.9997 11.25C19.294 11.25 20.2906 11.7682 20.8475 12.0578L20.932 12.1016C21.5669 12.4308 21.6765 12.448 21.7833 12.448H22.75V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
} as const;

export const IconFolderSecurityStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-stroke-rounded IconFolderSecurityStrokeRounded"
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

export const IconFolderSecurityDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-duotone-rounded IconFolderSecurityDuotoneRounded"
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

export const IconFolderSecurityTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-twotone-rounded IconFolderSecurityTwotoneRounded"
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

export const IconFolderSecuritySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-solid-rounded IconFolderSecuritySolidRounded"
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

export const IconFolderSecurityBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-bulk-rounded IconFolderSecurityBulkRounded"
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

export const IconFolderSecurityStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-stroke-sharp IconFolderSecurityStrokeSharp"
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

export const IconFolderSecuritySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-security-solid-sharp IconFolderSecuritySolidSharp"
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

export const iconPackOfFolderSecurity: TheIconSelfPack = {
  name: 'FolderSecurity',
  StrokeRounded: IconFolderSecurityStrokeRounded,
  DuotoneRounded: IconFolderSecurityDuotoneRounded,
  TwotoneRounded: IconFolderSecurityTwotoneRounded,
  SolidRounded: IconFolderSecuritySolidRounded,
  BulkRounded: IconFolderSecurityBulkRounded,
  StrokeSharp: IconFolderSecurityStrokeSharp,
  SolidSharp: IconFolderSecuritySolidSharp,
};
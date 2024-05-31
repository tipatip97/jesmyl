import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.72123 5.60945C8.1621 4.61908 7.88253 4.1239 8.04661 3.67371C8.21068 3.22353 8.73892 3.0364 9.7954 2.66213L10.695 2.34346C11.3413 2.11449 11.6645 2 12 2C12.3355 2 12.6587 2.11449 13.305 2.34346L14.2046 2.66213C15.2611 3.0364 15.7893 3.22353 15.9534 3.67371C16.1175 4.1239 15.8379 4.61908 15.2788 5.60945L14.7626 6.52365C14.4979 6.99256 14.3655 7.22701 14.1339 7.41087C13.9022 7.59473 13.6875 7.65614 13.2581 7.77895C12.8467 7.89659 12.3777 8 12 8C11.6223 8 11.1533 7.89659 10.7419 7.77895C10.3125 7.65614 10.0978 7.59473 9.86612 7.41087C9.63445 7.22701 9.50209 6.99256 9.23735 6.52365L8.72123 5.60945Z',
  d2: 'M10.0793 8L8.42064 15.1438C8.06093 16.6931 7.88108 17.4677 8.08657 18.1961C8.09058 18.2103 8.09469 18.2245 8.09891 18.2386C8.31533 18.9638 8.88063 19.5172 10.0112 20.6238C10.9439 21.5368 11.4103 21.9933 11.9837 21.9999C11.9946 22 12.0054 22 12.0163 21.9999C12.5897 21.9933 13.0561 21.5368 13.9888 20.6238C15.1194 19.5172 15.6847 18.9638 15.9011 18.2386C15.9053 18.2245 15.9094 18.2103 15.9134 18.1961C16.1189 17.4677 15.9391 16.6931 15.5794 15.1438L13.9207 8',
  d3: 'M8.42064 15.1438L10.0793 8H13.9207L15.5794 15.1438C15.9391 16.6931 16.1189 17.4677 15.9134 18.1961C15.9094 18.2103 15.9053 18.2245 15.9011 18.2386C15.6847 18.9638 15.1194 19.5172 13.9888 20.6238C13.0561 21.5368 12.5897 21.9933 12.0163 21.9999C12.0054 22 11.9946 22 11.9837 21.9999C11.4103 21.9933 10.9439 21.5368 10.0112 20.6238L10.0112 20.6238C8.88063 19.5172 8.31533 18.9638 8.09891 18.2386C8.09469 18.2245 8.09058 18.2103 8.08657 18.1961C7.88108 17.4677 8.06093 16.6931 8.42064 15.1438Z',
  d4: 'M8.86606 9.91243C8.91995 9.68039 8.94689 9.56437 9.02775 9.52172C9.10861 9.47907 9.22869 9.52599 9.46884 9.61984C9.68987 9.70622 9.88935 9.7628 10.0497 9.80828C10.6848 9.98917 11.3353 10.1411 11.9995 10.1411C12.6889 10.1411 13.3949 9.96679 13.8487 9.83692C14.0802 9.77099 14.3076 9.69915 14.5279 9.61254C14.7639 9.51973 14.8819 9.47332 14.9629 9.51595C15.044 9.55857 15.0707 9.6739 15.1243 9.90456L16.3111 15.0154C16.3432 15.1534 16.3773 15.2935 16.4119 15.4351C16.6474 16.401 16.9004 17.4387 16.6282 18.4034C16.3459 19.404 15.5513 20.1628 14.808 20.8727C14.6948 20.9808 14.5828 21.0878 14.4739 21.1943C14.0369 21.622 13.6577 21.9932 13.3135 22.2518C12.9398 22.5326 12.5191 22.7482 12.0038 22.75C11.4834 22.7518 11.0561 22.5354 10.6786 22.2518C10.3049 21.971 9.97173 21.6421 9.63947 21.314C9.5793 21.2546 9.51917 21.1952 9.45882 21.1361C9.36135 21.0408 9.26142 20.9449 9.16048 20.8481C8.42818 20.1456 7.64301 19.3924 7.36398 18.4034C7.0918 17.4387 7.34482 16.401 7.58032 15.4351C7.61485 15.2935 7.649 15.1534 7.68106 15.0153L8.86606 9.91243Z',
  d5: 'M12.0001 1.25C11.5328 1.25 11.0928 1.40632 10.5411 1.60228L9.49743 1.97206C9.01023 2.1446 8.57033 2.30038 8.23711 2.4758C7.87268 2.66764 7.51454 2.94367 7.34207 3.41689C7.1706 3.88739 7.2642 4.32963 7.4147 4.71305C7.55344 5.06651 7.78523 5.47698 8.04384 5.93494L8.6261 6.96643C8.84987 7.36406 9.05087 7.72125 9.40001 7.99834C9.75025 8.27631 10.098 8.37533 10.4773 8.48334L10.5358 8.50004C10.9617 8.62184 11.5136 8.75 12.0001 8.75C12.4867 8.75 13.0385 8.62184 13.4644 8.50004L13.523 8.48334C13.9023 8.37533 14.25 8.27631 14.6003 7.99834C14.9494 7.72125 15.1504 7.36406 15.3742 6.96643L15.9564 5.93496C16.215 5.477 16.4468 5.06652 16.5856 4.71305C16.7361 4.32963 16.8297 3.88739 16.6582 3.41689C16.4857 2.94367 16.1276 2.66764 15.7631 2.4758C15.4299 2.30038 14.99 2.1446 14.5028 1.97207L13.4592 1.60228C12.9075 1.40632 12.4675 1.25 12.0001 1.25Z',
  d6: 'M9.97116 8.35242L7.5022 17.9389L11.9801 21.9984C11.9839 22.0018 11.9897 22.0018 11.9936 21.9984L16.4979 17.9389L14.0036 8.33692M7.97692 4.52942L11.981 2.00057C11.9843 1.99851 11.9885 1.99851 11.9918 2.00057L15.9959 4.52942L14.0036 8.01928L9.97116 7.97245L7.97692 4.52942Z',
  d7: 'M14.8887 8.75H9.11144L6.5 18.2563L11.5025 22.5606C11.7867 22.8132 12.2149 22.8131 12.4991 22.5605L17.5 18.2562L14.8887 8.75Z',
  d8: 'M12.3966 1.364C12.1534 1.212 11.8448 1.212 11.6016 1.364L6.99023 4.24612L8.70674 7.25H15.2915L17.008 4.24612L12.3966 1.364Z',
} as const;

export const IconTieStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-stroke-rounded IconTieStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTieDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-duotone-rounded IconTieDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTieTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-twotone-rounded IconTieTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTieSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-solid-rounded IconTieSolidRounded"
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

export const IconTieBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-bulk-rounded IconTieBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTieStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-stroke-sharp IconTieStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTieSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tie-solid-sharp IconTieSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTie: TheIconSelfPack = {
  name: 'Tie',
  StrokeRounded: IconTieStrokeRounded,
  DuotoneRounded: IconTieDuotoneRounded,
  TwotoneRounded: IconTieTwotoneRounded,
  SolidRounded: IconTieSolidRounded,
  BulkRounded: IconTieBulkRounded,
  StrokeSharp: IconTieStrokeSharp,
  SolidSharp: IconTieSolidSharp,
};
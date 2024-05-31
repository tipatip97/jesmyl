import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.935 8.49268 21.9916 8.96506 21.9989 10.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.44493 20.4927 10.5 20.5H11',
  d2: 'M15.59 18.9737C14.9612 19.3002 13.3126 19.9669 14.3167 20.8011C14.8072 21.2086 15.3536 21.5 16.0404 21.5H19.9596C20.6464 21.5 21.1928 21.2086 21.6833 20.8011C22.6874 19.9669 21.0388 19.3002 20.41 18.9737C18.9355 18.2081 17.0645 18.2081 15.59 18.9737Z',
  d3: 'M20 14.4378C20 15.508 19.1046 16.3756 18 16.3756C16.8954 16.3756 16 15.508 16 14.4378C16 13.3676 16.8954 12.5 18 12.5C19.1046 12.5 20 13.3676 20 14.4378Z',
  d4: 'M12 20.5H13.25C13.5309 20.5 13.8005 20.5 14.0595 20.4996C13.7438 19.8853 14.7575 19.385 15.3758 19.08C15.4549 19.0409 15.5275 19.0051 15.59 18.9726C17.0645 18.207 18.9355 18.207 20.41 18.9726C20.4482 18.9925 20.4902 19.0136 20.5351 19.0359C20.7663 18.8048 20.9748 18.551 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313L11.2932 5.08597C10.7955 4.08617 10.3079 3.10673 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5ZM18 16.3756C19.1046 16.3756 20 15.508 20 14.4378C20 13.3676 19.1046 12.5 18 12.5C16.8954 12.5 16 13.3676 16 14.4378C16 15.508 16.8954 16.3756 18 16.3756Z',
  d5: 'M15.2503 14.4378C15.2503 12.9312 16.5041 11.75 18.0003 11.75C19.4966 11.75 20.7503 12.9312 20.7503 14.4378C20.7503 15.9444 19.4966 17.1256 18.0003 17.1256C16.5041 17.1256 15.2503 15.9444 15.2503 14.4378Z',
  d6: 'M15.0885 18.3858C16.7797 17.5077 19.221 17.5077 20.9122 18.3858C21.2216 18.5373 21.7713 18.8065 22.1462 19.1265C22.3726 19.3198 22.6822 19.6483 22.7409 20.1162C22.8077 20.6492 22.5247 21.0774 22.1629 21.378C21.5954 21.8494 20.8845 22.25 19.96 22.25H16.0407C15.1162 22.25 14.4053 21.8494 13.8378 21.378C13.476 21.0774 13.193 20.6492 13.2598 20.1162C13.3185 19.6483 13.6281 19.3198 13.8545 19.1265C14.2294 18.8065 14.7791 18.5373 15.0885 18.3858Z',
  d7: 'M9.4626 1.9886C8.82373 1.74902 8.11205 1.74934 7.08264 1.74979C6.2039 1.74979 5.32205 1.74982 4.7497 1.80027C4.15996 1.85226 3.64388 1.96222 3.17258 2.22523C2.56533 2.56411 2.06428 3.06517 1.7254 3.67241C1.46238 4.14372 1.35242 4.65979 1.30044 5.24953C1.24999 5.82188 1.24999 6.53061 1.25 7.40934V10.5572C1.24999 12.8656 1.24998 14.6746 1.43975 16.0861C1.63399 17.5309 2.03933 18.6709 2.93414 19.5657C3.82895 20.4605 4.96897 20.8659 6.41371 21.0601C7.63866 21.2248 9.16303 21.2465 11.0534 21.2494C11.4193 21.25 11.6022 21.2502 11.691 21.1578C11.7797 21.0654 11.7703 20.8418 11.7514 20.3946C11.7451 20.2455 11.751 20.0904 11.7712 19.9294C11.9009 18.8948 12.5674 18.2525 12.8804 17.9854C13.1747 17.7342 13.5889 17.4845 13.9475 17.2886C14.2387 17.1294 14.3843 17.0498 14.4201 16.9329C14.4559 16.8161 14.373 16.6557 14.2073 16.3349C13.9161 15.771 13.7501 15.1286 13.7501 14.4376C13.7501 12.0546 15.7242 10.2498 18.0001 10.2498C20.1981 10.2498 22.1146 11.9332 22.2432 14.195C22.2508 14.3287 22.3587 14.4376 22.4926 14.4376C22.6239 14.4376 22.7314 14.3331 22.7343 14.2019C22.75 13.4912 22.75 12.6926 22.75 11.7921C22.75 10.7731 22.75 9.86864 22.683 9.20932C22.6137 8.52876 22.4669 7.93856 22.118 7.41645C21.8444 7.00698 21.4929 6.65542 21.0834 6.38182C20.5613 6.03296 19.9711 5.88612 19.2905 5.81688C18.6312 5.74981 17.8095 5.74982 16.7905 5.74984L13.2361 5.74984C12.92 5.74984 12.7396 5.74891 12.6064 5.73514C12.5044 5.72801 12.4348 5.65238 12.4128 5.61546C12.3409 5.50253 12.0838 4.98892 11.9425 4.70619C11.4704 3.75105 10.8581 2.51189 9.4626 1.9886Z',
  d8: 'M22.0003 21.5H14.9971C14.9971 19.567 16.5648 18 18.4987 18C20.4326 18 22.0003 19.567 22.0003 21.5Z',
  d9: 'M20.2487 14.25C20.2487 15.2165 19.4648 16 18.4979 16C17.5309 16 16.7471 15.2165 16.7471 14.25C16.7471 13.2835 17.5309 12.5 18.4979 12.5C19.4648 12.5 20.2487 13.2835 20.2487 14.25Z',
  d10: 'M12.0458 20.4987H2.09809C2.04284 20.4987 1.99805 20.454 1.99805 20.3987L1.99816 2.60139C1.99816 2.54616 2.04295 2.50139 2.0982 2.50139L8.97177 2.50098L12.0215 6.48288M6.98583 6.48288H21.8993C21.9546 6.48288 21.9994 6.52765 21.9994 6.58288V9.99986',
  d11: 'M16 14.75C16 13.3693 17.1193 12.25 18.5 12.25C19.8807 12.25 21 13.3693 21 14.75C21 16.1307 19.8807 17.25 18.5 17.25C17.1193 17.25 16 16.1307 16 14.75Z',
  d12: 'M14.25 22.75C14.25 20.4028 16.1528 18.5 18.5 18.5C20.8472 18.5 22.75 20.4028 22.75 22.75H14.25Z',
  d13: 'M2 1.25C1.80109 1.25 1.61032 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V20C1.25 20.4142 1.58579 20.75 2 20.75H13.1074C13.5964 19.4318 14.555 18.3417 15.7799 17.6828C14.9926 16.9523 14.5 15.9087 14.5 14.75C14.5 12.5409 16.2909 10.75 18.5 10.75C20.7091 10.75 22.5 12.5409 22.5 14.75H22.75V6C22.75 5.58579 22.4142 5.25 22 5.25H12.375L9.375 1.25001L2 1.25Z',
} as const;

export const IconFolderShared01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-stroke-rounded IconFolderShared01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-duotone-rounded IconFolderShared01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-twotone-rounded IconFolderShared01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconFolderShared01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-solid-rounded IconFolderShared01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-bulk-rounded IconFolderShared01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-stroke-sharp IconFolderShared01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderShared01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-shared-01-solid-sharp IconFolderShared01SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFolderShared01: TheIconSelfPack = {
  name: 'FolderShared01',
  StrokeRounded: IconFolderShared01StrokeRounded,
  DuotoneRounded: IconFolderShared01DuotoneRounded,
  TwotoneRounded: IconFolderShared01TwotoneRounded,
  SolidRounded: IconFolderShared01SolidRounded,
  BulkRounded: IconFolderShared01BulkRounded,
  StrokeSharp: IconFolderShared01StrokeSharp,
  SolidSharp: IconFolderShared01SolidSharp,
};
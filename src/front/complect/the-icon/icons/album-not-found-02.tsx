import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.9998 6H14.0088',
  d2: 'M2 11.1057C2.68839 11.0355 3.38435 11.0009 4.08148 11.0021C7.03063 10.9583 9.90754 11.6035 12.1989 12.8224C12.8633 13.1759 13.4659 13.5709 14 14',
  d3: 'M20.8209 20.8209C19.6419 22 17.7442 22 13.9489 22C10.1536 22 8.25596 22 7.07691 20.8209C6.41956 20.1636 6.1287 19.2829 6 17.9745M17.9745 6C19.2829 6.1287 20.1636 6.41956 20.8209 7.07691C22 8.25596 22 10.1536 22 13.9489C22 15.382 22 16.5446 21.9365 17.5',
  d4: 'M16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10C2 6.22876 2 4.34315 3.17157 3.17157M6.5 2.0612C7.44397 2 8.59023 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 11.4098 18 12.556 17.9388 13.5',
  d5: 'M2 2L22 22',
  d6: 'M6.21648 17.9183C4.79597 17.8014 3.86037 17.5175 3.17157 16.8287C2 15.6572 2 13.7715 2 10.0003C2 6.22907 2 4.34345 3.17157 3.17188L16.8284 16.8287C16.8199 16.8372 16.8114 16.8457 16.8028 16.8541L20.8285 20.8218C19.6569 21.9934 17.7713 21.9934 14.0001 21.9934C10.2289 21.9934 8.34324 21.9934 7.17167 20.8218C6.52501 20.1752 6.23528 19.311 6.10547 18.0323L6.21648 17.9183Z',
  d7: 'M16.9793 5.90206C17.0334 5.35243 17.5228 4.95069 18.0724 5.00475C19.4685 5.14207 20.6285 5.4701 21.5281 6.36976C22.3344 7.17605 22.6815 8.19143 22.8438 9.39853C23.0001 10.5614 23.0001 12.0402 23.0001 13.8757V13.9672C23.0001 15.1445 23.0001 16.1671 22.9626 17.0427C22.939 17.5945 22.4726 18.0226 21.9208 17.999C21.369 17.9754 20.9409 17.509 20.9645 16.9572C20.9999 16.129 21.0001 15.1479 21.0001 13.9489C21.0001 12.023 20.9979 10.6791 20.8616 9.66502C20.7291 8.6797 20.4867 8.15673 20.1139 7.78397C19.6989 7.36893 19.0974 7.11522 17.8766 6.99515C17.327 6.94108 16.9253 6.45169 16.9793 5.90206ZM5.90218 16.9792C6.45182 16.9252 6.94121 17.3269 6.99527 17.8765C7.11535 19.0973 7.36905 19.6987 7.78409 20.1138C8.15685 20.4865 8.67982 20.729 9.66514 20.8615C10.6792 20.9978 12.0231 21 13.949 21C15.8749 21 17.2188 20.9978 18.2329 20.8615C19.2182 20.729 19.7412 20.4865 20.1139 20.1138C20.5044 19.7233 21.1376 19.7233 21.5281 20.1138C21.9187 20.5043 21.9187 21.1375 21.5281 21.528C20.7218 22.3343 19.7065 22.6814 18.4994 22.8437C17.3364 23 15.8577 23 14.0222 23H13.8758C12.0404 23 10.5616 23 9.39865 22.8437C8.19155 22.6814 7.17617 22.3343 6.36988 21.528C5.47022 20.6283 5.1422 19.4684 5.00488 18.0723C4.95081 17.5227 5.35255 17.0333 5.90218 16.9792Z',
  d8: 'M13 6C13 5.44772 13.4477 5 14 5H14.009C14.5613 5 15.009 5.44772 15.009 6C15.009 6.55228 14.5613 7 14.009 7H14C13.4477 7 13 6.55228 13 6Z',
  d9: 'M14.2558 3.13753C13.2487 3.00213 11.9139 3 10 3C8.82347 3 7.8582 3.00019 7.0415 3.0341C6.48969 3.05702 6.02378 2.62827 6.00086 2.07646C5.97795 1.52465 6.4067 1.05874 6.95851 1.03583C7.82118 1 8.82673 1 9.98229 1L10.0732 1C11.8966 0.999973 13.3664 0.999951 14.5223 1.15537C15.7225 1.31672 16.733 1.66191 17.5355 2.46447C18.3381 3.26702 18.6833 4.27752 18.8446 5.47767C19.0001 6.63363 19 8.1034 19 9.92686V10.0177C19 11.1733 19 12.1788 18.9642 13.0415C18.9413 13.5933 18.4754 14.0221 17.9235 13.9991C17.3717 13.9762 16.943 13.5103 16.9659 12.9585C16.9998 12.1418 17 11.1765 17 10C17 8.08611 16.9979 6.7513 16.8625 5.74416C16.7309 4.76579 16.4903 4.2477 16.1213 3.87868C15.7523 3.50966 15.2342 3.26907 14.2558 3.13753ZM3.87868 2.46447C4.26921 2.85499 4.26921 3.48816 3.87868 3.87868C3.50966 4.2477 3.26907 4.76579 3.13753 5.74416C3.00213 6.7513 3 8.08611 3 10C3 11.9139 3.00213 13.2487 3.13753 14.2558C3.26907 15.2342 3.50966 15.7523 3.87868 16.1213C4.2477 16.4903 4.76579 16.7309 5.74416 16.8625C6.7513 16.9979 8.08611 17 10 17C11.9139 17 13.2487 16.9979 14.2558 16.8625C15.2342 16.7309 15.7523 16.4903 16.1213 16.1213C16.5118 15.7308 17.145 15.7308 17.5355 16.1213C17.9261 16.5118 17.9261 17.145 17.5355 17.5355C16.733 18.3381 15.7225 18.6833 14.5223 18.8446C13.3664 19.0001 11.8966 19 10.0731 19H9.92686C8.1034 19 6.63363 19.0001 5.47767 18.8446C4.27752 18.6833 3.26702 18.3381 2.46447 17.5355C1.66191 16.733 1.31672 15.7225 1.15537 14.5223C0.999951 13.3664 0.999973 11.8966 1 10.0732V9.92684C0.999973 8.10338 0.999951 6.63362 1.15537 5.47767C1.31672 4.27752 1.66191 3.26702 2.46447 2.46447C2.85499 2.07394 3.48816 2.07394 3.87868 2.46447Z',
  d10: 'M12.6685 11.9396C10.211 10.6322 7.16669 9.95749 4.07495 10.0021C3.34634 10.0011 2.61872 10.0375 1.89855 10.1109C1.38644 10.1631 0.997631 10.5956 1.00001 11.1104C1.00683 12.586 1.03893 13.8377 1.21688 14.8621C1.39812 15.9055 1.74694 16.818 2.46447 17.5355C3.26702 18.3381 4.27752 18.6833 5.47766 18.8446C6.63362 19 8.10337 19 9.92681 19H10.0732C11.8966 19 13.3664 19 14.5223 18.8446C15.7225 18.6833 16.733 18.3381 17.5355 17.5355L18.2426 16.8284L14.7071 13.2929C14.6815 13.2673 14.6546 13.2431 14.6263 13.2205C14.0398 12.7491 13.384 12.3202 12.6685 11.9396Z',
  d11: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d12: 'M14.2559 3.13753C13.2487 3.00213 11.9139 3 10 3C8.82349 3 7.85822 3.00019 7.04151 3.0341C6.4897 3.05702 6.02379 2.62827 6.00088 2.07646C5.97796 1.52465 6.40671 1.05874 6.95852 1.03583C7.82119 1 8.82675 1 9.98231 1L10.0732 1H10.0732C11.8967 0.999974 13.3664 0.999953 14.5224 1.15537C15.7225 1.31672 16.733 1.66191 17.5356 2.46447C18.2518 3.18067 18.6037 4.06248 18.7858 5.09689C19.8679 5.27498 20.7865 5.62815 21.5283 6.36988C22.3346 7.17617 22.6816 8.19155 22.8439 9.39865C23.0003 10.5616 23.0002 12.0404 23.0002 13.8758V13.9674C23.0002 15.1447 23.0002 16.1672 22.9628 17.0428C22.9392 17.5946 22.4727 18.0228 21.921 17.9992C21.3692 17.9756 20.941 17.5091 20.9646 16.9573C21 16.1291 21.0002 15.1481 21.0002 13.949C21.0002 12.0231 20.9981 10.6792 20.8618 9.66514C20.7293 8.67982 20.4868 8.15685 20.1141 7.78409C19.8481 7.51809 19.5055 7.31836 18.9724 7.1776C19 7.98678 19 8.90083 19 9.92686V10.0177V10.0179C19 11.1734 19 12.1789 18.9642 13.0415C18.9413 13.5933 18.4754 14.0221 17.9236 13.9991C17.3717 13.9762 16.943 13.5103 16.9659 12.9585C16.9998 12.1418 17 11.1765 17 10C17 8.08611 16.9979 6.7513 16.8625 5.74416C16.731 4.7658 16.4904 4.2477 16.1213 3.87868C15.7523 3.50966 15.2342 3.26907 14.2559 3.13753ZM14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7H14.009C14.5613 7 15.009 6.55228 15.009 6C15.009 5.44772 14.5613 5 14.009 5H14Z',
  d13: 'M5.90218 16.9775C6.45182 16.9235 6.94121 17.3252 6.99527 17.8748C7.11535 19.0956 7.36905 19.6971 7.78409 20.1121C8.15685 20.4849 8.67982 20.7273 9.66514 20.8598C10.6792 20.9961 12.0231 20.9983 13.949 20.9983C15.8749 20.9983 17.2188 20.9961 18.2329 20.8598C19.2182 20.7273 19.7412 20.4849 20.1139 20.1121C20.5044 19.7216 21.1376 19.7216 21.5281 20.1121C21.9187 20.5026 21.9187 21.1358 21.5281 21.5263C20.7218 22.3326 19.7065 22.6797 18.4994 22.842C17.3364 22.9983 15.8577 22.9983 14.0222 22.9983H13.8758C12.0404 22.9983 10.5616 22.9983 9.39865 22.842C8.19155 22.6797 7.17617 22.3326 6.36988 21.5263C5.47022 20.6267 5.1422 19.4667 5.00488 18.0706C4.95081 17.521 5.35255 17.0316 5.90218 16.9775Z',
  d14: 'M3.87868 2.46477C4.26921 2.85529 4.26921 3.48846 3.87868 3.87898C3.50966 4.248 3.26907 4.7661 3.13753 5.74446C3.00213 6.7516 3 8.08641 3 10.0003C3 11.9142 3.00213 13.249 3.13753 14.2561C3.26907 15.2345 3.50966 15.7526 3.87868 16.1216C4.2477 16.4906 4.76579 16.7312 5.74416 16.8628C6.7513 16.9982 8.08611 17.0003 10 17.0003C11.9139 17.0003 13.2487 16.9982 14.2558 16.8628C15.2342 16.7312 15.7523 16.4906 16.1213 16.1216C16.5118 15.7311 17.145 15.7311 17.5355 16.1216C17.9261 16.5121 17.9261 17.1453 17.5355 17.5358C16.733 18.3384 15.7225 18.6836 14.5223 18.8449C13.3664 19.0004 11.8966 19.0003 10.0731 19.0003H9.92686C8.1034 19.0003 6.63363 19.0004 5.47767 18.8449C4.27752 18.6836 3.26702 18.3384 2.46447 17.5358C1.66191 16.7333 1.31672 15.7228 1.15537 14.5226C0.999951 13.3667 0.999973 11.8969 1 10.0735V9.92714C0.999973 8.10368 0.999951 6.63392 1.15537 5.47797C1.31672 4.27782 1.66191 3.26732 2.46447 2.46477C2.85499 2.07424 3.48816 2.07424 3.87868 2.46477Z',
  d15: 'M3 11.1185C3.61902 11.0398 4.24484 11.001 4.87171 11.0023C7.52365 10.9533 10.1106 11.6763 12.1711 13.0424C14.082 14.3094 15.4247 16.053 16 18',
  d16: 'M14 7H14.009',
  d17: 'M3 2.98865V18H18M6.14471 2.98865H18V14.8753',
  d18: 'M17.9681 6H21.022V17.847M6 18.147V20.9992H21.022',
  d19: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d20: 'M19.8147 7.19093H18.1162V5.24976H20.7853C21.3213 5.24976 21.7559 5.6843 21.7559 6.22034V18.2181L19.8147 16.277V7.19093Z',
  d21: 'M20.7853 21.7498H6.22645C5.69041 21.7498 5.25586 21.3152 5.25586 20.7792V18.11H7.19704V19.8086H19.8147L21.4696 21.4674C21.2941 21.6419 21.0523 21.7498 20.7853 21.7498Z',
  d22: 'M2.25391 3.22034V17.7792C2.25391 18.3152 2.68845 18.7498 3.22449 18.7498H17.7833C18.0508 18.7498 18.293 18.6416 18.4686 18.4665L16.8106 16.8086H16.3655C15.6189 15.0772 14.3076 13.5583 12.5863 12.4171C10.3917 10.962 7.65611 10.202 4.86641 10.2521C4.64244 10.2517 4.41859 10.2562 4.19508 10.2656V4.19093L2.53713 2.53509C2.36211 2.71065 2.25391 2.95286 2.25391 3.22034Z',
  d23: 'M18.7539 3.22034C18.7539 2.6843 18.3194 2.24976 17.7833 2.24976H5.78732L7.7285 4.19093H16.8127V13.2752L18.7539 15.2163V3.22034Z',
  d24: 'M13 6H15V8H13V6Z',
} as const;

export const IconAlbumNotFound02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-stroke-rounded IconAlbumNotFound02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbumNotFound02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-duotone-rounded IconAlbumNotFound02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbumNotFound02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-twotone-rounded IconAlbumNotFound02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbumNotFound02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-solid-rounded IconAlbumNotFound02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbumNotFound02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-bulk-rounded IconAlbumNotFound02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbumNotFound02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-stroke-sharp IconAlbumNotFound02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbumNotFound02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="album-not-found-02-solid-sharp IconAlbumNotFound02SolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlbumNotFound02: TheIconSelfPack = {
  name: 'AlbumNotFound02',
  StrokeRounded: IconAlbumNotFound02StrokeRounded,
  DuotoneRounded: IconAlbumNotFound02DuotoneRounded,
  TwotoneRounded: IconAlbumNotFound02TwotoneRounded,
  SolidRounded: IconAlbumNotFound02SolidRounded,
  BulkRounded: IconAlbumNotFound02BulkRounded,
  StrokeSharp: IconAlbumNotFound02StrokeSharp,
  SolidSharp: IconAlbumNotFound02SolidSharp,
};
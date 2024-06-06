import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6',
  d2: 'M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z',
  d3: 'M5 18C8.42061 13.2487 12.2647 6.9475 18 11.6734',
  d4: 'M3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17157 16.8284L5.1582 17.7799C5.3345 17.5336 5.51196 17.2838 5.69078 17.032C8.94158 12.4552 12.6427 7.24434 17.9953 11.6545C18 11.1472 18 10.5972 18 10C18 6.22876 18 4.34315 16.8284 3.17157C15.6569 2 13.7712 2 10 2C6.22876 2 4.34315 2 3.17157 3.17157Z',
  d5: 'M20.1129 7.78312C19.6979 7.36808 19.0964 7.11438 17.8757 6.9943L18.0715 5.00391C19.4675 5.14123 20.6275 5.46925 21.5272 6.36891C22.3335 7.1752 22.6805 8.19058 22.8428 9.39768C22.9992 10.5606 22.9991 12.0394 22.9991 13.8748V14.0212C22.9991 15.8567 22.9992 17.3355 22.8428 18.4984C22.6805 19.7055 22.3335 20.7209 21.5272 21.5272C20.7209 22.3335 19.7055 22.6805 18.4984 22.8428C17.3355 22.9992 15.8567 22.9991 14.0212 22.9991H13.8748C12.0394 22.9991 10.5606 22.9992 9.39768 22.8428C8.19058 22.6805 7.1752 22.3335 6.36891 21.5272C5.46925 20.6275 5.14123 19.4675 5.00391 18.0715L6.9943 17.8757C7.11438 19.0964 7.36808 19.6979 7.78312 20.1129C8.15588 20.4857 8.67885 20.7282 9.66417 20.8606C10.6783 20.997 12.0221 20.9991 13.948 20.9991C15.874 20.9991 17.2178 20.997 18.2319 20.8606C19.2172 20.7282 19.7402 20.4857 20.1129 20.1129C20.4857 19.7402 20.7282 19.2172 20.8606 18.2319C20.997 17.2178 20.9991 15.874 20.9991 13.948C20.9991 12.0221 20.997 10.6783 20.8606 9.66417C20.7282 8.67885 20.4857 8.15588 20.1129 7.78312Z',
  d6: 'M9.92684 1H10.0732C11.8966 0.999973 13.3664 0.999951 14.5223 1.15537C15.7225 1.31672 16.733 1.66191 17.5355 2.46447C18.3381 3.26702 18.6833 4.27752 18.8446 5.47767C19.0001 6.63362 19 8.10336 19 9.9268V10.0732C19 11.8966 19.0001 13.3664 18.8446 14.5223C18.6833 15.7225 18.3381 16.733 17.5355 17.5355C16.733 18.3381 15.7225 18.6833 14.5223 18.8446C13.3664 19.0001 11.8966 19 10.0732 19H9.9268C8.10336 19 6.63362 19.0001 5.47767 18.8446C4.27752 18.6833 3.26702 18.3381 2.46447 17.5355C1.66191 16.733 1.31672 15.7225 1.15537 14.5223C0.999951 13.3664 0.999973 11.8966 1 10.0732V9.92684C0.999973 8.10338 0.999951 6.63362 1.15537 5.47767C1.31672 4.27752 1.66191 3.26702 2.46447 2.46447C3.26702 1.66191 4.27752 1.31672 5.47767 1.15537C6.63362 0.999951 8.10338 0.999973 9.92684 1ZM5.74416 3.13753C4.76579 3.26907 4.2477 3.50966 3.87868 3.87868C3.50966 4.2477 3.26907 4.76579 3.13753 5.74416C3.00213 6.7513 3 8.08611 3 10C3 11.9139 3.00213 13.2487 3.13753 14.2558C3.26907 15.2342 3.50966 15.7523 3.87868 16.1213C4.2477 16.4903 4.76579 16.7309 5.74416 16.8625C6.7513 16.9979 8.08611 17 10 17C11.9139 17 13.2487 16.9979 14.2558 16.8625C15.2342 16.7309 15.7523 16.4903 16.1213 16.1213C16.4903 15.7523 16.7309 15.2342 16.8625 14.2558C16.9979 13.2487 17 11.9139 17 10C17 8.08611 16.9979 6.7513 16.8625 5.74416C16.7309 4.76579 16.4903 4.2477 16.1213 3.87868C15.7523 3.50966 15.2342 3.26907 14.2558 3.13753C13.2487 3.00213 11.9139 3 10 3C8.08611 3 6.7513 3.00213 5.74416 3.13753Z',
  d7: 'M18.4763 11.0957C16.9498 9.8379 15.4766 9.23918 14.0438 9.21191C12.6137 9.18469 11.3327 9.72898 10.1932 10.5492C8.18996 11.991 6.45291 14.4242 4.90945 16.5863C4.73406 16.832 4.56116 17.0742 4.39066 17.311L3.73438 18.2226L4.8279 18.4793C6.00098 18.7548 7.47329 18.7533 9.47458 18.7514C9.64549 18.7513 9.82056 18.7511 9.99934 18.7511H10.0557C11.8935 18.7511 13.3491 18.7511 14.4884 18.5979C15.6608 18.4403 16.6097 18.1082 17.3581 17.3598C17.9845 16.7335 18.3235 15.9715 18.5101 15.0439C18.6921 14.1389 18.7372 13.032 18.7493 11.6813L18.7525 11.3233L18.4763 11.0957Z',
  d8: 'M18 18V2H2V18H18Z',
  d9: 'M18 6H22V22H6V18',
  d10: 'M4 18L13 9.00012L18 13.0001',
  d11: 'M20.8056 7.19444H17.8889V5.25H21.7778C22.3147 5.25 22.75 5.68528 22.75 6.22222V21.7778C22.75 22.3147 22.3147 22.75 21.7778 22.75H6.22222C5.68528 22.75 5.25 22.3147 5.25 21.7778V17.8889H7.19444V20.8056H20.8056V7.19444Z',
  d12: 'M2.22222 1.25C1.68528 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68528 18.75 2.22222 18.75H17.7778C18.3147 18.75 18.75 18.3147 18.75 17.7778V2.22222C18.75 1.68528 18.3147 1.25 17.7778 1.25H2.22222ZM3.19444 16.8056V3.19444H16.8056V11.0848L12.9434 7.99512L4.13284 16.8056H3.19444Z',
};

export const IconAlbum01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-stroke-rounded IconAlbum01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbum01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-duotone-rounded IconAlbum01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbum01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-twotone-rounded IconAlbum01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconAlbum01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-solid-rounded IconAlbum01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAlbum01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-bulk-rounded IconAlbum01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbum01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-stroke-sharp IconAlbum01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbum01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-01-solid-sharp IconAlbum01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlbum01: TheIconSelfPack = {
  name: 'Album01',
  StrokeRounded: IconAlbum01StrokeRounded,
  DuotoneRounded: IconAlbum01DuotoneRounded,
  TwotoneRounded: IconAlbum01TwotoneRounded,
  SolidRounded: IconAlbum01SolidRounded,
  BulkRounded: IconAlbum01BulkRounded,
  StrokeSharp: IconAlbum01StrokeSharp,
  SolidSharp: IconAlbum01SolidSharp,
};
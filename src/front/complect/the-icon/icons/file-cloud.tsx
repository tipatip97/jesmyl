import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12',
  d2: 'M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22',
  d3: 'M3 6.66667C3 7.95533 4.00736 9 5.25 9H9.975C11.0934 9 12 8.0598 12 6.9C12 5.7402 11.0833 4.80003 9.96491 4.80003C10.0897 3.36433 8.97992 2 7.5 2C6.20546 2 5.14305 3.03069 5.03419 4.34393C3.89279 4.45657 3 5.45349 3 6.66667Z',
  d4: 'M4 8.60708V16.1818C4 17.8751 4 18.7217 4.26796 19.3979C4.69875 20.4849 5.60979 21.3424 6.76478 21.7478C7.48321 22 8.38275 22 10.1818 22H10.1832C10.7172 22 11.2059 22 11.6555 21.9978C13.9262 21.8711 14.4675 18.9333 14.4508 17.4483C14.4099 15.8053 15.2005 15.5021 15.502 15.5021C19.09 15.5021 20.6582 13.8464 20.9986 13.0104C21 12.6419 21 12.2462 21 11.8199V9.27273C21 6.20337 21 4.66867 20.1523 3.60289C19.9094 3.29753 19.6214 3.02643 19.2969 2.79784C18.1645 2 16.5339 2 13.2727 2H9C8.45706 2 8.07272 2 7.76993 2.01533C9.11237 2.16891 10.082 3.45306 9.96491 4.80003C11.0833 4.80003 12 5.7402 12 6.9C12 8.0598 11.0934 9 9.975 9H5.25C4.78746 9 4.35752 8.85526 4 8.60708Z',
  d5: 'M17.0635 1.35275C16.0812 1.24999 14.7935 1.24999 13.2524 1.25C12.7127 1.25 12.2751 1.68756 12.2751 2.22731C12.2751 2.76705 12.7127 3.20459 13.2524 3.20459C14.861 3.20459 15.9922 3.20584 16.8616 3.29679C17.7155 3.38612 18.1994 3.55288 18.5573 3.80592C18.7987 3.97667 19.0111 4.17776 19.1889 4.40211C19.4445 4.72461 19.6139 5.1574 19.7061 5.94419C19.8011 6.75395 19.8026 7.81128 19.8026 9.33473L19.8027 12.2349C19.8027 12.5019 19.8026 13.1405 19.522 13.6127C19.349 13.9036 19.1276 14.1467 18.9002 14.2706C18.5336 14.4701 18.1135 14.5835 17.6668 14.5835L16.6264 14.547C16.2463 14.5391 15.8028 14.5511 15.3746 14.6658C14.5407 14.8893 13.8893 15.5407 13.6658 16.3746C13.5511 16.8028 13.5391 17.2463 13.547 17.6264L13.5835 18.6668C13.5835 19.1345 13.4591 19.5416 13.2417 19.92C13.115 20.1406 12.8943 20.3425 12.5895 20.5198C12.1274 20.7887 11.574 20.7912 11.2358 20.7927C10.8977 20.7943 10.5409 20.7954 10.2428 20.7954C8.40872 20.7954 7.74159 20.7815 7.23823 20.6041C6.3656 20.2967 5.6999 19.655 5.38981 18.8697C5.31217 18.673 5.25733 18.4146 5.22789 17.9667C5.19788 17.51 5.19739 16.927 5.19739 16.0868V12.9737C5.19739 12.4359 4.76145 12 4.22369 12C3.68594 12 3.25 12.4359 3.25 12.9737V16.12C3.24999 16.9191 3.24999 17.5667 3.28473 18.0952C3.32052 18.6399 3.39613 19.1255 3.5794 19.5897C4.10821 20.929 5.21664 21.9633 6.5932 22.4483C7.452 22.7509 8.92408 22.7505 10.4791 22.7499C13.3187 22.7503 15.0054 22.7505 16.3878 22.2634C18.6078 21.4813 20.3815 19.8185 21.2249 17.6825C21.506 16.9705 21.6306 16.2058 21.6908 15.2889C21.75 14.3882 21.75 13.2756 21.75 11.8573V11.8573V9.27382C21.75 7.82573 21.75 6.65308 21.6402 5.71575C21.526 4.74235 21.2828 3.90447 20.713 3.1854C20.4178 2.81292 20.0692 2.48414 19.6789 2.20809C18.9341 1.68143 18.0729 1.45834 17.0635 1.35275Z',
  d6: 'M4.38304 3.71381C4.74645 2.30994 5.98779 1.25 7.5 1.25C9.20807 1.25 10.4909 2.59919 10.6957 4.14911C11.8874 4.48013 12.75 5.60041 12.75 6.9C12.75 8.44807 11.5331 9.75 9.975 9.75H5.25C3.56767 9.75 2.25 8.3436 2.25 6.66667C2.25 5.29042 3.13515 4.09916 4.38304 3.71381Z',
  d7: 'M12.9488 2H20.99C20.9955 2 21 2.00448 21 2.01V15L14 22H4.01C4.00448 22 4 21.9955 4 21.99V11.9973M20.4275 15H14V21.4151',
  d8: 'M3.25 21.7727C3.25 22.3125 3.68593 22.75 4.22368 22.75H14.3638L21.75 15.3366V2.22727C21.75 1.68754 21.3141 1.25 20.7763 1.25H12.9869V3.2045H19.8027V13.9545H12.9869L12.9869 20.7954H5.19747V12H3.25V21.7727Z',
};

export const IconFileCloudStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-stroke-rounded IconFileCloudStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCloudDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-duotone-rounded IconFileCloudDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCloudTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-twotone-rounded IconFileCloudTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCloudSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-solid-rounded IconFileCloudSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCloudBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-bulk-rounded IconFileCloudBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCloudStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-stroke-sharp IconFileCloudStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileCloudSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-cloud-solid-sharp IconFileCloudSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileCloud: TheIconSelfPack = {
  name: 'FileCloud',
  StrokeRounded: IconFileCloudStrokeRounded,
  DuotoneRounded: IconFileCloudDuotoneRounded,
  TwotoneRounded: IconFileCloudTwotoneRounded,
  SolidRounded: IconFileCloudSolidRounded,
  BulkRounded: IconFileCloudBulkRounded,
  StrokeSharp: IconFileCloudStrokeSharp,
  SolidSharp: IconFileCloudSolidSharp,
};
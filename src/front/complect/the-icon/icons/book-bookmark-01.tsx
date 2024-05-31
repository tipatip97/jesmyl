import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 22.0001H6.5C5.11929 22.0001 4 20.8808 4 19.5001M4 19.5001V10.6837C4 7.69913 4 6.20682 4.75662 5.15857C5.00717 4.81144 5.31183 4.50679 5.65895 4.25623C6.70721 3.49961 8.19952 3.49961 11.1841 3.49961C12.1605 3.49961 13.3496 3.55106 14.3358 3.5644C15.235 3.57656 15.6846 3.58265 16.5222 3.43464C17.3597 3.28663 17.4492 3.2526 17.6282 3.18454C18.3982 2.89176 19.1272 2.43641 20 2V11.5001C20 13.3639 20 14.2958 19.6955 15.0309C19.2895 16.011 18.5108 16.7897 17.5307 17.1957C16.7956 17.5001 15.8638 17.5001 14 17.5001H6C4.89543 17.5001 4 18.3956 4 19.5001Z',
  d2: 'M18 17L18 22',
  d3: 'M8 4L8 7.69003C8 8.43013 8 8.80019 8.23811 8.94371C8.24836 8.94989 8.25884 8.95571 8.26951 8.96115C8.51756 9.08746 8.84124 8.89707 9.4886 8.51629C9.97254 8.23164 10.2145 8.08931 10.4815 8.08447C10.4938 8.08425 10.5062 8.08425 10.5185 8.08447C10.7855 8.08931 11.0275 8.23164 11.5114 8.51629C12.1588 8.89707 12.4824 9.08747 12.7305 8.96115C12.7412 8.95571 12.7516 8.94989 12.7619 8.94372C13 8.80019 13 8.43013 13 7.69003V4',
  d4: 'M20 2V11.5001C20 13.3639 20 14.2958 19.6955 15.0309C19.3567 15.8488 18.7584 16.5264 18 16.9643C17.8496 17.0511 17.6929 17.1285 17.5307 17.1957C16.7956 17.5001 15.8638 17.5001 14 17.5001H6C4.89543 17.5001 4 18.3956 4 19.5001V10.6837C4 7.69913 4 6.20682 4.75662 5.15857C5.00717 4.81144 5.31183 4.50679 5.65895 4.25623C6.24189 3.83548 6.96215 3.6487 8 3.56579V7.90836C8 8.52511 8 8.83349 8.23811 8.9531C8.24836 8.95824 8.25883 8.96309 8.26951 8.96762C8.51756 9.07289 8.84124 8.91423 9.4886 8.59691C9.97254 8.3597 10.2145 8.24109 10.4815 8.23706C10.4938 8.23687 10.5062 8.23687 10.5185 8.23706C10.7855 8.24109 11.0275 8.3597 11.5114 8.59691C12.1588 8.91423 12.4824 9.07289 12.7305 8.96762C12.7412 8.96309 12.7516 8.95825 12.7619 8.9531C13 8.83349 13 8.52511 13 7.90836V3.53361C13.0094 3.53386 13.0188 3.53412 13.0282 3.53438C13.4792 3.54668 13.9251 3.55885 14.3358 3.5644C15.235 3.57656 15.6846 3.58265 16.5222 3.43464C17.3597 3.28663 17.4492 3.2526 17.6282 3.18454C18.1342 2.99212 18.6226 2.72948 19.1457 2.44814C19.4185 2.30141 19.7008 2.14959 20 2Z',
  d5: 'M20.3943 1.36201C20.6154 1.49867 20.75 1.74007 20.75 2V11.5276V11.5276V11.5277V11.5277C20.75 12.4363 20.75 13.1564 20.7102 13.7398C20.6695 14.3358 20.5848 14.8437 20.3884 15.3179C20.0845 16.0516 19.6047 16.6902 19 17.1829V21.0001H19.7383C20.2906 21.0001 20.7383 21.4479 20.7383 22.0001C20.7383 22.5524 20.2906 23.0001 19.7383 23.0001H6.74609C4.8131 23.0001 3.24609 21.4331 3.24609 19.5001C3.24609 19.4483 3.24741 19.3969 3.25 19.3457V10.6395C3.24999 9.18469 3.24998 8.03206 3.3489 7.11462C3.45032 6.17399 3.6628 5.39251 4.14849 4.71962C4.44602 4.30741 4.8078 3.94563 5.22001 3.6481C5.8929 3.16242 6.67437 2.94993 7.61501 2.84851C8.53244 2.7496 9.68509 2.7496 11.1399 2.74961L11.1841 2.74961C11.7561 2.74961 12.426 2.76774 13.0721 2.78522C13.5219 2.79739 13.9602 2.80925 14.3459 2.81447C15.238 2.82654 15.628 2.83103 16.3916 2.69608C17.1676 2.55896 17.2461 2.52839 17.3403 2.49176L17.3616 2.48351C17.825 2.30732 18.2413 2.08286 18.7311 1.81876C19.0108 1.66795 19.3145 1.50422 19.6646 1.32918C19.8971 1.21293 20.1732 1.22536 20.3943 1.36201ZM17 18.5001V21.0001H6.74609C5.91767 21.0001 5.24609 20.3286 5.24609 19.5001C5.24609 18.9479 5.69381 18.5001 6.24609 18.5001H17ZM8 5.1V8.19003C8 8.93013 8 9.30019 8.23811 9.44372C8.24836 9.44989 8.25883 9.45571 8.26951 9.46115C8.51756 9.58747 8.84124 9.39708 9.48859 9.0163L9.4886 9.01629C9.97254 8.73164 10.2145 8.58931 10.4815 8.58447C10.4938 8.58425 10.5062 8.58425 10.5185 8.58447C10.7855 8.58931 11.0275 8.73164 11.5114 9.01629C12.1588 9.39707 12.4824 9.58747 12.7305 9.46115C12.7412 9.45571 12.7516 9.44989 12.7619 9.44372C13 9.30019 13 8.93013 13 8.19003V5.1C13 4.81716 13 4.67574 12.9121 4.58787C12.8243 4.5 12.6828 4.5 12.4 4.5H8.6C8.31716 4.5 8.17574 4.5 8.08787 4.58787C8 4.67574 8 4.81716 8 5.1Z',
  d6: 'M20.75 2C20.75 1.74007 20.6154 1.49867 20.3943 1.36201C20.1732 1.22536 19.8971 1.21293 19.6646 1.32918C19.3145 1.50422 19.0108 1.66795 18.7311 1.81876C18.2413 2.08286 17.825 2.30732 17.3616 2.48351L17.3403 2.49176C17.2461 2.52839 17.1676 2.55896 16.3916 2.69608C15.628 2.83103 15.238 2.82654 14.3459 2.81447C13.9602 2.80925 13.5219 2.79739 13.0721 2.78522C12.426 2.76774 11.7561 2.74961 11.1841 2.74961L11.1399 2.74961C9.68509 2.7496 8.53244 2.7496 7.61501 2.84851C6.67437 2.94993 5.8929 3.16242 5.22001 3.6481C4.8078 3.94563 4.44602 4.30741 4.14849 4.71962C3.6628 5.39251 3.45032 6.17399 3.3489 7.11462C3.24998 8.03206 3.24999 9.18469 3.25 10.6395V19.3457C3.24741 19.3969 3.24609 19.4483 3.24609 19.5001C3.24609 21.4331 4.8131 23.0001 6.74609 23.0001H19.7383C20.2906 23.0001 20.7383 22.5524 20.7383 22.0001C20.7383 21.4479 20.2906 21.0001 19.7383 21.0001H19V17.1829C19.6047 16.6902 20.0845 16.0516 20.3884 15.3179C20.5848 14.8437 20.6695 14.3358 20.7102 13.7398C20.75 13.1564 20.75 12.4363 20.75 11.5277V11.5276V11.5276V2ZM17 21.0001V18.5001H6.24609C5.69381 18.5001 5.24609 18.9479 5.24609 19.5001C5.24609 20.3286 5.91767 21.0001 6.74609 21.0001H17Z',
  d7: 'M8 8.19003V5.1C8 4.81716 8 4.67574 8.08787 4.58787C8.17574 4.5 8.31716 4.5 8.6 4.5H12.4C12.6828 4.5 12.8243 4.5 12.9121 4.58787C13 4.67574 13 4.81716 13 5.1V8.19003C13 8.93013 13 9.30019 12.7619 9.44372C12.7516 9.44989 12.7412 9.45571 12.7305 9.46115C12.4824 9.58747 12.1588 9.39707 11.5114 9.01629C11.0275 8.73164 10.7855 8.58931 10.5185 8.58447C10.5062 8.58425 10.4938 8.58425 10.4815 8.58447C10.2145 8.58931 9.97254 8.73164 9.4886 9.01629C8.84124 9.39707 8.51756 9.58746 8.26951 9.46115C8.25884 9.45571 8.24836 9.44989 8.23811 9.44372C8 9.30019 8 8.93013 8 8.19003Z',
  d8: 'M8 3.5V9L10.5 8L13 9V3.5',
  d9: 'M18.1131 21.9938H7.78079C5.52389 22.0577 4.28964 21.4123 4.0143 19.5717M18.1131 21.9938H19.9778M18.1131 21.9938V16.9087M18.1131 16.9087H20.0013V2.012C20.0013 2.0047 19.9937 1.99985 19.9871 2.00286L17.5516 3.11192C17.0316 3.34873 16.4671 3.47125 15.8959 3.47125H6.70179C4.90071 3.65218 3.85301 5.0704 4.01433 7.49333V17.2852C3.98335 17.9328 4.01444 18.8365 4.0143 19.5717M18.1131 16.9087L7.75138 16.8993C5.01909 16.7974 4.08803 17.9488 4.0143 19.5717',
  d10: 'M20.2889 1.39596C20.5755 1.57402 20.75 1.88857 20.75 2.22727V17.8635H18.8056V20.7955H20.75V22.75H6.65284C4.77351 22.75 3.25 21.2186 3.25 19.3295V6.62459C3.25 4.46567 4.99111 2.71552 7.13889 2.71552H15.8889C16.4363 2.71566 16.9172 2.57705 17.453 2.33443C17.727 2.21041 18.0069 2.06325 18.3221 1.89343L18.483 1.80655C18.7485 1.66301 19.0379 1.5065 19.343 1.35317C19.6444 1.2017 20.0023 1.21789 20.2889 1.39596ZM16.862 17.8635H6.65371C5.84826 17.8635 5.19531 18.5199 5.19531 19.3295C5.19531 20.1391 5.84826 20.7955 6.65371 20.7955H16.862L16.862 17.8635ZM8 4.5V9L10.5 8L13 9V4.5H8Z',
} as const;

export const IconBookBookmark01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-stroke-rounded IconBookBookmark01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookBookmark01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-duotone-rounded IconBookBookmark01DuotoneRounded"
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

export const IconBookBookmark01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-twotone-rounded IconBookBookmark01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookBookmark01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-solid-rounded IconBookBookmark01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookBookmark01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-bulk-rounded IconBookBookmark01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBookBookmark01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-stroke-sharp IconBookBookmark01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconBookBookmark01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-bookmark-01-solid-sharp IconBookBookmark01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookBookmark01: TheIconSelfPack = {
  name: 'BookBookmark01',
  StrokeRounded: IconBookBookmark01StrokeRounded,
  DuotoneRounded: IconBookBookmark01DuotoneRounded,
  TwotoneRounded: IconBookBookmark01TwotoneRounded,
  SolidRounded: IconBookBookmark01SolidRounded,
  BulkRounded: IconBookBookmark01BulkRounded,
  StrokeSharp: IconBookBookmark01StrokeSharp,
  SolidSharp: IconBookBookmark01SolidSharp,
};
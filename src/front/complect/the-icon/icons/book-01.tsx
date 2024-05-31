import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 22.0001H6.5C5.11929 22.0001 4 20.8808 4 19.5001M4 19.5001V10.6837C4 7.69913 4 6.20682 4.75662 5.15857C5.00717 4.81144 5.31183 4.50679 5.65895 4.25623C6.70721 3.49961 8.19952 3.49961 11.1841 3.49961C12.1605 3.49961 13.3496 3.55106 14.3358 3.5644C15.235 3.57656 15.6846 3.58265 16.5222 3.43464C17.3597 3.28663 17.4492 3.2526 17.6282 3.18454C18.3982 2.89176 19.1272 2.43641 20 2V11.5001C20 13.3639 20 14.2958 19.6955 15.0309C19.2895 16.011 18.5108 16.7897 17.5307 17.1957C16.7956 17.5001 15.8638 17.5001 14 17.5001H6C4.89543 17.5001 4 18.3956 4 19.5001Z',
  d2: 'M18 17L18 22',
  d3: 'M8 4L8 8',
  d4: 'M20 11.5001V2C19.1272 2.43641 18.3982 2.89176 17.6282 3.18454C17.4492 3.2526 17.3597 3.28663 16.5222 3.43464C15.6846 3.58265 15.235 3.57656 14.3358 3.5644C13.3496 3.55106 12.1605 3.49961 11.1841 3.49961C8.19952 3.49961 6.70721 3.49961 5.65895 4.25623C5.31183 4.50679 5.00717 4.81144 4.75662 5.15857C4 6.20682 4 7.69913 4 10.6837V19.5001C4 18.3956 4.89543 17.5001 6 17.5001H14C15.8638 17.5001 16.7956 17.5001 17.5307 17.1957C17.6929 17.1285 17.8496 17.0511 18 16.9643C18.7584 16.5264 19.3567 15.8488 19.6955 15.0309C20 14.2958 20 13.3639 20 11.5001Z',
  d5: 'M7 3.65661C7 3.31436 7 3.14323 6.8766 3.05337C6.75319 2.96351 6.60256 3.0121 6.30131 3.10927C5.91039 3.23536 5.55199 3.40848 5.22001 3.6481C4.8078 3.94563 4.44602 4.30741 4.14849 4.71962C3.6628 5.39251 3.45032 6.17399 3.3489 7.11462C3.24998 8.03206 3.24999 9.18469 3.25 10.6395V19.3457C3.24741 19.3969 3.24609 19.4483 3.24609 19.5001C3.24609 21.4331 4.8131 23.0001 6.74609 23.0001H19.7383C20.2906 23.0001 20.7383 22.5524 20.7383 22.0001C20.7383 21.4479 20.2906 21.0001 19.7383 21.0001H19.6C19.3172 21.0001 19.1757 21.0001 19.0879 20.9123C19 20.8244 19 20.683 19 20.4001V17.468C19 17.3315 19 17.2632 19.0253 17.2056C19.0506 17.148 19.1056 17.0974 19.2155 16.9963C19.7191 16.5331 20.1216 15.9621 20.3884 15.3179C20.5848 14.8437 20.6695 14.3358 20.7102 13.7398C20.75 13.1564 20.75 12.4363 20.75 11.5277V11.5277V11.5276V11.5276V2C20.75 1.74007 20.6154 1.49867 20.3943 1.36201C20.1732 1.22536 19.8971 1.21293 19.6646 1.32918C19.3145 1.50422 19.0108 1.66795 18.7311 1.81876C18.2413 2.08286 17.825 2.30732 17.3616 2.48351L17.3403 2.49176C17.2461 2.52839 17.1676 2.55896 16.3916 2.69608C15.628 2.83103 15.238 2.82654 14.3459 2.81447C13.9602 2.80925 13.5219 2.79739 13.0721 2.78522C12.426 2.76774 11.7561 2.74961 11.1841 2.74961L11.1399 2.74961C10.5775 2.74961 10.0602 2.74961 9.58428 2.75532C9.31023 2.75861 9.1732 2.76025 9.0866 2.8479C9 2.93554 9 3.07388 9 3.35057L9 8C9 8.55228 8.55229 9 8 9C7.44772 9 7 8.55228 7 8V3.65661ZM16.4 18.5001C16.6828 18.5001 16.8243 18.5001 16.9121 18.588C17 18.6759 17 18.8173 17 19.1001V20.4001C17 20.683 17 20.8244 16.9121 20.9123C16.8243 21.0001 16.6828 21.0001 16.4 21.0001H6.74609C5.91767 21.0001 5.24609 20.3286 5.24609 19.5001C5.24609 18.9479 5.69381 18.5001 6.24609 18.5001H16.4Z',
  d6: 'M20.75 2C20.75 1.74007 20.6154 1.49867 20.3943 1.36201C20.1732 1.22536 19.8971 1.21293 19.6646 1.32918C19.3145 1.50422 19.0108 1.66795 18.7311 1.81876C18.2413 2.08286 17.825 2.30732 17.3616 2.48351L17.3403 2.49176C17.2461 2.52839 17.1676 2.55896 16.3916 2.69608C15.628 2.83103 15.238 2.82654 14.3459 2.81447C13.9602 2.80925 13.5219 2.79739 13.0721 2.78522C12.426 2.76774 11.7561 2.74961 11.1841 2.74961L11.1399 2.74961C9.68509 2.7496 8.53244 2.7496 7.61501 2.84851C6.67437 2.94993 5.8929 3.16242 5.22001 3.6481C4.8078 3.94563 4.44602 4.30741 4.14849 4.71962C3.6628 5.39251 3.45032 6.17399 3.3489 7.11462C3.24998 8.03206 3.24999 9.18469 3.25 10.6395V19.3457C3.24741 19.3969 3.24609 19.4483 3.24609 19.5001C3.24609 21.4331 4.8131 23.0001 6.74609 23.0001H19.7383C20.2906 23.0001 20.7383 22.5524 20.7383 22.0001C20.7383 21.4479 20.2906 21.0001 19.7383 21.0001H19V17.1829C19.6047 16.6902 20.0845 16.0516 20.3884 15.3179C20.5848 14.8437 20.6695 14.3358 20.7102 13.7398C20.75 13.1564 20.75 12.4363 20.75 11.5277V11.5276V11.5276V2ZM17 21.0001V18.5001H6.24609C5.69381 18.5001 5.24609 18.9479 5.24609 19.5001C5.24609 20.3286 5.91767 21.0001 6.74609 21.0001H17Z',
  d7: 'M9 2.76562L9 7.9995C9 8.55179 8.55228 8.9995 8 8.9995C7.44772 8.9995 7 8.55179 7 7.9995V2.93586C7.19724 2.89963 7.40204 2.87098 7.61501 2.84801C8.02718 2.80357 8.48682 2.7791 9 2.76562Z',
  d8: 'M7.98828 4.00684V8.02129',
  d9: 'M18.0545 22.0612H7.7222C5.46529 22.1251 4.23105 21.4797 3.9557 19.6391M18.0545 22.0612H19.9192M18.0545 22.0612V16.9761M18.0545 16.9761H19.9427V2.07938C19.9427 2.07209 19.9351 2.06723 19.9285 2.07025L17.493 3.1793C16.973 3.41611 16.4085 3.53863 15.8373 3.53863H6.64319C4.84212 3.71957 3.79441 5.13778 3.95573 7.56072V17.3526C3.92476 18.0002 3.95585 18.9039 3.9557 19.6391M18.0545 16.9761L7.69279 16.9666C4.9605 16.8648 4.02943 18.0161 3.9557 19.6391',
  d10: 'M20.752 2.22727C20.752 1.88857 20.5775 1.57402 20.2909 1.39596C20.0042 1.21789 19.6463 1.2017 19.3449 1.35317C19.0399 1.5065 18.7504 1.66301 18.4849 1.80655L18.324 1.89343C18.0088 2.06325 17.7289 2.21041 17.455 2.33443C16.9191 2.57705 16.4383 2.71566 15.8908 2.71552H7.14084C4.99307 2.71552 3.25195 4.46567 3.25195 6.62459V19.3295C3.25195 21.2186 4.77546 22.75 6.6548 22.75H20.752V20.7955H18.8075V17.8635H20.752V2.22727ZM6.65567 17.8635H16.8639L16.8639 20.7955H6.65567C5.85021 20.7955 5.19727 20.1391 5.19727 19.3295C5.19727 18.5199 5.85021 17.8635 6.65567 17.8635Z',
} as const;

export const IconBook01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-stroke-rounded IconBook01StrokeRounded"
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

export const IconBook01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-duotone-rounded IconBook01DuotoneRounded"
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

export const IconBook01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-twotone-rounded IconBook01TwotoneRounded"
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

export const IconBook01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-solid-rounded IconBook01SolidRounded"
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

export const IconBook01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-bulk-rounded IconBook01BulkRounded"
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

export const IconBook01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-stroke-sharp IconBook01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconBook01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="book-01-solid-sharp IconBook01SolidSharp"
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

export const iconPackOfBook01: TheIconSelfPack = {
  name: 'Book01',
  StrokeRounded: IconBook01StrokeRounded,
  DuotoneRounded: IconBook01DuotoneRounded,
  TwotoneRounded: IconBook01TwotoneRounded,
  SolidRounded: IconBook01SolidRounded,
  BulkRounded: IconBook01BulkRounded,
  StrokeSharp: IconBook01StrokeSharp,
  SolidSharp: IconBook01SolidSharp,
};
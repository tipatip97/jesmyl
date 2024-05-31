import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12.0025 7.03857L12.0025 14.0889M12.0025 14.0889C12.3286 14.0933 12.6503 13.8691 12.8876 13.5956L14.4771 11.8129M12.0025 14.0889C11.6879 14.0847 11.3693 13.8618 11.1174 13.5955L9.51864 11.8129M7.98633 17.0386L15.9863 17.0386',
  d3: 'M2.2002 11.668C2.2002 7.18963 2.2002 4.95046 3.59144 3.55921C4.98269 2.16797 7.22186 2.16797 11.7002 2.16797C16.1785 2.16797 18.4177 2.16797 19.809 3.55921C21.2002 4.95046 21.2002 7.18963 21.2002 11.668C21.2002 16.1463 21.2002 18.3855 19.809 19.7768C18.4177 21.168 16.1785 21.168 11.7002 21.168C7.22186 21.168 4.98269 21.168 3.59144 19.7768C2.2002 18.3855 2.2002 16.1463 2.2002 11.668Z',
  d4: 'M11.7003 6.75195V13.342M9.21094 11.415L10.8533 13.0939C11.1866 13.4933 11.4932 13.693 11.7003 13.693C11.9074 13.693 12.2151 13.4933 12.5484 13.0939L14.1906 11.415',
  d5: 'M7.74219 16.668L15.6589 16.668',
  d6: 'M12.0162 7L12.0162 14.0503M12.0162 14.0503C12.3422 14.0547 12.6639 13.8306 12.9013 13.557L14.4908 11.7743M12.0162 14.0503C11.7016 14.0462 11.3829 13.8232 11.131 13.557L9.53231 11.7743M8 17L16 17',
  d7: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM12 6C12.5523 6 13 6.44772 13 7V10.1284H13.5501L13.5692 10.1283C13.6415 10.1281 13.7856 10.1277 13.9131 10.146C14.0276 10.1624 14.5425 10.2468 14.7802 10.7816C15.0179 11.3164 14.7355 11.7551 14.6711 11.8511C14.5992 11.958 14.5023 12.0648 14.4537 12.1182L14.4409 12.1324L13.7691 12.8767C13.549 13.1206 13.3215 13.3729 13.1049 13.556C12.8592 13.7636 12.4949 14 12 14C11.5051 14 11.1408 13.7636 10.8951 13.556C10.6785 13.3729 10.4509 13.1206 10.2309 12.8767L9.55915 12.1324L9.54626 12.1182C9.4977 12.0648 9.40076 11.958 9.32894 11.8511C9.26446 11.7551 8.98208 11.3164 9.2198 10.7816C9.45752 10.2468 9.97239 10.1624 10.0869 10.146C10.2144 10.1277 10.3585 10.1281 10.4308 10.1283L10.4499 10.1284H11V7C11 6.44772 11.4477 6 12 6ZM8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z',
  d8: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d9: 'M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V10.1284H10.4499L10.4308 10.1283C10.3585 10.1281 10.2144 10.1277 10.0869 10.146C9.97239 10.1624 9.45752 10.2468 9.2198 10.7816C8.98208 11.3164 9.26446 11.7551 9.32894 11.8511C9.40076 11.958 9.4977 12.0648 9.54626 12.1182L9.55915 12.1324L10.2309 12.8767C10.4509 13.1206 10.6785 13.3729 10.8951 13.556C11.1408 13.7636 11.5051 14 12 14C12.4949 14 12.8592 13.7636 13.1049 13.556C13.3215 13.3729 13.549 13.1206 13.7691 12.8767L14.4409 12.1324L14.4537 12.1182C14.5023 12.0648 14.5992 11.958 14.6711 11.8511C14.7355 11.7551 15.0179 11.3164 14.7802 10.7816C14.5425 10.2468 14.0276 10.1624 13.9131 10.146C13.7856 10.1277 13.6415 10.1281 13.5692 10.1283L13.5501 10.1284H13V7ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H9Z',
  d10: 'M21 3H3V21H21V3Z',
  d11: 'M12 14L11.5066 14.5649L12 14.9958L12.4934 14.5649L12 14ZM8 17.75L16 17.75V16.25L8 16.25L8 17.75ZM14.0066 11.2516L11.5066 13.4351L12.4934 14.5649L14.9934 12.3813L14.0066 11.2516ZM12.4934 13.4351L9.99337 11.2516L9.00663 12.3813L11.5066 14.5649L12.4934 13.4351ZM12.75 13.5754L12.75 7L11.25 7L11.25 13.5754H12.75Z',
  d12: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.75 11.5645V7.125H11.25V11.5645L9.96852 10.5393L9.03148 11.7107L12 14.0855L14.9685 11.7107L14.0315 10.5393L12.75 11.5645ZM15 16.875V15.375H9V16.875H15Z',
} as const;

export const IconDownloadSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-stroke-rounded IconDownloadSquare02StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDownloadSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-duotone-rounded IconDownloadSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconDownloadSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-twotone-rounded IconDownloadSquare02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDownloadSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-solid-rounded IconDownloadSquare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDownloadSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-bulk-rounded IconDownloadSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDownloadSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-stroke-sharp IconDownloadSquare02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDownloadSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="download-square-02-solid-sharp IconDownloadSquare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDownloadSquare02: TheIconSelfPack = {
  name: 'DownloadSquare02',
  StrokeRounded: IconDownloadSquare02StrokeRounded,
  DuotoneRounded: IconDownloadSquare02DuotoneRounded,
  TwotoneRounded: IconDownloadSquare02TwotoneRounded,
  SolidRounded: IconDownloadSquare02SolidRounded,
  BulkRounded: IconDownloadSquare02BulkRounded,
  StrokeSharp: IconDownloadSquare02StrokeSharp,
  SolidSharp: IconDownloadSquare02SolidSharp,
};
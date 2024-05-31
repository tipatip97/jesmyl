import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.43934 8.56066C3.87868 9 4.58579 9 6 9C7.41421 9 8.12132 9 8.56066 8.56066C9 8.12132 9 7.41421 9 6C9 4.58579 9 3.87868 8.56066 3.43934C8.12132 3 7.41421 3 6 3C4.58579 3 3.87868 3 3.43934 3.43934C3 3.87868 3 4.58579 3 6C3 7.41421 3 8.12132 3.43934 8.56066Z',
  d2: 'M15.4393 8.56066C15.8787 9 16.5858 9 18 9C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6C21 4.58579 21 3.87868 20.5607 3.43934C20.1213 3 19.4142 3 18 3C16.5858 3 15.8787 3 15.4393 3.43934C15 3.87868 15 4.58579 15 6C15 7.41421 15 8.12132 15.4393 8.56066Z',
  d3: 'M15.4393 20.5607C15.8787 21 16.5858 21 18 21C19.4142 21 20.1213 21 20.5607 20.5607C21 20.1213 21 19.4142 21 18C21 16.5858 21 15.8787 20.5607 15.4393C20.1213 15 19.4142 15 18 15C16.5858 15 15.8787 15 15.4393 15.4393C15 15.8787 15 16.5858 15 18C15 19.4142 15 20.1213 15.4393 20.5607Z',
  d4: 'M3.43934 20.5607C3.87868 21 4.58579 21 6 21C7.41421 21 8.12132 21 8.56066 20.5607C9 20.1213 9 19.4142 9 18C9 16.5858 9 15.8787 8.56066 15.4393C8.12132 15 7.41421 15 6 15C4.58579 15 3.87868 15 3.43934 15.4393C3 15.8787 3 16.5858 3 18C3 19.4142 3 20.1213 3.43934 20.5607Z',
  d5: 'M12 6H9',
  d6: 'M15 18H12',
  d7: 'M18 12L18 9',
  d8: 'M6 15L6 12',
  d9: 'M6.04943 2.25C6.71427 2.24996 7.28711 2.24993 7.74585 2.31161C8.23748 2.37771 8.70875 2.52677 9.09099 2.90901C9.47324 3.29126 9.6223 3.76252 9.6884 4.25416C9.75007 4.71291 9.75004 5.3845 9.75001 6.04937C9.75004 6.71424 9.75007 7.2871 9.6884 7.74585C9.6223 8.23748 9.47324 8.70875 9.09099 9.09099C8.70875 9.47324 8.23748 9.6223 7.74585 9.6884C7.2871 9.75007 6.6155 9.75004 5.95064 9.75001C5.28577 9.75004 4.71291 9.75007 4.25416 9.6884C3.76252 9.6223 3.29126 9.47324 2.90901 9.09099C2.52677 8.70875 2.37771 8.23748 2.31161 7.74585C2.24993 7.28711 2.24996 6.71427 2.25 6.04943V6.04938C2.24996 5.38451 2.24993 4.71291 2.31161 4.25416C2.37771 3.76252 2.52677 3.29126 2.90901 2.90901C3.29126 2.52677 3.76252 2.37771 4.25416 2.31161C4.71291 2.24993 5.38451 2.24996 6.04938 2.25H6.04943Z',
  d10: 'M18.0494 2.25C18.7143 2.24996 19.2871 2.24993 19.7458 2.31161C20.2375 2.37771 20.7087 2.52677 21.091 2.90901C21.4732 3.29126 21.6223 3.76252 21.6884 4.25416C21.7501 4.71291 21.75 5.3845 21.75 6.04937C21.75 6.71424 21.7501 7.2871 21.6884 7.74585C21.6223 8.23748 21.4732 8.70875 21.091 9.09099C20.7087 9.47324 20.2375 9.6223 19.7458 9.6884C19.2871 9.75007 18.6155 9.75004 17.9506 9.75001C17.2858 9.75004 16.7129 9.75007 16.2542 9.6884C15.7625 9.6223 15.2913 9.47324 14.909 9.09099C14.5268 8.70875 14.3777 8.23748 14.3116 7.74585C14.2499 7.28711 14.25 6.71427 14.25 6.04943V6.04938C14.25 5.38451 14.2499 4.71291 14.3116 4.25416C14.3777 3.76252 14.5268 3.29126 14.909 2.90901C15.2913 2.52677 15.7625 2.37771 16.2542 2.31161C16.7129 2.24993 17.3845 2.24996 18.0494 2.25H18.0494Z',
  d11: 'M18.0494 14.25C18.7143 14.25 19.2871 14.2499 19.7458 14.3116C20.2375 14.3777 20.7087 14.5268 21.091 14.909C21.4732 15.2913 21.6223 15.7625 21.6884 16.2542C21.7501 16.7129 21.75 17.3845 21.75 18.0494C21.75 18.7142 21.7501 19.2871 21.6884 19.7458C21.6223 20.2375 21.4732 20.7087 21.091 21.091C20.7087 21.4732 20.2375 21.6223 19.7458 21.6884C19.2871 21.7501 18.6155 21.75 17.9506 21.75C17.2858 21.75 16.7129 21.7501 16.2542 21.6884C15.7625 21.6223 15.2913 21.4732 14.909 21.091C14.5268 20.7087 14.3777 20.2375 14.3116 19.7458C14.2499 19.2871 14.25 18.7143 14.25 18.0494V18.0494C14.25 17.3845 14.2499 16.7129 14.3116 16.2542C14.3777 15.7625 14.5268 15.2913 14.909 14.909C15.2913 14.5268 15.7625 14.3777 16.2542 14.3116C16.7129 14.2499 17.3845 14.25 18.0494 14.25H18.0494Z',
  d12: 'M6.04943 14.25C6.71427 14.25 7.28711 14.2499 7.74585 14.3116C8.23748 14.3777 8.70875 14.5268 9.09099 14.909C9.47324 15.2913 9.6223 15.7625 9.6884 16.2542C9.75007 16.7129 9.75004 17.2858 9.75001 17.9506V18.0494C9.75004 18.7142 9.75007 19.2871 9.6884 19.7458C9.6223 20.2375 9.47324 20.7087 9.09099 21.091C8.70875 21.4732 8.23748 21.6223 7.74585 21.6884C7.2871 21.7501 6.71424 21.75 6.04937 21.75C5.3845 21.75 4.71291 21.7501 4.25416 21.6884C3.76252 21.6223 3.29126 21.4732 2.90901 21.091C2.52677 20.7087 2.37771 20.2375 2.31161 19.7458C2.24993 19.2871 2.24996 18.7143 2.25 18.0494V18.0494C2.24996 17.3845 2.24993 16.7129 2.31161 16.2542C2.37771 15.7625 2.52677 15.2913 2.90901 14.909C3.29126 14.5268 3.76252 14.3777 4.25416 14.3116C4.71291 14.2499 5.38451 14.25 6.04938 14.25H6.04943Z',
  d13: 'M8 6C8 5.44772 8.44772 5 9 5H12C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7H9C8.44772 7 8 6.55228 8 6Z',
  d14: 'M11 18C11 17.4477 11.4477 17 12 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H12C11.4477 19 11 18.5523 11 18Z',
  d15: 'M18 8C18.5523 8 19 8.44772 19 9L19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12L17 9C17 8.44772 17.4477 8 18 8Z',
  d16: 'M6 11C6.55228 11 7 11.4477 7 12L7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15L5 12C5 11.4477 5.44772 11 6 11Z',
  d17: 'M6.04943 2.25C6.71427 2.24997 7.28712 2.24994 7.74585 2.31161C8.23749 2.37771 8.70875 2.52677 9.091 2.90901C9.47324 3.29126 9.6223 3.76252 9.6884 4.25416C9.75008 4.71291 9.75004 5.38451 9.75001 6.04937C9.75004 6.71424 9.75008 7.2871 9.6884 7.74585C9.6223 8.23749 9.47324 8.70875 9.091 9.091C8.70875 9.47324 8.23749 9.6223 7.74585 9.6884C7.2871 9.75008 6.6155 9.75004 5.95064 9.75001C5.28577 9.75004 4.71291 9.75008 4.25416 9.6884C3.76252 9.6223 3.29126 9.47324 2.90902 9.091C2.52677 8.70875 2.37771 8.23749 2.31161 7.74585C2.24994 7.28712 2.24997 6.71422 2.25 6.04938C2.24997 5.38451 2.24993 4.71291 2.31161 4.25416C2.37771 3.76252 2.52677 3.29126 2.90901 2.90901C3.29126 2.52677 3.76252 2.37771 4.25416 2.31161C4.71291 2.24993 5.38457 2.24997 6.04943 2.25Z',
  d18: 'M18.0494 2.25C18.7143 2.24997 19.2871 2.24994 19.7458 2.31161C20.2375 2.37771 20.7087 2.52677 21.091 2.90901C21.4732 3.29126 21.6223 3.76252 21.6884 4.25416C21.7501 4.71291 21.75 5.38451 21.75 6.04937C21.75 6.71424 21.7501 7.2871 21.6884 7.74585C21.6223 8.23749 21.4732 8.70875 21.091 9.091C20.7087 9.47324 20.2375 9.6223 19.7458 9.6884C19.2871 9.75008 18.6155 9.75004 17.9506 9.75001C17.2858 9.75004 16.7129 9.75008 16.2542 9.6884C15.7625 9.6223 15.2913 9.47324 14.909 9.091C14.5268 8.70875 14.3777 8.23749 14.3116 7.74585C14.2499 7.28712 14.25 6.71422 14.25 6.04938C14.25 5.38451 14.2499 4.71291 14.3116 4.25416C14.3777 3.76252 14.5268 3.29126 14.909 2.90901C15.2913 2.52677 15.7625 2.37771 16.2542 2.31161C16.7129 2.24993 17.3846 2.24997 18.0494 2.25Z',
  d19: 'M18.0494 14.25C18.7143 14.25 19.2871 14.2499 19.7458 14.3116C20.2375 14.3777 20.7087 14.5268 21.091 14.909C21.4732 15.2913 21.6223 15.7625 21.6884 16.2542C21.7501 16.7129 21.75 17.3845 21.75 18.0494C21.75 18.7142 21.7501 19.2871 21.6884 19.7458C21.6223 20.2375 21.4732 20.7087 21.091 21.091C20.7087 21.4732 20.2375 21.6223 19.7458 21.6884C19.2871 21.7501 18.6155 21.75 17.9506 21.75C17.2858 21.75 16.7129 21.7501 16.2542 21.6884C15.7625 21.6223 15.2913 21.4732 14.909 21.091C14.5268 20.7087 14.3777 20.2375 14.3116 19.7458C14.2499 19.2871 14.25 18.7142 14.25 18.0494C14.25 17.3845 14.2499 16.7129 14.3116 16.2542C14.3777 15.7625 14.5268 15.2913 14.909 14.909C15.2913 14.5268 15.7625 14.3777 16.2542 14.3116C16.7129 14.2499 17.3846 14.25 18.0494 14.25Z',
  d20: 'M6.04943 14.25C6.71427 14.25 7.28712 14.2499 7.74585 14.3116C8.23749 14.3777 8.70875 14.5268 9.091 14.909C9.47324 15.2913 9.6223 15.7625 9.6884 16.2542C9.75008 16.7129 9.75004 17.2858 9.75001 17.9506V18.0494C9.75004 18.7142 9.75008 19.2871 9.6884 19.7458C9.6223 20.2375 9.47324 20.7087 9.091 21.091C8.70875 21.4732 8.23749 21.6223 7.74585 21.6884C7.2871 21.7501 6.71424 21.75 6.04937 21.75C5.38451 21.75 4.71291 21.7501 4.25416 21.6884C3.76252 21.6223 3.29126 21.4732 2.90902 21.091C2.52677 20.7087 2.37771 20.2375 2.31161 19.7458C2.24994 19.2871 2.24997 18.7142 2.25 18.0494C2.24997 17.3845 2.24993 16.7129 2.31161 16.2542C2.37771 15.7625 2.52677 15.2913 2.90901 14.909C3.29126 14.5268 3.76252 14.3777 4.25416 14.3116C4.71291 14.2499 5.38457 14.25 6.04943 14.25Z',
  d21: 'M9.74164 7H12C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5H9.74032C9.75005 5.32864 9.75003 5.68999 9.75001 6.04937C9.75003 6.39164 9.75004 6.70952 9.74164 7Z',
  d22: 'M17 9.74164V12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12V9.74032C18.6714 9.75005 18.31 9.75003 17.9506 9.75001C17.6084 9.75003 17.2905 9.75004 17 9.74164Z',
  d23: 'M14.2597 17C14.25 17.3286 14.25 17.69 14.25 18.0494C14.25 18.3916 14.25 18.7095 14.2584 19H12C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17H14.2597Z',
  d24: 'M7 14.2584C6.70953 14.25 6.39167 14.25 6.04943 14.25C5.69004 14.25 5.32866 14.25 5 14.2597V12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12L7 14.2584Z',
  d25: 'M21 3H15V9H21V3Z',
  d26: 'M9 3H3V9H9V3Z',
  d27: 'M9 15H3V21H9V15Z',
  d28: 'M21 15H15V21H21V15Z',
  d29: 'M8 5H13V7H8V5Z',
  d30: 'M11 17H16V19H11V17Z',
  d31: 'M19 8L19 13L17 13L17 8L19 8Z',
  d32: 'M7 11L7 16L5 16L5 11L7 11Z',
  d33: 'M14.25 2.25H21.75V9.75H14.25V2.25Z',
  d34: 'M2.25 2.25H9.75V9.75H2.25V2.25Z',
  d35: 'M2.25 14.25H9.75V21.75H2.25V14.25Z',
  d36: 'M14.25 14.25H21.75V21.75H14.25V14.25Z',
} as const;

export const IconBlockchain04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-stroke-rounded IconBlockchain04StrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-duotone-rounded IconBlockchain04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-twotone-rounded IconBlockchain04TwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-solid-rounded IconBlockchain04SolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-bulk-rounded IconBlockchain04BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-stroke-sharp IconBlockchain04StrokeSharp"
    >
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBlockchain04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="blockchain-04-solid-sharp IconBlockchain04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlockchain04: TheIconSelfPack = {
  name: 'Blockchain04',
  StrokeRounded: IconBlockchain04StrokeRounded,
  DuotoneRounded: IconBlockchain04DuotoneRounded,
  TwotoneRounded: IconBlockchain04TwotoneRounded,
  SolidRounded: IconBlockchain04SolidRounded,
  BulkRounded: IconBlockchain04BulkRounded,
  StrokeSharp: IconBlockchain04StrokeSharp,
  SolidSharp: IconBlockchain04SolidSharp,
};
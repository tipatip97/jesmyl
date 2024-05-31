import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 2V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V2',
  d2: 'M8 8.55626C8.88889 7.40291 10.3106 8.23432 12 9.31817C14.2222 10.7439 15.5556 9.65003 16 8.6152',
  d3: 'M7 2H17',
  d4: 'M11 18.002L11.0087 17.9996',
  d5: 'M13 14.002L13.0087 13.9996',
  d6: 'M8 18.0006C8 20.2097 9.79086 22.0006 12 22.0006C14.2091 22.0006 16 20.2097 16 18.0006V9.50058C14 10.7006 12.5 10.0006 12 9.50058C10 7.50058 8.5 7.66725 8 8.00058V18.0006Z',
  d7: 'M6 2.25C6 1.69772 6.44772 1.25 7 1.25H17C17.5523 1.25 18 1.69772 18 2.25C18 2.80228 17.5523 3.25 17 3.25H7C6.44772 3.25 6 2.80228 6 2.25Z',
  d8: 'M8.2 1.25C8.72467 1.25 9.15 1.68754 9.15 2.22727V8.0013C9.94329 8.03186 10.9166 8.62311 12 9.31817C13.2163 10.0985 14.1663 10.1239 14.85 9.81739V2.22727C14.85 1.68754 15.2753 1.25 15.8 1.25C16.3247 1.25 16.75 1.68754 16.75 2.22727V17.8636C16.75 20.5623 14.6234 22.75 12 22.75C9.37665 22.75 7.25 20.5623 7.25 17.8636V2.22727C7.25 1.68754 7.67533 1.25 8.2 1.25ZM10.0342 18.2614C9.89188 17.7279 10.207 17.1796 10.738 17.0366L10.7467 17.0343C11.2777 16.8914 11.8235 17.208 11.9658 17.7414C12.1081 18.2749 11.793 18.8232 11.262 18.9662L11.2533 18.9685C10.7223 19.1114 10.1765 18.7949 10.0342 18.2614ZM12.738 13.0366C12.207 13.1796 11.8919 13.7279 12.0342 14.2614C12.1765 14.7949 12.7223 15.1114 13.2533 14.9685L13.262 14.9662C13.793 14.8232 14.1081 14.2749 13.9658 13.7414C13.8235 13.208 13.2777 12.8914 12.7467 13.0343L12.738 13.0366Z',
  d9: 'M9.15039 17.8627C9.15039 19.4819 10.4264 20.7946 12.0004 20.7946C13.5744 20.7946 14.8504 19.4819 14.8504 17.8627V8.94064C14.7265 9.0425 14.5849 9.12473 14.4276 9.17773C14.0351 9.30998 13.3835 9.31357 12.4054 8.68602C11.5826 8.15816 10.7119 7.61297 9.91166 7.37779C9.66891 7.30646 9.41251 7.25703 9.15039 7.25V17.8627ZM10.0342 18.2614C9.89188 17.7279 10.207 17.1796 10.738 17.0366L10.7467 17.0343C11.2777 16.8914 11.8235 17.208 11.9658 17.7414C12.1081 18.2749 11.793 18.8232 11.262 18.9662L11.2533 18.9685C10.7223 19.1114 10.1765 18.7949 10.0342 18.2614ZM12.738 13.0366C12.207 13.1796 11.8919 13.7279 12.0342 14.2614C12.1765 14.7949 12.7223 15.1114 13.2533 14.9685L13.262 14.9662C13.793 14.8232 14.1081 14.2749 13.9658 13.7414C13.8235 13.208 13.2777 12.8914 12.7467 13.0343L12.738 13.0366Z',
  d10: 'M8.2 1.25C8.72467 1.25 9.15 1.68754 9.15 2.22727V17.8636C9.15 19.4828 10.426 20.7955 12 20.7955C13.574 20.7955 14.85 19.4828 14.85 17.8636V2.22727C14.85 1.68754 15.2753 1.25 15.8 1.25C16.3247 1.25 16.75 1.68754 16.75 2.22727V17.8636C16.75 20.5623 14.6234 22.75 12 22.75C9.37665 22.75 7.25 20.5623 7.25 17.8636V2.22727C7.25 1.68754 7.67533 1.25 8.2 1.25Z',
  d11: 'M6 2H18',
  d12: 'M16.75 2.75H18V1.25H6V2.75H7.25V18C7.25 20.6234 9.37665 22.75 12 22.75C14.6234 22.75 16.75 20.6234 16.75 18V2.75ZM15.25 2.75H8.75V7.27527C9.15006 7.21357 9.54628 7.27131 9.91157 7.37866C10.7118 7.61383 11.5825 8.15902 12.4053 8.68688C13.3834 9.31443 14.035 9.31084 14.4275 9.17859C14.7966 9.05424 15.0789 8.76904 15.25 8.4468V2.75ZM10.0323 18.2608C9.88931 17.7274 10.2059 17.179 10.7394 17.0361L10.748 17.0338C11.2815 16.8908 11.8298 17.2074 11.9728 17.7409C12.1157 18.2744 11.7991 18.8227 11.2657 18.9656L11.257 18.968C10.7235 19.1109 10.1752 18.7943 10.0323 18.2608ZM12.7394 13.0361C12.2059 13.179 11.8893 13.7274 12.0323 14.2608C12.1752 14.7943 12.7235 15.1109 13.257 14.968L13.2657 14.9656C13.7991 14.8227 14.1157 14.2744 13.9728 13.7409C13.8298 13.2074 13.2815 12.8908 12.748 13.0338L12.7394 13.0361Z',
} as const;

export const IconTestTube02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-stroke-rounded IconTestTube02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTestTube02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-duotone-rounded IconTestTube02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconTestTube02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-twotone-rounded IconTestTube02TwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTestTube02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-solid-rounded IconTestTube02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTestTube02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-bulk-rounded IconTestTube02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTube02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-stroke-sharp IconTestTube02StrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTestTube02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-02-solid-sharp IconTestTube02SolidSharp"
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

export const iconPackOfTestTube02: TheIconSelfPack = {
  name: 'TestTube02',
  StrokeRounded: IconTestTube02StrokeRounded,
  DuotoneRounded: IconTestTube02DuotoneRounded,
  TwotoneRounded: IconTestTube02TwotoneRounded,
  SolidRounded: IconTestTube02SolidRounded,
  BulkRounded: IconTestTube02BulkRounded,
  StrokeSharp: IconTestTube02StrokeSharp,
  SolidSharp: IconTestTube02SolidSharp,
};
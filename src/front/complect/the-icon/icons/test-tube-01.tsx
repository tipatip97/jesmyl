import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5405 2V4.48622C14.5405 6.23417 14.5405 7.10814 14.7545 7.94715C14.9685 8.78616 15.3879 9.55654 16.2267 11.0973L17.3633 13.1852C19.5008 17.1115 20.5696 19.0747 19.6928 20.53L19.6792 20.5522C18.7896 22 16.5264 22 12 22C7.47357 22 5.21036 22 4.3208 20.5522L4.30725 20.53C3.43045 19.0747 4.49918 17.1115 6.63666 13.1852L7.7733 11.0973C8.61209 9.55654 9.03149 8.78616 9.24548 7.94715C9.45947 7.10814 9.45947 6.23417 9.45947 4.48622V2',
  d2: 'M9 16.002L9.00868 15.9996',
  d3: 'M15 18.002L15.0087 17.9996',
  d4: 'M8 2L16 2',
  d5: 'M7.5 11.5563C8.5 10.4029 10.0994 11.2343 12 12.3182C14.5 13.7439 16 12.65 16.5 11.6152',
  d6: 'M4.3208 20.5527C5.21036 22.0005 7.47357 22.0005 12 22.0005C16.5264 22.0005 18.7896 22.0005 19.6792 20.5527L19.6928 20.5304C20.5696 19.0752 19.5008 17.112 17.3633 13.1857L16.7181 12.0005C14.8926 14.0005 12.8121 13.1672 12 12.5005C11.3853 11.8857 10.7285 11.5069 10.1107 11.2848C8.68225 10.7712 7.36246 11.8525 6.63666 13.1857L6.63666 13.1857C4.49918 17.112 3.43045 19.0752 4.30725 20.5304L4.3208 20.5527Z',
  d7: 'M7 2.25C7 1.69772 7.44772 1.25 8 1.25L16 1.25C16.5523 1.25 17 1.69772 17 2.25C17 2.80228 16.5523 3.25 16 3.25L8 3.25C7.44772 3.25 7 2.80228 7 2.25Z',
  d8: 'M9.53007 1.25C10.067 1.25 10.5023 1.68754 10.5023 2.22727V4.65699L10.5023 4.78975C10.5025 6.37141 10.5026 7.34081 10.2641 8.28078C10.0521 9.11629 9.66288 9.88392 9.04815 11.0241C9.89114 11.1429 10.8947 11.6879 12.0001 12.3183C13.7324 13.3062 14.9846 13.0843 15.7566 12.5107L15.2554 11.5851L15.192 11.4682C14.4368 10.074 13.9743 9.22031 13.7359 8.28078C13.4974 7.34081 13.4975 6.37141 13.4977 4.78976V4.78975L13.4977 4.65699V2.22727C13.4977 1.68754 13.933 1.25 14.4699 1.25C15.0069 1.25 15.4421 1.68754 15.4421 2.22727V4.65699C15.4421 6.4127 15.449 7.12385 15.62 7.79774C15.7911 8.4721 16.125 9.103 16.9631 10.6506L18.1092 12.7668L18.1092 12.7668C19.1135 14.621 19.9209 16.1119 20.3588 17.3176C20.8069 18.5512 20.9667 19.7476 20.3117 20.8404L20.3096 20.844L20.2964 20.8658L20.2941 20.8695C19.633 21.9511 18.5022 22.3722 17.1989 22.5629C15.9206 22.7501 14.213 22.75 12.0838 22.75H12.0837H12.0837H12.0837H11.9163H11.9163H11.9163H11.9162C9.78698 22.75 8.07941 22.7501 6.80108 22.5629C5.49775 22.3722 4.367 21.9511 3.70586 20.8695L3.70363 20.8658L3.69045 20.844L3.68827 20.8404C3.03325 19.7476 3.19313 18.5512 3.64117 17.3176C4.07908 16.1119 4.88656 14.621 5.89081 12.7667L7.03688 10.6506C7.87501 9.103 8.20887 8.4721 8.37998 7.79773C8.55096 7.12385 8.55786 6.4127 8.55786 4.65699V2.22727C8.55786 1.68754 8.99314 1.25 9.53007 1.25ZM8.03429 16.2614C7.892 15.7279 8.20714 15.1796 8.73817 15.0366L8.7468 15.0343C9.27783 14.8914 9.82367 15.208 9.96596 15.7414C10.1082 16.2749 9.79311 16.8232 9.26208 16.9662L9.25344 16.9685C8.72241 17.1114 8.17658 16.7949 8.03429 16.2614ZM14.738 17.0366C14.207 17.1796 13.8919 17.7279 14.0342 18.2614C14.1765 18.7949 14.7223 19.1114 15.2533 18.9685L15.262 18.9662C15.793 18.8232 16.1081 18.2749 15.9658 17.7414C15.8235 17.208 15.2777 16.8914 14.7467 17.0343L14.738 17.0366Z',
  d9: 'M9.41839 10.3281L7.64028 13.625C6.58547 15.5727 5.85044 16.9354 5.46837 17.9874C5.09104 19.0263 5.15686 19.5005 5.35359 19.8298L5.35447 19.8313L5.36323 19.8458L5.36414 19.8472C5.56812 20.1799 5.97041 20.4656 7.08196 20.6283C8.20344 20.7925 9.76834 20.795 12.0007 20.795C14.2331 20.795 15.7979 20.7925 16.9194 20.6283C18.0311 20.4656 18.4333 20.1798 18.6373 19.8472L18.6382 19.8458L18.6469 19.8313L18.6478 19.8298C18.8445 19.5005 18.9104 19.0263 18.533 17.9874C18.151 16.9354 17.4159 15.5727 16.3611 13.6251L15.3949 11.8409C15.2286 11.9814 15.0255 12.0987 14.786 12.1704C14.2801 12.3219 13.4929 12.305 12.3727 11.6662C11.4417 11.1353 10.4789 10.6009 9.60299 10.3721C9.54194 10.3562 9.48038 10.3414 9.41839 10.3281ZM8.03514 16.2614C7.89285 15.7279 8.20799 15.1796 8.73902 15.0366L8.74766 15.0343C9.27869 14.8914 9.82452 15.208 9.96681 15.7414C10.1091 16.2749 9.79396 16.8232 9.26293 16.9662L9.2543 16.9685C8.72327 17.1114 8.17743 16.7949 8.03514 16.2614ZM14.739 17.0366C14.208 17.1796 13.8929 17.7279 14.0351 18.2614C14.1774 18.7949 14.7233 19.1114 15.2543 18.9685L15.2629 18.9662C15.794 18.8232 16.1091 18.2749 15.9668 17.7414C15.8245 17.208 15.2787 16.8914 14.7477 17.0343L14.739 17.0366Z',
  d10: 'M9.53007 1.25C10.067 1.25 10.5023 1.68754 10.5023 2.22727V4.65699C10.5023 4.70172 10.5023 4.74597 10.5023 4.78975C10.5025 6.37141 10.5026 7.34081 10.2641 8.28078C10.0257 9.22031 9.56323 10.074 8.80798 11.4682C8.78709 11.5067 8.76597 11.5457 8.74463 11.5851L7.63958 13.6255C6.58477 15.5732 5.84975 16.9359 5.46767 17.9879C5.09035 19.0268 5.15616 19.501 5.35289 19.8303C5.35319 19.8308 5.35348 19.8313 5.35377 19.8318L5.36254 19.8462C5.36284 19.8467 5.36314 19.8472 5.36345 19.8477C5.56743 20.1803 5.96971 20.4661 7.08127 20.6288C8.20275 20.793 9.76764 20.7955 12 20.7955C14.2324 20.7955 15.7973 20.793 16.9187 20.6288C18.0304 20.4661 18.4326 20.1803 18.6366 19.8476C18.6369 19.8472 18.6372 19.8467 18.6375 19.8462L18.6462 19.8318C18.6465 19.8313 18.6468 19.8308 18.6471 19.8303C18.8438 19.501 18.9097 19.0268 18.5323 17.9879C18.1503 16.9359 17.4152 15.5732 16.3604 13.6255L15.2554 11.5851C15.234 11.5457 15.2129 11.5067 15.192 11.4682C14.4368 10.074 13.9743 9.22031 13.7359 8.28078C13.4974 7.34081 13.4975 6.37141 13.4977 4.78975C13.4977 4.74597 13.4977 4.70172 13.4977 4.65699V2.22727C13.4977 1.68754 13.933 1.25 14.4699 1.25C15.0069 1.25 15.4421 1.68754 15.4421 2.22727V4.65699C15.4421 6.4127 15.449 7.12385 15.62 7.79774C15.7911 8.4721 16.125 9.103 16.9631 10.6506L18.1092 12.7668C19.1135 14.621 19.9209 16.1119 20.3588 17.3176C20.8069 18.5512 20.9667 19.7476 20.3117 20.8404L20.3096 20.844L20.2964 20.8658L20.2941 20.8695C19.633 21.9511 18.5022 22.3722 17.1989 22.5629C15.9206 22.7501 14.213 22.75 12.0837 22.75H11.9163C9.78702 22.75 8.07943 22.7501 6.80108 22.5629C5.49775 22.3722 4.367 21.9511 3.70586 20.8695L3.70363 20.8658L3.69045 20.844L3.68827 20.8404C3.03325 19.7476 3.19313 18.5512 3.64117 17.3176C4.07908 16.1119 4.88656 14.621 5.89081 12.7667L7.03688 10.6506C7.87501 9.103 8.20887 8.4721 8.37998 7.79773C8.55096 7.12385 8.55786 6.4127 8.55786 4.65699V2.22727C8.55786 1.68754 8.99314 1.25 9.53007 1.25Z',
  d11: 'M10 16.0024L10.0087 16',
  d12: 'M15 18.5024L15.0087 18.5',
  d13: 'M7.00781 2H17.026',
  d14: 'M8.01172 11.5624C8.90222 10.4083 10.3265 11.2402 12.019 12.3248C14.2453 13.7514 15.581 12.6568 16.0263 11.6214',
  d15: 'M14.5633 2.71094V8.57393L21.0112 21.9881C21.0144 21.9948 21.0096 22.0025 21.0022 22.0025H3.0198C3.01241 22.0025 3.00756 21.9948 3.01078 21.9881L9.50475 8.57393V2.71094',
  d16: 'M15.2521 2.75H17.0039V1.25H7.00391V2.75H8.75208L8.75208 8.32889L7.43315 11.069L7.41016 11.0984L7.4166 11.1034L2.32812 21.6747C2.21625 21.9071 2.23166 22.1807 2.3689 22.3991C2.50615 22.6175 2.74598 22.75 3.00391 22.75H21.0021C21.26 22.75 21.4998 22.6175 21.637 22.3992C21.7743 22.1808 21.7897 21.9073 21.678 21.6749L15.2521 8.31523L15.2521 2.75ZM14.4304 12.1786C14.7416 12.0738 14.9911 11.8546 15.1642 11.5953L13.7511 8.65722L13.7511 2.75H10.2511L10.2511 8.67111L9.47656 10.2801C9.62613 10.3028 9.77262 10.337 9.91445 10.3787C10.7147 10.6138 11.5854 11.159 12.4082 11.6869C13.3863 12.3144 14.0379 12.3108 14.4304 12.1786ZM8.03616 16.2608C7.89322 15.7274 8.2098 15.179 8.74327 15.0361L8.75195 15.0338C9.28541 14.8908 9.83375 15.2074 9.97669 15.7409C10.1196 16.2744 9.80305 16.8227 9.26958 16.9656L9.26091 16.968C8.72744 17.1109 8.1791 16.7943 8.03616 16.2608ZM14.7433 17.0361C14.2098 17.179 13.8932 17.7274 14.0362 18.2608C14.1791 18.7943 14.7274 19.1109 15.2609 18.968L15.2696 18.9656C15.8031 18.8227 16.1196 18.2744 15.9767 17.7409C15.8337 17.2074 15.2854 16.8908 14.7519 17.0338L14.7433 17.0361Z',
};

export const IconTestTube01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-stroke-rounded IconTestTube01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTestTube01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-duotone-rounded IconTestTube01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTestTube01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-twotone-rounded IconTestTube01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTestTube01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-solid-rounded IconTestTube01SolidRounded"
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

export const IconTestTube01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-bulk-rounded IconTestTube01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTestTube01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-stroke-sharp IconTestTube01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTestTube01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="test-tube-01-solid-sharp IconTestTube01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTestTube01: TheIconSelfPack = {
  name: 'TestTube01',
  StrokeRounded: IconTestTube01StrokeRounded,
  DuotoneRounded: IconTestTube01DuotoneRounded,
  TwotoneRounded: IconTestTube01TwotoneRounded,
  SolidRounded: IconTestTube01SolidRounded,
  BulkRounded: IconTestTube01BulkRounded,
  StrokeSharp: IconTestTube01StrokeSharp,
  SolidSharp: IconTestTube01SolidSharp,
};
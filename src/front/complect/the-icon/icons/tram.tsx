import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 2H14M19 2H14M14 2L12 5',
  d2: 'M8 20L7 22',
  d3: 'M16 20L17 22',
  d4: 'M5 13V12C5 8.70017 5 7.05025 6.02513 6.02513C7.05025 5 8.70017 5 12 5C15.2998 5 16.9497 5 17.9749 6.02513C19 7.05025 19 8.70017 19 12V13C19 16.2998 19 17.9497 17.9749 18.9749C16.9497 20 15.2998 20 12 20C8.70017 20 7.05025 20 6.02513 18.9749C5 17.9497 5 16.2998 5 13Z',
  d5: 'M5 14C5 14 8.26667 15 12 15C15.7333 15 19 14 19 14',
  d6: 'M16.5 17H18.5',
  d7: 'M5.5 8H18.5',
  d8: 'M5.5 17H7.5',
  d9: 'M6.02779 18.9749C7.05292 20 8.70283 20 12.0027 20C15.3025 20 16.9524 20 17.9775 18.9749C18.8934 18.059 18.991 16.6444 19.0014 14C13.8004 15.6 7.50267 14.6667 5.00391 14C5.01431 16.6444 5.11191 18.059 6.02779 18.9749Z',
  d10: 'M17.976 6.02513C16.9509 5 15.301 5 12.0011 5C8.70129 5 7.05138 5 6.02625 6.02513C5.54278 6.5086 5.28732 7.13105 5.15234 8H18.8499C18.7149 7.13105 18.4595 6.5086 17.976 6.02513Z',
  d11: 'M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H14.5352L12.8321 5.5547C12.5257 6.01423 11.9048 6.1384 11.4453 5.83205C10.9858 5.5257 10.8616 4.90483 11.1679 4.4453L12.1315 3H5C4.44772 3 4 2.55228 4 2Z',
  d12: 'M8.44743 19.1058C8.94141 19.3528 9.14164 19.9535 8.89465 20.4474L7.89465 22.4474C7.64766 22.9414 7.04698 23.1416 6.55301 22.8946C6.05903 22.6477 5.8588 22.047 6.10579 21.553L7.10579 19.553C7.35278 19.059 7.95345 18.8588 8.44743 19.1058ZM15.553 19.1058C16.047 18.8588 16.6477 19.059 16.8946 19.553L17.8946 21.553C18.1416 22.047 17.9414 22.6477 17.4474 22.8946C16.9535 23.1416 16.3528 22.9414 16.1058 22.4474L15.1058 20.4474C14.8588 19.9535 15.059 19.3528 15.553 19.1058Z',
  d13: 'M11.9302 4.25H12.0698H12.0698C13.6088 4.24997 14.8616 4.24995 15.8495 4.38303C16.8803 4.52187 17.7666 4.82138 18.4732 5.52926C19.1797 6.23714 19.4786 7.12519 19.6172 8.15788C19.7501 9.14773 19.75 10.4028 19.75 11.9448V13.0552C19.75 14.0544 19.75 14.9331 19.7139 15.6973C19.7017 15.9552 19.6956 16.0842 19.6087 16.1671C19.5218 16.25 19.3896 16.25 19.1254 16.25H17.75C17.3358 16.25 17 16.5858 17 17C17 17.4142 17.3358 17.75 17.75 17.75H18.649C19.0216 17.75 19.2079 17.75 19.2961 17.8901C19.3844 18.0302 19.3112 18.1831 19.1648 18.4887C18.9937 18.8459 18.7692 19.1742 18.4732 19.4707C17.7666 20.1786 16.8803 20.4781 15.8495 20.617C14.8615 20.7501 13.6088 20.75 12.0698 20.75H11.9302C10.3912 20.75 9.13847 20.7501 8.15048 20.617C7.11975 20.4781 6.23338 20.1786 5.52684 19.4707C5.2308 19.1742 5.00633 18.8459 4.83522 18.4887C4.68883 18.1831 4.61564 18.0302 4.70389 17.8901C4.79214 17.75 4.97842 17.75 5.35098 17.75H6.25C6.66421 17.75 7 17.4142 7 17C7 16.5858 6.66421 16.25 6.25 16.25H4.87459C4.61036 16.25 4.47825 16.25 4.39132 16.1671C4.30439 16.0842 4.2983 15.9552 4.2861 15.6973C4.24997 14.9331 4.24998 14.0544 4.25 13.0553V13.0552V11.9447V11.9447C4.24997 10.4028 4.24995 9.14772 4.38278 8.15788C4.52136 7.12519 4.8203 6.23714 5.52684 5.52926C6.23338 4.82138 7.11974 4.52187 8.15048 4.38303C9.13844 4.24995 10.3912 4.24997 11.9302 4.25H11.9302ZM6.33535 8.83365C6.42243 8.75 6.55211 8.75 6.81148 8.75H17.1894C17.4488 8.75 17.5785 8.75 17.6656 8.83364C17.7526 8.91729 17.7577 9.04283 17.7678 9.29392C17.8063 10.2505 17.8118 11.8782 17.8126 13.0623C17.8127 13.2905 17.8128 13.4046 17.7464 13.4871C17.68 13.5696 17.57 13.5935 17.35 13.6414C17.1665 13.6814 16.9681 13.7226 16.7566 13.7638C15.5033 14.0079 13.8037 14.2499 12 14.2499C10.1963 14.2499 8.49672 14.0079 7.24342 13.7638C7.03232 13.7226 6.83436 13.6815 6.65116 13.6416C6.43117 13.5937 6.32117 13.5698 6.25478 13.4873C6.18838 13.4049 6.18845 13.2908 6.18859 13.0625C6.18933 11.8783 6.19466 10.2505 6.23313 9.29392C6.24322 9.04284 6.24827 8.9173 6.33535 8.83365Z',
  d14: 'M12.0698 4.25H11.9302H11.9302C10.3912 4.24997 9.13844 4.24995 8.15048 4.38303C7.11974 4.52187 6.23338 4.82138 5.52684 5.52926C4.8203 6.23714 4.52136 7.12519 4.38278 8.15788C4.24995 9.14772 4.24997 10.4028 4.25 11.9447V11.9447V13.0552V13.0553C4.24997 14.5971 4.24995 15.8523 4.38278 16.8421C4.52136 17.8748 4.8203 18.7629 5.52684 19.4707C6.23338 20.1786 7.11975 20.4781 8.15048 20.617C9.13847 20.7501 10.3912 20.75 11.9302 20.75H12.0698C13.6088 20.75 14.8615 20.7501 15.8495 20.617C16.8803 20.4781 17.7666 20.1786 18.4732 19.4707C19.1797 18.7629 19.4786 17.8748 19.6172 16.8421C19.7501 15.8523 19.75 14.5971 19.75 13.0552V11.9448C19.75 10.4028 19.7501 9.14773 19.6172 8.15788C19.4786 7.12519 19.1797 6.23714 18.4732 5.52926C17.7666 4.82138 16.8803 4.52187 15.8495 4.38303C14.8616 4.24995 13.6088 4.24997 12.0698 4.25H12.0698Z',
  d15: 'M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H14.5352L13.697 4.25721C13.1949 4.24998 12.6529 4.24999 12.0698 4.25H11.9302C11.7138 4.25 11.5031 4.24999 11.2979 4.25036L12.1315 3H5C4.44772 3 4 2.55228 4 2ZM6.74748 20.2696L6.10579 21.553C5.8588 22.047 6.05903 22.6477 6.55301 22.8946C7.04698 23.1416 7.64766 22.9414 7.89465 22.4474L8.77732 20.6821C8.5576 20.665 8.34871 20.6437 8.15048 20.617C7.64699 20.5492 7.17794 20.443 6.74748 20.2696ZM15.2231 20.682L16.1058 22.4474C16.3528 22.9414 16.9535 23.1416 17.4474 22.8946C17.9414 22.6477 18.1416 22.047 17.8946 21.553L17.2529 20.2695C16.8223 20.4429 16.3532 20.5491 15.8495 20.617C15.6514 20.6437 15.4427 20.665 15.2231 20.682Z',
  d16: 'M6.81235 8.75C6.55299 8.75 6.4233 8.75 6.33622 8.83365C6.24914 8.9173 6.24409 9.04284 6.234 9.29392C6.19553 10.2505 6.1902 11.8783 6.18947 13.0625C6.18932 13.2908 6.18925 13.4049 6.25565 13.4873C6.32204 13.5698 6.43204 13.5937 6.65203 13.6416C6.83523 13.6815 7.03319 13.7226 7.24429 13.7638C8.49759 14.0079 10.1972 14.2499 12.0009 14.2499C13.8046 14.2499 15.5042 14.0079 16.7575 13.7638C16.969 13.7226 17.1673 13.6814 17.3509 13.6414C17.5709 13.5935 17.6809 13.5696 17.7473 13.4871C17.8137 13.4046 17.8136 13.2905 17.8134 13.0623C17.8127 11.8782 17.8072 10.2504 17.7687 9.29392C17.7586 9.04283 17.7535 8.91729 17.6664 8.83364C17.5794 8.75 17.4497 8.75 17.1903 8.75H6.81235Z',
  d17: 'M19.6791 16.25H17.7497C17.3355 16.25 16.9997 16.5858 16.9997 17C16.9997 17.4142 17.3355 17.75 17.7497 17.75H19.4372C19.5169 17.4616 19.5744 17.1587 19.6169 16.8421C19.6421 16.6543 19.6625 16.457 19.6791 16.25ZM4.56224 17.75H6.24969C6.66391 17.75 6.99969 17.4142 6.99969 17C6.99969 16.5858 6.66391 16.25 6.24969 16.25H4.32031C4.33686 16.457 4.35727 16.6543 4.38247 16.8421C4.42495 17.1587 4.4825 17.4616 4.56224 17.75Z',
  d18: 'M8 19L7 22M16 19L17 22',
  d19: 'M19 19V5H5V19H19Z',
  d20: 'M5 13H19',
  d21: 'M16.5 16H19M5 16H7.5',
  d22: 'M12.1315 3.25H5V1.25H19V3.25H14.5352L12.8321 5.8047L11.1679 4.6953L12.1315 3.25Z',
  d23: 'M6.05176 22.1177L7.05176 19.1177L8.94912 19.7501L7.94912 22.7501L6.05176 22.1177ZM16.0518 22.7501L15.0518 19.7501L16.9491 19.1177L17.9491 22.1177L16.0518 22.7501Z',
  d24: 'M5 4.25C4.44772 4.25 4 4.69772 4 5.25V15.5H6.5V17H4V19.25C4 19.8023 4.44772 20.25 5 20.25H19C19.5523 20.25 20 19.8023 20 19.25V17H17.5V15.5H20V5.25C20 4.69772 19.5523 4.25 19 4.25H5ZM6 12V6.25H18V12H6Z',
};

export const IconTramStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-stroke-rounded IconTramStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTramDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-duotone-rounded IconTramDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTramTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-twotone-rounded IconTramTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTramSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-solid-rounded IconTramSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTramBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-bulk-rounded IconTramBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTramStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-stroke-sharp IconTramStrokeSharp"
    >
      <path 
        d={d.d1} 
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
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTramSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tram-solid-sharp IconTramSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTram: TheIconSelfPack = {
  name: 'Tram',
  StrokeRounded: IconTramStrokeRounded,
  DuotoneRounded: IconTramDuotoneRounded,
  TwotoneRounded: IconTramTwotoneRounded,
  SolidRounded: IconTramSolidRounded,
  BulkRounded: IconTramBulkRounded,
  StrokeSharp: IconTramStrokeSharp,
  SolidSharp: IconTramSolidSharp,
};
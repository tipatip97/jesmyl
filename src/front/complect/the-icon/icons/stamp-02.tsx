import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.99128 15C9.99128 14.0015 9.90819 11.6348 8.15796 8.26951C7.38157 6.77671 7.39203 5.2142 7.6806 3.98372C7.77486 3.58177 8.01266 3.37651 8.33553 3.15508C8.70845 2.89932 8.89491 2.77143 9.08803 2.66275C9.70688 2.31447 10.393 2.10186 11.1006 2.03909C11.6881 1.98697 12.3119 1.98697 12.8994 2.03909C13.607 2.10186 14.2931 2.31447 14.912 2.66275C15.1051 2.77143 15.2916 2.89932 15.6645 3.15508C15.9873 3.37651 16.2251 3.58177 16.3194 3.98372C16.608 5.2142 16.6184 6.77671 15.842 8.26951C14.0918 11.6348 14.0087 14.0015 14.0087 15',
  d2: 'M7.0883 17.7351C7.52832 16.4151 7.74832 15.755 8.2721 15.3775C8.79587 15 9.49159 15 10.883 15H13.117C14.5084 15 15.2041 15 15.7279 15.3775C16.2517 15.755 16.4717 16.4151 16.9117 17.7351L17 18H7L7.0883 17.7351Z',
  d3: 'M4.25262 20.1823C4.46592 19.645 4.57257 19.3764 4.72208 19.1551C5.10369 18.5902 5.70937 18.1937 6.40325 18.0545C6.67511 18 6.97885 18 7.58633 18L16.4137 18C17.0212 18 17.3249 18 17.5967 18.0545C18.2906 18.1937 18.8963 18.5902 19.2779 19.1551C19.4274 19.3764 19.5341 19.645 19.7474 20.1823C19.9125 20.5983 19.9951 20.8063 19.9996 20.9744C20.0115 21.4099 19.7234 21.8025 19.2876 21.945C19.1194 22 18.8842 22 18.4139 22H5.5861C5.11579 22 4.88064 22 4.71244 21.945C4.27658 21.8025 3.98853 21.4099 4.00035 20.9744C4.00491 20.8063 4.08748 20.5983 4.25262 20.1823Z',
  d4: 'M9.99128 15C9.99128 14.0015 9.90819 11.6348 8.15796 8.26951C7.38157 6.77671 7.39203 5.2142 7.6806 3.98372C7.77486 3.58177 8.01266 3.37651 8.33553 3.15508L8.33554 3.15507C8.70844 2.89932 8.89491 2.77143 9.08803 2.66275C9.70688 2.31447 10.393 2.10186 11.1006 2.03909C11.6881 1.98697 12.3119 1.98697 12.8994 2.03909C13.607 2.10186 14.2931 2.31447 14.912 2.66275C15.1051 2.77143 15.2916 2.89932 15.6645 3.15508C15.9873 3.37651 16.2251 3.58177 16.3194 3.98372C16.608 5.2142 16.6184 6.77671 15.842 8.26951C14.0918 11.6348 14.0087 14.0015 14.0087 15H9.99128Z',
  d5: 'M11.0342 1.29202C11.6658 1.23599 12.334 1.23599 12.9656 1.29202C13.7792 1.3642 14.5681 1.60865 15.2797 2.00915C15.5021 2.1343 15.7142 2.27976 16.0587 2.51606L16.0886 2.53657C16.4522 2.78595 16.8891 3.12852 17.0495 3.81247C17.3674 5.1681 17.3873 6.9237 16.5073 8.61557C14.827 11.8465 14.7586 14.0867 14.7586 15C14.7586 15.4142 14.4228 15.75 14.0086 15.75H9.99119C9.57697 15.75 9.24119 15.4142 9.24119 15C9.24119 14.0867 9.17285 11.8465 7.49248 8.61557C6.61255 6.9237 6.6324 5.16811 6.95031 3.81248C7.11071 3.12852 7.54763 2.78594 7.91123 2.53657L7.94116 2.51604C8.28566 2.27975 8.49772 2.13429 8.7201 2.00915C9.43174 1.60865 10.2206 1.3642 11.0342 1.29202Z',
  d6: 'M10.8309 14C10.8483 14 10.8658 14 10.8833 14L13.1696 14C13.8205 14 14.391 13.9999 14.8615 14.0536C15.3702 14.1117 15.8617 14.2411 16.3129 14.5663C16.7641 14.8915 17.0422 15.3169 17.2582 15.7811C17.4579 16.2104 17.6383 16.7516 17.8441 17.3691L17.949 17.6838C18.1236 18.2077 17.8404 18.774 17.3165 18.9487C16.7926 19.1233 16.2262 18.8402 16.0516 18.3162L15.9633 18.0513C15.736 17.3695 15.5906 16.9382 15.4448 16.6247C15.3098 16.3344 15.216 16.2411 15.1435 16.1888C15.0709 16.1365 14.9527 16.077 14.6346 16.0407C14.2911 16.0015 13.836 16 13.1172 16H10.8833C10.1646 16 9.70946 16.0015 9.36589 16.0407C9.04788 16.077 8.92965 16.1365 8.85708 16.1888C8.78451 16.2411 8.69076 16.3344 8.55575 16.6247C8.40989 16.9382 8.26455 17.3695 8.03726 18.0513L7.94895 18.3162C7.77431 18.8402 7.20799 19.1233 6.68404 18.9487C6.1601 18.774 5.87694 18.2077 6.05159 17.6838L6.13989 17.4189C6.14543 17.4022 6.15096 17.3857 6.15646 17.3691C6.36225 16.7517 6.54262 16.2104 6.74237 15.7811C6.95831 15.3169 7.23646 14.8915 7.68766 14.5663C8.13886 14.2411 8.63038 14.1117 9.13903 14.0536C9.60954 13.9999 10.18 14 10.8309 14Z',
  d7: 'M7.50989 17.75H16.4901C17.0238 17.7499 17.398 17.7498 17.7443 17.8129C18.6232 17.9732 19.4028 18.432 19.8994 19.1002C20.0954 19.3639 20.2305 19.6737 20.4157 20.0982C20.4923 20.2736 20.5965 20.5122 20.6449 20.6438C20.6948 20.7793 20.7441 20.9402 20.7494 21.1173C20.7708 21.8362 20.2491 22.4498 19.5206 22.6663C19.3418 22.7194 19.1627 22.7356 19.0012 22.7429C18.8438 22.75 18.6516 22.75 18.4315 22.75H5.56854C5.3484 22.75 5.15622 22.75 4.99885 22.7429C4.83736 22.7356 4.65819 22.7194 4.47943 22.6663C3.75096 22.4498 3.22918 21.8362 3.25064 21.1173C3.25592 20.9402 3.30518 20.7793 3.35509 20.6438C3.40355 20.5122 3.50772 20.2737 3.58434 20.0982L3.58434 20.0982C3.76952 19.6737 3.90462 19.364 4.10063 19.1002C4.59722 18.432 5.37678 17.9732 6.25575 17.8129C6.60198 17.7498 6.97626 17.7499 7.50989 17.75Z',
  d8: 'M10 15C10 14.0015 9.96628 11.6348 8.21867 8.26951C7.44345 6.77671 7.5609 4 7.5609 4C8.54086 2.88272 10.0638 2 12.055 2C14.0462 2 15.5681 2.88272 16.5481 4C16.5481 4 16.6665 6.77671 15.8912 8.26951C14.1436 11.6348 14.1099 14.0015 14.1099 15',
  d9: 'M16 15H8L7 18H17L16 15Z',
  d10: 'M19 18H5L4 22H20L19 18Z',
  d11: 'M6.99709 3.50558C8.1036 2.24401 9.8249 1.25012 12.055 1.25012C14.2852 1.25012 16.0055 2.24412 17.1119 3.50558L17.2862 3.7042C17.288 3.78871 17.305 4.31115 17.3045 4.45999C17.3034 4.75699 17.2936 5.16947 17.2582 5.63222C17.1898 6.52715 17.019 7.72538 16.5569 8.61529C14.8831 11.8383 14.8599 14.0743 14.8599 15.0001V15.7501H9.25003V15.0001C9.25003 14.0743 9.22684 11.8383 7.55311 8.61529C7.09102 7.72548 6.91993 6.52734 6.85131 5.63242C6.81582 5.16969 6.80586 4.75722 6.8047 4.46022C6.80412 4.31139 6.82106 3.78881 6.82288 3.70431L6.99709 3.50558Z',
  d12: 'M7.99946 14.2501C7.56903 14.2501 7.1869 14.5256 7.05078 14.9339L6.16005 17.6061H5.00001C4.66224 17.6061 4.36614 17.8319 4.27675 18.1576L3.27675 21.8015C3.21483 22.0271 3.26175 22.2687 3.40362 22.4548C3.54548 22.6408 3.76604 22.75 4.00001 22.75H20C20.234 22.75 20.4545 22.6408 20.5964 22.4548C20.7383 22.2687 20.7852 22.0271 20.7233 21.8015L19.7233 18.1576C19.6339 17.8319 19.3378 17.6061 19 17.6061H17.8389L16.9481 14.9339C16.812 14.5256 16.4299 14.2501 15.9995 14.2501H7.99946ZM15.7307 17.6061L15.2787 16.2501H8.72022L8.26824 17.6061H15.7307Z',
} as const;

export const IconStamp02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-stroke-rounded IconStamp02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStamp02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-duotone-rounded IconStamp02DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconStamp02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-twotone-rounded IconStamp02TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStamp02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-solid-rounded IconStamp02SolidRounded"
    >
      <path 
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

export const IconStamp02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-bulk-rounded IconStamp02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStamp02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-stroke-sharp IconStamp02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStamp02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stamp-02-solid-sharp IconStamp02SolidSharp"
    >
      <path 
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

export const iconPackOfStamp02: TheIconSelfPack = {
  name: 'Stamp02',
  StrokeRounded: IconStamp02StrokeRounded,
  DuotoneRounded: IconStamp02DuotoneRounded,
  TwotoneRounded: IconStamp02TwotoneRounded,
  SolidRounded: IconStamp02SolidRounded,
  BulkRounded: IconStamp02BulkRounded,
  StrokeSharp: IconStamp02StrokeSharp,
  SolidSharp: IconStamp02SolidSharp,
};
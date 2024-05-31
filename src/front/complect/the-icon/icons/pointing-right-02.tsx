import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 19.8917H3.61802C4.54364 19.8917 5.51198 20.6158 6.31081 20.9983C7.78747 21.7055 10.6774 22.6731 12.0382 21.3209C14.1833 19.1893 14.576 16.2081 14.5 14.4999L20.25 14.4999C21.2165 14.4999 22 13.7164 22 12.7499C22 11.7834 21.2165 10.9999 20.25 10.9999L13.9999 10.9999M13.9999 10.9999L10 10.9999M13.9999 10.9999C13.9823 10.9765 11.8247 8.12164 10.3914 7.62367C9.10844 7.17793 7.96635 8.03229 6.90859 8.67457C6.08953 9.1719 4.06844 11 2.99509 11H2',
  d2: 'M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7',
  d3: 'M6.31081 20.9983C7.78747 21.7055 10.6774 22.6731 12.0382 21.3209C14.1833 19.1893 14.576 16.2081 14.5 14.4999L20.25 14.4999C21.2165 14.4999 22 13.7164 22 12.7499C22 11.7834 21.2165 10.9999 20.25 10.9999L13.9999 10.9999C13.9823 10.9765 11.8247 8.12164 10.3914 7.62367C9.10844 7.17793 7.96635 8.03229 6.90859 8.67457C6.08953 9.1719 4.06844 11 2.99509 11L2 11L2 19.8917L3.61802 19.8917C4.54364 19.8917 5.51198 20.6158 6.31081 20.9983Z',
  d4: 'M13.277 8.98075C13.7399 9.48092 14.1316 9.95666 14.3657 10.2502L20.25 10.2502C21.6307 10.2502 22.75 11.3695 22.75 12.7502C22.75 14.1309 21.6307 15.2502 20.25 15.2502L15.2525 15.2502C15.1894 17.1141 14.6138 19.8192 12.5668 21.8533C11.6249 22.7893 10.2471 22.8447 9.1069 22.674C7.93015 22.4978 6.7641 22.0473 5.98688 21.6751C5.76221 21.5675 4.89071 21.0925 4.67654 20.9728C4.24372 20.7563 3.89992 20.6421 3.61802 20.6421L3.61799 20.6421C3.35271 20.6421 3.08205 20.6421 2.87858 20.625C2.65905 20.6066 2.41913 20.5643 2.18353 20.44C1.87161 20.2754 1.61668 20.0205 1.45214 19.7086C1.32786 19.473 1.28555 19.2331 1.26708 19.0135C1.24996 18.81 1.24998 18.5664 1.25 18.3011L1.25 11.9955C1.25 11.0317 2.0313 10.2504 2.99509 10.2504C3.08102 10.2504 3.27813 10.2039 3.60495 10.0381C3.91201 9.88234 4.25757 9.66137 4.61715 9.4097C4.93702 9.18583 5.25121 8.94969 5.54681 8.72752L5.54689 8.72746C5.85865 8.4934 6.57195 7.99856 6.81502 7.85096C7.24527 7.58257 7.75666 7.26357 8.27987 7.04803C8.96136 6.76729 9.76557 6.61264 10.6376 6.91559C11.1262 7.08536 11.6137 7.42766 12.0387 7.78311C12.4761 8.14907 12.9047 8.57835 13.277 8.98075Z',
  d5: 'M15.75 5.5061C15.1977 5.5061 14.75 5.05839 14.75 4.5061C14.75 3.95382 15.1977 3.5061 15.75 3.5061L18.25 3.5061L18.25 2.91184C18.2499 2.73621 18.2497 2.52056 18.2718 2.34412L18.2722 2.34077C18.288 2.21432 18.3598 1.63828 18.9254 1.36392C19.4923 1.08896 19.9924 1.3909 20.1006 1.45622L20.5691 1.79536C20.9449 2.08999 21.4594 2.49569 21.8504 2.87612C22.0455 3.06595 22.2467 3.28322 22.4056 3.51412C22.5468 3.71938 22.75 4.06958 22.75 4.50024C22.75 4.93091 22.5468 5.2811 22.4056 5.48636C22.2467 5.71727 22.0455 5.93454 21.8504 6.12437C21.4594 6.5048 20.9449 6.91049 20.5691 7.20512L20.1006 7.54427C19.9924 7.60959 19.4922 7.91153 18.9254 7.63657C18.3598 7.36221 18.288 6.78616 18.2722 6.65972L18.2718 6.65637C18.2497 6.47993 18.2499 6.26428 18.25 6.08864L18.25 5.5061L15.75 5.5061Z',
  d6: 'M2 19.8917H4L6.31081 20.9983C7.78747 21.7055 10.6774 22.6731 12.0382 21.3209C14.1833 19.1893 14.576 16.2081 14.5 14.4999L20.25 14.4999C21.2165 14.4999 22 13.7164 22 12.7499C22 11.7834 21.2165 10.9999 20.25 10.9999L13.9999 10.9999M13.9999 10.9999L10 10.9999M13.9999 10.9999C13.9823 10.9765 11.8247 8.12164 10.3914 7.62367C9.10844 7.17793 7.96635 8.03229 6.90859 8.67457C6.08953 9.1719 3.5 11 3.5 11H2',
  d7: 'M16 4.5L21.3521 4.5M19.5 2L22 4.5L19.5 7',
  d8: 'M6.81399 7.60051C6.71041 7.66512 6.61155 7.72679 6.51835 7.78338C6.08541 8.04627 5.21268 8.64223 4.4692 9.15708C4.09279 9.41772 3.74227 9.66264 3.48592 9.84234L3.26149 9.99989H1.24902V20.3916H3.82871L5.9859 21.4246C6.76312 21.7968 7.92917 22.2473 9.10592 22.4235C10.2461 22.5942 11.6239 22.5388 12.5659 21.6028C14.6129 19.5688 15.1884 16.8636 15.2515 14.9997H20.249C21.6297 14.9997 22.749 13.8805 22.749 12.4997C22.749 11.119 21.6297 9.99974 20.249 9.99974L14.3647 9.99974C14.1306 9.70617 13.7389 9.23044 13.276 8.73026C12.9037 8.32786 12.4752 7.89859 12.0377 7.53263C11.6128 7.17717 11.1252 6.83487 10.6366 6.6651C9.76459 6.36215 8.96038 6.5168 8.2789 6.79754C7.75569 7.01308 7.24423 7.33212 6.81399 7.60051Z',
  d9: 'M19.545 1.5L22.7521 4.70711L19.545 7.91421L18.1308 6.5L18.9237 5.70711L15.3379 5.70711L15.3379 3.70711L18.9237 3.70711L18.1308 2.91421L19.545 1.5Z',
} as const;

export const IconPointingRight02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-stroke-rounded IconPointingRight02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingRight02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-duotone-rounded IconPointingRight02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconPointingRight02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-twotone-rounded IconPointingRight02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-solid-rounded IconPointingRight02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-bulk-rounded IconPointingRight02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-stroke-sharp IconPointingRight02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-02-solid-sharp IconPointingRight02SolidSharp"
    >
      <path 
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

export const iconPackOfPointingRight02: TheIconSelfPack = {
  name: 'PointingRight02',
  StrokeRounded: IconPointingRight02StrokeRounded,
  DuotoneRounded: IconPointingRight02DuotoneRounded,
  TwotoneRounded: IconPointingRight02TwotoneRounded,
  SolidRounded: IconPointingRight02SolidRounded,
  BulkRounded: IconPointingRight02BulkRounded,
  StrokeSharp: IconPointingRight02StrokeSharp,
  SolidSharp: IconPointingRight02SolidSharp,
};
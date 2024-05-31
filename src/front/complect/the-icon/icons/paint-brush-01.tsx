import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.89089 20.8727L3 21L3.12727 20.1091C3.32086 18.754 3.41765 18.0764 3.71832 17.4751C4.01899 16.8738 4.50296 16.3898 5.47091 15.4218L16.9827 3.91009C17.4062 3.48654 17.618 3.27476 17.8464 3.16155C18.2811 2.94615 18.7914 2.94615 19.2261 3.16155C19.4546 3.27476 19.6663 3.48654 20.0899 3.91009C20.5135 4.33365 20.7252 4.54543 20.8385 4.77389C21.0539 5.20856 21.0539 5.71889 20.8385 6.15356C20.7252 6.38201 20.5135 6.59379 20.0899 7.01735L8.57816 18.5291C7.61022 19.497 7.12625 19.981 6.52491 20.2817C5.92357 20.5823 5.246 20.6791 3.89089 20.8727Z',
  d2: 'M6 15L9 18M8.5 12.5L11.5 15.5',
  d3: 'M19.2256 3.16155C19.4541 3.27476 19.6659 3.48654 20.0894 3.91009C20.513 4.33365 20.7248 4.54543 20.838 4.77389C21.0534 5.20856 21.0534 5.71889 20.838 6.15356C20.7248 6.38201 20.513 6.59379 20.0894 7.01734L20.0894 7.01735L11.5545 15.5523L8.4707 12.4216L16.9822 3.91009C17.4057 3.48654 17.6175 3.27476 17.846 3.16155C18.2806 2.94615 18.791 2.94615 19.2256 3.16155Z',
  d4: 'M3.89089 20.8727L3 21L3.12727 20.1091C3.32086 18.754 3.41765 18.0764 3.71832 17.4751C4.01899 16.8738 4.50296 16.3898 5.47091 15.4218L5.89274 15L9 18.1073L8.57816 18.5291L8.57816 18.5291C7.61022 19.497 7.12625 19.981 6.52491 20.2817C5.92358 20.5823 5.24602 20.6791 3.89094 20.8727L3.89089 20.8727Z',
  d5: 'M19.5591 2.48953C18.9146 2.17016 18.1579 2.17016 17.5134 2.48953C17.1713 2.65908 16.8751 2.95604 16.5275 3.30449L8.87048 10.9615C8.67049 11.1615 8.57049 11.2615 8.57049 11.3858C8.57049 11.5101 8.67049 11.6101 8.87048 11.8101L12.1899 15.1295C12.3899 15.3295 12.4899 15.4295 12.6142 15.4295C12.7384 15.4295 12.8385 15.3295 13.0385 15.1295L20.6955 7.47253C21.044 7.12494 21.3409 6.82872 21.5105 6.48657C21.8299 5.84207 21.8299 5.08538 21.5105 4.44087C21.3409 4.09872 20.9687 3.72735 20.6202 3.37976C20.2727 3.03131 19.9013 2.65909 19.5591 2.48953Z',
  d6: 'M11.1293 17.0387C11.3293 16.8387 11.4293 16.7387 11.4293 16.6145C11.4293 16.4902 11.3293 16.3902 11.1293 16.1902L7.80983 12.8707C7.60983 12.6707 7.50983 12.5707 7.38557 12.5707C7.2613 12.5707 7.1613 12.6707 6.9613 12.8707L6.37049 13.4616C6.1705 13.6616 6.0705 13.7616 6.0705 13.8858C6.0705 14.0101 6.1705 14.1101 6.3705 14.3101L9.68991 17.6295C9.88991 17.8295 9.98991 17.9295 10.1142 17.9295C10.2384 17.9295 10.3384 17.8295 10.5384 17.6295L11.1293 17.0387Z',
  d7: 'M9.01904 19.1489C9.03808 19.1299 9.03808 19.099 9.01904 19.08L4.92006 14.981C4.90102 14.9619 4.87014 14.9619 4.8511 14.981C3.96886 15.8628 3.40327 16.4282 3.04751 17.1397C2.69175 17.8512 2.57883 18.6429 2.40269 19.8778L2.25755 20.8939C2.22416 21.1276 2.30275 21.3634 2.46968 21.5303C2.6366 21.6973 2.87238 21.7758 3.10607 21.7425L4.1223 21.5973C5.35715 21.4212 6.14882 21.3083 6.86033 20.9525C7.57185 20.5967 8.13719 20.0312 9.01904 19.1489Z',
  d8: 'M9.01904 19.1471C9.03808 19.128 9.03808 19.0972 9.01904 19.0781L4.92006 14.9791C4.90102 14.9601 4.87014 14.9601 4.8511 14.9791C3.96886 15.861 3.40327 16.4263 3.04751 17.1378C2.69175 17.8494 2.57883 18.641 2.40269 19.8759L2.25755 20.8921C2.22416 21.1258 2.30275 21.3616 2.46968 21.5285C2.6366 21.6954 2.87238 21.774 3.10607 21.7406L4.1223 21.5955C5.35715 21.4193 6.14882 21.3064 6.86033 20.9507C7.57185 20.5949 8.13719 20.0293 9.01904 19.1471Z',
  d9: 'M19.559 2.48953C18.9145 2.17016 18.1578 2.17016 17.5133 2.48953C17.1711 2.65908 16.8749 2.95604 16.5273 3.30449L8.87031 10.9615C8.67031 11.1615 8.57031 11.2615 8.57031 11.3858C8.57031 11.5101 8.67031 11.6101 8.87031 11.8101L12.1897 15.1295C12.3897 15.3295 12.4897 15.4295 12.614 15.4295C12.7383 15.4295 12.8383 15.3295 13.0383 15.1295L20.6953 7.47253C21.0438 7.12494 21.3407 6.82872 21.5103 6.48657C21.8297 5.84207 21.8297 5.08538 21.5103 4.44087C21.3407 4.09872 20.9685 3.72735 20.6201 3.37976C20.2725 3.03131 19.9011 2.65909 19.559 2.48953Z',
  d10: 'M11.1291 17.0383C11.3291 16.8383 11.4291 16.7383 11.4291 16.614C11.4291 16.4898 11.3291 16.3898 11.1291 16.1898L7.80965 12.8703C7.60965 12.6703 7.50965 12.5703 7.38538 12.5703C7.26112 12.5703 7.16112 12.6703 6.96112 12.8703L6.37031 13.4611C6.17031 13.6611 6.07031 13.7611 6.07031 13.8854C6.07031 14.0097 6.17031 14.1097 6.37031 14.3097L9.68973 17.6291C9.88973 17.8291 9.98973 17.9291 10.114 17.9291C10.2383 17.9291 10.3383 17.8291 10.5383 17.6291L11.1291 17.0383Z',
  d11: 'M5.99609 15L8.99265 18M8.49323 12.5L11.4898 15.5',
  d12: 'M2.9873 17.999L17.9804 3.00488C17.9843 3.00098 17.9906 3.00098 17.9945 3.00488L20.9819 5.99579C20.9858 5.9997 20.9858 6.00604 20.9819 6.00994L5.98971 20.9977H2.9873V17.999Z',
  d13: 'M18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967L8.49956 11.4398L12.5599 15.5008L21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L18.5303 2.46967Z',
  d14: 'M11.4992 16.5615L7.4389 12.5004L5.99956 13.9398L10.0599 18.0008L11.4992 16.5615Z',
  d15: 'M8.9992 19.0615L4.9389 15.0004L2.25 17.6893V21.7501L6.31067 21.75L8.9992 19.0615Z',
} as const;

export const IconPaintBrush01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-stroke-rounded IconPaintBrush01StrokeRounded"
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

export const IconPaintBrush01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-duotone-rounded IconPaintBrush01DuotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconPaintBrush01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-twotone-rounded IconPaintBrush01TwotoneRounded"
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

export const IconPaintBrush01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-solid-rounded IconPaintBrush01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPaintBrush01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-bulk-rounded IconPaintBrush01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-stroke-sharp IconPaintBrush01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-01-solid-sharp IconPaintBrush01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPaintBrush01: TheIconSelfPack = {
  name: 'PaintBrush01',
  StrokeRounded: IconPaintBrush01StrokeRounded,
  DuotoneRounded: IconPaintBrush01DuotoneRounded,
  TwotoneRounded: IconPaintBrush01TwotoneRounded,
  SolidRounded: IconPaintBrush01SolidRounded,
  BulkRounded: IconPaintBrush01BulkRounded,
  StrokeSharp: IconPaintBrush01StrokeSharp,
  SolidSharp: IconPaintBrush01SolidSharp,
};
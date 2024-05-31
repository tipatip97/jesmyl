import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.03658 10.8665L10.0925 12.9957C10.2364 13.2921 10.6204 13.5764 10.9444 13.6309L12.8582 13.9515C14.082 14.1571 14.37 15.0524 13.4881 15.9355L12.0003 17.4356C11.7483 17.6897 11.6103 18.1796 11.6883 18.5305L12.1142 20.3875C12.4502 21.8574 11.6763 22.426 10.3864 21.6578L8.59263 20.5871C8.26867 20.3935 7.73473 20.3935 7.40476 20.5871L5.61096 21.6578C4.3271 22.426 3.54719 21.8513 3.88315 20.3875L4.3091 18.5305C4.3871 18.1796 4.24911 17.6897 3.99714 17.4356L2.5093 15.9355C1.6334 15.0524 1.91537 14.1571 3.13923 13.9515L5.05302 13.6309C5.37099 13.5764 5.75494 13.2921 5.89893 12.9957L6.95481 10.8665C7.53075 9.71116 8.46665 9.71116 9.03658 10.8665Z',
  d2: 'M22 2L14 10M16 2L11 7M20 10L17 13',
  d3: 'M12.9816 13.2118C13.7258 13.3368 14.4399 13.7182 14.6769 14.4616C14.9136 15.2041 14.5538 15.9288 14.0193 16.4645L14.0183 16.4655L12.5323 17.9638C12.3915 18.1057 12.3986 18.2914 12.4197 18.3666L12.8448 20.2198C13.0268 21.0162 13.0025 21.9526 12.3037 22.4662C11.6018 22.9821 10.7024 22.7192 10.0022 22.3021L8.20776 21.2311C8.03126 21.1258 7.85232 21.1887 7.78492 21.2334L5.99558 22.3014C5.29474 22.7206 4.39604 22.9798 3.69469 22.4638C2.99703 21.9505 2.96867 21.0171 3.15168 20.2197L3.57761 18.3628C3.63185 18.1263 3.52457 17.9983 3.46415 17.9638L1.97632 16.4636C1.44508 15.928 1.08663 15.2042 1.32138 14.463C1.55703 13.7189 2.26952 13.337 3.01446 13.2118L4.92598 12.8916C5.09359 12.8916 5.19617 12.7389 5.22651 12.6625L6.28311 10.5319C6.62378 9.84852 7.20088 9.25 7.99747 9.25C8.79508 9.25 9.37056 9.8497 9.70829 10.5338L10.7639 12.6625C10.7828 12.7249 10.8701 12.858 11.0678 12.8912L12.9816 13.2118Z',
  d4: 'M16.6991 1.53163C17.0746 1.90713 17.0746 2.51594 16.6991 2.89145L11.8914 7.69914C11.5159 8.07465 10.9071 8.07465 10.5316 7.69914C10.1561 7.32364 10.1561 6.71482 10.5316 6.33932L15.3393 1.53163C15.7148 1.15612 16.3236 1.15612 16.6991 1.53163ZM22.4684 1.53163C22.8439 1.90713 22.8439 2.51594 22.4684 2.89145L14.7761 10.5838C14.4006 10.9593 13.7917 10.9593 13.4162 10.5838C13.0407 10.2083 13.0407 9.59944 13.4162 9.22394L21.1086 1.53163C21.4841 1.15612 22.0929 1.15612 22.4684 1.53163ZM20.5453 9.22394C20.9208 9.59944 20.9208 10.2083 20.5453 10.5838L17.6607 13.4684C17.2852 13.8439 16.6764 13.8439 16.3009 13.4684C15.9254 13.0929 15.9254 12.4841 16.3009 12.1086L19.1855 9.22394C19.561 8.84843 20.1698 8.84843 20.5453 9.22394Z',
  d5: 'M7.97092 10.0346C7.97292 10.0299 7.97533 10.0254 7.97874 10.0217C8.00514 9.99282 8.0509 9.99276 8.0774 10.0215C8.08091 10.0253 8.08337 10.03 8.0854 10.0348L10.0926 14.1514H13.9843L13.9859 14.1515L13.9866 14.1516C13.9871 14.1517 13.9876 14.1518 13.988 14.152L13.9886 14.1522C13.9892 14.1524 13.9899 14.1526 13.9904 14.153C13.997 14.1575 13.9998 14.1706 14 14.207C14 14.2103 13.9988 14.2136 13.9965 14.2161L11.0417 17.4963L12.5258 21.9208C12.5279 21.9271 12.5293 21.9337 12.5285 21.9403C12.524 21.9802 12.485 22.0079 12.4456 21.998C12.442 21.9971 12.4386 21.9955 12.4353 21.9938L8.02356 19.627L3.59379 21.9934C3.59057 21.9951 3.58723 21.9967 3.58369 21.9976C3.54443 22.0075 3.50556 21.9802 3.50067 21.9406C3.49984 21.9338 3.50129 21.927 3.50347 21.9206L4.99934 17.4963L2.02927 14.2143C2.00083 14.179 1.9848 14.1661 2.02066 14.1541C2.02634 14.1522 2.03236 14.1515 2.03835 14.1515L5.98636 14.1514L7.97092 10.0346Z',
  d6: 'M8.25001 9C8.53409 9 8.79379 9.1605 8.92084 9.41459L10.8135 13.2H14.25C14.5469 13.2 14.8158 13.3751 14.9359 13.6466C15.056 13.9181 15.0047 14.2348 14.805 14.4545L12.1004 17.4295L13.4615 21.5128C13.5586 21.804 13.4684 22.125 13.2339 22.323C12.9994 22.521 12.6679 22.5562 12.3971 22.4118L8.25001 20.2L4.10296 22.4118C3.83212 22.5562 3.50061 22.521 3.26611 22.323C3.0316 22.125 2.94144 21.804 3.0385 21.5128L4.39961 17.4295L1.69506 14.4545C1.49537 14.2348 1.44403 13.9181 1.56413 13.6466C1.68423 13.3751 1.95315 13.2 2.25001 13.2H5.68649L7.57919 9.41459C7.70624 9.1605 7.96594 9 8.25001 9Z',
  d7: 'M10.0858 6.5L15.0858 1.5L16.5 2.91421L11.5 7.91421L10.0858 6.5ZM13.0858 9.5L21.0858 1.5L22.5 2.91421L14.5 10.9142L13.0858 9.5ZM16.0858 12.5L19.0858 9.5L20.5 10.9142L17.5 13.9142L16.0858 12.5Z',
} as const;

export const IconFallingStarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-stroke-rounded IconFallingStarStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFallingStarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-duotone-rounded IconFallingStarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconFallingStarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-twotone-rounded IconFallingStarTwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFallingStarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-solid-rounded IconFallingStarSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFallingStarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-bulk-rounded IconFallingStarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFallingStarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-stroke-sharp IconFallingStarStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFallingStarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="falling-star-solid-sharp IconFallingStarSolidSharp"
    >
      <path 
        d={d.d6} 
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

export const iconPackOfFallingStar: TheIconSelfPack = {
  name: 'FallingStar',
  StrokeRounded: IconFallingStarStrokeRounded,
  DuotoneRounded: IconFallingStarDuotoneRounded,
  TwotoneRounded: IconFallingStarTwotoneRounded,
  SolidRounded: IconFallingStarSolidRounded,
  BulkRounded: IconFallingStarBulkRounded,
  StrokeSharp: IconFallingStarStrokeSharp,
  SolidSharp: IconFallingStarSolidSharp,
};
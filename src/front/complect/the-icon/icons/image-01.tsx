import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M5 20.9999C9.37246 15.775 14.2741 8.884 21.4975 13.5424',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 12.551 21.5 13.068 21.4974 13.5538C14.7504 9.2027 10.0291 14.9169 5.87254 19.9475C5.60742 20.2684 5.34455 20.5865 5.08365 20.8991L3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z',
  d4: 'M5.25 7.25C5.25 6.14543 6.14543 5.25 7.25 5.25C8.35457 5.25 9.25 6.14543 9.25 7.25C9.25 8.35457 8.35457 9.25 7.25 9.25C6.14543 9.25 5.25 8.35457 5.25 7.25Z',
  d5: 'M11.9255 1.5H12.0745C14.2504 1.49998 15.9852 1.49996 17.3453 1.68282C18.7497 1.87164 19.9035 2.27175 20.8159 3.18414C21.7283 4.09653 22.1284 5.25033 22.3172 6.65471C22.5 8.01485 22.5 9.74959 22.5 11.9256V12.0744C22.5 14.2504 22.5 15.9851 22.3172 17.3453C22.1284 18.7497 21.7283 19.9035 20.8159 20.8159C19.9035 21.7283 18.7497 22.1284 17.3453 22.3172C15.9851 22.5 14.2504 22.5 12.0744 22.5H11.9256C9.74959 22.5 8.01485 22.5 6.65471 22.3172C5.25033 22.1284 4.09653 21.7283 3.18414 20.8159C2.27175 19.9035 1.87164 18.7497 1.68282 17.3453C1.49996 15.9852 1.49998 14.2504 1.5 12.0745V11.9255C1.49998 9.74957 1.49996 8.01485 1.68282 6.65471C1.87164 5.25033 2.27175 4.09653 3.18414 3.18414C4.09653 2.27175 5.25033 1.87164 6.65471 1.68282C8.01485 1.49996 9.74957 1.49998 11.9255 1.5ZM6.92121 3.66499C5.7386 3.82399 5.0772 4.1195 4.59835 4.59835C4.1195 5.0772 3.82399 5.7386 3.66499 6.92121C3.50212 8.13258 3.5 9.73256 3.5 12C3.5 14.2674 3.50212 15.8674 3.66499 17.0788C3.82399 18.2614 4.1195 18.9228 4.59835 19.4017C5.0772 19.8805 5.7386 20.176 6.92121 20.335C8.13258 20.4979 9.73256 20.5 12 20.5C14.2674 20.5 15.8674 20.4979 17.0788 20.335C18.2614 20.176 18.9228 19.8805 19.4017 19.4017C19.8805 18.9228 20.176 18.2614 20.335 17.0788C20.4979 15.8674 20.5 14.2674 20.5 12C20.5 9.73256 20.4979 8.13258 20.335 6.92121C20.176 5.7386 19.8805 5.0772 19.4017 4.59835C18.9228 4.1195 18.2614 3.82399 17.0788 3.66499C15.8674 3.50212 14.2674 3.5 12 3.5C9.73256 3.5 8.13258 3.50212 6.92121 3.66499Z',
  d6: 'M22.0401 12.7028C20.093 11.4471 18.238 10.921 16.4626 10.9951C14.6954 11.0689 13.1064 11.7333 11.677 12.689C9.25854 14.3059 7.13143 16.886 5.22689 19.1961C4.9254 19.5618 4.62943 19.9208 4.33883 20.2681L3.5 21.001L4.72298 21.8337C5.58718 22.1917 6.59793 22.3485 7.75948 22.4248C8.91653 22.5008 10.3102 22.5008 11.9675 22.5008H12.0751C14.2511 22.5008 15.9858 22.5009 17.3459 22.318C18.7503 22.1292 19.9041 21.7291 20.8165 20.8167C21.616 20.0172 22.0247 19.0363 22.2402 17.8542C22.4501 16.7027 22.4894 15.2826 22.4981 13.5483L22.5009 13L22.0401 12.7028Z',
  d7: 'M21 21V3H3V21H21Z',
  d8: 'M5 21L15 12L21 16',
  d9: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3ZM3.75 3.75V20.25H20.25V3.75H3.75Z',
  d10: 'M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM4 19.7085V4H20V14.1314L14.9397 10.7578L4 19.7085Z',
} as const;

export const IconImage01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-stroke-rounded IconImage01StrokeRounded"
    >
      <circle 
        cx="7.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconImage01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-duotone-rounded IconImage01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="7.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconImage01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-twotone-rounded IconImage01TwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="7.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconImage01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-solid-rounded IconImage01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImage01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-bulk-rounded IconImage01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImage01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-stroke-sharp IconImage01StrokeSharp"
    >
      <circle 
        cx="8.5" 
        cy="8.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImage01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="image-01-solid-sharp IconImage01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="8" 
        cy="8" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImage01: TheIconSelfPack = {
  name: 'Image01',
  StrokeRounded: IconImage01StrokeRounded,
  DuotoneRounded: IconImage01DuotoneRounded,
  TwotoneRounded: IconImage01TwotoneRounded,
  SolidRounded: IconImage01SolidRounded,
  BulkRounded: IconImage01BulkRounded,
  StrokeSharp: IconImage01StrokeSharp,
  SolidSharp: IconImage01SolidSharp,
};
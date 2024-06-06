import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 6.72958C2.54913 8.25986 2 10.0658 2 12C2 17.5228 6.47715 22 12 22C13.0452 22 14.053 21.8396 15 21.5422M20.353 17.5C21.394 15.9221 22 14.0318 22 12C22 6.47715 17.5228 2 12 2C10.9548 2 9.94704 2.16035 9 2.4578',
  d2: 'M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 12.3425 7.03443 12.6769 7.10002 13',
  d3: 'M12.009 12H12',
  d4: 'M12 22C6.47715 22 2 17.5228 2 12C2 10.1174 2.52023 8.35628 3.42478 6.8526C3.47408 6.77064 3.53533 6.698 3.60684 6.63448C3.64321 6.60218 3.68044 6.56918 3.71847 6.53554C4.06553 6.8255 4.51239 7 5 7C6.10457 7 7 6.10457 7 5C7 4.63383 6.90159 4.29064 6.72979 3.99544C7.73133 3.19889 8.6268 2.554 9 2.4578C9.94704 2.16035 10.9548 2 12 2C17.5228 2 22 6.47715 22 12C22 14.0002 21.4127 15.8633 20.4012 17.4262C20.3812 17.457 20.3633 17.4886 20.346 17.5207C19.9907 17.1972 19.5184 17 19 17C17.8954 17 17 17.8954 17 19C17 19.4224 17.131 19.8142 17.3545 20.1371C16.5256 20.6785 15.691 21.1657 15.0829 21.4972C15.027 21.5277 14.9694 21.552 14.9085 21.5705C13.9881 21.8498 13.0116 22 12 22ZM17 12C17 14.7614 14.7614 17 12 17C11.0494 16.8812 10.2576 16.5829 9.60634 16.1917C9.24186 16.6822 8.65804 17 8 17C6.89543 17 6 16.1046 6 15C6 14.1977 6.47244 13.5057 7.15431 13.1871C7.13332 13.1217 7.11525 13.0592 7.10002 13C7.03443 12.6769 7 12.3425 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z',
  d5: 'M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 12.3425 7.03443 12.6769 7.10002 13M10 15C10 16.1046 9.10457 17 8 17C6.89543 17 6 16.1046 6 15C6 13.8954 6.89543 13 8 13C9.10457 13 10 13.8954 10 15Z',
  d6: 'M12 3.20455C11.079 3.20455 10.1929 3.34577 9.36102 3.60704C8.84609 3.76877 8.29755 3.48244 8.13582 2.96751C7.97408 2.45258 8.26041 1.90403 8.77534 1.7423C9.79453 1.4222 10.8781 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 14.1828 22.0984 16.2164 20.9789 17.9132C20.6816 18.3637 20.0755 18.488 19.6249 18.1907C19.1744 17.8935 19.0502 17.2873 19.3474 16.8368C20.2627 15.4496 20.7955 13.7885 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455ZM4.20896 6.01928C4.6674 6.30414 4.80812 6.9067 4.52326 7.36514C3.68742 8.7103 3.20455 10.2973 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C12.921 20.7955 13.8071 20.6542 14.639 20.393C15.1539 20.2312 15.7025 20.5176 15.8642 21.0325C16.0259 21.5474 15.7396 22.096 15.2247 22.2577C14.2055 22.5778 13.1219 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 9.92226 1.84043 7.97943 2.8631 6.33358C3.14796 5.87514 3.75052 5.73442 4.20896 6.01928Z',
  d7: 'M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25C6.51878 2.25 7.75 3.48122 7.75 5C7.75 6.51878 6.51878 7.75 5 7.75C3.48122 7.75 2.25 6.51878 2.25 5Z',
  d8: 'M16.25 19C16.25 17.4812 17.4812 16.25 19 16.25C20.5188 16.25 21.75 17.4812 21.75 19C21.75 20.5188 20.5188 21.75 19 21.75C17.4812 21.75 16.25 20.5188 16.25 19Z',
  d9: 'M5.5 15C5.5 13.6193 6.61929 12.5 8 12.5C9.38071 12.5 10.5 13.6193 10.5 15C10.5 16.3807 9.38071 17.5 8 17.5C6.61929 17.5 5.5 16.3807 5.5 15Z',
  d10: 'M12 8.16667C9.88291 8.16667 8.16667 9.88291 8.16667 12C8.16667 12.2638 8.19317 12.5204 8.24336 12.7677C8.34865 13.2864 8.01352 13.7922 7.49483 13.8975C6.97613 14.0028 6.47029 13.6677 6.365 13.149C6.28948 12.7769 6.25 12.3926 6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C11.4707 17.75 11.0417 17.3209 11.0417 16.7917C11.0417 16.2624 11.4707 15.8333 12 15.8333C14.1171 15.8333 15.8333 14.1171 15.8333 12C15.8333 9.88291 14.1171 8.16667 12 8.16667Z',
  d11: 'M10.75 12C10.75 11.3096 11.3071 10.75 11.9944 10.75H12.0056C12.6929 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6929 13.25 12.0056 13.25H11.9944C11.3071 13.25 10.75 12.6904 10.75 12Z',
  d12: 'M12 3.20455C11.079 3.20455 10.1929 3.34577 9.36102 3.60704L8.77534 1.7423C9.79453 1.4222 10.8781 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 14.1828 22.0984 16.2164 20.9789 17.9132L19.3474 16.8368C20.2627 15.4496 20.7955 13.7885 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455ZM4.52326 7.36514C3.68742 8.7103 3.20455 10.2973 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C12.921 20.7955 13.8071 20.6542 14.639 20.393L15.2247 22.2577C14.2055 22.5778 13.1219 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 9.92226 1.84043 7.97943 2.8631 6.33358L4.52326 7.36514Z',
  d13: 'M2.24023 5C2.24023 3.48122 3.47145 2.25 4.99023 2.25C6.50902 2.25 7.74023 3.48122 7.74023 5C7.74023 6.51878 6.50902 7.75 4.99023 7.75C3.47145 7.75 2.24023 6.51878 2.24023 5Z',
  d14: 'M16.2402 19C16.2402 17.4812 17.4715 16.25 18.9902 16.25C20.509 16.25 21.7402 17.4812 21.7402 19C21.7402 20.5188 20.509 21.75 18.9902 21.75C17.4715 21.75 16.2402 20.5188 16.2402 19Z',
  d15: 'M5.24023 15C5.24023 13.4812 6.47145 12.25 7.99023 12.25C9.50902 12.25 10.7402 13.4812 10.7402 15C10.7402 16.5188 9.50902 17.75 7.99023 17.75C6.47145 17.75 5.24023 16.5188 5.24023 15Z',
  d16: 'M11.9902 8C9.7811 8 7.99023 9.79086 7.99023 12C7.99023 12.2753 8.01789 12.5431 8.07027 12.8011L6.11024 13.1989C6.03144 12.8107 5.99023 12.4097 5.99023 12C5.99023 8.68629 8.67653 6 11.9902 6C15.3039 6 17.9902 8.68629 17.9902 12C17.9902 15.3137 15.3039 18 11.9902 18V16C14.1994 16 15.9902 14.2091 15.9902 12C15.9902 9.79086 14.1994 8 11.9902 8Z',
  d17: 'M10.7402 12C10.7402 11.3096 11.2979 10.75 11.9858 10.75H11.9947C12.6826 10.75 13.2402 11.3096 13.2402 12C13.2402 12.6904 12.6826 13.25 11.9947 13.25H11.9858C11.2979 13.25 10.7402 12.6904 10.7402 12Z',
};

export const IconSolarSystem01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-stroke-rounded IconSolarSystem01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="8" 
        cy="15" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSolarSystem01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-duotone-rounded IconSolarSystem01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="8" 
        cy="15" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconSolarSystem01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-twotone-rounded IconSolarSystem01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconSolarSystem01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-solid-rounded IconSolarSystem01SolidRounded"
    >
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarSystem01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-bulk-rounded IconSolarSystem01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarSystem01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-stroke-sharp IconSolarSystem01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="5" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="8" 
        cy="15" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarSystem01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-system-01-solid-sharp IconSolarSystem01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfSolarSystem01: TheIconSelfPack = {
  name: 'SolarSystem01',
  StrokeRounded: IconSolarSystem01StrokeRounded,
  DuotoneRounded: IconSolarSystem01DuotoneRounded,
  TwotoneRounded: IconSolarSystem01TwotoneRounded,
  SolidRounded: IconSolarSystem01SolidRounded,
  BulkRounded: IconSolarSystem01BulkRounded,
  StrokeSharp: IconSolarSystem01StrokeSharp,
  SolidSharp: IconSolarSystem01SolidSharp,
};
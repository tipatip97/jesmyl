import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.8033 14.8033C16.8744 17.7322 12.1256 17.7322 9.1967 14.8033C6.26777 11.8744 6.26777 7.12563 9.1967 4.1967C12.1256 1.26777 16.8744 1.26777 19.8033 4.1967C22.7322 7.12563 22.7322 11.8744 19.8033 14.8033Z',
  d2: 'M17.3284 12.3284C15.7663 13.8905 13.2337 13.8905 11.6716 12.3284C10.1095 10.7663 10.1095 8.23367 11.6716 6.67157C13.2337 5.10948 15.7663 5.10948 17.3284 6.67157C18.8905 8.23367 18.8905 10.7663 17.3284 12.3284Z',
  d3: 'M11 15.9707C8.26829 16.7441 7.48472 19.486 5.58597 21.3847C4.76563 22.2051 3.43559 22.2051 2.61525 21.3847C1.79492 20.5644 1.79492 19.2344 2.61525 18.414C4.514 16.5153 7.25588 15.7317 8.02929 13',
  d4: 'M9.1967 14.8033C12.1256 17.7322 16.8744 17.7322 19.8033 14.8033C22.7322 11.8744 22.7322 7.12563 19.8033 4.1967C16.8744 1.26777 12.1256 1.26777 9.1967 4.1967C6.26777 7.12563 6.26777 11.8744 9.1967 14.8033ZM11.6716 12.3284C13.2337 13.8905 15.7663 13.8905 17.3284 12.3284C18.8905 10.7663 18.8905 8.23367 17.3284 6.67157C15.7663 5.10948 13.2337 5.10948 11.6716 6.67157C10.1095 8.23367 10.1095 10.7663 11.6716 12.3284Z',
  d5: 'M4.83597 22.1352C4.01563 22.9555 2.68559 22.9555 1.86525 22.1352C1.04492 21.3148 1.04492 19.9848 1.86525 19.1645C2.50898 18.5207 3.24962 18.0052 3.97761 17.4984C4.72096 16.981 5.45112 16.4727 6.05144 15.8466C6.32759 15.5585 6.46566 15.4145 6.5983 15.418C6.73095 15.4215 6.85683 15.5675 7.10859 15.8595C7.26638 16.0426 7.43209 16.2211 7.60571 16.3947C7.77933 16.5683 7.95787 16.7341 8.14089 16.8918C8.4329 17.1436 8.5789 17.2695 8.5824 17.4021C8.58591 17.5348 8.44189 17.6728 8.15385 17.949C7.52769 18.5493 7.01943 19.2795 6.50199 20.0228C5.99525 20.7508 5.4797 21.4915 4.83597 22.1352Z',
  d6: 'M20.3336 3.66637C17.1118 0.444544 11.8882 0.444544 8.66637 3.66637C5.44454 6.8882 5.44454 12.1118 8.66637 15.3336C11.8882 18.5555 17.1118 18.5555 20.3336 15.3336C23.5555 12.1118 23.5555 6.8882 20.3336 3.66637ZM12.2019 7.2019C13.4711 5.9327 15.5289 5.9327 16.7981 7.2019C18.0673 8.47111 18.0673 10.5289 16.7981 11.7981C15.5289 13.0673 13.4711 13.0673 12.2019 11.7981C10.9327 10.5289 10.9327 8.47111 12.2019 7.2019ZM17.8588 6.14124C16.0038 4.28625 12.9962 4.28625 11.1412 6.14124C9.28625 7.99623 9.28625 11.0038 11.1412 12.8588C12.9962 14.7137 16.0038 14.7137 17.8588 12.8588C19.7137 11.0038 19.7137 7.99623 17.8588 6.14124Z',
  d7: 'M7.87891 13.9998L2.43934 19.4393C1.85355 20.0251 1.85355 20.9749 2.43934 21.5606C3.02513 22.1464 3.97487 22.1464 4.56066 21.5606L10 16.1213',
  d8: 'M5.09099 22.0908C4.21231 22.9695 2.78769 22.9695 1.90901 22.0908C1.03033 21.2121 1.03033 19.7875 1.90901 18.9088L6.19917 14.6187C6.58926 15.25 7.05811 15.8466 7.60571 16.3942C8.15328 16.9418 8.74977 17.4106 9.38112 17.8007L5.09099 22.0908ZM8.66637 3.66637C11.8882 0.444544 17.1118 0.444544 20.3336 3.66637C23.5555 6.8882 23.5555 12.1118 20.3336 15.3336C17.1118 18.5555 11.8882 18.5555 8.66637 15.3336C5.44454 12.1118 5.44454 6.8882 8.66637 3.66637ZM16.7981 7.2019C15.5289 5.9327 13.4711 5.9327 12.2019 7.2019C10.9327 8.47111 10.9327 10.5289 12.2019 11.7981C13.4711 13.0673 15.5289 13.0673 16.7981 11.7981C18.0673 10.5289 18.0673 8.47111 16.7981 7.2019ZM11.1412 6.14124C12.9962 4.28625 16.0038 4.28625 17.8588 6.14124C19.7137 7.99623 19.7137 11.0038 17.8588 12.8588C16.0038 14.7137 12.9962 14.7137 11.1412 12.8588C9.28625 11.0038 9.28625 7.99623 11.1412 6.14124Z',
};

export const IconPan01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-stroke-rounded IconPan01StrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPan01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-duotone-rounded IconPan01DuotoneRounded"
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

export const IconPan01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-twotone-rounded IconPan01TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPan01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-solid-rounded IconPan01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPan01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-bulk-rounded IconPan01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconPan01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-stroke-sharp IconPan01StrokeSharp"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPan01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pan-01-solid-sharp IconPan01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPan01: TheIconSelfPack = {
  name: 'Pan01',
  StrokeRounded: IconPan01StrokeRounded,
  DuotoneRounded: IconPan01DuotoneRounded,
  TwotoneRounded: IconPan01TwotoneRounded,
  SolidRounded: IconPan01SolidRounded,
  BulkRounded: IconPan01BulkRounded,
  StrokeSharp: IconPan01StrokeSharp,
  SolidSharp: IconPan01SolidSharp,
};
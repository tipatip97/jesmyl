import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d2: 'M10 19.8826C10 19.8826 5.24049 20.3097 4.46539 19.5346C3.6903 18.7595 4.11739 14 4.11739 14',
  d3: 'M14 4.11735C14 4.11735 18.7595 3.69033 19.5346 4.46542C20.3097 5.2405 19.8826 10 19.8826 10',
  d4: 'M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z',
  d5: 'M19.2603 3.25315C19.5413 3.33222 19.9323 3.47456 20.2289 3.77116C20.5255 4.06776 20.6678 4.45875 20.7469 4.73975C20.8347 5.05189 20.8901 5.40252 20.9266 5.75018C20.9999 6.44828 21.0086 7.25407 20.9941 7.96858L20.9928 8.03305V8.03306C20.9848 8.43659 20.9765 8.85181 20.9187 9.17771C20.8573 9.52399 20.6767 10.1334 20.0172 10.3987C19.3503 10.6671 18.7925 10.34 18.513 10.1348C18.2434 9.93688 17.9455 9.6387 17.6526 9.34563L17.607 9.30002L14.7 6.39299L14.6544 6.34739C14.3613 6.05451 14.0631 5.75653 13.8652 5.48693C13.66 5.20742 13.3329 4.64966 13.6013 3.98274C13.8667 3.32322 14.476 3.14271 14.8223 3.08128C15.1482 3.02347 15.5634 3.0152 15.967 3.00716L16.0315 3.00587C16.746 2.99138 17.5518 3.00012 18.2499 3.07341C18.5975 3.10991 18.9481 3.1653 19.2603 3.25315Z',
  d6: 'M4.73973 20.7469C4.45873 20.6678 4.06775 20.5254 3.77115 20.2288C3.47454 19.9322 3.3322 19.5412 3.25312 19.2602C3.16528 18.9481 3.10989 18.5975 3.0734 18.2498C3.00012 17.5517 2.99138 16.7459 3.00588 16.0314L3.00718 15.967V15.9669C3.01522 15.5634 3.0235 15.1482 3.08132 14.8223C3.14275 14.476 3.32327 13.8666 3.98279 13.6013C4.64971 13.3329 5.20746 13.66 5.48697 13.8652C5.75657 14.0631 6.05454 14.3613 6.34742 14.6544L6.39301 14.7L9.30002 17.607L9.34564 17.6526C9.63871 17.9455 9.93689 18.2435 10.1348 18.5131C10.34 18.7926 10.6671 19.3503 10.3987 20.0173C10.1333 20.6768 9.52397 20.8573 9.17768 20.9187C8.85178 20.9765 8.43656 20.9848 8.03302 20.9928L7.96854 20.9941C7.25403 21.0086 6.44824 20.9999 5.75015 20.9266C5.40249 20.8901 5.05186 20.8347 4.73973 20.7469Z',
  d7: 'M14 10V14H10V10H14Z',
  d8: 'M19 11V5H13',
  d9: 'M5 13V19H11',
  d10: 'M15 9V15H9V9H15Z',
  d11: 'M14 3H21V10H19V5H14V3Z',
  d12: 'M5 19V14H3V21H10V19H5Z',
};

export const IconDiagonalScrollPoint01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-stroke-rounded IconDiagonalScrollPoint01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDiagonalScrollPoint01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-duotone-rounded IconDiagonalScrollPoint01DuotoneRounded"
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

export const IconDiagonalScrollPoint01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-twotone-rounded IconDiagonalScrollPoint01TwotoneRounded"
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

export const IconDiagonalScrollPoint01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-solid-rounded IconDiagonalScrollPoint01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDiagonalScrollPoint01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-bulk-rounded IconDiagonalScrollPoint01BulkRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiagonalScrollPoint01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-stroke-sharp IconDiagonalScrollPoint01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiagonalScrollPoint01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diagonal-scroll-point-01-solid-sharp IconDiagonalScrollPoint01SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfDiagonalScrollPoint01: TheIconSelfPack = {
  name: 'DiagonalScrollPoint01',
  StrokeRounded: IconDiagonalScrollPoint01StrokeRounded,
  DuotoneRounded: IconDiagonalScrollPoint01DuotoneRounded,
  TwotoneRounded: IconDiagonalScrollPoint01TwotoneRounded,
  SolidRounded: IconDiagonalScrollPoint01SolidRounded,
  BulkRounded: IconDiagonalScrollPoint01BulkRounded,
  StrokeSharp: IconDiagonalScrollPoint01StrokeSharp,
  SolidSharp: IconDiagonalScrollPoint01SolidSharp,
};
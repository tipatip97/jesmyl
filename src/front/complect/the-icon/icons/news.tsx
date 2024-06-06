import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 15V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H20',
  d2: 'M6 8L14 8',
  d3: 'M6 12L14 12',
  d4: 'M6 16L10 16',
  d5: 'M18 8H19C20.4142 8 21.1213 8 21.5607 8.43934C22 8.87868 22 9.58579 22 11V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V8Z',
  d6: 'M12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H18V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3Z',
  d7: 'M12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H20C18.8954 21 18 20.1046 18 19V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3Z',
  d8: 'M12.069 2.25C13.3923 2.24997 14.4836 2.24994 15.3472 2.36579C16.254 2.48741 17.0548 2.75258 17.696 3.39229C18.3372 4.03199 18.6029 4.83093 18.7249 5.73557C18.7803 6.14683 18.8092 6.60981 18.8244 7.125C18.8244 7.125 20.1147 7.12488 20.5796 7.18724C21.0872 7.25532 21.6079 7.4134 22.0344 7.83893C22.4609 8.26446 22.6194 8.78395 22.6876 9.29033C22.7501 9.75412 22.7501 10.3272 22.75 10.9649L22.75 18.825C22.75 20.4404 21.4374 21.75 19.8182 21.75H8.02197C6.69861 21.75 5.60737 21.7501 4.74369 21.6342C3.83695 21.5126 3.03615 21.2474 2.39495 20.6077C1.75375 19.968 1.48797 19.1691 1.36606 18.2644C1.24994 17.4028 1.24997 16.3141 1.25 14.9938V14.9938V9.00616V9.00613C1.24997 7.68589 1.24994 6.59721 1.36606 5.73557C1.48797 4.83093 1.75375 4.03199 2.39495 3.39229C3.03615 2.75258 3.83695 2.48741 4.74369 2.36579C5.60735 2.24994 6.6986 2.24997 8.02191 2.25H8.02194H12.069H12.069ZM19.8191 19.8C20.3588 19.8 20.7963 19.3634 20.7963 18.825V11.025C20.7963 10.308 20.7943 9.8683 20.7514 9.55011C20.7137 9.27043 20.6601 9.22373 20.6537 9.2182L20.6528 9.21723C20.6472 9.21089 20.6004 9.15741 20.3201 9.1198C20.0011 9.07702 19.5605 9.07495 18.8418 9.07495V18.825C18.8418 19.3634 19.2793 19.8 19.8191 19.8ZM6 7.25C5.58579 7.25 5.25 7.58579 5.25 8C5.25 8.41421 5.58579 8.75 6 8.75H14C14.4142 8.75 14.75 8.41421 14.75 8C14.75 7.58579 14.4142 7.25 14 7.25H6ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H6ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H6Z',
  d9: 'M15.3472 2.36579C14.4836 2.24994 13.3923 2.24997 12.069 2.25H8.02194C6.69862 2.24997 5.60735 2.24994 4.74369 2.36579C3.83695 2.48741 3.03615 2.75258 2.39495 3.39229C1.75375 4.03199 1.48797 4.83093 1.36606 5.73557C1.24994 6.59722 1.24997 7.68591 1.25 9.00616V14.9938C1.24997 16.3141 1.24994 17.4028 1.36606 18.2644C1.48797 19.1691 1.75375 19.968 2.39495 20.6077C3.03615 21.2474 3.83695 21.5126 4.74369 21.6342C5.60737 21.7501 6.69861 21.75 8.02197 21.75H19.8182C21.4374 21.75 22.75 20.4404 22.75 18.825L22.75 10.9649C22.7501 10.3272 22.7501 9.75412 22.6876 9.29033C22.6194 8.78395 22.4609 8.26446 22.0344 7.83893C21.6079 7.4134 21.0872 7.25532 20.5796 7.18724C20.1147 7.12488 18.8244 7.125 18.8244 7.125C18.8092 6.60981 18.7803 6.14683 18.7249 5.73557C18.6029 4.83093 18.3372 4.03199 17.696 3.39229C17.0548 2.75258 16.254 2.48741 15.3472 2.36579ZM20.7963 18.825C20.7963 19.3634 20.3588 19.8 19.8191 19.8C19.2793 19.8 18.8418 19.3634 18.8418 18.825V9.07495C19.5605 9.07495 20.0011 9.07702 20.3201 9.1198C20.6004 9.15741 20.6472 9.21089 20.6528 9.21723L20.6537 9.2182C20.6601 9.22373 20.7137 9.27043 20.7514 9.55011C20.7943 9.8683 20.7963 10.308 20.7963 11.025V18.825Z',
  d10: 'M5.25 8C5.25 7.58579 5.58579 7.25 6 7.25L14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75L6 8.75C5.58579 8.75 5.25 8.41421 5.25 8ZM5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L14 11.25C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d11: 'M18 8V3H2V21H20',
  d12: 'M5.5 8H14.5M5.5 12L14.5 12M5.5 16H10',
  d13: 'M18 8H22V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V8Z',
  d14: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H18C18.4142 2.25 18.75 2.58579 18.75 3V7.25H22C22.4142 7.25 22.75 7.58579 22.75 8V19C22.75 20.5188 21.5188 21.75 20 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V3ZM20 20.25C20.6904 20.25 21.25 19.6904 21.25 19V8.75H18.75V19C18.75 19.6904 19.3096 20.25 20 20.25ZM5.5 8.75H14.5V7.25H5.5V8.75ZM5.5 12.75H14.5V11.25H5.5V12.75ZM5.5 16.75H10V15.25H5.5V16.75Z',
};

export const IconNewsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-stroke-rounded IconNewsStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNewsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-duotone-rounded IconNewsDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNewsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-twotone-rounded IconNewsTwotoneRounded"
    >
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNewsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-solid-rounded IconNewsSolidRounded"
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

export const IconNewsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-bulk-rounded IconNewsBulkRounded"
    >
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

export const IconNewsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-stroke-sharp IconNewsStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNewsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="news-solid-sharp IconNewsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNews: TheIconSelfPack = {
  name: 'News',
  StrokeRounded: IconNewsStrokeRounded,
  DuotoneRounded: IconNewsDuotoneRounded,
  TwotoneRounded: IconNewsTwotoneRounded,
  SolidRounded: IconNewsSolidRounded,
  BulkRounded: IconNewsBulkRounded,
  StrokeSharp: IconNewsStrokeSharp,
  SolidSharp: IconNewsSolidSharp,
};
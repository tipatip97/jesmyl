import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 7C20 9.20914 16.4183 11 12 11C7.58172 11 4 9.20914 4 7C4 4.79086 7.58172 3 12 3C16.4183 3 20 4.79086 20 7Z',
  d2: 'M18 14C18 15.6569 15.3137 17 12 17C8.68629 17 6 15.6569 6 14C6 12.3431 8.68629 11 12 11',
  d3: 'M16 19C16 20.1046 14.2091 21 12 21C9.79086 21 8 20.1046 8 19C8 17.8954 9.79086 17 12 17',
  d4: 'M18 14C18 15.6569 15.3137 17 12 17M12 17C8.68629 17 6 15.6569 6 14C6 12.3431 8.68629 11 12 11M12 17C9.79086 17 8 17.8954 8 19C8 20.1046 9.79086 21 12 21C14.2091 21 16 20.1046 16 19',
  d5: 'M6.79036 5.066C5.44895 5.73671 5 6.47826 5 7C5 7.52174 5.44895 8.26329 6.79036 8.934C8.07196 9.5748 9.91244 10 12 10C14.0876 10 15.928 9.5748 17.2096 8.934C18.5511 8.26329 19 7.52174 19 7C19 6.47826 18.5511 5.73671 17.2096 5.066C15.928 4.4252 14.0876 4 12 4C9.91244 4 8.07196 4.4252 6.79036 5.066ZM6.95502 11.1759C6.58117 11.0398 6.22707 10.8884 5.89593 10.7229C4.34191 9.94584 3 8.6874 3 7C3 5.3126 4.34191 4.05416 5.89593 3.27715C7.50977 2.47023 9.66928 2 12 2C14.3307 2 16.4902 2.47023 18.1041 3.27715C19.6581 4.05416 21 5.3126 21 7C21 8.6874 19.6581 9.94584 18.1041 10.7229C16.4902 11.5298 14.3307 12 12 12C10.4647 12 9.12424 12.3133 8.20457 12.7731C7.22509 13.2628 7 13.7544 7 14C7 14.2456 7.22509 14.7372 8.20457 15.2269C9.12424 15.6867 10.4647 16 12 16C13.5353 16 14.8758 15.6867 15.7954 15.2269C16.7749 14.7372 17 14.2456 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14C19 15.4113 17.8819 16.4197 16.6899 17.0157C15.4379 17.6417 13.7784 18 12 18C11.017 18 10.1765 18.2013 9.61879 18.4802C9.3402 18.6195 9.16902 18.7595 9.07781 18.8674C9.03417 18.9189 9.01484 18.956 9.00676 18.9757C9.00277 18.9854 9.00124 18.9916 9.00064 18.9946C9.00012 18.9971 9 18.9997 9 18.9997C9 18.9997 9.00007 19.0026 9.00064 19.0054C9.00124 19.0084 9.00277 19.0146 9.00676 19.0243C9.01484 19.044 9.03417 19.0811 9.07781 19.1326C9.16902 19.2405 9.3402 19.3805 9.61879 19.5198C10.1765 19.7987 11.017 20 12 20C12.983 20 13.8235 19.7987 14.3812 19.5198C14.6598 19.3805 14.831 19.2405 14.9222 19.1326C14.9658 19.0811 14.9852 19.044 14.9932 19.0243C14.9972 19.0146 14.9988 19.0084 14.9994 19.0054C14.9999 19.0026 15 19 15 19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19C17 20.1351 16.1058 20.8936 15.2756 21.3086C14.3857 21.7536 13.2262 22 12 22C10.7738 22 9.61434 21.7536 8.72436 21.3086C7.8942 20.8936 7 20.1351 7 19C7 18.267 7.37287 17.6911 7.86059 17.2633C7.66961 17.1862 7.48586 17.1036 7.31015 17.0157C6.11805 16.4197 5 15.4113 5 14C5 12.7302 5.90519 11.7865 6.95502 11.1759Z',
  d6: 'M12 2C14.3307 2 16.4902 2.47023 18.1041 3.27715C19.6581 4.05416 21 5.3126 21 7C21 8.6874 19.6581 9.94584 18.1041 10.7229C16.4902 11.5298 14.3307 12 12 12C9.66928 12 7.50977 11.5298 5.89593 10.7229C4.34191 9.94584 3 8.6874 3 7C3 5.3126 4.34191 4.05416 5.89593 3.27715C7.50977 2.47023 9.66928 2 12 2ZM6.79036 8.934C8.07196 9.5748 9.91244 10 12 10C14.0876 10 15.928 9.5748 17.2096 8.934C18.5511 8.26329 19 7.52174 19 7C19 6.47826 18.5511 5.73671 17.2096 5.066C15.928 4.4252 14.0876 4 12 4C9.91244 4 8.07196 4.4252 6.79036 5.066C5.44895 5.73671 5 6.47826 5 7C5 7.52174 5.44895 8.26329 6.79036 8.934Z',
  d7: 'M6.95502 11.1758C5.90519 11.7864 5 12.7301 5 13.9999C5 15.4112 6.11805 16.4196 7.31015 17.0157C7.48586 17.1035 7.66961 17.1861 7.86059 17.2632C7.37287 17.691 7 18.2669 7 18.9999C7 20.135 7.8942 20.8935 8.72436 21.3085C9.61434 21.7535 10.7738 21.9999 12 21.9999C13.2262 21.9999 14.3857 21.7535 15.2756 21.3085C16.1058 20.8935 17 20.135 17 18.9999C17 18.4476 16.5523 17.9999 16 17.9999C15.4477 17.9999 15 18.4476 15 18.9999C15 18.9999 14.9999 19.0025 14.9994 19.0053C14.9988 19.0083 14.9972 19.0145 14.9932 19.0242C14.9852 19.044 14.9658 19.081 14.9222 19.1326C14.831 19.2404 14.6598 19.3804 14.3812 19.5197C13.8235 19.7986 12.983 19.9999 12 19.9999C11.017 19.9999 10.1765 19.7986 9.61879 19.5197C9.3402 19.3804 9.16902 19.2404 9.07781 19.1326C9.03417 19.081 9.01484 19.044 9.00676 19.0242C9.00277 19.0145 9.00124 19.0083 9.00064 19.0053C9.00007 19.0025 9 18.9996 9 18.9996C9 18.9996 9.00012 18.997 9.00064 18.9945C9.00124 18.9915 9.00277 18.9853 9.00676 18.9756C9.01484 18.9559 9.03417 18.9188 9.07781 18.8673C9.16902 18.7594 9.3402 18.6194 9.61879 18.4801C10.1765 18.2012 11.017 17.9999 12 17.9999C13.7784 17.9999 15.4379 17.6416 16.6899 17.0157C17.8819 16.4196 19 15.4112 19 13.9999C19 13.4476 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4476 17 13.9999C17 14.2455 16.7749 14.7371 15.7954 15.2268C14.8758 15.6866 13.5353 15.9999 12 15.9999C10.4647 15.9999 9.12424 15.6866 8.20457 15.2268C7.22509 14.7371 7 14.2455 7 13.9999C7 13.7543 7.22509 13.2628 8.20457 12.773C9.12424 12.3132 10.4647 11.9999 12 11.9999C10.1475 11.9999 8.40317 11.7028 6.95502 11.1758Z',
  d8: 'M6.79036 5.066C5.44895 5.73671 5 6.47826 5 7C5 7.52174 5.44895 8.26329 6.79036 8.934C8.07196 9.5748 9.91244 10 12 10C14.0876 10 15.928 9.5748 17.2096 8.934C18.5511 8.26329 19 7.52174 19 7C19 6.47826 18.5511 5.73671 17.2096 5.066C15.928 4.4252 14.0876 4 12 4C9.91244 4 8.07196 4.4252 6.79036 5.066ZM5.89593 3.27715C7.50977 2.47023 9.66928 2 12 2C14.3307 2 16.4902 2.47023 18.1041 3.27715C19.6581 4.05416 21 5.3126 21 7C21 8.6874 19.6581 9.94584 18.1041 10.7229C16.4902 11.5298 14.3307 12 12 12C9.66928 12 7.50977 11.5298 5.89593 10.7229C4.34191 9.94584 3 8.6874 3 7C3 5.3126 4.34191 4.05416 5.89593 3.27715Z',
  d9: 'M8.20457 12.7731C7.22509 13.2628 7 13.7544 7 14C7 14.2456 7.22509 14.7372 8.20457 15.2269C9.12424 15.6867 10.4647 16 12 16C13.5353 16 14.8758 15.6867 15.7954 15.2269C16.7749 14.7372 17 14.2456 17 14H19C19 15.4113 17.8819 16.4197 16.6899 17.0157C15.4379 17.6417 13.7784 18 12 18C10.2216 18 8.56205 17.6417 7.31015 17.0157C6.11805 16.4197 5 15.4113 5 14C5 12.5887 6.11805 11.5803 7.31015 10.9843C8.56205 10.3583 10.2216 10 12 10V12C10.4647 12 9.12424 12.3133 8.20457 12.7731Z',
  d10: 'M9.00064 18.9946C9.00007 18.9974 9 18.9989 9 19C9 19.0011 9.00007 19.0026 9.00064 19.0054C9.00124 19.0084 9.00277 19.0146 9.00676 19.0243C9.01484 19.044 9.03417 19.0811 9.07781 19.1326C9.16902 19.2405 9.3402 19.3805 9.61879 19.5198C10.1765 19.7987 11.017 20 12 20C12.983 20 13.8235 19.7987 14.3812 19.5198C14.6598 19.3805 14.831 19.2405 14.9222 19.1326C14.9658 19.0811 14.9852 19.044 14.9932 19.0243C14.9972 19.0146 14.9988 19.0084 14.9994 19.0054C14.9999 19.0026 15 19.0011 15 19H17C17 20.1351 16.1058 20.8936 15.2756 21.3086C14.3857 21.7536 13.2262 22 12 22C10.7738 22 9.61434 21.7536 8.72436 21.3086C7.8942 20.8936 7 20.1351 7 19C7 17.8649 7.8942 17.1064 8.72436 16.6914C9.61434 16.2464 10.7738 16 12 16V18C11.017 18 10.1765 18.2013 9.61879 18.4802C9.3402 18.6195 9.16902 18.7595 9.07781 18.8674C9.03417 18.9189 9.01484 18.956 9.00676 18.9757C9.00277 18.9854 9.00124 18.9916 9.00064 18.9946Z',
};

export const IconTornado01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-stroke-rounded IconTornado01StrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTornado01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-duotone-rounded IconTornado01DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTornado01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-twotone-rounded IconTornado01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTornado01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-solid-rounded IconTornado01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTornado01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-bulk-rounded IconTornado01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTornado01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-stroke-sharp IconTornado01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTornado01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tornado-01-solid-sharp IconTornado01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfTornado01: TheIconSelfPack = {
  name: 'Tornado01',
  StrokeRounded: IconTornado01StrokeRounded,
  DuotoneRounded: IconTornado01DuotoneRounded,
  TwotoneRounded: IconTornado01TwotoneRounded,
  SolidRounded: IconTornado01SolidRounded,
  BulkRounded: IconTornado01BulkRounded,
  StrokeSharp: IconTornado01StrokeSharp,
  SolidSharp: IconTornado01SolidSharp,
};
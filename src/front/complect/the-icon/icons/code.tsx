import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 12H8.00897M11.9955 12H12.0045M15.991 12H16',
  d2: 'M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6865 21.6733 12.9091C22.1089 12.407 22.1089 11.593 21.6733 11.0909C20.1312 9.31354 20.231 7.81916 20.231 5.57143C20.231 4.15127 19.2322 3 18 3',
  d3: 'M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6865 2.32673 12.9091C1.89109 12.407 1.89109 11.593 2.32673 11.0909C3.83496 9.35251 3.76897 7.83992 3.76897 5.57143C3.76897 4.15127 4.76784 3 6 3',
  d4: 'M6 12C6 11.3096 6.55964 10.75 7.25 10.75H7.25897C7.94933 10.75 8.50897 11.3096 8.50897 12C8.50897 12.6904 7.94933 13.25 7.25897 13.25H7.25C6.55964 13.25 6 12.6904 6 12ZM10.7455 12C10.7455 11.3096 11.3052 10.75 11.9955 10.75H12.0045C12.6948 10.75 13.2545 11.3096 13.2545 12C13.2545 12.6904 12.6948 13.25 12.0045 13.25H11.9955C11.3052 13.25 10.7455 12.6904 10.7455 12ZM15.491 12C15.491 11.3096 16.0507 10.75 16.741 10.75H16.75C17.4404 10.75 18 11.3096 18 12C18 12.6904 17.4404 13.25 16.75 13.25H16.741C16.0507 13.25 15.491 12.6904 15.491 12Z',
  d5: 'M17 3C17 2.44772 17.4477 2 18 2C19.913 2 21.231 3.73702 21.231 5.57143C21.231 5.7037 21.2308 5.83139 21.2305 5.95493C21.2286 6.92941 21.2271 7.64597 21.3561 8.31956C21.4902 9.02032 21.7711 9.67768 22.4286 10.4355C23.1905 11.3136 23.1905 12.6864 22.4286 13.5645C21.7711 14.3223 21.4902 14.9797 21.3561 15.6804C21.2271 16.354 21.2286 17.0706 21.2305 18.0451C21.2308 18.1686 21.231 18.2963 21.231 18.4286C21.231 20.263 19.913 22 18 22C17.4477 22 17 21.5523 17 21C17 20.4477 17.4477 20 18 20C18.5513 20 19.231 19.4345 19.231 18.4286C19.231 18.3009 19.2306 18.1735 19.2302 18.0463C19.2271 17.1055 19.224 16.1805 19.3917 15.3045C19.5932 14.2518 20.0334 13.2733 20.9179 12.2538C21.0274 12.1277 21.0274 11.8723 20.9179 11.7462C20.0334 10.7267 19.5932 9.74823 19.3917 8.69554C19.224 7.81947 19.2271 6.89448 19.2302 5.95367C19.2306 5.82652 19.231 5.69908 19.231 5.57143C19.231 4.56552 18.5513 4 18 4C17.4477 4 17 3.55228 17 3Z',
  d6: 'M7 3C7 2.44772 6.55228 2 6 2C4.08695 2 2.76897 3.73702 2.76897 5.57143C2.76897 5.63284 2.76899 5.69342 2.76902 5.7532C2.76989 7.94318 2.77033 9.05366 1.57139 10.4355C0.809534 11.3136 0.809536 12.6864 1.5714 13.5645C2.22892 14.3223 2.50982 14.9797 2.64394 15.6804C2.77287 16.354 2.77143 17.0706 2.76947 18.0451C2.76923 18.1686 2.76897 18.2963 2.76897 18.4286C2.76897 20.263 4.08695 22 6 22C6.55228 22 7 21.5523 7 21C7 20.4477 6.55228 20 6 20C5.44872 20 4.76897 19.4345 4.76897 18.4286C4.76897 18.3009 4.76939 18.1735 4.76981 18.0463C4.77291 17.1055 4.77596 16.1805 4.60829 15.3045C4.4068 14.2518 3.96658 13.2733 3.08206 12.2538C2.97265 12.1277 2.97265 11.8723 3.08206 11.7462C4.77803 9.79147 4.77405 7.98584 4.76945 5.90134C4.76921 5.79216 4.76897 5.68221 4.76897 5.57143C4.76897 4.56552 5.44872 4 6 4C6.55228 4 7 3.55228 7 3Z',
  d7: 'M7.97314 12.001H7.98214M11.9806 12.001H11.9896M15.9881 12.001H15.9971',
  d8: 'M18.0041 3.99805H20.4427C20.4981 3.99805 20.543 4.04278 20.543 4.09795V10.0008L21.9821 11.9591C22.0082 11.9945 22.0079 12.0427 21.9816 12.0779L20.543 13.9971L20.543 19.8981C20.543 19.9533 20.4981 19.998 20.4427 19.998H17.9878',
  d9: 'M5.99595 4.00098H3.55737C3.50198 4.00098 3.45708 4.04571 3.45708 4.10088V10.0037L2.0179 11.9621C1.99187 11.9975 1.9921 12.0457 2.01847 12.0808L3.45708 14L3.45704 19.9011C3.45704 19.9562 3.50194 20.001 3.55734 20.001H6.01225',
  d10: 'M7 11H9.00897V13H7V11ZM10.9955 11H13.0045V13H10.9955V11ZM14.991 11H17V13H14.991V11Z',
  d11: 'M18.5 5H17V3H19.5C20.0523 3 20.5 3.44772 20.5 4V9.66667L21.8 11.4C22.0667 11.7556 22.0667 12.2444 21.8 12.6L20.5 14.3333V20C20.5 20.5523 20.0523 21 19.5 21H17V19H18.5V13.6667L19.75 12L18.5 10.3333V5Z',
  d12: 'M3.5 4C3.5 3.44772 3.94772 3 4.5 3H7V5H5.5V10.3333L4.25 12L5.5 13.6667V19H7V21H4.5C3.94772 21 3.5 20.5523 3.5 20V14.3333L2.2 12.6C1.93333 12.2444 1.93333 11.7556 2.2 11.4L3.5 9.66667V4Z',
};

export const IconCodeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-stroke-rounded IconCodeStrokeRounded"
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

export const IconCodeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-duotone-rounded IconCodeDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCodeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-twotone-rounded IconCodeTwotoneRounded"
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

export const IconCodeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-solid-rounded IconCodeSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-bulk-rounded IconCodeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-stroke-sharp IconCodeStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
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

export const IconCodeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="code-solid-sharp IconCodeSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCode: TheIconSelfPack = {
  name: 'Code',
  StrokeRounded: IconCodeStrokeRounded,
  DuotoneRounded: IconCodeDuotoneRounded,
  TwotoneRounded: IconCodeTwotoneRounded,
  SolidRounded: IconCodeSolidRounded,
  BulkRounded: IconCodeBulkRounded,
  StrokeSharp: IconCodeStrokeSharp,
  SolidSharp: IconCodeSolidSharp,
};
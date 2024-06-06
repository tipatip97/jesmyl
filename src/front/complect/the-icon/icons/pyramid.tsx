import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2V22',
  d2: 'M14.8692 13.6759L21.9887 17.5864M21.9887 17.5864L21.9944 17.5895M21.9887 17.5864C22.0642 17.1494 21.7569 16.6584 21.1866 15.7472L13.7843 3.91929C12.9835 2.63976 12.5831 2 12 2C11.4169 2 11.0165 2.63976 10.2157 3.91929L2.81338 15.7472C2.24312 16.6584 1.93582 17.1494 2.01127 17.5864M21.9887 17.5864C21.9824 17.6232 21.9733 17.6597 21.9614 17.696C21.8087 18.1627 21.267 18.3791 20.1838 18.8118L12.7814 21.7688C12.3956 21.9229 12.2026 22 12 22C11.7974 22 11.6045 21.9229 11.2186 21.7688L3.8162 18.8118C2.73296 18.3791 2.19134 18.1627 2.0386 17.696C2.02672 17.6597 2.01764 17.6232 2.01127 17.5864M2.00558 17.5895L2.01127 17.5864M2.01127 17.5864L9.13079 13.6759',
  d3: 'M20.1838 18.8118L12.7814 21.7688C12.3611 21.9367 12 21.633 12 21.1803V4C12 3.85951 12 3.78926 12.7184 3.57845C13.4369 3.36764 13.3814 3.28116 13.4036 3.31575C13.5206 3.498 13.6465 3.69918 13.7843 3.91929L21.1866 15.7472C21.7569 16.6584 22.0642 17.1494 21.9887 17.5864C21.9824 17.6232 21.9733 17.6597 21.9614 17.696C21.8087 18.1627 21.267 18.3791 20.1838 18.8118Z',
  d4: 'M12.1094 1.25C11.6952 1.25 11.3594 1.58579 11.3594 2V22C11.3594 22.4142 11.6952 22.75 12.1094 22.75C12.4614 22.75 12.7857 22.6195 13.0947 22.4951L20.6182 19.4896C21.1196 19.2894 21.5679 19.1103 21.9045 18.917C21.9945 18.8653 22.0395 18.8394 22.0786 18.7806C22.1385 18.6905 22.1368 18.5318 22.075 18.4431C22.0346 18.3851 21.977 18.3536 21.8618 18.2907L14.6172 14.3342C14.2537 14.1356 14.1199 13.68 14.3185 13.3164C14.517 12.9529 14.9727 12.8192 15.3362 13.0177L22.2776 16.8087C22.4924 16.9259 22.7215 16.7431 22.6164 16.5222C22.4589 16.1915 22.2201 15.81 21.953 15.3832L14.4989 3.47269C14.1247 2.87466 13.7998 2.35538 13.4903 1.99286C13.1647 1.61153 12.7289 1.25 12.1094 1.25Z',
  d5: 'M12.8594 2.22727C12.8594 1.68754 12.4303 1.25 11.901 1.25C11.2026 1.25 10.7242 1.66899 10.3955 2.06167C10.0871 2.43002 9.76738 2.95112 9.41504 3.52539C9.40299 3.54503 9.39091 3.56473 9.37878 3.58449L2.25963 15.1847C2.0079 15.5948 1.77251 15.9783 1.61558 16.3144C1.45115 16.6666 1.29799 17.1165 1.38421 17.6257C1.39834 17.7092 1.41839 17.7908 1.44394 17.8704C1.62237 18.4265 2.02107 18.7527 2.39478 18.9717C2.73247 19.1695 3.17639 19.3502 3.64771 19.5421C3.66603 19.5496 3.68438 19.557 3.70277 19.5645L10.7967 22.4543C10.8215 22.4644 10.8468 22.4748 10.8727 22.4855C11.1602 22.604 11.5146 22.75 11.901 22.75C12.4303 22.75 12.8594 22.3125 12.8594 21.7727V2.22727ZM10.9427 4.72042L4.58443 15.0809L8.69004 12.7812C9.15394 12.5214 9.73656 12.6942 9.99136 13.1673C10.2462 13.6404 10.0767 14.2345 9.61276 14.4944L4.0601 17.6045C4.16579 17.6483 4.28312 17.6962 4.41378 17.7495L10.9427 20.4091V4.72042Z',
  d6: 'M11.3594 2C11.3594 1.58579 11.6952 1.25 12.1094 1.25C12.7289 1.25 13.1647 1.61153 13.4903 1.99286C13.7998 2.35538 14.1247 2.87466 14.4989 3.47269L21.953 15.3832C22.2201 15.81 22.4589 16.1915 22.6164 16.5222C22.7797 16.8653 22.9141 17.2686 22.8372 17.714C22.8245 17.7873 22.8066 17.859 22.7836 17.9292C22.6249 18.4143 22.2694 18.7074 21.9045 18.917C21.5679 19.1103 21.1196 19.2894 20.6182 19.4896L13.0947 22.4951C12.7857 22.6195 12.4614 22.75 12.1094 22.75C11.6952 22.75 11.3594 22.4142 11.3594 22V2Z',
  d7: 'M22.8243 17.1051C22.8643 17.2971 22.876 17.5007 22.8391 17.714C22.8265 17.7873 22.8085 17.8591 22.7855 17.9293C22.6987 18.1947 22.5529 18.4027 22.3789 18.5709L14.6211 14.3342C14.2576 14.1356 14.1238 13.68 14.3224 13.3164C14.5209 12.9529 14.9766 12.8192 15.3401 13.0177L22.8243 17.1051Z',
  d8: 'M15 15L21.3854 17.7365M9 15L2.61489 17.7365M12.0003 2L2 18L12.0003 22L22.0003 18L12.0003 2Z',
  d9: 'M12.2493 1C12.5941 1 12.9146 1.17762 13.0973 1.47L22.751 17L15.6402 14.0801L14.8564 15.9201L22.0944 18.8942L12.6207 22.9285C12.3823 23.0238 12.1163 23.0238 11.8779 22.9285L1.87765 18.9285C1.60261 18.8185 1.3905 18.5922 1.29849 18.3106C1.20648 18.0291 1.24404 17.7212 1.40104 17.47L11.4013 1.46999C11.584 1.17761 11.9045 0.999998 12.2493 1ZM4.78809 15.8236L8.85467 14.0808L9.64251 15.9191L4.86155 17.9681L12.2489 20.9229L12.2489 3.88672L4.78809 15.8236Z',
};

export const IconPyramidStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-stroke-rounded IconPyramidStrokeRounded"
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

export const IconPyramidDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-duotone-rounded IconPyramidDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-twotone-rounded IconPyramidTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPyramidSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-solid-rounded IconPyramidSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconPyramidBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-bulk-rounded IconPyramidBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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

export const IconPyramidStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-stroke-sharp IconPyramidStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPyramidSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pyramid-solid-sharp IconPyramidSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPyramid: TheIconSelfPack = {
  name: 'Pyramid',
  StrokeRounded: IconPyramidStrokeRounded,
  DuotoneRounded: IconPyramidDuotoneRounded,
  TwotoneRounded: IconPyramidTwotoneRounded,
  SolidRounded: IconPyramidSolidRounded,
  BulkRounded: IconPyramidBulkRounded,
  StrokeSharp: IconPyramidStrokeSharp,
  SolidSharp: IconPyramidSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.00098 19.998H22.001',
  d2: 'M3.697 4.04178C3.07909 4.2103 3.007 4.91778 2.827 5.51778C2.67653 6.08204 2.35861 7.33023 2.14236 8.18298C1.981 8.93778 1.9594 9.23778 2.0554 9.71778C2.281 10.6178 3.061 10.9718 4.741 11.4398C5.58568 11.6558 6.181 11.837 7.081 12.077C7.23548 12.1264 7.71553 12.2475 8.101 12.3518C8.461 12.4778 8.761 12.4418 8.6938 12.7178C8.64698 12.8275 8.1034 13.4378 7.5994 13.9778C7.261 14.3978 7.033 14.4997 7.033 14.8178C7.033 14.8178 7.021 15.2978 7.69376 15.3578C7.801 15.4178 9.241 15.7778 9.781 15.9338C10.501 16.1138 11.041 15.8978 11.485 15.5978L13.681 14.1578C14.161 13.9418 14.281 14.033 14.821 14.177L19.621 15.4778C20.461 15.7778 21.181 15.0578 20.9698 14.2178C20.701 12.7178 20.221 11.8178 19.441 10.8578C18.181 9.35778 16.6448 8.77257 15.541 8.57778C15.0373 8.48889 13.1435 8.33911 11.341 8.20578C9.49344 8.06912 7.74174 7.94889 7.681 7.85778C6.361 7.55778 6.76899 5.61978 6.205 4.77378C5.981 4.43778 5.581 4.37778 4.981 4.19778C4.4725 4.06761 4.09567 3.93305 3.697 4.04178Z',
  d3: 'M6.25781 19.75H22.2506',
  d4: 'M2.78135 6.41851L3.076 5.3036C3.28216 4.52349 3.38525 4.13344 3.66841 3.92563C4.16321 3.56252 4.8516 3.85249 5.37498 3.99468C5.87868 4.13152 6.13054 4.19994 6.31311 4.36395C6.74825 4.75481 6.76979 5.56929 6.88636 6.11981C7.15304 7.37934 7.47614 7.64108 8.74063 7.73895C10.8787 7.90442 13.0183 8.05538 15.1551 8.23557C18.3012 8.50085 20.8941 11.0135 21.2458 14.1983C21.3196 14.9173 20.6273 15.4366 19.9638 15.2577L14.6668 13.8187C14.3942 13.7447 14.1035 13.7915 13.867 13.9475L11.5359 15.4857C11.0708 15.7505 10.5166 15.8197 9.99532 15.6781L7.67339 15.0473C7.30808 14.948 7.17108 14.5029 7.41992 14.2238L8.90576 12.5575C9.00546 12.4457 8.95332 12.2665 8.80972 12.2275L5.68406 11.3784C3.83086 10.8749 2.90425 10.6232 2.47917 9.8968C2.05408 9.17046 2.2965 8.25314 2.78135 6.41851Z',
  d5: 'M3.94916 3.78983C3.33153 3.95835 3.25947 4.66583 3.07955 5.26583C2.92915 5.83009 2.61137 7.07828 2.39522 7.93103C2.23393 8.68583 2.21234 8.98583 2.3083 9.46583C2.5338 10.3658 3.31345 10.7198 4.99269 11.1878C5.83699 11.4038 6.43204 11.585 7.33163 11.825C7.48604 11.8744 7.96587 11.9955 8.35117 12.0998C8.71101 12.2258 9.01087 12.1898 8.9437 12.4658C8.8969 12.5755 8.35357 13.1858 7.8498 13.7258C7.51155 14.1458 7.28365 14.2477 7.28365 14.5658C7.28365 14.5658 7.27166 15.0458 7.94411 15.1058C8.05131 15.1658 9.49066 15.5258 10.0304 15.6818C10.7501 15.8618 11.2898 15.6458 11.7336 15.3458L13.9287 13.9058C14.4084 13.6898 14.5284 13.781 15.0681 13.925L19.866 15.2258C20.7056 15.5258 21.4253 14.8058 21.2142 13.9658C20.9455 12.4658 20.4657 11.5658 19.6861 10.6058C18.4266 9.10583 16.8911 8.52062 15.7878 8.32583C15.2843 8.23694 13.3914 8.08716 11.5897 7.95383C9.74298 7.81717 7.99207 7.69694 7.93136 7.60583C6.61196 7.30583 7.01976 5.36783 6.45603 4.52183C6.23213 4.18583 5.83231 4.12583 5.23258 3.94583C4.72431 3.81566 4.34765 3.6811 3.94916 3.78983Z',
  d6: 'M6 20H22',
  d7: 'M3.69504 4.04178C3.07713 4.2103 3.00504 4.91778 2.82504 5.51778C2.67457 6.08204 2.35665 7.33023 2.1404 8.18298C1.97904 8.93778 1.95744 9.23778 2.05344 9.71778C2.27904 10.6178 3.05904 10.9718 4.73904 11.4398C5.58372 11.6558 6.17904 11.837 7.07904 12.077C7.23352 12.1264 7.71357 12.2475 8.09904 12.3518C8.45904 12.4778 8.75904 12.4418 8.69184 12.7178C8.64502 12.8275 8.10144 13.4378 7.59744 13.9778C7.25904 14.3978 7.03104 14.4997 7.03104 14.8178C7.03104 14.8178 7.01904 15.2978 7.6918 15.3578C7.79904 15.4178 9.23904 15.7778 9.77904 15.9338C10.499 16.1138 11.039 15.8978 11.483 15.5978L13.679 14.1578C14.159 13.9418 14.279 14.033 14.819 14.177L19.619 15.4778C20.459 15.7778 21.179 15.0578 20.9678 14.2178C20.699 12.7178 20.219 11.8178 19.439 10.8578C18.179 9.35778 16.6428 8.77257 15.539 8.57778C15.0353 8.48889 13.1415 8.33911 11.339 8.20578C9.49148 8.06912 7.73978 7.94889 7.67904 7.85778C6.35904 7.55778 6.76703 5.61978 6.20304 4.77378C5.97904 4.43778 5.57904 4.37778 4.97904 4.19778C4.47054 4.06761 4.09371 3.93305 3.69504 4.04178Z',
  d8: 'M5 20C5 19.4477 5.44772 19 6 19L22 19C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21L6 21C5.44772 21 5 20.5523 5 20Z',
  d9: 'M4.32628 3.52608C3.96834 3.47245 3.51446 3.47825 3.11351 3.77237C2.86481 3.9548 2.72293 4.20209 2.61875 4.46679C2.35341 5.14102 2.21382 5.87713 2.02896 6.57628C1.79443 7.46327 1.60533 8.17843 1.53304 8.76166C1.4579 9.36786 1.49812 9.90428 1.78798 10.3993C2.07725 10.8934 2.52619 11.1943 3.09349 11.4322C3.64078 11.6617 4.36249 11.8576 5.25984 12.1013L7.79965 12.791C7.87138 12.8105 7.89755 12.8986 7.84807 12.9541L6.78934 14.1409C6.28448 14.7068 6.57333 15.5864 7.285 15.7797L9.60799 16.4105C10.2557 16.5864 10.9462 16.501 11.5275 16.1702C11.5371 16.1647 11.5464 16.159 11.5555 16.153L13.8878 14.6148C14.005 14.5375 14.1479 14.5148 14.2815 14.5511L19.5818 15.9904C20.5491 16.2511 21.6051 15.5002 21.4919 14.3971L21.4915 14.3933C21.1135 10.9715 18.3293 8.27263 14.9432 7.98723C13.5132 7.8667 12.0801 7.75909 10.6497 7.65168C9.93965 7.59837 9.23029 7.5451 8.52232 7.49033C7.88928 7.44136 7.64547 7.35462 7.50861 7.23645C7.03251 6.82537 7.08086 5.89078 6.94852 5.31913C6.80514 4.69977 6.49083 4.17472 5.87887 3.94973C5.38995 3.76998 4.8397 3.60301 4.32628 3.52608Z',
  d10: 'M5.99219 19.9854H22',
  d11: 'M3.32467 3.98536L6.38098 4.13637C6.38591 4.13662 6.38992 4.1404 6.39045 4.14528L6.74513 7.45225L15.7613 8.69262C19.0323 9.42657 20.528 12.1311 20.9323 14.1649C21.0757 15.1374 20.9904 15.3139 20.8494 15.5233C20.6286 15.851 20.258 16.1369 19.4152 15.8672L13.095 14.0325L10.8637 15.6748C10.8612 15.6766 10.8582 15.6772 10.8553 15.6764L6.02807 14.4677C6.02005 14.4656 6.01779 14.4554 6.02424 14.4502L8.59929 12.3875L2.00368 10.0114C1.99896 10.0097 1.99623 10.0048 1.9973 9.99988L3.31439 3.9932C3.31543 3.98844 3.31978 3.98512 3.32467 3.98536Z',
  d12: 'M22.25 20.75L6.25 20.75L6.25 18.75L22.25 18.75L22.25 20.75Z',
  d13: 'M3.09385 3.8391C3.17106 3.48757 3.4871 3.24045 3.84688 3.25028L6.89152 3.33352C7.26703 3.34378 7.57703 3.63029 7.6168 4.00383L7.91204 6.77671C9.07196 6.92481 14.1523 7.63842 15.6772 7.85213C19.2221 8.30465 22.0144 11.2657 22.2469 14.8792L22.2472 14.885C22.3211 16.1914 21.0437 17.0146 19.9283 16.6698L13.7386 14.8811L11.7506 16.3257C11.5704 16.4566 11.3413 16.5007 11.1253 16.4459L6.31878 15.2265C6.04453 15.1569 5.83278 14.939 5.77119 14.6628C5.7096 14.3867 5.80866 14.0994 6.02735 13.9198L7.5704 12.6532L2.24693 10.7442C1.8919 10.6169 1.68665 10.2457 1.76757 9.87731L3.09385 3.8391Z',
};

export const IconAirplaneLanding01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-stroke-rounded IconAirplaneLanding01StrokeRounded"
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

export const IconAirplaneLanding01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-duotone-rounded IconAirplaneLanding01DuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneLanding01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-twotone-rounded IconAirplaneLanding01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneLanding01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-solid-rounded IconAirplaneLanding01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneLanding01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-bulk-rounded IconAirplaneLanding01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneLanding01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-stroke-sharp IconAirplaneLanding01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplaneLanding01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplane-landing-01-solid-sharp IconAirplaneLanding01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfAirplaneLanding01: TheIconSelfPack = {
  name: 'AirplaneLanding01',
  StrokeRounded: IconAirplaneLanding01StrokeRounded,
  DuotoneRounded: IconAirplaneLanding01DuotoneRounded,
  TwotoneRounded: IconAirplaneLanding01TwotoneRounded,
  SolidRounded: IconAirplaneLanding01SolidRounded,
  BulkRounded: IconAirplaneLanding01BulkRounded,
  StrokeSharp: IconAirplaneLanding01StrokeSharp,
  SolidSharp: IconAirplaneLanding01SolidSharp,
};
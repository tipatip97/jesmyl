import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 15.6837C11.0949 14.3069 13.504 15.1434 15 17',
  d2: 'M7 9.01067C7 9.01067 8.40944 8.88341 9.19588 9.50798M9.19588 9.50798L8.93275 10.3427C8.82896 10.6719 9.10031 11 9.4764 11C9.87165 11 10.1327 10.6434 9.92918 10.3348C9.74877 10.0612 9.50309 9.75196 9.19588 9.50798ZM14 9.01067C14 9.01067 15.4094 8.88341 16.1959 9.50798M16.1959 9.50798L15.9328 10.3427C15.829 10.6719 16.1003 11 16.4764 11C16.8717 11 17.1327 10.6434 16.9292 10.3348C16.7488 10.0612 16.5031 9.75196 16.1959 9.50798Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM14.4161 17.4701C13.0777 15.8092 11.0827 15.212 9.412 16.31C9.06585 16.5375 8.60082 16.4413 8.37332 16.0952C8.14583 15.749 8.24202 15.284 8.58817 15.0565C11.1072 13.4009 13.9305 14.4768 15.5841 16.529C15.844 16.8515 15.7932 17.3237 15.4707 17.5836C15.1481 17.8435 14.676 17.7927 14.4161 17.4701ZM6.25309 9.07811C6.29032 9.49053 6.65475 9.79471 7.06715 9.75766C7.09803 9.75592 7.18301 9.75137 7.24383 9.75046C7.36647 9.74861 7.537 9.75174 7.72649 9.77119C7.92804 9.79188 8.12123 9.82816 8.29196 9.88098L8.2175 10.1172C7.93235 11.0217 8.69425 11.75 9.47644 11.75C9.89752 11.75 10.3008 11.5582 10.5422 11.2126C10.7984 10.8459 10.8349 10.3458 10.5554 9.92189C10.3496 9.60981 10.0532 9.23109 9.66236 8.92066C9.09859 8.47293 8.37374 8.32975 7.87965 8.27903C7.61848 8.25222 7.3875 8.24813 7.22129 8.25063C7.14262 8.25181 7.00001 8.25989 6.9424 8.26315L6.94236 8.26315L6.94226 8.26316L6.93261 8.26371C6.52007 8.30095 6.21584 8.66557 6.25309 9.07811ZM13.2531 9.07811C13.2903 9.49053 13.6548 9.79471 14.0671 9.75766C14.098 9.75592 14.183 9.75137 14.2438 9.75046C14.3665 9.74861 14.537 9.75174 14.7265 9.77119C14.928 9.79188 15.1212 9.82816 15.292 9.88098L15.2175 10.1172C14.9324 11.0217 15.6943 11.75 16.4764 11.75C16.8975 11.75 17.3008 11.5582 17.5422 11.2126C17.7984 10.8459 17.8349 10.3458 17.5554 9.92189C17.3496 9.60981 17.0532 9.23109 16.6624 8.92066C16.0986 8.47293 15.3737 8.32975 14.8797 8.27903C14.6185 8.25222 14.3875 8.24813 14.2213 8.25063C14.1426 8.25181 13.9998 8.2599 13.9423 8.26316L13.9326 8.26371C13.5201 8.30095 13.2158 8.66557 13.2531 9.07811Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M14.4161 17.4701C13.0777 15.8092 11.0827 15.212 9.412 16.31C9.06585 16.5375 8.60082 16.4413 8.37332 16.0952C8.14583 15.749 8.24202 15.284 8.58817 15.0565C11.1072 13.4009 13.9305 14.4768 15.5841 16.529C15.844 16.8515 15.7932 17.3237 15.4707 17.5836C15.1481 17.8435 14.676 17.7927 14.4161 17.4701Z',
  d6: 'M14.0671 9.75766C13.6548 9.79471 13.2903 9.49053 13.2531 9.07811C13.2158 8.66557 13.5201 8.30095 13.9326 8.2637C13.9819 8.26093 14.1377 8.25188 14.2213 8.25063C14.3875 8.24813 14.6185 8.25222 14.8797 8.27903C15.3737 8.32975 16.0986 8.47293 16.6624 8.92067C17.0532 9.23109 17.3496 9.60981 17.5554 9.92189C17.8349 10.3458 17.7984 10.8459 17.5422 11.2126C17.3008 11.5582 16.8975 11.75 16.4764 11.75C15.6943 11.75 14.9324 11.0217 15.2175 10.1172L15.292 9.88098C15.1212 9.82816 14.928 9.79188 14.7265 9.77119C14.537 9.75174 14.3665 9.74861 14.2438 9.75046C14.183 9.75137 14.098 9.75592 14.0671 9.75766Z',
  d7: 'M7.06715 9.75766C6.65475 9.79471 6.29032 9.49053 6.25309 9.07811C6.21584 8.66557 6.52007 8.30095 6.93261 8.2637C6.98187 8.26093 7.13769 8.25188 7.22129 8.25063C7.3875 8.24813 7.61848 8.25222 7.87965 8.27903C8.37374 8.32975 9.09859 8.47293 9.66236 8.92067C10.0532 9.23109 10.3496 9.60981 10.5554 9.92189C10.8349 10.3458 10.7984 10.8459 10.5422 11.2126C10.3008 11.5582 9.89752 11.75 9.47644 11.75C8.69425 11.75 7.93235 11.0217 8.2175 10.1172L8.29196 9.88098C8.12123 9.82816 7.92804 9.79188 7.72649 9.77119C7.537 9.75174 7.36647 9.74861 7.24383 9.75046C7.18301 9.75137 7.09803 9.75592 7.06715 9.75766Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM14.4158 17.4701C13.0774 15.8092 11.0824 15.212 9.41171 16.31L8.58789 15.0565C11.107 13.4009 13.9302 14.4768 15.5838 16.529L14.4158 17.4701ZM6.79318 8.25083C6.70817 8.25209 6.5 8.26388 6.5 8.26388L6.63643 9.75787C6.63643 9.75787 7.11423 9.75195 7.30693 9.7714C7.51189 9.79209 7.70834 9.82837 7.88196 9.88118L7.80624 10.1174C7.51627 11.0219 8.29105 11.7502 9.08647 11.7502C9.51466 11.7502 9.92475 11.5584 10.1703 11.2128C10.4307 10.8462 10.4679 10.346 10.1836 9.92209C9.97435 9.61002 9.67302 9.2313 9.27553 8.92087C8.70222 8.47314 7.96512 8.32995 7.46268 8.27924C7.19709 8.25243 6.9622 8.24833 6.79318 8.25083ZM13.6184 8.26388L13.7592 9.75754C13.8839 9.7557 14.2326 9.75195 14.4253 9.7714C14.6302 9.79209 14.8267 9.82837 15.0003 9.88118L14.9246 10.1174C14.6346 11.0219 15.4094 11.7502 16.2048 11.7502C16.633 11.7502 17.0431 11.5584 17.2886 11.2128C17.5491 10.8462 17.5862 10.346 17.302 9.92209C17.0927 9.61002 16.7914 9.2313 16.3939 8.92087C15.8206 8.47314 15.0835 8.32995 14.581 8.27924C14.3154 8.25243 14.0806 8.24833 13.9115 8.25083C13.8265 8.25209 13.6184 8.26388 13.6184 8.26388Z',
};

export const IconDispleasedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-stroke-rounded IconDispleasedStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconDispleasedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-duotone-rounded IconDispleasedDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconDispleasedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-twotone-rounded IconDispleasedTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconDispleasedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-solid-rounded IconDispleasedSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDispleasedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-bulk-rounded IconDispleasedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDispleasedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-stroke-sharp IconDispleasedStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconDispleasedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="displeased-solid-sharp IconDispleasedSolidSharp"
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

export const iconPackOfDispleased: TheIconSelfPack = {
  name: 'Displeased',
  StrokeRounded: IconDispleasedStrokeRounded,
  DuotoneRounded: IconDispleasedDuotoneRounded,
  TwotoneRounded: IconDispleasedTwotoneRounded,
  SolidRounded: IconDispleasedSolidRounded,
  BulkRounded: IconDispleasedBulkRounded,
  StrokeSharp: IconDispleasedStrokeSharp,
  SolidSharp: IconDispleasedSolidSharp,
};
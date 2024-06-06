import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 10.5C2 7.18361 2 5.52541 3.0528 4.41834C3.22119 4.24128 3.40678 4.07752 3.60746 3.92894C4.86213 3 6.74142 3 10.5 3H13.5C17.2586 3 19.1379 3 20.3925 3.92894C20.5932 4.07752 20.7788 4.24128 20.9472 4.41834C22 5.52541 22 7.18361 22 10.5C22 13.8164 22 15.4746 20.9472 16.5817C20.7788 16.7587 20.5932 16.9225 20.3925 17.0711C19.1379 18 17.2586 18 13.5 18H10.5C6.74142 18 4.86213 18 3.60746 17.0711C3.40678 16.9225 3.22119 16.7587 3.0528 16.5817C2 15.4746 2 13.8164 2 10.5Z',
  d2: 'M10.5 7.5H10C9.06812 7.5 8.60218 7.5 8.23463 7.65224C7.74458 7.85523 7.35523 8.24458 7.15224 8.73463C7 9.10218 7 9.56812 7 10.5C7 11.4319 7 11.8978 7.15224 12.2654C7.35523 12.7554 7.74458 13.1448 8.23463 13.3478C8.60218 13.5 9.06812 13.5 10 13.5H10.5M17 7.5H16.5C15.5681 7.5 15.1022 7.5 14.7346 7.65224C14.2446 7.85523 13.8552 8.24458 13.6522 8.73463C13.5 9.10218 13.5 9.56812 13.5 10.5C13.5 11.4319 13.5 11.8978 13.6522 12.2654C13.8552 12.7554 14.2446 13.1448 14.7346 13.3478C15.1022 13.5 15.5681 13.5 16.5 13.5H17',
  d3: 'M2 21H22',
  d4: 'M2.22222 20.25C1.54721 20.25 1 20.6977 1 21.25C1 21.8023 1.54721 22.25 2.22222 22.25H21.7778C22.4528 22.25 23 21.8023 23 21.25C23 20.6977 22.4528 20.25 21.7778 20.25H2.22222Z',
  d5: 'M10.4552 1.75H13.5448H13.5448C15.3862 1.74999 16.8282 1.74999 17.9642 1.87029C19.1201 1.9927 20.057 2.24735 20.8388 2.82617C21.0736 2.99997 21.2918 3.19236 21.4907 3.4015C22.1653 4.1109 22.4681 4.97477 22.6116 6.02959C22.75 7.04762 22.75 8.33342 22.75 9.9445V10.0555C22.75 11.6666 22.75 12.9524 22.6116 13.9704C22.4681 15.0252 22.1653 15.8891 21.4907 16.5985C21.2918 16.8076 21.0736 17 20.8388 17.1738C20.057 17.7526 19.1201 18.0073 17.9642 18.1297C16.8282 18.25 15.3861 18.25 13.5448 18.25H10.4551C8.61381 18.25 7.17176 18.25 6.03578 18.1297C4.87986 18.0073 3.94296 17.7526 3.16118 17.1738C2.92644 17 2.70821 16.8076 2.50932 16.5985C1.83469 15.8891 1.53192 15.0252 1.38844 13.9704C1.24997 12.9524 1.24998 11.6666 1.25 10.0555V10.0555V9.94451C1.24998 8.33342 1.24997 7.04763 1.38844 6.02959C1.53192 4.97477 1.83469 4.1109 2.50932 3.4015C2.70821 3.19236 2.92644 2.99997 3.16118 2.82617C3.94296 2.24735 4.87986 1.9927 6.03578 1.87029C7.17177 1.74999 8.61384 1.74999 10.4552 1.75H10.4552ZM10.1646 6.00279L9.67419 6.00279C9.59468 6.00279 9.51439 6.0021 9.43357 6.00141C8.85867 5.99649 8.25729 5.99134 7.72356 6.23099C7.04595 6.53526 6.50759 7.11888 6.22692 7.85345C6.10247 8.17915 6.05684 8.50883 6.03609 8.83843C5.98797 9.60294 5.98797 10.397 6.03609 11.1616C6.05684 11.4912 6.10247 11.8209 6.22692 12.1466C6.50759 12.8811 7.04595 13.4647 7.72356 13.769C8.25729 14.0087 8.85867 14.0035 9.43357 13.9986C9.51438 13.9979 9.59467 13.9972 9.67418 13.9972L10.1646 13.9972C10.6737 13.9972 11.0864 13.5498 11.0864 12.9979C11.0864 12.446 10.6737 11.9986 10.1646 11.9986H9.70367C9.26155 11.9986 8.97612 11.9981 8.75767 11.9819C8.26013 11.9451 7.91096 11.5899 7.87544 11.0255C7.86054 10.7887 7.86004 10.4793 7.86004 10C7.86004 9.52071 7.86054 9.21129 7.87544 8.97448C7.91096 8.41015 8.26013 8.05489 8.75767 8.0181C8.97612 8.00194 9.26155 8.0014 9.70367 8.0014H10.1646C10.6737 8.0014 11.0864 7.55399 11.0864 7.00209C11.0864 6.4502 10.6737 6.00279 10.1646 6.00279ZM17.0782 6.00279L16.5878 6.00279C16.5083 6.00279 16.428 6.0021 16.3472 6.00141C15.7723 5.99649 15.1709 5.99134 14.6372 6.23099C13.9596 6.53526 13.4212 7.11888 13.1405 7.85345C13.0161 8.17915 12.9704 8.50883 12.9497 8.83843C12.9016 9.60294 12.9016 10.397 12.9497 11.1616C12.9704 11.4912 13.0161 11.8209 13.1405 12.1466C13.4212 12.8811 13.9596 13.4647 14.6372 13.769C15.1709 14.0087 15.7723 14.0035 16.3472 13.9986C16.428 13.9979 16.5083 13.9972 16.5878 13.9972L17.0782 13.9972C17.5873 13.9972 18 13.5498 18 12.9979C18 12.446 17.5873 11.9986 17.0782 11.9986H16.6173C16.1752 11.9986 15.8897 11.9981 15.6713 11.9819C15.1737 11.9451 14.8246 11.5899 14.7891 11.0255C14.7741 10.7887 14.7736 10.4793 14.7736 10C14.7736 9.52071 14.7741 9.21129 14.7891 8.97448C14.8246 8.41015 15.1737 8.05489 15.6713 8.0181C15.8897 8.00194 16.1752 8.0014 16.6173 8.0014H17.0782C17.5873 8.0014 18 7.55399 18 7.00209C18 6.4502 17.5873 6.00279 17.0782 6.00279Z',
  d6: 'M13.5448 1.75H10.4552C8.61385 1.74999 7.17178 1.74999 6.03578 1.87029C4.87986 1.9927 3.94296 2.24735 3.16118 2.82617C2.92644 2.99997 2.70821 3.19236 2.50932 3.4015C1.83469 4.1109 1.53192 4.97477 1.38844 6.02959C1.24997 7.04763 1.24998 8.33342 1.25 9.94451V10.0555C1.24998 11.6666 1.24997 12.9524 1.38844 13.9704C1.53192 15.0252 1.83469 15.8891 2.50932 16.5985C2.70821 16.8076 2.92644 17 3.16118 17.1738C3.94296 17.7526 4.87986 18.0073 6.03578 18.1297C7.17176 18.25 8.61381 18.25 10.4551 18.25H13.5448C15.3861 18.25 16.8282 18.25 17.9642 18.1297C19.1201 18.0073 20.057 17.7526 20.8388 17.1738C21.0736 17 21.2918 16.8076 21.4907 16.5985C22.1653 15.8891 22.4681 15.0252 22.6116 13.9704C22.75 12.9524 22.75 11.6666 22.75 10.0555V9.9445C22.75 8.33342 22.75 7.04762 22.6116 6.02959C22.4681 4.97477 22.1653 4.1109 21.4907 3.4015C21.2918 3.19236 21.0736 2.99997 20.8388 2.82617C20.057 2.24735 19.1201 1.9927 17.9642 1.87029C16.8282 1.74999 15.3862 1.74999 13.5448 1.75Z',
  d7: 'M9.67419 6.00279L10.1646 6.00279C10.6737 6.00279 11.0864 6.4502 11.0864 7.00209C11.0864 7.55399 10.6737 8.0014 10.1646 8.0014H9.70367C9.26154 8.0014 8.97612 8.00194 8.75767 8.0181C8.26013 8.05489 7.91096 8.41015 7.87544 8.97448C7.86054 9.21129 7.86004 9.52071 7.86004 10C7.86004 10.4793 7.86054 10.7887 7.87544 11.0255C7.91096 11.5899 8.26013 11.9451 8.75767 11.9819C8.97612 11.9981 9.26154 11.9986 9.70367 11.9986H10.1646C10.6737 11.9986 11.0864 12.446 11.0864 12.9979C11.0864 13.5498 10.6737 13.9972 10.1646 13.9972L9.67418 13.9972C9.02909 13.9972 8.33231 14.0424 7.72356 13.769C7.04595 13.4647 6.50759 12.8811 6.22692 12.1466C6.10247 11.8208 6.05684 11.4912 6.03609 11.1616C5.98797 10.397 5.98797 9.60294 6.03609 8.83843C6.05684 8.50883 6.10247 8.17915 6.22692 7.85345C6.50759 7.11888 7.04595 6.53526 7.72356 6.23099C8.33232 5.95765 9.02909 6.00277 9.67419 6.00279ZM16.5878 6.00279L17.0782 6.00279C17.5873 6.00279 18 6.4502 18 7.00209C18 7.55399 17.5873 8.0014 17.0782 8.0014H16.6173C16.1752 8.0014 15.8897 8.00194 15.6713 8.0181C15.1737 8.05489 14.8246 8.41015 14.7891 8.97448C14.7741 9.21129 14.7736 9.52071 14.7736 10C14.7736 10.4793 14.7741 10.7887 14.7891 11.0255C14.8246 11.5899 15.1737 11.9451 15.6713 11.9819C15.8897 11.9981 16.1752 11.9986 16.6173 11.9986H17.0782C17.5873 11.9986 18 12.446 18 12.9979C18 13.5498 17.5873 13.9972 17.0782 13.9972L16.5878 13.9972C15.9427 13.9972 15.2459 14.0424 14.6372 13.769C13.9596 13.4647 13.4212 12.8811 13.1405 12.1466C13.0161 11.8208 12.9704 11.4912 12.9497 11.1616C12.9016 10.397 12.9016 9.60294 12.9497 8.83843C12.9704 8.50883 13.0161 8.17915 13.1405 7.85345C13.4212 7.11888 13.9596 6.53526 14.6372 6.23099C15.2459 5.95765 15.9427 6.00277 16.5878 6.00279Z',
  d8: 'M22 18V3H2V18H22Z',
  d9: 'M10.5 7.5H7V13.5H10.5M17 7.5H13.5V13.5H17',
  d10: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V18C1.25 18.4142 1.58579 18.75 2 18.75H22C22.4142 18.75 22.75 18.4142 22.75 18V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM11 6.5H6.5V14.5H11V12.5H8.5V8.5H11V6.5ZM17.5 6.5H13V14.5H17.5V12.5H15V8.5H17.5V6.5Z',
  d11: 'M22.75 21.75H1.25V19.75H22.75V21.75Z',
};

export const IconOpenCaptionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-stroke-rounded IconOpenCaptionStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconOpenCaptionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-duotone-rounded IconOpenCaptionDuotoneRounded"
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

export const IconOpenCaptionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-twotone-rounded IconOpenCaptionTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconOpenCaptionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-solid-rounded IconOpenCaptionSolidRounded"
    >
      <path 
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

export const IconOpenCaptionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-bulk-rounded IconOpenCaptionBulkRounded"
    >
      <path 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOpenCaptionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-stroke-sharp IconOpenCaptionStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
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

export const IconOpenCaptionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="open-caption-solid-sharp IconOpenCaptionSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfOpenCaption: TheIconSelfPack = {
  name: 'OpenCaption',
  StrokeRounded: IconOpenCaptionStrokeRounded,
  DuotoneRounded: IconOpenCaptionDuotoneRounded,
  TwotoneRounded: IconOpenCaptionTwotoneRounded,
  SolidRounded: IconOpenCaptionSolidRounded,
  BulkRounded: IconOpenCaptionBulkRounded,
  StrokeSharp: IconOpenCaptionStrokeSharp,
  SolidSharp: IconOpenCaptionSolidSharp,
};
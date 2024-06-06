import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z',
  d2: 'M8 9.24138H12M16 9.24138H14.5714M12 9.24138H14.5714M12 9.24138V8M14.5714 9.24138C14.1025 10.939 13.1207 12.5439 12 13.9542M9.14286 17C10.0488 16.1565 11.072 15.122 12 13.9542M12 13.9542C11.4286 13.2759 10.6286 12.1784 10.4 11.6818M12 13.9542L13.7143 15.7586',
  d3: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248L3.93544 22.2469C3.66155 22.2403 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.45874 19.9852 2.61542 19.6885L2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273ZM13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5V7.74138H8C7.44772 7.74138 7 8.18909 7 8.74138C7 9.29366 7.44772 9.74138 8 9.74138H13.1495C12.8369 10.4449 12.437 11.1348 11.9804 11.8011C11.9486 11.7572 11.917 11.7133 11.886 11.6697C11.5853 11.2476 11.3791 10.9173 11.3084 10.7637C11.0774 10.262 10.4835 10.0425 9.98186 10.2734C9.48017 10.5044 9.26068 11.0983 9.49162 11.6C9.64946 11.9429 9.95755 12.4096 10.2569 12.8299C10.4019 13.0336 10.5567 13.2426 10.7114 13.4443C9.96631 14.314 9.18066 15.0985 8.46144 15.7681C8.05722 16.1444 8.03463 16.7772 8.41096 17.1814C8.7873 17.5856 9.42006 17.6082 9.82428 17.2319C10.5216 16.5826 11.2948 15.8156 12.0477 14.9562L12.9893 15.9474C13.3697 16.3478 14.0027 16.364 14.4031 15.9836C14.8034 15.6032 14.8197 14.9703 14.4393 14.5699L13.3114 13.3827C14.1153 12.2796 14.8343 11.0527 15.3028 9.74138H16C16.5523 9.74138 17 9.29366 17 8.74138C17 8.18909 16.5523 7.74138 16 7.74138H13V7.5Z',
  d4: 'M14.2204 1.82273C12.7601 1.72566 11.2369 1.72586 9.77965 1.82273C5.213 2.12629 1.58972 5.81258 1.2918 10.4224C1.23607 11.2848 1.23607 12.1768 1.2918 13.0392C1.40272 14.7556 2.15148 16.304 2.98381 17.5604C3.23314 18.0419 3.10323 18.7641 2.6369 19.6478L2.61542 19.6885C2.45874 19.9852 2.30536 20.2757 2.21688 20.5234C2.12313 20.7858 2.02623 21.2025 2.26791 21.6145C2.48996 21.9931 2.84475 22.1318 3.13152 22.1873C3.36961 22.2334 3.66155 22.2403 3.93544 22.2469L3.98117 22.248C5.40092 22.2825 6.40136 21.8726 7.1938 21.2883C7.35108 21.1723 7.45909 21.0929 7.54041 21.037C7.65868 21.0804 7.8203 21.1467 8.05839 21.2448C8.59978 21.4677 9.21472 21.6013 9.77965 21.6389C11.2369 21.7357 12.7601 21.7359 14.2204 21.6389C18.787 21.3353 22.4103 17.649 22.7082 13.0392C22.7639 12.1768 22.7639 11.2848 22.7082 10.4224C22.4103 5.81258 18.787 2.12629 14.2204 1.82273Z',
  d5: 'M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.74138H16C16.5523 7.74138 17 8.18909 17 8.74138C17 9.29366 16.5523 9.74138 16 9.74138H15.3028C14.8343 11.0527 14.1153 12.2796 13.3114 13.3827L14.4393 14.5699C14.8197 14.9703 14.8034 15.6032 14.4031 15.9836C14.0027 16.364 13.3697 16.3478 12.9893 15.9474L12.0477 14.9562C11.2948 15.8156 10.5216 16.5826 9.82428 17.2319C9.42006 17.6082 8.7873 17.5856 8.41096 17.1814C8.03463 16.7772 8.05722 16.1444 8.46144 15.7681C9.18066 15.0985 9.96631 14.314 10.7114 13.4443C10.5567 13.2426 10.4019 13.0336 10.2569 12.8299C9.95755 12.4096 9.64946 11.9429 9.49162 11.6C9.26068 11.0983 9.48017 10.5044 9.98186 10.2734C10.4835 10.0425 11.0774 10.262 11.3084 10.7637C11.3791 10.9173 11.5853 11.2476 11.886 11.6697C11.917 11.7133 11.9486 11.7572 11.9804 11.8011C12.437 11.1348 12.8369 10.4449 13.1495 9.74138H8C7.44772 9.74138 7 9.29366 7 8.74138C7 8.18909 7.44772 7.74138 8 7.74138H11V7.5C11 6.94772 11.4477 6.5 12 6.5Z',
  d6: 'M7.94556 9.20328H11.9102M11.9102 9.20328H14.4588M11.9102 9.20328V7.47168M15.8748 9.20328H14.4588M14.4588 9.20328C13.9941 10.8914 13.0209 12.4873 11.9102 13.8896M11.9102 13.8896C10.9904 15.0509 9.97623 16.0796 9.07831 16.9183M11.9102 13.8896C11.3438 13.2152 10.5509 12.1238 10.3243 11.63M11.9102 13.8896L13.6093 15.6839',
  d7: 'M9.79557 2.53163C3.17064 2.92672 -0.574935 11.2072 3.63031 17.3717L2.00109 21.3006C1.96813 21.3801 2.04461 21.4612 2.12556 21.4326L6.45142 19.9027C8.5543 21.2863 14.8989 21.4098 17.3422 19.9027C20.3738 18.2346 22.8854 15.1811 21.4375 8.2143C20.7594 6.29528 18.4088 2.92633 13.7257 2.4375L9.79557 2.53163Z',
  d8: 'M14.1397 1.7722C13.8196 1.74999 13.4477 1.74999 12.7887 1.75H12.7886H11.2096H11.2096C10.5505 1.74999 10.1787 1.74999 9.85863 1.7722C5.25486 2.09176 1.5909 5.75571 1.27135 10.3595C1.24913 10.6796 1.24914 11.0514 1.24915 11.7105V11.7105V11.7895V11.7895C1.24914 12.4486 1.24913 12.8204 1.27135 13.1405C1.38518 14.7804 1.92386 16.3022 2.77835 17.5954L1.47397 22.25L6.43623 20.8113C7.48134 21.3226 8.63745 21.643 9.85863 21.7278C10.1787 21.75 10.5505 21.75 11.2096 21.75H12.7887C13.4477 21.75 13.8196 21.75 14.1397 21.7278C18.7434 21.4082 22.4074 17.7443 22.7269 13.1405C22.7492 12.8204 22.7492 12.4486 22.7491 11.7895V11.7105C22.7492 11.0514 22.7492 10.6796 22.7269 10.3595C22.4074 5.75571 18.7434 2.09176 14.1397 1.7722ZM7.99915 8.24138H10.9991V7.5H12.9991V8.24138H15.9991V10.2414H15.3019C14.8335 11.5527 14.1144 12.7796 13.3105 13.8827L14.4384 15.0699L12.9884 16.4474L12.0468 15.4562C11.2939 16.3156 10.5208 17.0826 9.82342 17.7319L8.46058 16.2681C9.17981 15.5985 9.96545 14.814 10.7106 13.9443C10.5559 13.7426 10.4011 13.5336 10.256 13.3299C9.95669 12.9096 9.64861 12.4429 9.49076 12.1L11.3075 11.2637C11.3783 11.4173 11.5845 11.7476 11.8851 12.1697C11.9162 12.2133 11.9477 12.2572 11.9796 12.3011C12.4361 11.6348 12.8361 10.9449 13.1486 10.2414H7.99915V8.24138Z',
};

export const IconMessageTranslateStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-stroke-rounded IconMessageTranslateStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageTranslateDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-duotone-rounded IconMessageTranslateDuotoneRounded"
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

export const IconMessageTranslateTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-twotone-rounded IconMessageTranslateTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMessageTranslateSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-solid-rounded IconMessageTranslateSolidRounded"
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

export const IconMessageTranslateBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-bulk-rounded IconMessageTranslateBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconMessageTranslateStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-stroke-sharp IconMessageTranslateStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageTranslateSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-translate-solid-sharp IconMessageTranslateSolidSharp"
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

export const iconPackOfMessageTranslate: TheIconSelfPack = {
  name: 'MessageTranslate',
  StrokeRounded: IconMessageTranslateStrokeRounded,
  DuotoneRounded: IconMessageTranslateDuotoneRounded,
  TwotoneRounded: IconMessageTranslateTwotoneRounded,
  SolidRounded: IconMessageTranslateSolidRounded,
  BulkRounded: IconMessageTranslateBulkRounded,
  StrokeSharp: IconMessageTranslateStrokeSharp,
  SolidSharp: IconMessageTranslateSolidSharp,
};
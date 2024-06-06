import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 19.1414C17.1962 20.9097 14.7255 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C14.7974 2 17.3265 3.14864 19.1414 5',
  d2: 'M8 15C8.91212 16.2144 10.3643 17 12 17C12.7111 17 13.3875 16.8515 14 16.5839',
  d3: 'M8.00897 9L8 9',
  d4: 'M22 15L22 15M22 18L22 18M22 21L22 21',
  d5: 'M22 12C21.7927 11.6041 21.689 11.4062 21.552 11.2328C21.2015 10.7894 20.6784 10.4407 20.0558 10.2354C19.8124 10.1551 19.5416 10.1034 19 10',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7C14.3431 7 13 8.34315 13 10C13 11.6569 14.3431 13 16 13Z',
  d7: 'M19 10C19 11.6569 17.6569 13 16 13C14.3431 13 13 11.6569 13 10C13 8.34315 14.3431 7 16 7C17.6569 7 19 8.34315 19 10ZM19 10C19.5416 10.1034 19.8124 10.1551 20.0558 10.2354C20.6784 10.4407 21.2015 10.7894 21.552 11.2328C21.689 11.4062 21.7927 11.6041 22 12',
  d8: 'M15.8748 5.75C13.5275 5.75 11.6248 7.65279 11.6248 10C11.6248 12.3472 13.5275 14.25 15.8748 14.25C17.2095 14.25 18.399 13.6351 19.1776 12.6744L19.1776 12.6744C19.2071 12.638 19.2219 12.6198 19.2473 12.5995C19.3293 12.5341 19.5097 12.5252 19.5977 12.5823C19.625 12.6 19.6311 12.6062 19.6433 12.6185L19.6451 12.6204C19.6451 12.6204 19.6323 12.6075 19.6363 12.612C19.6538 12.6315 19.6716 12.658 19.683 12.6816C19.6862 12.6882 19.689 12.6949 19.6947 12.7083C19.7299 12.7911 19.7796 12.8974 19.8391 13.0076C19.9905 13.2879 20.0661 13.4281 20.0675 13.501C20.0688 13.5738 19.9978 13.7178 19.8558 14.0058L19.8557 14.0058L19.8557 14.0059C19.7088 14.3037 19.6258 14.6388 19.6248 14.9933C19.6236 15.3794 19.7198 15.7432 19.8903 16.0612C20.0201 16.3035 20.085 16.4247 20.085 16.5C20.085 16.5753 20.0201 16.6965 19.8903 16.9388C19.7208 17.2549 19.6248 17.6162 19.6248 18C19.6248 18.256 19.6675 18.5021 19.7463 18.7314C19.8247 18.9597 19.8639 19.0738 19.8458 19.1561C19.8276 19.2384 19.7625 19.3063 19.6323 19.442L19.6322 19.4421C17.6758 21.4808 14.9235 22.75 11.8748 22.75C5.9377 22.75 1.12476 17.9371 1.12476 12C1.12476 6.06294 5.9377 1.25 11.8748 1.25C16.1302 1.25 19.8082 3.72264 21.5502 7.30957C21.8176 7.86006 21.9513 8.1353 21.8518 8.27936C21.8376 8.29987 21.8238 8.31558 21.8052 8.33222C21.6749 8.44911 21.3416 8.33664 20.6748 8.11171L20.6748 8.1117C20.4005 8.00377 20.0997 7.92826 19.8139 7.87586C19.6723 7.84988 19.6015 7.8369 19.5514 7.80452C19.5013 7.77214 19.4588 7.71063 19.3739 7.58762L19.3738 7.58759C18.6077 6.47817 17.3272 5.75 15.8748 5.75ZM7.42439 14.4003C7.7556 14.1515 8.22574 14.2184 8.47449 14.5496C9.25107 15.5835 10.485 16.25 11.8748 16.25C12.4806 16.25 13.0549 16.1237 13.5745 15.8966C13.954 15.7307 14.3962 15.904 14.562 16.2835C14.7279 16.6631 14.5547 17.1052 14.1751 17.2711C13.4698 17.5794 12.6912 17.75 11.8748 17.75C9.99325 17.75 8.32278 16.8453 7.2751 15.4504C7.02635 15.1192 7.09319 14.649 7.42439 14.4003ZM7.87029 7.75C7.1824 7.75 6.62476 8.30964 6.62476 9C6.62476 9.69036 7.1824 10.25 7.87029 10.25H7.87923C8.56711 10.25 9.12476 9.69036 9.12476 9C9.12476 8.30964 8.56711 7.75 7.87923 7.75H7.87029Z',
  d9: 'M20.8748 14.997C20.8764 14.4447 21.3255 13.9984 21.8777 14C22.43 14.0017 22.8764 14.4507 22.8748 15.003C22.8731 15.5553 22.424 16.0016 21.8718 16C21.3195 15.9983 20.8731 15.5493 20.8748 14.997Z',
  d10: 'M20.8748 18C20.8748 17.4477 21.3225 17 21.8748 17C22.427 17 22.8748 17.4477 22.8748 18C22.8748 18.5523 22.427 19 21.8748 19C21.3225 19 20.8748 18.5523 20.8748 18Z',
  d11: 'M20.8748 21C20.8748 20.4477 21.3225 20 21.8748 20C22.427 20 22.8748 20.4477 22.8748 21C22.8748 21.5523 22.427 22 21.8748 22C21.3225 22 20.8748 21.5523 20.8748 21Z',
  d12: 'M18.7088 10.9864C18.3009 12.1587 17.1861 13 15.8748 13C14.2179 13 12.8748 11.6569 12.8748 10C12.8748 8.34315 14.2179 7 15.8748 7C17.1861 7 18.3009 7.84132 18.7088 9.01362C19.0127 9.0189 19.7451 9.08071 20.2439 9.28568C21.0221 9.54226 21.7211 9.99226 22.2115 10.6127C22.4078 10.8611 22.5851 11.2 22.7608 11.536C23.017 12.0253 22.8281 12.6296 22.3389 12.8859C21.8496 13.1421 21.2453 12.9532 20.9891 12.464C20.765 12.0362 20.7082 11.9361 20.6424 11.8529C20.4319 11.5865 20.0847 11.3391 19.6176 11.1851C19.4528 11.1307 19.2611 11.0918 18.7088 10.9864Z',
  d13: 'M15.8748 5.75C13.5275 5.75 11.6248 7.65279 11.6248 10C11.6248 12.3472 13.5275 14.25 15.8748 14.25C17.2095 14.25 18.399 13.6351 19.1776 12.6744C19.2071 12.638 19.2219 12.6198 19.2473 12.5995C19.3293 12.5341 19.5097 12.5252 19.5977 12.5823C19.625 12.6 19.6311 12.6062 19.6433 12.6185C19.6511 12.6265 19.6315 12.6066 19.6363 12.612C19.6538 12.6315 19.6716 12.658 19.683 12.6816C19.6862 12.6882 19.689 12.6949 19.6947 12.7083C19.7299 12.7911 19.7796 12.8974 19.8391 13.0076C19.9905 13.2879 20.0661 13.4281 20.0675 13.501C20.0688 13.5739 19.9978 13.7179 19.8557 14.0059C19.7088 14.3037 19.6258 14.6388 19.6248 14.9933C19.6236 15.3794 19.7198 15.7432 19.8903 16.0612C20.0201 16.3035 20.085 16.4247 20.085 16.5C20.085 16.5753 20.0201 16.6965 19.8903 16.9388C19.7208 17.2549 19.6248 17.6162 19.6248 18C19.6248 18.256 19.6675 18.5021 19.7463 18.7314C19.8247 18.9597 19.8639 19.0738 19.8458 19.1561C19.8276 19.2384 19.7625 19.3063 19.6322 19.4421C17.6758 21.4808 14.9235 22.75 11.8748 22.75C5.9377 22.75 1.12476 17.9371 1.12476 12C1.12476 6.06294 5.9377 1.25 11.8748 1.25C16.1302 1.25 19.8082 3.72264 21.5502 7.30957C21.8176 7.86006 21.9513 8.1353 21.8518 8.27936C21.8376 8.29987 21.8238 8.31558 21.8052 8.33222C21.6749 8.44911 21.3415 8.33664 20.6748 8.1117C20.4005 8.00377 20.0997 7.92826 19.8139 7.87586C19.6723 7.84989 19.6015 7.8369 19.5514 7.80452C19.5013 7.77214 19.4588 7.71062 19.3738 7.58759C18.6077 6.47817 17.3272 5.75 15.8748 5.75Z',
  d14: 'M7.42439 14.4003C7.75559 14.1516 8.22574 14.2184 8.47449 14.5496C9.25107 15.5836 10.485 16.25 11.8748 16.25C12.4806 16.25 13.0549 16.1237 13.5745 15.8967C13.954 15.7308 14.3962 15.904 14.562 16.2836C14.7279 16.6631 14.5547 17.1053 14.1751 17.2712C13.4698 17.5794 12.6912 17.75 11.8748 17.75C9.99325 17.75 8.32278 16.8454 7.2751 15.4505C7.02635 15.1192 7.09319 14.6491 7.42439 14.4003Z',
  d15: 'M6.62476 9C6.62476 8.30964 7.1824 7.75 7.87029 7.75L7.87923 7.75C8.56711 7.75 9.12476 8.30964 9.12476 9C9.12476 9.69036 8.56711 10.25 7.87923 10.25L7.87029 10.25C7.1824 10.25 6.62476 9.69036 6.62476 9Z',
  d16: 'M15.875 14.25C17.4124 14.25 18.7573 13.4344 19.5035 12.2133C19.6887 12.3015 19.8007 12.4007 19.8557 12.4689C19.86 12.4756 19.87 12.4916 19.8877 12.5228C19.93 12.5972 19.9918 12.7132 20.104 12.9275L20.3319 13.3625C19.8983 13.7713 19.6269 14.3504 19.625 14.9933C19.6233 15.572 19.8402 16.1003 20.1979 16.5C19.8416 16.8981 19.625 17.4237 19.625 18C19.625 18.4095 19.7344 18.7934 19.9255 19.1242C17.9561 21.3481 15.0792 22.75 11.875 22.75C5.93794 22.75 1.125 17.9371 1.125 12C1.125 6.06294 5.93794 1.25 11.875 1.25C16.8656 1.25 21.062 4.65078 22.273 9.26136C21.7621 8.84659 21.1727 8.53828 20.5579 8.33556C20.2719 8.24126 19.9155 8.1877 19.7059 8.1583C19.0198 6.7337 17.5634 5.75 15.875 5.75C13.5278 5.75 11.625 7.65279 11.625 10C11.625 12.3472 13.5278 14.25 15.875 14.25ZM8.47478 14.5498C9.25135 15.5838 10.4853 16.2502 11.8751 16.2502C12.4809 16.2502 13.0552 16.1239 13.5748 15.8968L14.1754 17.2713C13.47 17.5796 12.6915 17.7502 11.8751 17.7502C9.99353 17.7502 8.32306 16.8455 7.27539 15.4506L8.47478 14.5498ZM7.875 7.75C7.18464 7.75 6.625 8.30964 6.625 9C6.625 9.69036 7.18464 10.25 7.875 10.25H7.88397C8.57433 10.25 9.13397 9.69036 9.13397 9C9.13397 8.30964 8.57433 7.75 7.88397 7.75H7.875Z',
  d17: 'M20.875 14.997C20.8767 14.4447 21.3257 13.9984 21.878 14C22.4303 14.0017 22.8766 14.4507 22.875 15.003C22.8733 15.5553 22.4243 16.0016 21.872 16C21.3197 15.9983 20.8734 15.5493 20.875 14.997Z',
  d18: 'M20.875 18C20.875 17.4477 21.3227 17 21.875 17C22.4273 17 22.875 17.4477 22.875 18C22.875 18.5523 22.4273 19 21.875 19C21.3227 19 20.875 18.5523 20.875 18Z',
  d19: 'M20.875 21C20.875 20.4477 21.3227 20 21.875 20C22.4273 20 22.875 20.4477 22.875 21C22.875 21.5523 22.4273 22 21.875 22C21.3227 22 20.875 21.5523 20.875 21Z',
  d20: 'M18.7898 9.28713C18.4698 7.97441 17.2862 7 15.875 7C14.2181 7 12.875 8.34315 12.875 10C12.875 11.6569 14.2181 13 15.875 13C17.2539 13 18.4155 12.0697 18.7665 10.8025C18.8953 10.822 19.0208 10.8394 19.1351 10.8553L19.2304 10.8686C19.3585 10.8866 19.4663 10.9023 19.5548 10.9177C19.5985 10.9253 19.633 10.9321 19.6595 10.938C19.6837 10.9434 19.6949 10.9467 19.6966 10.9472C19.6967 10.9473 19.6968 10.9473 19.6966 10.9472C20.2025 11.114 20.5938 11.3868 20.8393 11.6974C20.9229 11.8032 20.9915 11.9277 21.2113 12.3476L22.5401 11.6516L22.5125 11.5989C22.3319 11.2537 22.1974 10.9967 22.0161 10.7673C21.5607 10.1911 20.9057 9.76645 20.1664 9.52269C19.9683 9.45737 19.6747 9.41622 19.449 9.38459L19.3389 9.36922C19.1533 9.34337 18.9672 9.31747 18.7898 9.28713Z',
};

export const IconMonocle01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-stroke-rounded IconMonocle01StrokeRounded"
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
      <circle 
        cx="16" 
        cy="10" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconMonocle01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-duotone-rounded IconMonocle01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <circle 
        cx="16" 
        cy="10" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconMonocle01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-twotone-rounded IconMonocle01TwotoneRounded"
    >
      <path 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocle01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-solid-rounded IconMonocle01SolidRounded"
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocle01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-bulk-rounded IconMonocle01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocle01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-stroke-sharp IconMonocle01StrokeSharp"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocle01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-01-solid-sharp IconMonocle01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMonocle01: TheIconSelfPack = {
  name: 'Monocle01',
  StrokeRounded: IconMonocle01StrokeRounded,
  DuotoneRounded: IconMonocle01DuotoneRounded,
  TwotoneRounded: IconMonocle01TwotoneRounded,
  SolidRounded: IconMonocle01SolidRounded,
  BulkRounded: IconMonocle01BulkRounded,
  StrokeSharp: IconMonocle01StrokeSharp,
  SolidSharp: IconMonocle01SolidSharp,
};
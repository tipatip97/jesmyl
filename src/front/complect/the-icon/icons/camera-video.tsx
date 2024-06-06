import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.5 21.5L8.5 17.5M10.5 17.5L14.5 21.5M9.5 17.5L9.5 22.5',
  d2: 'M2 11.875C2 9.81261 2 8.78141 3.02513 8.1407C4.05025 7.5 5.70017 7.5 9 7.5H10C13.2998 7.5 14.9497 7.5 15.9749 8.1407C17 8.78141 17 9.81261 17 11.875V13.125C17 15.1874 17 16.2186 15.9749 16.8593C14.9497 17.5 13.2998 17.5 10 17.5H9C5.70017 17.5 4.05025 17.5 3.02513 16.8593C2 16.2186 2 15.1874 2 13.125V11.875Z',
  d3: 'M17 10.2495L17.1259 10.174C19.2417 8.90435 20.2996 8.26954 21.1498 8.57605C22 8.88257 22 9.89876 22 11.9312V13.0685C22 15.1009 22 16.1171 21.1498 16.4236C20.2996 16.7301 19.2417 16.0953 17.1259 14.8257L17 14.7501',
  d4: 'M12.4996 3.40156C11.616 3.40156 10.8996 4.11791 10.8996 5.00156C10.8996 5.88522 11.616 6.60156 12.4996 6.60156C13.3833 6.60156 14.0996 5.88522 14.0996 5.00156C14.0996 4.11791 13.3833 3.40156 12.4996 3.40156ZM9.09961 5.00156C9.09961 3.12379 10.6218 1.60156 12.4996 1.60156C14.3774 1.60156 15.8996 3.12379 15.8996 5.00156C15.8996 6.87933 14.3774 8.40156 12.4996 8.40156C10.6218 8.40156 9.09961 6.87933 9.09961 5.00156Z',
  d5: 'M6.99961 2.40156C5.83981 2.40156 4.89961 3.34176 4.89961 4.50156C4.89961 5.66136 5.83981 6.60156 6.99961 6.60156C8.15941 6.60156 9.09961 5.66136 9.09961 4.50156C9.09961 3.34176 8.15941 2.40156 6.99961 2.40156ZM3.09961 4.50156C3.09961 2.34765 4.8457 0.601562 6.99961 0.601562C9.15352 0.601562 10.8996 2.34765 10.8996 4.50156C10.8996 6.65547 9.15352 8.40156 6.99961 8.40156C4.8457 8.40156 3.09961 6.65547 3.09961 4.50156Z',
  d6: 'M9.00008 16.6337C8.61764 16.4126 8.1201 16.4657 7.79289 16.7929L3.79289 20.7929C3.40237 21.1834 3.40237 21.8166 3.79289 22.2071C4.18342 22.5976 4.81658 22.5976 5.20711 22.2071L8.5 18.9142L8.5 22.5C8.5 23.0523 8.94772 23.5 9.5 23.5C10.0523 23.5 10.5 23.0523 10.5 22.5L10.5 18.9142L13.7929 22.2071C14.1834 22.5976 14.8166 22.5976 15.2071 22.2071C15.5976 21.8166 15.5976 21.1834 15.2071 20.7929L11.2071 16.7929C10.8799 16.4657 10.3824 16.4126 9.99992 16.6337C9.85285 16.5487 9.68211 16.5 9.5 16.5C9.31789 16.5 9.14715 16.5487 9.00008 16.6337Z',
  d7: 'M8.9635 6.75H10.0365C11.6555 6.75 12.9187 6.74999 13.9033 6.83272C14.8937 6.91595 15.7068 7.08871 16.3724 7.50471C17.0834 7.94912 17.4414 8.55588 17.6051 9.31699C17.7502 9.99152 17.7501 10.8331 17.75 11.7993C17.75 11.8245 17.75 11.8497 17.75 11.875V13.125C17.75 13.1503 17.75 13.1755 17.75 13.2007C17.7501 14.1669 17.7502 15.0085 17.6051 15.683C17.4414 16.4441 17.0834 17.0509 16.3724 17.4953C15.7068 17.9113 14.8937 18.0841 13.9033 18.1673C12.9187 18.25 11.6555 18.25 10.0365 18.25H8.96349C7.34447 18.25 6.0813 18.25 5.09676 18.1673C4.1063 18.0841 3.29323 17.9113 2.62764 17.4953C1.91657 17.0509 1.55865 16.4441 1.39492 15.683C1.24982 15.0085 1.24991 14.1669 1.25001 13.2007C1.25001 13.1755 1.25001 13.1503 1.25001 13.125V11.875C1.25001 11.8497 1.25001 11.8245 1.25001 11.7993C1.24991 10.8331 1.24982 9.99152 1.39492 9.31699C1.55865 8.55588 1.91657 7.94912 2.62764 7.50471C3.29323 7.08871 4.1063 6.91595 5.09676 6.83272C6.0813 6.74999 7.34448 6.75 8.9635 6.75Z',
  d8: 'M20.0148 9.6999C19.4517 9.94731 18.7227 10.3825 17.6406 11.0318L17.5147 11.1074C17.0411 11.3916 16.4269 11.238 16.1427 10.7645C15.8585 10.2909 16.012 9.67665 16.4856 9.39248L16.6115 9.31692C16.6314 9.30497 16.6513 9.29306 16.6711 9.28119C17.6782 8.67679 18.5166 8.17363 19.2103 7.86884C19.9178 7.55801 20.6959 7.34977 21.4891 7.63573C21.8843 7.77822 22.2154 8.02166 22.4596 8.36922C22.6899 8.69682 22.8075 9.06658 22.8755 9.41589C23.0004 10.0583 23.0003 10.9023 23.0002 11.8357C23.0002 11.8675 23.0002 11.8995 23.0002 11.9316V13.0689C23.0002 13.101 23.0002 13.1329 23.0002 13.1648C23.0003 14.0981 23.0004 14.9421 22.8755 15.5846C22.8075 15.9339 22.6899 16.3036 22.4596 16.6312C22.2154 16.9788 21.8843 17.2222 21.4891 17.3647C20.6959 17.6507 19.9178 17.4425 19.2103 17.1316C18.5166 16.8268 17.6782 16.3237 16.6711 15.7193L16.4856 15.608C16.012 15.3238 15.8585 14.7095 16.1427 14.236C16.4269 13.7624 17.0411 13.6089 17.5147 13.8931L17.6406 13.9686C18.7227 14.6179 19.4517 15.0531 20.0148 15.3006C20.5778 15.5479 20.7538 15.5038 20.8108 15.4833C20.8175 15.4808 20.8225 15.4787 20.826 15.4771C20.8388 15.4569 20.877 15.3841 20.9123 15.2027C20.9956 14.7743 21.0002 14.1299 21.0002 13.0689V11.9316C21.0002 10.8705 20.9956 10.2262 20.9123 9.79773C20.877 9.61631 20.8388 9.5436 20.826 9.52331C20.8225 9.52172 20.8175 9.51963 20.8108 9.5172C20.7538 9.49664 20.5778 9.45255 20.0148 9.6999Z',
  d9: 'M6.3552 18.2344L3.79289 20.7967C3.40237 21.1872 3.40237 21.8204 3.79289 22.2109C4.18342 22.6014 4.81658 22.6014 5.20711 22.2109L8.5 18.918L8.5 22.5038C8.5 23.0561 8.94772 23.5038 9.5 23.5038C10.0523 23.5038 10.5 23.0561 10.5 22.5038L10.5 18.918L13.7929 22.2109C14.1834 22.6014 14.8166 22.6014 15.2071 22.2109C15.5976 21.8204 15.5976 21.1872 15.2071 20.7967L12.6448 18.2344C11.8987 18.2538 11.0353 18.2538 10.0365 18.2538H10.0365H8.96349H8.96348C7.96466 18.2538 7.10128 18.2538 6.3552 18.2344Z',
  d10: 'M17 17.5V7.5H2V17.5H17Z',
  d11: 'M17 10.5001L22 8.00012V16.9999L17 14.5001',
  d12: 'M3.25 5C3.25 2.92893 4.92893 1.25 7 1.25C8.39638 1.25 9.6145 2.01322 10.26 3.14527C10.8429 2.59051 11.6317 2.25 12.5 2.25C14.2949 2.25 15.75 3.70507 15.75 5.5C15.75 6.14432 15.5625 6.74485 15.2391 7.25H17C17.4142 7.25 17.75 7.58579 17.75 8V9.72433L21.4032 7.85078C21.6917 7.70283 22.0343 7.71864 22.3086 7.89256C22.583 8.06649 22.75 8.37373 22.75 8.70456V17.2954C22.75 17.6263 22.583 17.9335 22.3086 18.1074C22.0343 18.2814 21.6917 18.2972 21.4032 18.1492L17.75 16.2758V18C17.75 18.4142 17.4142 18.75 17 18.75H12.9142L15.2072 21.043L13.793 22.4572L10.5001 19.1643L10.5001 22.7501H8.50008L8.50008 19.1643L5.20718 22.4572L3.79297 21.043L6.08594 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V8C1.25 7.58579 1.58579 7.25 2 7.25H3.99973C3.52896 6.62325 3.25 5.8442 3.25 5ZM7 3.125C5.96447 3.125 5.125 3.96447 5.125 5C5.125 6.03553 5.96447 6.875 7 6.875C8.03553 6.875 8.875 6.03553 8.875 5C8.875 3.96447 8.03553 3.125 7 3.125ZM12.5 4.10714C11.7307 4.10714 11.1071 4.73075 11.1071 5.5C11.1071 6.26925 11.7307 6.89286 12.5 6.89286C13.2693 6.89286 13.8929 6.26925 13.8929 5.5C13.8929 4.73075 13.2693 4.10714 12.5 4.10714ZM20.8887 15.751L17.75 14.1414V11.8588L20.8887 10.2491V15.751Z',
};

export const IconCameraVideoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-stroke-rounded IconCameraVideoStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="12.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="4.5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraVideoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-duotone-rounded IconCameraVideoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="12.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="4.5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraVideoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-twotone-rounded IconCameraVideoTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="12.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="4.5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraVideoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-solid-rounded IconCameraVideoSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraVideoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-bulk-rounded IconCameraVideoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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

export const IconCameraVideoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-stroke-sharp IconCameraVideoStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="12.5" 
        cy="5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7" 
        cy="4.5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCameraVideoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-video-solid-sharp IconCameraVideoSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraVideo: TheIconSelfPack = {
  name: 'CameraVideo',
  StrokeRounded: IconCameraVideoStrokeRounded,
  DuotoneRounded: IconCameraVideoDuotoneRounded,
  TwotoneRounded: IconCameraVideoTwotoneRounded,
  SolidRounded: IconCameraVideoSolidRounded,
  BulkRounded: IconCameraVideoBulkRounded,
  StrokeSharp: IconCameraVideoStrokeSharp,
  SolidSharp: IconCameraVideoSolidSharp,
};
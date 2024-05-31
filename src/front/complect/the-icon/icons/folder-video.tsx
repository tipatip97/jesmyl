import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 6.50447H16.75C18.8567 6.50447 19.91 6.50447 20.6667 7.01062C20.9943 7.22974 21.2755 7.51131 21.4944 7.83925C22 8.59676 22 9.89095 22 12M12 6.50447L11.3666 5.23618C10.8418 4.18546 10.3622 3.12782 9.19926 2.69122C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88074C3.05227 3.15215 2.65142 3.55344 2.38032 4.03978C2 4.72204 2 5.63129 2 7.4498V10.5089C2 15.2282 2 17.5879 3.46447 19.054C4.5784 20.1692 6.20875 20.4361 9 20.5',
  d2: 'M19.5 16.6463L19.563 16.6009C20.6208 15.8371 21.1498 15.4552 21.5749 15.6396C22 15.824 22 16.4353 22 17.6579V18.3421C22 19.5647 22 20.176 21.5749 20.3604C21.1498 20.5448 20.6208 20.1629 19.563 19.3991L19.5 19.3537M15.5 21.5H16C17.6499 21.5 18.4749 21.5 18.9874 21.0515C19.5 20.603 19.5 19.8812 19.5 18.4375V17.5625C19.5 16.1188 19.5 15.397 18.9874 14.9485C18.4749 14.5 17.6499 14.5 16 14.5H15.5C13.8501 14.5 13.0251 14.5 12.5126 14.9485C12 15.397 12 16.1188 12 17.5625V18.4375C12 19.8812 12 20.603 12.5126 21.0515C13.0251 21.5 13.8501 21.5 15.5 21.5Z',
  d3: 'M12.1535 20.5C7.43941 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597L11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 12.4537 21.7159 14.6363 21.5739 15.6396C21.1488 15.4552 20.5525 15.9492 19.4946 16.7129C19.4754 15.8157 19.3877 15.2987 18.9874 14.9485C18.4749 14.5 17.6499 14.5 16 14.5H15.5C13.8501 14.5 13.0251 14.5 12.5126 14.9485C12 15.397 12 16.1188 12 17.5625V18.4375C12 19.4033 12 20.046 12.1535 20.5Z',
  d4: 'M18.0079 13.8112C17.4873 13.75 16.8317 13.75 16.0457 13.75H15.4543C14.6683 13.75 14.0127 13.75 13.4922 13.8112C12.9491 13.8751 12.4394 14.0159 12.0187 14.3841C11.5836 14.7648 11.4027 15.2484 11.3228 15.7684C11.2499 16.2427 11.25 16.8329 11.25 17.5077V18.4923C11.25 19.1672 11.2499 19.7573 11.3228 20.2316C11.4027 20.7516 11.5836 21.2352 12.0187 21.6159C12.4394 21.9841 12.9491 22.1249 13.4922 22.1888C14.0127 22.25 14.6683 22.25 15.4543 22.25H16.0457C16.8317 22.25 17.4873 22.25 18.0079 22.1888C18.5509 22.1249 19.0606 21.9841 19.4813 21.6159C19.7899 21.346 19.9706 21.0243 20.0781 20.6746C20.211 20.7601 20.3369 20.8356 20.4557 20.8984C20.8266 21.0944 21.3357 21.2817 21.8733 21.0485C22.4417 20.8019 22.6202 20.275 22.6873 19.8603C22.7502 19.4711 22.7501 18.9615 22.75 18.4018V17.5982C22.7501 17.0385 22.7502 16.5289 22.6873 16.1397C22.6202 15.725 22.4417 15.1981 21.8733 14.9515C21.3357 14.7183 20.8266 14.9056 20.4557 15.1016C20.3369 15.1644 20.211 15.2399 20.0781 15.3254C19.9706 14.9757 19.7899 14.654 19.4813 14.3841C19.0606 14.0159 18.5509 13.8751 18.0079 13.8112ZM21.2099 19.5995C20.9912 19.4839 20.6585 19.2633 20.249 18.9692C20.2501 18.8156 20.25 18.6566 20.25 18.4925V17.5078C20.25 17.3438 20.2501 17.1847 20.249 17.0311C20.6585 16.7371 20.9912 16.5165 21.2099 16.4009C21.2478 16.6554 21.25 17.0364 21.25 17.6581V18.3423C21.25 18.9639 21.2478 19.3449 21.2099 19.5995Z',
  d5: 'M9.4626 1.98917C8.82373 1.74951 8.11205 1.74983 7.08264 1.75028C6.2039 1.75027 5.32205 1.75031 4.7497 1.80078C4.15996 1.85278 3.64388 1.96279 3.17258 2.2259C2.56533 2.56491 2.06428 3.06616 1.7254 3.67363C1.46238 4.14512 1.35242 4.66139 1.30044 5.25135C1.24998 5.82392 1.24999 6.53291 1.25 7.41198V10.5611C1.24999 12.8703 1.24998 14.68 1.43975 16.0921C1.63399 17.5374 2.03933 18.6778 2.93414 19.573C3.82895 20.4681 4.96897 20.8736 6.41371 21.0679C7.1962 21.1732 8.10088 21.2201 9.14508 21.241C9.43 21.2467 9.57245 21.2495 9.66248 21.1611C9.75251 21.0728 9.75231 20.9293 9.75193 20.6424C9.74999 19.1986 9.75 17.6436 9.75002 17.442C9.74983 16.8253 9.74962 16.1358 9.84021 15.546C9.95153 14.8212 10.2373 13.9544 11.031 13.2597C11.7807 12.6035 12.6411 12.4052 13.3169 12.3256C13.9274 12.2538 15.3679 12.254 16.1127 12.2541C16.8435 12.254 17.574 12.254 18.1831 12.3256C18.7916 12.3972 19.6654 12.6721 20.3806 13.2051C20.5038 13.2969 20.5653 13.3427 20.6221 13.3575C20.6789 13.3722 20.7541 13.3622 20.9045 13.3423C21.124 13.3131 21.3621 13.2998 21.6033 13.3188C22.2385 13.3688 22.5561 13.3938 22.6524 13.3049C22.7487 13.216 22.749 12.9802 22.7497 12.5088C22.75 12.2787 22.75 12.0413 22.75 11.7964C22.75 10.777 22.75 9.87222 22.683 9.21264C22.6137 8.53183 22.4669 7.9414 22.118 7.41909C21.8444 7.00947 21.4929 6.65777 21.0834 6.38408C20.5613 6.03508 19.9711 5.88818 19.2905 5.81892C18.6312 5.75182 17.8095 5.75183 16.7905 5.75184L13.2361 5.75185C12.92 5.75185 12.7396 5.75092 12.6064 5.73715C12.5044 5.73001 12.4348 5.65436 12.4128 5.61742C12.3409 5.50444 12.0838 4.99064 11.9425 4.7078C11.4704 3.7523 10.8581 2.51266 9.4626 1.98917Z',
  d6: 'M19 19.25L22 20.25V15.25L19 16.25M12 14.25H19V21.25H12V14.25Z',
  d7: 'M9.05303 20.2487H2.10391C2.04868 20.2487 2.00391 20.204 2.00391 20.1487L2.00402 2.35139C2.00402 2.29616 2.04879 2.25139 2.10401 2.25139L8.97439 2.25098L12.0138 6.23288M12.0138 6.23288H6.98937M12.0138 6.23288H21.8959C21.9512 6.23288 21.9959 6.27765 21.9959 6.33288V11.752',
  d8: 'M19.75 15.25H12.75V22.25H19.75V15.25Z',
  d9: 'M22.75 16.25V21.25L20.8606 20.2428V17.2657L22.75 16.25Z',
  d10: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H11.25V13.7501H21.25V15.3534L22.75 14.5471V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
} as const;

export const IconFolderVideoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-stroke-rounded IconFolderVideoStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderVideoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-duotone-rounded IconFolderVideoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconFolderVideoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-twotone-rounded IconFolderVideoTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFolderVideoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-solid-rounded IconFolderVideoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderVideoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-bulk-rounded IconFolderVideoBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderVideoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-stroke-sharp IconFolderVideoStrokeSharp"
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

export const IconFolderVideoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-video-solid-sharp IconFolderVideoSolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfFolderVideo: TheIconSelfPack = {
  name: 'FolderVideo',
  StrokeRounded: IconFolderVideoStrokeRounded,
  DuotoneRounded: IconFolderVideoDuotoneRounded,
  TwotoneRounded: IconFolderVideoTwotoneRounded,
  SolidRounded: IconFolderVideoSolidRounded,
  BulkRounded: IconFolderVideoBulkRounded,
  StrokeSharp: IconFolderVideoStrokeSharp,
  SolidSharp: IconFolderVideoSolidSharp,
};
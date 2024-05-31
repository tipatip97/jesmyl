import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 15.9971L18.6938 17.3197C18.3654 18.7379 18.2012 19.4471 17.6938 19.7938C17.1864 20.1406 16.5226 19.9972 15.195 19.7105L14.4288 19.545C13.7218 19.3924 13.3683 19.316 13.0668 19.1179C12.7654 18.9198 12.5402 18.6158 12.0898 18.0079L11 16.537',
  d2: 'M2 10.9971C2 13.9971 10 16.9971 15 16.9971C19 16.9971 22 14.3108 22 10.9971C22 7.68336 19 4.99707 15 4.99707C10 4.99707 2 7.99707 2 10.9971Z',
  d3: 'M2 10.9971H5',
  d4: 'M7.5 5.99731C6.74487 5.15039 5.54147 3.85514 4.36683 4.01322C4.02163 4.05967 3.68109 4.25064 3 4.63258L4 7.99724',
  d5: 'M7.5 15.9968C6.74487 16.8437 5.54147 18.139 4.36683 17.9809C4.02163 17.9345 3.68109 17.7435 3 17.3616L4 13.9969',
  d6: 'M19 16L18.6938 17.3226C18.3654 18.7409 18.2012 19.45 17.6938 19.7967C17.1864 20.1435 16.5226 20.0001 15.195 19.7134L14.4288 19.548C13.7218 19.3953 13.3683 19.3189 13.0668 19.1208C12.7654 18.9227 12.5402 18.6187 12.0898 18.0108L11 16.5399',
  d7: 'M2 11C2 14 10 17 15 17C19 17 22 14.3137 22 11C22 7.68629 19 5 15 5C10 5 2 8 2 11Z',
  d8: 'M2 11H5',
  d9: 'M4 7.99724L3 4.63258C3.68109 4.25064 4.02163 4.05967 4.36683 4.01322C5.54147 3.85514 6.74487 5.15039 7.5 5.99731L4 7.99724Z',
  d10: 'M7.5 16.0027C6.74487 16.8496 5.54147 18.1449 4.36683 17.9868C4.02163 17.9403 3.68109 17.7494 3 17.3674L4 14.0028',
  d11: 'M19 15.998L18.6938 17.3207C18.3654 18.7389 18.2012 19.448 17.6938 19.7948C17.1864 20.1415 16.5226 19.9982 15.195 19.7115L14.4288 19.546C13.7218 19.3933 13.3683 19.317 13.0668 19.1189C12.7654 18.9207 12.5402 18.6168 12.0898 18.0089L11 16.5379',
  d12: 'M2 10.998C2 13.998 10 16.998 15 16.998C19 16.998 22 14.3118 22 10.998C22 7.68434 19 4.99805 15 4.99805C10 4.99805 2 7.99805 2 10.998Z',
  d13: 'M2 10.998H5',
  d14: 'M7.5 15.9988C6.74487 16.8457 5.54147 18.1409 4.36683 17.9829C4.02163 17.9364 3.68109 17.7455 3 17.3635L4 13.9989',
  d15: 'M19.6997 16.2463C21.4141 15.0245 22.4995 13.1547 22.4995 10.9998C22.4995 7.17622 19.082 4.24984 14.7968 4.24984C12.7795 4.24984 10.3269 4.71705 8.07711 5.46516C8.04787 5.41876 8.01441 5.37415 7.9767 5.33186C7.60104 4.91053 7.05333 4.30657 6.4242 3.83082C5.8196 3.37362 4.95176 2.88924 3.96376 3.0222C3.4232 3.09494 2.91962 3.3785 2.36606 3.69019L2.24119 3.76041C1.83353 3.98901 1.63859 4.4695 1.77175 4.91752L2.74645 8.19707L2.71358 8.22499C2.27967 8.59567 1.88724 9.01355 1.60165 9.47287C1.46848 9.68706 1.40189 9.79415 1.45904 9.897C1.5162 9.99984 1.65231 9.99984 1.92453 9.99984H3.86378C4.41269 9.99984 4.85768 10.4476 4.85768 10.9998C4.85768 11.5521 4.41269 11.9998 3.86378 11.9998H1.92454C1.65231 11.9998 1.5162 11.9998 1.45904 12.1027C1.40189 12.2055 1.46848 12.3126 1.60165 12.5268C1.88724 12.9861 2.27967 13.404 2.71358 13.7747C2.72449 13.784 2.73545 13.7933 2.74645 13.8026L1.77175 17.0822C1.63859 17.5302 1.83353 18.0107 2.24119 18.2393L2.36606 18.3095C2.91962 18.6212 3.4232 18.9047 3.96376 18.9775C4.95176 19.1104 5.8196 18.6261 6.4242 18.1689C7.05333 17.6931 7.60104 17.0891 7.9767 16.6678C8.01441 16.6255 8.04787 16.5809 8.07711 16.5345C8.66699 16.7307 9.27081 16.9075 9.87707 17.0617C9.8924 17.0867 9.90896 17.1112 9.92676 17.1353L11.0165 18.6062L11.0932 18.7099C11.4663 19.2149 11.7937 19.6581 12.2479 19.9566C12.7095 20.2599 13.2401 20.3737 13.8277 20.4996L13.948 20.5255L14.7142 20.691L14.7761 20.7043C15.3865 20.8362 15.9438 20.9567 16.4107 20.9901C16.9284 21.0272 17.4778 20.9712 17.9883 20.6224C18.4876 20.2812 18.7514 19.7943 18.9304 19.305C19.0973 18.8485 19.2323 18.2655 19.3851 17.6051L19.3851 17.6051L19.3983 17.5482L19.6997 16.2463ZM6.08511 15.7734C5.81197 16.0622 5.5201 16.3451 5.21787 16.5736C4.73833 16.9363 4.41715 17.0205 4.2305 16.9953C4.16998 16.9872 4.09923 16.9651 3.91976 16.8751L4.48259 14.9813C4.98478 15.2633 5.52392 15.5281 6.08511 15.7734ZM4.48259 7.01836C4.98478 6.7364 5.52392 6.47154 6.08511 6.22631C5.81197 5.93743 5.5201 5.6546 5.21787 5.42605C4.73833 5.06342 4.41715 4.97921 4.2305 5.00433C4.16998 5.01248 4.09923 5.03455 3.91976 5.12462L4.48259 7.01836ZM12.7724 17.6155C13.1425 18.11 13.2412 18.2161 13.3463 18.2852C13.4564 18.3575 13.5918 18.4025 14.3701 18.5706L15.1364 18.736C15.8293 18.8857 16.2457 18.9732 16.5537 18.9952C16.6949 19.0054 16.7714 18.9975 16.8103 18.9898C16.8404 18.9838 16.8512 18.9771 16.8607 18.9706L17.052 18.6181L17.3769 17.3758C16.5719 17.6187 15.7037 17.7498 14.7968 17.7498C14.1588 17.7498 13.4772 17.7031 12.7724 17.6155Z',
  d16: 'M6.17945 6.18564C8.86205 5.0289 12.1923 4.25 14.797 4.25C19.0823 4.25 22.4998 7.17638 22.4998 11C22.4998 14.8236 19.0823 17.75 14.797 17.75C12.1923 17.75 8.86205 16.9711 6.17945 15.8144C4.83658 15.2353 3.61414 14.5439 2.71385 13.7748C1.8378 13.0265 1.13086 12.0857 1.13086 11C1.13086 9.91433 1.8378 8.97353 2.71385 8.22515C3.61414 7.45607 4.83658 6.76469 6.17945 6.18564Z',
  d17: 'M17.3772 17.376C18.2322 17.118 19.0161 16.7338 19.6999 16.2465L19.3985 17.5482L19.3854 17.6051L19.3854 17.6051C19.2325 18.2655 19.0976 18.8485 18.9306 19.305C18.7517 19.7943 18.4879 20.2812 17.9885 20.6224C17.4781 20.9712 16.9287 21.0272 16.411 20.9901C15.9441 20.9567 15.3868 20.8362 14.7763 20.7043L14.7144 20.691L13.9482 20.5255L13.8279 20.4996C13.2403 20.3737 12.7098 20.2599 12.2482 19.9566C11.794 19.6581 11.4666 19.2149 11.0935 18.7099L11.0168 18.6062L9.92703 17.1353C9.90928 17.1113 9.89276 17.0868 9.87746 17.0619C10.8522 17.3097 11.8332 17.499 12.7728 17.6157C13.1428 18.1101 13.2415 18.2161 13.3466 18.2852C13.4566 18.3575 13.5921 18.4025 14.3704 18.5706L15.1366 18.736C15.8296 18.8857 16.2459 18.9732 16.554 18.9952C16.6952 19.0054 16.7717 18.9975 16.8105 18.9898C16.8406 18.9838 16.8514 18.9771 16.8609 18.9706L17.0523 18.6181L17.3772 17.376ZM8.07738 16.5347C8.04814 16.5811 8.01468 16.6257 7.97697 16.668C7.60131 17.0893 7.0536 17.6933 6.42447 18.169C5.81987 18.6262 4.95203 19.1106 3.96403 18.9776C3.42347 18.9049 2.91989 18.6213 2.36634 18.3096L2.24146 18.2394C1.8338 18.0108 1.63887 17.5303 1.77202 17.0823L2.74672 13.8028C3.24142 14.2207 3.83101 14.6155 4.48286 14.9815L3.92003 16.8752C4.0995 16.9653 4.17025 16.9874 4.23078 16.9955C4.41742 17.0206 4.7386 16.9364 5.21814 16.5738C5.52037 16.3452 5.81224 16.0624 6.08538 15.7735C6.11667 15.7872 6.14803 15.8008 6.17945 15.8144C6.7844 16.0752 7.4223 16.3169 8.07738 16.5347ZM2.74676 8.1972L1.77202 4.91752C1.63887 4.4695 1.8338 3.98901 2.24146 3.76041L2.36634 3.69019C2.91989 3.3785 3.42347 3.09494 3.96403 3.0222C4.95203 2.88924 5.81987 3.37362 6.42447 3.83082C7.0536 4.30657 7.60131 4.91053 7.97697 5.33186C8.01472 5.37419 8.0482 5.41884 8.07746 5.46529C7.42235 5.68312 6.78443 5.92477 6.17945 6.18564C6.14806 6.19918 6.11674 6.21277 6.08549 6.22643C5.81232 5.9375 5.52041 5.65463 5.21814 5.42606C4.7386 5.06343 4.41742 4.97921 4.23078 5.00433C4.17025 5.01248 4.0995 5.03456 3.92003 5.12462L4.4829 7.01849C3.83105 7.38448 3.24146 7.77924 2.74676 8.1972Z',
  d18: 'M1.33195 10H3.86405C4.41296 10 4.85795 10.4477 4.85795 11C4.85795 11.5523 4.41296 12 3.86405 12H1.33195C1.20383 11.6827 1.13086 11.3488 1.13086 11C1.13086 10.6512 1.20383 10.3173 1.33195 10Z',
  d19: 'M19 15.9971L18 20L13 19L11 16.537',
  d20: 'M2 10.9971H6',
  d21: 'M7.5 6.5L5 4L3 5L4 7.99674',
  d22: 'M7.5 15.5001L5 18L3 17L4 13.9974',
  d23: 'M17.4459 19.1244L18.2726 15.8154L19.7278 16.179L18.7278 20.1819C18.6308 20.5704 18.2457 20.8141 17.8531 20.7356L12.8531 19.7356C12.6819 19.7013 12.528 19.6084 12.418 19.4729L10.418 17.0099L11.5824 16.0643L13.4121 18.3177L17.4459 19.1244Z',
  d24: 'M14.9588 4.24707C12.3243 4.24707 8.95573 5.02597 6.24234 6.18271C4.88405 6.76176 3.64758 7.45314 2.73696 8.22222C2.06177 8.79247 1.4859 9.47443 1.25 10.2471H5.04709V11.7471H1.25C1.4859 12.5197 2.06177 13.2017 2.73696 13.7719C3.64758 14.541 4.88405 15.2324 6.24234 15.8114C8.95573 16.9682 12.3243 17.7471 14.9588 17.7471C19.2933 17.7471 22.75 14.8207 22.75 10.9971C22.75 7.17345 19.2933 4.24707 14.9588 4.24707Z',
  d25: 'M4.66471 3.3292C4.95345 3.18483 5.30218 3.24142 5.53045 3.46969L8.03045 5.96969L6.96979 7.03035L4.85203 4.91259L3.91752 5.37985L4.71155 7.75935L3.28868 8.23416L2.28868 5.23742C2.17051 4.88329 2.33079 4.49616 2.66471 4.3292L4.66471 3.3292Z',
  d26: 'M4.66471 18.6708C4.95344 18.8152 5.30217 18.7586 5.53044 18.5303L8.03044 16.0304L6.96979 14.9697L4.85203 17.0874L3.91717 16.62L4.71169 14.2344L3.28854 13.7604L2.28854 16.763C2.17063 17.117 2.33094 17.5039 2.6647 17.6708L4.66471 18.6708Z',
} as const;

export const IconZeppelinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-stroke-rounded IconZeppelinStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconZeppelinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-duotone-rounded IconZeppelinDuotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZeppelinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-twotone-rounded IconZeppelinTwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZeppelinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-solid-rounded IconZeppelinSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZeppelinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-bulk-rounded IconZeppelinBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconZeppelinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-stroke-sharp IconZeppelinStrokeSharp"
    >
      <path 
        d={d.d19} 
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
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconZeppelinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="zeppelin-solid-sharp IconZeppelinSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfZeppelin: TheIconSelfPack = {
  name: 'Zeppelin',
  StrokeRounded: IconZeppelinStrokeRounded,
  DuotoneRounded: IconZeppelinDuotoneRounded,
  TwotoneRounded: IconZeppelinTwotoneRounded,
  SolidRounded: IconZeppelinSolidRounded,
  BulkRounded: IconZeppelinBulkRounded,
  StrokeSharp: IconZeppelinStrokeSharp,
  SolidSharp: IconZeppelinSolidSharp,
};
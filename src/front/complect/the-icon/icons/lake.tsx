import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 21.9684C2.94975 21.9684 3.88858 22.0553 4.67843 21.4396C5.45232 20.8365 6.68304 20.8564 7.42654 21.4842C8.2373 22.1688 9.76776 22.1494 10.5969 21.5032C11.4013 20.8763 12.6209 20.804 13.4265 21.4842C14.3106 22.2306 15.8003 22.1241 16.6784 21.4396C17.4523 20.8365 18.683 20.8564 19.4265 21.4842C20.1427 22.0889 21.1197 21.9684 22 21.9684',
  d2: 'M2 17.9684C2.94975 17.9684 3.88858 18.0553 4.67843 17.4396C5.45232 16.8365 6.68304 16.8564 7.42654 17.4842C8.2373 18.1688 9.76776 18.1494 10.5969 17.5032C11.4013 16.8763 12.6209 16.804 13.4265 17.4842C14.3106 18.2306 15.8003 18.1241 16.6784 17.4396C17.4523 16.8365 18.683 16.8564 19.4265 17.4842C20.1427 18.0889 21.1197 17.9684 22 17.9684',
  d3: 'M2 14H22',
  d4: 'M6 14V3M6 3C5.75 3.66667 4.8 5.5 3 5.5M6 3C6.25 3.66667 7.2 5.5 9 5.5M3 8.5C4.8 8.5 5.75 6.66667 6 6C6.25 6.66667 7.2 8.5 9 8.5',
  d5: 'M6.78127 22.2483C6.40348 21.9293 5.69853 21.9123 5.29306 22.2284C5.27765 22.2404 5.26222 22.2524 5.24678 22.2645C4.91854 22.5208 4.57932 22.7857 4.16266 22.8995C3.93724 22.9611 3.72965 22.9705 3.56228 22.9723C3.49391 22.973 3.38575 22.9718 3.27318 22.9706C3.17813 22.9695 3.07994 22.9684 2.99988 22.9684C2.44759 22.9684 1.99988 22.5207 1.99988 21.9684C1.99988 21.4161 2.44759 20.9684 2.99988 20.9684C3.12306 20.9684 3.22994 20.9698 3.31907 20.9709L3.3252 20.971C3.41898 20.9722 3.48513 20.973 3.5412 20.9724C3.58634 20.9719 3.61417 20.9705 3.62983 20.9693C3.63879 20.9642 3.6519 20.9563 3.66986 20.9445C3.74908 20.8928 3.86063 20.8091 4.06356 20.6509C5.20586 19.7606 6.96236 19.7836 8.07156 20.7201C8.24765 20.8688 8.58028 20.9928 9.00463 20.9928C9.42768 20.9927 9.78404 20.8688 9.98202 20.7145C11.1009 19.8424 12.8508 19.6894 14.0716 20.7201C14.2834 20.899 14.6169 21.0119 15.0227 20.999C15.4295 20.986 15.8108 20.8479 16.0636 20.6509C17.2059 19.7606 18.9624 19.7836 20.0716 20.7201C20.247 20.8683 20.3399 20.9397 20.3976 20.9778C20.414 20.9782 20.4374 20.9783 20.4695 20.9779C20.494 20.9775 20.5313 20.9766 20.5774 20.9754C20.6871 20.9725 20.8464 20.9684 20.9999 20.9684C21.5522 20.9684 21.9999 21.4161 21.9999 21.9684C21.9999 22.5207 21.5522 22.9684 20.9999 22.9684C20.8646 22.9684 20.7755 22.9709 20.6854 22.9734C20.6273 22.9751 20.5688 22.9767 20.4973 22.9777C20.3499 22.9797 20.1455 22.9788 19.9232 22.9266C19.4594 22.8178 19.1105 22.5262 18.7813 22.2483C18.4035 21.9293 17.6985 21.9123 17.2931 22.2284C16.6677 22.7158 15.8651 22.9732 15.0864 22.998C14.3068 23.0228 13.4535 22.8158 12.7813 22.2483C12.3908 21.9185 11.7014 21.9101 11.2115 22.2919C10.5804 22.7838 9.75694 22.9927 9.00479 22.9928C8.25394 22.9928 7.41595 22.7842 6.78127 22.2483Z',
  d6: 'M6.78139 18.2483C6.4036 17.9293 5.69865 17.9123 5.29318 18.2284C5.27777 18.2404 5.26235 18.2524 5.2469 18.2645C4.91866 18.5208 4.57944 18.7857 4.16278 18.8995C3.93736 18.9611 3.72977 18.9705 3.5624 18.9723C3.49403 18.973 3.38587 18.9718 3.2733 18.9706C3.17825 18.9695 3.08006 18.9684 3 18.9684C2.44772 18.9684 2 18.5207 2 17.9684C2 17.4161 2.44772 16.9684 3 16.9684C3.12318 16.9684 3.23007 16.9698 3.31919 16.9709L3.32532 16.971C3.4191 16.9722 3.48525 16.973 3.54132 16.9724C3.58646 16.9719 3.6143 16.9705 3.62996 16.9693C3.63891 16.9642 3.65202 16.9563 3.66999 16.9445C3.7492 16.8928 3.86075 16.8091 4.06369 16.6509C5.20598 15.7606 6.96248 15.7836 8.07169 16.7201C8.24777 16.8688 8.5804 16.9928 9.00475 16.9928C9.4278 16.9927 9.78416 16.8688 9.98214 16.7145C11.101 15.8424 12.851 15.6894 14.0717 16.7201C14.2835 16.899 14.6171 17.0119 15.0228 16.999C15.4296 16.986 15.8109 16.8479 16.0637 16.6509C17.206 15.7606 18.9625 15.7836 20.0717 16.7201C20.2471 16.8683 20.34 16.9397 20.3977 16.9778C20.4142 16.9782 20.4375 16.9783 20.4696 16.9779C20.4941 16.9775 20.5314 16.9766 20.5775 16.9754C20.6872 16.9725 20.8466 16.9684 21 16.9684C21.5523 16.9684 22 17.4161 22 17.9684C22 18.5207 21.5523 18.9684 21 18.9684C20.8647 18.9684 20.7757 18.9709 20.6855 18.9734C20.6275 18.9751 20.569 18.9767 20.4974 18.9777C20.35 18.9797 20.1456 18.9788 19.9234 18.9266C19.4595 18.8178 19.1106 18.5262 18.7814 18.2483C18.4036 17.9293 17.6986 17.9123 17.2932 18.2284C16.6678 18.7158 15.8652 18.9732 15.0865 18.998C14.3069 19.0228 13.4536 18.8158 12.7814 18.2483C12.3909 17.9185 11.7015 17.9101 11.2116 18.2919C10.5805 18.7838 9.75706 18.9927 9.00491 18.9928C8.25406 18.9928 7.41607 18.7842 6.78139 18.2483Z',
  d7: 'M2 14C2 13.4477 2.44772 13 3 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14Z',
  d8: 'M7 2C7.41684 2 7.78997 2.25857 7.93633 2.64888C8.03112 2.90165 8.27364 3.40491 8.65779 3.82634C9.035 4.24016 9.47387 4.5 10 4.5C10.5523 4.5 11 4.94772 11 5.5C11 6.05228 10.5523 6.5 10 6.5C9.22828 6.5 8.58052 6.25895 8.05406 5.92005C8.18174 6.18335 8.38372 6.52567 8.65779 6.82634C9.035 7.24016 9.47387 7.5 10 7.5C10.5523 7.5 11 7.94772 11 8.5C11 9.05228 10.5523 9.5 10 9.5C9.20166 9.5 8.53597 9.24203 8 8.88463V14C8 14.5523 7.55228 15 7 15C6.44772 15 6 14.5523 6 14V8.88463C5.46403 9.24203 4.79834 9.5 4 9.5C3.44772 9.5 3 9.05228 3 8.5C3 7.94772 3.44772 7.5 4 7.5C4.52613 7.5 4.965 7.24016 5.34221 6.82634C5.61628 6.52567 5.81826 6.18335 5.94594 5.92005C5.41948 6.25895 4.77172 6.5 4 6.5C3.44772 6.5 3 6.05228 3 5.5C3 4.94772 3.44772 4.5 4 4.5C4.52613 4.5 4.965 4.24016 5.34221 3.82634C5.72636 3.40491 5.96888 2.90165 6.06367 2.64888C6.21003 2.25857 6.58316 2 7 2Z',
  d9: 'M13.4999 4.25C13.4999 2.45507 14.955 1 16.7499 1C18.5448 1 19.9999 2.45507 19.9999 4.25C19.9999 6.04493 18.5448 7.5 16.7499 7.5C14.955 7.5 13.4999 6.04493 13.4999 4.25Z',
  d10: 'M6 14V3.59061M3 5.5C4 5.5 5 4 6 3C7 4 8 5.5 9 5.5M3 8.5C4.5 8.5 5.75 6.66667 6 6C6.25 6.66667 7.5 8.5 9 8.5',
  d11: 'M6.78139 22.2483C6.4036 21.9293 5.69865 21.9123 5.29318 22.2284L4.67843 21.4396L5.29318 22.2284C4.29287 23.008 3.09412 22.9865 2.28531 22.972C2.18366 22.9701 2.08817 22.9684 2 22.9684V20.9684C2.09852 20.9684 2.19224 20.9687 2.28155 20.969C3.19828 20.9718 3.65028 20.9731 4.06369 20.6509C5.20598 19.7606 6.96248 19.7836 8.07169 20.7201C8.24777 20.8688 8.5804 20.9928 9.00475 20.9928C9.4278 20.9927 9.78416 20.8688 9.98214 20.7145C11.101 19.8424 12.851 19.6894 14.0717 20.7201C14.2835 20.899 14.6171 21.0119 15.0228 20.999C15.4296 20.986 15.8109 20.8479 16.0637 20.6509L16.6629 21.4198L16.0637 20.6509C17.206 19.7606 18.9625 19.7836 20.0717 20.7201C20.22 20.8454 20.422 20.9243 20.7536 20.9583C21.0091 20.9845 21.247 20.9798 21.5391 20.9741C21.6779 20.9714 21.829 20.9684 22 20.9684V22.9684C21.9135 22.9684 21.8124 22.9704 21.7013 22.9725C21.3635 22.979 20.9342 22.9872 20.5498 22.9479C19.9939 22.8909 19.3492 22.7277 18.7814 22.2483C18.4036 21.9293 17.6986 21.9123 17.2932 22.2284C16.6678 22.7158 15.8652 22.9732 15.0865 22.998C14.3069 23.0228 13.4536 22.8158 12.7814 22.2483C12.3909 21.9185 11.7015 21.9101 11.2116 22.2919C10.5805 22.7838 9.75706 22.9927 9.00491 22.9928C8.25406 22.9928 7.41607 22.7842 6.78139 22.2483L7.40346 21.5115L6.78139 22.2483Z',
  d12: 'M6.78139 18.2483C6.4036 17.9293 5.69865 17.9123 5.29318 18.2284L4.67843 17.4396L5.29318 18.2284C4.29287 19.008 3.09412 18.9865 2.28531 18.972C2.18366 18.9701 2.08817 18.9684 2 18.9684V16.9684C2.09852 16.9684 2.19224 16.9687 2.28155 16.969C3.19828 16.9718 3.65028 16.9731 4.06369 16.6509C5.20598 15.7606 6.96248 15.7836 8.07169 16.7201C8.24777 16.8688 8.5804 16.9928 9.00475 16.9928C9.4278 16.9927 9.78416 16.8688 9.98214 16.7145C11.101 15.8424 12.851 15.6894 14.0717 16.7201C14.2835 16.899 14.6171 17.0119 15.0228 16.999C15.4296 16.986 15.8109 16.8479 16.0637 16.6509L16.6629 17.4198L16.0637 16.6509C17.206 15.7606 18.9625 15.7836 20.0717 16.7201C20.22 16.8454 20.422 16.9243 20.7536 16.9583C21.0091 16.9845 21.247 16.9798 21.5391 16.9741C21.6779 16.9714 21.829 16.9684 22 16.9684V18.9684C21.9135 18.9684 21.8124 18.9704 21.7013 18.9725C21.3635 18.979 20.9342 18.9872 20.5498 18.9479C19.9939 18.8909 19.3492 18.7277 18.7814 18.2483C18.4036 17.9293 17.6986 17.9123 17.2932 18.2284C16.6678 18.7158 15.8652 18.9732 15.0865 18.998C14.3069 19.0228 13.4536 18.8158 12.7814 18.2483C12.3909 17.9185 11.7015 17.9101 11.2116 18.2919C10.5805 18.7838 9.75706 18.9927 9.00491 18.9928C8.25406 18.9928 7.41607 18.7842 6.78139 18.2483L7.40346 17.5115L6.78139 18.2483Z',
  d13: 'M22 15H2V13H22V15Z',
  d14: 'M6 1L6.70711 1.70711C6.978 1.97799 7.24437 2.27767 7.48755 2.55125L7.49741 2.56235C7.75158 2.84829 7.98166 3.10666 8.20711 3.33211C8.43444 3.55944 8.62285 3.718 8.78 3.81622C8.85567 3.86351 8.91191 3.889 8.95008 3.90212C8.96858 3.90848 8.98151 3.91148 8.98936 3.91289C8.99328 3.91359 8.99766 3.91407 8.99766 3.91407L8.99946 3.9142L9 5.91421C8.49726 5.91421 8.06254 5.72629 7.72 5.51221C7.46107 5.35038 7.21997 5.15167 7 4.94663V6.20195C7.12217 6.43927 7.38127 6.84295 7.74519 7.214C8.2072 7.68507 8.65068 7.91421 9 7.91421V9.91421C8.22146 9.91421 7.54324 9.59948 7 9.20626V13.4142H5V9.20626C4.45676 9.59948 3.77855 9.91421 3 9.91421V7.91421C3.34932 7.91421 3.7928 7.68507 4.25481 7.214C4.61873 6.84295 4.87783 6.43927 5 6.20195V4.94663C4.78003 5.15167 4.53893 5.35038 4.28 5.51221C3.93747 5.72629 3.50275 5.91421 3 5.91421V3.91422L3.00234 3.91407L3.01065 3.91289L3.04992 3.90212L3.22 3.81622C3.37715 3.718 3.56556 3.55944 3.7929 3.33211L4.50259 2.56235L4.51246 2.55125L4.51247 2.55124C4.75565 2.27766 5.02201 1.97799 5.2929 1.70711L6 1Z',
  d15: 'M15.5 4.25C15.5 2.45507 16.9551 1 18.75 1C20.5449 1 22 2.45507 22 4.25C22 6.04493 20.5449 7.5 18.75 7.5C16.9551 7.5 15.5 6.04493 15.5 4.25Z',
} as const;

export const IconLakeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-stroke-rounded IconLakeStrokeRounded"
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
        cx="17.5" 
        cy="4.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconLakeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-duotone-rounded IconLakeDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="17.5" 
        cy="4.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
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
        cx="17.5" 
        cy="4.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconLakeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-twotone-rounded IconLakeTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        cx="17.5" 
        cy="4.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconLakeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-solid-rounded IconLakeSolidRounded"
    >
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLakeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-bulk-rounded IconLakeBulkRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLakeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-stroke-sharp IconLakeStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="17.5" 
        cy="4.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconLakeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lake-solid-sharp IconLakeSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLake: TheIconSelfPack = {
  name: 'Lake',
  StrokeRounded: IconLakeStrokeRounded,
  DuotoneRounded: IconLakeDuotoneRounded,
  TwotoneRounded: IconLakeTwotoneRounded,
  SolidRounded: IconLakeSolidRounded,
  BulkRounded: IconLakeBulkRounded,
  StrokeSharp: IconLakeStrokeSharp,
  SolidSharp: IconLakeSolidSharp,
};
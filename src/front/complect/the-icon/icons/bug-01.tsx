import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.01321 4.99121C2.89335 6.05121 3.55262 8.42321 6.48936 8.42321',
  d2: 'M17.5952 8.38093C18.8358 8.57893 21.1133 7.49893 20.9958 5.00293',
  d3: 'M20.993 20.9989C21.0529 19.9429 20.1779 17.5549 17.5991 17.4229',
  d4: 'M6.45175 17.471C5.65026 17.231 3.01318 18.335 3.01318 20.999',
  d5: 'M9.33002 6.11902C9.354 5.09902 9.84545 2.99902 12.0031 2.99902C13.9209 2.99902 14.5862 4.61902 14.6761 6.11902M6.26143 9.41902C6.3813 8.63902 7.29229 6.81502 9.36598 6.63502C11.4637 6.55582 14.3405 6.58702 14.8799 6.67102C15.587 6.73395 17.2952 7.43902 17.7507 9.41902C17.9125 10.439 17.8286 11.879 17.8526 12.719C17.8166 13.559 17.9208 15.2624 17.7567 16.139C17.6368 17.099 16.9895 18.467 16.1025 19.307C14.784 20.723 11.164 22.211 8.03546 19.451C6.41726 17.891 6.30938 16.379 6.18951 15.779C6.15738 15.4573 6.15887 13.8765 6.16554 12.359C6.14156 11.0462 6.17247 9.78082 6.26143 9.41902Z',
  d6: 'M3.01318 12.8989H5.94992',
  d7: 'M20.993 12.8989L18.1162 12.8989',
  d8: 'M12.0034 16.499L12.0034 20.279',
  d9: 'M6.04077 11.836C6.04077 10.3121 6.04077 9.5501 6.26775 8.94154C6.63265 7.9632 7.40436 7.19149 8.3827 6.82659C8.99126 6.59961 9.75322 6.59961 11.2772 6.59961H12.5044C14.0283 6.59961 14.7903 6.59961 15.3989 6.82659C16.3772 7.19149 17.1489 7.9632 17.5138 8.94154C17.7408 9.5501 17.7408 10.3121 17.7408 11.836V15.1496C17.7408 18.3805 15.1217 20.9996 11.8908 20.9996C8.65991 20.9996 6.04077 18.3805 6.04077 15.1496V11.836Z',
  d10: 'M3.01297 4.99121C2.89311 6.05121 3.55238 8.42321 6.48912 8.42321',
  d11: 'M17.5955 8.38093C18.8361 8.57893 21.1136 7.49893 20.9961 5.00293',
  d12: 'M20.9933 20.9989C21.0532 19.9429 20.1782 17.5549 17.5994 17.4229',
  d13: 'M6.452 17.4705C5.65051 17.2305 3.01343 18.3345 3.01343 20.9985',
  d14: 'M9.33026 6.11902C9.35424 5.09902 9.84569 2.99902 12.0033 2.99902C13.9211 2.99902 14.5864 4.61902 14.6763 6.11902M6.26167 9.41902C6.38154 8.63902 7.29253 6.81502 9.36622 6.63502C11.4639 6.55582 14.3407 6.58702 14.8801 6.67102C15.5872 6.73395 17.2954 7.43902 17.7509 9.41902C17.9127 10.439 17.8288 11.879 17.8528 12.719C17.8168 13.559 17.921 15.2624 17.7569 16.139C17.637 17.099 16.9897 18.467 16.1027 19.307C14.7842 20.723 11.1642 22.211 8.0357 19.451C6.4175 17.891 6.30962 16.379 6.18975 15.779C6.15762 15.4573 6.15911 13.8765 6.16578 12.359C6.1418 11.0462 6.17271 9.78082 6.26167 9.41902Z',
  d15: 'M3.01343 12.8984H5.95017',
  d16: 'M20.9928 12.8984H18.116',
  d17: 'M12.0037 16.499V20.279',
  d18: 'M17.5947 8.38093C18.8353 8.57893 21.1128 7.49893 20.9953 5.00293',
  d19: 'M20.9925 20.9989C21.0524 19.9429 20.1774 17.5549 17.5986 17.4229',
  d20: 'M6.45127 17.471C5.64978 17.231 3.0127 18.335 3.0127 20.999',
  d21: 'M3.0127 12.8989H5.94944',
  d22: 'M20.993 12.8989H18.1162',
  d23: 'M12.0029 16.499V20.279',
  d24: 'M6.26192 9.53677C6.38179 8.75677 7.29278 6.93277 9.36647 6.75277C11.4642 6.67357 14.341 6.70477 14.8804 6.78877C15.5875 6.8517 17.2957 7.55677 17.7512 9.53677C17.913 10.5567 17.8291 11.9967 17.8531 12.8367C17.8171 13.6767 17.9213 15.3801 17.7572 16.2567C17.6373 17.2167 16.99 18.5847 16.103 19.4247C14.7845 20.8407 11.1645 22.3287 8.03595 19.5687C6.41775 18.0087 6.30987 16.4967 6.19 15.8967C6.15787 15.575 6.15936 13.9942 6.16603 12.4767C6.14205 11.1639 6.17296 9.89857 6.26192 9.53677Z',
  d25: 'M9.3269 6.55115C9.35088 5.53115 9.84233 3.43115 12 3.43115C13.9178 3.43115 14.5831 5.05115 14.673 6.55115',
  d26: 'M10.7277 4.66985C10.4449 5.13414 10.3 5.82649 10.3 6.6C10.3 7.15228 9.85228 7.6 9.3 7.6C8.74771 7.6 8.3 7.15228 8.3 6.6C8.3 5.63893 8.47017 4.53128 9.01979 3.62921C9.60836 2.66323 10.5989 2 12 2C13.4011 2 14.3916 2.66323 14.9802 3.62921C15.5298 4.53129 15.7 5.63893 15.7 6.6C15.7 7.15229 15.2523 7.6 14.7 7.6C14.1477 7.6 13.7 7.15229 13.7 6.6C13.7 5.82649 13.5551 5.13414 13.2723 4.66985C13.0283 4.26948 12.6688 4 12 4C11.3312 4 10.9717 4.26948 10.7277 4.66985ZM3 4C3.55228 4 4 4.44772 4 5V5.25C4 6.43741 4.96259 7.4 6.15 7.4C6.70228 7.4 7.15 7.84772 7.15 8.4C7.15 8.95228 6.70228 9.4 6.15 9.4C3.85802 9.4 2 7.54198 2 5.25V5C2 4.44772 2.44772 4 3 4ZM21 4C21.5523 4 22 4.44772 22 5V5.25C22 7.54198 20.142 9.4 17.85 9.4C17.2977 9.4 16.85 8.95228 16.85 8.4C16.85 7.84772 17.2977 7.4 17.85 7.4C19.0374 7.4 20 6.43741 20 5.25V5C20 4.44772 20.4477 4 21 4ZM2 12.9C2 12.3477 2.44772 11.9 3 11.9H6.15C6.70228 11.9 7.15 12.3477 7.15 12.9C7.15 13.4523 6.70228 13.9 6.15 13.9H3C2.44772 13.9 2 13.4523 2 12.9ZM16.85 12.9C16.85 12.3477 17.2977 11.9 17.85 11.9H21C21.5523 11.9 22 12.3477 22 12.9C22 13.4523 21.5523 13.9 21 13.9H17.85C17.2977 13.9 16.85 13.4523 16.85 12.9ZM2 21C2 18.4595 4.05949 16.4 6.6 16.4C7.15229 16.4 7.6 16.8477 7.6 17.4C7.6 17.9523 7.15229 18.4 6.6 18.4C5.16406 18.4 4 19.5641 4 21C4 21.5523 3.55229 22 3 22C2.44772 22 2 21.5523 2 21ZM16.4 17.4C16.4 16.8477 16.8477 16.4 17.4 16.4C19.9405 16.4 22 18.4595 22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 19.5641 18.8359 18.4 17.4 18.4C16.8477 18.4 16.4 17.9523 16.4 17.4Z',
  d27: 'M15.7706 6.12583C15.368 5.97567 14.9426 5.91189 14.451 5.88138C13.9706 5.85156 13.3797 5.85156 12.6386 5.85156H12.6386H11.3621H11.3621H11.3621C10.621 5.85156 10.0302 5.85156 9.54981 5.88138C9.05821 5.91189 8.63281 5.97567 8.23022 6.12583C7.04806 6.56676 6.11558 7.49923 5.67466 8.68139C5.5245 9.08398 5.46072 9.50938 5.4302 10.001C5.40038 10.4813 5.40039 11.0722 5.40039 11.8133V11.8133V15.1516C5.40039 18.3116 7.62126 20.953 10.5873 21.5999C10.88 21.6638 11.0264 21.6957 11.1382 21.6056C11.25 21.5156 11.25 21.3563 11.25 21.0376V16.5C11.25 16.0858 11.5858 15.75 12 15.75C12.4142 15.75 12.75 16.0858 12.75 16.5V21.0378C12.75 21.3564 12.75 21.5157 12.8618 21.6058C12.9736 21.6958 13.1199 21.6639 13.4126 21.6001C16.3791 20.9535 18.6004 18.3119 18.6004 15.1516L18.6004 11.8133C18.6004 11.0722 18.6004 10.4813 18.5706 10.001C18.5401 9.50938 18.4763 9.08398 18.3261 8.68139C17.8852 7.49923 16.9527 6.56676 15.7706 6.12583Z',
  d28: 'M14.451 5.88138C14.9426 5.91189 15.368 5.97567 15.7706 6.12583C16.9527 6.56676 17.8852 7.49923 18.3261 8.68139C18.4763 9.08398 18.5401 9.50938 18.5706 10.001C18.6004 10.4813 18.6004 11.0722 18.6004 11.8133L18.6004 15.1516C18.6004 18.7966 15.6455 21.7516 12.0004 21.7516C8.35531 21.7516 5.40039 18.7966 5.40039 15.1516V11.8133C5.40039 11.0722 5.40038 10.4813 5.4302 10.001C5.46072 9.50938 5.5245 9.08398 5.67466 8.68139C6.11558 7.49923 7.04806 6.56676 8.23022 6.12583C8.63281 5.97567 9.05821 5.91189 9.54981 5.88138C10.0302 5.85156 10.621 5.85156 11.3621 5.85156H11.3621H12.6386C13.3797 5.85156 13.9706 5.85156 14.451 5.88138Z',
  d29: 'M12.75 21.708C12.504 21.7358 12.2539 21.7501 12.0004 21.7501C11.7467 21.7501 11.4963 21.7358 11.25 21.7079V16.5C11.25 16.0858 11.5858 15.75 12 15.75C12.4142 15.75 12.75 16.0858 12.75 16.5V21.708Z',
  d30: 'M10.3487 5.85394C10.4128 5.38731 10.5398 4.97826 10.7277 4.66985C10.9717 4.26948 11.3312 4 12 4C12.6688 4 13.0283 4.26948 13.2723 4.66985C13.4602 4.97826 13.5872 5.38731 13.6513 5.85393C13.9482 5.85769 14.2131 5.86515 14.451 5.87991C14.9074 5.90825 15.3068 5.96526 15.6839 6.09348C15.6303 5.26442 15.4354 4.37631 14.9802 3.62921C14.3916 2.66323 13.4011 2 12 2C10.5989 2 9.60836 2.66323 9.01979 3.62921C8.56454 4.37639 8.36963 5.26461 8.31611 6.09375C8.69339 5.96534 9.09302 5.90827 9.54981 5.87991C9.78746 5.86516 10.0522 5.85771 10.3487 5.85394Z',
  d31: 'M6.39602 7.43049C6.31731 7.41058 6.23489 7.4 6.15 7.4C4.96259 7.4 4 6.43741 4 5.25V5C4 4.44772 3.55228 4 3 4C2.44772 4 2 4.44772 2 5V5.25C2 7.32091 3.51688 9.03753 5.50017 9.34942C5.53917 9.11541 5.59466 8.89443 5.67466 8.67993C5.84578 8.22113 6.09095 7.79993 6.39602 7.43049Z',
  d32: 'M5.40039 11.9H3C2.44772 11.9 2 12.3477 2 12.9C2 13.4523 2.44772 13.9 3 13.9H5.40039V11.9Z',
  d33: 'M5.54317 16.522C3.51205 16.9995 2 18.8232 2 21C2 21.5523 2.44772 22 3 22C3.55229 22 4 21.5523 4 21C4 19.677 4.98818 18.5848 6.26672 18.4212C5.93333 17.838 5.68633 17.1992 5.54317 16.522Z',
  d34: 'M17.734 18.4213C19.0122 18.5852 20 19.6772 20 21C20 21.5523 20.4477 22 21 22C21.5523 22 22 21.5523 22 21C22 18.8234 20.4883 16.9999 18.4576 16.5222C18.3144 17.1993 18.0674 17.8382 17.734 18.4213Z',
  d35: 'M18.6004 13.9H21C21.5523 13.9 22 13.4523 22 12.9C22 12.3477 21.5523 11.9 21 11.9H18.6004L18.6004 13.9Z',
  d36: 'M18.5006 9.3493C20.4835 9.0371 22 7.32065 22 5.25V5C22 4.44772 21.5523 4 21 4C20.4477 4 20 4.44772 20 5V5.25C20 6.43741 19.0374 7.4 17.85 7.4C17.7653 7.4 17.6831 7.41052 17.6046 7.43032C17.9098 7.79981 18.155 8.22106 18.3261 8.67993C18.4061 8.89439 18.4616 9.11533 18.5006 9.3493Z',
  d37: 'M11.9976 16.6654V21.2373M11.9976 21.2373C14.8876 21.1751 17.5419 19.1412 17.8738 15.7135V13.1357M11.9976 21.2373C9.81978 21.1751 7.46574 19.9558 6.56091 17.5114M20.9878 13.1357H17.8738M17.8738 13.1357L17.7927 10.0807C17.7216 9.08112 17.1276 8.22802 16.6349 7.74451C15.6486 6.94842 15.1853 6.95318 14.3304 6.87262M6.56091 17.5114C6.3616 16.9729 6.22801 16.375 6.17446 15.7174C6.17446 15.0334 6.15722 14.0908 6.14764 13.139M6.56091 17.5114C4.20385 17.9243 3.04914 19.3169 2.99512 21.2222M6.56091 17.5114C6.56365 17.5109 6.56638 17.5104 6.56912 17.5099M3.01802 13.139H6.14764M6.14764 13.139C6.13471 11.8536 6.13575 10.5515 6.21209 9.84698C6.29724 9.40151 6.43891 9.01631 6.61447 8.6851M9.61124 6.87181C8.9851 4.08656 10.9917 3.16012 12.1412 3.24227C13.1059 3.31121 15.089 4.27625 14.3304 6.87262M9.61124 6.87181C8.53437 6.93251 7.29027 7.41014 6.61447 8.6851M9.61124 6.87181C10.4988 6.81915 11.2516 6.81917 11.9362 6.81918L11.9682 6.81918C12.5179 6.81918 13.4368 6.78841 14.3304 6.87262M20.9903 21.2201C20.9903 19.1375 19.5127 17.9425 17.5103 17.4976M3.00438 5.23581C2.95005 7.20572 4.21843 8.6851 6.61447 8.6851M20.9951 5.23667C20.9951 7.27491 19.6597 8.74244 17.3378 8.65826',
  d38: 'M8.5875 5.67556C8.5875 3.78368 10.1153 2.25 12 2.25C13.8847 2.25 15.4125 3.78368 15.4125 5.67556V5.94789C15.5304 5.97827 15.6464 6.01434 15.7611 6.0573C16.5579 6.35564 17.2447 6.8714 17.7518 7.53461C18.8873 7.509 19.8 6.57693 19.8 5.43088V5.1862H21.75V5.43088C21.75 7.37305 20.3921 8.99684 18.5773 9.39772C18.613 9.61119 18.6349 9.83222 18.6492 10.0641C18.6788 10.5419 18.6788 11.1266 18.6787 11.8459V11.9395H20.775V13.8969H18.6787V15.1203C18.6787 15.6024 18.6281 16.0726 18.5317 16.5258C20.3919 17.0746 21.75 18.801 21.75 20.8459H19.8C19.8 19.6406 18.9652 18.631 17.8443 18.3679C16.859 20.1508 15.0876 21.4354 13 21.75V16.5546H11V21.75C8.91239 21.4354 7.14103 20.1508 6.15575 18.3679C5.03484 18.631 4.2 19.6406 4.2 20.8459H2.25C2.25 18.801 3.60809 17.0746 5.46825 16.5258C5.37194 16.0726 5.32125 15.6024 5.32125 15.1203L5.32125 13.8969H3.225V11.9395H5.32125V11.846C5.32124 11.1267 5.32124 10.5419 5.35079 10.0641C5.36513 9.83222 5.38702 9.61119 5.4227 9.39772C3.60793 8.99683 2.25 7.37304 2.25 5.43088V5.1862H4.2V5.43088C4.2 6.57693 5.11268 7.50899 6.24823 7.53461C6.75531 6.8714 7.44207 6.35564 8.2389 6.0573C8.35364 6.01434 8.46963 5.97827 8.5875 5.94789V5.67556ZM13.4621 5.77582V5.67576C13.4621 4.86495 12.8073 4.20766 11.9996 4.20766C11.1919 4.20766 10.5371 4.86495 10.5371 5.67576V5.77582L13.4621 5.77582Z',
} as const;

export const IconBug01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-stroke-rounded IconBug01StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBug01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-duotone-rounded IconBug01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBug01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-twotone-rounded IconBug01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBug01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-solid-rounded IconBug01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBug01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-bulk-rounded IconBug01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBug01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-stroke-sharp IconBug01StrokeSharp"
    >
      <path 
        d={d.d37} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBug01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bug-01-solid-sharp IconBug01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBug01: TheIconSelfPack = {
  name: 'Bug01',
  StrokeRounded: IconBug01StrokeRounded,
  DuotoneRounded: IconBug01DuotoneRounded,
  TwotoneRounded: IconBug01TwotoneRounded,
  SolidRounded: IconBug01SolidRounded,
  BulkRounded: IconBug01BulkRounded,
  StrokeSharp: IconBug01StrokeSharp,
  SolidSharp: IconBug01SolidSharp,
};
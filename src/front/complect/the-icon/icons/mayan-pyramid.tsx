import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 17H4C2.34533 17 2 17.3453 2 19V20C2 21.6547 2.34533 22 4 22H20C21.6547 22 22 21.6547 22 20V19C22 17.3453 21.6547 17 20 17H15.5',
  d2: 'M9 12H6C4.34533 12 4 12.3453 4 14V17M15 12H18C19.6547 12 20 12.3453 20 14V17',
  d3: 'M6 12V9C6 7.34533 6.34533 7 8 7H16C17.6547 7 18 7.34533 18 9V12',
  d4: 'M9 7V4C9 2.34533 9.34533 2 11 2H13C14.6547 2 15 2.34533 15 4V7',
  d5: 'M13.5 7L16 22M10.5 7L8 22',
  d6: 'M4 17H8.83333L9.66667 12H6V9C6 7.34533 6.34533 7 8 7H16C17.6547 7 18 7.34533 18 9V12H14.3333L15.1667 17H20C21.6547 17 22 17.3453 22 19V20C22 21.6547 21.6547 22 20 22H4C2.34533 22 2 21.6547 2 20V19C2 17.3453 2.34533 17 4 17Z',
  d7: 'M6.69654 22.2503L7.17447 19.3828C7.22852 19.0585 7.25554 18.8963 7.16567 18.7902C7.0758 18.6841 6.91141 18.6841 6.58263 18.6841H2.7027C2.24082 18.6841 1.93017 18.7094 1.71528 18.7566C1.51027 18.8016 1.45162 18.854 1.43575 18.8699C1.41988 18.8857 1.36749 18.9444 1.32245 19.1494C1.27525 19.3643 1.25 19.6749 1.25 20.1368V21.299C1.25 21.7609 1.27525 22.0715 1.32245 22.2864C1.36749 22.4914 1.41988 22.5501 1.43575 22.5659C1.45162 22.5818 1.51027 22.6342 1.71528 22.6792C1.93017 22.7264 2.24082 22.7517 2.7027 22.7517H6.1047C6.34745 22.7517 6.46883 22.7517 6.55275 22.6806C6.63668 22.6095 6.65663 22.4898 6.69654 22.2503Z',
  d8: 'M7.66501 16.4395L8.14293 13.5719C8.19699 13.2476 8.22401 13.0855 8.13414 12.9794C8.04427 12.8733 7.87988 12.8733 7.5511 12.8733H5.02703C4.56514 12.8733 4.2545 12.8986 4.03961 12.9458C3.83459 12.9908 3.77594 13.0432 3.76007 13.0591C3.7442 13.0749 3.69182 13.1336 3.64678 13.3386C3.59957 13.5535 3.57432 13.8641 3.57432 14.326L3.57432 16.3409C3.57432 16.6237 3.57432 16.7651 3.66219 16.853C3.75006 16.9409 3.89148 16.9409 4.17432 16.9409H7.07317C7.31592 16.9409 7.4373 16.9409 7.52122 16.8698C7.60514 16.7987 7.6251 16.679 7.66501 16.4395Z',
  d9: 'M8.55576 11.095L9.1114 7.76114L9.1114 7.76113C9.16545 7.43683 9.19248 7.27467 9.10261 7.16859C9.01274 7.0625 8.84835 7.0625 8.51957 7.0625H7.35135C6.88947 7.0625 6.57882 7.08775 6.36393 7.13495C6.15891 7.17999 6.10027 7.23238 6.0844 7.24825C6.06853 7.26412 6.01614 7.32277 5.9711 7.52778C5.9239 7.74267 5.89865 8.05332 5.89865 8.5152V10.5301C5.89865 10.8129 5.89865 10.9543 5.98652 11.0422C6.07438 11.1301 6.21581 11.1301 6.49865 11.1301H8.51351C8.53424 11.1301 8.55235 11.1155 8.55576 11.095Z',
  d10: 'M17.6371 7.13495C17.4222 7.08775 17.1116 7.0625 16.6497 7.0625H15.4815C15.1527 7.0625 14.9883 7.0625 14.8984 7.16859C14.8086 7.27467 14.8356 7.43683 14.8896 7.76113L14.8896 7.76114L15.4453 11.095C15.4487 11.1155 15.4668 11.1301 15.4875 11.1301H17.5024C17.7852 11.1301 17.9266 11.1301 18.0145 11.0422C18.1024 10.9543 18.1024 10.8129 18.1024 10.5301V8.5152C18.1024 8.05332 18.0771 7.74267 18.0299 7.52778C17.9849 7.32277 17.9325 7.26412 17.9166 7.24825C17.9008 7.23238 17.8421 7.17999 17.6371 7.13495Z',
  d11: 'M17.8963 22.7517H21.2983C21.7602 22.7517 22.0709 22.7264 22.2858 22.6792C22.4908 22.6342 22.5494 22.5818 22.5653 22.5659C22.5812 22.5501 22.6335 22.4914 22.6786 22.2864C22.7258 22.0715 22.751 21.7609 22.751 21.299V20.1368C22.751 19.6749 22.7258 19.3643 22.6786 19.1494C22.6335 18.9444 22.5812 18.8857 22.5653 18.8699C22.5494 18.854 22.4908 18.8016 22.2858 18.7566C22.0709 18.7094 21.7602 18.6841 21.2983 18.6841H17.4184C17.0896 18.6841 16.9252 18.6841 16.8354 18.7902C16.7455 18.8963 16.7725 19.0585 16.8266 19.3828L17.3045 22.2503C17.3444 22.4898 17.3644 22.6095 17.4483 22.6806C17.5322 22.7517 17.6536 22.7517 17.8963 22.7517Z',
  d12: 'M16.9279 16.9409H19.8267C20.1096 16.9409 20.251 16.9409 20.3388 16.853C20.4267 16.7651 20.4267 16.6237 20.4267 16.3409V14.326C20.4267 13.8641 20.4015 13.5535 20.3543 13.3386C20.3092 13.1336 20.2568 13.0749 20.241 13.0591C20.2251 13.0432 20.1664 12.9908 19.9614 12.9458C19.7465 12.8986 19.4359 12.8733 18.974 12.8733H16.4499C16.1212 12.8733 15.9568 12.8733 15.8669 12.9794C15.777 13.0855 15.804 13.2476 15.8581 13.572L16.336 16.4395C16.3759 16.679 16.3959 16.7987 16.4798 16.8698C16.5637 16.9409 16.6851 16.9409 16.9279 16.9409Z',
  d13: 'M9.45722 1.71528C9.41001 1.93017 9.38477 2.24082 9.38477 2.7027V4.71757C9.38477 5.00041 9.38477 5.14183 9.47263 5.2297C9.5605 5.31757 9.70192 5.31757 9.98477 5.31757H10.24C10.2502 5.31739 10.2604 5.31739 10.2707 5.31757H13.7286C13.7388 5.31739 13.7491 5.31739 13.7593 5.31757H14.0145C14.2973 5.31757 14.4388 5.31757 14.5266 5.2297C14.6145 5.14183 14.6145 5.00041 14.6145 4.71757V2.7027C14.6145 2.24082 14.5892 1.93017 14.542 1.71528C14.497 1.51027 14.4446 1.45162 14.4287 1.43575C14.4129 1.41988 14.3542 1.36749 14.1492 1.32245C13.9343 1.27525 13.6237 1.25 13.1618 1.25H10.8375C10.3756 1.25 10.0649 1.27525 9.85005 1.32245C9.64503 1.36749 9.58638 1.41988 9.57051 1.43575C9.55464 1.45162 9.50226 1.51027 9.45722 1.71528Z',
  d14: 'M12.4969 7.0625H11.5038C11.261 7.0625 11.1396 7.0625 11.0557 7.13359C10.9718 7.20469 10.9518 7.32441 10.9119 7.56386L8.49705 22.0531C8.443 22.3774 8.41598 22.5395 8.50585 22.6456C8.59572 22.7517 8.76011 22.7517 9.08889 22.7517H14.9118C15.2406 22.7517 15.405 22.7517 15.4949 22.6456C15.5847 22.5395 15.5577 22.3774 15.5036 22.0531L13.0888 7.56386C13.0489 7.32441 13.0289 7.20469 12.945 7.13359C12.8611 7.0625 12.7397 7.0625 12.4969 7.0625Z',
  d15: 'M8.96667 11.9902H3.98376V16.9862M14.9462 11.9902H19.9291V16.9862',
  d16: 'M5.97693 11.9902V6.99414H17.9359V11.9902',
  d17: 'M8.96667 6.99406V1.99805H14.9462V6.99406',
  d18: 'M13.4513 6.99414L15.9427 21.9822M10.4615 6.99414L7.97009 21.9822',
  d19: 'M8.5391 17.0146L2.01195 17.0148C2.00642 17.0148 2.00195 17.0193 2.00195 17.0248L2.00183 22.0018H21.9983V19.5083V17.0248C21.9983 17.0193 21.9938 17.0148 21.9883 17.0148H15.5379',
  d20: 'M8.25 6.25V2C8.25 1.58579 8.58579 1.25 9 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V6.25H8.25Z',
  d21: 'M18.75 7.75V11.25H15.1974L14.4318 7.75H18.75Z',
  d22: 'M20.75 12.75V16.25H16.2912L15.5255 12.75H20.75Z',
  d23: 'M22.75 17.75V22.75H17.713L16.6193 17.75H22.75Z',
  d24: 'M16.1776 22.75H7.82242L11.1037 7.75H12.8963L16.1776 22.75Z',
  d25: 'M6.28695 22.75L7.3807 17.75H1.25V22.75H6.28695Z',
  d26: 'M3.25 16.25V12.75H8.47445L7.70883 16.25H3.25Z',
  d27: 'M5.25 11.25V7.75H9.5682L8.80258 11.25H5.25Z',
} as const;

export const IconMayanPyramidStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-stroke-rounded IconMayanPyramidStrokeRounded"
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

export const IconMayanPyramidDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-duotone-rounded IconMayanPyramidDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMayanPyramidTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-twotone-rounded IconMayanPyramidTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconMayanPyramidSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-solid-rounded IconMayanPyramidSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMayanPyramidBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-bulk-rounded IconMayanPyramidBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMayanPyramidStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-stroke-sharp IconMayanPyramidStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMayanPyramidSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mayan-pyramid-solid-sharp IconMayanPyramidSolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMayanPyramid: TheIconSelfPack = {
  name: 'MayanPyramid',
  StrokeRounded: IconMayanPyramidStrokeRounded,
  DuotoneRounded: IconMayanPyramidDuotoneRounded,
  TwotoneRounded: IconMayanPyramidTwotoneRounded,
  SolidRounded: IconMayanPyramidSolidRounded,
  BulkRounded: IconMayanPyramidBulkRounded,
  StrokeSharp: IconMayanPyramidStrokeSharp,
  SolidSharp: IconMayanPyramidSolidSharp,
};
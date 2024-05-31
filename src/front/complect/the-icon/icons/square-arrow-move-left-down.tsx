import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12.4654 15.1066C13.2366 15.7672 14.3293 17.1022 14.7827 16.9661M14.7827 16.9661C15.3109 16.9661 16.3181 15.6567 17.0566 15.1067M14.7827 16.9661C14.629 14.5755 15.1018 11.4944 14.0942 10.2393C12.976 8.91811 9.79651 9.40013 6.98226 9.26768M6.98226 9.26768C6.92317 9.93439 8.22401 10.7952 8.89747 11.5531M6.98226 9.26768C6.85917 8.82483 8.25247 7.69228 8.89459 7.02832',
  d3: 'M12.4497 15.1053C13.221 15.7653 14.3136 17.0953 14.7671 16.9653M14.7671 16.9653C15.2953 16.9653 16.3025 15.6553 17.041 15.1053M14.7671 16.9653C14.6133 14.5753 15.0862 11.4854 14.0785 10.2354C12.9604 8.91535 9.78094 9.39538 6.96664 9.26538M6.96664 9.26538C6.90754 9.92538 8.20844 10.7854 8.88184 11.5454M6.96664 9.26538C6.84354 8.81538 8.23684 7.68539 8.87894 7.02539',
  d4: 'M7.27667 8.6299L6.74634 8.09957H6.74634L7.27667 8.6299ZM9.43691 7.53033C9.7298 7.23744 9.7298 6.76256 9.43691 6.46967C9.14401 6.17678 8.66914 6.17678 8.37624 6.46967L9.43691 7.53033ZM7.27667 9.91555L6.74634 10.4459L6.74634 10.4459L7.27667 9.91555ZM8.37624 12.0758C8.66914 12.3687 9.14401 12.3687 9.43691 12.0758C9.7298 11.7829 9.7298 11.308 9.4369 11.0151L8.37624 12.0758ZM14.0844 16.7233L14.6148 16.193L14.0844 16.7233ZM12.9849 14.5631C12.692 14.2702 12.2171 14.2702 11.9242 14.5631C11.6313 14.856 11.6313 15.3309 11.9242 15.6238L12.9849 14.5631ZM15.3701 16.7233L15.9004 17.2537L15.3701 16.7233ZM17.5303 15.6238C17.8232 15.3309 17.8232 14.856 17.5303 14.5631C17.2374 14.2702 16.7626 14.2702 16.4697 14.5631L17.5303 15.6238ZM7 8.52273C6.58579 8.52273 6.25 8.85851 6.25 9.27273C6.25 9.68694 6.58579 10.0227 7 10.0227V8.52273ZM13.9773 17C13.9773 17.4142 14.3131 17.75 14.7273 17.75C15.1415 17.75 15.4773 17.4142 15.4773 17H13.9773ZM7.807 9.16023L9.43691 7.53033L8.37624 6.46967L6.74634 8.09957L7.807 9.16023ZM6.74634 10.4459L8.37624 12.0758L9.4369 11.0151L7.807 9.38522L6.74634 10.4459ZM6.74634 8.09957C6.09843 8.74749 6.09843 9.79797 6.74634 10.4459L7.807 9.38522C7.74487 9.32309 7.74487 9.22236 7.807 9.16023L6.74634 8.09957ZM14.6148 16.193L12.9849 14.5631L11.9242 15.6238L13.5541 17.2537L14.6148 16.193ZM15.9004 17.2537L17.5303 15.6238L16.4697 14.5631L14.8398 16.193L15.9004 17.2537ZM13.5541 17.2537C14.202 17.9016 15.2525 17.9016 15.9004 17.2537L14.8398 16.193C14.7776 16.2551 14.6769 16.2551 14.6148 16.193L13.5541 17.2537ZM9.27273 8.52273H7V10.0227H9.27273V8.52273ZM13.9773 14.7273V17H15.4773V14.7273H13.9773ZM9.27273 10.0227C10.5796 10.0227 11.4843 10.0243 12.1654 10.1159C12.8249 10.2046 13.1613 10.365 13.3981 10.6019L14.4588 9.5412C13.8968 8.97922 13.1911 8.7403 12.3652 8.62927C11.561 8.52113 10.5372 8.52273 9.27273 8.52273V10.0227ZM15.4773 14.7273C15.4773 13.4628 15.4789 12.439 15.3707 11.6348C15.2597 10.8089 15.0208 10.1032 14.4588 9.5412L13.3981 10.6019C13.635 10.8387 13.7954 11.1751 13.8841 11.8346C13.9757 12.5157 13.9773 13.4204 13.9773 14.7273H15.4773Z',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM8.24493 11.4167C8.53782 11.7096 9.0127 11.7096 9.30559 11.4167C9.45204 11.2702 9.52526 11.0783 9.52526 10.8864V9.81836H10.9321C11.8961 9.81836 12.5437 9.81995 13.0267 9.88489C13.4882 9.94694 13.6857 10.0542 13.816 10.1845C13.9463 10.3148 14.0536 10.5123 14.1156 10.9738C14.1805 11.4568 14.1821 12.1043 14.1821 13.0684V14.4746H13.1142C12.9221 14.4745 12.7299 14.5477 12.5833 14.6943C12.2904 14.9872 12.2904 15.462 12.5833 15.7549L13.8872 17.0589C14.1353 17.3069 14.4496 17.4483 14.7731 17.483C14.8243 17.4941 14.8774 17.4999 14.9318 17.4999C14.9863 17.4999 15.0394 17.4941 15.0905 17.483C15.4141 17.4483 15.7284 17.3069 15.9764 17.0589L17.2803 15.7549C17.5732 15.462 17.5732 14.9872 17.2803 14.6943C17.1339 14.5478 16.942 14.4746 16.75 14.4746H15.6821V13.0164C15.6822 12.1179 15.6822 11.3687 15.6022 10.7739C15.5178 10.1461 15.3322 9.57929 14.8767 9.12382C14.4212 8.66835 13.8544 8.48268 13.2266 8.39827C12.6318 8.3183 11.8826 8.31833 10.9842 8.31836H10.9841L10.9321 8.31836H9.52526V7.25C9.52526 7.05806 9.45204 6.86612 9.30559 6.71967C9.0127 6.42678 8.53782 6.42678 8.24493 6.71967L6.94101 8.02359C6.69297 8.27163 6.55158 8.58592 6.51682 8.90949C6.5058 8.96064 6.5 9.01373 6.5 9.06818C6.5 9.12263 6.5058 9.17572 6.51682 9.22687C6.55158 9.55045 6.69297 9.86474 6.94101 10.1128L8.24493 11.4167Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M9.30559 11.4167C9.0127 11.7096 8.53782 11.7096 8.24493 11.4167L6.94101 10.1128C6.69297 9.86474 6.55158 9.55045 6.51682 9.22687C6.5058 9.17572 6.5 9.12263 6.5 9.06818C6.5 9.01373 6.5058 8.96064 6.51682 8.90949C6.55158 8.58592 6.69297 8.27163 6.94101 8.02359L8.24493 6.71967C8.53782 6.42678 9.0127 6.42678 9.30559 6.71967C9.45204 6.86612 9.52526 7.05806 9.52526 7.25V8.31836H10.9321L10.9841 8.31836C11.8826 8.31833 12.6318 8.3183 13.2266 8.39827C13.8544 8.48268 14.4212 8.66835 14.8767 9.12382C15.3322 9.57929 15.5178 10.1461 15.6022 10.7739C15.6822 11.3687 15.6822 12.1179 15.6821 13.0164V14.4746H16.75C16.942 14.4746 17.1339 14.5478 17.2803 14.6943C17.5732 14.9872 17.5732 15.462 17.2803 15.7549L15.9764 17.0589C15.7284 17.3069 15.4141 17.4483 15.0905 17.483C15.0394 17.4941 14.9863 17.4999 14.9318 17.4999C14.8774 17.4999 14.8243 17.4941 14.7731 17.483C14.4496 17.4483 14.1353 17.3069 13.8872 17.0589L12.5833 15.7549C12.2904 15.462 12.2904 14.9872 12.5833 14.6943C12.7299 14.5477 12.9221 14.4745 13.1142 14.4746H14.1821V13.0684C14.1821 12.1043 14.1805 11.4568 14.1156 10.9738C14.0536 10.5123 13.9463 10.3148 13.816 10.1845C13.6857 10.0542 13.4882 9.94694 13.0267 9.88489C12.5437 9.81995 11.8961 9.81836 10.9321 9.81836H9.52526V10.8864C9.52526 11.0783 9.45204 11.2702 9.30559 11.4167Z',
  d8: 'M6.99609 9.5H14.4922L14.4961 17',
  d9: 'M9.49219 7L6.99609 9.5L9.49219 12M16.9961 14.5L14.4961 17L11.9961 14.5',
  d10: 'M21 3V21H3V3H21Z',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.96073 6.47009L10.0222 7.52992L8.80405 8.75H14.4922C14.9062 8.75 15.242 9.08555 15.2422 9.49961L15.2452 15.1896L16.465 13.9697L17.5257 15.0303L14.4954 18.0607L11.465 15.0303L12.5257 13.9697L13.7452 15.1891L13.7426 10.25H8.80403L10.0222 11.4701L8.96073 12.5299L5.93555 9.50001L8.96073 6.47009Z',
} as const;

export const IconSquareArrowMoveLeftDownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-stroke-rounded IconSquareArrowMoveLeftDownStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSquareArrowMoveLeftDownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-duotone-rounded IconSquareArrowMoveLeftDownDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftDownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-twotone-rounded IconSquareArrowMoveLeftDownTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftDownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-solid-rounded IconSquareArrowMoveLeftDownSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftDownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-bulk-rounded IconSquareArrowMoveLeftDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSquareArrowMoveLeftDownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-stroke-sharp IconSquareArrowMoveLeftDownStrokeSharp"
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowMoveLeftDownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-move-left-down-solid-sharp IconSquareArrowMoveLeftDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowMoveLeftDown: TheIconSelfPack = {
  name: 'SquareArrowMoveLeftDown',
  StrokeRounded: IconSquareArrowMoveLeftDownStrokeRounded,
  DuotoneRounded: IconSquareArrowMoveLeftDownDuotoneRounded,
  TwotoneRounded: IconSquareArrowMoveLeftDownTwotoneRounded,
  SolidRounded: IconSquareArrowMoveLeftDownSolidRounded,
  BulkRounded: IconSquareArrowMoveLeftDownBulkRounded,
  StrokeSharp: IconSquareArrowMoveLeftDownStrokeSharp,
  SolidSharp: IconSquareArrowMoveLeftDownSolidSharp,
};
import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.36271 6.29576L3.34475 8.60648C3.17301 8.99634 3.08714 9.19127 3.04357 9.39839C3 9.60552 3 9.81883 3 10.2455V19.9823C3 20.9334 3 21.409 3.29289 21.7045C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7045C21 21.409 21 20.9334 21 19.9823V9.83728C21 9.36311 21 9.12602 20.9465 8.89737C20.893 8.66872 20.7879 8.45666 20.5777 8.03255L19.6553 6.1713C19.3311 5.51715 19.169 5.19007 18.9108 4.94452C18.6527 4.69897 18.3196 4.55492 17.6532 4.26682L13.5757 2.50379C12.7989 2.16793 12.4105 2 12 2C11.5895 2 11.2011 2.16793 10.4243 2.50379L6.44228 4.22552C5.72974 4.53361 5.37347 4.68765 5.10422 4.95569C4.83498 5.22372 4.67755 5.58107 4.36271 6.29576Z',
  d2: 'M7 22V13M17 13V22',
  d3: 'M7 13L17 22M7 22L17 13',
  d4: 'M3 13H21',
  d5: 'M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z',
  d6: 'M4.36271 6.43375L3.34475 8.72415C3.17301 9.11057 3.08714 9.30379 3.04357 9.50909C3 9.7144 3 9.92583 3 10.3487V19.9998C3 20.9427 3 21.4141 3.29289 21.707C3.58579 21.9998 4.05719 21.9998 5 21.9998H7V12.9998H17V21.9998H19C19.9428 21.9998 20.4142 21.9998 20.7071 21.707C21 21.4141 21 20.9427 21 19.9998V9.94412C21 9.47411 21 9.23911 20.9465 9.01248C20.893 8.78584 20.7879 8.57565 20.5777 8.15526L19.6553 6.31039C19.3311 5.66199 19.169 5.33779 18.9108 5.0944C18.6527 4.85101 18.3196 4.70823 17.6532 4.42266L13.5757 2.67514C12.7989 2.34223 12.4105 2.17578 12 2.17578C11.5895 2.17578 11.2011 2.34223 10.4243 2.67514L6.44228 4.38173C5.72974 4.6871 5.37347 4.83979 5.10422 5.10547C4.83498 5.37115 4.67755 5.72535 4.36271 6.43375ZM12 9.99985C13.1046 9.99985 14 9.10441 14 7.99985C14 6.89528 13.1046 5.99985 12 5.99985C10.8954 5.99985 10 6.89528 10 7.99985C10 9.10441 10.8954 9.99985 12 9.99985Z',
  d7: 'M4.36271 6.43391L3.34475 8.7243C3.17301 9.11073 3.08714 9.30394 3.04357 9.50925C3 9.71455 3 9.92599 3 10.3489V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7071C21 21.4142 21 20.9428 21 20V9.94427C21 9.47427 21 9.23927 20.9465 9.01263C20.893 8.78599 20.7879 8.5758 20.5777 8.15542L19.6553 6.31054C19.3311 5.66214 19.169 5.33795 18.9108 5.09455C18.6527 4.85116 18.3196 4.70838 17.6532 4.42282L13.5757 2.67529C12.7989 2.34239 12.4105 2.17594 12 2.17594C11.5895 2.17594 11.2011 2.34239 10.4243 2.67529L6.44228 4.38188C5.72974 4.68726 5.37347 4.83994 5.10422 5.10562C4.83498 5.3713 4.67755 5.7255 4.36271 6.43391Z',
  d8: 'M2.85003 12.25C2.56719 12.25 2.42577 12.25 2.33791 12.1621C2.25004 12.0743 2.25004 11.9328 2.25003 11.65L2.25002 10.1843C2.24983 9.81822 2.24969 9.52932 2.30995 9.24302C2.37021 8.95672 2.48672 8.69278 2.63433 8.35838L3.7238 5.88672C3.99246 5.27574 4.20502 4.79234 4.57748 4.42179C4.94994 4.05123 5.43217 3.84338 6.04168 3.58067L10.2438 1.76487C10.9071 1.47749 11.4321 1.25 12 1.25C12.5679 1.25 13.093 1.47749 13.7562 1.76487L18.0469 3.61893C18.6173 3.8648 19.0683 4.05925 19.4254 4.3987C19.7825 4.73816 20.0015 5.18076 20.2784 5.74038L21.2793 7.7588C21.4599 8.12242 21.6025 8.4095 21.6765 8.72555C21.7505 9.0416 21.7503 9.36265 21.7501 9.76929L21.75 11.65C21.75 11.9328 21.75 12.0743 21.6622 12.1621C21.5743 12.25 21.4329 12.25 21.15 12.25H2.85003ZM12 9.99999C13.1046 9.99999 14 9.10456 14 7.99999C14 6.89542 13.1046 5.99999 12 5.99999C10.8954 5.99999 10 6.89542 10 7.99999C10 9.10456 10.8954 9.99999 12 9.99999Z',
  d9: 'M21.15 13.75C21.4329 13.75 21.5743 13.75 21.6622 13.8379C21.75 13.9257 21.75 14.0672 21.75 14.35L21.75 20.0224C21.7501 20.4588 21.7501 20.8589 21.7067 21.1844C21.6589 21.5428 21.5465 21.9216 21.2375 22.2332C20.9285 22.5448 20.5527 22.6581 20.1972 22.7063C19.8744 22.7501 19.4776 22.75 19.0448 22.75H18.15C17.9614 22.75 17.8672 22.75 17.8086 22.6914C17.75 22.6328 17.75 22.5386 17.75 22.35V14.15C17.75 13.9614 17.75 13.8672 17.8086 13.8086C17.8672 13.75 17.9614 13.75 18.15 13.75H21.15Z',
  d10: 'M15.3479 22.4086C15.4932 22.5539 15.5659 22.6265 15.5403 22.6883C15.5147 22.75 15.412 22.75 15.2065 22.75H8.79351C8.58801 22.75 8.48527 22.75 8.4597 22.6883C8.43413 22.6265 8.50678 22.5539 8.65208 22.4086L11.7172 19.3435C11.8505 19.2102 11.9172 19.1435 12 19.1435C12.0828 19.1435 12.1495 19.2102 12.2828 19.3435L15.3479 22.4086Z',
  d11: 'M6.25 22.35C6.25 22.5386 6.25 22.6328 6.19142 22.6914C6.13284 22.75 6.03856 22.75 5.85 22.75H4.9553C4.52248 22.75 4.12564 22.7501 3.80283 22.7063C3.44735 22.6581 3.07163 22.5448 2.7626 22.2332C2.45358 21.9216 2.34113 21.5428 2.29334 21.1844C2.24994 20.8589 2.24999 20.4588 2.25004 20.0224L2.25004 14.35C2.25004 14.0672 2.25004 13.9257 2.33791 13.8379C2.42578 13.75 2.5672 13.75 2.85004 13.75H5.85C6.03856 13.75 6.13284 13.75 6.19142 13.8086C6.25 13.8672 6.25 13.9614 6.25 14.15V22.35Z',
  d12: 'M13.3435 17.7172C13.2102 17.8505 13.1435 17.9172 13.1435 18C13.1435 18.0828 13.2102 18.1495 13.3435 18.2828L15.9086 20.8479C16.0539 20.9932 16.1265 21.0659 16.1883 21.0403C16.25 21.0147 16.25 20.912 16.25 20.7065V15.2935C16.25 15.088 16.25 14.9853 16.1883 14.9597C16.1265 14.9341 16.0539 15.0068 15.9086 15.1521L13.3435 17.7172Z',
  d13: 'M11.7172 16.6565C11.8505 16.7898 11.9172 16.8565 12 16.8565C12.0828 16.8565 12.1495 16.7898 12.2828 16.6565L14.8479 14.0914C14.9932 13.9461 15.0659 13.8735 15.0403 13.8117C15.0147 13.75 14.912 13.75 14.7065 13.75H9.2935C9.08801 13.75 8.98526 13.75 8.95969 13.8117C8.93412 13.8735 9.00678 13.9461 9.15208 14.0914L11.7172 16.6565Z',
  d14: 'M10.6565 18.2828C10.7898 18.1495 10.8565 18.0828 10.8565 18C10.8565 17.9172 10.7898 17.8505 10.6565 17.7172L8.09142 15.1521C7.94612 15.0068 7.87346 14.9341 7.81173 14.9597C7.75 14.9853 7.75 15.088 7.75 15.2935V20.7065C7.75 20.912 7.75 21.0147 7.81173 21.0403C7.87346 21.0659 7.94612 20.9932 8.09142 20.8479L10.6565 18.2828Z',
  d15: 'M21.15 13.75C21.4329 13.75 21.5743 13.75 21.6621 13.8379C21.75 13.9257 21.75 14.0672 21.75 14.35L21.75 20.0224C21.7501 20.4588 21.7501 20.8589 21.7067 21.1844C21.6589 21.5428 21.5465 21.9216 21.2374 22.2332C20.9284 22.5448 20.5527 22.6581 20.1972 22.7063C19.8744 22.7501 19.4776 22.75 19.0448 22.75H18.15C17.9614 22.75 17.8671 22.75 17.8085 22.6914C17.75 22.6328 17.75 22.5386 17.75 22.35V14.15C17.75 13.9614 17.75 13.8672 17.8085 13.8086C17.8671 13.75 17.9614 13.75 18.15 13.75H21.15Z',
  d16: 'M15.3479 22.4086C15.4932 22.5539 15.5658 22.6265 15.5403 22.6883C15.5147 22.75 15.412 22.75 15.2065 22.75H8.79347C8.58798 22.75 8.48523 22.75 8.45966 22.6883C8.43409 22.6265 8.50675 22.5539 8.65205 22.4086L11.7171 19.3435C11.8505 19.2102 11.9171 19.1435 12 19.1435C12.0828 19.1435 12.1495 19.2102 12.2828 19.3435L15.3479 22.4086Z',
  d17: 'M6.24997 22.35C6.24997 22.5386 6.24997 22.6328 6.19139 22.6914C6.13281 22.75 6.03853 22.75 5.84997 22.75H4.95526C4.52245 22.75 4.12561 22.7501 3.8028 22.7063C3.44732 22.6581 3.07159 22.5448 2.76257 22.2332C2.45355 21.9216 2.3411 21.5428 2.29331 21.1844C2.24991 20.8589 2.24995 20.4588 2.25 20.0224L2.25001 14.35C2.25001 14.0672 2.25001 13.9257 2.33787 13.8379C2.42574 13.75 2.56716 13.75 2.85001 13.75H5.84997C6.03853 13.75 6.13281 13.75 6.19139 13.8086C6.24997 13.8672 6.24997 13.9614 6.24997 14.15V22.35Z',
  d18: 'M13.3435 17.7172C13.2101 17.8505 13.1435 17.9172 13.1435 18C13.1435 18.0828 13.2101 18.1495 13.3435 18.2828L15.9085 20.8479C16.0539 20.9932 16.1265 21.0659 16.1882 21.0403C16.25 21.0147 16.25 20.912 16.25 20.7065V15.2935C16.25 15.088 16.25 14.9853 16.1882 14.9597C16.1265 14.9341 16.0539 15.0068 15.9085 15.1521L13.3435 17.7172Z',
  d19: 'M11.7171 16.6565C11.8505 16.7898 11.9171 16.8565 12 16.8565C12.0828 16.8565 12.1495 16.7898 12.2828 16.6565L14.8479 14.0914C14.9932 13.9461 15.0658 13.8735 15.0403 13.8117C15.0147 13.75 14.912 13.75 14.7065 13.75H9.29347C9.08798 13.75 8.98523 13.75 8.95966 13.8117C8.93409 13.8735 9.00674 13.9461 9.15205 14.0914L11.7171 16.6565Z',
  d20: 'M10.6565 18.2828C10.7898 18.1495 10.8565 18.0828 10.8565 18C10.8565 17.9172 10.7898 17.8505 10.6565 17.7172L8.09139 15.1521C7.94608 15.0068 7.87343 14.9341 7.8117 14.9597C7.74997 14.9853 7.74997 15.088 7.74997 15.2935V20.7065C7.74997 20.912 7.74997 21.0147 7.8117 21.0403C7.87343 21.0659 7.94608 20.9932 8.09139 20.8479L10.6565 18.2828Z',
  d21: 'M2.25002 10.1843C2.24983 9.81822 2.24969 9.52932 2.30995 9.24302C2.37021 8.95672 2.48672 8.69278 2.63433 8.35838L3.7238 5.88672C3.99246 5.27574 4.20502 4.79234 4.57748 4.42179C4.94994 4.05123 5.43217 3.84338 6.04168 3.58067L10.2438 1.76487C10.9071 1.47749 11.4321 1.25 12 1.25C12.5679 1.25 13.093 1.47749 13.7562 1.76487L13.7562 1.76487L18.0469 3.61893C18.6173 3.8648 19.0683 4.05925 19.4254 4.3987C19.7825 4.73816 20.0015 5.18076 20.2784 5.74038L21.2793 7.7588C21.4599 8.12242 21.6025 8.4095 21.6765 8.72555C21.7505 9.0416 21.7503 9.36265 21.7501 9.76929L21.75 11.65V11.65C21.75 11.9329 21.75 12.0743 21.6622 12.1621C21.5743 12.25 21.4329 12.25 21.15 12.25H2.85003C2.56719 12.25 2.42577 12.25 2.33791 12.1621C2.25004 12.0743 2.25004 11.9328 2.25003 11.65L2.25002 10.1843Z',
  d22: 'M7.01233 21.9992V12.9922M16.9769 12.9922V21.9992',
  d23: 'M7.01233 12.9922L16.9769 21.9992M7.01233 21.9992L16.9769 12.9922',
  d24: 'M3.02649 12.9922H20.9628',
  d25: 'M11.9945 9.98946C13.0952 9.98946 13.9874 9.09333 13.9874 7.98789C13.9874 6.88246 13.0952 5.98633 11.9945 5.98633C10.8938 5.98633 10.0016 6.88246 10.0016 7.98789C10.0016 9.09333 10.8938 9.98946 11.9945 9.98946Z',
  d26: 'M2.99877 21.9761V6.97749C2.99877 6.97385 3.00075 6.9705 3.00393 6.96874L11.9862 2.00464C11.9893 2.00297 11.9929 2.00297 11.9959 2.00465L20.9963 7.01113C20.9994 7.0129 21.0014 7.01624 21.0014 7.01987V21.9761H2.99877Z',
  d27: 'M17.0059 12.25H16.9944L7.00554 12.25H6.99413H2.25L2.25 7C2.25 6.72762 2.39767 6.47666 2.63577 6.34438L11.6358 1.34438C11.8623 1.21854 12.1377 1.21854 12.3642 1.34438L21.3642 6.34438C21.6023 6.47666 21.75 6.72762 21.75 7L21.75 12.25H17.0059ZM6.25 13.75H2.25L2.25 22.75H6.25L6.25 13.75ZM12.0133 19.0607L8.313 22.75H15.6916L12.0133 19.0607ZM21.75 22.75V13.75H17.75V22.75H21.75ZM12.0133 16.9394L15.1931 13.75L8.81446 13.75L12.0133 16.9394ZM7.75 14.8069L7.75 21.1932L10.9526 18L7.75 14.8069ZM13.0739 18L16.25 21.1855V14.8145L13.0739 18ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z',
};

export const IconBarnsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-stroke-rounded IconBarnsStrokeRounded"
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

export const IconBarnsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-duotone-rounded IconBarnsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconBarnsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-twotone-rounded IconBarnsTwotoneRounded"
    >
      <path 
        d={d.d7} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBarnsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-solid-rounded IconBarnsSolidRounded"
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

export const IconBarnsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-bulk-rounded IconBarnsBulkRounded"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
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

export const IconBarnsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-stroke-sharp IconBarnsStrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBarnsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="barns-solid-sharp IconBarnsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBarns: TheIconSelfPack = {
  name: 'Barns',
  StrokeRounded: IconBarnsStrokeRounded,
  DuotoneRounded: IconBarnsDuotoneRounded,
  TwotoneRounded: IconBarnsTwotoneRounded,
  SolidRounded: IconBarnsSolidRounded,
  BulkRounded: IconBarnsBulkRounded,
  StrokeSharp: IconBarnsStrokeSharp,
  SolidSharp: IconBarnsSolidSharp,
};
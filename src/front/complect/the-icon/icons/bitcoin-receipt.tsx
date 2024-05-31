import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.125 13.5L10.125 7.5M12 7.5V6M12 15V13.5M10.125 10.5H13.875M13.875 10.5C14.4963 10.5 15 11.0037 15 11.625V12.375C15 12.9963 14.4963 13.5 13.875 13.5H9M13.875 10.5C14.4963 10.5 15 9.99632 15 9.375V8.625C15 8.00368 14.4963 7.5 13.875 7.5H9',
  d2: 'M10.94 21.5124L9.02913 20.3073C8.54415 20.0014 8.30166 19.8485 8.03253 19.8397C7.74172 19.8301 7.49493 19.9768 6.97087 20.3073C6.38395 20.6774 5.21687 21.6971 4.46195 21.2108C4 20.9133 4 20.1575 4 18.6458V8.00002C4 5.17158 4 3.75736 4.82699 2.87868C5.65399 2 6.98501 2 9.64706 2H14.3529C17.015 2 18.346 2 19.173 2.87868C20 3.75736 20 5.17158 20 8.00002V18.6458C20 20.1575 20 20.9133 19.538 21.2108C18.7831 21.6971 17.6161 20.6774 17.0291 20.3073C16.5441 20.0014 16.3017 19.8485 16.0325 19.8397C15.7417 19.8301 15.4949 19.9768 14.9709 20.3073L13.06 21.5124C12.5445 21.8374 12.2868 22 12 22C11.7132 22 11.4554 21.8374 10.94 21.5124Z',
  d3: 'M17.5572 1.36737C16.7352 1.24995 15.6926 1.24997 14.4103 1.25H14.4103H9.5897H9.58968C8.30745 1.24997 7.2648 1.24995 6.44282 1.36737C5.58215 1.49032 4.85468 1.75496 4.28085 2.36466C3.71306 2.96794 3.4722 3.72189 3.35931 4.61404C3.24997 5.47813 3.24999 6.57795 3.25 7.94794L3.25 18.7008C3.24996 19.4095 3.24992 20.0198 3.3149 20.4869C3.38152 20.9658 3.54247 21.5107 4.05584 21.8414C4.81435 22.3299 5.65501 21.9917 6.12709 21.7447C6.39744 21.6033 7.16019 21.0865 7.37096 20.9417C7.56973 20.8025 8.09962 20.6078 8.62905 20.9417L10.5666 22.1636C10.8013 22.3116 11.0235 22.4518 11.2239 22.5507C11.4476 22.6611 11.7007 22.75 12 22.75C12.2993 22.75 12.5524 22.6611 12.7761 22.5507C12.9765 22.4518 13.1986 22.3117 13.4332 22.1637L13.4334 22.1636L15.371 20.9417C15.5795 20.7708 16.1804 20.5705 16.9154 21.1364C17.1261 21.2813 17.6026 21.6033 17.8729 21.7447C18.345 21.9917 19.1857 22.3299 19.9442 21.8414C20.4575 21.5107 20.6185 20.9658 20.6851 20.4869C20.7501 20.0198 20.75 19.4095 20.75 18.7008L20.75 7.94796V7.9479C20.75 6.57793 20.75 5.47812 20.6407 4.61404C20.5278 3.72189 20.2869 2.96794 19.7192 2.36466C19.1453 1.75496 18.4179 1.49032 17.5572 1.36737ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V6.75H9C8.58579 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 8.58579 8.25 9 8.25H9.375V10.5002V12.75H9C8.58579 12.75 8.25 13.0858 8.25 13.5C8.25 13.9142 8.58579 14.25 9 14.25H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V14.25H13.875C14.9105 14.25 15.75 13.4105 15.75 12.375V11.625C15.75 11.2029 15.6105 10.8134 15.3751 10.5C15.6105 10.1866 15.75 9.7971 15.75 9.375V8.625C15.75 7.58947 14.9105 6.75 13.875 6.75H12.75V6ZM10.875 9.75V8.25H13.875C14.0821 8.25 14.25 8.41789 14.25 8.625V9.375C14.25 9.58211 14.0821 9.75 13.875 9.75H10.875ZM10.875 11.25H13.875C14.0821 11.25 14.25 11.4179 14.25 11.625V12.375C14.25 12.5821 14.0821 12.75 13.875 12.75H10.875L10.875 11.25Z',
  d4: 'M14.4103 1.25C15.6926 1.24997 16.7352 1.24995 17.5572 1.36737C18.4179 1.49032 19.1453 1.75496 19.7192 2.36466C20.2869 2.96794 20.5278 3.72189 20.6407 4.61404C20.75 5.47812 20.75 6.57793 20.75 7.9479V7.94796L20.75 18.7008C20.75 19.4095 20.7501 20.0198 20.6851 20.4869C20.6185 20.9658 20.4575 21.5107 19.9442 21.8414C19.1857 22.3299 18.345 21.9917 17.8729 21.7447C17.6026 21.6033 17.1261 21.2813 16.9154 21.1364C16.1804 20.5705 15.5795 20.7708 15.371 20.9417L13.4334 22.1636L13.4332 22.1637C13.1986 22.3117 12.9765 22.4518 12.7761 22.5507C12.5524 22.6611 12.2993 22.75 12 22.75C11.7007 22.75 11.4476 22.6611 11.2239 22.5507C11.0235 22.4518 10.8013 22.3116 10.5666 22.1636L8.62905 20.9417C8.09962 20.6078 7.56973 20.8025 7.37096 20.9417C7.16019 21.0865 6.39744 21.6033 6.12709 21.7447C5.65501 21.9917 4.81435 22.3299 4.05584 21.8414C3.54247 21.5107 3.38152 20.9658 3.3149 20.4869C3.24992 20.0198 3.24996 19.4095 3.25 18.7008L3.25 7.94794C3.24999 6.57795 3.24997 5.47813 3.35931 4.61404C3.4722 3.72189 3.71306 2.96794 4.28085 2.36466C4.85468 1.75496 5.58215 1.49032 6.44282 1.36737C7.2648 1.24995 8.30745 1.24997 9.58968 1.25H9.5897H14.4103H14.4103Z',
  d5: 'M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.75H13.875C14.9105 6.75 15.75 7.58947 15.75 8.625V9.375C15.75 9.7971 15.6105 10.1866 15.3751 10.5C15.6105 10.8134 15.75 11.2029 15.75 11.625V12.375C15.75 13.4105 14.9105 14.25 13.875 14.25H12.75V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V14.25H9C8.58579 14.25 8.25 13.9142 8.25 13.5C8.25 13.0858 8.58579 12.75 9 12.75H9.375V10.5002C9.375 10.5001 9.375 10.5002 9.375 10.5002L9.375 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5C8.25 7.08579 8.58579 6.75 9 6.75H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25ZM10.875 8.25V9.75H13.875C14.0821 9.75 14.25 9.58211 14.25 9.375V8.625C14.25 8.41789 14.0821 8.25 13.875 8.25H10.875ZM13.875 11.25H10.875L10.875 12.75H13.875C14.0821 12.75 14.25 12.5821 14.25 12.375V11.625C14.25 11.4179 14.0821 11.25 13.875 11.25Z',
  d6: 'M10.1081 13.5V7.5M11.9778 7.5V6M11.9778 15V13.5M10.1081 10.5H13.8475M13.8475 10.5C14.4671 10.5 14.9694 11.0037 14.9694 11.625V12.375C14.9694 12.9963 14.4671 13.5 13.8475 13.5H8.98633M13.8475 10.5C14.4671 10.5 14.9694 9.99632 14.9694 9.375V8.625C14.9694 8.00368 14.4671 7.5 13.8475 7.5H8.98633',
  d7: 'M4.22744 2.01866L19.8558 2.01855C19.9109 2.01855 19.9555 2.06332 19.9555 2.11855V21.3654C19.9555 21.4414 20.0144 21.5421 19.9555 21.5054L15.9718 19.4841L12.081 21.9347C12.0652 21.9447 12.0467 21.9493 12.0281 21.9515C11.9484 21.961 11.9908 22.0112 11.9657 21.9942L8.00443 19.501L4.33518 21.3543C4.27635 21.3911 3.98389 21.5585 3.98389 21.4824V2.01866C3.98389 1.96349 4.17869 2.01866 4.22744 2.01866Z',
  d8: 'M4 1.25C3.80108 1.25 3.61031 1.32902 3.46965 1.46969C3.329 1.61035 3.24999 1.80113 3.25 2.00005L3.2513 21.5124C3.25132 21.7726 3.38627 22.0143 3.60785 22.1508C3.82943 22.2874 4.10596 22.2993 4.33845 22.1823L7.96027 20.3596L11.6025 22.636C11.8457 22.788 12.1543 22.788 12.3975 22.636L16.0398 20.3596L19.6629 22.1823C19.8954 22.2993 20.172 22.2873 20.3935 22.1508C20.6151 22.0142 20.75 21.7726 20.75 21.5123V2C20.75 1.58579 20.4142 1.25 20 1.25H4ZM12.75 6.75V5.25H11.25V6.75H8.25V8.25H9.375V12.75H8.25V14.25H11.25V15.75H12.75V14.25H13.875C14.9105 14.25 15.75 13.4105 15.75 12.375V11.625C15.75 11.2029 15.6105 10.8134 15.3751 10.5C15.6105 10.1866 15.75 9.7971 15.75 9.375V8.625C15.75 7.58947 14.9105 6.75 13.875 6.75H12.75ZM10.875 9.75V8.25H13.875C14.0821 8.25 14.25 8.41789 14.25 8.625V9.375C14.25 9.58211 14.0821 9.75 13.875 9.75H10.875ZM10.875 11.25H13.875C14.0821 11.25 14.25 11.4179 14.25 11.625V12.375C14.25 12.5821 14.0821 12.75 13.875 12.75H10.875L10.875 11.25Z',
} as const;

export const IconBitcoinReceiptStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-stroke-rounded IconBitcoinReceiptStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiptDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-duotone-rounded IconBitcoinReceiptDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiptTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-twotone-rounded IconBitcoinReceiptTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiptSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-solid-rounded IconBitcoinReceiptSolidRounded"
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

export const IconBitcoinReceiptBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-bulk-rounded IconBitcoinReceiptBulkRounded"
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

export const IconBitcoinReceiptStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-stroke-sharp IconBitcoinReceiptStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinReceiptSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-receipt-solid-sharp IconBitcoinReceiptSolidSharp"
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

export const iconPackOfBitcoinReceipt: TheIconSelfPack = {
  name: 'BitcoinReceipt',
  StrokeRounded: IconBitcoinReceiptStrokeRounded,
  DuotoneRounded: IconBitcoinReceiptDuotoneRounded,
  TwotoneRounded: IconBitcoinReceiptTwotoneRounded,
  SolidRounded: IconBitcoinReceiptSolidRounded,
  BulkRounded: IconBitcoinReceiptBulkRounded,
  StrokeSharp: IconBitcoinReceiptStrokeSharp,
  SolidSharp: IconBitcoinReceiptSolidSharp,
};
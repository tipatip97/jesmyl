import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.30064 17.1912L3.16042 10.2591C2.98802 9.21103 2.90182 8.68698 3.17785 8.34349C3.45388 8 3.96121 8 4.97587 8H19.0241C20.0388 8 20.5461 8 20.8221 8.34349C21.0982 8.68698 21.012 9.21103 20.8396 10.2591L19.6994 17.1912C19.3214 19.4888 19.1325 20.6376 18.361 21.3188C17.5894 22 16.4773 22 14.253 22H9.74699C7.5227 22 6.41055 22 5.63904 21.3188C4.86752 20.6376 4.67856 19.4888 4.30064 17.1912Z',
  d2: 'M10.4375 17.6667L10.4375 12.3333M12 12.3333V11M12 19V17.6667M10.4375 15H13.5625M13.5625 15C14.0803 15 14.5 15.4477 14.5 16V16.6667C14.5 17.219 14.0803 17.6667 13.5625 17.6667H9.5M13.5625 15C14.0803 15 14.5 14.5523 14.5 14V13.3333C14.5 12.781 14.0803 12.3333 13.5625 12.3333H9.5',
  d3: 'M17 8C17 4.68629 15.5 2 12 2C8.5 2 7 4.68629 7 8',
  d4: 'M8.98815 4.60649C8.3479 5.46209 8 6.72461 8 8.25H6C6 6.46168 6.4021 4.72421 7.38685 3.40823C8.40295 2.05036 9.96039 1.25 12 1.25C14.0396 1.25 15.597 2.05036 16.6132 3.40823C17.5979 4.72421 18 6.46168 18 8.25H16C16 6.72461 15.6521 5.46209 15.0118 4.60649C14.403 3.79279 13.4604 3.25 12 3.25C10.5396 3.25 9.59705 3.79279 8.98815 4.60649Z',
  d5: 'M20.3106 7.30113C19.9666 7.24988 19.5382 7.24994 19.0742 7.25L4.9258 7.25C4.46174 7.24994 4.03335 7.24988 3.68934 7.30113C3.30747 7.35803 2.89742 7.49516 2.59323 7.8737C2.29465 8.24525 2.24042 8.67321 2.25127 9.05822C2.26131 9.41453 2.34074 9.89711 2.42036 10.3809L3.56828 17.3598C3.75068 18.4688 3.89842 19.3671 4.10181 20.0697C4.31304 20.7994 4.60795 21.4089 5.14263 21.881C5.68111 22.3565 6.31533 22.5625 7.05117 22.6586C7.75232 22.7501 8.62724 22.75 9.69618 22.75H9.69619H9.6962L14.3038 22.75H14.3038H14.3038C15.3728 22.75 16.2477 22.7501 16.9488 22.6586C17.6847 22.5625 18.3189 22.3565 18.8574 21.881C19.392 21.4089 19.6869 20.7994 19.8982 20.0697C20.1016 19.3671 20.2493 18.4688 20.4317 17.3598L20.4317 17.3597L20.4317 17.3597L21.5873 10.3341C21.667 9.85034 21.7387 9.41454 21.7487 9.05822C21.7596 8.67321 21.7053 8.24525 21.4068 7.8737C21.1026 7.49516 20.6925 7.35803 20.3106 7.30113ZM12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V11.5833H9.5C9.08579 11.5833 8.75 11.9191 8.75 12.3333C8.75 12.7475 9.08579 13.0833 9.5 13.0833H9.6875L9.6875 16.9167H9.5C9.08579 16.9167 8.75 17.2525 8.75 17.6667C8.75 18.0809 9.08579 18.4167 9.5 18.4167H11.25V19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19V18.4167L13.5625 18.4167C14.5393 18.4167 15.25 17.5868 15.25 16.6667V16C15.25 15.6376 15.1398 15.2892 14.9465 15C15.1398 14.7108 15.25 14.3624 15.25 14V13.3333C15.25 12.4132 14.5393 11.5833 13.5625 11.5833H12.75V11ZM11.1875 14.25V13.0833L13.5625 13.0833C13.6212 13.0833 13.75 13.1489 13.75 13.3333V14C13.75 14.1844 13.6212 14.25 13.5625 14.25L11.1875 14.25ZM11.1875 15.75L13.5625 15.75C13.6212 15.75 13.75 15.8156 13.75 16V16.6667C13.75 16.8511 13.6212 16.9167 13.5625 16.9167L11.1875 16.9167V15.75Z',
  d6: 'M19.0742 7.25C19.5382 7.24994 19.9666 7.24988 20.3106 7.30113C20.6925 7.35803 21.1026 7.49516 21.4068 7.8737C21.7053 8.24525 21.7596 8.67321 21.7487 9.05822C21.7387 9.41454 21.667 9.85034 21.5873 10.3341L20.4317 17.3597L20.4317 17.3597C20.2493 18.4687 20.1016 19.367 19.8982 20.0697C19.6869 20.7994 19.392 21.4089 18.8574 21.881C18.3189 22.3565 17.6847 22.5625 16.9488 22.6586C16.2477 22.7501 15.3727 22.75 14.3038 22.75H14.3038H9.6962H9.69619C8.62725 22.75 7.75232 22.7501 7.05117 22.6586C6.31533 22.5625 5.68111 22.3565 5.14263 21.881C4.60795 21.4089 4.31304 20.7994 4.10181 20.0697C3.89842 19.3671 3.75068 18.4688 3.56828 17.3598L2.42036 10.3809C2.34074 9.89711 2.26131 9.41453 2.25127 9.05822C2.24042 8.67321 2.29465 8.24525 2.59323 7.8737C2.89742 7.49516 3.30747 7.35803 3.68934 7.30113C4.03335 7.24988 4.46174 7.24994 4.9258 7.25L19.0742 7.25Z',
  d7: 'M12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V11.5833H13.5625C14.5393 11.5833 15.25 12.4132 15.25 13.3333V14C15.25 14.3624 15.1398 14.7108 14.9465 15C15.1398 15.2892 15.25 15.6376 15.25 16V16.6667C15.25 17.5868 14.5393 18.4167 13.5625 18.4167H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V18.4167H9.5C9.08579 18.4167 8.75 18.0809 8.75 17.6667C8.75 17.2525 9.08579 16.9167 9.5 16.9167H9.6875L9.6875 13.0833H9.5C9.08579 13.0833 8.75 12.7475 8.75 12.3333C8.75 11.9191 9.08579 11.5833 9.5 11.5833H11.25V11C11.25 10.5858 11.5858 10.25 12 10.25ZM11.1875 13.0833V14.25H13.5625C13.6212 14.25 13.75 14.1844 13.75 14V13.3333C13.75 13.1489 13.6212 13.0833 13.5625 13.0833H11.1875ZM13.5625 15.75H11.1875L11.1875 16.9167H13.5625C13.6212 16.9167 13.75 16.8511 13.75 16.6667V16C13.75 15.8156 13.6212 15.75 13.5625 15.75Z',
  d8: 'M8.0537 7.25C8.17389 6.17043 8.49396 5.26715 8.98833 4.60649C9.59723 3.79279 10.5398 3.25 12.0002 3.25C13.4606 3.25 14.4031 3.79279 15.012 4.60649C15.5064 5.26715 15.8265 6.17043 15.9467 7.25H17.9564C17.8285 5.82377 17.4131 4.47699 16.6133 3.40823C15.5972 2.05036 14.0398 1.25 12.0002 1.25C9.96057 1.25 8.40313 2.05036 7.38703 3.40823C6.58727 4.47699 6.17181 5.82377 6.04395 7.25H8.0537Z',
  d9: 'M10.422 17.6467V12.3199M11.9813 12.3199V10.9883M11.9813 18.9784V17.6467M10.422 14.9833H13.5407M13.5407 14.9833C14.0575 14.9833 14.4764 15.4305 14.4764 15.9821V16.648C14.4764 17.1996 14.0575 17.6467 13.5407 17.6467H9.48633M13.5407 14.9833C14.0575 14.9833 14.4764 14.5362 14.4764 13.9846V13.3187C14.4764 12.7671 14.0575 12.3199 13.5407 12.3199H9.48633',
  d10: 'M17.4703 7.49321C17.4703 4.45939 15.0128 2 11.9812 2C8.94971 2 6.49219 4.45939 6.49219 7.49321',
  d11: 'M2.48307 8.07078L5.00203 22.004H18.9593L21.4813 8.0708C21.4924 8.00951 21.4453 7.95312 21.3831 7.95312H2.58127C2.51904 7.95312 2.47199 8.0095 2.48307 8.07078Z',
  d12: 'M12 3.25C9.51472 3.25 7.5 5.26472 7.5 7.75H5.5C5.5 4.16015 8.41015 1.25 12 1.25C15.5899 1.25 18.5 4.16015 18.5 7.75H16.5C16.5 5.26472 14.4853 3.25 12 3.25Z',
  d13: 'M2.50001 7.25C2.27801 7.25 2.06742 7.34835 1.92492 7.51857C1.78242 7.6888 1.72265 7.91341 1.7617 8.13194L4.37411 22.75L19.63 22.75L22.2383 8.13174C22.2773 7.91323 22.2175 7.68867 22.075 7.5185C21.9325 7.34832 21.722 7.25 21.5 7.25L2.50001 7.25ZM12.75 11.5833L12.75 10.25L11.25 10.25L11.25 11.5833L8.75 11.5833L8.75 13.0833H9.6875L9.6875 16.9167H8.75V18.4167H11.25V19.75L12.75 19.75V18.4167H13.5625C14.5393 18.4167 15.25 17.5868 15.25 16.6667V16C15.25 15.6376 15.1398 15.2892 14.9465 15C15.1398 14.7108 15.25 14.3624 15.25 14V13.3333C15.25 12.4132 14.5393 11.5833 13.5625 11.5833H12.75ZM11.1875 14.25V13.0833H13.5625C13.6212 13.0833 13.75 13.1489 13.75 13.3333V14C13.75 14.1844 13.6212 14.25 13.5625 14.25H11.1875ZM11.1875 15.75L13.5625 15.75C13.6212 15.75 13.75 15.8156 13.75 16V16.6667C13.75 16.8511 13.6212 16.9167 13.5625 16.9167L11.1875 16.9167V15.75Z',
} as const;

export const IconBitcoinShoppingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-stroke-rounded IconBitcoinShoppingStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShoppingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-duotone-rounded IconBitcoinShoppingDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShoppingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-twotone-rounded IconBitcoinShoppingTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShoppingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-solid-rounded IconBitcoinShoppingSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinShoppingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-bulk-rounded IconBitcoinShoppingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShoppingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-stroke-sharp IconBitcoinShoppingStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinShoppingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-shopping-solid-sharp IconBitcoinShoppingSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinShopping: TheIconSelfPack = {
  name: 'BitcoinShopping',
  StrokeRounded: IconBitcoinShoppingStrokeRounded,
  DuotoneRounded: IconBitcoinShoppingDuotoneRounded,
  TwotoneRounded: IconBitcoinShoppingTwotoneRounded,
  SolidRounded: IconBitcoinShoppingSolidRounded,
  BulkRounded: IconBitcoinShoppingBulkRounded,
  StrokeSharp: IconBitcoinShoppingStrokeSharp,
  SolidSharp: IconBitcoinShoppingSolidSharp,
};
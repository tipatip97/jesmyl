import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.9474 19C12.8695 20.0216 12.6757 20.69 12.1945 21.1799C11.3891 22 10.0927 22 7.5 22C4.90728 22 3.61091 22 2.80546 21.1799C2 20.3598 2 19.0399 2 16.4V11.6C2 8.96017 2 7.64024 2.80546 6.82014C3.29517 6.32152 3.96634 6.12606 5 6.04944',
  d2: 'M7.49199 19.0006H7.50098',
  d3: 'M16.0785 2.00061H13.9215C11.0208 2.00061 9.57048 2.00061 8.70959 2.90386C7.8487 3.80712 7.93917 5.23389 8.12011 8.08744L8.24595 10.0722C8.28754 10.728 8.30833 11.0559 8.38194 11.3294C8.66622 12.3856 9.53533 13.1903 10.6225 13.4041C10.904 13.4595 11.2373 13.4595 11.904 13.4595C12.8328 13.4595 12.8202 14.2267 12.8202 14.986C12.8202 15.5751 12.8202 15.8696 13.0121 15.9708C13.204 16.072 13.4526 15.9087 13.9499 15.5819L16.9093 13.6372C17.1029 13.51 17.2769 13.4595 17.5048 13.4595C18.727 13.4595 19.3381 13.4595 19.8333 13.2756C21.5492 12.6386 21.6918 11.0532 21.7909 9.49056L21.8799 8.08744C22.0608 5.23389 22.1513 3.80712 21.2904 2.90386C20.4295 2.00061 18.9792 2.00061 16.0785 2.00061Z',
  d4: 'M13.8342 8.42918C11.4258 6.7149 14.9993 5.00061 14.9993 5.00061C14.9993 5.00061 18.5746 6.7149 16.1663 8.42918M13.8342 8.42918H16.1663M13.8342 8.42918L13.2507 11.0006M16.1663 8.42918L16.9821 11.0006',
  d5: 'M12.9474 18.9994C12.8695 20.021 12.6757 20.6894 12.1945 21.1793C11.3891 21.9994 10.0927 21.9994 7.5 21.9994C4.90728 21.9994 3.61091 21.9994 2.80546 21.1793C2 20.3592 2 19.0393 2 16.3994V11.5994C2 8.95956 2 7.63963 2.80546 6.81953C3.29517 6.32091 3.96634 6.12545 5 6.04883',
  d6: 'M7.49199 19H7.50098',
  d7: 'M16.0785 2H13.9215C11.0208 2 9.57048 2 8.70959 2.90325C7.8487 3.8065 7.93917 5.23328 8.12011 8.08683L8.24595 10.0716C8.28754 10.7274 8.30833 11.0553 8.38194 11.3288C8.66622 12.3849 9.53533 13.1897 10.6225 13.4035C10.904 13.4589 11.2373 13.4589 11.904 13.4589C12.8328 13.4589 12.8202 14.2261 12.8202 14.9854C12.8202 15.5745 12.8202 15.869 13.0121 15.9702C13.204 16.0714 13.4526 15.908 13.9499 15.5813L16.9093 13.6366C17.1029 13.5094 17.2769 13.4589 17.5048 13.4589C18.727 13.4589 19.3381 13.4589 19.8333 13.275C21.5492 12.638 21.6918 11.0526 21.7909 9.48995L21.8799 8.08683C22.0608 5.23328 22.1513 3.8065 21.2904 2.90325C20.4295 2 18.9792 2 16.0785 2Z',
  d8: 'M13.9215 2H16.0785C18.9792 2 20.4295 2 21.2904 2.90325C22.1513 3.8065 22.0608 5.23328 21.8799 8.08683L21.7909 9.48995C21.6918 11.0526 21.5492 12.638 19.8333 13.275C19.3381 13.4589 18.727 13.4589 17.5048 13.4589C17.2769 13.4589 17.1029 13.5094 16.9093 13.6366L13.9499 15.5813C13.4526 15.908 13.204 16.0714 13.0121 15.9702C12.8202 15.869 12.8202 15.5745 12.8202 14.9854C12.8202 14.9754 12.8202 14.9653 12.8203 14.9553C12.8204 14.2059 12.8206 13.4589 11.904 13.4589C11.2373 13.4589 10.904 13.4589 10.6225 13.4035C9.53533 13.1897 8.66622 12.3849 8.38194 11.3288C8.30833 11.0553 8.28754 10.7274 8.24595 10.0716L8.12011 8.08683C7.93917 5.23328 7.8487 3.80651 8.70959 2.90325C9.57048 2 11.0208 2 13.9215 2ZM14.9992 5C14.9992 5 11.4256 6.71429 13.8341 8.42857H16.1663C18.5747 6.71429 14.9992 5 14.9992 5Z',
  d9: 'M13.8342 8.42857C11.4258 6.71429 14.9993 5 14.9993 5C14.9993 5 18.5746 6.71429 16.1663 8.42857M13.8342 8.42857H16.1663M13.8342 8.42857L13.2507 11M16.1663 8.42857L16.9821 11',
  d10: 'M5.65104 5.34935C5.55718 5.26278 5.41374 5.27138 5.12688 5.28856C4.85998 5.30455 4.61144 5.32701 4.38078 5.35859C3.54626 5.47283 2.83511 5.71871 2.27037 6.29371C1.70748 6.86684 1.46848 7.58539 1.35714 8.4286C1.24997 9.24024 1.24998 10.2712 1.25 11.5455V11.5455L1.25 16.4528V16.4528C1.24998 17.7272 1.24997 18.7581 1.35714 19.5697C1.46848 20.4129 1.70748 21.1315 2.27037 21.7046C2.83511 22.2796 3.54626 22.5255 4.38078 22.6397C5.18059 22.7492 6.19539 22.7492 7.44484 22.7491H7.55516C8.80462 22.7492 9.81942 22.7492 10.6192 22.6397C11.4537 22.5255 12.1649 22.2796 12.7296 21.7046C13.2925 21.1315 13.5315 20.4129 13.6429 19.5697C13.6683 19.3773 13.6877 19.1725 13.7024 18.9552C13.7244 18.6328 13.7353 18.4717 13.6532 18.3779C13.5711 18.2842 13.3688 18.2713 12.9642 18.2453C12.6534 18.2254 12.3127 18.1445 11.9619 17.9594C10.8899 17.3939 10.6738 16.3606 10.6187 15.9936C10.606 15.9086 10.5996 15.8661 10.5912 15.8411C10.5583 15.7431 10.5066 15.6901 10.4095 15.6548C10.3847 15.6458 10.3449 15.6388 10.2654 15.6248L10.2653 15.6248C10.2394 15.6202 10.2137 15.6154 10.188 15.6104C8.27361 15.2339 6.71978 13.8109 6.20887 11.9127C6.07531 11.4165 6.04182 10.8804 6.01067 10.3816V10.3816L5.8648 8.07992C5.81562 7.30515 5.76871 6.5663 5.75442 5.88776C5.74808 5.58653 5.7449 5.43591 5.65104 5.34935ZM7.48772 18C6.9379 18 6.49219 18.4478 6.49219 19C6.49219 19.5523 6.9379 20 7.48772 20H7.49666C8.04647 20 8.49219 19.5523 8.49219 19C8.49219 18.4478 8.04647 18 7.49666 18H7.48772Z',
  d11: 'M19.55 1.36978C18.6668 1.25003 17.5371 1.25005 16.1343 1.25007L13.8654 1.25007C12.4626 1.25005 11.3329 1.25003 10.4497 1.36978C9.53449 1.49386 8.76302 1.76004 8.16654 2.38588C7.56843 3.01342 7.34511 3.79382 7.27615 4.70729C7.20983 5.58583 7.28043 6.69901 7.36784 8.07721L7.50264 10.2033C7.5389 10.7777 7.56406 11.1763 7.65757 11.5238C8.01738 12.8605 9.11466 13.8715 10.4777 14.1395C10.8322 14.2092 11.2343 14.2091 11.8204 14.209C11.9294 14.214 12.0156 14.3027 12.018 14.4118C12.0253 14.7381 12.0463 15.3979 12.1024 15.7721C12.1372 16.0044 12.2425 16.4123 12.662 16.6336C13.0773 16.8527 13.4718 16.7145 13.6829 16.6162C13.8821 16.5235 14.109 16.3742 14.3259 16.2316L14.3259 16.2316L17.321 14.2635C17.3632 14.2453 17.4896 14.209 17.6577 14.209C18.7311 14.2095 19.4703 14.2098 20.0942 13.9782C21.1737 13.5774 21.785 12.8513 22.1168 12.0028C22.4287 11.2052 22.4909 10.3008 22.5393 9.53748L22.6319 8.0772C22.7193 6.699 22.7899 5.58582 22.7236 4.70729C22.6546 3.79382 22.4313 3.01342 21.8332 2.38588C21.2367 1.76004 20.4652 1.49386 19.55 1.36978ZM15.3234 4.32379C15.1183 4.22547 14.8798 4.2255 14.6747 4.32385L14.6639 4.32972C14.5488 4.39181 14.2385 4.55934 14.0784 4.66029C13.7546 4.86442 13.3215 5.17303 12.9619 5.56329C12.6137 5.9412 12.2439 6.4946 12.2501 7.17656C12.2544 7.65036 12.4369 8.08183 12.7628 8.46646L12.7628 8.46647C12.8831 8.60848 12.9433 8.67949 12.9601 8.74819C12.9769 8.81688 12.9592 8.89467 12.9239 9.05025L12.9239 9.05026L12.5192 10.8341C12.4275 11.238 12.6806 11.6398 13.0846 11.7315C13.4885 11.8231 13.8903 11.57 13.982 11.166L14.3269 9.64587C14.3778 9.42181 14.4032 9.30978 14.4853 9.24421C14.5674 9.17864 14.6823 9.17864 14.912 9.17864H15.1781C15.3899 9.17864 15.4957 9.17864 15.5749 9.23655C15.654 9.29446 15.686 9.39537 15.75 9.59719L16.2671 11.2269C16.3923 11.6217 16.814 11.8402 17.2088 11.715C17.6036 11.5897 17.8221 11.1681 17.6968 10.7733L17.1463 9.03786C17.0944 8.87439 17.0685 8.79266 17.0822 8.71876C17.0959 8.64485 17.1589 8.56614 17.2849 8.40874C17.5809 8.03873 17.7459 7.62659 17.7498 7.17621C17.7557 6.49422 17.3855 5.94089 17.0371 5.56307C16.6773 5.17287 16.2439 4.8643 15.92 4.66018C15.7598 4.55926 15.4494 4.39179 15.3343 4.32968L15.3343 4.32967L15.3234 4.32379Z',
  d12: 'M5.12687 5.28852C5.41374 5.27134 5.55718 5.26275 5.65104 5.34931C5.7449 5.43587 5.74808 5.58649 5.75442 5.88773C5.76871 6.56626 5.81561 7.30511 5.8648 8.07988L6.01067 10.3816C6.04182 10.8803 6.07531 11.4164 6.20887 11.9126C6.71978 13.8108 8.27361 15.2339 10.188 15.6103C10.2137 15.6154 10.2394 15.6202 10.2653 15.6247C10.3449 15.6387 10.3847 15.6457 10.4095 15.6547C10.5066 15.6901 10.5583 15.7431 10.5912 15.841C10.5996 15.866 10.606 15.9085 10.6187 15.9936C10.6738 16.3606 10.8899 17.3939 11.9619 17.9594C12.3127 18.1445 12.6534 18.2254 12.9642 18.2453C13.3688 18.2712 13.5711 18.2842 13.6532 18.3779C13.7353 18.4716 13.7244 18.6328 13.7024 18.9551C13.6877 19.1725 13.6683 19.3772 13.6429 19.5697C13.5315 20.4129 13.2925 21.1314 12.7296 21.7045C12.1649 22.2795 11.4537 22.5254 10.6192 22.6397C9.81941 22.7492 8.80462 22.7491 7.55516 22.7491H7.44484C6.19539 22.7491 5.18059 22.7492 4.38078 22.6397C3.54626 22.5254 2.8351 22.2795 2.27037 21.7045C1.70748 21.1314 1.46848 20.4129 1.35714 19.5697C1.24996 18.758 1.24998 17.7271 1.25 16.4527V11.5455C1.24998 10.2711 1.24996 9.24021 1.35714 8.42857C1.46848 7.58536 1.70748 6.8668 2.27037 6.29368C2.8351 5.71868 3.54626 5.47279 4.38078 5.35855C4.61144 5.32698 4.85998 5.30451 5.12687 5.28852Z',
  d13: 'M6.49219 19C6.49219 18.4477 6.9379 18 7.48772 18H7.49666C8.04647 18 8.49219 18.4477 8.49219 19C8.49219 19.5523 8.04647 20 7.49666 20H7.48772C6.9379 20 6.49219 19.5523 6.49219 19Z',
  d14: 'M12.9361 18.9922V21.9912L2 21.9908L2.0003 5.99817H4.99691',
  d15: 'M7.48633 18.9932H7.49532',
  d16: 'M13.8215 8.42698C11.4155 6.71349 14.9854 5 14.9854 5C14.9854 5 18.5572 6.71349 16.1513 8.42698M13.8215 8.42698H16.1513M13.8215 8.42698L13.2386 10.9972M16.1513 8.42698L16.9663 10.9972',
  d17: 'M21.8965 1.9873H8.09208C8.03691 1.9873 7.99219 2.03206 7.99219 2.08726V12.8871C7.99219 12.9423 8.03691 12.9871 8.09208 12.9871H11.0028L10.9811 15.7891C10.9804 15.875 11.081 15.9217 11.1461 15.8657L14.4888 12.9909H21.8965C21.9517 12.9909 21.9964 12.9462 21.9964 12.891V2.08726C21.9964 2.03206 21.9517 1.9873 21.8965 1.9873Z',
  d18: 'M1.2503 5.99974C1.25031 5.58553 1.58609 5.24976 2.0003 5.24976H5.75V12.9998C5.75 14.2424 6.75736 15.2498 8 15.2498H8.75V15.9998C8.75 16.8784 9.26152 17.6767 10.0598 18.0439C10.8581 18.4111 11.7971 18.2799 12.4643 17.7081L13.6974 16.6511V22.0003C13.6974 22.1992 13.6184 22.39 13.4778 22.5307C13.3371 22.6713 13.1463 22.7503 12.9474 22.7503L1.99997 22.7498C1.58576 22.7498 1.24999 22.414 1.25 21.9998L1.2503 5.99974ZM8.25117 19.2502H6.74219V20.7502H8.25117V19.2502Z',
  d19: 'M22 1.24976L8 1.24976C7.58579 1.24976 7.25 1.58555 7.25 1.99976V12.9998C7.25 13.414 7.58579 13.7498 8 13.7498H10.25V15.9998C10.25 16.2927 10.4205 16.5588 10.6866 16.6811C10.9527 16.8035 11.2657 16.7598 11.4881 16.5692L14.7774 13.7498L22 13.7498C22.1989 13.7498 22.3897 13.6707 22.5303 13.5301C22.671 13.3894 22.75 13.1987 22.75 12.9998V1.99976C22.75 1.80084 22.671 1.61008 22.5303 1.46943C22.3897 1.32877 22.1989 1.24976 22 1.24976ZM17.0338 8.68354C17.4867 8.24655 17.745 7.7417 17.7499 7.17663C17.7558 6.49463 17.3857 5.9413 17.0372 5.56348C16.6774 5.17328 16.244 4.86471 15.9201 4.6606C15.7545 4.55629 15.6094 4.47416 15.5043 4.41748C15.4517 4.38906 14.9991 4.1687 14.9991 4.1687C14.9991 4.1687 14.5467 4.38914 14.494 4.41756C14.389 4.47425 14.2439 4.55638 14.0785 4.6607C13.7547 4.86483 13.3215 5.17344 12.9619 5.5637C12.6137 5.94161 12.2438 6.49501 12.2501 7.17698C12.2554 7.7557 12.5265 8.27127 13 8.71546L12.5192 10.8345L13.982 11.1665L14.433 9.17906H15.6174L16.2672 11.2273L17.697 10.7737L17.0338 8.68354Z',
} as const;

export const IconReminderStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-stroke-rounded IconReminderStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconReminderDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-duotone-rounded IconReminderDuotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconReminderTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-twotone-rounded IconReminderTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconReminderSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-solid-rounded IconReminderSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconReminderBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-bulk-rounded IconReminderBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconReminderStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-stroke-sharp IconReminderStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconReminderSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="reminder-solid-sharp IconReminderSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfReminder: TheIconSelfPack = {
  name: 'Reminder',
  StrokeRounded: IconReminderStrokeRounded,
  DuotoneRounded: IconReminderDuotoneRounded,
  TwotoneRounded: IconReminderTwotoneRounded,
  SolidRounded: IconReminderSolidRounded,
  BulkRounded: IconReminderBulkRounded,
  StrokeSharp: IconReminderStrokeSharp,
  SolidSharp: IconReminderSolidSharp,
};
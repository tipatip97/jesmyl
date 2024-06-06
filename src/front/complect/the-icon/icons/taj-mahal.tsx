import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 22V11M8 11V22',
  d2: 'M8.28121 11C4.4246 7 10.3473 5 12 3C13.6528 5 19.5754 7 15.7188 11H8.28121Z',
  d3: 'M20.4945 12C23.1153 9.27273 19.8882 8.03306 18.9863 7C18.6041 7.4379 17 8 17 8.5M19 7V6',
  d4: 'M12 3V2',
  d5: 'M3.50553 12C0.884678 9.27273 4.11179 8.03306 5.01367 7C5.39592 7.4379 7 8 7 8.5M5 7V6',
  d6: 'M8 11L4.32647 12.347C3.77285 12.55 3.21234 12.65 2.61972 12.65C2.23545 12.65 2 12.8576 2 13.2697V22H22V13.2697C22 12.8576 21.7646 12.65 21.3803 12.65C20.7877 12.65 20.2272 12.55 19.6735 12.347L16 11',
  d7: 'M19 18L19 17',
  d8: 'M12 22L12 19',
  d9: 'M5 18L5 17',
  d10: 'M12 16L12 15',
  d11: 'M3.50553 12C0.884678 9.27273 4.11179 8.03306 5.01367 7C5.39592 7.4379 7 8 7 8.5L8 11L3.50553 12Z',
  d12: 'M20.4945 12C23.1153 9.27273 19.8882 8.03306 18.9863 7C18.6041 7.4379 17 8 17 8.5L16 11L20.4945 12Z',
  d13: 'M22 22V13.2697C22 12.8576 21.7646 12.65 21.3803 12.65C20.7877 12.65 20.2272 12.55 19.6735 12.347L16 11V22H22Z',
  d14: 'M2 13.2697V22H8V11L4.32647 12.347C3.77285 12.55 3.21234 12.65 2.61972 12.65C2.23545 12.65 2 12.8576 2 13.2697Z',
  d15: 'M12.75 20C12.75 19.5858 12.4142 19.25 12 19.25C11.5858 19.25 11.25 19.5858 11.25 20V22.35C11.25 22.5386 11.25 22.6328 11.1914 22.6914C11.1328 22.75 11.0386 22.75 10.85 22.75H9.15C8.96144 22.75 8.86716 22.75 8.80858 22.6914C8.75 22.6328 8.75 22.5386 8.75 22.35V12.15C8.75 11.9614 8.75 11.8672 8.80858 11.8086C8.86716 11.75 8.96144 11.75 9.15 11.75H14.85C15.0386 11.75 15.1328 11.75 15.1914 11.8086C15.25 11.8672 15.25 11.9614 15.25 12.15V22.35C15.25 22.5386 15.25 22.6328 15.1914 22.6914C15.1328 22.75 15.0386 22.75 14.85 22.75H13.15C12.9614 22.75 12.8672 22.75 12.8086 22.6914C12.75 22.6328 12.75 22.5386 12.75 22.35V20ZM12.75 16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16Z',
  d16: 'M7.25 22.35C7.25 22.5386 7.25 22.6328 7.19142 22.6914C7.13284 22.75 7.03856 22.75 6.85 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V13.8C1.25 13.6114 1.25 13.5172 1.30858 13.4586C1.36716 13.4 1.46144 13.4 1.65 13.4H2.61969C3.30062 13.4 3.94852 13.2844 4.58463 13.0511L6.7123 12.271C6.95679 12.1813 7.07904 12.1365 7.16452 12.1962C7.25 12.2559 7.25 12.3861 7.25 12.6465V22.35ZM4.75 17C4.75 16.5858 4.41421 16.25 4 16.25C3.58579 16.25 3.25 16.5858 3.25 17V18C3.25 18.4142 3.58579 18.75 4 18.75C4.41421 18.75 4.75 18.4142 4.75 18V17Z',
  d17: 'M16.8086 22.6912C16.8672 22.7498 16.9614 22.7498 17.15 22.7498H22C22.4142 22.7498 22.75 22.414 22.75 21.9998V13.7999C22.75 13.6113 22.75 13.517 22.6914 13.4585C22.6328 13.3999 22.5386 13.3999 22.35 13.3999H21.3802C20.6993 13.3999 20.0514 13.2843 19.4153 13.051L17.2877 12.2709C17.0432 12.1812 16.921 12.1364 16.8355 12.1961C16.75 12.2558 16.75 12.386 16.75 12.6464V22.3498C16.75 22.5384 16.75 22.6326 16.8086 22.6912ZM20 16.25C20.4142 16.25 20.75 16.5858 20.75 17V18C20.75 18.4142 20.4142 18.75 20 18.75C19.5858 18.75 19.25 18.4142 19.25 18V17C19.25 16.5858 19.5858 16.25 20 16.25Z',
  d18: 'M7.11468 10.5215C7.02983 10.557 6.9326 10.5258 6.88335 10.4481C6.50919 9.85786 6.30135 9.27214 6.2584 8.68836C6.18658 8.64712 5.06689 7.97231 5.06689 7.97231C4.93012 8.08462 4.62321 8.32227 4.49142 8.42408C4.10385 8.72753 3.76768 9.01291 3.5361 9.31806C3.31537 9.60892 3.22771 9.86724 3.255 10.1383C3.31032 10.688 3.45428 10.9328 3.91573 11.3892C4.02131 11.4936 3.98429 11.6725 3.84151 11.7134C3.41767 11.8347 2.98337 11.8917 2.54076 11.8991C2.47705 11.9002 2.41686 11.8697 2.38025 11.8176C2.02176 11.3067 1.81392 10.7991 1.76254 10.2886C1.68598 9.52791 1.97005 8.90038 2.34122 8.41128C2.70155 7.93647 3.17746 7.54778 3.56672 7.24301C3.63997 7.18566 4.25009 6.70009 4.25009 6.70009V6C4.25009 5.58579 4.58588 5.25 5.00009 5.25C5.4143 5.25 5.75009 5.58579 5.75009 6V6.63085C5.86791 6.70132 6.433 7.0263 6.55954 7.09694C6.79863 6.58039 7.15239 6.12598 7.53471 5.72944C8.17272 5.0677 8.97664 4.48075 9.6764 3.96986C10.237 3.56041 10.7408 3.18712 11.1022 2.85339C11.1989 2.76413 11.25 2.63712 11.25 2.50556V2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.50554C12.75 2.63711 12.8011 2.76413 12.8978 2.85338C13.2592 3.1871 13.763 3.56035 14.3236 3.96979C15.0234 4.4807 15.8273 5.06766 16.4654 5.72944C16.8477 6.12598 17.2015 6.58039 17.4406 7.09694C17.7103 6.94153 17.988 6.79917 18.25 6.63085V6C18.25 5.58579 18.5858 5.25 19 5.25C19.4142 5.25 19.75 5.58579 19.75 6V6.70009C19.9156 6.84401 20.1403 7.0136 20.4334 7.24301C20.8226 7.54778 21.2985 7.93647 21.6589 8.41128C22.03 8.90038 22.3141 9.52791 22.2376 10.2886C22.1862 10.7991 21.9783 11.3067 21.6198 11.8176C21.5832 11.8697 21.523 11.9002 21.4593 11.8992C21.015 11.8918 20.5829 11.8354 20.1585 11.7136C20.0157 11.6726 19.9787 11.4937 20.0843 11.3893C20.5457 10.9328 20.6898 10.6881 20.7451 10.1383C20.7724 9.86724 20.6847 9.60892 20.464 9.31806C20.2324 9.01291 19.8962 8.72753 19.5087 8.42408C19.3341 8.28741 19.1294 8.13346 18.9332 7.97231C18.7796 8.06465 18.6226 8.1525 18.4662 8.24006C18.1136 8.43746 17.8782 8.57656 17.7417 8.68837C17.6987 9.27216 17.4909 9.85789 17.1167 10.4481C17.0674 10.5258 16.9702 10.557 16.8854 10.5215C16.6038 10.4037 16.2958 10.25 16 10.25H7.99997C7.70421 10.25 7.39623 10.4037 7.11468 10.5215Z',
  d19: 'M17.5566 12.3678C17.1898 12.2333 17.0064 12.166 16.8782 12.2556C16.75 12.3452 16.75 12.5405 16.75 12.9311V22.1481C16.75 22.4309 16.75 22.5723 16.8379 22.6602C16.9257 22.7481 17.0672 22.7481 17.35 22.7481H22C22.4142 22.7481 22.75 22.4123 22.75 21.9981V13.9982C22.75 13.7153 22.75 13.5739 22.6621 13.486C22.5743 13.3982 22.4328 13.3982 22.15 13.3982H21.3802C20.6993 13.3982 20.0514 13.2825 19.4153 13.0493L17.5566 12.3678Z',
  d20: 'M2 22.7482H6.65C6.93284 22.7482 7.07426 22.7482 7.16213 22.6603C7.25 22.5725 7.25 22.431 7.25 22.1482V12.9311C7.25 12.5405 7.25 12.3452 7.12178 12.2556C6.99356 12.166 6.81019 12.2333 6.44345 12.3678L4.58463 13.0493C3.94852 13.2826 3.30062 13.3982 2.61969 13.3982H1.85C1.56716 13.3982 1.42574 13.3982 1.33787 13.4861C1.25 13.5739 1.25 13.7154 1.25 13.9982V21.9982C1.25 22.4124 1.58579 22.7482 2 22.7482Z',
  d21: 'M12.75 20C12.75 19.5858 12.4142 19.25 12 19.25C11.5858 19.25 11.25 19.5858 11.25 20V22.15C11.25 22.4328 11.25 22.5743 11.1621 22.6621C11.0743 22.75 10.9328 22.75 10.65 22.75H9.35C9.06716 22.75 8.92574 22.75 8.83787 22.6621C8.75 22.5743 8.75 22.4328 8.75 22.15V12.35C8.75 12.0672 8.75 11.9257 8.83787 11.8379C8.92574 11.75 9.06716 11.75 9.35 11.75H14.65C14.9328 11.75 15.0743 11.75 15.1621 11.8379C15.25 11.9257 15.25 12.0672 15.25 12.35V22.15C15.25 22.4328 15.25 22.5743 15.1621 22.6621C15.0743 22.75 14.9328 22.75 14.65 22.75H13.35C13.0672 22.75 12.9257 22.75 12.8379 22.6621C12.75 22.5743 12.75 22.4328 12.75 22.15V20ZM12.75 16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16Z',
  d22: 'M20 16.25C20.4142 16.25 20.75 16.5858 20.75 17L20.75 18C20.75 18.4142 20.4142 18.75 20 18.75C19.5858 18.75 19.25 18.4142 19.25 18L19.25 17C19.25 16.5858 19.5858 16.25 20 16.25Z',
  d23: 'M4 16.25C4.41421 16.25 4.75 16.5858 4.75 17L4.75 18C4.75 18.4142 4.41421 18.75 4 18.75C3.58579 18.75 3.25 18.4142 3.25 18L3.25 17C3.25 16.5858 3.58579 16.25 4 16.25Z',
  d24: 'M6.2584 8.68836C6.18658 8.64712 5.06689 7.97231 5.06689 7.97231C4.93012 8.08462 4.62321 8.32227 4.49142 8.42408C4.10385 8.72753 3.76768 9.01291 3.5361 9.31806C3.31537 9.60892 3.22771 9.86723 3.255 10.1383C3.28401 10.4266 3.4567 10.8667 4.0464 11.4803C4.08609 11.5216 4.12011 11.5663 4.14848 11.6134C3.67735 11.7861 3.12399 11.9 2.61969 11.9H2.43938C2.04456 11.3613 1.81668 10.8265 1.76254 10.2886C1.68598 9.52791 1.97005 8.90038 2.34122 8.41128C2.70155 7.93647 3.17746 7.54778 3.56672 7.24301C3.63997 7.18566 4.25009 6.70009 4.25009 6.70009V6C4.25009 5.58579 4.58588 5.25 5.00009 5.25C5.4143 5.25 5.75009 5.58579 5.75009 6V6.63085C5.86791 6.70132 6.433 7.0263 6.55954 7.09694C6.38796 7.46764 6.27544 7.87033 6.25381 8.30661C6.2475 8.43378 6.24903 8.56103 6.2584 8.68836Z',
  d25: 'M17.4406 7.09694L17.4763 7.07635C17.5832 7.01497 17.6794 6.96125 17.7699 6.91071C17.8965 6.84005 18.0119 6.77561 18.1297 6.70513C18.1743 6.6785 18.2143 6.65379 18.25 6.63085V6C18.25 5.58579 18.5858 5.25 19 5.25C19.4142 5.25 19.75 5.58579 19.75 6V6.70009C19.8742 6.80801 20.0315 6.9303 20.226 7.08147C20.2909 7.13188 20.3601 7.18564 20.4334 7.24301C20.8226 7.54778 21.2985 7.93647 21.6589 8.41128C22.03 8.90038 22.3141 9.52791 22.2376 10.2886C22.1834 10.8265 21.9555 11.3613 21.5607 11.9H21.3802C20.8759 11.9 20.4028 11.8156 19.9317 11.6428L19.8516 11.6134C19.88 11.5663 19.914 11.5216 19.9537 11.4803C20.5434 10.8667 20.7161 10.4266 20.7451 10.1383C20.7724 9.86723 20.6847 9.60892 20.464 9.31806C20.2324 9.01291 19.8962 8.72753 19.5087 8.42408C19.4556 8.38256 19.3996 8.33928 19.3422 8.2949C19.2105 8.19318 19.0698 8.0845 18.9332 7.97231L18.8997 7.99247C18.7704 8.06976 18.6131 8.15785 18.4662 8.24006C18.3788 8.28898 18.2952 8.33582 18.2234 8.37708C18.0053 8.50229 17.8444 8.60427 17.7417 8.68837C17.7511 8.56104 17.7526 8.43379 17.7463 8.30662C17.7246 7.87034 17.6121 7.46764 17.4406 7.09694Z',
  d26: 'M7.74178 10.2958C7.82448 10.2655 7.91188 10.25 7.99997 10.25H16C16.0881 10.25 16.1755 10.2655 16.2582 10.2958L17.0309 10.5792C17.4592 9.94457 17.6955 9.31535 17.7417 8.68837C17.751 8.56104 17.7526 8.43379 17.7463 8.30662C17.7246 7.87034 17.6121 7.46764 17.4406 7.09694C17.2015 6.58039 16.8477 6.12598 16.4654 5.72944C15.8273 5.06766 15.0234 4.4807 14.3236 3.96979C13.6818 3.50105 13.1144 3.07975 12.75 2.71089V2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V2.71089C10.8856 3.07976 10.3182 3.50111 9.67639 3.96986C8.97665 4.48075 8.17272 5.06771 7.53471 5.72944C7.15239 6.12598 6.79863 6.58039 6.55954 7.09694C6.38796 7.46764 6.27544 7.87033 6.25381 8.30661C6.2475 8.43378 6.24903 8.56103 6.2584 8.68836C6.30453 9.31533 6.54085 9.94454 6.96913 10.5791L7.74178 10.2958Z',
  d27: 'M16.0254 22.5V11.5M8.04468 11.5V22.5',
  d28: 'M20.5147 13C23.1293 10.2727 19.9044 8.53306 19.0047 7.5C18.7471 7.7958 17.5242 8.14828 17.0232 8.5M19.0184 7.5V5.5',
  d29: 'M12.0593 3.5C10.4106 5.5 4.47788 7.5 8.32517 11.5H15.7448C19.5921 7.5 13.7081 5.5 12.0593 3.5ZM12.0593 3.5L12.0593 1.5',
  d30: 'M3.55493 13C0.940405 10.2727 4.16582 8.53306 5.06552 7.5C5.32311 7.7958 6.54696 8.14828 7.04797 8.5M5.05189 7.5V5.5',
  d31: 'M19.0593 18.5V16.5',
  d32: 'M12.0593 22.5V18.5',
  d33: 'M5.05933 18.5V16.5',
  d34: 'M12.0593 16.5V14.5',
  d35: 'M8.13277 11.438C6.1738 12.3528 3.70382 13.3346 2.00857 13.1832C2.00266 13.1827 1.99772 13.1874 1.9978 13.1934L2.13162 22.4856H22.0022V13.1083C22.0022 13.1024 21.9972 13.0978 21.9914 13.0983C19.8293 13.2857 17.3915 11.9357 15.8509 11.3564',
  d36: 'M12.75 16L12.75 14H11.25L11.25 16H12.75ZM4.75 18L4.75 16H3.25L3.25 18H4.75ZM20.75 18V16L19.25 16V18L20.75 18ZM12.7496 22.75V19H11.2496V22.75H8.75L8.75 11.75H15.25L15.25 22.75H12.7496ZM7.25 22.75H1.25L1.25 13.4H2.0003C2.32968 13.4 2.80183 13.3728 3.2638 13.3197C3.70965 13.2684 4.21887 13.1854 4.58496 13.0511L7.25 12.0739L7.25 22.75ZM16.75 12.0737V22.75H22.75V13.4H22.0003C21.6709 13.4 21.1988 13.3728 20.7368 13.3197C20.2909 13.2684 19.7817 13.1854 19.4156 13.0511L16.75 12.0737Z',
  d37: 'M8.00036 10.25C7.91227 10.25 7.82487 10.2655 7.74217 10.2958L6.83912 10.627C6.41412 9.93214 6.21981 9.24341 6.25387 8.55661C6.30564 7.51241 6.87809 6.66055 7.53478 5.97944C8.17279 5.31769 8.9767 4.73076 9.67646 4.21986L9.7371 4.17558C10.3767 3.70845 10.8988 3.32024 11.2501 2.96195V1.25H12.7501V2.96194C13.1014 3.32024 13.6235 3.70845 14.2631 4.17558L14.3236 4.21979C15.0234 4.73069 15.8274 5.31768 16.4654 5.97944C17.1221 6.66055 17.6946 7.51241 17.7463 8.55662C17.7804 9.24336 17.5861 9.93204 17.1612 10.6268L16.2585 10.2958C16.1758 10.2655 16.0884 10.25 16.0004 10.25H8.00036Z',
  d38: 'M2.14852 11.898C2.40585 11.8914 2.74909 11.869 3.09263 11.8295C3.37953 11.7965 3.63401 11.7552 3.8274 11.7109C3.42872 11.2322 3.29156 10.8477 3.26466 10.5535C3.23332 10.2108 3.34091 9.87383 3.5768 9.51484C3.81822 9.14744 4.16483 8.80155 4.54413 8.46C4.63005 8.38264 4.72286 8.3013 4.81782 8.21809C4.92201 8.12679 5.02882 8.03319 5.13204 7.93999C5.29418 8.01728 5.47221 8.09288 5.63809 8.16254L5.6619 8.17254C6.09481 8.35433 6.41879 8.49037 6.58345 8.60546L7.44355 7.37982C7.13957 7.16737 6.67279 6.97256 6.32123 6.82584L6.21962 6.78335C6.04118 6.70842 5.88792 6.64272 5.76314 6.58256V5H4.2638V6.7051C4.16557 6.79722 4.04958 6.89887 3.91407 7.01764C3.8028 7.11516 3.67831 7.22426 3.53972 7.34906C3.14138 7.70775 2.67475 8.15897 2.323 8.69431C1.96571 9.23805 1.7002 9.9095 1.77152 10.6895C1.80857 11.0947 1.93361 11.4974 2.14852 11.898Z',
  d39: 'M20.9082 11.8295C20.6291 11.7974 20.3806 11.7574 20.1893 11.7145C20.5903 11.2341 20.7281 10.8484 20.7551 10.5534C20.7865 10.2107 20.6789 9.87374 20.4431 9.51477C20.2018 9.14738 19.8552 8.80151 19.476 8.45997C19.39 8.38258 19.2972 8.30124 19.2022 8.21799C19.0982 8.12681 18.9913 8.03311 18.8883 7.94006C18.7263 8.01731 18.5484 8.09286 18.3827 8.16248L18.3585 8.17266C17.9261 8.35435 17.6024 8.49036 17.4377 8.60546L16.5776 7.37982C16.8815 7.16743 17.3479 6.97266 17.6993 6.82594L17.8009 6.78341C17.9793 6.70848 18.1324 6.6428 18.2571 6.58265V5H19.7564V6.70511C19.8546 6.7972 19.9706 6.89882 20.106 7.01754C20.2173 7.1151 20.3418 7.22422 20.4805 7.34909C20.8788 7.70779 21.3453 8.15903 21.697 8.69438C22.0542 9.23814 22.3196 9.90959 22.2482 10.6896C22.2111 11.0949 22.086 11.4977 21.8709 11.8984C21.6117 11.8925 21.2601 11.87 20.9082 11.8295Z',
};

export const IconTajMahalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-stroke-rounded IconTajMahalStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTajMahalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-duotone-rounded IconTajMahalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTajMahalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-twotone-rounded IconTajMahalTwotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTajMahalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-solid-rounded IconTajMahalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTajMahalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-bulk-rounded IconTajMahalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTajMahalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-stroke-sharp IconTajMahalStrokeSharp"
    >
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d33} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d34} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d35} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTajMahalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="taj-mahal-solid-sharp IconTajMahalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d38} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d39} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTajMahal: TheIconSelfPack = {
  name: 'TajMahal',
  StrokeRounded: IconTajMahalStrokeRounded,
  DuotoneRounded: IconTajMahalDuotoneRounded,
  TwotoneRounded: IconTajMahalTwotoneRounded,
  SolidRounded: IconTajMahalSolidRounded,
  BulkRounded: IconTajMahalBulkRounded,
  StrokeSharp: IconTajMahalStrokeSharp,
  SolidSharp: IconTajMahalSolidSharp,
};
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5 6C18.4191 4.58055 18.197 3.67665 17.5877 3.02513C16.629 2 15.086 2 12 2C8.91399 2 7.37099 2 6.41229 3.02513C5.80299 3.67665 5.58093 4.58055 5.5 6M18.5 18C18.4191 19.4194 18.197 20.3233 17.5877 20.9749C16.629 22 15.086 22 12 22C8.91399 22 7.37099 22 6.41229 20.9749C5.80298 20.3233 5.58093 19.4194 5.5 18',
  d2: 'M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2',
  d3: 'M11 19H13',
  d4: 'M4 8.5C4 8.5 5 8.846 5 9.8125C5 10.779 4 11.0335 4 12C4 12.9665 5 13.221 5 14.1875C5 15.154 4 15.5 4 15.5',
  d5: 'M20 8.5C20 8.5 19 8.846 19 9.8125C19 10.779 20 11.0335 20 12C20 12.9665 19 13.221 19 14.1875C19 15.154 20 15.5 20 15.5',
  d6: 'M6.4519 3.02505C5.5 4.05018 5.5 5.7001 5.5 8.99993V14.9999C5.5 18.2998 5.5 19.9497 6.4519 20.9748C7.40381 21.9999 8.93587 21.9999 12 21.9999C15.0641 21.9999 16.5962 21.9999 17.5481 20.9748C18.5 19.9497 18.5 18.2998 18.5 14.9999V8.99993C18.5 5.7001 18.5 4.05018 17.5481 3.02505C16.9748 2.40771 16.1912 2.16214 14.9892 2.06445L14.911 2.53394C14.7181 3.69122 14.6217 4.26986 14.2248 4.62197C13.8108 4.98927 13.2239 4.99993 12 4.99993C10.7761 4.99993 10.1892 4.98927 9.77519 4.62197C9.37832 4.26986 9.28188 3.69122 9.089 2.53394L9.01075 2.06445C7.8088 2.16214 7.02515 2.40771 6.4519 3.02505Z',
  d7: 'M20.945 8.17329C21.1239 8.69027 20.8541 9.25392 20.3418 9.44006L20.3404 9.44064C20.2947 9.4638 20.1921 9.51922 20.1383 9.56385C20.0337 9.65063 20 9.72109 20 9.81277C20 9.89874 20.0386 9.98573 20.3032 10.3088C20.5477 10.6057 21 11.1551 21 12.0003C21 12.8455 20.5477 13.3948 20.3032 13.6917C20.0386 14.0148 20 14.1018 20 14.1878C20 14.2795 20.0337 14.3499 20.1383 14.4367C20.1829 14.4686 20.2857 14.5378 20.3404 14.5599L20.3418 14.5605C20.8541 14.7466 21.1239 15.3103 20.945 15.8273C20.7644 16.3492 20.1949 16.6259 19.673 16.4453C19.2734 16.2698 19.0579 16.1389 18.8617 15.9762C18.4663 15.6484 18 15.0626 18 14.1878C18 13.3426 18.4819 12.7573 18.7264 12.4604C18.991 12.1373 19 12.0862 19 12.0003C19 11.9143 18.991 11.8632 18.7264 11.5401C18.4819 11.2432 18 10.658 18 9.81277C18 8.93796 18.4663 8.35216 18.8617 8.02432C19.0579 7.86164 19.2497 7.74946 19.3915 7.67755L19.673 7.55524C20.1949 7.37465 20.7644 7.65136 20.945 8.17329Z',
  d8: 'M3.05497 8.17329C2.87609 8.69027 3.14588 9.25392 3.65823 9.44006L3.65964 9.44064C3.70532 9.4638 3.80785 9.51922 3.86167 9.56385C3.96632 9.65063 4 9.72109 4 9.81277C4 9.89874 3.96144 9.98573 3.69682 10.3088C3.45235 10.6057 3 11.1551 3 12.0003C3 12.8455 3.45235 13.3948 3.69682 13.6917C3.96144 14.0148 4 14.1018 4 14.1878C4 14.2795 3.96632 14.3499 3.86167 14.4367C3.81711 14.4686 3.71431 14.5378 3.65964 14.5599L3.65824 14.5605C3.14589 14.7466 2.87609 15.3103 3.05497 15.8273C3.23556 16.3492 3.80506 16.6259 4.32698 16.4453C4.72656 16.2698 4.94215 16.1389 5.13833 15.9762C5.53367 15.6484 6 15.0626 6 14.1878C6 13.3426 5.51812 12.7573 5.27365 12.4604C5.00902 12.1373 5 12.0862 5 12.0003C5 11.9143 5.00902 11.8632 5.27365 11.5401C5.51812 11.2432 6 10.658 6 9.81277C6 8.93796 5.53367 8.35216 5.13833 8.02432C4.94215 7.86164 4.75033 7.74946 4.60851 7.67755L4.32698 7.55524C3.80506 7.37465 3.23556 7.65136 3.05497 8.17329Z',
  d9: 'M14.0436 1.26259C14.1238 1.26427 14.1839 1.33623 14.1718 1.41553C14.0728 2.0097 14.008 2.38968 13.9262 2.66868C13.8496 2.92953 13.7816 3.01384 13.7285 3.06094C13.6701 3.11277 13.5791 3.16922 13.3148 3.20574C13.0255 3.24574 12.6305 3.24992 12.0014 3.24992C11.3724 3.24992 10.9773 3.24574 10.688 3.20574C10.4237 3.16922 10.3328 3.11277 10.2744 3.06094C10.2213 3.01384 10.1532 2.92953 10.0767 2.66868C9.99491 2.39014 9.93027 2.01096 9.83152 1.41849C9.81976 1.33739 9.88144 1.26422 9.96337 1.2625C10.5606 1.24999 11.2199 1.24999 11.9455 1.25H11.9455H11.9456H12.0574H12.0574H12.0575C12.7846 1.24999 13.4453 1.24999 14.0436 1.26259ZM8.06101 1.38481C8.19776 1.36642 8.3222 1.46323 8.34199 1.59979L8.34804 1.64149L8.35049 1.65722L8.35751 1.69937C8.44791 2.24195 8.52654 2.71391 8.63723 3.09107C8.75634 3.4969 8.93494 3.87796 9.27872 4.18296C9.63429 4.49844 10.0438 4.63097 10.4825 4.6916C10.8961 4.74876 11.4065 4.7499 12.0013 4.7499C12.5961 4.7499 13.1065 4.74876 13.5201 4.6916C13.9587 4.63097 14.3683 4.49844 14.7238 4.18296C15.0676 3.87796 15.2462 3.4969 15.3653 3.09107C15.476 2.71391 15.5546 2.24195 15.645 1.69937L15.6521 1.65723L15.6613 1.59764C15.682 1.46211 15.8059 1.36654 15.9418 1.38481C16.978 1.52413 17.8315 1.81964 18.5066 2.49478C19.1817 3.16992 19.4772 4.02333 19.6166 5.05959C19.6353 5.19882 19.6514 5.34337 19.6653 5.49336C19.687 5.7283 19.6979 5.84577 19.6433 5.93207C19.5887 6.01838 19.4589 6.06587 19.1994 6.16084L19.1993 6.16085C18.6546 6.36014 18.137 6.67739 17.9056 6.86933C17.2959 7.37493 16.5014 8.34674 16.5014 9.81243C16.5014 10.5692 16.7325 11.193 16.9863 11.6566C17.0835 11.8343 17.1322 11.9232 17.1322 11.9999C17.1322 12.0767 17.0835 12.1655 16.9863 12.3432C16.7325 12.8069 16.5014 13.4307 16.5014 14.1874C16.5014 15.6531 17.2959 16.6249 17.9056 17.1305C18.1651 17.3458 18.6821 17.6406 19.2184 17.8367L19.2184 17.8367L19.2184 17.8368C19.4655 17.9271 19.5891 17.9723 19.6437 18.0585C19.6983 18.1446 19.6878 18.2593 19.6669 18.4887C19.6527 18.6451 19.636 18.7956 19.6166 18.9404C19.4772 19.9766 19.1817 20.83 18.5066 21.5052C17.8315 22.1803 16.978 22.4758 15.9418 22.6151C14.9387 22.75 13.6597 22.75 12.0571 22.75H11.9457C10.3431 22.75 9.06409 22.75 8.06101 22.6151C7.02474 22.4758 6.17133 22.1803 5.49619 21.5052C4.82105 20.83 4.52554 19.9766 4.38622 18.9404C4.36621 18.7915 4.34916 18.6366 4.33465 18.4754C4.31438 18.2503 4.30424 18.1377 4.35825 18.0519C4.41227 17.9661 4.53125 17.9217 4.7692 17.8329L4.76921 17.8329C5.29984 17.6349 5.83796 17.3459 6.0977 17.1305C6.7074 16.6249 7.50188 15.6531 7.50188 14.1874C7.50188 13.4307 7.27081 12.8069 7.01701 12.3432C6.91972 12.1655 6.87108 12.0767 6.87108 11.9999C6.87108 11.9232 6.91972 11.8343 7.01701 11.6566C7.27081 11.193 7.50188 10.5692 7.50188 9.81243C7.50188 8.34674 6.7074 7.37493 6.0977 6.86933C5.86855 6.6793 5.35897 6.35451 4.82004 6.15809L4.82003 6.15809L4.82002 6.15809C4.54974 6.05958 4.41459 6.01033 4.3599 5.92385C4.30521 5.83736 4.31646 5.71753 4.33894 5.47786C4.3525 5.33341 4.36815 5.19402 4.38622 5.05959C4.52554 4.02333 4.82105 3.16992 5.49619 2.49478C6.17133 1.81964 7.02474 1.52413 8.06101 1.38481ZM11 19.25C10.5858 19.25 10.25 19.5858 10.25 20C10.25 20.4142 10.5858 20.75 11 20.75H13C13.4142 20.75 13.75 20.4142 13.75 20C13.75 19.5858 13.4142 19.25 13 19.25H11Z',
  d10: 'M8.06101 1.38505C8.19776 1.36667 8.3222 1.46348 8.34199 1.60003L8.34804 1.64173L8.35049 1.65746L8.35751 1.69961C8.44791 2.24219 8.52654 2.71416 8.63723 3.09132C8.75634 3.49714 8.93494 3.8782 9.27872 4.18321C9.63429 4.49868 10.0438 4.63121 10.4825 4.69184C10.8961 4.749 11.4065 4.75015 12.0013 4.75015C12.5961 4.75015 13.1065 4.749 13.5201 4.69184C13.9587 4.63121 14.3683 4.49868 14.7238 4.18321C15.0676 3.8782 15.2462 3.49714 15.3653 3.09132C15.476 2.71416 15.5546 2.24219 15.645 1.69961L15.6521 1.65747L15.6613 1.59788C15.682 1.46236 15.8059 1.36678 15.9418 1.38505C16.978 1.52438 17.8315 1.81988 18.5066 2.49502C19.1817 3.17016 19.4772 4.02357 19.6166 5.05984C19.6353 5.19907 19.6514 5.34361 19.6653 5.4936C19.687 5.72854 19.6979 5.84601 19.6433 5.93232C19.5887 6.01863 19.4589 6.06611 19.1993 6.16109C18.6546 6.36038 18.137 6.67763 17.9056 6.86957C17.2959 7.37517 16.5014 8.34699 16.5014 9.81267C16.5014 10.5694 16.7325 11.1932 16.9863 11.6569C17.0835 11.8346 17.1322 11.9234 17.1322 12.0002C17.1322 12.0769 17.0835 12.1658 16.9863 12.3435C16.7325 12.8071 16.5014 13.4309 16.5014 14.1877C16.5014 15.6534 17.2959 16.6252 17.9056 17.1308C18.1651 17.346 18.6821 17.6409 19.2184 17.837L19.2184 17.837C19.4655 17.9273 19.5891 17.9725 19.6437 18.0587C19.6983 18.1449 19.6878 18.2596 19.6669 18.489C19.6527 18.6454 19.636 18.7959 19.6166 18.9406C19.4772 19.9769 19.1817 20.8303 18.5066 21.5054C17.8315 22.1806 16.978 22.4761 15.9418 22.6154C14.9387 22.7503 13.6597 22.7502 12.0571 22.7502H11.9457C10.3431 22.7502 9.06409 22.7503 8.06101 22.6154C7.02474 22.4761 6.17133 22.1806 5.49619 21.5054C4.82105 20.8303 4.52554 19.9769 4.38622 18.9406C4.36621 18.7917 4.34916 18.6368 4.33465 18.4756C4.31438 18.2505 4.30424 18.1379 4.35825 18.0521C4.41227 17.9664 4.53125 17.922 4.7692 17.8332L4.76921 17.8332C5.29984 17.6352 5.83796 17.3462 6.0977 17.1308C6.7074 16.6252 7.50188 15.6534 7.50188 14.1877C7.50188 13.4309 7.27081 12.8071 7.01701 12.3435C6.91972 12.1658 6.87108 12.0769 6.87108 12.0002C6.87108 11.9234 6.91972 11.8346 7.01701 11.6569C7.27081 11.1932 7.50188 10.5694 7.50188 9.81267C7.50188 8.34699 6.7074 7.37517 6.0977 6.86957C5.86855 6.67955 5.35897 6.35475 4.82004 6.15834L4.82003 6.15834C4.54974 6.05983 4.41459 6.01057 4.3599 5.92409C4.30521 5.8376 4.31646 5.71777 4.33894 5.47811C4.3525 5.33365 4.36815 5.19427 4.38622 5.05984C4.52554 4.02357 4.82105 3.17016 5.49619 2.49502C6.17133 1.81988 7.02474 1.52438 8.06101 1.38505Z',
  d11: 'M14.0416 1.26259C14.1218 1.26427 14.182 1.33623 14.1698 1.41553C14.0708 2.0097 14.0061 2.38968 13.9242 2.66868C13.8477 2.92953 13.7796 3.01384 13.7265 3.06094C13.6681 3.11277 13.5772 3.16922 13.3129 3.20574C13.0235 3.24574 12.6285 3.24992 11.9995 3.24992C11.3704 3.24992 10.9754 3.24574 10.686 3.20574C10.4218 3.16922 10.3308 3.11277 10.2724 3.06094C10.2193 3.01384 10.1513 2.92953 10.0747 2.66868C9.99296 2.39014 9.92832 2.01096 9.82956 1.41849C9.81781 1.33739 9.87948 1.26422 9.96141 1.2625C10.5587 1.24999 11.2181 1.24999 11.9436 1.25H12.0554C12.7826 1.24999 13.4433 1.24999 14.0416 1.26259Z',
  d12: 'M10.25 20C10.25 19.5858 10.5858 19.25 11 19.25H13C13.4142 19.25 13.75 19.5858 13.75 20C13.75 20.4142 13.4142 20.75 13 20.75H11C10.5858 20.75 10.25 20.4142 10.25 20Z',
  d13: 'M19 6V2H5V6M19 18V22H5V18',
  d14: 'M9 2L10 5H14L15 2',
  d15: 'M10.5 19H13.5',
  d16: 'M8.43276 1.25H5C4.58579 1.25 4.25 1.58579 4.25 2V6.40867C4.38069 6.48767 4.52608 6.58463 4.63642 6.65981C4.81477 6.78132 5.03854 6.93998 5.18538 7.06175C5.75936 7.53772 6.49914 8.4452 6.49914 9.81241C6.49914 10.832 6.06834 11.5715 5.75316 11.9999C6.06834 12.4283 6.49914 13.1678 6.49914 14.1874C6.49914 15.5546 5.75936 16.4621 5.18538 16.9381C5.00619 17.0867 4.74862 17.2474 4.57903 17.3499C4.46663 17.4178 4.34955 17.4858 4.25 17.5415V22C4.25 22.4142 4.58579 22.75 5 22.75H19C19.4142 22.75 19.75 22.4142 19.75 22V17.5796C19.6159 17.5034 19.4573 17.4004 19.3346 17.3181C19.1697 17.2075 18.9619 17.0616 18.8129 16.9381C18.2389 16.4621 17.4991 15.5546 17.4991 14.1874C17.4991 13.1678 17.9299 12.4283 18.2451 11.9999C17.9299 11.5715 17.4991 10.832 17.4991 9.81241C17.4991 8.4452 18.2389 7.53772 18.8129 7.06175C18.9271 6.96703 19.1064 6.82487 19.2769 6.69589C19.384 6.61488 19.577 6.46948 19.75 6.36734V2C19.75 1.58579 19.4142 1.25 19 1.25H15.5642L14.5642 4.74999H9.43276L8.43276 1.25ZM14.0042 1.25H9.99279L10.5642 3.24999H13.4328L14.0042 1.25ZM10.5 19.75H13.5V18.25H10.5V19.75Z',
  d17: 'M3.25 8.49993C3.57698 7.5549 3.57779 7.55518 3.57779 7.55518L3.58037 7.55607L3.58416 7.55741L3.59291 7.56054L3.61499 7.56871C3.63167 7.57502 3.65229 7.58311 3.6763 7.59307C3.72415 7.61293 3.78646 7.64067 3.85851 7.6772C4.00033 7.74912 4.19215 7.86129 4.38833 8.02397C4.78367 8.35182 5.25 8.93761 5.25 9.81243C5.25 10.6576 4.79765 11.207 4.55318 11.5039L4.52365 11.5398C4.25902 11.8629 4.25 11.914 4.25 11.9999C4.25 12.0859 4.25902 12.137 4.52365 12.4601L4.55318 12.496C4.79765 12.7929 5.25 13.3422 5.25 14.1874C5.25 15.0622 4.78367 15.648 4.38833 15.9759C4.19215 16.1386 4.00033 16.2507 3.85851 16.3226C3.78646 16.3592 3.72415 16.3869 3.6763 16.4068C3.65229 16.4167 3.63167 16.4248 3.61499 16.4311L3.59291 16.4393L3.58416 16.4424L3.58037 16.4438L3.57863 16.4444C3.57863 16.4444 3.57698 16.445 3.25 15.4999C2.92302 14.5549 2.92223 14.5552 2.92223 14.5552L2.91999 14.5559L2.91729 14.5569L2.91283 14.5585L2.90747 14.5605L2.90638 14.5609C2.90638 14.5609 2.9075 14.5604 2.90964 14.5596C2.91648 14.5567 2.93229 14.5499 2.95399 14.5389C2.99967 14.5157 3.05785 14.481 3.11167 14.4363C3.21632 14.3496 3.25 14.2791 3.25 14.1874C3.25 14.1015 3.24098 14.0504 2.97635 13.7273L2.94682 13.6914C2.70235 13.3945 2.25 12.8451 2.25 11.9999C2.25 11.1547 2.70235 10.6054 2.94682 10.3085L2.97635 10.2726C3.24098 9.94945 3.25 9.8984 3.25 9.81243C3.25 9.72074 3.21632 9.65029 3.11167 9.5635C3.05785 9.51887 2.99967 9.48414 2.95399 9.46098C2.93229 9.44997 2.91648 9.44313 2.90964 9.44029C2.9075 9.43941 2.90638 9.43897 2.90638 9.43897L2.90747 9.43938L2.91283 9.44136L2.91729 9.44295L2.91999 9.4439L2.92147 9.44442C2.92147 9.44442 2.92302 9.44496 3.25 8.49993Z',
  d18: 'M20.75 8.49993C20.423 7.5549 20.4222 7.55518 20.4222 7.55518L20.4196 7.55607L20.4158 7.55741L20.4071 7.56054L20.385 7.56871C20.3683 7.57502 20.3477 7.58311 20.3237 7.59307C20.2759 7.61293 20.2135 7.64067 20.1415 7.6772C19.9997 7.74912 19.8078 7.86129 19.6117 8.02397C19.2163 8.35182 18.75 8.93761 18.75 9.81243C18.75 10.6576 19.2023 11.207 19.4468 11.5039L19.4764 11.5398C19.741 11.8629 19.75 11.914 19.75 11.9999C19.75 12.0859 19.741 12.137 19.4764 12.4601L19.4468 12.496C19.2023 12.7929 18.75 13.3422 18.75 14.1874C18.75 15.0622 19.2163 15.648 19.6117 15.9759C19.8078 16.1386 19.9997 16.2507 20.1415 16.3226C20.2135 16.3592 20.2759 16.3869 20.3237 16.4068C20.3477 16.4167 20.3683 16.4248 20.385 16.4311L20.4071 16.4393L20.4158 16.4424L20.4196 16.4438L20.4214 16.4444C20.4214 16.4444 20.423 16.445 20.75 15.4999C21.077 14.5549 21.0778 14.5552 21.0778 14.5552L21.08 14.5559L21.0827 14.5569L21.0872 14.5585L21.0925 14.5605L21.0904 14.5596C21.0835 14.5567 21.0677 14.5499 21.046 14.5389C21.0003 14.5157 20.9422 14.481 20.8883 14.4363C20.7837 14.3496 20.75 14.2791 20.75 14.1874C20.75 14.1015 20.759 14.0504 21.0236 13.7273L21.0532 13.6914C21.2977 13.3945 21.75 12.8451 21.75 11.9999C21.75 11.1547 21.2977 10.6054 21.0532 10.3085L21.0236 10.2726C20.759 9.94945 20.75 9.8984 20.75 9.81243C20.75 9.72074 20.7837 9.65029 20.8883 9.5635C20.9422 9.51887 21.0003 9.48414 21.046 9.46098C21.0677 9.44997 21.0835 9.44313 21.0904 9.44029C21.0925 9.43941 21.0936 9.43897 21.0936 9.43897L21.0925 9.43938L21.0872 9.44136L21.0827 9.44295L21.08 9.4439L21.0785 9.44442C21.0785 9.44442 21.077 9.44496 20.75 8.49993Z',
} as const;

export const IconSmartPhone02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-stroke-rounded IconSmartPhone02StrokeRounded"
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

export const IconSmartPhone02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-duotone-rounded IconSmartPhone02DuotoneRounded"
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

export const IconSmartPhone02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-twotone-rounded IconSmartPhone02TwotoneRounded"
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

export const IconSmartPhone02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-solid-rounded IconSmartPhone02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhone02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-bulk-rounded IconSmartPhone02BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhone02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-stroke-sharp IconSmartPhone02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhone02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-02-solid-sharp IconSmartPhone02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfSmartPhone02: TheIconSelfPack = {
  name: 'SmartPhone02',
  StrokeRounded: IconSmartPhone02StrokeRounded,
  DuotoneRounded: IconSmartPhone02DuotoneRounded,
  TwotoneRounded: IconSmartPhone02TwotoneRounded,
  SolidRounded: IconSmartPhone02SolidRounded,
  BulkRounded: IconSmartPhone02BulkRounded,
  StrokeSharp: IconSmartPhone02StrokeSharp,
  SolidSharp: IconSmartPhone02SolidSharp,
};
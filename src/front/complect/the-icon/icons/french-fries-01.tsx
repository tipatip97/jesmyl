import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.56556 10.0231C5.28753 7.82233 5.99024 7.74649 6.33776 8.01772C12.2021 11.484 15.35 11.3103 16.6916 11.7044C17.7649 12.0196 17.4775 12.9477 17.1284 13.3089L11.6585 19.7892C10.7522 20.8629 9.5582 22.585 8.38078 21.8182C7.877 21.4901 7.593 20.7867 7.49814 20.2428C6.94469 17.7501 5.84358 12.2239 5.56556 10.0231Z',
  d2: 'M16.0212 11.5698L18.4374 7.69071C18.7091 7.02399 18.1051 5.96333 16.0212 6.59973L13.4844 10.5697M15.7919 6.71573V5.32478C15.7919 4.96567 15.7211 4.59487 15.4965 4.31525C15.1464 3.87925 14.5557 3.61522 13.2588 4.77619M13.0887 10.3209V3.22134C12.7556 2.67317 11.8895 1.68111 11.0901 2.09825C10.2906 2.5154 10.3706 3.22134 10.3706 3.54222V4.80162M10.3706 4.80162V6.9917M10.3706 4.80162C9.95363 4.35051 8.74766 3.54222 8.02678 4.17162C7.41581 4.70506 7.678 6.9917 7.678 8.32499',
  d3: 'M7.46674 18.0297C8.85981 18.0297 9.98912 16.8965 9.98912 15.4986C9.98912 14.1007 8.85981 12.9675 7.46674 12.9675C7.03348 12.9675 6.62573 13.0771 6.26953 13.2702',
  d4: 'M16.6969 13.7088L12.4948 18.8427C10.7034 21.0313 9.80768 22.1256 8.76719 21.9888C7.73827 21.8534 7.49191 20.5153 7.04414 18.0833L7.02893 18.0006H7.49283C8.87703 18.0006 9.99918 16.8819 9.99918 15.5019C9.99918 14.1219 8.87703 13.0032 7.49283 13.0032C7.1398 13.0032 6.80381 13.076 6.49914 13.2073L5.9699 12.3127C5.47896 9.64697 5.2335 8.31409 5.94514 7.97075C6.15453 7.86973 6.68941 8.16996 7.51395 8.63276C9.05011 9.49499 11.5917 10.9215 14.9067 11.3689C16.2245 11.5468 16.8834 11.6357 17.1835 12.0011C17.2586 12.0925 17.3246 12.2146 17.3565 12.3212C17.484 12.7472 17.2216 13.0677 16.6969 13.7088Z',
  d5: 'M7.49486 17.2513C7.08065 17.2513 6.74486 17.5869 6.74486 18.0009C6.74486 18.4149 7.08065 18.7505 7.49486 18.7505V17.2513ZM6.20418 12.5193C5.82383 12.6832 5.64845 13.1243 5.81248 13.5045C5.9765 13.8846 6.4178 14.0599 6.79816 13.896L6.20418 12.5193ZM7.49486 18.7505C9.29149 18.7505 10.7512 17.298 10.7512 15.5022H9.25117C9.25117 16.4664 8.46663 17.2513 7.49486 17.2513V18.7505ZM10.7512 15.5022C10.7512 13.7065 9.29149 12.2539 7.49486 12.2539V13.7531C8.46663 13.7531 9.25117 14.538 9.25117 15.5022H10.7512ZM7.49486 12.2539C7.03784 12.2539 6.60093 12.3483 6.20418 12.5193L6.79816 13.896C7.01075 13.8043 7.24581 13.7531 7.49486 13.7531V12.2539Z',
  d6: 'M5.56751 10.0203C5.28948 7.82067 5.99219 7.74487 6.33971 8.01596C12.2041 11.4804 15.352 11.3068 16.6936 11.7007C17.7669 12.0158 17.4795 12.9434 17.1304 13.3044L11.6605 19.7813C10.7542 20.8545 9.56015 22.5757 8.38273 21.8093C7.87895 21.4813 7.59495 20.7783 7.50009 20.2347C6.94664 17.7433 5.84553 12.2199 5.56751 10.0203Z',
  d7: 'M16.0232 11.5663L18.4394 7.68922C18.7111 7.02284 18.1071 5.96273 16.0232 6.5988L13.4864 10.5667M15.7939 6.71474V5.32452C15.7939 4.96559 15.7231 4.59499 15.4985 4.31551C15.1484 3.87974 14.5577 3.61585 13.2608 4.77621M13.0907 10.318V3.22217C12.7576 2.67429 11.8915 1.68274 11.0921 2.09966C10.2926 2.5166 10.3726 3.22217 10.3726 3.54288V4.80163M10.3726 4.80163V6.99057M10.3726 4.80163C9.95558 4.35075 8.74961 3.54288 8.02873 4.17196C7.41776 4.70512 7.67995 6.99057 7.67995 8.32317',
  d8: 'M7.46869 18.0225C8.86176 18.0225 9.99107 16.8898 9.99107 15.4927C9.99107 14.0955 8.86176 12.9629 7.46869 12.9629C7.03543 12.9629 6.62768 13.0724 6.27148 13.2654',
  d9: 'M5.56556 10.0229C5.28753 7.82209 5.99024 7.74625 6.33776 8.01748C12.2021 11.4837 15.35 11.3101 16.6916 11.7041C17.7649 12.0193 17.4775 12.9475 17.1284 13.3087L11.6585 19.789C10.7522 20.8627 9.5582 22.5847 8.38078 21.8179C7.877 21.4899 7.593 20.7864 7.49814 20.2425C6.94469 17.7499 5.84358 12.2236 5.56556 10.0229Z',
  d10: 'M7.46772 18.0294C8.86079 18.0294 9.9901 16.8962 9.9901 15.4984C9.9901 14.1005 8.86079 12.9673 7.46772 12.9673C7.03445 12.9673 6.6267 13.0769 6.27051 13.27',
  d11: 'M15.0479 10.6234C12.6221 10.2958 10.5776 9.41021 9.08721 8.63006C8.81427 8.48982 7.73841 7.89297 7.2346 7.61208C6.45679 7.12418 5.83289 7.19115 5.61817 7.28562C5.22237 7.47667 4.98511 7.80738 4.86506 8.17933C4.75457 8.52166 4.73802 8.9099 4.75647 9.29745C4.7856 9.90965 4.92986 10.7818 5.10795 11.7665C5.16572 12.0859 5.1946 12.2456 5.29539 12.3164C5.39618 12.3873 5.58306 12.3558 5.9568 12.2929C6.13344 12.2632 6.31491 12.2477 6.5 12.2477C8.29493 12.2477 9.75 13.7028 9.75 15.4977C9.75 17.0485 8.58333 18.3443 7.10836 18.6681C6.74909 18.747 6.56946 18.7864 6.5024 18.889C6.43533 18.9916 6.46611 19.146 6.52766 19.4549C6.66497 20.1439 6.80512 20.7358 6.98381 21.2026C7.12535 21.5723 7.3129 21.9264 7.59196 22.2049C7.8871 22.4995 8.24982 22.6748 8.66842 22.7299C9.52393 22.8425 10.2255 22.4157 10.8556 21.8375C11.4732 21.2707 12.1727 20.4156 13.0347 19.3619L17.3105 14.1354C17.543 13.8513 17.7803 13.5616 17.9304 13.2833C18.1154 12.9403 18.2082 12.547 18.0741 12.0988C18.0119 11.891 17.8964 11.681 17.7623 11.5176C17.4541 11.1422 17.0156 10.9795 16.6048 10.8785C16.1986 10.7787 15.6712 10.7075 15.0479 10.6234Z',
  d12: 'M6.03655 16.8155C6.07255 17.011 6.09055 17.1088 6.17396 17.1783C6.25738 17.2477 6.33826 17.2477 6.5 17.2477C7.4665 17.2477 8.25 16.4642 8.25 15.4977C8.25 14.5312 7.4665 13.7477 6.5 13.7477C6.27992 13.7477 6.06932 13.7884 5.87531 13.8625C5.72505 13.92 5.64993 13.9487 5.5968 14.0433C5.54368 14.1378 5.56166 14.2355 5.59762 14.4308L6.03655 16.8155Z',
  d13: 'M9.68781 2.50263C10.0084 1.46964 11.1693 1.00614 12.1277 1.37635C12.2835 1.43655 12.4246 1.52653 12.5447 1.60899C12.6671 1.693 12.8162 1.80378 12.9923 1.93473L13.0039 1.94334C13.4879 2.30303 13.7738 2.7863 13.8097 3.39372C13.8699 3.36035 13.9333 3.3295 13.9993 3.30399C14.9577 2.93378 16.1186 3.39728 16.4392 4.43027C16.4907 4.59621 16.5034 4.76707 16.5092 4.9068C16.5152 5.05019 16.5152 5.22931 16.5152 5.43745V5.73599C16.542 5.73172 16.5684 5.7278 16.5943 5.72414L16.6081 5.72219C16.8319 5.69052 17.0197 5.66394 17.1698 5.64815C17.3166 5.63271 17.4835 5.62066 17.6475 5.64051C18.6799 5.76547 19.4792 6.73657 19.1914 7.81545C19.1469 7.98233 19.0669 8.1344 18.9976 8.25656C18.9259 8.38278 18.8299 8.53727 18.7176 8.71802L16.7699 11.8523C16.5513 12.2041 16.0888 12.312 15.737 12.0934C15.3852 11.8748 15.2772 11.4124 15.4959 11.0605L17.4356 7.93911C17.5581 7.74196 17.638 7.61321 17.693 7.51628C17.7267 7.45674 17.7405 7.42716 17.7446 7.41823C17.7556 7.36579 17.745 7.3119 17.7059 7.25865C17.6631 7.20038 17.5846 7.1446 17.4701 7.12999C17.4701 7.13022 17.435 7.12854 17.3267 7.13992C17.2066 7.15256 17.0457 7.17521 16.8045 7.20934C16.6213 7.23526 16.5461 7.26138 16.5076 7.28137C16.4876 7.2918 16.4545 7.31046 16.4027 7.39363C16.4025 7.39391 16.4029 7.39335 16.4027 7.39363L13.9636 11.3481C13.7462 11.7006 13.2841 11.8101 12.9315 11.5927C12.7233 11.4642 12.5999 11.2505 12.5785 11.0244C12.4164 10.8868 12.3135 10.6815 12.3135 10.4522V5.45293C12.3135 5.44508 12.3135 5.43716 12.3135 5.42917C12.3135 5.41294 12.3134 5.39643 12.3135 5.37967V3.52529C12.3135 3.3626 12.2736 3.26945 12.1091 3.14722C11.9183 3.00536 11.7921 2.91173 11.6958 2.84568C11.616 2.79086 11.5852 2.77533 11.5831 2.77404C11.4806 2.73571 11.371 2.74238 11.2802 2.78294C11.194 2.82141 11.1451 2.87977 11.1241 2.93638C11.1228 2.94648 11.1191 2.97752 11.1165 3.0412C11.112 3.14971 11.1118 3.2973 11.1118 3.52529V5.37977C11.1119 5.39649 11.1119 5.41298 11.1118 5.42917C11.1118 5.43716 11.1118 5.44508 11.1118 5.45293V7.07994C11.1118 7.49416 10.776 7.82994 10.3618 7.82994C9.94761 7.82994 9.61182 7.49416 9.61182 7.07994V5.45293C9.61182 5.39064 9.61178 5.35643 9.61118 5.33064C9.61088 5.31757 9.6105 5.31123 9.61035 5.30911C9.61035 5.30911 9.61035 5.30911 9.61035 5.30911C9.60715 5.2838 9.59968 5.26304 9.57811 5.23328C9.55099 5.19588 9.50084 5.14427 9.40745 5.07486C9.21658 4.933 9.0904 4.83937 8.99417 4.77332C8.9143 4.71849 8.88352 4.70296 8.88141 4.70168C8.77892 4.66335 8.66931 4.67002 8.57849 4.71058C8.49234 4.74905 8.44343 4.80741 8.42243 4.86402C8.42116 4.87412 8.41744 4.90517 8.4148 4.96884C8.41031 5.07734 8.41016 5.22494 8.41016 5.45293V8.44434C8.41016 8.85855 8.07437 9.19434 7.66016 9.19434C7.24594 9.19434 6.91016 8.85855 6.91016 8.44434L6.91016 5.43743C6.91015 5.2293 6.91015 5.05019 6.91608 4.90681C6.92187 4.76708 6.93465 4.59621 6.98614 4.43027C7.30669 3.39728 8.46764 2.93378 9.42599 3.30399C9.49063 3.32897 9.55274 3.35906 9.61186 3.39162C9.61204 3.2333 9.61297 3.09465 9.61775 2.97917C9.62354 2.83944 9.63632 2.66857 9.68781 2.50263ZM13.8135 8.73414L15.0152 6.78591V5.45293C15.0152 5.22494 15.015 5.07735 15.0105 4.96884C15.0079 4.90517 15.0042 4.87412 15.0029 4.86402C14.9819 4.80741 14.933 4.74905 14.8468 4.71058C14.756 4.67002 14.6464 4.66335 14.5439 4.70168C14.5418 4.70296 14.511 4.71849 14.4311 4.77332C14.3349 4.83937 14.2087 4.933 14.0179 5.07486C13.9245 5.14427 13.8743 5.19588 13.8472 5.23328C13.8256 5.26304 13.8182 5.2838 13.815 5.30911C13.8148 5.31122 13.8144 5.31757 13.8141 5.33064C13.8135 5.35643 13.8135 5.39064 13.8135 5.45293V8.73414Z',
  d14: 'M6.03561 16.8177C6.07161 17.0133 6.08961 17.1111 6.17302 17.1805C6.25644 17.25 6.33732 17.25 6.49906 17.25C7.46556 17.25 8.24906 16.4665 8.24906 15.5C8.24906 14.5335 7.46556 13.75 6.49906 13.75C6.27898 13.75 6.06838 13.7906 5.87437 13.8648C5.72411 13.9222 5.64899 13.9509 5.59586 14.0455C5.54274 14.1401 5.56072 14.2377 5.59668 14.4331L6.03561 16.8177Z',
  d15: 'M12.1277 1.37635C11.1693 1.00614 10.0084 1.46964 9.68781 2.50263C9.63632 2.66857 9.62354 2.83944 9.61775 2.97917C9.61297 3.09465 9.61204 3.2333 9.61186 3.39162C9.55274 3.35906 9.49063 3.32897 9.42599 3.30399C8.46764 2.93378 7.30669 3.39728 6.98614 4.43027C6.93465 4.59621 6.92187 4.76708 6.91608 4.90681C6.91015 5.05019 6.91015 5.22929 6.91016 5.43741V5.43743V7.43482C7.01463 7.48353 7.12303 7.54209 7.2346 7.61207C7.5244 7.77365 8.00349 8.03978 8.41016 8.2634V5.45293C8.41016 5.22494 8.41031 5.07734 8.4148 4.96884C8.41744 4.90517 8.42116 4.87412 8.42243 4.86402C8.44343 4.80741 8.49234 4.74905 8.57849 4.71058C8.66931 4.67002 8.77892 4.66335 8.88141 4.70168C8.88162 4.70181 8.88211 4.70207 8.88289 4.7025C8.89007 4.70641 8.92218 4.7239 8.99417 4.77332C9.0904 4.83937 9.21658 4.933 9.40745 5.07486C9.50084 5.14427 9.55099 5.19588 9.57811 5.23328C9.59968 5.26304 9.60715 5.2838 9.61035 5.30911C9.6105 5.31123 9.61088 5.31757 9.61118 5.33064C9.61178 5.35643 9.61182 5.39064 9.61182 5.45293V7.07994C9.61182 7.49416 9.94761 7.82994 10.3618 7.82994C10.776 7.82994 11.1118 7.49416 11.1118 7.07994V5.45293L11.1118 5.42917L11.1118 5.37977V3.52529C11.1118 3.2973 11.112 3.14971 11.1165 3.0412C11.1191 2.97752 11.1228 2.94648 11.1241 2.93638C11.1451 2.87977 11.194 2.82141 11.2802 2.78294C11.371 2.74238 11.4806 2.73571 11.5831 2.77404C11.5833 2.77417 11.5838 2.77443 11.5846 2.77486C11.5917 2.77877 11.6238 2.79626 11.6958 2.84568C11.7921 2.91173 11.9183 3.00536 12.1091 3.14722C12.2736 3.26945 12.3135 3.3626 12.3135 3.52529V5.37967L12.3135 5.42917L12.3135 5.45293V9.9993C12.9863 10.2147 13.7058 10.4001 14.4662 10.5332L16.4027 7.39363C16.4545 7.31046 16.4876 7.2918 16.5076 7.28137C16.5461 7.26138 16.6213 7.23526 16.8045 7.20934C17.0457 7.17521 17.2066 7.15256 17.3267 7.13992C17.4216 7.12994 17.4603 7.13 17.4684 7.13002C17.4696 7.13002 17.4701 7.13002 17.4701 7.12999C17.5846 7.1446 17.6631 7.20038 17.7059 7.25865C17.745 7.3119 17.7556 7.36579 17.7446 7.41823C17.7405 7.42716 17.7267 7.45674 17.693 7.51628C17.638 7.61321 17.5581 7.74196 17.4356 7.93911L15.7105 10.7152C16.0515 10.7652 16.3517 10.8163 16.6048 10.8785C16.815 10.9302 17.0324 10.998 17.236 11.1022L18.7176 8.71802C18.8299 8.53727 18.9259 8.38278 18.9976 8.25656C19.0669 8.1344 19.1469 7.98233 19.1914 7.81545C19.4792 6.73657 18.6799 5.76547 17.6475 5.64051C17.4835 5.62066 17.3166 5.63271 17.1698 5.64815C17.0197 5.66394 16.8319 5.69051 16.6081 5.72218L16.6081 5.72219L16.5943 5.72414C16.5684 5.7278 16.542 5.73172 16.5152 5.73599V5.43745C16.5152 5.22931 16.5152 5.05019 16.5092 4.9068C16.5034 4.76707 16.4907 4.59621 16.4392 4.43027C16.1186 3.39728 14.9577 2.93378 13.9993 3.30399C13.9333 3.3295 13.8699 3.36035 13.8097 3.39372C13.7738 2.7863 13.4879 2.30303 13.0039 1.94334L12.9923 1.93473L12.9923 1.93472C12.8161 1.80377 12.6671 1.69299 12.5447 1.60898C12.4246 1.52653 12.2835 1.43655 12.1277 1.37635ZM15.0152 6.78591L13.8135 8.73414V5.45293C13.8135 5.39064 13.8135 5.35643 13.8141 5.33064C13.8144 5.31757 13.8148 5.31122 13.815 5.30911C13.8182 5.2838 13.8256 5.26304 13.8472 5.23328C13.8743 5.19588 13.9245 5.14427 14.0179 5.07486C14.2087 4.933 14.3349 4.83937 14.4311 4.77332C14.5031 4.72389 14.5353 4.7064 14.5424 4.7025C14.5432 4.70207 14.5437 4.70181 14.5439 4.70168C14.6464 4.66335 14.756 4.67002 14.8468 4.71058C14.933 4.74905 14.9819 4.80741 15.0029 4.86402C15.0042 4.87412 15.0079 4.90517 15.0105 4.96884C15.015 5.07735 15.0152 5.22494 15.0152 5.45293V6.78591Z',
  d16: 'M7.49369 18C8.87789 18 10 16.8807 10 15.5C10 14.1193 8.87789 13 7.49369 13C7.14066 13 6.80467 13.0728 6.5 13.2042',
  d17: 'M7.5 8.5L8 3.5L10.6 5M10 9.5L11 2L13.5 3L12.5 10.5M13 10.5L15.5 6H18.5L15.5 11.5',
  d18: 'M17.5 12.5L5.5 8L8.5 22L17.5 12.5Z',
  d19: 'M8.25027 2.75L7.89453 6.30736L12.9562 8.20549L13.7503 2.25L11.2503 1.25L10.8503 4.25L8.25027 2.75Z',
  d20: 'M16.428 9.50743L13.9097 8.56304L15.7503 5.25H18.7503L16.428 9.50743Z',
  d21: 'M6.26336 7.29777C6.00666 7.2015 5.71789 7.25297 5.51026 7.432C5.30263 7.61103 5.20922 7.88909 5.26667 8.15716L6.2528 12.7591C6.75737 12.4368 7.35687 12.25 8 12.25C9.79493 12.25 11.25 13.7051 11.25 15.5C11.25 17.2949 9.79493 18.75 8 18.75C7.84015 18.75 7.68299 18.7385 7.52931 18.7162L8.26667 22.1572C8.325 22.4294 8.52931 22.6469 8.79734 22.7221C9.06537 22.7973 9.35302 22.7179 9.54448 22.5158L18.5445 13.0158C18.7174 12.8333 18.7873 12.5763 18.7308 12.3313C18.6743 12.0864 18.4988 11.886 18.2634 11.7978L6.26336 7.29777Z',
  d22: 'M7.1704 17.0413C7.41729 17.1744 7.69982 17.25 8 17.25C8.9665 17.25 9.75 16.4665 9.75 15.5C9.75 14.5335 8.9665 13.75 8 13.75C7.43453 13.75 6.9317 14.0182 6.61178 14.4343L7.1704 17.0413Z',
};

export const IconFrenchFries01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-stroke-rounded IconFrenchFries01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFrenchFries01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-duotone-rounded IconFrenchFries01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
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

export const IconFrenchFries01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-twotone-rounded IconFrenchFries01TwotoneRounded"
    >
      <path 
        d={d.d9} 
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
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFrenchFries01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-solid-rounded IconFrenchFries01SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconFrenchFries01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-bulk-rounded IconFrenchFries01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFrenchFries01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-stroke-sharp IconFrenchFries01StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFrenchFries01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="french-fries-01-solid-sharp IconFrenchFries01SolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfFrenchFries01: TheIconSelfPack = {
  name: 'FrenchFries01',
  StrokeRounded: IconFrenchFries01StrokeRounded,
  DuotoneRounded: IconFrenchFries01DuotoneRounded,
  TwotoneRounded: IconFrenchFries01TwotoneRounded,
  SolidRounded: IconFrenchFries01SolidRounded,
  BulkRounded: IconFrenchFries01BulkRounded,
  StrokeSharp: IconFrenchFries01StrokeSharp,
  SolidSharp: IconFrenchFries01SolidSharp,
};
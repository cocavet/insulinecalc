import _ from 'lodash';
import { trainingModel } from '.';

const insulineDoses = [[13], [15], [13], [7], [10], [7], [13], [13], [11], [14], [12], [10], [14], [10], [7], [13], [8], [8], [11], [10], [9], [15], [12], [16], [18], [13], [12], [15], [13]];
const simulatedMeals = [[0, 36, 182, 84, 1.2, 3, 2, 125, 338, 655.3379999989943, 25.992449999999998, 26.980450000000005, 83.81464499973269, 339.6499999996483], [0, 36, 182, 84, 1.2, 3, 2, 125, 338, 877.2375624986119, 41.290818437470996, 33.43633718737875, 106.71757968742907, 714.7156249997603], [0, 36, 182, 84, 1.2, 3, 2, 125, 338, 586.2940432872344, 25.742848001747966, 17.851625128180938, 84.77532378211485, 504.462619055219], [0, 36, 182, 84, 1.2, 3, 58, 68, 153, 470.3677553558411, 18.311355564375003, 15.898544176875, 62.12011278926937, 279.5564784305283], [0, 36, 182, 84, 1.2, 3, 58, 68, 153, 859.11746600866, 31.50058866878014, 35.48504800863931, 99.29212313818209, 413.07347021409424], [0, 36, 182, 84, 1.2, 3, 58, 68, 153, 606.7483479144079, 23.56716124929848, 27.356701252381033, 68.032886424944, 260.9612476237482], [0, 36, 182, 84, 1.2, 3, 57, 143, 327, 878.8474809736464, 25.479188017299478, 27.855165071940107, 83.05170205158855, 759.475116223485], [0, 36, 182, 84, 1.2, 3, 57, 143, 327, 594.09347083077, 21.02153955605274, 20.384127198919987, 87.05226346752193, 562.6108309374287], [0, 36, 182, 84, 1.2, 3, 11, 115, 304, 504.1299999997089, 16.04431874999991, 20.207643750000003, 73.04973437492485, 202.15472788513375], [0, 36, 182, 84, 1.2, 3, 11, 115, 304, 831.9394363941975, 30.078702313402125, 35.20772820430699, 97.61268582670702, 498.3670831761837], [0, 36, 182, 84, 1.2, 3, 11, 115, 304, 699.2632734618971, 19.942149999999998, 32.64876532374402, 81.88015, 298.824465323744], [0, 36, 182, 84, 1.2, 3, 52, 184, 257, 414.79587593800363, 16.512530521889392, 13.936673368795455, 66.27891135939306, 814.1693733238537], [0, 36, 182, 84, 1.2, 3, 52, 184, 257, 840.5612981737872, 35.46896594947176, 32.26195713412907, 106.74534816972461, 523.3512174998145], [0, 36, 182, 84, 1.2, 3, 52, 184, 257, 540.6693208910607, 17.976421670783385, 25.27288915034254, 64.10728997895242, 474.5010915028085], [0, 36, 182, 84, 1.2, 3, 74, 98, 156, 529.269166661258, 21.792866666483107, 18.798933332982354, 54.325816666414966, 787.3333333324373], [0, 36, 182, 84, 1.2, 3, 74, 98, 156, 1054.8601015125003, 38.50266139256251, 46.68277011218751, 124.1619272910625, 451.36574548241674], [0, 36, 182, 84, 1.2, 3, 74, 98, 156, 520.8195000000001, 19.042849531250006, 19.33138203125, 65.14568468750001, 378.9210947441495], [0, 36, 182, 84, 1.2, 3, 28, 127, 216, 436.91621967184665, 16.655993479999548, 15.602058329452815, 60.52759414506923, 345.47373255198517], [0, 36, 182, 84, 1.2, 3, 28, 127, 216, 843.3327946124999, 36.962116767984384, 34.66917987796875, 90.69124367765625, 286.15785046875], [0, 36, 182, 84, 1.2, 3, 28, 127, 216, 698.033620929984, 25.728306727214484, 27.591869258540864, 83.08460343952673, 540.6213210203696], [0, 36, 182, 84, 1.2, 3, 47, 167, 242, 470.3677553558411, 18.311355564375003, 15.898544176875, 62.12011278926937, 279.5564784305283], [0, 36, 182, 84, 1.2, 3, 47, 167, 242, 993.8613074218338, 42.882415558591475, 31.498663992186813, 133.78502576170877, 487.2454437216947], [0, 36, 182, 84, 1.2, 3, 47, 167, 242, 640.622523811525, 16.792463017432247, 20.2236909101965, 94.34316376021127, 247.59902230682], [0, 36, 182, 84, 1.2, 3, 53, 117, 346, 682.9117086041732, 23.796021101954796, 27.399659856288334, 96.61945336083143, 216.59596668850418], [0, 36, 182, 84, 1.2, 3, 53, 117, 346, 857.012, 31.692525000000003, 24.286050000000003, 123.60375000000002, 576.4132348986016], [0, 36, 182, 84, 1.2, 3, 53, 117, 346, 566.2672417082828, 26.53775197249929, 24.822752076561937, 66.4203676996709, 475.25586770809525], [0, 36, 182, 84, 1.2, 3, 43, 128, 328, 583.1201164781917, 20.071932794557252, 26.387651310696505, 70.43079588154457, 386.0281008985629], [0, 36, 182, 84, 1.2, 3, 43, 128, 328, 1026.0044939404168, 44.72202721057718, 50.36060202457209, 99.73877890301593, 497.72626723758935], [0, 36, 182, 84, 1.2, 3, 43, 128, 328, 584.2257499997088, 22.635577499999908, 26.41433, 73.68866812492485, 296.68124999992335]];

trainingModel(simulatedMeals, insulineDoses, 'aaa');

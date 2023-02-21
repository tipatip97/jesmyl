import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import { UserMessage } from "../../../../index/Index.model";
import { IExportableUser, UserVisits } from "../../Admin.model";
import { setCurrentUser, updateUserList, updateUserVisits } from "../../Admin.store";
import adminStorage from "../../adminStorage";
import useAdminNav from "../../useAdminNav";
import { User } from "./User";

let localUsers: User[] = [];
let currentUser: User | und;

const userLoginSelector = (state: RootState) => state.admin.currentUser;
const visitsSelector = (state: RootState) => state.admin.userVisits;
const userMessagesSelector = (state: RootState) => state.index.userMessages;

export default function useUsers() {
    const dispatch = useDispatch();
    const userLogin = useSelector(userLoginSelector);
    const visits = useSelector(visitsSelector);
    const userMessages = useSelector(userMessagesSelector);
    const { goTo } = useAdminNav();
    const now = Date.now();

    if (!currentUser) currentUser = localUsers.find(user => user.login === userLogin);

    const sortUsers = () => {
        localUsers.sort((a, b) => visits[b.login] - visits[a.login]);
    };

    const ret = {
        users: localUsers,
        currentUser,
        visits,
        getMessages: (user: User): UserMessage[] => {
            return userMessages.filter((message) => message.login === user.login);
        },
        updateUserList: (list: IExportableUser[]) => {
            localUsers = updateUsers(list);
            sortUsers();
            dispatch(updateUserList(list));
        },
        updateVisits: (visits: UserVisits) => {
            dispatch(updateUserVisits(visits));
            sortUsers();
        },
        navToUser: (user: User) => {
            goTo('user');
            ret.setCurrentUser(user);
        },
        setCurrentUser: (user: User) => {
            currentUser = user;
            dispatch(setCurrentUser(user.login));
            adminStorage.set('currentUser', user.login);
        },
        visit: (user: User) => {
            const visited = visits[user.login];
            const diff = now - visited;

            return diff < 60000
                ? 'В сети'
                : diff > inMonth * 3
                    ? 'Больше 3 мес.'
                    : diff > inMonth
                        ? 'Дольше мес.'
                        : diff > inWeek * 3
                            ? 'Дольше 3 нед.'
                            : diff > inWeek
                                ? 'Дольше нед.'
                                : diff > inDay * 3
                                    ? 'Дольше 3д.'
                                    : diff > inDay
                                        ? 'Дольше суток'
                                        : diff > inHour * 17
                                            ? 'Ок. 17ч. назад'
                                            : diff > inHour * 12
                                                ? 'Полдня'
                                                : diff > inHour * 5
                                                    ? 'Дольше 5 ч.'
                                                    : diff > inHour * 3
                                                        ? 'Дольше 3 ч.'
                                                        : diff > inHour
                                                            ? 'Около часа'
                                                            : diff > inMin * 30
                                                                ? 'Полчаса'
                                                                : diff > inMin * 5
                                                                    ? 'Недавно'
                                                                    : 'Только что';
        },
    };

    return ret;
}

const updateUsers = (val: IExportableUser[]) => localUsers = val.map(user => new User(user));
adminStorage.listen('userList', 'main', updateUsers);


const inSec = 1000;
const inMin = inSec * 60;
const inHour = inMin * 60;
const inDay = inHour * 24;
const inWeek = inDay * 7;
const inMonth = inDay * 30;
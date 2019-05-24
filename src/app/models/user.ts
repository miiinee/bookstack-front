export class User {
    uid: string;
    email: string;
    password: string;
    username: string;
    intro: string;
    addDt: string;
    modDt: string;
    useYn: boolean; // whether user delete or not
    openTo: number; //0: 전체공개, 1: 팔로워만 공개 3: 비공개
    delDt: string;
}
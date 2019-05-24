//C.R.D only
// + history
export class Following {
    uid: string;
    userUid: string; // user가
    fUserUid: string; // fUser를 following
    addDt: string;
    // follower: user.userUid === following.fUserUid, following: user.userUid === floowing.userUid
}
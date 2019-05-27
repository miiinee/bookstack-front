import { Book } from '../../models/book';
import { Bookmark } from '../../models/bookmark';
import { User } from '../../models/user';

export const BOOKS: Book[] = [
    {
        "uid" : "b0001",
        "title" : "개인주의자 선언 (판사 문유석의 일상유감)",
        "author" : "문유석",
        "publisher" : "문학동네",
        "thumbnail" : "https://bookthumb-phinf.pstatic.net/cover/095/957/09595780.jpg?type=m1&udate=20190406",
        "rating" : "4",
        "review" : "review1",
        "phrase" : "『개인주의자 선언』은 현직 부장<b>판사</b>인 문유석이 진단한 한국사회의 국가주의적, 집단주의적 사회 문화를 신랄하게 파헤친 책이다.",
        "addUserUid" : "u0001",
        "addDt" : "2018-08-20 15:44:05",
        "modDt" : "",
        "username" : "",
        "isFavorite" : false,
        "isBookmark" : false,
        "isSelected" : false
    },
    {
        "uid" : "b0002",
        "title" : "판사유감 (현직 부장판사가 말하는 법과 사람 그리고 정의)",
        "author" : "문유석",
        "publisher" : "21세기북스",
        "thumbnail" : "https://audio-phinf.pstatic.net/20190408_139/1554688255773cCEU4_JPEG/%C6%C7%BB%E7%C0%AF%B0%A8.jpg",
        "rating" : "3",
        "review" : "review2",
        "phrase" : "“나는 단 한 번도 용서받아 본 적이 없습니다!” \n피고인의 그 말 한마디가 저에게 더 깊은 고민을 안겨 주고 말았습니다.",
        "addUserUid" : "u0002",
        "addDt" : "2018-08-20 15:44:05",
        "modDt" : "",
        "username" : "",
        "isFavorite" : false,
        "isBookmark" : false,
        "isSelected" : false
    },
    {
        "uid" : "b0003",
        "title" : "백설공주에게 죽음을",
        "author" : "넬레 노이하우스",
        "publisher" : "북로드",
        "thumbnail" : "https://bookthumb-phinf.pstatic.net/cover/064/605/06460584.jpg?type=m1&udate=20170614",
        "rating" : "4",
        "review" : "100자를 적어볼까 합니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이보전하세. 남산 위에 저 소나무 철갑을",
        "phrase" : "이 시리즈로 인기 작가 반열에 올라선 <b>넬레</b> 노이하우스는 그 네 번째 작품인 『백설공주에게 죽음을』을 통해 자신이 사는 독일의 작은 마을 타우누스를 배경으로 긴장감 있고 밀도 높은 미스터리를 그려낸다.",
        "addUserUid" : "u0003",
        "addDt" : "2018-08-20 15:44:05",
        "modDt" : "2019-05-23 10:07:57",
        "username" : "",
        "isFavorite" : false,
        "isBookmark" : false,
        "isSelected" : false
    },
    {
        "uid" : "b0004",
        "title" : "너무 친한 친구들",
        "author" : "넬레 노이하우스",
        "publisher" : "북로드",
        "thumbnail" : "https://bookthumb-phinf.pstatic.net/cover/066/547/06654722.jpg?type=m1&udate=20190212",
        "rating" : "3",
        "review" : "review4",
        "phrase" : "채워지지 않는 욕망이 가져온 비극의 끝!<b>넬레</b> 노이하우스의 미스터리 소설 &lt;백설공주에게 죽음을&gt;의 전작 『너무 친한 친구들』",
        "addUserUid" : "u0001",
        "addDt" : "2018-08-20 15:44:05",
        "modDt" : "",
        "username" : "",
        "isFavorite" : false,
        "isBookmark" : false,
        "isSelected" : false
    },
    {
        "uid" : "b0005",
        "title" : "깊은 상처",
        "author" : "넬레 노이하우스",
        "publisher" : "북로드",
        "thumbnail" : "https://bookthumb-phinf.pstatic.net/cover/070/599/07059975.jpg?type=m1&udate=20190212",
        "rating" : "2",
        "review" : "let me write a review. this is the first time to write a comment about book. It`s amazing book ever.",
        "phrase" : "한 노인의 기묘한 죽음에서부터 시작된, 독일의 근현대사의 작가적 고찰이 녹아 있는 독일 미스터리의 대표작!",
        "addUserUid" : "u0004",
        "addDt" : "2018-08-20 15:44:05",
        "modDt" : "",
        "username" : "",
        "isFavorite" : false,
        "isBookmark" : false,
        "isSelected" : false
    },
    {
        "uid" : "b0006",
        "title" : "Dog Man #6 : Brawl of the Wild (From the Creator of Captain Underpants)",
        "author" : "Dav Pilkey",
        "publisher" : "Graphix",
        "thumbnail" : "https://bookthumb-phinf.pstatic.net/cover/137/778/13777897.jpg?type=m1&udate=20181225",
        "rating" : "5",
        "review" : "really nice for jinwoo",
        "phrase" : "Is Dog Man bad to the bone? The heroic hound is sent to the pound for a crime he didn't commit! While his pals work to prove his innocence, Dog Man struggles to find his place among dogs and people.",
        "addUserUid" : "u0004",
        "addDt" : "2018-08-20 15:44:05",
        "modDt" : "2019-05-23 10:07:57",
        "username" : "",
        "isFavorite" : false,
        "isBookmark" : false,
        "isSelected" : false
    }

];

/* uid: string;
email: string;
password: string;
username: string;
intro: string;
addDt: string;
modDt: string;
useYn: boolean; // whether user delete or not
openTo: number; //0: 전체공개, 1: 팔로워만 공개 3: 비공개
delDt: string; */
export const USERS: User[] = [
    {
        "uid" : "u0001",
        "email" : "psm@bookstack.com",
        "password" : "1234",
        "username" : "miiin",
        "intro" : "박성민입니다.",
        "addDt" : "2019-05-23 10:07:57",
        "modDt" : "",
        "useYn" : true,
        "openTo" : 0,
        "delDt" : ""
    },
    {
        "uid" : "u0002",
        "email" : "pma@bookstack.com",
        "password" : "1234",
        "username" : "minapark",
        "intro" : "박민아입니다.",
        "addDt" : "2019-05-20 10:07:57",
        "modDt" : "",
        "useYn" : true,
        "openTo" : 0,
        "delDt" : ""
    },
    {
        "uid" : "u0003",
        "email" : "hsh@bookstack.com",
        "password" : "1234",
        "username" : "sanghuhan",
        "intro" : "한상후입니다.",
        "addDt" : "2019-05-24 10:07:57",
        "modDt" : "",
        "useYn" : true,
        "openTo" : 0,
        "delDt" : ""
    },
    {
        "uid" : "u0004",
        "email" : "hyj@bookstack.com",
        "password" : "1234",
        "username" : "youngjiheo",
        "intro" : "허영지입니다.",
        "addDt" : "2019-05-13 10:07:57",
        "modDt" : "",
        "useYn" : true,
        "openTo" : 0,
        "delDt" : ""
    }
];

/* uid: string;
bookUid: string;
userUid: string;
addDt: string; */
export const BOOKMARKS: Bookmark[] = [
    {
        "uid" : "m0001",
        "bookUid" : "b0002",
        "userUid" : "u0001",
        "addDt" : "2019-05-24 10:07:57"
    },
    {
        "uid" : "m0002",
        "bookUid" : "b0003",
        "userUid" : "u0001",
        "addDt" : "2019-05-24 10:07:57"
    },
    {
        "uid" : "m0003",
        "bookUid" : "b0005",
        "userUid" : "u0001",
        "addDt" : "2019-05-24 10:07:57"
    },
    {
        "uid" : "m0004",
        "bookUid" : "b0002",
        "userUid" : "u0004",
        "addDt" : "2019-05-24 10:07:57"
    },
    {
        "uid" : "m0005",
        "bookUid" : "b0003",
        "userUid" : "u0003",
        "addDt" : "2019-05-24 10:07:57"
    },
    {
        "uid" : "m0006",
        "bookUid" : "b0005",
        "userUid" : "u0002",
        "addDt" : "2019-05-24 10:07:57"
    }
];
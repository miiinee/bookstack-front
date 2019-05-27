export class Book {
    uid: string;
    title: string;
    author: string;
    publisher: string;
    thumbnail: string;
    rating: string;
    review: string;
    phrase: string;
    addUserUid: string;
    addDt: string;
    modDt: string;

    /*==========non-member variable==========*/
    username: string;
    isFavorite: boolean;
    isBookmark: boolean;
    isSelected: boolean;
}
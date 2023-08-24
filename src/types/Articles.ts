//  "id": 1,
//         "title": "test",
//         "English_title": "tesf",
//         "comment_admin": null,
//         "comment_admin_En": null,
//         "information": "",
//         "information_En": "",
//         "create": "2023-08-17T10:39:48.437809",
//         "update": "2023-08-17T10:39:48.437840",
//         "Show_Hide": true,
//         "image_thumbnail": "https://ba

export interface Article {
  id: number;
  title: string;
  English_title: string;
  comment_admin: string;
  comment_admin_En: string;
  information: string;
  information_En: string;
  Show_Hide: boolean;
  image_thumbnail: string;
}

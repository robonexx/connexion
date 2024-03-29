export interface PostItemProps {
    _id: string;
    createdAt: string;
    title: string;
    tags?: string[];
    body: string;
    image?: string;
    author: {
      _id: string;
      name: string;
    }
    link?: string;
    category?: string;
  }
export type Gallery = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  description: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  tag: string[];
};

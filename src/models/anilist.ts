export interface AnimeSearchResult {
  Page: Page;
}

export interface Page {
  media: Media[];
}

export interface Media {
  id: number;
  averageScore: number;
  season: string;
  seasonYear: number;
  description: string;
  title: Title;
  coverImage: MediaCoverImage;
}

interface Title {
  english: string;
  romaji: string;
}

interface MediaCoverImage {
  medium: string;
  large: string;
}

export interface AnimeSearchResult {
  Page: Page;
}

export interface Page {
  media: Media[];
}

export interface Media {
  id: number;
  title: Title;
  coverImage: MediaCoverImage;
  averageScore: number;
  season: string;
  seasonYear: number;
}

interface Title {
  english: string;
  romaji: string;
}

interface MediaCoverImage {
  medium: string;
  large: string;
}

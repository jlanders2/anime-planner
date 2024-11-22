export interface AnimeSearchResult {
  Page: Page;
}

export interface Page {
  media: Media[];
}

export interface Media {
  id: number;
  title: Title;
}

export interface Title {
  english: string;
  romaji: string;
}

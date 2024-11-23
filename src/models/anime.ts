import { Media } from "./anilist";

export class Anime {
  id: number | undefined;
  title: string | undefined;
  largeArtworkUrl: string | undefined;
  mediumArtworkUrl: string | undefined;
  averageScore: number | undefined;
  season: string | undefined;
  seasonYear: number | undefined;
  description: string | undefined;

  constructor(media?: Media) {
    if (media) {
      this.id = media.id;
      this.title = media.title.english || media.title.romaji || "";
      this.mediumArtworkUrl = media.coverImage.medium;
      this.largeArtworkUrl = media.coverImage.large;
      this.averageScore = media.averageScore;
      this.season = media.season;
      this.seasonYear = media.seasonYear;
      this.description = media.description;
    }
  }
}

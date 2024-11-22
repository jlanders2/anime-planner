import { Media } from "./anilist";

export class Anime {
  id: number | undefined;
  title: string | undefined;

  constructor(media?: Media) {
    if (media) {
      this.id = media.id;
      this.title = media.title.english || media.title.romaji || "";
    }
  }
}

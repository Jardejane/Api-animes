export class CreateAnimeDto {
  /**
   * The image will be used for anything (Profile, Home Page, etc) that needs to be displayed
   * connected anime information.
   * @example 'https://jornalismorio.espm.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-13-at-15.22.30-768x432.jpeg'
   */
  image: string;

  /**
   * The name will be used for anything (Profile, Home Page, etc) that needs to be displayed
   * connected anime information.
   * @example Knights of the zodic
   */
  name: string;

  /**
   * The character will be used for anything (Profile, Home Page, etc) that needs to be displayed
   * connected anime information.
   * @example Ikki de Fênix
   */
  character: string;

  /**
   * The number will be used for anything (Profile, Home Page, etc) that needs to be displayed
   * connected anime information.
   * @example 1994
   */
  year: number;

  /**
   * The description will be used for anything (Profile, Home Page, etc) that needs to be displayed
   * connected anime information.
   * @example Saint Seiya (original name of the series) tells the story of a group of five young warriors whose job was to protect Saori Kido, the reincarnation of Athena, the Greek goddess of wisdom. To fight, they use the inner energy and the cosmos, and their armors that are inspired by constellations and Greek mythology.
   */
  description: string;
}

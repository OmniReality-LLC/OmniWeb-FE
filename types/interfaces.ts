export interface Card {
    id: string;
    title: string;
  }

  export interface Carousel {
    cards: Card[];
  }

  export interface Section {
    id: string;
    title: string;
    carousel?: Carousel;

  }

  export interface Page {
    id: string;
    sections: Section[];
  }

  export interface Pages {
    pages: Page[];
  }

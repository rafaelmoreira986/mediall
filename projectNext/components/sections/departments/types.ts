export interface ModalSection {
  title: string;
  body: string;
}

export interface Department {
  img: string;
  title: string;
  items: string[];
  cardText?: string;
  modalContent?: {
    subtitle: string;
    description: string;
    sections: ModalSection[];
  };
}

export interface ModalSection {
  title: string;
  body: string;
}

export interface Department {
  img: string;
  imgPosition?: string;
  imgFit?: string;
  title: string;
  items: string[];
  cardText?: string;
  modalContent?: {
    subtitle: string;
    description: string;
    sections: ModalSection[];
  };
}
